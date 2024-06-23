import { RequestContext } from "../http/http";

/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    /*
     * @return returns the name of the security authentication as specified in OAI
     */
    getName(): string;

    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}

export interface TokenProvider {
  getToken(): Promise<string> | string;
}

/**
 * Applies apiKey authentication to the request context.
 */
export class AuthTokenAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "authToken";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Auth-Token", this.apiKey);
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class AppIdAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "appId";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("App-ID", this.apiKey);
    }
}


export type AuthMethods = {
    "default"?: SecurityAuthentication,
    "authToken"?: SecurityAuthentication,
    "appId"?: SecurityAuthentication
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type HttpBearerConfiguration = { tokenProvider: TokenProvider };
export type OAuth2Configuration = { accessToken: string };

export type AuthMethodsConfiguration = {
    "default"?: SecurityAuthentication,
    "authToken"?: ApiKeyConfiguration,
    "appId"?: ApiKeyConfiguration
}

/**
 * Creates the authentication methods from a swagger description.
 *
 */
export function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods {
    let authMethods: AuthMethods = {}

    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"]

    if (config["authToken"]) {
        authMethods["authToken"] = new AuthTokenAuthentication(
            config["authToken"]
        );
    }

    if (config["appId"]) {
        authMethods["appId"] = new AppIdAuthentication(
            config["appId"]
        );
    }

    return authMethods;
}