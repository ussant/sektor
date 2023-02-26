import {IncomingHttpHeaders} from "http";

export type LoginInput = {
    email: string,
    password: string
}

export type SignUpInput = LoginInput & {
    firstName: string
}

export type EditUserInput = {
        id: number,
        firstName?: string,
        lastName?: string,
        email?: string,
        gender?: string,
        photo?: string
}

export type Id = {
    id: number
}

export type Page = {
    page: number
}

export type Token = {
    token: string
}

export type Message = {
    message: string
}

export type UserType = {
    id: number,
    firstName: string,
    lastName: string,
    photo: string,
    gender: string,
    registrationDate: string,
    email: string
}

export type CustomHeaders = IncomingHttpHeaders & {
    token: string
}
