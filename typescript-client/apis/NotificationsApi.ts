// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AclsV1AclPostDefaultResponse } from '../models/AclsV1AclPostDefaultResponse';
import { WebhookCreateSchema } from '../models/WebhookCreateSchema';
import { WebhookSchema } from '../models/WebhookSchema';
import { WebhooksSchema } from '../models/WebhooksSchema';

/**
 * no description
 */
export class NotificationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     *  Required roles:  - can_read_webhooks 
     * Get all webhooks
     * @param authToken 
     * @param appID 
     */
    public async notificationsV1WebhooksGet(authToken: string, appID: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("NotificationsApi", "notificationsV1WebhooksGet", "authToken");
        }


        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("NotificationsApi", "notificationsV1WebhooksGet", "appID");
        }


        // Path Params
        const localVarPath = '/notifications/v1/webhooks/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_webhooks 
     * Create a new webhook
     * @param authToken 
     * @param appID 
     * @param webhookCreateSchema body
     */
    public async notificationsV1WebhooksPost(authToken: string, appID: string, webhookCreateSchema: WebhookCreateSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("NotificationsApi", "notificationsV1WebhooksPost", "authToken");
        }


        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("NotificationsApi", "notificationsV1WebhooksPost", "appID");
        }


        // verify required parameter 'webhookCreateSchema' is not null or undefined
        if (webhookCreateSchema === null || webhookCreateSchema === undefined) {
            throw new RequiredError("NotificationsApi", "notificationsV1WebhooksPost", "webhookCreateSchema");
        }


        // Path Params
        const localVarPath = '/notifications/v1/webhooks/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(webhookCreateSchema, "WebhookCreateSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_delete_webhooks 
     * Delete a webhook
     * @param authToken 
     * @param appID 
     * @param webhookId 
     */
    public async notificationsV1WebhooksWebhookIdDelete(authToken: string, appID: string, webhookId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("NotificationsApi", "notificationsV1WebhooksWebhookIdDelete", "authToken");
        }


        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("NotificationsApi", "notificationsV1WebhooksWebhookIdDelete", "appID");
        }


        // verify required parameter 'webhookId' is not null or undefined
        if (webhookId === null || webhookId === undefined) {
            throw new RequiredError("NotificationsApi", "notificationsV1WebhooksWebhookIdDelete", "webhookId");
        }


        // Path Params
        const localVarPath = '/notifications/v1/webhooks/{webhook_id}/'
            .replace('{' + 'webhook_id' + '}', encodeURIComponent(String(webhookId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_webhooks 
     * Get a webhook definition
     * @param authToken 
     * @param appID 
     * @param webhookId 
     */
    public async notificationsV1WebhooksWebhookIdGet(authToken: string, appID: string, webhookId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("NotificationsApi", "notificationsV1WebhooksWebhookIdGet", "authToken");
        }


        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("NotificationsApi", "notificationsV1WebhooksWebhookIdGet", "appID");
        }


        // verify required parameter 'webhookId' is not null or undefined
        if (webhookId === null || webhookId === undefined) {
            throw new RequiredError("NotificationsApi", "notificationsV1WebhooksWebhookIdGet", "webhookId");
        }


        // Path Params
        const localVarPath = '/notifications/v1/webhooks/{webhook_id}/'
            .replace('{' + 'webhook_id' + '}', encodeURIComponent(String(webhookId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_webhooks 
     * Update a webhook
     * @param authToken 
     * @param appID 
     * @param webhookId 
     * @param webhookCreateSchema body
     */
    public async notificationsV1WebhooksWebhookIdPut(authToken: string, appID: string, webhookId: string, webhookCreateSchema: WebhookCreateSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("NotificationsApi", "notificationsV1WebhooksWebhookIdPut", "authToken");
        }


        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("NotificationsApi", "notificationsV1WebhooksWebhookIdPut", "appID");
        }


        // verify required parameter 'webhookId' is not null or undefined
        if (webhookId === null || webhookId === undefined) {
            throw new RequiredError("NotificationsApi", "notificationsV1WebhooksWebhookIdPut", "webhookId");
        }


        // verify required parameter 'webhookCreateSchema' is not null or undefined
        if (webhookCreateSchema === null || webhookCreateSchema === undefined) {
            throw new RequiredError("NotificationsApi", "notificationsV1WebhooksWebhookIdPut", "webhookCreateSchema");
        }


        // Path Params
        const localVarPath = '/notifications/v1/webhooks/{webhook_id}/'
            .replace('{' + 'webhook_id' + '}', encodeURIComponent(String(webhookId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(webhookCreateSchema, "WebhookCreateSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class NotificationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to notificationsV1WebhooksGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async notificationsV1WebhooksGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WebhooksSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebhooksSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhooksSchema", ""
            ) as WebhooksSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhooksSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhooksSchema", ""
            ) as WebhooksSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to notificationsV1WebhooksPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async notificationsV1WebhooksPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WebhookSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: WebhookSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookSchema", ""
            ) as WebhookSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookSchema", ""
            ) as WebhookSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to notificationsV1WebhooksWebhookIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async notificationsV1WebhooksWebhookIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to notificationsV1WebhooksWebhookIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async notificationsV1WebhooksWebhookIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WebhookSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: WebhookSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookSchema", ""
            ) as WebhookSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookSchema", ""
            ) as WebhookSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to notificationsV1WebhooksWebhookIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async notificationsV1WebhooksWebhookIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WebhookSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebhookSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookSchema", ""
            ) as WebhookSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookSchema", ""
            ) as WebhookSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
