import {CustomHeaders, Id, Page} from "../types";
import {userResolver} from "../resolvers/user.resolver";

export const queries = {
    getUser: async ({id}: Id, {headers}: {headers: CustomHeaders}
    ) => await userResolver.getUser(
        id,
        headers
    ),
    getAllUsersWithPagination: async ({page}: Page, {headers}: {headers: CustomHeaders}
    ) => await userResolver.getAllUsersWithPagination(
        page,
        headers
    )
};
