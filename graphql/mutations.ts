import {userResolver} from "../resolvers/user.resolver";
import {authResolver} from "../resolvers/auth.resolver";
import {CustomHeaders, EditUserInput, LoginInput, SignUpInput} from "../types";

export const mutations = {
    login: async ({
        input
    }: {input: LoginInput}
    ) => await authResolver.login(input),

    signUp: async ({
        input
    }: {input: SignUpInput}
    ) => await authResolver.signUp(input),

    editUser: async ({
        input
    }: { input: EditUserInput },
    {headers}: { headers: CustomHeaders }
    ) =>
        await userResolver.editUser(input, headers),
};
