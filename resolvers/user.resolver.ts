import {UserService} from "../services/user.service";
import {CustomHeaders, EditUserInput, UserType} from "../types";

class UserResolver {
    constructor(private readonly userService: UserService) {}

    async editUser(input: EditUserInput, headers: CustomHeaders): Promise<UserType | undefined> {
        return this.userService.editUser(input, headers.token);
    }

    async getUser(id: number, headers: CustomHeaders): Promise<UserType | undefined> {
        return this.userService.getUser(id, headers.token);
    }

    async getAllUsersWithPagination(page: number, headers: CustomHeaders): Promise<Array<UserType>| undefined> {
        return this.userService.getAllUsersWithPagination(page, headers.token);
    }
}

export const userResolver = new UserResolver(new UserService);
