import {LoginInput, Message, SignUpInput, Token} from "../types";
import {AuthService} from "../services/auth.service";

class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    async signUp(input: SignUpInput): Promise<Message | undefined> {
        return this.authService.signUp(input.firstName, input.email, input.password);
    }

    async login(input: LoginInput): Promise<Token | undefined> {
        return this.authService.login(input.email, input.password);
    }
}

export const authResolver = new AuthResolver(new AuthService);
