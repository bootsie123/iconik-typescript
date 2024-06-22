// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AclsV1AclPostDefaultResponse } from '../models/AclsV1AclPostDefaultResponse';
import { CollectionMetadataValuesBatchSchema } from '../models/CollectionMetadataValuesBatchSchema';
import { CreateMetadataValuesBatchSchema } from '../models/CreateMetadataValuesBatchSchema';
import { MetadataCategoriesSchema } from '../models/MetadataCategoriesSchema';
import { MetadataCategorySchema } from '../models/MetadataCategorySchema';
import { MetadataFieldCreateSchema } from '../models/MetadataFieldCreateSchema';
import { MetadataFieldMappingOptionsSchema } from '../models/MetadataFieldMappingOptionsSchema';
import { MetadataFieldMappingSchema } from '../models/MetadataFieldMappingSchema';
import { MetadataFieldSchema } from '../models/MetadataFieldSchema';
import { MetadataFieldsSchema } from '../models/MetadataFieldsSchema';
import { MetadataValuesBatchSchema } from '../models/MetadataValuesBatchSchema';
import { MetadataValuesSchema } from '../models/MetadataValuesSchema';
import { MetadataViewInputSchema } from '../models/MetadataViewInputSchema';
import { MetadataViewSchema } from '../models/MetadataViewSchema';
import { MetadataViewsSchema } from '../models/MetadataViewsSchema';

/**
 * no description
 */
export class MetadataApiRequestFactory extends BaseAPIRequestFactory {

    /**
     *  Required roles:  - can_read_metadata_values 
     * Get asset metadata by object type, object ID and view ID
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param assetId 
     * @param objectId 
     * @param viewId 
     */
    public async metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGet(appID: string, authToken: string, objectType: string, assetId: string, objectId: string, viewId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGet", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGet", "objectType");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGet", "assetId");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGet", "objectId");
        }


        // verify required parameter 'viewId' is not null or undefined
        if (viewId === null || viewId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGet", "viewId");
        }


        // Path Params
        const localVarPath = '/metadata/v1/assets/{asset_id}/{object_type}/{object_id}/views/{view_id}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'view_id' + '}', encodeURIComponent(String(viewId)));

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
     *  Required roles:  - can_write_metadata_values 
     * Edit view metadata values for sub-objects of an asset (Such as segments)
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param objectType 
     * @param objectId 
     * @param viewId 
     * @param metadataValuesSchema body
     */
    public async metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPut(appID: string, authToken: string, assetId: string, objectType: string, objectId: string, viewId: string, metadataValuesSchema: MetadataValuesSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPut", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPut", "assetId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPut", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPut", "objectId");
        }


        // verify required parameter 'viewId' is not null or undefined
        if (viewId === null || viewId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPut", "viewId");
        }


        // verify required parameter 'metadataValuesSchema' is not null or undefined
        if (metadataValuesSchema === null || metadataValuesSchema === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPut", "metadataValuesSchema");
        }


        // Path Params
        const localVarPath = '/metadata/v1/assets/{asset_id}/{object_type}/{object_id}/views/{view_id}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'view_id' + '}', encodeURIComponent(String(viewId)));

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
            ObjectSerializer.serialize(metadataValuesSchema, "MetadataValuesSchema", ""),
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
     *  Required roles:  - can_read_metadata_values 
     * Get object metadata by object type, object ID, version ID and view ID
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param viewId 
     */
    public async metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGet(appID: string, authToken: string, assetId: string, versionId: string, viewId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGet", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGet", "assetId");
        }


        // verify required parameter 'versionId' is not null or undefined
        if (versionId === null || versionId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGet", "versionId");
        }


        // verify required parameter 'viewId' is not null or undefined
        if (viewId === null || viewId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGet", "viewId");
        }


        // Path Params
        const localVarPath = '/metadata/v1/assets/{asset_id}/versions/{version_id}/views/{view_id}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'version_id' + '}', encodeURIComponent(String(versionId)))
            .replace('{' + 'view_id' + '}', encodeURIComponent(String(viewId)));

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
     *  Required roles:  - can_read_metadata_values 
     * Get asset metadata by object type, object ID, version ID and view ID
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param versionId 
     * @param viewId 
     */
    public async metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGet(appID: string, authToken: string, objectType: string, objectId: string, versionId: string, viewId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGet", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGet", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGet", "objectId");
        }


        // verify required parameter 'versionId' is not null or undefined
        if (versionId === null || versionId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGet", "versionId");
        }


        // verify required parameter 'viewId' is not null or undefined
        if (viewId === null || viewId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGet", "viewId");
        }


        // Path Params
        const localVarPath = '/metadata/v1/assets/{object_type}/{object_id}/versions/{version_id}/views/{view_id}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'version_id' + '}', encodeURIComponent(String(versionId)))
            .replace('{' + 'view_id' + '}', encodeURIComponent(String(viewId)));

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
     *  Required roles:  - can_delete_metadata_fields 
     * Delete a particular field by name
     * @param appID 
     * @param authToken 
     * @param fieldName 
     */
    public async metadataV1FieldsFieldNameDelete(appID: string, authToken: string, fieldName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1FieldsFieldNameDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1FieldsFieldNameDelete", "authToken");
        }


        // verify required parameter 'fieldName' is not null or undefined
        if (fieldName === null || fieldName === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1FieldsFieldNameDelete", "fieldName");
        }


        // Path Params
        const localVarPath = '/metadata/v1/fields/{field_name}/'
            .replace('{' + 'field_name' + '}', encodeURIComponent(String(fieldName)));

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
     *  Required roles:  - can_read_metadata_fields 
     * Returns a particular field by name
     * @param appID 
     * @param authToken 
     * @param fieldName 
     */
    public async metadataV1FieldsFieldNameGet(appID: string, authToken: string, fieldName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1FieldsFieldNameGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1FieldsFieldNameGet", "authToken");
        }


        // verify required parameter 'fieldName' is not null or undefined
        if (fieldName === null || fieldName === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1FieldsFieldNameGet", "fieldName");
        }


        // Path Params
        const localVarPath = '/metadata/v1/fields/{field_name}/'
            .replace('{' + 'field_name' + '}', encodeURIComponent(String(fieldName)));

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
     *  Required roles:  - can_write_metadata_fields 
     * Update field by name
     * @param appID 
     * @param authToken 
     * @param fieldName 
     * @param metadataFieldSchema body
     */
    public async metadataV1FieldsFieldNamePatch(appID: string, authToken: string, fieldName: string, metadataFieldSchema: MetadataFieldSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1FieldsFieldNamePatch", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1FieldsFieldNamePatch", "authToken");
        }


        // verify required parameter 'fieldName' is not null or undefined
        if (fieldName === null || fieldName === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1FieldsFieldNamePatch", "fieldName");
        }


        // verify required parameter 'metadataFieldSchema' is not null or undefined
        if (metadataFieldSchema === null || metadataFieldSchema === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1FieldsFieldNamePatch", "metadataFieldSchema");
        }


        // Path Params
        const localVarPath = '/metadata/v1/fields/{field_name}/'
            .replace('{' + 'field_name' + '}', encodeURIComponent(String(fieldName)));

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
            ObjectSerializer.serialize(metadataFieldSchema, "MetadataFieldSchema", ""),
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
     *  Required roles:  - can_write_metadata_fields 
     * Update field by name
     * @param appID 
     * @param authToken 
     * @param fieldName 
     * @param metadataFieldSchema body
     */
    public async metadataV1FieldsFieldNamePut(appID: string, authToken: string, fieldName: string, metadataFieldSchema: MetadataFieldSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1FieldsFieldNamePut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1FieldsFieldNamePut", "authToken");
        }


        // verify required parameter 'fieldName' is not null or undefined
        if (fieldName === null || fieldName === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1FieldsFieldNamePut", "fieldName");
        }


        // verify required parameter 'metadataFieldSchema' is not null or undefined
        if (metadataFieldSchema === null || metadataFieldSchema === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1FieldsFieldNamePut", "metadataFieldSchema");
        }


        // Path Params
        const localVarPath = '/metadata/v1/fields/{field_name}/'
            .replace('{' + 'field_name' + '}', encodeURIComponent(String(fieldName)));

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
            ObjectSerializer.serialize(metadataFieldSchema, "MetadataFieldSchema", ""),
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
     *  Required roles:  - can_read_metadata_fields 
     * List the fields defined in the system
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page (Default 500)
     * @param lastFieldName If your request returns per_page entries, send the last value of \&quot;name\&quot; to fetch next page
     * @param filter A comma separated list of fieldnames For example - first_name,last_name,salary
     */
    public async metadataV1FieldsGet(appID: string, authToken: string, perPage?: number, lastFieldName?: string, filter?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1FieldsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1FieldsGet", "authToken");
        }





        // Path Params
        const localVarPath = '/metadata/v1/fields/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int32"));
        }

        // Query Params
        if (lastFieldName !== undefined) {
            requestContext.setQueryParam("last_field_name", ObjectSerializer.serialize(lastFieldName, "string", ""));
        }

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""));
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
     *  Required roles:  - can_write_metadata_fields 
     * Create a new field
     * @param appID 
     * @param authToken 
     * @param metadataFieldCreateSchema body
     */
    public async metadataV1FieldsPost(appID: string, authToken: string, metadataFieldCreateSchema: MetadataFieldCreateSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1FieldsPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1FieldsPost", "authToken");
        }


        // verify required parameter 'metadataFieldCreateSchema' is not null or undefined
        if (metadataFieldCreateSchema === null || metadataFieldCreateSchema === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1FieldsPost", "metadataFieldCreateSchema");
        }


        // Path Params
        const localVarPath = '/metadata/v1/fields/';

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
            ObjectSerializer.serialize(metadataFieldCreateSchema, "MetadataFieldCreateSchema", ""),
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
     *  Required roles:  - can_read_metadata_fields 
     * Get the metadata field mapping
     * @param appID 
     * @param authToken 
     * @param fieldName 
     */
    public async metadataV1MappingFieldsFieldNameGet(appID: string, authToken: string, fieldName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1MappingFieldsFieldNameGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1MappingFieldsFieldNameGet", "authToken");
        }


        // verify required parameter 'fieldName' is not null or undefined
        if (fieldName === null || fieldName === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1MappingFieldsFieldNameGet", "fieldName");
        }


        // Path Params
        const localVarPath = '/metadata/v1/mapping/fields/{field_name}/'
            .replace('{' + 'field_name' + '}', encodeURIComponent(String(fieldName)));

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
     *  Required roles:  - can_read_metadata_fields 
     * Create a new metadata field mapping
     * @param appID 
     * @param authToken 
     * @param metadataFieldMappingSchema body
     */
    public async metadataV1MappingFieldsPost(appID: string, authToken: string, metadataFieldMappingSchema: MetadataFieldMappingSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1MappingFieldsPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1MappingFieldsPost", "authToken");
        }


        // verify required parameter 'metadataFieldMappingSchema' is not null or undefined
        if (metadataFieldMappingSchema === null || metadataFieldMappingSchema === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1MappingFieldsPost", "metadataFieldMappingSchema");
        }


        // Path Params
        const localVarPath = '/metadata/v1/mapping/fields/';

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
            ObjectSerializer.serialize(metadataFieldMappingSchema, "MetadataFieldMappingSchema", ""),
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
     *  Required roles:  - can_read_metadata_fields 
     * List the metadata field mapping options
     * @param appID 
     * @param authToken 
     */
    public async metadataV1MappingOptionsGet(appID: string, authToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1MappingOptionsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1MappingOptionsGet", "authToken");
        }


        // Path Params
        const localVarPath = '/metadata/v1/mapping/options/';

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
     *  Required roles:  - can_read_metadata_categories 
     * Get metadata categories
     * @param appID 
     * @param authToken 
     * @param objectType 
     */
    public async metadataV1ObjectTypeCategoriesGet(appID: string, authToken: string, objectType: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesGet", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesGet", "objectType");
        }


        // Path Params
        const localVarPath = '/metadata/v1/{object_type}/categories/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)));

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
     *  Required roles:  - can_delete_metadata_categories 
     * Delete metadata category by object type and category name
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param name 
     */
    public async metadataV1ObjectTypeCategoriesNameDelete(appID: string, authToken: string, objectType: string, name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesNameDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesNameDelete", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesNameDelete", "objectType");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesNameDelete", "name");
        }


        // Path Params
        const localVarPath = '/metadata/v1/{object_type}/categories/{name}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

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
     *  Required roles:  - can_read_metadata_categories 
     * Get metadata category by object type and category name
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param name 
     */
    public async metadataV1ObjectTypeCategoriesNameGet(appID: string, authToken: string, objectType: string, name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesNameGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesNameGet", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesNameGet", "objectType");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesNameGet", "name");
        }


        // Path Params
        const localVarPath = '/metadata/v1/{object_type}/categories/{name}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

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
     *  Required roles:  - can_write_metadata_categories 
     * Edit metadata category for an object type
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param name 
     * @param metadataCategorySchema body
     */
    public async metadataV1ObjectTypeCategoriesNamePut(appID: string, authToken: string, objectType: string, name: string, metadataCategorySchema: MetadataCategorySchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesNamePut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesNamePut", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesNamePut", "objectType");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesNamePut", "name");
        }


        // verify required parameter 'metadataCategorySchema' is not null or undefined
        if (metadataCategorySchema === null || metadataCategorySchema === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesNamePut", "metadataCategorySchema");
        }


        // Path Params
        const localVarPath = '/metadata/v1/{object_type}/categories/{name}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

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
            ObjectSerializer.serialize(metadataCategorySchema, "MetadataCategorySchema", ""),
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
     *  Required roles:  - can_read_metadata_categories 
     * Get metadata views with field for object type and category
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param name 
     * @param extOptions 
     * @param writableOnly 
     */
    public async metadataV1ObjectTypeCategoriesNameViewsGet(appID: string, authToken: string, objectType: string, name: string, extOptions?: boolean, writableOnly?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesNameViewsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesNameViewsGet", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesNameViewsGet", "objectType");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesNameViewsGet", "name");
        }




        // Path Params
        const localVarPath = '/metadata/v1/{object_type}/categories/{name}/views/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (extOptions !== undefined) {
            requestContext.setQueryParam("ext_options", ObjectSerializer.serialize(extOptions, "boolean", ""));
        }

        // Query Params
        if (writableOnly !== undefined) {
            requestContext.setQueryParam("writable_only", ObjectSerializer.serialize(writableOnly, "boolean", ""));
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
     *  Required roles:  - can_write_metadata_categories 
     * Add a metadata category for an object type
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param metadataCategorySchema body
     */
    public async metadataV1ObjectTypeCategoriesPost(appID: string, authToken: string, objectType: string, metadataCategorySchema: MetadataCategorySchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesPost", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesPost", "objectType");
        }


        // verify required parameter 'metadataCategorySchema' is not null or undefined
        if (metadataCategorySchema === null || metadataCategorySchema === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeCategoriesPost", "metadataCategorySchema");
        }


        // Path Params
        const localVarPath = '/metadata/v1/{object_type}/categories/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)));

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
            ObjectSerializer.serialize(metadataCategorySchema, "MetadataCategorySchema", ""),
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
     *  Required roles:  - can_write_metadata_values 
     * Edit view metadata values for collection or saved search content.
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param viewId 
     * @param collectionMetadataValuesBatchSchema body
     */
    public async metadataV1ObjectTypeContentViewsViewIdPut(appID: string, authToken: string, objectType: string, viewId: string, collectionMetadataValuesBatchSchema: CollectionMetadataValuesBatchSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeContentViewsViewIdPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeContentViewsViewIdPut", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeContentViewsViewIdPut", "objectType");
        }


        // verify required parameter 'viewId' is not null or undefined
        if (viewId === null || viewId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeContentViewsViewIdPut", "viewId");
        }


        // verify required parameter 'collectionMetadataValuesBatchSchema' is not null or undefined
        if (collectionMetadataValuesBatchSchema === null || collectionMetadataValuesBatchSchema === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeContentViewsViewIdPut", "collectionMetadataValuesBatchSchema");
        }


        // Path Params
        const localVarPath = '/metadata/v1/{object_type}/content/views/{view_id}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'view_id' + '}', encodeURIComponent(String(viewId)));

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
            ObjectSerializer.serialize(collectionMetadataValuesBatchSchema, "CollectionMetadataValuesBatchSchema", ""),
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
     * This endpoint is available only for admins
     * Get object metadata by object type and object ID
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param includeValuesForDeletedFields Filter out metadata field values, for deleted fields
     */
    public async metadataV1ObjectTypeObjectIdGet(appID: string, authToken: string, objectType: string, objectId: string, includeValuesForDeletedFields?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeObjectIdGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeObjectIdGet", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeObjectIdGet", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeObjectIdGet", "objectId");
        }



        // Path Params
        const localVarPath = '/metadata/v1/{object_type}/{object_id}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeValuesForDeletedFields !== undefined) {
            requestContext.setQueryParam("include_values_for_deleted_fields", ObjectSerializer.serialize(includeValuesForDeletedFields, "boolean", ""));
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
     * 
     * Edit metadata values directly without a view. Admin access required.
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param metadataValuesSchema body
     */
    public async metadataV1ObjectTypeObjectIdPut(appID: string, authToken: string, objectType: string, objectId: string, metadataValuesSchema: MetadataValuesSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeObjectIdPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeObjectIdPut", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeObjectIdPut", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeObjectIdPut", "objectId");
        }


        // verify required parameter 'metadataValuesSchema' is not null or undefined
        if (metadataValuesSchema === null || metadataValuesSchema === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeObjectIdPut", "metadataValuesSchema");
        }


        // Path Params
        const localVarPath = '/metadata/v1/{object_type}/{object_id}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)));

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
            ObjectSerializer.serialize(metadataValuesSchema, "MetadataValuesSchema", ""),
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
     *  Required roles:  - can_read_metadata_values 
     * Get object metadata by object type, object ID and view ID
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param viewId 
     */
    public async metadataV1ObjectTypeObjectIdViewsViewIdGet(appID: string, authToken: string, objectType: string, objectId: string, viewId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeObjectIdViewsViewIdGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeObjectIdViewsViewIdGet", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeObjectIdViewsViewIdGet", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeObjectIdViewsViewIdGet", "objectId");
        }


        // verify required parameter 'viewId' is not null or undefined
        if (viewId === null || viewId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeObjectIdViewsViewIdGet", "viewId");
        }


        // Path Params
        const localVarPath = '/metadata/v1/{object_type}/{object_id}/views/{view_id}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'view_id' + '}', encodeURIComponent(String(viewId)));

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
     *  Required roles:  - can_write_metadata_values 
     * Edit view metadata values for a single object
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param viewId 
     * @param metadataValuesSchema body
     */
    public async metadataV1ObjectTypeObjectIdViewsViewIdPut(appID: string, authToken: string, objectType: string, objectId: string, viewId: string, metadataValuesSchema: MetadataValuesSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeObjectIdViewsViewIdPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeObjectIdViewsViewIdPut", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeObjectIdViewsViewIdPut", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeObjectIdViewsViewIdPut", "objectId");
        }


        // verify required parameter 'viewId' is not null or undefined
        if (viewId === null || viewId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeObjectIdViewsViewIdPut", "viewId");
        }


        // verify required parameter 'metadataValuesSchema' is not null or undefined
        if (metadataValuesSchema === null || metadataValuesSchema === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeObjectIdViewsViewIdPut", "metadataValuesSchema");
        }


        // Path Params
        const localVarPath = '/metadata/v1/{object_type}/{object_id}/views/{view_id}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'view_id' + '}', encodeURIComponent(String(viewId)));

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
            ObjectSerializer.serialize(metadataValuesSchema, "MetadataValuesSchema", ""),
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
     *  Required roles:  - can_write_metadata_values 
     * Add view metadata values for multiple objects (Assets, Collections or Segments)
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param viewId 
     * @param createMetadataValuesBatchSchema body
     */
    public async metadataV1ObjectTypeViewsViewIdPost(appID: string, authToken: string, objectType: string, viewId: string, createMetadataValuesBatchSchema: CreateMetadataValuesBatchSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeViewsViewIdPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeViewsViewIdPost", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeViewsViewIdPost", "objectType");
        }


        // verify required parameter 'viewId' is not null or undefined
        if (viewId === null || viewId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeViewsViewIdPost", "viewId");
        }


        // verify required parameter 'createMetadataValuesBatchSchema' is not null or undefined
        if (createMetadataValuesBatchSchema === null || createMetadataValuesBatchSchema === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeViewsViewIdPost", "createMetadataValuesBatchSchema");
        }


        // Path Params
        const localVarPath = '/metadata/v1/{object_type}/views/{view_id}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'view_id' + '}', encodeURIComponent(String(viewId)));

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
            ObjectSerializer.serialize(createMetadataValuesBatchSchema, "CreateMetadataValuesBatchSchema", ""),
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
     *  Required roles:  - can_write_metadata_values 
     * Edit view metadata values for multiple objects (Assets, Collections or Segments)
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param viewId 
     * @param metadataValuesBatchSchema body
     */
    public async metadataV1ObjectTypeViewsViewIdPut(appID: string, authToken: string, objectType: string, viewId: string, metadataValuesBatchSchema: MetadataValuesBatchSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeViewsViewIdPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeViewsViewIdPut", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeViewsViewIdPut", "objectType");
        }


        // verify required parameter 'viewId' is not null or undefined
        if (viewId === null || viewId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeViewsViewIdPut", "viewId");
        }


        // verify required parameter 'metadataValuesBatchSchema' is not null or undefined
        if (metadataValuesBatchSchema === null || metadataValuesBatchSchema === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ObjectTypeViewsViewIdPut", "metadataValuesBatchSchema");
        }


        // Path Params
        const localVarPath = '/metadata/v1/{object_type}/views/{view_id}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'view_id' + '}', encodeURIComponent(String(viewId)));

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
            ObjectSerializer.serialize(metadataValuesBatchSchema, "MetadataValuesBatchSchema", ""),
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
     *  Required roles:  - can_read_metadata_fields 
     * List the fields that can be accessed by a user
     * @param appID 
     * @param authToken 
     */
    public async metadataV1UserFieldsGet(appID: string, authToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1UserFieldsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1UserFieldsGet", "authToken");
        }


        // Path Params
        const localVarPath = '/metadata/v1/user/fields/';

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
     *  Required roles:  - can_read_metadata_views 
     * List the views defined in the system
     * @param appID 
     * @param authToken 
     */
    public async metadataV1ViewsGet(appID: string, authToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ViewsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ViewsGet", "authToken");
        }


        // Path Params
        const localVarPath = '/metadata/v1/views/';

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
     *  Required roles:  - can_write_metadata_views 
     * Create a new view
     * @param appID 
     * @param authToken 
     * @param metadataViewInputSchema body
     */
    public async metadataV1ViewsPost(appID: string, authToken: string, metadataViewInputSchema: MetadataViewInputSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ViewsPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ViewsPost", "authToken");
        }


        // verify required parameter 'metadataViewInputSchema' is not null or undefined
        if (metadataViewInputSchema === null || metadataViewInputSchema === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ViewsPost", "metadataViewInputSchema");
        }


        // Path Params
        const localVarPath = '/metadata/v1/views/';

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
            ObjectSerializer.serialize(metadataViewInputSchema, "MetadataViewInputSchema", ""),
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
     *  Required roles:  - can_delete_metadata_views 
     * Delete a particular view by id
     * @param appID 
     * @param authToken 
     * @param viewId 
     */
    public async metadataV1ViewsViewIdDelete(appID: string, authToken: string, viewId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ViewsViewIdDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ViewsViewIdDelete", "authToken");
        }


        // verify required parameter 'viewId' is not null or undefined
        if (viewId === null || viewId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ViewsViewIdDelete", "viewId");
        }


        // Path Params
        const localVarPath = '/metadata/v1/views/{view_id}/'
            .replace('{' + 'view_id' + '}', encodeURIComponent(String(viewId)));

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
     *  Required roles:  - can_read_metadata_views 
     * Returns a particular view by id
     * @param appID 
     * @param authToken 
     * @param viewId 
     * @param mergeFields 
     */
    public async metadataV1ViewsViewIdGet(appID: string, authToken: string, viewId: string, mergeFields?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ViewsViewIdGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ViewsViewIdGet", "authToken");
        }


        // verify required parameter 'viewId' is not null or undefined
        if (viewId === null || viewId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ViewsViewIdGet", "viewId");
        }



        // Path Params
        const localVarPath = '/metadata/v1/views/{view_id}/'
            .replace('{' + 'view_id' + '}', encodeURIComponent(String(viewId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (mergeFields !== undefined) {
            requestContext.setQueryParam("merge_fields", ObjectSerializer.serialize(mergeFields, "boolean", ""));
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
     *  Required roles:  - can_write_metadata_views 
     * Update view
     * @param appID 
     * @param authToken 
     * @param viewId 
     * @param metadataViewInputSchema body
     */
    public async metadataV1ViewsViewIdPatch(appID: string, authToken: string, viewId: string, metadataViewInputSchema: MetadataViewInputSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ViewsViewIdPatch", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ViewsViewIdPatch", "authToken");
        }


        // verify required parameter 'viewId' is not null or undefined
        if (viewId === null || viewId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ViewsViewIdPatch", "viewId");
        }


        // verify required parameter 'metadataViewInputSchema' is not null or undefined
        if (metadataViewInputSchema === null || metadataViewInputSchema === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ViewsViewIdPatch", "metadataViewInputSchema");
        }


        // Path Params
        const localVarPath = '/metadata/v1/views/{view_id}/'
            .replace('{' + 'view_id' + '}', encodeURIComponent(String(viewId)));

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
            ObjectSerializer.serialize(metadataViewInputSchema, "MetadataViewInputSchema", ""),
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
     *  Required roles:  - can_write_metadata_views 
     * Update view
     * @param appID 
     * @param authToken 
     * @param viewId 
     * @param metadataViewInputSchema body
     */
    public async metadataV1ViewsViewIdPut(appID: string, authToken: string, viewId: string, metadataViewInputSchema: MetadataViewInputSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ViewsViewIdPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ViewsViewIdPut", "authToken");
        }


        // verify required parameter 'viewId' is not null or undefined
        if (viewId === null || viewId === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ViewsViewIdPut", "viewId");
        }


        // verify required parameter 'metadataViewInputSchema' is not null or undefined
        if (metadataViewInputSchema === null || metadataViewInputSchema === undefined) {
            throw new RequiredError("MetadataApi", "metadataV1ViewsViewIdPut", "metadataViewInputSchema");
        }


        // Path Params
        const localVarPath = '/metadata/v1/views/{view_id}/'
            .replace('{' + 'view_id' + '}', encodeURIComponent(String(viewId)));

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
            ObjectSerializer.serialize(metadataViewInputSchema, "MetadataViewInputSchema", ""),
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

export class MetadataApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataValuesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataValuesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataValuesSchema", ""
            ) as MetadataValuesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata values for this object and view doesn\&#39;t exist", undefined, response.headers);
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
            const body: MetadataValuesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataValuesSchema", ""
            ) as MetadataValuesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataValuesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataValuesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataValuesSchema", ""
            ) as MetadataValuesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata view doesn\&#39;t exist", undefined, response.headers);
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
            const body: MetadataValuesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataValuesSchema", ""
            ) as MetadataValuesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataValuesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataValuesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataValuesSchema", ""
            ) as MetadataValuesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata values for this object and view doesn\&#39;t exist", undefined, response.headers);
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
            const body: MetadataValuesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataValuesSchema", ""
            ) as MetadataValuesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataValuesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataValuesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataValuesSchema", ""
            ) as MetadataValuesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata values for this object and view doesn\&#39;t exist", undefined, response.headers);
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
            const body: MetadataValuesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataValuesSchema", ""
            ) as MetadataValuesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1FieldsFieldNameDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1FieldsFieldNameDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata field doesn\&#39;t exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to metadataV1FieldsFieldNameGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1FieldsFieldNameGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataFieldSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataFieldSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataFieldSchema", ""
            ) as MetadataFieldSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata field doesn\&#39;t exist", undefined, response.headers);
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
            const body: MetadataFieldSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataFieldSchema", ""
            ) as MetadataFieldSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1FieldsFieldNamePatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1FieldsFieldNamePatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataFieldSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataFieldSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataFieldSchema", ""
            ) as MetadataFieldSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata field doesn\&#39;t exist", undefined, response.headers);
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
            const body: MetadataFieldSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataFieldSchema", ""
            ) as MetadataFieldSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1FieldsFieldNamePut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1FieldsFieldNamePutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataFieldSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataFieldSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataFieldSchema", ""
            ) as MetadataFieldSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata field doesn\&#39;t exist", undefined, response.headers);
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
            const body: MetadataFieldSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataFieldSchema", ""
            ) as MetadataFieldSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1FieldsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1FieldsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataFieldsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataFieldsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataFieldsSchema", ""
            ) as MetadataFieldsSchema;
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
            const body: MetadataFieldsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataFieldsSchema", ""
            ) as MetadataFieldsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1FieldsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1FieldsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataFieldSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: MetadataFieldSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataFieldSchema", ""
            ) as MetadataFieldSchema;
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
            const body: MetadataFieldSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataFieldSchema", ""
            ) as MetadataFieldSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1MappingFieldsFieldNameGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1MappingFieldsFieldNameGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataFieldMappingSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataFieldMappingSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataFieldMappingSchema", ""
            ) as MetadataFieldMappingSchema;
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
            const body: MetadataFieldMappingSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataFieldMappingSchema", ""
            ) as MetadataFieldMappingSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1MappingFieldsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1MappingFieldsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataFieldMappingSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: MetadataFieldMappingSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataFieldMappingSchema", ""
            ) as MetadataFieldMappingSchema;
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
            const body: MetadataFieldMappingSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataFieldMappingSchema", ""
            ) as MetadataFieldMappingSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1MappingOptionsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1MappingOptionsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataFieldMappingOptionsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataFieldMappingOptionsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataFieldMappingOptionsSchema", ""
            ) as MetadataFieldMappingOptionsSchema;
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
            const body: MetadataFieldMappingOptionsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataFieldMappingOptionsSchema", ""
            ) as MetadataFieldMappingOptionsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1ObjectTypeCategoriesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1ObjectTypeCategoriesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataCategoriesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataCategoriesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataCategoriesSchema", ""
            ) as MetadataCategoriesSchema;
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
            const body: MetadataCategoriesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataCategoriesSchema", ""
            ) as MetadataCategoriesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1ObjectTypeCategoriesNameDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1ObjectTypeCategoriesNameDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata category by object type and category name doesn\&#39;t exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to metadataV1ObjectTypeCategoriesNameGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1ObjectTypeCategoriesNameGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataCategorySchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataCategorySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataCategorySchema", ""
            ) as MetadataCategorySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata category by object type and category name doesn\&#39;t exist", undefined, response.headers);
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
            const body: MetadataCategorySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataCategorySchema", ""
            ) as MetadataCategorySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1ObjectTypeCategoriesNamePut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1ObjectTypeCategoriesNamePutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataCategorySchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataCategorySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataCategorySchema", ""
            ) as MetadataCategorySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata category for this object type doesn\&#39;t exist", undefined, response.headers);
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
            const body: MetadataCategorySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataCategorySchema", ""
            ) as MetadataCategorySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1ObjectTypeCategoriesNameViewsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1ObjectTypeCategoriesNameViewsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataCategorySchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataCategorySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataCategorySchema", ""
            ) as MetadataCategorySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata views with field for object type and category doesn\&#39;t exist", undefined, response.headers);
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
            const body: MetadataCategorySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataCategorySchema", ""
            ) as MetadataCategorySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1ObjectTypeCategoriesPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1ObjectTypeCategoriesPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataCategorySchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: MetadataCategorySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataCategorySchema", ""
            ) as MetadataCategorySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "A category with the same name and object_type already exists", undefined, response.headers);
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
            const body: MetadataCategorySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataCategorySchema", ""
            ) as MetadataCategorySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1ObjectTypeContentViewsViewIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1ObjectTypeContentViewsViewIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata view doesn\&#39;t exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to metadataV1ObjectTypeObjectIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1ObjectTypeObjectIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataValuesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataValuesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataValuesSchema", ""
            ) as MetadataValuesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata values for this object don\&#39;t exist", undefined, response.headers);
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
            const body: MetadataValuesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataValuesSchema", ""
            ) as MetadataValuesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1ObjectTypeObjectIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1ObjectTypeObjectIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataValuesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataValuesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataValuesSchema", ""
            ) as MetadataValuesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata view doesn\&#39;t exist", undefined, response.headers);
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
            const body: MetadataValuesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataValuesSchema", ""
            ) as MetadataValuesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1ObjectTypeObjectIdViewsViewIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1ObjectTypeObjectIdViewsViewIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataValuesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataValuesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataValuesSchema", ""
            ) as MetadataValuesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata values for this object and view doesn\&#39;t exist", undefined, response.headers);
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
            const body: MetadataValuesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataValuesSchema", ""
            ) as MetadataValuesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1ObjectTypeObjectIdViewsViewIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1ObjectTypeObjectIdViewsViewIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataValuesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataValuesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataValuesSchema", ""
            ) as MetadataValuesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata view doesn\&#39;t exist", undefined, response.headers);
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
            const body: MetadataValuesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataValuesSchema", ""
            ) as MetadataValuesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1ObjectTypeViewsViewIdPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1ObjectTypeViewsViewIdPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata view doesn\&#39;t exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to metadataV1ObjectTypeViewsViewIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1ObjectTypeViewsViewIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata view doesn\&#39;t exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to metadataV1UserFieldsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1UserFieldsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataFieldsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataFieldsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataFieldsSchema", ""
            ) as MetadataFieldsSchema;
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
            const body: MetadataFieldsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataFieldsSchema", ""
            ) as MetadataFieldsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1ViewsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1ViewsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataViewsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataViewsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataViewsSchema", ""
            ) as MetadataViewsSchema;
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
            const body: MetadataViewsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataViewsSchema", ""
            ) as MetadataViewsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1ViewsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1ViewsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataViewSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: MetadataViewSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataViewSchema", ""
            ) as MetadataViewSchema;
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
            const body: MetadataViewSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataViewSchema", ""
            ) as MetadataViewSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1ViewsViewIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1ViewsViewIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata view doesn\&#39;t exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to metadataV1ViewsViewIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1ViewsViewIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataViewSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataViewSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataViewSchema", ""
            ) as MetadataViewSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata view doesn\&#39;t exist", undefined, response.headers);
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
            const body: MetadataViewSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataViewSchema", ""
            ) as MetadataViewSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1ViewsViewIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1ViewsViewIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataViewSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataViewSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataViewSchema", ""
            ) as MetadataViewSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata view doesn\&#39;t exist", undefined, response.headers);
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
            const body: MetadataViewSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataViewSchema", ""
            ) as MetadataViewSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metadataV1ViewsViewIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metadataV1ViewsViewIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetadataViewSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetadataViewSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataViewSchema", ""
            ) as MetadataViewSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Metadata view doesn\&#39;t exist", undefined, response.headers);
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
            const body: MetadataViewSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetadataViewSchema", ""
            ) as MetadataViewSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
