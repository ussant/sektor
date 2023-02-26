import * as yup from "yup";
import bcrypt from "bcryptjs";
import pkg from "jsonwebtoken";
import {Message, Token} from "../types";
import {User} from "../models/user.model";
import {jwtConfig} from "../config/jwt.config";

const { sign } = pkg;

const signUpSchema = yup.object().shape({
    firstName: yup.string().required().max(255),
    password: yup.string().required().min(6).max(255),
    email: yup.string().max(255).email()
});

const loginSchema = yup.object().shape({
    password: yup.string().required().min(6).max(255),
    email: yup.string().max(255).email()
});

export class AuthService {
    private async findOne(input: {[key:string]: string}) {
        return await User.findOne({where: input});
    }
    async signUp(firstName: string, email: string, password: string): Promise<Message | undefined> {
        try {
            await signUpSchema.validate({firstName, password, email}, {abortEarly: false});

            const user = await this.findOne({first_name: firstName});

            if (user) {
                return {message: "user already registered"};
            }

            const hashedPassword = bcrypt.hashSync(password, 7);

            await User.create({
                first_name: firstName,
                email,
                hashed_password: hashedPassword,
                registration_date: new Date()
            });

            return {message: "user successfully registered"};
        } catch (err) {
            console.error("error in [signUp]", err);
        }
    }
    async login(email: string, password: string): Promise<Token | undefined> {
        try {
            await loginSchema.validate({email, password}, {abortEarly: false});

            const user = await this.findOne({email});

            if (!user) {
                throw Error("user does not exist");
            }

            const validatePass = bcrypt.compareSync(password, user?.dataValues.hashed_password);

            if (!validatePass) {
                throw Error("invalid data");
            }

            const accessToken = sign(
                { id: user.dataValues.id, email: user.dataValues.email },
                jwtConfig.AT_SECRET,
                {
                    expiresIn: "30min"
                }
            );

            return {token: accessToken};
        } catch (err) {
            console.error("error in [login]", err);
        }
    }
}
