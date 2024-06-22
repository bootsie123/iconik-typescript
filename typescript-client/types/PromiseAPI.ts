import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ACLSchema } from '../models/ACLSchema';
import { ACLTemplateSchema } from '../models/ACLTemplateSchema';
import { ACLTemplatesSchema } from '../models/ACLTemplatesSchema';
import { ACLsSchema } from '../models/ACLsSchema';
import { AbortStorageTranscodeJobsSchema } from '../models/AbortStorageTranscodeJobsSchema';
import { AclsV1AclPostDefaultResponse } from '../models/AclsV1AclPostDefaultResponse';
import { AclsV1AclPostDefaultResponseOneOf } from '../models/AclsV1AclPostDefaultResponseOneOf';
import { AclsV1AclPostDefaultResponseOneOf1 } from '../models/AclsV1AclPostDefaultResponseOneOf1';
import { ActionContextSchema } from '../models/ActionContextSchema';
import { ActionContextValue } from '../models/ActionContextValue';
import { ActionContextValueSchema } from '../models/ActionContextValueSchema';
import { AllowedIPSchema } from '../models/AllowedIPSchema';
import { AnalysisAmazonRekognitionSettingsSchema } from '../models/AnalysisAmazonRekognitionSettingsSchema';
import { AnalysisGoogleAISettingsSchema } from '../models/AnalysisGoogleAISettingsSchema';
import { AnalysisIconikSettingsSchema } from '../models/AnalysisIconikSettingsSchema';
import { AnalysisProfileAmazonRekognitionSettingsSchema } from '../models/AnalysisProfileAmazonRekognitionSettingsSchema';
import { AnalysisProfileGoogleVideoIntelligenceSettingsSchema } from '../models/AnalysisProfileGoogleVideoIntelligenceSettingsSchema';
import { AnalysisProfileGoogleVisionSettingsSchema } from '../models/AnalysisProfileGoogleVisionSettingsSchema';
import { AnalysisProfileIconikFaceRecognitionSettingsSchema } from '../models/AnalysisProfileIconikFaceRecognitionSettingsSchema';
import { AnalysisProfileSchema } from '../models/AnalysisProfileSchema';
import { AnalysisProfileServiceIdSchema } from '../models/AnalysisProfileServiceIdSchema';
import { AnalysisProfileSettingsSchema } from '../models/AnalysisProfileSettingsSchema';
import { AnalysisProfilesSchema } from '../models/AnalysisProfilesSchema';
import { AnalysisRevAISettingsSchema } from '../models/AnalysisRevAISettingsSchema';
import { AnalysisServiceAccountReadSchema } from '../models/AnalysisServiceAccountReadSchema';
import { AnalysisServiceAccountSchema } from '../models/AnalysisServiceAccountSchema';
import { AnalysisServiceAccountsSchema } from '../models/AnalysisServiceAccountsSchema';
import { AnalyzeSchema } from '../models/AnalyzeSchema';
import { AppSchema } from '../models/AppSchema';
import { ApprovalBySchema } from '../models/ApprovalBySchema';
import { ApprovalSchema } from '../models/ApprovalSchema';
import { ApprovalsBySchema } from '../models/ApprovalsBySchema';
import { ApprovedAppInstanceSchema } from '../models/ApprovedAppInstanceSchema';
import { AppsSchema } from '../models/AppsSchema';
import { AssetBaseSchema } from '../models/AssetBaseSchema';
import { AssetBatchExportItemSchema } from '../models/AssetBatchExportItemSchema';
import { AssetBatchExportSchema } from '../models/AssetBatchExportSchema';
import { AssetCreateSchema } from '../models/AssetCreateSchema';
import { AssetEditSchema } from '../models/AssetEditSchema';
import { AssetElasticSchema } from '../models/AssetElasticSchema';
import { AssetExportSchema } from '../models/AssetExportSchema';
import { AssetHistoryBaseSchema } from '../models/AssetHistoryBaseSchema';
import { AssetHistoryBulkSchema } from '../models/AssetHistoryBulkSchema';
import { AssetHistoryElasticSchema } from '../models/AssetHistoryElasticSchema';
import { AssetHistoryEntitiesSchema } from '../models/AssetHistoryEntitiesSchema';
import { AssetHistorySchema } from '../models/AssetHistorySchema';
import { AssetLinkData } from '../models/AssetLinkData';
import { AssetLinkProxySchema } from '../models/AssetLinkProxySchema';
import { AssetLinkURLSchema } from '../models/AssetLinkURLSchema';
import { AssetOrCollectionSchema } from '../models/AssetOrCollectionSchema';
import { AssetSchema } from '../models/AssetSchema';
import { AssetSubclipKeyframesSchema } from '../models/AssetSubclipKeyframesSchema';
import { AssetTranscriptionFromSubtitleSchema } from '../models/AssetTranscriptionFromSubtitleSchema';
import { AssetTranscriptionPropertiesSchema } from '../models/AssetTranscriptionPropertiesSchema';
import { AssetTranscriptionsPropertiesSchema } from '../models/AssetTranscriptionsPropertiesSchema';
import { AssetUsageSchema } from '../models/AssetUsageSchema';
import { AssetUsagesElasticSchema } from '../models/AssetUsagesElasticSchema';
import { AssetUsagesSchema } from '../models/AssetUsagesSchema';
import { AssetVersion } from '../models/AssetVersion';
import { AssetVersionSchema } from '../models/AssetVersionSchema';
import { AssetVersionsSchema } from '../models/AssetVersionsSchema';
import { AssetsHistoryQueryParamsSchema } from '../models/AssetsHistoryQueryParamsSchema';
import { AssetsQueryParamsSchema } from '../models/AssetsQueryParamsSchema';
import { AssetsSchema } from '../models/AssetsSchema';
import { Auth0SettingsSchema } from '../models/Auth0SettingsSchema';
import { AuthV1AuthSamlLoginPost200Response } from '../models/AuthV1AuthSamlLoginPost200Response';
import { AuthV1AuthSamlLogoutPublicIdPost200Response } from '../models/AuthV1AuthSamlLogoutPublicIdPost200Response';
import { AuthV1SystemDomainsSystemDomainIdLogoPost201Response } from '../models/AuthV1SystemDomainsSystemDomainIdLogoPost201Response';
import { AuthV1SystemDomainsSystemDomainIdLogoPostRequest } from '../models/AuthV1SystemDomainsSystemDomainIdLogoPostRequest';
import { AzureSettingsSchema } from '../models/AzureSettingsSchema';
import { B2SettingsSchema } from '../models/B2SettingsSchema';
import { BaseExportSchema } from '../models/BaseExportSchema';
import { BaseQueryParamsSchema } from '../models/BaseQueryParamsSchema';
import { BaseQueryParamsSchema1 } from '../models/BaseQueryParamsSchema1';
import { BillingCreditsSchema } from '../models/BillingCreditsSchema';
import { BillingCreditsVerifySchema } from '../models/BillingCreditsVerifySchema';
import { BillingCustomerCardSchema } from '../models/BillingCustomerCardSchema';
import { BillingCustomerSchema } from '../models/BillingCustomerSchema';
import { BillingCustomerShipping } from '../models/BillingCustomerShipping';
import { BillingCustomerShippingAddress } from '../models/BillingCustomerShippingAddress';
import { BillingCustomerShippingAddressSchema } from '../models/BillingCustomerShippingAddressSchema';
import { BillingCustomerShippingSchema } from '../models/BillingCustomerShippingSchema';
import { BillingReceiptSchema } from '../models/BillingReceiptSchema';
import { BillingRecipientsSchema } from '../models/BillingRecipientsSchema';
import { BillingSchema } from '../models/BillingSchema';
import { BillingSettingsSchema } from '../models/BillingSettingsSchema';
import { BillingStatsSchema } from '../models/BillingStatsSchema';
import { BillingsSchema } from '../models/BillingsSchema';
import { BulkACLSchema } from '../models/BulkACLSchema';
import { BulkACLsObjectSchema } from '../models/BulkACLsObjectSchema';
import { BulkActionSchema } from '../models/BulkActionSchema';
import { BulkAddToFavoritesSchema } from '../models/BulkAddToFavoritesSchema';
import { BulkAnalyzeSchema } from '../models/BulkAnalyzeSchema';
import { BulkAssetEditSchema } from '../models/BulkAssetEditSchema';
import { BulkAssetIdsWithFiles } from '../models/BulkAssetIdsWithFiles';
import { BulkAssetVersionEditSchema } from '../models/BulkAssetVersionEditSchema';
import { BulkCheckAssetHasFilesSchema } from '../models/BulkCheckAssetHasFilesSchema';
import { BulkCollectionACLsUpdateSchema } from '../models/BulkCollectionACLsUpdateSchema';
import { BulkCollectionActionSchema } from '../models/BulkCollectionActionSchema';
import { BulkCollectionAnalyzeSchema } from '../models/BulkCollectionAnalyzeSchema';
import { BulkCollectionDeleteSchema } from '../models/BulkCollectionDeleteSchema';
import { BulkCollectionFaceExtractionSchema } from '../models/BulkCollectionFaceExtractionSchema';
import { BulkCollectionMetadataUpdateSchema } from '../models/BulkCollectionMetadataUpdateSchema';
import { BulkCollectionTranscodeSchema } from '../models/BulkCollectionTranscodeSchema';
import { BulkCollectionTranscribeSchema } from '../models/BulkCollectionTranscribeSchema';
import { BulkCollectionTransferSchema } from '../models/BulkCollectionTransferSchema';
import { BulkCreateSegmentsSchema } from '../models/BulkCreateSegmentsSchema';
import { BulkCreateShareACLs } from '../models/BulkCreateShareACLs';
import { BulkDeleteFromFavoritesSchema } from '../models/BulkDeleteFromFavoritesSchema';
import { BulkDeleteSchema } from '../models/BulkDeleteSchema';
import { BulkDeleteShareACLs } from '../models/BulkDeleteShareACLs';
import { BulkFilesetArchiveSchema } from '../models/BulkFilesetArchiveSchema';
import { BulkFilesetExportSchema } from '../models/BulkFilesetExportSchema';
import { BulkFilesetRestoreSchema } from '../models/BulkFilesetRestoreSchema';
import { BulkMetadataCopySchema } from '../models/BulkMetadataCopySchema';
import { BulkMetadataDeleteSchema } from '../models/BulkMetadataDeleteSchema';
import { BulkRemoveApprovalSchema } from '../models/BulkRemoveApprovalSchema';
import { BulkSavedSearchActionSchema } from '../models/BulkSavedSearchActionSchema';
import { BulkSavedSearchFaceExtractionSchema } from '../models/BulkSavedSearchFaceExtractionSchema';
import { BulkSavedSearchFilesDeleteSchema } from '../models/BulkSavedSearchFilesDeleteSchema';
import { BulkSavedSearchMetadataUpdateSchema } from '../models/BulkSavedSearchMetadataUpdateSchema';
import { BulkSavedSearchObjectsACLUpdateSchema } from '../models/BulkSavedSearchObjectsACLUpdateSchema';
import { BulkSavedSearchObjectsAnalyzeSchema } from '../models/BulkSavedSearchObjectsAnalyzeSchema';
import { BulkSavedSearchObjectsDeleteSchema } from '../models/BulkSavedSearchObjectsDeleteSchema';
import { BulkSavedSearchObjectsSetApprovalSchema } from '../models/BulkSavedSearchObjectsSetApprovalSchema';
import { BulkSavedSearchObjectsTranscodeSchema } from '../models/BulkSavedSearchObjectsTranscodeSchema';
import { BulkSavedSearchObjectsTranscribeSchema } from '../models/BulkSavedSearchObjectsTranscribeSchema';
import { BulkSavedSearchObjectsTransferSchema } from '../models/BulkSavedSearchObjectsTransferSchema';
import { BulkSetApprovalSchema } from '../models/BulkSetApprovalSchema';
import { BulkShareCreateSchema } from '../models/BulkShareCreateSchema';
import { BulkTranscodeSchema } from '../models/BulkTranscodeSchema';
import { BulkTranscribeSchema } from '../models/BulkTranscribeSchema';
import { BulkTransferSchema } from '../models/BulkTransferSchema';
import { BulkTransferToStorageSchema } from '../models/BulkTransferToStorageSchema';
import { CORSHostSchema } from '../models/CORSHostSchema';
import { CORSHostsSchema } from '../models/CORSHostsSchema';
import { CheckAssetHasFiles } from '../models/CheckAssetHasFiles';
import { CheckAssetHasFilesSchema } from '../models/CheckAssetHasFilesSchema';
import { CheckBulkACLsSchema } from '../models/CheckBulkACLsSchema';
import { CollectionBaseSchema } from '../models/CollectionBaseSchema';
import { CollectionContentInfoSchema } from '../models/CollectionContentInfoSchema';
import { CollectionContentOrderingSchema } from '../models/CollectionContentOrderingSchema';
import { CollectionContentQueryParamsSchema } from '../models/CollectionContentQueryParamsSchema';
import { CollectionContentSchema } from '../models/CollectionContentSchema';
import { CollectionElastic } from '../models/CollectionElastic';
import { CollectionElasticSchema } from '../models/CollectionElasticSchema';
import { CollectionExportSchema } from '../models/CollectionExportSchema';
import { CollectionInputSchema } from '../models/CollectionInputSchema';
import { CollectionKeyframeCreateSchema } from '../models/CollectionKeyframeCreateSchema';
import { CollectionKeyframeSchema } from '../models/CollectionKeyframeSchema';
import { CollectionKeyframeUpdateSchema } from '../models/CollectionKeyframeUpdateSchema';
import { CollectionKeyframesSchema } from '../models/CollectionKeyframesSchema';
import { CollectionMetadataValuesBatchSchema } from '../models/CollectionMetadataValuesBatchSchema';
import { CollectionSchema } from '../models/CollectionSchema';
import { CollectionSizeSchema } from '../models/CollectionSizeSchema';
import { CollectionUsageSchema } from '../models/CollectionUsageSchema';
import { CollectionUsagesElasticSchema } from '../models/CollectionUsagesElasticSchema';
import { CollectionUsagesSchema } from '../models/CollectionUsagesSchema';
import { CollectionsQueryParamsSchema } from '../models/CollectionsQueryParamsSchema';
import { CollectionsSchema } from '../models/CollectionsSchema';
import { CombinedPermissionsSchema } from '../models/CombinedPermissionsSchema';
import { CompleteExportToLocalStorageSchema } from '../models/CompleteExportToLocalStorageSchema';
import { ComponentSchema } from '../models/ComponentSchema';
import { ComponentsSchema } from '../models/ComponentsSchema';
import { CopyInheritedACLSchema } from '../models/CopyInheritedACLSchema';
import { CopySourceQueryParamsSchema } from '../models/CopySourceQueryParamsSchema';
import { CountriesSchema } from '../models/CountriesSchema';
import { Country } from '../models/Country';
import { CountrySchema } from '../models/CountrySchema';
import { CreateACLsResultSchema } from '../models/CreateACLsResultSchema';
import { CreateACLsSchema } from '../models/CreateACLsSchema';
import { CreateAssetVersionFromAssetSchema } from '../models/CreateAssetVersionFromAssetSchema';
import { CreateAssetVersionFromVersionSchema } from '../models/CreateAssetVersionFromVersionSchema';
import { CreateAssetVersionSchema } from '../models/CreateAssetVersionSchema';
import { CreateBulkACLsSchema } from '../models/CreateBulkACLsSchema';
import { CreateCollectionContentOrderingSchema } from '../models/CreateCollectionContentOrderingSchema';
import { CreateMetadataValuesBatchSchema } from '../models/CreateMetadataValuesBatchSchema';
import { CreateShareACLsSchema } from '../models/CreateShareACLsSchema';
import { CreditsSchema } from '../models/CreditsSchema';
import { CriteriaFilterSchema } from '../models/CriteriaFilterSchema';
import { CriteriaRangeFilter } from '../models/CriteriaRangeFilter';
import { CriteriaRangeFilterSchema } from '../models/CriteriaRangeFilterSchema';
import { CriteriaSortSchema } from '../models/CriteriaSortSchema';
import { CriteriaTerm } from '../models/CriteriaTerm';
import { CriteriaTermSchema } from '../models/CriteriaTermSchema';
import { CustomActionCallbackReplySchema } from '../models/CustomActionCallbackReplySchema';
import { CustomActionCallbackSchema } from '../models/CustomActionCallbackSchema';
import { CustomActionSchema } from '../models/CustomActionSchema';
import { CustomActionsSchema } from '../models/CustomActionsSchema';
import { CustomSettingsSchema } from '../models/CustomSettingsSchema';
import { DateFilterSchema } from '../models/DateFilterSchema';
import { DefaultShareOptionsTypeSchema } from '../models/DefaultShareOptionsTypeSchema';
import { DeleteACLsSchema } from '../models/DeleteACLsSchema';
import { DeleteBulkACLsSchema } from '../models/DeleteBulkACLsSchema';
import { DeleteQueueAssetsQueryParamsSchema } from '../models/DeleteQueueAssetsQueryParamsSchema';
import { DeleteQueueCollectionsQueryParamsSchema } from '../models/DeleteQueueCollectionsQueryParamsSchema';
import { DeleteQueueFileSetsQueryParamsSchema } from '../models/DeleteQueueFileSetsQueryParamsSchema';
import { DeleteQueueFormatsQueryParamsSchema } from '../models/DeleteQueueFormatsQueryParamsSchema';
import { DeleteQueueSchema } from '../models/DeleteQueueSchema';
import { DeleteSegmentsSchema } from '../models/DeleteSegmentsSchema';
import { DiscoveryEntitiesSchema } from '../models/DiscoveryEntitiesSchema';
import { DiscoveryEntity } from '../models/DiscoveryEntity';
import { DiscoveryEntitySchema } from '../models/DiscoveryEntitySchema';
import { DiscoveryViewSettingsSchema } from '../models/DiscoveryViewSettingsSchema';
import { DomainIdentityProviderMapSchema } from '../models/DomainIdentityProviderMapSchema';
import { Drawing } from '../models/Drawing';
import { DrawingPoint } from '../models/DrawingPoint';
import { DrawingPointSchema } from '../models/DrawingPointSchema';
import { DrawingPrimitive } from '../models/DrawingPrimitive';
import { DrawingPrimitiveSchema } from '../models/DrawingPrimitiveSchema';
import { DrawingSchema } from '../models/DrawingSchema';
import { EdgeThumbnailJobFieldSchema } from '../models/EdgeThumbnailJobFieldSchema';
import { EdgeTranscodeEndpointSchema } from '../models/EdgeTranscodeEndpointSchema';
import { EdgeTranscodeInputSchema } from '../models/EdgeTranscodeInputSchema';
import { EdgeTranscodeJobFieldSchema } from '../models/EdgeTranscodeJobFieldSchema';
import { EdgeTranscodeJobSchema } from '../models/EdgeTranscodeJobSchema';
import { EdgeTranscodeJobsSchema } from '../models/EdgeTranscodeJobsSchema';
import { EdgeTranscodeWorkerSchema } from '../models/EdgeTranscodeWorkerSchema';
import { EdgeTranscodeWorkersSchema } from '../models/EdgeTranscodeWorkersSchema';
import { EditAssetVersion } from '../models/EditAssetVersion';
import { EditAssetVersionSchema } from '../models/EditAssetVersionSchema';
import { EditProxyResponseSchema } from '../models/EditProxyResponseSchema';
import { EditProxySchema } from '../models/EditProxySchema';
import { EditProxySettingsSchema } from '../models/EditProxySettingsSchema';
import { EditReadyTranscoderSchema } from '../models/EditReadyTranscoderSchema';
import { EditSegmentSchema } from '../models/EditSegmentSchema';
import { ElementalMediaConvertSchema } from '../models/ElementalMediaConvertSchema';
import { ElementalServerSchema } from '../models/ElementalServerSchema';
import { EmailLoginSchema } from '../models/EmailLoginSchema';
import { EncodingComSettingsSchema } from '../models/EncodingComSettingsSchema';
import { EndpointSchema } from '../models/EndpointSchema';
import { ExportLocationSchema } from '../models/ExportLocationSchema';
import { ExportLocationsSchema } from '../models/ExportLocationsSchema';
import { ExternalAuthRequestResponseSchema } from '../models/ExternalAuthRequestResponseSchema';
import { ExternalAuthRequestSchema } from '../models/ExternalAuthRequestSchema';
import { ExternalAuthSchema } from '../models/ExternalAuthSchema';
import { ExternalSourceFieldOptionsSchema } from '../models/ExternalSourceFieldOptionsSchema';
import { FFmpegSettingsSchema } from '../models/FFmpegSettingsSchema';
import { FacetBucketSchema } from '../models/FacetBucketSchema';
import { FacetFieldNamesSchema } from '../models/FacetFieldNamesSchema';
import { FacetFieldSchema } from '../models/FacetFieldSchema';
import { FacetFilterSchema } from '../models/FacetFilterSchema';
import { FacetSchema } from '../models/FacetSchema';
import { FavoritesSchema } from '../models/FavoritesSchema';
import { FieldOptionsSchema } from '../models/FieldOptionsSchema';
import { FileBaseSchema } from '../models/FileBaseSchema';
import { FileCreateSchema } from '../models/FileCreateSchema';
import { FileDeletionFromLocalStorageSchema } from '../models/FileDeletionFromLocalStorageSchema';
import { FileDeletionsSchema } from '../models/FileDeletionsSchema';
import { FileDownloadURLSchema } from '../models/FileDownloadURLSchema';
import { FileElasticSchema } from '../models/FileElasticSchema';
import { FileExistenceCheckSchema } from '../models/FileExistenceCheckSchema';
import { FileSchema } from '../models/FileSchema';
import { FileSetElasticSchema } from '../models/FileSetElasticSchema';
import { FileSetSchema } from '../models/FileSetSchema';
import { FileSetSourceSchema } from '../models/FileSetSourceSchema';
import { FileSetSourcesSchema } from '../models/FileSetSourcesSchema';
import { FileSetsElasticSchema } from '../models/FileSetsElasticSchema';
import { FileSetsSchema } from '../models/FileSetsSchema';
import { FileSettingsSchema } from '../models/FileSettingsSchema';
import { FileShareUploadEditSchema } from '../models/FileShareUploadEditSchema';
import { FilesElasticSchema } from '../models/FilesElasticSchema';
import { FilesSchema } from '../models/FilesSchema';
import { FilesV1StoragesIsgLatestVersionGet200Response } from '../models/FilesV1StoragesIsgLatestVersionGet200Response';
import { FilesV1StoragesStorageIdLogsPost200Response } from '../models/FilesV1StoragesStorageIdLogsPost200Response';
import { FilesV1StoragesStorageIdVerificationsAccessGet200Response } from '../models/FilesV1StoragesStorageIdVerificationsAccessGet200Response';
import { FilesV1StoragesStorageIdVerificationsPermissionsGet200Response } from '../models/FilesV1StoragesStorageIdVerificationsPermissionsGet200Response';
import { FilesetTransferBaseSchema } from '../models/FilesetTransferBaseSchema';
import { ForgotPasswordSchema } from '../models/ForgotPasswordSchema';
import { FormatArchiveSchema } from '../models/FormatArchiveSchema';
import { FormatDeleteArchiveSchema } from '../models/FormatDeleteArchiveSchema';
import { FormatElasticSchema } from '../models/FormatElasticSchema';
import { FormatRestoreSchema } from '../models/FormatRestoreSchema';
import { FormatSchema } from '../models/FormatSchema';
import { FormatsElasticSchema } from '../models/FormatsElasticSchema';
import { FormatsSchema } from '../models/FormatsSchema';
import { FtpSettingsSchema } from '../models/FtpSettingsSchema';
import { GatewayReportSchema } from '../models/GatewayReportSchema';
import { GatewayStatusSchema } from '../models/GatewayStatusSchema';
import { GenerateCollectionKeyframeSchema } from '../models/GenerateCollectionKeyframeSchema';
import { GenericSettingsSchema } from '../models/GenericSettingsSchema';
import { GetAssetsLatestVersionSchema } from '../models/GetAssetsLatestVersionSchema';
import { GlobalSettingsSchema } from '../models/GlobalSettingsSchema';
import { GoogleCloudStorageSettingsSchema } from '../models/GoogleCloudStorageSettingsSchema';
import { GroupACL } from '../models/GroupACL';
import { GroupACL1 } from '../models/GroupACL1';
import { GroupACLSchema } from '../models/GroupACLSchema';
import { GroupBaseSchema } from '../models/GroupBaseSchema';
import { GroupCreateSchema } from '../models/GroupCreateSchema';
import { GroupElasticSchema } from '../models/GroupElasticSchema';
import { GroupIDsSchema } from '../models/GroupIDsSchema';
import { GroupMappingSchema } from '../models/GroupMappingSchema';
import { GroupMappingsSchema } from '../models/GroupMappingsSchema';
import { GroupSchema } from '../models/GroupSchema';
import { GroupSettingPublicSchema } from '../models/GroupSettingPublicSchema';
import { GroupSettingSchema } from '../models/GroupSettingSchema';
import { GroupsQueryParamsSchema } from '../models/GroupsQueryParamsSchema';
import { GroupsSchema } from '../models/GroupsSchema';
import { HttpSettingsSchema } from '../models/HttpSettingsSchema';
import { ISGHandlerURLSchema } from '../models/ISGHandlerURLSchema';
import { IconikEdgeTranscoderSchema } from '../models/IconikEdgeTranscoderSchema';
import { IconikStorageGatewayEventSchema } from '../models/IconikStorageGatewayEventSchema';
import { IconikStorageGatewayEventsPurgeSchema } from '../models/IconikStorageGatewayEventsPurgeSchema';
import { IconikStorageGatewayEventsSchema } from '../models/IconikStorageGatewayEventsSchema';
import { IdentityProviderBaseSchema } from '../models/IdentityProviderBaseSchema';
import { IdentityProviderBaseSettingsSchema } from '../models/IdentityProviderBaseSettingsSchema';
import { IdentityProviderSchema } from '../models/IdentityProviderSchema';
import { IdentityProvidersSchema } from '../models/IdentityProvidersSchema';
import { ImageMagickSettingsSchema } from '../models/ImageMagickSettingsSchema';
import { InheritedACLSchema } from '../models/InheritedACLSchema';
import { InputSchema } from '../models/InputSchema';
import { JobBaseSchema } from '../models/JobBaseSchema';
import { JobBaseSchema1 } from '../models/JobBaseSchema1';
import { JobChildProgressSchema } from '../models/JobChildProgressSchema';
import { JobCreateSchema } from '../models/JobCreateSchema';
import { JobElasticSchema } from '../models/JobElasticSchema';
import { JobSchema } from '../models/JobSchema';
import { JobSchema1 } from '../models/JobSchema1';
import { JobStep } from '../models/JobStep';
import { JobStep1 } from '../models/JobStep1';
import { JobStepElastic } from '../models/JobStepElastic';
import { JobStepElasticSchema } from '../models/JobStepElasticSchema';
import { JobStepSchema } from '../models/JobStepSchema';
import { JobStepSchema1 } from '../models/JobStepSchema1';
import { JobStepUpdateBulkSchema } from '../models/JobStepUpdateBulkSchema';
import { JobStepUpdateSchema } from '../models/JobStepUpdateSchema';
import { JobStepsSchema } from '../models/JobStepsSchema';
import { JobStepsUpdateSchema } from '../models/JobStepsUpdateSchema';
import { JobsBulkActionSchema } from '../models/JobsBulkActionSchema';
import { JobsBulkDeleteSchema } from '../models/JobsBulkDeleteSchema';
import { JobsDashboard } from '../models/JobsDashboard';
import { JobsDashboardSchema } from '../models/JobsDashboardSchema';
import { JobsDashboardWidget } from '../models/JobsDashboardWidget';
import { JobsDashboardWidgetSchema } from '../models/JobsDashboardWidgetSchema';
import { JobsPrioritySchema } from '../models/JobsPrioritySchema';
import { JobsQueryParamsSchema } from '../models/JobsQueryParamsSchema';
import { JobsSchema } from '../models/JobsSchema';
import { JobsStateSchema } from '../models/JobsStateSchema';
import { JobsStateSchema1 } from '../models/JobsStateSchema1';
import { JobsStateSchema2 } from '../models/JobsStateSchema2';
import { JobsWidgetOption } from '../models/JobsWidgetOption';
import { JobsWidgetOptionFilterSchema } from '../models/JobsWidgetOptionFilterSchema';
import { JobsWidgetOptionSchema } from '../models/JobsWidgetOptionSchema';
import { KeyframeBaseSchema } from '../models/KeyframeBaseSchema';
import { KeyframeCreateSchema } from '../models/KeyframeCreateSchema';
import { KeyframeSchema } from '../models/KeyframeSchema';
import { KeyframeUpdateSchema } from '../models/KeyframeUpdateSchema';
import { KeyframesSchema } from '../models/KeyframesSchema';
import { KubernetesSettingSchema } from '../models/KubernetesSettingSchema';
import { ListObjectsSchema } from '../models/ListObjectsSchema';
import { ListObjectsSchema1 } from '../models/ListObjectsSchema1';
import { ListObjectsSchema2 } from '../models/ListObjectsSchema2';
import { ListObjectsSchema3 } from '../models/ListObjectsSchema3';
import { ListObjectsSchema4 } from '../models/ListObjectsSchema4';
import { LocalStorageFileTranscodeJobSchema } from '../models/LocalStorageFileTranscodeJobSchema';
import { LocalStorageFileTranscodeJobsSchema } from '../models/LocalStorageFileTranscodeJobsSchema';
import { LocalTranscodeInputSchema } from '../models/LocalTranscodeInputSchema';
import { LocalTranscodeJobSchema } from '../models/LocalTranscodeJobSchema';
import { LogoURLSchema } from '../models/LogoURLSchema';
import { LogoURLsSchema } from '../models/LogoURLsSchema';
import { LogsRecipientReadSchema } from '../models/LogsRecipientReadSchema';
import { LogsRecipientSchema } from '../models/LogsRecipientSchema';
import { LogsRecipientsSchema } from '../models/LogsRecipientsSchema';
import { MarketplaceGoogleLinkSchema } from '../models/MarketplaceGoogleLinkSchema';
import { MergedSettingsSchema } from '../models/MergedSettingsSchema';
import { MetadataCategoriesSchema } from '../models/MetadataCategoriesSchema';
import { MetadataCategory } from '../models/MetadataCategory';
import { MetadataCategorySchema } from '../models/MetadataCategorySchema';
import { MetadataField } from '../models/MetadataField';
import { MetadataFieldBaseSchema } from '../models/MetadataFieldBaseSchema';
import { MetadataFieldCreateSchema } from '../models/MetadataFieldCreateSchema';
import { MetadataFieldMappingOptionSchema } from '../models/MetadataFieldMappingOptionSchema';
import { MetadataFieldMappingOptionsSchema } from '../models/MetadataFieldMappingOptionsSchema';
import { MetadataFieldMappingSchema } from '../models/MetadataFieldMappingSchema';
import { MetadataFieldMappingUpdateSchema } from '../models/MetadataFieldMappingUpdateSchema';
import { MetadataFieldMappingsSchema } from '../models/MetadataFieldMappingsSchema';
import { MetadataFieldSchema } from '../models/MetadataFieldSchema';
import { MetadataFieldValueSchema } from '../models/MetadataFieldValueSchema';
import { MetadataFieldValueSchema1 } from '../models/MetadataFieldValueSchema1';
import { MetadataFieldsSchema } from '../models/MetadataFieldsSchema';
import { MetadataValuesBatchSchema } from '../models/MetadataValuesBatchSchema';
import { MetadataValuesObjectId } from '../models/MetadataValuesObjectId';
import { MetadataValuesObjectIdSchema } from '../models/MetadataValuesObjectIdSchema';
import { MetadataValuesSchema } from '../models/MetadataValuesSchema';
import { MetadataView } from '../models/MetadataView';
import { MetadataViewFieldSchema } from '../models/MetadataViewFieldSchema';
import { MetadataViewInputSchema } from '../models/MetadataViewInputSchema';
import { MetadataViewSchema } from '../models/MetadataViewSchema';
import { MetadataViewsSchema } from '../models/MetadataViewsSchema';
import { MoveAssetResourceSchema } from '../models/MoveAssetResourceSchema';
import { MultiDomainLoginSchema } from '../models/MultiDomainLoginSchema';
import { MultiDomainUserSystemSchema } from '../models/MultiDomainUserSystemSchema';
import { MultiDomainUserSystemsSchema } from '../models/MultiDomainUserSystemsSchema';
import { MultiPartS3UrlPartSchema } from '../models/MultiPartS3UrlPartSchema';
import { MultiPartS3UrlPartsSchema } from '../models/MultiPartS3UrlPartsSchema';
import { MultiPartURLsSchema } from '../models/MultiPartURLsSchema';
import { MultiPartUploadComposeURLSchema } from '../models/MultiPartUploadComposeURLSchema';
import { MultiPartUploadURLSchema } from '../models/MultiPartUploadURLSchema';
import { MultiPartUploadURLsSchema } from '../models/MultiPartUploadURLsSchema';
import { MultipartB2CancelUpload } from '../models/MultipartB2CancelUpload';
import { MultipartB2FinishUpload } from '../models/MultipartB2FinishUpload';
import { MultipartB2StartUpload } from '../models/MultipartB2StartUpload';
import { MultipartUploadCleanupSchema } from '../models/MultipartUploadCleanupSchema';
import { MultipartUploadComposeSchema } from '../models/MultipartUploadComposeSchema';
import { MultipartUploadProxyCleanupSchema } from '../models/MultipartUploadProxyCleanupSchema';
import { MultipartUploadSchema } from '../models/MultipartUploadSchema';
import { NotificationSchema } from '../models/NotificationSchema';
import { NotificationSettingSchema } from '../models/NotificationSettingSchema';
import { NotificationSettingsSchema } from '../models/NotificationSettingsSchema';
import { NotificationsSchema } from '../models/NotificationsSchema';
import { OktaSettingsSchema } from '../models/OktaSettingsSchema';
import { OneloginSettingsSchema } from '../models/OneloginSettingsSchema';
import { OutputEndpoint } from '../models/OutputEndpoint';
import { OutputEndpointSchema } from '../models/OutputEndpointSchema';
import { PasswordChecksSchema } from '../models/PasswordChecksSchema';
import { PasswordChecksType } from '../models/PasswordChecksType';
import { PasswordChecksTypeSchema } from '../models/PasswordChecksTypeSchema';
import { PortalSettingsSchema } from '../models/PortalSettingsSchema';
import { PriceSchema } from '../models/PriceSchema';
import { PricesSchema } from '../models/PricesSchema';
import { PrioDir } from '../models/PrioDir';
import { PrioDirSchema } from '../models/PrioDirSchema';
import { ProxiesSchema } from '../models/ProxiesSchema';
import { Proxy } from '../models/Proxy';
import { ProxyBaseSchema } from '../models/ProxyBaseSchema';
import { ProxyCreateSchema } from '../models/ProxyCreateSchema';
import { ProxyDownloadURLSchema } from '../models/ProxyDownloadURLSchema';
import { ProxySchema } from '../models/ProxySchema';
import { ProxyUpdateSchema } from '../models/ProxyUpdateSchema';
import { RedirectInfoType } from '../models/RedirectInfoType';
import { RedirectInfoTypeSchema } from '../models/RedirectInfoTypeSchema';
import { RedlineSchema } from '../models/RedlineSchema';
import { ReferralCodeSchema } from '../models/ReferralCodeSchema';
import { ReferralCodesSchema } from '../models/ReferralCodesSchema';
import { RegistrationSchema } from '../models/RegistrationSchema';
import { ReindexAllAssetsSchema } from '../models/ReindexAllAssetsSchema';
import { ReindexAllCollectionsSchema } from '../models/ReindexAllCollectionsSchema';
import { ReindexAllSegmentsSchema } from '../models/ReindexAllSegmentsSchema';
import { ReindexAssetHistorySchema } from '../models/ReindexAssetHistorySchema';
import { ReindexAssetSchema } from '../models/ReindexAssetSchema';
import { ReindexCollectionContentSchema } from '../models/ReindexCollectionContentSchema';
import { ReindexCollectionSchema } from '../models/ReindexCollectionSchema';
import { ReindexExportLocationSchema } from '../models/ReindexExportLocationSchema';
import { ReindexFileSchema } from '../models/ReindexFileSchema';
import { ReindexFileSetSchema } from '../models/ReindexFileSetSchema';
import { ReindexFormatSchema } from '../models/ReindexFormatSchema';
import { ReindexGroupSchema } from '../models/ReindexGroupSchema';
import { ReindexInheritedCollectionsACLSchema } from '../models/ReindexInheritedCollectionsACLSchema';
import { ReindexJobSchema } from '../models/ReindexJobSchema';
import { ReindexPropagatingACLSchema } from '../models/ReindexPropagatingACLSchema';
import { ReindexQueueRecordSchema } from '../models/ReindexQueueRecordSchema';
import { ReindexSavedSearchGroupSchema } from '../models/ReindexSavedSearchGroupSchema';
import { ReindexSavedSearchSchema } from '../models/ReindexSavedSearchSchema';
import { ReindexSegmentSchema } from '../models/ReindexSegmentSchema';
import { ReindexSegmentsSchema } from '../models/ReindexSegmentsSchema';
import { ReindexStorageSchema } from '../models/ReindexStorageSchema';
import { ReindexTranscoderSchema } from '../models/ReindexTranscoderSchema';
import { ReindexUserSchema } from '../models/ReindexUserSchema';
import { RelatedObject } from '../models/RelatedObject';
import { RelatedObjectSchema } from '../models/RelatedObjectSchema';
import { RelationElastic } from '../models/RelationElastic';
import { RelationElasticSchema } from '../models/RelationElasticSchema';
import { RelationSchema } from '../models/RelationSchema';
import { RelationTypeSchema } from '../models/RelationTypeSchema';
import { RelationTypesSchema } from '../models/RelationTypesSchema';
import { RelationsQueryParamsSchema } from '../models/RelationsQueryParamsSchema';
import { RelationsSchema } from '../models/RelationsSchema';
import { ResetPasswordSchema } from '../models/ResetPasswordSchema';
import { ResolutionType } from '../models/ResolutionType';
import { ResolutionTypeSchema } from '../models/ResolutionTypeSchema';
import { RoleCategories } from '../models/RoleCategories';
import { RoleCategoriesSchema } from '../models/RoleCategoriesSchema';
import { S3SettingsSchema } from '../models/S3SettingsSchema';
import { SAMLLoginSchema } from '../models/SAMLLoginSchema';
import { SavedSearch } from '../models/SavedSearch';
import { SavedSearchElasticSchema } from '../models/SavedSearchElasticSchema';
import { SavedSearchGroupQueryParamsSchema } from '../models/SavedSearchGroupQueryParamsSchema';
import { SavedSearchGroupSchema } from '../models/SavedSearchGroupSchema';
import { SavedSearchGroupsSchema } from '../models/SavedSearchGroupsSchema';
import { SavedSearchQueryParamsSchema } from '../models/SavedSearchQueryParamsSchema';
import { SavedSearchResultsSchema } from '../models/SavedSearchResultsSchema';
import { SavedSearchSchema } from '../models/SavedSearchSchema';
import { SavedSearchesSchema } from '../models/SavedSearchesSchema';
import { SearchCriteria } from '../models/SearchCriteria';
import { SearchCriteriaSchema } from '../models/SearchCriteriaSchema';
import { SearchDisplayField } from '../models/SearchDisplayField';
import { SearchDisplayFieldSchema } from '../models/SearchDisplayFieldSchema';
import { SearchDocument } from '../models/SearchDocument';
import { SearchDocumentInputSchema } from '../models/SearchDocumentInputSchema';
import { SearchDocumentSchema } from '../models/SearchDocumentSchema';
import { SearchDocumentsSchema } from '../models/SearchDocumentsSchema';
import { SearchHistory } from '../models/SearchHistory';
import { SearchHistoryListSchema } from '../models/SearchHistoryListSchema';
import { SearchHistorySchema } from '../models/SearchHistorySchema';
import { SearchQueryParamsSchema } from '../models/SearchQueryParamsSchema';
import { SearchSuggestResponseSchema } from '../models/SearchSuggestResponseSchema';
import { SearchSuggestSchema } from '../models/SearchSuggestSchema';
import { SearchSuggestsResponseSchema } from '../models/SearchSuggestsResponseSchema';
import { Segment } from '../models/Segment';
import { SegmentBaseSchema } from '../models/SegmentBaseSchema';
import { SegmentElasticSchema } from '../models/SegmentElasticSchema';
import { SegmentQueryParamsSchema } from '../models/SegmentQueryParamsSchema';
import { SegmentSchema } from '../models/SegmentSchema';
import { SegmentsCopyMapping } from '../models/SegmentsCopyMapping';
import { SegmentsCopyMappingSchema } from '../models/SegmentsCopyMappingSchema';
import { SegmentsSchema } from '../models/SegmentsSchema';
import { SftpSettingsSchema } from '../models/SftpSettingsSchema';
import { ShareACLSchema } from '../models/ShareACLSchema';
import { ShareBaseSchema } from '../models/ShareBaseSchema';
import { ShareCreateSchema } from '../models/ShareCreateSchema';
import { ShareLoginSchema } from '../models/ShareLoginSchema';
import { ShareRoles } from '../models/ShareRoles';
import { ShareSchema } from '../models/ShareSchema';
import { ShareTokenSchema } from '../models/ShareTokenSchema';
import { ShareURLCreateSchema } from '../models/ShareURLCreateSchema';
import { ShareURLSchema } from '../models/ShareURLSchema';
import { ShareUserSchema } from '../models/ShareUserSchema';
import { ShareUsersSchema } from '../models/ShareUsersSchema';
import { SharesACLSchema } from '../models/SharesACLSchema';
import { SharesSchema } from '../models/SharesSchema';
import { SimpleLoginSchema } from '../models/SimpleLoginSchema';
import { Sort } from '../models/Sort';
import { SortSchema } from '../models/SortSchema';
import { SpecifiedKeyframes } from '../models/SpecifiedKeyframes';
import { SpecifiedKeyframesSchema } from '../models/SpecifiedKeyframesSchema';
import { StatsV1SystemLogsRecipientsLogsRecipientIdPost200Response } from '../models/StatsV1SystemLogsRecipientsLogsRecipientIdPost200Response';
import { StorageAccessElasticSchema } from '../models/StorageAccessElasticSchema';
import { StorageAccessSchema } from '../models/StorageAccessSchema';
import { StorageAccessesSchema } from '../models/StorageAccessesSchema';
import { StorageAutoScanSchema } from '../models/StorageAutoScanSchema';
import { StorageFileSchema } from '../models/StorageFileSchema';
import { StorageFileUpdateSchema } from '../models/StorageFileUpdateSchema';
import { StorageFilesDeleteBulkSchema } from '../models/StorageFilesDeleteBulkSchema';
import { StorageFilesQueryParamsSchema } from '../models/StorageFilesQueryParamsSchema';
import { StoragePrivateDataSchema } from '../models/StoragePrivateDataSchema';
import { StorageReadSchema } from '../models/StorageReadSchema';
import { StorageScanSchema } from '../models/StorageScanSchema';
import { StorageSchema } from '../models/StorageSchema';
import { StorageUsageSchema } from '../models/StorageUsageSchema';
import { StorageUsagesElasticSchema } from '../models/StorageUsagesElasticSchema';
import { StorageUsagesSchema } from '../models/StorageUsagesSchema';
import { StoragesQueryParamsSchema } from '../models/StoragesQueryParamsSchema';
import { StoragesReadSchema } from '../models/StoragesReadSchema';
import { SubscriptionSchema } from '../models/SubscriptionSchema';
import { SubscriptionsSchema } from '../models/SubscriptionsSchema';
import { Subtitle } from '../models/Subtitle';
import { SubtitleRequestSchema } from '../models/SubtitleRequestSchema';
import { SubtitleSchema } from '../models/SubtitleSchema';
import { SubtitlesSchema } from '../models/SubtitlesSchema';
import { SynchronizeCollectionKeyframesSchema } from '../models/SynchronizeCollectionKeyframesSchema';
import { SystemDomainFromReferralCodeSchema } from '../models/SystemDomainFromReferralCodeSchema';
import { SystemDomainFromTemplateSchema } from '../models/SystemDomainFromTemplateSchema';
import { SystemDomainSchema } from '../models/SystemDomainSchema';
import { SystemDomainSuperAdminSchema } from '../models/SystemDomainSuperAdminSchema';
import { SystemDomainsSchema } from '../models/SystemDomainsSchema';
import { SystemNotificationSchema } from '../models/SystemNotificationSchema';
import { SystemSettingPublicSchema } from '../models/SystemSettingPublicSchema';
import { SystemSettingSchema } from '../models/SystemSettingSchema';
import { TelestreamCloudSchema } from '../models/TelestreamCloudSchema';
import { TemporaryFileCreateSchema } from '../models/TemporaryFileCreateSchema';
import { TemporaryFileSetSchema } from '../models/TemporaryFileSetSchema';
import { TemporaryPasswordTokenSchema } from '../models/TemporaryPasswordTokenSchema';
import { ThumbnailJob } from '../models/ThumbnailJob';
import { ThumbnailJobSchema } from '../models/ThumbnailJobSchema';
import { TimeBaseType } from '../models/TimeBaseType';
import { TimeBaseTypeSchema } from '../models/TimeBaseTypeSchema';
import { TimeCodeType } from '../models/TimeCodeType';
import { TimeCodeTypeSchema } from '../models/TimeCodeTypeSchema';
import { TokenBaseSchema } from '../models/TokenBaseSchema';
import { TokenOutputSchema } from '../models/TokenOutputSchema';
import { TokenSchema } from '../models/TokenSchema';
import { TokensSchema } from '../models/TokensSchema';
import { TranscodeESQueueRecordsSchema } from '../models/TranscodeESQueueRecordsSchema';
import { TranscodeElasticQueueRecord } from '../models/TranscodeElasticQueueRecord';
import { TranscodeElasticQueueRecordSchema } from '../models/TranscodeElasticQueueRecordSchema';
import { TranscodeJob } from '../models/TranscodeJob';
import { TranscodeJobSchema } from '../models/TranscodeJobSchema';
import { TranscodeQueueObjectSchema } from '../models/TranscodeQueueObjectSchema';
import { TranscodeQueueRecordSchema } from '../models/TranscodeQueueRecordSchema';
import { TranscodeQueueSchema } from '../models/TranscodeQueueSchema';
import { TranscodeRequestSchema } from '../models/TranscodeRequestSchema';
import { TranscodeResponseSchema } from '../models/TranscodeResponseSchema';
import { TranscodeValidateMediaInfoSchema } from '../models/TranscodeValidateMediaInfoSchema';
import { TranscoderByStorageReadSchema } from '../models/TranscoderByStorageReadSchema';
import { TranscoderReadSchema } from '../models/TranscoderReadSchema';
import { TranscoderSchema } from '../models/TranscoderSchema';
import { TranscoderUsageSchema } from '../models/TranscoderUsageSchema';
import { TranscoderUsagesElasticSchema } from '../models/TranscoderUsagesElasticSchema';
import { TranscoderUsagesSchema } from '../models/TranscoderUsagesSchema';
import { Transcoders } from '../models/Transcoders';
import { TranscodersByStorageSchema } from '../models/TranscodersByStorageSchema';
import { TranscodersQueryParamsSchema } from '../models/TranscodersQueryParamsSchema';
import { TranscodersSchema } from '../models/TranscodersSchema';
import { TranscodersSchema1 } from '../models/TranscodersSchema1';
import { TranscribeSchema } from '../models/TranscribeSchema';
import { TranscriptionElementType } from '../models/TranscriptionElementType';
import { TranscriptionElementTypeSchema } from '../models/TranscriptionElementTypeSchema';
import { TranscriptionType } from '../models/TranscriptionType';
import { TranscriptionTypeSchema } from '../models/TranscriptionTypeSchema';
import { TransferCloudSchema } from '../models/TransferCloudSchema';
import { TransferFromStorageReadSchema } from '../models/TransferFromStorageReadSchema';
import { TransferFromStorageSchema } from '../models/TransferFromStorageSchema';
import { TransferSignedURLSchema } from '../models/TransferSignedURLSchema';
import { TransferStatsSchema } from '../models/TransferStatsSchema';
import { TransferToStorageReadSchema } from '../models/TransferToStorageReadSchema';
import { TransferToStorageSchema } from '../models/TransferToStorageSchema';
import { TransfersFromStorageSchema } from '../models/TransfersFromStorageSchema';
import { TransfersToStorageSchema } from '../models/TransfersToStorageSchema';
import { UnpublishedUserAuditSchema } from '../models/UnpublishedUserAuditSchema';
import { UploadIconikStorageGatewayLogsSchema } from '../models/UploadIconikStorageGatewayLogsSchema';
import { User } from '../models/User';
import { UserACL } from '../models/UserACL';
import { UserACL1 } from '../models/UserACL1';
import { UserACLSchema } from '../models/UserACLSchema';
import { UserAuditSchema } from '../models/UserAuditSchema';
import { UserBaseSchema } from '../models/UserBaseSchema';
import { UserByEmailAndLoginTypeSchema } from '../models/UserByEmailAndLoginTypeSchema';
import { UserByEmailSchema } from '../models/UserByEmailSchema';
import { UserCreateSchema } from '../models/UserCreateSchema';
import { UserEditInternalSchema } from '../models/UserEditInternalSchema';
import { UserEditSchema } from '../models/UserEditSchema';
import { UserElasticSchema } from '../models/UserElasticSchema';
import { UserIDsSchema } from '../models/UserIDsSchema';
import { UserLoginSchema } from '../models/UserLoginSchema';
import { UserRolesSchema } from '../models/UserRolesSchema';
import { UserSamlCreateSchema } from '../models/UserSamlCreateSchema';
import { UserSamlIdpUpdateSchema } from '../models/UserSamlIdpUpdateSchema';
import { UserSamlUpdateSchema } from '../models/UserSamlUpdateSchema';
import { UserSchema } from '../models/UserSchema';
import { UserSchema1 } from '../models/UserSchema1';
import { UserSettingRemoveAttributesSchema } from '../models/UserSettingRemoveAttributesSchema';
import { UserSettingSchema } from '../models/UserSettingSchema';
import { UserSystemDomainInviteSchema } from '../models/UserSystemDomainInviteSchema';
import { UserSystemMetadata } from '../models/UserSystemMetadata';
import { UserSystemMetadataSchema } from '../models/UserSystemMetadataSchema';
import { UserUsagesDetailedSchema } from '../models/UserUsagesDetailedSchema';
import { UserUsagesElasticSchema } from '../models/UserUsagesElasticSchema';
import { UserUsagesSchema } from '../models/UserUsagesSchema';
import { UsersByEmailsSchema } from '../models/UsersByEmailsSchema';
import { UsersCheckAclSchema } from '../models/UsersCheckAclSchema';
import { UsersQueryParamsSchema } from '../models/UsersQueryParamsSchema';
import { UsersSchema } from '../models/UsersSchema';
import { UsersSchema1 } from '../models/UsersSchema1';
import { UsersV1GroupsGroupIdLogoPost200Response } from '../models/UsersV1GroupsGroupIdLogoPost200Response';
import { UsersV1UsersCurrentPhotoPost201Response } from '../models/UsersV1UsersCurrentPhotoPost201Response';
import { UsersV1UsersCurrentPhotoPostRequest } from '../models/UsersV1UsersCurrentPhotoPostRequest';
import { VantageSettingsSchema } from '../models/VantageSettingsSchema';
import { WatchFolderVideoTranscoderSchema } from '../models/WatchFolderVideoTranscoderSchema';
import { WebhookBaseSchema } from '../models/WebhookBaseSchema';
import { WebhookCreateSchema } from '../models/WebhookCreateSchema';
import { WebhookInternalSchema } from '../models/WebhookInternalSchema';
import { WebhookSchema } from '../models/WebhookSchema';
import { WebhooksSchema } from '../models/WebhooksSchema';
import { ZencoderSettingsSchema } from '../models/ZencoderSettingsSchema';
import { ObservableAclsApi } from './ObservableAPI';

import { AclsApiRequestFactory, AclsApiResponseProcessor} from "../apis/AclsApi";
export class PromiseAclsApi {
    private api: ObservableAclsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AclsApiRequestFactory,
        responseProcessor?: AclsApiResponseProcessor
    ) {
        this.api = new ObservableAclsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     *  Required roles:  - can_delete_acls 
     * Delete acls for content of multiple objects
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param deleteBulkACLsSchema body
     */
    public aclsV1AclObjectTypeContentDeleteWithHttpInfo(appID: string, authToken: string, objectType: string, deleteBulkACLsSchema: DeleteBulkACLsSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1AclObjectTypeContentDeleteWithHttpInfo(appID, authToken, objectType, deleteBulkACLsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_acls 
     * Delete acls for content of multiple objects
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param deleteBulkACLsSchema body
     */
    public aclsV1AclObjectTypeContentDelete(appID: string, authToken: string, objectType: string, deleteBulkACLsSchema: DeleteBulkACLsSchema, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1AclObjectTypeContentDelete(appID, authToken, objectType, deleteBulkACLsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acls 
     * Create a new acl for content of multiple objects
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param createBulkACLsSchema body
     */
    public aclsV1AclObjectTypeContentPutWithHttpInfo(appID: string, authToken: string, objectType: string, createBulkACLsSchema: CreateBulkACLsSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1AclObjectTypeContentPutWithHttpInfo(appID, authToken, objectType, createBulkACLsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acls 
     * Create a new acl for content of multiple objects
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param createBulkACLsSchema body
     */
    public aclsV1AclObjectTypeContentPut(appID: string, authToken: string, objectType: string, createBulkACLsSchema: CreateBulkACLsSchema, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1AclObjectTypeContentPut(appID, authToken, objectType, createBulkACLsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_acls 
     * Delete acls for multiple objects
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param deleteACLsSchema body
     */
    public aclsV1AclObjectTypeDeleteWithHttpInfo(appID: string, authToken: string, objectType: string, deleteACLsSchema: DeleteACLsSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1AclObjectTypeDeleteWithHttpInfo(appID, authToken, objectType, deleteACLsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_acls 
     * Delete acls for multiple objects
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param deleteACLsSchema body
     */
    public aclsV1AclObjectTypeDelete(appID: string, authToken: string, objectType: string, deleteACLsSchema: DeleteACLsSchema, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1AclObjectTypeDelete(appID, authToken, objectType, deleteACLsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * List of object permissions
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectKey 
     */
    public aclsV1AclObjectTypeObjectKeyGetWithHttpInfo(appID: string, authToken: string, objectType: string, objectKey: string, _options?: Configuration): Promise<HttpInfo<ACLSchema>> {
        const result = this.api.aclsV1AclObjectTypeObjectKeyGetWithHttpInfo(appID, authToken, objectType, objectKey, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * List of object permissions
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectKey 
     */
    public aclsV1AclObjectTypeObjectKeyGet(appID: string, authToken: string, objectType: string, objectKey: string, _options?: Configuration): Promise<ACLSchema> {
        const result = this.api.aclsV1AclObjectTypeObjectKeyGet(appID, authToken, objectType, objectKey, _options);
        return result.toPromise();
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
    public aclsV1AclObjectTypeObjectKeyPermissionGetWithHttpInfo(appID: string, authToken: string, objectType: string, objectKey: string, permission: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1AclObjectTypeObjectKeyPermissionGetWithHttpInfo(appID, authToken, objectType, objectKey, permission, _options);
        return result.toPromise();
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
    public aclsV1AclObjectTypeObjectKeyPermissionGet(appID: string, authToken: string, objectType: string, objectKey: string, permission: string, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1AclObjectTypeObjectKeyPermissionGet(appID, authToken, objectType, objectKey, permission, _options);
        return result.toPromise();
    }

    /**
     * 
     * List of permissions for the user
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectKey 
     */
    public aclsV1AclObjectTypeObjectKeyPermissionsGetWithHttpInfo(appID: string, authToken: string, objectType: string, objectKey: string, _options?: Configuration): Promise<HttpInfo<CombinedPermissionsSchema>> {
        const result = this.api.aclsV1AclObjectTypeObjectKeyPermissionsGetWithHttpInfo(appID, authToken, objectType, objectKey, _options);
        return result.toPromise();
    }

    /**
     * 
     * List of permissions for the user
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectKey 
     */
    public aclsV1AclObjectTypeObjectKeyPermissionsGet(appID: string, authToken: string, objectType: string, objectKey: string, _options?: Configuration): Promise<CombinedPermissionsSchema> {
        const result = this.api.aclsV1AclObjectTypeObjectKeyPermissionsGet(appID, authToken, objectType, objectKey, _options);
        return result.toPromise();
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
    public aclsV1AclObjectTypePermissionPostWithHttpInfo(appID: string, authToken: string, objectType: string, permission: string, aCLsSchema: ACLsSchema, _options?: Configuration): Promise<HttpInfo<BulkACLSchema>> {
        const result = this.api.aclsV1AclObjectTypePermissionPostWithHttpInfo(appID, authToken, objectType, permission, aCLsSchema, _options);
        return result.toPromise();
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
    public aclsV1AclObjectTypePermissionPost(appID: string, authToken: string, objectType: string, permission: string, aCLsSchema: ACLsSchema, _options?: Configuration): Promise<BulkACLSchema> {
        const result = this.api.aclsV1AclObjectTypePermissionPost(appID, authToken, objectType, permission, aCLsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acls 
     * Create a new acl for multiple objects
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param createACLsSchema body
     */
    public aclsV1AclObjectTypePutWithHttpInfo(appID: string, authToken: string, objectType: string, createACLsSchema: CreateACLsSchema, _options?: Configuration): Promise<HttpInfo<CreateACLsResultSchema>> {
        const result = this.api.aclsV1AclObjectTypePutWithHttpInfo(appID, authToken, objectType, createACLsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acls 
     * Create a new acl for multiple objects
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param createACLsSchema body
     */
    public aclsV1AclObjectTypePut(appID: string, authToken: string, objectType: string, createACLsSchema: CreateACLsSchema, _options?: Configuration): Promise<CreateACLsResultSchema> {
        const result = this.api.aclsV1AclObjectTypePut(appID, authToken, objectType, createACLsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * Check if objects have required permission
     * @param appID 
     * @param authToken 
     * @param checkBulkACLsSchema body
     */
    public aclsV1AclPostWithHttpInfo(appID: string, authToken: string, checkBulkACLsSchema: CheckBulkACLsSchema, _options?: Configuration): Promise<HttpInfo<BulkACLSchema>> {
        const result = this.api.aclsV1AclPostWithHttpInfo(appID, authToken, checkBulkACLsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * Check if objects have required permission
     * @param appID 
     * @param authToken 
     * @param checkBulkACLsSchema body
     */
    public aclsV1AclPost(appID: string, authToken: string, checkBulkACLsSchema: CheckBulkACLsSchema, _options?: Configuration): Promise<BulkACLSchema> {
        const result = this.api.aclsV1AclPost(appID, authToken, checkBulkACLsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acl_templates 
     * Retreive all acl templates
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclTemplatesGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<ACLTemplatesSchema>> {
        const result = this.api.aclsV1AclTemplatesGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acl_templates 
     * Retreive all acl templates
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclTemplatesGet(appID: string, authToken: string, _options?: Configuration): Promise<ACLTemplatesSchema> {
        const result = this.api.aclsV1AclTemplatesGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acl_templates 
     * Create an acl template
     * @param appID 
     * @param authToken 
     * @param aCLTemplateSchema body
     */
    public aclsV1AclTemplatesPostWithHttpInfo(appID: string, authToken: string, aCLTemplateSchema: ACLTemplateSchema, _options?: Configuration): Promise<HttpInfo<ACLTemplateSchema>> {
        const result = this.api.aclsV1AclTemplatesPostWithHttpInfo(appID, authToken, aCLTemplateSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acl_templates 
     * Create an acl template
     * @param appID 
     * @param authToken 
     * @param aCLTemplateSchema body
     */
    public aclsV1AclTemplatesPost(appID: string, authToken: string, aCLTemplateSchema: ACLTemplateSchema, _options?: Configuration): Promise<ACLTemplateSchema> {
        const result = this.api.aclsV1AclTemplatesPost(appID, authToken, aCLTemplateSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_acl_templates 
     * Remove an acl template
     * @param appID 
     * @param authToken 
     * @param templateId 
     */
    public aclsV1AclTemplatesTemplateIdDeleteWithHttpInfo(appID: string, authToken: string, templateId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1AclTemplatesTemplateIdDeleteWithHttpInfo(appID, authToken, templateId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_acl_templates 
     * Remove an acl template
     * @param appID 
     * @param authToken 
     * @param templateId 
     */
    public aclsV1AclTemplatesTemplateIdDelete(appID: string, authToken: string, templateId: string, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1AclTemplatesTemplateIdDelete(appID, authToken, templateId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acl_templates 
     * Retreive an acl template
     * @param appID 
     * @param authToken 
     * @param templateId 
     */
    public aclsV1AclTemplatesTemplateIdGetWithHttpInfo(appID: string, authToken: string, templateId: string, _options?: Configuration): Promise<HttpInfo<ACLTemplateSchema>> {
        const result = this.api.aclsV1AclTemplatesTemplateIdGetWithHttpInfo(appID, authToken, templateId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acl_templates 
     * Retreive an acl template
     * @param appID 
     * @param authToken 
     * @param templateId 
     */
    public aclsV1AclTemplatesTemplateIdGet(appID: string, authToken: string, templateId: string, _options?: Configuration): Promise<ACLTemplateSchema> {
        const result = this.api.aclsV1AclTemplatesTemplateIdGet(appID, authToken, templateId, _options);
        return result.toPromise();
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
    public aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPostWithHttpInfo(appID: string, authToken: string, templateId: string, objectType: string, objectKey: string, ignoreReindexing?: boolean, restrictAclsCollectionId?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPostWithHttpInfo(appID, authToken, templateId, objectType, objectKey, ignoreReindexing, restrictAclsCollectionId, _options);
        return result.toPromise();
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
    public aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPost(appID: string, authToken: string, templateId: string, objectType: string, objectKey: string, ignoreReindexing?: boolean, restrictAclsCollectionId?: string, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPost(appID, authToken, templateId, objectType, objectKey, ignoreReindexing, restrictAclsCollectionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acl_templates 
     * Update an acl template
     * @param appID 
     * @param authToken 
     * @param templateId 
     * @param aCLTemplateSchema body
     */
    public aclsV1AclTemplatesTemplateIdPatchWithHttpInfo(appID: string, authToken: string, templateId: string, aCLTemplateSchema: ACLTemplateSchema, _options?: Configuration): Promise<HttpInfo<ACLTemplateSchema>> {
        const result = this.api.aclsV1AclTemplatesTemplateIdPatchWithHttpInfo(appID, authToken, templateId, aCLTemplateSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acl_templates 
     * Update an acl template
     * @param appID 
     * @param authToken 
     * @param templateId 
     * @param aCLTemplateSchema body
     */
    public aclsV1AclTemplatesTemplateIdPatch(appID: string, authToken: string, templateId: string, aCLTemplateSchema: ACLTemplateSchema, _options?: Configuration): Promise<ACLTemplateSchema> {
        const result = this.api.aclsV1AclTemplatesTemplateIdPatch(appID, authToken, templateId, aCLTemplateSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acl_templates 
     * Update an acl template
     * @param appID 
     * @param authToken 
     * @param templateId 
     * @param aCLTemplateSchema body
     */
    public aclsV1AclTemplatesTemplateIdPutWithHttpInfo(appID: string, authToken: string, templateId: string, aCLTemplateSchema: ACLTemplateSchema, _options?: Configuration): Promise<HttpInfo<ACLTemplateSchema>> {
        const result = this.api.aclsV1AclTemplatesTemplateIdPutWithHttpInfo(appID, authToken, templateId, aCLTemplateSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acl_templates 
     * Update an acl template
     * @param appID 
     * @param authToken 
     * @param templateId 
     * @param aCLTemplateSchema body
     */
    public aclsV1AclTemplatesTemplateIdPut(appID: string, authToken: string, templateId: string, aCLTemplateSchema: ACLTemplateSchema, _options?: Configuration): Promise<ACLTemplateSchema> {
        const result = this.api.aclsV1AclTemplatesTemplateIdPut(appID, authToken, templateId, aCLTemplateSchema, _options);
        return result.toPromise();
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
    public aclsV1GroupsGroupIdAclObjectTypeObjectKeyDeleteWithHttpInfo(appID: string, authToken: string, groupId: string, objectType: string, objectKey: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1GroupsGroupIdAclObjectTypeObjectKeyDeleteWithHttpInfo(appID, authToken, groupId, objectType, objectKey, _options);
        return result.toPromise();
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
    public aclsV1GroupsGroupIdAclObjectTypeObjectKeyDelete(appID: string, authToken: string, groupId: string, objectType: string, objectKey: string, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1GroupsGroupIdAclObjectTypeObjectKeyDelete(appID, authToken, groupId, objectType, objectKey, _options);
        return result.toPromise();
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
    public aclsV1GroupsGroupIdAclObjectTypeObjectKeyGetWithHttpInfo(appID: string, authToken: string, groupId: string, objectType: string, objectKey: string, _options?: Configuration): Promise<HttpInfo<GroupACLSchema>> {
        const result = this.api.aclsV1GroupsGroupIdAclObjectTypeObjectKeyGetWithHttpInfo(appID, authToken, groupId, objectType, objectKey, _options);
        return result.toPromise();
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
    public aclsV1GroupsGroupIdAclObjectTypeObjectKeyGet(appID: string, authToken: string, groupId: string, objectType: string, objectKey: string, _options?: Configuration): Promise<GroupACLSchema> {
        const result = this.api.aclsV1GroupsGroupIdAclObjectTypeObjectKeyGet(appID, authToken, groupId, objectType, objectKey, _options);
        return result.toPromise();
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
    public aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGetWithHttpInfo(appID: string, authToken: string, groupId: string, objectType: string, objectKey: string, permission: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGetWithHttpInfo(appID, authToken, groupId, objectType, objectKey, permission, _options);
        return result.toPromise();
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
    public aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGet(appID: string, authToken: string, groupId: string, objectType: string, objectKey: string, permission: string, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGet(appID, authToken, groupId, objectType, objectKey, permission, _options);
        return result.toPromise();
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
    public aclsV1GroupsGroupIdAclObjectTypeObjectKeyPutWithHttpInfo(appID: string, authToken: string, groupId: string, objectType: string, objectKey: string, groupACLSchema: GroupACLSchema, _options?: Configuration): Promise<HttpInfo<GroupACLSchema>> {
        const result = this.api.aclsV1GroupsGroupIdAclObjectTypeObjectKeyPutWithHttpInfo(appID, authToken, groupId, objectType, objectKey, groupACLSchema, _options);
        return result.toPromise();
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
    public aclsV1GroupsGroupIdAclObjectTypeObjectKeyPut(appID: string, authToken: string, groupId: string, objectType: string, objectKey: string, groupACLSchema: GroupACLSchema, _options?: Configuration): Promise<GroupACLSchema> {
        const result = this.api.aclsV1GroupsGroupIdAclObjectTypeObjectKeyPut(appID, authToken, groupId, objectType, objectKey, groupACLSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * List of share acls
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectKey 
     */
    public aclsV1SharesObjectTypeObjectKeyGetWithHttpInfo(appID: string, authToken: string, objectType: string, objectKey: string, _options?: Configuration): Promise<HttpInfo<SharesACLSchema>> {
        const result = this.api.aclsV1SharesObjectTypeObjectKeyGetWithHttpInfo(appID, authToken, objectType, objectKey, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * List of share acls
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectKey 
     */
    public aclsV1SharesObjectTypeObjectKeyGet(appID: string, authToken: string, objectType: string, objectKey: string, _options?: Configuration): Promise<SharesACLSchema> {
        const result = this.api.aclsV1SharesObjectTypeObjectKeyGet(appID, authToken, objectType, objectKey, _options);
        return result.toPromise();
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
    public aclsV1SharesShareIdAclObjectTypeObjectKeyDeleteWithHttpInfo(appID: string, authToken: string, shareId: string, objectType: string, objectKey: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypeObjectKeyDeleteWithHttpInfo(appID, authToken, shareId, objectType, objectKey, _options);
        return result.toPromise();
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
    public aclsV1SharesShareIdAclObjectTypeObjectKeyDelete(appID: string, authToken: string, shareId: string, objectType: string, objectKey: string, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypeObjectKeyDelete(appID, authToken, shareId, objectType, objectKey, _options);
        return result.toPromise();
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
    public aclsV1SharesShareIdAclObjectTypeObjectKeyGetWithHttpInfo(appID: string, authToken: string, shareId: string, objectType: string, objectKey: string, _options?: Configuration): Promise<HttpInfo<ShareACLSchema>> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypeObjectKeyGetWithHttpInfo(appID, authToken, shareId, objectType, objectKey, _options);
        return result.toPromise();
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
    public aclsV1SharesShareIdAclObjectTypeObjectKeyGet(appID: string, authToken: string, shareId: string, objectType: string, objectKey: string, _options?: Configuration): Promise<ShareACLSchema> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypeObjectKeyGet(appID, authToken, shareId, objectType, objectKey, _options);
        return result.toPromise();
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
    public aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGetWithHttpInfo(appID: string, authToken: string, shareId: string, objectType: string, objectKey: string, permission: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGetWithHttpInfo(appID, authToken, shareId, objectType, objectKey, permission, _options);
        return result.toPromise();
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
    public aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGet(appID: string, authToken: string, shareId: string, objectType: string, objectKey: string, permission: string, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGet(appID, authToken, shareId, objectType, objectKey, permission, _options);
        return result.toPromise();
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
    public aclsV1SharesShareIdAclObjectTypeObjectKeyPostWithHttpInfo(appID: string, authToken: string, shareId: string, objectType: string, objectKey: string, shareACLSchema: ShareACLSchema, _options?: Configuration): Promise<HttpInfo<ShareACLSchema>> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypeObjectKeyPostWithHttpInfo(appID, authToken, shareId, objectType, objectKey, shareACLSchema, _options);
        return result.toPromise();
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
    public aclsV1SharesShareIdAclObjectTypeObjectKeyPost(appID: string, authToken: string, shareId: string, objectType: string, objectKey: string, shareACLSchema: ShareACLSchema, _options?: Configuration): Promise<ShareACLSchema> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypeObjectKeyPost(appID, authToken, shareId, objectType, objectKey, shareACLSchema, _options);
        return result.toPromise();
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
    public aclsV1SharesShareIdAclObjectTypeObjectKeyPutWithHttpInfo(appID: string, authToken: string, shareId: string, objectType: string, objectKey: string, shareACLSchema: ShareACLSchema, _options?: Configuration): Promise<HttpInfo<ShareACLSchema>> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypeObjectKeyPutWithHttpInfo(appID, authToken, shareId, objectType, objectKey, shareACLSchema, _options);
        return result.toPromise();
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
    public aclsV1SharesShareIdAclObjectTypeObjectKeyPut(appID: string, authToken: string, shareId: string, objectType: string, objectKey: string, shareACLSchema: ShareACLSchema, _options?: Configuration): Promise<ShareACLSchema> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypeObjectKeyPut(appID, authToken, shareId, objectType, objectKey, shareACLSchema, _options);
        return result.toPromise();
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
    public aclsV1SharesShareIdAclObjectTypePutWithHttpInfo(appID: string, authToken: string, shareId: string, objectType: string, createShareACLsSchema: CreateShareACLsSchema, _options?: Configuration): Promise<HttpInfo<CreateACLsResultSchema>> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypePutWithHttpInfo(appID, authToken, shareId, objectType, createShareACLsSchema, _options);
        return result.toPromise();
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
    public aclsV1SharesShareIdAclObjectTypePut(appID: string, authToken: string, shareId: string, objectType: string, createShareACLsSchema: CreateShareACLsSchema, _options?: Configuration): Promise<CreateACLsResultSchema> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypePut(appID, authToken, shareId, objectType, createShareACLsSchema, _options);
        return result.toPromise();
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
    public aclsV1UsersUserIdAclObjectTypeObjectKeyDeleteWithHttpInfo(appID: string, authToken: string, userId: string, objectType: string, objectKey: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1UsersUserIdAclObjectTypeObjectKeyDeleteWithHttpInfo(appID, authToken, userId, objectType, objectKey, _options);
        return result.toPromise();
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
    public aclsV1UsersUserIdAclObjectTypeObjectKeyDelete(appID: string, authToken: string, userId: string, objectType: string, objectKey: string, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1UsersUserIdAclObjectTypeObjectKeyDelete(appID, authToken, userId, objectType, objectKey, _options);
        return result.toPromise();
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
    public aclsV1UsersUserIdAclObjectTypeObjectKeyGetWithHttpInfo(appID: string, authToken: string, userId: string, objectType: string, objectKey: string, _options?: Configuration): Promise<HttpInfo<UserACLSchema>> {
        const result = this.api.aclsV1UsersUserIdAclObjectTypeObjectKeyGetWithHttpInfo(appID, authToken, userId, objectType, objectKey, _options);
        return result.toPromise();
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
    public aclsV1UsersUserIdAclObjectTypeObjectKeyGet(appID: string, authToken: string, userId: string, objectType: string, objectKey: string, _options?: Configuration): Promise<UserACLSchema> {
        const result = this.api.aclsV1UsersUserIdAclObjectTypeObjectKeyGet(appID, authToken, userId, objectType, objectKey, _options);
        return result.toPromise();
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
    public aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGetWithHttpInfo(appID: string, authToken: string, userId: string, objectType: string, objectKey: string, permission: string, _options?: Configuration): Promise<HttpInfo<UserACLSchema>> {
        const result = this.api.aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGetWithHttpInfo(appID, authToken, userId, objectType, objectKey, permission, _options);
        return result.toPromise();
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
    public aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGet(appID: string, authToken: string, userId: string, objectType: string, objectKey: string, permission: string, _options?: Configuration): Promise<UserACLSchema> {
        const result = this.api.aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGet(appID, authToken, userId, objectType, objectKey, permission, _options);
        return result.toPromise();
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
    public aclsV1UsersUserIdAclObjectTypeObjectKeyPutWithHttpInfo(appID: string, authToken: string, userId: string, objectType: string, objectKey: string, userACLSchema: UserACLSchema, _options?: Configuration): Promise<HttpInfo<UserACLSchema>> {
        const result = this.api.aclsV1UsersUserIdAclObjectTypeObjectKeyPutWithHttpInfo(appID, authToken, userId, objectType, objectKey, userACLSchema, _options);
        return result.toPromise();
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
    public aclsV1UsersUserIdAclObjectTypeObjectKeyPut(appID: string, authToken: string, userId: string, objectType: string, objectKey: string, userACLSchema: UserACLSchema, _options?: Configuration): Promise<UserACLSchema> {
        const result = this.api.aclsV1UsersUserIdAclObjectTypeObjectKeyPut(appID, authToken, userId, objectType, objectKey, userACLSchema, _options);
        return result.toPromise();
    }


}



import { ObservableAssetsApi } from './ObservableAPI';

import { AssetsApiRequestFactory, AssetsApiResponseProcessor} from "../apis/AssetsApi";
export class PromiseAssetsApi {
    private api: ObservableAssetsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetsApiRequestFactory,
        responseProcessor?: AssetsApiResponseProcessor
    ) {
        this.api = new ObservableAssetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     *  Required roles:  - can_write_approval_status_in_bulk 
     * Create a job for bulk request & set approval
     * @param authToken 
     * @param appID 
     * @param bulkSetApprovalSchema body
     */
    public assetsV1ApprovalsBulkPostWithHttpInfo(authToken: string, appID: string, bulkSetApprovalSchema: BulkSetApprovalSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1ApprovalsBulkPostWithHttpInfo(authToken, appID, bulkSetApprovalSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_approval_status_in_bulk 
     * Create a job for bulk request & set approval
     * @param authToken 
     * @param appID 
     * @param bulkSetApprovalSchema body
     */
    public assetsV1ApprovalsBulkPost(authToken: string, appID: string, bulkSetApprovalSchema: BulkSetApprovalSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1ApprovalsBulkPost(authToken, appID, bulkSetApprovalSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_approval_status_in_bulk 
     * Create a job for bulk approval status removal
     * @param authToken 
     * @param appID 
     * @param bulkRemoveApprovalSchema body
     */
    public assetsV1ApprovalsBulkRemovePostWithHttpInfo(authToken: string, appID: string, bulkRemoveApprovalSchema: BulkRemoveApprovalSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1ApprovalsBulkRemovePostWithHttpInfo(authToken, appID, bulkRemoveApprovalSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_approval_status_in_bulk 
     * Create a job for bulk approval status removal
     * @param authToken 
     * @param appID 
     * @param bulkRemoveApprovalSchema body
     */
    public assetsV1ApprovalsBulkRemovePost(authToken: string, appID: string, bulkRemoveApprovalSchema: BulkRemoveApprovalSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1ApprovalsBulkRemovePost(authToken, appID, bulkRemoveApprovalSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Delete a particular asset by id
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public assetsV1AssetsAssetIdDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdDeleteWithHttpInfo(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Delete a particular asset by id
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public assetsV1AssetsAssetIdDelete(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdDelete(appID, authToken, assetId, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdGetWithHttpInfo(appID: string, authToken: string, assetId: string, includeCollections?: boolean, includeUsers?: boolean, _options?: Configuration): Promise<HttpInfo<AssetSchema>> {
        const result = this.api.assetsV1AssetsAssetIdGetWithHttpInfo(appID, authToken, assetId, includeCollections, includeUsers, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdGet(appID: string, authToken: string, assetId: string, includeCollections?: boolean, includeUsers?: boolean, _options?: Configuration): Promise<AssetSchema> {
        const result = this.api.assetsV1AssetsAssetIdGet(appID, authToken, assetId, includeCollections, includeUsers, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdHistoryGetWithHttpInfo(appID: string, authToken: string, assetId: string, perPage?: number, page?: number, sort?: string, filter?: string, _options?: Configuration): Promise<HttpInfo<AssetHistoryEntitiesSchema>> {
        const result = this.api.assetsV1AssetsAssetIdHistoryGetWithHttpInfo(appID, authToken, assetId, perPage, page, sort, filter, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdHistoryGet(appID: string, authToken: string, assetId: string, perPage?: number, page?: number, sort?: string, filter?: string, _options?: Configuration): Promise<AssetHistoryEntitiesSchema> {
        const result = this.api.assetsV1AssetsAssetIdHistoryGet(appID, authToken, assetId, perPage, page, sort, filter, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets_history 
     * Deletes an asset history entity
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param historyEntityId 
     */
    public assetsV1AssetsAssetIdHistoryHistoryEntityIdDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, historyEntityId: string, _options?: Configuration): Promise<HttpInfo<AssetHistorySchema>> {
        const result = this.api.assetsV1AssetsAssetIdHistoryHistoryEntityIdDeleteWithHttpInfo(appID, authToken, assetId, historyEntityId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets_history 
     * Deletes an asset history entity
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param historyEntityId 
     */
    public assetsV1AssetsAssetIdHistoryHistoryEntityIdDelete(appID: string, authToken: string, assetId: string, historyEntityId: string, _options?: Configuration): Promise<AssetHistorySchema> {
        const result = this.api.assetsV1AssetsAssetIdHistoryHistoryEntityIdDelete(appID, authToken, assetId, historyEntityId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets_history 
     * Get an asset history entity
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param historyEntityId 
     */
    public assetsV1AssetsAssetIdHistoryHistoryEntityIdGetWithHttpInfo(appID: string, authToken: string, assetId: string, historyEntityId: string, _options?: Configuration): Promise<HttpInfo<AssetHistorySchema>> {
        const result = this.api.assetsV1AssetsAssetIdHistoryHistoryEntityIdGetWithHttpInfo(appID, authToken, assetId, historyEntityId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets_history 
     * Get an asset history entity
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param historyEntityId 
     */
    public assetsV1AssetsAssetIdHistoryHistoryEntityIdGet(appID: string, authToken: string, assetId: string, historyEntityId: string, _options?: Configuration): Promise<AssetHistorySchema> {
        const result = this.api.assetsV1AssetsAssetIdHistoryHistoryEntityIdGet(appID, authToken, assetId, historyEntityId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_assets_history 
     * Reindex asset history entity
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param historyEntityId 
     */
    public assetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPostWithHttpInfo(appID: string, authToken: string, assetId: string, historyEntityId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPostWithHttpInfo(appID, authToken, assetId, historyEntityId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_assets_history 
     * Reindex asset history entity
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param historyEntityId 
     */
    public assetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPost(appID: string, authToken: string, assetId: string, historyEntityId: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPost(appID, authToken, assetId, historyEntityId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets_history 
     * Create an asset history entity
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param assetHistorySchema body
     */
    public assetsV1AssetsAssetIdHistoryPostWithHttpInfo(appID: string, authToken: string, assetId: string, assetHistorySchema: AssetHistorySchema, _options?: Configuration): Promise<HttpInfo<AssetHistorySchema>> {
        const result = this.api.assetsV1AssetsAssetIdHistoryPostWithHttpInfo(appID, authToken, assetId, assetHistorySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets_history 
     * Create an asset history entity
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param assetHistorySchema body
     */
    public assetsV1AssetsAssetIdHistoryPost(appID: string, authToken: string, assetId: string, assetHistorySchema: AssetHistorySchema, _options?: Configuration): Promise<AssetHistorySchema> {
        const result = this.api.assetsV1AssetsAssetIdHistoryPost(appID, authToken, assetId, assetHistorySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Update asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param assetSchema body
     */
    public assetsV1AssetsAssetIdPatchWithHttpInfo(appID: string, authToken: string, assetId: string, assetSchema: AssetSchema, _options?: Configuration): Promise<HttpInfo<AssetSchema>> {
        const result = this.api.assetsV1AssetsAssetIdPatchWithHttpInfo(appID, authToken, assetId, assetSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Update asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param assetSchema body
     */
    public assetsV1AssetsAssetIdPatch(appID: string, authToken: string, assetId: string, assetSchema: AssetSchema, _options?: Configuration): Promise<AssetSchema> {
        const result = this.api.assetsV1AssetsAssetIdPatch(appID, authToken, assetId, assetSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_assets 
     * Purges a particular asset by id immediately
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public assetsV1AssetsAssetIdPurgeDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdPurgeDeleteWithHttpInfo(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_assets 
     * Purges a particular asset by id immediately
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public assetsV1AssetsAssetIdPurgeDelete(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdPurgeDelete(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Update asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param assetSchema body
     */
    public assetsV1AssetsAssetIdPutWithHttpInfo(appID: string, authToken: string, assetId: string, assetSchema: AssetSchema, _options?: Configuration): Promise<HttpInfo<AssetSchema>> {
        const result = this.api.assetsV1AssetsAssetIdPutWithHttpInfo(appID, authToken, assetId, assetSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Update asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param assetSchema body
     */
    public assetsV1AssetsAssetIdPut(appID: string, authToken: string, assetId: string, assetSchema: AssetSchema, _options?: Configuration): Promise<AssetSchema> {
        const result = this.api.assetsV1AssetsAssetIdPut(appID, authToken, assetId, assetSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_assets 
     * Reindex asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param reindexAssetSchema body
     */
    public assetsV1AssetsAssetIdReindexPostWithHttpInfo(appID: string, authToken: string, assetId: string, reindexAssetSchema: ReindexAssetSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdReindexPostWithHttpInfo(appID, authToken, assetId, reindexAssetSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_assets 
     * Reindex asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param reindexAssetSchema body
     */
    public assetsV1AssetsAssetIdReindexPost(appID: string, authToken: string, assetId: string, reindexAssetSchema: ReindexAssetSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdReindexPost(appID, authToken, assetId, reindexAssetSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdRelationsGetWithHttpInfo(appID: string, authToken: string, assetId: string, includeDeleted?: boolean, perPage?: number, page?: number, sort?: string, _options?: Configuration): Promise<HttpInfo<AssetsSchema>> {
        const result = this.api.assetsV1AssetsAssetIdRelationsGetWithHttpInfo(appID, authToken, assetId, includeDeleted, perPage, page, sort, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdRelationsGet(appID: string, authToken: string, assetId: string, includeDeleted?: boolean, perPage?: number, page?: number, sort?: string, _options?: Configuration): Promise<AssetsSchema> {
        const result = this.api.assetsV1AssetsAssetIdRelationsGet(appID, authToken, assetId, includeDeleted, perPage, page, sort, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_asset_relations 
     * Create a new asset relation
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param relationSchema body
     */
    public assetsV1AssetsAssetIdRelationsPostWithHttpInfo(appID: string, authToken: string, assetId: string, relationSchema: RelationSchema, _options?: Configuration): Promise<HttpInfo<RelationSchema>> {
        const result = this.api.assetsV1AssetsAssetIdRelationsPostWithHttpInfo(appID, authToken, assetId, relationSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_asset_relations 
     * Create a new asset relation
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param relationSchema body
     */
    public assetsV1AssetsAssetIdRelationsPost(appID: string, authToken: string, assetId: string, relationSchema: RelationSchema, _options?: Configuration): Promise<RelationSchema> {
        const result = this.api.assetsV1AssetsAssetIdRelationsPost(appID, authToken, assetId, relationSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdRelationsRelationTypeGetWithHttpInfo(appID: string, authToken: string, assetId: string, relationType: string, includeDeleted?: boolean, _options?: Configuration): Promise<HttpInfo<AssetsSchema>> {
        const result = this.api.assetsV1AssetsAssetIdRelationsRelationTypeGetWithHttpInfo(appID, authToken, assetId, relationType, includeDeleted, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdRelationsRelationTypeGet(appID: string, authToken: string, assetId: string, relationType: string, includeDeleted?: boolean, _options?: Configuration): Promise<AssetsSchema> {
        const result = this.api.assetsV1AssetsAssetIdRelationsRelationTypeGet(appID, authToken, assetId, relationType, includeDeleted, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, relationType: string, relatedToAssetId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDeleteWithHttpInfo(appID, authToken, assetId, relationType, relatedToAssetId, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDelete(appID: string, authToken: string, assetId: string, relationType: string, relatedToAssetId: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDelete(appID, authToken, assetId, relationType, relatedToAssetId, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPostWithHttpInfo(appID: string, authToken: string, assetId: string, relationType: string, relatedToAssetId: string, relationSchema: RelationSchema, _options?: Configuration): Promise<HttpInfo<RelationSchema>> {
        const result = this.api.assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPostWithHttpInfo(appID, authToken, assetId, relationType, relatedToAssetId, relationSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPost(appID: string, authToken: string, assetId: string, relationType: string, relatedToAssetId: string, relationSchema: RelationSchema, _options?: Configuration): Promise<RelationSchema> {
        const result = this.api.assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPost(appID, authToken, assetId, relationType, relatedToAssetId, relationSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePostWithHttpInfo(appID: string, authToken: string, assetId: string, relationType: string, relatedToAssetId: string, _options?: Configuration): Promise<HttpInfo<RelationSchema>> {
        const result = this.api.assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePostWithHttpInfo(appID, authToken, assetId, relationType, relatedToAssetId, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePost(appID: string, authToken: string, assetId: string, relationType: string, relatedToAssetId: string, _options?: Configuration): Promise<RelationSchema> {
        const result = this.api.assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePost(appID, authToken, assetId, relationType, relatedToAssetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Restore deleted asset by id
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public assetsV1AssetsAssetIdRestorePutWithHttpInfo(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdRestorePutWithHttpInfo(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Restore deleted asset by id
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public assetsV1AssetsAssetIdRestorePut(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdRestorePut(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_assets 
     * Update metadata for asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param assetElasticSchema body
     */
    public assetsV1AssetsAssetIdSearchDocumentPutWithHttpInfo(appID: string, authToken: string, assetId: string, assetElasticSchema: AssetElasticSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdSearchDocumentPutWithHttpInfo(appID, authToken, assetId, assetElasticSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_assets 
     * Update metadata for asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param assetElasticSchema body
     */
    public assetsV1AssetsAssetIdSearchDocumentPut(appID: string, authToken: string, assetId: string, assetElasticSchema: AssetElasticSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdSearchDocumentPut(appID, authToken, assetId, assetElasticSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsBulkDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, deleteSegmentsSchema: DeleteSegmentsSchema, immediately?: boolean, ignoreReindexing?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsBulkDeleteWithHttpInfo(appID, authToken, assetId, deleteSegmentsSchema, immediately, ignoreReindexing, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsBulkDelete(appID: string, authToken: string, assetId: string, deleteSegmentsSchema: DeleteSegmentsSchema, immediately?: boolean, ignoreReindexing?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsBulkDelete(appID, authToken, assetId, deleteSegmentsSchema, immediately, ignoreReindexing, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_segments 
     * Create multiple new segments for a single asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param bulkCreateSegmentsSchema body
     */
    public assetsV1AssetsAssetIdSegmentsBulkPostWithHttpInfo(appID: string, authToken: string, assetId: string, bulkCreateSegmentsSchema: BulkCreateSegmentsSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsBulkPostWithHttpInfo(appID, authToken, assetId, bulkCreateSegmentsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_segments 
     * Create multiple new segments for a single asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param bulkCreateSegmentsSchema body
     */
    public assetsV1AssetsAssetIdSegmentsBulkPost(appID: string, authToken: string, assetId: string, bulkCreateSegmentsSchema: BulkCreateSegmentsSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsBulkPost(appID, authToken, assetId, bulkCreateSegmentsSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsGetWithHttpInfo(appID: string, authToken: string, assetId: string, sort?: string, ids?: string, query?: string, includes?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, transcriptionId?: string, versionId?: string, segmentType?: string, segmentColor?: string, timeStartMilliseconds?: number, timeEndMilliseconds?: number, timeStartMillisecondsGte?: number, timeEndMillisecondsLte?: number, status?: string, includeUsers?: boolean, _options?: Configuration): Promise<HttpInfo<SegmentsSchema>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsGetWithHttpInfo(appID, authToken, assetId, sort, ids, query, includes, perPage, page, scroll, scrollId, transcriptionId, versionId, segmentType, segmentColor, timeStartMilliseconds, timeEndMilliseconds, timeStartMillisecondsGte, timeEndMillisecondsLte, status, includeUsers, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsGet(appID: string, authToken: string, assetId: string, sort?: string, ids?: string, query?: string, includes?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, transcriptionId?: string, versionId?: string, segmentType?: string, segmentColor?: string, timeStartMilliseconds?: number, timeEndMilliseconds?: number, timeStartMillisecondsGte?: number, timeEndMillisecondsLte?: number, status?: string, includeUsers?: boolean, _options?: Configuration): Promise<SegmentsSchema> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsGet(appID, authToken, assetId, sort, ids, query, includes, perPage, page, scroll, scrollId, transcriptionId, versionId, segmentType, segmentColor, timeStartMilliseconds, timeEndMilliseconds, timeStartMillisecondsGte, timeEndMillisecondsLte, status, includeUsers, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsPostWithHttpInfo(appID: string, authToken: string, assetId: string, segmentSchema: SegmentSchema, shareUserEmail?: string, _options?: Configuration): Promise<HttpInfo<SegmentSchema>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsPostWithHttpInfo(appID, authToken, assetId, segmentSchema, shareUserEmail, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsPost(appID: string, authToken: string, assetId: string, segmentSchema: SegmentSchema, shareUserEmail?: string, _options?: Configuration): Promise<SegmentSchema> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsPost(appID, authToken, assetId, segmentSchema, shareUserEmail, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_segments 
     * Reindex assets segments
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param reindexSegmentSchema body
     */
    public assetsV1AssetsAssetIdSegmentsReindexPostWithHttpInfo(appID: string, authToken: string, assetId: string, reindexSegmentSchema: ReindexSegmentSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsReindexPostWithHttpInfo(appID, authToken, assetId, reindexSegmentSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_segments 
     * Reindex assets segments
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param reindexSegmentSchema body
     */
    public assetsV1AssetsAssetIdSegmentsReindexPost(appID: string, authToken: string, assetId: string, reindexSegmentSchema: ReindexSegmentSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsReindexPost(appID, authToken, assetId, reindexSegmentSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsSegmentIdDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, segmentId: string, softDelete?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentIdDeleteWithHttpInfo(appID, authToken, assetId, segmentId, softDelete, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsSegmentIdDelete(appID: string, authToken: string, assetId: string, segmentId: string, softDelete?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentIdDelete(appID, authToken, assetId, segmentId, softDelete, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsSegmentIdGetWithHttpInfo(appID: string, authToken: string, assetId: string, segmentId: string, scroll?: boolean, scrollId?: string, _options?: Configuration): Promise<HttpInfo<SegmentSchema>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentIdGetWithHttpInfo(appID, authToken, assetId, segmentId, scroll, scrollId, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsSegmentIdGet(appID: string, authToken: string, assetId: string, segmentId: string, scroll?: boolean, scrollId?: string, _options?: Configuration): Promise<SegmentSchema> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentIdGet(appID, authToken, assetId, segmentId, scroll, scrollId, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsSegmentIdPatchWithHttpInfo(appID: string, authToken: string, assetId: string, segmentId: string, editSegmentSchema: EditSegmentSchema, _options?: Configuration): Promise<HttpInfo<SegmentSchema>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentIdPatchWithHttpInfo(appID, authToken, assetId, segmentId, editSegmentSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsSegmentIdPatch(appID: string, authToken: string, assetId: string, segmentId: string, editSegmentSchema: EditSegmentSchema, _options?: Configuration): Promise<SegmentSchema> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentIdPatch(appID, authToken, assetId, segmentId, editSegmentSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsSegmentIdPutWithHttpInfo(appID: string, authToken: string, assetId: string, segmentId: string, editSegmentSchema: EditSegmentSchema, _options?: Configuration): Promise<HttpInfo<SegmentSchema>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentIdPutWithHttpInfo(appID, authToken, assetId, segmentId, editSegmentSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsSegmentIdPut(appID: string, authToken: string, assetId: string, segmentId: string, editSegmentSchema: EditSegmentSchema, _options?: Configuration): Promise<SegmentSchema> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentIdPut(appID, authToken, assetId, segmentId, editSegmentSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsSegmentIdReindexPostWithHttpInfo(appID: string, authToken: string, assetId: string, segmentId: string, reindexSegmentSchema: ReindexSegmentSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentIdReindexPostWithHttpInfo(appID, authToken, assetId, segmentId, reindexSegmentSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsSegmentIdReindexPost(appID: string, authToken: string, assetId: string, segmentId: string, reindexSegmentSchema: ReindexSegmentSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentIdReindexPost(appID, authToken, assetId, segmentId, reindexSegmentSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsSegmentTypeGetWithHttpInfo(appID: string, authToken: string, assetId: string, segmentType: string, sort?: string, ids?: string, query?: string, includes?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, timeStartMilliseconds?: number, timeEndMilliseconds?: number, timeStartMillisecondsGte?: number, timeEndMillisecondsLte?: number, _options?: Configuration): Promise<HttpInfo<SegmentsSchema>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentTypeGetWithHttpInfo(appID, authToken, assetId, segmentType, sort, ids, query, includes, perPage, page, scroll, scrollId, timeStartMilliseconds, timeEndMilliseconds, timeStartMillisecondsGte, timeEndMillisecondsLte, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsSegmentTypeGet(appID: string, authToken: string, assetId: string, segmentType: string, sort?: string, ids?: string, query?: string, includes?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, timeStartMilliseconds?: number, timeEndMilliseconds?: number, timeStartMillisecondsGte?: number, timeEndMillisecondsLte?: number, _options?: Configuration): Promise<SegmentsSchema> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentTypeGet(appID, authToken, assetId, segmentType, sort, ids, query, includes, perPage, page, scroll, scrollId, timeStartMilliseconds, timeEndMilliseconds, timeStartMillisecondsGte, timeEndMillisecondsLte, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsSrtGetWithHttpInfo(appID: string, authToken: string, assetId: string, ids?: string, query?: string, transcriptionId?: string, versionId?: string, segmentType?: string, segmentColor?: string, wordsPerLine?: number, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSrtGetWithHttpInfo(appID, authToken, assetId, ids, query, transcriptionId, versionId, segmentType, segmentColor, wordsPerLine, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsSrtGet(appID: string, authToken: string, assetId: string, ids?: string, query?: string, transcriptionId?: string, versionId?: string, segmentType?: string, segmentColor?: string, wordsPerLine?: number, _options?: Configuration): Promise<string> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSrtGet(appID, authToken, assetId, ids, query, transcriptionId, versionId, segmentType, segmentColor, wordsPerLine, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsVttGetWithHttpInfo(appID: string, authToken: string, assetId: string, ids?: string, query?: string, transcriptionId?: string, versionId?: string, segmentType?: string, segmentColor?: string, wordsPerLine?: number, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsVttGetWithHttpInfo(appID, authToken, assetId, ids, query, transcriptionId, versionId, segmentType, segmentColor, wordsPerLine, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdSegmentsVttGet(appID: string, authToken: string, assetId: string, ids?: string, query?: string, transcriptionId?: string, versionId?: string, segmentType?: string, segmentColor?: string, wordsPerLine?: number, _options?: Configuration): Promise<string> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsVttGet(appID, authToken, assetId, ids, query, transcriptionId, versionId, segmentType, segmentColor, wordsPerLine, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_assets 
     * Delete a particular asset by id on failed uplaod
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public assetsV1AssetsAssetIdUploadsDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdUploadsDeleteWithHttpInfo(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_assets 
     * Delete a particular asset by id on failed uplaod
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public assetsV1AssetsAssetIdUploadsDelete(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdUploadsDelete(appID, authToken, assetId, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPostWithHttpInfo(appID: string, authToken: string, assetId: string, sourceAssetId: string, createAssetVersionFromAssetSchema: CreateAssetVersionFromAssetSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPostWithHttpInfo(appID, authToken, assetId, sourceAssetId, createAssetVersionFromAssetSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPost(appID: string, authToken: string, assetId: string, sourceAssetId: string, createAssetVersionFromAssetSchema: CreateAssetVersionFromAssetSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPost(appID, authToken, assetId, sourceAssetId, createAssetVersionFromAssetSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPostWithHttpInfo(appID: string, authToken: string, assetId: string, sourceVersionId: string, createAssetVersionFromVersionSchema: CreateAssetVersionFromVersionSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPostWithHttpInfo(appID, authToken, assetId, sourceVersionId, createAssetVersionFromVersionSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPost(appID: string, authToken: string, assetId: string, sourceVersionId: string, createAssetVersionFromVersionSchema: CreateAssetVersionFromVersionSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPost(appID, authToken, assetId, sourceVersionId, createAssetVersionFromVersionSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_versions 
     * Delete all asset versions except the latest one
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public assetsV1AssetsAssetIdVersionsOldDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsOldDeleteWithHttpInfo(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_versions 
     * Delete all asset versions except the latest one
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public assetsV1AssetsAssetIdVersionsOldDelete(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdVersionsOldDelete(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_versions 
     * Add asset version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param createAssetVersionSchema body
     */
    public assetsV1AssetsAssetIdVersionsPostWithHttpInfo(appID: string, authToken: string, assetId: string, createAssetVersionSchema: CreateAssetVersionSchema, _options?: Configuration): Promise<HttpInfo<AssetVersionsSchema>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsPostWithHttpInfo(appID, authToken, assetId, createAssetVersionSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_versions 
     * Add asset version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param createAssetVersionSchema body
     */
    public assetsV1AssetsAssetIdVersionsPost(appID: string, authToken: string, assetId: string, createAssetVersionSchema: CreateAssetVersionSchema, _options?: Configuration): Promise<AssetVersionsSchema> {
        const result = this.api.assetsV1AssetsAssetIdVersionsPost(appID, authToken, assetId, createAssetVersionSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsVersionIdDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, hardDelete?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdDeleteWithHttpInfo(appID, authToken, assetId, versionId, hardDelete, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsVersionIdDelete(appID: string, authToken: string, assetId: string, versionId: string, hardDelete?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdDelete(appID, authToken, assetId, versionId, hardDelete, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsVersionIdPatchWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, assetVersionSchema: AssetVersionSchema, _options?: Configuration): Promise<HttpInfo<AssetVersionSchema>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdPatchWithHttpInfo(appID, authToken, assetId, versionId, assetVersionSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsVersionIdPatch(appID: string, authToken: string, assetId: string, versionId: string, assetVersionSchema: AssetVersionSchema, _options?: Configuration): Promise<AssetVersionSchema> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdPatch(appID, authToken, assetId, versionId, assetVersionSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_versions 
     * Promote a particular asset version to a latest version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdPromotePutWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdPromotePutWithHttpInfo(appID, authToken, assetId, versionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_versions 
     * Promote a particular asset version to a latest version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdPromotePut(appID: string, authToken: string, assetId: string, versionId: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdPromotePut(appID, authToken, assetId, versionId, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsVersionIdPutWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, assetVersionSchema: AssetVersionSchema, _options?: Configuration): Promise<HttpInfo<AssetVersionSchema>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdPutWithHttpInfo(appID, authToken, assetId, versionId, assetVersionSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsVersionIdPut(appID: string, authToken: string, assetId: string, versionId: string, assetVersionSchema: AssetVersionSchema, _options?: Configuration): Promise<AssetVersionSchema> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdPut(appID, authToken, assetId, versionId, assetVersionSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcriptions 
     * Get a list of transcription properties
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGetWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, _options?: Configuration): Promise<HttpInfo<AssetTranscriptionsPropertiesSchema>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGetWithHttpInfo(appID, authToken, assetId, versionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcriptions 
     * Get a list of transcription properties
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGet(appID: string, authToken: string, assetId: string, versionId: string, _options?: Configuration): Promise<AssetTranscriptionsPropertiesSchema> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGet(appID, authToken, assetId, versionId, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPostWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, assetTranscriptionPropertiesSchema: AssetTranscriptionPropertiesSchema, _options?: Configuration): Promise<HttpInfo<AssetTranscriptionPropertiesSchema>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPostWithHttpInfo(appID, authToken, assetId, versionId, assetTranscriptionPropertiesSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPost(appID: string, authToken: string, assetId: string, versionId: string, assetTranscriptionPropertiesSchema: AssetTranscriptionPropertiesSchema, _options?: Configuration): Promise<AssetTranscriptionPropertiesSchema> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPost(appID, authToken, assetId, versionId, assetTranscriptionPropertiesSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPostWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, assetTranscriptionFromSubtitleSchema: AssetTranscriptionFromSubtitleSchema, _options?: Configuration): Promise<HttpInfo<AssetTranscriptionPropertiesSchema>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPostWithHttpInfo(appID, authToken, assetId, versionId, assetTranscriptionFromSubtitleSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPost(appID: string, authToken: string, assetId: string, versionId: string, assetTranscriptionFromSubtitleSchema: AssetTranscriptionFromSubtitleSchema, _options?: Configuration): Promise<AssetTranscriptionPropertiesSchema> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPost(appID, authToken, assetId, versionId, assetTranscriptionFromSubtitleSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, transcriptionId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDeleteWithHttpInfo(appID, authToken, assetId, versionId, transcriptionId, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDelete(appID: string, authToken: string, assetId: string, versionId: string, transcriptionId: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDelete(appID, authToken, assetId, versionId, transcriptionId, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGetWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, transcriptionId: string, _options?: Configuration): Promise<HttpInfo<AssetTranscriptionPropertiesSchema>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGetWithHttpInfo(appID, authToken, assetId, versionId, transcriptionId, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGet(appID: string, authToken: string, assetId: string, versionId: string, transcriptionId: string, _options?: Configuration): Promise<AssetTranscriptionPropertiesSchema> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGet(appID, authToken, assetId, versionId, transcriptionId, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatchWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, transcriptionId: string, assetTranscriptionPropertiesSchema: AssetTranscriptionPropertiesSchema, _options?: Configuration): Promise<HttpInfo<AssetTranscriptionPropertiesSchema>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatchWithHttpInfo(appID, authToken, assetId, versionId, transcriptionId, assetTranscriptionPropertiesSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatch(appID: string, authToken: string, assetId: string, versionId: string, transcriptionId: string, assetTranscriptionPropertiesSchema: AssetTranscriptionPropertiesSchema, _options?: Configuration): Promise<AssetTranscriptionPropertiesSchema> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatch(appID, authToken, assetId, versionId, transcriptionId, assetTranscriptionPropertiesSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPutWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, transcriptionId: string, assetTranscriptionPropertiesSchema: AssetTranscriptionPropertiesSchema, _options?: Configuration): Promise<HttpInfo<AssetTranscriptionPropertiesSchema>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPutWithHttpInfo(appID, authToken, assetId, versionId, transcriptionId, assetTranscriptionPropertiesSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPut(appID: string, authToken: string, assetId: string, versionId: string, transcriptionId: string, assetTranscriptionPropertiesSchema: AssetTranscriptionPropertiesSchema, _options?: Configuration): Promise<AssetTranscriptionPropertiesSchema> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPut(appID, authToken, assetId, versionId, transcriptionId, assetTranscriptionPropertiesSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets 
     * Mark asset as viewed
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public assetsV1AssetsAssetIdViewsPostWithHttpInfo(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<HttpInfo<AssetSchema>> {
        const result = this.api.assetsV1AssetsAssetIdViewsPostWithHttpInfo(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets 
     * Mark asset as viewed
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public assetsV1AssetsAssetIdViewsPost(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<AssetSchema> {
        const result = this.api.assetsV1AssetsAssetIdViewsPost(appID, authToken, assetId, _options);
        return result.toPromise();
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
    public assetsV1AssetsGetWithHttpInfo(appID: string, authToken: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, sort?: string, fieldName?: string, _options?: Configuration): Promise<HttpInfo<AssetsSchema>> {
        const result = this.api.assetsV1AssetsGetWithHttpInfo(appID, authToken, perPage, page, scroll, scrollId, sort, fieldName, _options);
        return result.toPromise();
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
    public assetsV1AssetsGet(appID: string, authToken: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, sort?: string, fieldName?: string, _options?: Configuration): Promise<AssetsSchema> {
        const result = this.api.assetsV1AssetsGet(appID, authToken, perPage, page, scroll, scrollId, sort, fieldName, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Bulk update assets
     * @param appID 
     * @param authToken 
     * @param bulkAssetEditSchema body
     */
    public assetsV1AssetsPatchWithHttpInfo(appID: string, authToken: string, bulkAssetEditSchema: BulkAssetEditSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsPatchWithHttpInfo(appID, authToken, bulkAssetEditSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Bulk update assets
     * @param appID 
     * @param authToken 
     * @param bulkAssetEditSchema body
     */
    public assetsV1AssetsPatch(appID: string, authToken: string, bulkAssetEditSchema: BulkAssetEditSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsPatch(appID, authToken, bulkAssetEditSchema, _options);
        return result.toPromise();
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
    public assetsV1AssetsPostWithHttpInfo(appID: string, authToken: string, assetCreateSchema: AssetCreateSchema, applyDefaultAcls?: boolean, applyCollectionAcls?: boolean, assignToCollection?: boolean, _options?: Configuration): Promise<HttpInfo<AssetSchema>> {
        const result = this.api.assetsV1AssetsPostWithHttpInfo(appID, authToken, assetCreateSchema, applyDefaultAcls, applyCollectionAcls, assignToCollection, _options);
        return result.toPromise();
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
    public assetsV1AssetsPost(appID: string, authToken: string, assetCreateSchema: AssetCreateSchema, applyDefaultAcls?: boolean, applyCollectionAcls?: boolean, assignToCollection?: boolean, _options?: Configuration): Promise<AssetSchema> {
        const result = this.api.assetsV1AssetsPost(appID, authToken, assetCreateSchema, applyDefaultAcls, applyCollectionAcls, assignToCollection, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Bulk update assets
     * @param appID 
     * @param authToken 
     * @param bulkAssetEditSchema body
     */
    public assetsV1AssetsPutWithHttpInfo(appID: string, authToken: string, bulkAssetEditSchema: BulkAssetEditSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsPutWithHttpInfo(appID, authToken, bulkAssetEditSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Bulk update assets
     * @param appID 
     * @param authToken 
     * @param bulkAssetEditSchema body
     */
    public assetsV1AssetsPut(appID: string, authToken: string, bulkAssetEditSchema: BulkAssetEditSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsPut(appID, authToken, bulkAssetEditSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_assets 
     * Trigger reindexing of all assets
     * @param appID 
     * @param authToken 
     * @param reindexAllAssetsSchema body
     */
    public assetsV1AssetsReindexPostWithHttpInfo(appID: string, authToken: string, reindexAllAssetsSchema?: ReindexAllAssetsSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsReindexPostWithHttpInfo(appID, authToken, reindexAllAssetsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_assets 
     * Trigger reindexing of all assets
     * @param appID 
     * @param authToken 
     * @param reindexAllAssetsSchema body
     */
    public assetsV1AssetsReindexPost(appID: string, authToken: string, reindexAllAssetsSchema?: ReindexAllAssetsSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsReindexPost(appID, authToken, reindexAllAssetsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_relations 
     * Create a new asset relation type
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsRelationTypesGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<RelationTypesSchema>> {
        const result = this.api.assetsV1AssetsRelationTypesGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_relations 
     * Create a new asset relation type
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsRelationTypesGet(appID: string, authToken: string, _options?: Configuration): Promise<RelationTypesSchema> {
        const result = this.api.assetsV1AssetsRelationTypesGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_relation_types 
     * Create a new asset relation type
     * @param appID 
     * @param authToken 
     * @param relationTypeSchema body
     */
    public assetsV1AssetsRelationTypesPostWithHttpInfo(appID: string, authToken: string, relationTypeSchema: RelationTypeSchema, _options?: Configuration): Promise<HttpInfo<RelationTypeSchema>> {
        const result = this.api.assetsV1AssetsRelationTypesPostWithHttpInfo(appID, authToken, relationTypeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_relation_types 
     * Create a new asset relation type
     * @param appID 
     * @param authToken 
     * @param relationTypeSchema body
     */
    public assetsV1AssetsRelationTypesPost(appID: string, authToken: string, relationTypeSchema: RelationTypeSchema, _options?: Configuration): Promise<RelationTypeSchema> {
        const result = this.api.assetsV1AssetsRelationTypesPost(appID, authToken, relationTypeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_asset_relation_types 
     * Delete an asset relation type
     * @param appID 
     * @param authToken 
     * @param relationType 
     */
    public assetsV1AssetsRelationTypesRelationTypeDeleteWithHttpInfo(appID: string, authToken: string, relationType: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsRelationTypesRelationTypeDeleteWithHttpInfo(appID, authToken, relationType, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_asset_relation_types 
     * Delete an asset relation type
     * @param appID 
     * @param authToken 
     * @param relationType 
     */
    public assetsV1AssetsRelationTypesRelationTypeDelete(appID: string, authToken: string, relationType: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsRelationTypesRelationTypeDelete(appID, authToken, relationType, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_relations 
     * Get a relation type
     * @param appID 
     * @param authToken 
     * @param relationType 
     */
    public assetsV1AssetsRelationTypesRelationTypeGetWithHttpInfo(appID: string, authToken: string, relationType: string, _options?: Configuration): Promise<HttpInfo<RelationTypeSchema>> {
        const result = this.api.assetsV1AssetsRelationTypesRelationTypeGetWithHttpInfo(appID, authToken, relationType, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_relations 
     * Get a relation type
     * @param appID 
     * @param authToken 
     * @param relationType 
     */
    public assetsV1AssetsRelationTypesRelationTypeGet(appID: string, authToken: string, relationType: string, _options?: Configuration): Promise<RelationTypeSchema> {
        const result = this.api.assetsV1AssetsRelationTypesRelationTypeGet(appID, authToken, relationType, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_relation_types 
     * Update an asset relation type
     * @param appID 
     * @param authToken 
     * @param relationType 
     * @param relationTypeSchema body
     */
    public assetsV1AssetsRelationTypesRelationTypePatchWithHttpInfo(appID: string, authToken: string, relationType: string, relationTypeSchema: RelationTypeSchema, _options?: Configuration): Promise<HttpInfo<RelationTypeSchema>> {
        const result = this.api.assetsV1AssetsRelationTypesRelationTypePatchWithHttpInfo(appID, authToken, relationType, relationTypeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_relation_types 
     * Update an asset relation type
     * @param appID 
     * @param authToken 
     * @param relationType 
     * @param relationTypeSchema body
     */
    public assetsV1AssetsRelationTypesRelationTypePatch(appID: string, authToken: string, relationType: string, relationTypeSchema: RelationTypeSchema, _options?: Configuration): Promise<RelationTypeSchema> {
        const result = this.api.assetsV1AssetsRelationTypesRelationTypePatch(appID, authToken, relationType, relationTypeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_relation_types 
     * Update an asset relation type
     * @param appID 
     * @param authToken 
     * @param relationType 
     * @param relationTypeSchema body
     */
    public assetsV1AssetsRelationTypesRelationTypePutWithHttpInfo(appID: string, authToken: string, relationType: string, relationTypeSchema: RelationTypeSchema, _options?: Configuration): Promise<HttpInfo<RelationTypeSchema>> {
        const result = this.api.assetsV1AssetsRelationTypesRelationTypePutWithHttpInfo(appID, authToken, relationType, relationTypeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_relation_types 
     * Update an asset relation type
     * @param appID 
     * @param authToken 
     * @param relationType 
     * @param relationTypeSchema body
     */
    public assetsV1AssetsRelationTypesRelationTypePut(appID: string, authToken: string, relationType: string, relationTypeSchema: RelationTypeSchema, _options?: Configuration): Promise<RelationTypeSchema> {
        const result = this.api.assetsV1AssetsRelationTypesRelationTypePut(appID, authToken, relationType, relationTypeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_segments 
     * Trigger reindexing of all segments
     * @param appID 
     * @param authToken 
     * @param reindexAllSegmentsSchema body
     */
    public assetsV1AssetsSegmentsReindexPostWithHttpInfo(appID: string, authToken: string, reindexAllSegmentsSchema: ReindexAllSegmentsSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsSegmentsReindexPostWithHttpInfo(appID, authToken, reindexAllSegmentsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_segments 
     * Trigger reindexing of all segments
     * @param appID 
     * @param authToken 
     * @param reindexAllSegmentsSchema body
     */
    public assetsV1AssetsSegmentsReindexPost(appID: string, authToken: string, reindexAllSegmentsSchema: ReindexAllSegmentsSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsSegmentsReindexPost(appID, authToken, reindexAllSegmentsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Returns list of ancestors of a collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public assetsV1CollectionsCollectionIdAncestorsGetWithHttpInfo(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<HttpInfo<CollectionsSchema>> {
        const result = this.api.assetsV1CollectionsCollectionIdAncestorsGetWithHttpInfo(appID, authToken, collectionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Returns list of ancestors of a collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public assetsV1CollectionsCollectionIdAncestorsGet(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<CollectionsSchema> {
        const result = this.api.assetsV1CollectionsCollectionIdAncestorsGet(appID, authToken, collectionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Returns all sub-collections and assets number for a specific collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param onlyActive If false, include all the contents
     */
    public assetsV1CollectionsCollectionIdContentInfoGetWithHttpInfo(appID: string, authToken: string, collectionId: string, onlyActive?: boolean, _options?: Configuration): Promise<HttpInfo<CollectionContentInfoSchema>> {
        const result = this.api.assetsV1CollectionsCollectionIdContentInfoGetWithHttpInfo(appID, authToken, collectionId, onlyActive, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Returns all sub-collections and assets number for a specific collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param onlyActive If false, include all the contents
     */
    public assetsV1CollectionsCollectionIdContentInfoGet(appID: string, authToken: string, collectionId: string, onlyActive?: boolean, _options?: Configuration): Promise<CollectionContentInfoSchema> {
        const result = this.api.assetsV1CollectionsCollectionIdContentInfoGet(appID, authToken, collectionId, onlyActive, _options);
        return result.toPromise();
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
    public assetsV1CollectionsCollectionIdContentsGetWithHttpInfo(appID: string, authToken: string, collectionId: string, objectTypes?: string, objectIds?: string, externalId?: string, perPage?: number, page?: number, sort?: string, filter?: string, _options?: Configuration): Promise<HttpInfo<AssetsSchema>> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsGetWithHttpInfo(appID, authToken, collectionId, objectTypes, objectIds, externalId, perPage, page, sort, filter, _options);
        return result.toPromise();
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
    public assetsV1CollectionsCollectionIdContentsGet(appID: string, authToken: string, collectionId: string, objectTypes?: string, objectIds?: string, externalId?: string, perPage?: number, page?: number, sort?: string, filter?: string, _options?: Configuration): Promise<AssetsSchema> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsGet(appID, authToken, collectionId, objectTypes, objectIds, externalId, perPage, page, sort, filter, _options);
        return result.toPromise();
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
    public assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDeleteWithHttpInfo(appID: string, authToken: string, collectionId: string, objectType: string, objectId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDeleteWithHttpInfo(appID, authToken, collectionId, objectType, objectId, _options);
        return result.toPromise();
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
    public assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDelete(appID: string, authToken: string, collectionId: string, objectType: string, objectId: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDelete(appID, authToken, collectionId, objectType, objectId, _options);
        return result.toPromise();
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
    public assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPutWithHttpInfo(appID: string, authToken: string, collectionId: string, objectType: string, objectId: string, collectionContentOrderingSchema: CollectionContentOrderingSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPutWithHttpInfo(appID, authToken, collectionId, objectType, objectId, collectionContentOrderingSchema, _options);
        return result.toPromise();
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
    public assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPut(appID: string, authToken: string, collectionId: string, objectType: string, objectId: string, collectionContentOrderingSchema: CollectionContentOrderingSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPut(appID, authToken, collectionId, objectType, objectId, collectionContentOrderingSchema, _options);
        return result.toPromise();
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
    public assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPostWithHttpInfo(appID: string, authToken: string, collectionId: string, objectType: string, objectId: string, reindexCollectionContentSchema: ReindexCollectionContentSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPostWithHttpInfo(appID, authToken, collectionId, objectType, objectId, reindexCollectionContentSchema, _options);
        return result.toPromise();
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
    public assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPost(appID: string, authToken: string, collectionId: string, objectType: string, objectId: string, reindexCollectionContentSchema: ReindexCollectionContentSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPost(appID, authToken, collectionId, objectType, objectId, reindexCollectionContentSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Disable custom ordering for a collection\'s content
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public assetsV1CollectionsCollectionIdContentsOrderingCustomDeleteWithHttpInfo(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsOrderingCustomDeleteWithHttpInfo(appID, authToken, collectionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Disable custom ordering for a collection\'s content
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public assetsV1CollectionsCollectionIdContentsOrderingCustomDelete(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsOrderingCustomDelete(appID, authToken, collectionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Enable custom ordering for a collection\'s content
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param createCollectionContentOrderingSchema body
     */
    public assetsV1CollectionsCollectionIdContentsOrderingCustomPostWithHttpInfo(appID: string, authToken: string, collectionId: string, createCollectionContentOrderingSchema: CreateCollectionContentOrderingSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsOrderingCustomPostWithHttpInfo(appID, authToken, collectionId, createCollectionContentOrderingSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Enable custom ordering for a collection\'s content
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param createCollectionContentOrderingSchema body
     */
    public assetsV1CollectionsCollectionIdContentsOrderingCustomPost(appID: string, authToken: string, collectionId: string, createCollectionContentOrderingSchema: CreateCollectionContentOrderingSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsOrderingCustomPost(appID, authToken, collectionId, createCollectionContentOrderingSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Add an object to a collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param collectionContentSchema body
     */
    public assetsV1CollectionsCollectionIdContentsPostWithHttpInfo(appID: string, authToken: string, collectionId: string, collectionContentSchema: CollectionContentSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsPostWithHttpInfo(appID, authToken, collectionId, collectionContentSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Add an object to a collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param collectionContentSchema body
     */
    public assetsV1CollectionsCollectionIdContentsPost(appID: string, authToken: string, collectionId: string, collectionContentSchema: CollectionContentSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsPost(appID, authToken, collectionId, collectionContentSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_collections 
     * Delete a particular collection by id
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public assetsV1CollectionsCollectionIdDeleteWithHttpInfo(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdDeleteWithHttpInfo(appID, authToken, collectionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_collections 
     * Delete a particular collection by id
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public assetsV1CollectionsCollectionIdDelete(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdDelete(appID, authToken, collectionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Gets the full path of the collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param getUploadPath Use to get the upload path instead of the full path
     */
    public assetsV1CollectionsCollectionIdFullPathGetWithHttpInfo(appID: string, authToken: string, collectionId: string, getUploadPath?: boolean, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.assetsV1CollectionsCollectionIdFullPathGetWithHttpInfo(appID, authToken, collectionId, getUploadPath, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Gets the full path of the collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param getUploadPath Use to get the upload path instead of the full path
     */
    public assetsV1CollectionsCollectionIdFullPathGet(appID: string, authToken: string, collectionId: string, getUploadPath?: boolean, _options?: Configuration): Promise<string> {
        const result = this.api.assetsV1CollectionsCollectionIdFullPathGet(appID, authToken, collectionId, getUploadPath, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Returns a particular collection by id
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public assetsV1CollectionsCollectionIdGetWithHttpInfo(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<HttpInfo<CollectionSchema>> {
        const result = this.api.assetsV1CollectionsCollectionIdGetWithHttpInfo(appID, authToken, collectionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Returns a particular collection by id
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public assetsV1CollectionsCollectionIdGet(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<CollectionSchema> {
        const result = this.api.assetsV1CollectionsCollectionIdGet(appID, authToken, collectionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Pick up to three asset_ids for collection keyframes
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param synchronizeCollectionKeyframesSchema body
     */
    public assetsV1CollectionsCollectionIdKeyframesPostWithHttpInfo(appID: string, authToken: string, collectionId: string, synchronizeCollectionKeyframesSchema: SynchronizeCollectionKeyframesSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdKeyframesPostWithHttpInfo(appID, authToken, collectionId, synchronizeCollectionKeyframesSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Pick up to three asset_ids for collection keyframes
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param synchronizeCollectionKeyframesSchema body
     */
    public assetsV1CollectionsCollectionIdKeyframesPost(appID: string, authToken: string, collectionId: string, synchronizeCollectionKeyframesSchema: SynchronizeCollectionKeyframesSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdKeyframesPost(appID, authToken, collectionId, synchronizeCollectionKeyframesSchema, _options);
        return result.toPromise();
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
    public assetsV1CollectionsCollectionIdPatchWithHttpInfo(appID: string, authToken: string, collectionId: string, collectionInputSchema: CollectionInputSchema, changeParentMode?: string, _options?: Configuration): Promise<HttpInfo<CollectionSchema>> {
        const result = this.api.assetsV1CollectionsCollectionIdPatchWithHttpInfo(appID, authToken, collectionId, collectionInputSchema, changeParentMode, _options);
        return result.toPromise();
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
    public assetsV1CollectionsCollectionIdPatch(appID: string, authToken: string, collectionId: string, collectionInputSchema: CollectionInputSchema, changeParentMode?: string, _options?: Configuration): Promise<CollectionSchema> {
        const result = this.api.assetsV1CollectionsCollectionIdPatch(appID, authToken, collectionId, collectionInputSchema, changeParentMode, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_collections 
     * Purges deleted collection by id immediately
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public assetsV1CollectionsCollectionIdPurgeDeleteWithHttpInfo(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdPurgeDeleteWithHttpInfo(appID, authToken, collectionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_collections 
     * Purges deleted collection by id immediately
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public assetsV1CollectionsCollectionIdPurgeDelete(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdPurgeDelete(appID, authToken, collectionId, _options);
        return result.toPromise();
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
    public assetsV1CollectionsCollectionIdPutWithHttpInfo(appID: string, authToken: string, collectionId: string, collectionInputSchema: CollectionInputSchema, changeParentMode?: string, _options?: Configuration): Promise<HttpInfo<CollectionSchema>> {
        const result = this.api.assetsV1CollectionsCollectionIdPutWithHttpInfo(appID, authToken, collectionId, collectionInputSchema, changeParentMode, _options);
        return result.toPromise();
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
    public assetsV1CollectionsCollectionIdPut(appID: string, authToken: string, collectionId: string, collectionInputSchema: CollectionInputSchema, changeParentMode?: string, _options?: Configuration): Promise<CollectionSchema> {
        const result = this.api.assetsV1CollectionsCollectionIdPut(appID, authToken, collectionId, collectionInputSchema, changeParentMode, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Reindex collection and its content
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public assetsV1CollectionsCollectionIdReindexContentsPostWithHttpInfo(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdReindexContentsPostWithHttpInfo(appID, authToken, collectionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Reindex collection and its content
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public assetsV1CollectionsCollectionIdReindexContentsPost(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdReindexContentsPost(appID, authToken, collectionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Reindex collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param reindexCollectionSchema body
     */
    public assetsV1CollectionsCollectionIdReindexPostWithHttpInfo(appID: string, authToken: string, collectionId: string, reindexCollectionSchema: ReindexCollectionSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdReindexPostWithHttpInfo(appID, authToken, collectionId, reindexCollectionSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Reindex collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param reindexCollectionSchema body
     */
    public assetsV1CollectionsCollectionIdReindexPost(appID: string, authToken: string, collectionId: string, reindexCollectionSchema: ReindexCollectionSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdReindexPost(appID, authToken, collectionId, reindexCollectionSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Restore deleted collection by id
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public assetsV1CollectionsCollectionIdRestorePutWithHttpInfo(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdRestorePutWithHttpInfo(appID, authToken, collectionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Restore deleted collection by id
     * @param appID 
     * @param authToken 
     * @param collectionId 
     */
    public assetsV1CollectionsCollectionIdRestorePut(appID: string, authToken: string, collectionId: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdRestorePut(appID, authToken, collectionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Update metadata for collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param collectionSchema body
     */
    public assetsV1CollectionsCollectionIdSearchDocumentPutWithHttpInfo(appID: string, authToken: string, collectionId: string, collectionSchema: CollectionSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdSearchDocumentPutWithHttpInfo(appID, authToken, collectionId, collectionSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Update metadata for collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param collectionSchema body
     */
    public assetsV1CollectionsCollectionIdSearchDocumentPut(appID: string, authToken: string, collectionId: string, collectionSchema: CollectionSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdSearchDocumentPut(appID, authToken, collectionId, collectionSchema, _options);
        return result.toPromise();
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
    public assetsV1CollectionsCollectionIdSizeGetWithHttpInfo(appID: string, authToken: string, collectionId: string, formatName?: string, includeSubcollections?: boolean, _options?: Configuration): Promise<HttpInfo<CollectionSizeSchema>> {
        const result = this.api.assetsV1CollectionsCollectionIdSizeGetWithHttpInfo(appID, authToken, collectionId, formatName, includeSubcollections, _options);
        return result.toPromise();
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
    public assetsV1CollectionsCollectionIdSizeGet(appID: string, authToken: string, collectionId: string, formatName?: string, includeSubcollections?: boolean, _options?: Configuration): Promise<CollectionSizeSchema> {
        const result = this.api.assetsV1CollectionsCollectionIdSizeGet(appID, authToken, collectionId, formatName, includeSubcollections, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Copy a collection (recursively) in to another collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param collectionContentSchema body
     */
    public assetsV1CollectionsCollectionIdSubcollectionsPostWithHttpInfo(appID: string, authToken: string, collectionId: string, collectionContentSchema: CollectionContentSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdSubcollectionsPostWithHttpInfo(appID, authToken, collectionId, collectionContentSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Copy a collection (recursively) in to another collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param collectionContentSchema body
     */
    public assetsV1CollectionsCollectionIdSubcollectionsPost(appID: string, authToken: string, collectionId: string, collectionContentSchema: CollectionContentSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdSubcollectionsPost(appID, authToken, collectionId, collectionContentSchema, _options);
        return result.toPromise();
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
    public assetsV1CollectionsGetWithHttpInfo(appID: string, authToken: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, sort?: string, isRoot?: string, status?: string, _options?: Configuration): Promise<HttpInfo<CollectionsSchema>> {
        const result = this.api.assetsV1CollectionsGetWithHttpInfo(appID, authToken, perPage, page, scroll, scrollId, sort, isRoot, status, _options);
        return result.toPromise();
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
    public assetsV1CollectionsGet(appID: string, authToken: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, sort?: string, isRoot?: string, status?: string, _options?: Configuration): Promise<CollectionsSchema> {
        const result = this.api.assetsV1CollectionsGet(appID, authToken, perPage, page, scroll, scrollId, sort, isRoot, status, _options);
        return result.toPromise();
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
    public assetsV1CollectionsPostWithHttpInfo(appID: string, authToken: string, collectionInputSchema: CollectionInputSchema, applyDefaultAcls?: boolean, applyCollectionAcls?: boolean, restrictCollectionAcls?: boolean, _options?: Configuration): Promise<HttpInfo<CollectionSchema>> {
        const result = this.api.assetsV1CollectionsPostWithHttpInfo(appID, authToken, collectionInputSchema, applyDefaultAcls, applyCollectionAcls, restrictCollectionAcls, _options);
        return result.toPromise();
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
    public assetsV1CollectionsPost(appID: string, authToken: string, collectionInputSchema: CollectionInputSchema, applyDefaultAcls?: boolean, applyCollectionAcls?: boolean, restrictCollectionAcls?: boolean, _options?: Configuration): Promise<CollectionSchema> {
        const result = this.api.assetsV1CollectionsPost(appID, authToken, collectionInputSchema, applyDefaultAcls, applyCollectionAcls, restrictCollectionAcls, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Trigger reindexing of all collections
     * @param appID 
     * @param authToken 
     * @param reindexAllCollectionsSchema body
     */
    public assetsV1CollectionsReindexPostWithHttpInfo(appID: string, authToken: string, reindexAllCollectionsSchema?: ReindexAllCollectionsSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsReindexPostWithHttpInfo(appID, authToken, reindexAllCollectionsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Trigger reindexing of all collections
     * @param appID 
     * @param authToken 
     * @param reindexAllCollectionsSchema body
     */
    public assetsV1CollectionsReindexPost(appID: string, authToken: string, reindexAllCollectionsSchema?: ReindexAllCollectionsSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsReindexPost(appID, authToken, reindexAllCollectionsSchema, _options);
        return result.toPromise();
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
    public assetsV1CustomActionsContextActionIdCallbackPostWithHttpInfo(appID: string, authToken: string, context: string, actionId: string, customActionCallbackSchema: CustomActionCallbackSchema, _options?: Configuration): Promise<HttpInfo<CustomActionCallbackReplySchema>> {
        const result = this.api.assetsV1CustomActionsContextActionIdCallbackPostWithHttpInfo(appID, authToken, context, actionId, customActionCallbackSchema, _options);
        return result.toPromise();
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
    public assetsV1CustomActionsContextActionIdCallbackPost(appID: string, authToken: string, context: string, actionId: string, customActionCallbackSchema: CustomActionCallbackSchema, _options?: Configuration): Promise<CustomActionCallbackReplySchema> {
        const result = this.api.assetsV1CustomActionsContextActionIdCallbackPost(appID, authToken, context, actionId, customActionCallbackSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Deletes an custom action
     * @param appID 
     * @param authToken 
     * @param context 
     * @param actionId 
     */
    public assetsV1CustomActionsContextActionIdDeleteWithHttpInfo(appID: string, authToken: string, context: string, actionId: string, _options?: Configuration): Promise<HttpInfo<CustomActionSchema>> {
        const result = this.api.assetsV1CustomActionsContextActionIdDeleteWithHttpInfo(appID, authToken, context, actionId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Deletes an custom action
     * @param appID 
     * @param authToken 
     * @param context 
     * @param actionId 
     */
    public assetsV1CustomActionsContextActionIdDelete(appID: string, authToken: string, context: string, actionId: string, _options?: Configuration): Promise<CustomActionSchema> {
        const result = this.api.assetsV1CustomActionsContextActionIdDelete(appID, authToken, context, actionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_custom_actions 
     * Get an asset custom action
     * @param appID 
     * @param authToken 
     * @param context 
     * @param actionId 
     */
    public assetsV1CustomActionsContextActionIdGetWithHttpInfo(appID: string, authToken: string, context: string, actionId: string, _options?: Configuration): Promise<HttpInfo<CustomActionSchema>> {
        const result = this.api.assetsV1CustomActionsContextActionIdGetWithHttpInfo(appID, authToken, context, actionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_custom_actions 
     * Get an asset custom action
     * @param appID 
     * @param authToken 
     * @param context 
     * @param actionId 
     */
    public assetsV1CustomActionsContextActionIdGet(appID: string, authToken: string, context: string, actionId: string, _options?: Configuration): Promise<CustomActionSchema> {
        const result = this.api.assetsV1CustomActionsContextActionIdGet(appID, authToken, context, actionId, _options);
        return result.toPromise();
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
    public assetsV1CustomActionsContextActionIdPatchWithHttpInfo(appID: string, authToken: string, context: string, actionId: string, customActionSchema: CustomActionSchema, _options?: Configuration): Promise<HttpInfo<CustomActionSchema>> {
        const result = this.api.assetsV1CustomActionsContextActionIdPatchWithHttpInfo(appID, authToken, context, actionId, customActionSchema, _options);
        return result.toPromise();
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
    public assetsV1CustomActionsContextActionIdPatch(appID: string, authToken: string, context: string, actionId: string, customActionSchema: CustomActionSchema, _options?: Configuration): Promise<CustomActionSchema> {
        const result = this.api.assetsV1CustomActionsContextActionIdPatch(appID, authToken, context, actionId, customActionSchema, _options);
        return result.toPromise();
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
    public assetsV1CustomActionsContextActionIdPutWithHttpInfo(appID: string, authToken: string, context: string, actionId: string, customActionSchema: CustomActionSchema, _options?: Configuration): Promise<HttpInfo<CustomActionSchema>> {
        const result = this.api.assetsV1CustomActionsContextActionIdPutWithHttpInfo(appID, authToken, context, actionId, customActionSchema, _options);
        return result.toPromise();
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
    public assetsV1CustomActionsContextActionIdPut(appID: string, authToken: string, context: string, actionId: string, customActionSchema: CustomActionSchema, _options?: Configuration): Promise<CustomActionSchema> {
        const result = this.api.assetsV1CustomActionsContextActionIdPut(appID, authToken, context, actionId, customActionSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_custom_actions 
     * Get list of custom actions by context
     * @param appID 
     * @param authToken 
     * @param context 
     */
    public assetsV1CustomActionsContextGetWithHttpInfo(appID: string, authToken: string, context: string, _options?: Configuration): Promise<HttpInfo<CustomActionsSchema>> {
        const result = this.api.assetsV1CustomActionsContextGetWithHttpInfo(appID, authToken, context, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_custom_actions 
     * Get list of custom actions by context
     * @param appID 
     * @param authToken 
     * @param context 
     */
    public assetsV1CustomActionsContextGet(appID: string, authToken: string, context: string, _options?: Configuration): Promise<CustomActionsSchema> {
        const result = this.api.assetsV1CustomActionsContextGet(appID, authToken, context, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create an custom action
     * @param appID 
     * @param authToken 
     * @param context 
     * @param customActionSchema body
     */
    public assetsV1CustomActionsContextPostWithHttpInfo(appID: string, authToken: string, context: string, customActionSchema: CustomActionSchema, _options?: Configuration): Promise<HttpInfo<CustomActionSchema>> {
        const result = this.api.assetsV1CustomActionsContextPostWithHttpInfo(appID, authToken, context, customActionSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create an custom action
     * @param appID 
     * @param authToken 
     * @param context 
     * @param customActionSchema body
     */
    public assetsV1CustomActionsContextPost(appID: string, authToken: string, context: string, customActionSchema: CustomActionSchema, _options?: Configuration): Promise<CustomActionSchema> {
        const result = this.api.assetsV1CustomActionsContextPost(appID, authToken, context, customActionSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_custom_actions 
     * Get list of custom actions
     * @param appID 
     * @param authToken 
     */
    public assetsV1CustomActionsGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<CustomActionsSchema>> {
        const result = this.api.assetsV1CustomActionsGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_custom_actions 
     * Get list of custom actions
     * @param appID 
     * @param authToken 
     */
    public assetsV1CustomActionsGet(appID: string, authToken: string, _options?: Configuration): Promise<CustomActionsSchema> {
        const result = this.api.assetsV1CustomActionsGet(appID, authToken, _options);
        return result.toPromise();
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
    public assetsV1CustomActionsSharedContextActionIdCallbackPostWithHttpInfo(appID: string, authToken: string, context: string, actionId: string, customActionCallbackSchema: CustomActionCallbackSchema, _options?: Configuration): Promise<HttpInfo<CustomActionCallbackReplySchema>> {
        const result = this.api.assetsV1CustomActionsSharedContextActionIdCallbackPostWithHttpInfo(appID, authToken, context, actionId, customActionCallbackSchema, _options);
        return result.toPromise();
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
    public assetsV1CustomActionsSharedContextActionIdCallbackPost(appID: string, authToken: string, context: string, actionId: string, customActionCallbackSchema: CustomActionCallbackSchema, _options?: Configuration): Promise<CustomActionCallbackReplySchema> {
        const result = this.api.assetsV1CustomActionsSharedContextActionIdCallbackPost(appID, authToken, context, actionId, customActionCallbackSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Delete assets from delete queue (Mark assets as active again)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public assetsV1DeleteQueueAssetsDeleteWithHttpInfo(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueAssetsDeleteWithHttpInfo(appID, authToken, deleteQueueSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Delete assets from delete queue (Mark assets as active again)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public assetsV1DeleteQueueAssetsDelete(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueAssetsDelete(appID, authToken, deleteQueueSchema, _options);
        return result.toPromise();
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
    public assetsV1DeleteQueueAssetsGetWithHttpInfo(appID: string, authToken: string, perPage?: number, page?: number, sort?: string, filter?: string, _options?: Configuration): Promise<HttpInfo<AssetsSchema>> {
        const result = this.api.assetsV1DeleteQueueAssetsGetWithHttpInfo(appID, authToken, perPage, page, sort, filter, _options);
        return result.toPromise();
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
    public assetsV1DeleteQueueAssetsGet(appID: string, authToken: string, perPage?: number, page?: number, sort?: string, filter?: string, _options?: Configuration): Promise<AssetsSchema> {
        const result = this.api.assetsV1DeleteQueueAssetsGet(appID, authToken, perPage, page, sort, filter, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Add assets to a delete queue (Mark assets as deleted)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public assetsV1DeleteQueueAssetsPostWithHttpInfo(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueAssetsPostWithHttpInfo(appID, authToken, deleteQueueSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Add assets to a delete queue (Mark assets as deleted)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public assetsV1DeleteQueueAssetsPost(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueAssetsPost(appID, authToken, deleteQueueSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_assets 
     * Purge all assets from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueAssetsPurgeAllPostWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueAssetsPurgeAllPostWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_assets 
     * Purge all assets from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueAssetsPurgeAllPost(appID: string, authToken: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueAssetsPurgeAllPost(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_assets 
     * Purge assets from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public assetsV1DeleteQueueAssetsPurgePostWithHttpInfo(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueAssetsPurgePostWithHttpInfo(appID, authToken, deleteQueueSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_assets 
     * Purge assets from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public assetsV1DeleteQueueAssetsPurgePost(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueAssetsPurgePost(appID, authToken, deleteQueueSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Restore all assets from delete queue
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueAssetsRestoreAllPostWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueAssetsRestoreAllPostWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Restore all assets from delete queue
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueAssetsRestoreAllPost(appID: string, authToken: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueAssetsRestoreAllPost(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Bulk delete objects
     * @param appID 
     * @param authToken 
     * @param bulkDeleteSchema body
     */
    public assetsV1DeleteQueueBulkPostWithHttpInfo(appID: string, authToken: string, bulkDeleteSchema: BulkDeleteSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueBulkPostWithHttpInfo(appID, authToken, bulkDeleteSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Bulk delete objects
     * @param appID 
     * @param authToken 
     * @param bulkDeleteSchema body
     */
    public assetsV1DeleteQueueBulkPost(appID: string, authToken: string, bulkDeleteSchema: BulkDeleteSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueBulkPost(appID, authToken, bulkDeleteSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Delete collections from delete queue (Mark collections as active again)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public assetsV1DeleteQueueCollectionsDeleteWithHttpInfo(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueCollectionsDeleteWithHttpInfo(appID, authToken, deleteQueueSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Delete collections from delete queue (Mark collections as active again)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public assetsV1DeleteQueueCollectionsDelete(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueCollectionsDelete(appID, authToken, deleteQueueSchema, _options);
        return result.toPromise();
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
    public assetsV1DeleteQueueCollectionsGetWithHttpInfo(appID: string, authToken: string, perPage?: number, page?: number, sort?: string, filter?: string, _options?: Configuration): Promise<HttpInfo<CollectionsSchema>> {
        const result = this.api.assetsV1DeleteQueueCollectionsGetWithHttpInfo(appID, authToken, perPage, page, sort, filter, _options);
        return result.toPromise();
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
    public assetsV1DeleteQueueCollectionsGet(appID: string, authToken: string, perPage?: number, page?: number, sort?: string, filter?: string, _options?: Configuration): Promise<CollectionsSchema> {
        const result = this.api.assetsV1DeleteQueueCollectionsGet(appID, authToken, perPage, page, sort, filter, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_collections 
     * Add collections to a delete queue (Mark collections as deleted)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public assetsV1DeleteQueueCollectionsPostWithHttpInfo(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueCollectionsPostWithHttpInfo(appID, authToken, deleteQueueSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_collections 
     * Add collections to a delete queue (Mark collections as deleted)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public assetsV1DeleteQueueCollectionsPost(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueCollectionsPost(appID, authToken, deleteQueueSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_collections 
     * Purge all collections from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueCollectionsPurgeAllPostWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueCollectionsPurgeAllPostWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_collections 
     * Purge all collections from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueCollectionsPurgeAllPost(appID: string, authToken: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueCollectionsPurgeAllPost(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_collections 
     * Purge collections from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public assetsV1DeleteQueueCollectionsPurgePostWithHttpInfo(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueCollectionsPurgePostWithHttpInfo(appID, authToken, deleteQueueSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_collections 
     * Purge collections from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public assetsV1DeleteQueueCollectionsPurgePost(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueCollectionsPurgePost(appID, authToken, deleteQueueSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Restore all collections from delete queue
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueCollectionsRestoreAllPostWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueCollectionsRestoreAllPostWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Restore all collections from delete queue
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueCollectionsRestoreAllPost(appID: string, authToken: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueCollectionsRestoreAllPost(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_assets - can_purge_collections 
     * Purge all assets and collections from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueuePurgeAllPostWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueuePurgeAllPostWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_assets - can_purge_collections 
     * Purge all assets and collections from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueuePurgeAllPost(appID: string, authToken: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueuePurgeAllPost(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_favorites 
     * Removes all assets/collections from the list of favourites
     * @param appID 
     * @param authToken 
     */
    public assetsV1FavoritesAllDeleteWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1FavoritesAllDeleteWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_favorites 
     * Removes all assets/collections from the list of favourites
     * @param appID 
     * @param authToken 
     */
    public assetsV1FavoritesAllDelete(appID: string, authToken: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1FavoritesAllDelete(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_favorites 
     * Deletes objects items from a list of favorites
     * @param appID 
     * @param authToken 
     * @param bulkDeleteFromFavoritesSchema body
     */
    public assetsV1FavoritesDeleteWithHttpInfo(appID: string, authToken: string, bulkDeleteFromFavoritesSchema: BulkDeleteFromFavoritesSchema, _options?: Configuration): Promise<HttpInfo<BulkDeleteFromFavoritesSchema>> {
        const result = this.api.assetsV1FavoritesDeleteWithHttpInfo(appID, authToken, bulkDeleteFromFavoritesSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_favorites 
     * Deletes objects items from a list of favorites
     * @param appID 
     * @param authToken 
     * @param bulkDeleteFromFavoritesSchema body
     */
    public assetsV1FavoritesDelete(appID: string, authToken: string, bulkDeleteFromFavoritesSchema: BulkDeleteFromFavoritesSchema, _options?: Configuration): Promise<BulkDeleteFromFavoritesSchema> {
        const result = this.api.assetsV1FavoritesDelete(appID, authToken, bulkDeleteFromFavoritesSchema, _options);
        return result.toPromise();
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
    public assetsV1FavoritesGetWithHttpInfo(appID: string, authToken: string, perPage?: number, page?: number, sort?: string, _options?: Configuration): Promise<HttpInfo<FavoritesSchema>> {
        const result = this.api.assetsV1FavoritesGetWithHttpInfo(appID, authToken, perPage, page, sort, _options);
        return result.toPromise();
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
    public assetsV1FavoritesGet(appID: string, authToken: string, perPage?: number, page?: number, sort?: string, _options?: Configuration): Promise<FavoritesSchema> {
        const result = this.api.assetsV1FavoritesGet(appID, authToken, perPage, page, sort, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_favorites 
     * Adds multiple objects to a list of favorites
     * @param appID 
     * @param authToken 
     * @param bulkAddToFavoritesSchema body
     */
    public assetsV1FavoritesPostWithHttpInfo(appID: string, authToken: string, bulkAddToFavoritesSchema: BulkAddToFavoritesSchema, _options?: Configuration): Promise<HttpInfo<BulkAddToFavoritesSchema>> {
        const result = this.api.assetsV1FavoritesPostWithHttpInfo(appID, authToken, bulkAddToFavoritesSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_favorites 
     * Adds multiple objects to a list of favorites
     * @param appID 
     * @param authToken 
     * @param bulkAddToFavoritesSchema body
     */
    public assetsV1FavoritesPost(appID: string, authToken: string, bulkAddToFavoritesSchema: BulkAddToFavoritesSchema, _options?: Configuration): Promise<BulkAddToFavoritesSchema> {
        const result = this.api.assetsV1FavoritesPost(appID, authToken, bulkAddToFavoritesSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_favorites 
     * Removes all assets/collections from the list of favourites
     * @param appID 
     * @param authToken 
     */
    public assetsV1FavouritesAllDeleteWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1FavouritesAllDeleteWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_favorites 
     * Removes all assets/collections from the list of favourites
     * @param appID 
     * @param authToken 
     */
    public assetsV1FavouritesAllDelete(appID: string, authToken: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1FavouritesAllDelete(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Deletes an objects approval status
     * @param appID 
     * @param authToken 
     * @param objectId 
     * @param objectType 
     */
    public assetsV1ObjectTypeObjectIdApprovalsDeleteWithHttpInfo(appID: string, authToken: string, objectId: string, objectType: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsDeleteWithHttpInfo(appID, authToken, objectId, objectType, _options);
        return result.toPromise();
    }

    /**
     * 
     * Deletes an objects approval status
     * @param appID 
     * @param authToken 
     * @param objectId 
     * @param objectType 
     */
    public assetsV1ObjectTypeObjectIdApprovalsDelete(appID: string, authToken: string, objectId: string, objectType: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsDelete(appID, authToken, objectId, objectType, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdApprovalsExternalEmailDeleteWithHttpInfo(appID: string, authToken: string, objectId: string, objectType: string, email: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsExternalEmailDeleteWithHttpInfo(appID, authToken, objectId, objectType, email, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdApprovalsExternalEmailDelete(appID: string, authToken: string, objectId: string, objectType: string, email: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsExternalEmailDelete(appID, authToken, objectId, objectType, email, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_approval_request 
     * Returns an objects approval request
     * @param appID 
     * @param authToken 
     * @param objectId 
     * @param objectType 
     */
    public assetsV1ObjectTypeObjectIdApprovalsGetWithHttpInfo(appID: string, authToken: string, objectId: string, objectType: string, _options?: Configuration): Promise<HttpInfo<ApprovalsBySchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsGetWithHttpInfo(appID, authToken, objectId, objectType, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_approval_request 
     * Returns an objects approval request
     * @param appID 
     * @param authToken 
     * @param objectId 
     * @param objectType 
     */
    public assetsV1ObjectTypeObjectIdApprovalsGet(appID: string, authToken: string, objectId: string, objectType: string, _options?: Configuration): Promise<ApprovalsBySchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsGet(appID, authToken, objectId, objectType, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdApprovalsPutWithHttpInfo(appID: string, authToken: string, objectId: string, objectType: string, approvalBySchema: ApprovalBySchema, _options?: Configuration): Promise<HttpInfo<ApprovalBySchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsPutWithHttpInfo(appID, authToken, objectId, objectType, approvalBySchema, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdApprovalsPut(appID: string, authToken: string, objectId: string, objectType: string, approvalBySchema: ApprovalBySchema, _options?: Configuration): Promise<ApprovalBySchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsPut(appID, authToken, objectId, objectType, approvalBySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_approval_request 
     * Deletes an objects approval request
     * @param appID 
     * @param authToken 
     * @param objectId 
     * @param objectType 
     */
    public assetsV1ObjectTypeObjectIdApprovalsRequestDeleteWithHttpInfo(appID: string, authToken: string, objectId: string, objectType: string, _options?: Configuration): Promise<HttpInfo<ApprovalSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsRequestDeleteWithHttpInfo(appID, authToken, objectId, objectType, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_approval_request 
     * Deletes an objects approval request
     * @param appID 
     * @param authToken 
     * @param objectId 
     * @param objectType 
     */
    public assetsV1ObjectTypeObjectIdApprovalsRequestDelete(appID: string, authToken: string, objectId: string, objectType: string, _options?: Configuration): Promise<ApprovalSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsRequestDelete(appID, authToken, objectId, objectType, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_approval_request 
     * Returns an objects approval request
     * @param appID 
     * @param authToken 
     * @param objectId 
     * @param objectType 
     */
    public assetsV1ObjectTypeObjectIdApprovalsRequestGetWithHttpInfo(appID: string, authToken: string, objectId: string, objectType: string, _options?: Configuration): Promise<HttpInfo<ApprovalSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsRequestGetWithHttpInfo(appID, authToken, objectId, objectType, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_approval_request 
     * Returns an objects approval request
     * @param appID 
     * @param authToken 
     * @param objectId 
     * @param objectType 
     */
    public assetsV1ObjectTypeObjectIdApprovalsRequestGet(appID: string, authToken: string, objectId: string, objectType: string, _options?: Configuration): Promise<ApprovalSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsRequestGet(appID, authToken, objectId, objectType, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdApprovalsRequestPatchWithHttpInfo(appID: string, authToken: string, objectId: string, objectType: string, approvalSchema: ApprovalSchema, _options?: Configuration): Promise<HttpInfo<ApprovalSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsRequestPatchWithHttpInfo(appID, authToken, objectId, objectType, approvalSchema, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdApprovalsRequestPatch(appID: string, authToken: string, objectId: string, objectType: string, approvalSchema: ApprovalSchema, _options?: Configuration): Promise<ApprovalSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsRequestPatch(appID, authToken, objectId, objectType, approvalSchema, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdApprovalsRequestPostWithHttpInfo(appID: string, authToken: string, objectId: string, objectType: string, approvalSchema: ApprovalSchema, _options?: Configuration): Promise<HttpInfo<ApprovalSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsRequestPostWithHttpInfo(appID, authToken, objectId, objectType, approvalSchema, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdApprovalsRequestPost(appID: string, authToken: string, objectId: string, objectType: string, approvalSchema: ApprovalSchema, _options?: Configuration): Promise<ApprovalSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsRequestPost(appID, authToken, objectId, objectType, approvalSchema, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdApprovalsRequestPutWithHttpInfo(appID: string, authToken: string, objectId: string, objectType: string, approvalSchema: ApprovalSchema, _options?: Configuration): Promise<HttpInfo<ApprovalSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsRequestPutWithHttpInfo(appID, authToken, objectId, objectType, approvalSchema, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdApprovalsRequestPut(appID: string, authToken: string, objectId: string, objectType: string, approvalSchema: ApprovalSchema, _options?: Configuration): Promise<ApprovalSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsRequestPut(appID, authToken, objectId, objectType, approvalSchema, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdApprovalsUserUserIdDeleteWithHttpInfo(appID: string, authToken: string, objectId: string, objectType: string, userId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsUserUserIdDeleteWithHttpInfo(appID, authToken, objectId, objectType, userId, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdApprovalsUserUserIdDelete(appID: string, authToken: string, objectId: string, objectType: string, userId: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsUserUserIdDelete(appID, authToken, objectId, objectType, userId, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesGetWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<SharesSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesGetWithHttpInfo(appID, authToken, objectType, objectId, perPage, lastId, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesGet(appID: string, authToken: string, objectType: string, objectId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<SharesSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesGet(appID, authToken, objectType, objectId, perPage, lastId, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesPostWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, shareCreateSchema: ShareCreateSchema, isApproval?: boolean, _options?: Configuration): Promise<HttpInfo<ShareSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesPostWithHttpInfo(appID, authToken, objectType, objectId, shareCreateSchema, isApproval, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesPost(appID: string, authToken: string, objectType: string, objectId: string, shareCreateSchema: ShareCreateSchema, isApproval?: boolean, _options?: Configuration): Promise<ShareSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesPost(appID, authToken, objectType, objectId, shareCreateSchema, isApproval, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesShareIdDeleteWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdDeleteWithHttpInfo(appID, authToken, objectType, objectId, shareId, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesShareIdDelete(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdDelete(appID, authToken, objectType, objectId, shareId, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesShareIdGetWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, _options?: Configuration): Promise<HttpInfo<ShareSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdGetWithHttpInfo(appID, authToken, objectType, objectId, shareId, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesShareIdGet(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, _options?: Configuration): Promise<ShareSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdGet(appID, authToken, objectType, objectId, shareId, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesShareIdPutWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, shareSchema: ShareSchema, _options?: Configuration): Promise<HttpInfo<ShareSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdPutWithHttpInfo(appID, authToken, objectType, objectId, shareId, shareSchema, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesShareIdPut(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, shareSchema: ShareSchema, _options?: Configuration): Promise<ShareSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdPut(appID, authToken, objectType, objectId, shareId, shareSchema, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersGetWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<ShareUsersSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersGetWithHttpInfo(appID, authToken, objectType, objectId, shareId, perPage, lastId, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersGet(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<ShareUsersSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersGet(appID, authToken, objectType, objectId, shareId, perPage, lastId, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersPostWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, shareUserSchema: ShareUserSchema, _options?: Configuration): Promise<HttpInfo<ShareUserSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersPostWithHttpInfo(appID, authToken, objectType, objectId, shareId, shareUserSchema, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersPost(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, shareUserSchema: ShareUserSchema, _options?: Configuration): Promise<ShareUserSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersPost(appID, authToken, objectType, objectId, shareId, shareUserSchema, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDeleteWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, shareUserId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDeleteWithHttpInfo(appID, authToken, objectType, objectId, shareId, shareUserId, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDelete(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, shareUserId: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDelete(appID, authToken, objectType, objectId, shareId, shareUserId, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGetWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, shareUserId: string, _options?: Configuration): Promise<HttpInfo<ShareUserSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGetWithHttpInfo(appID, authToken, objectType, objectId, shareId, shareUserId, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGet(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, shareUserId: string, _options?: Configuration): Promise<ShareUserSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGet(appID, authToken, objectType, objectId, shareId, shareUserId, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatchWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, shareUserId: string, shareUserSchema: ShareUserSchema, _options?: Configuration): Promise<HttpInfo<ShareUserSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatchWithHttpInfo(appID, authToken, objectType, objectId, shareId, shareUserId, shareUserSchema, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatch(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, shareUserId: string, shareUserSchema: ShareUserSchema, _options?: Configuration): Promise<ShareUserSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatch(appID, authToken, objectType, objectId, shareId, shareUserId, shareUserSchema, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPutWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, shareUserId: string, shareUserSchema: ShareUserSchema, _options?: Configuration): Promise<HttpInfo<ShareUserSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPutWithHttpInfo(appID, authToken, objectType, objectId, shareId, shareUserId, shareUserSchema, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPut(appID: string, authToken: string, objectType: string, objectId: string, shareId: string, shareUserId: string, shareUserSchema: ShareUserSchema, _options?: Configuration): Promise<ShareUserSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPut(appID, authToken, objectType, objectId, shareId, shareUserId, shareUserSchema, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesUrlPostWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, shareURLCreateSchema: ShareURLCreateSchema, _options?: Configuration): Promise<HttpInfo<ShareURLSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesUrlPostWithHttpInfo(appID, authToken, objectType, objectId, shareURLCreateSchema, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdSharesUrlPost(appID: string, authToken: string, objectType: string, objectId: string, shareURLCreateSchema: ShareURLCreateSchema, _options?: Configuration): Promise<ShareURLSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesUrlPost(appID, authToken, objectType, objectId, shareURLCreateSchema, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGetWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, versionId: string, _options?: Configuration): Promise<HttpInfo<ApprovalsBySchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGetWithHttpInfo(appID, authToken, objectType, objectId, versionId, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGet(appID: string, authToken: string, objectType: string, objectId: string, versionId: string, _options?: Configuration): Promise<ApprovalsBySchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGet(appID, authToken, objectType, objectId, versionId, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGetWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, versionId: string, _options?: Configuration): Promise<HttpInfo<ApprovalSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGetWithHttpInfo(appID, authToken, objectType, objectId, versionId, _options);
        return result.toPromise();
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
    public assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGet(appID: string, authToken: string, objectType: string, objectId: string, versionId: string, _options?: Configuration): Promise<ApprovalSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGet(appID, authToken, objectType, objectId, versionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_segments 
     * Trigger reindexing of specific segment ids
     * @param appID 
     * @param authToken 
     * @param reindexSegmentsSchema body
     */
    public assetsV1SegmentsReindexPostWithHttpInfo(appID: string, authToken: string, reindexSegmentsSchema: ReindexSegmentsSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1SegmentsReindexPostWithHttpInfo(appID, authToken, reindexSegmentsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_segments 
     * Trigger reindexing of specific segment ids
     * @param appID 
     * @param authToken 
     * @param reindexSegmentsSchema body
     */
    public assetsV1SegmentsReindexPost(appID: string, authToken: string, reindexSegmentsSchema: ReindexSegmentsSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1SegmentsReindexPost(appID, authToken, reindexSegmentsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_shares 
     * Create a new share of multiple objects (currently only assets are supported)
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param bulkShareCreateSchema body
     */
    public assetsV1ShareObjectTypePostWithHttpInfo(appID: string, authToken: string, objectType: string, bulkShareCreateSchema: BulkShareCreateSchema, _options?: Configuration): Promise<HttpInfo<ShareSchema>> {
        const result = this.api.assetsV1ShareObjectTypePostWithHttpInfo(appID, authToken, objectType, bulkShareCreateSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_shares 
     * Create a new share of multiple objects (currently only assets are supported)
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param bulkShareCreateSchema body
     */
    public assetsV1ShareObjectTypePost(appID: string, authToken: string, objectType: string, bulkShareCreateSchema: BulkShareCreateSchema, _options?: Configuration): Promise<ShareSchema> {
        const result = this.api.assetsV1ShareObjectTypePost(appID, authToken, objectType, bulkShareCreateSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Login for share
     * @param appID 
     * @param shareLoginSchema body
     */
    public assetsV1SharesAuthLoginPostWithHttpInfo(appID: string, shareLoginSchema: ShareLoginSchema, _options?: Configuration): Promise<HttpInfo<ShareTokenSchema>> {
        const result = this.api.assetsV1SharesAuthLoginPostWithHttpInfo(appID, shareLoginSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Login for share
     * @param appID 
     * @param shareLoginSchema body
     */
    public assetsV1SharesAuthLoginPost(appID: string, shareLoginSchema: ShareLoginSchema, _options?: Configuration): Promise<ShareTokenSchema> {
        const result = this.api.assetsV1SharesAuthLoginPost(appID, shareLoginSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Check if a token is valid
     * @param appID 
     * @param shareAuthToken 
     */
    public assetsV1SharesAuthTokenGetWithHttpInfo(appID: string, shareAuthToken: string, _options?: Configuration): Promise<HttpInfo<ShareTokenSchema>> {
        const result = this.api.assetsV1SharesAuthTokenGetWithHttpInfo(appID, shareAuthToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Check if a token is valid
     * @param appID 
     * @param shareAuthToken 
     */
    public assetsV1SharesAuthTokenGet(appID: string, shareAuthToken: string, _options?: Configuration): Promise<ShareTokenSchema> {
        const result = this.api.assetsV1SharesAuthTokenGet(appID, shareAuthToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Refreshes a token for share
     * @param appID 
     * @param shareAuthToken 
     */
    public assetsV1SharesAuthTokenPutWithHttpInfo(appID: string, shareAuthToken: string, _options?: Configuration): Promise<HttpInfo<ShareTokenSchema>> {
        const result = this.api.assetsV1SharesAuthTokenPutWithHttpInfo(appID, shareAuthToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Refreshes a token for share
     * @param appID 
     * @param shareAuthToken 
     */
    public assetsV1SharesAuthTokenPut(appID: string, shareAuthToken: string, _options?: Configuration): Promise<ShareTokenSchema> {
        const result = this.api.assetsV1SharesAuthTokenPut(appID, shareAuthToken, _options);
        return result.toPromise();
    }


}



import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     *  Required roles:  - can_delete_apps 
     * Delete a particular app by id
     * @param appID 
     * @param authToken 
     * @param appId 
     */
    public authV1AppsAppIdDeleteWithHttpInfo(appID: string, authToken: string, appId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AppsAppIdDeleteWithHttpInfo(appID, authToken, appId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_apps 
     * Delete a particular app by id
     * @param appID 
     * @param authToken 
     * @param appId 
     */
    public authV1AppsAppIdDelete(appID: string, authToken: string, appId: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AppsAppIdDelete(appID, authToken, appId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_apps 
     * Returns a particular app by id
     * @param authToken 
     * @param appId 
     */
    public authV1AppsAppIdGetWithHttpInfo(authToken: string, appId: string, _options?: Configuration): Promise<HttpInfo<AppSchema>> {
        const result = this.api.authV1AppsAppIdGetWithHttpInfo(authToken, appId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_apps 
     * Returns a particular app by id
     * @param authToken 
     * @param appId 
     */
    public authV1AppsAppIdGet(authToken: string, appId: string, _options?: Configuration): Promise<AppSchema> {
        const result = this.api.authV1AppsAppIdGet(authToken, appId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_apps 
     * Update app
     * @param appID 
     * @param authToken 
     * @param appId 
     * @param appSchema body
     */
    public authV1AppsAppIdPatchWithHttpInfo(appID: string, authToken: string, appId: string, appSchema: AppSchema, _options?: Configuration): Promise<HttpInfo<AppSchema>> {
        const result = this.api.authV1AppsAppIdPatchWithHttpInfo(appID, authToken, appId, appSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_apps 
     * Update app
     * @param appID 
     * @param authToken 
     * @param appId 
     * @param appSchema body
     */
    public authV1AppsAppIdPatch(appID: string, authToken: string, appId: string, appSchema: AppSchema, _options?: Configuration): Promise<AppSchema> {
        const result = this.api.authV1AppsAppIdPatch(appID, authToken, appId, appSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_apps 
     * Update app
     * @param appID 
     * @param authToken 
     * @param appId 
     * @param appSchema body
     */
    public authV1AppsAppIdPutWithHttpInfo(appID: string, authToken: string, appId: string, appSchema: AppSchema, _options?: Configuration): Promise<HttpInfo<AppSchema>> {
        const result = this.api.authV1AppsAppIdPutWithHttpInfo(appID, authToken, appId, appSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_apps 
     * Update app
     * @param appID 
     * @param authToken 
     * @param appId 
     * @param appSchema body
     */
    public authV1AppsAppIdPut(appID: string, authToken: string, appId: string, appSchema: AppSchema, _options?: Configuration): Promise<AppSchema> {
        const result = this.api.authV1AppsAppIdPut(appID, authToken, appId, appSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_apps 
     * Creates app token by id and returns it\'s data
     * @param appID 
     * @param authToken 
     * @param appId 
     */
    public authV1AppsAppIdTokenPostWithHttpInfo(appID: string, authToken: string, appId: string, _options?: Configuration): Promise<HttpInfo<TokenSchema>> {
        const result = this.api.authV1AppsAppIdTokenPostWithHttpInfo(appID, authToken, appId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_apps 
     * Creates app token by id and returns it\'s data
     * @param appID 
     * @param authToken 
     * @param appId 
     */
    public authV1AppsAppIdTokenPost(appID: string, authToken: string, appId: string, _options?: Configuration): Promise<TokenSchema> {
        const result = this.api.authV1AppsAppIdTokenPost(appID, authToken, appId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new token for the logged in user and store it for an external app
     * @param appID 
     * @param authToken 
     * @param externalAuthRequestSchema body
     */
    public authV1AppsExternalAuthPostWithHttpInfo(appID: string, authToken: string, externalAuthRequestSchema: ExternalAuthRequestSchema, _options?: Configuration): Promise<HttpInfo<ExternalAuthRequestResponseSchema>> {
        const result = this.api.authV1AppsExternalAuthPostWithHttpInfo(appID, authToken, externalAuthRequestSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new token for the logged in user and store it for an external app
     * @param appID 
     * @param authToken 
     * @param externalAuthRequestSchema body
     */
    public authV1AppsExternalAuthPost(appID: string, authToken: string, externalAuthRequestSchema: ExternalAuthRequestSchema, _options?: Configuration): Promise<ExternalAuthRequestResponseSchema> {
        const result = this.api.authV1AppsExternalAuthPost(appID, authToken, externalAuthRequestSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Gets a token requested by an external app
     * @param secret 
     */
    public authV1AppsExternalAuthSecretGetWithHttpInfo(secret: string, _options?: Configuration): Promise<HttpInfo<ExternalAuthSchema>> {
        const result = this.api.authV1AppsExternalAuthSecretGetWithHttpInfo(secret, _options);
        return result.toPromise();
    }

    /**
     * 
     * Gets a token requested by an external app
     * @param secret 
     */
    public authV1AppsExternalAuthSecretGet(secret: string, _options?: Configuration): Promise<ExternalAuthSchema> {
        const result = this.api.authV1AppsExternalAuthSecretGet(secret, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_apps 
     * List of apps
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public authV1AppsGetWithHttpInfo(appID: string, authToken: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<AppsSchema>> {
        const result = this.api.authV1AppsGetWithHttpInfo(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_apps 
     * List of apps
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public authV1AppsGet(appID: string, authToken: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<AppsSchema> {
        const result = this.api.authV1AppsGet(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete an approved instance of an app
     * @param appID 
     * @param authToken 
     * @param approvedInstanceId 
     */
    public authV1AppsInstanceApprovedInstanceIdDeleteWithHttpInfo(appID: string, authToken: string, approvedInstanceId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AppsInstanceApprovedInstanceIdDeleteWithHttpInfo(appID, authToken, approvedInstanceId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete an approved instance of an app
     * @param appID 
     * @param authToken 
     * @param approvedInstanceId 
     */
    public authV1AppsInstanceApprovedInstanceIdDelete(appID: string, authToken: string, approvedInstanceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AppsInstanceApprovedInstanceIdDelete(appID, authToken, approvedInstanceId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Gets an approved instance of an app
     * @param appID 
     * @param authToken 
     * @param approvedInstanceId 
     */
    public authV1AppsInstanceApprovedInstanceIdGetWithHttpInfo(appID: string, authToken: string, approvedInstanceId: string, _options?: Configuration): Promise<HttpInfo<ExternalAuthSchema>> {
        const result = this.api.authV1AppsInstanceApprovedInstanceIdGetWithHttpInfo(appID, authToken, approvedInstanceId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Gets an approved instance of an app
     * @param appID 
     * @param authToken 
     * @param approvedInstanceId 
     */
    public authV1AppsInstanceApprovedInstanceIdGet(appID: string, authToken: string, approvedInstanceId: string, _options?: Configuration): Promise<ExternalAuthSchema> {
        const result = this.api.authV1AppsInstanceApprovedInstanceIdGet(appID, authToken, approvedInstanceId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new app instance
     * @param appID 
     * @param authToken 
     * @param approvedAppInstanceSchema body
     */
    public authV1AppsInstancePostWithHttpInfo(appID: string, authToken: string, approvedAppInstanceSchema: ApprovedAppInstanceSchema, _options?: Configuration): Promise<HttpInfo<ApprovedAppInstanceSchema>> {
        const result = this.api.authV1AppsInstancePostWithHttpInfo(appID, authToken, approvedAppInstanceSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new app instance
     * @param appID 
     * @param authToken 
     * @param approvedAppInstanceSchema body
     */
    public authV1AppsInstancePost(appID: string, authToken: string, approvedAppInstanceSchema: ApprovedAppInstanceSchema, _options?: Configuration): Promise<ApprovedAppInstanceSchema> {
        const result = this.api.authV1AppsInstancePost(appID, authToken, approvedAppInstanceSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_apps 
     * Create a new app
     * @param appID 
     * @param authToken 
     * @param appSchema body
     */
    public authV1AppsPostWithHttpInfo(appID: string, authToken: string, appSchema: AppSchema, _options?: Configuration): Promise<HttpInfo<AppSchema>> {
        const result = this.api.authV1AppsPostWithHttpInfo(appID, authToken, appSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_apps 
     * Create a new app
     * @param appID 
     * @param authToken 
     * @param appSchema body
     */
    public authV1AppsPost(appID: string, authToken: string, appSchema: AppSchema, _options?: Configuration): Promise<AppSchema> {
        const result = this.api.authV1AppsPost(appID, authToken, appSchema, _options);
        return result.toPromise();
    }

    /**
     * <br/>This function is not yet implemented.
     * Login by ActiveDirectory
     * @param body body
     */
    public authV1AuthAdLoginPostWithHttpInfo(body: any, _options?: Configuration): Promise<HttpInfo<TokenSchema>> {
        const result = this.api.authV1AuthAdLoginPostWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * <br/>This function is not yet implemented.
     * Login by ActiveDirectory
     * @param body body
     */
    public authV1AuthAdLoginPost(body: any, _options?: Configuration): Promise<TokenSchema> {
        const result = this.api.authV1AuthAdLoginPost(body, _options);
        return result.toPromise();
    }

    /**
     * 
     * Login by using temp token
     * @param tempAuthToken 
     * @param multiDomainLoginSchema body
     */
    public authV1AuthMultidomainLoginPostWithHttpInfo(tempAuthToken: string, multiDomainLoginSchema: MultiDomainLoginSchema, _options?: Configuration): Promise<HttpInfo<TokenSchema>> {
        const result = this.api.authV1AuthMultidomainLoginPostWithHttpInfo(tempAuthToken, multiDomainLoginSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Login by using temp token
     * @param tempAuthToken 
     * @param multiDomainLoginSchema body
     */
    public authV1AuthMultidomainLoginPost(tempAuthToken: string, multiDomainLoginSchema: MultiDomainLoginSchema, _options?: Configuration): Promise<TokenSchema> {
        const result = this.api.authV1AuthMultidomainLoginPost(tempAuthToken, multiDomainLoginSchema, _options);
        return result.toPromise();
    }

    /**
     * <br/>This function is not yet implemented.
     * Login by OAuth
     * @param body body
     */
    public authV1AuthOauthLoginPostWithHttpInfo(body: any, _options?: Configuration): Promise<HttpInfo<TokenSchema>> {
        const result = this.api.authV1AuthOauthLoginPostWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * <br/>This function is not yet implemented.
     * Login by OAuth
     * @param body body
     */
    public authV1AuthOauthLoginPost(body: any, _options?: Configuration): Promise<TokenSchema> {
        const result = this.api.authV1AuthOauthLoginPost(body, _options);
        return result.toPromise();
    }

    /**
     * 
     * SAML Assertion Consumer Service
     * @param publicId 
     */
    public authV1AuthSamlAcsPublicIdPostWithHttpInfo(publicId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AuthSamlAcsPublicIdPostWithHttpInfo(publicId, _options);
        return result.toPromise();
    }

    /**
     * 
     * SAML Assertion Consumer Service
     * @param publicId 
     */
    public authV1AuthSamlAcsPublicIdPost(publicId: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AuthSamlAcsPublicIdPost(publicId, _options);
        return result.toPromise();
    }

    /**
     * 
     * SAML Assertion Consumer Service
     * @param systemDomainId 
     * @param identityProviderId 
     */
    public authV1AuthSamlAcsSystemDomainIdIdentityProviderIdPostWithHttpInfo(systemDomainId: string, identityProviderId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AuthSamlAcsSystemDomainIdIdentityProviderIdPostWithHttpInfo(systemDomainId, identityProviderId, _options);
        return result.toPromise();
    }

    /**
     * 
     * SAML Assertion Consumer Service
     * @param systemDomainId 
     * @param identityProviderId 
     */
    public authV1AuthSamlAcsSystemDomainIdIdentityProviderIdPost(systemDomainId: string, identityProviderId: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AuthSamlAcsSystemDomainIdIdentityProviderIdPost(systemDomainId, identityProviderId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Unbind domain from identity provider
     * @param appID 
     * @param authToken 
     * @param domain 
     */
    public authV1AuthSamlDomainsDomainDeleteWithHttpInfo(appID: string, authToken: string, domain: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AuthSamlDomainsDomainDeleteWithHttpInfo(appID, authToken, domain, _options);
        return result.toPromise();
    }

    /**
     * 
     * Unbind domain from identity provider
     * @param appID 
     * @param authToken 
     * @param domain 
     */
    public authV1AuthSamlDomainsDomainDelete(appID: string, authToken: string, domain: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AuthSamlDomainsDomainDelete(appID, authToken, domain, _options);
        return result.toPromise();
    }

    /**
     * 
     * Bind domain to identity provider
     * @param appID 
     * @param authToken 
     * @param domainIdentityProviderMapSchema body
     */
    public authV1AuthSamlDomainsPostWithHttpInfo(appID: string, authToken: string, domainIdentityProviderMapSchema: DomainIdentityProviderMapSchema, _options?: Configuration): Promise<HttpInfo<DomainIdentityProviderMapSchema>> {
        const result = this.api.authV1AuthSamlDomainsPostWithHttpInfo(appID, authToken, domainIdentityProviderMapSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Bind domain to identity provider
     * @param appID 
     * @param authToken 
     * @param domainIdentityProviderMapSchema body
     */
    public authV1AuthSamlDomainsPost(appID: string, authToken: string, domainIdentityProviderMapSchema: DomainIdentityProviderMapSchema, _options?: Configuration): Promise<DomainIdentityProviderMapSchema> {
        const result = this.api.authV1AuthSamlDomainsPost(appID, authToken, domainIdentityProviderMapSchema, _options);
        return result.toPromise();
    }

    /**
     * <br/>Input should be a SAML EntityDescriptor XML.
     * Convert an IdP EntityDescriptor XML into json suitable as a settings configuration.
     * @param appID 
     * @param authToken 
     * @param identityProviderSchema 
     */
    public authV1AuthSamlIdpConvertPostWithHttpInfo(appID: string, authToken: string, identityProviderSchema: IdentityProviderSchema, _options?: Configuration): Promise<HttpInfo<IdentityProviderSchema>> {
        const result = this.api.authV1AuthSamlIdpConvertPostWithHttpInfo(appID, authToken, identityProviderSchema, _options);
        return result.toPromise();
    }

    /**
     * <br/>Input should be a SAML EntityDescriptor XML.
     * Convert an IdP EntityDescriptor XML into json suitable as a settings configuration.
     * @param appID 
     * @param authToken 
     * @param identityProviderSchema 
     */
    public authV1AuthSamlIdpConvertPost(appID: string, authToken: string, identityProviderSchema: IdentityProviderSchema, _options?: Configuration): Promise<IdentityProviderSchema> {
        const result = this.api.authV1AuthSamlIdpConvertPost(appID, authToken, identityProviderSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_identity_providers 
     * Get list of identity providers
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId 
     */
    public authV1AuthSamlIdpGetWithHttpInfo(appID: string, authToken: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<IdentityProvidersSchema>> {
        const result = this.api.authV1AuthSamlIdpGetWithHttpInfo(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_identity_providers 
     * Get list of identity providers
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId 
     */
    public authV1AuthSamlIdpGet(appID: string, authToken: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<IdentityProvidersSchema> {
        const result = this.api.authV1AuthSamlIdpGet(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_identity_providers 
     * Delete a particular identity provider by id
     * @param appID 
     * @param authToken 
     * @param identityProviderId 
     */
    public authV1AuthSamlIdpIdentityProviderIdDeleteWithHttpInfo(appID: string, authToken: string, identityProviderId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AuthSamlIdpIdentityProviderIdDeleteWithHttpInfo(appID, authToken, identityProviderId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_identity_providers 
     * Delete a particular identity provider by id
     * @param appID 
     * @param authToken 
     * @param identityProviderId 
     */
    public authV1AuthSamlIdpIdentityProviderIdDelete(appID: string, authToken: string, identityProviderId: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AuthSamlIdpIdentityProviderIdDelete(appID, authToken, identityProviderId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_identity_providers 
     * Get a particular identity provider by id
     * @param appID 
     * @param authToken 
     * @param identityProviderId 
     */
    public authV1AuthSamlIdpIdentityProviderIdGetWithHttpInfo(appID: string, authToken: string, identityProviderId: string, _options?: Configuration): Promise<HttpInfo<IdentityProviderSchema>> {
        const result = this.api.authV1AuthSamlIdpIdentityProviderIdGetWithHttpInfo(appID, authToken, identityProviderId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_identity_providers 
     * Get a particular identity provider by id
     * @param appID 
     * @param authToken 
     * @param identityProviderId 
     */
    public authV1AuthSamlIdpIdentityProviderIdGet(appID: string, authToken: string, identityProviderId: string, _options?: Configuration): Promise<IdentityProviderSchema> {
        const result = this.api.authV1AuthSamlIdpIdentityProviderIdGet(appID, authToken, identityProviderId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_identity_providers 
     * Update a particular identity provider by id
     * @param appID 
     * @param authToken 
     * @param identityProviderId 
     * @param identityProviderSchema body
     */
    public authV1AuthSamlIdpIdentityProviderIdPatchWithHttpInfo(appID: string, authToken: string, identityProviderId: string, identityProviderSchema: IdentityProviderSchema, _options?: Configuration): Promise<HttpInfo<IdentityProviderSchema>> {
        const result = this.api.authV1AuthSamlIdpIdentityProviderIdPatchWithHttpInfo(appID, authToken, identityProviderId, identityProviderSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_identity_providers 
     * Update a particular identity provider by id
     * @param appID 
     * @param authToken 
     * @param identityProviderId 
     * @param identityProviderSchema body
     */
    public authV1AuthSamlIdpIdentityProviderIdPatch(appID: string, authToken: string, identityProviderId: string, identityProviderSchema: IdentityProviderSchema, _options?: Configuration): Promise<IdentityProviderSchema> {
        const result = this.api.authV1AuthSamlIdpIdentityProviderIdPatch(appID, authToken, identityProviderId, identityProviderSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_identity_providers 
     * Update a particular identity provider by id
     * @param appID 
     * @param authToken 
     * @param identityProviderId 
     * @param identityProviderSchema body
     */
    public authV1AuthSamlIdpIdentityProviderIdPutWithHttpInfo(appID: string, authToken: string, identityProviderId: string, identityProviderSchema: IdentityProviderSchema, _options?: Configuration): Promise<HttpInfo<IdentityProviderSchema>> {
        const result = this.api.authV1AuthSamlIdpIdentityProviderIdPutWithHttpInfo(appID, authToken, identityProviderId, identityProviderSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_identity_providers 
     * Update a particular identity provider by id
     * @param appID 
     * @param authToken 
     * @param identityProviderId 
     * @param identityProviderSchema body
     */
    public authV1AuthSamlIdpIdentityProviderIdPut(appID: string, authToken: string, identityProviderId: string, identityProviderSchema: IdentityProviderSchema, _options?: Configuration): Promise<IdentityProviderSchema> {
        const result = this.api.authV1AuthSamlIdpIdentityProviderIdPut(appID, authToken, identityProviderId, identityProviderSchema, _options);
        return result.toPromise();
    }

    /**
     * <br/>Input can either be an IdentityProviderSchema as json or a SAML<br/>EntityDescriptor XML.<br/>Input can either be an IdentityProviderSchema as json or a SAML<br/>EntityDescriptor XML. Required roles:  - can_write_identity_providers 
     * Create a new identity provider.
     * @param appID 
     * @param authToken 
     * @param identityProviderSchema 
     */
    public authV1AuthSamlIdpPostWithHttpInfo(appID: string, authToken: string, identityProviderSchema: IdentityProviderSchema, _options?: Configuration): Promise<HttpInfo<IdentityProviderSchema>> {
        const result = this.api.authV1AuthSamlIdpPostWithHttpInfo(appID, authToken, identityProviderSchema, _options);
        return result.toPromise();
    }

    /**
     * <br/>Input can either be an IdentityProviderSchema as json or a SAML<br/>EntityDescriptor XML.<br/>Input can either be an IdentityProviderSchema as json or a SAML<br/>EntityDescriptor XML. Required roles:  - can_write_identity_providers 
     * Create a new identity provider.
     * @param appID 
     * @param authToken 
     * @param identityProviderSchema 
     */
    public authV1AuthSamlIdpPost(appID: string, authToken: string, identityProviderSchema: IdentityProviderSchema, _options?: Configuration): Promise<IdentityProviderSchema> {
        const result = this.api.authV1AuthSamlIdpPost(appID, authToken, identityProviderSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * SAML Single sign-on url by domain
     * @param sAMLLoginSchema body
     */
    public authV1AuthSamlLoginPostWithHttpInfo(sAMLLoginSchema: SAMLLoginSchema, _options?: Configuration): Promise<HttpInfo<AuthV1AuthSamlLoginPost200Response>> {
        const result = this.api.authV1AuthSamlLoginPostWithHttpInfo(sAMLLoginSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * SAML Single sign-on url by domain
     * @param sAMLLoginSchema body
     */
    public authV1AuthSamlLoginPost(sAMLLoginSchema: SAMLLoginSchema, _options?: Configuration): Promise<AuthV1AuthSamlLoginPost200Response> {
        const result = this.api.authV1AuthSamlLoginPost(sAMLLoginSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Initiate SAML Single logout
     * @param publicId 
     */
    public authV1AuthSamlLogoutPublicIdPostWithHttpInfo(publicId: string, _options?: Configuration): Promise<HttpInfo<AuthV1AuthSamlLogoutPublicIdPost200Response>> {
        const result = this.api.authV1AuthSamlLogoutPublicIdPostWithHttpInfo(publicId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Initiate SAML Single logout
     * @param publicId 
     */
    public authV1AuthSamlLogoutPublicIdPost(publicId: string, _options?: Configuration): Promise<AuthV1AuthSamlLogoutPublicIdPost200Response> {
        const result = this.api.authV1AuthSamlLogoutPublicIdPost(publicId, _options);
        return result.toPromise();
    }

    /**
     * 
     * SAML Single Logout Service
     * @param publicId 
     */
    public authV1AuthSamlMetadataPublicIdGetWithHttpInfo(publicId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AuthSamlMetadataPublicIdGetWithHttpInfo(publicId, _options);
        return result.toPromise();
    }

    /**
     * 
     * SAML Single Logout Service
     * @param publicId 
     */
    public authV1AuthSamlMetadataPublicIdGet(publicId: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AuthSamlMetadataPublicIdGet(publicId, _options);
        return result.toPromise();
    }

    /**
     * 
     * SAML Single Logout Service
     * @param systemDomainId 
     * @param identityProviderId 
     */
    public authV1AuthSamlMetadataSystemDomainIdIdentityProviderIdGetWithHttpInfo(systemDomainId: string, identityProviderId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AuthSamlMetadataSystemDomainIdIdentityProviderIdGetWithHttpInfo(systemDomainId, identityProviderId, _options);
        return result.toPromise();
    }

    /**
     * 
     * SAML Single Logout Service
     * @param systemDomainId 
     * @param identityProviderId 
     */
    public authV1AuthSamlMetadataSystemDomainIdIdentityProviderIdGet(systemDomainId: string, identityProviderId: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AuthSamlMetadataSystemDomainIdIdentityProviderIdGet(systemDomainId, identityProviderId, _options);
        return result.toPromise();
    }

    /**
     * 
     * SAML Single sign-on url by domain
     * @param sAMLLoginSchema body
     */
    public authV1AuthSamlMultidomainLoginPostWithHttpInfo(sAMLLoginSchema: SAMLLoginSchema, _options?: Configuration): Promise<HttpInfo<MultiDomainUserSystemsSchema>> {
        const result = this.api.authV1AuthSamlMultidomainLoginPostWithHttpInfo(sAMLLoginSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * SAML Single sign-on url by domain
     * @param sAMLLoginSchema body
     */
    public authV1AuthSamlMultidomainLoginPost(sAMLLoginSchema: SAMLLoginSchema, _options?: Configuration): Promise<MultiDomainUserSystemsSchema> {
        const result = this.api.authV1AuthSamlMultidomainLoginPost(sAMLLoginSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * SAML Single Logout Service
     * @param publicId 
     */
    public authV1AuthSamlSloPublicIdGetWithHttpInfo(publicId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AuthSamlSloPublicIdGetWithHttpInfo(publicId, _options);
        return result.toPromise();
    }

    /**
     * 
     * SAML Single Logout Service
     * @param publicId 
     */
    public authV1AuthSamlSloPublicIdGet(publicId: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AuthSamlSloPublicIdGet(publicId, _options);
        return result.toPromise();
    }

    /**
     * 
     * SAML Single Logout Service
     * @param systemDomainId 
     * @param identityProviderId 
     */
    public authV1AuthSamlSloSystemDomainIdIdentityProviderIdGetWithHttpInfo(systemDomainId: string, identityProviderId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AuthSamlSloSystemDomainIdIdentityProviderIdGetWithHttpInfo(systemDomainId, identityProviderId, _options);
        return result.toPromise();
    }

    /**
     * 
     * SAML Single Logout Service
     * @param systemDomainId 
     * @param identityProviderId 
     */
    public authV1AuthSamlSloSystemDomainIdIdentityProviderIdGet(systemDomainId: string, identityProviderId: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AuthSamlSloSystemDomainIdIdentityProviderIdGet(systemDomainId, identityProviderId, _options);
        return result.toPromise();
    }

    /**
     * 
     * SAML Single sign-on Service
     * @param publicId 
     */
    public authV1AuthSamlSsoPublicIdGetWithHttpInfo(publicId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AuthSamlSsoPublicIdGetWithHttpInfo(publicId, _options);
        return result.toPromise();
    }

    /**
     * 
     * SAML Single sign-on Service
     * @param publicId 
     */
    public authV1AuthSamlSsoPublicIdGet(publicId: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AuthSamlSsoPublicIdGet(publicId, _options);
        return result.toPromise();
    }

    /**
     * 
     * SAML Single sign-on Service
     * @param systemDomainId 
     * @param identityProviderId 
     */
    public authV1AuthSamlSsoSystemDomainIdIdentityProviderIdGetWithHttpInfo(systemDomainId: string, identityProviderId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AuthSamlSsoSystemDomainIdIdentityProviderIdGetWithHttpInfo(systemDomainId, identityProviderId, _options);
        return result.toPromise();
    }

    /**
     * 
     * SAML Single sign-on Service
     * @param systemDomainId 
     * @param identityProviderId 
     */
    public authV1AuthSamlSsoSystemDomainIdIdentityProviderIdGet(systemDomainId: string, identityProviderId: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AuthSamlSsoSystemDomainIdIdentityProviderIdGet(systemDomainId, identityProviderId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Login by using email and password
     * @param simpleLoginSchema body
     */
    public authV1AuthSimpleLoginPostWithHttpInfo(simpleLoginSchema: SimpleLoginSchema, _options?: Configuration): Promise<HttpInfo<TokenSchema>> {
        const result = this.api.authV1AuthSimpleLoginPostWithHttpInfo(simpleLoginSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Login by using email and password
     * @param simpleLoginSchema body
     */
    public authV1AuthSimpleLoginPost(simpleLoginSchema: SimpleLoginSchema, _options?: Configuration): Promise<TokenSchema> {
        const result = this.api.authV1AuthSimpleLoginPost(simpleLoginSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Revoke token
     * @param appID 
     * @param authToken 
     */
    public authV1AuthTokenDeleteWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AuthTokenDeleteWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Revoke token
     * @param appID 
     * @param authToken 
     */
    public authV1AuthTokenDelete(appID: string, authToken: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AuthTokenDelete(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Check if auth token valid
     * @param appID 
     * @param authToken 
     */
    public authV1AuthTokenGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AuthTokenGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Check if auth token valid
     * @param appID 
     * @param authToken 
     */
    public authV1AuthTokenGet(appID: string, authToken: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AuthTokenGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create new token without invalidating the old one
     * @param appID 
     * @param authToken 
     */
    public authV1AuthTokenPostWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<TokenSchema>> {
        const result = this.api.authV1AuthTokenPostWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create new token without invalidating the old one
     * @param appID 
     * @param authToken 
     */
    public authV1AuthTokenPost(appID: string, authToken: string, _options?: Configuration): Promise<TokenSchema> {
        const result = this.api.authV1AuthTokenPost(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Refresh token
     * @param appID 
     * @param authToken 
     */
    public authV1AuthTokenPutWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<TokenSchema>> {
        const result = this.api.authV1AuthTokenPutWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Refresh token
     * @param appID 
     * @param authToken 
     */
    public authV1AuthTokenPut(appID: string, authToken: string, _options?: Configuration): Promise<TokenSchema> {
        const result = this.api.authV1AuthTokenPut(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Revoke token by ID
     * @param appID 
     * @param authToken 
     * @param tokenId 
     */
    public authV1AuthTokenTokenIdDeleteWithHttpInfo(appID: string, authToken: string, tokenId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AuthTokenTokenIdDeleteWithHttpInfo(appID, authToken, tokenId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Revoke token by ID
     * @param appID 
     * @param authToken 
     * @param tokenId 
     */
    public authV1AuthTokenTokenIdDelete(appID: string, authToken: string, tokenId: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AuthTokenTokenIdDelete(appID, authToken, tokenId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get token by ID
     * @param appID 
     * @param authToken 
     * @param tokenId 
     */
    public authV1AuthTokenTokenIdGetWithHttpInfo(appID: string, authToken: string, tokenId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AuthTokenTokenIdGetWithHttpInfo(appID, authToken, tokenId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get token by ID
     * @param appID 
     * @param authToken 
     * @param tokenId 
     */
    public authV1AuthTokenTokenIdGet(appID: string, authToken: string, tokenId: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AuthTokenTokenIdGet(appID, authToken, tokenId, _options);
        return result.toPromise();
    }

    /**
     * 
     * List of tokens
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public authV1AuthTokensGetWithHttpInfo(appID: string, authToken: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<TokensSchema>> {
        const result = this.api.authV1AuthTokensGetWithHttpInfo(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     * 
     * List of tokens
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public authV1AuthTokensGet(appID: string, authToken: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<TokensSchema> {
        const result = this.api.authV1AuthTokensGet(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Google cloud marketplace link to existing system domain
     * @param marketplaceGoogleLinkSchema body
     */
    public authV1MarketplaceGoogleLinkPostWithHttpInfo(marketplaceGoogleLinkSchema: MarketplaceGoogleLinkSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1MarketplaceGoogleLinkPostWithHttpInfo(marketplaceGoogleLinkSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Google cloud marketplace link to existing system domain
     * @param marketplaceGoogleLinkSchema body
     */
    public authV1MarketplaceGoogleLinkPost(marketplaceGoogleLinkSchema: MarketplaceGoogleLinkSchema, _options?: Configuration): Promise<void> {
        const result = this.api.authV1MarketplaceGoogleLinkPost(marketplaceGoogleLinkSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Google cloud marketplace signup
     * @param xGcpMarketplaceToken 
     */
    public authV1MarketplaceGoogleSignupPostWithHttpInfo(xGcpMarketplaceToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1MarketplaceGoogleSignupPostWithHttpInfo(xGcpMarketplaceToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Google cloud marketplace signup
     * @param xGcpMarketplaceToken 
     */
    public authV1MarketplaceGoogleSignupPost(xGcpMarketplaceToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1MarketplaceGoogleSignupPost(xGcpMarketplaceToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns a list of password checks required for the password to be safe
     * @param appID 
     * @param authToken 
     */
    public authV1PasswordChecksGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<PasswordChecksSchema>> {
        const result = this.api.authV1PasswordChecksGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns a list of password checks required for the password to be safe
     * @param appID 
     * @param authToken 
     */
    public authV1PasswordChecksGet(appID: string, authToken: string, _options?: Configuration): Promise<PasswordChecksSchema> {
        const result = this.api.authV1PasswordChecksGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Receives email address and sends email to this address with link for resetting password
     * @param forgotPasswordSchema body
     */
    public authV1PasswordForgotPostWithHttpInfo(forgotPasswordSchema: ForgotPasswordSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1PasswordForgotPostWithHttpInfo(forgotPasswordSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Receives email address and sends email to this address with link for resetting password
     * @param forgotPasswordSchema body
     */
    public authV1PasswordForgotPost(forgotPasswordSchema: ForgotPasswordSchema, _options?: Configuration): Promise<void> {
        const result = this.api.authV1PasswordForgotPost(forgotPasswordSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns a list of password checks required for the password to be safe
     * @param resetHash 
     */
    public authV1PasswordResetHashChecksGetWithHttpInfo(resetHash: string, _options?: Configuration): Promise<HttpInfo<PasswordChecksSchema>> {
        const result = this.api.authV1PasswordResetHashChecksGetWithHttpInfo(resetHash, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns a list of password checks required for the password to be safe
     * @param resetHash 
     */
    public authV1PasswordResetHashChecksGet(resetHash: string, _options?: Configuration): Promise<PasswordChecksSchema> {
        const result = this.api.authV1PasswordResetHashChecksGet(resetHash, _options);
        return result.toPromise();
    }

    /**
     * 
     * Changes password to a new one
     * @param resetHash 
     * @param resetPasswordSchema body
     */
    public authV1PasswordResetResetHashPutWithHttpInfo(resetHash: string, resetPasswordSchema: ResetPasswordSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1PasswordResetResetHashPutWithHttpInfo(resetHash, resetPasswordSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Changes password to a new one
     * @param resetHash 
     * @param resetPasswordSchema body
     */
    public authV1PasswordResetResetHashPut(resetHash: string, resetPasswordSchema: ResetPasswordSchema, _options?: Configuration): Promise<void> {
        const result = this.api.authV1PasswordResetResetHashPut(resetHash, resetPasswordSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete a referral_code
     * @param appID 
     * @param authToken 
     * @param code 
     */
    public authV1ReferralCodesCodeDeleteWithHttpInfo(appID: string, authToken: string, code: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1ReferralCodesCodeDeleteWithHttpInfo(appID, authToken, code, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete a referral_code
     * @param appID 
     * @param authToken 
     * @param code 
     */
    public authV1ReferralCodesCodeDelete(appID: string, authToken: string, code: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1ReferralCodesCodeDelete(appID, authToken, code, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get a referral_code
     * @param appID 
     * @param authToken 
     * @param code 
     */
    public authV1ReferralCodesCodeGetWithHttpInfo(appID: string, authToken: string, code: string, _options?: Configuration): Promise<HttpInfo<ReferralCodeSchema>> {
        const result = this.api.authV1ReferralCodesCodeGetWithHttpInfo(appID, authToken, code, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get a referral_code
     * @param appID 
     * @param authToken 
     * @param code 
     */
    public authV1ReferralCodesCodeGet(appID: string, authToken: string, code: string, _options?: Configuration): Promise<ReferralCodeSchema> {
        const result = this.api.authV1ReferralCodesCodeGet(appID, authToken, code, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get all referral_codes
     * @param appID 
     * @param authToken 
     */
    public authV1ReferralCodesGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<ReferralCodesSchema>> {
        const result = this.api.authV1ReferralCodesGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get all referral_codes
     * @param appID 
     * @param authToken 
     */
    public authV1ReferralCodesGet(appID: string, authToken: string, _options?: Configuration): Promise<ReferralCodesSchema> {
        const result = this.api.authV1ReferralCodesGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new referral_code
     * @param appID 
     * @param authToken 
     * @param referralCodeSchema body
     */
    public authV1ReferralCodesPostWithHttpInfo(appID: string, authToken: string, referralCodeSchema: ReferralCodeSchema, _options?: Configuration): Promise<HttpInfo<ReferralCodeSchema>> {
        const result = this.api.authV1ReferralCodesPostWithHttpInfo(appID, authToken, referralCodeSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new referral_code
     * @param appID 
     * @param authToken 
     * @param referralCodeSchema body
     */
    public authV1ReferralCodesPost(appID: string, authToken: string, referralCodeSchema: ReferralCodeSchema, _options?: Configuration): Promise<ReferralCodeSchema> {
        const result = this.api.authV1ReferralCodesPost(appID, authToken, referralCodeSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns list of countries
     * @param appID 
     * @param authToken 
     */
    public authV1RegistrationsCountriesGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<CountriesSchema>> {
        const result = this.api.authV1RegistrationsCountriesGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns list of countries
     * @param appID 
     * @param authToken 
     */
    public authV1RegistrationsCountriesGet(appID: string, authToken: string, _options?: Configuration): Promise<CountriesSchema> {
        const result = this.api.authV1RegistrationsCountriesGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new registration
     * @param registrationSchema body
     */
    public authV1RegistrationsPostWithHttpInfo(registrationSchema: RegistrationSchema, _options?: Configuration): Promise<HttpInfo<RegistrationSchema>> {
        const result = this.api.authV1RegistrationsPostWithHttpInfo(registrationSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new registration
     * @param registrationSchema body
     */
    public authV1RegistrationsPost(registrationSchema: RegistrationSchema, _options?: Configuration): Promise<RegistrationSchema> {
        const result = this.api.authV1RegistrationsPost(registrationSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Verify email address and create system domain from template is email address valid
     * @param emailHash 
     */
    public authV1RegistrationsVerifyEmailHashPostWithHttpInfo(emailHash: string, _options?: Configuration): Promise<HttpInfo<SystemDomainFromTemplateSchema>> {
        const result = this.api.authV1RegistrationsVerifyEmailHashPostWithHttpInfo(emailHash, _options);
        return result.toPromise();
    }

    /**
     * 
     * Verify email address and create system domain from template is email address valid
     * @param emailHash 
     */
    public authV1RegistrationsVerifyEmailHashPost(emailHash: string, _options?: Configuration): Promise<SystemDomainFromTemplateSchema> {
        const result = this.api.authV1RegistrationsVerifyEmailHashPost(emailHash, _options);
        return result.toPromise();
    }

    /**
     * 
     * List of system domains
     * @param appID 
     * @param authToken 
     * @param query Query the name
     * @param statuses Comma separated list of statuses to show
     */
    public authV1SystemDomainsGetWithHttpInfo(appID: string, authToken: string, query?: string, statuses?: string, _options?: Configuration): Promise<HttpInfo<SystemDomainsSchema>> {
        const result = this.api.authV1SystemDomainsGetWithHttpInfo(appID, authToken, query, statuses, _options);
        return result.toPromise();
    }

    /**
     * 
     * List of system domains
     * @param appID 
     * @param authToken 
     * @param query Query the name
     * @param statuses Comma separated list of statuses to show
     */
    public authV1SystemDomainsGet(appID: string, authToken: string, query?: string, statuses?: string, _options?: Configuration): Promise<SystemDomainsSchema> {
        const result = this.api.authV1SystemDomainsGet(appID, authToken, query, statuses, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new system domain
     * @param appID 
     * @param authToken 
     * @param systemDomainSchema body
     */
    public authV1SystemDomainsPostWithHttpInfo(appID: string, authToken: string, systemDomainSchema: SystemDomainSchema, _options?: Configuration): Promise<HttpInfo<SystemDomainSchema>> {
        const result = this.api.authV1SystemDomainsPostWithHttpInfo(appID, authToken, systemDomainSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new system domain
     * @param appID 
     * @param authToken 
     * @param systemDomainSchema body
     */
    public authV1SystemDomainsPost(appID: string, authToken: string, systemDomainSchema: SystemDomainSchema, _options?: Configuration): Promise<SystemDomainSchema> {
        const result = this.api.authV1SystemDomainsPost(appID, authToken, systemDomainSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new system domain from a referral code (That is associated to your domain)
     * @param appID 
     * @param authToken 
     * @param referralCode 
     * @param systemDomainFromReferralCodeSchema body
     */
    public authV1SystemDomainsReferralCodeReferralCodePostWithHttpInfo(appID: string, authToken: string, referralCode: string, systemDomainFromReferralCodeSchema: SystemDomainFromReferralCodeSchema, _options?: Configuration): Promise<HttpInfo<SystemDomainFromTemplateSchema>> {
        const result = this.api.authV1SystemDomainsReferralCodeReferralCodePostWithHttpInfo(appID, authToken, referralCode, systemDomainFromReferralCodeSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new system domain from a referral code (That is associated to your domain)
     * @param appID 
     * @param authToken 
     * @param referralCode 
     * @param systemDomainFromReferralCodeSchema body
     */
    public authV1SystemDomainsReferralCodeReferralCodePost(appID: string, authToken: string, referralCode: string, systemDomainFromReferralCodeSchema: SystemDomainFromReferralCodeSchema, _options?: Configuration): Promise<SystemDomainFromTemplateSchema> {
        const result = this.api.authV1SystemDomainsReferralCodeReferralCodePost(appID, authToken, referralCode, systemDomainFromReferralCodeSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete a particular system_domain by id
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     */
    public authV1SystemDomainsSystemDomainIdDeleteWithHttpInfo(appID: string, authToken: string, systemDomainId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1SystemDomainsSystemDomainIdDeleteWithHttpInfo(appID, authToken, systemDomainId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete a particular system_domain by id
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     */
    public authV1SystemDomainsSystemDomainIdDelete(appID: string, authToken: string, systemDomainId: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1SystemDomainsSystemDomainIdDelete(appID, authToken, systemDomainId, _options);
        return result.toPromise();
    }

    /**
     * (For internal use. Should not be displayed in Swagger docs)
     * Delete a particular system_domain by id.
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     */
    public authV1SystemDomainsSystemDomainIdE2eDeleteWithHttpInfo(appID: string, authToken: string, systemDomainId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1SystemDomainsSystemDomainIdE2eDeleteWithHttpInfo(appID, authToken, systemDomainId, _options);
        return result.toPromise();
    }

    /**
     * (For internal use. Should not be displayed in Swagger docs)
     * Delete a particular system_domain by id.
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     */
    public authV1SystemDomainsSystemDomainIdE2eDelete(appID: string, authToken: string, systemDomainId: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1SystemDomainsSystemDomainIdE2eDelete(appID, authToken, systemDomainId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_system_domains 
     * Returns a particular system domain by id
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     */
    public authV1SystemDomainsSystemDomainIdGetWithHttpInfo(appID: string, authToken: string, systemDomainId: string, _options?: Configuration): Promise<HttpInfo<SystemDomainSchema>> {
        const result = this.api.authV1SystemDomainsSystemDomainIdGetWithHttpInfo(appID, authToken, systemDomainId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_system_domains 
     * Returns a particular system domain by id
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     */
    public authV1SystemDomainsSystemDomainIdGet(appID: string, authToken: string, systemDomainId: string, _options?: Configuration): Promise<SystemDomainSchema> {
        const result = this.api.authV1SystemDomainsSystemDomainIdGet(appID, authToken, systemDomainId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete system domain logo image.
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     */
    public authV1SystemDomainsSystemDomainIdLogoDeleteWithHttpInfo(appID: string, authToken: string, systemDomainId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1SystemDomainsSystemDomainIdLogoDeleteWithHttpInfo(appID, authToken, systemDomainId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete system domain logo image.
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     */
    public authV1SystemDomainsSystemDomainIdLogoDelete(appID: string, authToken: string, systemDomainId: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1SystemDomainsSystemDomainIdLogoDelete(appID, authToken, systemDomainId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Upload system domain logo image.
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     * @param authV1SystemDomainsSystemDomainIdLogoPostRequest 
     */
    public authV1SystemDomainsSystemDomainIdLogoPostWithHttpInfo(appID: string, authToken: string, systemDomainId: string, authV1SystemDomainsSystemDomainIdLogoPostRequest: AuthV1SystemDomainsSystemDomainIdLogoPostRequest, _options?: Configuration): Promise<HttpInfo<AuthV1SystemDomainsSystemDomainIdLogoPost201Response>> {
        const result = this.api.authV1SystemDomainsSystemDomainIdLogoPostWithHttpInfo(appID, authToken, systemDomainId, authV1SystemDomainsSystemDomainIdLogoPostRequest, _options);
        return result.toPromise();
    }

    /**
     * 
     * Upload system domain logo image.
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     * @param authV1SystemDomainsSystemDomainIdLogoPostRequest 
     */
    public authV1SystemDomainsSystemDomainIdLogoPost(appID: string, authToken: string, systemDomainId: string, authV1SystemDomainsSystemDomainIdLogoPostRequest: AuthV1SystemDomainsSystemDomainIdLogoPostRequest, _options?: Configuration): Promise<AuthV1SystemDomainsSystemDomainIdLogoPost201Response> {
        const result = this.api.authV1SystemDomainsSystemDomainIdLogoPost(appID, authToken, systemDomainId, authV1SystemDomainsSystemDomainIdLogoPostRequest, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update system domain
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     * @param systemDomainSchema body
     */
    public authV1SystemDomainsSystemDomainIdPatchWithHttpInfo(appID: string, authToken: string, systemDomainId: string, systemDomainSchema: SystemDomainSchema, _options?: Configuration): Promise<HttpInfo<SystemDomainSchema>> {
        const result = this.api.authV1SystemDomainsSystemDomainIdPatchWithHttpInfo(appID, authToken, systemDomainId, systemDomainSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update system domain
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     * @param systemDomainSchema body
     */
    public authV1SystemDomainsSystemDomainIdPatch(appID: string, authToken: string, systemDomainId: string, systemDomainSchema: SystemDomainSchema, _options?: Configuration): Promise<SystemDomainSchema> {
        const result = this.api.authV1SystemDomainsSystemDomainIdPatch(appID, authToken, systemDomainId, systemDomainSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update system domain
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     * @param systemDomainSchema body
     */
    public authV1SystemDomainsSystemDomainIdPutWithHttpInfo(appID: string, authToken: string, systemDomainId: string, systemDomainSchema: SystemDomainSchema, _options?: Configuration): Promise<HttpInfo<SystemDomainSchema>> {
        const result = this.api.authV1SystemDomainsSystemDomainIdPutWithHttpInfo(appID, authToken, systemDomainId, systemDomainSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update system domain
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     * @param systemDomainSchema body
     */
    public authV1SystemDomainsSystemDomainIdPut(appID: string, authToken: string, systemDomainId: string, systemDomainSchema: SystemDomainSchema, _options?: Configuration): Promise<SystemDomainSchema> {
        const result = this.api.authV1SystemDomainsSystemDomainIdPut(appID, authToken, systemDomainId, systemDomainSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * List of system domain templates
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsTemplatesGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<SystemDomainsSchema>> {
        const result = this.api.authV1SystemDomainsTemplatesGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * List of system domain templates
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsTemplatesGet(appID: string, authToken: string, _options?: Configuration): Promise<SystemDomainsSchema> {
        const result = this.api.authV1SystemDomainsTemplatesGet(appID, authToken, _options);
        return result.toPromise();
    }


}



import { ObservableFilesApi } from './ObservableAPI';

import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";
export class PromiseFilesApi {
    private api: ObservableFilesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FilesApiRequestFactory,
        responseProcessor?: FilesApiResponseProcessor
    ) {
        this.api = new ObservableFilesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * Get analysis profiles
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last profile set on previous page
     */
    public filesV1AnalysisProfilesGetWithHttpInfo(appID: string, authToken: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<AnalysisProfilesSchema>> {
        const result = this.api.filesV1AnalysisProfilesGetWithHttpInfo(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get analysis profiles
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last profile set on previous page
     */
    public filesV1AnalysisProfilesGet(appID: string, authToken: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<AnalysisProfilesSchema> {
        const result = this.api.filesV1AnalysisProfilesGet(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get a default analysis profile
     * @param appID 
     * @param authToken 
     * @param mediaType 
     */
    public filesV1AnalysisProfilesMediaTypeDefaultGetWithHttpInfo(appID: string, authToken: string, mediaType: string, _options?: Configuration): Promise<HttpInfo<AnalysisProfileSchema>> {
        const result = this.api.filesV1AnalysisProfilesMediaTypeDefaultGetWithHttpInfo(appID, authToken, mediaType, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get a default analysis profile
     * @param appID 
     * @param authToken 
     * @param mediaType 
     */
    public filesV1AnalysisProfilesMediaTypeDefaultGet(appID: string, authToken: string, mediaType: string, _options?: Configuration): Promise<AnalysisProfileSchema> {
        const result = this.api.filesV1AnalysisProfilesMediaTypeDefaultGet(appID, authToken, mediaType, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_profiles 
     * Create a new analysis profile
     * @param appID 
     * @param authToken 
     * @param analysisProfileSchema body
     */
    public filesV1AnalysisProfilesPostWithHttpInfo(appID: string, authToken: string, analysisProfileSchema: AnalysisProfileSchema, _options?: Configuration): Promise<HttpInfo<AnalysisProfileSchema>> {
        const result = this.api.filesV1AnalysisProfilesPostWithHttpInfo(appID, authToken, analysisProfileSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_profiles 
     * Create a new analysis profile
     * @param appID 
     * @param authToken 
     * @param analysisProfileSchema body
     */
    public filesV1AnalysisProfilesPost(appID: string, authToken: string, analysisProfileSchema: AnalysisProfileSchema, _options?: Configuration): Promise<AnalysisProfileSchema> {
        const result = this.api.filesV1AnalysisProfilesPost(appID, authToken, analysisProfileSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_profiles 
     * Removes the default flag on an analysis profile
     * @param appID 
     * @param authToken 
     * @param profileId 
     */
    public filesV1AnalysisProfilesProfileIdDefaultDeleteWithHttpInfo(appID: string, authToken: string, profileId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AnalysisProfilesProfileIdDefaultDeleteWithHttpInfo(appID, authToken, profileId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_profiles 
     * Removes the default flag on an analysis profile
     * @param appID 
     * @param authToken 
     * @param profileId 
     */
    public filesV1AnalysisProfilesProfileIdDefaultDelete(appID: string, authToken: string, profileId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AnalysisProfilesProfileIdDefaultDelete(appID, authToken, profileId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_profiles 
     * Set an analysis profile to the default of its media type
     * @param appID 
     * @param authToken 
     * @param profileId 
     */
    public filesV1AnalysisProfilesProfileIdDefaultPostWithHttpInfo(appID: string, authToken: string, profileId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AnalysisProfilesProfileIdDefaultPostWithHttpInfo(appID, authToken, profileId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_profiles 
     * Set an analysis profile to the default of its media type
     * @param appID 
     * @param authToken 
     * @param profileId 
     */
    public filesV1AnalysisProfilesProfileIdDefaultPost(appID: string, authToken: string, profileId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AnalysisProfilesProfileIdDefaultPost(appID, authToken, profileId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_analysis_profiles 
     * Delete an analysis profile
     * @param appID 
     * @param authToken 
     * @param profileId 
     */
    public filesV1AnalysisProfilesProfileIdDeleteWithHttpInfo(appID: string, authToken: string, profileId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AnalysisProfilesProfileIdDeleteWithHttpInfo(appID, authToken, profileId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_analysis_profiles 
     * Delete an analysis profile
     * @param appID 
     * @param authToken 
     * @param profileId 
     */
    public filesV1AnalysisProfilesProfileIdDelete(appID: string, authToken: string, profileId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AnalysisProfilesProfileIdDelete(appID, authToken, profileId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get an analysis profile
     * @param appID 
     * @param authToken 
     * @param profileId 
     */
    public filesV1AnalysisProfilesProfileIdGetWithHttpInfo(appID: string, authToken: string, profileId: string, _options?: Configuration): Promise<HttpInfo<AnalysisProfileSchema>> {
        const result = this.api.filesV1AnalysisProfilesProfileIdGetWithHttpInfo(appID, authToken, profileId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get an analysis profile
     * @param appID 
     * @param authToken 
     * @param profileId 
     */
    public filesV1AnalysisProfilesProfileIdGet(appID: string, authToken: string, profileId: string, _options?: Configuration): Promise<AnalysisProfileSchema> {
        const result = this.api.filesV1AnalysisProfilesProfileIdGet(appID, authToken, profileId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_profiles 
     * Update an analysis profile information
     * @param appID 
     * @param authToken 
     * @param profileId 
     * @param analysisProfileSchema body
     */
    public filesV1AnalysisProfilesProfileIdPatchWithHttpInfo(appID: string, authToken: string, profileId: string, analysisProfileSchema: AnalysisProfileSchema, _options?: Configuration): Promise<HttpInfo<AnalysisProfileSchema>> {
        const result = this.api.filesV1AnalysisProfilesProfileIdPatchWithHttpInfo(appID, authToken, profileId, analysisProfileSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_profiles 
     * Update an analysis profile information
     * @param appID 
     * @param authToken 
     * @param profileId 
     * @param analysisProfileSchema body
     */
    public filesV1AnalysisProfilesProfileIdPatch(appID: string, authToken: string, profileId: string, analysisProfileSchema: AnalysisProfileSchema, _options?: Configuration): Promise<AnalysisProfileSchema> {
        const result = this.api.filesV1AnalysisProfilesProfileIdPatch(appID, authToken, profileId, analysisProfileSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_profiles 
     * Update an analysis profile information
     * @param appID 
     * @param authToken 
     * @param profileId 
     * @param analysisProfileSchema body
     */
    public filesV1AnalysisProfilesProfileIdPutWithHttpInfo(appID: string, authToken: string, profileId: string, analysisProfileSchema: AnalysisProfileSchema, _options?: Configuration): Promise<HttpInfo<AnalysisProfileSchema>> {
        const result = this.api.filesV1AnalysisProfilesProfileIdPutWithHttpInfo(appID, authToken, profileId, analysisProfileSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_profiles 
     * Update an analysis profile information
     * @param appID 
     * @param authToken 
     * @param profileId 
     * @param analysisProfileSchema body
     */
    public filesV1AnalysisProfilesProfileIdPut(appID: string, authToken: string, profileId: string, analysisProfileSchema: AnalysisProfileSchema, _options?: Configuration): Promise<AnalysisProfileSchema> {
        const result = this.api.filesV1AnalysisProfilesProfileIdPut(appID, authToken, profileId, analysisProfileSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_analysis_service_accounts 
     * Delete an analysis service account
     * @param appID 
     * @param authToken 
     * @param analysisServiceAccountId 
     */
    public filesV1AnalysisServiceAccountsAnalysisServiceAccountIdDeleteWithHttpInfo(appID: string, authToken: string, analysisServiceAccountId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AnalysisServiceAccountsAnalysisServiceAccountIdDeleteWithHttpInfo(appID, authToken, analysisServiceAccountId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_analysis_service_accounts 
     * Delete an analysis service account
     * @param appID 
     * @param authToken 
     * @param analysisServiceAccountId 
     */
    public filesV1AnalysisServiceAccountsAnalysisServiceAccountIdDelete(appID: string, authToken: string, analysisServiceAccountId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AnalysisServiceAccountsAnalysisServiceAccountIdDelete(appID, authToken, analysisServiceAccountId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_analysis_service_accounts 
     * Get an analysis service account
     * @param appID 
     * @param authToken 
     * @param analysisServiceAccountId 
     */
    public filesV1AnalysisServiceAccountsAnalysisServiceAccountIdGetWithHttpInfo(appID: string, authToken: string, analysisServiceAccountId: string, _options?: Configuration): Promise<HttpInfo<AnalysisServiceAccountReadSchema>> {
        const result = this.api.filesV1AnalysisServiceAccountsAnalysisServiceAccountIdGetWithHttpInfo(appID, authToken, analysisServiceAccountId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_analysis_service_accounts 
     * Get an analysis service account
     * @param appID 
     * @param authToken 
     * @param analysisServiceAccountId 
     */
    public filesV1AnalysisServiceAccountsAnalysisServiceAccountIdGet(appID: string, authToken: string, analysisServiceAccountId: string, _options?: Configuration): Promise<AnalysisServiceAccountReadSchema> {
        const result = this.api.filesV1AnalysisServiceAccountsAnalysisServiceAccountIdGet(appID, authToken, analysisServiceAccountId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_service_accounts 
     * Update an analysis service account information
     * @param appID 
     * @param authToken 
     * @param analysisServiceAccountId 
     * @param analysisServiceAccountSchema body
     */
    public filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPatchWithHttpInfo(appID: string, authToken: string, analysisServiceAccountId: string, analysisServiceAccountSchema: AnalysisServiceAccountSchema, _options?: Configuration): Promise<HttpInfo<AnalysisServiceAccountSchema>> {
        const result = this.api.filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPatchWithHttpInfo(appID, authToken, analysisServiceAccountId, analysisServiceAccountSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_service_accounts 
     * Update an analysis service account information
     * @param appID 
     * @param authToken 
     * @param analysisServiceAccountId 
     * @param analysisServiceAccountSchema body
     */
    public filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPatch(appID: string, authToken: string, analysisServiceAccountId: string, analysisServiceAccountSchema: AnalysisServiceAccountSchema, _options?: Configuration): Promise<AnalysisServiceAccountSchema> {
        const result = this.api.filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPatch(appID, authToken, analysisServiceAccountId, analysisServiceAccountSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_service_accounts 
     * Update an analysis service account information
     * @param appID 
     * @param authToken 
     * @param analysisServiceAccountId 
     * @param analysisServiceAccountSchema body
     */
    public filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPutWithHttpInfo(appID: string, authToken: string, analysisServiceAccountId: string, analysisServiceAccountSchema: AnalysisServiceAccountSchema, _options?: Configuration): Promise<HttpInfo<AnalysisServiceAccountSchema>> {
        const result = this.api.filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPutWithHttpInfo(appID, authToken, analysisServiceAccountId, analysisServiceAccountSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_service_accounts 
     * Update an analysis service account information
     * @param appID 
     * @param authToken 
     * @param analysisServiceAccountId 
     * @param analysisServiceAccountSchema body
     */
    public filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPut(appID: string, authToken: string, analysisServiceAccountId: string, analysisServiceAccountSchema: AnalysisServiceAccountSchema, _options?: Configuration): Promise<AnalysisServiceAccountSchema> {
        const result = this.api.filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPut(appID, authToken, analysisServiceAccountId, analysisServiceAccountSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_analysis_service_accounts 
     * Get analysis service accounts
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last service account set on previous page
     */
    public filesV1AnalysisServiceAccountsGetWithHttpInfo(appID: string, authToken: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<AnalysisServiceAccountsSchema>> {
        const result = this.api.filesV1AnalysisServiceAccountsGetWithHttpInfo(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_analysis_service_accounts 
     * Get analysis service accounts
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last service account set on previous page
     */
    public filesV1AnalysisServiceAccountsGet(appID: string, authToken: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<AnalysisServiceAccountsSchema> {
        const result = this.api.filesV1AnalysisServiceAccountsGet(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_service_accounts 
     * Create a new analysis service account
     * @param appID 
     * @param authToken 
     * @param analysisServiceAccountSchema body
     */
    public filesV1AnalysisServiceAccountsPostWithHttpInfo(appID: string, authToken: string, analysisServiceAccountSchema: AnalysisServiceAccountSchema, _options?: Configuration): Promise<HttpInfo<AnalysisServiceAccountReadSchema>> {
        const result = this.api.filesV1AnalysisServiceAccountsPostWithHttpInfo(appID, authToken, analysisServiceAccountSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_service_accounts 
     * Create a new analysis service account
     * @param appID 
     * @param authToken 
     * @param analysisServiceAccountSchema body
     */
    public filesV1AnalysisServiceAccountsPost(appID: string, authToken: string, analysisServiceAccountSchema: AnalysisServiceAccountSchema, _options?: Configuration): Promise<AnalysisServiceAccountReadSchema> {
        const result = this.api.filesV1AnalysisServiceAccountsPost(appID, authToken, analysisServiceAccountSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Create keyframe of type poster for asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public filesV1AssetsAssetIdCustomKeyframePostWithHttpInfo(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<HttpInfo<KeyframeSchema>> {
        const result = this.api.filesV1AssetsAssetIdCustomKeyframePostWithHttpInfo(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Create keyframe of type poster for asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public filesV1AssetsAssetIdCustomKeyframePost(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<KeyframeSchema> {
        const result = this.api.filesV1AssetsAssetIdCustomKeyframePost(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Set keyframe of type poster as asset keyframe
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param posterId 
     * @param overwrite set to false to keep current custom_poster and custom_keyframe on asset
     */
    public filesV1AssetsAssetIdCustomKeyframePosterIdPostWithHttpInfo(appID: string, authToken: string, assetId: string, posterId: string, overwrite?: boolean, _options?: Configuration): Promise<HttpInfo<KeyframeSchema>> {
        const result = this.api.filesV1AssetsAssetIdCustomKeyframePosterIdPostWithHttpInfo(appID, authToken, assetId, posterId, overwrite, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Set keyframe of type poster as asset keyframe
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param posterId 
     * @param overwrite set to false to keep current custom_poster and custom_keyframe on asset
     */
    public filesV1AssetsAssetIdCustomKeyframePosterIdPost(appID: string, authToken: string, assetId: string, posterId: string, overwrite?: boolean, _options?: Configuration): Promise<KeyframeSchema> {
        const result = this.api.filesV1AssetsAssetIdCustomKeyframePosterIdPost(appID, authToken, assetId, posterId, overwrite, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_exports 
     * Export asset to export location
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param exportLocationId 
     * @param assetExportSchema body
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1AssetsAssetIdExportLocationsExportLocationIdPostWithHttpInfo(appID: string, authToken: string, assetId: string, exportLocationId: string, assetExportSchema: AssetExportSchema, allowHostTransfer?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdExportLocationsExportLocationIdPostWithHttpInfo(appID, authToken, assetId, exportLocationId, assetExportSchema, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_exports 
     * Export asset to export location
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param exportLocationId 
     * @param assetExportSchema body
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1AssetsAssetIdExportLocationsExportLocationIdPost(appID: string, authToken: string, assetId: string, exportLocationId: string, assetExportSchema: AssetExportSchema, allowHostTransfer?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdExportLocationsExportLocationIdPost(appID, authToken, assetId, exportLocationId, assetExportSchema, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s file set, file entries, and actual files
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSetId 
     * @param keepSource If true, keep source objects
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, fileSetId: string, keepSource?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdDeleteWithHttpInfo(appID, authToken, assetId, fileSetId, keepSource, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s file set, file entries, and actual files
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSetId 
     * @param keepSource If true, keep source objects
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdDelete(appID: string, authToken: string, assetId: string, fileSetId: string, keepSource?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdDelete(appID, authToken, assetId, fileSetId, keepSource, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get files from a file set
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSetId 
     * @param perPage The number of items for each page
     * @param lastId 
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param fileCount Set to true if you need a total amount of files in a file set
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdFilesGetWithHttpInfo(appID: string, authToken: string, assetId: string, fileSetId: string, perPage?: number, lastId?: string, generateSignedUrl?: boolean, fileCount?: boolean, _options?: Configuration): Promise<HttpInfo<FilesSchema>> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdFilesGetWithHttpInfo(appID, authToken, assetId, fileSetId, perPage, lastId, generateSignedUrl, fileCount, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get files from a file set
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSetId 
     * @param perPage The number of items for each page
     * @param lastId 
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param fileCount Set to true if you need a total amount of files in a file set
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdFilesGet(appID: string, authToken: string, assetId: string, fileSetId: string, perPage?: number, lastId?: string, generateSignedUrl?: boolean, fileCount?: boolean, _options?: Configuration): Promise<FilesSchema> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdFilesGet(appID, authToken, assetId, fileSetId, perPage, lastId, generateSignedUrl, fileCount, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get asset\'s file set
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSetId 
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdGetWithHttpInfo(appID: string, authToken: string, assetId: string, fileSetId: string, _options?: Configuration): Promise<HttpInfo<FileSetSchema>> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdGetWithHttpInfo(appID, authToken, assetId, fileSetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get asset\'s file set
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSetId 
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdGet(appID: string, authToken: string, assetId: string, fileSetId: string, _options?: Configuration): Promise<FileSetSchema> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdGet(appID, authToken, assetId, fileSetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file set information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSetId 
     * @param fileSetSchema body
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdPatchWithHttpInfo(appID: string, authToken: string, assetId: string, fileSetId: string, fileSetSchema: FileSetSchema, _options?: Configuration): Promise<HttpInfo<FileSetSchema>> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdPatchWithHttpInfo(appID, authToken, assetId, fileSetId, fileSetSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file set information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSetId 
     * @param fileSetSchema body
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdPatch(appID: string, authToken: string, assetId: string, fileSetId: string, fileSetSchema: FileSetSchema, _options?: Configuration): Promise<FileSetSchema> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdPatch(appID, authToken, assetId, fileSetId, fileSetSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Purge deleted asset\'s file set, file entries, and actual files.
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSetId 
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdPurgeDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, fileSetId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdPurgeDeleteWithHttpInfo(appID, authToken, assetId, fileSetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Purge deleted asset\'s file set, file entries, and actual files.
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSetId 
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdPurgeDelete(appID: string, authToken: string, assetId: string, fileSetId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdPurgeDelete(appID, authToken, assetId, fileSetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file set information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSetId 
     * @param fileSetSchema body
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdPutWithHttpInfo(appID: string, authToken: string, assetId: string, fileSetId: string, fileSetSchema: FileSetSchema, _options?: Configuration): Promise<HttpInfo<FileSetSchema>> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdPutWithHttpInfo(appID, authToken, assetId, fileSetId, fileSetSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file set information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSetId 
     * @param fileSetSchema body
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdPut(appID: string, authToken: string, assetId: string, fileSetId: string, fileSetSchema: FileSetSchema, _options?: Configuration): Promise<FileSetSchema> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdPut(appID, authToken, assetId, fileSetId, fileSetSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Restore delete asset\'s file set
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSetId 
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdRestorePutWithHttpInfo(appID: string, authToken: string, assetId: string, fileSetId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdRestorePutWithHttpInfo(appID, authToken, assetId, fileSetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Restore delete asset\'s file set
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSetId 
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdRestorePut(appID: string, authToken: string, assetId: string, fileSetId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdRestorePut(appID, authToken, assetId, fileSetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s file sets
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     * @param fileCount Set to true if you need a total amount of files in a file set
     */
    public filesV1AssetsAssetIdFileSetsGetWithHttpInfo(appID: string, authToken: string, assetId: string, perPage?: number, lastId?: string, fileCount?: boolean, _options?: Configuration): Promise<HttpInfo<FileSetsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFileSetsGetWithHttpInfo(appID, authToken, assetId, perPage, lastId, fileCount, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s file sets
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     * @param fileCount Set to true if you need a total amount of files in a file set
     */
    public filesV1AssetsAssetIdFileSetsGet(appID: string, authToken: string, assetId: string, perPage?: number, lastId?: string, fileCount?: boolean, _options?: Configuration): Promise<FileSetsSchema> {
        const result = this.api.filesV1AssetsAssetIdFileSetsGet(appID, authToken, assetId, perPage, lastId, fileCount, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Create file set and associate to asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSetSchema body
     */
    public filesV1AssetsAssetIdFileSetsPostWithHttpInfo(appID: string, authToken: string, assetId: string, fileSetSchema: FileSetSchema, _options?: Configuration): Promise<HttpInfo<FileSetSchema>> {
        const result = this.api.filesV1AssetsAssetIdFileSetsPostWithHttpInfo(appID, authToken, assetId, fileSetSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Create file set and associate to asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSetSchema body
     */
    public filesV1AssetsAssetIdFileSetsPost(appID: string, authToken: string, assetId: string, fileSetSchema: FileSetSchema, _options?: Configuration): Promise<FileSetSchema> {
        const result = this.api.filesV1AssetsAssetIdFileSetsPost(appID, authToken, assetId, fileSetSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_poster 
     * Create a transcode job for creating still keyframe
     * @param authToken 
     * @param appID 
     * @param assetId 
     * @param fileId 
     * @param milliseconds 
     * @param transcodeRequestSchema body
     */
    public filesV1AssetsAssetIdFilesFileIdCaptureMillisecondsPostWithHttpInfo(authToken: string, appID: string, assetId: string, fileId: string, milliseconds: number, transcodeRequestSchema: TranscodeRequestSchema, _options?: Configuration): Promise<HttpInfo<TranscodeResponseSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdCaptureMillisecondsPostWithHttpInfo(authToken, appID, assetId, fileId, milliseconds, transcodeRequestSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_poster 
     * Create a transcode job for creating still keyframe
     * @param authToken 
     * @param appID 
     * @param assetId 
     * @param fileId 
     * @param milliseconds 
     * @param transcodeRequestSchema body
     */
    public filesV1AssetsAssetIdFilesFileIdCaptureMillisecondsPost(authToken: string, appID: string, assetId: string, fileId: string, milliseconds: number, transcodeRequestSchema: TranscodeRequestSchema, _options?: Configuration): Promise<TranscodeResponseSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdCaptureMillisecondsPost(authToken, appID, assetId, fileId, milliseconds, transcodeRequestSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s file entry (Not the actual file, use DELETE file_set for that)
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     */
    public filesV1AssetsAssetIdFilesFileIdDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, fileId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdDeleteWithHttpInfo(appID, authToken, assetId, fileId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s file entry (Not the actual file, use DELETE file_set for that)
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     */
    public filesV1AssetsAssetIdFilesFileIdDelete(appID: string, authToken: string, assetId: string, fileId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdDelete(appID, authToken, assetId, fileId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get asset\'s file download URL
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     */
    public filesV1AssetsAssetIdFilesFileIdDownloadUrlGetWithHttpInfo(appID: string, authToken: string, assetId: string, fileId: string, _options?: Configuration): Promise<HttpInfo<FileDownloadURLSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdDownloadUrlGetWithHttpInfo(appID, authToken, assetId, fileId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get asset\'s file download URL
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     */
    public filesV1AssetsAssetIdFilesFileIdDownloadUrlGet(appID: string, authToken: string, assetId: string, fileId: string, _options?: Configuration): Promise<FileDownloadURLSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdDownloadUrlGet(appID, authToken, assetId, fileId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs - can_write_files 
     * Create format, file_set, and file for edit proxy if storage has edit proxy transcoder configured
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param editProxySchema body
     */
    public filesV1AssetsAssetIdFilesFileIdEditProxiesPostWithHttpInfo(appID: string, authToken: string, assetId: string, fileId: string, editProxySchema: EditProxySchema, _options?: Configuration): Promise<HttpInfo<void | EditProxyResponseSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdEditProxiesPostWithHttpInfo(appID, authToken, assetId, fileId, editProxySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs - can_write_files 
     * Create format, file_set, and file for edit proxy if storage has edit proxy transcoder configured
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param editProxySchema body
     */
    public filesV1AssetsAssetIdFilesFileIdEditProxiesPost(appID: string, authToken: string, assetId: string, fileId: string, editProxySchema: EditProxySchema, _options?: Configuration): Promise<void | EditProxyResponseSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdEditProxiesPost(appID, authToken, assetId, fileId, editProxySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get asset\'s file
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param generateSignedPostUrl Set to true to get a new upload url for the file
     * @param contentDisposition Set to attachment if you want a download link. Note that this will not create a asset history entry for the download
     * @param bypassUrlCache Set to true to get a new url for the file rather than using a cached url
     */
    public filesV1AssetsAssetIdFilesFileIdGetWithHttpInfo(appID: string, authToken: string, assetId: string, fileId: string, generateSignedPostUrl?: boolean, contentDisposition?: string, bypassUrlCache?: boolean, _options?: Configuration): Promise<HttpInfo<FileSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdGetWithHttpInfo(appID, authToken, assetId, fileId, generateSignedPostUrl, contentDisposition, bypassUrlCache, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get asset\'s file
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param generateSignedPostUrl Set to true to get a new upload url for the file
     * @param contentDisposition Set to attachment if you want a download link. Note that this will not create a asset history entry for the download
     * @param bypassUrlCache Set to true to get a new url for the file rather than using a cached url
     */
    public filesV1AssetsAssetIdFilesFileIdGet(appID: string, authToken: string, assetId: string, fileId: string, generateSignedPostUrl?: boolean, contentDisposition?: string, bypassUrlCache?: boolean, _options?: Configuration): Promise<FileSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdGet(appID, authToken, assetId, fileId, generateSignedPostUrl, contentDisposition, bypassUrlCache, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get asset\'s file handler URL for ISG
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     */
    public filesV1AssetsAssetIdFilesFileIdIsgHandlerUrlGetWithHttpInfo(appID: string, authToken: string, assetId: string, fileId: string, _options?: Configuration): Promise<HttpInfo<ISGHandlerURLSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdIsgHandlerUrlGetWithHttpInfo(appID, authToken, assetId, fileId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get asset\'s file handler URL for ISG
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     */
    public filesV1AssetsAssetIdFilesFileIdIsgHandlerUrlGet(appID: string, authToken: string, assetId: string, fileId: string, _options?: Configuration): Promise<ISGHandlerURLSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdIsgHandlerUrlGet(appID, authToken, assetId, fileId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs 
     * Create a transcode job for proxy and keyframes
     * @param authToken 
     * @param appID 
     * @param assetId 
     * @param fileId 
     * @param transcodeRequestSchema body
     */
    public filesV1AssetsAssetIdFilesFileIdKeyframesPostWithHttpInfo(authToken: string, appID: string, assetId: string, fileId: string, transcodeRequestSchema: TranscodeRequestSchema, _options?: Configuration): Promise<HttpInfo<void | TranscodeResponseSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdKeyframesPostWithHttpInfo(authToken, appID, assetId, fileId, transcodeRequestSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs 
     * Create a transcode job for proxy and keyframes
     * @param authToken 
     * @param appID 
     * @param assetId 
     * @param fileId 
     * @param transcodeRequestSchema body
     */
    public filesV1AssetsAssetIdFilesFileIdKeyframesPost(authToken: string, appID: string, assetId: string, fileId: string, transcodeRequestSchema: TranscodeRequestSchema, _options?: Configuration): Promise<void | TranscodeResponseSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdKeyframesPost(authToken, appID, assetId, fileId, transcodeRequestSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs 
     * Create a job for extracting mediainfo
     * @param authToken 
     * @param appID 
     * @param assetId 
     * @param fileId 
     * @param transcodeRequestSchema body
     */
    public filesV1AssetsAssetIdFilesFileIdMediainfoPostWithHttpInfo(authToken: string, appID: string, assetId: string, fileId: string, transcodeRequestSchema: TranscodeRequestSchema, _options?: Configuration): Promise<HttpInfo<TranscodeResponseSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMediainfoPostWithHttpInfo(authToken, appID, assetId, fileId, transcodeRequestSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs 
     * Create a job for extracting mediainfo
     * @param authToken 
     * @param appID 
     * @param assetId 
     * @param fileId 
     * @param transcodeRequestSchema body
     */
    public filesV1AssetsAssetIdFilesFileIdMediainfoPost(authToken: string, appID: string, assetId: string, fileId: string, transcodeRequestSchema: TranscodeRequestSchema, _options?: Configuration): Promise<TranscodeResponseSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMediainfoPost(authToken, appID, assetId, fileId, transcodeRequestSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Cancel Backblaze B2 multipart upload.
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param multipartB2CancelUpload body
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartB2CancelPostWithHttpInfo(appID: string, authToken: string, assetId: string, fileId: string, multipartB2CancelUpload: MultipartB2CancelUpload, temporary?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartB2CancelPostWithHttpInfo(appID, authToken, assetId, fileId, multipartB2CancelUpload, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Cancel Backblaze B2 multipart upload.
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param multipartB2CancelUpload body
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartB2CancelPost(appID: string, authToken: string, assetId: string, fileId: string, multipartB2CancelUpload: MultipartB2CancelUpload, temporary?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartB2CancelPost(appID, authToken, assetId, fileId, multipartB2CancelUpload, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Complete Backblaze B2 multipart upload.
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param multipartB2FinishUpload body
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartB2FinishPostWithHttpInfo(appID: string, authToken: string, assetId: string, fileId: string, multipartB2FinishUpload: MultipartB2FinishUpload, temporary?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartB2FinishPostWithHttpInfo(appID, authToken, assetId, fileId, multipartB2FinishUpload, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Complete Backblaze B2 multipart upload.
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param multipartB2FinishUpload body
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartB2FinishPost(appID: string, authToken: string, assetId: string, fileId: string, multipartB2FinishUpload: MultipartB2FinishUpload, temporary?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartB2FinishPost(appID, authToken, assetId, fileId, multipartB2FinishUpload, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Start Backblaze B2 multipart upload.
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param temporary Use temporary file record
     * @param multipartB2StartUpload body
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartB2StartPostWithHttpInfo(appID: string, authToken: string, assetId: string, fileId: string, temporary?: boolean, multipartB2StartUpload?: MultipartB2StartUpload, _options?: Configuration): Promise<HttpInfo<MultipartB2StartUpload>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartB2StartPostWithHttpInfo(appID, authToken, assetId, fileId, temporary, multipartB2StartUpload, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Start Backblaze B2 multipart upload.
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param temporary Use temporary file record
     * @param multipartB2StartUpload body
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartB2StartPost(appID: string, authToken: string, assetId: string, fileId: string, temporary?: boolean, multipartB2StartUpload?: MultipartB2StartUpload, _options?: Configuration): Promise<MultipartB2StartUpload> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartB2StartPost(appID, authToken, assetId, fileId, temporary, multipartB2StartUpload, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Cleanup multipart upload (GCS, S3).
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param multipartUploadCleanupSchema body
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartCleanupPostWithHttpInfo(appID: string, authToken: string, assetId: string, fileId: string, multipartUploadCleanupSchema: MultipartUploadCleanupSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartCleanupPostWithHttpInfo(appID, authToken, assetId, fileId, multipartUploadCleanupSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Cleanup multipart upload (GCS, S3).
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param multipartUploadCleanupSchema body
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartCleanupPost(appID: string, authToken: string, assetId: string, fileId: string, multipartUploadCleanupSchema: MultipartUploadCleanupSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartCleanupPost(appID, authToken, assetId, fileId, multipartUploadCleanupSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Get object compose url for GCS parallel upload.
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param multipartUploadComposeSchema body
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartGcsComposeUrlPostWithHttpInfo(appID: string, authToken: string, assetId: string, fileId: string, multipartUploadComposeSchema: MultipartUploadComposeSchema, temporary?: boolean, _options?: Configuration): Promise<HttpInfo<MultiPartUploadComposeURLSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartGcsComposeUrlPostWithHttpInfo(appID, authToken, assetId, fileId, multipartUploadComposeSchema, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Get object compose url for GCS parallel upload.
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param multipartUploadComposeSchema body
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartGcsComposeUrlPost(appID: string, authToken: string, assetId: string, fileId: string, multipartUploadComposeSchema: MultipartUploadComposeSchema, temporary?: boolean, _options?: Configuration): Promise<MultiPartUploadComposeURLSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartGcsComposeUrlPost(appID, authToken, assetId, fileId, multipartUploadComposeSchema, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Complete multipart upload (GCS).
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param multipartUploadSchema body
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartPostWithHttpInfo(appID: string, authToken: string, assetId: string, fileId: string, multipartUploadSchema: MultipartUploadSchema, temporary?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartPostWithHttpInfo(appID, authToken, assetId, fileId, multipartUploadSchema, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Complete multipart upload (GCS).
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param multipartUploadSchema body
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartPost(appID: string, authToken: string, assetId: string, fileId: string, multipartUploadSchema: MultipartUploadSchema, temporary?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartPost(appID, authToken, assetId, fileId, multipartUploadSchema, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Get presigned urls for multipart upload (S3).
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param uploadId Multipart UploadId
     * @param type List of multipart upload urls of required type
     * @param maxPartNumber Maximum PartNumber that multipart upload has
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartUrlGetWithHttpInfo(appID: string, authToken: string, assetId: string, fileId: string, uploadId: string, type?: string, maxPartNumber?: number, temporary?: boolean, _options?: Configuration): Promise<HttpInfo<MultiPartURLsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartUrlGetWithHttpInfo(appID, authToken, assetId, fileId, uploadId, type, maxPartNumber, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Get presigned urls for multipart upload (S3).
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param uploadId Multipart UploadId
     * @param type List of multipart upload urls of required type
     * @param maxPartNumber Maximum PartNumber that multipart upload has
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartUrlGet(appID: string, authToken: string, assetId: string, fileId: string, uploadId: string, type?: string, maxPartNumber?: number, temporary?: boolean, _options?: Configuration): Promise<MultiPartURLsSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartUrlGet(appID, authToken, assetId, fileId, uploadId, type, maxPartNumber, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Get presigned urls for multipart part upload (S3 & GCS).
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param partsNum Number of parts to upload
     * @param uploadId Multipart UploadId
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartUrlPartGetWithHttpInfo(appID: string, authToken: string, assetId: string, fileId: string, partsNum: number, uploadId?: string, perPage?: number, page?: number, temporary?: boolean, _options?: Configuration): Promise<HttpInfo<MultiPartUploadURLsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartUrlPartGetWithHttpInfo(appID, authToken, assetId, fileId, partsNum, uploadId, perPage, page, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Get presigned urls for multipart part upload (S3 & GCS).
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param partsNum Number of parts to upload
     * @param uploadId Multipart UploadId
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartUrlPartGet(appID: string, authToken: string, assetId: string, fileId: string, partsNum: number, uploadId?: string, perPage?: number, page?: number, temporary?: boolean, _options?: Configuration): Promise<MultiPartUploadURLsSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartUrlPartGet(appID, authToken, assetId, fileId, partsNum, uploadId, perPage, page, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Create presigned urls for multipart part S3 upload.
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param multiPartS3UrlPartsSchema body
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartUrlS3PartPostWithHttpInfo(appID: string, authToken: string, assetId: string, fileId: string, multiPartS3UrlPartsSchema: MultiPartS3UrlPartsSchema, temporary?: boolean, _options?: Configuration): Promise<HttpInfo<MultiPartS3UrlPartsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartUrlS3PartPostWithHttpInfo(appID, authToken, assetId, fileId, multiPartS3UrlPartsSchema, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Create presigned urls for multipart part S3 upload.
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param multiPartS3UrlPartsSchema body
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartUrlS3PartPost(appID: string, authToken: string, assetId: string, fileId: string, multiPartS3UrlPartsSchema: MultiPartS3UrlPartsSchema, temporary?: boolean, _options?: Configuration): Promise<MultiPartS3UrlPartsSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartUrlS3PartPost(appID, authToken, assetId, fileId, multiPartS3UrlPartsSchema, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param fileSchema body
     */
    public filesV1AssetsAssetIdFilesFileIdPatchWithHttpInfo(appID: string, authToken: string, assetId: string, fileId: string, fileSchema: FileSchema, _options?: Configuration): Promise<HttpInfo<FileSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdPatchWithHttpInfo(appID, authToken, assetId, fileId, fileSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param fileSchema body
     */
    public filesV1AssetsAssetIdFilesFileIdPatch(appID: string, authToken: string, assetId: string, fileId: string, fileSchema: FileSchema, _options?: Configuration): Promise<FileSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdPatch(appID, authToken, assetId, fileId, fileSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param fileSchema body
     */
    public filesV1AssetsAssetIdFilesFileIdPutWithHttpInfo(appID: string, authToken: string, assetId: string, fileId: string, fileSchema: FileSchema, _options?: Configuration): Promise<HttpInfo<FileSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdPutWithHttpInfo(appID, authToken, assetId, fileId, fileSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param fileSchema body
     */
    public filesV1AssetsAssetIdFilesFileIdPut(appID: string, authToken: string, assetId: string, fileId: string, fileSchema: FileSchema, _options?: Configuration): Promise<FileSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdPut(appID, authToken, assetId, fileId, fileSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing of a file
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     */
    public filesV1AssetsAssetIdFilesFileIdReindexPostWithHttpInfo(appID: string, authToken: string, assetId: string, fileId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdReindexPostWithHttpInfo(appID, authToken, assetId, fileId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing of a file
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     */
    public filesV1AssetsAssetIdFilesFileIdReindexPost(appID: string, authToken: string, assetId: string, fileId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdReindexPost(appID, authToken, assetId, fileId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs 
     * Create a transcode job for subtitle files
     * @param authToken 
     * @param appID 
     * @param assetId 
     * @param fileId 
     * @param subtitleRequestSchema body
     */
    public filesV1AssetsAssetIdFilesFileIdSubtitlesPostWithHttpInfo(authToken: string, appID: string, assetId: string, fileId: string, subtitleRequestSchema?: SubtitleRequestSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdSubtitlesPostWithHttpInfo(authToken, appID, assetId, fileId, subtitleRequestSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs 
     * Create a transcode job for subtitle files
     * @param authToken 
     * @param appID 
     * @param assetId 
     * @param fileId 
     * @param subtitleRequestSchema body
     */
    public filesV1AssetsAssetIdFilesFileIdSubtitlesPost(authToken: string, appID: string, assetId: string, fileId: string, subtitleRequestSchema?: SubtitleRequestSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdSubtitlesPost(authToken, appID, assetId, fileId, subtitleRequestSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s files
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to True if you do need a URL, this makes the request slower.
     * @param contentDisposition Set to attachment if you want a download link. Note that this will not create a download in asset history
     * @param lastId ID of a last file on previous page
     */
    public filesV1AssetsAssetIdFilesGetWithHttpInfo(appID: string, authToken: string, assetId: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, _options?: Configuration): Promise<HttpInfo<FilesSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesGetWithHttpInfo(appID, authToken, assetId, perPage, generateSignedUrl, contentDisposition, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s files
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to True if you do need a URL, this makes the request slower.
     * @param contentDisposition Set to attachment if you want a download link. Note that this will not create a download in asset history
     * @param lastId ID of a last file on previous page
     */
    public filesV1AssetsAssetIdFilesGet(appID: string, authToken: string, assetId: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, _options?: Configuration): Promise<FilesSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesGet(appID, authToken, assetId, perPage, generateSignedUrl, contentDisposition, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Create file and associate to asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileCreateSchema body
     */
    public filesV1AssetsAssetIdFilesPostWithHttpInfo(appID: string, authToken: string, assetId: string, fileCreateSchema: FileCreateSchema, _options?: Configuration): Promise<HttpInfo<FileSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesPostWithHttpInfo(appID, authToken, assetId, fileCreateSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Create file and associate to asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileCreateSchema body
     */
    public filesV1AssetsAssetIdFilesPost(appID: string, authToken: string, assetId: string, fileCreateSchema: FileCreateSchema, _options?: Configuration): Promise<FileSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesPost(appID, authToken, assetId, fileCreateSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_archived_formats 
     * Delete archived format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param formatDeleteArchiveSchema body
     */
    public filesV1AssetsAssetIdFormatsFormatIdArchiveDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, formatId: string, formatDeleteArchiveSchema: FormatDeleteArchiveSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdArchiveDeleteWithHttpInfo(appID, authToken, assetId, formatId, formatDeleteArchiveSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_archived_formats 
     * Delete archived format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param formatDeleteArchiveSchema body
     */
    public filesV1AssetsAssetIdFormatsFormatIdArchiveDelete(appID: string, authToken: string, assetId: string, formatId: string, formatDeleteArchiveSchema: FormatDeleteArchiveSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdArchiveDelete(appID, authToken, assetId, formatId, formatDeleteArchiveSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_archive_formats 
     * Archive format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param formatArchiveSchema body
     */
    public filesV1AssetsAssetIdFormatsFormatIdArchivePostWithHttpInfo(appID: string, authToken: string, assetId: string, formatId: string, formatArchiveSchema: FormatArchiveSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdArchivePostWithHttpInfo(appID, authToken, assetId, formatId, formatArchiveSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_archive_formats 
     * Archive format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param formatArchiveSchema body
     */
    public filesV1AssetsAssetIdFormatsFormatIdArchivePost(appID: string, authToken: string, assetId: string, formatId: string, formatArchiveSchema: FormatArchiveSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdArchivePost(appID, authToken, assetId, formatId, formatArchiveSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_formats 
     * Delete a component in a format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param componentId 
     */
    public filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, formatId: string, componentId: string, _options?: Configuration): Promise<HttpInfo<ComponentsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdDeleteWithHttpInfo(appID, authToken, assetId, formatId, componentId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_formats 
     * Delete a component in a format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param componentId 
     */
    public filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdDelete(appID: string, authToken: string, assetId: string, formatId: string, componentId: string, _options?: Configuration): Promise<ComponentsSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdDelete(appID, authToken, assetId, formatId, componentId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get a component for a format in an asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param componentId 
     */
    public filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdGetWithHttpInfo(appID: string, authToken: string, assetId: string, formatId: string, componentId: string, _options?: Configuration): Promise<HttpInfo<ComponentsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdGetWithHttpInfo(appID, authToken, assetId, formatId, componentId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get a component for a format in an asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param componentId 
     */
    public filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdGet(appID: string, authToken: string, assetId: string, formatId: string, componentId: string, _options?: Configuration): Promise<ComponentsSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdGet(appID, authToken, assetId, formatId, componentId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_formats 
     * Update a component in a format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param componentId 
     */
    public filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdPutWithHttpInfo(appID: string, authToken: string, assetId: string, formatId: string, componentId: string, _options?: Configuration): Promise<HttpInfo<ComponentsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdPutWithHttpInfo(appID, authToken, assetId, formatId, componentId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_formats 
     * Update a component in a format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param componentId 
     */
    public filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdPut(appID: string, authToken: string, assetId: string, formatId: string, componentId: string, _options?: Configuration): Promise<ComponentsSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdPut(appID, authToken, assetId, formatId, componentId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get all components for a format in an asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     */
    public filesV1AssetsAssetIdFormatsFormatIdComponentsGetWithHttpInfo(appID: string, authToken: string, assetId: string, formatId: string, _options?: Configuration): Promise<HttpInfo<ComponentsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdComponentsGetWithHttpInfo(appID, authToken, assetId, formatId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get all components for a format in an asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     */
    public filesV1AssetsAssetIdFormatsFormatIdComponentsGet(appID: string, authToken: string, assetId: string, formatId: string, _options?: Configuration): Promise<ComponentsSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdComponentsGet(appID, authToken, assetId, formatId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_formats 
     * Add a new format component
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param componentSchema body
     */
    public filesV1AssetsAssetIdFormatsFormatIdComponentsPostWithHttpInfo(appID: string, authToken: string, assetId: string, formatId: string, componentSchema: ComponentSchema, _options?: Configuration): Promise<HttpInfo<ComponentsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdComponentsPostWithHttpInfo(appID, authToken, assetId, formatId, componentSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_formats 
     * Add a new format component
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param componentSchema body
     */
    public filesV1AssetsAssetIdFormatsFormatIdComponentsPost(appID: string, authToken: string, assetId: string, formatId: string, componentSchema: ComponentSchema, _options?: Configuration): Promise<ComponentsSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdComponentsPost(appID, authToken, assetId, formatId, componentSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_formats 
     * Delete asset\'s format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param deleteImmediately Permanently delete format without sending it to the Recycle Bin
     */
    public filesV1AssetsAssetIdFormatsFormatIdDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, formatId: string, deleteImmediately?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdDeleteWithHttpInfo(appID, authToken, assetId, formatId, deleteImmediately, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_formats 
     * Delete asset\'s format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param deleteImmediately Permanently delete format without sending it to the Recycle Bin
     */
    public filesV1AssetsAssetIdFormatsFormatIdDelete(appID: string, authToken: string, assetId: string, formatId: string, deleteImmediately?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdDelete(appID, authToken, assetId, formatId, deleteImmediately, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s file sets in a specific format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public filesV1AssetsAssetIdFormatsFormatIdFileSetsGetWithHttpInfo(appID: string, authToken: string, assetId: string, formatId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<FileSetsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdFileSetsGetWithHttpInfo(appID, authToken, assetId, formatId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s file sets in a specific format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public filesV1AssetsAssetIdFormatsFormatIdFileSetsGet(appID: string, authToken: string, assetId: string, formatId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<FileSetsSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdFileSetsGet(appID, authToken, assetId, formatId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all file sets with matching format and storage method
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     */
    public filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesGetWithHttpInfo(appID: string, authToken: string, assetId: string, formatId: string, _options?: Configuration): Promise<HttpInfo<FileSetSourcesSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesGetWithHttpInfo(appID, authToken, assetId, formatId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all file sets with matching format and storage method
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     */
    public filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesGet(appID: string, authToken: string, assetId: string, formatId: string, _options?: Configuration): Promise<FileSetSourcesSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesGet(appID, authToken, assetId, formatId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all file sets with matching format and storage method
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param storageMethod 
     */
    public filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesStorageMethodGetWithHttpInfo(appID: string, authToken: string, assetId: string, formatId: string, storageMethod: string, _options?: Configuration): Promise<HttpInfo<FileSetsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesStorageMethodGetWithHttpInfo(appID, authToken, assetId, formatId, storageMethod, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all file sets with matching format and storage method
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param storageMethod 
     */
    public filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesStorageMethodGet(appID: string, authToken: string, assetId: string, formatId: string, storageMethod: string, _options?: Configuration): Promise<FileSetsSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesStorageMethodGet(appID, authToken, assetId, formatId, storageMethod, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get asset\'s format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     */
    public filesV1AssetsAssetIdFormatsFormatIdGetWithHttpInfo(appID: string, authToken: string, assetId: string, formatId: string, _options?: Configuration): Promise<HttpInfo<FormatSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdGetWithHttpInfo(appID, authToken, assetId, formatId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get asset\'s format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     */
    public filesV1AssetsAssetIdFormatsFormatIdGet(appID: string, authToken: string, assetId: string, formatId: string, _options?: Configuration): Promise<FormatSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdGet(appID, authToken, assetId, formatId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_formats 
     * Update format information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param formatSchema body
     */
    public filesV1AssetsAssetIdFormatsFormatIdPatchWithHttpInfo(appID: string, authToken: string, assetId: string, formatId: string, formatSchema: FormatSchema, _options?: Configuration): Promise<HttpInfo<FormatSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdPatchWithHttpInfo(appID, authToken, assetId, formatId, formatSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_formats 
     * Update format information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param formatSchema body
     */
    public filesV1AssetsAssetIdFormatsFormatIdPatch(appID: string, authToken: string, assetId: string, formatId: string, formatSchema: FormatSchema, _options?: Configuration): Promise<FormatSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdPatch(appID, authToken, assetId, formatId, formatSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_formats 
     * Purge deleted asset\'s format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     */
    public filesV1AssetsAssetIdFormatsFormatIdPurgeDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, formatId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdPurgeDeleteWithHttpInfo(appID, authToken, assetId, formatId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_formats 
     * Purge deleted asset\'s format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     */
    public filesV1AssetsAssetIdFormatsFormatIdPurgeDelete(appID: string, authToken: string, assetId: string, formatId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdPurgeDelete(appID, authToken, assetId, formatId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_formats 
     * Update format information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param formatSchema body
     */
    public filesV1AssetsAssetIdFormatsFormatIdPutWithHttpInfo(appID: string, authToken: string, assetId: string, formatId: string, formatSchema: FormatSchema, _options?: Configuration): Promise<HttpInfo<FormatSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdPutWithHttpInfo(appID, authToken, assetId, formatId, formatSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_formats 
     * Update format information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param formatSchema body
     */
    public filesV1AssetsAssetIdFormatsFormatIdPut(appID: string, authToken: string, assetId: string, formatId: string, formatSchema: FormatSchema, _options?: Configuration): Promise<FormatSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdPut(appID, authToken, assetId, formatId, formatSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_restore_archived_formats 
     * Restore archived format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param formatRestoreSchema body
     */
    public filesV1AssetsAssetIdFormatsFormatIdRestorePostWithHttpInfo(appID: string, authToken: string, assetId: string, formatId: string, formatRestoreSchema: FormatRestoreSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdRestorePostWithHttpInfo(appID, authToken, assetId, formatId, formatRestoreSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_restore_archived_formats 
     * Restore archived format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param formatRestoreSchema body
     */
    public filesV1AssetsAssetIdFormatsFormatIdRestorePost(appID: string, authToken: string, assetId: string, formatId: string, formatRestoreSchema: FormatRestoreSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdRestorePost(appID, authToken, assetId, formatId, formatRestoreSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_formats 
     * Restore deleted asset\'s format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     */
    public filesV1AssetsAssetIdFormatsFormatIdRestorePutWithHttpInfo(appID: string, authToken: string, assetId: string, formatId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdRestorePutWithHttpInfo(appID, authToken, assetId, formatId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_formats 
     * Restore deleted asset\'s format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     */
    public filesV1AssetsAssetIdFormatsFormatIdRestorePut(appID: string, authToken: string, assetId: string, formatId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdRestorePut(appID, authToken, assetId, formatId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s file sets in a specific format on a specific storage
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param storageId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public filesV1AssetsAssetIdFormatsFormatIdStoragesStorageIdFileSetsGetWithHttpInfo(appID: string, authToken: string, assetId: string, formatId: string, storageId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<FileSetsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdStoragesStorageIdFileSetsGetWithHttpInfo(appID, authToken, assetId, formatId, storageId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s file sets in a specific format on a specific storage
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatId 
     * @param storageId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public filesV1AssetsAssetIdFormatsFormatIdStoragesStorageIdFileSetsGet(appID: string, authToken: string, assetId: string, formatId: string, storageId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<FileSetsSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdStoragesStorageIdFileSetsGet(appID, authToken, assetId, formatId, storageId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get all asset\'s formats
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last format on previous page
     */
    public filesV1AssetsAssetIdFormatsGetWithHttpInfo(appID: string, authToken: string, assetId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<FormatsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsGetWithHttpInfo(appID, authToken, assetId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get all asset\'s formats
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last format on previous page
     */
    public filesV1AssetsAssetIdFormatsGet(appID: string, authToken: string, assetId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<FormatsSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsGet(appID, authToken, assetId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get asset\'s format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param name 
     */
    public filesV1AssetsAssetIdFormatsNameGetWithHttpInfo(appID: string, authToken: string, assetId: string, name: string, _options?: Configuration): Promise<HttpInfo<FormatSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsNameGetWithHttpInfo(appID, authToken, assetId, name, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get asset\'s format
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param name 
     */
    public filesV1AssetsAssetIdFormatsNameGet(appID: string, authToken: string, assetId: string, name: string, _options?: Configuration): Promise<FormatSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsNameGet(appID, authToken, assetId, name, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_formats 
     * Create format and associate to asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatSchema body
     */
    public filesV1AssetsAssetIdFormatsPostWithHttpInfo(appID: string, authToken: string, assetId: string, formatSchema: FormatSchema, _options?: Configuration): Promise<HttpInfo<FormatSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsPostWithHttpInfo(appID, authToken, assetId, formatSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_formats 
     * Create format and associate to asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param formatSchema body
     */
    public filesV1AssetsAssetIdFormatsPost(appID: string, authToken: string, assetId: string, formatSchema: FormatSchema, _options?: Configuration): Promise<FormatSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsPost(appID, authToken, assetId, formatSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets 
     * Get all asset\'s keyframes
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param contentDisposition Set to attachment if you do not want a download link
     * @param lastId ID of a last keyframe on previous page
     * @param includeAllVersions If true return asset\&#39;s keyframes for all versions
     */
    public filesV1AssetsAssetIdKeyframesGetWithHttpInfo(appID: string, authToken: string, assetId: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, includeAllVersions?: boolean, _options?: Configuration): Promise<HttpInfo<KeyframesSchema>> {
        const result = this.api.filesV1AssetsAssetIdKeyframesGetWithHttpInfo(appID, authToken, assetId, perPage, generateSignedUrl, contentDisposition, lastId, includeAllVersions, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets 
     * Get all asset\'s keyframes
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param contentDisposition Set to attachment if you do not want a download link
     * @param lastId ID of a last keyframe on previous page
     * @param includeAllVersions If true return asset\&#39;s keyframes for all versions
     */
    public filesV1AssetsAssetIdKeyframesGet(appID: string, authToken: string, assetId: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, includeAllVersions?: boolean, _options?: Configuration): Promise<KeyframesSchema> {
        const result = this.api.filesV1AssetsAssetIdKeyframesGet(appID, authToken, assetId, perPage, generateSignedUrl, contentDisposition, lastId, includeAllVersions, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Delete asset\'s keyframe
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param keyframeId 
     * @param keepPoster 
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, keyframeId: string, keepPoster?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdDeleteWithHttpInfo(appID, authToken, assetId, keyframeId, keepPoster, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Delete asset\'s keyframe
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param keyframeId 
     * @param keepPoster 
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdDelete(appID: string, authToken: string, assetId: string, keyframeId: string, keepPoster?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdDelete(appID, authToken, assetId, keyframeId, keepPoster, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets 
     * Get asset\'s proxy
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param keyframeId 
     * @param contentDisposition Set to attachment if you do not want a download link
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdGetWithHttpInfo(appID: string, authToken: string, assetId: string, keyframeId: string, contentDisposition?: string, _options?: Configuration): Promise<HttpInfo<FileSchema>> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdGetWithHttpInfo(appID, authToken, assetId, keyframeId, contentDisposition, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets 
     * Get asset\'s proxy
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param keyframeId 
     * @param contentDisposition Set to attachment if you do not want a download link
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdGet(appID: string, authToken: string, assetId: string, keyframeId: string, contentDisposition?: string, _options?: Configuration): Promise<FileSchema> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdGet(appID, authToken, assetId, keyframeId, contentDisposition, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Update keyframe information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param keyframeId 
     * @param keyframeSchema body
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdPatchWithHttpInfo(appID: string, authToken: string, assetId: string, keyframeId: string, keyframeSchema: KeyframeSchema, _options?: Configuration): Promise<HttpInfo<KeyframeSchema>> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdPatchWithHttpInfo(appID, authToken, assetId, keyframeId, keyframeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Update keyframe information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param keyframeId 
     * @param keyframeSchema body
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdPatch(appID: string, authToken: string, assetId: string, keyframeId: string, keyframeSchema: KeyframeSchema, _options?: Configuration): Promise<KeyframeSchema> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdPatch(appID, authToken, assetId, keyframeId, keyframeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Make the keyframe link private
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param keyframeId 
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdPublicDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, keyframeId: string, _options?: Configuration): Promise<HttpInfo<KeyframeSchema>> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdPublicDeleteWithHttpInfo(appID, authToken, assetId, keyframeId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Make the keyframe link private
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param keyframeId 
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdPublicDelete(appID: string, authToken: string, assetId: string, keyframeId: string, _options?: Configuration): Promise<KeyframeSchema> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdPublicDelete(appID, authToken, assetId, keyframeId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Make the keyframe link public
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param keyframeId 
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdPublicPostWithHttpInfo(appID: string, authToken: string, assetId: string, keyframeId: string, _options?: Configuration): Promise<HttpInfo<KeyframeSchema>> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdPublicPostWithHttpInfo(appID, authToken, assetId, keyframeId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Make the keyframe link public
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param keyframeId 
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdPublicPost(appID: string, authToken: string, assetId: string, keyframeId: string, _options?: Configuration): Promise<KeyframeSchema> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdPublicPost(appID, authToken, assetId, keyframeId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Update keyframe information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param keyframeId 
     * @param keyframeSchema body
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdPutWithHttpInfo(appID: string, authToken: string, assetId: string, keyframeId: string, keyframeSchema: KeyframeSchema, _options?: Configuration): Promise<HttpInfo<KeyframeSchema>> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdPutWithHttpInfo(appID, authToken, assetId, keyframeId, keyframeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Update keyframe information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param keyframeId 
     * @param keyframeSchema body
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdPut(appID: string, authToken: string, assetId: string, keyframeId: string, keyframeSchema: KeyframeSchema, _options?: Configuration): Promise<KeyframeSchema> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdPut(appID, authToken, assetId, keyframeId, keyframeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Create keyframe and associate to asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param keyframeSchema body
     * @param useGoogleResumableUpload Set to True to get a google resumable upload link
     */
    public filesV1AssetsAssetIdKeyframesPostWithHttpInfo(appID: string, authToken: string, assetId: string, keyframeSchema: KeyframeSchema, useGoogleResumableUpload?: boolean, _options?: Configuration): Promise<HttpInfo<KeyframeCreateSchema>> {
        const result = this.api.filesV1AssetsAssetIdKeyframesPostWithHttpInfo(appID, authToken, assetId, keyframeSchema, useGoogleResumableUpload, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Create keyframe and associate to asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param keyframeSchema body
     * @param useGoogleResumableUpload Set to True to get a google resumable upload link
     */
    public filesV1AssetsAssetIdKeyframesPost(appID: string, authToken: string, assetId: string, keyframeSchema: KeyframeSchema, useGoogleResumableUpload?: boolean, _options?: Configuration): Promise<KeyframeCreateSchema> {
        const result = this.api.filesV1AssetsAssetIdKeyframesPost(appID, authToken, assetId, keyframeSchema, useGoogleResumableUpload, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Create keyframe and associate to asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param storageMethod 
     * @param keyframeSchema body
     * @param useGoogleResumableUpload Set to True to get a google resumable upload link
     */
    public filesV1AssetsAssetIdMethodStorageMethodKeyframesPostWithHttpInfo(appID: string, authToken: string, assetId: string, storageMethod: string, keyframeSchema: KeyframeSchema, useGoogleResumableUpload?: boolean, _options?: Configuration): Promise<HttpInfo<KeyframeCreateSchema>> {
        const result = this.api.filesV1AssetsAssetIdMethodStorageMethodKeyframesPostWithHttpInfo(appID, authToken, assetId, storageMethod, keyframeSchema, useGoogleResumableUpload, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Create keyframe and associate to asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param storageMethod 
     * @param keyframeSchema body
     * @param useGoogleResumableUpload Set to True to get a google resumable upload link
     */
    public filesV1AssetsAssetIdMethodStorageMethodKeyframesPost(appID: string, authToken: string, assetId: string, storageMethod: string, keyframeSchema: KeyframeSchema, useGoogleResumableUpload?: boolean, _options?: Configuration): Promise<KeyframeCreateSchema> {
        const result = this.api.filesV1AssetsAssetIdMethodStorageMethodKeyframesPost(appID, authToken, assetId, storageMethod, keyframeSchema, useGoogleResumableUpload, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Create proxy and associate to asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param storageMethod 
     * @param proxySchema body
     */
    public filesV1AssetsAssetIdMethodStorageMethodProxiesPostWithHttpInfo(appID: string, authToken: string, assetId: string, storageMethod: string, proxySchema: ProxySchema, _options?: Configuration): Promise<HttpInfo<ProxyCreateSchema>> {
        const result = this.api.filesV1AssetsAssetIdMethodStorageMethodProxiesPostWithHttpInfo(appID, authToken, assetId, storageMethod, proxySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Create proxy and associate to asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param storageMethod 
     * @param proxySchema body
     */
    public filesV1AssetsAssetIdMethodStorageMethodProxiesPost(appID: string, authToken: string, assetId: string, storageMethod: string, proxySchema: ProxySchema, _options?: Configuration): Promise<ProxyCreateSchema> {
        const result = this.api.filesV1AssetsAssetIdMethodStorageMethodProxiesPost(appID, authToken, assetId, storageMethod, proxySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_proxies 
     * Get all asset\'s proxies
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param contentDisposition Set to attachment if you want a download link
     * @param lastId ID of a last proxy on previous page
     * @param bypassUrlCache Set to true to get a new url for the file rather than using a cached url
     */
    public filesV1AssetsAssetIdProxiesGetWithHttpInfo(appID: string, authToken: string, assetId: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, bypassUrlCache?: boolean, _options?: Configuration): Promise<HttpInfo<ProxiesSchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesGetWithHttpInfo(appID, authToken, assetId, perPage, generateSignedUrl, contentDisposition, lastId, bypassUrlCache, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_proxies 
     * Get all asset\'s proxies
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param contentDisposition Set to attachment if you want a download link
     * @param lastId ID of a last proxy on previous page
     * @param bypassUrlCache Set to true to get a new url for the file rather than using a cached url
     */
    public filesV1AssetsAssetIdProxiesGet(appID: string, authToken: string, assetId: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, bypassUrlCache?: boolean, _options?: Configuration): Promise<ProxiesSchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesGet(appID, authToken, assetId, perPage, generateSignedUrl, contentDisposition, lastId, bypassUrlCache, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Create proxy and associate to asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxySchema body
     */
    public filesV1AssetsAssetIdProxiesPostWithHttpInfo(appID: string, authToken: string, assetId: string, proxySchema: ProxySchema, _options?: Configuration): Promise<HttpInfo<ProxyCreateSchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesPostWithHttpInfo(appID, authToken, assetId, proxySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Create proxy and associate to asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxySchema body
     */
    public filesV1AssetsAssetIdProxiesPost(appID: string, authToken: string, assetId: string, proxySchema: ProxySchema, _options?: Configuration): Promise<ProxyCreateSchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesPost(appID, authToken, assetId, proxySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_proxies 
     * Delete asset\'s proxy
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxyId 
     */
    public filesV1AssetsAssetIdProxiesProxyIdDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, proxyId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdDeleteWithHttpInfo(appID, authToken, assetId, proxyId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_proxies 
     * Delete asset\'s proxy
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxyId 
     */
    public filesV1AssetsAssetIdProxiesProxyIdDelete(appID: string, authToken: string, assetId: string, proxyId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdDelete(appID, authToken, assetId, proxyId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_proxies 
     * Get asset\'s proxy download url
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxyId 
     */
    public filesV1AssetsAssetIdProxiesProxyIdDownloadUrlGetWithHttpInfo(appID: string, authToken: string, assetId: string, proxyId: string, _options?: Configuration): Promise<HttpInfo<ProxyDownloadURLSchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdDownloadUrlGetWithHttpInfo(appID, authToken, assetId, proxyId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_proxies 
     * Get asset\'s proxy download url
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxyId 
     */
    public filesV1AssetsAssetIdProxiesProxyIdDownloadUrlGet(appID: string, authToken: string, assetId: string, proxyId: string, _options?: Configuration): Promise<ProxyDownloadURLSchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdDownloadUrlGet(appID, authToken, assetId, proxyId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_proxies 
     * Get asset\'s proxy
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxyId 
     * @param contentDisposition Set to attachment if you want a download link
     */
    public filesV1AssetsAssetIdProxiesProxyIdGetWithHttpInfo(appID: string, authToken: string, assetId: string, proxyId: string, contentDisposition?: string, _options?: Configuration): Promise<HttpInfo<ProxySchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdGetWithHttpInfo(appID, authToken, assetId, proxyId, contentDisposition, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_proxies 
     * Get asset\'s proxy
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxyId 
     * @param contentDisposition Set to attachment if you want a download link
     */
    public filesV1AssetsAssetIdProxiesProxyIdGet(appID: string, authToken: string, assetId: string, proxyId: string, contentDisposition?: string, _options?: Configuration): Promise<ProxySchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdGet(appID, authToken, assetId, proxyId, contentDisposition, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs 
     * Create a transcode job for keyframes from a proxy
     * @param authToken 
     * @param appID 
     * @param assetId 
     * @param proxyId 
     * @param transcodeRequestSchema body
     */
    public filesV1AssetsAssetIdProxiesProxyIdKeyframesPostWithHttpInfo(authToken: string, appID: string, assetId: string, proxyId: string, transcodeRequestSchema: TranscodeRequestSchema, _options?: Configuration): Promise<HttpInfo<TranscodeResponseSchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdKeyframesPostWithHttpInfo(authToken, appID, assetId, proxyId, transcodeRequestSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs 
     * Create a transcode job for keyframes from a proxy
     * @param authToken 
     * @param appID 
     * @param assetId 
     * @param proxyId 
     * @param transcodeRequestSchema body
     */
    public filesV1AssetsAssetIdProxiesProxyIdKeyframesPost(authToken: string, appID: string, assetId: string, proxyId: string, transcodeRequestSchema: TranscodeRequestSchema, _options?: Configuration): Promise<TranscodeResponseSchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdKeyframesPost(authToken, appID, assetId, proxyId, transcodeRequestSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Cleanup S3 multipart upload
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxyId 
     * @param multipartUploadProxyCleanupSchema body
     */
    public filesV1AssetsAssetIdProxiesProxyIdMultipartCleanupPostWithHttpInfo(appID: string, authToken: string, assetId: string, proxyId: string, multipartUploadProxyCleanupSchema: MultipartUploadProxyCleanupSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdMultipartCleanupPostWithHttpInfo(appID, authToken, assetId, proxyId, multipartUploadProxyCleanupSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Cleanup S3 multipart upload
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxyId 
     * @param multipartUploadProxyCleanupSchema body
     */
    public filesV1AssetsAssetIdProxiesProxyIdMultipartCleanupPost(appID: string, authToken: string, assetId: string, proxyId: string, multipartUploadProxyCleanupSchema: MultipartUploadProxyCleanupSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdMultipartCleanupPost(appID, authToken, assetId, proxyId, multipartUploadProxyCleanupSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Get presigned urls for S3 multipart upload.
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxyId 
     * @param uploadId Multipart UploadId
     * @param type List of multipart upload urls of required type
     * @param maxPartNumber Maximum PartNumber that multipart upload has
     */
    public filesV1AssetsAssetIdProxiesProxyIdMultipartUrlGetWithHttpInfo(appID: string, authToken: string, assetId: string, proxyId: string, uploadId: string, type?: string, maxPartNumber?: number, _options?: Configuration): Promise<HttpInfo<MultiPartURLsSchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdMultipartUrlGetWithHttpInfo(appID, authToken, assetId, proxyId, uploadId, type, maxPartNumber, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Get presigned urls for S3 multipart upload.
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxyId 
     * @param uploadId Multipart UploadId
     * @param type List of multipart upload urls of required type
     * @param maxPartNumber Maximum PartNumber that multipart upload has
     */
    public filesV1AssetsAssetIdProxiesProxyIdMultipartUrlGet(appID: string, authToken: string, assetId: string, proxyId: string, uploadId: string, type?: string, maxPartNumber?: number, _options?: Configuration): Promise<MultiPartURLsSchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdMultipartUrlGet(appID, authToken, assetId, proxyId, uploadId, type, maxPartNumber, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Get presigned urls for S3 multipart part upload.
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxyId 
     * @param partsNum Number of parts to upload
     * @param uploadId Multipart UploadId
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     */
    public filesV1AssetsAssetIdProxiesProxyIdMultipartUrlPartGetWithHttpInfo(appID: string, authToken: string, assetId: string, proxyId: string, partsNum: number, uploadId?: string, perPage?: number, page?: number, _options?: Configuration): Promise<HttpInfo<MultiPartUploadURLsSchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdMultipartUrlPartGetWithHttpInfo(appID, authToken, assetId, proxyId, partsNum, uploadId, perPage, page, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Get presigned urls for S3 multipart part upload.
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxyId 
     * @param partsNum Number of parts to upload
     * @param uploadId Multipart UploadId
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     */
    public filesV1AssetsAssetIdProxiesProxyIdMultipartUrlPartGet(appID: string, authToken: string, assetId: string, proxyId: string, partsNum: number, uploadId?: string, perPage?: number, page?: number, _options?: Configuration): Promise<MultiPartUploadURLsSchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdMultipartUrlPartGet(appID, authToken, assetId, proxyId, partsNum, uploadId, perPage, page, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Update proxy information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxyId 
     * @param proxySchema body
     */
    public filesV1AssetsAssetIdProxiesProxyIdPatchWithHttpInfo(appID: string, authToken: string, assetId: string, proxyId: string, proxySchema: ProxySchema, _options?: Configuration): Promise<HttpInfo<ProxySchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdPatchWithHttpInfo(appID, authToken, assetId, proxyId, proxySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Update proxy information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxyId 
     * @param proxySchema body
     */
    public filesV1AssetsAssetIdProxiesProxyIdPatch(appID: string, authToken: string, assetId: string, proxyId: string, proxySchema: ProxySchema, _options?: Configuration): Promise<ProxySchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdPatch(appID, authToken, assetId, proxyId, proxySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Make the proxy link private
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxyId 
     */
    public filesV1AssetsAssetIdProxiesProxyIdPublicDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, proxyId: string, _options?: Configuration): Promise<HttpInfo<ProxySchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdPublicDeleteWithHttpInfo(appID, authToken, assetId, proxyId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Make the proxy link private
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxyId 
     */
    public filesV1AssetsAssetIdProxiesProxyIdPublicDelete(appID: string, authToken: string, assetId: string, proxyId: string, _options?: Configuration): Promise<ProxySchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdPublicDelete(appID, authToken, assetId, proxyId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Make the proxy link public
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxyId 
     */
    public filesV1AssetsAssetIdProxiesProxyIdPublicPostWithHttpInfo(appID: string, authToken: string, assetId: string, proxyId: string, _options?: Configuration): Promise<HttpInfo<ProxySchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdPublicPostWithHttpInfo(appID, authToken, assetId, proxyId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Make the proxy link public
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxyId 
     */
    public filesV1AssetsAssetIdProxiesProxyIdPublicPost(appID: string, authToken: string, assetId: string, proxyId: string, _options?: Configuration): Promise<ProxySchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdPublicPost(appID, authToken, assetId, proxyId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Update proxy information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxyId 
     * @param proxySchema body
     */
    public filesV1AssetsAssetIdProxiesProxyIdPutWithHttpInfo(appID: string, authToken: string, assetId: string, proxyId: string, proxySchema: ProxySchema, _options?: Configuration): Promise<HttpInfo<ProxySchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdPutWithHttpInfo(appID, authToken, assetId, proxyId, proxySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Update proxy information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param proxyId 
     * @param proxySchema body
     */
    public filesV1AssetsAssetIdProxiesProxyIdPut(appID: string, authToken: string, assetId: string, proxyId: string, proxySchema: ProxySchema, _options?: Configuration): Promise<ProxySchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdPut(appID, authToken, assetId, proxyId, proxySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get all asset\'s subtitles
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last subtitle on previous page
     */
    public filesV1AssetsAssetIdSubtitlesGetWithHttpInfo(appID: string, authToken: string, assetId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<SubtitlesSchema>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesGetWithHttpInfo(appID, authToken, assetId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get all asset\'s subtitles
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last subtitle on previous page
     */
    public filesV1AssetsAssetIdSubtitlesGet(appID: string, authToken: string, assetId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<SubtitlesSchema> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesGet(appID, authToken, assetId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s closed captions subtitle for a particular language
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param language 
     */
    public filesV1AssetsAssetIdSubtitlesLanguageCcGetWithHttpInfo(appID: string, authToken: string, assetId: string, language: string, _options?: Configuration): Promise<HttpInfo<SubtitleSchema>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesLanguageCcGetWithHttpInfo(appID, authToken, assetId, language, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s closed captions subtitle for a particular language
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param language 
     */
    public filesV1AssetsAssetIdSubtitlesLanguageCcGet(appID: string, authToken: string, assetId: string, language: string, _options?: Configuration): Promise<SubtitleSchema> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesLanguageCcGet(appID, authToken, assetId, language, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s closed captions subtitle file for a particular language
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param language 
     */
    public filesV1AssetsAssetIdSubtitlesLanguageCcWebvttGetWithHttpInfo(appID: string, authToken: string, assetId: string, language: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesLanguageCcWebvttGetWithHttpInfo(appID, authToken, assetId, language, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s closed captions subtitle file for a particular language
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param language 
     */
    public filesV1AssetsAssetIdSubtitlesLanguageCcWebvttGet(appID: string, authToken: string, assetId: string, language: string, _options?: Configuration): Promise<string> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesLanguageCcWebvttGet(appID, authToken, assetId, language, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s subtitle for a particular language
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param language 
     */
    public filesV1AssetsAssetIdSubtitlesLanguageGetWithHttpInfo(appID: string, authToken: string, assetId: string, language: string, _options?: Configuration): Promise<HttpInfo<SubtitleSchema>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesLanguageGetWithHttpInfo(appID, authToken, assetId, language, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s subtitle for a particular language
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param language 
     */
    public filesV1AssetsAssetIdSubtitlesLanguageGet(appID: string, authToken: string, assetId: string, language: string, _options?: Configuration): Promise<SubtitleSchema> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesLanguageGet(appID, authToken, assetId, language, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s subtitle file for a particular language
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param language 
     */
    public filesV1AssetsAssetIdSubtitlesLanguageWebvttGetWithHttpInfo(appID: string, authToken: string, assetId: string, language: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesLanguageWebvttGetWithHttpInfo(appID, authToken, assetId, language, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s subtitle file for a particular language
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param language 
     */
    public filesV1AssetsAssetIdSubtitlesLanguageWebvttGet(appID: string, authToken: string, assetId: string, language: string, _options?: Configuration): Promise<string> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesLanguageWebvttGet(appID, authToken, assetId, language, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_subtitles 
     * Create subtitle proxy and associate to asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param subtitleSchema body
     */
    public filesV1AssetsAssetIdSubtitlesPostWithHttpInfo(appID: string, authToken: string, assetId: string, subtitleSchema: SubtitleSchema, _options?: Configuration): Promise<HttpInfo<SubtitleSchema>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesPostWithHttpInfo(appID, authToken, assetId, subtitleSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_subtitles 
     * Create subtitle proxy and associate to asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param subtitleSchema body
     */
    public filesV1AssetsAssetIdSubtitlesPost(appID: string, authToken: string, assetId: string, subtitleSchema: SubtitleSchema, _options?: Configuration): Promise<SubtitleSchema> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesPost(appID, authToken, assetId, subtitleSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Delete asset\'s subtitle
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param subtitleId 
     */
    public filesV1AssetsAssetIdSubtitlesSubtitleIdCcDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, subtitleId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesSubtitleIdCcDeleteWithHttpInfo(appID, authToken, assetId, subtitleId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Delete asset\'s subtitle
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param subtitleId 
     */
    public filesV1AssetsAssetIdSubtitlesSubtitleIdCcDelete(appID: string, authToken: string, assetId: string, subtitleId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesSubtitleIdCcDelete(appID, authToken, assetId, subtitleId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Delete asset\'s subtitle
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param subtitleId 
     */
    public filesV1AssetsAssetIdSubtitlesSubtitleIdDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, subtitleId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesSubtitleIdDeleteWithHttpInfo(appID, authToken, assetId, subtitleId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Delete asset\'s subtitle
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param subtitleId 
     */
    public filesV1AssetsAssetIdSubtitlesSubtitleIdDelete(appID: string, authToken: string, assetId: string, subtitleId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesSubtitleIdDelete(appID, authToken, assetId, subtitleId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s subtitle for a language
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param subtitleId 
     */
    public filesV1AssetsAssetIdSubtitlesSubtitleIdGetWithHttpInfo(appID: string, authToken: string, assetId: string, subtitleId: string, _options?: Configuration): Promise<HttpInfo<SubtitleSchema>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesSubtitleIdGetWithHttpInfo(appID, authToken, assetId, subtitleId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s subtitle for a language
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param subtitleId 
     */
    public filesV1AssetsAssetIdSubtitlesSubtitleIdGet(appID: string, authToken: string, assetId: string, subtitleId: string, _options?: Configuration): Promise<SubtitleSchema> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesSubtitleIdGet(appID, authToken, assetId, subtitleId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_subtitles 
     * Update subtitle information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param subtitleId 
     * @param subtitleSchema body
     */
    public filesV1AssetsAssetIdSubtitlesSubtitleIdPatchWithHttpInfo(appID: string, authToken: string, assetId: string, subtitleId: string, subtitleSchema: SubtitleSchema, _options?: Configuration): Promise<HttpInfo<SubtitleSchema>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesSubtitleIdPatchWithHttpInfo(appID, authToken, assetId, subtitleId, subtitleSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_subtitles 
     * Update subtitle information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param subtitleId 
     * @param subtitleSchema body
     */
    public filesV1AssetsAssetIdSubtitlesSubtitleIdPatch(appID: string, authToken: string, assetId: string, subtitleId: string, subtitleSchema: SubtitleSchema, _options?: Configuration): Promise<SubtitleSchema> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesSubtitleIdPatch(appID, authToken, assetId, subtitleId, subtitleSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_subtitles 
     * Update subtitle information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param subtitleId 
     * @param subtitleSchema body
     */
    public filesV1AssetsAssetIdSubtitlesSubtitleIdPutWithHttpInfo(appID: string, authToken: string, assetId: string, subtitleId: string, subtitleSchema: SubtitleSchema, _options?: Configuration): Promise<HttpInfo<SubtitleSchema>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesSubtitleIdPutWithHttpInfo(appID, authToken, assetId, subtitleId, subtitleSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_subtitles 
     * Update subtitle information
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param subtitleId 
     * @param subtitleSchema body
     */
    public filesV1AssetsAssetIdSubtitlesSubtitleIdPut(appID: string, authToken: string, assetId: string, subtitleId: string, subtitleSchema: SubtitleSchema, _options?: Configuration): Promise<SubtitleSchema> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesSubtitleIdPut(appID, authToken, assetId, subtitleId, subtitleSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete temporary file set with files
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSetId 
     * @param deleteCloudObjects 
     */
    public filesV1AssetsAssetIdTemporaryFileSetsFileSetIdDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, fileSetId: string, deleteCloudObjects?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFileSetsFileSetIdDeleteWithHttpInfo(appID, authToken, assetId, fileSetId, deleteCloudObjects, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete temporary file set with files
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSetId 
     * @param deleteCloudObjects 
     */
    public filesV1AssetsAssetIdTemporaryFileSetsFileSetIdDelete(appID: string, authToken: string, assetId: string, fileSetId: string, deleteCloudObjects?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFileSetsFileSetIdDelete(appID, authToken, assetId, fileSetId, deleteCloudObjects, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get files from a temporary file set
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSetId 
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     */
    public filesV1AssetsAssetIdTemporaryFileSetsFileSetIdFilesGetWithHttpInfo(appID: string, authToken: string, assetId: string, fileSetId: string, generateSignedUrl?: boolean, _options?: Configuration): Promise<HttpInfo<FilesSchema>> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFileSetsFileSetIdFilesGetWithHttpInfo(appID, authToken, assetId, fileSetId, generateSignedUrl, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get files from a temporary file set
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSetId 
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     */
    public filesV1AssetsAssetIdTemporaryFileSetsFileSetIdFilesGet(appID: string, authToken: string, assetId: string, fileSetId: string, generateSignedUrl?: boolean, _options?: Configuration): Promise<FilesSchema> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFileSetsFileSetIdFilesGet(appID, authToken, assetId, fileSetId, generateSignedUrl, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Create temporary file set and associate to asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param temporaryFileSetSchema body
     */
    public filesV1AssetsAssetIdTemporaryFileSetsPostWithHttpInfo(appID: string, authToken: string, assetId: string, temporaryFileSetSchema: TemporaryFileSetSchema, _options?: Configuration): Promise<HttpInfo<TemporaryFileSetSchema>> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFileSetsPostWithHttpInfo(appID, authToken, assetId, temporaryFileSetSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Create temporary file set and associate to asset
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param temporaryFileSetSchema body
     */
    public filesV1AssetsAssetIdTemporaryFileSetsPost(appID: string, authToken: string, assetId: string, temporaryFileSetSchema: TemporaryFileSetSchema, _options?: Configuration): Promise<TemporaryFileSetSchema> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFileSetsPost(appID, authToken, assetId, temporaryFileSetSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update temporary file\'s info
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param fileSchema body
     */
    public filesV1AssetsAssetIdTemporaryFilesFileIdPatchWithHttpInfo(appID: string, authToken: string, assetId: string, fileId: string, fileSchema: FileSchema, _options?: Configuration): Promise<HttpInfo<FileSchema>> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFilesFileIdPatchWithHttpInfo(appID, authToken, assetId, fileId, fileSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update temporary file\'s info
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param fileSchema body
     */
    public filesV1AssetsAssetIdTemporaryFilesFileIdPatch(appID: string, authToken: string, assetId: string, fileId: string, fileSchema: FileSchema, _options?: Configuration): Promise<FileSchema> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFilesFileIdPatch(appID, authToken, assetId, fileId, fileSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update temporary file\'s info
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param fileSchema body
     */
    public filesV1AssetsAssetIdTemporaryFilesFileIdPutWithHttpInfo(appID: string, authToken: string, assetId: string, fileId: string, fileSchema: FileSchema, _options?: Configuration): Promise<HttpInfo<FileSchema>> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFilesFileIdPutWithHttpInfo(appID, authToken, assetId, fileId, fileSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update temporary file\'s info
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileId 
     * @param fileSchema body
     */
    public filesV1AssetsAssetIdTemporaryFilesFileIdPut(appID: string, authToken: string, assetId: string, fileId: string, fileSchema: FileSchema, _options?: Configuration): Promise<FileSchema> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFilesFileIdPut(appID, authToken, assetId, fileId, fileSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Create temporary transfer file for FILE storage transfers
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSchema body
     * @param store 
     */
    public filesV1AssetsAssetIdTemporaryFilesPostWithHttpInfo(appID: string, authToken: string, assetId: string, fileSchema: FileSchema, store?: boolean, _options?: Configuration): Promise<HttpInfo<TemporaryFileCreateSchema>> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFilesPostWithHttpInfo(appID, authToken, assetId, fileSchema, store, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Create temporary transfer file for FILE storage transfers
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param fileSchema body
     * @param store 
     */
    public filesV1AssetsAssetIdTemporaryFilesPost(appID: string, authToken: string, assetId: string, fileSchema: FileSchema, store?: boolean, _options?: Configuration): Promise<TemporaryFileCreateSchema> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFilesPost(appID, authToken, assetId, fileSchema, store, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s file sets
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public filesV1AssetsAssetIdVersionsAllFileSetsDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllFileSetsDeleteWithHttpInfo(appID, authToken, assetId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s file sets
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public filesV1AssetsAssetIdVersionsAllFileSetsDelete(appID: string, authToken: string, assetId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllFileSetsDelete(appID, authToken, assetId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s files entries by version (Not the actual file, use DELETE file_set for that)
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public filesV1AssetsAssetIdVersionsAllFilesDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllFilesDeleteWithHttpInfo(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s files entries by version (Not the actual file, use DELETE file_set for that)
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public filesV1AssetsAssetIdVersionsAllFilesDelete(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllFilesDelete(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_formats 
     * Delete asset\'s formats all versions
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public filesV1AssetsAssetIdVersionsAllFormatsDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllFormatsDeleteWithHttpInfo(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_formats 
     * Delete asset\'s formats all versions
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public filesV1AssetsAssetIdVersionsAllFormatsDelete(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllFormatsDelete(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Delete asset\'s keyframes all versions
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public filesV1AssetsAssetIdVersionsAllKeyframesDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllKeyframesDeleteWithHttpInfo(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Delete asset\'s keyframes all versions
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public filesV1AssetsAssetIdVersionsAllKeyframesDelete(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllKeyframesDelete(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_proxies 
     * Delete asset\'s proxies all versions
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public filesV1AssetsAssetIdVersionsAllProxiesDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllProxiesDeleteWithHttpInfo(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_proxies 
     * Delete asset\'s proxies all versions
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public filesV1AssetsAssetIdVersionsAllProxiesDelete(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllProxiesDelete(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Delete asset\'s subtitles all versions
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public filesV1AssetsAssetIdVersionsAllSubtitlesDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllSubtitlesDeleteWithHttpInfo(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Delete asset\'s subtitles all versions
     * @param appID 
     * @param authToken 
     * @param assetId 
     */
    public filesV1AssetsAssetIdVersionsAllSubtitlesDelete(appID: string, authToken: string, assetId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllSubtitlesDelete(appID, authToken, assetId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s file sets by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdFileSetsDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFileSetsDeleteWithHttpInfo(appID, authToken, assetId, versionId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s file sets by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdFileSetsDelete(appID: string, authToken: string, assetId: string, versionId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFileSetsDelete(appID, authToken, assetId, versionId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s file sets by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     * @param fileCount Set to true if you need a total amount of files in a file set
     */
    public filesV1AssetsAssetIdVersionsVersionIdFileSetsGetWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, perPage?: number, lastId?: string, fileCount?: boolean, _options?: Configuration): Promise<HttpInfo<FileSetsSchema>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFileSetsGetWithHttpInfo(appID, authToken, assetId, versionId, perPage, lastId, fileCount, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s file sets by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     * @param fileCount Set to true if you need a total amount of files in a file set
     */
    public filesV1AssetsAssetIdVersionsVersionIdFileSetsGet(appID: string, authToken: string, assetId: string, versionId: string, perPage?: number, lastId?: string, fileCount?: boolean, _options?: Configuration): Promise<FileSetsSchema> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFileSetsGet(appID, authToken, assetId, versionId, perPage, lastId, fileCount, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s files entries by version (Not the actual file, use DELETE file_set for that)
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     */
    public filesV1AssetsAssetIdVersionsVersionIdFilesDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFilesDeleteWithHttpInfo(appID, authToken, assetId, versionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s files entries by version (Not the actual file, use DELETE file_set for that)
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     */
    public filesV1AssetsAssetIdVersionsVersionIdFilesDelete(appID: string, authToken: string, assetId: string, versionId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFilesDelete(appID, authToken, assetId, versionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s files by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to False if you do not need a URL, will slow things down otherwise
     * @param contentDisposition Set to attachment if you want a download link. Note that this will not create a download in asset history
     * @param lastId ID of a last file on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdFilesGetWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, _options?: Configuration): Promise<HttpInfo<FilesSchema>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFilesGetWithHttpInfo(appID, authToken, assetId, versionId, perPage, generateSignedUrl, contentDisposition, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s files by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to False if you do not need a URL, will slow things down otherwise
     * @param contentDisposition Set to attachment if you want a download link. Note that this will not create a download in asset history
     * @param lastId ID of a last file on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdFilesGet(appID: string, authToken: string, assetId: string, versionId: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, _options?: Configuration): Promise<FilesSchema> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFilesGet(appID, authToken, assetId, versionId, perPage, generateSignedUrl, contentDisposition, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_formats 
     * Delete asset\'s formats by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     */
    public filesV1AssetsAssetIdVersionsVersionIdFormatsDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFormatsDeleteWithHttpInfo(appID, authToken, assetId, versionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_formats 
     * Delete asset\'s formats by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     */
    public filesV1AssetsAssetIdVersionsVersionIdFormatsDelete(appID: string, authToken: string, assetId: string, versionId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFormatsDelete(appID, authToken, assetId, versionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get all asset\'s formats by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last format on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdFormatsGetWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<FormatsSchema>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFormatsGetWithHttpInfo(appID, authToken, assetId, versionId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get all asset\'s formats by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last format on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdFormatsGet(appID: string, authToken: string, assetId: string, versionId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<FormatsSchema> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFormatsGet(appID, authToken, assetId, versionId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Delete asset\'s keyframes by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param keepPoster 
     */
    public filesV1AssetsAssetIdVersionsVersionIdKeyframesDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, keepPoster?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdKeyframesDeleteWithHttpInfo(appID, authToken, assetId, versionId, keepPoster, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Delete asset\'s keyframes by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param keepPoster 
     */
    public filesV1AssetsAssetIdVersionsVersionIdKeyframesDelete(appID: string, authToken: string, assetId: string, versionId: string, keepPoster?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdKeyframesDelete(appID, authToken, assetId, versionId, keepPoster, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets 
     * Get all asset\'s keyframes by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param contentDisposition Set to attachment if you do not want a download link
     * @param lastId ID of a last keyframe on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdKeyframesGetWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, _options?: Configuration): Promise<HttpInfo<KeyframesSchema>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdKeyframesGetWithHttpInfo(appID, authToken, assetId, versionId, perPage, generateSignedUrl, contentDisposition, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets 
     * Get all asset\'s keyframes by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param contentDisposition Set to attachment if you do not want a download link
     * @param lastId ID of a last keyframe on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdKeyframesGet(appID: string, authToken: string, assetId: string, versionId: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, _options?: Configuration): Promise<KeyframesSchema> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdKeyframesGet(appID, authToken, assetId, versionId, perPage, generateSignedUrl, contentDisposition, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_proxies 
     * Delete asset\'s proxies by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     */
    public filesV1AssetsAssetIdVersionsVersionIdProxiesDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdProxiesDeleteWithHttpInfo(appID, authToken, assetId, versionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_proxies 
     * Delete asset\'s proxies by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     */
    public filesV1AssetsAssetIdVersionsVersionIdProxiesDelete(appID: string, authToken: string, assetId: string, versionId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdProxiesDelete(appID, authToken, assetId, versionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_proxies 
     * Get all asset\'s proxies by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param contentDisposition Set to attachment if you want a download link
     * @param lastId ID of a last proxy on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdProxiesGetWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, _options?: Configuration): Promise<HttpInfo<ProxiesSchema>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdProxiesGetWithHttpInfo(appID, authToken, assetId, versionId, perPage, generateSignedUrl, contentDisposition, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_proxies 
     * Get all asset\'s proxies by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param contentDisposition Set to attachment if you want a download link
     * @param lastId ID of a last proxy on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdProxiesGet(appID: string, authToken: string, assetId: string, versionId: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, _options?: Configuration): Promise<ProxiesSchema> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdProxiesGet(appID, authToken, assetId, versionId, perPage, generateSignedUrl, contentDisposition, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Delete asset\'s subtitles by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     */
    public filesV1AssetsAssetIdVersionsVersionIdSubtitlesDeleteWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdSubtitlesDeleteWithHttpInfo(appID, authToken, assetId, versionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Delete asset\'s subtitles by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     */
    public filesV1AssetsAssetIdVersionsVersionIdSubtitlesDelete(appID: string, authToken: string, assetId: string, versionId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdSubtitlesDelete(appID, authToken, assetId, versionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get all asset\'s subtitles by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last subtitle on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdSubtitlesGetWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<SubtitlesSchema>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdSubtitlesGetWithHttpInfo(appID, authToken, assetId, versionId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get all asset\'s subtitles by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last subtitle on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdSubtitlesGet(appID: string, authToken: string, assetId: string, versionId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<SubtitlesSchema> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdSubtitlesGet(appID, authToken, assetId, versionId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s closed captions subtitle file for a particular language by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param language 
     */
    public filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageCcWebvttGetWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, language: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageCcWebvttGetWithHttpInfo(appID, authToken, assetId, versionId, language, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s closed captions subtitle file for a particular language by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param language 
     */
    public filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageCcWebvttGet(appID: string, authToken: string, assetId: string, versionId: string, language: string, _options?: Configuration): Promise<string> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageCcWebvttGet(appID, authToken, assetId, versionId, language, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s subtitle file for a particular language by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param language 
     */
    public filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageWebvttGetWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, language: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageWebvttGetWithHttpInfo(appID, authToken, assetId, versionId, language, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s subtitle file for a particular language by version
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param versionId 
     * @param language 
     */
    public filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageWebvttGet(appID: string, authToken: string, assetId: string, versionId: string, language: string, _options?: Configuration): Promise<string> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageWebvttGet(appID, authToken, assetId, versionId, language, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs 
     * Create a transcode job for proxy and keyframes generation of multiple assets
     * @param authToken 
     * @param appID 
     * @param bulkTranscodeSchema body
     */
    public filesV1AssetsBulkKeyframesPostWithHttpInfo(authToken: string, appID: string, bulkTranscodeSchema: BulkTranscodeSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsBulkKeyframesPostWithHttpInfo(authToken, appID, bulkTranscodeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs 
     * Create a transcode job for proxy and keyframes generation of multiple assets
     * @param authToken 
     * @param appID 
     * @param bulkTranscodeSchema body
     */
    public filesV1AssetsBulkKeyframesPost(authToken: string, appID: string, bulkTranscodeSchema: BulkTranscodeSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsBulkKeyframesPost(authToken, appID, bulkTranscodeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_exports 
     * Export multiple assets to export location
     * @param appID 
     * @param exportLocationId 
     * @param assetBatchExportSchema body
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1AssetsExportLocationsExportLocationIdPostWithHttpInfo(appID: string, exportLocationId: string, assetBatchExportSchema: AssetBatchExportSchema, allowHostTransfer?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsExportLocationsExportLocationIdPostWithHttpInfo(appID, exportLocationId, assetBatchExportSchema, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_exports 
     * Export multiple assets to export location
     * @param appID 
     * @param exportLocationId 
     * @param assetBatchExportSchema body
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1AssetsExportLocationsExportLocationIdPost(appID: string, exportLocationId: string, assetBatchExportSchema: AssetBatchExportSchema, allowHostTransfer?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsExportLocationsExportLocationIdPost(appID, exportLocationId, assetBatchExportSchema, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Set keyframe of type poster as collection keyframe
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param posterId 
     * @param overwrite set to false to keep current custom_poster and custom_keyframe on asset
     */
    public filesV1CollectionsCollectionIdCustomKeyframePosterIdPostWithHttpInfo(appID: string, authToken: string, collectionId: string, posterId: string, overwrite?: boolean, _options?: Configuration): Promise<HttpInfo<CollectionKeyframeSchema>> {
        const result = this.api.filesV1CollectionsCollectionIdCustomKeyframePosterIdPostWithHttpInfo(appID, authToken, collectionId, posterId, overwrite, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Set keyframe of type poster as collection keyframe
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param posterId 
     * @param overwrite set to false to keep current custom_poster and custom_keyframe on asset
     */
    public filesV1CollectionsCollectionIdCustomKeyframePosterIdPost(appID: string, authToken: string, collectionId: string, posterId: string, overwrite?: boolean, _options?: Configuration): Promise<CollectionKeyframeSchema> {
        const result = this.api.filesV1CollectionsCollectionIdCustomKeyframePosterIdPost(appID, authToken, collectionId, posterId, overwrite, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_exports 
     * Export collection assets to export location
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param exportLocationId 
     * @param collectionExportSchema body
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1CollectionsCollectionIdExportLocationsExportLocationIdPostWithHttpInfo(appID: string, authToken: string, collectionId: string, exportLocationId: string, collectionExportSchema: CollectionExportSchema, allowHostTransfer?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1CollectionsCollectionIdExportLocationsExportLocationIdPostWithHttpInfo(appID, authToken, collectionId, exportLocationId, collectionExportSchema, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_exports 
     * Export collection assets to export location
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param exportLocationId 
     * @param collectionExportSchema body
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1CollectionsCollectionIdExportLocationsExportLocationIdPost(appID: string, authToken: string, collectionId: string, exportLocationId: string, collectionExportSchema: CollectionExportSchema, allowHostTransfer?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1CollectionsCollectionIdExportLocationsExportLocationIdPost(appID, authToken, collectionId, exportLocationId, collectionExportSchema, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Get all collection\'s keyframes
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param lastId ID of a last collection keyframe on previous page
     */
    public filesV1CollectionsCollectionIdKeyframesGetWithHttpInfo(appID: string, authToken: string, collectionId: string, perPage?: number, generateSignedUrl?: boolean, lastId?: string, _options?: Configuration): Promise<HttpInfo<CollectionKeyframesSchema>> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesGetWithHttpInfo(appID, authToken, collectionId, perPage, generateSignedUrl, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Get all collection\'s keyframes
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param lastId ID of a last collection keyframe on previous page
     */
    public filesV1CollectionsCollectionIdKeyframesGet(appID: string, authToken: string, collectionId: string, perPage?: number, generateSignedUrl?: boolean, lastId?: string, _options?: Configuration): Promise<CollectionKeyframesSchema> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesGet(appID, authToken, collectionId, perPage, generateSignedUrl, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Delete collection\'s keyframe
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param keyframeId 
     * @param regenerateKeyframes set to true to force a regeneration of default keyframes
     */
    public filesV1CollectionsCollectionIdKeyframesKeyframeIdDeleteWithHttpInfo(appID: string, authToken: string, collectionId: string, keyframeId: string, regenerateKeyframes?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesKeyframeIdDeleteWithHttpInfo(appID, authToken, collectionId, keyframeId, regenerateKeyframes, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Delete collection\'s keyframe
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param keyframeId 
     * @param regenerateKeyframes set to true to force a regeneration of default keyframes
     */
    public filesV1CollectionsCollectionIdKeyframesKeyframeIdDelete(appID: string, authToken: string, collectionId: string, keyframeId: string, regenerateKeyframes?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesKeyframeIdDelete(appID, authToken, collectionId, keyframeId, regenerateKeyframes, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Get collection\'s proxy
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param keyframeId 
     */
    public filesV1CollectionsCollectionIdKeyframesKeyframeIdGetWithHttpInfo(appID: string, authToken: string, collectionId: string, keyframeId: string, _options?: Configuration): Promise<HttpInfo<CollectionKeyframeSchema>> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesKeyframeIdGetWithHttpInfo(appID, authToken, collectionId, keyframeId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Get collection\'s proxy
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param keyframeId 
     */
    public filesV1CollectionsCollectionIdKeyframesKeyframeIdGet(appID: string, authToken: string, collectionId: string, keyframeId: string, _options?: Configuration): Promise<CollectionKeyframeSchema> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesKeyframeIdGet(appID, authToken, collectionId, keyframeId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Update keyframe information
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param keyframeId 
     * @param collectionKeyframeSchema body
     */
    public filesV1CollectionsCollectionIdKeyframesKeyframeIdPatchWithHttpInfo(appID: string, authToken: string, collectionId: string, keyframeId: string, collectionKeyframeSchema: CollectionKeyframeSchema, _options?: Configuration): Promise<HttpInfo<CollectionKeyframeSchema>> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesKeyframeIdPatchWithHttpInfo(appID, authToken, collectionId, keyframeId, collectionKeyframeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Update keyframe information
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param keyframeId 
     * @param collectionKeyframeSchema body
     */
    public filesV1CollectionsCollectionIdKeyframesKeyframeIdPatch(appID: string, authToken: string, collectionId: string, keyframeId: string, collectionKeyframeSchema: CollectionKeyframeSchema, _options?: Configuration): Promise<CollectionKeyframeSchema> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesKeyframeIdPatch(appID, authToken, collectionId, keyframeId, collectionKeyframeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Update keyframe information
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param keyframeId 
     * @param collectionKeyframeSchema body
     */
    public filesV1CollectionsCollectionIdKeyframesKeyframeIdPutWithHttpInfo(appID: string, authToken: string, collectionId: string, keyframeId: string, collectionKeyframeSchema: CollectionKeyframeSchema, _options?: Configuration): Promise<HttpInfo<CollectionKeyframeSchema>> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesKeyframeIdPutWithHttpInfo(appID, authToken, collectionId, keyframeId, collectionKeyframeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Update keyframe information
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param keyframeId 
     * @param collectionKeyframeSchema body
     */
    public filesV1CollectionsCollectionIdKeyframesKeyframeIdPut(appID: string, authToken: string, collectionId: string, keyframeId: string, collectionKeyframeSchema: CollectionKeyframeSchema, _options?: Configuration): Promise<CollectionKeyframeSchema> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesKeyframeIdPut(appID, authToken, collectionId, keyframeId, collectionKeyframeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Create keyframe and associate to collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param collectionKeyframeSchema body
     */
    public filesV1CollectionsCollectionIdKeyframesPostWithHttpInfo(appID: string, authToken: string, collectionId: string, collectionKeyframeSchema: CollectionKeyframeSchema, _options?: Configuration): Promise<HttpInfo<CollectionKeyframeCreateSchema>> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesPostWithHttpInfo(appID, authToken, collectionId, collectionKeyframeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Create keyframe and associate to collection
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param collectionKeyframeSchema body
     */
    public filesV1CollectionsCollectionIdKeyframesPost(appID: string, authToken: string, collectionId: string, collectionKeyframeSchema: CollectionKeyframeSchema, _options?: Configuration): Promise<CollectionKeyframeCreateSchema> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesPost(appID, authToken, collectionId, collectionKeyframeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Restore file sets from delete queue
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public filesV1DeleteQueueFileSetsDeleteWithHttpInfo(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1DeleteQueueFileSetsDeleteWithHttpInfo(appID, authToken, deleteQueueSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Restore file sets from delete queue
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public filesV1DeleteQueueFileSetsDelete(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1DeleteQueueFileSetsDelete(appID, authToken, deleteQueueSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get deleted file sets
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param query Search using query
     * @param fieldName filter by field_name
     */
    public filesV1DeleteQueueFileSetsGetWithHttpInfo(appID: string, authToken: string, perPage?: number, page?: number, sort?: string, query?: string, fieldName?: string, _options?: Configuration): Promise<HttpInfo<FileSetsElasticSchema>> {
        const result = this.api.filesV1DeleteQueueFileSetsGetWithHttpInfo(appID, authToken, perPage, page, sort, query, fieldName, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get deleted file sets
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param query Search using query
     * @param fieldName filter by field_name
     */
    public filesV1DeleteQueueFileSetsGet(appID: string, authToken: string, perPage?: number, page?: number, sort?: string, query?: string, fieldName?: string, _options?: Configuration): Promise<FileSetsElasticSchema> {
        const result = this.api.filesV1DeleteQueueFileSetsGet(appID, authToken, perPage, page, sort, query, fieldName, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_files 
     * Purge all file sets from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public filesV1DeleteQueueFileSetsPurgeAllPostWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1DeleteQueueFileSetsPurgeAllPostWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_files 
     * Purge all file sets from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public filesV1DeleteQueueFileSetsPurgeAllPost(appID: string, authToken: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1DeleteQueueFileSetsPurgeAllPost(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_files 
     * Purge file sets from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public filesV1DeleteQueueFileSetsPurgePostWithHttpInfo(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1DeleteQueueFileSetsPurgePostWithHttpInfo(appID, authToken, deleteQueueSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_files 
     * Purge file sets from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public filesV1DeleteQueueFileSetsPurgePost(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1DeleteQueueFileSetsPurgePost(appID, authToken, deleteQueueSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_formats 
     * Restore formats from delete queue
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public filesV1DeleteQueueFormatsDeleteWithHttpInfo(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1DeleteQueueFormatsDeleteWithHttpInfo(appID, authToken, deleteQueueSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_formats 
     * Restore formats from delete queue
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public filesV1DeleteQueueFormatsDelete(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1DeleteQueueFormatsDelete(appID, authToken, deleteQueueSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get deleted formats
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param query Search using query
     * @param fieldName filter by field_name
     */
    public filesV1DeleteQueueFormatsGetWithHttpInfo(appID: string, authToken: string, perPage?: number, page?: number, sort?: string, query?: string, fieldName?: string, _options?: Configuration): Promise<HttpInfo<FormatsElasticSchema>> {
        const result = this.api.filesV1DeleteQueueFormatsGetWithHttpInfo(appID, authToken, perPage, page, sort, query, fieldName, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get deleted formats
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param query Search using query
     * @param fieldName filter by field_name
     */
    public filesV1DeleteQueueFormatsGet(appID: string, authToken: string, perPage?: number, page?: number, sort?: string, query?: string, fieldName?: string, _options?: Configuration): Promise<FormatsElasticSchema> {
        const result = this.api.filesV1DeleteQueueFormatsGet(appID, authToken, perPage, page, sort, query, fieldName, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_formats 
     * Purge all formats from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public filesV1DeleteQueueFormatsPurgeAllPostWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1DeleteQueueFormatsPurgeAllPostWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_formats 
     * Purge all formats from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public filesV1DeleteQueueFormatsPurgeAllPost(appID: string, authToken: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1DeleteQueueFormatsPurgeAllPost(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_formats 
     * Purge formats from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public filesV1DeleteQueueFormatsPurgePostWithHttpInfo(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1DeleteQueueFormatsPurgePostWithHttpInfo(appID, authToken, deleteQueueSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_formats 
     * Purge formats from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     * @param deleteQueueSchema body
     */
    public filesV1DeleteQueueFormatsPurgePost(appID: string, authToken: string, deleteQueueSchema: DeleteQueueSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1DeleteQueueFormatsPurgePost(appID, authToken, deleteQueueSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_exports 
     * Export multiple objects to export location
     * @param appID 
     * @param authToken 
     * @param exportLocationId 
     * @param bulkFilesetExportSchema body
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1ExportLocationsExportLocationIdBulkExportPostWithHttpInfo(appID: string, authToken: string, exportLocationId: string, bulkFilesetExportSchema: BulkFilesetExportSchema, allowHostTransfer?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1ExportLocationsExportLocationIdBulkExportPostWithHttpInfo(appID, authToken, exportLocationId, bulkFilesetExportSchema, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_exports 
     * Export multiple objects to export location
     * @param appID 
     * @param authToken 
     * @param exportLocationId 
     * @param bulkFilesetExportSchema body
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1ExportLocationsExportLocationIdBulkExportPost(appID: string, authToken: string, exportLocationId: string, bulkFilesetExportSchema: BulkFilesetExportSchema, allowHostTransfer?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1ExportLocationsExportLocationIdBulkExportPost(appID, authToken, exportLocationId, bulkFilesetExportSchema, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_export_locations 
     * Delete a particular export_location by id
     * @param appID 
     * @param authToken 
     * @param exportLocationId 
     */
    public filesV1ExportLocationsExportLocationIdDeleteWithHttpInfo(appID: string, authToken: string, exportLocationId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1ExportLocationsExportLocationIdDeleteWithHttpInfo(appID, authToken, exportLocationId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_export_locations 
     * Delete a particular export_location by id
     * @param appID 
     * @param authToken 
     * @param exportLocationId 
     */
    public filesV1ExportLocationsExportLocationIdDelete(appID: string, authToken: string, exportLocationId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1ExportLocationsExportLocationIdDelete(appID, authToken, exportLocationId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_export_locations 
     * Returns a particular export_location by id
     * @param appID 
     * @param authToken 
     * @param exportLocationId 
     */
    public filesV1ExportLocationsExportLocationIdGetWithHttpInfo(appID: string, authToken: string, exportLocationId: string, _options?: Configuration): Promise<HttpInfo<ExportLocationSchema>> {
        const result = this.api.filesV1ExportLocationsExportLocationIdGetWithHttpInfo(appID, authToken, exportLocationId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_export_locations 
     * Returns a particular export_location by id
     * @param appID 
     * @param authToken 
     * @param exportLocationId 
     */
    public filesV1ExportLocationsExportLocationIdGet(appID: string, authToken: string, exportLocationId: string, _options?: Configuration): Promise<ExportLocationSchema> {
        const result = this.api.filesV1ExportLocationsExportLocationIdGet(appID, authToken, exportLocationId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_export_locations 
     * Update export_location
     * @param appID 
     * @param authToken 
     * @param exportLocationId 
     * @param exportLocationSchema body
     */
    public filesV1ExportLocationsExportLocationIdPatchWithHttpInfo(appID: string, authToken: string, exportLocationId: string, exportLocationSchema: ExportLocationSchema, _options?: Configuration): Promise<HttpInfo<ExportLocationSchema>> {
        const result = this.api.filesV1ExportLocationsExportLocationIdPatchWithHttpInfo(appID, authToken, exportLocationId, exportLocationSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_export_locations 
     * Update export_location
     * @param appID 
     * @param authToken 
     * @param exportLocationId 
     * @param exportLocationSchema body
     */
    public filesV1ExportLocationsExportLocationIdPatch(appID: string, authToken: string, exportLocationId: string, exportLocationSchema: ExportLocationSchema, _options?: Configuration): Promise<ExportLocationSchema> {
        const result = this.api.filesV1ExportLocationsExportLocationIdPatch(appID, authToken, exportLocationId, exportLocationSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_export_locations 
     * Update export_location
     * @param appID 
     * @param authToken 
     * @param exportLocationId 
     * @param exportLocationSchema body
     */
    public filesV1ExportLocationsExportLocationIdPutWithHttpInfo(appID: string, authToken: string, exportLocationId: string, exportLocationSchema: ExportLocationSchema, _options?: Configuration): Promise<HttpInfo<ExportLocationSchema>> {
        const result = this.api.filesV1ExportLocationsExportLocationIdPutWithHttpInfo(appID, authToken, exportLocationId, exportLocationSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_export_locations 
     * Update export_location
     * @param appID 
     * @param authToken 
     * @param exportLocationId 
     * @param exportLocationSchema body
     */
    public filesV1ExportLocationsExportLocationIdPut(appID: string, authToken: string, exportLocationId: string, exportLocationSchema: ExportLocationSchema, _options?: Configuration): Promise<ExportLocationSchema> {
        const result = this.api.filesV1ExportLocationsExportLocationIdPut(appID, authToken, exportLocationId, exportLocationSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_export_locations 
     * Trigger reindexing of a export location
     * @param appID 
     * @param authToken 
     * @param exportLocationId 
     */
    public filesV1ExportLocationsExportLocationIdReindexPostWithHttpInfo(appID: string, authToken: string, exportLocationId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1ExportLocationsExportLocationIdReindexPostWithHttpInfo(appID, authToken, exportLocationId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_export_locations 
     * Trigger reindexing of a export location
     * @param appID 
     * @param authToken 
     * @param exportLocationId 
     */
    public filesV1ExportLocationsExportLocationIdReindexPost(appID: string, authToken: string, exportLocationId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1ExportLocationsExportLocationIdReindexPost(appID, authToken, exportLocationId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_export_locations 
     * Get all export_locations
     * @param appID 
     * @param authToken 
     * @param query Search query
     * @param ids Filter list of id:s (comma separated)
     * @param perPage The number of items for each page
     * @param lastId ID of a last export_location on previous page
     * @param sort A comma separated list of fieldnames with order. For example - name,asc;id,desc
     */
    public filesV1ExportLocationsGetWithHttpInfo(appID: string, authToken: string, query?: string, ids?: string, perPage?: number, lastId?: string, sort?: string, _options?: Configuration): Promise<HttpInfo<ExportLocationsSchema>> {
        const result = this.api.filesV1ExportLocationsGetWithHttpInfo(appID, authToken, query, ids, perPage, lastId, sort, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_export_locations 
     * Get all export_locations
     * @param appID 
     * @param authToken 
     * @param query Search query
     * @param ids Filter list of id:s (comma separated)
     * @param perPage The number of items for each page
     * @param lastId ID of a last export_location on previous page
     * @param sort A comma separated list of fieldnames with order. For example - name,asc;id,desc
     */
    public filesV1ExportLocationsGet(appID: string, authToken: string, query?: string, ids?: string, perPage?: number, lastId?: string, sort?: string, _options?: Configuration): Promise<ExportLocationsSchema> {
        const result = this.api.filesV1ExportLocationsGet(appID, authToken, query, ids, perPage, lastId, sort, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_export_locations 
     * Create a new export_location
     * @param appID 
     * @param authToken 
     * @param exportLocationSchema body
     */
    public filesV1ExportLocationsPostWithHttpInfo(appID: string, authToken: string, exportLocationSchema: ExportLocationSchema, _options?: Configuration): Promise<HttpInfo<ExportLocationSchema>> {
        const result = this.api.filesV1ExportLocationsPostWithHttpInfo(appID, authToken, exportLocationSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_export_locations 
     * Create a new export_location
     * @param appID 
     * @param authToken 
     * @param exportLocationSchema body
     */
    public filesV1ExportLocationsPost(appID: string, authToken: string, exportLocationSchema: ExportLocationSchema, _options?: Configuration): Promise<ExportLocationSchema> {
        const result = this.api.filesV1ExportLocationsPost(appID, authToken, exportLocationSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files - can_write_transfers 
     * Queue export job completion between local storages
     * @param authToken 
     * @param appID 
     * @param fileSetId 
     * @param storageId Destination storage_id
     * @param completeExportToLocalStorageSchema body
     */
    public filesV1ExportsTemporaryFileSetsFileSetIdStoragesStorageIdPostWithHttpInfo(authToken: string, appID: string, fileSetId: string, storageId: string, completeExportToLocalStorageSchema: CompleteExportToLocalStorageSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1ExportsTemporaryFileSetsFileSetIdStoragesStorageIdPostWithHttpInfo(authToken, appID, fileSetId, storageId, completeExportToLocalStorageSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files - can_write_transfers 
     * Queue export job completion between local storages
     * @param authToken 
     * @param appID 
     * @param fileSetId 
     * @param storageId Destination storage_id
     * @param completeExportToLocalStorageSchema body
     */
    public filesV1ExportsTemporaryFileSetsFileSetIdStoragesStorageIdPost(authToken: string, appID: string, fileSetId: string, storageId: string, completeExportToLocalStorageSchema: CompleteExportToLocalStorageSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1ExportsTemporaryFileSetsFileSetIdStoragesStorageIdPost(authToken, appID, fileSetId, storageId, completeExportToLocalStorageSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get files from a file set
     * @param appID 
     * @param authToken 
     * @param fileSetId 
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     */
    public filesV1FileSetsFileSetIdFilesGetWithHttpInfo(appID: string, authToken: string, fileSetId: string, generateSignedUrl?: boolean, _options?: Configuration): Promise<HttpInfo<FilesSchema>> {
        const result = this.api.filesV1FileSetsFileSetIdFilesGetWithHttpInfo(appID, authToken, fileSetId, generateSignedUrl, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get files from a file set
     * @param appID 
     * @param authToken 
     * @param fileSetId 
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     */
    public filesV1FileSetsFileSetIdFilesGet(appID: string, authToken: string, fileSetId: string, generateSignedUrl?: boolean, _options?: Configuration): Promise<FilesSchema> {
        const result = this.api.filesV1FileSetsFileSetIdFilesGet(appID, authToken, fileSetId, generateSignedUrl, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files - can_write_transfers 
     * Queue copying of a file set with files from one storage to another
     * @param authToken 
     * @param appID 
     * @param fileSetId 
     * @param storageId Destination storage_id
     * @param transferFromStorageSchema body
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1FileSetsFileSetIdStoragesStorageIdPostWithHttpInfo(authToken: string, appID: string, fileSetId: string, storageId: string, transferFromStorageSchema: TransferFromStorageSchema, allowHostTransfer?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1FileSetsFileSetIdStoragesStorageIdPostWithHttpInfo(authToken, appID, fileSetId, storageId, transferFromStorageSchema, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files - can_write_transfers 
     * Queue copying of a file set with files from one storage to another
     * @param authToken 
     * @param appID 
     * @param fileSetId 
     * @param storageId Destination storage_id
     * @param transferFromStorageSchema body
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1FileSetsFileSetIdStoragesStorageIdPost(authToken: string, appID: string, fileSetId: string, storageId: string, transferFromStorageSchema: TransferFromStorageSchema, allowHostTransfer?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1FileSetsFileSetIdStoragesStorageIdPost(authToken, appID, fileSetId, storageId, transferFromStorageSchema, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transfers 
     * Delete file set transfer after handling it
     * @param authToken 
     * @param appID 
     * @param fileSetId 
     * @param storageId 
     * @param failed 
     */
    public filesV1FileSetsFileSetIdTransfersFromStorageIdDeleteWithHttpInfo(authToken: string, appID: string, fileSetId: string, storageId: string, failed?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1FileSetsFileSetIdTransfersFromStorageIdDeleteWithHttpInfo(authToken, appID, fileSetId, storageId, failed, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transfers 
     * Delete file set transfer after handling it
     * @param authToken 
     * @param appID 
     * @param fileSetId 
     * @param storageId 
     * @param failed 
     */
    public filesV1FileSetsFileSetIdTransfersFromStorageIdDelete(authToken: string, appID: string, fileSetId: string, storageId: string, failed?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1FileSetsFileSetIdTransfersFromStorageIdDelete(authToken, appID, fileSetId, storageId, failed, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transfers 
     * Delete file set transfer after handling it
     * @param authToken 
     * @param appID 
     * @param fileSetId 
     * @param storageId 
     * @param failed 
     */
    public filesV1FileSetsFileSetIdTransfersToStorageIdDeleteWithHttpInfo(authToken: string, appID: string, fileSetId: string, storageId: string, failed?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1FileSetsFileSetIdTransfersToStorageIdDeleteWithHttpInfo(authToken, appID, fileSetId, storageId, failed, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transfers 
     * Delete file set transfer after handling it
     * @param authToken 
     * @param appID 
     * @param fileSetId 
     * @param storageId 
     * @param failed 
     */
    public filesV1FileSetsFileSetIdTransfersToStorageIdDelete(authToken: string, appID: string, fileSetId: string, storageId: string, failed?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1FileSetsFileSetIdTransfersToStorageIdDelete(authToken, appID, fileSetId, storageId, failed, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get files by checksum
     * @param appID 
     * @param authToken 
     * @param checksum 
     * @param perPage The number of items for each page
     * @param lastId 
     */
    public filesV1FilesChecksumChecksumGetWithHttpInfo(appID: string, authToken: string, checksum: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<FilesSchema>> {
        const result = this.api.filesV1FilesChecksumChecksumGetWithHttpInfo(appID, authToken, checksum, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get files by checksum
     * @param appID 
     * @param authToken 
     * @param checksum 
     * @param perPage The number of items for each page
     * @param lastId 
     */
    public filesV1FilesChecksumChecksumGet(appID: string, authToken: string, checksum: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<FilesSchema> {
        const result = this.api.filesV1FilesChecksumChecksumGet(appID, authToken, checksum, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Delete file deletion job after handling it
     * @param authToken 
     * @param appID 
     * @param fileId 
     * @param storageId 
     */
    public filesV1FilesFileIdDeletionsFromStorageIdDeleteWithHttpInfo(authToken: string, appID: string, fileId: string, storageId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1FilesFileIdDeletionsFromStorageIdDeleteWithHttpInfo(authToken, appID, fileId, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Delete file deletion job after handling it
     * @param authToken 
     * @param appID 
     * @param fileId 
     * @param storageId 
     */
    public filesV1FilesFileIdDeletionsFromStorageIdDelete(authToken: string, appID: string, fileId: string, storageId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1FilesFileIdDeletionsFromStorageIdDelete(authToken, appID, fileId, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete all missing files from storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param removeAssets 
     */
    public filesV1FilesMissingStoragesStorageIdDeleteWithHttpInfo(appID: string, authToken: string, storageId: string, removeAssets?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1FilesMissingStoragesStorageIdDeleteWithHttpInfo(appID, authToken, storageId, removeAssets, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete all missing files from storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param removeAssets 
     */
    public filesV1FilesMissingStoragesStorageIdDelete(appID: string, authToken: string, storageId: string, removeAssets?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1FilesMissingStoragesStorageIdDelete(appID, authToken, storageId, removeAssets, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Check file is on storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param fileExistenceCheckSchema body
     * @param getFileSize 
     */
    public filesV1FilesStoragesStorageIdPostWithHttpInfo(appID: string, authToken: string, storageId: string, fileExistenceCheckSchema: FileExistenceCheckSchema, getFileSize?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1FilesStoragesStorageIdPostWithHttpInfo(appID, authToken, storageId, fileExistenceCheckSchema, getFileSize, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Check file is on storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param fileExistenceCheckSchema body
     * @param getFileSize 
     */
    public filesV1FilesStoragesStorageIdPost(appID: string, authToken: string, storageId: string, fileExistenceCheckSchema: FileExistenceCheckSchema, getFileSize?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1FilesStoragesStorageIdPost(appID, authToken, storageId, fileExistenceCheckSchema, getFileSize, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats - can_write_transfers 
     * Queue copying of a formats file sets with files from one storage to another
     * @param authToken 
     * @param appID 
     * @param formatId 
     * @param storageId Destination storage_id
     * @param transferFromStorageSchema body
     */
    public filesV1FormatsFormatIdStoragesStorageIdPostWithHttpInfo(authToken: string, appID: string, formatId: string, storageId: string, transferFromStorageSchema: TransferFromStorageSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1FormatsFormatIdStoragesStorageIdPostWithHttpInfo(authToken, appID, formatId, storageId, transferFromStorageSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats - can_write_transfers 
     * Queue copying of a formats file sets with files from one storage to another
     * @param authToken 
     * @param appID 
     * @param formatId 
     * @param storageId Destination storage_id
     * @param transferFromStorageSchema body
     */
    public filesV1FormatsFormatIdStoragesStorageIdPost(authToken: string, appID: string, formatId: string, storageId: string, transferFromStorageSchema: TransferFromStorageSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1FormatsFormatIdStoragesStorageIdPost(authToken, appID, formatId, storageId, transferFromStorageSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_archive_formats 
     * Queue bulk archiving of assets, collections and saved_searches
     * @param authToken 
     * @param appID 
     * @param formatName 
     * @param bulkFilesetArchiveSchema body
     */
    public filesV1FormatsFormatNameArchiveBulkPostWithHttpInfo(authToken: string, appID: string, formatName: string, bulkFilesetArchiveSchema: BulkFilesetArchiveSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1FormatsFormatNameArchiveBulkPostWithHttpInfo(authToken, appID, formatName, bulkFilesetArchiveSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_archive_formats 
     * Queue bulk archiving of assets, collections and saved_searches
     * @param authToken 
     * @param appID 
     * @param formatName 
     * @param bulkFilesetArchiveSchema body
     */
    public filesV1FormatsFormatNameArchiveBulkPost(authToken: string, appID: string, formatName: string, bulkFilesetArchiveSchema: BulkFilesetArchiveSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1FormatsFormatNameArchiveBulkPost(authToken, appID, formatName, bulkFilesetArchiveSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_restore_archived_formats 
     * Queue bulk restore of previously archived assets, collections or saved_searches
     * @param authToken 
     * @param appID 
     * @param formatName 
     * @param bulkFilesetRestoreSchema body
     */
    public filesV1FormatsFormatNameRestoreBulkPostWithHttpInfo(authToken: string, appID: string, formatName: string, bulkFilesetRestoreSchema: BulkFilesetRestoreSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1FormatsFormatNameRestoreBulkPostWithHttpInfo(authToken, appID, formatName, bulkFilesetRestoreSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_restore_archived_formats 
     * Queue bulk restore of previously archived assets, collections or saved_searches
     * @param authToken 
     * @param appID 
     * @param formatName 
     * @param bulkFilesetRestoreSchema body
     */
    public filesV1FormatsFormatNameRestoreBulkPost(authToken: string, appID: string, formatName: string, bulkFilesetRestoreSchema: BulkFilesetRestoreSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1FormatsFormatNameRestoreBulkPost(authToken, appID, formatName, bulkFilesetRestoreSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Check if a specific file is already on the storage for shares
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param directoryPath 
     * @param name Filter by name
     */
    public filesV1SharesStoragesStorageIdFilesGetWithHttpInfo(appID: string, authToken: string, storageId: string, directoryPath: string, name: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1SharesStoragesStorageIdFilesGetWithHttpInfo(appID, authToken, storageId, directoryPath, name, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Check if a specific file is already on the storage for shares
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param directoryPath 
     * @param name Filter by name
     */
    public filesV1SharesStoragesStorageIdFilesGet(appID: string, authToken: string, storageId: string, directoryPath: string, name: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1SharesStoragesStorageIdFilesGet(appID, authToken, storageId, directoryPath, name, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing of all files
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesFilesReindexPostWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesFilesReindexPostWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing of all files
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesFilesReindexPost(appID: string, authToken: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesFilesReindexPost(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Get all storages
     * @param appID 
     * @param authToken 
     * @param page Which page number to fetch
     * @param perPage The number of items for each page
     * @param sort A comma separated list of fieldnames with order. For example - status,asc;last_scanned,desc
     * @param id Filter by id
     * @param name Filter by name
     * @param method Filter by method
     * @param status Filter by status
     * @param purpose Filter by purpose
     * @param lastScanned Filter by last_scanned
     * @param scannerStatus Filter by scanner_status
     * @param query Filter by any of the above with wildcard support
     * @param ids Filter list of id:s (comma separated)
     */
    public filesV1StoragesGetWithHttpInfo(appID: string, authToken: string, page?: number, perPage?: number, sort?: string, id?: string, name?: string, method?: string, status?: string, purpose?: string, lastScanned?: string, scannerStatus?: string, query?: string, ids?: string, _options?: Configuration): Promise<HttpInfo<StoragesReadSchema>> {
        const result = this.api.filesV1StoragesGetWithHttpInfo(appID, authToken, page, perPage, sort, id, name, method, status, purpose, lastScanned, scannerStatus, query, ids, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Get all storages
     * @param appID 
     * @param authToken 
     * @param page Which page number to fetch
     * @param perPage The number of items for each page
     * @param sort A comma separated list of fieldnames with order. For example - status,asc;last_scanned,desc
     * @param id Filter by id
     * @param name Filter by name
     * @param method Filter by method
     * @param status Filter by status
     * @param purpose Filter by purpose
     * @param lastScanned Filter by last_scanned
     * @param scannerStatus Filter by scanner_status
     * @param query Filter by any of the above with wildcard support
     * @param ids Filter list of id:s (comma separated)
     */
    public filesV1StoragesGet(appID: string, authToken: string, page?: number, perPage?: number, sort?: string, id?: string, name?: string, method?: string, status?: string, purpose?: string, lastScanned?: string, scannerStatus?: string, query?: string, ids?: string, _options?: Configuration): Promise<StoragesReadSchema> {
        const result = this.api.filesV1StoragesGet(appID, authToken, page, perPage, sort, id, name, method, status, purpose, lastScanned, scannerStatus, query, ids, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Get latest ISG version
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesIsgLatestVersionGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<FilesV1StoragesIsgLatestVersionGet200Response>> {
        const result = this.api.filesV1StoragesIsgLatestVersionGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Get latest ISG version
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesIsgLatestVersionGet(appID: string, authToken: string, _options?: Configuration): Promise<FilesV1StoragesIsgLatestVersionGet200Response> {
        const result = this.api.filesV1StoragesIsgLatestVersionGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Returns a remote storage matching type
     * @param appID 
     * @param authToken 
     * @param purpose 
     * @param storageId 
     */
    public filesV1StoragesMatchingPurposeGetWithHttpInfo(appID: string, authToken: string, purpose: string, storageId?: string, _options?: Configuration): Promise<HttpInfo<StorageSchema>> {
        const result = this.api.filesV1StoragesMatchingPurposeGetWithHttpInfo(appID, authToken, purpose, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Returns a remote storage matching type
     * @param appID 
     * @param authToken 
     * @param purpose 
     * @param storageId 
     */
    public filesV1StoragesMatchingPurposeGet(appID: string, authToken: string, purpose: string, storageId?: string, _options?: Configuration): Promise<StorageSchema> {
        const result = this.api.filesV1StoragesMatchingPurposeGet(appID, authToken, purpose, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Returns a remote storage matching type and method
     * @param appID 
     * @param authToken 
     * @param purpose 
     * @param method 
     */
    public filesV1StoragesMatchingPurposeMethodMethodGetWithHttpInfo(appID: string, authToken: string, purpose: string, method: string, _options?: Configuration): Promise<HttpInfo<StorageSchema>> {
        const result = this.api.filesV1StoragesMatchingPurposeMethodMethodGetWithHttpInfo(appID, authToken, purpose, method, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Returns a remote storage matching type and method
     * @param appID 
     * @param authToken 
     * @param purpose 
     * @param method 
     */
    public filesV1StoragesMatchingPurposeMethodMethodGet(appID: string, authToken: string, purpose: string, method: string, _options?: Configuration): Promise<StorageSchema> {
        const result = this.api.filesV1StoragesMatchingPurposeMethodMethodGet(appID, authToken, purpose, method, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_storages 
     * Create a new storage
     * @param appID 
     * @param authToken 
     * @param storageSchema body
     */
    public filesV1StoragesPostWithHttpInfo(appID: string, authToken: string, storageSchema: StorageSchema, _options?: Configuration): Promise<HttpInfo<StorageSchema>> {
        const result = this.api.filesV1StoragesPostWithHttpInfo(appID, authToken, storageSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_storages 
     * Create a new storage
     * @param appID 
     * @param authToken 
     * @param storageSchema body
     */
    public filesV1StoragesPost(appID: string, authToken: string, storageSchema: StorageSchema, _options?: Configuration): Promise<StorageSchema> {
        const result = this.api.filesV1StoragesPost(appID, authToken, storageSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Get a purpose default storage
     * @param appID 
     * @param authToken 
     * @param purpose 
     */
    public filesV1StoragesPurposeDefaultGetWithHttpInfo(appID: string, authToken: string, purpose: string, _options?: Configuration): Promise<HttpInfo<StorageSchema>> {
        const result = this.api.filesV1StoragesPurposeDefaultGetWithHttpInfo(appID, authToken, purpose, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Get a purpose default storage
     * @param appID 
     * @param authToken 
     * @param purpose 
     */
    public filesV1StoragesPurposeDefaultGet(appID: string, authToken: string, purpose: string, _options?: Configuration): Promise<StorageSchema> {
        const result = this.api.filesV1StoragesPurposeDefaultGet(appID, authToken, purpose, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing of all storages
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesReindexPostWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesReindexPostWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing of all storages
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesReindexPost(appID: string, authToken: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesReindexPost(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_scan_bucket 
     * Disable cloud storage auto scan
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdAutoScanDeleteWithHttpInfo(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdAutoScanDeleteWithHttpInfo(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_scan_bucket 
     * Disable cloud storage auto scan
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdAutoScanDelete(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdAutoScanDelete(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_scan_bucket 
     * Get cloud storage auto scan settings
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdAutoScanGetWithHttpInfo(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<HttpInfo<StorageAutoScanSchema>> {
        const result = this.api.filesV1StoragesStorageIdAutoScanGetWithHttpInfo(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_scan_bucket 
     * Get cloud storage auto scan settings
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdAutoScanGet(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<StorageAutoScanSchema> {
        const result = this.api.filesV1StoragesStorageIdAutoScanGet(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_scan_bucket 
     * Enable cloud storage auto scan
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param storageAutoScanSchema body
     */
    public filesV1StoragesStorageIdAutoScanPostWithHttpInfo(appID: string, authToken: string, storageId: string, storageAutoScanSchema: StorageAutoScanSchema, _options?: Configuration): Promise<HttpInfo<StorageAutoScanSchema>> {
        const result = this.api.filesV1StoragesStorageIdAutoScanPostWithHttpInfo(appID, authToken, storageId, storageAutoScanSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_scan_bucket 
     * Enable cloud storage auto scan
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param storageAutoScanSchema body
     */
    public filesV1StoragesStorageIdAutoScanPost(appID: string, authToken: string, storageId: string, storageAutoScanSchema: StorageAutoScanSchema, _options?: Configuration): Promise<StorageAutoScanSchema> {
        const result = this.api.filesV1StoragesStorageIdAutoScanPost(appID, authToken, storageId, storageAutoScanSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files - can_write_transfers 
     * Queue copying of files from current storage to specified one
     * @param authToken 
     * @param appID 
     * @param storageId Destination storage_id
     * @param bulkTransferToStorageSchema body
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1StoragesStorageIdBulkPostWithHttpInfo(authToken: string, appID: string, storageId: string, bulkTransferToStorageSchema: BulkTransferToStorageSchema, allowHostTransfer?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdBulkPostWithHttpInfo(authToken, appID, storageId, bulkTransferToStorageSchema, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files - can_write_transfers 
     * Queue copying of files from current storage to specified one
     * @param authToken 
     * @param appID 
     * @param storageId Destination storage_id
     * @param bulkTransferToStorageSchema body
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1StoragesStorageIdBulkPost(authToken: string, appID: string, storageId: string, bulkTransferToStorageSchema: BulkTransferToStorageSchema, allowHostTransfer?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdBulkPost(authToken, appID, storageId, bulkTransferToStorageSchema, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_storages 
     * Removes the default flag on a storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdDefaultDeleteWithHttpInfo(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdDefaultDeleteWithHttpInfo(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_storages 
     * Removes the default flag on a storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdDefaultDelete(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdDefaultDelete(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_storages 
     * Set a storage to the default of its purpose
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdDefaultPostWithHttpInfo(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdDefaultPostWithHttpInfo(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_storages 
     * Set a storage to the default of its purpose
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdDefaultPost(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdDefaultPost(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_storages 
     * Delete a particular storage by id
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdDeleteWithHttpInfo(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdDeleteWithHttpInfo(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_storages 
     * Delete a particular storage by id
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdDelete(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdDelete(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Delete file deletion job after handling it
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param deletionId 
     */
    public filesV1StoragesStorageIdDeletionsDeletionIdDeleteWithHttpInfo(authToken: string, appID: string, storageId: string, deletionId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdDeletionsDeletionIdDeleteWithHttpInfo(authToken, appID, storageId, deletionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Delete file deletion job after handling it
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param deletionId 
     */
    public filesV1StoragesStorageIdDeletionsDeletionIdDelete(authToken: string, appID: string, storageId: string, deletionId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdDeletionsDeletionIdDelete(authToken, appID, storageId, deletionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Get pending deletions of files from a local storage
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file deletion entity on previous page
     */
    public filesV1StoragesStorageIdDeletionsFromGetWithHttpInfo(authToken: string, appID: string, storageId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<FileDeletionsSchema>> {
        const result = this.api.filesV1StoragesStorageIdDeletionsFromGetWithHttpInfo(authToken, appID, storageId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Get pending deletions of files from a local storage
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file deletion entity on previous page
     */
    public filesV1StoragesStorageIdDeletionsFromGet(authToken: string, appID: string, storageId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<FileDeletionsSchema> {
        const result = this.api.filesV1StoragesStorageIdDeletionsFromGet(authToken, appID, storageId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Get pending deletions of files from a local storage
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file deletion entity on previous page
     */
    public filesV1StoragesStorageIdDeletionsGetWithHttpInfo(authToken: string, appID: string, storageId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<FileDeletionsSchema>> {
        const result = this.api.filesV1StoragesStorageIdDeletionsGetWithHttpInfo(authToken, appID, storageId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Get pending deletions of files from a local storage
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file deletion entity on previous page
     */
    public filesV1StoragesStorageIdDeletionsGet(authToken: string, appID: string, storageId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<FileDeletionsSchema> {
        const result = this.api.filesV1StoragesStorageIdDeletionsGet(authToken, appID, storageId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages - can_delete_files 
     * DELETE files (with copies in different storages) from a storage folder, or all files on a storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param path 
     * @param pathSeparator 
     * @param directoryPath 
     * @param checksum 
     * @param id Filter by id
     * @param name Filter by name
     * @param type Filter by type
     * @param status Filter by status
     * @param dateCreated Filter by date_created
     * @param dateModified Filter by date_modified
     */
    public filesV1StoragesStorageIdFilesDeleteWithHttpInfo(appID: string, authToken: string, storageId: string, path?: string, pathSeparator?: string, directoryPath?: string, checksum?: string, id?: string, name?: string, type?: string, status?: string, dateCreated?: string, dateModified?: string, _options?: Configuration): Promise<HttpInfo<FilesElasticSchema>> {
        const result = this.api.filesV1StoragesStorageIdFilesDeleteWithHttpInfo(appID, authToken, storageId, path, pathSeparator, directoryPath, checksum, id, name, type, status, dateCreated, dateModified, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages - can_delete_files 
     * DELETE files (with copies in different storages) from a storage folder, or all files on a storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param path 
     * @param pathSeparator 
     * @param directoryPath 
     * @param checksum 
     * @param id Filter by id
     * @param name Filter by name
     * @param type Filter by type
     * @param status Filter by status
     * @param dateCreated Filter by date_created
     * @param dateModified Filter by date_modified
     */
    public filesV1StoragesStorageIdFilesDelete(appID: string, authToken: string, storageId: string, path?: string, pathSeparator?: string, directoryPath?: string, checksum?: string, id?: string, name?: string, type?: string, status?: string, dateCreated?: string, dateModified?: string, _options?: Configuration): Promise<FilesElasticSchema> {
        const result = this.api.filesV1StoragesStorageIdFilesDelete(appID, authToken, storageId, path, pathSeparator, directoryPath, checksum, id, name, type, status, dateCreated, dateModified, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing for a file on a storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param fileId 
     */
    public filesV1StoragesStorageIdFilesFileIdReindexPostWithHttpInfo(appID: string, authToken: string, storageId: string, fileId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdFilesFileIdReindexPostWithHttpInfo(appID, authToken, storageId, fileId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing for a file on a storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param fileId 
     */
    public filesV1StoragesStorageIdFilesFileIdReindexPost(appID: string, authToken: string, storageId: string, fileId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdFilesFileIdReindexPost(appID, authToken, storageId, fileId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Get files in a storage folder, or all files on a storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param path 
     * @param pathSeparator 
     * @param directoryPath 
     * @param checksum 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param scroll If true passed then uses scroll pagination instead of default one
     * @param scrollId In order to get next batch of results using scroll pagination the scroll_id is required
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param id Filter by id
     * @param name Filter by name
     * @param type Filter by type
     * @param status Filter by status
     * @param dateCreated Filter by date_created
     * @param dateModified Filter by date_modified
     */
    public filesV1StoragesStorageIdFilesGetWithHttpInfo(appID: string, authToken: string, storageId: string, path?: string, pathSeparator?: string, directoryPath?: string, checksum?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, sort?: string, id?: string, name?: string, type?: string, status?: string, dateCreated?: string, dateModified?: string, _options?: Configuration): Promise<HttpInfo<FilesElasticSchema>> {
        const result = this.api.filesV1StoragesStorageIdFilesGetWithHttpInfo(appID, authToken, storageId, path, pathSeparator, directoryPath, checksum, perPage, page, scroll, scrollId, sort, id, name, type, status, dateCreated, dateModified, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Get files in a storage folder, or all files on a storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param path 
     * @param pathSeparator 
     * @param directoryPath 
     * @param checksum 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param scroll If true passed then uses scroll pagination instead of default one
     * @param scrollId In order to get next batch of results using scroll pagination the scroll_id is required
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param id Filter by id
     * @param name Filter by name
     * @param type Filter by type
     * @param status Filter by status
     * @param dateCreated Filter by date_created
     * @param dateModified Filter by date_modified
     */
    public filesV1StoragesStorageIdFilesGet(appID: string, authToken: string, storageId: string, path?: string, pathSeparator?: string, directoryPath?: string, checksum?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, sort?: string, id?: string, name?: string, type?: string, status?: string, dateCreated?: string, dateModified?: string, _options?: Configuration): Promise<FilesElasticSchema> {
        const result = this.api.filesV1StoragesStorageIdFilesGet(appID, authToken, storageId, path, pathSeparator, directoryPath, checksum, perPage, page, scroll, scrollId, sort, id, name, type, status, dateCreated, dateModified, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file by storage ID and path
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param fileBaseSchema body
     */
    public filesV1StoragesStorageIdFilesPatchWithHttpInfo(appID: string, authToken: string, storageId: string, fileBaseSchema: FileBaseSchema, _options?: Configuration): Promise<HttpInfo<FileBaseSchema>> {
        const result = this.api.filesV1StoragesStorageIdFilesPatchWithHttpInfo(appID, authToken, storageId, fileBaseSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file by storage ID and path
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param fileBaseSchema body
     */
    public filesV1StoragesStorageIdFilesPatch(appID: string, authToken: string, storageId: string, fileBaseSchema: FileBaseSchema, _options?: Configuration): Promise<FileBaseSchema> {
        const result = this.api.filesV1StoragesStorageIdFilesPatch(appID, authToken, storageId, fileBaseSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create file without associating it to an asset
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param fileBaseSchema body
     */
    public filesV1StoragesStorageIdFilesPostWithHttpInfo(appID: string, authToken: string, storageId: string, fileBaseSchema: FileBaseSchema, _options?: Configuration): Promise<HttpInfo<FileBaseSchema>> {
        const result = this.api.filesV1StoragesStorageIdFilesPostWithHttpInfo(appID, authToken, storageId, fileBaseSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create file without associating it to an asset
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param fileBaseSchema body
     */
    public filesV1StoragesStorageIdFilesPost(appID: string, authToken: string, storageId: string, fileBaseSchema: FileBaseSchema, _options?: Configuration): Promise<FileBaseSchema> {
        const result = this.api.filesV1StoragesStorageIdFilesPost(appID, authToken, storageId, fileBaseSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file by storage ID and path
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param fileBaseSchema body
     */
    public filesV1StoragesStorageIdFilesPutWithHttpInfo(appID: string, authToken: string, storageId: string, fileBaseSchema: FileBaseSchema, _options?: Configuration): Promise<HttpInfo<FileBaseSchema>> {
        const result = this.api.filesV1StoragesStorageIdFilesPutWithHttpInfo(appID, authToken, storageId, fileBaseSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file by storage ID and path
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param fileBaseSchema body
     */
    public filesV1StoragesStorageIdFilesPut(appID: string, authToken: string, storageId: string, fileBaseSchema: FileBaseSchema, _options?: Configuration): Promise<FileBaseSchema> {
        const result = this.api.filesV1StoragesStorageIdFilesPut(appID, authToken, storageId, fileBaseSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing of all files
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdFilesReindexPostWithHttpInfo(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdFilesReindexPostWithHttpInfo(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing of all files
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdFilesReindexPost(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdFilesReindexPost(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete storage gateway event
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param eventId 
     */
    public filesV1StoragesStorageIdGatewayEventsEventIdDeleteWithHttpInfo(appID: string, authToken: string, storageId: string, eventId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdGatewayEventsEventIdDeleteWithHttpInfo(appID, authToken, storageId, eventId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete storage gateway event
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param eventId 
     */
    public filesV1StoragesStorageIdGatewayEventsEventIdDelete(appID: string, authToken: string, storageId: string, eventId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdGatewayEventsEventIdDelete(appID, authToken, storageId, eventId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get pending storage gateway events
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param lastId 
     */
    public filesV1StoragesStorageIdGatewayEventsGetWithHttpInfo(appID: string, authToken: string, storageId: string, lastId: string, _options?: Configuration): Promise<HttpInfo<IconikStorageGatewayEventsSchema>> {
        const result = this.api.filesV1StoragesStorageIdGatewayEventsGetWithHttpInfo(appID, authToken, storageId, lastId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get pending storage gateway events
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param lastId 
     */
    public filesV1StoragesStorageIdGatewayEventsGet(appID: string, authToken: string, storageId: string, lastId: string, _options?: Configuration): Promise<IconikStorageGatewayEventsSchema> {
        const result = this.api.filesV1StoragesStorageIdGatewayEventsGet(appID, authToken, storageId, lastId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create new storage gateway event
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param iconikStorageGatewayEventSchema body
     */
    public filesV1StoragesStorageIdGatewayEventsPostWithHttpInfo(appID: string, authToken: string, storageId: string, iconikStorageGatewayEventSchema: IconikStorageGatewayEventSchema, _options?: Configuration): Promise<HttpInfo<IconikStorageGatewayEventSchema>> {
        const result = this.api.filesV1StoragesStorageIdGatewayEventsPostWithHttpInfo(appID, authToken, storageId, iconikStorageGatewayEventSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create new storage gateway event
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param iconikStorageGatewayEventSchema body
     */
    public filesV1StoragesStorageIdGatewayEventsPost(appID: string, authToken: string, storageId: string, iconikStorageGatewayEventSchema: IconikStorageGatewayEventSchema, _options?: Configuration): Promise<IconikStorageGatewayEventSchema> {
        const result = this.api.filesV1StoragesStorageIdGatewayEventsPost(appID, authToken, storageId, iconikStorageGatewayEventSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete storage gateway events in bulk
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param iconikStorageGatewayEventsPurgeSchema body
     */
    public filesV1StoragesStorageIdGatewayEventsPurgePostWithHttpInfo(appID: string, authToken: string, storageId: string, iconikStorageGatewayEventsPurgeSchema: IconikStorageGatewayEventsPurgeSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdGatewayEventsPurgePostWithHttpInfo(appID, authToken, storageId, iconikStorageGatewayEventsPurgeSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete storage gateway events in bulk
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param iconikStorageGatewayEventsPurgeSchema body
     */
    public filesV1StoragesStorageIdGatewayEventsPurgePost(appID: string, authToken: string, storageId: string, iconikStorageGatewayEventsPurgeSchema: IconikStorageGatewayEventsPurgeSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdGatewayEventsPurgePost(appID, authToken, storageId, iconikStorageGatewayEventsPurgeSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get storage gateway report
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdGatewayReportGetWithHttpInfo(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<HttpInfo<GatewayReportSchema>> {
        const result = this.api.filesV1StoragesStorageIdGatewayReportGetWithHttpInfo(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get storage gateway report
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdGatewayReportGet(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<GatewayReportSchema> {
        const result = this.api.filesV1StoragesStorageIdGatewayReportGet(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Create storage gateway report
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param gatewayReportSchema body
     */
    public filesV1StoragesStorageIdGatewayReportPutWithHttpInfo(appID: string, authToken: string, storageId: string, gatewayReportSchema: GatewayReportSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdGatewayReportPutWithHttpInfo(appID, authToken, storageId, gatewayReportSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Create storage gateway report
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param gatewayReportSchema body
     */
    public filesV1StoragesStorageIdGatewayReportPut(appID: string, authToken: string, storageId: string, gatewayReportSchema: GatewayReportSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdGatewayReportPut(appID, authToken, storageId, gatewayReportSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Update storage gateway status
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param gatewayStatusSchema body
     */
    public filesV1StoragesStorageIdGatewayStatusPutWithHttpInfo(appID: string, authToken: string, storageId: string, gatewayStatusSchema: GatewayStatusSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdGatewayStatusPutWithHttpInfo(appID, authToken, storageId, gatewayStatusSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Update storage gateway status
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param gatewayStatusSchema body
     */
    public filesV1StoragesStorageIdGatewayStatusPut(appID: string, authToken: string, storageId: string, gatewayStatusSchema: GatewayStatusSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdGatewayStatusPut(appID, authToken, storageId, gatewayStatusSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Returns a particular storage by id
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdGetWithHttpInfo(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<HttpInfo<StorageSchema>> {
        const result = this.api.filesV1StoragesStorageIdGetWithHttpInfo(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Returns a particular storage by id
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdGet(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<StorageSchema> {
        const result = this.api.filesV1StoragesStorageIdGet(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Upload storage logs
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param filename 
     */
    public filesV1StoragesStorageIdLogsPostWithHttpInfo(appID: string, authToken: string, storageId: string, filename: string, _options?: Configuration): Promise<HttpInfo<FilesV1StoragesStorageIdLogsPost200Response>> {
        const result = this.api.filesV1StoragesStorageIdLogsPostWithHttpInfo(appID, authToken, storageId, filename, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Upload storage logs
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param filename 
     */
    public filesV1StoragesStorageIdLogsPost(appID: string, authToken: string, storageId: string, filename: string, _options?: Configuration): Promise<FilesV1StoragesStorageIdLogsPost200Response> {
        const result = this.api.filesV1StoragesStorageIdLogsPost(appID, authToken, storageId, filename, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages - can_delete_files 
     * Delete files from a particular storage from multiple objects
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param objectType 
     * @param storageFilesDeleteBulkSchema body
     */
    public filesV1StoragesStorageIdObjectTypeFilesDeleteWithHttpInfo(appID: string, authToken: string, storageId: string, objectType: string, storageFilesDeleteBulkSchema: StorageFilesDeleteBulkSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdObjectTypeFilesDeleteWithHttpInfo(appID, authToken, storageId, objectType, storageFilesDeleteBulkSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages - can_delete_files 
     * Delete files from a particular storage from multiple objects
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param objectType 
     * @param storageFilesDeleteBulkSchema body
     */
    public filesV1StoragesStorageIdObjectTypeFilesDelete(appID: string, authToken: string, storageId: string, objectType: string, storageFilesDeleteBulkSchema: StorageFilesDeleteBulkSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdObjectTypeFilesDelete(appID, authToken, storageId, objectType, storageFilesDeleteBulkSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_storages 
     * Update storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param storageSchema body
     */
    public filesV1StoragesStorageIdPatchWithHttpInfo(appID: string, authToken: string, storageId: string, storageSchema: StorageSchema, _options?: Configuration): Promise<HttpInfo<StorageSchema>> {
        const result = this.api.filesV1StoragesStorageIdPatchWithHttpInfo(appID, authToken, storageId, storageSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_storages 
     * Update storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param storageSchema body
     */
    public filesV1StoragesStorageIdPatch(appID: string, authToken: string, storageId: string, storageSchema: StorageSchema, _options?: Configuration): Promise<StorageSchema> {
        const result = this.api.filesV1StoragesStorageIdPatch(appID, authToken, storageId, storageSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_storages 
     * Update storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param storageSchema body
     */
    public filesV1StoragesStorageIdPutWithHttpInfo(appID: string, authToken: string, storageId: string, storageSchema: StorageSchema, _options?: Configuration): Promise<HttpInfo<StorageSchema>> {
        const result = this.api.filesV1StoragesStorageIdPutWithHttpInfo(appID, authToken, storageId, storageSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_storages 
     * Update storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param storageSchema body
     */
    public filesV1StoragesStorageIdPut(appID: string, authToken: string, storageId: string, storageSchema: StorageSchema, _options?: Configuration): Promise<StorageSchema> {
        const result = this.api.filesV1StoragesStorageIdPut(appID, authToken, storageId, storageSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing of a storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdReindexPostWithHttpInfo(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdReindexPostWithHttpInfo(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing of a storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdReindexPost(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdReindexPost(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_scan_bucket 
     * Requests to scan a storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param storageScanSchema body
     */
    public filesV1StoragesStorageIdScanPostWithHttpInfo(appID: string, authToken: string, storageId: string, storageScanSchema: StorageScanSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdScanPostWithHttpInfo(appID, authToken, storageId, storageScanSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_scan_bucket 
     * Requests to scan a storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param storageScanSchema body
     */
    public filesV1StoragesStorageIdScanPost(appID: string, authToken: string, storageId: string, storageScanSchema: StorageScanSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdScanPost(appID, authToken, storageId, storageScanSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Update search document for storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param storageSchema body
     */
    public filesV1StoragesStorageIdSearchDocumentPutWithHttpInfo(appID: string, authToken: string, storageId: string, storageSchema: StorageSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdSearchDocumentPutWithHttpInfo(appID, authToken, storageId, storageSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Update search document for storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param storageSchema body
     */
    public filesV1StoragesStorageIdSearchDocumentPut(appID: string, authToken: string, storageId: string, storageSchema: StorageSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdSearchDocumentPut(appID, authToken, storageId, storageSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Get storage\'s exported files
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file on previous page
     */
    public filesV1StoragesStorageIdTemporaryFilesGetWithHttpInfo(appID: string, authToken: string, storageId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<FilesSchema>> {
        const result = this.api.filesV1StoragesStorageIdTemporaryFilesGetWithHttpInfo(appID, authToken, storageId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Get storage\'s exported files
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file on previous page
     */
    public filesV1StoragesStorageIdTemporaryFilesGet(appID: string, authToken: string, storageId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<FilesSchema> {
        const result = this.api.filesV1StoragesStorageIdTemporaryFilesGet(appID, authToken, storageId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages - can_read_transcoders 
     * Get all transcoders for a particular storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last transcoder on previous page
     */
    public filesV1StoragesStorageIdTranscodersGetWithHttpInfo(appID: string, authToken: string, storageId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<TranscodersByStorageSchema>> {
        const result = this.api.filesV1StoragesStorageIdTranscodersGetWithHttpInfo(appID, authToken, storageId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages - can_read_transcoders 
     * Get all transcoders for a particular storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last transcoder on previous page
     */
    public filesV1StoragesStorageIdTranscodersGet(appID: string, authToken: string, storageId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<TranscodersByStorageSchema> {
        const result = this.api.filesV1StoragesStorageIdTranscodersGet(appID, authToken, storageId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcoders 
     * Delete a transcoder from storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param transcoderId 
     */
    public filesV1StoragesStorageIdTranscodersTranscoderIdDeleteWithHttpInfo(appID: string, authToken: string, storageId: string, transcoderId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdTranscodersTranscoderIdDeleteWithHttpInfo(appID, authToken, storageId, transcoderId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcoders 
     * Delete a transcoder from storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param transcoderId 
     */
    public filesV1StoragesStorageIdTranscodersTranscoderIdDelete(appID: string, authToken: string, storageId: string, transcoderId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdTranscodersTranscoderIdDelete(appID, authToken, storageId, transcoderId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcoders 
     * Create a new transcoder for storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param transcoderId 
     */
    public filesV1StoragesStorageIdTranscodersTranscoderIdPutWithHttpInfo(appID: string, authToken: string, storageId: string, transcoderId: string, _options?: Configuration): Promise<HttpInfo<TranscoderByStorageReadSchema>> {
        const result = this.api.filesV1StoragesStorageIdTranscodersTranscoderIdPutWithHttpInfo(appID, authToken, storageId, transcoderId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcoders 
     * Create a new transcoder for storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param transcoderId 
     */
    public filesV1StoragesStorageIdTranscodersTranscoderIdPut(appID: string, authToken: string, storageId: string, transcoderId: string, _options?: Configuration): Promise<TranscoderByStorageReadSchema> {
        const result = this.api.filesV1StoragesStorageIdTranscodersTranscoderIdPut(appID, authToken, storageId, transcoderId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transfers 
     * Get pending transfers of file sets from a local storage
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last transfer on previous page
     */
    public filesV1StoragesStorageIdTransfersFromGetWithHttpInfo(authToken: string, appID: string, storageId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<TransfersFromStorageSchema>> {
        const result = this.api.filesV1StoragesStorageIdTransfersFromGetWithHttpInfo(authToken, appID, storageId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transfers 
     * Get pending transfers of file sets from a local storage
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last transfer on previous page
     */
    public filesV1StoragesStorageIdTransfersFromGet(authToken: string, appID: string, storageId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<TransfersFromStorageSchema> {
        const result = this.api.filesV1StoragesStorageIdTransfersFromGet(authToken, appID, storageId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transfers 
     * Delete file set transfer after handling it
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param transferId 
     * @param failed 
     * @param completed 
     */
    public filesV1StoragesStorageIdTransfersFromTransferIdDeleteWithHttpInfo(authToken: string, appID: string, storageId: string, transferId: string, failed?: boolean, completed?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdTransfersFromTransferIdDeleteWithHttpInfo(authToken, appID, storageId, transferId, failed, completed, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transfers 
     * Delete file set transfer after handling it
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param transferId 
     * @param failed 
     * @param completed 
     */
    public filesV1StoragesStorageIdTransfersFromTransferIdDelete(authToken: string, appID: string, storageId: string, transferId: string, failed?: boolean, completed?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdTransfersFromTransferIdDelete(authToken, appID, storageId, transferId, failed, completed, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transfers 
     * Get file set transfer record
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param transferId 
     */
    public filesV1StoragesStorageIdTransfersFromTransferIdGetWithHttpInfo(authToken: string, appID: string, storageId: string, transferId: string, _options?: Configuration): Promise<HttpInfo<TransferFromStorageReadSchema>> {
        const result = this.api.filesV1StoragesStorageIdTransfersFromTransferIdGetWithHttpInfo(authToken, appID, storageId, transferId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transfers 
     * Get file set transfer record
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param transferId 
     */
    public filesV1StoragesStorageIdTransfersFromTransferIdGet(authToken: string, appID: string, storageId: string, transferId: string, _options?: Configuration): Promise<TransferFromStorageReadSchema> {
        const result = this.api.filesV1StoragesStorageIdTransfersFromTransferIdGet(authToken, appID, storageId, transferId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transfers 
     * Get pending transfers of file sets to a local storage
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last transfer on previous page
     */
    public filesV1StoragesStorageIdTransfersToGetWithHttpInfo(authToken: string, appID: string, storageId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<TransfersToStorageSchema>> {
        const result = this.api.filesV1StoragesStorageIdTransfersToGetWithHttpInfo(authToken, appID, storageId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transfers 
     * Get pending transfers of file sets to a local storage
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last transfer on previous page
     */
    public filesV1StoragesStorageIdTransfersToGet(authToken: string, appID: string, storageId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<TransfersToStorageSchema> {
        const result = this.api.filesV1StoragesStorageIdTransfersToGet(authToken, appID, storageId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transfers 
     * Delete file set transfer after handling it
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param transferId 
     * @param failed 
     * @param completed 
     */
    public filesV1StoragesStorageIdTransfersToTransferIdDeleteWithHttpInfo(authToken: string, appID: string, storageId: string, transferId: string, failed?: boolean, completed?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdTransfersToTransferIdDeleteWithHttpInfo(authToken, appID, storageId, transferId, failed, completed, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transfers 
     * Delete file set transfer after handling it
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param transferId 
     * @param failed 
     * @param completed 
     */
    public filesV1StoragesStorageIdTransfersToTransferIdDelete(authToken: string, appID: string, storageId: string, transferId: string, failed?: boolean, completed?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdTransfersToTransferIdDelete(authToken, appID, storageId, transferId, failed, completed, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transfers 
     * Get file set transfer record
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param transferId 
     */
    public filesV1StoragesStorageIdTransfersToTransferIdGetWithHttpInfo(authToken: string, appID: string, storageId: string, transferId: string, _options?: Configuration): Promise<HttpInfo<TransferToStorageReadSchema>> {
        const result = this.api.filesV1StoragesStorageIdTransfersToTransferIdGetWithHttpInfo(authToken, appID, storageId, transferId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transfers 
     * Get file set transfer record
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param transferId 
     */
    public filesV1StoragesStorageIdTransfersToTransferIdGet(authToken: string, appID: string, storageId: string, transferId: string, _options?: Configuration): Promise<TransferToStorageReadSchema> {
        const result = this.api.filesV1StoragesStorageIdTransfersToTransferIdGet(authToken, appID, storageId, transferId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Verify storage access
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdVerificationsAccessGetWithHttpInfo(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<HttpInfo<FilesV1StoragesStorageIdVerificationsAccessGet200Response>> {
        const result = this.api.filesV1StoragesStorageIdVerificationsAccessGetWithHttpInfo(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Verify storage access
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdVerificationsAccessGet(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<FilesV1StoragesStorageIdVerificationsAccessGet200Response> {
        const result = this.api.filesV1StoragesStorageIdVerificationsAccessGet(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Verify storage permissions
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdVerificationsPermissionsGetWithHttpInfo(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<HttpInfo<FilesV1StoragesStorageIdVerificationsPermissionsGet200Response>> {
        const result = this.api.filesV1StoragesStorageIdVerificationsPermissionsGetWithHttpInfo(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Verify storage permissions
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesStorageIdVerificationsPermissionsGet(appID: string, authToken: string, storageId: string, _options?: Configuration): Promise<FilesV1StoragesStorageIdVerificationsPermissionsGet200Response> {
        const result = this.api.filesV1StoragesStorageIdVerificationsPermissionsGet(appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcoders 
     * Get all transcoders
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param query Search query
     * @param ids Filter list of id:s (comma separated)
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     */
    public filesV1TranscodersGetWithHttpInfo(appID: string, authToken: string, perPage?: number, page?: number, query?: string, ids?: string, sort?: string, _options?: Configuration): Promise<HttpInfo<TranscodersSchema>> {
        const result = this.api.filesV1TranscodersGetWithHttpInfo(appID, authToken, perPage, page, query, ids, sort, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcoders 
     * Get all transcoders
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param query Search query
     * @param ids Filter list of id:s (comma separated)
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     */
    public filesV1TranscodersGet(appID: string, authToken: string, perPage?: number, page?: number, query?: string, ids?: string, sort?: string, _options?: Configuration): Promise<TranscodersSchema> {
        const result = this.api.filesV1TranscodersGet(appID, authToken, perPage, page, query, ids, sort, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcoders 
     * Create a new transcoder
     * @param appID 
     * @param authToken 
     * @param transcoderSchema body
     */
    public filesV1TranscodersPostWithHttpInfo(appID: string, authToken: string, transcoderSchema: TranscoderSchema, _options?: Configuration): Promise<HttpInfo<TranscoderSchema>> {
        const result = this.api.filesV1TranscodersPostWithHttpInfo(appID, authToken, transcoderSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcoders 
     * Create a new transcoder
     * @param appID 
     * @param authToken 
     * @param transcoderSchema body
     */
    public filesV1TranscodersPost(appID: string, authToken: string, transcoderSchema: TranscoderSchema, _options?: Configuration): Promise<TranscoderSchema> {
        const result = this.api.filesV1TranscodersPost(appID, authToken, transcoderSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_transcoders 
     * Delete a particular transcoder by id
     * @param appID 
     * @param authToken 
     * @param transcoderId 
     */
    public filesV1TranscodersTranscoderIdDeleteWithHttpInfo(appID: string, authToken: string, transcoderId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1TranscodersTranscoderIdDeleteWithHttpInfo(appID, authToken, transcoderId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_transcoders 
     * Delete a particular transcoder by id
     * @param appID 
     * @param authToken 
     * @param transcoderId 
     */
    public filesV1TranscodersTranscoderIdDelete(appID: string, authToken: string, transcoderId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1TranscodersTranscoderIdDelete(appID, authToken, transcoderId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcoders 
     * Returns a particular transcoder by id
     * @param appID 
     * @param authToken 
     * @param transcoderId 
     */
    public filesV1TranscodersTranscoderIdGetWithHttpInfo(appID: string, authToken: string, transcoderId: string, _options?: Configuration): Promise<HttpInfo<TranscoderSchema>> {
        const result = this.api.filesV1TranscodersTranscoderIdGetWithHttpInfo(appID, authToken, transcoderId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcoders 
     * Returns a particular transcoder by id
     * @param appID 
     * @param authToken 
     * @param transcoderId 
     */
    public filesV1TranscodersTranscoderIdGet(appID: string, authToken: string, transcoderId: string, _options?: Configuration): Promise<TranscoderSchema> {
        const result = this.api.filesV1TranscodersTranscoderIdGet(appID, authToken, transcoderId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Upload transcoder logs
     * @param appID 
     * @param authToken 
     * @param transcoderId 
     * @param filename 
     */
    public filesV1TranscodersTranscoderIdLogsPostWithHttpInfo(appID: string, authToken: string, transcoderId: string, filename: string, _options?: Configuration): Promise<HttpInfo<FilesV1StoragesStorageIdLogsPost200Response>> {
        const result = this.api.filesV1TranscodersTranscoderIdLogsPostWithHttpInfo(appID, authToken, transcoderId, filename, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Upload transcoder logs
     * @param appID 
     * @param authToken 
     * @param transcoderId 
     * @param filename 
     */
    public filesV1TranscodersTranscoderIdLogsPost(appID: string, authToken: string, transcoderId: string, filename: string, _options?: Configuration): Promise<FilesV1StoragesStorageIdLogsPost200Response> {
        const result = this.api.filesV1TranscodersTranscoderIdLogsPost(appID, authToken, transcoderId, filename, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcoders 
     * Update transcoder
     * @param appID 
     * @param authToken 
     * @param transcoderId 
     * @param transcoderSchema body
     */
    public filesV1TranscodersTranscoderIdPatchWithHttpInfo(appID: string, authToken: string, transcoderId: string, transcoderSchema: TranscoderSchema, _options?: Configuration): Promise<HttpInfo<TranscoderSchema>> {
        const result = this.api.filesV1TranscodersTranscoderIdPatchWithHttpInfo(appID, authToken, transcoderId, transcoderSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcoders 
     * Update transcoder
     * @param appID 
     * @param authToken 
     * @param transcoderId 
     * @param transcoderSchema body
     */
    public filesV1TranscodersTranscoderIdPatch(appID: string, authToken: string, transcoderId: string, transcoderSchema: TranscoderSchema, _options?: Configuration): Promise<TranscoderSchema> {
        const result = this.api.filesV1TranscodersTranscoderIdPatch(appID, authToken, transcoderId, transcoderSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcoders 
     * Update transcoder
     * @param appID 
     * @param authToken 
     * @param transcoderId 
     * @param transcoderSchema body
     */
    public filesV1TranscodersTranscoderIdPutWithHttpInfo(appID: string, authToken: string, transcoderId: string, transcoderSchema: TranscoderSchema, _options?: Configuration): Promise<HttpInfo<TranscoderSchema>> {
        const result = this.api.filesV1TranscodersTranscoderIdPutWithHttpInfo(appID, authToken, transcoderId, transcoderSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcoders 
     * Update transcoder
     * @param appID 
     * @param authToken 
     * @param transcoderId 
     * @param transcoderSchema body
     */
    public filesV1TranscodersTranscoderIdPut(appID: string, authToken: string, transcoderId: string, transcoderSchema: TranscoderSchema, _options?: Configuration): Promise<TranscoderSchema> {
        const result = this.api.filesV1TranscodersTranscoderIdPut(appID, authToken, transcoderId, transcoderSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_transcoders 
     * Trigger reindexing of a transcoder
     * @param appID 
     * @param authToken 
     * @param transcoderId 
     */
    public filesV1TranscodersTranscoderIdReindexPostWithHttpInfo(appID: string, authToken: string, transcoderId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1TranscodersTranscoderIdReindexPostWithHttpInfo(appID, authToken, transcoderId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_transcoders 
     * Trigger reindexing of a transcoder
     * @param appID 
     * @param authToken 
     * @param transcoderId 
     */
    public filesV1TranscodersTranscoderIdReindexPost(appID: string, authToken: string, transcoderId: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1TranscodersTranscoderIdReindexPost(appID, authToken, transcoderId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcoders 
     * Get storages linked to a transcoder
     * @param appID 
     * @param authToken 
     * @param transcoderId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last storage on previous page
     */
    public filesV1TranscodersTranscoderIdStoragesGetWithHttpInfo(appID: string, authToken: string, transcoderId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<StoragesReadSchema>> {
        const result = this.api.filesV1TranscodersTranscoderIdStoragesGetWithHttpInfo(appID, authToken, transcoderId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcoders 
     * Get storages linked to a transcoder
     * @param appID 
     * @param authToken 
     * @param transcoderId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last storage on previous page
     */
    public filesV1TranscodersTranscoderIdStoragesGet(appID: string, authToken: string, transcoderId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<StoragesReadSchema> {
        const result = this.api.filesV1TranscodersTranscoderIdStoragesGet(appID, authToken, transcoderId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Generates a url for direct file downloads (for IGSs)
     * @param authToken 
     * @param appID 
     * @param transferId 
     */
    public filesV1TransfersTransferIdUrlsPostWithHttpInfo(authToken: string, appID: string, transferId: string, _options?: Configuration): Promise<HttpInfo<TransferSignedURLSchema>> {
        const result = this.api.filesV1TransfersTransferIdUrlsPostWithHttpInfo(authToken, appID, transferId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Generates a url for direct file downloads (for IGSs)
     * @param authToken 
     * @param appID 
     * @param transferId 
     */
    public filesV1TransfersTransferIdUrlsPost(authToken: string, appID: string, transferId: string, _options?: Configuration): Promise<TransferSignedURLSchema> {
        const result = this.api.filesV1TransfersTransferIdUrlsPost(authToken, appID, transferId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Verifies the signature of a url
     * @param authToken 
     * @param appID 
     * @param transferId 
     * @param userId 
     * @param signature 
     */
    public filesV1TransfersTransferIdUrlsVerifyGetWithHttpInfo(authToken: string, appID: string, transferId: string, userId: string, signature: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1TransfersTransferIdUrlsVerifyGetWithHttpInfo(authToken, appID, transferId, userId, signature, _options);
        return result.toPromise();
    }

    /**
     * 
     * Verifies the signature of a url
     * @param authToken 
     * @param appID 
     * @param transferId 
     * @param userId 
     * @param signature 
     */
    public filesV1TransfersTransferIdUrlsVerifyGet(authToken: string, appID: string, transferId: string, userId: string, signature: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1TransfersTransferIdUrlsVerifyGet(authToken, appID, transferId, userId, signature, _options);
        return result.toPromise();
    }


}



import { ObservableJobsApi } from './ObservableAPI';

import { JobsApiRequestFactory, JobsApiResponseProcessor} from "../apis/JobsApi";
export class PromiseJobsApi {
    private api: ObservableJobsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: JobsApiRequestFactory,
        responseProcessor?: JobsApiResponseProcessor
    ) {
        this.api = new ObservableJobsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     *  Required roles:  - can_delete_jobs 
     * Delete multiple jobs by ids list
     * @param appID 
     * @param authToken 
     * @param jobsBulkDeleteSchema body
     */
    public jobsV1JobsDeleteWithHttpInfo(appID: string, authToken: string, jobsBulkDeleteSchema: JobsBulkDeleteSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.jobsV1JobsDeleteWithHttpInfo(appID, authToken, jobsBulkDeleteSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_jobs 
     * Delete multiple jobs by ids list
     * @param appID 
     * @param authToken 
     * @param jobsBulkDeleteSchema body
     */
    public jobsV1JobsDelete(appID: string, authToken: string, jobsBulkDeleteSchema: JobsBulkDeleteSchema, _options?: Configuration): Promise<void> {
        const result = this.api.jobsV1JobsDelete(appID, authToken, jobsBulkDeleteSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_jobs 
     * Get list of jobs
     * @param appID 
     * @param authToken 
     * @param facets If facets should be returned
     * @param aggregations List of aggregation keys if facets is true
     * @param page Which page number to fetch
     * @param perPage The number of items for each page
     * @param scroll If true passed then uses scroll pagination instead of default one
     * @param scrollId In order to get next batch of results using scroll pagination the scroll_id is required
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param type Filter by type
     * @param objectType Filter by object_type
     * @param parentId Filter by parent_id
     * @param objectId Filter by object_id
     * @param status Filter by status
     * @param createdBy Filter by created_by
     * @param dateCreated Filter by date_created. Can either be a single ISO8601 timestamp or two timestamps separated by a semicolon &#x60;;&#x60;. The timestamp can also be expressed as number of milliseconds since Jan 1 1970 (epoch). Either timestamp can also be replaced with an asterisk &#x60;*&#x60; to make the query open ended. For example: 2018-01-01T10:00:00Z;2018-01-01T15:00:00Z
     * @param dateModified Filter by date_modified Can either be a single ISO8601 timestamp or two timestamps separated by a semicolon &#x60;;&#x60;. The timestamp can also be expressed as number of milliseconds since Jan 1 1970 (epoch). Either timestamp can also be replaced with an asterisk &#x60;*&#x60; to make the query open ended. For example: *;1544450400
     * @param query Filter by any of the above with wildcard support
     * @param ids Filter list of id:s (comma separated)
     */
    public jobsV1JobsGetWithHttpInfo(appID: string, authToken: string, facets?: boolean, aggregations?: string, page?: number, perPage?: number, scroll?: boolean, scrollId?: string, sort?: string, type?: string, objectType?: string, parentId?: string, objectId?: string, status?: string, createdBy?: string, dateCreated?: string, dateModified?: string, query?: string, ids?: string, _options?: Configuration): Promise<HttpInfo<JobsSchema>> {
        const result = this.api.jobsV1JobsGetWithHttpInfo(appID, authToken, facets, aggregations, page, perPage, scroll, scrollId, sort, type, objectType, parentId, objectId, status, createdBy, dateCreated, dateModified, query, ids, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_jobs 
     * Get list of jobs
     * @param appID 
     * @param authToken 
     * @param facets If facets should be returned
     * @param aggregations List of aggregation keys if facets is true
     * @param page Which page number to fetch
     * @param perPage The number of items for each page
     * @param scroll If true passed then uses scroll pagination instead of default one
     * @param scrollId In order to get next batch of results using scroll pagination the scroll_id is required
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param type Filter by type
     * @param objectType Filter by object_type
     * @param parentId Filter by parent_id
     * @param objectId Filter by object_id
     * @param status Filter by status
     * @param createdBy Filter by created_by
     * @param dateCreated Filter by date_created. Can either be a single ISO8601 timestamp or two timestamps separated by a semicolon &#x60;;&#x60;. The timestamp can also be expressed as number of milliseconds since Jan 1 1970 (epoch). Either timestamp can also be replaced with an asterisk &#x60;*&#x60; to make the query open ended. For example: 2018-01-01T10:00:00Z;2018-01-01T15:00:00Z
     * @param dateModified Filter by date_modified Can either be a single ISO8601 timestamp or two timestamps separated by a semicolon &#x60;;&#x60;. The timestamp can also be expressed as number of milliseconds since Jan 1 1970 (epoch). Either timestamp can also be replaced with an asterisk &#x60;*&#x60; to make the query open ended. For example: *;1544450400
     * @param query Filter by any of the above with wildcard support
     * @param ids Filter list of id:s (comma separated)
     */
    public jobsV1JobsGet(appID: string, authToken: string, facets?: boolean, aggregations?: string, page?: number, perPage?: number, scroll?: boolean, scrollId?: string, sort?: string, type?: string, objectType?: string, parentId?: string, objectId?: string, status?: string, createdBy?: string, dateCreated?: string, dateModified?: string, query?: string, ids?: string, _options?: Configuration): Promise<JobsSchema> {
        const result = this.api.jobsV1JobsGet(appID, authToken, facets, aggregations, page, perPage, scroll, scrollId, sort, type, objectType, parentId, objectId, status, createdBy, dateCreated, dateModified, query, ids, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_jobs 
     * Delete a particular job by id
     * @param appID 
     * @param authToken 
     * @param jobId 
     */
    public jobsV1JobsJobIdDeleteWithHttpInfo(appID: string, authToken: string, jobId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.jobsV1JobsJobIdDeleteWithHttpInfo(appID, authToken, jobId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_jobs 
     * Delete a particular job by id
     * @param appID 
     * @param authToken 
     * @param jobId 
     */
    public jobsV1JobsJobIdDelete(appID: string, authToken: string, jobId: string, _options?: Configuration): Promise<void> {
        const result = this.api.jobsV1JobsJobIdDelete(appID, authToken, jobId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_jobs 
     * Returns a particular job by id
     * @param appID 
     * @param authToken 
     * @param jobId 
     */
    public jobsV1JobsJobIdGetWithHttpInfo(appID: string, authToken: string, jobId: string, _options?: Configuration): Promise<HttpInfo<JobSchema>> {
        const result = this.api.jobsV1JobsJobIdGetWithHttpInfo(appID, authToken, jobId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_jobs 
     * Returns a particular job by id
     * @param appID 
     * @param authToken 
     * @param jobId 
     */
    public jobsV1JobsJobIdGet(appID: string, authToken: string, jobId: string, _options?: Configuration): Promise<JobSchema> {
        const result = this.api.jobsV1JobsJobIdGet(appID, authToken, jobId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update job
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param jobSchema body
     */
    public jobsV1JobsJobIdPatchWithHttpInfo(appID: string, authToken: string, jobId: string, jobSchema: JobSchema, _options?: Configuration): Promise<HttpInfo<JobSchema>> {
        const result = this.api.jobsV1JobsJobIdPatchWithHttpInfo(appID, authToken, jobId, jobSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update job
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param jobSchema body
     */
    public jobsV1JobsJobIdPatch(appID: string, authToken: string, jobId: string, jobSchema: JobSchema, _options?: Configuration): Promise<JobSchema> {
        const result = this.api.jobsV1JobsJobIdPatch(appID, authToken, jobId, jobSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update job
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param jobSchema body
     */
    public jobsV1JobsJobIdPutWithHttpInfo(appID: string, authToken: string, jobId: string, jobSchema: JobSchema, _options?: Configuration): Promise<HttpInfo<JobSchema>> {
        const result = this.api.jobsV1JobsJobIdPutWithHttpInfo(appID, authToken, jobId, jobSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update job
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param jobSchema body
     */
    public jobsV1JobsJobIdPut(appID: string, authToken: string, jobId: string, jobSchema: JobSchema, _options?: Configuration): Promise<JobSchema> {
        const result = this.api.jobsV1JobsJobIdPut(appID, authToken, jobId, jobSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Reindex job
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param reindexJobSchema body
     */
    public jobsV1JobsJobIdReindexPostWithHttpInfo(appID: string, authToken: string, jobId: string, reindexJobSchema: ReindexJobSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.jobsV1JobsJobIdReindexPostWithHttpInfo(appID, authToken, jobId, reindexJobSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Reindex job
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param reindexJobSchema body
     */
    public jobsV1JobsJobIdReindexPost(appID: string, authToken: string, jobId: string, reindexJobSchema: ReindexJobSchema, _options?: Configuration): Promise<void> {
        const result = this.api.jobsV1JobsJobIdReindexPost(appID, authToken, jobId, reindexJobSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update job step
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param jobStepId 
     * @param jobStepSchema body
     */
    public jobsV1JobsJobIdStepsJobStepIdPatchWithHttpInfo(appID: string, authToken: string, jobId: string, jobStepId: string, jobStepSchema: JobStepSchema, _options?: Configuration): Promise<HttpInfo<JobSchema>> {
        const result = this.api.jobsV1JobsJobIdStepsJobStepIdPatchWithHttpInfo(appID, authToken, jobId, jobStepId, jobStepSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update job step
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param jobStepId 
     * @param jobStepSchema body
     */
    public jobsV1JobsJobIdStepsJobStepIdPatch(appID: string, authToken: string, jobId: string, jobStepId: string, jobStepSchema: JobStepSchema, _options?: Configuration): Promise<JobSchema> {
        const result = this.api.jobsV1JobsJobIdStepsJobStepIdPatch(appID, authToken, jobId, jobStepId, jobStepSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update job step
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param jobStepId 
     * @param jobStepSchema body
     */
    public jobsV1JobsJobIdStepsJobStepIdPutWithHttpInfo(appID: string, authToken: string, jobId: string, jobStepId: string, jobStepSchema: JobStepSchema, _options?: Configuration): Promise<HttpInfo<JobSchema>> {
        const result = this.api.jobsV1JobsJobIdStepsJobStepIdPutWithHttpInfo(appID, authToken, jobId, jobStepId, jobStepSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update job step
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param jobStepId 
     * @param jobStepSchema body
     */
    public jobsV1JobsJobIdStepsJobStepIdPut(appID: string, authToken: string, jobId: string, jobStepId: string, jobStepSchema: JobStepSchema, _options?: Configuration): Promise<JobSchema> {
        const result = this.api.jobsV1JobsJobIdStepsJobStepIdPut(appID, authToken, jobId, jobStepId, jobStepSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update multiple job steps
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param jobStepsUpdateSchema body
     */
    public jobsV1JobsJobIdStepsPatchWithHttpInfo(appID: string, authToken: string, jobId: string, jobStepsUpdateSchema: JobStepsUpdateSchema, _options?: Configuration): Promise<HttpInfo<JobSchema>> {
        const result = this.api.jobsV1JobsJobIdStepsPatchWithHttpInfo(appID, authToken, jobId, jobStepsUpdateSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update multiple job steps
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param jobStepsUpdateSchema body
     */
    public jobsV1JobsJobIdStepsPatch(appID: string, authToken: string, jobId: string, jobStepsUpdateSchema: JobStepsUpdateSchema, _options?: Configuration): Promise<JobSchema> {
        const result = this.api.jobsV1JobsJobIdStepsPatch(appID, authToken, jobId, jobStepsUpdateSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update multiple job steps
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param jobStepsUpdateSchema body
     */
    public jobsV1JobsJobIdStepsPutWithHttpInfo(appID: string, authToken: string, jobId: string, jobStepsUpdateSchema: JobStepsUpdateSchema, _options?: Configuration): Promise<HttpInfo<JobSchema>> {
        const result = this.api.jobsV1JobsJobIdStepsPutWithHttpInfo(appID, authToken, jobId, jobStepsUpdateSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update multiple job steps
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param jobStepsUpdateSchema body
     */
    public jobsV1JobsJobIdStepsPut(appID: string, authToken: string, jobId: string, jobStepsUpdateSchema: JobStepsUpdateSchema, _options?: Configuration): Promise<JobSchema> {
        const result = this.api.jobsV1JobsJobIdStepsPut(appID, authToken, jobId, jobStepsUpdateSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Create a new job
     * @param appID 
     * @param authToken 
     * @param jobSchema body
     */
    public jobsV1JobsPostWithHttpInfo(appID: string, authToken: string, jobSchema: JobSchema, _options?: Configuration): Promise<HttpInfo<JobSchema>> {
        const result = this.api.jobsV1JobsPostWithHttpInfo(appID, authToken, jobSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Create a new job
     * @param appID 
     * @param authToken 
     * @param jobSchema body
     */
    public jobsV1JobsPost(appID: string, authToken: string, jobSchema: JobSchema, _options?: Configuration): Promise<JobSchema> {
        const result = this.api.jobsV1JobsPost(appID, authToken, jobSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Change jobs priority
     * @param appID 
     * @param authToken 
     * @param jobsPrioritySchema body
     */
    public jobsV1JobsPriorityPutWithHttpInfo(appID: string, authToken: string, jobsPrioritySchema: JobsPrioritySchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.jobsV1JobsPriorityPutWithHttpInfo(appID, authToken, jobsPrioritySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Change jobs priority
     * @param appID 
     * @param authToken 
     * @param jobsPrioritySchema body
     */
    public jobsV1JobsPriorityPut(appID: string, authToken: string, jobsPrioritySchema: JobsPrioritySchema, _options?: Configuration): Promise<void> {
        const result = this.api.jobsV1JobsPriorityPut(appID, authToken, jobsPrioritySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Change jobs state
     * @param appID 
     * @param authToken 
     * @param jobsStateSchema1 body
     */
    public jobsV1JobsStatePutWithHttpInfo(appID: string, authToken: string, jobsStateSchema1: JobsStateSchema1, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.jobsV1JobsStatePutWithHttpInfo(appID, authToken, jobsStateSchema1, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Change jobs state
     * @param appID 
     * @param authToken 
     * @param jobsStateSchema1 body
     */
    public jobsV1JobsStatePut(appID: string, authToken: string, jobsStateSchema1: JobsStateSchema1, _options?: Configuration): Promise<void> {
        const result = this.api.jobsV1JobsStatePut(appID, authToken, jobsStateSchema1, _options);
        return result.toPromise();
    }


}



import { ObservableMetadataApi } from './ObservableAPI';

import { MetadataApiRequestFactory, MetadataApiResponseProcessor} from "../apis/MetadataApi";
export class PromiseMetadataApi {
    private api: ObservableMetadataApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MetadataApiRequestFactory,
        responseProcessor?: MetadataApiResponseProcessor
    ) {
        this.api = new ObservableMetadataApi(configuration, requestFactory, responseProcessor);
    }

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
    public metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGetWithHttpInfo(appID: string, authToken: string, objectType: string, assetId: string, objectId: string, viewId: string, _options?: Configuration): Promise<HttpInfo<MetadataValuesSchema>> {
        const result = this.api.metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGetWithHttpInfo(appID, authToken, objectType, assetId, objectId, viewId, _options);
        return result.toPromise();
    }

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
    public metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGet(appID: string, authToken: string, objectType: string, assetId: string, objectId: string, viewId: string, _options?: Configuration): Promise<MetadataValuesSchema> {
        const result = this.api.metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGet(appID, authToken, objectType, assetId, objectId, viewId, _options);
        return result.toPromise();
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
    public metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPutWithHttpInfo(appID: string, authToken: string, assetId: string, objectType: string, objectId: string, viewId: string, metadataValuesSchema: MetadataValuesSchema, _options?: Configuration): Promise<HttpInfo<MetadataValuesSchema>> {
        const result = this.api.metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPutWithHttpInfo(appID, authToken, assetId, objectType, objectId, viewId, metadataValuesSchema, _options);
        return result.toPromise();
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
    public metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPut(appID: string, authToken: string, assetId: string, objectType: string, objectId: string, viewId: string, metadataValuesSchema: MetadataValuesSchema, _options?: Configuration): Promise<MetadataValuesSchema> {
        const result = this.api.metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPut(appID, authToken, assetId, objectType, objectId, viewId, metadataValuesSchema, _options);
        return result.toPromise();
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
    public metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGetWithHttpInfo(appID: string, authToken: string, assetId: string, versionId: string, viewId: string, _options?: Configuration): Promise<HttpInfo<MetadataValuesSchema>> {
        const result = this.api.metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGetWithHttpInfo(appID, authToken, assetId, versionId, viewId, _options);
        return result.toPromise();
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
    public metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGet(appID: string, authToken: string, assetId: string, versionId: string, viewId: string, _options?: Configuration): Promise<MetadataValuesSchema> {
        const result = this.api.metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGet(appID, authToken, assetId, versionId, viewId, _options);
        return result.toPromise();
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
    public metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGetWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, versionId: string, viewId: string, _options?: Configuration): Promise<HttpInfo<MetadataValuesSchema>> {
        const result = this.api.metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGetWithHttpInfo(appID, authToken, objectType, objectId, versionId, viewId, _options);
        return result.toPromise();
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
    public metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGet(appID: string, authToken: string, objectType: string, objectId: string, versionId: string, viewId: string, _options?: Configuration): Promise<MetadataValuesSchema> {
        const result = this.api.metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGet(appID, authToken, objectType, objectId, versionId, viewId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_metadata_fields 
     * Delete a particular field by name
     * @param appID 
     * @param authToken 
     * @param fieldName 
     */
    public metadataV1FieldsFieldNameDeleteWithHttpInfo(appID: string, authToken: string, fieldName: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.metadataV1FieldsFieldNameDeleteWithHttpInfo(appID, authToken, fieldName, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_metadata_fields 
     * Delete a particular field by name
     * @param appID 
     * @param authToken 
     * @param fieldName 
     */
    public metadataV1FieldsFieldNameDelete(appID: string, authToken: string, fieldName: string, _options?: Configuration): Promise<void> {
        const result = this.api.metadataV1FieldsFieldNameDelete(appID, authToken, fieldName, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_fields 
     * Returns a particular field by name
     * @param appID 
     * @param authToken 
     * @param fieldName 
     */
    public metadataV1FieldsFieldNameGetWithHttpInfo(appID: string, authToken: string, fieldName: string, _options?: Configuration): Promise<HttpInfo<MetadataFieldSchema>> {
        const result = this.api.metadataV1FieldsFieldNameGetWithHttpInfo(appID, authToken, fieldName, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_fields 
     * Returns a particular field by name
     * @param appID 
     * @param authToken 
     * @param fieldName 
     */
    public metadataV1FieldsFieldNameGet(appID: string, authToken: string, fieldName: string, _options?: Configuration): Promise<MetadataFieldSchema> {
        const result = this.api.metadataV1FieldsFieldNameGet(appID, authToken, fieldName, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_fields 
     * Update field by name
     * @param appID 
     * @param authToken 
     * @param fieldName 
     * @param metadataFieldSchema body
     */
    public metadataV1FieldsFieldNamePatchWithHttpInfo(appID: string, authToken: string, fieldName: string, metadataFieldSchema: MetadataFieldSchema, _options?: Configuration): Promise<HttpInfo<MetadataFieldSchema>> {
        const result = this.api.metadataV1FieldsFieldNamePatchWithHttpInfo(appID, authToken, fieldName, metadataFieldSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_fields 
     * Update field by name
     * @param appID 
     * @param authToken 
     * @param fieldName 
     * @param metadataFieldSchema body
     */
    public metadataV1FieldsFieldNamePatch(appID: string, authToken: string, fieldName: string, metadataFieldSchema: MetadataFieldSchema, _options?: Configuration): Promise<MetadataFieldSchema> {
        const result = this.api.metadataV1FieldsFieldNamePatch(appID, authToken, fieldName, metadataFieldSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_fields 
     * Update field by name
     * @param appID 
     * @param authToken 
     * @param fieldName 
     * @param metadataFieldSchema body
     */
    public metadataV1FieldsFieldNamePutWithHttpInfo(appID: string, authToken: string, fieldName: string, metadataFieldSchema: MetadataFieldSchema, _options?: Configuration): Promise<HttpInfo<MetadataFieldSchema>> {
        const result = this.api.metadataV1FieldsFieldNamePutWithHttpInfo(appID, authToken, fieldName, metadataFieldSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_fields 
     * Update field by name
     * @param appID 
     * @param authToken 
     * @param fieldName 
     * @param metadataFieldSchema body
     */
    public metadataV1FieldsFieldNamePut(appID: string, authToken: string, fieldName: string, metadataFieldSchema: MetadataFieldSchema, _options?: Configuration): Promise<MetadataFieldSchema> {
        const result = this.api.metadataV1FieldsFieldNamePut(appID, authToken, fieldName, metadataFieldSchema, _options);
        return result.toPromise();
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
    public metadataV1FieldsGetWithHttpInfo(appID: string, authToken: string, perPage?: number, lastFieldName?: string, filter?: string, _options?: Configuration): Promise<HttpInfo<MetadataFieldsSchema>> {
        const result = this.api.metadataV1FieldsGetWithHttpInfo(appID, authToken, perPage, lastFieldName, filter, _options);
        return result.toPromise();
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
    public metadataV1FieldsGet(appID: string, authToken: string, perPage?: number, lastFieldName?: string, filter?: string, _options?: Configuration): Promise<MetadataFieldsSchema> {
        const result = this.api.metadataV1FieldsGet(appID, authToken, perPage, lastFieldName, filter, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_fields 
     * Create a new field
     * @param appID 
     * @param authToken 
     * @param metadataFieldCreateSchema body
     */
    public metadataV1FieldsPostWithHttpInfo(appID: string, authToken: string, metadataFieldCreateSchema: MetadataFieldCreateSchema, _options?: Configuration): Promise<HttpInfo<MetadataFieldSchema>> {
        const result = this.api.metadataV1FieldsPostWithHttpInfo(appID, authToken, metadataFieldCreateSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_fields 
     * Create a new field
     * @param appID 
     * @param authToken 
     * @param metadataFieldCreateSchema body
     */
    public metadataV1FieldsPost(appID: string, authToken: string, metadataFieldCreateSchema: MetadataFieldCreateSchema, _options?: Configuration): Promise<MetadataFieldSchema> {
        const result = this.api.metadataV1FieldsPost(appID, authToken, metadataFieldCreateSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_fields 
     * Get the metadata field mapping
     * @param appID 
     * @param authToken 
     * @param fieldName 
     */
    public metadataV1MappingFieldsFieldNameGetWithHttpInfo(appID: string, authToken: string, fieldName: string, _options?: Configuration): Promise<HttpInfo<MetadataFieldMappingSchema>> {
        const result = this.api.metadataV1MappingFieldsFieldNameGetWithHttpInfo(appID, authToken, fieldName, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_fields 
     * Get the metadata field mapping
     * @param appID 
     * @param authToken 
     * @param fieldName 
     */
    public metadataV1MappingFieldsFieldNameGet(appID: string, authToken: string, fieldName: string, _options?: Configuration): Promise<MetadataFieldMappingSchema> {
        const result = this.api.metadataV1MappingFieldsFieldNameGet(appID, authToken, fieldName, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_fields 
     * Create a new metadata field mapping
     * @param appID 
     * @param authToken 
     * @param metadataFieldMappingSchema body
     */
    public metadataV1MappingFieldsPostWithHttpInfo(appID: string, authToken: string, metadataFieldMappingSchema: MetadataFieldMappingSchema, _options?: Configuration): Promise<HttpInfo<MetadataFieldMappingSchema>> {
        const result = this.api.metadataV1MappingFieldsPostWithHttpInfo(appID, authToken, metadataFieldMappingSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_fields 
     * Create a new metadata field mapping
     * @param appID 
     * @param authToken 
     * @param metadataFieldMappingSchema body
     */
    public metadataV1MappingFieldsPost(appID: string, authToken: string, metadataFieldMappingSchema: MetadataFieldMappingSchema, _options?: Configuration): Promise<MetadataFieldMappingSchema> {
        const result = this.api.metadataV1MappingFieldsPost(appID, authToken, metadataFieldMappingSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_fields 
     * List the metadata field mapping options
     * @param appID 
     * @param authToken 
     */
    public metadataV1MappingOptionsGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<MetadataFieldMappingOptionsSchema>> {
        const result = this.api.metadataV1MappingOptionsGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_fields 
     * List the metadata field mapping options
     * @param appID 
     * @param authToken 
     */
    public metadataV1MappingOptionsGet(appID: string, authToken: string, _options?: Configuration): Promise<MetadataFieldMappingOptionsSchema> {
        const result = this.api.metadataV1MappingOptionsGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_categories 
     * Get metadata categories
     * @param appID 
     * @param authToken 
     * @param objectType 
     */
    public metadataV1ObjectTypeCategoriesGetWithHttpInfo(appID: string, authToken: string, objectType: string, _options?: Configuration): Promise<HttpInfo<MetadataCategoriesSchema>> {
        const result = this.api.metadataV1ObjectTypeCategoriesGetWithHttpInfo(appID, authToken, objectType, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_categories 
     * Get metadata categories
     * @param appID 
     * @param authToken 
     * @param objectType 
     */
    public metadataV1ObjectTypeCategoriesGet(appID: string, authToken: string, objectType: string, _options?: Configuration): Promise<MetadataCategoriesSchema> {
        const result = this.api.metadataV1ObjectTypeCategoriesGet(appID, authToken, objectType, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_metadata_categories 
     * Delete metadata category by object type and category name
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param name 
     */
    public metadataV1ObjectTypeCategoriesNameDeleteWithHttpInfo(appID: string, authToken: string, objectType: string, name: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.metadataV1ObjectTypeCategoriesNameDeleteWithHttpInfo(appID, authToken, objectType, name, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_metadata_categories 
     * Delete metadata category by object type and category name
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param name 
     */
    public metadataV1ObjectTypeCategoriesNameDelete(appID: string, authToken: string, objectType: string, name: string, _options?: Configuration): Promise<void> {
        const result = this.api.metadataV1ObjectTypeCategoriesNameDelete(appID, authToken, objectType, name, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_categories 
     * Get metadata category by object type and category name
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param name 
     */
    public metadataV1ObjectTypeCategoriesNameGetWithHttpInfo(appID: string, authToken: string, objectType: string, name: string, _options?: Configuration): Promise<HttpInfo<MetadataCategorySchema>> {
        const result = this.api.metadataV1ObjectTypeCategoriesNameGetWithHttpInfo(appID, authToken, objectType, name, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_categories 
     * Get metadata category by object type and category name
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param name 
     */
    public metadataV1ObjectTypeCategoriesNameGet(appID: string, authToken: string, objectType: string, name: string, _options?: Configuration): Promise<MetadataCategorySchema> {
        const result = this.api.metadataV1ObjectTypeCategoriesNameGet(appID, authToken, objectType, name, _options);
        return result.toPromise();
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
    public metadataV1ObjectTypeCategoriesNamePutWithHttpInfo(appID: string, authToken: string, objectType: string, name: string, metadataCategorySchema: MetadataCategorySchema, _options?: Configuration): Promise<HttpInfo<MetadataCategorySchema>> {
        const result = this.api.metadataV1ObjectTypeCategoriesNamePutWithHttpInfo(appID, authToken, objectType, name, metadataCategorySchema, _options);
        return result.toPromise();
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
    public metadataV1ObjectTypeCategoriesNamePut(appID: string, authToken: string, objectType: string, name: string, metadataCategorySchema: MetadataCategorySchema, _options?: Configuration): Promise<MetadataCategorySchema> {
        const result = this.api.metadataV1ObjectTypeCategoriesNamePut(appID, authToken, objectType, name, metadataCategorySchema, _options);
        return result.toPromise();
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
    public metadataV1ObjectTypeCategoriesNameViewsGetWithHttpInfo(appID: string, authToken: string, objectType: string, name: string, extOptions?: boolean, writableOnly?: boolean, _options?: Configuration): Promise<HttpInfo<MetadataCategorySchema>> {
        const result = this.api.metadataV1ObjectTypeCategoriesNameViewsGetWithHttpInfo(appID, authToken, objectType, name, extOptions, writableOnly, _options);
        return result.toPromise();
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
    public metadataV1ObjectTypeCategoriesNameViewsGet(appID: string, authToken: string, objectType: string, name: string, extOptions?: boolean, writableOnly?: boolean, _options?: Configuration): Promise<MetadataCategorySchema> {
        const result = this.api.metadataV1ObjectTypeCategoriesNameViewsGet(appID, authToken, objectType, name, extOptions, writableOnly, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_categories 
     * Add a metadata category for an object type
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param metadataCategorySchema body
     */
    public metadataV1ObjectTypeCategoriesPostWithHttpInfo(appID: string, authToken: string, objectType: string, metadataCategorySchema: MetadataCategorySchema, _options?: Configuration): Promise<HttpInfo<MetadataCategorySchema>> {
        const result = this.api.metadataV1ObjectTypeCategoriesPostWithHttpInfo(appID, authToken, objectType, metadataCategorySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_categories 
     * Add a metadata category for an object type
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param metadataCategorySchema body
     */
    public metadataV1ObjectTypeCategoriesPost(appID: string, authToken: string, objectType: string, metadataCategorySchema: MetadataCategorySchema, _options?: Configuration): Promise<MetadataCategorySchema> {
        const result = this.api.metadataV1ObjectTypeCategoriesPost(appID, authToken, objectType, metadataCategorySchema, _options);
        return result.toPromise();
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
    public metadataV1ObjectTypeContentViewsViewIdPutWithHttpInfo(appID: string, authToken: string, objectType: string, viewId: string, collectionMetadataValuesBatchSchema: CollectionMetadataValuesBatchSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.metadataV1ObjectTypeContentViewsViewIdPutWithHttpInfo(appID, authToken, objectType, viewId, collectionMetadataValuesBatchSchema, _options);
        return result.toPromise();
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
    public metadataV1ObjectTypeContentViewsViewIdPut(appID: string, authToken: string, objectType: string, viewId: string, collectionMetadataValuesBatchSchema: CollectionMetadataValuesBatchSchema, _options?: Configuration): Promise<void> {
        const result = this.api.metadataV1ObjectTypeContentViewsViewIdPut(appID, authToken, objectType, viewId, collectionMetadataValuesBatchSchema, _options);
        return result.toPromise();
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
    public metadataV1ObjectTypeObjectIdGetWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, includeValuesForDeletedFields?: boolean, _options?: Configuration): Promise<HttpInfo<MetadataValuesSchema>> {
        const result = this.api.metadataV1ObjectTypeObjectIdGetWithHttpInfo(appID, authToken, objectType, objectId, includeValuesForDeletedFields, _options);
        return result.toPromise();
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
    public metadataV1ObjectTypeObjectIdGet(appID: string, authToken: string, objectType: string, objectId: string, includeValuesForDeletedFields?: boolean, _options?: Configuration): Promise<MetadataValuesSchema> {
        const result = this.api.metadataV1ObjectTypeObjectIdGet(appID, authToken, objectType, objectId, includeValuesForDeletedFields, _options);
        return result.toPromise();
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
    public metadataV1ObjectTypeObjectIdPutWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, metadataValuesSchema: MetadataValuesSchema, _options?: Configuration): Promise<HttpInfo<MetadataValuesSchema>> {
        const result = this.api.metadataV1ObjectTypeObjectIdPutWithHttpInfo(appID, authToken, objectType, objectId, metadataValuesSchema, _options);
        return result.toPromise();
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
    public metadataV1ObjectTypeObjectIdPut(appID: string, authToken: string, objectType: string, objectId: string, metadataValuesSchema: MetadataValuesSchema, _options?: Configuration): Promise<MetadataValuesSchema> {
        const result = this.api.metadataV1ObjectTypeObjectIdPut(appID, authToken, objectType, objectId, metadataValuesSchema, _options);
        return result.toPromise();
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
    public metadataV1ObjectTypeObjectIdViewsViewIdGetWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, viewId: string, _options?: Configuration): Promise<HttpInfo<MetadataValuesSchema>> {
        const result = this.api.metadataV1ObjectTypeObjectIdViewsViewIdGetWithHttpInfo(appID, authToken, objectType, objectId, viewId, _options);
        return result.toPromise();
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
    public metadataV1ObjectTypeObjectIdViewsViewIdGet(appID: string, authToken: string, objectType: string, objectId: string, viewId: string, _options?: Configuration): Promise<MetadataValuesSchema> {
        const result = this.api.metadataV1ObjectTypeObjectIdViewsViewIdGet(appID, authToken, objectType, objectId, viewId, _options);
        return result.toPromise();
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
    public metadataV1ObjectTypeObjectIdViewsViewIdPutWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, viewId: string, metadataValuesSchema: MetadataValuesSchema, _options?: Configuration): Promise<HttpInfo<MetadataValuesSchema>> {
        const result = this.api.metadataV1ObjectTypeObjectIdViewsViewIdPutWithHttpInfo(appID, authToken, objectType, objectId, viewId, metadataValuesSchema, _options);
        return result.toPromise();
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
    public metadataV1ObjectTypeObjectIdViewsViewIdPut(appID: string, authToken: string, objectType: string, objectId: string, viewId: string, metadataValuesSchema: MetadataValuesSchema, _options?: Configuration): Promise<MetadataValuesSchema> {
        const result = this.api.metadataV1ObjectTypeObjectIdViewsViewIdPut(appID, authToken, objectType, objectId, viewId, metadataValuesSchema, _options);
        return result.toPromise();
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
    public metadataV1ObjectTypeViewsViewIdPostWithHttpInfo(appID: string, authToken: string, objectType: string, viewId: string, createMetadataValuesBatchSchema: CreateMetadataValuesBatchSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.metadataV1ObjectTypeViewsViewIdPostWithHttpInfo(appID, authToken, objectType, viewId, createMetadataValuesBatchSchema, _options);
        return result.toPromise();
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
    public metadataV1ObjectTypeViewsViewIdPost(appID: string, authToken: string, objectType: string, viewId: string, createMetadataValuesBatchSchema: CreateMetadataValuesBatchSchema, _options?: Configuration): Promise<void> {
        const result = this.api.metadataV1ObjectTypeViewsViewIdPost(appID, authToken, objectType, viewId, createMetadataValuesBatchSchema, _options);
        return result.toPromise();
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
    public metadataV1ObjectTypeViewsViewIdPutWithHttpInfo(appID: string, authToken: string, objectType: string, viewId: string, metadataValuesBatchSchema: MetadataValuesBatchSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.metadataV1ObjectTypeViewsViewIdPutWithHttpInfo(appID, authToken, objectType, viewId, metadataValuesBatchSchema, _options);
        return result.toPromise();
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
    public metadataV1ObjectTypeViewsViewIdPut(appID: string, authToken: string, objectType: string, viewId: string, metadataValuesBatchSchema: MetadataValuesBatchSchema, _options?: Configuration): Promise<void> {
        const result = this.api.metadataV1ObjectTypeViewsViewIdPut(appID, authToken, objectType, viewId, metadataValuesBatchSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_fields 
     * List the fields that can be accessed by a user
     * @param appID 
     * @param authToken 
     */
    public metadataV1UserFieldsGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<MetadataFieldsSchema>> {
        const result = this.api.metadataV1UserFieldsGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_fields 
     * List the fields that can be accessed by a user
     * @param appID 
     * @param authToken 
     */
    public metadataV1UserFieldsGet(appID: string, authToken: string, _options?: Configuration): Promise<MetadataFieldsSchema> {
        const result = this.api.metadataV1UserFieldsGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_views 
     * List the views defined in the system
     * @param appID 
     * @param authToken 
     */
    public metadataV1ViewsGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<MetadataViewsSchema>> {
        const result = this.api.metadataV1ViewsGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_views 
     * List the views defined in the system
     * @param appID 
     * @param authToken 
     */
    public metadataV1ViewsGet(appID: string, authToken: string, _options?: Configuration): Promise<MetadataViewsSchema> {
        const result = this.api.metadataV1ViewsGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_views 
     * Create a new view
     * @param appID 
     * @param authToken 
     * @param metadataViewInputSchema body
     */
    public metadataV1ViewsPostWithHttpInfo(appID: string, authToken: string, metadataViewInputSchema: MetadataViewInputSchema, _options?: Configuration): Promise<HttpInfo<MetadataViewSchema>> {
        const result = this.api.metadataV1ViewsPostWithHttpInfo(appID, authToken, metadataViewInputSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_views 
     * Create a new view
     * @param appID 
     * @param authToken 
     * @param metadataViewInputSchema body
     */
    public metadataV1ViewsPost(appID: string, authToken: string, metadataViewInputSchema: MetadataViewInputSchema, _options?: Configuration): Promise<MetadataViewSchema> {
        const result = this.api.metadataV1ViewsPost(appID, authToken, metadataViewInputSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_metadata_views 
     * Delete a particular view by id
     * @param appID 
     * @param authToken 
     * @param viewId 
     */
    public metadataV1ViewsViewIdDeleteWithHttpInfo(appID: string, authToken: string, viewId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.metadataV1ViewsViewIdDeleteWithHttpInfo(appID, authToken, viewId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_metadata_views 
     * Delete a particular view by id
     * @param appID 
     * @param authToken 
     * @param viewId 
     */
    public metadataV1ViewsViewIdDelete(appID: string, authToken: string, viewId: string, _options?: Configuration): Promise<void> {
        const result = this.api.metadataV1ViewsViewIdDelete(appID, authToken, viewId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_views 
     * Returns a particular view by id
     * @param appID 
     * @param authToken 
     * @param viewId 
     * @param mergeFields 
     */
    public metadataV1ViewsViewIdGetWithHttpInfo(appID: string, authToken: string, viewId: string, mergeFields?: boolean, _options?: Configuration): Promise<HttpInfo<MetadataViewSchema>> {
        const result = this.api.metadataV1ViewsViewIdGetWithHttpInfo(appID, authToken, viewId, mergeFields, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_views 
     * Returns a particular view by id
     * @param appID 
     * @param authToken 
     * @param viewId 
     * @param mergeFields 
     */
    public metadataV1ViewsViewIdGet(appID: string, authToken: string, viewId: string, mergeFields?: boolean, _options?: Configuration): Promise<MetadataViewSchema> {
        const result = this.api.metadataV1ViewsViewIdGet(appID, authToken, viewId, mergeFields, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_views 
     * Update view
     * @param appID 
     * @param authToken 
     * @param viewId 
     * @param metadataViewInputSchema body
     */
    public metadataV1ViewsViewIdPatchWithHttpInfo(appID: string, authToken: string, viewId: string, metadataViewInputSchema: MetadataViewInputSchema, _options?: Configuration): Promise<HttpInfo<MetadataViewSchema>> {
        const result = this.api.metadataV1ViewsViewIdPatchWithHttpInfo(appID, authToken, viewId, metadataViewInputSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_views 
     * Update view
     * @param appID 
     * @param authToken 
     * @param viewId 
     * @param metadataViewInputSchema body
     */
    public metadataV1ViewsViewIdPatch(appID: string, authToken: string, viewId: string, metadataViewInputSchema: MetadataViewInputSchema, _options?: Configuration): Promise<MetadataViewSchema> {
        const result = this.api.metadataV1ViewsViewIdPatch(appID, authToken, viewId, metadataViewInputSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_views 
     * Update view
     * @param appID 
     * @param authToken 
     * @param viewId 
     * @param metadataViewInputSchema body
     */
    public metadataV1ViewsViewIdPutWithHttpInfo(appID: string, authToken: string, viewId: string, metadataViewInputSchema: MetadataViewInputSchema, _options?: Configuration): Promise<HttpInfo<MetadataViewSchema>> {
        const result = this.api.metadataV1ViewsViewIdPutWithHttpInfo(appID, authToken, viewId, metadataViewInputSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_views 
     * Update view
     * @param appID 
     * @param authToken 
     * @param viewId 
     * @param metadataViewInputSchema body
     */
    public metadataV1ViewsViewIdPut(appID: string, authToken: string, viewId: string, metadataViewInputSchema: MetadataViewInputSchema, _options?: Configuration): Promise<MetadataViewSchema> {
        const result = this.api.metadataV1ViewsViewIdPut(appID, authToken, viewId, metadataViewInputSchema, _options);
        return result.toPromise();
    }


}



import { ObservableNotificationsApi } from './ObservableAPI';

import { NotificationsApiRequestFactory, NotificationsApiResponseProcessor} from "../apis/NotificationsApi";
export class PromiseNotificationsApi {
    private api: ObservableNotificationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NotificationsApiRequestFactory,
        responseProcessor?: NotificationsApiResponseProcessor
    ) {
        this.api = new ObservableNotificationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     *  Required roles:  - can_read_webhooks 
     * Get all webhooks
     * @param authToken 
     * @param appID 
     */
    public notificationsV1WebhooksGetWithHttpInfo(authToken: string, appID: string, _options?: Configuration): Promise<HttpInfo<WebhooksSchema>> {
        const result = this.api.notificationsV1WebhooksGetWithHttpInfo(authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_webhooks 
     * Get all webhooks
     * @param authToken 
     * @param appID 
     */
    public notificationsV1WebhooksGet(authToken: string, appID: string, _options?: Configuration): Promise<WebhooksSchema> {
        const result = this.api.notificationsV1WebhooksGet(authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_webhooks 
     * Create a new webhook
     * @param authToken 
     * @param appID 
     * @param webhookCreateSchema body
     */
    public notificationsV1WebhooksPostWithHttpInfo(authToken: string, appID: string, webhookCreateSchema: WebhookCreateSchema, _options?: Configuration): Promise<HttpInfo<WebhookSchema>> {
        const result = this.api.notificationsV1WebhooksPostWithHttpInfo(authToken, appID, webhookCreateSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_webhooks 
     * Create a new webhook
     * @param authToken 
     * @param appID 
     * @param webhookCreateSchema body
     */
    public notificationsV1WebhooksPost(authToken: string, appID: string, webhookCreateSchema: WebhookCreateSchema, _options?: Configuration): Promise<WebhookSchema> {
        const result = this.api.notificationsV1WebhooksPost(authToken, appID, webhookCreateSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_webhooks 
     * Delete a webhook
     * @param authToken 
     * @param appID 
     * @param webhookId 
     */
    public notificationsV1WebhooksWebhookIdDeleteWithHttpInfo(authToken: string, appID: string, webhookId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.notificationsV1WebhooksWebhookIdDeleteWithHttpInfo(authToken, appID, webhookId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_webhooks 
     * Delete a webhook
     * @param authToken 
     * @param appID 
     * @param webhookId 
     */
    public notificationsV1WebhooksWebhookIdDelete(authToken: string, appID: string, webhookId: string, _options?: Configuration): Promise<void> {
        const result = this.api.notificationsV1WebhooksWebhookIdDelete(authToken, appID, webhookId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_webhooks 
     * Get a webhook definition
     * @param authToken 
     * @param appID 
     * @param webhookId 
     */
    public notificationsV1WebhooksWebhookIdGetWithHttpInfo(authToken: string, appID: string, webhookId: string, _options?: Configuration): Promise<HttpInfo<WebhookSchema>> {
        const result = this.api.notificationsV1WebhooksWebhookIdGetWithHttpInfo(authToken, appID, webhookId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_webhooks 
     * Get a webhook definition
     * @param authToken 
     * @param appID 
     * @param webhookId 
     */
    public notificationsV1WebhooksWebhookIdGet(authToken: string, appID: string, webhookId: string, _options?: Configuration): Promise<WebhookSchema> {
        const result = this.api.notificationsV1WebhooksWebhookIdGet(authToken, appID, webhookId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_webhooks 
     * Update a webhook
     * @param authToken 
     * @param appID 
     * @param webhookId 
     * @param webhookCreateSchema body
     */
    public notificationsV1WebhooksWebhookIdPutWithHttpInfo(authToken: string, appID: string, webhookId: string, webhookCreateSchema: WebhookCreateSchema, _options?: Configuration): Promise<HttpInfo<WebhookSchema>> {
        const result = this.api.notificationsV1WebhooksWebhookIdPutWithHttpInfo(authToken, appID, webhookId, webhookCreateSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_webhooks 
     * Update a webhook
     * @param authToken 
     * @param appID 
     * @param webhookId 
     * @param webhookCreateSchema body
     */
    public notificationsV1WebhooksWebhookIdPut(authToken: string, appID: string, webhookId: string, webhookCreateSchema: WebhookCreateSchema, _options?: Configuration): Promise<WebhookSchema> {
        const result = this.api.notificationsV1WebhooksWebhookIdPut(authToken, appID, webhookId, webhookCreateSchema, _options);
        return result.toPromise();
    }


}



import { ObservableSearchApi } from './ObservableAPI';

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class PromiseSearchApi {
    private api: ObservableSearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Returns the discovery entities that are used to build the discovery view.
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryDefaultEntitiesAdminGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<DiscoveryEntitiesSchema>> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesAdminGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Returns the discovery entities that are used to build the discovery view.
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryDefaultEntitiesAdminGet(appID: string, authToken: string, _options?: Configuration): Promise<DiscoveryEntitiesSchema> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesAdminGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_discovery_entities 
     * Delete a discovery entity by id
     * @param appID 
     * @param authToken 
     * @param entityId 
     */
    public searchV1DiscoveryDefaultEntitiesEntityIdDeleteWithHttpInfo(appID: string, authToken: string, entityId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesEntityIdDeleteWithHttpInfo(appID, authToken, entityId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_discovery_entities 
     * Delete a discovery entity by id
     * @param appID 
     * @param authToken 
     * @param entityId 
     */
    public searchV1DiscoveryDefaultEntitiesEntityIdDelete(appID: string, authToken: string, entityId: string, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesEntityIdDelete(appID, authToken, entityId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_discovery_entities 
     * Returns discovery entity
     * @param appID 
     * @param authToken 
     * @param entityId 
     */
    public searchV1DiscoveryDefaultEntitiesEntityIdGetWithHttpInfo(appID: string, authToken: string, entityId: string, _options?: Configuration): Promise<HttpInfo<DiscoveryEntitySchema>> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesEntityIdGetWithHttpInfo(appID, authToken, entityId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_discovery_entities 
     * Returns discovery entity
     * @param appID 
     * @param authToken 
     * @param entityId 
     */
    public searchV1DiscoveryDefaultEntitiesEntityIdGet(appID: string, authToken: string, entityId: string, _options?: Configuration): Promise<DiscoveryEntitySchema> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesEntityIdGet(appID, authToken, entityId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Update a discovery entity by id
     * @param appID 
     * @param authToken 
     * @param entityId 
     * @param discoveryEntitySchema body
     */
    public searchV1DiscoveryDefaultEntitiesEntityIdPatchWithHttpInfo(appID: string, authToken: string, entityId: string, discoveryEntitySchema: DiscoveryEntitySchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesEntityIdPatchWithHttpInfo(appID, authToken, entityId, discoveryEntitySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Update a discovery entity by id
     * @param appID 
     * @param authToken 
     * @param entityId 
     * @param discoveryEntitySchema body
     */
    public searchV1DiscoveryDefaultEntitiesEntityIdPatch(appID: string, authToken: string, entityId: string, discoveryEntitySchema: DiscoveryEntitySchema, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesEntityIdPatch(appID, authToken, entityId, discoveryEntitySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Update a discovery entity by id
     * @param appID 
     * @param authToken 
     * @param entityId 
     * @param discoveryEntitySchema body
     */
    public searchV1DiscoveryDefaultEntitiesEntityIdPutWithHttpInfo(appID: string, authToken: string, entityId: string, discoveryEntitySchema: DiscoveryEntitySchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesEntityIdPutWithHttpInfo(appID, authToken, entityId, discoveryEntitySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Update a discovery entity by id
     * @param appID 
     * @param authToken 
     * @param entityId 
     * @param discoveryEntitySchema body
     */
    public searchV1DiscoveryDefaultEntitiesEntityIdPut(appID: string, authToken: string, entityId: string, discoveryEntitySchema: DiscoveryEntitySchema, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesEntityIdPut(appID, authToken, entityId, discoveryEntitySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_discovery_entities 
     * Returns the discovery entities that are used to build the discovery view.
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryDefaultEntitiesGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<DiscoveryEntitiesSchema>> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_discovery_entities 
     * Returns the discovery entities that are used to build the discovery view.
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryDefaultEntitiesGet(appID: string, authToken: string, _options?: Configuration): Promise<DiscoveryEntitiesSchema> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * <br/>This creates an entry for the discovery view to show collections and saved searches.<br/>Object Type should be one of COLLECTION, SAVED_SEARCH, ASSET, RECOMMENDATION or TRENDING<br/>Object ID is only needed in the case of COLLECTION, SAVED_SEARCH or ASSET<br/>metadata is for user defined extra data.<br/><br/>This creates an entry for the discovery view to show collections and saved searches.<br/>Object Type should be one of COLLECTION, SAVED_SEARCH, ASSET, RECOMMENDATION or TRENDING<br/>Object ID is only needed in the case of COLLECTION, SAVED_SEARCH or ASSET<br/>metadata is for user defined extra data.<br/> Required roles:  - can_write_discovery_entities 
     * Adds a new discovery entity.
     * @param appID 
     * @param authToken 
     * @param discoveryEntitySchema body
     */
    public searchV1DiscoveryDefaultEntitiesPostWithHttpInfo(appID: string, authToken: string, discoveryEntitySchema: DiscoveryEntitySchema, _options?: Configuration): Promise<HttpInfo<DiscoveryEntitySchema>> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesPostWithHttpInfo(appID, authToken, discoveryEntitySchema, _options);
        return result.toPromise();
    }

    /**
     * <br/>This creates an entry for the discovery view to show collections and saved searches.<br/>Object Type should be one of COLLECTION, SAVED_SEARCH, ASSET, RECOMMENDATION or TRENDING<br/>Object ID is only needed in the case of COLLECTION, SAVED_SEARCH or ASSET<br/>metadata is for user defined extra data.<br/><br/>This creates an entry for the discovery view to show collections and saved searches.<br/>Object Type should be one of COLLECTION, SAVED_SEARCH, ASSET, RECOMMENDATION or TRENDING<br/>Object ID is only needed in the case of COLLECTION, SAVED_SEARCH or ASSET<br/>metadata is for user defined extra data.<br/> Required roles:  - can_write_discovery_entities 
     * Adds a new discovery entity.
     * @param appID 
     * @param authToken 
     * @param discoveryEntitySchema body
     */
    public searchV1DiscoveryDefaultEntitiesPost(appID: string, authToken: string, discoveryEntitySchema: DiscoveryEntitySchema, _options?: Configuration): Promise<DiscoveryEntitySchema> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesPost(appID, authToken, discoveryEntitySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Update default discovery view
     * @param appID 
     * @param authToken 
     * @param discoveryViewSettingsSchema body
     */
    public searchV1DiscoveryDefaultPutWithHttpInfo(appID: string, authToken: string, discoveryViewSettingsSchema: DiscoveryViewSettingsSchema, _options?: Configuration): Promise<HttpInfo<DiscoveryViewSettingsSchema>> {
        const result = this.api.searchV1DiscoveryDefaultPutWithHttpInfo(appID, authToken, discoveryViewSettingsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Update default discovery view
     * @param appID 
     * @param authToken 
     * @param discoveryViewSettingsSchema body
     */
    public searchV1DiscoveryDefaultPut(appID: string, authToken: string, discoveryViewSettingsSchema: DiscoveryViewSettingsSchema, _options?: Configuration): Promise<DiscoveryViewSettingsSchema> {
        const result = this.api.searchV1DiscoveryDefaultPut(appID, authToken, discoveryViewSettingsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Update a discovery entity by object\'s type and id
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param discoveryEntitySchema body
     */
    public searchV1DiscoveryEntitiesObjectTypeObjectIdPatchWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, discoveryEntitySchema: DiscoveryEntitySchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1DiscoveryEntitiesObjectTypeObjectIdPatchWithHttpInfo(appID, authToken, objectType, objectId, discoveryEntitySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Update a discovery entity by object\'s type and id
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param discoveryEntitySchema body
     */
    public searchV1DiscoveryEntitiesObjectTypeObjectIdPatch(appID: string, authToken: string, objectType: string, objectId: string, discoveryEntitySchema: DiscoveryEntitySchema, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1DiscoveryEntitiesObjectTypeObjectIdPatch(appID, authToken, objectType, objectId, discoveryEntitySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Update a discovery entity by object\'s type and id
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param discoveryEntitySchema body
     */
    public searchV1DiscoveryEntitiesObjectTypeObjectIdPutWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, discoveryEntitySchema: DiscoveryEntitySchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1DiscoveryEntitiesObjectTypeObjectIdPutWithHttpInfo(appID, authToken, objectType, objectId, discoveryEntitySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Update a discovery entity by object\'s type and id
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     * @param discoveryEntitySchema body
     */
    public searchV1DiscoveryEntitiesObjectTypeObjectIdPut(appID: string, authToken: string, objectType: string, objectId: string, discoveryEntitySchema: DiscoveryEntitySchema, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1DiscoveryEntitiesObjectTypeObjectIdPut(appID, authToken, objectType, objectId, discoveryEntitySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_search_history 
     * Returns the current search history
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchHistoryGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<SearchHistoryListSchema>> {
        const result = this.api.searchV1SearchHistoryGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_search_history 
     * Returns the current search history
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchHistoryGet(appID: string, authToken: string, _options?: Configuration): Promise<SearchHistoryListSchema> {
        const result = this.api.searchV1SearchHistoryGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_search_history 
     * Delete a search from history by its id
     * @param appID 
     * @param authToken 
     * @param searchHistoryId 
     */
    public searchV1SearchHistorySearchHistoryIdDeleteWithHttpInfo(appID: string, authToken: string, searchHistoryId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1SearchHistorySearchHistoryIdDeleteWithHttpInfo(appID, authToken, searchHistoryId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_search_history 
     * Delete a search from history by its id
     * @param appID 
     * @param authToken 
     * @param searchHistoryId 
     */
    public searchV1SearchHistorySearchHistoryIdDelete(appID: string, authToken: string, searchHistoryId: string, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1SearchHistorySearchHistoryIdDelete(appID, authToken, searchHistoryId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_search_history 
     * Returns results of search history
     * @param appID 
     * @param authToken 
     * @param searchHistoryId 
     */
    public searchV1SearchHistorySearchHistoryIdGetWithHttpInfo(appID: string, authToken: string, searchHistoryId: string, _options?: Configuration): Promise<HttpInfo<SearchDocumentsSchema>> {
        const result = this.api.searchV1SearchHistorySearchHistoryIdGetWithHttpInfo(appID, authToken, searchHistoryId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_search_history 
     * Returns results of search history
     * @param appID 
     * @param authToken 
     * @param searchHistoryId 
     */
    public searchV1SearchHistorySearchHistoryIdGet(appID: string, authToken: string, searchHistoryId: string, _options?: Configuration): Promise<SearchDocumentsSchema> {
        const result = this.api.searchV1SearchHistorySearchHistoryIdGet(appID, authToken, searchHistoryId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_search 
     * Search
     * @param appID 
     * @param authToken 
     * @param searchCriteriaSchema body
     * @param perPage The number of documents for each page
     * @param page Which page number to fetch
     * @param scroll If true passed then uses scroll pagination instead of default one (Deprecated, user search_after body parameter instead)
     * @param scrollId In order to get next batch of results using scroll pagination the scroll_id is required
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param generateSignedDownloadUrl Set to true if you also want the file download URLs generated
     * @param saveSearchHistory Set to false if you don\&#39;t want to save the search to the history
     */
    public searchV1SearchPostWithHttpInfo(appID: string, authToken: string, searchCriteriaSchema: SearchCriteriaSchema, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, generateSignedUrl?: boolean, generateSignedDownloadUrl?: boolean, saveSearchHistory?: boolean, _options?: Configuration): Promise<HttpInfo<SearchDocumentsSchema>> {
        const result = this.api.searchV1SearchPostWithHttpInfo(appID, authToken, searchCriteriaSchema, perPage, page, scroll, scrollId, generateSignedUrl, generateSignedDownloadUrl, saveSearchHistory, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_search 
     * Search
     * @param appID 
     * @param authToken 
     * @param searchCriteriaSchema body
     * @param perPage The number of documents for each page
     * @param page Which page number to fetch
     * @param scroll If true passed then uses scroll pagination instead of default one (Deprecated, user search_after body parameter instead)
     * @param scrollId In order to get next batch of results using scroll pagination the scroll_id is required
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param generateSignedDownloadUrl Set to true if you also want the file download URLs generated
     * @param saveSearchHistory Set to false if you don\&#39;t want to save the search to the history
     */
    public searchV1SearchPost(appID: string, authToken: string, searchCriteriaSchema: SearchCriteriaSchema, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, generateSignedUrl?: boolean, generateSignedDownloadUrl?: boolean, saveSearchHistory?: boolean, _options?: Configuration): Promise<SearchDocumentsSchema> {
        const result = this.api.searchV1SearchPost(appID, authToken, searchCriteriaSchema, perPage, page, scroll, scrollId, generateSignedUrl, generateSignedDownloadUrl, saveSearchHistory, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_saved_searches 
     * Returns list of saved searches
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param scroll If true passed then uses scroll pagination instead of default one
     * @param scrollId In order to get next batch of results using scroll pagination the scroll_id is required
     * @param sort A comma separated list of fieldnames with order. For example - name,asc;group_id,desc
     * @param groupId Group ID
     * @param ids Filter list of id:s (comma separated)
     * @param query Search using query
     */
    public searchV1SearchSavedGetWithHttpInfo(appID: string, authToken: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, sort?: string, groupId?: string, ids?: string, query?: string, _options?: Configuration): Promise<HttpInfo<SavedSearchesSchema>> {
        const result = this.api.searchV1SearchSavedGetWithHttpInfo(appID, authToken, perPage, page, scroll, scrollId, sort, groupId, ids, query, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_saved_searches 
     * Returns list of saved searches
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param scroll If true passed then uses scroll pagination instead of default one
     * @param scrollId In order to get next batch of results using scroll pagination the scroll_id is required
     * @param sort A comma separated list of fieldnames with order. For example - name,asc;group_id,desc
     * @param groupId Group ID
     * @param ids Filter list of id:s (comma separated)
     * @param query Search using query
     */
    public searchV1SearchSavedGet(appID: string, authToken: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, sort?: string, groupId?: string, ids?: string, query?: string, _options?: Configuration): Promise<SavedSearchesSchema> {
        const result = this.api.searchV1SearchSavedGet(appID, authToken, perPage, page, scroll, scrollId, sort, groupId, ids, query, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_saved_search_groups 
     * Delete a saved search group by it\'s id
     * @param appID 
     * @param authToken 
     * @param groupId 
     */
    public searchV1SearchSavedGroupGroupIdDeleteWithHttpInfo(appID: string, authToken: string, groupId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1SearchSavedGroupGroupIdDeleteWithHttpInfo(appID, authToken, groupId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_saved_search_groups 
     * Delete a saved search group by it\'s id
     * @param appID 
     * @param authToken 
     * @param groupId 
     */
    public searchV1SearchSavedGroupGroupIdDelete(appID: string, authToken: string, groupId: string, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1SearchSavedGroupGroupIdDelete(appID, authToken, groupId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_saved_searches 
     * Returns saved search group data
     * @param appID 
     * @param authToken 
     * @param groupId 
     */
    public searchV1SearchSavedGroupGroupIdGetWithHttpInfo(appID: string, authToken: string, groupId: string, _options?: Configuration): Promise<HttpInfo<SavedSearchGroupSchema>> {
        const result = this.api.searchV1SearchSavedGroupGroupIdGetWithHttpInfo(appID, authToken, groupId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_saved_searches 
     * Returns saved search group data
     * @param appID 
     * @param authToken 
     * @param groupId 
     */
    public searchV1SearchSavedGroupGroupIdGet(appID: string, authToken: string, groupId: string, _options?: Configuration): Promise<SavedSearchGroupSchema> {
        const result = this.api.searchV1SearchSavedGroupGroupIdGet(appID, authToken, groupId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_search_groups 
     * Update and return saved search group data
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param savedSearchGroupSchema body
     */
    public searchV1SearchSavedGroupGroupIdPatchWithHttpInfo(appID: string, authToken: string, groupId: string, savedSearchGroupSchema: SavedSearchGroupSchema, _options?: Configuration): Promise<HttpInfo<SavedSearchGroupSchema>> {
        const result = this.api.searchV1SearchSavedGroupGroupIdPatchWithHttpInfo(appID, authToken, groupId, savedSearchGroupSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_search_groups 
     * Update and return saved search group data
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param savedSearchGroupSchema body
     */
    public searchV1SearchSavedGroupGroupIdPatch(appID: string, authToken: string, groupId: string, savedSearchGroupSchema: SavedSearchGroupSchema, _options?: Configuration): Promise<SavedSearchGroupSchema> {
        const result = this.api.searchV1SearchSavedGroupGroupIdPatch(appID, authToken, groupId, savedSearchGroupSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_search_groups 
     * Update and return saved search group data
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param savedSearchGroupSchema body
     */
    public searchV1SearchSavedGroupGroupIdPutWithHttpInfo(appID: string, authToken: string, groupId: string, savedSearchGroupSchema: SavedSearchGroupSchema, _options?: Configuration): Promise<HttpInfo<SavedSearchGroupSchema>> {
        const result = this.api.searchV1SearchSavedGroupGroupIdPutWithHttpInfo(appID, authToken, groupId, savedSearchGroupSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_search_groups 
     * Update and return saved search group data
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param savedSearchGroupSchema body
     */
    public searchV1SearchSavedGroupGroupIdPut(appID: string, authToken: string, groupId: string, savedSearchGroupSchema: SavedSearchGroupSchema, _options?: Configuration): Promise<SavedSearchGroupSchema> {
        const result = this.api.searchV1SearchSavedGroupGroupIdPut(appID, authToken, groupId, savedSearchGroupSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_searches 
     * Delete saved search from search group
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param searchId 
     */
    public searchV1SearchSavedGroupGroupIdSearchSearchIdDeleteWithHttpInfo(appID: string, authToken: string, groupId: string, searchId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1SearchSavedGroupGroupIdSearchSearchIdDeleteWithHttpInfo(appID, authToken, groupId, searchId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_searches 
     * Delete saved search from search group
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param searchId 
     */
    public searchV1SearchSavedGroupGroupIdSearchSearchIdDelete(appID: string, authToken: string, groupId: string, searchId: string, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1SearchSavedGroupGroupIdSearchSearchIdDelete(appID, authToken, groupId, searchId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_searches 
     * Adds saved search to group
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param searchId 
     */
    public searchV1SearchSavedGroupGroupIdSearchSearchIdPostWithHttpInfo(appID: string, authToken: string, groupId: string, searchId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1SearchSavedGroupGroupIdSearchSearchIdPostWithHttpInfo(appID, authToken, groupId, searchId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_searches 
     * Adds saved search to group
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param searchId 
     */
    public searchV1SearchSavedGroupGroupIdSearchSearchIdPost(appID: string, authToken: string, groupId: string, searchId: string, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1SearchSavedGroupGroupIdSearchSearchIdPost(appID, authToken, groupId, searchId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_search_groups 
     * Create and return saved search group data
     * @param appID 
     * @param authToken 
     * @param savedSearchGroupSchema body
     */
    public searchV1SearchSavedGroupPostWithHttpInfo(appID: string, authToken: string, savedSearchGroupSchema: SavedSearchGroupSchema, _options?: Configuration): Promise<HttpInfo<SavedSearchGroupSchema>> {
        const result = this.api.searchV1SearchSavedGroupPostWithHttpInfo(appID, authToken, savedSearchGroupSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_search_groups 
     * Create and return saved search group data
     * @param appID 
     * @param authToken 
     * @param savedSearchGroupSchema body
     */
    public searchV1SearchSavedGroupPost(appID: string, authToken: string, savedSearchGroupSchema: SavedSearchGroupSchema, _options?: Configuration): Promise<SavedSearchGroupSchema> {
        const result = this.api.searchV1SearchSavedGroupPost(appID, authToken, savedSearchGroupSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_saved_searches 
     * Returns paginated list of search groups
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param ids A comma separated list of IDs. for example - 3c2db7d8-1f39-46e3-8c77-992101e5e616,683a2c63-63a0-42b0-aed8-5b62dedba840
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     */
    public searchV1SearchSavedGroupsGetWithHttpInfo(appID: string, authToken: string, perPage?: number, page?: number, ids?: string, sort?: string, _options?: Configuration): Promise<HttpInfo<SavedSearchGroupsSchema>> {
        const result = this.api.searchV1SearchSavedGroupsGetWithHttpInfo(appID, authToken, perPage, page, ids, sort, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_saved_searches 
     * Returns paginated list of search groups
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param ids A comma separated list of IDs. for example - 3c2db7d8-1f39-46e3-8c77-992101e5e616,683a2c63-63a0-42b0-aed8-5b62dedba840
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     */
    public searchV1SearchSavedGroupsGet(appID: string, authToken: string, perPage?: number, page?: number, ids?: string, sort?: string, _options?: Configuration): Promise<SavedSearchGroupsSchema> {
        const result = this.api.searchV1SearchSavedGroupsGet(appID, authToken, perPage, page, ids, sort, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_saved_searches 
     * Reindex a particular saved search group by id
     * @param appID 
     * @param authToken 
     * @param groupId 
     */
    public searchV1SearchSavedGroupsGroupIdReindexPostWithHttpInfo(appID: string, authToken: string, groupId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1SearchSavedGroupsGroupIdReindexPostWithHttpInfo(appID, authToken, groupId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_saved_searches 
     * Reindex a particular saved search group by id
     * @param appID 
     * @param authToken 
     * @param groupId 
     */
    public searchV1SearchSavedGroupsGroupIdReindexPost(appID: string, authToken: string, groupId: string, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1SearchSavedGroupsGroupIdReindexPost(appID, authToken, groupId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_searches 
     * Search, save and return result of this search
     * @param appID 
     * @param authToken 
     * @param savedSearchSchema body
     */
    public searchV1SearchSavedPostWithHttpInfo(appID: string, authToken: string, savedSearchSchema: SavedSearchSchema, _options?: Configuration): Promise<HttpInfo<SavedSearchSchema>> {
        const result = this.api.searchV1SearchSavedPostWithHttpInfo(appID, authToken, savedSearchSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_searches 
     * Search, save and return result of this search
     * @param appID 
     * @param authToken 
     * @param savedSearchSchema body
     */
    public searchV1SearchSavedPost(appID: string, authToken: string, savedSearchSchema: SavedSearchSchema, _options?: Configuration): Promise<SavedSearchSchema> {
        const result = this.api.searchV1SearchSavedPost(appID, authToken, savedSearchSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_saved_searches 
     * Delete a saved search by its id
     * @param appID 
     * @param authToken 
     * @param searchId 
     */
    public searchV1SearchSavedSearchIdDeleteWithHttpInfo(appID: string, authToken: string, searchId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1SearchSavedSearchIdDeleteWithHttpInfo(appID, authToken, searchId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_saved_searches 
     * Delete a saved search by its id
     * @param appID 
     * @param authToken 
     * @param searchId 
     */
    public searchV1SearchSavedSearchIdDelete(appID: string, authToken: string, searchId: string, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1SearchSavedSearchIdDelete(appID, authToken, searchId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_saved_searches 
     * Returns results of saved search
     * @param appID 
     * @param authToken 
     * @param searchId 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param includeResults Set to false if you only want the search definition
     */
    public searchV1SearchSavedSearchIdGetWithHttpInfo(appID: string, authToken: string, searchId: string, perPage?: number, page?: number, includeResults?: boolean, _options?: Configuration): Promise<HttpInfo<SavedSearchResultsSchema>> {
        const result = this.api.searchV1SearchSavedSearchIdGetWithHttpInfo(appID, authToken, searchId, perPage, page, includeResults, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_saved_searches 
     * Returns results of saved search
     * @param appID 
     * @param authToken 
     * @param searchId 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param includeResults Set to false if you only want the search definition
     */
    public searchV1SearchSavedSearchIdGet(appID: string, authToken: string, searchId: string, perPage?: number, page?: number, includeResults?: boolean, _options?: Configuration): Promise<SavedSearchResultsSchema> {
        const result = this.api.searchV1SearchSavedSearchIdGet(appID, authToken, searchId, perPage, page, includeResults, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_searches 
     * Search and save this search
     * @param appID 
     * @param authToken 
     * @param searchId 
     * @param savedSearchSchema body
     */
    public searchV1SearchSavedSearchIdPatchWithHttpInfo(appID: string, authToken: string, searchId: string, savedSearchSchema: SavedSearchSchema, _options?: Configuration): Promise<HttpInfo<SearchDocumentsSchema>> {
        const result = this.api.searchV1SearchSavedSearchIdPatchWithHttpInfo(appID, authToken, searchId, savedSearchSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_searches 
     * Search and save this search
     * @param appID 
     * @param authToken 
     * @param searchId 
     * @param savedSearchSchema body
     */
    public searchV1SearchSavedSearchIdPatch(appID: string, authToken: string, searchId: string, savedSearchSchema: SavedSearchSchema, _options?: Configuration): Promise<SearchDocumentsSchema> {
        const result = this.api.searchV1SearchSavedSearchIdPatch(appID, authToken, searchId, savedSearchSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_searches 
     * Search and save this search
     * @param appID 
     * @param authToken 
     * @param searchId 
     * @param savedSearchSchema body
     */
    public searchV1SearchSavedSearchIdPutWithHttpInfo(appID: string, authToken: string, searchId: string, savedSearchSchema: SavedSearchSchema, _options?: Configuration): Promise<HttpInfo<SearchDocumentsSchema>> {
        const result = this.api.searchV1SearchSavedSearchIdPutWithHttpInfo(appID, authToken, searchId, savedSearchSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_searches 
     * Search and save this search
     * @param appID 
     * @param authToken 
     * @param searchId 
     * @param savedSearchSchema body
     */
    public searchV1SearchSavedSearchIdPut(appID: string, authToken: string, searchId: string, savedSearchSchema: SavedSearchSchema, _options?: Configuration): Promise<SearchDocumentsSchema> {
        const result = this.api.searchV1SearchSavedSearchIdPut(appID, authToken, searchId, savedSearchSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_saved_searches 
     * Reindex a particular saved search by id
     * @param appID 
     * @param authToken 
     * @param searchId 
     * @param reindexSavedSearchSchema body
     */
    public searchV1SearchSavedSearchIdReindexPostWithHttpInfo(appID: string, authToken: string, searchId: string, reindexSavedSearchSchema: ReindexSavedSearchSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1SearchSavedSearchIdReindexPostWithHttpInfo(appID, authToken, searchId, reindexSavedSearchSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_saved_searches 
     * Reindex a particular saved search by id
     * @param appID 
     * @param authToken 
     * @param searchId 
     * @param reindexSavedSearchSchema body
     */
    public searchV1SearchSavedSearchIdReindexPost(appID: string, authToken: string, searchId: string, reindexSavedSearchSchema: ReindexSavedSearchSchema, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1SearchSavedSearchIdReindexPost(appID, authToken, searchId, reindexSavedSearchSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_search 
     * Returns search suggestions for a particular query.
     * @param appID 
     * @param authToken 
     * @param searchSuggestSchema body
     */
    public searchV1SearchSuggestPostWithHttpInfo(appID: string, authToken: string, searchSuggestSchema: SearchSuggestSchema, _options?: Configuration): Promise<HttpInfo<SearchSuggestsResponseSchema>> {
        const result = this.api.searchV1SearchSuggestPostWithHttpInfo(appID, authToken, searchSuggestSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_search 
     * Returns search suggestions for a particular query.
     * @param appID 
     * @param authToken 
     * @param searchSuggestSchema body
     */
    public searchV1SearchSuggestPost(appID: string, authToken: string, searchSuggestSchema: SearchSuggestSchema, _options?: Configuration): Promise<SearchSuggestsResponseSchema> {
        const result = this.api.searchV1SearchSuggestPost(appID, authToken, searchSuggestSchema, _options);
        return result.toPromise();
    }


}



import { ObservableSettingsApi } from './ObservableAPI';

import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";
export class PromiseSettingsApi {
    private api: ObservableSettingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SettingsApiRequestFactory,
        responseProcessor?: SettingsApiResponseProcessor
    ) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     *  Required roles:  - can_delete_cors_hosts 
     * Delete a particular CORS host by id
     * @param appID 
     * @param authToken 
     * @param corsHostId 
     */
    public settingsV1CorsHostsCorsHostIdDeleteWithHttpInfo(appID: string, authToken: string, corsHostId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.settingsV1CorsHostsCorsHostIdDeleteWithHttpInfo(appID, authToken, corsHostId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_cors_hosts 
     * Delete a particular CORS host by id
     * @param appID 
     * @param authToken 
     * @param corsHostId 
     */
    public settingsV1CorsHostsCorsHostIdDelete(appID: string, authToken: string, corsHostId: string, _options?: Configuration): Promise<void> {
        const result = this.api.settingsV1CorsHostsCorsHostIdDelete(appID, authToken, corsHostId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_cors_hosts 
     * Returns a particular CORS host by id
     * @param appID 
     * @param authToken 
     * @param corsHostId 
     */
    public settingsV1CorsHostsCorsHostIdGetWithHttpInfo(appID: string, authToken: string, corsHostId: string, _options?: Configuration): Promise<HttpInfo<CORSHostSchema>> {
        const result = this.api.settingsV1CorsHostsCorsHostIdGetWithHttpInfo(appID, authToken, corsHostId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_cors_hosts 
     * Returns a particular CORS host by id
     * @param appID 
     * @param authToken 
     * @param corsHostId 
     */
    public settingsV1CorsHostsCorsHostIdGet(appID: string, authToken: string, corsHostId: string, _options?: Configuration): Promise<CORSHostSchema> {
        const result = this.api.settingsV1CorsHostsCorsHostIdGet(appID, authToken, corsHostId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_cors_hosts 
     * List of CORS hosts
     * @param appID 
     * @param authToken 
     */
    public settingsV1CorsHostsGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<CORSHostsSchema>> {
        const result = this.api.settingsV1CorsHostsGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_cors_hosts 
     * List of CORS hosts
     * @param appID 
     * @param authToken 
     */
    public settingsV1CorsHostsGet(appID: string, authToken: string, _options?: Configuration): Promise<CORSHostsSchema> {
        const result = this.api.settingsV1CorsHostsGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_cors_hosts 
     * Create a new CORS host
     * @param appID 
     * @param authToken 
     * @param cORSHostSchema body
     */
    public settingsV1CorsHostsPostWithHttpInfo(appID: string, authToken: string, cORSHostSchema: CORSHostSchema, _options?: Configuration): Promise<HttpInfo<CORSHostSchema>> {
        const result = this.api.settingsV1CorsHostsPostWithHttpInfo(appID, authToken, cORSHostSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_cors_hosts 
     * Create a new CORS host
     * @param appID 
     * @param authToken 
     * @param cORSHostSchema body
     */
    public settingsV1CorsHostsPost(appID: string, authToken: string, cORSHostSchema: CORSHostSchema, _options?: Configuration): Promise<CORSHostSchema> {
        const result = this.api.settingsV1CorsHostsPost(appID, authToken, cORSHostSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete group settings
     * @param appID 
     * @param authToken 
     * @param groupId 
     */
    public settingsV1GroupGroupIdDeleteWithHttpInfo(appID: string, authToken: string, groupId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.settingsV1GroupGroupIdDeleteWithHttpInfo(appID, authToken, groupId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete group settings
     * @param appID 
     * @param authToken 
     * @param groupId 
     */
    public settingsV1GroupGroupIdDelete(appID: string, authToken: string, groupId: string, _options?: Configuration): Promise<void> {
        const result = this.api.settingsV1GroupGroupIdDelete(appID, authToken, groupId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Group settings
     * @param appID 
     * @param authToken 
     * @param groupId 
     */
    public settingsV1GroupGroupIdGetWithHttpInfo(appID: string, authToken: string, groupId: string, _options?: Configuration): Promise<HttpInfo<GroupSettingPublicSchema>> {
        const result = this.api.settingsV1GroupGroupIdGetWithHttpInfo(appID, authToken, groupId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Group settings
     * @param appID 
     * @param authToken 
     * @param groupId 
     */
    public settingsV1GroupGroupIdGet(appID: string, authToken: string, groupId: string, _options?: Configuration): Promise<GroupSettingPublicSchema> {
        const result = this.api.settingsV1GroupGroupIdGet(appID, authToken, groupId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change group settings
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param groupSettingPublicSchema body
     */
    public settingsV1GroupGroupIdPatchWithHttpInfo(appID: string, authToken: string, groupId: string, groupSettingPublicSchema: GroupSettingPublicSchema, _options?: Configuration): Promise<HttpInfo<GroupSettingPublicSchema>> {
        const result = this.api.settingsV1GroupGroupIdPatchWithHttpInfo(appID, authToken, groupId, groupSettingPublicSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change group settings
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param groupSettingPublicSchema body
     */
    public settingsV1GroupGroupIdPatch(appID: string, authToken: string, groupId: string, groupSettingPublicSchema: GroupSettingPublicSchema, _options?: Configuration): Promise<GroupSettingPublicSchema> {
        const result = this.api.settingsV1GroupGroupIdPatch(appID, authToken, groupId, groupSettingPublicSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change group settings
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param groupSettingPublicSchema body
     */
    public settingsV1GroupGroupIdPutWithHttpInfo(appID: string, authToken: string, groupId: string, groupSettingPublicSchema: GroupSettingPublicSchema, _options?: Configuration): Promise<HttpInfo<GroupSettingPublicSchema>> {
        const result = this.api.settingsV1GroupGroupIdPutWithHttpInfo(appID, authToken, groupId, groupSettingPublicSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change group settings
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param groupSettingPublicSchema body
     */
    public settingsV1GroupGroupIdPut(appID: string, authToken: string, groupId: string, groupSettingPublicSchema: GroupSettingPublicSchema, _options?: Configuration): Promise<GroupSettingPublicSchema> {
        const result = this.api.settingsV1GroupGroupIdPut(appID, authToken, groupId, groupSettingPublicSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * List of settings
     * @param appID 
     * @param authToken 
     * @param realm 
     * @param page Which page number to fetch
     * @param perPage The number of items for each page
     */
    public settingsV1KubernetesRealmGetWithHttpInfo(appID: string, authToken: string, realm: string, page?: number, perPage?: number, _options?: Configuration): Promise<HttpInfo<KubernetesSettingSchema>> {
        const result = this.api.settingsV1KubernetesRealmGetWithHttpInfo(appID, authToken, realm, page, perPage, _options);
        return result.toPromise();
    }

    /**
     * 
     * List of settings
     * @param appID 
     * @param authToken 
     * @param realm 
     * @param page Which page number to fetch
     * @param perPage The number of items for each page
     */
    public settingsV1KubernetesRealmGet(appID: string, authToken: string, realm: string, page?: number, perPage?: number, _options?: Configuration): Promise<KubernetesSettingSchema> {
        const result = this.api.settingsV1KubernetesRealmGet(appID, authToken, realm, page, perPage, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change settings
     * @param appID 
     * @param authToken 
     * @param realm 
     * @param kubernetesSettingSchema body
     */
    public settingsV1KubernetesRealmPatchWithHttpInfo(appID: string, authToken: string, realm: string, kubernetesSettingSchema: KubernetesSettingSchema, _options?: Configuration): Promise<HttpInfo<KubernetesSettingSchema>> {
        const result = this.api.settingsV1KubernetesRealmPatchWithHttpInfo(appID, authToken, realm, kubernetesSettingSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change settings
     * @param appID 
     * @param authToken 
     * @param realm 
     * @param kubernetesSettingSchema body
     */
    public settingsV1KubernetesRealmPatch(appID: string, authToken: string, realm: string, kubernetesSettingSchema: KubernetesSettingSchema, _options?: Configuration): Promise<KubernetesSettingSchema> {
        const result = this.api.settingsV1KubernetesRealmPatch(appID, authToken, realm, kubernetesSettingSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete a particular setting by name
     * @param appID 
     * @param authToken 
     * @param realm 
     * @param settingName 
     */
    public settingsV1KubernetesRealmSettingNameDeleteWithHttpInfo(appID: string, authToken: string, realm: string, settingName: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.settingsV1KubernetesRealmSettingNameDeleteWithHttpInfo(appID, authToken, realm, settingName, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete a particular setting by name
     * @param appID 
     * @param authToken 
     * @param realm 
     * @param settingName 
     */
    public settingsV1KubernetesRealmSettingNameDelete(appID: string, authToken: string, realm: string, settingName: string, _options?: Configuration): Promise<void> {
        const result = this.api.settingsV1KubernetesRealmSettingNameDelete(appID, authToken, realm, settingName, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns value for the setting
     * @param appID 
     * @param authToken 
     * @param realm 
     * @param settingName 
     */
    public settingsV1KubernetesRealmSettingNameGetWithHttpInfo(appID: string, authToken: string, realm: string, settingName: string, _options?: Configuration): Promise<HttpInfo<KubernetesSettingSchema>> {
        const result = this.api.settingsV1KubernetesRealmSettingNameGetWithHttpInfo(appID, authToken, realm, settingName, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns value for the setting
     * @param appID 
     * @param authToken 
     * @param realm 
     * @param settingName 
     */
    public settingsV1KubernetesRealmSettingNameGet(appID: string, authToken: string, realm: string, settingName: string, _options?: Configuration): Promise<KubernetesSettingSchema> {
        const result = this.api.settingsV1KubernetesRealmSettingNameGet(appID, authToken, realm, settingName, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get merged settings for current user
     * @param appID 
     * @param authToken 
     * @param ignoreLogoUrl 
     */
    public settingsV1MergedCurrentGetWithHttpInfo(appID: string, authToken: string, ignoreLogoUrl?: boolean, _options?: Configuration): Promise<HttpInfo<MergedSettingsSchema>> {
        const result = this.api.settingsV1MergedCurrentGetWithHttpInfo(appID, authToken, ignoreLogoUrl, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get merged settings for current user
     * @param appID 
     * @param authToken 
     * @param ignoreLogoUrl 
     */
    public settingsV1MergedCurrentGet(appID: string, authToken: string, ignoreLogoUrl?: boolean, _options?: Configuration): Promise<MergedSettingsSchema> {
        const result = this.api.settingsV1MergedCurrentGet(appID, authToken, ignoreLogoUrl, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get merged settings for a specific user
     * @param appID 
     * @param authToken 
     * @param userId 
     * @param ignoreLogoUrl 
     */
    public settingsV1MergedUserIdGetWithHttpInfo(appID: string, authToken: string, userId: string, ignoreLogoUrl?: boolean, _options?: Configuration): Promise<HttpInfo<MergedSettingsSchema>> {
        const result = this.api.settingsV1MergedUserIdGetWithHttpInfo(appID, authToken, userId, ignoreLogoUrl, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get merged settings for a specific user
     * @param appID 
     * @param authToken 
     * @param userId 
     * @param ignoreLogoUrl 
     */
    public settingsV1MergedUserIdGet(appID: string, authToken: string, userId: string, ignoreLogoUrl?: boolean, _options?: Configuration): Promise<MergedSettingsSchema> {
        const result = this.api.settingsV1MergedUserIdGet(appID, authToken, userId, ignoreLogoUrl, _options);
        return result.toPromise();
    }

    /**
     * 
     * System settings
     * @param appID 
     * @param authToken 
     * @param ignoreLogoUrl 
     */
    public settingsV1SystemCurrentGetWithHttpInfo(appID: string, authToken: string, ignoreLogoUrl?: boolean, _options?: Configuration): Promise<HttpInfo<SystemSettingPublicSchema>> {
        const result = this.api.settingsV1SystemCurrentGetWithHttpInfo(appID, authToken, ignoreLogoUrl, _options);
        return result.toPromise();
    }

    /**
     * 
     * System settings
     * @param appID 
     * @param authToken 
     * @param ignoreLogoUrl 
     */
    public settingsV1SystemCurrentGet(appID: string, authToken: string, ignoreLogoUrl?: boolean, _options?: Configuration): Promise<SystemSettingPublicSchema> {
        const result = this.api.settingsV1SystemCurrentGet(appID, authToken, ignoreLogoUrl, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change system settings
     * @param appID 
     * @param authToken 
     * @param systemSettingPublicSchema body
     */
    public settingsV1SystemCurrentPatchWithHttpInfo(appID: string, authToken: string, systemSettingPublicSchema: SystemSettingPublicSchema, _options?: Configuration): Promise<HttpInfo<SystemSettingPublicSchema>> {
        const result = this.api.settingsV1SystemCurrentPatchWithHttpInfo(appID, authToken, systemSettingPublicSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change system settings
     * @param appID 
     * @param authToken 
     * @param systemSettingPublicSchema body
     */
    public settingsV1SystemCurrentPatch(appID: string, authToken: string, systemSettingPublicSchema: SystemSettingPublicSchema, _options?: Configuration): Promise<SystemSettingPublicSchema> {
        const result = this.api.settingsV1SystemCurrentPatch(appID, authToken, systemSettingPublicSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change system settings
     * @param appID 
     * @param authToken 
     * @param systemSettingPublicSchema body
     */
    public settingsV1SystemCurrentPutWithHttpInfo(appID: string, authToken: string, systemSettingPublicSchema: SystemSettingPublicSchema, _options?: Configuration): Promise<HttpInfo<SystemSettingPublicSchema>> {
        const result = this.api.settingsV1SystemCurrentPutWithHttpInfo(appID, authToken, systemSettingPublicSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change system settings
     * @param appID 
     * @param authToken 
     * @param systemSettingPublicSchema body
     */
    public settingsV1SystemCurrentPut(appID: string, authToken: string, systemSettingPublicSchema: SystemSettingPublicSchema, _options?: Configuration): Promise<SystemSettingPublicSchema> {
        const result = this.api.settingsV1SystemCurrentPut(appID, authToken, systemSettingPublicSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * System settings
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     * @param ignoreLogoUrl 
     */
    public settingsV1SystemSystemDomainIdGetWithHttpInfo(appID: string, authToken: string, systemDomainId: string, ignoreLogoUrl?: boolean, _options?: Configuration): Promise<HttpInfo<SystemSettingPublicSchema>> {
        const result = this.api.settingsV1SystemSystemDomainIdGetWithHttpInfo(appID, authToken, systemDomainId, ignoreLogoUrl, _options);
        return result.toPromise();
    }

    /**
     * 
     * System settings
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     * @param ignoreLogoUrl 
     */
    public settingsV1SystemSystemDomainIdGet(appID: string, authToken: string, systemDomainId: string, ignoreLogoUrl?: boolean, _options?: Configuration): Promise<SystemSettingPublicSchema> {
        const result = this.api.settingsV1SystemSystemDomainIdGet(appID, authToken, systemDomainId, ignoreLogoUrl, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change system settings
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     * @param systemSettingPublicSchema body
     */
    public settingsV1SystemSystemDomainIdPatchWithHttpInfo(appID: string, authToken: string, systemDomainId: string, systemSettingPublicSchema: SystemSettingPublicSchema, _options?: Configuration): Promise<HttpInfo<SystemSettingPublicSchema>> {
        const result = this.api.settingsV1SystemSystemDomainIdPatchWithHttpInfo(appID, authToken, systemDomainId, systemSettingPublicSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change system settings
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     * @param systemSettingPublicSchema body
     */
    public settingsV1SystemSystemDomainIdPatch(appID: string, authToken: string, systemDomainId: string, systemSettingPublicSchema: SystemSettingPublicSchema, _options?: Configuration): Promise<SystemSettingPublicSchema> {
        const result = this.api.settingsV1SystemSystemDomainIdPatch(appID, authToken, systemDomainId, systemSettingPublicSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change system settings
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     * @param systemSettingPublicSchema body
     */
    public settingsV1SystemSystemDomainIdPutWithHttpInfo(appID: string, authToken: string, systemDomainId: string, systemSettingPublicSchema: SystemSettingPublicSchema, _options?: Configuration): Promise<HttpInfo<SystemSettingPublicSchema>> {
        const result = this.api.settingsV1SystemSystemDomainIdPutWithHttpInfo(appID, authToken, systemDomainId, systemSettingPublicSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change system settings
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     * @param systemSettingPublicSchema body
     */
    public settingsV1SystemSystemDomainIdPut(appID: string, authToken: string, systemDomainId: string, systemSettingPublicSchema: SystemSettingPublicSchema, _options?: Configuration): Promise<SystemSettingPublicSchema> {
        const result = this.api.settingsV1SystemSystemDomainIdPut(appID, authToken, systemDomainId, systemSettingPublicSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Remove attributes from user settings
     * @param appID 
     * @param authToken 
     * @param userSettingRemoveAttributesSchema body
     */
    public settingsV1UserAttributesDeleteWithHttpInfo(appID: string, authToken: string, userSettingRemoveAttributesSchema: UserSettingRemoveAttributesSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.settingsV1UserAttributesDeleteWithHttpInfo(appID, authToken, userSettingRemoveAttributesSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Remove attributes from user settings
     * @param appID 
     * @param authToken 
     * @param userSettingRemoveAttributesSchema body
     */
    public settingsV1UserAttributesDelete(appID: string, authToken: string, userSettingRemoveAttributesSchema: UserSettingRemoveAttributesSchema, _options?: Configuration): Promise<void> {
        const result = this.api.settingsV1UserAttributesDelete(appID, authToken, userSettingRemoveAttributesSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete user settings
     * @param appID 
     * @param authToken 
     * @param userId 
     */
    public settingsV1UserUserIdDeleteWithHttpInfo(appID: string, authToken: string, userId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.settingsV1UserUserIdDeleteWithHttpInfo(appID, authToken, userId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete user settings
     * @param appID 
     * @param authToken 
     * @param userId 
     */
    public settingsV1UserUserIdDelete(appID: string, authToken: string, userId: string, _options?: Configuration): Promise<void> {
        const result = this.api.settingsV1UserUserIdDelete(appID, authToken, userId, _options);
        return result.toPromise();
    }

    /**
     * 
     * User settings
     * @param appID 
     * @param authToken 
     * @param userId 
     */
    public settingsV1UserUserIdGetWithHttpInfo(appID: string, authToken: string, userId: string, _options?: Configuration): Promise<HttpInfo<UserSettingSchema>> {
        const result = this.api.settingsV1UserUserIdGetWithHttpInfo(appID, authToken, userId, _options);
        return result.toPromise();
    }

    /**
     * 
     * User settings
     * @param appID 
     * @param authToken 
     * @param userId 
     */
    public settingsV1UserUserIdGet(appID: string, authToken: string, userId: string, _options?: Configuration): Promise<UserSettingSchema> {
        const result = this.api.settingsV1UserUserIdGet(appID, authToken, userId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change user settings
     * @param appID 
     * @param authToken 
     * @param userId 
     * @param userSettingSchema body
     */
    public settingsV1UserUserIdPatchWithHttpInfo(appID: string, authToken: string, userId: string, userSettingSchema: UserSettingSchema, _options?: Configuration): Promise<HttpInfo<UserSettingSchema>> {
        const result = this.api.settingsV1UserUserIdPatchWithHttpInfo(appID, authToken, userId, userSettingSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change user settings
     * @param appID 
     * @param authToken 
     * @param userId 
     * @param userSettingSchema body
     */
    public settingsV1UserUserIdPatch(appID: string, authToken: string, userId: string, userSettingSchema: UserSettingSchema, _options?: Configuration): Promise<UserSettingSchema> {
        const result = this.api.settingsV1UserUserIdPatch(appID, authToken, userId, userSettingSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change user settings
     * @param appID 
     * @param authToken 
     * @param userId 
     * @param userSettingSchema body
     */
    public settingsV1UserUserIdPutWithHttpInfo(appID: string, authToken: string, userId: string, userSettingSchema: UserSettingSchema, _options?: Configuration): Promise<HttpInfo<UserSettingSchema>> {
        const result = this.api.settingsV1UserUserIdPutWithHttpInfo(appID, authToken, userId, userSettingSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change user settings
     * @param appID 
     * @param authToken 
     * @param userId 
     * @param userSettingSchema body
     */
    public settingsV1UserUserIdPut(appID: string, authToken: string, userId: string, userSettingSchema: UserSettingSchema, _options?: Configuration): Promise<UserSettingSchema> {
        const result = this.api.settingsV1UserUserIdPut(appID, authToken, userId, userSettingSchema, _options);
        return result.toPromise();
    }


}



import { ObservableStatsApi } from './ObservableAPI';

import { StatsApiRequestFactory, StatsApiResponseProcessor} from "../apis/StatsApi";
export class PromiseStatsApi {
    private api: ObservableStatsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StatsApiRequestFactory,
        responseProcessor?: StatsApiResponseProcessor
    ) {
        this.api = new ObservableStatsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns all asset usage
     * @param appID 
     * @param authToken 
     * @param period Period of stats (month or day)
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public statsV1AssetsByPeriodGetWithHttpInfo(appID: string, authToken: string, period: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<HttpInfo<AssetUsageSchema>> {
        const result = this.api.statsV1AssetsByPeriodGetWithHttpInfo(appID, authToken, period, fromDate, toDate, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns all asset usage
     * @param appID 
     * @param authToken 
     * @param period Period of stats (month or day)
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public statsV1AssetsByPeriodGet(appID: string, authToken: string, period: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<AssetUsageSchema> {
        const result = this.api.statsV1AssetsByPeriodGet(appID, authToken, period, fromDate, toDate, _options);
        return result.toPromise();
    }

    /**
     * <br/>system_domain_id will be automatically added when<br/>posting to this end point.
     * Sets asset usage.
     * @param appID 
     * @param authToken 
     * @param assetUsageSchema body
     */
    public statsV1AssetsPostWithHttpInfo(appID: string, authToken: string, assetUsageSchema: AssetUsageSchema, _options?: Configuration): Promise<HttpInfo<AssetUsageSchema>> {
        const result = this.api.statsV1AssetsPostWithHttpInfo(appID, authToken, assetUsageSchema, _options);
        return result.toPromise();
    }

    /**
     * <br/>system_domain_id will be automatically added when<br/>posting to this end point.
     * Sets asset usage.
     * @param appID 
     * @param authToken 
     * @param assetUsageSchema body
     */
    public statsV1AssetsPost(appID: string, authToken: string, assetUsageSchema: AssetUsageSchema, _options?: Configuration): Promise<AssetUsageSchema> {
        const result = this.api.statsV1AssetsPost(appID, authToken, assetUsageSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing receipt
     * @param appID 
     * @param authToken 
     * @param chargeId 
     */
    public statsV1BillingChargesChargeIdReceiptUrlGetWithHttpInfo(appID: string, authToken: string, chargeId: string, _options?: Configuration): Promise<HttpInfo<BillingReceiptSchema>> {
        const result = this.api.statsV1BillingChargesChargeIdReceiptUrlGetWithHttpInfo(appID, authToken, chargeId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing receipt
     * @param appID 
     * @param authToken 
     * @param chargeId 
     */
    public statsV1BillingChargesChargeIdReceiptUrlGet(appID: string, authToken: string, chargeId: string, _options?: Configuration): Promise<BillingReceiptSchema> {
        const result = this.api.statsV1BillingChargesChargeIdReceiptUrlGet(appID, authToken, chargeId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Add credits to an account
     * @param appID 
     * @param authToken 
     * @param billingCreditsSchema body
     */
    public statsV1BillingCreditsPostWithHttpInfo(appID: string, authToken: string, billingCreditsSchema: BillingCreditsSchema, _options?: Configuration): Promise<HttpInfo<BillingCreditsSchema>> {
        const result = this.api.statsV1BillingCreditsPostWithHttpInfo(appID, authToken, billingCreditsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Add credits to an account
     * @param appID 
     * @param authToken 
     * @param billingCreditsSchema body
     */
    public statsV1BillingCreditsPost(appID: string, authToken: string, billingCreditsSchema: BillingCreditsSchema, _options?: Configuration): Promise<BillingCreditsSchema> {
        const result = this.api.statsV1BillingCreditsPost(appID, authToken, billingCreditsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Checks the total price that needs to be paid including VAT if it\'s needed
     * @param appID 
     * @param authToken 
     * @param credits 
     */
    public statsV1BillingCreditsPriceGetWithHttpInfo(appID: string, authToken: string, credits: number, _options?: Configuration): Promise<HttpInfo<CreditsSchema>> {
        const result = this.api.statsV1BillingCreditsPriceGetWithHttpInfo(appID, authToken, credits, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Checks the total price that needs to be paid including VAT if it\'s needed
     * @param appID 
     * @param authToken 
     * @param credits 
     */
    public statsV1BillingCreditsPriceGet(appID: string, authToken: string, credits: number, _options?: Configuration): Promise<CreditsSchema> {
        const result = this.api.statsV1BillingCreditsPriceGet(appID, authToken, credits, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Verify status of add credits to an account
     * @param appID 
     * @param authToken 
     * @param billingCreditsVerifySchema body
     */
    public statsV1BillingCreditsVerifyPostWithHttpInfo(appID: string, authToken: string, billingCreditsVerifySchema: BillingCreditsVerifySchema, _options?: Configuration): Promise<HttpInfo<BillingCreditsVerifySchema>> {
        const result = this.api.statsV1BillingCreditsVerifyPostWithHttpInfo(appID, authToken, billingCreditsVerifySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Verify status of add credits to an account
     * @param appID 
     * @param authToken 
     * @param billingCreditsVerifySchema body
     */
    public statsV1BillingCreditsVerifyPost(appID: string, authToken: string, billingCreditsVerifySchema: BillingCreditsVerifySchema, _options?: Configuration): Promise<BillingCreditsVerifySchema> {
        const result = this.api.statsV1BillingCreditsVerifyPost(appID, authToken, billingCreditsVerifySchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Creates billing customer card
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingCustomerCardDeleteWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.statsV1BillingCustomerCardDeleteWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Creates billing customer card
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingCustomerCardDelete(appID: string, authToken: string, _options?: Configuration): Promise<void> {
        const result = this.api.statsV1BillingCustomerCardDelete(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Creates billing customer card
     * @param appID 
     * @param authToken 
     * @param billingCustomerCardSchema body
     */
    public statsV1BillingCustomerCardPostWithHttpInfo(appID: string, authToken: string, billingCustomerCardSchema: BillingCustomerCardSchema, _options?: Configuration): Promise<HttpInfo<BillingCustomerCardSchema>> {
        const result = this.api.statsV1BillingCustomerCardPostWithHttpInfo(appID, authToken, billingCustomerCardSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Creates billing customer card
     * @param appID 
     * @param authToken 
     * @param billingCustomerCardSchema body
     */
    public statsV1BillingCustomerCardPost(appID: string, authToken: string, billingCustomerCardSchema: BillingCustomerCardSchema, _options?: Configuration): Promise<BillingCustomerCardSchema> {
        const result = this.api.statsV1BillingCustomerCardPost(appID, authToken, billingCustomerCardSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing customer
     * @param appID 
     * @param authToken 
     * @param billingSchema body
     */
    public statsV1BillingCustomerGetWithHttpInfo(appID: string, authToken: string, billingSchema: BillingSchema, _options?: Configuration): Promise<HttpInfo<BillingSchema>> {
        const result = this.api.statsV1BillingCustomerGetWithHttpInfo(appID, authToken, billingSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing customer
     * @param appID 
     * @param authToken 
     * @param billingSchema body
     */
    public statsV1BillingCustomerGet(appID: string, authToken: string, billingSchema: BillingSchema, _options?: Configuration): Promise<BillingSchema> {
        const result = this.api.statsV1BillingCustomerGet(appID, authToken, billingSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Updates billing customer
     * @param appID 
     * @param authToken 
     * @param billingCustomerSchema body
     */
    public statsV1BillingCustomerPostWithHttpInfo(appID: string, authToken: string, billingCustomerSchema: BillingCustomerSchema, _options?: Configuration): Promise<HttpInfo<BillingCustomerSchema>> {
        const result = this.api.statsV1BillingCustomerPostWithHttpInfo(appID, authToken, billingCustomerSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Updates billing customer
     * @param appID 
     * @param authToken 
     * @param billingCustomerSchema body
     */
    public statsV1BillingCustomerPost(appID: string, authToken: string, billingCustomerSchema: BillingCustomerSchema, _options?: Configuration): Promise<BillingCustomerSchema> {
        const result = this.api.statsV1BillingCustomerPost(appID, authToken, billingCustomerSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns billing info
     * @param appID 
     * @param authToken 
     * @param fromDate Filter by from_date
     * @param toDate Filter by from_date
     * @param perPage The number of items for each page
     * @param lastId ID of a last file on previous page
     */
    public statsV1BillingGetWithHttpInfo(appID: string, authToken: string, fromDate?: string, toDate?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<BillingsSchema>> {
        const result = this.api.statsV1BillingGetWithHttpInfo(appID, authToken, fromDate, toDate, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns billing info
     * @param appID 
     * @param authToken 
     * @param fromDate Filter by from_date
     * @param toDate Filter by from_date
     * @param perPage The number of items for each page
     * @param lastId ID of a last file on previous page
     */
    public statsV1BillingGet(appID: string, authToken: string, fromDate?: string, toDate?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<BillingsSchema> {
        const result = this.api.statsV1BillingGet(appID, authToken, fromDate, toDate, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing invoices
     * @param appID 
     * @param authToken 
     * @param startingAfter 
     * @param limit 
     */
    public statsV1BillingInvoicesGetWithHttpInfo(appID: string, authToken: string, startingAfter?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.statsV1BillingInvoicesGetWithHttpInfo(appID, authToken, startingAfter, limit, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing invoices
     * @param appID 
     * @param authToken 
     * @param startingAfter 
     * @param limit 
     */
    public statsV1BillingInvoicesGet(appID: string, authToken: string, startingAfter?: string, limit?: number, _options?: Configuration): Promise<void> {
        const result = this.api.statsV1BillingInvoicesGet(appID, authToken, startingAfter, limit, _options);
        return result.toPromise();
    }

    /**
     * 
     * Updates Billing (Requires super admin access).
     * @param appID 
     * @param authToken 
     * @param billingSchema body
     */
    public statsV1BillingPostWithHttpInfo(appID: string, authToken: string, billingSchema: BillingSchema, _options?: Configuration): Promise<HttpInfo<BillingSchema>> {
        const result = this.api.statsV1BillingPostWithHttpInfo(appID, authToken, billingSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Updates Billing (Requires super admin access).
     * @param appID 
     * @param authToken 
     * @param billingSchema body
     */
    public statsV1BillingPost(appID: string, authToken: string, billingSchema: BillingSchema, _options?: Configuration): Promise<BillingSchema> {
        const result = this.api.statsV1BillingPost(appID, authToken, billingSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get All Price Lists
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingPriceListsGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<PricesSchema>> {
        const result = this.api.statsV1BillingPriceListsGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get All Price Lists
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingPriceListsGet(appID: string, authToken: string, _options?: Configuration): Promise<PricesSchema> {
        const result = this.api.statsV1BillingPriceListsGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete a Price list
     * @param appID 
     * @param authToken 
     * @param name 
     * @param currency 
     */
    public statsV1BillingPriceListsNameCurrencyDeleteWithHttpInfo(appID: string, authToken: string, name: string, currency: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.statsV1BillingPriceListsNameCurrencyDeleteWithHttpInfo(appID, authToken, name, currency, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete a Price list
     * @param appID 
     * @param authToken 
     * @param name 
     * @param currency 
     */
    public statsV1BillingPriceListsNameCurrencyDelete(appID: string, authToken: string, name: string, currency: string, _options?: Configuration): Promise<void> {
        const result = this.api.statsV1BillingPriceListsNameCurrencyDelete(appID, authToken, name, currency, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get a Price List
     * @param appID 
     * @param authToken 
     * @param name 
     * @param currency 
     */
    public statsV1BillingPriceListsNameCurrencyGetWithHttpInfo(appID: string, authToken: string, name: string, currency: string, _options?: Configuration): Promise<HttpInfo<PriceSchema>> {
        const result = this.api.statsV1BillingPriceListsNameCurrencyGetWithHttpInfo(appID, authToken, name, currency, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get a Price List
     * @param appID 
     * @param authToken 
     * @param name 
     * @param currency 
     */
    public statsV1BillingPriceListsNameCurrencyGet(appID: string, authToken: string, name: string, currency: string, _options?: Configuration): Promise<PriceSchema> {
        const result = this.api.statsV1BillingPriceListsNameCurrencyGet(appID, authToken, name, currency, _options);
        return result.toPromise();
    }

    /**
     * 
     * Creates or updates a Price List
     * @param appID 
     * @param authToken 
     * @param priceSchema body
     */
    public statsV1BillingPriceListsPutWithHttpInfo(appID: string, authToken: string, priceSchema: PriceSchema, _options?: Configuration): Promise<HttpInfo<PriceSchema>> {
        const result = this.api.statsV1BillingPriceListsPutWithHttpInfo(appID, authToken, priceSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Creates or updates a Price List
     * @param appID 
     * @param authToken 
     * @param priceSchema body
     */
    public statsV1BillingPriceListsPut(appID: string, authToken: string, priceSchema: PriceSchema, _options?: Configuration): Promise<PriceSchema> {
        const result = this.api.statsV1BillingPriceListsPut(appID, authToken, priceSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Updates Billing Recipients
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingRecipientsGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<BillingRecipientsSchema>> {
        const result = this.api.statsV1BillingRecipientsGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Updates Billing Recipients
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingRecipientsGet(appID: string, authToken: string, _options?: Configuration): Promise<BillingRecipientsSchema> {
        const result = this.api.statsV1BillingRecipientsGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Updates Billing Recipients
     * @param appID 
     * @param authToken 
     * @param billingRecipientsSchema body
     */
    public statsV1BillingRecipientsPutWithHttpInfo(appID: string, authToken: string, billingRecipientsSchema: BillingRecipientsSchema, _options?: Configuration): Promise<HttpInfo<BillingRecipientsSchema>> {
        const result = this.api.statsV1BillingRecipientsPutWithHttpInfo(appID, authToken, billingRecipientsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Updates Billing Recipients
     * @param appID 
     * @param authToken 
     * @param billingRecipientsSchema body
     */
    public statsV1BillingRecipientsPut(appID: string, authToken: string, billingRecipientsSchema: BillingRecipientsSchema, _options?: Configuration): Promise<BillingRecipientsSchema> {
        const result = this.api.statsV1BillingRecipientsPut(appID, authToken, billingRecipientsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Updates Billing Settings
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingSettingsGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<BillingSettingsSchema>> {
        const result = this.api.statsV1BillingSettingsGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Updates Billing Settings
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingSettingsGet(appID: string, authToken: string, _options?: Configuration): Promise<BillingSettingsSchema> {
        const result = this.api.statsV1BillingSettingsGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Updates Billing Settings
     * @param appID 
     * @param authToken 
     * @param billingSettingsSchema body
     */
    public statsV1BillingSettingsPutWithHttpInfo(appID: string, authToken: string, billingSettingsSchema: BillingSettingsSchema, _options?: Configuration): Promise<HttpInfo<BillingSettingsSchema>> {
        const result = this.api.statsV1BillingSettingsPutWithHttpInfo(appID, authToken, billingSettingsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Updates Billing Settings
     * @param appID 
     * @param authToken 
     * @param billingSettingsSchema body
     */
    public statsV1BillingSettingsPut(appID: string, authToken: string, billingSettingsSchema: BillingSettingsSchema, _options?: Configuration): Promise<BillingSettingsSchema> {
        const result = this.api.statsV1BillingSettingsPut(appID, authToken, billingSettingsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing status
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingStatusGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<BillingStatsSchema>> {
        const result = this.api.statsV1BillingStatusGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing status
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingStatusGet(appID: string, authToken: string, _options?: Configuration): Promise<BillingStatsSchema> {
        const result = this.api.statsV1BillingStatusGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete billing record (Requires super admin access).
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     * @param billingId 
     */
    public statsV1BillingSystemDomainIdBillingIdDeleteWithHttpInfo(appID: string, authToken: string, systemDomainId: string, billingId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.statsV1BillingSystemDomainIdBillingIdDeleteWithHttpInfo(appID, authToken, systemDomainId, billingId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete billing record (Requires super admin access).
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     * @param billingId 
     */
    public statsV1BillingSystemDomainIdBillingIdDelete(appID: string, authToken: string, systemDomainId: string, billingId: string, _options?: Configuration): Promise<void> {
        const result = this.api.statsV1BillingSystemDomainIdBillingIdDelete(appID, authToken, systemDomainId, billingId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns all collection usage
     * @param appID 
     * @param authToken 
     * @param period Period of stats (month or day)
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public statsV1CollectionsByPeriodGetWithHttpInfo(appID: string, authToken: string, period: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<HttpInfo<CollectionUsageSchema>> {
        const result = this.api.statsV1CollectionsByPeriodGetWithHttpInfo(appID, authToken, period, fromDate, toDate, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns all collection usage
     * @param appID 
     * @param authToken 
     * @param period Period of stats (month or day)
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public statsV1CollectionsByPeriodGet(appID: string, authToken: string, period: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<CollectionUsageSchema> {
        const result = this.api.statsV1CollectionsByPeriodGet(appID, authToken, period, fromDate, toDate, _options);
        return result.toPromise();
    }

    /**
     * 
     * Internal endpoint to convert ID to system domain
     * @param appID 
     * @param authToken 
     * @param objectId Object ID
     */
    public statsV1IdObjectIdInfoGetWithHttpInfo(appID: string, authToken: string, objectId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.statsV1IdObjectIdInfoGetWithHttpInfo(appID, authToken, objectId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Internal endpoint to convert ID to system domain
     * @param appID 
     * @param authToken 
     * @param objectId Object ID
     */
    public statsV1IdObjectIdInfoGet(appID: string, authToken: string, objectId: string, _options?: Configuration): Promise<void> {
        const result = this.api.statsV1IdObjectIdInfoGet(appID, authToken, objectId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing customer
     * @param appID 
     * @param authToken 
     */
    public statsV1OrdwayBillingCustomerGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<BillingSchema>> {
        const result = this.api.statsV1OrdwayBillingCustomerGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing customer
     * @param appID 
     * @param authToken 
     */
    public statsV1OrdwayBillingCustomerGet(appID: string, authToken: string, _options?: Configuration): Promise<BillingSchema> {
        const result = this.api.statsV1OrdwayBillingCustomerGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns billing info
     * @param appID 
     * @param authToken 
     * @param fromDate Filter by from_date
     * @param toDate Filter by from_date
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     */
    public statsV1OrdwayBillingGetWithHttpInfo(appID: string, authToken: string, fromDate?: string, toDate?: string, perPage?: number, page?: number, _options?: Configuration): Promise<HttpInfo<BillingsSchema>> {
        const result = this.api.statsV1OrdwayBillingGetWithHttpInfo(appID, authToken, fromDate, toDate, perPage, page, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns billing info
     * @param appID 
     * @param authToken 
     * @param fromDate Filter by from_date
     * @param toDate Filter by from_date
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     */
    public statsV1OrdwayBillingGet(appID: string, authToken: string, fromDate?: string, toDate?: string, perPage?: number, page?: number, _options?: Configuration): Promise<BillingsSchema> {
        const result = this.api.statsV1OrdwayBillingGet(appID, authToken, fromDate, toDate, perPage, page, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing invoices
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     */
    public statsV1OrdwayBillingInvoicesGetWithHttpInfo(appID: string, authToken: string, perPage?: number, page?: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.statsV1OrdwayBillingInvoicesGetWithHttpInfo(appID, authToken, perPage, page, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing invoices
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     */
    public statsV1OrdwayBillingInvoicesGet(appID: string, authToken: string, perPage?: number, page?: number, _options?: Configuration): Promise<void> {
        const result = this.api.statsV1OrdwayBillingInvoicesGet(appID, authToken, perPage, page, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns storage_access for all storages
     * @param appID 
     * @param authToken 
     * @param period Period of stats (month or day)
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public statsV1StorageAccessByPeriodGetWithHttpInfo(appID: string, authToken: string, period: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<HttpInfo<StorageAccessesSchema>> {
        const result = this.api.statsV1StorageAccessByPeriodGetWithHttpInfo(appID, authToken, period, fromDate, toDate, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns storage_access for all storages
     * @param appID 
     * @param authToken 
     * @param period Period of stats (month or day)
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public statsV1StorageAccessByPeriodGet(appID: string, authToken: string, period: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<StorageAccessesSchema> {
        const result = this.api.statsV1StorageAccessByPeriodGet(appID, authToken, period, fromDate, toDate, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns storage_usage for all storages
     * @param appID 
     * @param authToken 
     * @param period Period of stats (month or day)
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public statsV1StorageUsageByPeriodGetWithHttpInfo(appID: string, authToken: string, period: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<HttpInfo<StorageUsagesSchema>> {
        const result = this.api.statsV1StorageUsageByPeriodGetWithHttpInfo(appID, authToken, period, fromDate, toDate, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns storage_usage for all storages
     * @param appID 
     * @param authToken 
     * @param period Period of stats (month or day)
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public statsV1StorageUsageByPeriodGet(appID: string, authToken: string, period: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<StorageUsagesSchema> {
        const result = this.api.statsV1StorageUsageByPeriodGet(appID, authToken, period, fromDate, toDate, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_logs_recipients 
     * Get logs recipients settings
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last service account set on previous page
     */
    public statsV1SystemLogsRecipientsGetWithHttpInfo(appID: string, authToken: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<LogsRecipientsSchema>> {
        const result = this.api.statsV1SystemLogsRecipientsGetWithHttpInfo(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_logs_recipients 
     * Get logs recipients settings
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last service account set on previous page
     */
    public statsV1SystemLogsRecipientsGet(appID: string, authToken: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<LogsRecipientsSchema> {
        const result = this.api.statsV1SystemLogsRecipientsGet(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_logs_recipients 
     * Delete logs recipient settings
     * @param appID 
     * @param authToken 
     * @param logsRecipientId 
     */
    public statsV1SystemLogsRecipientsLogsRecipientIdDeleteWithHttpInfo(appID: string, authToken: string, logsRecipientId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.statsV1SystemLogsRecipientsLogsRecipientIdDeleteWithHttpInfo(appID, authToken, logsRecipientId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_logs_recipients 
     * Delete logs recipient settings
     * @param appID 
     * @param authToken 
     * @param logsRecipientId 
     */
    public statsV1SystemLogsRecipientsLogsRecipientIdDelete(appID: string, authToken: string, logsRecipientId: string, _options?: Configuration): Promise<void> {
        const result = this.api.statsV1SystemLogsRecipientsLogsRecipientIdDelete(appID, authToken, logsRecipientId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_logs_recipients 
     * Get settings of a logs recipient
     * @param appID 
     * @param authToken 
     * @param logsRecipientId 
     */
    public statsV1SystemLogsRecipientsLogsRecipientIdGetWithHttpInfo(appID: string, authToken: string, logsRecipientId: string, _options?: Configuration): Promise<HttpInfo<LogsRecipientReadSchema>> {
        const result = this.api.statsV1SystemLogsRecipientsLogsRecipientIdGetWithHttpInfo(appID, authToken, logsRecipientId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_logs_recipients 
     * Get settings of a logs recipient
     * @param appID 
     * @param authToken 
     * @param logsRecipientId 
     */
    public statsV1SystemLogsRecipientsLogsRecipientIdGet(appID: string, authToken: string, logsRecipientId: string, _options?: Configuration): Promise<LogsRecipientReadSchema> {
        const result = this.api.statsV1SystemLogsRecipientsLogsRecipientIdGet(appID, authToken, logsRecipientId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_logs_recipients 
     * Change logs recipient settings
     * @param appID 
     * @param authToken 
     * @param logsRecipientId 
     * @param logsRecipientSchema body
     */
    public statsV1SystemLogsRecipientsLogsRecipientIdPatchWithHttpInfo(appID: string, authToken: string, logsRecipientId: string, logsRecipientSchema: LogsRecipientSchema, _options?: Configuration): Promise<HttpInfo<LogsRecipientReadSchema>> {
        const result = this.api.statsV1SystemLogsRecipientsLogsRecipientIdPatchWithHttpInfo(appID, authToken, logsRecipientId, logsRecipientSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_logs_recipients 
     * Change logs recipient settings
     * @param appID 
     * @param authToken 
     * @param logsRecipientId 
     * @param logsRecipientSchema body
     */
    public statsV1SystemLogsRecipientsLogsRecipientIdPatch(appID: string, authToken: string, logsRecipientId: string, logsRecipientSchema: LogsRecipientSchema, _options?: Configuration): Promise<LogsRecipientReadSchema> {
        const result = this.api.statsV1SystemLogsRecipientsLogsRecipientIdPatch(appID, authToken, logsRecipientId, logsRecipientSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_logs_recipients 
     * Test logs recipient connection
     * @param appID 
     * @param authToken 
     * @param logsRecipientId 
     */
    public statsV1SystemLogsRecipientsLogsRecipientIdPostWithHttpInfo(appID: string, authToken: string, logsRecipientId: string, _options?: Configuration): Promise<HttpInfo<StatsV1SystemLogsRecipientsLogsRecipientIdPost200Response>> {
        const result = this.api.statsV1SystemLogsRecipientsLogsRecipientIdPostWithHttpInfo(appID, authToken, logsRecipientId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_logs_recipients 
     * Test logs recipient connection
     * @param appID 
     * @param authToken 
     * @param logsRecipientId 
     */
    public statsV1SystemLogsRecipientsLogsRecipientIdPost(appID: string, authToken: string, logsRecipientId: string, _options?: Configuration): Promise<StatsV1SystemLogsRecipientsLogsRecipientIdPost200Response> {
        const result = this.api.statsV1SystemLogsRecipientsLogsRecipientIdPost(appID, authToken, logsRecipientId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_logs_recipients 
     * Change logs recipient settings
     * @param appID 
     * @param authToken 
     * @param logsRecipientId 
     * @param logsRecipientSchema body
     */
    public statsV1SystemLogsRecipientsLogsRecipientIdPutWithHttpInfo(appID: string, authToken: string, logsRecipientId: string, logsRecipientSchema: LogsRecipientSchema, _options?: Configuration): Promise<HttpInfo<LogsRecipientReadSchema>> {
        const result = this.api.statsV1SystemLogsRecipientsLogsRecipientIdPutWithHttpInfo(appID, authToken, logsRecipientId, logsRecipientSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_logs_recipients 
     * Change logs recipient settings
     * @param appID 
     * @param authToken 
     * @param logsRecipientId 
     * @param logsRecipientSchema body
     */
    public statsV1SystemLogsRecipientsLogsRecipientIdPut(appID: string, authToken: string, logsRecipientId: string, logsRecipientSchema: LogsRecipientSchema, _options?: Configuration): Promise<LogsRecipientReadSchema> {
        const result = this.api.statsV1SystemLogsRecipientsLogsRecipientIdPut(appID, authToken, logsRecipientId, logsRecipientSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_logs_recipients 
     * Create logs recipient settings
     * @param appID 
     * @param authToken 
     * @param logsRecipientSchema body
     */
    public statsV1SystemLogsRecipientsPostWithHttpInfo(appID: string, authToken: string, logsRecipientSchema: LogsRecipientSchema, _options?: Configuration): Promise<HttpInfo<LogsRecipientReadSchema>> {
        const result = this.api.statsV1SystemLogsRecipientsPostWithHttpInfo(appID, authToken, logsRecipientSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_logs_recipients 
     * Create logs recipient settings
     * @param appID 
     * @param authToken 
     * @param logsRecipientSchema body
     */
    public statsV1SystemLogsRecipientsPost(appID: string, authToken: string, logsRecipientSchema: LogsRecipientSchema, _options?: Configuration): Promise<LogsRecipientReadSchema> {
        const result = this.api.statsV1SystemLogsRecipientsPost(appID, authToken, logsRecipientSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns transcoder_usage for all transcoders
     * @param appID 
     * @param authToken 
     * @param period 
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public statsV1TranscoderUsageByPeriodGetWithHttpInfo(appID: string, authToken: string, period: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<HttpInfo<TranscoderUsagesSchema>> {
        const result = this.api.statsV1TranscoderUsageByPeriodGetWithHttpInfo(appID, authToken, period, fromDate, toDate, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns transcoder_usage for all transcoders
     * @param appID 
     * @param authToken 
     * @param period 
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public statsV1TranscoderUsageByPeriodGet(appID: string, authToken: string, period: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<TranscoderUsagesSchema> {
        const result = this.api.statsV1TranscoderUsageByPeriodGet(appID, authToken, period, fromDate, toDate, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns all audit
     * @param appID 
     * @param authToken 
     * @param period Period of stats (month, day or day_detailed)
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     * @param systemDomainId Filter by system_domain_id (Only for super admins)
     */
    public statsV1UserAuditByPeriodGetWithHttpInfo(appID: string, authToken: string, period: string, fromDate?: string, toDate?: string, systemDomainId?: string, _options?: Configuration): Promise<HttpInfo<UserUsagesSchema>> {
        const result = this.api.statsV1UserAuditByPeriodGetWithHttpInfo(appID, authToken, period, fromDate, toDate, systemDomainId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns all audit
     * @param appID 
     * @param authToken 
     * @param period Period of stats (month, day or day_detailed)
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     * @param systemDomainId Filter by system_domain_id (Only for super admins)
     */
    public statsV1UserAuditByPeriodGet(appID: string, authToken: string, period: string, fromDate?: string, toDate?: string, systemDomainId?: string, _options?: Configuration): Promise<UserUsagesSchema> {
        const result = this.api.statsV1UserAuditByPeriodGet(appID, authToken, period, fromDate, toDate, systemDomainId, _options);
        return result.toPromise();
    }


}



import { ObservableTranscodeApi } from './ObservableAPI';

import { TranscodeApiRequestFactory, TranscodeApiResponseProcessor} from "../apis/TranscodeApi";
export class PromiseTranscodeApi {
    private api: ObservableTranscodeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TranscodeApiRequestFactory,
        responseProcessor?: TranscodeApiResponseProcessor
    ) {
        this.api = new ObservableTranscodeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     *  Required roles:  - can_analyze_content 
     * Start a job that sends an asset for analysis
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param analyzeSchema body
     */
    public transcodeV1AnalyzeAssetsAssetIdPostWithHttpInfo(appID: string, authToken: string, assetId: string, analyzeSchema?: AnalyzeSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1AnalyzeAssetsAssetIdPostWithHttpInfo(appID, authToken, assetId, analyzeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_analyze_content 
     * Start a job that sends an asset for analysis
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param analyzeSchema body
     */
    public transcodeV1AnalyzeAssetsAssetIdPost(appID: string, authToken: string, assetId: string, analyzeSchema?: AnalyzeSchema, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1AnalyzeAssetsAssetIdPost(appID, authToken, assetId, analyzeSchema, _options);
        return result.toPromise();
    }

    /**
     * with a default analysis profile of specified media typewith a default analysis profile of specified media type Required roles:  - can_analyze_content 
     * Start a job that sends an asset for analysis
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param mediaType 
     * @param analyzeSchema body
     */
    public transcodeV1AnalyzeAssetsAssetIdProfilesDefaultMediaTypePostWithHttpInfo(appID: string, authToken: string, assetId: string, mediaType: string, analyzeSchema?: AnalyzeSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1AnalyzeAssetsAssetIdProfilesDefaultMediaTypePostWithHttpInfo(appID, authToken, assetId, mediaType, analyzeSchema, _options);
        return result.toPromise();
    }

    /**
     * with a default analysis profile of specified media typewith a default analysis profile of specified media type Required roles:  - can_analyze_content 
     * Start a job that sends an asset for analysis
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param mediaType 
     * @param analyzeSchema body
     */
    public transcodeV1AnalyzeAssetsAssetIdProfilesDefaultMediaTypePost(appID: string, authToken: string, assetId: string, mediaType: string, analyzeSchema?: AnalyzeSchema, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1AnalyzeAssetsAssetIdProfilesDefaultMediaTypePost(appID, authToken, assetId, mediaType, analyzeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_analyze_content 
     * Start a job that sends an asset for analysis with a default analysis profile
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param analyzeSchema body
     */
    public transcodeV1AnalyzeAssetsAssetIdProfilesDefaultPostWithHttpInfo(appID: string, authToken: string, assetId: string, analyzeSchema?: AnalyzeSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1AnalyzeAssetsAssetIdProfilesDefaultPostWithHttpInfo(appID, authToken, assetId, analyzeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_analyze_content 
     * Start a job that sends an asset for analysis with a default analysis profile
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param analyzeSchema body
     */
    public transcodeV1AnalyzeAssetsAssetIdProfilesDefaultPost(appID: string, authToken: string, assetId: string, analyzeSchema?: AnalyzeSchema, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1AnalyzeAssetsAssetIdProfilesDefaultPost(appID, authToken, assetId, analyzeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_analyze_content 
     * Start a job that sends an asset for analysis with a custom analysis profile
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param profileId 
     * @param analyzeSchema body
     */
    public transcodeV1AnalyzeAssetsAssetIdProfilesProfileIdPostWithHttpInfo(appID: string, authToken: string, assetId: string, profileId: string, analyzeSchema?: AnalyzeSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1AnalyzeAssetsAssetIdProfilesProfileIdPostWithHttpInfo(appID, authToken, assetId, profileId, analyzeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_analyze_content 
     * Start a job that sends an asset for analysis with a custom analysis profile
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param profileId 
     * @param analyzeSchema body
     */
    public transcodeV1AnalyzeAssetsAssetIdProfilesProfileIdPost(appID: string, authToken: string, assetId: string, profileId: string, analyzeSchema?: AnalyzeSchema, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1AnalyzeAssetsAssetIdProfilesProfileIdPost(appID, authToken, assetId, profileId, analyzeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_analyze_content 
     * Start a job that sends objects for analysis using a custom analysis profile
     * @param appID 
     * @param authToken 
     * @param bulkAnalyzeSchema body
     */
    public transcodeV1AnalyzeBulkPostWithHttpInfo(appID: string, authToken: string, bulkAnalyzeSchema?: BulkAnalyzeSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1AnalyzeBulkPostWithHttpInfo(appID, authToken, bulkAnalyzeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_analyze_content 
     * Start a job that sends objects for analysis using a custom analysis profile
     * @param appID 
     * @param authToken 
     * @param bulkAnalyzeSchema body
     */
    public transcodeV1AnalyzeBulkPost(appID: string, authToken: string, bulkAnalyzeSchema?: BulkAnalyzeSchema, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1AnalyzeBulkPost(appID, authToken, bulkAnalyzeSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Gets metadata info from the link
     * @param appID 
     * @param authToken 
     * @param assetLinkURLSchema body
     */
    public transcodeV1AssetsLinkMetadataPostWithHttpInfo(appID: string, authToken: string, assetLinkURLSchema: AssetLinkURLSchema, _options?: Configuration): Promise<HttpInfo<AssetLinkData>> {
        const result = this.api.transcodeV1AssetsLinkMetadataPostWithHttpInfo(appID, authToken, assetLinkURLSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Gets metadata info from the link
     * @param appID 
     * @param authToken 
     * @param assetLinkURLSchema body
     */
    public transcodeV1AssetsLinkMetadataPost(appID: string, authToken: string, assetLinkURLSchema: AssetLinkURLSchema, _options?: Configuration): Promise<AssetLinkData> {
        const result = this.api.transcodeV1AssetsLinkMetadataPost(appID, authToken, assetLinkURLSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Acknowledge an edge transcode job
     * @param appID 
     * @param authToken 
     * @param jobId 
     */
    public transcodeV1EdgeTranscodeJobsJobIdAcknowledgePostWithHttpInfo(appID: string, authToken: string, jobId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1EdgeTranscodeJobsJobIdAcknowledgePostWithHttpInfo(appID, authToken, jobId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Acknowledge an edge transcode job
     * @param appID 
     * @param authToken 
     * @param jobId 
     */
    public transcodeV1EdgeTranscodeJobsJobIdAcknowledgePost(appID: string, authToken: string, jobId: string, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1EdgeTranscodeJobsJobIdAcknowledgePost(appID, authToken, jobId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_read_transcoders 
     * Get edge transcode workers
     * @param appID 
     * @param authToken 
     */
    public transcodeV1EdgeTranscodeWorkersGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<EdgeTranscodeWorkersSchema>> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_read_transcoders 
     * Get edge transcode workers
     * @param appID 
     * @param authToken 
     */
    public transcodeV1EdgeTranscodeWorkersGet(appID: string, authToken: string, _options?: Configuration): Promise<EdgeTranscodeWorkersSchema> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_write_transcoders 
     * Create a new edge transcode worker
     * @param appID 
     * @param authToken 
     * @param edgeTranscodeWorkerSchema body
     */
    public transcodeV1EdgeTranscodeWorkersPostWithHttpInfo(appID: string, authToken: string, edgeTranscodeWorkerSchema: EdgeTranscodeWorkerSchema, _options?: Configuration): Promise<HttpInfo<EdgeTranscodeWorkerSchema>> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersPostWithHttpInfo(appID, authToken, edgeTranscodeWorkerSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_write_transcoders 
     * Create a new edge transcode worker
     * @param appID 
     * @param authToken 
     * @param edgeTranscodeWorkerSchema body
     */
    public transcodeV1EdgeTranscodeWorkersPost(appID: string, authToken: string, edgeTranscodeWorkerSchema: EdgeTranscodeWorkerSchema, _options?: Configuration): Promise<EdgeTranscodeWorkerSchema> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersPost(appID, authToken, edgeTranscodeWorkerSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_write_transcoders 
     * Delete a edge transcode worker
     * @param appID 
     * @param authToken 
     * @param workerId 
     */
    public transcodeV1EdgeTranscodeWorkersWorkerIdDeleteWithHttpInfo(appID: string, authToken: string, workerId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersWorkerIdDeleteWithHttpInfo(appID, authToken, workerId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_write_transcoders 
     * Delete a edge transcode worker
     * @param appID 
     * @param authToken 
     * @param workerId 
     */
    public transcodeV1EdgeTranscodeWorkersWorkerIdDelete(appID: string, authToken: string, workerId: string, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersWorkerIdDelete(appID, authToken, workerId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_read_transcoders 
     * Get a edge transcode worker
     * @param appID 
     * @param authToken 
     * @param workerId 
     */
    public transcodeV1EdgeTranscodeWorkersWorkerIdGetWithHttpInfo(appID: string, authToken: string, workerId: string, _options?: Configuration): Promise<HttpInfo<EdgeTranscodeWorkerSchema>> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersWorkerIdGetWithHttpInfo(appID, authToken, workerId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_read_transcoders 
     * Get a edge transcode worker
     * @param appID 
     * @param authToken 
     * @param workerId 
     */
    public transcodeV1EdgeTranscodeWorkersWorkerIdGet(appID: string, authToken: string, workerId: string, _options?: Configuration): Promise<EdgeTranscodeWorkerSchema> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersWorkerIdGet(appID, authToken, workerId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_write_transcoders 
     * Update a edge transcode worker
     * @param appID 
     * @param authToken 
     * @param workerId 
     * @param edgeTranscodeWorkerSchema body
     */
    public transcodeV1EdgeTranscodeWorkersWorkerIdPatchWithHttpInfo(appID: string, authToken: string, workerId: string, edgeTranscodeWorkerSchema: EdgeTranscodeWorkerSchema, _options?: Configuration): Promise<HttpInfo<EdgeTranscodeWorkerSchema>> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersWorkerIdPatchWithHttpInfo(appID, authToken, workerId, edgeTranscodeWorkerSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_write_transcoders 
     * Update a edge transcode worker
     * @param appID 
     * @param authToken 
     * @param workerId 
     * @param edgeTranscodeWorkerSchema body
     */
    public transcodeV1EdgeTranscodeWorkersWorkerIdPatch(appID: string, authToken: string, workerId: string, edgeTranscodeWorkerSchema: EdgeTranscodeWorkerSchema, _options?: Configuration): Promise<EdgeTranscodeWorkerSchema> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersWorkerIdPatch(appID, authToken, workerId, edgeTranscodeWorkerSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_write_transcoders 
     * Update a edge transcode worker
     * @param appID 
     * @param authToken 
     * @param workerId 
     * @param edgeTranscodeWorkerSchema body
     */
    public transcodeV1EdgeTranscodeWorkersWorkerIdPutWithHttpInfo(appID: string, authToken: string, workerId: string, edgeTranscodeWorkerSchema: EdgeTranscodeWorkerSchema, _options?: Configuration): Promise<HttpInfo<EdgeTranscodeWorkerSchema>> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersWorkerIdPutWithHttpInfo(appID, authToken, workerId, edgeTranscodeWorkerSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_write_transcoders 
     * Update a edge transcode worker
     * @param appID 
     * @param authToken 
     * @param workerId 
     * @param edgeTranscodeWorkerSchema body
     */
    public transcodeV1EdgeTranscodeWorkersWorkerIdPut(appID: string, authToken: string, workerId: string, edgeTranscodeWorkerSchema: EdgeTranscodeWorkerSchema, _options?: Configuration): Promise<EdgeTranscodeWorkerSchema> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersWorkerIdPut(appID, authToken, workerId, edgeTranscodeWorkerSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcode_jobs 
     * Start a job that creates a collection keyframe
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param generateCollectionKeyframeSchema body
     */
    public transcodeV1KeyframesCollectionsCollectionIdPostWithHttpInfo(appID: string, authToken: string, collectionId: string, generateCollectionKeyframeSchema?: GenerateCollectionKeyframeSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1KeyframesCollectionsCollectionIdPostWithHttpInfo(appID, authToken, collectionId, generateCollectionKeyframeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcode_jobs 
     * Start a job that creates a collection keyframe
     * @param appID 
     * @param authToken 
     * @param collectionId 
     * @param generateCollectionKeyframeSchema body
     */
    public transcodeV1KeyframesCollectionsCollectionIdPost(appID: string, authToken: string, collectionId: string, generateCollectionKeyframeSchema?: GenerateCollectionKeyframeSchema, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1KeyframesCollectionsCollectionIdPost(appID, authToken, collectionId, generateCollectionKeyframeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_transcode_jobs 
     * Cancel all transcode jobs linked to the storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param abortStorageTranscodeJobsSchema body
     */
    public transcodeV1StoragesStorageIdDeleteWithHttpInfo(appID: string, authToken: string, storageId: string, abortStorageTranscodeJobsSchema?: AbortStorageTranscodeJobsSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1StoragesStorageIdDeleteWithHttpInfo(appID, authToken, storageId, abortStorageTranscodeJobsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_transcode_jobs 
     * Cancel all transcode jobs linked to the storage
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param abortStorageTranscodeJobsSchema body
     */
    public transcodeV1StoragesStorageIdDelete(appID: string, authToken: string, storageId: string, abortStorageTranscodeJobsSchema?: AbortStorageTranscodeJobsSchema, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1StoragesStorageIdDelete(appID, authToken, storageId, abortStorageTranscodeJobsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Get a edge transcode jobs from the job queue
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param limit The max number of items to fetch
     */
    public transcodeV1StoragesStorageIdEdgeTranscodeJobsGetWithHttpInfo(appID: string, authToken: string, storageId: string, limit?: number, _options?: Configuration): Promise<HttpInfo<EdgeTranscodeJobsSchema>> {
        const result = this.api.transcodeV1StoragesStorageIdEdgeTranscodeJobsGetWithHttpInfo(appID, authToken, storageId, limit, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Get a edge transcode jobs from the job queue
     * @param appID 
     * @param authToken 
     * @param storageId 
     * @param limit The max number of items to fetch
     */
    public transcodeV1StoragesStorageIdEdgeTranscodeJobsGet(appID: string, authToken: string, storageId: string, limit?: number, _options?: Configuration): Promise<EdgeTranscodeJobsSchema> {
        const result = this.api.transcodeV1StoragesStorageIdEdgeTranscodeJobsGet(appID, authToken, storageId, limit, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Delete local storage transcode job.
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param fileId 
     */
    public transcodeV1StoragesStorageIdFilesFileIdTranscodeDeleteWithHttpInfo(authToken: string, appID: string, storageId: string, fileId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1StoragesStorageIdFilesFileIdTranscodeDeleteWithHttpInfo(authToken, appID, storageId, fileId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Delete local storage transcode job.
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param fileId 
     */
    public transcodeV1StoragesStorageIdFilesFileIdTranscodeDelete(authToken: string, appID: string, storageId: string, fileId: string, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1StoragesStorageIdFilesFileIdTranscodeDelete(authToken, appID, storageId, fileId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Get pending local storage transcode jobs.
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last transcode job entity on previous page
     */
    public transcodeV1StoragesStorageIdTranscodeGetWithHttpInfo(authToken: string, appID: string, storageId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<LocalStorageFileTranscodeJobsSchema>> {
        const result = this.api.transcodeV1StoragesStorageIdTranscodeGetWithHttpInfo(authToken, appID, storageId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Get pending local storage transcode jobs.
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param perPage The number of items for each page
     * @param lastId ID of a last transcode job entity on previous page
     */
    public transcodeV1StoragesStorageIdTranscodeGet(authToken: string, appID: string, storageId: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<LocalStorageFileTranscodeJobsSchema> {
        const result = this.api.transcodeV1StoragesStorageIdTranscodeGet(authToken, appID, storageId, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Delete local storage transcode job.
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param recordId 
     */
    public transcodeV1StoragesStorageIdTranscodeRecordIdDeleteWithHttpInfo(authToken: string, appID: string, storageId: string, recordId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1StoragesStorageIdTranscodeRecordIdDeleteWithHttpInfo(authToken, appID, storageId, recordId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Delete local storage transcode job.
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param recordId 
     */
    public transcodeV1StoragesStorageIdTranscodeRecordIdDelete(authToken: string, appID: string, storageId: string, recordId: string, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1StoragesStorageIdTranscodeRecordIdDelete(authToken, appID, storageId, recordId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Get local storage transcode job.
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param recordId 
     */
    public transcodeV1StoragesStorageIdTranscodeRecordIdGetWithHttpInfo(authToken: string, appID: string, storageId: string, recordId: string, _options?: Configuration): Promise<HttpInfo<LocalStorageFileTranscodeJobSchema>> {
        const result = this.api.transcodeV1StoragesStorageIdTranscodeRecordIdGetWithHttpInfo(authToken, appID, storageId, recordId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Get local storage transcode job.
     * @param authToken 
     * @param appID 
     * @param storageId 
     * @param recordId 
     */
    public transcodeV1StoragesStorageIdTranscodeRecordIdGet(authToken: string, appID: string, storageId: string, recordId: string, _options?: Configuration): Promise<LocalStorageFileTranscodeJobSchema> {
        const result = this.api.transcodeV1StoragesStorageIdTranscodeRecordIdGet(authToken, appID, storageId, recordId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Returns list of transcode queue records by object_id
     * @param authToken 
     * @param appID 
     * @param objectType 
     * @param objectId 
     */
    public transcodeV1TranscodeObjectTypeObjectIdGetWithHttpInfo(authToken: string, appID: string, objectType: string, objectId: string, _options?: Configuration): Promise<HttpInfo<TranscodeESQueueRecordsSchema>> {
        const result = this.api.transcodeV1TranscodeObjectTypeObjectIdGetWithHttpInfo(authToken, appID, objectType, objectId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Returns list of transcode queue records by object_id
     * @param authToken 
     * @param appID 
     * @param objectType 
     * @param objectId 
     */
    public transcodeV1TranscodeObjectTypeObjectIdGet(authToken: string, appID: string, objectType: string, objectId: string, _options?: Configuration): Promise<TranscodeESQueueRecordsSchema> {
        const result = this.api.transcodeV1TranscodeObjectTypeObjectIdGet(authToken, appID, objectType, objectId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Returns list of transcode queue records by version_id
     * @param authToken 
     * @param appID 
     * @param objectType 
     * @param objectId 
     * @param versionId 
     */
    public transcodeV1TranscodeObjectTypeObjectIdVersionsVersionIdGetWithHttpInfo(authToken: string, appID: string, objectType: string, objectId: string, versionId: string, _options?: Configuration): Promise<HttpInfo<TranscodeESQueueRecordsSchema>> {
        const result = this.api.transcodeV1TranscodeObjectTypeObjectIdVersionsVersionIdGetWithHttpInfo(authToken, appID, objectType, objectId, versionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Returns list of transcode queue records by version_id
     * @param authToken 
     * @param appID 
     * @param objectType 
     * @param objectId 
     * @param versionId 
     */
    public transcodeV1TranscodeObjectTypeObjectIdVersionsVersionIdGet(authToken: string, appID: string, objectType: string, objectId: string, versionId: string, _options?: Configuration): Promise<TranscodeESQueueRecordsSchema> {
        const result = this.api.transcodeV1TranscodeObjectTypeObjectIdVersionsVersionIdGet(authToken, appID, objectType, objectId, versionId, _options);
        return result.toPromise();
    }

    /**
     * Use /API/files/v1/assets/ID/files/ID/keyframes insteadUse /API/files/v1/assets/ID/files/ID/keyframes instead Required roles:  - can_write_transcode_jobs 
     * Starts a new transcode.
     * @param appID 
     * @param authToken 
     * @param jobSchema1 body
     */
    public transcodeV1TranscodePostWithHttpInfo(appID: string, authToken: string, jobSchema1: JobSchema1, _options?: Configuration): Promise<HttpInfo<JobSchema1>> {
        const result = this.api.transcodeV1TranscodePostWithHttpInfo(appID, authToken, jobSchema1, _options);
        return result.toPromise();
    }

    /**
     * Use /API/files/v1/assets/ID/files/ID/keyframes insteadUse /API/files/v1/assets/ID/files/ID/keyframes instead Required roles:  - can_write_transcode_jobs 
     * Starts a new transcode.
     * @param appID 
     * @param authToken 
     * @param jobSchema1 body
     */
    public transcodeV1TranscodePost(appID: string, authToken: string, jobSchema1: JobSchema1, _options?: Configuration): Promise<JobSchema1> {
        const result = this.api.transcodeV1TranscodePost(appID, authToken, jobSchema1, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Get all the statuses of the queued transcode jobs
     * @param appID 
     * @param authToken 
     * @param perPage 
     * @param page 
     * @param sort A comma separated list of fieldnames without spaces. object_type,user_id,retry_count,priority,type,status
     */
    public transcodeV1TranscodeQueueGetWithHttpInfo(appID: string, authToken: string, perPage?: number, page?: number, sort?: string, _options?: Configuration): Promise<HttpInfo<TranscodeQueueSchema>> {
        const result = this.api.transcodeV1TranscodeQueueGetWithHttpInfo(appID, authToken, perPage, page, sort, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Get all the statuses of the queued transcode jobs
     * @param appID 
     * @param authToken 
     * @param perPage 
     * @param page 
     * @param sort A comma separated list of fieldnames without spaces. object_type,user_id,retry_count,priority,type,status
     */
    public transcodeV1TranscodeQueueGet(appID: string, authToken: string, perPage?: number, page?: number, sort?: string, _options?: Configuration): Promise<TranscodeQueueSchema> {
        const result = this.api.transcodeV1TranscodeQueueGet(appID, authToken, perPage, page, sort, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get the status of the transcode job queues
     * @param appID 
     * @param authToken 
     * @param perDomainId 
     * @param perPage 
     * @param page 
     * @param sort 
     */
    public transcodeV1TranscodeQueueSystemGetWithHttpInfo(appID: string, authToken: string, perDomainId?: boolean, perPage?: number, page?: number, sort?: string, _options?: Configuration): Promise<HttpInfo<TranscodeQueueSchema>> {
        const result = this.api.transcodeV1TranscodeQueueSystemGetWithHttpInfo(appID, authToken, perDomainId, perPage, page, sort, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get the status of the transcode job queues
     * @param appID 
     * @param authToken 
     * @param perDomainId 
     * @param perPage 
     * @param page 
     * @param sort 
     */
    public transcodeV1TranscodeQueueSystemGet(appID: string, authToken: string, perDomainId?: boolean, perPage?: number, page?: number, sort?: string, _options?: Configuration): Promise<TranscodeQueueSchema> {
        const result = this.api.transcodeV1TranscodeQueueSystemGet(appID, authToken, perDomainId, perPage, page, sort, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_transcode_jobs 
     * Cancel a particular transcode job by id
     * @param appID 
     * @param authToken 
     * @param transcodeJobId 
     */
    public transcodeV1TranscodeTranscodeJobIdDeleteWithHttpInfo(appID: string, authToken: string, transcodeJobId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1TranscodeTranscodeJobIdDeleteWithHttpInfo(appID, authToken, transcodeJobId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_transcode_jobs 
     * Cancel a particular transcode job by id
     * @param appID 
     * @param authToken 
     * @param transcodeJobId 
     */
    public transcodeV1TranscodeTranscodeJobIdDelete(appID: string, authToken: string, transcodeJobId: string, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1TranscodeTranscodeJobIdDelete(appID, authToken, transcodeJobId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Get transcode job
     * @param appID 
     * @param authToken 
     * @param transcodeJobId 
     */
    public transcodeV1TranscodeTranscodeJobIdGetWithHttpInfo(appID: string, authToken: string, transcodeJobId: string, _options?: Configuration): Promise<HttpInfo<JobSchema1>> {
        const result = this.api.transcodeV1TranscodeTranscodeJobIdGetWithHttpInfo(appID, authToken, transcodeJobId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Get transcode job
     * @param appID 
     * @param authToken 
     * @param transcodeJobId 
     */
    public transcodeV1TranscodeTranscodeJobIdGet(appID: string, authToken: string, transcodeJobId: string, _options?: Configuration): Promise<JobSchema1> {
        const result = this.api.transcodeV1TranscodeTranscodeJobIdGet(appID, authToken, transcodeJobId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcode_jobs 
     * Move transcode job to top or bottom of the queue
     * @param appID 
     * @param authToken 
     * @param transcodeJobId 
     * @param position move transcode job to \&quot;top\&quot; or \&quot;bottom\&quot; position
     */
    public transcodeV1TranscodeTranscodeJobIdPositionPositionPostWithHttpInfo(appID: string, authToken: string, transcodeJobId: string, position: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1TranscodeTranscodeJobIdPositionPositionPostWithHttpInfo(appID, authToken, transcodeJobId, position, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcode_jobs 
     * Move transcode job to top or bottom of the queue
     * @param appID 
     * @param authToken 
     * @param transcodeJobId 
     * @param position move transcode job to \&quot;top\&quot; or \&quot;bottom\&quot; position
     */
    public transcodeV1TranscodeTranscodeJobIdPositionPositionPost(appID: string, authToken: string, transcodeJobId: string, position: string, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1TranscodeTranscodeJobIdPositionPositionPost(appID, authToken, transcodeJobId, position, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcode_jobs 
     * Change transcode job priority
     * @param appID 
     * @param authToken 
     * @param transcodeJobId 
     * @param priority 
     */
    public transcodeV1TranscodeTranscodeJobIdPriorityPriorityPutWithHttpInfo(appID: string, authToken: string, transcodeJobId: string, priority: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1TranscodeTranscodeJobIdPriorityPriorityPutWithHttpInfo(appID, authToken, transcodeJobId, priority, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcode_jobs 
     * Change transcode job priority
     * @param appID 
     * @param authToken 
     * @param transcodeJobId 
     * @param priority 
     */
    public transcodeV1TranscodeTranscodeJobIdPriorityPriorityPut(appID: string, authToken: string, transcodeJobId: string, priority: number, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1TranscodeTranscodeJobIdPriorityPriorityPut(appID, authToken, transcodeJobId, priority, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_transcribe_content 
     * Start a job that sends an asset to default transcription service
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param transcribeSchema body
     */
    public transcodeV1TranscribeAssetsAssetIdProfilesDefaultPostWithHttpInfo(appID: string, authToken: string, assetId: string, transcribeSchema?: TranscribeSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1TranscribeAssetsAssetIdProfilesDefaultPostWithHttpInfo(appID, authToken, assetId, transcribeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_transcribe_content 
     * Start a job that sends an asset to default transcription service
     * @param appID 
     * @param authToken 
     * @param assetId 
     * @param transcribeSchema body
     */
    public transcodeV1TranscribeAssetsAssetIdProfilesDefaultPost(appID: string, authToken: string, assetId: string, transcribeSchema?: TranscribeSchema, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1TranscribeAssetsAssetIdProfilesDefaultPost(appID, authToken, assetId, transcribeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_transcribe_content 
     * Start a job that sends multiple objects to transcription service
     * @param appID 
     * @param authToken 
     * @param bulkTranscribeSchema body
     */
    public transcodeV1TranscribeBulkPostWithHttpInfo(appID: string, authToken: string, bulkTranscribeSchema: BulkTranscribeSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1TranscribeBulkPostWithHttpInfo(appID, authToken, bulkTranscribeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_transcribe_content 
     * Start a job that sends multiple objects to transcription service
     * @param appID 
     * @param authToken 
     * @param bulkTranscribeSchema body
     */
    public transcodeV1TranscribeBulkPost(appID: string, authToken: string, bulkTranscribeSchema: BulkTranscribeSchema, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1TranscribeBulkPost(appID, authToken, bulkTranscribeSchema, _options);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * List groups info without details
     * @param appID 
     * @param authToken 
     * @param page Which page number to fetch
     * @param perPage The number of items for each page
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param alias Filter by alias
     * @param description Filter by descripton
     * @param name Filter by name
     * @param roles Filter by roles
     * @param dateCreated Filter by date_created
     * @param dateModified Filter by date_modified
     * @param query Filter by any of first_name, last_name and email with wildcard support
     * @param ids Filter list of id:s (comma separated)
     */
    public usersV1GroupsBasicGetWithHttpInfo(appID: string, authToken: string, page?: number, perPage?: number, sort?: string, alias?: string, description?: string, name?: string, roles?: string, dateCreated?: string, dateModified?: string, query?: string, ids?: string, _options?: Configuration): Promise<HttpInfo<GroupsSchema>> {
        const result = this.api.usersV1GroupsBasicGetWithHttpInfo(appID, authToken, page, perPage, sort, alias, description, name, roles, dateCreated, dateModified, query, ids, _options);
        return result.toPromise();
    }

    /**
     * 
     * List groups info without details
     * @param appID 
     * @param authToken 
     * @param page Which page number to fetch
     * @param perPage The number of items for each page
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param alias Filter by alias
     * @param description Filter by descripton
     * @param name Filter by name
     * @param roles Filter by roles
     * @param dateCreated Filter by date_created
     * @param dateModified Filter by date_modified
     * @param query Filter by any of first_name, last_name and email with wildcard support
     * @param ids Filter list of id:s (comma separated)
     */
    public usersV1GroupsBasicGet(appID: string, authToken: string, page?: number, perPage?: number, sort?: string, alias?: string, description?: string, name?: string, roles?: string, dateCreated?: string, dateModified?: string, query?: string, ids?: string, _options?: Configuration): Promise<GroupsSchema> {
        const result = this.api.usersV1GroupsBasicGet(appID, authToken, page, perPage, sort, alias, description, name, roles, dateCreated, dateModified, query, ids, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_groups 
     * List groups with details
     * @param appID 
     * @param authToken 
     * @param page Which page number to fetch
     * @param perPage The number of items for each page
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param alias Filter by alias
     * @param description Filter by descripton
     * @param name Filter by name
     * @param roles Filter by roles
     * @param dateCreated Filter by date_created
     * @param dateModified Filter by date_modified
     * @param query Filter by any of field with wildcard support
     * @param ids Filter list of id:s (comma separated)
     */
    public usersV1GroupsGetWithHttpInfo(appID: string, authToken: string, page?: number, perPage?: number, sort?: string, alias?: string, description?: string, name?: string, roles?: string, dateCreated?: string, dateModified?: string, query?: string, ids?: string, _options?: Configuration): Promise<HttpInfo<GroupsSchema>> {
        const result = this.api.usersV1GroupsGetWithHttpInfo(appID, authToken, page, perPage, sort, alias, description, name, roles, dateCreated, dateModified, query, ids, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_groups 
     * List groups with details
     * @param appID 
     * @param authToken 
     * @param page Which page number to fetch
     * @param perPage The number of items for each page
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param alias Filter by alias
     * @param description Filter by descripton
     * @param name Filter by name
     * @param roles Filter by roles
     * @param dateCreated Filter by date_created
     * @param dateModified Filter by date_modified
     * @param query Filter by any of field with wildcard support
     * @param ids Filter list of id:s (comma separated)
     */
    public usersV1GroupsGet(appID: string, authToken: string, page?: number, perPage?: number, sort?: string, alias?: string, description?: string, name?: string, roles?: string, dateCreated?: string, dateModified?: string, query?: string, ids?: string, _options?: Configuration): Promise<GroupsSchema> {
        const result = this.api.usersV1GroupsGet(appID, authToken, page, perPage, sort, alias, description, name, roles, dateCreated, dateModified, query, ids, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_groups 
     * Delete a particular group by id
     * @param appID 
     * @param authToken 
     * @param groupId 
     */
    public usersV1GroupsGroupIdDeleteWithHttpInfo(appID: string, authToken: string, groupId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersV1GroupsGroupIdDeleteWithHttpInfo(appID, authToken, groupId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_groups 
     * Delete a particular group by id
     * @param appID 
     * @param authToken 
     * @param groupId 
     */
    public usersV1GroupsGroupIdDelete(appID: string, authToken: string, groupId: string, _options?: Configuration): Promise<void> {
        const result = this.api.usersV1GroupsGroupIdDelete(appID, authToken, groupId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_groups 
     * Returns a particular group by id
     * @param appID 
     * @param authToken 
     * @param groupId 
     */
    public usersV1GroupsGroupIdGetWithHttpInfo(appID: string, authToken: string, groupId: string, _options?: Configuration): Promise<HttpInfo<GroupSchema>> {
        const result = this.api.usersV1GroupsGroupIdGetWithHttpInfo(appID, authToken, groupId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_groups 
     * Returns a particular group by id
     * @param appID 
     * @param authToken 
     * @param groupId 
     */
    public usersV1GroupsGroupIdGet(appID: string, authToken: string, groupId: string, _options?: Configuration): Promise<GroupSchema> {
        const result = this.api.usersV1GroupsGroupIdGet(appID, authToken, groupId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Delete group logo image.
     * @param appID 
     * @param authToken 
     * @param groupId 
     */
    public usersV1GroupsGroupIdLogoDeleteWithHttpInfo(appID: string, authToken: string, groupId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersV1GroupsGroupIdLogoDeleteWithHttpInfo(appID, authToken, groupId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Delete group logo image.
     * @param appID 
     * @param authToken 
     * @param groupId 
     */
    public usersV1GroupsGroupIdLogoDelete(appID: string, authToken: string, groupId: string, _options?: Configuration): Promise<void> {
        const result = this.api.usersV1GroupsGroupIdLogoDelete(appID, authToken, groupId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Upload group logo image.
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param authV1SystemDomainsSystemDomainIdLogoPostRequest 
     */
    public usersV1GroupsGroupIdLogoPostWithHttpInfo(appID: string, authToken: string, groupId: string, authV1SystemDomainsSystemDomainIdLogoPostRequest: AuthV1SystemDomainsSystemDomainIdLogoPostRequest, _options?: Configuration): Promise<HttpInfo<UsersV1GroupsGroupIdLogoPost200Response>> {
        const result = this.api.usersV1GroupsGroupIdLogoPostWithHttpInfo(appID, authToken, groupId, authV1SystemDomainsSystemDomainIdLogoPostRequest, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Upload group logo image.
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param authV1SystemDomainsSystemDomainIdLogoPostRequest 
     */
    public usersV1GroupsGroupIdLogoPost(appID: string, authToken: string, groupId: string, authV1SystemDomainsSystemDomainIdLogoPostRequest: AuthV1SystemDomainsSystemDomainIdLogoPostRequest, _options?: Configuration): Promise<UsersV1GroupsGroupIdLogoPost200Response> {
        const result = this.api.usersV1GroupsGroupIdLogoPost(appID, authToken, groupId, authV1SystemDomainsSystemDomainIdLogoPostRequest, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Update group
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param groupSchema body
     */
    public usersV1GroupsGroupIdPatchWithHttpInfo(appID: string, authToken: string, groupId: string, groupSchema: GroupSchema, _options?: Configuration): Promise<HttpInfo<GroupSchema>> {
        const result = this.api.usersV1GroupsGroupIdPatchWithHttpInfo(appID, authToken, groupId, groupSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Update group
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param groupSchema body
     */
    public usersV1GroupsGroupIdPatch(appID: string, authToken: string, groupId: string, groupSchema: GroupSchema, _options?: Configuration): Promise<GroupSchema> {
        const result = this.api.usersV1GroupsGroupIdPatch(appID, authToken, groupId, groupSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Update group
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param groupSchema body
     */
    public usersV1GroupsGroupIdPutWithHttpInfo(appID: string, authToken: string, groupId: string, groupSchema: GroupSchema, _options?: Configuration): Promise<HttpInfo<GroupSchema>> {
        const result = this.api.usersV1GroupsGroupIdPutWithHttpInfo(appID, authToken, groupId, groupSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Update group
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param groupSchema body
     */
    public usersV1GroupsGroupIdPut(appID: string, authToken: string, groupId: string, groupSchema: GroupSchema, _options?: Configuration): Promise<GroupSchema> {
        const result = this.api.usersV1GroupsGroupIdPut(appID, authToken, groupId, groupSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_groups 
     * Reindex a particular group by id
     * @param appID 
     * @param authToken 
     * @param groupId 
     */
    public usersV1GroupsGroupIdReindexPostWithHttpInfo(appID: string, authToken: string, groupId: string, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1GroupsGroupIdReindexPostWithHttpInfo(appID, authToken, groupId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_groups 
     * Reindex a particular group by id
     * @param appID 
     * @param authToken 
     * @param groupId 
     */
    public usersV1GroupsGroupIdReindexPost(appID: string, authToken: string, groupId: string, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1GroupsGroupIdReindexPost(appID, authToken, groupId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_groups 
     * Delete a user from group
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param userId 
     */
    public usersV1GroupsGroupIdUsersUserIdDeleteWithHttpInfo(appID: string, authToken: string, groupId: string, userId: string, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1GroupsGroupIdUsersUserIdDeleteWithHttpInfo(appID, authToken, groupId, userId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_groups 
     * Delete a user from group
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param userId 
     */
    public usersV1GroupsGroupIdUsersUserIdDelete(appID: string, authToken: string, groupId: string, userId: string, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1GroupsGroupIdUsersUserIdDelete(appID, authToken, groupId, userId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Add user into a group
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param userId 
     */
    public usersV1GroupsGroupIdUsersUserIdPostWithHttpInfo(appID: string, authToken: string, groupId: string, userId: string, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1GroupsGroupIdUsersUserIdPostWithHttpInfo(appID, authToken, groupId, userId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Add user into a group
     * @param appID 
     * @param authToken 
     * @param groupId 
     * @param userId 
     */
    public usersV1GroupsGroupIdUsersUserIdPost(appID: string, authToken: string, groupId: string, userId: string, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1GroupsGroupIdUsersUserIdPost(appID, authToken, groupId, userId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_group_mappings 
     * Get all group mappings
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId 
     */
    public usersV1GroupsMappingsGetWithHttpInfo(appID: string, authToken: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<GroupMappingsSchema>> {
        const result = this.api.usersV1GroupsMappingsGetWithHttpInfo(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_group_mappings 
     * Get all group mappings
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId 
     */
    public usersV1GroupsMappingsGet(appID: string, authToken: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<GroupMappingsSchema> {
        const result = this.api.usersV1GroupsMappingsGet(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_group_mappings 
     * Delete group mapping by name
     * @param appID 
     * @param authToken 
     * @param name 
     */
    public usersV1GroupsMappingsNameDeleteWithHttpInfo(appID: string, authToken: string, name: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersV1GroupsMappingsNameDeleteWithHttpInfo(appID, authToken, name, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_group_mappings 
     * Delete group mapping by name
     * @param appID 
     * @param authToken 
     * @param name 
     */
    public usersV1GroupsMappingsNameDelete(appID: string, authToken: string, name: string, _options?: Configuration): Promise<void> {
        const result = this.api.usersV1GroupsMappingsNameDelete(appID, authToken, name, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_group_mappings 
     * Get a group mapping
     * @param appID 
     * @param authToken 
     * @param name 
     */
    public usersV1GroupsMappingsNameGetWithHttpInfo(appID: string, authToken: string, name: string, _options?: Configuration): Promise<HttpInfo<GroupMappingSchema>> {
        const result = this.api.usersV1GroupsMappingsNameGetWithHttpInfo(appID, authToken, name, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_group_mappings 
     * Get a group mapping
     * @param appID 
     * @param authToken 
     * @param name 
     */
    public usersV1GroupsMappingsNameGet(appID: string, authToken: string, name: string, _options?: Configuration): Promise<GroupMappingSchema> {
        const result = this.api.usersV1GroupsMappingsNameGet(appID, authToken, name, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_group_mappings 
     * Create a new group mapping
     * @param appID 
     * @param authToken 
     * @param groupMappingSchema body
     */
    public usersV1GroupsMappingsPostWithHttpInfo(appID: string, authToken: string, groupMappingSchema: GroupMappingSchema, _options?: Configuration): Promise<HttpInfo<GroupMappingSchema>> {
        const result = this.api.usersV1GroupsMappingsPostWithHttpInfo(appID, authToken, groupMappingSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_group_mappings 
     * Create a new group mapping
     * @param appID 
     * @param authToken 
     * @param groupMappingSchema body
     */
    public usersV1GroupsMappingsPost(appID: string, authToken: string, groupMappingSchema: GroupMappingSchema, _options?: Configuration): Promise<GroupMappingSchema> {
        const result = this.api.usersV1GroupsMappingsPost(appID, authToken, groupMappingSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Create a new group
     * @param appID 
     * @param authToken 
     * @param groupSchema body
     */
    public usersV1GroupsPostWithHttpInfo(appID: string, authToken: string, groupSchema: GroupSchema, _options?: Configuration): Promise<HttpInfo<GroupSchema>> {
        const result = this.api.usersV1GroupsPostWithHttpInfo(appID, authToken, groupSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Create a new group
     * @param appID 
     * @param authToken 
     * @param groupSchema body
     */
    public usersV1GroupsPost(appID: string, authToken: string, groupSchema: GroupSchema, _options?: Configuration): Promise<GroupSchema> {
        const result = this.api.usersV1GroupsPost(appID, authToken, groupSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * List of users without details
     * @param appID 
     * @param authToken 
     * @param page Which page number to fetch
     * @param perPage The number of items for each page
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param dateCreated Filter by date_created
     * @param dateModified Filter by date_modified
     * @param email Filter by email
     * @param firstName Filter by first_name
     * @param lastName Filter by last_name
     * @param groups Filter by groups
     * @param hideEmail Filter by hide_email
     * @param hidePhone Filter by hide_phone
     * @param isAdmin Filter by is_admin
     * @param passwordChanged Filter by password_changed
     * @param phone Filter by phone
     * @param photo Filter by photo
     * @param status Filter by status
     * @param query Filter by any of first_name, last_name and email with wildcard support
     * @param ids Filter list of id:s (comma separated)
     */
    public usersV1UsersBasicGetWithHttpInfo(appID: string, authToken: string, page?: number, perPage?: number, sort?: string, dateCreated?: string, dateModified?: string, email?: string, firstName?: string, lastName?: string, groups?: string, hideEmail?: string, hidePhone?: string, isAdmin?: string, passwordChanged?: string, phone?: string, photo?: string, status?: string, query?: string, ids?: string, _options?: Configuration): Promise<HttpInfo<UsersSchema1>> {
        const result = this.api.usersV1UsersBasicGetWithHttpInfo(appID, authToken, page, perPage, sort, dateCreated, dateModified, email, firstName, lastName, groups, hideEmail, hidePhone, isAdmin, passwordChanged, phone, photo, status, query, ids, _options);
        return result.toPromise();
    }

    /**
     * 
     * List of users without details
     * @param appID 
     * @param authToken 
     * @param page Which page number to fetch
     * @param perPage The number of items for each page
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param dateCreated Filter by date_created
     * @param dateModified Filter by date_modified
     * @param email Filter by email
     * @param firstName Filter by first_name
     * @param lastName Filter by last_name
     * @param groups Filter by groups
     * @param hideEmail Filter by hide_email
     * @param hidePhone Filter by hide_phone
     * @param isAdmin Filter by is_admin
     * @param passwordChanged Filter by password_changed
     * @param phone Filter by phone
     * @param photo Filter by photo
     * @param status Filter by status
     * @param query Filter by any of first_name, last_name and email with wildcard support
     * @param ids Filter list of id:s (comma separated)
     */
    public usersV1UsersBasicGet(appID: string, authToken: string, page?: number, perPage?: number, sort?: string, dateCreated?: string, dateModified?: string, email?: string, firstName?: string, lastName?: string, groups?: string, hideEmail?: string, hidePhone?: string, isAdmin?: string, passwordChanged?: string, phone?: string, photo?: string, status?: string, query?: string, ids?: string, _options?: Configuration): Promise<UsersSchema1> {
        const result = this.api.usersV1UsersBasicGet(appID, authToken, page, perPage, sort, dateCreated, dateModified, email, firstName, lastName, groups, hideEmail, hidePhone, isAdmin, passwordChanged, phone, photo, status, query, ids, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns current user
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersCurrentGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1UsersCurrentGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns current user
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersCurrentGet(appID: string, authToken: string, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1UsersCurrentGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update user
     * @param appID 
     * @param authToken 
     * @param userSchema1 body
     */
    public usersV1UsersCurrentPatchWithHttpInfo(appID: string, authToken: string, userSchema1: UserSchema1, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1UsersCurrentPatchWithHttpInfo(appID, authToken, userSchema1, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update user
     * @param appID 
     * @param authToken 
     * @param userSchema1 body
     */
    public usersV1UsersCurrentPatch(appID: string, authToken: string, userSchema1: UserSchema1, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1UsersCurrentPatch(appID, authToken, userSchema1, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete current user photo image.
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersCurrentPhotoDeleteWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersV1UsersCurrentPhotoDeleteWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete current user photo image.
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersCurrentPhotoDelete(appID: string, authToken: string, _options?: Configuration): Promise<void> {
        const result = this.api.usersV1UsersCurrentPhotoDelete(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Upload current user photo image.
     * @param appID 
     * @param authToken 
     * @param usersV1UsersCurrentPhotoPostRequest 
     */
    public usersV1UsersCurrentPhotoPostWithHttpInfo(appID: string, authToken: string, usersV1UsersCurrentPhotoPostRequest: UsersV1UsersCurrentPhotoPostRequest, _options?: Configuration): Promise<HttpInfo<UsersV1UsersCurrentPhotoPost201Response>> {
        const result = this.api.usersV1UsersCurrentPhotoPostWithHttpInfo(appID, authToken, usersV1UsersCurrentPhotoPostRequest, _options);
        return result.toPromise();
    }

    /**
     * 
     * Upload current user photo image.
     * @param appID 
     * @param authToken 
     * @param usersV1UsersCurrentPhotoPostRequest 
     */
    public usersV1UsersCurrentPhotoPost(appID: string, authToken: string, usersV1UsersCurrentPhotoPostRequest: UsersV1UsersCurrentPhotoPostRequest, _options?: Configuration): Promise<UsersV1UsersCurrentPhotoPost201Response> {
        const result = this.api.usersV1UsersCurrentPhotoPost(appID, authToken, usersV1UsersCurrentPhotoPostRequest, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update user
     * @param appID 
     * @param authToken 
     * @param userSchema1 body
     */
    public usersV1UsersCurrentPutWithHttpInfo(appID: string, authToken: string, userSchema1: UserSchema1, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1UsersCurrentPutWithHttpInfo(appID, authToken, userSchema1, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update user
     * @param appID 
     * @param authToken 
     * @param userSchema1 body
     */
    public usersV1UsersCurrentPut(appID: string, authToken: string, userSchema1: UserSchema1, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1UsersCurrentPut(appID, authToken, userSchema1, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns current user roles
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersCurrentRolesGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<UserRolesSchema>> {
        const result = this.api.usersV1UsersCurrentRolesGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns current user roles
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersCurrentRolesGet(appID: string, authToken: string, _options?: Configuration): Promise<UserRolesSchema> {
        const result = this.api.usersV1UsersCurrentRolesGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_users 
     * List of users with details
     * @param appID 
     * @param authToken 
     * @param page Which page number to fetch
     * @param perPage The number of items for each page
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param dateCreated Filter by date_created
     * @param dateModified Filter by date_modified
     * @param email Filter by email
     * @param firstName Filter by first_name
     * @param lastName Filter by last_name
     * @param groups Filter by groups
     * @param hideEmail Filter by hide_email
     * @param hidePhone Filter by hide_phone
     * @param isAdmin Filter by is_admin
     * @param passwordChanged Filter by password_changed
     * @param phone Filter by phone
     * @param photo Filter by photo
     * @param status Filter by status
     * @param query Filter by any of first_name, last_name and email with wildcard support
     * @param ids Filter list of id:s (comma separated)
     */
    public usersV1UsersGetWithHttpInfo(appID: string, authToken: string, page?: number, perPage?: number, sort?: string, dateCreated?: string, dateModified?: string, email?: string, firstName?: string, lastName?: string, groups?: string, hideEmail?: string, hidePhone?: string, isAdmin?: string, passwordChanged?: string, phone?: string, photo?: string, status?: string, query?: string, ids?: string, _options?: Configuration): Promise<HttpInfo<UsersSchema1>> {
        const result = this.api.usersV1UsersGetWithHttpInfo(appID, authToken, page, perPage, sort, dateCreated, dateModified, email, firstName, lastName, groups, hideEmail, hidePhone, isAdmin, passwordChanged, phone, photo, status, query, ids, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_users 
     * List of users with details
     * @param appID 
     * @param authToken 
     * @param page Which page number to fetch
     * @param perPage The number of items for each page
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param dateCreated Filter by date_created
     * @param dateModified Filter by date_modified
     * @param email Filter by email
     * @param firstName Filter by first_name
     * @param lastName Filter by last_name
     * @param groups Filter by groups
     * @param hideEmail Filter by hide_email
     * @param hidePhone Filter by hide_phone
     * @param isAdmin Filter by is_admin
     * @param passwordChanged Filter by password_changed
     * @param phone Filter by phone
     * @param photo Filter by photo
     * @param status Filter by status
     * @param query Filter by any of first_name, last_name and email with wildcard support
     * @param ids Filter list of id:s (comma separated)
     */
    public usersV1UsersGet(appID: string, authToken: string, page?: number, perPage?: number, sort?: string, dateCreated?: string, dateModified?: string, email?: string, firstName?: string, lastName?: string, groups?: string, hideEmail?: string, hidePhone?: string, isAdmin?: string, passwordChanged?: string, phone?: string, photo?: string, status?: string, query?: string, ids?: string, _options?: Configuration): Promise<UsersSchema1> {
        const result = this.api.usersV1UsersGet(appID, authToken, page, perPage, sort, dateCreated, dateModified, email, firstName, lastName, groups, hideEmail, hidePhone, isAdmin, passwordChanged, phone, photo, status, query, ids, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_users 
     * Create a new user
     * @param appID 
     * @param authToken 
     * @param userCreateSchema body
     */
    public usersV1UsersPostWithHttpInfo(appID: string, authToken: string, userCreateSchema: UserCreateSchema, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1UsersPostWithHttpInfo(appID, authToken, userCreateSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_users 
     * Create a new user
     * @param appID 
     * @param authToken 
     * @param userCreateSchema body
     */
    public usersV1UsersPost(appID: string, authToken: string, userCreateSchema: UserCreateSchema, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1UsersPost(appID, authToken, userCreateSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_users 
     * Delete a particular user by id
     * @param appID 
     * @param authToken 
     * @param userId 
     */
    public usersV1UsersUserIdDeleteWithHttpInfo(appID: string, authToken: string, userId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersV1UsersUserIdDeleteWithHttpInfo(appID, authToken, userId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_users 
     * Delete a particular user by id
     * @param appID 
     * @param authToken 
     * @param userId 
     */
    public usersV1UsersUserIdDelete(appID: string, authToken: string, userId: string, _options?: Configuration): Promise<void> {
        const result = this.api.usersV1UsersUserIdDelete(appID, authToken, userId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_users 
     * Returns a particular user by id
     * @param appID 
     * @param authToken 
     * @param userId 
     */
    public usersV1UsersUserIdGetWithHttpInfo(appID: string, authToken: string, userId: string, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1UsersUserIdGetWithHttpInfo(appID, authToken, userId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_users 
     * Returns a particular user by id
     * @param appID 
     * @param authToken 
     * @param userId 
     */
    public usersV1UsersUserIdGet(appID: string, authToken: string, userId: string, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1UsersUserIdGet(appID, authToken, userId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_users 
     * Update user
     * @param appID 
     * @param authToken 
     * @param userId 
     * @param userSchema1 body
     */
    public usersV1UsersUserIdPatchWithHttpInfo(appID: string, authToken: string, userId: string, userSchema1: UserSchema1, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1UsersUserIdPatchWithHttpInfo(appID, authToken, userId, userSchema1, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_users 
     * Update user
     * @param appID 
     * @param authToken 
     * @param userId 
     * @param userSchema1 body
     */
    public usersV1UsersUserIdPatch(appID: string, authToken: string, userId: string, userSchema1: UserSchema1, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1UsersUserIdPatch(appID, authToken, userId, userSchema1, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_users 
     * Delete a photo image of a specified user.
     * @param appID 
     * @param authToken 
     * @param userId 
     */
    public usersV1UsersUserIdPhotoDeleteWithHttpInfo(appID: string, authToken: string, userId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersV1UsersUserIdPhotoDeleteWithHttpInfo(appID, authToken, userId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_users 
     * Delete a photo image of a specified user.
     * @param appID 
     * @param authToken 
     * @param userId 
     */
    public usersV1UsersUserIdPhotoDelete(appID: string, authToken: string, userId: string, _options?: Configuration): Promise<void> {
        const result = this.api.usersV1UsersUserIdPhotoDelete(appID, authToken, userId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_users 
     * Upload user photo image.
     * @param appID 
     * @param authToken 
     * @param userId 
     * @param usersV1UsersCurrentPhotoPostRequest 
     */
    public usersV1UsersUserIdPhotoPostWithHttpInfo(appID: string, authToken: string, userId: string, usersV1UsersCurrentPhotoPostRequest: UsersV1UsersCurrentPhotoPostRequest, _options?: Configuration): Promise<HttpInfo<UsersV1UsersCurrentPhotoPost201Response>> {
        const result = this.api.usersV1UsersUserIdPhotoPostWithHttpInfo(appID, authToken, userId, usersV1UsersCurrentPhotoPostRequest, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_users 
     * Upload user photo image.
     * @param appID 
     * @param authToken 
     * @param userId 
     * @param usersV1UsersCurrentPhotoPostRequest 
     */
    public usersV1UsersUserIdPhotoPost(appID: string, authToken: string, userId: string, usersV1UsersCurrentPhotoPostRequest: UsersV1UsersCurrentPhotoPostRequest, _options?: Configuration): Promise<UsersV1UsersCurrentPhotoPost201Response> {
        const result = this.api.usersV1UsersUserIdPhotoPost(appID, authToken, userId, usersV1UsersCurrentPhotoPostRequest, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_users 
     * Update user
     * @param appID 
     * @param authToken 
     * @param userId 
     * @param userSchema1 body
     */
    public usersV1UsersUserIdPutWithHttpInfo(appID: string, authToken: string, userId: string, userSchema1: UserSchema1, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1UsersUserIdPutWithHttpInfo(appID, authToken, userId, userSchema1, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_users 
     * Update user
     * @param appID 
     * @param authToken 
     * @param userId 
     * @param userSchema1 body
     */
    public usersV1UsersUserIdPut(appID: string, authToken: string, userId: string, userSchema1: UserSchema1, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1UsersUserIdPut(appID, authToken, userId, userSchema1, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_users 
     * Reindex a particular user by id
     * @param appID 
     * @param authToken 
     * @param userId 
     */
    public usersV1UsersUserIdReindexPostWithHttpInfo(appID: string, authToken: string, userId: string, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1UsersUserIdReindexPostWithHttpInfo(appID, authToken, userId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_users 
     * Reindex a particular user by id
     * @param appID 
     * @param authToken 
     * @param userId 
     */
    public usersV1UsersUserIdReindexPost(appID: string, authToken: string, userId: string, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1UsersUserIdReindexPost(appID, authToken, userId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_users 
     * Returns user roles by user_id
     * @param appID 
     * @param authToken 
     * @param userId 
     */
    public usersV1UsersUserIdRolesGetWithHttpInfo(appID: string, authToken: string, userId: string, _options?: Configuration): Promise<HttpInfo<UserRolesSchema>> {
        const result = this.api.usersV1UsersUserIdRolesGetWithHttpInfo(appID, authToken, userId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_users 
     * Returns user roles by user_id
     * @param appID 
     * @param authToken 
     * @param userId 
     */
    public usersV1UsersUserIdRolesGet(appID: string, authToken: string, userId: string, _options?: Configuration): Promise<UserRolesSchema> {
        const result = this.api.usersV1UsersUserIdRolesGet(appID, authToken, userId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_users 
     * Returns user roles by user_id
     * @param appID 
     * @param authToken 
     * @param userId 
     * @param role 
     */
    public usersV1UsersUserIdRolesRoleGetWithHttpInfo(appID: string, authToken: string, userId: string, role: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersV1UsersUserIdRolesRoleGetWithHttpInfo(appID, authToken, userId, role, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_users 
     * Returns user roles by user_id
     * @param appID 
     * @param authToken 
     * @param userId 
     * @param role 
     */
    public usersV1UsersUserIdRolesRoleGet(appID: string, authToken: string, userId: string, role: string, _options?: Configuration): Promise<void> {
        const result = this.api.usersV1UsersUserIdRolesRoleGet(appID, authToken, userId, role, _options);
        return result.toPromise();
    }

    /**
     * 
     * Remove a user\'s SAML IdP setting
     * @param appID 
     * @param authToken 
     * @param userId 
     */
    public usersV1UsersUserIdSamlDeleteWithHttpInfo(appID: string, authToken: string, userId: string, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1UsersUserIdSamlDeleteWithHttpInfo(appID, authToken, userId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Remove a user\'s SAML IdP setting
     * @param appID 
     * @param authToken 
     * @param userId 
     */
    public usersV1UsersUserIdSamlDelete(appID: string, authToken: string, userId: string, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1UsersUserIdSamlDelete(appID, authToken, userId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update a user\'s SAML IdP settings
     * @param appID 
     * @param authToken 
     * @param userId 
     * @param userSamlIdpUpdateSchema body
     */
    public usersV1UsersUserIdSamlPutWithHttpInfo(appID: string, authToken: string, userId: string, userSamlIdpUpdateSchema: UserSamlIdpUpdateSchema, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1UsersUserIdSamlPutWithHttpInfo(appID, authToken, userId, userSamlIdpUpdateSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update a user\'s SAML IdP settings
     * @param appID 
     * @param authToken 
     * @param userId 
     * @param userSamlIdpUpdateSchema body
     */
    public usersV1UsersUserIdSamlPut(appID: string, authToken: string, userId: string, userSamlIdpUpdateSchema: UserSamlIdpUpdateSchema, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1UsersUserIdSamlPut(appID, authToken, userId, userSamlIdpUpdateSchema, _options);
        return result.toPromise();
    }


}



import { ObservableUsersNotificationsApi } from './ObservableAPI';

import { UsersNotificationsApiRequestFactory, UsersNotificationsApiResponseProcessor} from "../apis/UsersNotificationsApi";
export class PromiseUsersNotificationsApi {
    private api: ObservableUsersNotificationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersNotificationsApiRequestFactory,
        responseProcessor?: UsersNotificationsApiResponseProcessor
    ) {
        this.api = new ObservableUsersNotificationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     *  Required roles:  - can_read_notification_settings 
     * Returns a particular notification_setting by id
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public usersNotificationsV1NotificationSettingsGetWithHttpInfo(appID: string, authToken: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<NotificationSettingsSchema>> {
        const result = this.api.usersNotificationsV1NotificationSettingsGetWithHttpInfo(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_notification_settings 
     * Returns a particular notification_setting by id
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public usersNotificationsV1NotificationSettingsGet(appID: string, authToken: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<NotificationSettingsSchema> {
        const result = this.api.usersNotificationsV1NotificationSettingsGet(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_notification_settings 
     * Returns a particular notification_setting by id
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param subObjectType 
     * @param eventType 
     * @param protocol 
     */
    public usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolGetWithHttpInfo(appID: string, authToken: string, objectType: string, subObjectType: string, eventType: string, protocol: string, _options?: Configuration): Promise<HttpInfo<NotificationSettingSchema>> {
        const result = this.api.usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolGetWithHttpInfo(appID, authToken, objectType, subObjectType, eventType, protocol, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_notification_settings 
     * Returns a particular notification_setting by id
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param subObjectType 
     * @param eventType 
     * @param protocol 
     */
    public usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolGet(appID: string, authToken: string, objectType: string, subObjectType: string, eventType: string, protocol: string, _options?: Configuration): Promise<NotificationSettingSchema> {
        const result = this.api.usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolGet(appID, authToken, objectType, subObjectType, eventType, protocol, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new notification_setting
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param subObjectType 
     * @param eventType 
     * @param protocol 
     * @param notificationSettingSchema body
     */
    public usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolPutWithHttpInfo(appID: string, authToken: string, objectType: string, subObjectType: string, eventType: string, protocol: string, notificationSettingSchema: NotificationSettingSchema, _options?: Configuration): Promise<HttpInfo<NotificationSettingSchema>> {
        const result = this.api.usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolPutWithHttpInfo(appID, authToken, objectType, subObjectType, eventType, protocol, notificationSettingSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new notification_setting
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param subObjectType 
     * @param eventType 
     * @param protocol 
     * @param notificationSettingSchema body
     */
    public usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolPut(appID: string, authToken: string, objectType: string, subObjectType: string, eventType: string, protocol: string, notificationSettingSchema: NotificationSettingSchema, _options?: Configuration): Promise<NotificationSettingSchema> {
        const result = this.api.usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolPut(appID, authToken, objectType, subObjectType, eventType, protocol, notificationSettingSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_notifications 
     * Update notification
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1NotificationsAllReadPutWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersNotificationsV1NotificationsAllReadPutWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_notifications 
     * Update notification
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1NotificationsAllReadPut(appID: string, authToken: string, _options?: Configuration): Promise<void> {
        const result = this.api.usersNotificationsV1NotificationsAllReadPut(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_notifications 
     * Returns a list of notifications
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public usersNotificationsV1NotificationsGetWithHttpInfo(appID: string, authToken: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<NotificationsSchema>> {
        const result = this.api.usersNotificationsV1NotificationsGetWithHttpInfo(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_notifications 
     * Returns a list of notifications
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public usersNotificationsV1NotificationsGet(appID: string, authToken: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<NotificationsSchema> {
        const result = this.api.usersNotificationsV1NotificationsGet(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_notifications 
     * Delete a particular notification by id
     * @param appID 
     * @param authToken 
     * @param notificationId 
     */
    public usersNotificationsV1NotificationsNotificationIdDeleteWithHttpInfo(appID: string, authToken: string, notificationId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersNotificationsV1NotificationsNotificationIdDeleteWithHttpInfo(appID, authToken, notificationId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_notifications 
     * Delete a particular notification by id
     * @param appID 
     * @param authToken 
     * @param notificationId 
     */
    public usersNotificationsV1NotificationsNotificationIdDelete(appID: string, authToken: string, notificationId: string, _options?: Configuration): Promise<void> {
        const result = this.api.usersNotificationsV1NotificationsNotificationIdDelete(appID, authToken, notificationId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_notifications 
     * Returns a particular notification by id
     * @param appID 
     * @param authToken 
     * @param notificationId 
     */
    public usersNotificationsV1NotificationsNotificationIdGetWithHttpInfo(appID: string, authToken: string, notificationId: string, _options?: Configuration): Promise<HttpInfo<NotificationSchema>> {
        const result = this.api.usersNotificationsV1NotificationsNotificationIdGetWithHttpInfo(appID, authToken, notificationId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_notifications 
     * Returns a particular notification by id
     * @param appID 
     * @param authToken 
     * @param notificationId 
     */
    public usersNotificationsV1NotificationsNotificationIdGet(appID: string, authToken: string, notificationId: string, _options?: Configuration): Promise<NotificationSchema> {
        const result = this.api.usersNotificationsV1NotificationsNotificationIdGet(appID, authToken, notificationId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new notification
     * @param appID 
     * @param authToken 
     * @param notificationSchema body
     */
    public usersNotificationsV1NotificationsPostWithHttpInfo(appID: string, authToken: string, notificationSchema: NotificationSchema, _options?: Configuration): Promise<HttpInfo<NotificationSchema>> {
        const result = this.api.usersNotificationsV1NotificationsPostWithHttpInfo(appID, authToken, notificationSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new notification
     * @param appID 
     * @param authToken 
     * @param notificationSchema body
     */
    public usersNotificationsV1NotificationsPost(appID: string, authToken: string, notificationSchema: NotificationSchema, _options?: Configuration): Promise<NotificationSchema> {
        const result = this.api.usersNotificationsV1NotificationsPost(appID, authToken, notificationSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new system notification
     * @param appID 
     * @param authToken 
     * @param systemNotificationSchema body
     */
    public usersNotificationsV1NotificationsSystemPostWithHttpInfo(appID: string, authToken: string, systemNotificationSchema: SystemNotificationSchema, _options?: Configuration): Promise<HttpInfo<NotificationSchema>> {
        const result = this.api.usersNotificationsV1NotificationsSystemPostWithHttpInfo(appID, authToken, systemNotificationSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new system notification
     * @param appID 
     * @param authToken 
     * @param systemNotificationSchema body
     */
    public usersNotificationsV1NotificationsSystemPost(appID: string, authToken: string, systemNotificationSchema: SystemNotificationSchema, _options?: Configuration): Promise<NotificationSchema> {
        const result = this.api.usersNotificationsV1NotificationsSystemPost(appID, authToken, systemNotificationSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_subscriptions 
     * Delete all user subscriptions for a specific object_type and object_id
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     */
    public usersNotificationsV1ObjectTypeObjectIdSubscriptionsAllDeleteWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, _options?: Configuration): Promise<HttpInfo<SubscriptionSchema>> {
        const result = this.api.usersNotificationsV1ObjectTypeObjectIdSubscriptionsAllDeleteWithHttpInfo(appID, authToken, objectType, objectId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_subscriptions 
     * Delete all user subscriptions for a specific object_type and object_id
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     */
    public usersNotificationsV1ObjectTypeObjectIdSubscriptionsAllDelete(appID: string, authToken: string, objectType: string, objectId: string, _options?: Configuration): Promise<SubscriptionSchema> {
        const result = this.api.usersNotificationsV1ObjectTypeObjectIdSubscriptionsAllDelete(appID, authToken, objectType, objectId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_subscriptions 
     * Returns user subscriptions for a specific object_type and object_id
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     */
    public usersNotificationsV1ObjectTypeObjectIdSubscriptionsGetWithHttpInfo(appID: string, authToken: string, objectType: string, objectId: string, _options?: Configuration): Promise<HttpInfo<SubscriptionsSchema>> {
        const result = this.api.usersNotificationsV1ObjectTypeObjectIdSubscriptionsGetWithHttpInfo(appID, authToken, objectType, objectId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_subscriptions 
     * Returns user subscriptions for a specific object_type and object_id
     * @param appID 
     * @param authToken 
     * @param objectType 
     * @param objectId 
     */
    public usersNotificationsV1ObjectTypeObjectIdSubscriptionsGet(appID: string, authToken: string, objectType: string, objectId: string, _options?: Configuration): Promise<SubscriptionsSchema> {
        const result = this.api.usersNotificationsV1ObjectTypeObjectIdSubscriptionsGet(appID, authToken, objectType, objectId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_subscriptions 
     * Returns all user subscriptions
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1SubscriptionsGetWithHttpInfo(appID: string, authToken: string, _options?: Configuration): Promise<HttpInfo<SubscriptionSchema>> {
        const result = this.api.usersNotificationsV1SubscriptionsGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_subscriptions 
     * Returns all user subscriptions
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1SubscriptionsGet(appID: string, authToken: string, _options?: Configuration): Promise<SubscriptionSchema> {
        const result = this.api.usersNotificationsV1SubscriptionsGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new subscription
     * @param appID 
     * @param authToken 
     * @param subscriptionSchema body
     */
    public usersNotificationsV1SubscriptionsPostWithHttpInfo(appID: string, authToken: string, subscriptionSchema: SubscriptionSchema, _options?: Configuration): Promise<HttpInfo<SubscriptionSchema>> {
        const result = this.api.usersNotificationsV1SubscriptionsPostWithHttpInfo(appID, authToken, subscriptionSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new subscription
     * @param appID 
     * @param authToken 
     * @param subscriptionSchema body
     */
    public usersNotificationsV1SubscriptionsPost(appID: string, authToken: string, subscriptionSchema: SubscriptionSchema, _options?: Configuration): Promise<SubscriptionSchema> {
        const result = this.api.usersNotificationsV1SubscriptionsPost(appID, authToken, subscriptionSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_subscriptions 
     * Delete a particular subscription by id
     * @param appID 
     * @param authToken 
     * @param subscriptionId 
     */
    public usersNotificationsV1SubscriptionsSubscriptionIdDeleteWithHttpInfo(appID: string, authToken: string, subscriptionId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersNotificationsV1SubscriptionsSubscriptionIdDeleteWithHttpInfo(appID, authToken, subscriptionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_subscriptions 
     * Delete a particular subscription by id
     * @param appID 
     * @param authToken 
     * @param subscriptionId 
     */
    public usersNotificationsV1SubscriptionsSubscriptionIdDelete(appID: string, authToken: string, subscriptionId: string, _options?: Configuration): Promise<void> {
        const result = this.api.usersNotificationsV1SubscriptionsSubscriptionIdDelete(appID, authToken, subscriptionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_subscriptions 
     * Returns a particular subscription by id
     * @param appID 
     * @param authToken 
     * @param subscriptionId 
     */
    public usersNotificationsV1SubscriptionsSubscriptionIdGetWithHttpInfo(appID: string, authToken: string, subscriptionId: string, _options?: Configuration): Promise<HttpInfo<SubscriptionSchema>> {
        const result = this.api.usersNotificationsV1SubscriptionsSubscriptionIdGetWithHttpInfo(appID, authToken, subscriptionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_subscriptions 
     * Returns a particular subscription by id
     * @param appID 
     * @param authToken 
     * @param subscriptionId 
     */
    public usersNotificationsV1SubscriptionsSubscriptionIdGet(appID: string, authToken: string, subscriptionId: string, _options?: Configuration): Promise<SubscriptionSchema> {
        const result = this.api.usersNotificationsV1SubscriptionsSubscriptionIdGet(appID, authToken, subscriptionId, _options);
        return result.toPromise();
    }


}



