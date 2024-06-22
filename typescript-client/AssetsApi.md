# iconik.AssetsApi

All URIs are relative to *https://app.iconik.io/API*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsV1ApprovalsBulkPost**](AssetsApi.md#assetsV1ApprovalsBulkPost) | **POST** /assets/v1/approvals/bulk/ | Create a job for bulk request &amp; set approval
[**assetsV1ApprovalsBulkRemovePost**](AssetsApi.md#assetsV1ApprovalsBulkRemovePost) | **POST** /assets/v1/approvals/bulk_remove/ | Create a job for bulk approval status removal
[**assetsV1AssetsAssetIdDelete**](AssetsApi.md#assetsV1AssetsAssetIdDelete) | **DELETE** /assets/v1/assets/{asset_id}/ | Delete a particular asset by id
[**assetsV1AssetsAssetIdGet**](AssetsApi.md#assetsV1AssetsAssetIdGet) | **GET** /assets/v1/assets/{asset_id}/ | Returns a particular asset by id
[**assetsV1AssetsAssetIdHistoryGet**](AssetsApi.md#assetsV1AssetsAssetIdHistoryGet) | **GET** /assets/v1/assets/{asset_id}/history/ | Get list of assets
[**assetsV1AssetsAssetIdHistoryHistoryEntityIdDelete**](AssetsApi.md#assetsV1AssetsAssetIdHistoryHistoryEntityIdDelete) | **DELETE** /assets/v1/assets/{asset_id}/history/{history_entity_id}/ | Deletes an asset history entity
[**assetsV1AssetsAssetIdHistoryHistoryEntityIdGet**](AssetsApi.md#assetsV1AssetsAssetIdHistoryHistoryEntityIdGet) | **GET** /assets/v1/assets/{asset_id}/history/{history_entity_id}/ | Get an asset history entity
[**assetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPost**](AssetsApi.md#assetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPost) | **POST** /assets/v1/assets/{asset_id}/history/{history_entity_id}/reindex/ | Reindex asset history entity
[**assetsV1AssetsAssetIdHistoryPost**](AssetsApi.md#assetsV1AssetsAssetIdHistoryPost) | **POST** /assets/v1/assets/{asset_id}/history/ | Create an asset history entity
[**assetsV1AssetsAssetIdPatch**](AssetsApi.md#assetsV1AssetsAssetIdPatch) | **PATCH** /assets/v1/assets/{asset_id}/ | Update asset
[**assetsV1AssetsAssetIdPurgeDelete**](AssetsApi.md#assetsV1AssetsAssetIdPurgeDelete) | **DELETE** /assets/v1/assets/{asset_id}/purge/ | Purges a particular asset by id immediately
[**assetsV1AssetsAssetIdPut**](AssetsApi.md#assetsV1AssetsAssetIdPut) | **PUT** /assets/v1/assets/{asset_id}/ | Update asset
[**assetsV1AssetsAssetIdReindexPost**](AssetsApi.md#assetsV1AssetsAssetIdReindexPost) | **POST** /assets/v1/assets/{asset_id}/reindex/ | Reindex asset
[**assetsV1AssetsAssetIdRelationsGet**](AssetsApi.md#assetsV1AssetsAssetIdRelationsGet) | **GET** /assets/v1/assets/{asset_id}/relations/ | Returns an assets relations
[**assetsV1AssetsAssetIdRelationsPost**](AssetsApi.md#assetsV1AssetsAssetIdRelationsPost) | **POST** /assets/v1/assets/{asset_id}/relations/ | Create a new asset relation
[**assetsV1AssetsAssetIdRelationsRelationTypeGet**](AssetsApi.md#assetsV1AssetsAssetIdRelationsRelationTypeGet) | **GET** /assets/v1/assets/{asset_id}/relations/{relation_type}/ | Returns assets that has a relation to this asset
[**assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDelete**](AssetsApi.md#assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDelete) | **DELETE** /assets/v1/assets/{asset_id}/relations/{relation_type}/{related_to_asset_id}/ | Delete a particular asset by id
[**assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPost**](AssetsApi.md#assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPost) | **POST** /assets/v1/assets/{asset_id}/relations/{relation_type}/{related_to_asset_id}/ | Create a new asset relation
[**assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePost**](AssetsApi.md#assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePost) | **POST** /assets/v1/assets/{asset_id}/relations/{relation_type}/{related_to_asset_id}/reverse/ | Reverse a particular asset\&#39;s relation
[**assetsV1AssetsAssetIdRestorePut**](AssetsApi.md#assetsV1AssetsAssetIdRestorePut) | **PUT** /assets/v1/assets/{asset_id}/restore/ | Restore deleted asset by id
[**assetsV1AssetsAssetIdSearchDocumentPut**](AssetsApi.md#assetsV1AssetsAssetIdSearchDocumentPut) | **PUT** /assets/v1/assets/{asset_id}/search_document/ | Update metadata for asset
[**assetsV1AssetsAssetIdSegmentsBulkDelete**](AssetsApi.md#assetsV1AssetsAssetIdSegmentsBulkDelete) | **DELETE** /assets/v1/assets/{asset_id}/segments/bulk/ | Delete segments with either ids or by type
[**assetsV1AssetsAssetIdSegmentsBulkPost**](AssetsApi.md#assetsV1AssetsAssetIdSegmentsBulkPost) | **POST** /assets/v1/assets/{asset_id}/segments/bulk/ | Create multiple new segments for a single asset
[**assetsV1AssetsAssetIdSegmentsGet**](AssetsApi.md#assetsV1AssetsAssetIdSegmentsGet) | **GET** /assets/v1/assets/{asset_id}/segments/ | List of segments
[**assetsV1AssetsAssetIdSegmentsPost**](AssetsApi.md#assetsV1AssetsAssetIdSegmentsPost) | **POST** /assets/v1/assets/{asset_id}/segments/ | Create a new segment
[**assetsV1AssetsAssetIdSegmentsReindexPost**](AssetsApi.md#assetsV1AssetsAssetIdSegmentsReindexPost) | **POST** /assets/v1/assets/{asset_id}/segments/reindex/ | Reindex assets segments
[**assetsV1AssetsAssetIdSegmentsSegmentIdDelete**](AssetsApi.md#assetsV1AssetsAssetIdSegmentsSegmentIdDelete) | **DELETE** /assets/v1/assets/{asset_id}/segments/{segment_id}/ | Delete a particular segment from an asset by id
[**assetsV1AssetsAssetIdSegmentsSegmentIdGet**](AssetsApi.md#assetsV1AssetsAssetIdSegmentsSegmentIdGet) | **GET** /assets/v1/assets/{asset_id}/segments/{segment_id}/ | Get a segment by ID
[**assetsV1AssetsAssetIdSegmentsSegmentIdPatch**](AssetsApi.md#assetsV1AssetsAssetIdSegmentsSegmentIdPatch) | **PATCH** /assets/v1/assets/{asset_id}/segments/{segment_id}/ | Update segment
[**assetsV1AssetsAssetIdSegmentsSegmentIdPut**](AssetsApi.md#assetsV1AssetsAssetIdSegmentsSegmentIdPut) | **PUT** /assets/v1/assets/{asset_id}/segments/{segment_id}/ | Update segment
[**assetsV1AssetsAssetIdSegmentsSegmentIdReindexPost**](AssetsApi.md#assetsV1AssetsAssetIdSegmentsSegmentIdReindexPost) | **POST** /assets/v1/assets/{asset_id}/segments/{segment_id}/reindex/ | Reindex assets segment
[**assetsV1AssetsAssetIdSegmentsSegmentTypeGet**](AssetsApi.md#assetsV1AssetsAssetIdSegmentsSegmentTypeGet) | **GET** /assets/v1/assets/{asset_id}/segments/{segment_type}/ | List of segments
[**assetsV1AssetsAssetIdSegmentsSrtGet**](AssetsApi.md#assetsV1AssetsAssetIdSegmentsSrtGet) | **GET** /assets/v1/assets/{asset_id}/segments/srt/ | List of segments as SRT file
[**assetsV1AssetsAssetIdSegmentsVttGet**](AssetsApi.md#assetsV1AssetsAssetIdSegmentsVttGet) | **GET** /assets/v1/assets/{asset_id}/segments/vtt/ | List of segments as WebVTT file
[**assetsV1AssetsAssetIdUploadsDelete**](AssetsApi.md#assetsV1AssetsAssetIdUploadsDelete) | **DELETE** /assets/v1/assets/{asset_id}/uploads/ | Delete a particular asset by id on failed uplaod
[**assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPost**](AssetsApi.md#assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPost) | **POST** /assets/v1/assets/{asset_id}/versions/from/assets/{source_asset_id}/ | Create a new asset\&#39;s version from another asset
[**assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPost**](AssetsApi.md#assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPost) | **POST** /assets/v1/assets/{asset_id}/versions/from/versions/{source_version_id}/ | Create a new asset\&#39;s version from another version
[**assetsV1AssetsAssetIdVersionsOldDelete**](AssetsApi.md#assetsV1AssetsAssetIdVersionsOldDelete) | **DELETE** /assets/v1/assets/{asset_id}/versions/old/ | Delete all asset versions except the latest one
[**assetsV1AssetsAssetIdVersionsPost**](AssetsApi.md#assetsV1AssetsAssetIdVersionsPost) | **POST** /assets/v1/assets/{asset_id}/versions/ | Add asset version
[**assetsV1AssetsAssetIdVersionsVersionIdDelete**](AssetsApi.md#assetsV1AssetsAssetIdVersionsVersionIdDelete) | **DELETE** /assets/v1/assets/{asset_id}/versions/{version_id}/ | Delete a particular asset version by id
[**assetsV1AssetsAssetIdVersionsVersionIdPatch**](AssetsApi.md#assetsV1AssetsAssetIdVersionsVersionIdPatch) | **PATCH** /assets/v1/assets/{asset_id}/versions/{version_id}/ | Edit asset version
[**assetsV1AssetsAssetIdVersionsVersionIdPromotePut**](AssetsApi.md#assetsV1AssetsAssetIdVersionsVersionIdPromotePut) | **PUT** /assets/v1/assets/{asset_id}/versions/{version_id}/promote/ | Promote a particular asset version to a latest version
[**assetsV1AssetsAssetIdVersionsVersionIdPut**](AssetsApi.md#assetsV1AssetsAssetIdVersionsVersionIdPut) | **PUT** /assets/v1/assets/{asset_id}/versions/{version_id}/ | Edit asset version
[**assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGet**](AssetsApi.md#assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGet) | **GET** /assets/v1/assets/{asset_id}/versions/{version_id}/transcriptions/properties/ | Get a list of transcription properties
[**assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPost**](AssetsApi.md#assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPost) | **POST** /assets/v1/assets/{asset_id}/versions/{version_id}/transcriptions/properties/ | Add a new transcription properties
[**assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPost**](AssetsApi.md#assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPost) | **POST** /assets/v1/assets/{asset_id}/versions/{version_id}/transcriptions/subtitles/ | Add a new transcription properties
[**assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDelete**](AssetsApi.md#assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDelete) | **DELETE** /assets/v1/assets/{asset_id}/versions/{version_id}/transcriptions/{transcription_id}/properties/ | Delete transcription properties by ID
[**assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGet**](AssetsApi.md#assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGet) | **GET** /assets/v1/assets/{asset_id}/versions/{version_id}/transcriptions/{transcription_id}/properties/ | Get a transcription properties by ID
[**assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatch**](AssetsApi.md#assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatch) | **PATCH** /assets/v1/assets/{asset_id}/versions/{version_id}/transcriptions/{transcription_id}/properties/ | Update transcription properties by ID
[**assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPut**](AssetsApi.md#assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPut) | **PUT** /assets/v1/assets/{asset_id}/versions/{version_id}/transcriptions/{transcription_id}/properties/ | Update transcription properties by ID
[**assetsV1AssetsAssetIdViewsPost**](AssetsApi.md#assetsV1AssetsAssetIdViewsPost) | **POST** /assets/v1/assets/{asset_id}/views/ | Mark asset as viewed
[**assetsV1AssetsGet**](AssetsApi.md#assetsV1AssetsGet) | **GET** /assets/v1/assets/ | Get list of assets
[**assetsV1AssetsPatch**](AssetsApi.md#assetsV1AssetsPatch) | **PATCH** /assets/v1/assets/ | Bulk update assets
[**assetsV1AssetsPost**](AssetsApi.md#assetsV1AssetsPost) | **POST** /assets/v1/assets/ | Create a new asset
[**assetsV1AssetsPut**](AssetsApi.md#assetsV1AssetsPut) | **PUT** /assets/v1/assets/ | Bulk update assets
[**assetsV1AssetsReindexPost**](AssetsApi.md#assetsV1AssetsReindexPost) | **POST** /assets/v1/assets/reindex/ | Trigger reindexing of all assets
[**assetsV1AssetsRelationTypesGet**](AssetsApi.md#assetsV1AssetsRelationTypesGet) | **GET** /assets/v1/assets/relation_types/ | Create a new asset relation type
[**assetsV1AssetsRelationTypesPost**](AssetsApi.md#assetsV1AssetsRelationTypesPost) | **POST** /assets/v1/assets/relation_types/ | Create a new asset relation type
[**assetsV1AssetsRelationTypesRelationTypeDelete**](AssetsApi.md#assetsV1AssetsRelationTypesRelationTypeDelete) | **DELETE** /assets/v1/assets/relation_types/{relation_type}/ | Delete an asset relation type
[**assetsV1AssetsRelationTypesRelationTypeGet**](AssetsApi.md#assetsV1AssetsRelationTypesRelationTypeGet) | **GET** /assets/v1/assets/relation_types/{relation_type}/ | Get a relation type
[**assetsV1AssetsRelationTypesRelationTypePatch**](AssetsApi.md#assetsV1AssetsRelationTypesRelationTypePatch) | **PATCH** /assets/v1/assets/relation_types/{relation_type}/ | Update an asset relation type
[**assetsV1AssetsRelationTypesRelationTypePut**](AssetsApi.md#assetsV1AssetsRelationTypesRelationTypePut) | **PUT** /assets/v1/assets/relation_types/{relation_type}/ | Update an asset relation type
[**assetsV1AssetsSegmentsReindexPost**](AssetsApi.md#assetsV1AssetsSegmentsReindexPost) | **POST** /assets/v1/assets/segments/reindex/ | Trigger reindexing of all segments
[**assetsV1CollectionsCollectionIdAncestorsGet**](AssetsApi.md#assetsV1CollectionsCollectionIdAncestorsGet) | **GET** /assets/v1/collections/{collection_id}/ancestors/ | Returns list of ancestors of a collection
[**assetsV1CollectionsCollectionIdContentInfoGet**](AssetsApi.md#assetsV1CollectionsCollectionIdContentInfoGet) | **GET** /assets/v1/collections/{collection_id}/content/info/ | Returns all sub-collections and assets number for a specific collection
[**assetsV1CollectionsCollectionIdContentsGet**](AssetsApi.md#assetsV1CollectionsCollectionIdContentsGet) | **GET** /assets/v1/collections/{collection_id}/contents/ | Returns contents of a collection by id
[**assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDelete**](AssetsApi.md#assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDelete) | **DELETE** /assets/v1/collections/{collection_id}/contents/{object_type}/{object_id}/ | Delete a particular content object in a collection by id
[**assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPut**](AssetsApi.md#assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPut) | **PUT** /assets/v1/collections/{collection_id}/contents/{object_type}/{object_id}/ | Update an order of a particular content object in a collection
[**assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPost**](AssetsApi.md#assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPost) | **POST** /assets/v1/collections/{collection_id}/contents/{object_type}/{object_id}/reindex/ | Reindex collection content
[**assetsV1CollectionsCollectionIdContentsOrderingCustomDelete**](AssetsApi.md#assetsV1CollectionsCollectionIdContentsOrderingCustomDelete) | **DELETE** /assets/v1/collections/{collection_id}/contents/ordering/custom/ | Disable custom ordering for a collection\&#39;s content
[**assetsV1CollectionsCollectionIdContentsOrderingCustomPost**](AssetsApi.md#assetsV1CollectionsCollectionIdContentsOrderingCustomPost) | **POST** /assets/v1/collections/{collection_id}/contents/ordering/custom/ | Enable custom ordering for a collection\&#39;s content
[**assetsV1CollectionsCollectionIdContentsPost**](AssetsApi.md#assetsV1CollectionsCollectionIdContentsPost) | **POST** /assets/v1/collections/{collection_id}/contents/ | Add an object to a collection
[**assetsV1CollectionsCollectionIdDelete**](AssetsApi.md#assetsV1CollectionsCollectionIdDelete) | **DELETE** /assets/v1/collections/{collection_id}/ | Delete a particular collection by id
[**assetsV1CollectionsCollectionIdFullPathGet**](AssetsApi.md#assetsV1CollectionsCollectionIdFullPathGet) | **GET** /assets/v1/collections/{collection_id}/full/path/ | Gets the full path of the collection
[**assetsV1CollectionsCollectionIdGet**](AssetsApi.md#assetsV1CollectionsCollectionIdGet) | **GET** /assets/v1/collections/{collection_id}/ | Returns a particular collection by id
[**assetsV1CollectionsCollectionIdKeyframesPost**](AssetsApi.md#assetsV1CollectionsCollectionIdKeyframesPost) | **POST** /assets/v1/collections/{collection_id}/keyframes/ | Pick up to three asset_ids for collection keyframes
[**assetsV1CollectionsCollectionIdPatch**](AssetsApi.md#assetsV1CollectionsCollectionIdPatch) | **PATCH** /assets/v1/collections/{collection_id}/ | Update collection
[**assetsV1CollectionsCollectionIdPurgeDelete**](AssetsApi.md#assetsV1CollectionsCollectionIdPurgeDelete) | **DELETE** /assets/v1/collections/{collection_id}/purge/ | Purges deleted collection by id immediately
[**assetsV1CollectionsCollectionIdPut**](AssetsApi.md#assetsV1CollectionsCollectionIdPut) | **PUT** /assets/v1/collections/{collection_id}/ | Update collection
[**assetsV1CollectionsCollectionIdReindexContentsPost**](AssetsApi.md#assetsV1CollectionsCollectionIdReindexContentsPost) | **POST** /assets/v1/collections/{collection_id}/reindex/contents/ | Reindex collection and its content
[**assetsV1CollectionsCollectionIdReindexPost**](AssetsApi.md#assetsV1CollectionsCollectionIdReindexPost) | **POST** /assets/v1/collections/{collection_id}/reindex/ | Reindex collection
[**assetsV1CollectionsCollectionIdRestorePut**](AssetsApi.md#assetsV1CollectionsCollectionIdRestorePut) | **PUT** /assets/v1/collections/{collection_id}/restore/ | Restore deleted collection by id
[**assetsV1CollectionsCollectionIdSearchDocumentPut**](AssetsApi.md#assetsV1CollectionsCollectionIdSearchDocumentPut) | **PUT** /assets/v1/collections/{collection_id}/search_document/ | Update metadata for collection
[**assetsV1CollectionsCollectionIdSizeGet**](AssetsApi.md#assetsV1CollectionsCollectionIdSizeGet) | **GET** /assets/v1/collections/{collection_id}/size/ | Returns the size of all the collection\&#39;s assets in bytes
[**assetsV1CollectionsCollectionIdSubcollectionsPost**](AssetsApi.md#assetsV1CollectionsCollectionIdSubcollectionsPost) | **POST** /assets/v1/collections/{collection_id}/subcollections/ | Copy a collection (recursively) in to another collection
[**assetsV1CollectionsGet**](AssetsApi.md#assetsV1CollectionsGet) | **GET** /assets/v1/collections/ | Get list of collections
[**assetsV1CollectionsPost**](AssetsApi.md#assetsV1CollectionsPost) | **POST** /assets/v1/collections/ | Create a new collection
[**assetsV1CollectionsReindexPost**](AssetsApi.md#assetsV1CollectionsReindexPost) | **POST** /assets/v1/collections/reindex/ | Trigger reindexing of all collections
[**assetsV1CustomActionsContextActionIdCallbackPost**](AssetsApi.md#assetsV1CustomActionsContextActionIdCallbackPost) | **POST** /assets/v1/custom_actions/{context}/{action_id}/callback/ | Schedules a celery task that will call custom action
[**assetsV1CustomActionsContextActionIdDelete**](AssetsApi.md#assetsV1CustomActionsContextActionIdDelete) | **DELETE** /assets/v1/custom_actions/{context}/{action_id}/ | Deletes an custom action
[**assetsV1CustomActionsContextActionIdGet**](AssetsApi.md#assetsV1CustomActionsContextActionIdGet) | **GET** /assets/v1/custom_actions/{context}/{action_id}/ | Get an asset custom action
[**assetsV1CustomActionsContextActionIdPatch**](AssetsApi.md#assetsV1CustomActionsContextActionIdPatch) | **PATCH** /assets/v1/custom_actions/{context}/{action_id}/ | Update an custom action
[**assetsV1CustomActionsContextActionIdPut**](AssetsApi.md#assetsV1CustomActionsContextActionIdPut) | **PUT** /assets/v1/custom_actions/{context}/{action_id}/ | Update an custom action
[**assetsV1CustomActionsContextGet**](AssetsApi.md#assetsV1CustomActionsContextGet) | **GET** /assets/v1/custom_actions/{context}/ | Get list of custom actions by context
[**assetsV1CustomActionsContextPost**](AssetsApi.md#assetsV1CustomActionsContextPost) | **POST** /assets/v1/custom_actions/{context}/ | Create an custom action
[**assetsV1CustomActionsGet**](AssetsApi.md#assetsV1CustomActionsGet) | **GET** /assets/v1/custom_actions/ | Get list of custom actions
[**assetsV1CustomActionsSharedContextActionIdCallbackPost**](AssetsApi.md#assetsV1CustomActionsSharedContextActionIdCallbackPost) | **POST** /assets/v1/custom_actions/shared/{context}/{action_id}/callback/ | Schedules a celery task that will call custom action on shares
[**assetsV1DeleteQueueAssetsDelete**](AssetsApi.md#assetsV1DeleteQueueAssetsDelete) | **DELETE** /assets/v1/delete_queue/assets/ | Delete assets from delete queue (Mark assets as active again)
[**assetsV1DeleteQueueAssetsGet**](AssetsApi.md#assetsV1DeleteQueueAssetsGet) | **GET** /assets/v1/delete_queue/assets/ | Get deleted objects
[**assetsV1DeleteQueueAssetsPost**](AssetsApi.md#assetsV1DeleteQueueAssetsPost) | **POST** /assets/v1/delete_queue/assets/ | Add assets to a delete queue (Mark assets as deleted)
[**assetsV1DeleteQueueAssetsPurgeAllPost**](AssetsApi.md#assetsV1DeleteQueueAssetsPurgeAllPost) | **POST** /assets/v1/delete_queue/assets/purge/all/ | Purge all assets from delete queue (Permanently delete)
[**assetsV1DeleteQueueAssetsPurgePost**](AssetsApi.md#assetsV1DeleteQueueAssetsPurgePost) | **POST** /assets/v1/delete_queue/assets/purge/ | Purge assets from delete queue (Permanently delete)
[**assetsV1DeleteQueueAssetsRestoreAllPost**](AssetsApi.md#assetsV1DeleteQueueAssetsRestoreAllPost) | **POST** /assets/v1/delete_queue/assets/restore/all/ | Restore all assets from delete queue
[**assetsV1DeleteQueueBulkPost**](AssetsApi.md#assetsV1DeleteQueueBulkPost) | **POST** /assets/v1/delete_queue/bulk/ | Bulk delete objects
[**assetsV1DeleteQueueCollectionsDelete**](AssetsApi.md#assetsV1DeleteQueueCollectionsDelete) | **DELETE** /assets/v1/delete_queue/collections/ | Delete collections from delete queue (Mark collections as active again)
[**assetsV1DeleteQueueCollectionsGet**](AssetsApi.md#assetsV1DeleteQueueCollectionsGet) | **GET** /assets/v1/delete_queue/collections/ | Get list of collections
[**assetsV1DeleteQueueCollectionsPost**](AssetsApi.md#assetsV1DeleteQueueCollectionsPost) | **POST** /assets/v1/delete_queue/collections/ | Add collections to a delete queue (Mark collections as deleted)
[**assetsV1DeleteQueueCollectionsPurgeAllPost**](AssetsApi.md#assetsV1DeleteQueueCollectionsPurgeAllPost) | **POST** /assets/v1/delete_queue/collections/purge/all/ | Purge all collections from delete queue (Permanently delete)
[**assetsV1DeleteQueueCollectionsPurgePost**](AssetsApi.md#assetsV1DeleteQueueCollectionsPurgePost) | **POST** /assets/v1/delete_queue/collections/purge/ | Purge collections from delete queue (Permanently delete)
[**assetsV1DeleteQueueCollectionsRestoreAllPost**](AssetsApi.md#assetsV1DeleteQueueCollectionsRestoreAllPost) | **POST** /assets/v1/delete_queue/collections/restore/all/ | Restore all collections from delete queue
[**assetsV1DeleteQueuePurgeAllPost**](AssetsApi.md#assetsV1DeleteQueuePurgeAllPost) | **POST** /assets/v1/delete_queue/purge/all/ | Purge all assets and collections from delete queue (Permanently delete)
[**assetsV1FavoritesAllDelete**](AssetsApi.md#assetsV1FavoritesAllDelete) | **DELETE** /assets/v1/favorites/all/ | Removes all assets/collections from the list of favourites
[**assetsV1FavoritesDelete**](AssetsApi.md#assetsV1FavoritesDelete) | **DELETE** /assets/v1/favorites/ | Deletes objects items from a list of favorites
[**assetsV1FavoritesGet**](AssetsApi.md#assetsV1FavoritesGet) | **GET** /assets/v1/favorites/ | Get list of favorite objects
[**assetsV1FavoritesPost**](AssetsApi.md#assetsV1FavoritesPost) | **POST** /assets/v1/favorites/ | Adds multiple objects to a list of favorites
[**assetsV1FavouritesAllDelete**](AssetsApi.md#assetsV1FavouritesAllDelete) | **DELETE** /assets/v1/favourites/all/ | Removes all assets/collections from the list of favourites
[**assetsV1ObjectTypeObjectIdApprovalsDelete**](AssetsApi.md#assetsV1ObjectTypeObjectIdApprovalsDelete) | **DELETE** /assets/v1/{object_type}/{object_id}/approvals/ | Deletes an objects approval status
[**assetsV1ObjectTypeObjectIdApprovalsExternalEmailDelete**](AssetsApi.md#assetsV1ObjectTypeObjectIdApprovalsExternalEmailDelete) | **DELETE** /assets/v1/{object_type}/{object_id}/approvals/external/{email}/ | Deletes an objects approval status by user_id
[**assetsV1ObjectTypeObjectIdApprovalsGet**](AssetsApi.md#assetsV1ObjectTypeObjectIdApprovalsGet) | **GET** /assets/v1/{object_type}/{object_id}/approvals/ | Returns an objects approval request
[**assetsV1ObjectTypeObjectIdApprovalsPut**](AssetsApi.md#assetsV1ObjectTypeObjectIdApprovalsPut) | **PUT** /assets/v1/{object_type}/{object_id}/approvals/ | Returns an objects approval status
[**assetsV1ObjectTypeObjectIdApprovalsRequestDelete**](AssetsApi.md#assetsV1ObjectTypeObjectIdApprovalsRequestDelete) | **DELETE** /assets/v1/{object_type}/{object_id}/approvals/request/ | Deletes an objects approval request
[**assetsV1ObjectTypeObjectIdApprovalsRequestGet**](AssetsApi.md#assetsV1ObjectTypeObjectIdApprovalsRequestGet) | **GET** /assets/v1/{object_type}/{object_id}/approvals/request/ | Returns an objects approval request
[**assetsV1ObjectTypeObjectIdApprovalsRequestPatch**](AssetsApi.md#assetsV1ObjectTypeObjectIdApprovalsRequestPatch) | **PATCH** /assets/v1/{object_type}/{object_id}/approvals/request/ | Edits an approval request
[**assetsV1ObjectTypeObjectIdApprovalsRequestPost**](AssetsApi.md#assetsV1ObjectTypeObjectIdApprovalsRequestPost) | **POST** /assets/v1/{object_type}/{object_id}/approvals/request/ | Creates an objects approval request
[**assetsV1ObjectTypeObjectIdApprovalsRequestPut**](AssetsApi.md#assetsV1ObjectTypeObjectIdApprovalsRequestPut) | **PUT** /assets/v1/{object_type}/{object_id}/approvals/request/ | Edits an approval request
[**assetsV1ObjectTypeObjectIdApprovalsUserUserIdDelete**](AssetsApi.md#assetsV1ObjectTypeObjectIdApprovalsUserUserIdDelete) | **DELETE** /assets/v1/{object_type}/{object_id}/approvals/user/{user_id}/ | Deletes an objects approval status by user_id
[**assetsV1ObjectTypeObjectIdSharesGet**](AssetsApi.md#assetsV1ObjectTypeObjectIdSharesGet) | **GET** /assets/v1/{object_type}/{object_id}/shares/ | Get list of shares
[**assetsV1ObjectTypeObjectIdSharesPost**](AssetsApi.md#assetsV1ObjectTypeObjectIdSharesPost) | **POST** /assets/v1/{object_type}/{object_id}/shares/ | Create a new share.
[**assetsV1ObjectTypeObjectIdSharesShareIdDelete**](AssetsApi.md#assetsV1ObjectTypeObjectIdSharesShareIdDelete) | **DELETE** /assets/v1/{object_type}/{object_id}/shares/{share_id}/ | Delete a particular share by id
[**assetsV1ObjectTypeObjectIdSharesShareIdGet**](AssetsApi.md#assetsV1ObjectTypeObjectIdSharesShareIdGet) | **GET** /assets/v1/{object_type}/{object_id}/shares/{share_id}/ | Returns a particular share by id
[**assetsV1ObjectTypeObjectIdSharesShareIdPut**](AssetsApi.md#assetsV1ObjectTypeObjectIdSharesShareIdPut) | **PUT** /assets/v1/{object_type}/{object_id}/shares/{share_id}/ | Update share
[**assetsV1ObjectTypeObjectIdSharesShareIdUsersGet**](AssetsApi.md#assetsV1ObjectTypeObjectIdSharesShareIdUsersGet) | **GET** /assets/v1/{object_type}/{object_id}/shares/{share_id}/users/ | Get list of share users
[**assetsV1ObjectTypeObjectIdSharesShareIdUsersPost**](AssetsApi.md#assetsV1ObjectTypeObjectIdSharesShareIdUsersPost) | **POST** /assets/v1/{object_type}/{object_id}/shares/{share_id}/users/ | Add a new share_user to a share
[**assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDelete**](AssetsApi.md#assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDelete) | **DELETE** /assets/v1/{object_type}/{object_id}/shares/{share_id}/users/{share_user_id}/ | Delete a particular share_user user by id
[**assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGet**](AssetsApi.md#assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGet) | **GET** /assets/v1/{object_type}/{object_id}/shares/{share_id}/users/{share_user_id}/ | Returns a particular share user by id
[**assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatch**](AssetsApi.md#assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatch) | **PATCH** /assets/v1/{object_type}/{object_id}/shares/{share_id}/users/{share_user_id}/ | Update share user
[**assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPut**](AssetsApi.md#assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPut) | **PUT** /assets/v1/{object_type}/{object_id}/shares/{share_id}/users/{share_user_id}/ | Update share user
[**assetsV1ObjectTypeObjectIdSharesUrlPost**](AssetsApi.md#assetsV1ObjectTypeObjectIdSharesUrlPost) | **POST** /assets/v1/{object_type}/{object_id}/shares/url/ | Generates a URL for the shared object
[**assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGet**](AssetsApi.md#assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGet) | **GET** /assets/v1/{object_type}/{object_id}/versions/{version_id}/approvals/ | Returns an objects approval request by version
[**assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGet**](AssetsApi.md#assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGet) | **GET** /assets/v1/{object_type}/{object_id}/versions/{version_id}/approvals/request/ | Returns an objects approval request by version
[**assetsV1SegmentsReindexPost**](AssetsApi.md#assetsV1SegmentsReindexPost) | **POST** /assets/v1/segments/reindex/ | Trigger reindexing of specific segment ids
[**assetsV1ShareObjectTypePost**](AssetsApi.md#assetsV1ShareObjectTypePost) | **POST** /assets/v1/share/{object_type}/ | Create a new share of multiple objects (currently only assets are supported)
[**assetsV1SharesAuthLoginPost**](AssetsApi.md#assetsV1SharesAuthLoginPost) | **POST** /assets/v1/shares/auth/login/ | Login for share
[**assetsV1SharesAuthTokenGet**](AssetsApi.md#assetsV1SharesAuthTokenGet) | **GET** /assets/v1/shares/auth/token/ | Check if a token is valid
[**assetsV1SharesAuthTokenPut**](AssetsApi.md#assetsV1SharesAuthTokenPut) | **PUT** /assets/v1/shares/auth/token/ | Refreshes a token for share


# **assetsV1ApprovalsBulkPost**
> void assetsV1ApprovalsBulkPost(bulkSetApprovalSchema)

 Required roles:  - can_write_approval_status_in_bulk 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ApprovalsBulkPostRequest = {
  // string
  authToken: "Auth-Token_example",
  // string
  appID: "App-ID_example",
  // BulkSetApprovalSchema | body
  bulkSetApprovalSchema: {
    objectIds: [
      "objectIds_example",
    ],
    objectType: "assets",
    status: "APPROVED",
  },
};

apiInstance.assetsV1ApprovalsBulkPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkSetApprovalSchema** | **BulkSetApprovalSchema**| body |
 **authToken** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ApprovalsBulkRemovePost**
> void assetsV1ApprovalsBulkRemovePost(bulkRemoveApprovalSchema)

 Required roles:  - can_write_approval_status_in_bulk 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ApprovalsBulkRemovePostRequest = {
  // string
  authToken: "Auth-Token_example",
  // string
  appID: "App-ID_example",
  // BulkRemoveApprovalSchema | body
  bulkRemoveApprovalSchema: {
    objectIds: [
      "objectIds_example",
    ],
    objectType: "assets",
  },
};

apiInstance.assetsV1ApprovalsBulkRemovePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkRemoveApprovalSchema** | **BulkRemoveApprovalSchema**| body |
 **authToken** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdDelete**
> void assetsV1AssetsAssetIdDelete()

 Required roles:  - can_delete_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
};

apiInstance.assetsV1AssetsAssetIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Forbidden |  -  |
**404** | Asset does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdGet**
> AssetSchema assetsV1AssetsAssetIdGet()

 Required roles:  - can_read_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // boolean | include collection membership (optional)
  includeCollections: false,
  // boolean | include info about the users who have interacted with this asset (optional)
  includeUsers: false,
};

apiInstance.assetsV1AssetsAssetIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **includeCollections** | [**boolean**] | include collection membership | (optional) defaults to false
 **includeUsers** | [**boolean**] | include info about the users who have interacted with this asset | (optional) defaults to false


### Return type

**AssetSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Asset does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdHistoryGet**
> AssetHistoryEntitiesSchema assetsV1AssetsAssetIdHistoryGet()

 Required roles:  - can_read_assets_history 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdHistoryGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // number | Which page number to fetch (optional)
  page: 1,
  // string | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc (optional)
  sort: "sort_example",
  // string | A comma separated list of fieldnames with order For example - first_name,eq,Vlad;last_name,eq,Gudkov (optional)
  filter: "filter_example",
};

apiInstance.assetsV1AssetsAssetIdHistoryGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to undefined
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc | (optional) defaults to undefined
 **filter** | [**string**] | A comma separated list of fieldnames with order For example - first_name,eq,Vlad;last_name,eq,Gudkov | (optional) defaults to undefined


### Return type

**AssetHistoryEntitiesSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdHistoryHistoryEntityIdDelete**
> AssetHistorySchema assetsV1AssetsAssetIdHistoryHistoryEntityIdDelete()

 Required roles:  - can_delete_assets_history 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdHistoryHistoryEntityIdDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  historyEntityId: "history_entity_id_example",
};

apiInstance.assetsV1AssetsAssetIdHistoryHistoryEntityIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **historyEntityId** | [**string**] |  | defaults to undefined


### Return type

**AssetHistorySchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created asset history entity |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdHistoryHistoryEntityIdGet**
> AssetHistorySchema assetsV1AssetsAssetIdHistoryHistoryEntityIdGet()

 Required roles:  - can_read_assets_history 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdHistoryHistoryEntityIdGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  historyEntityId: "history_entity_id_example",
};

apiInstance.assetsV1AssetsAssetIdHistoryHistoryEntityIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **historyEntityId** | [**string**] |  | defaults to undefined


### Return type

**AssetHistorySchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created asset history entity |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPost**
> void assetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPost()

 Required roles:  - can_reindex_assets_history 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  historyEntityId: "history_entity_id_example",
};

apiInstance.assetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **historyEntityId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ID and status of the job |  -  |
**401** | Token is invalid |  -  |
**404** | Asset history entity does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdHistoryPost**
> AssetHistorySchema assetsV1AssetsAssetIdHistoryPost(assetHistorySchema)

 Required roles:  - can_write_assets_history 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdHistoryPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // AssetHistorySchema | body
  assetHistorySchema: {
    jobId: "jobId_example",
    operationDescription: "operationDescription_example",
    operationType: "EXPORT",
    shareId: "shareId_example",
    shareUserId: "shareUserId_example",
  },
};

apiInstance.assetsV1AssetsAssetIdHistoryPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetHistorySchema** | **AssetHistorySchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined


### Return type

**AssetHistorySchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created asset history entity |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Asset Id doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdPatch**
> AssetSchema assetsV1AssetsAssetIdPatch(assetSchema)

 Required roles:  - can_write_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdPatchRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // AssetSchema | body
  assetSchema: {
    analyzeStatus: "N/A",
    archiveStatus: "NOT_ARCHIVED",
    category: "category_example",
    customKeyframe: "customKeyframe_example",
    customPoster: "customPoster_example",
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    dateDeleted: new Date('1970-01-01T00:00:00.00Z'),
    deletedByUserInfo: {
    },
    externalId: "externalId_example",
    externalLink: "externalLink_example",
    isBlocked: true,
    isOnline: true,
    originalAssetId: "originalAssetId_example",
    originalSegmentId: "originalSegmentId_example",
    originalVersionId: "originalVersionId_example",
    siteName: "siteName_example",
    status: "ACTIVE",
    timeEndMilliseconds: -9223372036854776000,
    timeStartMilliseconds: -9223372036854776000,
    title: "title_example",
    type: "ASSET",
    warning: "warning_example",
  },
};

apiInstance.assetsV1AssetsAssetIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetSchema** | **AssetSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined


### Return type

**AssetSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Asset does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdPurgeDelete**
> void assetsV1AssetsAssetIdPurgeDelete()

 Required roles:  - can_purge_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdPurgeDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
};

apiInstance.assetsV1AssetsAssetIdPurgeDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Asset does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdPut**
> AssetSchema assetsV1AssetsAssetIdPut(assetSchema)

 Required roles:  - can_write_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // AssetSchema | body
  assetSchema: {
    analyzeStatus: "N/A",
    archiveStatus: "NOT_ARCHIVED",
    category: "category_example",
    customKeyframe: "customKeyframe_example",
    customPoster: "customPoster_example",
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    dateDeleted: new Date('1970-01-01T00:00:00.00Z'),
    deletedByUserInfo: {
    },
    externalId: "externalId_example",
    externalLink: "externalLink_example",
    isBlocked: true,
    isOnline: true,
    originalAssetId: "originalAssetId_example",
    originalSegmentId: "originalSegmentId_example",
    originalVersionId: "originalVersionId_example",
    siteName: "siteName_example",
    status: "ACTIVE",
    timeEndMilliseconds: -9223372036854776000,
    timeStartMilliseconds: -9223372036854776000,
    title: "title_example",
    type: "ASSET",
    warning: "warning_example",
  },
};

apiInstance.assetsV1AssetsAssetIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetSchema** | **AssetSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined


### Return type

**AssetSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Asset does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdReindexPost**
> void assetsV1AssetsAssetIdReindexPost(reindexAssetSchema)

 Required roles:  - can_reindex_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdReindexPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // ReindexAssetSchema | body
  reindexAssetSchema: {
    realms: [
      "realms_example",
    ],
    syncToAnotherDc: true,
  },
};

apiInstance.assetsV1AssetsAssetIdReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reindexAssetSchema** | **ReindexAssetSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ID and status of the job |  -  |
**401** | Token is invalid |  -  |
**404** | Asset does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdRelationsGet**
> AssetsSchema assetsV1AssetsAssetIdRelationsGet()

 Required roles:  - can_read_asset_relations 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdRelationsGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // boolean | Also show assets from recycle bin in relations (optional)
  includeDeleted: false,
  // number | The number of items for each page (optional)
  perPage: 1,
  // number | Which page number to fetch (optional)
  page: 1,
  // string | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc (optional)
  sort: "sort_example",
};

apiInstance.assetsV1AssetsAssetIdRelationsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **includeDeleted** | [**boolean**] | Also show assets from recycle bin in relations | (optional) defaults to false
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to undefined
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc | (optional) defaults to undefined


### Return type

**AssetsSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of assets |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdRelationsPost**
> RelationSchema assetsV1AssetsAssetIdRelationsPost(relationSchema)

 Required roles:  - can_create_asset_relations 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdRelationsPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // RelationSchema | body
  relationSchema: {
    assetId: "assetId_example",
    description: "description_example",
    relatedToAssetId: "relatedToAssetId_example",
    relationType: "relationType_example",
  },
};

apiInstance.assetsV1AssetsAssetIdRelationsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationSchema** | **RelationSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined


### Return type

**RelationSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an existing relation |  -  |
**201** | Returns a created relation |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdRelationsRelationTypeGet**
> AssetsSchema assetsV1AssetsAssetIdRelationsRelationTypeGet()

 Required roles:  - can_read_asset_relations 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdRelationsRelationTypeGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  relationType: "relation_type_example",
  // boolean | Also show assets from recycle bin in relations (optional)
  includeDeleted: false,
};

apiInstance.assetsV1AssetsAssetIdRelationsRelationTypeGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **relationType** | [**string**] |  | defaults to undefined
 **includeDeleted** | [**boolean**] | Also show assets from recycle bin in relations | (optional) defaults to false


### Return type

**AssetsSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of assets |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDelete**
> void assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDelete()

 Required roles:  - can_delete_asset_relations 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  relationType: "relation_type_example",
  // string
  relatedToAssetId: "related_to_asset_id_example",
};

apiInstance.assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **relationType** | [**string**] |  | defaults to undefined
 **relatedToAssetId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPost**
> RelationSchema assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPost(relationSchema)

 Required roles:  - can_create_asset_relations 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  relationType: "relation_type_example",
  // string
  relatedToAssetId: "related_to_asset_id_example",
  // RelationSchema | body
  relationSchema: {
    assetId: "assetId_example",
    description: "description_example",
    relatedToAssetId: "relatedToAssetId_example",
    relationType: "relationType_example",
  },
};

apiInstance.assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationSchema** | **RelationSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **relationType** | [**string**] |  | defaults to undefined
 **relatedToAssetId** | [**string**] |  | defaults to undefined


### Return type

**RelationSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an existing relation |  -  |
**201** | Returns a created relation |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePost**
> RelationSchema assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePost()

 Required roles:  - can_create_asset_relations 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  relationType: "relation_type_example",
  // string
  relatedToAssetId: "related_to_asset_id_example",
};

apiInstance.assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **relationType** | [**string**] |  | defaults to undefined
 **relatedToAssetId** | [**string**] |  | defaults to undefined


### Return type

**RelationSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdRestorePut**
> void assetsV1AssetsAssetIdRestorePut()

 Required roles:  - can_write_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdRestorePutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
};

apiInstance.assetsV1AssetsAssetIdRestorePut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Asset does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdSearchDocumentPut**
> void assetsV1AssetsAssetIdSearchDocumentPut(assetElasticSchema)

 Required roles:  - can_reindex_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdSearchDocumentPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // AssetElasticSchema | body
  assetElasticSchema: {
    analyzeStatus: "N/A",
    archiveStatus: "NOT_ARCHIVED",
    category: "category_example",
    customKeyframe: "customKeyframe_example",
    customPoster: "customPoster_example",
    deletedByUserInfo: {
    },
    externalId: "externalId_example",
    externalLink: "externalLink_example",
    isBlocked: true,
    isOnline: true,
    originalAssetId: "originalAssetId_example",
    originalSegmentId: "originalSegmentId_example",
    originalVersionId: "originalVersionId_example",
    siteName: "siteName_example",
    status: "ACTIVE",
    timeEndMilliseconds: -9223372036854776000,
    timeStartMilliseconds: -9223372036854776000,
    title: "title_example",
    type: "ASSET",
    warning: "warning_example",
  },
};

apiInstance.assetsV1AssetsAssetIdSearchDocumentPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetElasticSchema** | **AssetElasticSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Asset metadata updated |  -  |
**400** | No metadata supplied |  -  |
**401** | Token is invalid |  -  |
**404** | Asset does not exist in search index |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdSegmentsBulkDelete**
> void assetsV1AssetsAssetIdSegmentsBulkDelete(deleteSegmentsSchema)

 Required roles:  - can_delete_segments 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdSegmentsBulkDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // DeleteSegmentsSchema | body
  deleteSegmentsSchema: {
    segmentIds: [
      "segmentIds_example",
    ],
    segmentType: "MARKER",
  },
  // boolean | If false, delete segments asynchronously (optional)
  immediately: true,
  // boolean | If false, reindex (optional)
  ignoreReindexing: true,
};

apiInstance.assetsV1AssetsAssetIdSegmentsBulkDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteSegmentsSchema** | **DeleteSegmentsSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **immediately** | [**boolean**] | If false, delete segments asynchronously | (optional) defaults to true
 **ignoreReindexing** | [**boolean**] | If false, reindex | (optional) defaults to true


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Segment ids or segment type not provided correctly |  -  |
**401** | Token is invalid |  -  |
**404** | No segments found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdSegmentsBulkPost**
> void assetsV1AssetsAssetIdSegmentsBulkPost(bulkCreateSegmentsSchema)

 Required roles:  - can_create_segments 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdSegmentsBulkPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // BulkCreateSegmentsSchema | body
  bulkCreateSegmentsSchema: {
    objects: [
      {
        drawing: {
          primitives: [
            {
              color: "color_example",
              points: [
                {
                  x: -2147483648,
                  y: -2147483648,
                },
              ],
              text: "text_example",
              type: "LINE",
            },
          ],
        },
        externalId: "externalId_example",
        keyframeId: "keyframeId_example",
        metadata: {},
        metadataViewId: "metadataViewId_example",
        parentId: "parentId_example",
        path: "path_example",
        segmentChecked: true,
        segmentColor: "segmentColor_example",
        segmentText: "segmentText_example",
        segmentTrack: "segmentTrack_example",
        segmentType: "MARKER",
        shareUserEmail: "shareUserEmail_example",
        status: "ACTIVE",
        timeEndMilliseconds: -9223372036854776000,
        timeStartMilliseconds: -9223372036854776000,
        topLevel: true,
        transcription: {
          speaker: -2147483648,
          words: [
            {
              endMs: -9223372036854776000,
              score: 3.14,
              startMs: -9223372036854776000,
              value: "value_example",
            },
          ],
        },
        transcriptionId: "transcriptionId_example",
        userId: "userId_example",
        userInfo: {
        },
        versionId: "versionId_example",
      },
    ],
  },
};

apiInstance.assetsV1AssetsAssetIdSegmentsBulkPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkCreateSegmentsSchema** | **BulkCreateSegmentsSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns ID and status of a job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdSegmentsGet**
> SegmentsSchema assetsV1AssetsAssetIdSegmentsGet()

 Required roles:  - can_read_segments 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdSegmentsGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string | Sort on field (Comma separated) (optional)
  sort: "sort_example",
  // string | Only include these segments (Comma separated) (optional)
  ids: "ids_example",
  // string | Search using query (optional)
  query: "query_example",
  // string | Only include fields (Comma separated) (optional)
  includes: "includes_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // number | Which page number to fetch (optional)
  page: 1,
  // boolean | If true passed then uses scroll pagination instead of default one (optional)
  scroll: true,
  // string | In order to get next batch of results using scroll pagination the scroll_id is required  (optional)
  scrollId: "scroll_id_example",
  // string | Filter segments by transcription_id (optional)
  transcriptionId: "transcription_id_example",
  // string | Filter segments by version_id (optional)
  versionId: "version_id_example",
  // string | Filter segments by segment_type (optional)
  segmentType: "segment_type_example",
  // string | Filter segments by segment_color (optional)
  segmentColor: "segment_color_example",
  // number | Filter segments by time_start_milliseconds (optional)
  timeStartMilliseconds: 1,
  // number | Filter segments by time_end_milliseconds (optional)
  timeEndMilliseconds: 1,
  // number | Get segments with start time greater than or equal to time_start_milliseconds__gte  (optional)
  timeStartMillisecondsGte: 1,
  // number | Get segments with end time less than or equal to time_end_milliseconds__lte (optional)
  timeEndMillisecondsLte: 1,
  // string | Filter segments by status (optional)
  status: "status_example",
  // boolean | Include segment\'s authors info (optional)
  includeUsers: true,
};

apiInstance.assetsV1AssetsAssetIdSegmentsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **sort** | [**string**] | Sort on field (Comma separated) | (optional) defaults to undefined
 **ids** | [**string**] | Only include these segments (Comma separated) | (optional) defaults to undefined
 **query** | [**string**] | Search using query | (optional) defaults to undefined
 **includes** | [**string**] | Only include fields (Comma separated) | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to undefined
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1
 **scroll** | [**boolean**] | If true passed then uses scroll pagination instead of default one | (optional) defaults to undefined
 **scrollId** | [**string**] | In order to get next batch of results using scroll pagination the scroll_id is required  | (optional) defaults to undefined
 **transcriptionId** | [**string**] | Filter segments by transcription_id | (optional) defaults to undefined
 **versionId** | [**string**] | Filter segments by version_id | (optional) defaults to undefined
 **segmentType** | [**string**] | Filter segments by segment_type | (optional) defaults to undefined
 **segmentColor** | [**string**] | Filter segments by segment_color | (optional) defaults to undefined
 **timeStartMilliseconds** | [**number**] | Filter segments by time_start_milliseconds | (optional) defaults to undefined
 **timeEndMilliseconds** | [**number**] | Filter segments by time_end_milliseconds | (optional) defaults to undefined
 **timeStartMillisecondsGte** | [**number**] | Get segments with start time greater than or equal to time_start_milliseconds__gte  | (optional) defaults to undefined
 **timeEndMillisecondsLte** | [**number**] | Get segments with end time less than or equal to time_end_milliseconds__lte | (optional) defaults to undefined
 **status** | [**string**] | Filter segments by status | (optional) defaults to undefined
 **includeUsers** | [**boolean**] | Include segment\&#39;s authors info | (optional) defaults to undefined


### Return type

**SegmentsSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of segments |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Page number does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdSegmentsPost**
> SegmentSchema assetsV1AssetsAssetIdSegmentsPost(segmentSchema)

 Required roles:  - can_create_segments 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdSegmentsPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // SegmentSchema | body
  segmentSchema: {
    drawing: {
      primitives: [
        {
          color: "color_example",
          points: [
            {
              x: -2147483648,
              y: -2147483648,
            },
          ],
          text: "text_example",
          type: "LINE",
        },
      ],
    },
    externalId: "externalId_example",
    keyframeId: "keyframeId_example",
    metadata: {},
    metadataViewId: "metadataViewId_example",
    parentId: "parentId_example",
    path: "path_example",
    segmentChecked: true,
    segmentColor: "segmentColor_example",
    segmentText: "segmentText_example",
    segmentTrack: "segmentTrack_example",
    segmentType: "MARKER",
    shareUserEmail: "shareUserEmail_example",
    status: "ACTIVE",
    timeEndMilliseconds: -9223372036854776000,
    timeStartMilliseconds: -9223372036854776000,
    topLevel: true,
    transcription: {
      speaker: -2147483648,
      words: [
        {
          endMs: -9223372036854776000,
          score: 3.14,
          startMs: -9223372036854776000,
          value: "value_example",
        },
      ],
    },
    transcriptionId: "transcriptionId_example",
    userId: "userId_example",
    userInfo: {
    },
    versionId: "versionId_example",
  },
  // string | This header is used for shares by URL to identify user. Only valid emails are allowed. (optional)
  shareUserEmail: "Share-User-Email_example",
};

apiInstance.assetsV1AssetsAssetIdSegmentsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **segmentSchema** | **SegmentSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **shareUserEmail** | [**string**] | This header is used for shares by URL to identify user. Only valid emails are allowed. | (optional) defaults to undefined


### Return type

**SegmentSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created segment |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdSegmentsReindexPost**
> void assetsV1AssetsAssetIdSegmentsReindexPost(reindexSegmentSchema)

 Required roles:  - can_reindex_segments 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdSegmentsReindexPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // ReindexSegmentSchema | body
  reindexSegmentSchema: {
    ignoreComments: true,
    realms: [
      "realms_example",
    ],
    syncToAnotherDc: true,
  },
};

apiInstance.assetsV1AssetsAssetIdSegmentsReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reindexSegmentSchema** | **ReindexSegmentSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ID and status of the job |  -  |
**401** | Token is invalid |  -  |
**404** | Asset does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdSegmentsSegmentIdDelete**
> void assetsV1AssetsAssetIdSegmentsSegmentIdDelete()

 Required roles:  - can_delete_segments 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdSegmentsSegmentIdDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  segmentId: "segment_id_example",
  // boolean (optional)
  softDelete: true,
};

apiInstance.assetsV1AssetsAssetIdSegmentsSegmentIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **segmentId** | [**string**] |  | defaults to undefined
 **softDelete** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**401** | Token is invalid |  -  |
**404** | Segment not found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdSegmentsSegmentIdGet**
> SegmentSchema assetsV1AssetsAssetIdSegmentsSegmentIdGet()

 Required roles:  - can_read_segments 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdSegmentsSegmentIdGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  segmentId: "segment_id_example",
  // boolean | If true passed then uses scroll pagination instead of default one (optional)
  scroll: true,
  // string | In order to get next batch of results using scroll pagination the scroll_id is required  (optional)
  scrollId: "scroll_id_example",
};

apiInstance.assetsV1AssetsAssetIdSegmentsSegmentIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **segmentId** | [**string**] |  | defaults to undefined
 **scroll** | [**boolean**] | If true passed then uses scroll pagination instead of default one | (optional) defaults to undefined
 **scrollId** | [**string**] | In order to get next batch of results using scroll pagination the scroll_id is required  | (optional) defaults to undefined


### Return type

**SegmentSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a segment |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Segment does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdSegmentsSegmentIdPatch**
> SegmentSchema assetsV1AssetsAssetIdSegmentsSegmentIdPatch(editSegmentSchema)

 Required roles:  - can_write_segments 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdSegmentsSegmentIdPatchRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  segmentId: "segment_id_example",
  // EditSegmentSchema | body
  editSegmentSchema: {
    drawing: {
      primitives: [
        {
          color: "color_example",
          points: [
            {
              x: -2147483648,
              y: -2147483648,
            },
          ],
          text: "text_example",
          type: "LINE",
        },
      ],
    },
    externalId: "externalId_example",
    keyframeId: "keyframeId_example",
    metadata: {},
    metadataViewId: "metadataViewId_example",
    segmentChecked: true,
    segmentColor: "segmentColor_example",
    segmentText: "segmentText_example",
    segmentTrack: "segmentTrack_example",
    segmentType: "MARKER",
    shareUserEmail: "shareUserEmail_example",
    status: "ACTIVE",
    timeEndMilliseconds: -9223372036854776000,
    timeStartMilliseconds: -9223372036854776000,
    transcription: {
      speaker: -2147483648,
      words: [
        {
          endMs: -9223372036854776000,
          score: 3.14,
          startMs: -9223372036854776000,
          value: "value_example",
        },
      ],
    },
    transcriptionId: "transcriptionId_example",
    userInfo: {
    },
    versionId: "versionId_example",
  },
};

apiInstance.assetsV1AssetsAssetIdSegmentsSegmentIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editSegmentSchema** | **EditSegmentSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **segmentId** | [**string**] |  | defaults to undefined


### Return type

**SegmentSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated segment |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Segment does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdSegmentsSegmentIdPut**
> SegmentSchema assetsV1AssetsAssetIdSegmentsSegmentIdPut(editSegmentSchema)

 Required roles:  - can_write_segments 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdSegmentsSegmentIdPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  segmentId: "segment_id_example",
  // EditSegmentSchema | body
  editSegmentSchema: {
    drawing: {
      primitives: [
        {
          color: "color_example",
          points: [
            {
              x: -2147483648,
              y: -2147483648,
            },
          ],
          text: "text_example",
          type: "LINE",
        },
      ],
    },
    externalId: "externalId_example",
    keyframeId: "keyframeId_example",
    metadata: {},
    metadataViewId: "metadataViewId_example",
    segmentChecked: true,
    segmentColor: "segmentColor_example",
    segmentText: "segmentText_example",
    segmentTrack: "segmentTrack_example",
    segmentType: "MARKER",
    shareUserEmail: "shareUserEmail_example",
    status: "ACTIVE",
    timeEndMilliseconds: -9223372036854776000,
    timeStartMilliseconds: -9223372036854776000,
    transcription: {
      speaker: -2147483648,
      words: [
        {
          endMs: -9223372036854776000,
          score: 3.14,
          startMs: -9223372036854776000,
          value: "value_example",
        },
      ],
    },
    transcriptionId: "transcriptionId_example",
    userInfo: {
    },
    versionId: "versionId_example",
  },
};

apiInstance.assetsV1AssetsAssetIdSegmentsSegmentIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editSegmentSchema** | **EditSegmentSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **segmentId** | [**string**] |  | defaults to undefined


### Return type

**SegmentSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated segment |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Segment does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdSegmentsSegmentIdReindexPost**
> void assetsV1AssetsAssetIdSegmentsSegmentIdReindexPost(reindexSegmentSchema)

 Required roles:  - can_reindex_segments 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdSegmentsSegmentIdReindexPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  segmentId: "segment_id_example",
  // ReindexSegmentSchema | body
  reindexSegmentSchema: {
    ignoreComments: true,
    realms: [
      "realms_example",
    ],
    syncToAnotherDc: true,
  },
};

apiInstance.assetsV1AssetsAssetIdSegmentsSegmentIdReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reindexSegmentSchema** | **ReindexSegmentSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **segmentId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ID and status of the job |  -  |
**401** | Token is invalid |  -  |
**404** | Asset segment does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdSegmentsSegmentTypeGet**
> SegmentsSchema assetsV1AssetsAssetIdSegmentsSegmentTypeGet()

 Required roles:  - can_read_segments 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdSegmentsSegmentTypeGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  segmentType: "segment_type_example",
  // string | Sort on field (Comma separated) (optional)
  sort: "sort_example",
  // string | Only include these segments (Comma separated) (optional)
  ids: "ids_example",
  // string | Search using query (optional)
  query: "query_example",
  // string | Only include fields (Comma separated) (optional)
  includes: "includes_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // number | Which page number to fetch (optional)
  page: 1,
  // boolean | If true passed then uses scroll pagination instead of default one (optional)
  scroll: true,
  // string | In order to get next batch of results using scroll pagination the scroll_id is required  (optional)
  scrollId: "scroll_id_example",
  // number | Filter segments by time_start_milliseconds (optional)
  timeStartMilliseconds: 1,
  // number | Filter segments by time_end_milliseconds (optional)
  timeEndMilliseconds: 1,
  // number | Get segments with start time greater than or equal to time_start_milliseconds__gte  (optional)
  timeStartMillisecondsGte: 1,
  // number | Get segments with end time less than or equal to time_end_milliseconds__lte (optional)
  timeEndMillisecondsLte: 1,
};

apiInstance.assetsV1AssetsAssetIdSegmentsSegmentTypeGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **segmentType** | [**string**] |  | defaults to undefined
 **sort** | [**string**] | Sort on field (Comma separated) | (optional) defaults to undefined
 **ids** | [**string**] | Only include these segments (Comma separated) | (optional) defaults to undefined
 **query** | [**string**] | Search using query | (optional) defaults to undefined
 **includes** | [**string**] | Only include fields (Comma separated) | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to undefined
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1
 **scroll** | [**boolean**] | If true passed then uses scroll pagination instead of default one | (optional) defaults to undefined
 **scrollId** | [**string**] | In order to get next batch of results using scroll pagination the scroll_id is required  | (optional) defaults to undefined
 **timeStartMilliseconds** | [**number**] | Filter segments by time_start_milliseconds | (optional) defaults to undefined
 **timeEndMilliseconds** | [**number**] | Filter segments by time_end_milliseconds | (optional) defaults to undefined
 **timeStartMillisecondsGte** | [**number**] | Get segments with start time greater than or equal to time_start_milliseconds__gte  | (optional) defaults to undefined
 **timeEndMillisecondsLte** | [**number**] | Get segments with end time less than or equal to time_end_milliseconds__lte | (optional) defaults to undefined


### Return type

**SegmentsSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of segments |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Page number does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdSegmentsSrtGet**
> string assetsV1AssetsAssetIdSegmentsSrtGet()

 Required roles:  - can_read_segments 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdSegmentsSrtGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string | Only include these segments (Comma separated) (optional)
  ids: "ids_example",
  // string | Search using query (optional)
  query: "query_example",
  // string | Filter segments by transcription_id (optional)
  transcriptionId: "transcription_id_example",
  // string | Filter segments by version_id (optional)
  versionId: "version_id_example",
  // string | Filter segments by segment_type (optional)
  segmentType: "segment_type_example",
  // string | Filter segments by segment_color (optional)
  segmentColor: "segment_color_example",
  // number | Limit the number of words per subtitle line (optional)
  wordsPerLine: 1,
};

apiInstance.assetsV1AssetsAssetIdSegmentsSrtGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **ids** | [**string**] | Only include these segments (Comma separated) | (optional) defaults to undefined
 **query** | [**string**] | Search using query | (optional) defaults to undefined
 **transcriptionId** | [**string**] | Filter segments by transcription_id | (optional) defaults to undefined
 **versionId** | [**string**] | Filter segments by version_id | (optional) defaults to undefined
 **segmentType** | [**string**] | Filter segments by segment_type | (optional) defaults to undefined
 **segmentColor** | [**string**] | Filter segments by segment_color | (optional) defaults to undefined
 **wordsPerLine** | [**number**] | Limit the number of words per subtitle line | (optional) defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/srt, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of segments as SRT file |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Page number does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdSegmentsVttGet**
> string assetsV1AssetsAssetIdSegmentsVttGet()

 Required roles:  - can_read_segments 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdSegmentsVttGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string | Only include these segments (Comma separated) (optional)
  ids: "ids_example",
  // string | Search using query (optional)
  query: "query_example",
  // string | Filter segments by transcription_id (optional)
  transcriptionId: "transcription_id_example",
  // string | Filter segments by version_id (optional)
  versionId: "version_id_example",
  // string | Filter segments by segment_type (optional)
  segmentType: "segment_type_example",
  // string | Filter segments by segment_color (optional)
  segmentColor: "segment_color_example",
  // number | Limit the number of words per subtitle line (optional)
  wordsPerLine: 1,
};

apiInstance.assetsV1AssetsAssetIdSegmentsVttGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **ids** | [**string**] | Only include these segments (Comma separated) | (optional) defaults to undefined
 **query** | [**string**] | Search using query | (optional) defaults to undefined
 **transcriptionId** | [**string**] | Filter segments by transcription_id | (optional) defaults to undefined
 **versionId** | [**string**] | Filter segments by version_id | (optional) defaults to undefined
 **segmentType** | [**string**] | Filter segments by segment_type | (optional) defaults to undefined
 **segmentColor** | [**string**] | Filter segments by segment_color | (optional) defaults to undefined
 **wordsPerLine** | [**number**] | Limit the number of words per subtitle line | (optional) defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/vtt, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of segments as VTT file |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Page number does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdUploadsDelete**
> void assetsV1AssetsAssetIdUploadsDelete()

 Required roles:  - can_create_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdUploadsDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
};

apiInstance.assetsV1AssetsAssetIdUploadsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Asset does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPost**
> void assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPost(createAssetVersionFromAssetSchema)

 Required roles:  - can_write_versions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  sourceAssetId: "source_asset_id_example",
  // CreateAssetVersionFromAssetSchema | body
  createAssetVersionFromAssetSchema: {
    copyPreviousVersionSegments: true,
    includeSegmentTypes: [
      "MARKER",
    ],
    sourceMetadataAssetId: "sourceMetadataAssetId_example",
  },
};

apiInstance.assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAssetVersionFromAssetSchema** | **CreateAssetVersionFromAssetSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **sourceAssetId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Returns nothing |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Source or destination asset does not exist |  -  |
**409** | The asset is being transcoded and cannot be set as a new version |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPost**
> void assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPost(createAssetVersionFromVersionSchema)

 Required roles:  - can_write_versions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  sourceVersionId: "source_version_id_example",
  // CreateAssetVersionFromVersionSchema | body
  createAssetVersionFromVersionSchema: {
    copyPreviousVersionSegments: true,
    excludeFormatIds: [
      "excludeFormatIds_example",
    ],
    includeSegmentTypes: [
      "MARKER",
    ],
    sourceMetadataAssetId: "sourceMetadataAssetId_example",
  },
};

apiInstance.assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAssetVersionFromVersionSchema** | **CreateAssetVersionFromVersionSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **sourceVersionId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Returns version id |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Source or destination asset does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdVersionsOldDelete**
> void assetsV1AssetsAssetIdVersionsOldDelete()

 Required roles:  - can_delete_versions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdVersionsOldDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
};

apiInstance.assetsV1AssetsAssetIdVersionsOldDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Forbidden |  -  |
**404** | Asset does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdVersionsPost**
> AssetVersionsSchema assetsV1AssetsAssetIdVersionsPost(createAssetVersionSchema)

 Required roles:  - can_write_versions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdVersionsPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // CreateAssetVersionSchema | body
  createAssetVersionSchema: {
    copyMetadata: true,
    copySegments: true,
    includeSegmentTypes: [
      "MARKER",
    ],
    sourceVersionId: "sourceVersionId_example",
  },
};

apiInstance.assetsV1AssetsAssetIdVersionsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAssetVersionSchema** | **CreateAssetVersionSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined


### Return type

**AssetVersionsSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Asset does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdVersionsVersionIdDelete**
> void assetsV1AssetsAssetIdVersionsVersionIdDelete()

 Required roles:  - can_delete_versions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdVersionsVersionIdDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // boolean | completely remove the version (optional)
  hardDelete: false,
};

apiInstance.assetsV1AssetsAssetIdVersionsVersionIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **hardDelete** | [**boolean**] | completely remove the version | (optional) defaults to false


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Forbidden |  -  |
**404** | Asset does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdVersionsVersionIdPatch**
> AssetVersionSchema assetsV1AssetsAssetIdVersionsVersionIdPatch(assetVersionSchema)

 Required roles:  - can_write_versions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdVersionsVersionIdPatchRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // AssetVersionSchema | body
  assetVersionSchema: {
    analyzeStatus: "N/A",
    archiveStatus: "NOT_ARCHIVED",
    createdByUser: "createdByUser_example",
    createdByUserInfo: {
    },
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    isOnline: true,
    status: "ACTIVE",
    transcribeStatus: "N/A",
  },
};

apiInstance.assetsV1AssetsAssetIdVersionsVersionIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetVersionSchema** | **AssetVersionSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined


### Return type

**AssetVersionSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Asset does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdVersionsVersionIdPromotePut**
> void assetsV1AssetsAssetIdVersionsVersionIdPromotePut()

 Required roles:  - can_write_versions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdVersionsVersionIdPromotePutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
};

apiInstance.assetsV1AssetsAssetIdVersionsVersionIdPromotePut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Asset does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdVersionsVersionIdPut**
> AssetVersionSchema assetsV1AssetsAssetIdVersionsVersionIdPut(assetVersionSchema)

 Required roles:  - can_write_versions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdVersionsVersionIdPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // AssetVersionSchema | body
  assetVersionSchema: {
    analyzeStatus: "N/A",
    archiveStatus: "NOT_ARCHIVED",
    createdByUser: "createdByUser_example",
    createdByUserInfo: {
    },
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    isOnline: true,
    status: "ACTIVE",
    transcribeStatus: "N/A",
  },
};

apiInstance.assetsV1AssetsAssetIdVersionsVersionIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetVersionSchema** | **AssetVersionSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined


### Return type

**AssetVersionSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Asset does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGet**
> AssetTranscriptionsPropertiesSchema assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGet()

 Required roles:  - can_read_transcriptions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
};

apiInstance.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined


### Return type

**AssetTranscriptionsPropertiesSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of transcription properties |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Transcription does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPost**
> AssetTranscriptionPropertiesSchema assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPost(assetTranscriptionPropertiesSchema)

 Required roles:  - can_write_transcriptions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // AssetTranscriptionPropertiesSchema | body
  assetTranscriptionPropertiesSchema: {
    language: "language_example",
    speakerLabels: {},
  },
};

apiInstance.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetTranscriptionPropertiesSchema** | **AssetTranscriptionPropertiesSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined


### Return type

**AssetTranscriptionPropertiesSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns transcription properties |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Transcription properties do not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPost**
> AssetTranscriptionPropertiesSchema assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPost(assetTranscriptionFromSubtitleSchema)

 Required roles:  - can_write_transcriptions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // AssetTranscriptionFromSubtitleSchema | body
  assetTranscriptionFromSubtitleSchema: {
    content: "content_example",
    deleteOldTranscriptions: true,
    format: "VTT",
    language: "language_example",
    sourceSubtitleId: "sourceSubtitleId_example",
  },
};

apiInstance.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetTranscriptionFromSubtitleSchema** | **AssetTranscriptionFromSubtitleSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined


### Return type

**AssetTranscriptionPropertiesSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns transcription properties |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Transcription properties do not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDelete**
> void assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDelete()

 Required roles:  - can_delete_transcriptions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // string
  transcriptionId: "transcription_id_example",
};

apiInstance.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **transcriptionId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Transcription properties do not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGet**
> AssetTranscriptionPropertiesSchema assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGet()

 Required roles:  - can_read_transcriptions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // string
  transcriptionId: "transcription_id_example",
};

apiInstance.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **transcriptionId** | [**string**] |  | defaults to undefined


### Return type

**AssetTranscriptionPropertiesSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a transcription properties |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Transcription properties do not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatch**
> AssetTranscriptionPropertiesSchema assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatch(assetTranscriptionPropertiesSchema)

 Required roles:  - can_write_transcriptions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatchRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // string
  transcriptionId: "transcription_id_example",
  // AssetTranscriptionPropertiesSchema | body
  assetTranscriptionPropertiesSchema: {
    language: "language_example",
    speakerLabels: {},
  },
};

apiInstance.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetTranscriptionPropertiesSchema** | **AssetTranscriptionPropertiesSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **transcriptionId** | [**string**] |  | defaults to undefined


### Return type

**AssetTranscriptionPropertiesSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns transcription properties |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Transcription properties do not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPut**
> AssetTranscriptionPropertiesSchema assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPut(assetTranscriptionPropertiesSchema)

 Required roles:  - can_write_transcriptions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // string
  transcriptionId: "transcription_id_example",
  // AssetTranscriptionPropertiesSchema | body
  assetTranscriptionPropertiesSchema: {
    language: "language_example",
    speakerLabels: {},
  },
};

apiInstance.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetTranscriptionPropertiesSchema** | **AssetTranscriptionPropertiesSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **transcriptionId** | [**string**] |  | defaults to undefined


### Return type

**AssetTranscriptionPropertiesSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns transcription properties |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Transcription properties do not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsAssetIdViewsPost**
> AssetSchema assetsV1AssetsAssetIdViewsPost()

 Required roles:  - can_read_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsAssetIdViewsPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  assetId: "asset_id_example",
};

apiInstance.assetsV1AssetsAssetIdViewsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined


### Return type

**AssetSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Asset does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsGet**
> AssetsSchema assetsV1AssetsGet()

 Required roles:  - can_read_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // number | Which page number to fetch (optional)
  page: 1,
  // boolean | If true passed then uses scroll pagination instead of default one (optional)
  scroll: true,
  // string | In order to get next batch of results using scroll pagination the scroll_id is required (optional)
  scrollId: "scroll_id_example",
  // string | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc (optional)
  sort: "sort_example",
  // string | filter by field_name (optional)
  fieldName: "field_name_example",
};

apiInstance.assetsV1AssetsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to undefined
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1
 **scroll** | [**boolean**] | If true passed then uses scroll pagination instead of default one | (optional) defaults to undefined
 **scrollId** | [**string**] | In order to get next batch of results using scroll pagination the scroll_id is required | (optional) defaults to undefined
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc | (optional) defaults to undefined
 **fieldName** | [**string**] | filter by field_name | (optional) defaults to undefined


### Return type

**AssetsSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsPatch**
> void assetsV1AssetsPatch(bulkAssetEditSchema)

 Required roles:  - can_write_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsPatchRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // BulkAssetEditSchema | body
  bulkAssetEditSchema: {
    objects: [
      {
        analyzeStatus: "N/A",
        archiveStatus: "NOT_ARCHIVED",
        category: "category_example",
        createdByUser: "createdByUser_example",
        customKeyframe: "customKeyframe_example",
        customPoster: "customPoster_example",
        deletedByUser: "deletedByUser_example",
        deletedByUserInfo: {
        },
        externalId: "externalId_example",
        externalLink: "externalLink_example",
        id: "id_example",
        isBlocked: true,
        isOnline: true,
        originalAssetId: "originalAssetId_example",
        originalSegmentId: "originalSegmentId_example",
        originalVersionId: "originalVersionId_example",
        siteName: "siteName_example",
        status: "ACTIVE",
        timeEndMilliseconds: -9223372036854776000,
        timeStartMilliseconds: -9223372036854776000,
        title: "title_example",
        type: "ASSET",
        warning: "warning_example",
      },
    ],
  },
};

apiInstance.assetsV1AssetsPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkAssetEditSchema** | **BulkAssetEditSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Bulk assets update scheduled |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsPost**
> AssetSchema assetsV1AssetsPost(assetCreateSchema)

 Required roles:  - can_create_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // AssetCreateSchema | body
  assetCreateSchema: {
    analyzeStatus: "N/A",
    archiveStatus: "NOT_ARCHIVED",
    category: "category_example",
    collectionId: "collectionId_example",
    customKeyframe: "customKeyframe_example",
    customPoster: "customPoster_example",
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    dateDeleted: new Date('1970-01-01T00:00:00.00Z'),
    dateModified: new Date('1970-01-01T00:00:00.00Z'),
    deletedByUserInfo: {
    },
    externalId: "externalId_example",
    externalLink: "externalLink_example",
    isBlocked: true,
    isOnline: true,
    originalAssetId: "originalAssetId_example",
    originalSegmentId: "originalSegmentId_example",
    originalVersionId: "originalVersionId_example",
    siteName: "siteName_example",
    status: "ACTIVE",
    timeEndMilliseconds: -9223372036854776000,
    timeStartMilliseconds: -9223372036854776000,
    title: "title_example",
    type: "ASSET",
    warning: "warning_example",
  },
  // boolean | Adds default ACLs to an asset (optional)
  applyDefaultAcls: true,
  // boolean | Adds containing collection\'s ACLs to an asset (optional)
  applyCollectionAcls: false,
  // boolean | Adds the asset to the collection specified in the body (optional)
  assignToCollection: false,
};

apiInstance.assetsV1AssetsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetCreateSchema** | **AssetCreateSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **applyDefaultAcls** | [**boolean**] | Adds default ACLs to an asset | (optional) defaults to true
 **applyCollectionAcls** | [**boolean**] | Adds containing collection\&#39;s ACLs to an asset | (optional) defaults to false
 **assignToCollection** | [**boolean**] | Adds the asset to the collection specified in the body | (optional) defaults to false


### Return type

**AssetSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Permission denied |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsPut**
> void assetsV1AssetsPut(bulkAssetEditSchema)

 Required roles:  - can_write_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // BulkAssetEditSchema | body
  bulkAssetEditSchema: {
    objects: [
      {
        analyzeStatus: "N/A",
        archiveStatus: "NOT_ARCHIVED",
        category: "category_example",
        createdByUser: "createdByUser_example",
        customKeyframe: "customKeyframe_example",
        customPoster: "customPoster_example",
        deletedByUser: "deletedByUser_example",
        deletedByUserInfo: {
        },
        externalId: "externalId_example",
        externalLink: "externalLink_example",
        id: "id_example",
        isBlocked: true,
        isOnline: true,
        originalAssetId: "originalAssetId_example",
        originalSegmentId: "originalSegmentId_example",
        originalVersionId: "originalVersionId_example",
        siteName: "siteName_example",
        status: "ACTIVE",
        timeEndMilliseconds: -9223372036854776000,
        timeStartMilliseconds: -9223372036854776000,
        title: "title_example",
        type: "ASSET",
        warning: "warning_example",
      },
    ],
  },
};

apiInstance.assetsV1AssetsPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkAssetEditSchema** | **BulkAssetEditSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Bulk assets update scheduled |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsReindexPost**
> void assetsV1AssetsReindexPost()

 Required roles:  - can_reindex_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsReindexPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // ReindexAllAssetsSchema | body (optional)
  reindexAllAssetsSchema: {
    assetIds: [
      "assetIds_example",
    ],
    realms: [
      "realms_example",
    ],
    syncToAnotherDc: true,
  },
};

apiInstance.assetsV1AssetsReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reindexAllAssetsSchema** | **ReindexAllAssetsSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ID and status of the job |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsRelationTypesGet**
> RelationTypesSchema assetsV1AssetsRelationTypesGet()

 Required roles:  - can_read_asset_relations 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsRelationTypesGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
};

apiInstance.assetsV1AssetsRelationTypesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**RelationTypesSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a relation type |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsRelationTypesPost**
> RelationTypeSchema assetsV1AssetsRelationTypesPost(relationTypeSchema)

 Required roles:  - can_write_asset_relation_types 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsRelationTypesPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // RelationTypeSchema | body
  relationTypeSchema: {
    description: "description_example",
    destinationLabel: "destinationLabel_example",
    isDirectional: true,
    name: "name_example",
    sourceLabel: "sourceLabel_example",
  },
};

apiInstance.assetsV1AssetsRelationTypesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationTypeSchema** | **RelationTypeSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**RelationTypeSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created relation type |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsRelationTypesRelationTypeDelete**
> void assetsV1AssetsRelationTypesRelationTypeDelete()

 Required roles:  - can_delete_asset_relation_types 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsRelationTypesRelationTypeDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  relationType: "relation_type_example",
};

apiInstance.assetsV1AssetsRelationTypesRelationTypeDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **relationType** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsRelationTypesRelationTypeGet**
> RelationTypeSchema assetsV1AssetsRelationTypesRelationTypeGet()

 Required roles:  - can_read_asset_relations 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsRelationTypesRelationTypeGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  relationType: "relation_type_example",
};

apiInstance.assetsV1AssetsRelationTypesRelationTypeGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **relationType** | [**string**] |  | defaults to undefined


### Return type

**RelationTypeSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a created relation |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsRelationTypesRelationTypePatch**
> RelationTypeSchema assetsV1AssetsRelationTypesRelationTypePatch(relationTypeSchema)

 Required roles:  - can_write_asset_relation_types 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsRelationTypesRelationTypePatchRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  relationType: "relation_type_example",
  // RelationTypeSchema | body
  relationTypeSchema: {
    description: "description_example",
    destinationLabel: "destinationLabel_example",
    isDirectional: true,
    name: "name_example",
    sourceLabel: "sourceLabel_example",
  },
};

apiInstance.assetsV1AssetsRelationTypesRelationTypePatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationTypeSchema** | **RelationTypeSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **relationType** | [**string**] |  | defaults to undefined


### Return type

**RelationTypeSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsRelationTypesRelationTypePut**
> RelationTypeSchema assetsV1AssetsRelationTypesRelationTypePut(relationTypeSchema)

 Required roles:  - can_write_asset_relation_types 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsRelationTypesRelationTypePutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  relationType: "relation_type_example",
  // RelationTypeSchema | body
  relationTypeSchema: {
    description: "description_example",
    destinationLabel: "destinationLabel_example",
    isDirectional: true,
    name: "name_example",
    sourceLabel: "sourceLabel_example",
  },
};

apiInstance.assetsV1AssetsRelationTypesRelationTypePut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationTypeSchema** | **RelationTypeSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **relationType** | [**string**] |  | defaults to undefined


### Return type

**RelationTypeSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1AssetsSegmentsReindexPost**
> void assetsV1AssetsSegmentsReindexPost(reindexAllSegmentsSchema)

 Required roles:  - can_reindex_segments 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1AssetsSegmentsReindexPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // ReindexAllSegmentsSchema | body
  reindexAllSegmentsSchema: {
    assetIds: [
      "assetIds_example",
    ],
    ignoreComments: true,
    realms: [
      "realms_example",
    ],
    syncToAnotherDc: true,
  },
};

apiInstance.assetsV1AssetsSegmentsReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reindexAllSegmentsSchema** | **ReindexAllSegmentsSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ID and status of the job |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdAncestorsGet**
> CollectionsSchema assetsV1CollectionsCollectionIdAncestorsGet()

 Required roles:  - can_read_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdAncestorsGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
};

apiInstance.assetsV1CollectionsCollectionIdAncestorsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined


### Return type

**CollectionsSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a collections content |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Collection does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdContentInfoGet**
> CollectionContentInfoSchema assetsV1CollectionsCollectionIdContentInfoGet()

 Required roles:  - can_read_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdContentInfoGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
  // boolean | If false, include all the contents (optional)
  onlyActive: true,
};

apiInstance.assetsV1CollectionsCollectionIdContentInfoGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined
 **onlyActive** | [**boolean**] | If false, include all the contents | (optional) defaults to true


### Return type

**CollectionContentInfoSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a sub-collections and assets number |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdContentsGet**
> AssetsSchema assetsV1CollectionsCollectionIdContentsGet()

 Required roles:  - can_read_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdContentsGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
  // string | Comma separated list of content types. Example - assets,collections (optional)
  objectTypes: "object_types_example",
  // string | Comma separated list of content ids. (optional)
  objectIds: "object_ids_example",
  // string (optional)
  externalId: "external_id_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // number | Which page number to fetch (optional)
  page: 1,
  // string | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc (optional)
  sort: "sort_example",
  // string | A comma separated list of fieldnames with order For example - first_name,eq,Vlad;last_name,eq,Gudkov (optional)
  filter: "filter_example",
};

apiInstance.assetsV1CollectionsCollectionIdContentsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined
 **objectTypes** | [**string**] | Comma separated list of content types. Example - assets,collections | (optional) defaults to undefined
 **objectIds** | [**string**] | Comma separated list of content ids. | (optional) defaults to undefined
 **externalId** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to undefined
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc | (optional) defaults to undefined
 **filter** | [**string**] | A comma separated list of fieldnames with order For example - first_name,eq,Vlad;last_name,eq,Gudkov | (optional) defaults to undefined


### Return type

**AssetsSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a collections content |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Collection does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDelete**
> void assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDelete()

 Required roles:  - can_write_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
};

apiInstance.assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Content object not found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPut**
> void assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPut(collectionContentOrderingSchema)

 Required roles:  - can_write_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // CollectionContentOrderingSchema | body
  collectionContentOrderingSchema: {
    afterObjectId: "afterObjectId_example",
    beforeObjectId: "beforeObjectId_example",
    position: -1,
  },
};

apiInstance.assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionContentOrderingSchema** | **CollectionContentOrderingSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Content object not found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPost**
> void assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPost(reindexCollectionContentSchema)

 Required roles:  - can_reindex_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // ReindexCollectionContentSchema | body
  reindexCollectionContentSchema: {
    syncToAnotherDc: true,
  },
};

apiInstance.assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reindexCollectionContentSchema** | **ReindexCollectionContentSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ID and status of the job |  -  |
**401** | Token is invalid |  -  |
**404** | Collection content does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdContentsOrderingCustomDelete**
> void assetsV1CollectionsCollectionIdContentsOrderingCustomDelete()

 Required roles:  - can_write_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdContentsOrderingCustomDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
};

apiInstance.assetsV1CollectionsCollectionIdContentsOrderingCustomDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Disables custom ordering for a collection\&#39;s content |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Collection not found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdContentsOrderingCustomPost**
> void assetsV1CollectionsCollectionIdContentsOrderingCustomPost(createCollectionContentOrderingSchema)

 Required roles:  - can_write_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdContentsOrderingCustomPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
  // CreateCollectionContentOrderingSchema | body
  createCollectionContentOrderingSchema: {
    customOrderSort: "customOrderSort_example",
  },
};

apiInstance.assetsV1CollectionsCollectionIdContentsOrderingCustomPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCollectionContentOrderingSchema** | **CreateCollectionContentOrderingSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Schedules a background job that will order the collection |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Collection not found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdContentsPost**
> void assetsV1CollectionsCollectionIdContentsPost(collectionContentSchema)

 Required roles:  - can_write_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdContentsPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
  // CollectionContentSchema | body
  collectionContentSchema: {
    objectId: "objectId_example",
    objectType: "objectType_example",
  },
};

apiInstance.assetsV1CollectionsCollectionIdContentsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionContentSchema** | **CollectionContentSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Content added |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Collection not found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdDelete**
> void assetsV1CollectionsCollectionIdDelete()

 Required roles:  - can_delete_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
};

apiInstance.assetsV1CollectionsCollectionIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Deletion has been scheduled |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Collection does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdFullPathGet**
> string assetsV1CollectionsCollectionIdFullPathGet()

 Required roles:  - can_read_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdFullPathGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
  // boolean | Use to get the upload path instead of the full path (optional)
  getUploadPath: true,
};

apiInstance.assetsV1CollectionsCollectionIdFullPathGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined
 **getUploadPath** | [**boolean**] | Use to get the upload path instead of the full path | (optional) defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Full path including all the ancestors / the upload path |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Collection does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdGet**
> CollectionSchema assetsV1CollectionsCollectionIdGet()

 Required roles:  - can_read_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
};

apiInstance.assetsV1CollectionsCollectionIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined


### Return type

**CollectionSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a collection |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdKeyframesPost**
> void assetsV1CollectionsCollectionIdKeyframesPost(synchronizeCollectionKeyframesSchema)

 Required roles:  - can_reindex_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdKeyframesPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
  // SynchronizeCollectionKeyframesSchema | body
  synchronizeCollectionKeyframesSchema: {
    assetIds: [
      "assetIds_example",
    ],
  },
};

apiInstance.assetsV1CollectionsCollectionIdKeyframesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **synchronizeCollectionKeyframesSchema** | **SynchronizeCollectionKeyframesSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Transcode job started |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Collection does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdPatch**
> CollectionSchema assetsV1CollectionsCollectionIdPatch(collectionInputSchema)

 Required roles:  - can_write_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdPatchRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
  // CollectionInputSchema | body
  collectionInputSchema: {
    category: "category_example",
    customKeyframe: "customKeyframe_example",
    customPoster: "customPoster_example",
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    externalId: "externalId_example",
    isRoot: true,
    keyframeAssetIds: [
      "keyframeAssetIds_example",
    ],
    parentId: "parentId_example",
    status: "ACTIVE",
    storageId: "storageId_example",
    title: "title_example",
  },
  // string | Set to \'move\' or \'copy\'. Ignored if \'parent_id\' hasn\'t changed (optional)
  changeParentMode: "move",
};

apiInstance.assetsV1CollectionsCollectionIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionInputSchema** | **CollectionInputSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined
 **changeParentMode** | [**string**] | Set to \&#39;move\&#39; or \&#39;copy\&#39;. Ignored if \&#39;parent_id\&#39; hasn\&#39;t changed | (optional) defaults to 'move'


### Return type

**CollectionSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated collection |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Collection does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdPurgeDelete**
> void assetsV1CollectionsCollectionIdPurgeDelete()

 Required roles:  - can_purge_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdPurgeDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
};

apiInstance.assetsV1CollectionsCollectionIdPurgeDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Status and job_id |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Forbidden - Collection is not empty |  -  |
**404** | Collection does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdPut**
> CollectionSchema assetsV1CollectionsCollectionIdPut(collectionInputSchema)

 Required roles:  - can_write_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
  // CollectionInputSchema | body
  collectionInputSchema: {
    category: "category_example",
    customKeyframe: "customKeyframe_example",
    customPoster: "customPoster_example",
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    externalId: "externalId_example",
    isRoot: true,
    keyframeAssetIds: [
      "keyframeAssetIds_example",
    ],
    parentId: "parentId_example",
    status: "ACTIVE",
    storageId: "storageId_example",
    title: "title_example",
  },
  // string | Set to \'move\' or \'copy\'. Ignored if \'parent_id\' hasn\'t changed (optional)
  changeParentMode: "move",
};

apiInstance.assetsV1CollectionsCollectionIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionInputSchema** | **CollectionInputSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined
 **changeParentMode** | [**string**] | Set to \&#39;move\&#39; or \&#39;copy\&#39;. Ignored if \&#39;parent_id\&#39; hasn\&#39;t changed | (optional) defaults to 'move'


### Return type

**CollectionSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated collection |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Collection does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdReindexContentsPost**
> void assetsV1CollectionsCollectionIdReindexContentsPost()

 Required roles:  - can_reindex_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdReindexContentsPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
};

apiInstance.assetsV1CollectionsCollectionIdReindexContentsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ID and status of the job |  -  |
**401** | Token is invalid |  -  |
**404** | Collection does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdReindexPost**
> void assetsV1CollectionsCollectionIdReindexPost(reindexCollectionSchema)

 Required roles:  - can_reindex_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdReindexPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
  // ReindexCollectionSchema | body
  reindexCollectionSchema: {
    realms: [
      "realms_example",
    ],
    syncToAnotherDc: true,
  },
};

apiInstance.assetsV1CollectionsCollectionIdReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reindexCollectionSchema** | **ReindexCollectionSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ID and status of the job |  -  |
**401** | Token is invalid |  -  |
**404** | Collection does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdRestorePut**
> void assetsV1CollectionsCollectionIdRestorePut()

 Required roles:  - can_write_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdRestorePutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
};

apiInstance.assetsV1CollectionsCollectionIdRestorePut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Forbidden - Collection is not empty |  -  |
**404** | Collection does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdSearchDocumentPut**
> void assetsV1CollectionsCollectionIdSearchDocumentPut(collectionSchema)

 Required roles:  - can_reindex_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdSearchDocumentPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
  // CollectionSchema | body
  collectionSchema: {
    category: "category_example",
    customKeyframe: "customKeyframe_example",
    customPoster: "customPoster_example",
    externalId: "externalId_example",
    inCollections: [
      "inCollections_example",
    ],
    isRoot: true,
    keyframeAssetIds: [
      "keyframeAssetIds_example",
    ],
    keyframes: [
      {},
    ],
    parentId: "parentId_example",
    parents: [
      "parents_example",
    ],
    status: "ACTIVE",
    storageId: "storageId_example",
    title: "title_example",
  },
};

apiInstance.assetsV1CollectionsCollectionIdSearchDocumentPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionSchema** | **CollectionSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Collection metadata updated |  -  |
**400** | No metadata supplied |  -  |
**401** | Token is invalid |  -  |
**404** | Collection does not exist in search index |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdSizeGet**
> CollectionSizeSchema assetsV1CollectionsCollectionIdSizeGet()

 Required roles:  - can_read_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdSizeGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
  // string | Compute total size only for files with the specified format name (optional)
  formatName: "format_name_example",
  // boolean | Compute total size for all files including sub_collections\' assets (optional)
  includeSubcollections: false,
};

apiInstance.assetsV1CollectionsCollectionIdSizeGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined
 **formatName** | [**string**] | Compute total size only for files with the specified format name | (optional) defaults to undefined
 **includeSubcollections** | [**boolean**] | Compute total size for all files including sub_collections\&#39; assets | (optional) defaults to false


### Return type

**CollectionSizeSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the size of all the collection\&#39;s assets |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Collection does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsCollectionIdSubcollectionsPost**
> void assetsV1CollectionsCollectionIdSubcollectionsPost(collectionContentSchema)

 Required roles:  - can_write_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsCollectionIdSubcollectionsPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  collectionId: "collection_id_example",
  // CollectionContentSchema | body
  collectionContentSchema: {
    objectId: "objectId_example",
    objectType: "objectType_example",
  },
};

apiInstance.assetsV1CollectionsCollectionIdSubcollectionsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionContentSchema** | **CollectionContentSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **collectionId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Content added |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Collection not found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsGet**
> CollectionsSchema assetsV1CollectionsGet()

 Required roles:  - can_read_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // number | Which page number to fetch (optional)
  page: 1,
  // boolean | If true passed then uses scroll pagination instead of default one (optional)
  scroll: true,
  // string | In order to get next batch of results using scroll pagination the scroll_id is required (optional)
  scrollId: "scroll_id_example",
  // string | A comma separated list of fieldnames with order. For example - title,asc;is_root,desc (optional)
  sort: "sort_example",
  // string | Filter by is_root (optional)
  isRoot: "is_root_example",
  // string | Filter by status (optional)
  status: "status_example",
};

apiInstance.assetsV1CollectionsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to undefined
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1
 **scroll** | [**boolean**] | If true passed then uses scroll pagination instead of default one | (optional) defaults to undefined
 **scrollId** | [**string**] | In order to get next batch of results using scroll pagination the scroll_id is required | (optional) defaults to undefined
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - title,asc;is_root,desc | (optional) defaults to undefined
 **isRoot** | [**string**] | Filter by is_root | (optional) defaults to undefined
 **status** | [**string**] | Filter by status | (optional) defaults to undefined


### Return type

**CollectionsSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of collections |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsPost**
> CollectionSchema assetsV1CollectionsPost(collectionInputSchema)

 Required roles:  - can_create_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // CollectionInputSchema | body
  collectionInputSchema: {
    category: "category_example",
    customKeyframe: "customKeyframe_example",
    customPoster: "customPoster_example",
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    externalId: "externalId_example",
    isRoot: true,
    keyframeAssetIds: [
      "keyframeAssetIds_example",
    ],
    parentId: "parentId_example",
    status: "ACTIVE",
    storageId: "storageId_example",
    title: "title_example",
  },
  // boolean | Adds default ACLs to a collection (optional)
  applyDefaultAcls: true,
  // boolean | Adds containing collection\'s ACLs to a collection (optional)
  applyCollectionAcls: false,
  // boolean | Restricts ACLS to containing collection\'s ACLs (optional)
  restrictCollectionAcls: false,
};

apiInstance.assetsV1CollectionsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionInputSchema** | **CollectionInputSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **applyDefaultAcls** | [**boolean**] | Adds default ACLs to a collection | (optional) defaults to true
 **applyCollectionAcls** | [**boolean**] | Adds containing collection\&#39;s ACLs to a collection | (optional) defaults to false
 **restrictCollectionAcls** | [**boolean**] | Restricts ACLS to containing collection\&#39;s ACLs | (optional) defaults to false


### Return type

**CollectionSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created collection |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CollectionsReindexPost**
> void assetsV1CollectionsReindexPost()

 Required roles:  - can_reindex_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CollectionsReindexPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // ReindexAllCollectionsSchema | body (optional)
  reindexAllCollectionsSchema: {
    collectionIds: [
      "collectionIds_example",
    ],
    realms: [
      "realms_example",
    ],
  },
};

apiInstance.assetsV1CollectionsReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reindexAllCollectionsSchema** | **ReindexAllCollectionsSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ID and status of the job |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CustomActionsContextActionIdCallbackPost**
> CustomActionCallbackReplySchema assetsV1CustomActionsContextActionIdCallbackPost(customActionCallbackSchema)

 Required roles:  - can_read_custom_actions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CustomActionsContextActionIdCallbackPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  context: "context_example",
  // string
  actionId: "action_id_example",
  // CustomActionCallbackSchema | body
  customActionCallbackSchema: {
    assetIds: [
      "assetIds_example",
    ],
    collectionIds: [
      "collectionIds_example",
    ],
    metadataValues: {},
    metadataViewId: "metadataViewId_example",
    savedSearchIds: [
      "savedSearchIds_example",
    ],
  },
};

apiInstance.assetsV1CustomActionsContextActionIdCallbackPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customActionCallbackSchema** | **CustomActionCallbackSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **context** | [**string**] |  | defaults to undefined
 **actionId** | [**string**] |  | defaults to undefined


### Return type

**CustomActionCallbackReplySchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a custom action reply |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CustomActionsContextActionIdDelete**
> CustomActionSchema assetsV1CustomActionsContextActionIdDelete()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CustomActionsContextActionIdDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  context: "context_example",
  // string
  actionId: "action_id_example",
};

apiInstance.assetsV1CustomActionsContextActionIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **context** | [**string**] |  | defaults to undefined
 **actionId** | [**string**] |  | defaults to undefined


### Return type

**CustomActionSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CustomActionsContextActionIdGet**
> CustomActionSchema assetsV1CustomActionsContextActionIdGet()

 Required roles:  - can_read_custom_actions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CustomActionsContextActionIdGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  context: "context_example",
  // string
  actionId: "action_id_example",
};

apiInstance.assetsV1CustomActionsContextActionIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **context** | [**string**] |  | defaults to undefined
 **actionId** | [**string**] |  | defaults to undefined


### Return type

**CustomActionSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created asset custom action |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CustomActionsContextActionIdPatch**
> CustomActionSchema assetsV1CustomActionsContextActionIdPatch(customActionSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CustomActionsContextActionIdPatchRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  context: "context_example",
  // string
  actionId: "action_id_example",
  // CustomActionSchema | body
  customActionSchema: {
    appId: "appId_example",
    context: "ASSET",
    disabled: true,
    headers: {
      "key": "key_example",
    },
    metadataView: "metadataView_example",
    status: "FAILING",
    title: "title_example",
    type: "OPEN",
    url: "url_example",
  },
};

apiInstance.assetsV1CustomActionsContextActionIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customActionSchema** | **CustomActionSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **context** | [**string**] |  | defaults to undefined
 **actionId** | [**string**] |  | defaults to undefined


### Return type

**CustomActionSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an created custom action |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CustomActionsContextActionIdPut**
> CustomActionSchema assetsV1CustomActionsContextActionIdPut(customActionSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CustomActionsContextActionIdPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  context: "context_example",
  // string
  actionId: "action_id_example",
  // CustomActionSchema | body
  customActionSchema: {
    appId: "appId_example",
    context: "ASSET",
    disabled: true,
    headers: {
      "key": "key_example",
    },
    metadataView: "metadataView_example",
    status: "FAILING",
    title: "title_example",
    type: "OPEN",
    url: "url_example",
  },
};

apiInstance.assetsV1CustomActionsContextActionIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customActionSchema** | **CustomActionSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **context** | [**string**] |  | defaults to undefined
 **actionId** | [**string**] |  | defaults to undefined


### Return type

**CustomActionSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an created custom action |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CustomActionsContextGet**
> CustomActionsSchema assetsV1CustomActionsContextGet()

 Required roles:  - can_read_custom_actions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CustomActionsContextGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  context: "context_example",
};

apiInstance.assetsV1CustomActionsContextGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **context** | [**string**] |  | defaults to undefined


### Return type

**CustomActionsSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of custom actions by context |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CustomActionsContextPost**
> CustomActionSchema assetsV1CustomActionsContextPost(customActionSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CustomActionsContextPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  context: "context_example",
  // CustomActionSchema | body
  customActionSchema: {
    appId: "appId_example",
    context: "ASSET",
    disabled: true,
    headers: {
      "key": "key_example",
    },
    metadataView: "metadataView_example",
    status: "FAILING",
    title: "title_example",
    type: "OPEN",
    url: "url_example",
  },
};

apiInstance.assetsV1CustomActionsContextPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customActionSchema** | **CustomActionSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **context** | [**string**] |  | defaults to undefined


### Return type

**CustomActionSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created custom action |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CustomActionsGet**
> CustomActionsSchema assetsV1CustomActionsGet()

 Required roles:  - can_read_custom_actions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CustomActionsGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
};

apiInstance.assetsV1CustomActionsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**CustomActionsSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of custom actions |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1CustomActionsSharedContextActionIdCallbackPost**
> CustomActionCallbackReplySchema assetsV1CustomActionsSharedContextActionIdCallbackPost(customActionCallbackSchema)

 Required roles:  - can_read_custom_actions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1CustomActionsSharedContextActionIdCallbackPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  context: "context_example",
  // string
  actionId: "action_id_example",
  // CustomActionCallbackSchema | body
  customActionCallbackSchema: {
    assetIds: [
      "assetIds_example",
    ],
    collectionIds: [
      "collectionIds_example",
    ],
    metadataValues: {},
    metadataViewId: "metadataViewId_example",
    savedSearchIds: [
      "savedSearchIds_example",
    ],
  },
};

apiInstance.assetsV1CustomActionsSharedContextActionIdCallbackPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customActionCallbackSchema** | **CustomActionCallbackSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **context** | [**string**] |  | defaults to undefined
 **actionId** | [**string**] |  | defaults to undefined


### Return type

**CustomActionCallbackReplySchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a custom action reply |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1DeleteQueueAssetsDelete**
> void assetsV1DeleteQueueAssetsDelete(deleteQueueSchema)

 Required roles:  - can_write_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1DeleteQueueAssetsDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // DeleteQueueSchema | body
  deleteQueueSchema: {
    ids: [
      "ids_example",
    ],
  },
};

apiInstance.assetsV1DeleteQueueAssetsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteQueueSchema** | **DeleteQueueSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1DeleteQueueAssetsGet**
> AssetsSchema assetsV1DeleteQueueAssetsGet()

 Required roles:  - can_read_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1DeleteQueueAssetsGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // number | Which page number to fetch (optional)
  page: 1,
  // string | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc (optional)
  sort: "sort_example",
  // string | A comma separated list of fieldnames with order For example - first_name,eq,Vlad;last_name,eq,Gudkov (optional)
  filter: "filter_example",
};

apiInstance.assetsV1DeleteQueueAssetsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to undefined
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc | (optional) defaults to undefined
 **filter** | [**string**] | A comma separated list of fieldnames with order For example - first_name,eq,Vlad;last_name,eq,Gudkov | (optional) defaults to undefined


### Return type

**AssetsSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1DeleteQueueAssetsPost**
> void assetsV1DeleteQueueAssetsPost(deleteQueueSchema)

 Required roles:  - can_delete_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1DeleteQueueAssetsPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // DeleteQueueSchema | body
  deleteQueueSchema: {
    ids: [
      "ids_example",
    ],
  },
};

apiInstance.assetsV1DeleteQueueAssetsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteQueueSchema** | **DeleteQueueSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1DeleteQueueAssetsPurgeAllPost**
> void assetsV1DeleteQueueAssetsPurgeAllPost()

 Required roles:  - can_purge_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1DeleteQueueAssetsPurgeAllPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
};

apiInstance.assetsV1DeleteQueueAssetsPurgeAllPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**401** | Token is invalid |  -  |
**403** | User does not have permission |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1DeleteQueueAssetsPurgePost**
> void assetsV1DeleteQueueAssetsPurgePost(deleteQueueSchema)

 Required roles:  - can_purge_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1DeleteQueueAssetsPurgePostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // DeleteQueueSchema | body
  deleteQueueSchema: {
    ids: [
      "ids_example",
    ],
  },
};

apiInstance.assetsV1DeleteQueueAssetsPurgePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteQueueSchema** | **DeleteQueueSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1DeleteQueueAssetsRestoreAllPost**
> void assetsV1DeleteQueueAssetsRestoreAllPost()

 Required roles:  - can_write_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1DeleteQueueAssetsRestoreAllPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
};

apiInstance.assetsV1DeleteQueueAssetsRestoreAllPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**401** | Token is invalid |  -  |
**403** | User does not have permission |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1DeleteQueueBulkPost**
> void assetsV1DeleteQueueBulkPost(bulkDeleteSchema)

 Required roles:  - can_delete_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1DeleteQueueBulkPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // BulkDeleteSchema | body
  bulkDeleteSchema: {
    contentOnly: true,
    objectIds: [
      "objectIds_example",
    ],
    objectType: "assets",
  },
};

apiInstance.assetsV1DeleteQueueBulkPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkDeleteSchema** | **BulkDeleteSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Bulk delete was scheduled |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1DeleteQueueCollectionsDelete**
> void assetsV1DeleteQueueCollectionsDelete(deleteQueueSchema)

 Required roles:  - can_write_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1DeleteQueueCollectionsDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // DeleteQueueSchema | body
  deleteQueueSchema: {
    ids: [
      "ids_example",
    ],
  },
};

apiInstance.assetsV1DeleteQueueCollectionsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteQueueSchema** | **DeleteQueueSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Forbidden - Collection is not empty |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1DeleteQueueCollectionsGet**
> CollectionsSchema assetsV1DeleteQueueCollectionsGet()

 Required roles:  - can_read_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1DeleteQueueCollectionsGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // number | Which page number to fetch (optional)
  page: 1,
  // string | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc (optional)
  sort: "sort_example",
  // string | A comma separated list of fieldnames with order For example - first_name,eq,Vlad;last_name,eq,Gudkov (optional)
  filter: "filter_example",
};

apiInstance.assetsV1DeleteQueueCollectionsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to undefined
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc | (optional) defaults to undefined
 **filter** | [**string**] | A comma separated list of fieldnames with order For example - first_name,eq,Vlad;last_name,eq,Gudkov | (optional) defaults to undefined


### Return type

**CollectionsSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of collections |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1DeleteQueueCollectionsPost**
> void assetsV1DeleteQueueCollectionsPost(deleteQueueSchema)

 Required roles:  - can_delete_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1DeleteQueueCollectionsPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // DeleteQueueSchema | body
  deleteQueueSchema: {
    ids: [
      "ids_example",
    ],
  },
};

apiInstance.assetsV1DeleteQueueCollectionsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteQueueSchema** | **DeleteQueueSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Forbidden - Collection is not empty |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1DeleteQueueCollectionsPurgeAllPost**
> void assetsV1DeleteQueueCollectionsPurgeAllPost()

 Required roles:  - can_purge_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1DeleteQueueCollectionsPurgeAllPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
};

apiInstance.assetsV1DeleteQueueCollectionsPurgeAllPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**401** | Token is invalid |  -  |
**403** | User does not have permission |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1DeleteQueueCollectionsPurgePost**
> void assetsV1DeleteQueueCollectionsPurgePost(deleteQueueSchema)

 Required roles:  - can_purge_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1DeleteQueueCollectionsPurgePostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // DeleteQueueSchema | body
  deleteQueueSchema: {
    ids: [
      "ids_example",
    ],
  },
};

apiInstance.assetsV1DeleteQueueCollectionsPurgePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteQueueSchema** | **DeleteQueueSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Forbidden - Collection is not empty |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1DeleteQueueCollectionsRestoreAllPost**
> void assetsV1DeleteQueueCollectionsRestoreAllPost()

 Required roles:  - can_write_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1DeleteQueueCollectionsRestoreAllPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
};

apiInstance.assetsV1DeleteQueueCollectionsRestoreAllPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**401** | Token is invalid |  -  |
**403** | User does not have permission |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1DeleteQueuePurgeAllPost**
> void assetsV1DeleteQueuePurgeAllPost()

 Required roles:  - can_purge_assets - can_purge_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1DeleteQueuePurgeAllPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
};

apiInstance.assetsV1DeleteQueuePurgeAllPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**401** | Token is invalid |  -  |
**403** | User does not have permission |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1FavoritesAllDelete**
> void assetsV1FavoritesAllDelete()

 Required roles:  - can_delete_favorites 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1FavoritesAllDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
};

apiInstance.assetsV1FavoritesAllDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A background task for deleting all from favourites was scheduled |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1FavoritesDelete**
> BulkDeleteFromFavoritesSchema assetsV1FavoritesDelete(bulkDeleteFromFavoritesSchema)

 Required roles:  - can_delete_favorites 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1FavoritesDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // BulkDeleteFromFavoritesSchema | body
  bulkDeleteFromFavoritesSchema: {
    objectIds: [
      "objectIds_example",
    ],
    objectType: "assets",
  },
};

apiInstance.assetsV1FavoritesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkDeleteFromFavoritesSchema** | **BulkDeleteFromFavoritesSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**BulkDeleteFromFavoritesSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of object IDs that were removed from favorites |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1FavoritesGet**
> FavoritesSchema assetsV1FavoritesGet()

 Required roles:  - can_read_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1FavoritesGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // number | The number of objects for each page (optional)
  perPage: 1,
  // number | Which page number to fetch (optional)
  page: 1,
  // string | A comma separated list of fieldnames with order. For example - title,asc;date_created,desc (optional)
  sort: "sort_example",
};

apiInstance.assetsV1FavoritesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **perPage** | [**number**] | The number of objects for each page | (optional) defaults to undefined
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - title,asc;date_created,desc | (optional) defaults to undefined


### Return type

**FavoritesSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns list of favorite objects |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1FavoritesPost**
> BulkAddToFavoritesSchema assetsV1FavoritesPost(bulkAddToFavoritesSchema)

 Required roles:  - can_write_favorites 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1FavoritesPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // BulkAddToFavoritesSchema | body
  bulkAddToFavoritesSchema: {
    objectIds: [
      "objectIds_example",
    ],
    objectType: "assets",
  },
};

apiInstance.assetsV1FavoritesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkAddToFavoritesSchema** | **BulkAddToFavoritesSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**BulkAddToFavoritesSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of object IDs that were added to favorites |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1FavouritesAllDelete**
> void assetsV1FavouritesAllDelete()

 Required roles:  - can_delete_favorites 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1FavouritesAllDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
};

apiInstance.assetsV1FavouritesAllDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A background task for deleting all from favourites was scheduled |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdApprovalsDelete**
> void assetsV1ObjectTypeObjectIdApprovalsDelete()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdApprovalsDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectId: "object_id_example",
  // string
  objectType: "object_type_example",
};

apiInstance.assetsV1ObjectTypeObjectIdApprovalsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Empty body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdApprovalsExternalEmailDelete**
> void assetsV1ObjectTypeObjectIdApprovalsExternalEmailDelete()

 Required roles:  - can_delete_approval_status 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdApprovalsExternalEmailDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectId: "object_id_example",
  // string
  objectType: "object_type_example",
  // string
  email: "email_example",
};

apiInstance.assetsV1ObjectTypeObjectIdApprovalsExternalEmailDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **email** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Empty body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdApprovalsGet**
> ApprovalsBySchema assetsV1ObjectTypeObjectIdApprovalsGet()

 Required roles:  - can_read_approval_request 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdApprovalsGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectId: "object_id_example",
  // string
  objectType: "object_type_example",
};

apiInstance.assetsV1ObjectTypeObjectIdApprovalsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined


### Return type

**ApprovalsBySchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a objects approval |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdApprovalsPut**
> ApprovalBySchema assetsV1ObjectTypeObjectIdApprovalsPut(approvalBySchema)

 Required roles:  - can_write_approval_status 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdApprovalsPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectId: "object_id_example",
  // string
  objectType: "object_type_example",
  // ApprovalBySchema | body
  approvalBySchema: {
    changeDate: new Date('1970-01-01T00:00:00.00Z'),
    external: "external_example",
    status: "N/A",
    user: "user_example",
  },
};

apiInstance.assetsV1ObjectTypeObjectIdApprovalsPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **approvalBySchema** | **ApprovalBySchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined


### Return type

**ApprovalBySchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a objects approval |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdApprovalsRequestDelete**
> ApprovalSchema assetsV1ObjectTypeObjectIdApprovalsRequestDelete()

 Required roles:  - can_delete_approval_request 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdApprovalsRequestDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectId: "object_id_example",
  // string
  objectType: "object_type_example",
};

apiInstance.assetsV1ObjectTypeObjectIdApprovalsRequestDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined


### Return type

**ApprovalSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a objects approval |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdApprovalsRequestGet**
> ApprovalSchema assetsV1ObjectTypeObjectIdApprovalsRequestGet()

 Required roles:  - can_read_approval_request 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdApprovalsRequestGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectId: "object_id_example",
  // string
  objectType: "object_type_example",
};

apiInstance.assetsV1ObjectTypeObjectIdApprovalsRequestGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined


### Return type

**ApprovalSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a objects approval |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdApprovalsRequestPatch**
> ApprovalSchema assetsV1ObjectTypeObjectIdApprovalsRequestPatch(approvalSchema)

 Required roles:  - can_write_approval_request 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdApprovalsRequestPatchRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectId: "object_id_example",
  // string
  objectType: "object_type_example",
  // ApprovalSchema | body
  approvalSchema: {
    changeDate: new Date('1970-01-01T00:00:00.00Z'),
    externals: [
      "externals_example",
    ],
    groups: [
      "groups_example",
    ],
    minNumber: -2147483648,
    requestDate: new Date('1970-01-01T00:00:00.00Z'),
    shareId: "shareId_example",
    status: "N/A",
    users: [
      "users_example",
    ],
  },
};

apiInstance.assetsV1ObjectTypeObjectIdApprovalsRequestPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **approvalSchema** | **ApprovalSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined


### Return type

**ApprovalSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a assets approval |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdApprovalsRequestPost**
> ApprovalSchema assetsV1ObjectTypeObjectIdApprovalsRequestPost(approvalSchema)

 Required roles:  - can_write_approval_request 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdApprovalsRequestPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectId: "object_id_example",
  // string
  objectType: "object_type_example",
  // ApprovalSchema | body
  approvalSchema: {
    changeDate: new Date('1970-01-01T00:00:00.00Z'),
    externals: [
      "externals_example",
    ],
    groups: [
      "groups_example",
    ],
    minNumber: -2147483648,
    requestDate: new Date('1970-01-01T00:00:00.00Z'),
    shareId: "shareId_example",
    status: "N/A",
    users: [
      "users_example",
    ],
  },
};

apiInstance.assetsV1ObjectTypeObjectIdApprovalsRequestPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **approvalSchema** | **ApprovalSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined


### Return type

**ApprovalSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a objects approval |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdApprovalsRequestPut**
> ApprovalSchema assetsV1ObjectTypeObjectIdApprovalsRequestPut(approvalSchema)

 Required roles:  - can_write_approval_request 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdApprovalsRequestPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectId: "object_id_example",
  // string
  objectType: "object_type_example",
  // ApprovalSchema | body
  approvalSchema: {
    changeDate: new Date('1970-01-01T00:00:00.00Z'),
    externals: [
      "externals_example",
    ],
    groups: [
      "groups_example",
    ],
    minNumber: -2147483648,
    requestDate: new Date('1970-01-01T00:00:00.00Z'),
    shareId: "shareId_example",
    status: "N/A",
    users: [
      "users_example",
    ],
  },
};

apiInstance.assetsV1ObjectTypeObjectIdApprovalsRequestPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **approvalSchema** | **ApprovalSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined


### Return type

**ApprovalSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a assets approval |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdApprovalsUserUserIdDelete**
> void assetsV1ObjectTypeObjectIdApprovalsUserUserIdDelete()

 Required roles:  - can_delete_approval_status 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdApprovalsUserUserIdDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectId: "object_id_example",
  // string
  objectType: "object_type_example",
  // string
  userId: "user_id_example",
};

apiInstance.assetsV1ObjectTypeObjectIdApprovalsUserUserIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Empty body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdSharesGet**
> SharesSchema assetsV1ObjectTypeObjectIdSharesGet()

 Required roles:  - can_read_shares 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdSharesGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // string (optional)
  lastId: "last_id_example",
};

apiInstance.assetsV1ObjectTypeObjectIdSharesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to undefined
 **lastId** | [**string**] |  | (optional) defaults to undefined


### Return type

**SharesSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of share |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdSharesPost**
> ShareSchema assetsV1ObjectTypeObjectIdSharesPost(shareCreateSchema)

In case if is_approval=True, share options will be created respectively to user roles.<br/>In case if is_approval=True, share options will be created respectively to user roles.<br/> Required roles:  - can_write_shares 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdSharesPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // ShareCreateSchema | body
  shareCreateSchema: {
    allowApprovingComments: true,
    allowComments: true,
    allowCustomActions: true,
    allowDownload: true,
    allowDownloadProxy: true,
    allowSettingApproveStatus: true,
    allowUpload: true,
    allowUserSearchForMentions: true,
    allowViewTranscriptions: true,
    allowViewVersions: true,
    emails: [
      "emails_example",
    ],
    expires: new Date('1970-01-01T00:00:00.00Z'),
    message: "message_example",
    metadataViews: [
      "metadataViews_example",
    ],
    objectId: "objectId_example",
    objectType: "objectType_example",
    password: "password_example",
    systemDomainId: "systemDomainId_example",
    title: "title_example",
    uploadStorageId: "uploadStorageId_example",
  },
  // boolean (optional)
  isApproval: true,
};

apiInstance.assetsV1ObjectTypeObjectIdSharesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shareCreateSchema** | **ShareCreateSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **isApproval** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**ShareSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created share; the URL field will be null as a notification email has been sent to the specified email addresses with the share URLs embedded in it |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Shares are restricted by system administator |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdSharesShareIdDelete**
> void assetsV1ObjectTypeObjectIdSharesShareIdDelete()

 Required roles:  - can_delete_object_shares 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdSharesShareIdDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // string
  shareId: "share_id_example",
};

apiInstance.assetsV1ObjectTypeObjectIdSharesShareIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **shareId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Share does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdSharesShareIdGet**
> ShareSchema assetsV1ObjectTypeObjectIdSharesShareIdGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdSharesShareIdGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // string
  shareId: "share_id_example",
};

apiInstance.assetsV1ObjectTypeObjectIdSharesShareIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **shareId** | [**string**] |  | defaults to undefined


### Return type

**ShareSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a share |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Share does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdSharesShareIdPut**
> ShareSchema assetsV1ObjectTypeObjectIdSharesShareIdPut(shareSchema)

 Required roles:  - can_write_shares 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdSharesShareIdPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // string
  shareId: "share_id_example",
  // ShareSchema | body
  shareSchema: {
    allowApprovingComments: true,
    allowComments: true,
    allowCustomActions: true,
    allowDownload: true,
    allowDownloadProxy: true,
    allowSettingApproveStatus: true,
    allowUpload: true,
    allowUserSearchForMentions: true,
    allowViewTranscriptions: true,
    allowViewVersions: true,
    appId: "appId_example",
    expires: new Date('1970-01-01T00:00:00.00Z'),
    message: "message_example",
    metadataViews: [
      "metadataViews_example",
    ],
    title: "title_example",
    uploadStorageId: "uploadStorageId_example",
  },
};

apiInstance.assetsV1ObjectTypeObjectIdSharesShareIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shareSchema** | **ShareSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **shareId** | [**string**] |  | defaults to undefined


### Return type

**ShareSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated share |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Share does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdSharesShareIdUsersGet**
> ShareUsersSchema assetsV1ObjectTypeObjectIdSharesShareIdUsersGet()

 Required roles:  - can_read_shares 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdSharesShareIdUsersGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // string
  shareId: "share_id_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // string (optional)
  lastId: "last_id_example",
};

apiInstance.assetsV1ObjectTypeObjectIdSharesShareIdUsersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **shareId** | [**string**] |  | defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to undefined
 **lastId** | [**string**] |  | (optional) defaults to undefined


### Return type

**ShareUsersSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of share |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdSharesShareIdUsersPost**
> ShareUserSchema assetsV1ObjectTypeObjectIdSharesShareIdUsersPost(shareUserSchema)

 Required roles:  - can_write_shares 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdSharesShareIdUsersPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // string
  shareId: "share_id_example",
  // ShareUserSchema | body
  shareUserSchema: {
    email: "email_example",
    id: "id_example",
    password: "password_example",
  },
};

apiInstance.assetsV1ObjectTypeObjectIdSharesShareIdUsersPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shareUserSchema** | **ShareUserSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **shareId** | [**string**] |  | defaults to undefined


### Return type

**ShareUserSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created share |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDelete**
> void assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDelete()

 Required roles:  - can_write_shares 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // string
  shareId: "share_id_example",
  // string
  shareUserId: "share_user_id_example",
};

apiInstance.assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **shareId** | [**string**] |  | defaults to undefined
 **shareUserId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Share does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGet**
> ShareUserSchema assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGet()

 Required roles:  - can_read_shares 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // string
  shareId: "share_id_example",
  // string
  shareUserId: "share_user_id_example",
};

apiInstance.assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **shareId** | [**string**] |  | defaults to undefined
 **shareUserId** | [**string**] |  | defaults to undefined


### Return type

**ShareUserSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a share |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Share does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatch**
> ShareUserSchema assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatch(shareUserSchema)

 Required roles:  - can_write_shares 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatchRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // string
  shareId: "share_id_example",
  // string
  shareUserId: "share_user_id_example",
  // ShareUserSchema | body
  shareUserSchema: {
    email: "email_example",
    id: "id_example",
    password: "password_example",
  },
};

apiInstance.assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shareUserSchema** | **ShareUserSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **shareId** | [**string**] |  | defaults to undefined
 **shareUserId** | [**string**] |  | defaults to undefined


### Return type

**ShareUserSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated share |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Share does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPut**
> ShareUserSchema assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPut(shareUserSchema)

 Required roles:  - can_write_shares 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // string
  shareId: "share_id_example",
  // string
  shareUserId: "share_user_id_example",
  // ShareUserSchema | body
  shareUserSchema: {
    email: "email_example",
    id: "id_example",
    password: "password_example",
  },
};

apiInstance.assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shareUserSchema** | **ShareUserSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **shareId** | [**string**] |  | defaults to undefined
 **shareUserId** | [**string**] |  | defaults to undefined


### Return type

**ShareUserSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated share |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Share does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdSharesUrlPost**
> ShareURLSchema assetsV1ObjectTypeObjectIdSharesUrlPost(shareURLCreateSchema)

 Required roles:  - can_write_shares 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdSharesUrlPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // ShareURLCreateSchema | body
  shareURLCreateSchema: {
    allowApprovingComments: true,
    allowComments: true,
    allowCustomActions: true,
    allowDownload: true,
    allowDownloadProxy: true,
    allowSettingApproveStatus: true,
    allowUpload: true,
    allowUserSearchForMentions: true,
    allowViewTranscriptions: true,
    allowViewVersions: true,
    expires: new Date('1970-01-01T00:00:00.00Z'),
    metadataViews: [
      "metadataViews_example",
    ],
    objectId: "objectId_example",
    objectType: "objectType_example",
    ownerId: "ownerId_example",
    password: "password_example",
    systemDomainId: "systemDomainId_example",
    title: "title_example",
    uploadStorageId: "uploadStorageId_example",
  },
};

apiInstance.assetsV1ObjectTypeObjectIdSharesUrlPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shareURLCreateSchema** | **ShareURLCreateSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined


### Return type

**ShareURLSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a URL link in the body of the response that can be shared and used to access the object |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Shares are restricted by system administator |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGet**
> ApprovalsBySchema assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGet()

 Required roles:  - can_read_approval_request 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // string
  versionId: "version_id_example",
};

apiInstance.assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined


### Return type

**ApprovalsBySchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a objects approval |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGet**
> ApprovalSchema assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGet()

 Required roles:  - can_read_approval_request 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // string
  versionId: "version_id_example",
};

apiInstance.assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined


### Return type

**ApprovalSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a objects approval |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1SegmentsReindexPost**
> void assetsV1SegmentsReindexPost(reindexSegmentsSchema)

 Required roles:  - can_reindex_segments 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1SegmentsReindexPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // ReindexSegmentsSchema | body
  reindexSegmentsSchema: {
    ignoreComments: true,
    realms: [
      "realms_example",
    ],
    segmentIds: [
      "segmentIds_example",
    ],
    syncToAnotherDc: true,
  },
};

apiInstance.assetsV1SegmentsReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reindexSegmentsSchema** | **ReindexSegmentsSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ID and status of the job |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1ShareObjectTypePost**
> ShareSchema assetsV1ShareObjectTypePost(bulkShareCreateSchema)

 Required roles:  - can_write_shares 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1ShareObjectTypePostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // BulkShareCreateSchema | body
  bulkShareCreateSchema: {
    allowApprovingComments: true,
    allowComments: true,
    allowCustomActions: true,
    allowDownload: true,
    allowDownloadProxy: true,
    allowSettingApproveStatus: true,
    allowUpload: true,
    allowUserSearchForMentions: true,
    allowViewTranscriptions: true,
    allowViewVersions: true,
    appId: "appId_example",
    emails: [
      "emails_example",
    ],
    expires: new Date('1970-01-01T00:00:00.00Z'),
    message: "message_example",
    metadataViews: [
      "metadataViews_example",
    ],
    objectIds: [
      "objectIds_example",
    ],
    password: "password_example",
    shareByUrl: true,
    systemDomainId: "systemDomainId_example",
    title: "title_example",
    uploadStorageId: "uploadStorageId_example",
  },
};

apiInstance.assetsV1ShareObjectTypePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkShareCreateSchema** | **BulkShareCreateSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined


### Return type

**ShareSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created share |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Shares are restricted by system administator |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1SharesAuthLoginPost**
> ShareTokenSchema assetsV1SharesAuthLoginPost(shareLoginSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1SharesAuthLoginPostRequest = {
  // string
  appID: "App-ID_example",
  // ShareLoginSchema | body
  shareLoginSchema: {
    hash: "hash_example",
    objectId: "objectId_example",
    objectType: "objectType_example",
    password: "password_example",
  },
};

apiInstance.assetsV1SharesAuthLoginPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shareLoginSchema** | **ShareLoginSchema**| body |
 **appID** | [**string**] |  | defaults to undefined


### Return type

**ShareTokenSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a token |  -  |
**400** | Bad request |  -  |
**404** | Share does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1SharesAuthTokenGet**
> ShareTokenSchema assetsV1SharesAuthTokenGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1SharesAuthTokenGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  shareAuthToken: "Share-Auth-Token_example",
};

apiInstance.assetsV1SharesAuthTokenGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **shareAuthToken** | [**string**] |  | defaults to undefined


### Return type

**ShareTokenSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated share |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Share does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assetsV1SharesAuthTokenPut**
> ShareTokenSchema assetsV1SharesAuthTokenPut()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AssetsApi(configuration);

let body:iconik.AssetsApiAssetsV1SharesAuthTokenPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  shareAuthToken: "Share-Auth-Token_example",
};

apiInstance.assetsV1SharesAuthTokenPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **shareAuthToken** | [**string**] |  | defaults to undefined


### Return type

**ShareTokenSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a newly generated token |  -  |
**400** | Bad request |  -  |
**404** | Share does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


