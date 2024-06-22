// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ACLSchema } from '../models/ACLSchema';
import { ACLTemplateSchema } from '../models/ACLTemplateSchema';
import { ACLTemplatesSchema } from '../models/ACLTemplatesSchema';
import { ACLsSchema } from '../models/ACLsSchema';
import { AclsV1AclPostDefaultResponse } from '../models/AclsV1AclPostDefaultResponse';
import { BulkACLSchema } from '../models/BulkACLSchema';
import { CheckBulkACLsSchema } from '../models/CheckBulkACLsSchema';
import { CombinedPermissionsSchema } from '../models/CombinedPermissionsSchema';
import { CreateACLsResultSchema } from '../models/CreateACLsResultSchema';
import { CreateACLsSchema } from '../models/CreateACLsSchema';
import { CreateBulkACLsSchema } from '../models/CreateBulkACLsSchema';
import { CreateShareACLsSchema } from '../models/CreateShareACLsSchema';
import { DeleteACLsSchema } from '../models/DeleteACLsSchema';
import { DeleteBulkACLsSchema } from '../models/DeleteBulkACLsSchema';
import { GroupACLSchema } from '../models/GroupACLSchema';
import { ShareACLSchema } from '../models/ShareACLSchema';
import { SharesACLSchema } from '../models/SharesACLSchema';
import { UserACLSchema } from '../models/UserACLSchema';

/**
 * no description
 */
export class AclsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     *  Required roles:  - can_delete_acls 
     * Delete acls for content of multiple objects
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param deleteBulkACLsSchema body
     */
    public async aclsV1AclObjectTypeContentDelete(appID: string, authToken: string, objectType: string, deleteBulkACLsSchema: DeleteBulkACLsSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeContentDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeContentDelete", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeContentDelete", "objectType");
        }


        // verify required parameter 'deleteBulkACLsSchema' is not null or undefined
        if (deleteBulkACLsSchema === null || deleteBulkACLsSchema === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeContentDelete", "deleteBulkACLsSchema");
        }


        // Path Params
        const localVarPath = '/acls/v1/acl/{object_type}/content/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(deleteBulkACLsSchema, "DeleteBulkACLsSchema", ""),
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
     *  Required roles:  - can_write_acls 
     * Create a new acl for content of multiple objects
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param createBulkACLsSchema body
     */
    public async aclsV1AclObjectTypeContentPut(appID: string, authToken: string, objectType: string, createBulkACLsSchema: CreateBulkACLsSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeContentPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeContentPut", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeContentPut", "objectType");
        }


        // verify required parameter 'createBulkACLsSchema' is not null or undefined
        if (createBulkACLsSchema === null || createBulkACLsSchema === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeContentPut", "createBulkACLsSchema");
        }


        // Path Params
        const localVarPath = '/acls/v1/acl/{object_type}/content/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createBulkACLsSchema, "CreateBulkACLsSchema", ""),
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
     *  Required roles:  - can_delete_acls 
     * Delete acls for multiple objects
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param deleteACLsSchema body
     */
    public async aclsV1AclObjectTypeDelete(appID: string, authToken: string, objectType: string, deleteACLsSchema: DeleteACLsSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeDelete", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeDelete", "objectType");
        }


        // verify required parameter 'deleteACLsSchema' is not null or undefined
        if (deleteACLsSchema === null || deleteACLsSchema === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeDelete", "deleteACLsSchema");
        }


        // Path Params
        const localVarPath = '/acls/v1/acl/{object_type}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(deleteACLsSchema, "DeleteACLsSchema", ""),
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
     *  Required roles:  - can_read_acls 
     * List of object permissions
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectKey 
     */
    public async aclsV1AclObjectTypeObjectKeyGet(appID: string, authToken: string, objectType: string, objectKey: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeObjectKeyGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeObjectKeyGet", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeObjectKeyGet", "objectType");
        }


        // verify required parameter 'objectKey' is not null or undefined
        if (objectKey === null || objectKey === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeObjectKeyGet", "objectKey");
        }


        // Path Params
        const localVarPath = '/acls/v1/acl/{object_type}/{object_key}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_key' + '}', encodeURIComponent(String(objectKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_acls 
     * Check if particular object has required permission
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectKey 
     * @param permission 
     */
    public async aclsV1AclObjectTypeObjectKeyPermissionGet(appID: string, authToken: string, objectType: string, objectKey: string, permission: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeObjectKeyPermissionGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeObjectKeyPermissionGet", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeObjectKeyPermissionGet", "objectType");
        }


        // verify required parameter 'objectKey' is not null or undefined
        if (objectKey === null || objectKey === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeObjectKeyPermissionGet", "objectKey");
        }


        // verify required parameter 'permission' is not null or undefined
        if (permission === null || permission === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeObjectKeyPermissionGet", "permission");
        }


        // Path Params
        const localVarPath = '/acls/v1/acl/{object_type}/{object_key}/{permission}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_key' + '}', encodeURIComponent(String(objectKey)))
            .replace('{' + 'permission' + '}', encodeURIComponent(String(permission)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * List of permissions for the user
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectKey 
     */
    public async aclsV1AclObjectTypeObjectKeyPermissionsGet(appID: string, authToken: string, objectType: string, objectKey: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeObjectKeyPermissionsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeObjectKeyPermissionsGet", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeObjectKeyPermissionsGet", "objectType");
        }


        // verify required parameter 'objectKey' is not null or undefined
        if (objectKey === null || objectKey === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypeObjectKeyPermissionsGet", "objectKey");
        }


        // Path Params
        const localVarPath = '/acls/v1/acl/{object_type}/{object_key}/permissions/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_key' + '}', encodeURIComponent(String(objectKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_acls 
     * Check if objects have required permission
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param permission 
     * @param aCLsSchema body
     */
    public async aclsV1AclObjectTypePermissionPost(appID: string, authToken: string, objectType: string, permission: string, aCLsSchema: ACLsSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypePermissionPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypePermissionPost", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypePermissionPost", "objectType");
        }


        // verify required parameter 'permission' is not null or undefined
        if (permission === null || permission === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypePermissionPost", "permission");
        }


        // verify required parameter 'aCLsSchema' is not null or undefined
        if (aCLsSchema === null || aCLsSchema === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypePermissionPost", "aCLsSchema");
        }


        // Path Params
        const localVarPath = '/acls/v1/acl/{object_type}/{permission}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'permission' + '}', encodeURIComponent(String(permission)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(aCLsSchema, "ACLsSchema", ""),
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
     *  Required roles:  - can_write_acls 
     * Create a new acl for multiple objects
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param createACLsSchema body
     */
    public async aclsV1AclObjectTypePut(appID: string, authToken: string, objectType: string, createACLsSchema: CreateACLsSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypePut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypePut", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypePut", "objectType");
        }


        // verify required parameter 'createACLsSchema' is not null or undefined
        if (createACLsSchema === null || createACLsSchema === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclObjectTypePut", "createACLsSchema");
        }


        // Path Params
        const localVarPath = '/acls/v1/acl/{object_type}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createACLsSchema, "CreateACLsSchema", ""),
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
     *  Required roles:  - can_read_acls 
     * Check if objects have required permission
     * @param appID 
     * @param authToken 
     * @param checkBulkACLsSchema body
     */
    public async aclsV1AclPost(appID: string, authToken: string, checkBulkACLsSchema: CheckBulkACLsSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclPost", "authToken");
        }


        // verify required parameter 'checkBulkACLsSchema' is not null or undefined
        if (checkBulkACLsSchema === null || checkBulkACLsSchema === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclPost", "checkBulkACLsSchema");
        }


        // Path Params
        const localVarPath = '/acls/v1/acl/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(checkBulkACLsSchema, "CheckBulkACLsSchema", ""),
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
     *  Required roles:  - can_read_acl_templates 
     * Retreive all acl templates
     * @param appID 
     * @param authToken 
     */
    public async aclsV1AclTemplatesGet(appID: string, authToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesGet", "authToken");
        }


        // Path Params
        const localVarPath = '/acls/v1/acl/templates/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_acl_templates 
     * Create an acl template
     * @param appID 
     * @param authToken 
     * @param aCLTemplateSchema body
     */
    public async aclsV1AclTemplatesPost(appID: string, authToken: string, aCLTemplateSchema: ACLTemplateSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesPost", "authToken");
        }


        // verify required parameter 'aCLTemplateSchema' is not null or undefined
        if (aCLTemplateSchema === null || aCLTemplateSchema === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesPost", "aCLTemplateSchema");
        }


        // Path Params
        const localVarPath = '/acls/v1/acl/templates/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(aCLTemplateSchema, "ACLTemplateSchema", ""),
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
     *  Required roles:  - can_delete_acl_templates 
     * Remove an acl template
     * @param appID 
     * @param authToken 
     * @param templateId 
     */
    public async aclsV1AclTemplatesTemplateIdDelete(appID: string, authToken: string, templateId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesTemplateIdDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesTemplateIdDelete", "authToken");
        }


        // verify required parameter 'templateId' is not null or undefined
        if (templateId === null || templateId === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesTemplateIdDelete", "templateId");
        }


        // Path Params
        const localVarPath = '/acls/v1/acl/templates/{template_id}/'
            .replace('{' + 'template_id' + '}', encodeURIComponent(String(templateId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_acl_templates 
     * Retreive an acl template
     * @param appID 
     * @param authToken 
     * @param templateId 
     */
    public async aclsV1AclTemplatesTemplateIdGet(appID: string, authToken: string, templateId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesTemplateIdGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesTemplateIdGet", "authToken");
        }


        // verify required parameter 'templateId' is not null or undefined
        if (templateId === null || templateId === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesTemplateIdGet", "templateId");
        }


        // Path Params
        const localVarPath = '/acls/v1/acl/templates/{template_id}/'
            .replace('{' + 'template_id' + '}', encodeURIComponent(String(templateId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * Apply template permissions to an object
     * @param appID 
     * @param authToken 
     * @param templateId 
     * @param objectType 
     * @param objectKey 
     * @param ignoreReindexing 
     * @param restrictAclsCollectionId Do not apply any ACLs that are not in the collection_id provided (Parent collection normally)
     */
    public async aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPost(appID: string, authToken: string, templateId: string, objectType: string, objectKey: string, ignoreReindexing?: boolean, restrictAclsCollectionId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPost", "authToken");
        }


        // verify required parameter 'templateId' is not null or undefined
        if (templateId === null || templateId === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPost", "templateId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPost", "objectType");
        }


        // verify required parameter 'objectKey' is not null or undefined
        if (objectKey === null || objectKey === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPost", "objectKey");
        }




        // Path Params
        const localVarPath = '/acls/v1/acl/templates/{template_id}/{object_type}/{object_key}/'
            .replace('{' + 'template_id' + '}', encodeURIComponent(String(templateId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_key' + '}', encodeURIComponent(String(objectKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (ignoreReindexing !== undefined) {
            requestContext.setQueryParam("ignore_reindexing", ObjectSerializer.serialize(ignoreReindexing, "boolean", ""));
        }

        // Query Params
        if (restrictAclsCollectionId !== undefined) {
            requestContext.setQueryParam("restrict_acls_collection_id", ObjectSerializer.serialize(restrictAclsCollectionId, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_acl_templates 
     * Update an acl template
     * @param appID 
     * @param authToken 
     * @param templateId 
     * @param aCLTemplateSchema body
     */
    public async aclsV1AclTemplatesTemplateIdPatch(appID: string, authToken: string, templateId: string, aCLTemplateSchema: ACLTemplateSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesTemplateIdPatch", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesTemplateIdPatch", "authToken");
        }


        // verify required parameter 'templateId' is not null or undefined
        if (templateId === null || templateId === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesTemplateIdPatch", "templateId");
        }


        // verify required parameter 'aCLTemplateSchema' is not null or undefined
        if (aCLTemplateSchema === null || aCLTemplateSchema === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesTemplateIdPatch", "aCLTemplateSchema");
        }


        // Path Params
        const localVarPath = '/acls/v1/acl/templates/{template_id}/'
            .replace('{' + 'template_id' + '}', encodeURIComponent(String(templateId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(aCLTemplateSchema, "ACLTemplateSchema", ""),
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
     *  Required roles:  - can_write_acl_templates 
     * Update an acl template
     * @param appID 
     * @param authToken 
     * @param templateId 
     * @param aCLTemplateSchema body
     */
    public async aclsV1AclTemplatesTemplateIdPut(appID: string, authToken: string, templateId: string, aCLTemplateSchema: ACLTemplateSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesTemplateIdPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesTemplateIdPut", "authToken");
        }


        // verify required parameter 'templateId' is not null or undefined
        if (templateId === null || templateId === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesTemplateIdPut", "templateId");
        }


        // verify required parameter 'aCLTemplateSchema' is not null or undefined
        if (aCLTemplateSchema === null || aCLTemplateSchema === undefined) {
            throw new RequiredError("AclsApi", "aclsV1AclTemplatesTemplateIdPut", "aCLTemplateSchema");
        }


        // Path Params
        const localVarPath = '/acls/v1/acl/templates/{template_id}/'
            .replace('{' + 'template_id' + '}', encodeURIComponent(String(templateId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(aCLTemplateSchema, "ACLTemplateSchema", ""),
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
     *  Required roles:  - can_delete_acls 
     * Delete a particular acl by id for an object
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param objectType 
     * @param objectKey 
     */
    public async aclsV1GroupsGroupIdAclObjectTypeObjectKeyDelete(appID: string, authToken: string, groupId: string, objectType: string, objectKey: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyDelete", "authToken");
        }


        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyDelete", "groupId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyDelete", "objectType");
        }


        // verify required parameter 'objectKey' is not null or undefined
        if (objectKey === null || objectKey === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyDelete", "objectKey");
        }


        // Path Params
        const localVarPath = '/acls/v1/groups/{group_id}/acl/{object_type}/{object_key}/'
            .replace('{' + 'group_id' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_key' + '}', encodeURIComponent(String(objectKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_acls 
     * List of groups permissions for an object
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param objectType 
     * @param objectKey 
     */
    public async aclsV1GroupsGroupIdAclObjectTypeObjectKeyGet(appID: string, authToken: string, groupId: string, objectType: string, objectKey: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyGet", "authToken");
        }


        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyGet", "groupId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyGet", "objectType");
        }


        // verify required parameter 'objectKey' is not null or undefined
        if (objectKey === null || objectKey === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyGet", "objectKey");
        }


        // Path Params
        const localVarPath = '/acls/v1/groups/{group_id}/acl/{object_type}/{object_key}/'
            .replace('{' + 'group_id' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_key' + '}', encodeURIComponent(String(objectKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_acls 
     * Check if group has particular permission for an object
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param objectType 
     * @param objectKey 
     * @param permission 
     */
    public async aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGet(appID: string, authToken: string, groupId: string, objectType: string, objectKey: string, permission: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGet", "authToken");
        }


        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGet", "groupId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGet", "objectType");
        }


        // verify required parameter 'objectKey' is not null or undefined
        if (objectKey === null || objectKey === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGet", "objectKey");
        }


        // verify required parameter 'permission' is not null or undefined
        if (permission === null || permission === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGet", "permission");
        }


        // Path Params
        const localVarPath = '/acls/v1/groups/{group_id}/acl/{object_type}/{object_key}/{permission}/'
            .replace('{' + 'group_id' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_key' + '}', encodeURIComponent(String(objectKey)))
            .replace('{' + 'permission' + '}', encodeURIComponent(String(permission)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_acls 
     * Update or create group acl for an object
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param objectType 
     * @param objectKey 
     * @param groupACLSchema body
     */
    public async aclsV1GroupsGroupIdAclObjectTypeObjectKeyPut(appID: string, authToken: string, groupId: string, objectType: string, objectKey: string, groupACLSchema: GroupACLSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyPut", "authToken");
        }


        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyPut", "groupId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyPut", "objectType");
        }


        // verify required parameter 'objectKey' is not null or undefined
        if (objectKey === null || objectKey === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyPut", "objectKey");
        }


        // verify required parameter 'groupACLSchema' is not null or undefined
        if (groupACLSchema === null || groupACLSchema === undefined) {
            throw new RequiredError("AclsApi", "aclsV1GroupsGroupIdAclObjectTypeObjectKeyPut", "groupACLSchema");
        }


        // Path Params
        const localVarPath = '/acls/v1/groups/{group_id}/acl/{object_type}/{object_key}/'
            .replace('{' + 'group_id' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_key' + '}', encodeURIComponent(String(objectKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(groupACLSchema, "GroupACLSchema", ""),
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
     *  Required roles:  - can_read_acls 
     * List of share acls
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectKey 
     */
    public async aclsV1SharesObjectTypeObjectKeyGet(appID: string, authToken: string, objectType: string, objectKey: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesObjectTypeObjectKeyGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesObjectTypeObjectKeyGet", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesObjectTypeObjectKeyGet", "objectType");
        }


        // verify required parameter 'objectKey' is not null or undefined
        if (objectKey === null || objectKey === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesObjectTypeObjectKeyGet", "objectKey");
        }


        // Path Params
        const localVarPath = '/acls/v1/shares/{object_type}/{object_key}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_key' + '}', encodeURIComponent(String(objectKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_delete_acls 
     * Delete a share acl for an object
     * @param appID 
     * @param authToken 
     * @param shareId 
     * @param objectType 
     * @param objectKey 
     */
    public async aclsV1SharesShareIdAclObjectTypeObjectKeyDelete(appID: string, authToken: string, shareId: string, objectType: string, objectKey: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyDelete", "authToken");
        }


        // verify required parameter 'shareId' is not null or undefined
        if (shareId === null || shareId === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyDelete", "shareId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyDelete", "objectType");
        }


        // verify required parameter 'objectKey' is not null or undefined
        if (objectKey === null || objectKey === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyDelete", "objectKey");
        }


        // Path Params
        const localVarPath = '/acls/v1/shares/{share_id}/acl/{object_type}/{object_key}/'
            .replace('{' + 'share_id' + '}', encodeURIComponent(String(shareId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_key' + '}', encodeURIComponent(String(objectKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_acls 
     * List of share permissions for an object
     * @param appID 
     * @param authToken 
     * @param shareId 
     * @param objectType 
     * @param objectKey 
     */
    public async aclsV1SharesShareIdAclObjectTypeObjectKeyGet(appID: string, authToken: string, shareId: string, objectType: string, objectKey: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyGet", "authToken");
        }


        // verify required parameter 'shareId' is not null or undefined
        if (shareId === null || shareId === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyGet", "shareId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyGet", "objectType");
        }


        // verify required parameter 'objectKey' is not null or undefined
        if (objectKey === null || objectKey === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyGet", "objectKey");
        }


        // Path Params
        const localVarPath = '/acls/v1/shares/{share_id}/acl/{object_type}/{object_key}/'
            .replace('{' + 'share_id' + '}', encodeURIComponent(String(shareId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_key' + '}', encodeURIComponent(String(objectKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_acls 
     * Returns a share acl for an object
     * @param appID 
     * @param authToken 
     * @param shareId 
     * @param objectType 
     * @param objectKey 
     * @param permission 
     */
    public async aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGet(appID: string, authToken: string, shareId: string, objectType: string, objectKey: string, permission: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGet", "authToken");
        }


        // verify required parameter 'shareId' is not null or undefined
        if (shareId === null || shareId === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGet", "shareId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGet", "objectType");
        }


        // verify required parameter 'objectKey' is not null or undefined
        if (objectKey === null || objectKey === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGet", "objectKey");
        }


        // verify required parameter 'permission' is not null or undefined
        if (permission === null || permission === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGet", "permission");
        }


        // Path Params
        const localVarPath = '/acls/v1/shares/{share_id}/acl/{object_type}/{object_key}/{permission}/'
            .replace('{' + 'share_id' + '}', encodeURIComponent(String(shareId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_key' + '}', encodeURIComponent(String(objectKey)))
            .replace('{' + 'permission' + '}', encodeURIComponent(String(permission)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_acls 
     * Create a new share acl for an object
     * @param appID 
     * @param authToken 
     * @param shareId 
     * @param objectType 
     * @param objectKey 
     * @param shareACLSchema body
     */
    public async aclsV1SharesShareIdAclObjectTypeObjectKeyPost(appID: string, authToken: string, shareId: string, objectType: string, objectKey: string, shareACLSchema: ShareACLSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyPost", "authToken");
        }


        // verify required parameter 'shareId' is not null or undefined
        if (shareId === null || shareId === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyPost", "shareId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyPost", "objectType");
        }


        // verify required parameter 'objectKey' is not null or undefined
        if (objectKey === null || objectKey === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyPost", "objectKey");
        }


        // verify required parameter 'shareACLSchema' is not null or undefined
        if (shareACLSchema === null || shareACLSchema === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyPost", "shareACLSchema");
        }


        // Path Params
        const localVarPath = '/acls/v1/shares/{share_id}/acl/{object_type}/{object_key}/'
            .replace('{' + 'share_id' + '}', encodeURIComponent(String(shareId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_key' + '}', encodeURIComponent(String(objectKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(shareACLSchema, "ShareACLSchema", ""),
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
     *  Required roles:  - can_write_acls 
     * Update share acl for an object
     * @param appID 
     * @param authToken 
     * @param shareId 
     * @param objectType 
     * @param objectKey 
     * @param shareACLSchema body
     */
    public async aclsV1SharesShareIdAclObjectTypeObjectKeyPut(appID: string, authToken: string, shareId: string, objectType: string, objectKey: string, shareACLSchema: ShareACLSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyPut", "authToken");
        }


        // verify required parameter 'shareId' is not null or undefined
        if (shareId === null || shareId === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyPut", "shareId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyPut", "objectType");
        }


        // verify required parameter 'objectKey' is not null or undefined
        if (objectKey === null || objectKey === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyPut", "objectKey");
        }


        // verify required parameter 'shareACLSchema' is not null or undefined
        if (shareACLSchema === null || shareACLSchema === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypeObjectKeyPut", "shareACLSchema");
        }


        // Path Params
        const localVarPath = '/acls/v1/shares/{share_id}/acl/{object_type}/{object_key}/'
            .replace('{' + 'share_id' + '}', encodeURIComponent(String(shareId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_key' + '}', encodeURIComponent(String(objectKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(shareACLSchema, "ShareACLSchema", ""),
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
     *  Required roles:  - can_write_acls 
     * Create a new acl for multiple share objects
     * @param appID 
     * @param authToken 
     * @param shareId 
     * @param objectType 
     * @param createShareACLsSchema body
     */
    public async aclsV1SharesShareIdAclObjectTypePut(appID: string, authToken: string, shareId: string, objectType: string, createShareACLsSchema: CreateShareACLsSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypePut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypePut", "authToken");
        }


        // verify required parameter 'shareId' is not null or undefined
        if (shareId === null || shareId === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypePut", "shareId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypePut", "objectType");
        }


        // verify required parameter 'createShareACLsSchema' is not null or undefined
        if (createShareACLsSchema === null || createShareACLsSchema === undefined) {
            throw new RequiredError("AclsApi", "aclsV1SharesShareIdAclObjectTypePut", "createShareACLsSchema");
        }


        // Path Params
        const localVarPath = '/acls/v1/shares/{share_id}/acl/{object_type}/'
            .replace('{' + 'share_id' + '}', encodeURIComponent(String(shareId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createShareACLsSchema, "CreateShareACLsSchema", ""),
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
     *  Required roles:  - can_delete_acls 
     * Delete a user acl for an object
     * @param appID 
     * @param authToken 
     * @param userId 
     * @param objectType 
     * @param objectKey 
     */
    public async aclsV1UsersUserIdAclObjectTypeObjectKeyDelete(appID: string, authToken: string, userId: string, objectType: string, objectKey: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyDelete", "authToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyDelete", "userId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyDelete", "objectType");
        }


        // verify required parameter 'objectKey' is not null or undefined
        if (objectKey === null || objectKey === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyDelete", "objectKey");
        }


        // Path Params
        const localVarPath = '/acls/v1/users/{user_id}/acl/{object_type}/{object_key}/'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_key' + '}', encodeURIComponent(String(objectKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_acls 
     * List of user permissions for an object
     * @param appID 
     * @param authToken 
     * @param userId 
     * @param objectType 
     * @param objectKey 
     */
    public async aclsV1UsersUserIdAclObjectTypeObjectKeyGet(appID: string, authToken: string, userId: string, objectType: string, objectKey: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyGet", "authToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyGet", "userId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyGet", "objectType");
        }


        // verify required parameter 'objectKey' is not null or undefined
        if (objectKey === null || objectKey === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyGet", "objectKey");
        }


        // Path Params
        const localVarPath = '/acls/v1/users/{user_id}/acl/{object_type}/{object_key}/'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_key' + '}', encodeURIComponent(String(objectKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_acls 
     * Returns a user acl for an object
     * @param appID 
     * @param authToken 
     * @param userId 
     * @param objectType 
     * @param objectKey 
     * @param permission 
     */
    public async aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGet(appID: string, authToken: string, userId: string, objectType: string, objectKey: string, permission: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGet", "authToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGet", "userId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGet", "objectType");
        }


        // verify required parameter 'objectKey' is not null or undefined
        if (objectKey === null || objectKey === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGet", "objectKey");
        }


        // verify required parameter 'permission' is not null or undefined
        if (permission === null || permission === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGet", "permission");
        }


        // Path Params
        const localVarPath = '/acls/v1/users/{user_id}/acl/{object_type}/{object_key}/{permission}/'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_key' + '}', encodeURIComponent(String(objectKey)))
            .replace('{' + 'permission' + '}', encodeURIComponent(String(permission)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_acls 
     * Update or create user acl for an object
     * @param appID 
     * @param authToken 
     * @param userId 
     * @param objectType 
     * @param objectKey 
     * @param userACLSchema body
     */
    public async aclsV1UsersUserIdAclObjectTypeObjectKeyPut(appID: string, authToken: string, userId: string, objectType: string, objectKey: string, userACLSchema: UserACLSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyPut", "authToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyPut", "userId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyPut", "objectType");
        }


        // verify required parameter 'objectKey' is not null or undefined
        if (objectKey === null || objectKey === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyPut", "objectKey");
        }


        // verify required parameter 'userACLSchema' is not null or undefined
        if (userACLSchema === null || userACLSchema === undefined) {
            throw new RequiredError("AclsApi", "aclsV1UsersUserIdAclObjectTypeObjectKeyPut", "userACLSchema");
        }


        // Path Params
        const localVarPath = '/acls/v1/users/{user_id}/acl/{object_type}/{object_key}/'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_key' + '}', encodeURIComponent(String(objectKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(userACLSchema, "UserACLSchema", ""),
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

export class AclsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aclsV1AclObjectTypeContentDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1AclObjectTypeContentDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
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
     * @params response Response returned by the server for a request to aclsV1AclObjectTypeContentPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1AclObjectTypeContentPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid object type", undefined, response.headers);
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
     * @params response Response returned by the server for a request to aclsV1AclObjectTypeDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1AclObjectTypeDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
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
     * @params response Response returned by the server for a request to aclsV1AclObjectTypeObjectKeyGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1AclObjectTypeObjectKeyGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ACLSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ACLSchema", ""
            ) as ACLSchema;
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
            const body: ACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ACLSchema", ""
            ) as ACLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aclsV1AclObjectTypeObjectKeyPermissionGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1AclObjectTypeObjectKeyPermissionGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Returns empty dict if object doesn\&#39;t have permission", undefined, response.headers);
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
     * @params response Response returned by the server for a request to aclsV1AclObjectTypeObjectKeyPermissionsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1AclObjectTypeObjectKeyPermissionsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CombinedPermissionsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CombinedPermissionsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CombinedPermissionsSchema", ""
            ) as CombinedPermissionsSchema;
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
            const body: CombinedPermissionsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CombinedPermissionsSchema", ""
            ) as CombinedPermissionsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aclsV1AclObjectTypePermissionPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1AclObjectTypePermissionPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BulkACLSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BulkACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkACLSchema", ""
            ) as BulkACLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "User doesn\&#39;t have permission", undefined, response.headers);
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
            const body: BulkACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkACLSchema", ""
            ) as BulkACLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aclsV1AclObjectTypePut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1AclObjectTypePutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateACLsResultSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateACLsResultSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateACLsResultSchema", ""
            ) as CreateACLsResultSchema;
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
            const body: CreateACLsResultSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateACLsResultSchema", ""
            ) as CreateACLsResultSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aclsV1AclPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1AclPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BulkACLSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BulkACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkACLSchema", ""
            ) as BulkACLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "User doesn\&#39;t have permission", undefined, response.headers);
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
            const body: BulkACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkACLSchema", ""
            ) as BulkACLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aclsV1AclTemplatesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1AclTemplatesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ACLTemplatesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ACLTemplatesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ACLTemplatesSchema", ""
            ) as ACLTemplatesSchema;
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
            const body: ACLTemplatesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ACLTemplatesSchema", ""
            ) as ACLTemplatesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aclsV1AclTemplatesPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1AclTemplatesPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ACLTemplateSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ACLTemplateSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ACLTemplateSchema", ""
            ) as ACLTemplateSchema;
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
            const body: ACLTemplateSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ACLTemplateSchema", ""
            ) as ACLTemplateSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aclsV1AclTemplatesTemplateIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1AclTemplatesTemplateIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "ACL template does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to aclsV1AclTemplatesTemplateIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1AclTemplatesTemplateIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ACLTemplateSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ACLTemplateSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ACLTemplateSchema", ""
            ) as ACLTemplateSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Template does not exist", undefined, response.headers);
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
            const body: ACLTemplateSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ACLTemplateSchema", ""
            ) as ACLTemplateSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "User does not have permission", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "ACL template does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to aclsV1AclTemplatesTemplateIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1AclTemplatesTemplateIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ACLTemplateSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ACLTemplateSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ACLTemplateSchema", ""
            ) as ACLTemplateSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "ACL template does not exist", undefined, response.headers);
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
            const body: ACLTemplateSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ACLTemplateSchema", ""
            ) as ACLTemplateSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aclsV1AclTemplatesTemplateIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1AclTemplatesTemplateIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ACLTemplateSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ACLTemplateSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ACLTemplateSchema", ""
            ) as ACLTemplateSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "ACL template does not exist", undefined, response.headers);
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
            const body: ACLTemplateSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ACLTemplateSchema", ""
            ) as ACLTemplateSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aclsV1GroupsGroupIdAclObjectTypeObjectKeyDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1GroupsGroupIdAclObjectTypeObjectKeyDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "ACL does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to aclsV1GroupsGroupIdAclObjectTypeObjectKeyGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1GroupsGroupIdAclObjectTypeObjectKeyGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GroupACLSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GroupACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GroupACLSchema", ""
            ) as GroupACLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Group doesn\&#39;t have permissions", undefined, response.headers);
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
            const body: GroupACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GroupACLSchema", ""
            ) as GroupACLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Group doesn\&#39;t have particular permission", undefined, response.headers);
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
     * @params response Response returned by the server for a request to aclsV1GroupsGroupIdAclObjectTypeObjectKeyPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1GroupsGroupIdAclObjectTypeObjectKeyPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GroupACLSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GroupACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GroupACLSchema", ""
            ) as GroupACLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "ACL does not exist", undefined, response.headers);
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
            const body: GroupACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GroupACLSchema", ""
            ) as GroupACLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aclsV1SharesObjectTypeObjectKeyGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1SharesObjectTypeObjectKeyGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SharesACLSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SharesACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SharesACLSchema", ""
            ) as SharesACLSchema;
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
            const body: SharesACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SharesACLSchema", ""
            ) as SharesACLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aclsV1SharesShareIdAclObjectTypeObjectKeyDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1SharesShareIdAclObjectTypeObjectKeyDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "ACL does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to aclsV1SharesShareIdAclObjectTypeObjectKeyGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1SharesShareIdAclObjectTypeObjectKeyGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ShareACLSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ShareACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareACLSchema", ""
            ) as ShareACLSchema;
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
            const body: ShareACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareACLSchema", ""
            ) as ShareACLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "User does not have permission", undefined, response.headers);
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
     * @params response Response returned by the server for a request to aclsV1SharesShareIdAclObjectTypeObjectKeyPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1SharesShareIdAclObjectTypeObjectKeyPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ShareACLSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ShareACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareACLSchema", ""
            ) as ShareACLSchema;
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
            const body: ShareACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareACLSchema", ""
            ) as ShareACLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aclsV1SharesShareIdAclObjectTypeObjectKeyPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1SharesShareIdAclObjectTypeObjectKeyPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ShareACLSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ShareACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareACLSchema", ""
            ) as ShareACLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "ACL does not exist", undefined, response.headers);
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
            const body: ShareACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareACLSchema", ""
            ) as ShareACLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aclsV1SharesShareIdAclObjectTypePut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1SharesShareIdAclObjectTypePutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateACLsResultSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateACLsResultSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateACLsResultSchema", ""
            ) as CreateACLsResultSchema;
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
            const body: CreateACLsResultSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateACLsResultSchema", ""
            ) as CreateACLsResultSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aclsV1UsersUserIdAclObjectTypeObjectKeyDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1UsersUserIdAclObjectTypeObjectKeyDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "ACL does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to aclsV1UsersUserIdAclObjectTypeObjectKeyGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1UsersUserIdAclObjectTypeObjectKeyGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserACLSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserACLSchema", ""
            ) as UserACLSchema;
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
            const body: UserACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserACLSchema", ""
            ) as UserACLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserACLSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserACLSchema", ""
            ) as UserACLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "User does not have permission", undefined, response.headers);
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
            const body: UserACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserACLSchema", ""
            ) as UserACLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aclsV1UsersUserIdAclObjectTypeObjectKeyPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aclsV1UsersUserIdAclObjectTypeObjectKeyPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserACLSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserACLSchema", ""
            ) as UserACLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "ACL does not exist", undefined, response.headers);
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
            const body: UserACLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserACLSchema", ""
            ) as UserACLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
