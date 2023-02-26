import jwt, {VerifyErrors} from "jsonwebtoken";
import {jwtConfig} from "../config/jwt.config";

export const authenticateJWT = (token: string) => {
    if (token) {
        jwt.verify(token, jwtConfig.AT_SECRET, (err: VerifyErrors | null) => {
            if (err) {
                throw Error("verification has failed");
            }
        });
    } else {
        throw Error("headers missing");
    }
};
