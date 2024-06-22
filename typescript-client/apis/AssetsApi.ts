// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AclsV1AclPostDefaultResponse } from '../models/AclsV1AclPostDefaultResponse';
import { ApprovalBySchema } from '../models/ApprovalBySchema';
import { ApprovalSchema } from '../models/ApprovalSchema';
import { ApprovalsBySchema } from '../models/ApprovalsBySchema';
import { AssetCreateSchema } from '../models/AssetCreateSchema';
import { AssetElasticSchema } from '../models/AssetElasticSchema';
import { AssetHistoryEntitiesSchema } from '../models/AssetHistoryEntitiesSchema';
import { AssetHistorySchema } from '../models/AssetHistorySchema';
import { AssetSchema } from '../models/AssetSchema';
import { AssetTranscriptionFromSubtitleSchema } from '../models/AssetTranscriptionFromSubtitleSchema';
import { AssetTranscriptionPropertiesSchema } from '../models/AssetTranscriptionPropertiesSchema';
import { AssetTranscriptionsPropertiesSchema } from '../models/AssetTranscriptionsPropertiesSchema';
import { AssetVersionSchema } from '../models/AssetVersionSchema';
import { AssetVersionsSchema } from '../models/AssetVersionsSchema';
import { AssetsSchema } from '../models/AssetsSchema';
import { BulkAddToFavoritesSchema } from '../models/BulkAddToFavoritesSchema';
import { BulkAssetEditSchema } from '../models/BulkAssetEditSchema';
import { BulkCreateSegmentsSchema } from '../models/BulkCreateSegmentsSchema';
import { BulkDeleteFromFavoritesSchema } from '../models/BulkDeleteFromFavoritesSchema';
import { BulkDeleteSchema } from '../models/BulkDeleteSchema';
import { BulkRemoveApprovalSchema } from '../models/BulkRemoveApprovalSchema';
import { BulkSetApprovalSchema } from '../models/BulkSetApprovalSchema';
import { BulkShareCreateSchema } from '../models/BulkShareCreateSchema';
import { CollectionContentInfoSchema } from '../models/CollectionContentInfoSchema';
import { CollectionContentOrderingSchema } from '../models/CollectionContentOrderingSchema';
import { CollectionContentSchema } from '../models/CollectionContentSchema';
import { CollectionInputSchema } from '../models/CollectionInputSchema';
import { CollectionSchema } from '../models/CollectionSchema';
import { CollectionSizeSchema } from '../models/CollectionSizeSchema';
import { CollectionsSchema } from '../models/CollectionsSchema';
import { CreateAssetVersionFromAssetSchema } from '../models/CreateAssetVersionFromAssetSchema';
import { CreateAssetVersionFromVersionSchema } from '../models/CreateAssetVersionFromVersionSchema';
import { CreateAssetVersionSchema } from '../models/CreateAssetVersionSchema';
import { CreateCollectionContentOrderingSchema } from '../models/CreateCollectionContentOrderingSchema';
import { CustomActionCallbackReplySchema } from '../models/CustomActionCallbackReplySchema';
import { CustomActionCallbackSchema } from '../models/CustomActionCallbackSchema';
import { CustomActionSchema } from '../models/CustomActionSchema';
import { CustomActionsSchema } from '../models/CustomActionsSchema';
import { DeleteQueueSchema } from '../models/DeleteQueueSchema';
import { DeleteSegmentsSchema } from '../models/DeleteSegmentsSchema';
import { EditSegmentSchema } from '../models/EditSegmentSchema';
import { FavoritesSchema } from '../models/FavoritesSchema';
import { ReindexAllAssetsSchema } from '../models/ReindexAllAssetsSchema';
import { ReindexAllCollectionsSchema } from '../models/ReindexAllCollectionsSchema';
import { ReindexAllSegmentsSchema } from '../models/ReindexAllSegmentsSchema';
import { ReindexAssetSchema } from '../models/ReindexAssetSchema';
import { ReindexCollectionContentSchema } from '../models/ReindexCollectionContentSchema';
import { ReindexCollectionSchema } from '../models/ReindexCollectionSchema';
import { ReindexSegmentSchema } from '../models/ReindexSegmentSchema';
import { ReindexSegmentsSchema } from '../models/ReindexSegmentsSchema';
import { RelationSchema } from '../models/RelationSchema';
import { RelationTypeSchema } from '../models/RelationTypeSchema';
import { RelationTypesSchema } from '../models/RelationTypesSchema';
import { SegmentSchema } from '../models/SegmentSchema';
import { SegmentsSchema } from '../models/SegmentsSchema';
import { ShareCreateSchema } from '../models/ShareCreateSchema';
import { ShareLoginSchema } from '../models/ShareLoginSchema';
import { ShareSchema } from '../models/ShareSchema';
import { ShareTokenSchema } from '../models/ShareTokenSchema';
import { ShareURLCreateSchema } from '../models/ShareURLCreateSchema';
import { ShareURLSchema } from '../models/ShareURLSchema';
import { ShareUserSchema } from '../models/ShareUserSchema';
import { ShareUsersSchema } from '../models/ShareUsersSchema';
import { SharesSchema } from '../models/SharesSchema';
import { SynchronizeCollectionKeyframesSchema } from '../models/SynchronizeCollectionKeyframesSchema';

/**
 * no description
 */
export class AssetsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     *  Required roles:  - can_write_approval_status_in_bulk 
     * Create a job for bulk request & set approval
     * @param authToken 
     * @param appID 
     * @param bulkSetApprovalSchema body
     */
    public async assetsV1ApprovalsBulkPost(authToken: string, appID: string, bulkSetApprovalSchema: BulkSetApprovalSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ApprovalsBulkPost", "authToken");
        }


        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ApprovalsBulkPost", "appID");
        }


        // verify required parameter 'bulkSetApprovalSchema' is not null or undefined
        if (bulkSetApprovalSchema === null || bulkSetApprovalSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ApprovalsBulkPost", "bulkSetApprovalSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/approvals/bulk/';

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
            ObjectSerializer.serialize(bulkSetApprovalSchema, "BulkSetApprovalSchema", ""),
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
     *  Required roles:  - can_write_approval_status_in_bulk 
     * Create a job for bulk approval status removal
     * @param authToken 
     * @param appID 
     * @param bulkRemoveApprovalSchema body
     */
    public async assetsV1ApprovalsBulkRemovePost(authToken: string, appID: string, bulkRemoveApprovalSchema: BulkRemoveApprovalSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ApprovalsBulkRemovePost", "authToken");
        }


        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ApprovalsBulkRemovePost", "appID");
        }


        // verify required parameter 'bulkRemoveApprovalSchema' is not null or undefined
        if (bulkRemoveApprovalSchema === null || bulkRemoveApprovalSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ApprovalsBulkRemovePost", "bulkRemoveApprovalSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/approvals/bulk_remove/';

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
            ObjectSerializer.serialize(bulkRemoveApprovalSchema, "BulkRemoveApprovalSchema", ""),
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
     *  Required roles:  - can_delete_assets 
     * Delete a particular asset by id
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public async assetsV1AssetsAssetIdDelete(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdDelete", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdDelete", "assetId");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

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
     *  Required roles:  - can_read_assets 
     * Returns a particular asset by id
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param includeCollections include collection membership
     * @param includeUsers include info about the users who have interacted with this asset
     */
    public async assetsV1AssetsAssetIdGet(appID: string, authToken: string, assetId: string, includeCollections?: boolean, includeUsers?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdGet", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdGet", "assetId");
        }




        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeCollections !== undefined) {
            requestContext.setQueryParam("include_collections", ObjectSerializer.serialize(includeCollections, "boolean", ""));
        }

        // Query Params
        if (includeUsers !== undefined) {
            requestContext.setQueryParam("include_users", ObjectSerializer.serialize(includeUsers, "boolean", ""));
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
     *  Required roles:  - can_read_assets_history 
     * Get list of assets
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param filter A comma separated list of fieldnames with order For example - first_name,eq,Vlad;last_name,eq,Gudkov
     */
    public async assetsV1AssetsAssetIdHistoryGet(appID: string, authToken: string, assetId: string, perPage?: number, page?: number, sort?: string, filter?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdHistoryGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdHistoryGet", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdHistoryGet", "assetId");
        }






        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/history/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int32"));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
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
     *  Required roles:  - can_delete_assets_history 
     * Deletes an asset history entity
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param historyEntityId 
     */
    public async assetsV1AssetsAssetIdHistoryHistoryEntityIdDelete(appID: string, authToken: string, assetId: string, historyEntityId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdHistoryHistoryEntityIdDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdHistoryHistoryEntityIdDelete", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdHistoryHistoryEntityIdDelete", "assetId");
        }


        // verify required parameter 'historyEntityId' is not null or undefined
        if (historyEntityId === null || historyEntityId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdHistoryHistoryEntityIdDelete", "historyEntityId");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/history/{history_entity_id}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'history_entity_id' + '}', encodeURIComponent(String(historyEntityId)));

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
     *  Required roles:  - can_read_assets_history 
     * Get an asset history entity
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param historyEntityId 
     */
    public async assetsV1AssetsAssetIdHistoryHistoryEntityIdGet(appID: string, authToken: string, assetId: string, historyEntityId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdHistoryHistoryEntityIdGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdHistoryHistoryEntityIdGet", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdHistoryHistoryEntityIdGet", "assetId");
        }


        // verify required parameter 'historyEntityId' is not null or undefined
        if (historyEntityId === null || historyEntityId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdHistoryHistoryEntityIdGet", "historyEntityId");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/history/{history_entity_id}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'history_entity_id' + '}', encodeURIComponent(String(historyEntityId)));

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
     *  Required roles:  - can_reindex_assets_history 
     * Reindex asset history entity
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param historyEntityId 
     */
    public async assetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPost(appID: string, authToken: string, assetId: string, historyEntityId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPost", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPost", "assetId");
        }


        // verify required parameter 'historyEntityId' is not null or undefined
        if (historyEntityId === null || historyEntityId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPost", "historyEntityId");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/history/{history_entity_id}/reindex/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'history_entity_id' + '}', encodeURIComponent(String(historyEntityId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     *  Required roles:  - can_write_assets_history 
     * Create an asset history entity
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param assetHistorySchema body
     */
    public async assetsV1AssetsAssetIdHistoryPost(appID: string, authToken: string, assetId: string, assetHistorySchema: AssetHistorySchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdHistoryPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdHistoryPost", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdHistoryPost", "assetId");
        }


        // verify required parameter 'assetHistorySchema' is not null or undefined
        if (assetHistorySchema === null || assetHistorySchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdHistoryPost", "assetHistorySchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/history/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

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
            ObjectSerializer.serialize(assetHistorySchema, "AssetHistorySchema", ""),
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
     *  Required roles:  - can_write_assets 
     * Update asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param assetSchema body
     */
    public async assetsV1AssetsAssetIdPatch(appID: string, authToken: string, assetId: string, assetSchema: AssetSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdPatch", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdPatch", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdPatch", "assetId");
        }


        // verify required parameter 'assetSchema' is not null or undefined
        if (assetSchema === null || assetSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdPatch", "assetSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

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
            ObjectSerializer.serialize(assetSchema, "AssetSchema", ""),
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
     *  Required roles:  - can_purge_assets 
     * Purges a particular asset by id immediately
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public async assetsV1AssetsAssetIdPurgeDelete(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdPurgeDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdPurgeDelete", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdPurgeDelete", "assetId");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/purge/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

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
     *  Required roles:  - can_write_assets 
     * Update asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param assetSchema body
     */
    public async assetsV1AssetsAssetIdPut(appID: string, authToken: string, assetId: string, assetSchema: AssetSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdPut", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdPut", "assetId");
        }


        // verify required parameter 'assetSchema' is not null or undefined
        if (assetSchema === null || assetSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdPut", "assetSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

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
            ObjectSerializer.serialize(assetSchema, "AssetSchema", ""),
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
     *  Required roles:  - can_reindex_assets 
     * Reindex asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param reindexAssetSchema body
     */
    public async assetsV1AssetsAssetIdReindexPost(appID: string, authToken: string, assetId: string, reindexAssetSchema: ReindexAssetSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdReindexPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdReindexPost", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdReindexPost", "assetId");
        }


        // verify required parameter 'reindexAssetSchema' is not null or undefined
        if (reindexAssetSchema === null || reindexAssetSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdReindexPost", "reindexAssetSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/reindex/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

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
            ObjectSerializer.serialize(reindexAssetSchema, "ReindexAssetSchema", ""),
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
     *  Required roles:  - can_read_asset_relations 
     * Returns an assets relations
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param includeDeleted Also show assets from recycle bin in relations
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     */
    public async assetsV1AssetsAssetIdRelationsGet(appID: string, authToken: string, assetId: string, includeDeleted?: boolean, perPage?: number, page?: number, sort?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsGet", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsGet", "assetId");
        }






        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/relations/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeDeleted !== undefined) {
            requestContext.setQueryParam("include_deleted", ObjectSerializer.serialize(includeDeleted, "boolean", ""));
        }

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int32"));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
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
     *  Required roles:  - can_create_asset_relations 
     * Create a new asset relation
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param relationSchema body
     */
    public async assetsV1AssetsAssetIdRelationsPost(appID: string, authToken: string, assetId: string, relationSchema: RelationSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsPost", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsPost", "assetId");
        }


        // verify required parameter 'relationSchema' is not null or undefined
        if (relationSchema === null || relationSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsPost", "relationSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/relations/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

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
            ObjectSerializer.serialize(relationSchema, "RelationSchema", ""),
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
     *  Required roles:  - can_read_asset_relations 
     * Returns assets that has a relation to this asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param relationType 
     * @param includeDeleted Also show assets from recycle bin in relations
     */
    public async assetsV1AssetsAssetIdRelationsRelationTypeGet(appID: string, authToken: string, assetId: string, relationType: string, includeDeleted?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsRelationTypeGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsRelationTypeGet", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsRelationTypeGet", "assetId");
        }


        // verify required parameter 'relationType' is not null or undefined
        if (relationType === null || relationType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsRelationTypeGet", "relationType");
        }



        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/relations/{relation_type}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'relation_type' + '}', encodeURIComponent(String(relationType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeDeleted !== undefined) {
            requestContext.setQueryParam("include_deleted", ObjectSerializer.serialize(includeDeleted, "boolean", ""));
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
     *  Required roles:  - can_delete_asset_relations 
     * Delete a particular asset by id
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param relationType 
     * @param relatedToAssetId 
     */
    public async assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDelete(appID: string, authToken: string, assetId: string, relationType: string, relatedToAssetId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDelete", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDelete", "assetId");
        }


        // verify required parameter 'relationType' is not null or undefined
        if (relationType === null || relationType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDelete", "relationType");
        }


        // verify required parameter 'relatedToAssetId' is not null or undefined
        if (relatedToAssetId === null || relatedToAssetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDelete", "relatedToAssetId");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/relations/{relation_type}/{related_to_asset_id}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'relation_type' + '}', encodeURIComponent(String(relationType)))
            .replace('{' + 'related_to_asset_id' + '}', encodeURIComponent(String(relatedToAssetId)));

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
     *  Required roles:  - can_create_asset_relations 
     * Create a new asset relation
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param relationType 
     * @param relatedToAssetId 
     * @param relationSchema body
     */
    public async assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPost(appID: string, authToken: string, assetId: string, relationType: string, relatedToAssetId: string, relationSchema: RelationSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPost", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPost", "assetId");
        }


        // verify required parameter 'relationType' is not null or undefined
        if (relationType === null || relationType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPost", "relationType");
        }


        // verify required parameter 'relatedToAssetId' is not null or undefined
        if (relatedToAssetId === null || relatedToAssetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPost", "relatedToAssetId");
        }


        // verify required parameter 'relationSchema' is not null or undefined
        if (relationSchema === null || relationSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPost", "relationSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/relations/{relation_type}/{related_to_asset_id}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'relation_type' + '}', encodeURIComponent(String(relationType)))
            .replace('{' + 'related_to_asset_id' + '}', encodeURIComponent(String(relatedToAssetId)));

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
            ObjectSerializer.serialize(relationSchema, "RelationSchema", ""),
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
     *  Required roles:  - can_create_asset_relations 
     * Reverse a particular asset\'s relation
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param relationType 
     * @param relatedToAssetId 
     */
    public async assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePost(appID: string, authToken: string, assetId: string, relationType: string, relatedToAssetId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePost", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePost", "assetId");
        }


        // verify required parameter 'relationType' is not null or undefined
        if (relationType === null || relationType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePost", "relationType");
        }


        // verify required parameter 'relatedToAssetId' is not null or undefined
        if (relatedToAssetId === null || relatedToAssetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePost", "relatedToAssetId");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/relations/{relation_type}/{related_to_asset_id}/reverse/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'relation_type' + '}', encodeURIComponent(String(relationType)))
            .replace('{' + 'related_to_asset_id' + '}', encodeURIComponent(String(relatedToAssetId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     *  Required roles:  - can_write_assets 
     * Restore deleted asset by id
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public async assetsV1AssetsAssetIdRestorePut(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRestorePut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRestorePut", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdRestorePut", "assetId");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/restore/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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
     *  Required roles:  - can_reindex_assets 
     * Update metadata for asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param assetElasticSchema body
     */
    public async assetsV1AssetsAssetIdSearchDocumentPut(appID: string, authToken: string, assetId: string, assetElasticSchema: AssetElasticSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSearchDocumentPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSearchDocumentPut", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSearchDocumentPut", "assetId");
        }


        // verify required parameter 'assetElasticSchema' is not null or undefined
        if (assetElasticSchema === null || assetElasticSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSearchDocumentPut", "assetElasticSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/search_document/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

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
            ObjectSerializer.serialize(assetElasticSchema, "AssetElasticSchema", ""),
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
     *  Required roles:  - can_delete_segments 
     * Delete segments with either ids or by type
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param deleteSegmentsSchema body
     * @param immediately If false, delete segments asynchronously
     * @param ignoreReindexing If false, reindex
     */
    public async assetsV1AssetsAssetIdSegmentsBulkDelete(appID: string, authToken: string, assetId: string, deleteSegmentsSchema: DeleteSegmentsSchema, immediately?: boolean, ignoreReindexing?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsBulkDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsBulkDelete", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsBulkDelete", "assetId");
        }


        // verify required parameter 'deleteSegmentsSchema' is not null or undefined
        if (deleteSegmentsSchema === null || deleteSegmentsSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsBulkDelete", "deleteSegmentsSchema");
        }




        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/segments/bulk/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (immediately !== undefined) {
            requestContext.setQueryParam("immediately", ObjectSerializer.serialize(immediately, "boolean", ""));
        }

        // Query Params
        if (ignoreReindexing !== undefined) {
            requestContext.setQueryParam("ignore_reindexing", ObjectSerializer.serialize(ignoreReindexing, "boolean", ""));
        }

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
            ObjectSerializer.serialize(deleteSegmentsSchema, "DeleteSegmentsSchema", ""),
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
     *  Required roles:  - can_create_segments 
     * Create multiple new segments for a single asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param bulkCreateSegmentsSchema body
     */
    public async assetsV1AssetsAssetIdSegmentsBulkPost(appID: string, authToken: string, assetId: string, bulkCreateSegmentsSchema: BulkCreateSegmentsSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsBulkPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsBulkPost", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsBulkPost", "assetId");
        }


        // verify required parameter 'bulkCreateSegmentsSchema' is not null or undefined
        if (bulkCreateSegmentsSchema === null || bulkCreateSegmentsSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsBulkPost", "bulkCreateSegmentsSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/segments/bulk/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

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
            ObjectSerializer.serialize(bulkCreateSegmentsSchema, "BulkCreateSegmentsSchema", ""),
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
     *  Required roles:  - can_read_segments 
     * List of segments
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param sort Sort on field (Comma separated)
     * @param ids Only include these segments (Comma separated)
     * @param query Search using query
     * @param includes Only include fields (Comma separated)
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param scroll If true passed then uses scroll pagination instead of default one
     * @param scrollId In order to get next batch of results using scroll pagination the scroll_id is required 
     * @param transcriptionId Filter segments by transcription_id
     * @param versionId Filter segments by version_id
     * @param segmentType Filter segments by segment_type
     * @param segmentColor Filter segments by segment_color
     * @param timeStartMilliseconds Filter segments by time_start_milliseconds
     * @param timeEndMilliseconds Filter segments by time_end_milliseconds
     * @param timeStartMillisecondsGte Get segments with start time greater than or equal to time_start_milliseconds__gte 
     * @param timeEndMillisecondsLte Get segments with end time less than or equal to time_end_milliseconds__lte
     * @param status Filter segments by status
     * @param includeUsers Include segment\&#39;s authors info
     */
    public async assetsV1AssetsAssetIdSegmentsGet(appID: string, authToken: string, assetId: string, sort?: string, ids?: string, query?: string, includes?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, transcriptionId?: string, versionId?: string, segmentType?: string, segmentColor?: string, timeStartMilliseconds?: number, timeEndMilliseconds?: number, timeStartMillisecondsGte?: number, timeEndMillisecondsLte?: number, status?: string, includeUsers?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsGet", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsGet", "assetId");
        }




















        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/segments/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
        }

        // Query Params
        if (ids !== undefined) {
            requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "string", ""));
        }

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (includes !== undefined) {
            requestContext.setQueryParam("includes", ObjectSerializer.serialize(includes, "string", ""));
        }

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int32"));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (scroll !== undefined) {
            requestContext.setQueryParam("scroll", ObjectSerializer.serialize(scroll, "boolean", ""));
        }

        // Query Params
        if (scrollId !== undefined) {
            requestContext.setQueryParam("scroll_id", ObjectSerializer.serialize(scrollId, "string", ""));
        }

        // Query Params
        if (transcriptionId !== undefined) {
            requestContext.setQueryParam("transcription_id", ObjectSerializer.serialize(transcriptionId, "string", ""));
        }

        // Query Params
        if (versionId !== undefined) {
            requestContext.setQueryParam("version_id", ObjectSerializer.serialize(versionId, "string", ""));
        }

        // Query Params
        if (segmentType !== undefined) {
            requestContext.setQueryParam("segment_type", ObjectSerializer.serialize(segmentType, "string", ""));
        }

        // Query Params
        if (segmentColor !== undefined) {
            requestContext.setQueryParam("segment_color", ObjectSerializer.serialize(segmentColor, "string", ""));
        }

        // Query Params
        if (timeStartMilliseconds !== undefined) {
            requestContext.setQueryParam("time_start_milliseconds", ObjectSerializer.serialize(timeStartMilliseconds, "number", "int32"));
        }

        // Query Params
        if (timeEndMilliseconds !== undefined) {
            requestContext.setQueryParam("time_end_milliseconds", ObjectSerializer.serialize(timeEndMilliseconds, "number", "int32"));
        }

        // Query Params
        if (timeStartMillisecondsGte !== undefined) {
            requestContext.setQueryParam("time_start_milliseconds__gte", ObjectSerializer.serialize(timeStartMillisecondsGte, "number", "int32"));
        }

        // Query Params
        if (timeEndMillisecondsLte !== undefined) {
            requestContext.setQueryParam("time_end_milliseconds__lte", ObjectSerializer.serialize(timeEndMillisecondsLte, "number", "int32"));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "string", ""));
        }

        // Query Params
        if (includeUsers !== undefined) {
            requestContext.setQueryParam("include_users", ObjectSerializer.serialize(includeUsers, "boolean", ""));
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
     *  Required roles:  - can_create_segments 
     * Create a new segment
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param segmentSchema body
     * @param shareUserEmail This header is used for shares by URL to identify user. Only valid emails are allowed.
     */
    public async assetsV1AssetsAssetIdSegmentsPost(appID: string, authToken: string, assetId: string, segmentSchema: SegmentSchema, shareUserEmail?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsPost", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsPost", "assetId");
        }


        // verify required parameter 'segmentSchema' is not null or undefined
        if (segmentSchema === null || segmentSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsPost", "segmentSchema");
        }



        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/segments/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Share-User-Email", ObjectSerializer.serialize(shareUserEmail, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(segmentSchema, "SegmentSchema", ""),
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
     *  Required roles:  - can_reindex_segments 
     * Reindex assets segments
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param reindexSegmentSchema body
     */
    public async assetsV1AssetsAssetIdSegmentsReindexPost(appID: string, authToken: string, assetId: string, reindexSegmentSchema: ReindexSegmentSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsReindexPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsReindexPost", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsReindexPost", "assetId");
        }


        // verify required parameter 'reindexSegmentSchema' is not null or undefined
        if (reindexSegmentSchema === null || reindexSegmentSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsReindexPost", "reindexSegmentSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/segments/reindex/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

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
            ObjectSerializer.serialize(reindexSegmentSchema, "ReindexSegmentSchema", ""),
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
     *  Required roles:  - can_delete_segments 
     * Delete a particular segment from an asset by id
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param segmentId 
     * @param softDelete 
     */
    public async assetsV1AssetsAssetIdSegmentsSegmentIdDelete(appID: string, authToken: string, assetId: string, segmentId: string, softDelete?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdDelete", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdDelete", "assetId");
        }


        // verify required parameter 'segmentId' is not null or undefined
        if (segmentId === null || segmentId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdDelete", "segmentId");
        }



        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/segments/{segment_id}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'segment_id' + '}', encodeURIComponent(String(segmentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (softDelete !== undefined) {
            requestContext.setQueryParam("soft_delete", ObjectSerializer.serialize(softDelete, "boolean", ""));
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
     *  Required roles:  - can_read_segments 
     * Get a segment by ID
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param segmentId 
     * @param scroll If true passed then uses scroll pagination instead of default one
     * @param scrollId In order to get next batch of results using scroll pagination the scroll_id is required 
     */
    public async assetsV1AssetsAssetIdSegmentsSegmentIdGet(appID: string, authToken: string, assetId: string, segmentId: string, scroll?: boolean, scrollId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdGet", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdGet", "assetId");
        }


        // verify required parameter 'segmentId' is not null or undefined
        if (segmentId === null || segmentId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdGet", "segmentId");
        }




        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/segments/{segment_id}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'segment_id' + '}', encodeURIComponent(String(segmentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (scroll !== undefined) {
            requestContext.setQueryParam("scroll", ObjectSerializer.serialize(scroll, "boolean", ""));
        }

        // Query Params
        if (scrollId !== undefined) {
            requestContext.setQueryParam("scroll_id", ObjectSerializer.serialize(scrollId, "string", ""));
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
     *  Required roles:  - can_write_segments 
     * Update segment
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param segmentId 
     * @param editSegmentSchema body
     */
    public async assetsV1AssetsAssetIdSegmentsSegmentIdPatch(appID: string, authToken: string, assetId: string, segmentId: string, editSegmentSchema: EditSegmentSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdPatch", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdPatch", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdPatch", "assetId");
        }


        // verify required parameter 'segmentId' is not null or undefined
        if (segmentId === null || segmentId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdPatch", "segmentId");
        }


        // verify required parameter 'editSegmentSchema' is not null or undefined
        if (editSegmentSchema === null || editSegmentSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdPatch", "editSegmentSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/segments/{segment_id}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'segment_id' + '}', encodeURIComponent(String(segmentId)));

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
            ObjectSerializer.serialize(editSegmentSchema, "EditSegmentSchema", ""),
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
     *  Required roles:  - can_write_segments 
     * Update segment
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param segmentId 
     * @param editSegmentSchema body
     */
    public async assetsV1AssetsAssetIdSegmentsSegmentIdPut(appID: string, authToken: string, assetId: string, segmentId: string, editSegmentSchema: EditSegmentSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdPut", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdPut", "assetId");
        }


        // verify required parameter 'segmentId' is not null or undefined
        if (segmentId === null || segmentId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdPut", "segmentId");
        }


        // verify required parameter 'editSegmentSchema' is not null or undefined
        if (editSegmentSchema === null || editSegmentSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdPut", "editSegmentSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/segments/{segment_id}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'segment_id' + '}', encodeURIComponent(String(segmentId)));

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
            ObjectSerializer.serialize(editSegmentSchema, "EditSegmentSchema", ""),
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
     *  Required roles:  - can_reindex_segments 
     * Reindex assets segment
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param segmentId 
     * @param reindexSegmentSchema body
     */
    public async assetsV1AssetsAssetIdSegmentsSegmentIdReindexPost(appID: string, authToken: string, assetId: string, segmentId: string, reindexSegmentSchema: ReindexSegmentSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdReindexPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdReindexPost", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdReindexPost", "assetId");
        }


        // verify required parameter 'segmentId' is not null or undefined
        if (segmentId === null || segmentId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdReindexPost", "segmentId");
        }


        // verify required parameter 'reindexSegmentSchema' is not null or undefined
        if (reindexSegmentSchema === null || reindexSegmentSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentIdReindexPost", "reindexSegmentSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/segments/{segment_id}/reindex/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'segment_id' + '}', encodeURIComponent(String(segmentId)));

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
            ObjectSerializer.serialize(reindexSegmentSchema, "ReindexSegmentSchema", ""),
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
     *  Required roles:  - can_read_segments 
     * List of segments
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param segmentType 
     * @param sort Sort on field (Comma separated)
     * @param ids Only include these segments (Comma separated)
     * @param query Search using query
     * @param includes Only include fields (Comma separated)
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param scroll If true passed then uses scroll pagination instead of default one
     * @param scrollId In order to get next batch of results using scroll pagination the scroll_id is required 
     * @param timeStartMilliseconds Filter segments by time_start_milliseconds
     * @param timeEndMilliseconds Filter segments by time_end_milliseconds
     * @param timeStartMillisecondsGte Get segments with start time greater than or equal to time_start_milliseconds__gte 
     * @param timeEndMillisecondsLte Get segments with end time less than or equal to time_end_milliseconds__lte
     */
    public async assetsV1AssetsAssetIdSegmentsSegmentTypeGet(appID: string, authToken: string, assetId: string, segmentType: string, sort?: string, ids?: string, query?: string, includes?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, timeStartMilliseconds?: number, timeEndMilliseconds?: number, timeStartMillisecondsGte?: number, timeEndMillisecondsLte?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentTypeGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentTypeGet", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentTypeGet", "assetId");
        }


        // verify required parameter 'segmentType' is not null or undefined
        if (segmentType === null || segmentType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSegmentTypeGet", "segmentType");
        }














        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/segments/{segment_type}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'segment_type' + '}', encodeURIComponent(String(segmentType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
        }

        // Query Params
        if (ids !== undefined) {
            requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "string", ""));
        }

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (includes !== undefined) {
            requestContext.setQueryParam("includes", ObjectSerializer.serialize(includes, "string", ""));
        }

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int32"));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (scroll !== undefined) {
            requestContext.setQueryParam("scroll", ObjectSerializer.serialize(scroll, "boolean", ""));
        }

        // Query Params
        if (scrollId !== undefined) {
            requestContext.setQueryParam("scroll_id", ObjectSerializer.serialize(scrollId, "string", ""));
        }

        // Query Params
        if (timeStartMilliseconds !== undefined) {
            requestContext.setQueryParam("time_start_milliseconds", ObjectSerializer.serialize(timeStartMilliseconds, "number", "int32"));
        }

        // Query Params
        if (timeEndMilliseconds !== undefined) {
            requestContext.setQueryParam("time_end_milliseconds", ObjectSerializer.serialize(timeEndMilliseconds, "number", "int32"));
        }

        // Query Params
        if (timeStartMillisecondsGte !== undefined) {
            requestContext.setQueryParam("time_start_milliseconds__gte", ObjectSerializer.serialize(timeStartMillisecondsGte, "number", "int32"));
        }

        // Query Params
        if (timeEndMillisecondsLte !== undefined) {
            requestContext.setQueryParam("time_end_milliseconds__lte", ObjectSerializer.serialize(timeEndMillisecondsLte, "number", "int32"));
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
     *  Required roles:  - can_read_segments 
     * List of segments as SRT file
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param ids Only include these segments (Comma separated)
     * @param query Search using query
     * @param transcriptionId Filter segments by transcription_id
     * @param versionId Filter segments by version_id
     * @param segmentType Filter segments by segment_type
     * @param segmentColor Filter segments by segment_color
     * @param wordsPerLine Limit the number of words per subtitle line
     */
    public async assetsV1AssetsAssetIdSegmentsSrtGet(appID: string, authToken: string, assetId: string, ids?: string, query?: string, transcriptionId?: string, versionId?: string, segmentType?: string, segmentColor?: string, wordsPerLine?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSrtGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSrtGet", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsSrtGet", "assetId");
        }









        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/segments/srt/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (ids !== undefined) {
            requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "string", ""));
        }

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (transcriptionId !== undefined) {
            requestContext.setQueryParam("transcription_id", ObjectSerializer.serialize(transcriptionId, "string", ""));
        }

        // Query Params
        if (versionId !== undefined) {
            requestContext.setQueryParam("version_id", ObjectSerializer.serialize(versionId, "string", ""));
        }

        // Query Params
        if (segmentType !== undefined) {
            requestContext.setQueryParam("segment_type", ObjectSerializer.serialize(segmentType, "string", ""));
        }

        // Query Params
        if (segmentColor !== undefined) {
            requestContext.setQueryParam("segment_color", ObjectSerializer.serialize(segmentColor, "string", ""));
        }

        // Query Params
        if (wordsPerLine !== undefined) {
            requestContext.setQueryParam("words_per_line", ObjectSerializer.serialize(wordsPerLine, "number", "int32"));
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
     *  Required roles:  - can_read_segments 
     * List of segments as WebVTT file
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param ids Only include these segments (Comma separated)
     * @param query Search using query
     * @param transcriptionId Filter segments by transcription_id
     * @param versionId Filter segments by version_id
     * @param segmentType Filter segments by segment_type
     * @param segmentColor Filter segments by segment_color
     * @param wordsPerLine Limit the number of words per subtitle line
     */
    public async assetsV1AssetsAssetIdSegmentsVttGet(appID: string, authToken: string, assetId: string, ids?: string, query?: string, transcriptionId?: string, versionId?: string, segmentType?: string, segmentColor?: string, wordsPerLine?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsVttGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsVttGet", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdSegmentsVttGet", "assetId");
        }









        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/segments/vtt/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (ids !== undefined) {
            requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "string", ""));
        }

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (transcriptionId !== undefined) {
            requestContext.setQueryParam("transcription_id", ObjectSerializer.serialize(transcriptionId, "string", ""));
        }

        // Query Params
        if (versionId !== undefined) {
            requestContext.setQueryParam("version_id", ObjectSerializer.serialize(versionId, "string", ""));
        }

        // Query Params
        if (segmentType !== undefined) {
            requestContext.setQueryParam("segment_type", ObjectSerializer.serialize(segmentType, "string", ""));
        }

        // Query Params
        if (segmentColor !== undefined) {
            requestContext.setQueryParam("segment_color", ObjectSerializer.serialize(segmentColor, "string", ""));
        }

        // Query Params
        if (wordsPerLine !== undefined) {
            requestContext.setQueryParam("words_per_line", ObjectSerializer.serialize(wordsPerLine, "number", "int32"));
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
     *  Required roles:  - can_create_assets 
     * Delete a particular asset by id on failed uplaod
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public async assetsV1AssetsAssetIdUploadsDelete(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdUploadsDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdUploadsDelete", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdUploadsDelete", "assetId");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/uploads/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

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
     *  Required roles:  - can_write_versions 
     * Create a new asset\'s version from another asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param sourceAssetId 
     * @param createAssetVersionFromAssetSchema body
     */
    public async assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPost(appID: string, authToken: string, assetId: string, sourceAssetId: string, createAssetVersionFromAssetSchema: CreateAssetVersionFromAssetSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPost", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPost", "assetId");
        }


        // verify required parameter 'sourceAssetId' is not null or undefined
        if (sourceAssetId === null || sourceAssetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPost", "sourceAssetId");
        }


        // verify required parameter 'createAssetVersionFromAssetSchema' is not null or undefined
        if (createAssetVersionFromAssetSchema === null || createAssetVersionFromAssetSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPost", "createAssetVersionFromAssetSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/versions/from/assets/{source_asset_id}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'source_asset_id' + '}', encodeURIComponent(String(sourceAssetId)));

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
            ObjectSerializer.serialize(createAssetVersionFromAssetSchema, "CreateAssetVersionFromAssetSchema", ""),
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
     *  Required roles:  - can_write_versions 
     * Create a new asset\'s version from another version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param sourceVersionId 
     * @param createAssetVersionFromVersionSchema body
     */
    public async assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPost(appID: string, authToken: string, assetId: string, sourceVersionId: string, createAssetVersionFromVersionSchema: CreateAssetVersionFromVersionSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPost", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPost", "assetId");
        }


        // verify required parameter 'sourceVersionId' is not null or undefined
        if (sourceVersionId === null || sourceVersionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPost", "sourceVersionId");
        }


        // verify required parameter 'createAssetVersionFromVersionSchema' is not null or undefined
        if (createAssetVersionFromVersionSchema === null || createAssetVersionFromVersionSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPost", "createAssetVersionFromVersionSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/versions/from/versions/{source_version_id}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'source_version_id' + '}', encodeURIComponent(String(sourceVersionId)));

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
            ObjectSerializer.serialize(createAssetVersionFromVersionSchema, "CreateAssetVersionFromVersionSchema", ""),
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
     *  Required roles:  - can_delete_versions 
     * Delete all asset versions except the latest one
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public async assetsV1AssetsAssetIdVersionsOldDelete(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsOldDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsOldDelete", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsOldDelete", "assetId");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/versions/old/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

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
     *  Required roles:  - can_write_versions 
     * Add asset version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param createAssetVersionSchema body
     */
    public async assetsV1AssetsAssetIdVersionsPost(appID: string, authToken: string, assetId: string, createAssetVersionSchema: CreateAssetVersionSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsPost", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsPost", "assetId");
        }


        // verify required parameter 'createAssetVersionSchema' is not null or undefined
        if (createAssetVersionSchema === null || createAssetVersionSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsPost", "createAssetVersionSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/versions/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

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
            ObjectSerializer.serialize(createAssetVersionSchema, "CreateAssetVersionSchema", ""),
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
     *  Required roles:  - can_delete_versions 
     * Delete a particular asset version by id
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param hardDelete completely remove the version
     */
    public async assetsV1AssetsAssetIdVersionsVersionIdDelete(appID: string, authToken: string, assetId: string, versionId: string, hardDelete?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdDelete", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdDelete", "assetId");
        }


        // verify required parameter 'versionId' is not null or undefined
        if (versionId === null || versionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdDelete", "versionId");
        }



        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/versions/{version_id}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'version_id' + '}', encodeURIComponent(String(versionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (hardDelete !== undefined) {
            requestContext.setQueryParam("hard_delete", ObjectSerializer.serialize(hardDelete, "boolean", ""));
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
     *  Required roles:  - can_write_versions 
     * Edit asset version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param assetVersionSchema body
     */
    public async assetsV1AssetsAssetIdVersionsVersionIdPatch(appID: string, authToken: string, assetId: string, versionId: string, assetVersionSchema: AssetVersionSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdPatch", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdPatch", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdPatch", "assetId");
        }


        // verify required parameter 'versionId' is not null or undefined
        if (versionId === null || versionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdPatch", "versionId");
        }


        // verify required parameter 'assetVersionSchema' is not null or undefined
        if (assetVersionSchema === null || assetVersionSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdPatch", "assetVersionSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/versions/{version_id}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'version_id' + '}', encodeURIComponent(String(versionId)));

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
            ObjectSerializer.serialize(assetVersionSchema, "AssetVersionSchema", ""),
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
     *  Required roles:  - can_write_versions 
     * Promote a particular asset version to a latest version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     */
    public async assetsV1AssetsAssetIdVersionsVersionIdPromotePut(appID: string, authToken: string, assetId: string, versionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdPromotePut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdPromotePut", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdPromotePut", "assetId");
        }


        // verify required parameter 'versionId' is not null or undefined
        if (versionId === null || versionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdPromotePut", "versionId");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/versions/{version_id}/promote/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'version_id' + '}', encodeURIComponent(String(versionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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
     *  Required roles:  - can_write_versions 
     * Edit asset version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param assetVersionSchema body
     */
    public async assetsV1AssetsAssetIdVersionsVersionIdPut(appID: string, authToken: string, assetId: string, versionId: string, assetVersionSchema: AssetVersionSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdPut", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdPut", "assetId");
        }


        // verify required parameter 'versionId' is not null or undefined
        if (versionId === null || versionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdPut", "versionId");
        }


        // verify required parameter 'assetVersionSchema' is not null or undefined
        if (assetVersionSchema === null || assetVersionSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdPut", "assetVersionSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/versions/{version_id}/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'version_id' + '}', encodeURIComponent(String(versionId)));

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
            ObjectSerializer.serialize(assetVersionSchema, "AssetVersionSchema", ""),
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
     *  Required roles:  - can_read_transcriptions 
     * Get a list of transcription properties
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     */
    public async assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGet(appID: string, authToken: string, assetId: string, versionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGet", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGet", "assetId");
        }


        // verify required parameter 'versionId' is not null or undefined
        if (versionId === null || versionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGet", "versionId");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/versions/{version_id}/transcriptions/properties/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'version_id' + '}', encodeURIComponent(String(versionId)));

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
     *  Required roles:  - can_write_transcriptions 
     * Add a new transcription properties
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param assetTranscriptionPropertiesSchema body
     */
    public async assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPost(appID: string, authToken: string, assetId: string, versionId: string, assetTranscriptionPropertiesSchema: AssetTranscriptionPropertiesSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPost", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPost", "assetId");
        }


        // verify required parameter 'versionId' is not null or undefined
        if (versionId === null || versionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPost", "versionId");
        }


        // verify required parameter 'assetTranscriptionPropertiesSchema' is not null or undefined
        if (assetTranscriptionPropertiesSchema === null || assetTranscriptionPropertiesSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPost", "assetTranscriptionPropertiesSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/versions/{version_id}/transcriptions/properties/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'version_id' + '}', encodeURIComponent(String(versionId)));

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
            ObjectSerializer.serialize(assetTranscriptionPropertiesSchema, "AssetTranscriptionPropertiesSchema", ""),
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
     *  Required roles:  - can_write_transcriptions 
     * Add a new transcription properties
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param assetTranscriptionFromSubtitleSchema body
     */
    public async assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPost(appID: string, authToken: string, assetId: string, versionId: string, assetTranscriptionFromSubtitleSchema: AssetTranscriptionFromSubtitleSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPost", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPost", "assetId");
        }


        // verify required parameter 'versionId' is not null or undefined
        if (versionId === null || versionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPost", "versionId");
        }


        // verify required parameter 'assetTranscriptionFromSubtitleSchema' is not null or undefined
        if (assetTranscriptionFromSubtitleSchema === null || assetTranscriptionFromSubtitleSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPost", "assetTranscriptionFromSubtitleSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/versions/{version_id}/transcriptions/subtitles/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'version_id' + '}', encodeURIComponent(String(versionId)));

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
            ObjectSerializer.serialize(assetTranscriptionFromSubtitleSchema, "AssetTranscriptionFromSubtitleSchema", ""),
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
     *  Required roles:  - can_delete_transcriptions 
     * Delete transcription properties by ID
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param transcriptionId 
     */
    public async assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDelete(appID: string, authToken: string, assetId: string, versionId: string, transcriptionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDelete", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDelete", "assetId");
        }


        // verify required parameter 'versionId' is not null or undefined
        if (versionId === null || versionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDelete", "versionId");
        }


        // verify required parameter 'transcriptionId' is not null or undefined
        if (transcriptionId === null || transcriptionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDelete", "transcriptionId");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/versions/{version_id}/transcriptions/{transcription_id}/properties/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'version_id' + '}', encodeURIComponent(String(versionId)))
            .replace('{' + 'transcription_id' + '}', encodeURIComponent(String(transcriptionId)));

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
     *  Required roles:  - can_read_transcriptions 
     * Get a transcription properties by ID
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param transcriptionId 
     */
    public async assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGet(appID: string, authToken: string, assetId: string, versionId: string, transcriptionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGet", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGet", "assetId");
        }


        // verify required parameter 'versionId' is not null or undefined
        if (versionId === null || versionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGet", "versionId");
        }


        // verify required parameter 'transcriptionId' is not null or undefined
        if (transcriptionId === null || transcriptionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGet", "transcriptionId");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/versions/{version_id}/transcriptions/{transcription_id}/properties/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'version_id' + '}', encodeURIComponent(String(versionId)))
            .replace('{' + 'transcription_id' + '}', encodeURIComponent(String(transcriptionId)));

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
     *  Required roles:  - can_write_transcriptions 
     * Update transcription properties by ID
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param transcriptionId 
     * @param assetTranscriptionPropertiesSchema body
     */
    public async assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatch(appID: string, authToken: string, assetId: string, versionId: string, transcriptionId: string, assetTranscriptionPropertiesSchema: AssetTranscriptionPropertiesSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatch", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatch", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatch", "assetId");
        }


        // verify required parameter 'versionId' is not null or undefined
        if (versionId === null || versionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatch", "versionId");
        }


        // verify required parameter 'transcriptionId' is not null or undefined
        if (transcriptionId === null || transcriptionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatch", "transcriptionId");
        }


        // verify required parameter 'assetTranscriptionPropertiesSchema' is not null or undefined
        if (assetTranscriptionPropertiesSchema === null || assetTranscriptionPropertiesSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatch", "assetTranscriptionPropertiesSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/versions/{version_id}/transcriptions/{transcription_id}/properties/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'version_id' + '}', encodeURIComponent(String(versionId)))
            .replace('{' + 'transcription_id' + '}', encodeURIComponent(String(transcriptionId)));

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
            ObjectSerializer.serialize(assetTranscriptionPropertiesSchema, "AssetTranscriptionPropertiesSchema", ""),
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
     *  Required roles:  - can_write_transcriptions 
     * Update transcription properties by ID
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param transcriptionId 
     * @param assetTranscriptionPropertiesSchema body
     */
    public async assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPut(appID: string, authToken: string, assetId: string, versionId: string, transcriptionId: string, assetTranscriptionPropertiesSchema: AssetTranscriptionPropertiesSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPut", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPut", "assetId");
        }


        // verify required parameter 'versionId' is not null or undefined
        if (versionId === null || versionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPut", "versionId");
        }


        // verify required parameter 'transcriptionId' is not null or undefined
        if (transcriptionId === null || transcriptionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPut", "transcriptionId");
        }


        // verify required parameter 'assetTranscriptionPropertiesSchema' is not null or undefined
        if (assetTranscriptionPropertiesSchema === null || assetTranscriptionPropertiesSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPut", "assetTranscriptionPropertiesSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/versions/{version_id}/transcriptions/{transcription_id}/properties/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'version_id' + '}', encodeURIComponent(String(versionId)))
            .replace('{' + 'transcription_id' + '}', encodeURIComponent(String(transcriptionId)));

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
            ObjectSerializer.serialize(assetTranscriptionPropertiesSchema, "AssetTranscriptionPropertiesSchema", ""),
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
     *  Required roles:  - can_read_assets 
     * Mark asset as viewed
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public async assetsV1AssetsAssetIdViewsPost(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdViewsPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdViewsPost", "authToken");
        }


        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsAssetIdViewsPost", "assetId");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/{asset_id}/views/'
            .replace('{' + 'asset_id' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     *  Required roles:  - can_read_assets 
     * Get list of assets
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param scroll If true passed then uses scroll pagination instead of default one
     * @param scrollId In order to get next batch of results using scroll pagination the scroll_id is required
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param fieldName filter by field_name
     */
    public async assetsV1AssetsGet(appID: string, authToken: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, sort?: string, fieldName?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsGet", "authToken");
        }








        // Path Params
        const localVarPath = '/assets/v1/assets/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int32"));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (scroll !== undefined) {
            requestContext.setQueryParam("scroll", ObjectSerializer.serialize(scroll, "boolean", ""));
        }

        // Query Params
        if (scrollId !== undefined) {
            requestContext.setQueryParam("scroll_id", ObjectSerializer.serialize(scrollId, "string", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
        }

        // Query Params
        if (fieldName !== undefined) {
            requestContext.setQueryParam("field_name", ObjectSerializer.serialize(fieldName, "string", ""));
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
     *  Required roles:  - can_write_assets 
     * Bulk update assets
     * @param appID 
     * @param authToken 
     * @param bulkAssetEditSchema body
     */
    public async assetsV1AssetsPatch(appID: string, authToken: string, bulkAssetEditSchema: BulkAssetEditSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsPatch", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsPatch", "authToken");
        }


        // verify required parameter 'bulkAssetEditSchema' is not null or undefined
        if (bulkAssetEditSchema === null || bulkAssetEditSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsPatch", "bulkAssetEditSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/';

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
            ObjectSerializer.serialize(bulkAssetEditSchema, "BulkAssetEditSchema", ""),
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
     *  Required roles:  - can_create_assets 
     * Create a new asset
     * @param appID 
     * @param authToken 
     * @param assetCreateSchema body
     * @param applyDefaultAcls Adds default ACLs to an asset
     * @param applyCollectionAcls Adds containing collection\&#39;s ACLs to an asset
     * @param assignToCollection Adds the asset to the collection specified in the body
     */
    public async assetsV1AssetsPost(appID: string, authToken: string, assetCreateSchema: AssetCreateSchema, applyDefaultAcls?: boolean, applyCollectionAcls?: boolean, assignToCollection?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsPost", "authToken");
        }


        // verify required parameter 'assetCreateSchema' is not null or undefined
        if (assetCreateSchema === null || assetCreateSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsPost", "assetCreateSchema");
        }





        // Path Params
        const localVarPath = '/assets/v1/assets/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (applyDefaultAcls !== undefined) {
            requestContext.setQueryParam("apply_default_acls", ObjectSerializer.serialize(applyDefaultAcls, "boolean", ""));
        }

        // Query Params
        if (applyCollectionAcls !== undefined) {
            requestContext.setQueryParam("apply_collection_acls", ObjectSerializer.serialize(applyCollectionAcls, "boolean", ""));
        }

        // Query Params
        if (assignToCollection !== undefined) {
            requestContext.setQueryParam("assign_to_collection", ObjectSerializer.serialize(assignToCollection, "boolean", ""));
        }

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
            ObjectSerializer.serialize(assetCreateSchema, "AssetCreateSchema", ""),
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
     *  Required roles:  - can_write_assets 
     * Bulk update assets
     * @param appID 
     * @param authToken 
     * @param bulkAssetEditSchema body
     */
    public async assetsV1AssetsPut(appID: string, authToken: string, bulkAssetEditSchema: BulkAssetEditSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsPut", "authToken");
        }


        // verify required parameter 'bulkAssetEditSchema' is not null or undefined
        if (bulkAssetEditSchema === null || bulkAssetEditSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsPut", "bulkAssetEditSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/';

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
            ObjectSerializer.serialize(bulkAssetEditSchema, "BulkAssetEditSchema", ""),
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
     *  Required roles:  - can_reindex_assets 
     * Trigger reindexing of all assets
     * @param appID 
     * @param authToken 
     * @param reindexAllAssetsSchema body
     */
    public async assetsV1AssetsReindexPost(appID: string, authToken: string, reindexAllAssetsSchema?: ReindexAllAssetsSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsReindexPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsReindexPost", "authToken");
        }



        // Path Params
        const localVarPath = '/assets/v1/assets/reindex/';

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
            ObjectSerializer.serialize(reindexAllAssetsSchema, "ReindexAllAssetsSchema", ""),
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
     *  Required roles:  - can_read_asset_relations 
     * Create a new asset relation type
     * @param appID 
     * @param authToken 
     */
    public async assetsV1AssetsRelationTypesGet(appID: string, authToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsRelationTypesGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsRelationTypesGet", "authToken");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/relation_types/';

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
     *  Required roles:  - can_write_asset_relation_types 
     * Create a new asset relation type
     * @param appID 
     * @param authToken 
     * @param relationTypeSchema body
     */
    public async assetsV1AssetsRelationTypesPost(appID: string, authToken: string, relationTypeSchema: RelationTypeSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsRelationTypesPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsRelationTypesPost", "authToken");
        }


        // verify required parameter 'relationTypeSchema' is not null or undefined
        if (relationTypeSchema === null || relationTypeSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsRelationTypesPost", "relationTypeSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/relation_types/';

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
            ObjectSerializer.serialize(relationTypeSchema, "RelationTypeSchema", ""),
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
     *  Required roles:  - can_delete_asset_relation_types 
     * Delete an asset relation type
     * @param appID 
     * @param authToken 
     * @param relationType 
     */
    public async assetsV1AssetsRelationTypesRelationTypeDelete(appID: string, authToken: string, relationType: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsRelationTypesRelationTypeDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsRelationTypesRelationTypeDelete", "authToken");
        }


        // verify required parameter 'relationType' is not null or undefined
        if (relationType === null || relationType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsRelationTypesRelationTypeDelete", "relationType");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/relation_types/{relation_type}/'
            .replace('{' + 'relation_type' + '}', encodeURIComponent(String(relationType)));

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
     *  Required roles:  - can_read_asset_relations 
     * Get a relation type
     * @param appID 
     * @param authToken 
     * @param relationType 
     */
    public async assetsV1AssetsRelationTypesRelationTypeGet(appID: string, authToken: string, relationType: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsRelationTypesRelationTypeGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsRelationTypesRelationTypeGet", "authToken");
        }


        // verify required parameter 'relationType' is not null or undefined
        if (relationType === null || relationType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsRelationTypesRelationTypeGet", "relationType");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/relation_types/{relation_type}/'
            .replace('{' + 'relation_type' + '}', encodeURIComponent(String(relationType)));

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
     *  Required roles:  - can_write_asset_relation_types 
     * Update an asset relation type
     * @param appID 
     * @param authToken 
     * @param relationType 
     * @param relationTypeSchema body
     */
    public async assetsV1AssetsRelationTypesRelationTypePatch(appID: string, authToken: string, relationType: string, relationTypeSchema: RelationTypeSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsRelationTypesRelationTypePatch", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsRelationTypesRelationTypePatch", "authToken");
        }


        // verify required parameter 'relationType' is not null or undefined
        if (relationType === null || relationType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsRelationTypesRelationTypePatch", "relationType");
        }


        // verify required parameter 'relationTypeSchema' is not null or undefined
        if (relationTypeSchema === null || relationTypeSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsRelationTypesRelationTypePatch", "relationTypeSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/relation_types/{relation_type}/'
            .replace('{' + 'relation_type' + '}', encodeURIComponent(String(relationType)));

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
            ObjectSerializer.serialize(relationTypeSchema, "RelationTypeSchema", ""),
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
     *  Required roles:  - can_write_asset_relation_types 
     * Update an asset relation type
     * @param appID 
     * @param authToken 
     * @param relationType 
     * @param relationTypeSchema body
     */
    public async assetsV1AssetsRelationTypesRelationTypePut(appID: string, authToken: string, relationType: string, relationTypeSchema: RelationTypeSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsRelationTypesRelationTypePut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsRelationTypesRelationTypePut", "authToken");
        }


        // verify required parameter 'relationType' is not null or undefined
        if (relationType === null || relationType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsRelationTypesRelationTypePut", "relationType");
        }


        // verify required parameter 'relationTypeSchema' is not null or undefined
        if (relationTypeSchema === null || relationTypeSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsRelationTypesRelationTypePut", "relationTypeSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/relation_types/{relation_type}/'
            .replace('{' + 'relation_type' + '}', encodeURIComponent(String(relationType)));

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
            ObjectSerializer.serialize(relationTypeSchema, "RelationTypeSchema", ""),
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
     *  Required roles:  - can_reindex_segments 
     * Trigger reindexing of all segments
     * @param appID 
     * @param authToken 
     * @param reindexAllSegmentsSchema body
     */
    public async assetsV1AssetsSegmentsReindexPost(appID: string, authToken: string, reindexAllSegmentsSchema: ReindexAllSegmentsSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsSegmentsReindexPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsSegmentsReindexPost", "authToken");
        }


        // verify required parameter 'reindexAllSegmentsSchema' is not null or undefined
        if (reindexAllSegmentsSchema === null || reindexAllSegmentsSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1AssetsSegmentsReindexPost", "reindexAllSegmentsSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/assets/segments/reindex/';

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
            ObjectSerializer.serialize(reindexAllSegmentsSchema, "ReindexAllSegmentsSchema", ""),
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
     *  Required roles:  - can_read_collections 
     * Returns list of ancestors of a collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public async assetsV1CollectionsCollectionIdAncestorsGet(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdAncestorsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdAncestorsGet", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdAncestorsGet", "collectionId");
        }


        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/ancestors/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

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
     *  Required roles:  - can_read_collections 
     * Returns all sub-collections and assets number for a specific collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param onlyActive If false, include all the contents
     */
    public async assetsV1CollectionsCollectionIdContentInfoGet(appID: string, authToken: string, collectionId: string, onlyActive?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentInfoGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentInfoGet", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentInfoGet", "collectionId");
        }



        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/content/info/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (onlyActive !== undefined) {
            requestContext.setQueryParam("only_active", ObjectSerializer.serialize(onlyActive, "boolean", ""));
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
     *  Required roles:  - can_read_collections 
     * Returns contents of a collection by id
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param objectTypes Comma separated list of content types. Example - assets,collections
     * @param objectIds Comma separated list of content ids.
     * @param externalId 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param filter A comma separated list of fieldnames with order For example - first_name,eq,Vlad;last_name,eq,Gudkov
     */
    public async assetsV1CollectionsCollectionIdContentsGet(appID: string, authToken: string, collectionId: string, objectTypes?: string, objectIds?: string, externalId?: string, perPage?: number, page?: number, sort?: string, filter?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsGet", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsGet", "collectionId");
        }









        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/contents/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (objectTypes !== undefined) {
            requestContext.setQueryParam("object_types", ObjectSerializer.serialize(objectTypes, "string", ""));
        }

        // Query Params
        if (objectIds !== undefined) {
            requestContext.setQueryParam("object_ids", ObjectSerializer.serialize(objectIds, "string", ""));
        }

        // Query Params
        if (externalId !== undefined) {
            requestContext.setQueryParam("external_id", ObjectSerializer.serialize(externalId, "string", ""));
        }

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int32"));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
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
     *  Required roles:  - can_write_collections 
     * Delete a particular content object in a collection by id
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param objectType 
     * @param objectId 
     */
    public async assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDelete(appID: string, authToken: string, collectionId: string, objectType: string, objectId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDelete", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDelete", "collectionId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDelete", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDelete", "objectId");
        }


        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/contents/{object_type}/{object_id}/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)));

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
     *  Required roles:  - can_write_collections 
     * Update an order of a particular content object in a collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param objectType 
     * @param objectId 
     * @param collectionContentOrderingSchema body
     */
    public async assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPut(appID: string, authToken: string, collectionId: string, objectType: string, objectId: string, collectionContentOrderingSchema: CollectionContentOrderingSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPut", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPut", "collectionId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPut", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPut", "objectId");
        }


        // verify required parameter 'collectionContentOrderingSchema' is not null or undefined
        if (collectionContentOrderingSchema === null || collectionContentOrderingSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPut", "collectionContentOrderingSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/contents/{object_type}/{object_id}/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)))
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
            ObjectSerializer.serialize(collectionContentOrderingSchema, "CollectionContentOrderingSchema", ""),
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
     *  Required roles:  - can_reindex_collections 
     * Reindex collection content
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param objectType 
     * @param objectId 
     * @param reindexCollectionContentSchema body
     */
    public async assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPost(appID: string, authToken: string, collectionId: string, objectType: string, objectId: string, reindexCollectionContentSchema: ReindexCollectionContentSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPost", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPost", "collectionId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPost", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPost", "objectId");
        }


        // verify required parameter 'reindexCollectionContentSchema' is not null or undefined
        if (reindexCollectionContentSchema === null || reindexCollectionContentSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPost", "reindexCollectionContentSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/contents/{object_type}/{object_id}/reindex/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)));

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
            ObjectSerializer.serialize(reindexCollectionContentSchema, "ReindexCollectionContentSchema", ""),
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
     *  Required roles:  - can_write_collections 
     * Disable custom ordering for a collection\'s content
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public async assetsV1CollectionsCollectionIdContentsOrderingCustomDelete(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsOrderingCustomDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsOrderingCustomDelete", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsOrderingCustomDelete", "collectionId");
        }


        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/contents/ordering/custom/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

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
     *  Required roles:  - can_write_collections 
     * Enable custom ordering for a collection\'s content
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param createCollectionContentOrderingSchema body
     */
    public async assetsV1CollectionsCollectionIdContentsOrderingCustomPost(appID: string, authToken: string, collectionId: string, createCollectionContentOrderingSchema: CreateCollectionContentOrderingSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsOrderingCustomPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsOrderingCustomPost", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsOrderingCustomPost", "collectionId");
        }


        // verify required parameter 'createCollectionContentOrderingSchema' is not null or undefined
        if (createCollectionContentOrderingSchema === null || createCollectionContentOrderingSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsOrderingCustomPost", "createCollectionContentOrderingSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/contents/ordering/custom/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

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
            ObjectSerializer.serialize(createCollectionContentOrderingSchema, "CreateCollectionContentOrderingSchema", ""),
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
     *  Required roles:  - can_write_collections 
     * Add an object to a collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param collectionContentSchema body
     */
    public async assetsV1CollectionsCollectionIdContentsPost(appID: string, authToken: string, collectionId: string, collectionContentSchema: CollectionContentSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsPost", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsPost", "collectionId");
        }


        // verify required parameter 'collectionContentSchema' is not null or undefined
        if (collectionContentSchema === null || collectionContentSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdContentsPost", "collectionContentSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/contents/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

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
            ObjectSerializer.serialize(collectionContentSchema, "CollectionContentSchema", ""),
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
     *  Required roles:  - can_delete_collections 
     * Delete a particular collection by id
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public async assetsV1CollectionsCollectionIdDelete(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdDelete", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdDelete", "collectionId");
        }


        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

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
     *  Required roles:  - can_read_collections 
     * Gets the full path of the collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param getUploadPath Use to get the upload path instead of the full path
     */
    public async assetsV1CollectionsCollectionIdFullPathGet(appID: string, authToken: string, collectionId: string, getUploadPath?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdFullPathGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdFullPathGet", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdFullPathGet", "collectionId");
        }



        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/full/path/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (getUploadPath !== undefined) {
            requestContext.setQueryParam("get_upload_path", ObjectSerializer.serialize(getUploadPath, "boolean", ""));
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
     *  Required roles:  - can_read_collections 
     * Returns a particular collection by id
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public async assetsV1CollectionsCollectionIdGet(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdGet", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdGet", "collectionId");
        }


        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

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
     *  Required roles:  - can_reindex_collections 
     * Pick up to three asset_ids for collection keyframes
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param synchronizeCollectionKeyframesSchema body
     */
    public async assetsV1CollectionsCollectionIdKeyframesPost(appID: string, authToken: string, collectionId: string, synchronizeCollectionKeyframesSchema: SynchronizeCollectionKeyframesSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdKeyframesPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdKeyframesPost", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdKeyframesPost", "collectionId");
        }


        // verify required parameter 'synchronizeCollectionKeyframesSchema' is not null or undefined
        if (synchronizeCollectionKeyframesSchema === null || synchronizeCollectionKeyframesSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdKeyframesPost", "synchronizeCollectionKeyframesSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/keyframes/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

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
            ObjectSerializer.serialize(synchronizeCollectionKeyframesSchema, "SynchronizeCollectionKeyframesSchema", ""),
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
     *  Required roles:  - can_write_collections 
     * Update collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param collectionInputSchema body
     * @param changeParentMode Set to \&#39;move\&#39; or \&#39;copy\&#39;. Ignored if \&#39;parent_id\&#39; hasn\&#39;t changed
     */
    public async assetsV1CollectionsCollectionIdPatch(appID: string, authToken: string, collectionId: string, collectionInputSchema: CollectionInputSchema, changeParentMode?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdPatch", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdPatch", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdPatch", "collectionId");
        }


        // verify required parameter 'collectionInputSchema' is not null or undefined
        if (collectionInputSchema === null || collectionInputSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdPatch", "collectionInputSchema");
        }



        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (changeParentMode !== undefined) {
            requestContext.setQueryParam("change_parent_mode", ObjectSerializer.serialize(changeParentMode, "string", ""));
        }

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
            ObjectSerializer.serialize(collectionInputSchema, "CollectionInputSchema", ""),
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
     *  Required roles:  - can_purge_collections 
     * Purges deleted collection by id immediately
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public async assetsV1CollectionsCollectionIdPurgeDelete(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdPurgeDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdPurgeDelete", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdPurgeDelete", "collectionId");
        }


        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/purge/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

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
     *  Required roles:  - can_write_collections 
     * Update collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param collectionInputSchema body
     * @param changeParentMode Set to \&#39;move\&#39; or \&#39;copy\&#39;. Ignored if \&#39;parent_id\&#39; hasn\&#39;t changed
     */
    public async assetsV1CollectionsCollectionIdPut(appID: string, authToken: string, collectionId: string, collectionInputSchema: CollectionInputSchema, changeParentMode?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdPut", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdPut", "collectionId");
        }


        // verify required parameter 'collectionInputSchema' is not null or undefined
        if (collectionInputSchema === null || collectionInputSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdPut", "collectionInputSchema");
        }



        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (changeParentMode !== undefined) {
            requestContext.setQueryParam("change_parent_mode", ObjectSerializer.serialize(changeParentMode, "string", ""));
        }

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
            ObjectSerializer.serialize(collectionInputSchema, "CollectionInputSchema", ""),
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
     *  Required roles:  - can_reindex_collections 
     * Reindex collection and its content
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public async assetsV1CollectionsCollectionIdReindexContentsPost(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdReindexContentsPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdReindexContentsPost", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdReindexContentsPost", "collectionId");
        }


        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/reindex/contents/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     *  Required roles:  - can_reindex_collections 
     * Reindex collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param reindexCollectionSchema body
     */
    public async assetsV1CollectionsCollectionIdReindexPost(appID: string, authToken: string, collectionId: string, reindexCollectionSchema: ReindexCollectionSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdReindexPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdReindexPost", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdReindexPost", "collectionId");
        }


        // verify required parameter 'reindexCollectionSchema' is not null or undefined
        if (reindexCollectionSchema === null || reindexCollectionSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdReindexPost", "reindexCollectionSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/reindex/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

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
            ObjectSerializer.serialize(reindexCollectionSchema, "ReindexCollectionSchema", ""),
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
     *  Required roles:  - can_write_collections 
     * Restore deleted collection by id
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public async assetsV1CollectionsCollectionIdRestorePut(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdRestorePut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdRestorePut", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdRestorePut", "collectionId");
        }


        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/restore/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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
     *  Required roles:  - can_reindex_collections 
     * Update metadata for collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param collectionSchema body
     */
    public async assetsV1CollectionsCollectionIdSearchDocumentPut(appID: string, authToken: string, collectionId: string, collectionSchema: CollectionSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdSearchDocumentPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdSearchDocumentPut", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdSearchDocumentPut", "collectionId");
        }


        // verify required parameter 'collectionSchema' is not null or undefined
        if (collectionSchema === null || collectionSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdSearchDocumentPut", "collectionSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/search_document/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

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
            ObjectSerializer.serialize(collectionSchema, "CollectionSchema", ""),
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
     *  Required roles:  - can_read_collections 
     * Returns the size of all the collection\'s assets in bytes
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param formatName Compute total size only for files with the specified format name
     * @param includeSubcollections Compute total size for all files including sub_collections\&#39; assets
     */
    public async assetsV1CollectionsCollectionIdSizeGet(appID: string, authToken: string, collectionId: string, formatName?: string, includeSubcollections?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdSizeGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdSizeGet", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdSizeGet", "collectionId");
        }




        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/size/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (formatName !== undefined) {
            requestContext.setQueryParam("format_name", ObjectSerializer.serialize(formatName, "string", ""));
        }

        // Query Params
        if (includeSubcollections !== undefined) {
            requestContext.setQueryParam("include_subcollections", ObjectSerializer.serialize(includeSubcollections, "boolean", ""));
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
     *  Required roles:  - can_write_collections 
     * Copy a collection (recursively) in to another collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param collectionContentSchema body
     */
    public async assetsV1CollectionsCollectionIdSubcollectionsPost(appID: string, authToken: string, collectionId: string, collectionContentSchema: CollectionContentSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdSubcollectionsPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdSubcollectionsPost", "authToken");
        }


        // verify required parameter 'collectionId' is not null or undefined
        if (collectionId === null || collectionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdSubcollectionsPost", "collectionId");
        }


        // verify required parameter 'collectionContentSchema' is not null or undefined
        if (collectionContentSchema === null || collectionContentSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsCollectionIdSubcollectionsPost", "collectionContentSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/collections/{collection_id}/subcollections/'
            .replace('{' + 'collection_id' + '}', encodeURIComponent(String(collectionId)));

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
            ObjectSerializer.serialize(collectionContentSchema, "CollectionContentSchema", ""),
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
     *  Required roles:  - can_read_collections 
     * Get list of collections
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param scroll If true passed then uses scroll pagination instead of default one
     * @param scrollId In order to get next batch of results using scroll pagination the scroll_id is required
     * @param sort A comma separated list of fieldnames with order. For example - title,asc;is_root,desc
     * @param isRoot Filter by is_root
     * @param status Filter by status
     */
    public async assetsV1CollectionsGet(appID: string, authToken: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, sort?: string, isRoot?: string, status?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsGet", "authToken");
        }









        // Path Params
        const localVarPath = '/assets/v1/collections/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int32"));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (scroll !== undefined) {
            requestContext.setQueryParam("scroll", ObjectSerializer.serialize(scroll, "boolean", ""));
        }

        // Query Params
        if (scrollId !== undefined) {
            requestContext.setQueryParam("scroll_id", ObjectSerializer.serialize(scrollId, "string", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
        }

        // Query Params
        if (isRoot !== undefined) {
            requestContext.setQueryParam("is_root", ObjectSerializer.serialize(isRoot, "string", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "string", ""));
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
     *  Required roles:  - can_create_collections 
     * Create a new collection
     * @param appID 
     * @param authToken 
     * @param collectionInputSchema body
     * @param applyDefaultAcls Adds default ACLs to a collection
     * @param applyCollectionAcls Adds containing collection\&#39;s ACLs to a collection
     * @param restrictCollectionAcls Restricts ACLS to containing collection\&#39;s ACLs
     */
    public async assetsV1CollectionsPost(appID: string, authToken: string, collectionInputSchema: CollectionInputSchema, applyDefaultAcls?: boolean, applyCollectionAcls?: boolean, restrictCollectionAcls?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsPost", "authToken");
        }


        // verify required parameter 'collectionInputSchema' is not null or undefined
        if (collectionInputSchema === null || collectionInputSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsPost", "collectionInputSchema");
        }





        // Path Params
        const localVarPath = '/assets/v1/collections/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (applyDefaultAcls !== undefined) {
            requestContext.setQueryParam("apply_default_acls", ObjectSerializer.serialize(applyDefaultAcls, "boolean", ""));
        }

        // Query Params
        if (applyCollectionAcls !== undefined) {
            requestContext.setQueryParam("apply_collection_acls", ObjectSerializer.serialize(applyCollectionAcls, "boolean", ""));
        }

        // Query Params
        if (restrictCollectionAcls !== undefined) {
            requestContext.setQueryParam("restrict_collection_acls", ObjectSerializer.serialize(restrictCollectionAcls, "boolean", ""));
        }

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
            ObjectSerializer.serialize(collectionInputSchema, "CollectionInputSchema", ""),
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
     *  Required roles:  - can_reindex_collections 
     * Trigger reindexing of all collections
     * @param appID 
     * @param authToken 
     * @param reindexAllCollectionsSchema body
     */
    public async assetsV1CollectionsReindexPost(appID: string, authToken: string, reindexAllCollectionsSchema?: ReindexAllCollectionsSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsReindexPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CollectionsReindexPost", "authToken");
        }



        // Path Params
        const localVarPath = '/assets/v1/collections/reindex/';

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
            ObjectSerializer.serialize(reindexAllCollectionsSchema, "ReindexAllCollectionsSchema", ""),
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
     *  Required roles:  - can_read_custom_actions 
     * Schedules a celery task that will call custom action
     * @param appID 
     * @param authToken 
     * @param context 
     * @param actionId 
     * @param customActionCallbackSchema body
     */
    public async assetsV1CustomActionsContextActionIdCallbackPost(appID: string, authToken: string, context: string, actionId: string, customActionCallbackSchema: CustomActionCallbackSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdCallbackPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdCallbackPost", "authToken");
        }


        // verify required parameter 'context' is not null or undefined
        if (context === null || context === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdCallbackPost", "context");
        }


        // verify required parameter 'actionId' is not null or undefined
        if (actionId === null || actionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdCallbackPost", "actionId");
        }


        // verify required parameter 'customActionCallbackSchema' is not null or undefined
        if (customActionCallbackSchema === null || customActionCallbackSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdCallbackPost", "customActionCallbackSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/custom_actions/{context}/{action_id}/callback/'
            .replace('{' + 'context' + '}', encodeURIComponent(String(context)))
            .replace('{' + 'action_id' + '}', encodeURIComponent(String(actionId)));

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
            ObjectSerializer.serialize(customActionCallbackSchema, "CustomActionCallbackSchema", ""),
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
     * 
     * Deletes an custom action
     * @param appID 
     * @param authToken 
     * @param context 
     * @param actionId 
     */
    public async assetsV1CustomActionsContextActionIdDelete(appID: string, authToken: string, context: string, actionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdDelete", "authToken");
        }


        // verify required parameter 'context' is not null or undefined
        if (context === null || context === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdDelete", "context");
        }


        // verify required parameter 'actionId' is not null or undefined
        if (actionId === null || actionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdDelete", "actionId");
        }


        // Path Params
        const localVarPath = '/assets/v1/custom_actions/{context}/{action_id}/'
            .replace('{' + 'context' + '}', encodeURIComponent(String(context)))
            .replace('{' + 'action_id' + '}', encodeURIComponent(String(actionId)));

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
     *  Required roles:  - can_read_custom_actions 
     * Get an asset custom action
     * @param appID 
     * @param authToken 
     * @param context 
     * @param actionId 
     */
    public async assetsV1CustomActionsContextActionIdGet(appID: string, authToken: string, context: string, actionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdGet", "authToken");
        }


        // verify required parameter 'context' is not null or undefined
        if (context === null || context === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdGet", "context");
        }


        // verify required parameter 'actionId' is not null or undefined
        if (actionId === null || actionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdGet", "actionId");
        }


        // Path Params
        const localVarPath = '/assets/v1/custom_actions/{context}/{action_id}/'
            .replace('{' + 'context' + '}', encodeURIComponent(String(context)))
            .replace('{' + 'action_id' + '}', encodeURIComponent(String(actionId)));

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
     * Update an custom action
     * @param appID 
     * @param authToken 
     * @param context 
     * @param actionId 
     * @param customActionSchema body
     */
    public async assetsV1CustomActionsContextActionIdPatch(appID: string, authToken: string, context: string, actionId: string, customActionSchema: CustomActionSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdPatch", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdPatch", "authToken");
        }


        // verify required parameter 'context' is not null or undefined
        if (context === null || context === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdPatch", "context");
        }


        // verify required parameter 'actionId' is not null or undefined
        if (actionId === null || actionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdPatch", "actionId");
        }


        // verify required parameter 'customActionSchema' is not null or undefined
        if (customActionSchema === null || customActionSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdPatch", "customActionSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/custom_actions/{context}/{action_id}/'
            .replace('{' + 'context' + '}', encodeURIComponent(String(context)))
            .replace('{' + 'action_id' + '}', encodeURIComponent(String(actionId)));

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
            ObjectSerializer.serialize(customActionSchema, "CustomActionSchema", ""),
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
     * 
     * Update an custom action
     * @param appID 
     * @param authToken 
     * @param context 
     * @param actionId 
     * @param customActionSchema body
     */
    public async assetsV1CustomActionsContextActionIdPut(appID: string, authToken: string, context: string, actionId: string, customActionSchema: CustomActionSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdPut", "authToken");
        }


        // verify required parameter 'context' is not null or undefined
        if (context === null || context === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdPut", "context");
        }


        // verify required parameter 'actionId' is not null or undefined
        if (actionId === null || actionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdPut", "actionId");
        }


        // verify required parameter 'customActionSchema' is not null or undefined
        if (customActionSchema === null || customActionSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextActionIdPut", "customActionSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/custom_actions/{context}/{action_id}/'
            .replace('{' + 'context' + '}', encodeURIComponent(String(context)))
            .replace('{' + 'action_id' + '}', encodeURIComponent(String(actionId)));

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
            ObjectSerializer.serialize(customActionSchema, "CustomActionSchema", ""),
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
     *  Required roles:  - can_read_custom_actions 
     * Get list of custom actions by context
     * @param appID 
     * @param authToken 
     * @param context 
     */
    public async assetsV1CustomActionsContextGet(appID: string, authToken: string, context: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextGet", "authToken");
        }


        // verify required parameter 'context' is not null or undefined
        if (context === null || context === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextGet", "context");
        }


        // Path Params
        const localVarPath = '/assets/v1/custom_actions/{context}/'
            .replace('{' + 'context' + '}', encodeURIComponent(String(context)));

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
     * Create an custom action
     * @param appID 
     * @param authToken 
     * @param context 
     * @param customActionSchema body
     */
    public async assetsV1CustomActionsContextPost(appID: string, authToken: string, context: string, customActionSchema: CustomActionSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextPost", "authToken");
        }


        // verify required parameter 'context' is not null or undefined
        if (context === null || context === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextPost", "context");
        }


        // verify required parameter 'customActionSchema' is not null or undefined
        if (customActionSchema === null || customActionSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsContextPost", "customActionSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/custom_actions/{context}/'
            .replace('{' + 'context' + '}', encodeURIComponent(String(context)));

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
            ObjectSerializer.serialize(customActionSchema, "CustomActionSchema", ""),
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
     *  Required roles:  - can_read_custom_actions 
     * Get list of custom actions
     * @param appID 
     * @param authToken 
     */
    public async assetsV1CustomActionsGet(appID: string, authToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsGet", "authToken");
        }


        // Path Params
        const localVarPath = '/assets/v1/custom_actions/';

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
     *  Required roles:  - can_read_custom_actions 
     * Schedules a celery task that will call custom action on shares
     * @param appID 
     * @param authToken 
     * @param context 
     * @param actionId 
     * @param customActionCallbackSchema body
     */
    public async assetsV1CustomActionsSharedContextActionIdCallbackPost(appID: string, authToken: string, context: string, actionId: string, customActionCallbackSchema: CustomActionCallbackSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsSharedContextActionIdCallbackPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsSharedContextActionIdCallbackPost", "authToken");
        }


        // verify required parameter 'context' is not null or undefined
        if (context === null || context === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsSharedContextActionIdCallbackPost", "context");
        }


        // verify required parameter 'actionId' is not null or undefined
        if (actionId === null || actionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsSharedContextActionIdCallbackPost", "actionId");
        }


        // verify required parameter 'customActionCallbackSchema' is not null or undefined
        if (customActionCallbackSchema === null || customActionCallbackSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1CustomActionsSharedContextActionIdCallbackPost", "customActionCallbackSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/custom_actions/shared/{context}/{action_id}/callback/'
            .replace('{' + 'context' + '}', encodeURIComponent(String(context)))
            .replace('{' + 'action_id' + '}', encodeURIComponent(String(actionId)));

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
            ObjectSerializer.serialize(customActionCallbackSchema, "CustomActionCallbackSchema", ""),
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
     *  Required roles:  - can_write_assets 
     * Delete assets from delete queue (Mark assets as active again)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public async assetsV1DeleteQueueAssetsDelete(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueAssetsDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueAssetsDelete", "authToken");
        }


        // verify required parameter 'deleteQueueSchema' is not null or undefined
        if (deleteQueueSchema === null || deleteQueueSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueAssetsDelete", "deleteQueueSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/delete_queue/assets/';

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
            ObjectSerializer.serialize(deleteQueueSchema, "DeleteQueueSchema", ""),
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
     *  Required roles:  - can_read_assets 
     * Get deleted objects
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param filter A comma separated list of fieldnames with order For example - first_name,eq,Vlad;last_name,eq,Gudkov
     */
    public async assetsV1DeleteQueueAssetsGet(appID: string, authToken: string, perPage?: number, page?: number, sort?: string, filter?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueAssetsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueAssetsGet", "authToken");
        }






        // Path Params
        const localVarPath = '/assets/v1/delete_queue/assets/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int32"));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
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
     *  Required roles:  - can_delete_assets 
     * Add assets to a delete queue (Mark assets as deleted)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public async assetsV1DeleteQueueAssetsPost(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueAssetsPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueAssetsPost", "authToken");
        }


        // verify required parameter 'deleteQueueSchema' is not null or undefined
        if (deleteQueueSchema === null || deleteQueueSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueAssetsPost", "deleteQueueSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/delete_queue/assets/';

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
            ObjectSerializer.serialize(deleteQueueSchema, "DeleteQueueSchema", ""),
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
     *  Required roles:  - can_purge_assets 
     * Purge all assets from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public async assetsV1DeleteQueueAssetsPurgeAllPost(appID: string, authToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueAssetsPurgeAllPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueAssetsPurgeAllPost", "authToken");
        }


        // Path Params
        const localVarPath = '/assets/v1/delete_queue/assets/purge/all/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     *  Required roles:  - can_purge_assets 
     * Purge assets from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public async assetsV1DeleteQueueAssetsPurgePost(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueAssetsPurgePost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueAssetsPurgePost", "authToken");
        }


        // verify required parameter 'deleteQueueSchema' is not null or undefined
        if (deleteQueueSchema === null || deleteQueueSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueAssetsPurgePost", "deleteQueueSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/delete_queue/assets/purge/';

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
            ObjectSerializer.serialize(deleteQueueSchema, "DeleteQueueSchema", ""),
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
     *  Required roles:  - can_write_assets 
     * Restore all assets from delete queue
     * @param appID 
     * @param authToken 
     */
    public async assetsV1DeleteQueueAssetsRestoreAllPost(appID: string, authToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueAssetsRestoreAllPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueAssetsRestoreAllPost", "authToken");
        }


        // Path Params
        const localVarPath = '/assets/v1/delete_queue/assets/restore/all/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     *  Required roles:  - can_delete_assets 
     * Bulk delete objects
     * @param appID 
     * @param authToken 
     * @param bulkDeleteSchema body
     */
    public async assetsV1DeleteQueueBulkPost(appID: string, authToken: string, bulkDeleteSchema: BulkDeleteSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueBulkPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueBulkPost", "authToken");
        }


        // verify required parameter 'bulkDeleteSchema' is not null or undefined
        if (bulkDeleteSchema === null || bulkDeleteSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueBulkPost", "bulkDeleteSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/delete_queue/bulk/';

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
            ObjectSerializer.serialize(bulkDeleteSchema, "BulkDeleteSchema", ""),
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
     *  Required roles:  - can_write_collections 
     * Delete collections from delete queue (Mark collections as active again)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public async assetsV1DeleteQueueCollectionsDelete(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueCollectionsDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueCollectionsDelete", "authToken");
        }


        // verify required parameter 'deleteQueueSchema' is not null or undefined
        if (deleteQueueSchema === null || deleteQueueSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueCollectionsDelete", "deleteQueueSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/delete_queue/collections/';

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
            ObjectSerializer.serialize(deleteQueueSchema, "DeleteQueueSchema", ""),
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
     *  Required roles:  - can_read_collections 
     * Get list of collections
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param filter A comma separated list of fieldnames with order For example - first_name,eq,Vlad;last_name,eq,Gudkov
     */
    public async assetsV1DeleteQueueCollectionsGet(appID: string, authToken: string, perPage?: number, page?: number, sort?: string, filter?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueCollectionsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueCollectionsGet", "authToken");
        }






        // Path Params
        const localVarPath = '/assets/v1/delete_queue/collections/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int32"));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
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
     *  Required roles:  - can_delete_collections 
     * Add collections to a delete queue (Mark collections as deleted)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public async assetsV1DeleteQueueCollectionsPost(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueCollectionsPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueCollectionsPost", "authToken");
        }


        // verify required parameter 'deleteQueueSchema' is not null or undefined
        if (deleteQueueSchema === null || deleteQueueSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueCollectionsPost", "deleteQueueSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/delete_queue/collections/';

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
            ObjectSerializer.serialize(deleteQueueSchema, "DeleteQueueSchema", ""),
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
     *  Required roles:  - can_purge_collections 
     * Purge all collections from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public async assetsV1DeleteQueueCollectionsPurgeAllPost(appID: string, authToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueCollectionsPurgeAllPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueCollectionsPurgeAllPost", "authToken");
        }


        // Path Params
        const localVarPath = '/assets/v1/delete_queue/collections/purge/all/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     *  Required roles:  - can_purge_collections 
     * Purge collections from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public async assetsV1DeleteQueueCollectionsPurgePost(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueCollectionsPurgePost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueCollectionsPurgePost", "authToken");
        }


        // verify required parameter 'deleteQueueSchema' is not null or undefined
        if (deleteQueueSchema === null || deleteQueueSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueCollectionsPurgePost", "deleteQueueSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/delete_queue/collections/purge/';

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
            ObjectSerializer.serialize(deleteQueueSchema, "DeleteQueueSchema", ""),
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
     *  Required roles:  - can_write_collections 
     * Restore all collections from delete queue
     * @param appID 
     * @param authToken 
     */
    public async assetsV1DeleteQueueCollectionsRestoreAllPost(appID: string, authToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueCollectionsRestoreAllPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueueCollectionsRestoreAllPost", "authToken");
        }


        // Path Params
        const localVarPath = '/assets/v1/delete_queue/collections/restore/all/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     *  Required roles:  - can_purge_assets - can_purge_collections 
     * Purge all assets and collections from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public async assetsV1DeleteQueuePurgeAllPost(appID: string, authToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueuePurgeAllPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1DeleteQueuePurgeAllPost", "authToken");
        }


        // Path Params
        const localVarPath = '/assets/v1/delete_queue/purge/all/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     *  Required roles:  - can_delete_favorites 
     * Removes all assets/collections from the list of favourites
     * @param appID 
     * @param authToken 
     */
    public async assetsV1FavoritesAllDelete(appID: string, authToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1FavoritesAllDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1FavoritesAllDelete", "authToken");
        }


        // Path Params
        const localVarPath = '/assets/v1/favorites/all/';

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
     *  Required roles:  - can_delete_favorites 
     * Deletes objects items from a list of favorites
     * @param appID 
     * @param authToken 
     * @param bulkDeleteFromFavoritesSchema body
     */
    public async assetsV1FavoritesDelete(appID: string, authToken: string, bulkDeleteFromFavoritesSchema: BulkDeleteFromFavoritesSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1FavoritesDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1FavoritesDelete", "authToken");
        }


        // verify required parameter 'bulkDeleteFromFavoritesSchema' is not null or undefined
        if (bulkDeleteFromFavoritesSchema === null || bulkDeleteFromFavoritesSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1FavoritesDelete", "bulkDeleteFromFavoritesSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/favorites/';

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
            ObjectSerializer.serialize(bulkDeleteFromFavoritesSchema, "BulkDeleteFromFavoritesSchema", ""),
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
     *  Required roles:  - can_read_assets 
     * Get list of favorite objects
     * @param appID 
     * @param authToken 
     * @param perPage The number of objects for each page
     * @param page Which page number to fetch
     * @param sort A comma separated list of fieldnames with order. For example - title,asc;date_created,desc
     */
    public async assetsV1FavoritesGet(appID: string, authToken: string, perPage?: number, page?: number, sort?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1FavoritesGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1FavoritesGet", "authToken");
        }





        // Path Params
        const localVarPath = '/assets/v1/favorites/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int32"));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
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
     *  Required roles:  - can_write_favorites 
     * Adds multiple objects to a list of favorites
     * @param appID 
     * @param authToken 
     * @param bulkAddToFavoritesSchema body
     */
    public async assetsV1FavoritesPost(appID: string, authToken: string, bulkAddToFavoritesSchema: BulkAddToFavoritesSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1FavoritesPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1FavoritesPost", "authToken");
        }


        // verify required parameter 'bulkAddToFavoritesSchema' is not null or undefined
        if (bulkAddToFavoritesSchema === null || bulkAddToFavoritesSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1FavoritesPost", "bulkAddToFavoritesSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/favorites/';

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
            ObjectSerializer.serialize(bulkAddToFavoritesSchema, "BulkAddToFavoritesSchema", ""),
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
     *  Required roles:  - can_delete_favorites 
     * Removes all assets/collections from the list of favourites
     * @param appID 
     * @param authToken 
     */
    public async assetsV1FavouritesAllDelete(appID: string, authToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1FavouritesAllDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1FavouritesAllDelete", "authToken");
        }


        // Path Params
        const localVarPath = '/assets/v1/favourites/all/';

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
     * 
     * Deletes an objects approval status
     * @param appID 
     * @param authToken 
     * @param objectId 
     * @param objectType 
     */
    public async assetsV1ObjectTypeObjectIdApprovalsDelete(appID: string, authToken: string, objectId: string, objectType: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsDelete", "authToken");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsDelete", "objectId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsDelete", "objectType");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/approvals/'
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)));

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
     *  Required roles:  - can_delete_approval_status 
     * Deletes an objects approval status by user_id
     * @param appID 
     * @param authToken 
     * @param objectId 
     * @param objectType 
     * @param email 
     */
    public async assetsV1ObjectTypeObjectIdApprovalsExternalEmailDelete(appID: string, authToken: string, objectId: string, objectType: string, email: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsExternalEmailDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsExternalEmailDelete", "authToken");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsExternalEmailDelete", "objectId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsExternalEmailDelete", "objectType");
        }


        // verify required parameter 'email' is not null or undefined
        if (email === null || email === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsExternalEmailDelete", "email");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/approvals/external/{email}/'
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'email' + '}', encodeURIComponent(String(email)));

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
     *  Required roles:  - can_read_approval_request 
     * Returns an objects approval request
     * @param appID 
     * @param authToken 
     * @param objectId 
     * @param objectType 
     */
    public async assetsV1ObjectTypeObjectIdApprovalsGet(appID: string, authToken: string, objectId: string, objectType: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsGet", "authToken");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsGet", "objectId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsGet", "objectType");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/approvals/'
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
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
     *  Required roles:  - can_write_approval_status 
     * Returns an objects approval status
     * @param appID 
     * @param authToken 
     * @param objectId 
     * @param objectType 
     * @param approvalBySchema body
     */
    public async assetsV1ObjectTypeObjectIdApprovalsPut(appID: string, authToken: string, objectId: string, objectType: string, approvalBySchema: ApprovalBySchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsPut", "authToken");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsPut", "objectId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsPut", "objectType");
        }


        // verify required parameter 'approvalBySchema' is not null or undefined
        if (approvalBySchema === null || approvalBySchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsPut", "approvalBySchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/approvals/'
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
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
            ObjectSerializer.serialize(approvalBySchema, "ApprovalBySchema", ""),
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
     *  Required roles:  - can_delete_approval_request 
     * Deletes an objects approval request
     * @param appID 
     * @param authToken 
     * @param objectId 
     * @param objectType 
     */
    public async assetsV1ObjectTypeObjectIdApprovalsRequestDelete(appID: string, authToken: string, objectId: string, objectType: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestDelete", "authToken");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestDelete", "objectId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestDelete", "objectType");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/approvals/request/'
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)));

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
     *  Required roles:  - can_read_approval_request 
     * Returns an objects approval request
     * @param appID 
     * @param authToken 
     * @param objectId 
     * @param objectType 
     */
    public async assetsV1ObjectTypeObjectIdApprovalsRequestGet(appID: string, authToken: string, objectId: string, objectType: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestGet", "authToken");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestGet", "objectId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestGet", "objectType");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/approvals/request/'
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
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
     *  Required roles:  - can_write_approval_request 
     * Edits an approval request
     * @param appID 
     * @param authToken 
     * @param objectId 
     * @param objectType 
     * @param approvalSchema body
     */
    public async assetsV1ObjectTypeObjectIdApprovalsRequestPatch(appID: string, authToken: string, objectId: string, objectType: string, approvalSchema: ApprovalSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestPatch", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestPatch", "authToken");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestPatch", "objectId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestPatch", "objectType");
        }


        // verify required parameter 'approvalSchema' is not null or undefined
        if (approvalSchema === null || approvalSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestPatch", "approvalSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/approvals/request/'
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)));

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
            ObjectSerializer.serialize(approvalSchema, "ApprovalSchema", ""),
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
     *  Required roles:  - can_write_approval_request 
     * Creates an objects approval request
     * @param appID 
     * @param authToken 
     * @param objectId 
     * @param objectType 
     * @param approvalSchema body
     */
    public async assetsV1ObjectTypeObjectIdApprovalsRequestPost(appID: string, authToken: string, objectId: string, objectType: string, approvalSchema: ApprovalSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestPost", "authToken");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestPost", "objectId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestPost", "objectType");
        }


        // verify required parameter 'approvalSchema' is not null or undefined
        if (approvalSchema === null || approvalSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestPost", "approvalSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/approvals/request/'
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
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
            ObjectSerializer.serialize(approvalSchema, "ApprovalSchema", ""),
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
     *  Required roles:  - can_write_approval_request 
     * Edits an approval request
     * @param appID 
     * @param authToken 
     * @param objectId 
     * @param objectType 
     * @param approvalSchema body
     */
    public async assetsV1ObjectTypeObjectIdApprovalsRequestPut(appID: string, authToken: string, objectId: string, objectType: string, approvalSchema: ApprovalSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestPut", "authToken");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestPut", "objectId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestPut", "objectType");
        }


        // verify required parameter 'approvalSchema' is not null or undefined
        if (approvalSchema === null || approvalSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsRequestPut", "approvalSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/approvals/request/'
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
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
            ObjectSerializer.serialize(approvalSchema, "ApprovalSchema", ""),
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
     *  Required roles:  - can_delete_approval_status 
     * Deletes an objects approval status by user_id
     * @param appID 
     * @param authToken 
     * @param objectId 
     * @param objectType 
     * @param userId 
     */
    public async assetsV1ObjectTypeObjectIdApprovalsUserUserIdDelete(appID: string, authToken: string, objectId: string, objectType: string, userId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsUserUserIdDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsUserUserIdDelete", "authToken");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsUserUserIdDelete", "objectId");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsUserUserIdDelete", "objectType");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdApprovalsUserUserIdDelete", "userId");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/approvals/user/{user_id}/'
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
     *  Required roles:  - can_read_shares 
     * Get list of shares
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param perPage The number of items for each page
     * @param lastId 
     */
    public async assetsV1ObjectTypeObjectIdSharesGet(appID: string, authToken: string, objectType: string, objectId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesGet", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesGet", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesGet", "objectId");
        }




        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/shares/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int32"));
        }

        // Query Params
        if (lastId !== undefined) {
            requestContext.setQueryParam("last_id", ObjectSerializer.serialize(lastId, "string", ""));
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
     * In case if is_approval=True, share options will be created respectively to user roles.<br/>In case if is_approval=True, share options will be created respectively to user roles.<br/> Required roles:  - can_write_shares 
     * Create a new share.
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param shareCreateSchema body
     * @param isApproval 
     */
    public async assetsV1ObjectTypeObjectIdSharesPost(appID: string, authToken: string, objectType: string, objectId: string, shareCreateSchema: ShareCreateSchema, isApproval?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesPost", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesPost", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesPost", "objectId");
        }


        // verify required parameter 'shareCreateSchema' is not null or undefined
        if (shareCreateSchema === null || shareCreateSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesPost", "shareCreateSchema");
        }



        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/shares/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (isApproval !== undefined) {
            requestContext.setQueryParam("is_approval", ObjectSerializer.serialize(isApproval, "boolean", ""));
        }

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
            ObjectSerializer.serialize(shareCreateSchema, "ShareCreateSchema", ""),
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
     *  Required roles:  - can_delete_object_shares 
     * Delete a particular share by id
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param shareId 
     */
    public async assetsV1ObjectTypeObjectIdSharesShareIdDelete(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdDelete", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdDelete", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdDelete", "objectId");
        }


        // verify required parameter 'shareId' is not null or undefined
        if (shareId === null || shareId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdDelete", "shareId");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/shares/{share_id}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'share_id' + '}', encodeURIComponent(String(shareId)));

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
     * 
     * Returns a particular share by id
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param shareId 
     */
    public async assetsV1ObjectTypeObjectIdSharesShareIdGet(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdGet", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdGet", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdGet", "objectId");
        }


        // verify required parameter 'shareId' is not null or undefined
        if (shareId === null || shareId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdGet", "shareId");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/shares/{share_id}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'share_id' + '}', encodeURIComponent(String(shareId)));

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
     *  Required roles:  - can_write_shares 
     * Update share
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param shareSchema body
     */
    public async assetsV1ObjectTypeObjectIdSharesShareIdPut(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, shareSchema: ShareSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdPut", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdPut", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdPut", "objectId");
        }


        // verify required parameter 'shareId' is not null or undefined
        if (shareId === null || shareId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdPut", "shareId");
        }


        // verify required parameter 'shareSchema' is not null or undefined
        if (shareSchema === null || shareSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdPut", "shareSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/shares/{share_id}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'share_id' + '}', encodeURIComponent(String(shareId)));

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
            ObjectSerializer.serialize(shareSchema, "ShareSchema", ""),
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
     *  Required roles:  - can_read_shares 
     * Get list of share users
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param perPage The number of items for each page
     * @param lastId 
     */
    public async assetsV1ObjectTypeObjectIdSharesShareIdUsersGet(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersGet", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersGet", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersGet", "objectId");
        }


        // verify required parameter 'shareId' is not null or undefined
        if (shareId === null || shareId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersGet", "shareId");
        }




        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/shares/{share_id}/users/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'share_id' + '}', encodeURIComponent(String(shareId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int32"));
        }

        // Query Params
        if (lastId !== undefined) {
            requestContext.setQueryParam("last_id", ObjectSerializer.serialize(lastId, "string", ""));
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
     *  Required roles:  - can_write_shares 
     * Add a new share_user to a share
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param shareUserSchema body
     */
    public async assetsV1ObjectTypeObjectIdSharesShareIdUsersPost(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, shareUserSchema: ShareUserSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersPost", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersPost", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersPost", "objectId");
        }


        // verify required parameter 'shareId' is not null or undefined
        if (shareId === null || shareId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersPost", "shareId");
        }


        // verify required parameter 'shareUserSchema' is not null or undefined
        if (shareUserSchema === null || shareUserSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersPost", "shareUserSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/shares/{share_id}/users/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'share_id' + '}', encodeURIComponent(String(shareId)));

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
            ObjectSerializer.serialize(shareUserSchema, "ShareUserSchema", ""),
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
     *  Required roles:  - can_write_shares 
     * Delete a particular share_user user by id
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param shareUserId 
     */
    public async assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDelete(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, shareUserId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDelete", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDelete", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDelete", "objectId");
        }


        // verify required parameter 'shareId' is not null or undefined
        if (shareId === null || shareId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDelete", "shareId");
        }


        // verify required parameter 'shareUserId' is not null or undefined
        if (shareUserId === null || shareUserId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDelete", "shareUserId");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/shares/{share_id}/users/{share_user_id}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'share_id' + '}', encodeURIComponent(String(shareId)))
            .replace('{' + 'share_user_id' + '}', encodeURIComponent(String(shareUserId)));

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
     *  Required roles:  - can_read_shares 
     * Returns a particular share user by id
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param shareUserId 
     */
    public async assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGet(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, shareUserId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGet", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGet", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGet", "objectId");
        }


        // verify required parameter 'shareId' is not null or undefined
        if (shareId === null || shareId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGet", "shareId");
        }


        // verify required parameter 'shareUserId' is not null or undefined
        if (shareUserId === null || shareUserId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGet", "shareUserId");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/shares/{share_id}/users/{share_user_id}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'share_id' + '}', encodeURIComponent(String(shareId)))
            .replace('{' + 'share_user_id' + '}', encodeURIComponent(String(shareUserId)));

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
     *  Required roles:  - can_write_shares 
     * Update share user
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param shareUserId 
     * @param shareUserSchema body
     */
    public async assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatch(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, shareUserId: string, shareUserSchema: ShareUserSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatch", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatch", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatch", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatch", "objectId");
        }


        // verify required parameter 'shareId' is not null or undefined
        if (shareId === null || shareId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatch", "shareId");
        }


        // verify required parameter 'shareUserId' is not null or undefined
        if (shareUserId === null || shareUserId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatch", "shareUserId");
        }


        // verify required parameter 'shareUserSchema' is not null or undefined
        if (shareUserSchema === null || shareUserSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatch", "shareUserSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/shares/{share_id}/users/{share_user_id}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'share_id' + '}', encodeURIComponent(String(shareId)))
            .replace('{' + 'share_user_id' + '}', encodeURIComponent(String(shareUserId)));

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
            ObjectSerializer.serialize(shareUserSchema, "ShareUserSchema", ""),
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
     *  Required roles:  - can_write_shares 
     * Update share user
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param shareUserId 
     * @param shareUserSchema body
     */
    public async assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPut(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, shareUserId: string, shareUserSchema: ShareUserSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPut", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPut", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPut", "objectId");
        }


        // verify required parameter 'shareId' is not null or undefined
        if (shareId === null || shareId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPut", "shareId");
        }


        // verify required parameter 'shareUserId' is not null or undefined
        if (shareUserId === null || shareUserId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPut", "shareUserId");
        }


        // verify required parameter 'shareUserSchema' is not null or undefined
        if (shareUserSchema === null || shareUserSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPut", "shareUserSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/shares/{share_id}/users/{share_user_id}/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'share_id' + '}', encodeURIComponent(String(shareId)))
            .replace('{' + 'share_user_id' + '}', encodeURIComponent(String(shareUserId)));

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
            ObjectSerializer.serialize(shareUserSchema, "ShareUserSchema", ""),
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
     *  Required roles:  - can_write_shares 
     * Generates a URL for the shared object
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param shareURLCreateSchema body
     */
    public async assetsV1ObjectTypeObjectIdSharesUrlPost(appID: string, authToken: string, objectType: string, objectId: string, shareURLCreateSchema: ShareURLCreateSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesUrlPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesUrlPost", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesUrlPost", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesUrlPost", "objectId");
        }


        // verify required parameter 'shareURLCreateSchema' is not null or undefined
        if (shareURLCreateSchema === null || shareURLCreateSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdSharesUrlPost", "shareURLCreateSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/shares/url/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)));

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
            ObjectSerializer.serialize(shareURLCreateSchema, "ShareURLCreateSchema", ""),
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
     *  Required roles:  - can_read_approval_request 
     * Returns an objects approval request by version
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param versionId 
     */
    public async assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGet(appID: string, authToken: string, objectType: string, objectId: string, versionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGet", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGet", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGet", "objectId");
        }


        // verify required parameter 'versionId' is not null or undefined
        if (versionId === null || versionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGet", "versionId");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/versions/{version_id}/approvals/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'version_id' + '}', encodeURIComponent(String(versionId)));

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
     *  Required roles:  - can_read_approval_request 
     * Returns an objects approval request by version
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param versionId 
     */
    public async assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGet(appID: string, authToken: string, objectType: string, objectId: string, versionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGet", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGet", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGet", "objectId");
        }


        // verify required parameter 'versionId' is not null or undefined
        if (versionId === null || versionId === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGet", "versionId");
        }


        // Path Params
        const localVarPath = '/assets/v1/{object_type}/{object_id}/versions/{version_id}/approvals/request/'
            .replace('{' + 'object_type' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'version_id' + '}', encodeURIComponent(String(versionId)));

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
     *  Required roles:  - can_reindex_segments 
     * Trigger reindexing of specific segment ids
     * @param appID 
     * @param authToken 
     * @param reindexSegmentsSchema body
     */
    public async assetsV1SegmentsReindexPost(appID: string, authToken: string, reindexSegmentsSchema: ReindexSegmentsSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1SegmentsReindexPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1SegmentsReindexPost", "authToken");
        }


        // verify required parameter 'reindexSegmentsSchema' is not null or undefined
        if (reindexSegmentsSchema === null || reindexSegmentsSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1SegmentsReindexPost", "reindexSegmentsSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/segments/reindex/';

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
            ObjectSerializer.serialize(reindexSegmentsSchema, "ReindexSegmentsSchema", ""),
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
     *  Required roles:  - can_write_shares 
     * Create a new share of multiple objects (currently only assets are supported)
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param bulkShareCreateSchema body
     */
    public async assetsV1ShareObjectTypePost(appID: string, authToken: string, objectType: string, bulkShareCreateSchema: BulkShareCreateSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ShareObjectTypePost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ShareObjectTypePost", "authToken");
        }


        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ShareObjectTypePost", "objectType");
        }


        // verify required parameter 'bulkShareCreateSchema' is not null or undefined
        if (bulkShareCreateSchema === null || bulkShareCreateSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1ShareObjectTypePost", "bulkShareCreateSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/share/{object_type}/'
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
            ObjectSerializer.serialize(bulkShareCreateSchema, "BulkShareCreateSchema", ""),
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
     * 
     * Login for share
     * @param appID 
     * @param shareLoginSchema body
     */
    public async assetsV1SharesAuthLoginPost(appID: string, shareLoginSchema: ShareLoginSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1SharesAuthLoginPost", "appID");
        }


        // verify required parameter 'shareLoginSchema' is not null or undefined
        if (shareLoginSchema === null || shareLoginSchema === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1SharesAuthLoginPost", "shareLoginSchema");
        }


        // Path Params
        const localVarPath = '/assets/v1/shares/auth/login/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(shareLoginSchema, "ShareLoginSchema", ""),
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
     * 
     * Check if a token is valid
     * @param appID 
     * @param shareAuthToken 
     */
    public async assetsV1SharesAuthTokenGet(appID: string, shareAuthToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1SharesAuthTokenGet", "appID");
        }


        // verify required parameter 'shareAuthToken' is not null or undefined
        if (shareAuthToken === null || shareAuthToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1SharesAuthTokenGet", "shareAuthToken");
        }


        // Path Params
        const localVarPath = '/assets/v1/shares/auth/token/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Share-Auth-Token", ObjectSerializer.serialize(shareAuthToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * Refreshes a token for share
     * @param appID 
     * @param shareAuthToken 
     */
    public async assetsV1SharesAuthTokenPut(appID: string, shareAuthToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1SharesAuthTokenPut", "appID");
        }


        // verify required parameter 'shareAuthToken' is not null or undefined
        if (shareAuthToken === null || shareAuthToken === undefined) {
            throw new RequiredError("AssetsApi", "assetsV1SharesAuthTokenPut", "shareAuthToken");
        }


        // Path Params
        const localVarPath = '/assets/v1/shares/auth/token/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Share-Auth-Token", ObjectSerializer.serialize(shareAuthToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AssetsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1ApprovalsBulkPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ApprovalsBulkPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to assetsV1ApprovalsBulkRemovePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ApprovalsBulkRemovePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Forbidden", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Asset does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetSchema", ""
            ) as AssetSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Asset does not exist", undefined, response.headers);
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
            const body: AssetSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetSchema", ""
            ) as AssetSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdHistoryGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdHistoryGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetHistoryEntitiesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetHistoryEntitiesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetHistoryEntitiesSchema", ""
            ) as AssetHistoryEntitiesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: AssetHistoryEntitiesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetHistoryEntitiesSchema", ""
            ) as AssetHistoryEntitiesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdHistoryHistoryEntityIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdHistoryHistoryEntityIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetHistorySchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: AssetHistorySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetHistorySchema", ""
            ) as AssetHistorySchema;
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
            const body: AssetHistorySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetHistorySchema", ""
            ) as AssetHistorySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdHistoryHistoryEntityIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdHistoryHistoryEntityIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetHistorySchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: AssetHistorySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetHistorySchema", ""
            ) as AssetHistorySchema;
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
            const body: AssetHistorySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetHistorySchema", ""
            ) as AssetHistorySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Asset history entity does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdHistoryPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdHistoryPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetHistorySchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: AssetHistorySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetHistorySchema", ""
            ) as AssetHistorySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Asset Id doesn\&#39;t exist", undefined, response.headers);
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
            const body: AssetHistorySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetHistorySchema", ""
            ) as AssetHistorySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetSchema", ""
            ) as AssetSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Asset does not exist", undefined, response.headers);
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
            const body: AssetSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetSchema", ""
            ) as AssetSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdPurgeDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdPurgeDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Asset does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetSchema", ""
            ) as AssetSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Asset does not exist", undefined, response.headers);
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
            const body: AssetSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetSchema", ""
            ) as AssetSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdReindexPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdReindexPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Asset does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdRelationsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdRelationsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetsSchema", ""
            ) as AssetsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: AssetsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetsSchema", ""
            ) as AssetsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdRelationsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdRelationsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RelationSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RelationSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RelationSchema", ""
            ) as RelationSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: RelationSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RelationSchema", ""
            ) as RelationSchema;
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
            const body: RelationSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RelationSchema", ""
            ) as RelationSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdRelationsRelationTypeGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdRelationsRelationTypeGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetsSchema", ""
            ) as AssetsSchema;
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
            const body: AssetsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetsSchema", ""
            ) as AssetsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RelationSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RelationSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RelationSchema", ""
            ) as RelationSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: RelationSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RelationSchema", ""
            ) as RelationSchema;
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
            const body: RelationSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RelationSchema", ""
            ) as RelationSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RelationSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RelationSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RelationSchema", ""
            ) as RelationSchema;
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
            const body: RelationSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RelationSchema", ""
            ) as RelationSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdRestorePut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdRestorePutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Asset does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdSearchDocumentPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdSearchDocumentPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "No metadata supplied", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Asset does not exist in search index", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdSegmentsBulkDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdSegmentsBulkDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Segment ids or segment type not provided correctly", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "No segments found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdSegmentsBulkPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdSegmentsBulkPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
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
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdSegmentsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdSegmentsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SegmentsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SegmentsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SegmentsSchema", ""
            ) as SegmentsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Page number does not exist", undefined, response.headers);
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
            const body: SegmentsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SegmentsSchema", ""
            ) as SegmentsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdSegmentsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdSegmentsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SegmentSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: SegmentSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SegmentSchema", ""
            ) as SegmentSchema;
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
            const body: SegmentSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SegmentSchema", ""
            ) as SegmentSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdSegmentsReindexPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdSegmentsReindexPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Asset does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdSegmentsSegmentIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdSegmentsSegmentIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Segment not found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdSegmentsSegmentIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdSegmentsSegmentIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SegmentSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SegmentSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SegmentSchema", ""
            ) as SegmentSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Segment does not exist", undefined, response.headers);
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
            const body: SegmentSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SegmentSchema", ""
            ) as SegmentSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdSegmentsSegmentIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdSegmentsSegmentIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SegmentSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SegmentSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SegmentSchema", ""
            ) as SegmentSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Segment does not exist", undefined, response.headers);
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
            const body: SegmentSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SegmentSchema", ""
            ) as SegmentSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdSegmentsSegmentIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdSegmentsSegmentIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SegmentSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SegmentSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SegmentSchema", ""
            ) as SegmentSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Segment does not exist", undefined, response.headers);
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
            const body: SegmentSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SegmentSchema", ""
            ) as SegmentSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdSegmentsSegmentIdReindexPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdSegmentsSegmentIdReindexPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Asset segment does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdSegmentsSegmentTypeGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdSegmentsSegmentTypeGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SegmentsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SegmentsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SegmentsSchema", ""
            ) as SegmentsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Page number does not exist", undefined, response.headers);
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
            const body: SegmentsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SegmentsSchema", ""
            ) as SegmentsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdSegmentsSrtGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdSegmentsSrtGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Page number does not exist", undefined, response.headers);
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
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdSegmentsVttGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdSegmentsVttGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Page number does not exist", undefined, response.headers);
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
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdUploadsDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdUploadsDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Asset does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Source or destination asset does not exist", undefined, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The asset is being transcoded and cannot be set as a new version", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Source or destination asset does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdVersionsOldDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdVersionsOldDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Forbidden", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Asset does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdVersionsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdVersionsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetVersionsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetVersionsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetVersionsSchema", ""
            ) as AssetVersionsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Asset does not exist", undefined, response.headers);
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
            const body: AssetVersionsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetVersionsSchema", ""
            ) as AssetVersionsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdVersionsVersionIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdVersionsVersionIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Forbidden", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Asset does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdVersionsVersionIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdVersionsVersionIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetVersionSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetVersionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetVersionSchema", ""
            ) as AssetVersionSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Asset does not exist", undefined, response.headers);
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
            const body: AssetVersionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetVersionSchema", ""
            ) as AssetVersionSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdVersionsVersionIdPromotePut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdVersionsVersionIdPromotePutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Asset does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdVersionsVersionIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdVersionsVersionIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetVersionSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetVersionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetVersionSchema", ""
            ) as AssetVersionSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Asset does not exist", undefined, response.headers);
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
            const body: AssetVersionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetVersionSchema", ""
            ) as AssetVersionSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetTranscriptionsPropertiesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetTranscriptionsPropertiesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetTranscriptionsPropertiesSchema", ""
            ) as AssetTranscriptionsPropertiesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Transcription does not exist", undefined, response.headers);
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
            const body: AssetTranscriptionsPropertiesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetTranscriptionsPropertiesSchema", ""
            ) as AssetTranscriptionsPropertiesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetTranscriptionPropertiesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetTranscriptionPropertiesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetTranscriptionPropertiesSchema", ""
            ) as AssetTranscriptionPropertiesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Transcription properties do not exist", undefined, response.headers);
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
            const body: AssetTranscriptionPropertiesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetTranscriptionPropertiesSchema", ""
            ) as AssetTranscriptionPropertiesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetTranscriptionPropertiesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetTranscriptionPropertiesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetTranscriptionPropertiesSchema", ""
            ) as AssetTranscriptionPropertiesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Transcription properties do not exist", undefined, response.headers);
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
            const body: AssetTranscriptionPropertiesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetTranscriptionPropertiesSchema", ""
            ) as AssetTranscriptionPropertiesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Transcription properties do not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetTranscriptionPropertiesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetTranscriptionPropertiesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetTranscriptionPropertiesSchema", ""
            ) as AssetTranscriptionPropertiesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Transcription properties do not exist", undefined, response.headers);
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
            const body: AssetTranscriptionPropertiesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetTranscriptionPropertiesSchema", ""
            ) as AssetTranscriptionPropertiesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetTranscriptionPropertiesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetTranscriptionPropertiesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetTranscriptionPropertiesSchema", ""
            ) as AssetTranscriptionPropertiesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Transcription properties do not exist", undefined, response.headers);
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
            const body: AssetTranscriptionPropertiesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetTranscriptionPropertiesSchema", ""
            ) as AssetTranscriptionPropertiesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetTranscriptionPropertiesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetTranscriptionPropertiesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetTranscriptionPropertiesSchema", ""
            ) as AssetTranscriptionPropertiesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Transcription properties do not exist", undefined, response.headers);
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
            const body: AssetTranscriptionPropertiesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetTranscriptionPropertiesSchema", ""
            ) as AssetTranscriptionPropertiesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsAssetIdViewsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsAssetIdViewsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetSchema", ""
            ) as AssetSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Asset does not exist", undefined, response.headers);
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
            const body: AssetSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetSchema", ""
            ) as AssetSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetsSchema", ""
            ) as AssetsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: AssetsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetsSchema", ""
            ) as AssetsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to assetsV1AssetsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: AssetSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetSchema", ""
            ) as AssetSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Permission denied", undefined, response.headers);
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
            const body: AssetSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetSchema", ""
            ) as AssetSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to assetsV1AssetsReindexPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsReindexPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * @params response Response returned by the server for a request to assetsV1AssetsRelationTypesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsRelationTypesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RelationTypesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RelationTypesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RelationTypesSchema", ""
            ) as RelationTypesSchema;
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
            const body: RelationTypesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RelationTypesSchema", ""
            ) as RelationTypesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsRelationTypesPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsRelationTypesPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RelationTypeSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: RelationTypeSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RelationTypeSchema", ""
            ) as RelationTypeSchema;
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
            const body: RelationTypeSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RelationTypeSchema", ""
            ) as RelationTypeSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsRelationTypesRelationTypeDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsRelationTypesRelationTypeDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to assetsV1AssetsRelationTypesRelationTypeGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsRelationTypesRelationTypeGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RelationTypeSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RelationTypeSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RelationTypeSchema", ""
            ) as RelationTypeSchema;
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
            const body: RelationTypeSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RelationTypeSchema", ""
            ) as RelationTypeSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsRelationTypesRelationTypePatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsRelationTypesRelationTypePatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RelationTypeSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RelationTypeSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RelationTypeSchema", ""
            ) as RelationTypeSchema;
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
            const body: RelationTypeSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RelationTypeSchema", ""
            ) as RelationTypeSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsRelationTypesRelationTypePut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsRelationTypesRelationTypePutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RelationTypeSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RelationTypeSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RelationTypeSchema", ""
            ) as RelationTypeSchema;
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
            const body: RelationTypeSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RelationTypeSchema", ""
            ) as RelationTypeSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1AssetsSegmentsReindexPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1AssetsSegmentsReindexPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdAncestorsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdAncestorsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionsSchema", ""
            ) as CollectionsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Collection does not exist", undefined, response.headers);
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
            const body: CollectionsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionsSchema", ""
            ) as CollectionsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdContentInfoGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdContentInfoGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionContentInfoSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionContentInfoSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionContentInfoSchema", ""
            ) as CollectionContentInfoSchema;
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
            const body: CollectionContentInfoSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionContentInfoSchema", ""
            ) as CollectionContentInfoSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdContentsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdContentsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetsSchema", ""
            ) as AssetsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Collection does not exist", undefined, response.headers);
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
            const body: AssetsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetsSchema", ""
            ) as AssetsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Content object not found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Content object not found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Collection content does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdContentsOrderingCustomDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdContentsOrderingCustomDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Collection not found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdContentsOrderingCustomPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdContentsOrderingCustomPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Collection not found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdContentsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdContentsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Collection not found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Collection does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdFullPathGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdFullPathGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Collection does not exist", undefined, response.headers);
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
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionSchema", ""
            ) as CollectionSchema;
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
            const body: CollectionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionSchema", ""
            ) as CollectionSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdKeyframesPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdKeyframesPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Collection does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionSchema", ""
            ) as CollectionSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Collection does not exist", undefined, response.headers);
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
            const body: CollectionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionSchema", ""
            ) as CollectionSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdPurgeDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdPurgeDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Forbidden - Collection is not empty", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Collection does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionSchema", ""
            ) as CollectionSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Collection does not exist", undefined, response.headers);
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
            const body: CollectionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionSchema", ""
            ) as CollectionSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdReindexContentsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdReindexContentsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Collection does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdReindexPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdReindexPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Collection does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdRestorePut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdRestorePutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Forbidden - Collection is not empty", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Collection does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdSearchDocumentPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdSearchDocumentPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "No metadata supplied", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Collection does not exist in search index", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdSizeGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdSizeGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionSizeSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionSizeSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionSizeSchema", ""
            ) as CollectionSizeSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Collection does not exist", undefined, response.headers);
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
            const body: CollectionSizeSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionSizeSchema", ""
            ) as CollectionSizeSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1CollectionsCollectionIdSubcollectionsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsCollectionIdSubcollectionsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Collection not found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1CollectionsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionsSchema", ""
            ) as CollectionsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: CollectionsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionsSchema", ""
            ) as CollectionsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1CollectionsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CollectionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionSchema", ""
            ) as CollectionSchema;
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
            const body: CollectionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionSchema", ""
            ) as CollectionSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1CollectionsReindexPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CollectionsReindexPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * @params response Response returned by the server for a request to assetsV1CustomActionsContextActionIdCallbackPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CustomActionsContextActionIdCallbackPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomActionCallbackReplySchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CustomActionCallbackReplySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomActionCallbackReplySchema", ""
            ) as CustomActionCallbackReplySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: CustomActionCallbackReplySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomActionCallbackReplySchema", ""
            ) as CustomActionCallbackReplySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1CustomActionsContextActionIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CustomActionsContextActionIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomActionSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            const body: CustomActionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomActionSchema", ""
            ) as CustomActionSchema;
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
            const body: CustomActionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomActionSchema", ""
            ) as CustomActionSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1CustomActionsContextActionIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CustomActionsContextActionIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomActionSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CustomActionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomActionSchema", ""
            ) as CustomActionSchema;
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
            const body: CustomActionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomActionSchema", ""
            ) as CustomActionSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1CustomActionsContextActionIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CustomActionsContextActionIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomActionSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CustomActionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomActionSchema", ""
            ) as CustomActionSchema;
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
            const body: CustomActionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomActionSchema", ""
            ) as CustomActionSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1CustomActionsContextActionIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CustomActionsContextActionIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomActionSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CustomActionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomActionSchema", ""
            ) as CustomActionSchema;
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
            const body: CustomActionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomActionSchema", ""
            ) as CustomActionSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1CustomActionsContextGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CustomActionsContextGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomActionsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CustomActionsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomActionsSchema", ""
            ) as CustomActionsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: CustomActionsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomActionsSchema", ""
            ) as CustomActionsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1CustomActionsContextPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CustomActionsContextPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomActionSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CustomActionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomActionSchema", ""
            ) as CustomActionSchema;
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
            const body: CustomActionSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomActionSchema", ""
            ) as CustomActionSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1CustomActionsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CustomActionsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomActionsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CustomActionsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomActionsSchema", ""
            ) as CustomActionsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: CustomActionsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomActionsSchema", ""
            ) as CustomActionsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1CustomActionsSharedContextActionIdCallbackPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1CustomActionsSharedContextActionIdCallbackPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomActionCallbackReplySchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CustomActionCallbackReplySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomActionCallbackReplySchema", ""
            ) as CustomActionCallbackReplySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: CustomActionCallbackReplySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomActionCallbackReplySchema", ""
            ) as CustomActionCallbackReplySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1DeleteQueueAssetsDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1DeleteQueueAssetsDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to assetsV1DeleteQueueAssetsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1DeleteQueueAssetsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetsSchema", ""
            ) as AssetsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: AssetsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetsSchema", ""
            ) as AssetsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1DeleteQueueAssetsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1DeleteQueueAssetsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to assetsV1DeleteQueueAssetsPurgeAllPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1DeleteQueueAssetsPurgeAllPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * @params response Response returned by the server for a request to assetsV1DeleteQueueAssetsPurgePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1DeleteQueueAssetsPurgePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to assetsV1DeleteQueueAssetsRestoreAllPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1DeleteQueueAssetsRestoreAllPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * @params response Response returned by the server for a request to assetsV1DeleteQueueBulkPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1DeleteQueueBulkPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to assetsV1DeleteQueueCollectionsDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1DeleteQueueCollectionsDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Forbidden - Collection is not empty", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1DeleteQueueCollectionsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1DeleteQueueCollectionsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionsSchema", ""
            ) as CollectionsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: CollectionsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionsSchema", ""
            ) as CollectionsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1DeleteQueueCollectionsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1DeleteQueueCollectionsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Forbidden - Collection is not empty", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1DeleteQueueCollectionsPurgeAllPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1DeleteQueueCollectionsPurgeAllPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * @params response Response returned by the server for a request to assetsV1DeleteQueueCollectionsPurgePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1DeleteQueueCollectionsPurgePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Forbidden - Collection is not empty", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1DeleteQueueCollectionsRestoreAllPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1DeleteQueueCollectionsRestoreAllPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * @params response Response returned by the server for a request to assetsV1DeleteQueuePurgeAllPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1DeleteQueuePurgeAllPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * @params response Response returned by the server for a request to assetsV1FavoritesAllDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1FavoritesAllDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1FavoritesDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1FavoritesDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BulkDeleteFromFavoritesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BulkDeleteFromFavoritesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkDeleteFromFavoritesSchema", ""
            ) as BulkDeleteFromFavoritesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: BulkDeleteFromFavoritesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkDeleteFromFavoritesSchema", ""
            ) as BulkDeleteFromFavoritesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1FavoritesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1FavoritesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FavoritesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FavoritesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FavoritesSchema", ""
            ) as FavoritesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: FavoritesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FavoritesSchema", ""
            ) as FavoritesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1FavoritesPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1FavoritesPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BulkAddToFavoritesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BulkAddToFavoritesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkAddToFavoritesSchema", ""
            ) as BulkAddToFavoritesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: BulkAddToFavoritesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkAddToFavoritesSchema", ""
            ) as BulkAddToFavoritesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1FavouritesAllDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1FavouritesAllDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdApprovalsDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdApprovalsDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdApprovalsExternalEmailDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdApprovalsExternalEmailDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdApprovalsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdApprovalsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApprovalsBySchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApprovalsBySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalsBySchema", ""
            ) as ApprovalsBySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: ApprovalsBySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalsBySchema", ""
            ) as ApprovalsBySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdApprovalsPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdApprovalsPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApprovalBySchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApprovalBySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalBySchema", ""
            ) as ApprovalBySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: ApprovalBySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalBySchema", ""
            ) as ApprovalBySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdApprovalsRequestDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdApprovalsRequestDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApprovalSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApprovalSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalSchema", ""
            ) as ApprovalSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: ApprovalSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalSchema", ""
            ) as ApprovalSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdApprovalsRequestGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdApprovalsRequestGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApprovalSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApprovalSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalSchema", ""
            ) as ApprovalSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: ApprovalSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalSchema", ""
            ) as ApprovalSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdApprovalsRequestPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdApprovalsRequestPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApprovalSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApprovalSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalSchema", ""
            ) as ApprovalSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: ApprovalSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalSchema", ""
            ) as ApprovalSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdApprovalsRequestPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdApprovalsRequestPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApprovalSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApprovalSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalSchema", ""
            ) as ApprovalSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: ApprovalSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalSchema", ""
            ) as ApprovalSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdApprovalsRequestPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdApprovalsRequestPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApprovalSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApprovalSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalSchema", ""
            ) as ApprovalSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: ApprovalSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalSchema", ""
            ) as ApprovalSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdApprovalsUserUserIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdApprovalsUserUserIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdSharesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdSharesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SharesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SharesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SharesSchema", ""
            ) as SharesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: SharesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SharesSchema", ""
            ) as SharesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdSharesPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdSharesPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ShareSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ShareSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareSchema", ""
            ) as ShareSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Shares are restricted by system administator", undefined, response.headers);
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
            const body: ShareSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareSchema", ""
            ) as ShareSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdSharesShareIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdSharesShareIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Share does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdSharesShareIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdSharesShareIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ShareSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ShareSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareSchema", ""
            ) as ShareSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Share does not exist", undefined, response.headers);
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
            const body: ShareSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareSchema", ""
            ) as ShareSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdSharesShareIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdSharesShareIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ShareSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ShareSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareSchema", ""
            ) as ShareSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Share does not exist", undefined, response.headers);
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
            const body: ShareSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareSchema", ""
            ) as ShareSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdSharesShareIdUsersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdSharesShareIdUsersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ShareUsersSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ShareUsersSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareUsersSchema", ""
            ) as ShareUsersSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: ShareUsersSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareUsersSchema", ""
            ) as ShareUsersSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdSharesShareIdUsersPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdSharesShareIdUsersPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ShareUserSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ShareUserSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareUserSchema", ""
            ) as ShareUserSchema;
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
            const body: ShareUserSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareUserSchema", ""
            ) as ShareUserSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
            throw new ApiException<undefined>(response.httpStatusCode, "Share does not exist", undefined, response.headers);
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
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ShareUserSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ShareUserSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareUserSchema", ""
            ) as ShareUserSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Share does not exist", undefined, response.headers);
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
            const body: ShareUserSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareUserSchema", ""
            ) as ShareUserSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ShareUserSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ShareUserSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareUserSchema", ""
            ) as ShareUserSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Share does not exist", undefined, response.headers);
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
            const body: ShareUserSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareUserSchema", ""
            ) as ShareUserSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ShareUserSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ShareUserSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareUserSchema", ""
            ) as ShareUserSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Share does not exist", undefined, response.headers);
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
            const body: ShareUserSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareUserSchema", ""
            ) as ShareUserSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdSharesUrlPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdSharesUrlPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ShareURLSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ShareURLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareURLSchema", ""
            ) as ShareURLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Shares are restricted by system administator", undefined, response.headers);
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
            const body: ShareURLSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareURLSchema", ""
            ) as ShareURLSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApprovalsBySchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApprovalsBySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalsBySchema", ""
            ) as ApprovalsBySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: ApprovalsBySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalsBySchema", ""
            ) as ApprovalsBySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApprovalSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApprovalSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalSchema", ""
            ) as ApprovalSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
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
            const body: ApprovalSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalSchema", ""
            ) as ApprovalSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1SegmentsReindexPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1SegmentsReindexPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * @params response Response returned by the server for a request to assetsV1ShareObjectTypePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1ShareObjectTypePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ShareSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ShareSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareSchema", ""
            ) as ShareSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Shares are restricted by system administator", undefined, response.headers);
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
            const body: ShareSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareSchema", ""
            ) as ShareSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1SharesAuthLoginPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1SharesAuthLoginPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ShareTokenSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ShareTokenSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareTokenSchema", ""
            ) as ShareTokenSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Share does not exist", undefined, response.headers);
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
            const body: ShareTokenSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareTokenSchema", ""
            ) as ShareTokenSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1SharesAuthTokenGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1SharesAuthTokenGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ShareTokenSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ShareTokenSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareTokenSchema", ""
            ) as ShareTokenSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Share does not exist", undefined, response.headers);
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
            const body: ShareTokenSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareTokenSchema", ""
            ) as ShareTokenSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assetsV1SharesAuthTokenPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assetsV1SharesAuthTokenPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ShareTokenSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ShareTokenSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareTokenSchema", ""
            ) as ShareTokenSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Share does not exist", undefined, response.headers);
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
            const body: ShareTokenSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShareTokenSchema", ""
            ) as ShareTokenSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
