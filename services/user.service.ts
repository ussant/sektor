import fs from "fs";
import {User} from "../models/user.model";
import {EditUserInput, UserType} from "../types";
import {authenticateJWT} from "../middlewares/auth.jwt";

const MAXIMUM_IMAGE_SIZE = 10;
const USER_COUNT_PER_PAGE = 10;
const ONE_MB_IN_BYTES = 1000000;
const allowedPhotoExtensions = ["png", "jpg"];

export class UserService {
    private async findOne(input: {[key:string]: number}) {
        return await User.findOne({where: input});
    }

    async getUser(id: number, token: string): Promise<UserType | undefined> {
        try {
            authenticateJWT(token);

            const user = await this.findOne({id});

            if (user) {
                return {
                    id: user.dataValues.id,
                    firstName: user.dataValues.first_name,
                    lastName: user.dataValues.last_name,
                    photo: user.dataValues.photo,
                    gender: user.dataValues.gender,
                    registrationDate: user.dataValues.registration_date,
                    email: user.dataValues.email
                };
            }
        } catch (err) {
            console.error("error in [getUser]", err);
        }
    }

    async getAllUsersWithPagination(page: number, token: string): Promise<Array<UserType>| undefined> {
        try {
            authenticateJWT(token);

            const users = await User.findAll({limit: page * USER_COUNT_PER_PAGE,
                order: [
                    ["registration_date", "DESC"],
                    ["id", "ASC"],
                ],
            });

            if (users) {
                return users.map(user =>  ({
                    id: user.dataValues.id,
                    firstName: user.dataValues.first_name,
                    lastName: user.dataValues.last_name,
                    photo: user.dataValues.photo,
                    gender: user.dataValues.gender,
                    registrationDate: user.dataValues.registration_date,
                    email: user.dataValues.email
                }));
            }
        } catch (err) {
            console.error("error in [getAllUsersWithPagination]", err);
        }
    }

    async editUser(input: EditUserInput, token: string): Promise<UserType | undefined> {
        const id = input.id;

        try {
            authenticateJWT(token);

            if (input.photo) {
                const photoExt = input.photo.match(/\.([^.]+)$|$/)![1];
                const photoSizeInMb = fs.statSync(`public/${input.photo}`).size / ONE_MB_IN_BYTES;

                if (!allowedPhotoExtensions.includes(photoExt) || photoSizeInMb > MAXIMUM_IMAGE_SIZE) {
                    throw Error("not supported photo format");
                }
            }

            await User.update({
                first_name: input.firstName,
                last_name: input.lastName,
                gender: input.gender,
                photo: input.photo,
                email: input.email
            }, {where: {id: input.id}});

            const user = await this.findOne({id});

            if (user) {
                return {
                    id: user.dataValues.id,
                    firstName: user.dataValues.first_name,
                    lastName: user.dataValues.last_name,
                    photo: user.dataValues.photo,
                    gender: user.dataValues.gender,
                    registrationDate: user.dataValues.registration_date,
                    email: user.dataValues.email
                };
            }
        } catch (err) {
            console.error("error in [editUser]", err);
        }
    }
}
