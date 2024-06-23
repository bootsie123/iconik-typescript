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
     * @param objectType 
     * @param deleteBulkACLsSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclObjectTypeContentDeleteWithHttpInfo(objectType: string, deleteBulkACLsSchema: DeleteBulkACLsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1AclObjectTypeContentDeleteWithHttpInfo(objectType, deleteBulkACLsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_acls 
     * Delete acls for content of multiple objects
     * @param objectType 
     * @param deleteBulkACLsSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclObjectTypeContentDelete(objectType: string, deleteBulkACLsSchema: DeleteBulkACLsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1AclObjectTypeContentDelete(objectType, deleteBulkACLsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acls 
     * Create a new acl for content of multiple objects
     * @param objectType 
     * @param createBulkACLsSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclObjectTypeContentPutWithHttpInfo(objectType: string, createBulkACLsSchema: CreateBulkACLsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1AclObjectTypeContentPutWithHttpInfo(objectType, createBulkACLsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acls 
     * Create a new acl for content of multiple objects
     * @param objectType 
     * @param createBulkACLsSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclObjectTypeContentPut(objectType: string, createBulkACLsSchema: CreateBulkACLsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1AclObjectTypeContentPut(objectType, createBulkACLsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_acls 
     * Delete acls for multiple objects
     * @param objectType 
     * @param deleteACLsSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclObjectTypeDeleteWithHttpInfo(objectType: string, deleteACLsSchema: DeleteACLsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1AclObjectTypeDeleteWithHttpInfo(objectType, deleteACLsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_acls 
     * Delete acls for multiple objects
     * @param objectType 
     * @param deleteACLsSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclObjectTypeDelete(objectType: string, deleteACLsSchema: DeleteACLsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1AclObjectTypeDelete(objectType, deleteACLsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * List of object permissions
     * @param objectType 
     * @param objectKey 
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclObjectTypeObjectKeyGetWithHttpInfo(objectType: string, objectKey: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ACLSchema>> {
        const result = this.api.aclsV1AclObjectTypeObjectKeyGetWithHttpInfo(objectType, objectKey, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * List of object permissions
     * @param objectType 
     * @param objectKey 
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclObjectTypeObjectKeyGet(objectType: string, objectKey: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ACLSchema> {
        const result = this.api.aclsV1AclObjectTypeObjectKeyGet(objectType, objectKey, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * Check if particular object has required permission
     * @param objectType 
     * @param objectKey 
     * @param permission 
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclObjectTypeObjectKeyPermissionGetWithHttpInfo(objectType: string, objectKey: string, permission: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1AclObjectTypeObjectKeyPermissionGetWithHttpInfo(objectType, objectKey, permission, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * Check if particular object has required permission
     * @param objectType 
     * @param objectKey 
     * @param permission 
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclObjectTypeObjectKeyPermissionGet(objectType: string, objectKey: string, permission: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1AclObjectTypeObjectKeyPermissionGet(objectType, objectKey, permission, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * List of permissions for the user
     * @param objectType 
     * @param objectKey 
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclObjectTypeObjectKeyPermissionsGetWithHttpInfo(objectType: string, objectKey: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CombinedPermissionsSchema>> {
        const result = this.api.aclsV1AclObjectTypeObjectKeyPermissionsGetWithHttpInfo(objectType, objectKey, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * List of permissions for the user
     * @param objectType 
     * @param objectKey 
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclObjectTypeObjectKeyPermissionsGet(objectType: string, objectKey: string, appID?: string, authToken?: string, _options?: Configuration): Promise<CombinedPermissionsSchema> {
        const result = this.api.aclsV1AclObjectTypeObjectKeyPermissionsGet(objectType, objectKey, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * Check if objects have required permission
     * @param objectType 
     * @param permission 
     * @param aCLsSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclObjectTypePermissionPostWithHttpInfo(objectType: string, permission: string, aCLsSchema: ACLsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<BulkACLSchema>> {
        const result = this.api.aclsV1AclObjectTypePermissionPostWithHttpInfo(objectType, permission, aCLsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * Check if objects have required permission
     * @param objectType 
     * @param permission 
     * @param aCLsSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclObjectTypePermissionPost(objectType: string, permission: string, aCLsSchema: ACLsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<BulkACLSchema> {
        const result = this.api.aclsV1AclObjectTypePermissionPost(objectType, permission, aCLsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acls 
     * Create a new acl for multiple objects
     * @param objectType 
     * @param createACLsSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclObjectTypePutWithHttpInfo(objectType: string, createACLsSchema: CreateACLsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CreateACLsResultSchema>> {
        const result = this.api.aclsV1AclObjectTypePutWithHttpInfo(objectType, createACLsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acls 
     * Create a new acl for multiple objects
     * @param objectType 
     * @param createACLsSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclObjectTypePut(objectType: string, createACLsSchema: CreateACLsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<CreateACLsResultSchema> {
        const result = this.api.aclsV1AclObjectTypePut(objectType, createACLsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * Check if objects have required permission
     * @param checkBulkACLsSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclPostWithHttpInfo(checkBulkACLsSchema: CheckBulkACLsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<BulkACLSchema>> {
        const result = this.api.aclsV1AclPostWithHttpInfo(checkBulkACLsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * Check if objects have required permission
     * @param checkBulkACLsSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclPost(checkBulkACLsSchema: CheckBulkACLsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<BulkACLSchema> {
        const result = this.api.aclsV1AclPost(checkBulkACLsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acl_templates 
     * Retreive all acl templates
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclTemplatesGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ACLTemplatesSchema>> {
        const result = this.api.aclsV1AclTemplatesGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acl_templates 
     * Retreive all acl templates
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclTemplatesGet(appID?: string, authToken?: string, _options?: Configuration): Promise<ACLTemplatesSchema> {
        const result = this.api.aclsV1AclTemplatesGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acl_templates 
     * Create an acl template
     * @param aCLTemplateSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclTemplatesPostWithHttpInfo(aCLTemplateSchema: ACLTemplateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ACLTemplateSchema>> {
        const result = this.api.aclsV1AclTemplatesPostWithHttpInfo(aCLTemplateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acl_templates 
     * Create an acl template
     * @param aCLTemplateSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclTemplatesPost(aCLTemplateSchema: ACLTemplateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ACLTemplateSchema> {
        const result = this.api.aclsV1AclTemplatesPost(aCLTemplateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_acl_templates 
     * Remove an acl template
     * @param templateId 
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclTemplatesTemplateIdDeleteWithHttpInfo(templateId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1AclTemplatesTemplateIdDeleteWithHttpInfo(templateId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_acl_templates 
     * Remove an acl template
     * @param templateId 
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclTemplatesTemplateIdDelete(templateId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1AclTemplatesTemplateIdDelete(templateId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acl_templates 
     * Retreive an acl template
     * @param templateId 
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclTemplatesTemplateIdGetWithHttpInfo(templateId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ACLTemplateSchema>> {
        const result = this.api.aclsV1AclTemplatesTemplateIdGetWithHttpInfo(templateId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acl_templates 
     * Retreive an acl template
     * @param templateId 
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclTemplatesTemplateIdGet(templateId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ACLTemplateSchema> {
        const result = this.api.aclsV1AclTemplatesTemplateIdGet(templateId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Apply template permissions to an object
     * @param templateId 
     * @param objectType 
     * @param objectKey 
     * @param appID 
     * @param authToken 
     * @param ignoreReindexing 
     * @param restrictAclsCollectionId Do not apply any ACLs that are not in the collection_id provided (Parent collection normally)
     */
    public aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPostWithHttpInfo(templateId: string, objectType: string, objectKey: string, appID?: string, authToken?: string, ignoreReindexing?: boolean, restrictAclsCollectionId?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPostWithHttpInfo(templateId, objectType, objectKey, appID, authToken, ignoreReindexing, restrictAclsCollectionId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Apply template permissions to an object
     * @param templateId 
     * @param objectType 
     * @param objectKey 
     * @param appID 
     * @param authToken 
     * @param ignoreReindexing 
     * @param restrictAclsCollectionId Do not apply any ACLs that are not in the collection_id provided (Parent collection normally)
     */
    public aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPost(templateId: string, objectType: string, objectKey: string, appID?: string, authToken?: string, ignoreReindexing?: boolean, restrictAclsCollectionId?: string, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPost(templateId, objectType, objectKey, appID, authToken, ignoreReindexing, restrictAclsCollectionId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acl_templates 
     * Update an acl template
     * @param templateId 
     * @param aCLTemplateSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclTemplatesTemplateIdPatchWithHttpInfo(templateId: string, aCLTemplateSchema: ACLTemplateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ACLTemplateSchema>> {
        const result = this.api.aclsV1AclTemplatesTemplateIdPatchWithHttpInfo(templateId, aCLTemplateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acl_templates 
     * Update an acl template
     * @param templateId 
     * @param aCLTemplateSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclTemplatesTemplateIdPatch(templateId: string, aCLTemplateSchema: ACLTemplateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ACLTemplateSchema> {
        const result = this.api.aclsV1AclTemplatesTemplateIdPatch(templateId, aCLTemplateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acl_templates 
     * Update an acl template
     * @param templateId 
     * @param aCLTemplateSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclTemplatesTemplateIdPutWithHttpInfo(templateId: string, aCLTemplateSchema: ACLTemplateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ACLTemplateSchema>> {
        const result = this.api.aclsV1AclTemplatesTemplateIdPutWithHttpInfo(templateId, aCLTemplateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acl_templates 
     * Update an acl template
     * @param templateId 
     * @param aCLTemplateSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1AclTemplatesTemplateIdPut(templateId: string, aCLTemplateSchema: ACLTemplateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ACLTemplateSchema> {
        const result = this.api.aclsV1AclTemplatesTemplateIdPut(templateId, aCLTemplateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_acls 
     * Delete a particular acl by id for an object
     * @param groupId 
     * @param objectType 
     * @param objectKey 
     * @param appID 
     * @param authToken 
     */
    public aclsV1GroupsGroupIdAclObjectTypeObjectKeyDeleteWithHttpInfo(groupId: string, objectType: string, objectKey: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1GroupsGroupIdAclObjectTypeObjectKeyDeleteWithHttpInfo(groupId, objectType, objectKey, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_acls 
     * Delete a particular acl by id for an object
     * @param groupId 
     * @param objectType 
     * @param objectKey 
     * @param appID 
     * @param authToken 
     */
    public aclsV1GroupsGroupIdAclObjectTypeObjectKeyDelete(groupId: string, objectType: string, objectKey: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1GroupsGroupIdAclObjectTypeObjectKeyDelete(groupId, objectType, objectKey, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * List of groups permissions for an object
     * @param groupId 
     * @param objectType 
     * @param objectKey 
     * @param appID 
     * @param authToken 
     */
    public aclsV1GroupsGroupIdAclObjectTypeObjectKeyGetWithHttpInfo(groupId: string, objectType: string, objectKey: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<GroupACLSchema>> {
        const result = this.api.aclsV1GroupsGroupIdAclObjectTypeObjectKeyGetWithHttpInfo(groupId, objectType, objectKey, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * List of groups permissions for an object
     * @param groupId 
     * @param objectType 
     * @param objectKey 
     * @param appID 
     * @param authToken 
     */
    public aclsV1GroupsGroupIdAclObjectTypeObjectKeyGet(groupId: string, objectType: string, objectKey: string, appID?: string, authToken?: string, _options?: Configuration): Promise<GroupACLSchema> {
        const result = this.api.aclsV1GroupsGroupIdAclObjectTypeObjectKeyGet(groupId, objectType, objectKey, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * Check if group has particular permission for an object
     * @param groupId 
     * @param objectType 
     * @param objectKey 
     * @param permission 
     * @param appID 
     * @param authToken 
     */
    public aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGetWithHttpInfo(groupId: string, objectType: string, objectKey: string, permission: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGetWithHttpInfo(groupId, objectType, objectKey, permission, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * Check if group has particular permission for an object
     * @param groupId 
     * @param objectType 
     * @param objectKey 
     * @param permission 
     * @param appID 
     * @param authToken 
     */
    public aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGet(groupId: string, objectType: string, objectKey: string, permission: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGet(groupId, objectType, objectKey, permission, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acls 
     * Update or create group acl for an object
     * @param groupId 
     * @param objectType 
     * @param objectKey 
     * @param groupACLSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1GroupsGroupIdAclObjectTypeObjectKeyPutWithHttpInfo(groupId: string, objectType: string, objectKey: string, groupACLSchema: GroupACLSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<GroupACLSchema>> {
        const result = this.api.aclsV1GroupsGroupIdAclObjectTypeObjectKeyPutWithHttpInfo(groupId, objectType, objectKey, groupACLSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acls 
     * Update or create group acl for an object
     * @param groupId 
     * @param objectType 
     * @param objectKey 
     * @param groupACLSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1GroupsGroupIdAclObjectTypeObjectKeyPut(groupId: string, objectType: string, objectKey: string, groupACLSchema: GroupACLSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<GroupACLSchema> {
        const result = this.api.aclsV1GroupsGroupIdAclObjectTypeObjectKeyPut(groupId, objectType, objectKey, groupACLSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * List of share acls
     * @param objectType 
     * @param objectKey 
     * @param appID 
     * @param authToken 
     */
    public aclsV1SharesObjectTypeObjectKeyGetWithHttpInfo(objectType: string, objectKey: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SharesACLSchema>> {
        const result = this.api.aclsV1SharesObjectTypeObjectKeyGetWithHttpInfo(objectType, objectKey, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * List of share acls
     * @param objectType 
     * @param objectKey 
     * @param appID 
     * @param authToken 
     */
    public aclsV1SharesObjectTypeObjectKeyGet(objectType: string, objectKey: string, appID?: string, authToken?: string, _options?: Configuration): Promise<SharesACLSchema> {
        const result = this.api.aclsV1SharesObjectTypeObjectKeyGet(objectType, objectKey, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_acls 
     * Delete a share acl for an object
     * @param shareId 
     * @param objectType 
     * @param objectKey 
     * @param appID 
     * @param authToken 
     */
    public aclsV1SharesShareIdAclObjectTypeObjectKeyDeleteWithHttpInfo(shareId: string, objectType: string, objectKey: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypeObjectKeyDeleteWithHttpInfo(shareId, objectType, objectKey, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_acls 
     * Delete a share acl for an object
     * @param shareId 
     * @param objectType 
     * @param objectKey 
     * @param appID 
     * @param authToken 
     */
    public aclsV1SharesShareIdAclObjectTypeObjectKeyDelete(shareId: string, objectType: string, objectKey: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypeObjectKeyDelete(shareId, objectType, objectKey, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * List of share permissions for an object
     * @param shareId 
     * @param objectType 
     * @param objectKey 
     * @param appID 
     * @param authToken 
     */
    public aclsV1SharesShareIdAclObjectTypeObjectKeyGetWithHttpInfo(shareId: string, objectType: string, objectKey: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ShareACLSchema>> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypeObjectKeyGetWithHttpInfo(shareId, objectType, objectKey, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * List of share permissions for an object
     * @param shareId 
     * @param objectType 
     * @param objectKey 
     * @param appID 
     * @param authToken 
     */
    public aclsV1SharesShareIdAclObjectTypeObjectKeyGet(shareId: string, objectType: string, objectKey: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ShareACLSchema> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypeObjectKeyGet(shareId, objectType, objectKey, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * Returns a share acl for an object
     * @param shareId 
     * @param objectType 
     * @param objectKey 
     * @param permission 
     * @param appID 
     * @param authToken 
     */
    public aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGetWithHttpInfo(shareId: string, objectType: string, objectKey: string, permission: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGetWithHttpInfo(shareId, objectType, objectKey, permission, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * Returns a share acl for an object
     * @param shareId 
     * @param objectType 
     * @param objectKey 
     * @param permission 
     * @param appID 
     * @param authToken 
     */
    public aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGet(shareId: string, objectType: string, objectKey: string, permission: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGet(shareId, objectType, objectKey, permission, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acls 
     * Create a new share acl for an object
     * @param shareId 
     * @param objectType 
     * @param objectKey 
     * @param shareACLSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1SharesShareIdAclObjectTypeObjectKeyPostWithHttpInfo(shareId: string, objectType: string, objectKey: string, shareACLSchema: ShareACLSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ShareACLSchema>> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypeObjectKeyPostWithHttpInfo(shareId, objectType, objectKey, shareACLSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acls 
     * Create a new share acl for an object
     * @param shareId 
     * @param objectType 
     * @param objectKey 
     * @param shareACLSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1SharesShareIdAclObjectTypeObjectKeyPost(shareId: string, objectType: string, objectKey: string, shareACLSchema: ShareACLSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ShareACLSchema> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypeObjectKeyPost(shareId, objectType, objectKey, shareACLSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acls 
     * Update share acl for an object
     * @param shareId 
     * @param objectType 
     * @param objectKey 
     * @param shareACLSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1SharesShareIdAclObjectTypeObjectKeyPutWithHttpInfo(shareId: string, objectType: string, objectKey: string, shareACLSchema: ShareACLSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ShareACLSchema>> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypeObjectKeyPutWithHttpInfo(shareId, objectType, objectKey, shareACLSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acls 
     * Update share acl for an object
     * @param shareId 
     * @param objectType 
     * @param objectKey 
     * @param shareACLSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1SharesShareIdAclObjectTypeObjectKeyPut(shareId: string, objectType: string, objectKey: string, shareACLSchema: ShareACLSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ShareACLSchema> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypeObjectKeyPut(shareId, objectType, objectKey, shareACLSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acls 
     * Create a new acl for multiple share objects
     * @param shareId 
     * @param objectType 
     * @param createShareACLsSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1SharesShareIdAclObjectTypePutWithHttpInfo(shareId: string, objectType: string, createShareACLsSchema: CreateShareACLsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CreateACLsResultSchema>> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypePutWithHttpInfo(shareId, objectType, createShareACLsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acls 
     * Create a new acl for multiple share objects
     * @param shareId 
     * @param objectType 
     * @param createShareACLsSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1SharesShareIdAclObjectTypePut(shareId: string, objectType: string, createShareACLsSchema: CreateShareACLsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<CreateACLsResultSchema> {
        const result = this.api.aclsV1SharesShareIdAclObjectTypePut(shareId, objectType, createShareACLsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_acls 
     * Delete a user acl for an object
     * @param userId 
     * @param objectType 
     * @param objectKey 
     * @param appID 
     * @param authToken 
     */
    public aclsV1UsersUserIdAclObjectTypeObjectKeyDeleteWithHttpInfo(userId: string, objectType: string, objectKey: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.aclsV1UsersUserIdAclObjectTypeObjectKeyDeleteWithHttpInfo(userId, objectType, objectKey, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_acls 
     * Delete a user acl for an object
     * @param userId 
     * @param objectType 
     * @param objectKey 
     * @param appID 
     * @param authToken 
     */
    public aclsV1UsersUserIdAclObjectTypeObjectKeyDelete(userId: string, objectType: string, objectKey: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.aclsV1UsersUserIdAclObjectTypeObjectKeyDelete(userId, objectType, objectKey, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * List of user permissions for an object
     * @param userId 
     * @param objectType 
     * @param objectKey 
     * @param appID 
     * @param authToken 
     */
    public aclsV1UsersUserIdAclObjectTypeObjectKeyGetWithHttpInfo(userId: string, objectType: string, objectKey: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserACLSchema>> {
        const result = this.api.aclsV1UsersUserIdAclObjectTypeObjectKeyGetWithHttpInfo(userId, objectType, objectKey, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * List of user permissions for an object
     * @param userId 
     * @param objectType 
     * @param objectKey 
     * @param appID 
     * @param authToken 
     */
    public aclsV1UsersUserIdAclObjectTypeObjectKeyGet(userId: string, objectType: string, objectKey: string, appID?: string, authToken?: string, _options?: Configuration): Promise<UserACLSchema> {
        const result = this.api.aclsV1UsersUserIdAclObjectTypeObjectKeyGet(userId, objectType, objectKey, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * Returns a user acl for an object
     * @param userId 
     * @param objectType 
     * @param objectKey 
     * @param permission 
     * @param appID 
     * @param authToken 
     */
    public aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGetWithHttpInfo(userId: string, objectType: string, objectKey: string, permission: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserACLSchema>> {
        const result = this.api.aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGetWithHttpInfo(userId, objectType, objectKey, permission, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_acls 
     * Returns a user acl for an object
     * @param userId 
     * @param objectType 
     * @param objectKey 
     * @param permission 
     * @param appID 
     * @param authToken 
     */
    public aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGet(userId: string, objectType: string, objectKey: string, permission: string, appID?: string, authToken?: string, _options?: Configuration): Promise<UserACLSchema> {
        const result = this.api.aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGet(userId, objectType, objectKey, permission, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acls 
     * Update or create user acl for an object
     * @param userId 
     * @param objectType 
     * @param objectKey 
     * @param userACLSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1UsersUserIdAclObjectTypeObjectKeyPutWithHttpInfo(userId: string, objectType: string, objectKey: string, userACLSchema: UserACLSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserACLSchema>> {
        const result = this.api.aclsV1UsersUserIdAclObjectTypeObjectKeyPutWithHttpInfo(userId, objectType, objectKey, userACLSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_acls 
     * Update or create user acl for an object
     * @param userId 
     * @param objectType 
     * @param objectKey 
     * @param userACLSchema body
     * @param appID 
     * @param authToken 
     */
    public aclsV1UsersUserIdAclObjectTypeObjectKeyPut(userId: string, objectType: string, objectKey: string, userACLSchema: UserACLSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<UserACLSchema> {
        const result = this.api.aclsV1UsersUserIdAclObjectTypeObjectKeyPut(userId, objectType, objectKey, userACLSchema, appID, authToken, _options);
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
     * @param bulkSetApprovalSchema body
     * @param authToken 
     * @param appID 
     */
    public assetsV1ApprovalsBulkPostWithHttpInfo(bulkSetApprovalSchema: BulkSetApprovalSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1ApprovalsBulkPostWithHttpInfo(bulkSetApprovalSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_approval_status_in_bulk 
     * Create a job for bulk request & set approval
     * @param bulkSetApprovalSchema body
     * @param authToken 
     * @param appID 
     */
    public assetsV1ApprovalsBulkPost(bulkSetApprovalSchema: BulkSetApprovalSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1ApprovalsBulkPost(bulkSetApprovalSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_approval_status_in_bulk 
     * Create a job for bulk approval status removal
     * @param bulkRemoveApprovalSchema body
     * @param authToken 
     * @param appID 
     */
    public assetsV1ApprovalsBulkRemovePostWithHttpInfo(bulkRemoveApprovalSchema: BulkRemoveApprovalSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1ApprovalsBulkRemovePostWithHttpInfo(bulkRemoveApprovalSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_approval_status_in_bulk 
     * Create a job for bulk approval status removal
     * @param bulkRemoveApprovalSchema body
     * @param authToken 
     * @param appID 
     */
    public assetsV1ApprovalsBulkRemovePost(bulkRemoveApprovalSchema: BulkRemoveApprovalSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1ApprovalsBulkRemovePost(bulkRemoveApprovalSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Delete a particular asset by id
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdDeleteWithHttpInfo(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdDeleteWithHttpInfo(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Delete a particular asset by id
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdDelete(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdDelete(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets 
     * Returns a particular asset by id
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param includeCollections include collection membership
     * @param includeUsers include info about the users who have interacted with this asset
     */
    public assetsV1AssetsAssetIdGetWithHttpInfo(assetId: string, appID?: string, authToken?: string, includeCollections?: boolean, includeUsers?: boolean, _options?: Configuration): Promise<HttpInfo<AssetSchema>> {
        const result = this.api.assetsV1AssetsAssetIdGetWithHttpInfo(assetId, appID, authToken, includeCollections, includeUsers, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets 
     * Returns a particular asset by id
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param includeCollections include collection membership
     * @param includeUsers include info about the users who have interacted with this asset
     */
    public assetsV1AssetsAssetIdGet(assetId: string, appID?: string, authToken?: string, includeCollections?: boolean, includeUsers?: boolean, _options?: Configuration): Promise<AssetSchema> {
        const result = this.api.assetsV1AssetsAssetIdGet(assetId, appID, authToken, includeCollections, includeUsers, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets_history 
     * Get list of assets
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param filter A comma separated list of fieldnames with order For example - first_name,eq,Vlad;last_name,eq,Gudkov
     */
    public assetsV1AssetsAssetIdHistoryGetWithHttpInfo(assetId: string, appID?: string, authToken?: string, perPage?: number, page?: number, sort?: string, filter?: string, _options?: Configuration): Promise<HttpInfo<AssetHistoryEntitiesSchema>> {
        const result = this.api.assetsV1AssetsAssetIdHistoryGetWithHttpInfo(assetId, appID, authToken, perPage, page, sort, filter, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets_history 
     * Get list of assets
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param filter A comma separated list of fieldnames with order For example - first_name,eq,Vlad;last_name,eq,Gudkov
     */
    public assetsV1AssetsAssetIdHistoryGet(assetId: string, appID?: string, authToken?: string, perPage?: number, page?: number, sort?: string, filter?: string, _options?: Configuration): Promise<AssetHistoryEntitiesSchema> {
        const result = this.api.assetsV1AssetsAssetIdHistoryGet(assetId, appID, authToken, perPage, page, sort, filter, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets_history 
     * Deletes an asset history entity
     * @param assetId 
     * @param historyEntityId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdHistoryHistoryEntityIdDeleteWithHttpInfo(assetId: string, historyEntityId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AssetHistorySchema>> {
        const result = this.api.assetsV1AssetsAssetIdHistoryHistoryEntityIdDeleteWithHttpInfo(assetId, historyEntityId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets_history 
     * Deletes an asset history entity
     * @param assetId 
     * @param historyEntityId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdHistoryHistoryEntityIdDelete(assetId: string, historyEntityId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<AssetHistorySchema> {
        const result = this.api.assetsV1AssetsAssetIdHistoryHistoryEntityIdDelete(assetId, historyEntityId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets_history 
     * Get an asset history entity
     * @param assetId 
     * @param historyEntityId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdHistoryHistoryEntityIdGetWithHttpInfo(assetId: string, historyEntityId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AssetHistorySchema>> {
        const result = this.api.assetsV1AssetsAssetIdHistoryHistoryEntityIdGetWithHttpInfo(assetId, historyEntityId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets_history 
     * Get an asset history entity
     * @param assetId 
     * @param historyEntityId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdHistoryHistoryEntityIdGet(assetId: string, historyEntityId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<AssetHistorySchema> {
        const result = this.api.assetsV1AssetsAssetIdHistoryHistoryEntityIdGet(assetId, historyEntityId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_assets_history 
     * Reindex asset history entity
     * @param assetId 
     * @param historyEntityId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPostWithHttpInfo(assetId: string, historyEntityId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPostWithHttpInfo(assetId, historyEntityId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_assets_history 
     * Reindex asset history entity
     * @param assetId 
     * @param historyEntityId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPost(assetId: string, historyEntityId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdHistoryHistoryEntityIdReindexPost(assetId, historyEntityId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets_history 
     * Create an asset history entity
     * @param assetId 
     * @param assetHistorySchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdHistoryPostWithHttpInfo(assetId: string, assetHistorySchema: AssetHistorySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AssetHistorySchema>> {
        const result = this.api.assetsV1AssetsAssetIdHistoryPostWithHttpInfo(assetId, assetHistorySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets_history 
     * Create an asset history entity
     * @param assetId 
     * @param assetHistorySchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdHistoryPost(assetId: string, assetHistorySchema: AssetHistorySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AssetHistorySchema> {
        const result = this.api.assetsV1AssetsAssetIdHistoryPost(assetId, assetHistorySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Update asset
     * @param assetId 
     * @param assetSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdPatchWithHttpInfo(assetId: string, assetSchema: AssetSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AssetSchema>> {
        const result = this.api.assetsV1AssetsAssetIdPatchWithHttpInfo(assetId, assetSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Update asset
     * @param assetId 
     * @param assetSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdPatch(assetId: string, assetSchema: AssetSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AssetSchema> {
        const result = this.api.assetsV1AssetsAssetIdPatch(assetId, assetSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_assets 
     * Purges a particular asset by id immediately
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdPurgeDeleteWithHttpInfo(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdPurgeDeleteWithHttpInfo(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_assets 
     * Purges a particular asset by id immediately
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdPurgeDelete(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdPurgeDelete(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Update asset
     * @param assetId 
     * @param assetSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdPutWithHttpInfo(assetId: string, assetSchema: AssetSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AssetSchema>> {
        const result = this.api.assetsV1AssetsAssetIdPutWithHttpInfo(assetId, assetSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Update asset
     * @param assetId 
     * @param assetSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdPut(assetId: string, assetSchema: AssetSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AssetSchema> {
        const result = this.api.assetsV1AssetsAssetIdPut(assetId, assetSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_assets 
     * Reindex asset
     * @param assetId 
     * @param reindexAssetSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdReindexPostWithHttpInfo(assetId: string, reindexAssetSchema: ReindexAssetSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdReindexPostWithHttpInfo(assetId, reindexAssetSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_assets 
     * Reindex asset
     * @param assetId 
     * @param reindexAssetSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdReindexPost(assetId: string, reindexAssetSchema: ReindexAssetSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdReindexPost(assetId, reindexAssetSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_relations 
     * Returns an assets relations
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param includeDeleted Also show assets from recycle bin in relations
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     */
    public assetsV1AssetsAssetIdRelationsGetWithHttpInfo(assetId: string, appID?: string, authToken?: string, includeDeleted?: boolean, perPage?: number, page?: number, sort?: string, _options?: Configuration): Promise<HttpInfo<AssetsSchema>> {
        const result = this.api.assetsV1AssetsAssetIdRelationsGetWithHttpInfo(assetId, appID, authToken, includeDeleted, perPage, page, sort, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_relations 
     * Returns an assets relations
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param includeDeleted Also show assets from recycle bin in relations
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     */
    public assetsV1AssetsAssetIdRelationsGet(assetId: string, appID?: string, authToken?: string, includeDeleted?: boolean, perPage?: number, page?: number, sort?: string, _options?: Configuration): Promise<AssetsSchema> {
        const result = this.api.assetsV1AssetsAssetIdRelationsGet(assetId, appID, authToken, includeDeleted, perPage, page, sort, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_asset_relations 
     * Create a new asset relation
     * @param assetId 
     * @param relationSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdRelationsPostWithHttpInfo(assetId: string, relationSchema: RelationSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<RelationSchema>> {
        const result = this.api.assetsV1AssetsAssetIdRelationsPostWithHttpInfo(assetId, relationSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_asset_relations 
     * Create a new asset relation
     * @param assetId 
     * @param relationSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdRelationsPost(assetId: string, relationSchema: RelationSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<RelationSchema> {
        const result = this.api.assetsV1AssetsAssetIdRelationsPost(assetId, relationSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_relations 
     * Returns assets that has a relation to this asset
     * @param assetId 
     * @param relationType 
     * @param appID 
     * @param authToken 
     * @param includeDeleted Also show assets from recycle bin in relations
     */
    public assetsV1AssetsAssetIdRelationsRelationTypeGetWithHttpInfo(assetId: string, relationType: string, appID?: string, authToken?: string, includeDeleted?: boolean, _options?: Configuration): Promise<HttpInfo<AssetsSchema>> {
        const result = this.api.assetsV1AssetsAssetIdRelationsRelationTypeGetWithHttpInfo(assetId, relationType, appID, authToken, includeDeleted, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_relations 
     * Returns assets that has a relation to this asset
     * @param assetId 
     * @param relationType 
     * @param appID 
     * @param authToken 
     * @param includeDeleted Also show assets from recycle bin in relations
     */
    public assetsV1AssetsAssetIdRelationsRelationTypeGet(assetId: string, relationType: string, appID?: string, authToken?: string, includeDeleted?: boolean, _options?: Configuration): Promise<AssetsSchema> {
        const result = this.api.assetsV1AssetsAssetIdRelationsRelationTypeGet(assetId, relationType, appID, authToken, includeDeleted, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_asset_relations 
     * Delete a particular asset by id
     * @param assetId 
     * @param relationType 
     * @param relatedToAssetId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDeleteWithHttpInfo(assetId: string, relationType: string, relatedToAssetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDeleteWithHttpInfo(assetId, relationType, relatedToAssetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_asset_relations 
     * Delete a particular asset by id
     * @param assetId 
     * @param relationType 
     * @param relatedToAssetId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDelete(assetId: string, relationType: string, relatedToAssetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdDelete(assetId, relationType, relatedToAssetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_asset_relations 
     * Create a new asset relation
     * @param assetId 
     * @param relationType 
     * @param relatedToAssetId 
     * @param relationSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPostWithHttpInfo(assetId: string, relationType: string, relatedToAssetId: string, relationSchema: RelationSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<RelationSchema>> {
        const result = this.api.assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPostWithHttpInfo(assetId, relationType, relatedToAssetId, relationSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_asset_relations 
     * Create a new asset relation
     * @param assetId 
     * @param relationType 
     * @param relatedToAssetId 
     * @param relationSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPost(assetId: string, relationType: string, relatedToAssetId: string, relationSchema: RelationSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<RelationSchema> {
        const result = this.api.assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdPost(assetId, relationType, relatedToAssetId, relationSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_asset_relations 
     * Reverse a particular asset\'s relation
     * @param assetId 
     * @param relationType 
     * @param relatedToAssetId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePostWithHttpInfo(assetId: string, relationType: string, relatedToAssetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<RelationSchema>> {
        const result = this.api.assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePostWithHttpInfo(assetId, relationType, relatedToAssetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_asset_relations 
     * Reverse a particular asset\'s relation
     * @param assetId 
     * @param relationType 
     * @param relatedToAssetId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePost(assetId: string, relationType: string, relatedToAssetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<RelationSchema> {
        const result = this.api.assetsV1AssetsAssetIdRelationsRelationTypeRelatedToAssetIdReversePost(assetId, relationType, relatedToAssetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Restore deleted asset by id
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdRestorePutWithHttpInfo(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdRestorePutWithHttpInfo(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Restore deleted asset by id
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdRestorePut(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdRestorePut(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_assets 
     * Update metadata for asset
     * @param assetId 
     * @param assetElasticSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdSearchDocumentPutWithHttpInfo(assetId: string, assetElasticSchema: AssetElasticSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdSearchDocumentPutWithHttpInfo(assetId, assetElasticSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_assets 
     * Update metadata for asset
     * @param assetId 
     * @param assetElasticSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdSearchDocumentPut(assetId: string, assetElasticSchema: AssetElasticSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdSearchDocumentPut(assetId, assetElasticSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_segments 
     * Delete segments with either ids or by type
     * @param assetId 
     * @param deleteSegmentsSchema body
     * @param appID 
     * @param authToken 
     * @param immediately If false, delete segments asynchronously
     * @param ignoreReindexing If false, reindex
     */
    public assetsV1AssetsAssetIdSegmentsBulkDeleteWithHttpInfo(assetId: string, deleteSegmentsSchema: DeleteSegmentsSchema, appID?: string, authToken?: string, immediately?: boolean, ignoreReindexing?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsBulkDeleteWithHttpInfo(assetId, deleteSegmentsSchema, appID, authToken, immediately, ignoreReindexing, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_segments 
     * Delete segments with either ids or by type
     * @param assetId 
     * @param deleteSegmentsSchema body
     * @param appID 
     * @param authToken 
     * @param immediately If false, delete segments asynchronously
     * @param ignoreReindexing If false, reindex
     */
    public assetsV1AssetsAssetIdSegmentsBulkDelete(assetId: string, deleteSegmentsSchema: DeleteSegmentsSchema, appID?: string, authToken?: string, immediately?: boolean, ignoreReindexing?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsBulkDelete(assetId, deleteSegmentsSchema, appID, authToken, immediately, ignoreReindexing, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_segments 
     * Create multiple new segments for a single asset
     * @param assetId 
     * @param bulkCreateSegmentsSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdSegmentsBulkPostWithHttpInfo(assetId: string, bulkCreateSegmentsSchema: BulkCreateSegmentsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsBulkPostWithHttpInfo(assetId, bulkCreateSegmentsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_segments 
     * Create multiple new segments for a single asset
     * @param assetId 
     * @param bulkCreateSegmentsSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdSegmentsBulkPost(assetId: string, bulkCreateSegmentsSchema: BulkCreateSegmentsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsBulkPost(assetId, bulkCreateSegmentsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_segments 
     * List of segments
     * @param assetId 
     * @param appID 
     * @param authToken 
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
    public assetsV1AssetsAssetIdSegmentsGetWithHttpInfo(assetId: string, appID?: string, authToken?: string, sort?: string, ids?: string, query?: string, includes?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, transcriptionId?: string, versionId?: string, segmentType?: string, segmentColor?: string, timeStartMilliseconds?: number, timeEndMilliseconds?: number, timeStartMillisecondsGte?: number, timeEndMillisecondsLte?: number, status?: string, includeUsers?: boolean, _options?: Configuration): Promise<HttpInfo<SegmentsSchema>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsGetWithHttpInfo(assetId, appID, authToken, sort, ids, query, includes, perPage, page, scroll, scrollId, transcriptionId, versionId, segmentType, segmentColor, timeStartMilliseconds, timeEndMilliseconds, timeStartMillisecondsGte, timeEndMillisecondsLte, status, includeUsers, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_segments 
     * List of segments
     * @param assetId 
     * @param appID 
     * @param authToken 
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
    public assetsV1AssetsAssetIdSegmentsGet(assetId: string, appID?: string, authToken?: string, sort?: string, ids?: string, query?: string, includes?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, transcriptionId?: string, versionId?: string, segmentType?: string, segmentColor?: string, timeStartMilliseconds?: number, timeEndMilliseconds?: number, timeStartMillisecondsGte?: number, timeEndMillisecondsLte?: number, status?: string, includeUsers?: boolean, _options?: Configuration): Promise<SegmentsSchema> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsGet(assetId, appID, authToken, sort, ids, query, includes, perPage, page, scroll, scrollId, transcriptionId, versionId, segmentType, segmentColor, timeStartMilliseconds, timeEndMilliseconds, timeStartMillisecondsGte, timeEndMillisecondsLte, status, includeUsers, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_segments 
     * Create a new segment
     * @param assetId 
     * @param segmentSchema body
     * @param appID 
     * @param authToken 
     * @param shareUserEmail This header is used for shares by URL to identify user. Only valid emails are allowed.
     */
    public assetsV1AssetsAssetIdSegmentsPostWithHttpInfo(assetId: string, segmentSchema: SegmentSchema, appID?: string, authToken?: string, shareUserEmail?: string, _options?: Configuration): Promise<HttpInfo<SegmentSchema>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsPostWithHttpInfo(assetId, segmentSchema, appID, authToken, shareUserEmail, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_segments 
     * Create a new segment
     * @param assetId 
     * @param segmentSchema body
     * @param appID 
     * @param authToken 
     * @param shareUserEmail This header is used for shares by URL to identify user. Only valid emails are allowed.
     */
    public assetsV1AssetsAssetIdSegmentsPost(assetId: string, segmentSchema: SegmentSchema, appID?: string, authToken?: string, shareUserEmail?: string, _options?: Configuration): Promise<SegmentSchema> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsPost(assetId, segmentSchema, appID, authToken, shareUserEmail, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_segments 
     * Reindex assets segments
     * @param assetId 
     * @param reindexSegmentSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdSegmentsReindexPostWithHttpInfo(assetId: string, reindexSegmentSchema: ReindexSegmentSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsReindexPostWithHttpInfo(assetId, reindexSegmentSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_segments 
     * Reindex assets segments
     * @param assetId 
     * @param reindexSegmentSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdSegmentsReindexPost(assetId: string, reindexSegmentSchema: ReindexSegmentSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsReindexPost(assetId, reindexSegmentSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_segments 
     * Delete a particular segment from an asset by id
     * @param assetId 
     * @param segmentId 
     * @param appID 
     * @param authToken 
     * @param softDelete 
     */
    public assetsV1AssetsAssetIdSegmentsSegmentIdDeleteWithHttpInfo(assetId: string, segmentId: string, appID?: string, authToken?: string, softDelete?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentIdDeleteWithHttpInfo(assetId, segmentId, appID, authToken, softDelete, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_segments 
     * Delete a particular segment from an asset by id
     * @param assetId 
     * @param segmentId 
     * @param appID 
     * @param authToken 
     * @param softDelete 
     */
    public assetsV1AssetsAssetIdSegmentsSegmentIdDelete(assetId: string, segmentId: string, appID?: string, authToken?: string, softDelete?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentIdDelete(assetId, segmentId, appID, authToken, softDelete, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_segments 
     * Get a segment by ID
     * @param assetId 
     * @param segmentId 
     * @param appID 
     * @param authToken 
     * @param scroll If true passed then uses scroll pagination instead of default one
     * @param scrollId In order to get next batch of results using scroll pagination the scroll_id is required 
     */
    public assetsV1AssetsAssetIdSegmentsSegmentIdGetWithHttpInfo(assetId: string, segmentId: string, appID?: string, authToken?: string, scroll?: boolean, scrollId?: string, _options?: Configuration): Promise<HttpInfo<SegmentSchema>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentIdGetWithHttpInfo(assetId, segmentId, appID, authToken, scroll, scrollId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_segments 
     * Get a segment by ID
     * @param assetId 
     * @param segmentId 
     * @param appID 
     * @param authToken 
     * @param scroll If true passed then uses scroll pagination instead of default one
     * @param scrollId In order to get next batch of results using scroll pagination the scroll_id is required 
     */
    public assetsV1AssetsAssetIdSegmentsSegmentIdGet(assetId: string, segmentId: string, appID?: string, authToken?: string, scroll?: boolean, scrollId?: string, _options?: Configuration): Promise<SegmentSchema> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentIdGet(assetId, segmentId, appID, authToken, scroll, scrollId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_segments 
     * Update segment
     * @param assetId 
     * @param segmentId 
     * @param editSegmentSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdSegmentsSegmentIdPatchWithHttpInfo(assetId: string, segmentId: string, editSegmentSchema: EditSegmentSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SegmentSchema>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentIdPatchWithHttpInfo(assetId, segmentId, editSegmentSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_segments 
     * Update segment
     * @param assetId 
     * @param segmentId 
     * @param editSegmentSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdSegmentsSegmentIdPatch(assetId: string, segmentId: string, editSegmentSchema: EditSegmentSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SegmentSchema> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentIdPatch(assetId, segmentId, editSegmentSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_segments 
     * Update segment
     * @param assetId 
     * @param segmentId 
     * @param editSegmentSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdSegmentsSegmentIdPutWithHttpInfo(assetId: string, segmentId: string, editSegmentSchema: EditSegmentSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SegmentSchema>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentIdPutWithHttpInfo(assetId, segmentId, editSegmentSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_segments 
     * Update segment
     * @param assetId 
     * @param segmentId 
     * @param editSegmentSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdSegmentsSegmentIdPut(assetId: string, segmentId: string, editSegmentSchema: EditSegmentSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SegmentSchema> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentIdPut(assetId, segmentId, editSegmentSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_segments 
     * Reindex assets segment
     * @param assetId 
     * @param segmentId 
     * @param reindexSegmentSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdSegmentsSegmentIdReindexPostWithHttpInfo(assetId: string, segmentId: string, reindexSegmentSchema: ReindexSegmentSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentIdReindexPostWithHttpInfo(assetId, segmentId, reindexSegmentSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_segments 
     * Reindex assets segment
     * @param assetId 
     * @param segmentId 
     * @param reindexSegmentSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdSegmentsSegmentIdReindexPost(assetId: string, segmentId: string, reindexSegmentSchema: ReindexSegmentSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentIdReindexPost(assetId, segmentId, reindexSegmentSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_segments 
     * List of segments
     * @param assetId 
     * @param segmentType 
     * @param appID 
     * @param authToken 
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
    public assetsV1AssetsAssetIdSegmentsSegmentTypeGetWithHttpInfo(assetId: string, segmentType: string, appID?: string, authToken?: string, sort?: string, ids?: string, query?: string, includes?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, timeStartMilliseconds?: number, timeEndMilliseconds?: number, timeStartMillisecondsGte?: number, timeEndMillisecondsLte?: number, _options?: Configuration): Promise<HttpInfo<SegmentsSchema>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentTypeGetWithHttpInfo(assetId, segmentType, appID, authToken, sort, ids, query, includes, perPage, page, scroll, scrollId, timeStartMilliseconds, timeEndMilliseconds, timeStartMillisecondsGte, timeEndMillisecondsLte, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_segments 
     * List of segments
     * @param assetId 
     * @param segmentType 
     * @param appID 
     * @param authToken 
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
    public assetsV1AssetsAssetIdSegmentsSegmentTypeGet(assetId: string, segmentType: string, appID?: string, authToken?: string, sort?: string, ids?: string, query?: string, includes?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, timeStartMilliseconds?: number, timeEndMilliseconds?: number, timeStartMillisecondsGte?: number, timeEndMillisecondsLte?: number, _options?: Configuration): Promise<SegmentsSchema> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSegmentTypeGet(assetId, segmentType, appID, authToken, sort, ids, query, includes, perPage, page, scroll, scrollId, timeStartMilliseconds, timeEndMilliseconds, timeStartMillisecondsGte, timeEndMillisecondsLte, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_segments 
     * List of segments as SRT file
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param ids Only include these segments (Comma separated)
     * @param query Search using query
     * @param transcriptionId Filter segments by transcription_id
     * @param versionId Filter segments by version_id
     * @param segmentType Filter segments by segment_type
     * @param segmentColor Filter segments by segment_color
     * @param wordsPerLine Limit the number of words per subtitle line
     */
    public assetsV1AssetsAssetIdSegmentsSrtGetWithHttpInfo(assetId: string, appID?: string, authToken?: string, ids?: string, query?: string, transcriptionId?: string, versionId?: string, segmentType?: string, segmentColor?: string, wordsPerLine?: number, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSrtGetWithHttpInfo(assetId, appID, authToken, ids, query, transcriptionId, versionId, segmentType, segmentColor, wordsPerLine, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_segments 
     * List of segments as SRT file
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param ids Only include these segments (Comma separated)
     * @param query Search using query
     * @param transcriptionId Filter segments by transcription_id
     * @param versionId Filter segments by version_id
     * @param segmentType Filter segments by segment_type
     * @param segmentColor Filter segments by segment_color
     * @param wordsPerLine Limit the number of words per subtitle line
     */
    public assetsV1AssetsAssetIdSegmentsSrtGet(assetId: string, appID?: string, authToken?: string, ids?: string, query?: string, transcriptionId?: string, versionId?: string, segmentType?: string, segmentColor?: string, wordsPerLine?: number, _options?: Configuration): Promise<string> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsSrtGet(assetId, appID, authToken, ids, query, transcriptionId, versionId, segmentType, segmentColor, wordsPerLine, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_segments 
     * List of segments as WebVTT file
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param ids Only include these segments (Comma separated)
     * @param query Search using query
     * @param transcriptionId Filter segments by transcription_id
     * @param versionId Filter segments by version_id
     * @param segmentType Filter segments by segment_type
     * @param segmentColor Filter segments by segment_color
     * @param wordsPerLine Limit the number of words per subtitle line
     */
    public assetsV1AssetsAssetIdSegmentsVttGetWithHttpInfo(assetId: string, appID?: string, authToken?: string, ids?: string, query?: string, transcriptionId?: string, versionId?: string, segmentType?: string, segmentColor?: string, wordsPerLine?: number, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsVttGetWithHttpInfo(assetId, appID, authToken, ids, query, transcriptionId, versionId, segmentType, segmentColor, wordsPerLine, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_segments 
     * List of segments as WebVTT file
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param ids Only include these segments (Comma separated)
     * @param query Search using query
     * @param transcriptionId Filter segments by transcription_id
     * @param versionId Filter segments by version_id
     * @param segmentType Filter segments by segment_type
     * @param segmentColor Filter segments by segment_color
     * @param wordsPerLine Limit the number of words per subtitle line
     */
    public assetsV1AssetsAssetIdSegmentsVttGet(assetId: string, appID?: string, authToken?: string, ids?: string, query?: string, transcriptionId?: string, versionId?: string, segmentType?: string, segmentColor?: string, wordsPerLine?: number, _options?: Configuration): Promise<string> {
        const result = this.api.assetsV1AssetsAssetIdSegmentsVttGet(assetId, appID, authToken, ids, query, transcriptionId, versionId, segmentType, segmentColor, wordsPerLine, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_assets 
     * Delete a particular asset by id on failed uplaod
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdUploadsDeleteWithHttpInfo(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdUploadsDeleteWithHttpInfo(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_assets 
     * Delete a particular asset by id on failed uplaod
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdUploadsDelete(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdUploadsDelete(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_versions 
     * Create a new asset\'s version from another asset
     * @param assetId 
     * @param sourceAssetId 
     * @param createAssetVersionFromAssetSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPostWithHttpInfo(assetId: string, sourceAssetId: string, createAssetVersionFromAssetSchema: CreateAssetVersionFromAssetSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPostWithHttpInfo(assetId, sourceAssetId, createAssetVersionFromAssetSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_versions 
     * Create a new asset\'s version from another asset
     * @param assetId 
     * @param sourceAssetId 
     * @param createAssetVersionFromAssetSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPost(assetId: string, sourceAssetId: string, createAssetVersionFromAssetSchema: CreateAssetVersionFromAssetSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdVersionsFromAssetsSourceAssetIdPost(assetId, sourceAssetId, createAssetVersionFromAssetSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_versions 
     * Create a new asset\'s version from another version
     * @param assetId 
     * @param sourceVersionId 
     * @param createAssetVersionFromVersionSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPostWithHttpInfo(assetId: string, sourceVersionId: string, createAssetVersionFromVersionSchema: CreateAssetVersionFromVersionSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPostWithHttpInfo(assetId, sourceVersionId, createAssetVersionFromVersionSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_versions 
     * Create a new asset\'s version from another version
     * @param assetId 
     * @param sourceVersionId 
     * @param createAssetVersionFromVersionSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPost(assetId: string, sourceVersionId: string, createAssetVersionFromVersionSchema: CreateAssetVersionFromVersionSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdVersionsFromVersionsSourceVersionIdPost(assetId, sourceVersionId, createAssetVersionFromVersionSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_versions 
     * Delete all asset versions except the latest one
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsOldDeleteWithHttpInfo(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsOldDeleteWithHttpInfo(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_versions 
     * Delete all asset versions except the latest one
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsOldDelete(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdVersionsOldDelete(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_versions 
     * Add asset version
     * @param assetId 
     * @param createAssetVersionSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsPostWithHttpInfo(assetId: string, createAssetVersionSchema: CreateAssetVersionSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AssetVersionsSchema>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsPostWithHttpInfo(assetId, createAssetVersionSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_versions 
     * Add asset version
     * @param assetId 
     * @param createAssetVersionSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsPost(assetId: string, createAssetVersionSchema: CreateAssetVersionSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AssetVersionsSchema> {
        const result = this.api.assetsV1AssetsAssetIdVersionsPost(assetId, createAssetVersionSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_versions 
     * Delete a particular asset version by id
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     * @param hardDelete completely remove the version
     */
    public assetsV1AssetsAssetIdVersionsVersionIdDeleteWithHttpInfo(assetId: string, versionId: string, appID?: string, authToken?: string, hardDelete?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdDeleteWithHttpInfo(assetId, versionId, appID, authToken, hardDelete, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_versions 
     * Delete a particular asset version by id
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     * @param hardDelete completely remove the version
     */
    public assetsV1AssetsAssetIdVersionsVersionIdDelete(assetId: string, versionId: string, appID?: string, authToken?: string, hardDelete?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdDelete(assetId, versionId, appID, authToken, hardDelete, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_versions 
     * Edit asset version
     * @param assetId 
     * @param versionId 
     * @param assetVersionSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdPatchWithHttpInfo(assetId: string, versionId: string, assetVersionSchema: AssetVersionSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AssetVersionSchema>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdPatchWithHttpInfo(assetId, versionId, assetVersionSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_versions 
     * Edit asset version
     * @param assetId 
     * @param versionId 
     * @param assetVersionSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdPatch(assetId: string, versionId: string, assetVersionSchema: AssetVersionSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AssetVersionSchema> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdPatch(assetId, versionId, assetVersionSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_versions 
     * Promote a particular asset version to a latest version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdPromotePutWithHttpInfo(assetId: string, versionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdPromotePutWithHttpInfo(assetId, versionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_versions 
     * Promote a particular asset version to a latest version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdPromotePut(assetId: string, versionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdPromotePut(assetId, versionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_versions 
     * Edit asset version
     * @param assetId 
     * @param versionId 
     * @param assetVersionSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdPutWithHttpInfo(assetId: string, versionId: string, assetVersionSchema: AssetVersionSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AssetVersionSchema>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdPutWithHttpInfo(assetId, versionId, assetVersionSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_versions 
     * Edit asset version
     * @param assetId 
     * @param versionId 
     * @param assetVersionSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdPut(assetId: string, versionId: string, assetVersionSchema: AssetVersionSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AssetVersionSchema> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdPut(assetId, versionId, assetVersionSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcriptions 
     * Get a list of transcription properties
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGetWithHttpInfo(assetId: string, versionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AssetTranscriptionsPropertiesSchema>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGetWithHttpInfo(assetId, versionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcriptions 
     * Get a list of transcription properties
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGet(assetId: string, versionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<AssetTranscriptionsPropertiesSchema> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesGet(assetId, versionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcriptions 
     * Add a new transcription properties
     * @param assetId 
     * @param versionId 
     * @param assetTranscriptionPropertiesSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPostWithHttpInfo(assetId: string, versionId: string, assetTranscriptionPropertiesSchema: AssetTranscriptionPropertiesSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AssetTranscriptionPropertiesSchema>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPostWithHttpInfo(assetId, versionId, assetTranscriptionPropertiesSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcriptions 
     * Add a new transcription properties
     * @param assetId 
     * @param versionId 
     * @param assetTranscriptionPropertiesSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPost(assetId: string, versionId: string, assetTranscriptionPropertiesSchema: AssetTranscriptionPropertiesSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AssetTranscriptionPropertiesSchema> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsPropertiesPost(assetId, versionId, assetTranscriptionPropertiesSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcriptions 
     * Add a new transcription properties
     * @param assetId 
     * @param versionId 
     * @param assetTranscriptionFromSubtitleSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPostWithHttpInfo(assetId: string, versionId: string, assetTranscriptionFromSubtitleSchema: AssetTranscriptionFromSubtitleSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AssetTranscriptionPropertiesSchema>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPostWithHttpInfo(assetId, versionId, assetTranscriptionFromSubtitleSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcriptions 
     * Add a new transcription properties
     * @param assetId 
     * @param versionId 
     * @param assetTranscriptionFromSubtitleSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPost(assetId: string, versionId: string, assetTranscriptionFromSubtitleSchema: AssetTranscriptionFromSubtitleSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AssetTranscriptionPropertiesSchema> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsSubtitlesPost(assetId, versionId, assetTranscriptionFromSubtitleSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_transcriptions 
     * Delete transcription properties by ID
     * @param assetId 
     * @param versionId 
     * @param transcriptionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDeleteWithHttpInfo(assetId: string, versionId: string, transcriptionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDeleteWithHttpInfo(assetId, versionId, transcriptionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_transcriptions 
     * Delete transcription properties by ID
     * @param assetId 
     * @param versionId 
     * @param transcriptionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDelete(assetId: string, versionId: string, transcriptionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesDelete(assetId, versionId, transcriptionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcriptions 
     * Get a transcription properties by ID
     * @param assetId 
     * @param versionId 
     * @param transcriptionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGetWithHttpInfo(assetId: string, versionId: string, transcriptionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AssetTranscriptionPropertiesSchema>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGetWithHttpInfo(assetId, versionId, transcriptionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcriptions 
     * Get a transcription properties by ID
     * @param assetId 
     * @param versionId 
     * @param transcriptionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGet(assetId: string, versionId: string, transcriptionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<AssetTranscriptionPropertiesSchema> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesGet(assetId, versionId, transcriptionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcriptions 
     * Update transcription properties by ID
     * @param assetId 
     * @param versionId 
     * @param transcriptionId 
     * @param assetTranscriptionPropertiesSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatchWithHttpInfo(assetId: string, versionId: string, transcriptionId: string, assetTranscriptionPropertiesSchema: AssetTranscriptionPropertiesSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AssetTranscriptionPropertiesSchema>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatchWithHttpInfo(assetId, versionId, transcriptionId, assetTranscriptionPropertiesSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcriptions 
     * Update transcription properties by ID
     * @param assetId 
     * @param versionId 
     * @param transcriptionId 
     * @param assetTranscriptionPropertiesSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatch(assetId: string, versionId: string, transcriptionId: string, assetTranscriptionPropertiesSchema: AssetTranscriptionPropertiesSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AssetTranscriptionPropertiesSchema> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPatch(assetId, versionId, transcriptionId, assetTranscriptionPropertiesSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcriptions 
     * Update transcription properties by ID
     * @param assetId 
     * @param versionId 
     * @param transcriptionId 
     * @param assetTranscriptionPropertiesSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPutWithHttpInfo(assetId: string, versionId: string, transcriptionId: string, assetTranscriptionPropertiesSchema: AssetTranscriptionPropertiesSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AssetTranscriptionPropertiesSchema>> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPutWithHttpInfo(assetId, versionId, transcriptionId, assetTranscriptionPropertiesSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcriptions 
     * Update transcription properties by ID
     * @param assetId 
     * @param versionId 
     * @param transcriptionId 
     * @param assetTranscriptionPropertiesSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPut(assetId: string, versionId: string, transcriptionId: string, assetTranscriptionPropertiesSchema: AssetTranscriptionPropertiesSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AssetTranscriptionPropertiesSchema> {
        const result = this.api.assetsV1AssetsAssetIdVersionsVersionIdTranscriptionsTranscriptionIdPropertiesPut(assetId, versionId, transcriptionId, assetTranscriptionPropertiesSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets 
     * Mark asset as viewed
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdViewsPostWithHttpInfo(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AssetSchema>> {
        const result = this.api.assetsV1AssetsAssetIdViewsPostWithHttpInfo(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets 
     * Mark asset as viewed
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsAssetIdViewsPost(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<AssetSchema> {
        const result = this.api.assetsV1AssetsAssetIdViewsPost(assetId, appID, authToken, _options);
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
    public assetsV1AssetsGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, sort?: string, fieldName?: string, _options?: Configuration): Promise<HttpInfo<AssetsSchema>> {
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
    public assetsV1AssetsGet(appID?: string, authToken?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, sort?: string, fieldName?: string, _options?: Configuration): Promise<AssetsSchema> {
        const result = this.api.assetsV1AssetsGet(appID, authToken, perPage, page, scroll, scrollId, sort, fieldName, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Bulk update assets
     * @param bulkAssetEditSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsPatchWithHttpInfo(bulkAssetEditSchema: BulkAssetEditSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsPatchWithHttpInfo(bulkAssetEditSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Bulk update assets
     * @param bulkAssetEditSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsPatch(bulkAssetEditSchema: BulkAssetEditSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsPatch(bulkAssetEditSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_assets 
     * Create a new asset
     * @param assetCreateSchema body
     * @param appID 
     * @param authToken 
     * @param applyDefaultAcls Adds default ACLs to an asset
     * @param applyCollectionAcls Adds containing collection\&#39;s ACLs to an asset
     * @param assignToCollection Adds the asset to the collection specified in the body
     */
    public assetsV1AssetsPostWithHttpInfo(assetCreateSchema: AssetCreateSchema, appID?: string, authToken?: string, applyDefaultAcls?: boolean, applyCollectionAcls?: boolean, assignToCollection?: boolean, _options?: Configuration): Promise<HttpInfo<AssetSchema>> {
        const result = this.api.assetsV1AssetsPostWithHttpInfo(assetCreateSchema, appID, authToken, applyDefaultAcls, applyCollectionAcls, assignToCollection, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_assets 
     * Create a new asset
     * @param assetCreateSchema body
     * @param appID 
     * @param authToken 
     * @param applyDefaultAcls Adds default ACLs to an asset
     * @param applyCollectionAcls Adds containing collection\&#39;s ACLs to an asset
     * @param assignToCollection Adds the asset to the collection specified in the body
     */
    public assetsV1AssetsPost(assetCreateSchema: AssetCreateSchema, appID?: string, authToken?: string, applyDefaultAcls?: boolean, applyCollectionAcls?: boolean, assignToCollection?: boolean, _options?: Configuration): Promise<AssetSchema> {
        const result = this.api.assetsV1AssetsPost(assetCreateSchema, appID, authToken, applyDefaultAcls, applyCollectionAcls, assignToCollection, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Bulk update assets
     * @param bulkAssetEditSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsPutWithHttpInfo(bulkAssetEditSchema: BulkAssetEditSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsPutWithHttpInfo(bulkAssetEditSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Bulk update assets
     * @param bulkAssetEditSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsPut(bulkAssetEditSchema: BulkAssetEditSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsPut(bulkAssetEditSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_assets 
     * Trigger reindexing of all assets
     * @param appID 
     * @param authToken 
     * @param reindexAllAssetsSchema body
     */
    public assetsV1AssetsReindexPostWithHttpInfo(appID?: string, authToken?: string, reindexAllAssetsSchema?: ReindexAllAssetsSchema, _options?: Configuration): Promise<HttpInfo<void>> {
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
    public assetsV1AssetsReindexPost(appID?: string, authToken?: string, reindexAllAssetsSchema?: ReindexAllAssetsSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsReindexPost(appID, authToken, reindexAllAssetsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_relations 
     * Create a new asset relation type
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsRelationTypesGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<RelationTypesSchema>> {
        const result = this.api.assetsV1AssetsRelationTypesGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_relations 
     * Create a new asset relation type
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsRelationTypesGet(appID?: string, authToken?: string, _options?: Configuration): Promise<RelationTypesSchema> {
        const result = this.api.assetsV1AssetsRelationTypesGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_relation_types 
     * Create a new asset relation type
     * @param relationTypeSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsRelationTypesPostWithHttpInfo(relationTypeSchema: RelationTypeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<RelationTypeSchema>> {
        const result = this.api.assetsV1AssetsRelationTypesPostWithHttpInfo(relationTypeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_relation_types 
     * Create a new asset relation type
     * @param relationTypeSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsRelationTypesPost(relationTypeSchema: RelationTypeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<RelationTypeSchema> {
        const result = this.api.assetsV1AssetsRelationTypesPost(relationTypeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_asset_relation_types 
     * Delete an asset relation type
     * @param relationType 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsRelationTypesRelationTypeDeleteWithHttpInfo(relationType: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsRelationTypesRelationTypeDeleteWithHttpInfo(relationType, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_asset_relation_types 
     * Delete an asset relation type
     * @param relationType 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsRelationTypesRelationTypeDelete(relationType: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsRelationTypesRelationTypeDelete(relationType, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_relations 
     * Get a relation type
     * @param relationType 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsRelationTypesRelationTypeGetWithHttpInfo(relationType: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<RelationTypeSchema>> {
        const result = this.api.assetsV1AssetsRelationTypesRelationTypeGetWithHttpInfo(relationType, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_relations 
     * Get a relation type
     * @param relationType 
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsRelationTypesRelationTypeGet(relationType: string, appID?: string, authToken?: string, _options?: Configuration): Promise<RelationTypeSchema> {
        const result = this.api.assetsV1AssetsRelationTypesRelationTypeGet(relationType, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_relation_types 
     * Update an asset relation type
     * @param relationType 
     * @param relationTypeSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsRelationTypesRelationTypePatchWithHttpInfo(relationType: string, relationTypeSchema: RelationTypeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<RelationTypeSchema>> {
        const result = this.api.assetsV1AssetsRelationTypesRelationTypePatchWithHttpInfo(relationType, relationTypeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_relation_types 
     * Update an asset relation type
     * @param relationType 
     * @param relationTypeSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsRelationTypesRelationTypePatch(relationType: string, relationTypeSchema: RelationTypeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<RelationTypeSchema> {
        const result = this.api.assetsV1AssetsRelationTypesRelationTypePatch(relationType, relationTypeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_relation_types 
     * Update an asset relation type
     * @param relationType 
     * @param relationTypeSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsRelationTypesRelationTypePutWithHttpInfo(relationType: string, relationTypeSchema: RelationTypeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<RelationTypeSchema>> {
        const result = this.api.assetsV1AssetsRelationTypesRelationTypePutWithHttpInfo(relationType, relationTypeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_relation_types 
     * Update an asset relation type
     * @param relationType 
     * @param relationTypeSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsRelationTypesRelationTypePut(relationType: string, relationTypeSchema: RelationTypeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<RelationTypeSchema> {
        const result = this.api.assetsV1AssetsRelationTypesRelationTypePut(relationType, relationTypeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_segments 
     * Trigger reindexing of all segments
     * @param reindexAllSegmentsSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsSegmentsReindexPostWithHttpInfo(reindexAllSegmentsSchema: ReindexAllSegmentsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1AssetsSegmentsReindexPostWithHttpInfo(reindexAllSegmentsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_segments 
     * Trigger reindexing of all segments
     * @param reindexAllSegmentsSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1AssetsSegmentsReindexPost(reindexAllSegmentsSchema: ReindexAllSegmentsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1AssetsSegmentsReindexPost(reindexAllSegmentsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Returns list of ancestors of a collection
     * @param collectionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdAncestorsGetWithHttpInfo(collectionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CollectionsSchema>> {
        const result = this.api.assetsV1CollectionsCollectionIdAncestorsGetWithHttpInfo(collectionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Returns list of ancestors of a collection
     * @param collectionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdAncestorsGet(collectionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<CollectionsSchema> {
        const result = this.api.assetsV1CollectionsCollectionIdAncestorsGet(collectionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Returns all sub-collections and assets number for a specific collection
     * @param collectionId 
     * @param appID 
     * @param authToken 
     * @param onlyActive If false, include all the contents
     */
    public assetsV1CollectionsCollectionIdContentInfoGetWithHttpInfo(collectionId: string, appID?: string, authToken?: string, onlyActive?: boolean, _options?: Configuration): Promise<HttpInfo<CollectionContentInfoSchema>> {
        const result = this.api.assetsV1CollectionsCollectionIdContentInfoGetWithHttpInfo(collectionId, appID, authToken, onlyActive, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Returns all sub-collections and assets number for a specific collection
     * @param collectionId 
     * @param appID 
     * @param authToken 
     * @param onlyActive If false, include all the contents
     */
    public assetsV1CollectionsCollectionIdContentInfoGet(collectionId: string, appID?: string, authToken?: string, onlyActive?: boolean, _options?: Configuration): Promise<CollectionContentInfoSchema> {
        const result = this.api.assetsV1CollectionsCollectionIdContentInfoGet(collectionId, appID, authToken, onlyActive, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Returns contents of a collection by id
     * @param collectionId 
     * @param appID 
     * @param authToken 
     * @param objectTypes Comma separated list of content types. Example - assets,collections
     * @param objectIds Comma separated list of content ids.
     * @param externalId 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param filter A comma separated list of fieldnames with order For example - first_name,eq,Vlad;last_name,eq,Gudkov
     */
    public assetsV1CollectionsCollectionIdContentsGetWithHttpInfo(collectionId: string, appID?: string, authToken?: string, objectTypes?: string, objectIds?: string, externalId?: string, perPage?: number, page?: number, sort?: string, filter?: string, _options?: Configuration): Promise<HttpInfo<AssetsSchema>> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsGetWithHttpInfo(collectionId, appID, authToken, objectTypes, objectIds, externalId, perPage, page, sort, filter, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Returns contents of a collection by id
     * @param collectionId 
     * @param appID 
     * @param authToken 
     * @param objectTypes Comma separated list of content types. Example - assets,collections
     * @param objectIds Comma separated list of content ids.
     * @param externalId 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param filter A comma separated list of fieldnames with order For example - first_name,eq,Vlad;last_name,eq,Gudkov
     */
    public assetsV1CollectionsCollectionIdContentsGet(collectionId: string, appID?: string, authToken?: string, objectTypes?: string, objectIds?: string, externalId?: string, perPage?: number, page?: number, sort?: string, filter?: string, _options?: Configuration): Promise<AssetsSchema> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsGet(collectionId, appID, authToken, objectTypes, objectIds, externalId, perPage, page, sort, filter, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Delete a particular content object in a collection by id
     * @param collectionId 
     * @param objectType 
     * @param objectId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDeleteWithHttpInfo(collectionId: string, objectType: string, objectId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDeleteWithHttpInfo(collectionId, objectType, objectId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Delete a particular content object in a collection by id
     * @param collectionId 
     * @param objectType 
     * @param objectId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDelete(collectionId: string, objectType: string, objectId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdDelete(collectionId, objectType, objectId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Update an order of a particular content object in a collection
     * @param collectionId 
     * @param objectType 
     * @param objectId 
     * @param collectionContentOrderingSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPutWithHttpInfo(collectionId: string, objectType: string, objectId: string, collectionContentOrderingSchema: CollectionContentOrderingSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPutWithHttpInfo(collectionId, objectType, objectId, collectionContentOrderingSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Update an order of a particular content object in a collection
     * @param collectionId 
     * @param objectType 
     * @param objectId 
     * @param collectionContentOrderingSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPut(collectionId: string, objectType: string, objectId: string, collectionContentOrderingSchema: CollectionContentOrderingSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdPut(collectionId, objectType, objectId, collectionContentOrderingSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Reindex collection content
     * @param collectionId 
     * @param objectType 
     * @param objectId 
     * @param reindexCollectionContentSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPostWithHttpInfo(collectionId: string, objectType: string, objectId: string, reindexCollectionContentSchema: ReindexCollectionContentSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPostWithHttpInfo(collectionId, objectType, objectId, reindexCollectionContentSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Reindex collection content
     * @param collectionId 
     * @param objectType 
     * @param objectId 
     * @param reindexCollectionContentSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPost(collectionId: string, objectType: string, objectId: string, reindexCollectionContentSchema: ReindexCollectionContentSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsObjectTypeObjectIdReindexPost(collectionId, objectType, objectId, reindexCollectionContentSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Disable custom ordering for a collection\'s content
     * @param collectionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdContentsOrderingCustomDeleteWithHttpInfo(collectionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsOrderingCustomDeleteWithHttpInfo(collectionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Disable custom ordering for a collection\'s content
     * @param collectionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdContentsOrderingCustomDelete(collectionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsOrderingCustomDelete(collectionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Enable custom ordering for a collection\'s content
     * @param collectionId 
     * @param createCollectionContentOrderingSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdContentsOrderingCustomPostWithHttpInfo(collectionId: string, createCollectionContentOrderingSchema: CreateCollectionContentOrderingSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsOrderingCustomPostWithHttpInfo(collectionId, createCollectionContentOrderingSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Enable custom ordering for a collection\'s content
     * @param collectionId 
     * @param createCollectionContentOrderingSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdContentsOrderingCustomPost(collectionId: string, createCollectionContentOrderingSchema: CreateCollectionContentOrderingSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsOrderingCustomPost(collectionId, createCollectionContentOrderingSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Add an object to a collection
     * @param collectionId 
     * @param collectionContentSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdContentsPostWithHttpInfo(collectionId: string, collectionContentSchema: CollectionContentSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsPostWithHttpInfo(collectionId, collectionContentSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Add an object to a collection
     * @param collectionId 
     * @param collectionContentSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdContentsPost(collectionId: string, collectionContentSchema: CollectionContentSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdContentsPost(collectionId, collectionContentSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_collections 
     * Delete a particular collection by id
     * @param collectionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdDeleteWithHttpInfo(collectionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdDeleteWithHttpInfo(collectionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_collections 
     * Delete a particular collection by id
     * @param collectionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdDelete(collectionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdDelete(collectionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Gets the full path of the collection
     * @param collectionId 
     * @param appID 
     * @param authToken 
     * @param getUploadPath Use to get the upload path instead of the full path
     */
    public assetsV1CollectionsCollectionIdFullPathGetWithHttpInfo(collectionId: string, appID?: string, authToken?: string, getUploadPath?: boolean, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.assetsV1CollectionsCollectionIdFullPathGetWithHttpInfo(collectionId, appID, authToken, getUploadPath, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Gets the full path of the collection
     * @param collectionId 
     * @param appID 
     * @param authToken 
     * @param getUploadPath Use to get the upload path instead of the full path
     */
    public assetsV1CollectionsCollectionIdFullPathGet(collectionId: string, appID?: string, authToken?: string, getUploadPath?: boolean, _options?: Configuration): Promise<string> {
        const result = this.api.assetsV1CollectionsCollectionIdFullPathGet(collectionId, appID, authToken, getUploadPath, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Returns a particular collection by id
     * @param collectionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdGetWithHttpInfo(collectionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CollectionSchema>> {
        const result = this.api.assetsV1CollectionsCollectionIdGetWithHttpInfo(collectionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Returns a particular collection by id
     * @param collectionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdGet(collectionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<CollectionSchema> {
        const result = this.api.assetsV1CollectionsCollectionIdGet(collectionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Pick up to three asset_ids for collection keyframes
     * @param collectionId 
     * @param synchronizeCollectionKeyframesSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdKeyframesPostWithHttpInfo(collectionId: string, synchronizeCollectionKeyframesSchema: SynchronizeCollectionKeyframesSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdKeyframesPostWithHttpInfo(collectionId, synchronizeCollectionKeyframesSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Pick up to three asset_ids for collection keyframes
     * @param collectionId 
     * @param synchronizeCollectionKeyframesSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdKeyframesPost(collectionId: string, synchronizeCollectionKeyframesSchema: SynchronizeCollectionKeyframesSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdKeyframesPost(collectionId, synchronizeCollectionKeyframesSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Update collection
     * @param collectionId 
     * @param collectionInputSchema body
     * @param appID 
     * @param authToken 
     * @param changeParentMode Set to \&#39;move\&#39; or \&#39;copy\&#39;. Ignored if \&#39;parent_id\&#39; hasn\&#39;t changed
     */
    public assetsV1CollectionsCollectionIdPatchWithHttpInfo(collectionId: string, collectionInputSchema: CollectionInputSchema, appID?: string, authToken?: string, changeParentMode?: string, _options?: Configuration): Promise<HttpInfo<CollectionSchema>> {
        const result = this.api.assetsV1CollectionsCollectionIdPatchWithHttpInfo(collectionId, collectionInputSchema, appID, authToken, changeParentMode, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Update collection
     * @param collectionId 
     * @param collectionInputSchema body
     * @param appID 
     * @param authToken 
     * @param changeParentMode Set to \&#39;move\&#39; or \&#39;copy\&#39;. Ignored if \&#39;parent_id\&#39; hasn\&#39;t changed
     */
    public assetsV1CollectionsCollectionIdPatch(collectionId: string, collectionInputSchema: CollectionInputSchema, appID?: string, authToken?: string, changeParentMode?: string, _options?: Configuration): Promise<CollectionSchema> {
        const result = this.api.assetsV1CollectionsCollectionIdPatch(collectionId, collectionInputSchema, appID, authToken, changeParentMode, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_collections 
     * Purges deleted collection by id immediately
     * @param collectionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdPurgeDeleteWithHttpInfo(collectionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdPurgeDeleteWithHttpInfo(collectionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_collections 
     * Purges deleted collection by id immediately
     * @param collectionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdPurgeDelete(collectionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdPurgeDelete(collectionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Update collection
     * @param collectionId 
     * @param collectionInputSchema body
     * @param appID 
     * @param authToken 
     * @param changeParentMode Set to \&#39;move\&#39; or \&#39;copy\&#39;. Ignored if \&#39;parent_id\&#39; hasn\&#39;t changed
     */
    public assetsV1CollectionsCollectionIdPutWithHttpInfo(collectionId: string, collectionInputSchema: CollectionInputSchema, appID?: string, authToken?: string, changeParentMode?: string, _options?: Configuration): Promise<HttpInfo<CollectionSchema>> {
        const result = this.api.assetsV1CollectionsCollectionIdPutWithHttpInfo(collectionId, collectionInputSchema, appID, authToken, changeParentMode, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Update collection
     * @param collectionId 
     * @param collectionInputSchema body
     * @param appID 
     * @param authToken 
     * @param changeParentMode Set to \&#39;move\&#39; or \&#39;copy\&#39;. Ignored if \&#39;parent_id\&#39; hasn\&#39;t changed
     */
    public assetsV1CollectionsCollectionIdPut(collectionId: string, collectionInputSchema: CollectionInputSchema, appID?: string, authToken?: string, changeParentMode?: string, _options?: Configuration): Promise<CollectionSchema> {
        const result = this.api.assetsV1CollectionsCollectionIdPut(collectionId, collectionInputSchema, appID, authToken, changeParentMode, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Reindex collection and its content
     * @param collectionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdReindexContentsPostWithHttpInfo(collectionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdReindexContentsPostWithHttpInfo(collectionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Reindex collection and its content
     * @param collectionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdReindexContentsPost(collectionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdReindexContentsPost(collectionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Reindex collection
     * @param collectionId 
     * @param reindexCollectionSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdReindexPostWithHttpInfo(collectionId: string, reindexCollectionSchema: ReindexCollectionSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdReindexPostWithHttpInfo(collectionId, reindexCollectionSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Reindex collection
     * @param collectionId 
     * @param reindexCollectionSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdReindexPost(collectionId: string, reindexCollectionSchema: ReindexCollectionSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdReindexPost(collectionId, reindexCollectionSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Restore deleted collection by id
     * @param collectionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdRestorePutWithHttpInfo(collectionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdRestorePutWithHttpInfo(collectionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Restore deleted collection by id
     * @param collectionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdRestorePut(collectionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdRestorePut(collectionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Update metadata for collection
     * @param collectionId 
     * @param collectionSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdSearchDocumentPutWithHttpInfo(collectionId: string, collectionSchema: CollectionSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdSearchDocumentPutWithHttpInfo(collectionId, collectionSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Update metadata for collection
     * @param collectionId 
     * @param collectionSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdSearchDocumentPut(collectionId: string, collectionSchema: CollectionSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdSearchDocumentPut(collectionId, collectionSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Returns the size of all the collection\'s assets in bytes
     * @param collectionId 
     * @param appID 
     * @param authToken 
     * @param formatName Compute total size only for files with the specified format name
     * @param includeSubcollections Compute total size for all files including sub_collections\&#39; assets
     */
    public assetsV1CollectionsCollectionIdSizeGetWithHttpInfo(collectionId: string, appID?: string, authToken?: string, formatName?: string, includeSubcollections?: boolean, _options?: Configuration): Promise<HttpInfo<CollectionSizeSchema>> {
        const result = this.api.assetsV1CollectionsCollectionIdSizeGetWithHttpInfo(collectionId, appID, authToken, formatName, includeSubcollections, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Returns the size of all the collection\'s assets in bytes
     * @param collectionId 
     * @param appID 
     * @param authToken 
     * @param formatName Compute total size only for files with the specified format name
     * @param includeSubcollections Compute total size for all files including sub_collections\&#39; assets
     */
    public assetsV1CollectionsCollectionIdSizeGet(collectionId: string, appID?: string, authToken?: string, formatName?: string, includeSubcollections?: boolean, _options?: Configuration): Promise<CollectionSizeSchema> {
        const result = this.api.assetsV1CollectionsCollectionIdSizeGet(collectionId, appID, authToken, formatName, includeSubcollections, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Copy a collection (recursively) in to another collection
     * @param collectionId 
     * @param collectionContentSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdSubcollectionsPostWithHttpInfo(collectionId: string, collectionContentSchema: CollectionContentSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1CollectionsCollectionIdSubcollectionsPostWithHttpInfo(collectionId, collectionContentSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Copy a collection (recursively) in to another collection
     * @param collectionId 
     * @param collectionContentSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CollectionsCollectionIdSubcollectionsPost(collectionId: string, collectionContentSchema: CollectionContentSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsCollectionIdSubcollectionsPost(collectionId, collectionContentSchema, appID, authToken, _options);
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
    public assetsV1CollectionsGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, sort?: string, isRoot?: string, status?: string, _options?: Configuration): Promise<HttpInfo<CollectionsSchema>> {
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
    public assetsV1CollectionsGet(appID?: string, authToken?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, sort?: string, isRoot?: string, status?: string, _options?: Configuration): Promise<CollectionsSchema> {
        const result = this.api.assetsV1CollectionsGet(appID, authToken, perPage, page, scroll, scrollId, sort, isRoot, status, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_collections 
     * Create a new collection
     * @param collectionInputSchema body
     * @param appID 
     * @param authToken 
     * @param applyDefaultAcls Adds default ACLs to a collection
     * @param applyCollectionAcls Adds containing collection\&#39;s ACLs to a collection
     * @param restrictCollectionAcls Restricts ACLS to containing collection\&#39;s ACLs
     */
    public assetsV1CollectionsPostWithHttpInfo(collectionInputSchema: CollectionInputSchema, appID?: string, authToken?: string, applyDefaultAcls?: boolean, applyCollectionAcls?: boolean, restrictCollectionAcls?: boolean, _options?: Configuration): Promise<HttpInfo<CollectionSchema>> {
        const result = this.api.assetsV1CollectionsPostWithHttpInfo(collectionInputSchema, appID, authToken, applyDefaultAcls, applyCollectionAcls, restrictCollectionAcls, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_collections 
     * Create a new collection
     * @param collectionInputSchema body
     * @param appID 
     * @param authToken 
     * @param applyDefaultAcls Adds default ACLs to a collection
     * @param applyCollectionAcls Adds containing collection\&#39;s ACLs to a collection
     * @param restrictCollectionAcls Restricts ACLS to containing collection\&#39;s ACLs
     */
    public assetsV1CollectionsPost(collectionInputSchema: CollectionInputSchema, appID?: string, authToken?: string, applyDefaultAcls?: boolean, applyCollectionAcls?: boolean, restrictCollectionAcls?: boolean, _options?: Configuration): Promise<CollectionSchema> {
        const result = this.api.assetsV1CollectionsPost(collectionInputSchema, appID, authToken, applyDefaultAcls, applyCollectionAcls, restrictCollectionAcls, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_collections 
     * Trigger reindexing of all collections
     * @param appID 
     * @param authToken 
     * @param reindexAllCollectionsSchema body
     */
    public assetsV1CollectionsReindexPostWithHttpInfo(appID?: string, authToken?: string, reindexAllCollectionsSchema?: ReindexAllCollectionsSchema, _options?: Configuration): Promise<HttpInfo<void>> {
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
    public assetsV1CollectionsReindexPost(appID?: string, authToken?: string, reindexAllCollectionsSchema?: ReindexAllCollectionsSchema, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1CollectionsReindexPost(appID, authToken, reindexAllCollectionsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_custom_actions 
     * Schedules a celery task that will call custom action
     * @param context 
     * @param actionId 
     * @param customActionCallbackSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CustomActionsContextActionIdCallbackPostWithHttpInfo(context: string, actionId: string, customActionCallbackSchema: CustomActionCallbackSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CustomActionCallbackReplySchema>> {
        const result = this.api.assetsV1CustomActionsContextActionIdCallbackPostWithHttpInfo(context, actionId, customActionCallbackSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_custom_actions 
     * Schedules a celery task that will call custom action
     * @param context 
     * @param actionId 
     * @param customActionCallbackSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CustomActionsContextActionIdCallbackPost(context: string, actionId: string, customActionCallbackSchema: CustomActionCallbackSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<CustomActionCallbackReplySchema> {
        const result = this.api.assetsV1CustomActionsContextActionIdCallbackPost(context, actionId, customActionCallbackSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Deletes an custom action
     * @param context 
     * @param actionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CustomActionsContextActionIdDeleteWithHttpInfo(context: string, actionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CustomActionSchema>> {
        const result = this.api.assetsV1CustomActionsContextActionIdDeleteWithHttpInfo(context, actionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Deletes an custom action
     * @param context 
     * @param actionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CustomActionsContextActionIdDelete(context: string, actionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<CustomActionSchema> {
        const result = this.api.assetsV1CustomActionsContextActionIdDelete(context, actionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_custom_actions 
     * Get an asset custom action
     * @param context 
     * @param actionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CustomActionsContextActionIdGetWithHttpInfo(context: string, actionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CustomActionSchema>> {
        const result = this.api.assetsV1CustomActionsContextActionIdGetWithHttpInfo(context, actionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_custom_actions 
     * Get an asset custom action
     * @param context 
     * @param actionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CustomActionsContextActionIdGet(context: string, actionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<CustomActionSchema> {
        const result = this.api.assetsV1CustomActionsContextActionIdGet(context, actionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update an custom action
     * @param context 
     * @param actionId 
     * @param customActionSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CustomActionsContextActionIdPatchWithHttpInfo(context: string, actionId: string, customActionSchema: CustomActionSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CustomActionSchema>> {
        const result = this.api.assetsV1CustomActionsContextActionIdPatchWithHttpInfo(context, actionId, customActionSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update an custom action
     * @param context 
     * @param actionId 
     * @param customActionSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CustomActionsContextActionIdPatch(context: string, actionId: string, customActionSchema: CustomActionSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<CustomActionSchema> {
        const result = this.api.assetsV1CustomActionsContextActionIdPatch(context, actionId, customActionSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update an custom action
     * @param context 
     * @param actionId 
     * @param customActionSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CustomActionsContextActionIdPutWithHttpInfo(context: string, actionId: string, customActionSchema: CustomActionSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CustomActionSchema>> {
        const result = this.api.assetsV1CustomActionsContextActionIdPutWithHttpInfo(context, actionId, customActionSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update an custom action
     * @param context 
     * @param actionId 
     * @param customActionSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CustomActionsContextActionIdPut(context: string, actionId: string, customActionSchema: CustomActionSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<CustomActionSchema> {
        const result = this.api.assetsV1CustomActionsContextActionIdPut(context, actionId, customActionSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_custom_actions 
     * Get list of custom actions by context
     * @param context 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CustomActionsContextGetWithHttpInfo(context: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CustomActionsSchema>> {
        const result = this.api.assetsV1CustomActionsContextGetWithHttpInfo(context, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_custom_actions 
     * Get list of custom actions by context
     * @param context 
     * @param appID 
     * @param authToken 
     */
    public assetsV1CustomActionsContextGet(context: string, appID?: string, authToken?: string, _options?: Configuration): Promise<CustomActionsSchema> {
        const result = this.api.assetsV1CustomActionsContextGet(context, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create an custom action
     * @param context 
     * @param customActionSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CustomActionsContextPostWithHttpInfo(context: string, customActionSchema: CustomActionSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CustomActionSchema>> {
        const result = this.api.assetsV1CustomActionsContextPostWithHttpInfo(context, customActionSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create an custom action
     * @param context 
     * @param customActionSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CustomActionsContextPost(context: string, customActionSchema: CustomActionSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<CustomActionSchema> {
        const result = this.api.assetsV1CustomActionsContextPost(context, customActionSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_custom_actions 
     * Get list of custom actions
     * @param appID 
     * @param authToken 
     */
    public assetsV1CustomActionsGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CustomActionsSchema>> {
        const result = this.api.assetsV1CustomActionsGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_custom_actions 
     * Get list of custom actions
     * @param appID 
     * @param authToken 
     */
    public assetsV1CustomActionsGet(appID?: string, authToken?: string, _options?: Configuration): Promise<CustomActionsSchema> {
        const result = this.api.assetsV1CustomActionsGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_custom_actions 
     * Schedules a celery task that will call custom action on shares
     * @param context 
     * @param actionId 
     * @param customActionCallbackSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CustomActionsSharedContextActionIdCallbackPostWithHttpInfo(context: string, actionId: string, customActionCallbackSchema: CustomActionCallbackSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CustomActionCallbackReplySchema>> {
        const result = this.api.assetsV1CustomActionsSharedContextActionIdCallbackPostWithHttpInfo(context, actionId, customActionCallbackSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_custom_actions 
     * Schedules a celery task that will call custom action on shares
     * @param context 
     * @param actionId 
     * @param customActionCallbackSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1CustomActionsSharedContextActionIdCallbackPost(context: string, actionId: string, customActionCallbackSchema: CustomActionCallbackSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<CustomActionCallbackReplySchema> {
        const result = this.api.assetsV1CustomActionsSharedContextActionIdCallbackPost(context, actionId, customActionCallbackSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Delete assets from delete queue (Mark assets as active again)
     * @param deleteQueueSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueAssetsDeleteWithHttpInfo(deleteQueueSchema: DeleteQueueSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueAssetsDeleteWithHttpInfo(deleteQueueSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Delete assets from delete queue (Mark assets as active again)
     * @param deleteQueueSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueAssetsDelete(deleteQueueSchema: DeleteQueueSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueAssetsDelete(deleteQueueSchema, appID, authToken, _options);
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
    public assetsV1DeleteQueueAssetsGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, page?: number, sort?: string, filter?: string, _options?: Configuration): Promise<HttpInfo<AssetsSchema>> {
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
    public assetsV1DeleteQueueAssetsGet(appID?: string, authToken?: string, perPage?: number, page?: number, sort?: string, filter?: string, _options?: Configuration): Promise<AssetsSchema> {
        const result = this.api.assetsV1DeleteQueueAssetsGet(appID, authToken, perPage, page, sort, filter, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Add assets to a delete queue (Mark assets as deleted)
     * @param deleteQueueSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueAssetsPostWithHttpInfo(deleteQueueSchema: DeleteQueueSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueAssetsPostWithHttpInfo(deleteQueueSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Add assets to a delete queue (Mark assets as deleted)
     * @param deleteQueueSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueAssetsPost(deleteQueueSchema: DeleteQueueSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueAssetsPost(deleteQueueSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_assets 
     * Purge all assets from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueAssetsPurgeAllPostWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueAssetsPurgeAllPostWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_assets 
     * Purge all assets from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueAssetsPurgeAllPost(appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueAssetsPurgeAllPost(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_assets 
     * Purge assets from delete queue (Permanently delete)
     * @param deleteQueueSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueAssetsPurgePostWithHttpInfo(deleteQueueSchema: DeleteQueueSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueAssetsPurgePostWithHttpInfo(deleteQueueSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_assets 
     * Purge assets from delete queue (Permanently delete)
     * @param deleteQueueSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueAssetsPurgePost(deleteQueueSchema: DeleteQueueSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueAssetsPurgePost(deleteQueueSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Restore all assets from delete queue
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueAssetsRestoreAllPostWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueAssetsRestoreAllPostWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_assets 
     * Restore all assets from delete queue
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueAssetsRestoreAllPost(appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueAssetsRestoreAllPost(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Bulk delete objects
     * @param bulkDeleteSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueBulkPostWithHttpInfo(bulkDeleteSchema: BulkDeleteSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueBulkPostWithHttpInfo(bulkDeleteSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Bulk delete objects
     * @param bulkDeleteSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueBulkPost(bulkDeleteSchema: BulkDeleteSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueBulkPost(bulkDeleteSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Delete collections from delete queue (Mark collections as active again)
     * @param deleteQueueSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueCollectionsDeleteWithHttpInfo(deleteQueueSchema: DeleteQueueSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueCollectionsDeleteWithHttpInfo(deleteQueueSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Delete collections from delete queue (Mark collections as active again)
     * @param deleteQueueSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueCollectionsDelete(deleteQueueSchema: DeleteQueueSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueCollectionsDelete(deleteQueueSchema, appID, authToken, _options);
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
    public assetsV1DeleteQueueCollectionsGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, page?: number, sort?: string, filter?: string, _options?: Configuration): Promise<HttpInfo<CollectionsSchema>> {
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
    public assetsV1DeleteQueueCollectionsGet(appID?: string, authToken?: string, perPage?: number, page?: number, sort?: string, filter?: string, _options?: Configuration): Promise<CollectionsSchema> {
        const result = this.api.assetsV1DeleteQueueCollectionsGet(appID, authToken, perPage, page, sort, filter, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_collections 
     * Add collections to a delete queue (Mark collections as deleted)
     * @param deleteQueueSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueCollectionsPostWithHttpInfo(deleteQueueSchema: DeleteQueueSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueCollectionsPostWithHttpInfo(deleteQueueSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_collections 
     * Add collections to a delete queue (Mark collections as deleted)
     * @param deleteQueueSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueCollectionsPost(deleteQueueSchema: DeleteQueueSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueCollectionsPost(deleteQueueSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_collections 
     * Purge all collections from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueCollectionsPurgeAllPostWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueCollectionsPurgeAllPostWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_collections 
     * Purge all collections from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueCollectionsPurgeAllPost(appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueCollectionsPurgeAllPost(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_collections 
     * Purge collections from delete queue (Permanently delete)
     * @param deleteQueueSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueCollectionsPurgePostWithHttpInfo(deleteQueueSchema: DeleteQueueSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueCollectionsPurgePostWithHttpInfo(deleteQueueSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_collections 
     * Purge collections from delete queue (Permanently delete)
     * @param deleteQueueSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueCollectionsPurgePost(deleteQueueSchema: DeleteQueueSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueCollectionsPurgePost(deleteQueueSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Restore all collections from delete queue
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueCollectionsRestoreAllPostWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueueCollectionsRestoreAllPostWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_collections 
     * Restore all collections from delete queue
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueueCollectionsRestoreAllPost(appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueueCollectionsRestoreAllPost(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_assets - can_purge_collections 
     * Purge all assets and collections from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueuePurgeAllPostWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1DeleteQueuePurgeAllPostWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_assets - can_purge_collections 
     * Purge all assets and collections from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public assetsV1DeleteQueuePurgeAllPost(appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1DeleteQueuePurgeAllPost(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_favorites 
     * Removes all assets/collections from the list of favourites
     * @param appID 
     * @param authToken 
     */
    public assetsV1FavoritesAllDeleteWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1FavoritesAllDeleteWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_favorites 
     * Removes all assets/collections from the list of favourites
     * @param appID 
     * @param authToken 
     */
    public assetsV1FavoritesAllDelete(appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1FavoritesAllDelete(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_favorites 
     * Deletes objects items from a list of favorites
     * @param bulkDeleteFromFavoritesSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1FavoritesDeleteWithHttpInfo(bulkDeleteFromFavoritesSchema: BulkDeleteFromFavoritesSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<BulkDeleteFromFavoritesSchema>> {
        const result = this.api.assetsV1FavoritesDeleteWithHttpInfo(bulkDeleteFromFavoritesSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_favorites 
     * Deletes objects items from a list of favorites
     * @param bulkDeleteFromFavoritesSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1FavoritesDelete(bulkDeleteFromFavoritesSchema: BulkDeleteFromFavoritesSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<BulkDeleteFromFavoritesSchema> {
        const result = this.api.assetsV1FavoritesDelete(bulkDeleteFromFavoritesSchema, appID, authToken, _options);
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
    public assetsV1FavoritesGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, page?: number, sort?: string, _options?: Configuration): Promise<HttpInfo<FavoritesSchema>> {
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
    public assetsV1FavoritesGet(appID?: string, authToken?: string, perPage?: number, page?: number, sort?: string, _options?: Configuration): Promise<FavoritesSchema> {
        const result = this.api.assetsV1FavoritesGet(appID, authToken, perPage, page, sort, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_favorites 
     * Adds multiple objects to a list of favorites
     * @param bulkAddToFavoritesSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1FavoritesPostWithHttpInfo(bulkAddToFavoritesSchema: BulkAddToFavoritesSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<BulkAddToFavoritesSchema>> {
        const result = this.api.assetsV1FavoritesPostWithHttpInfo(bulkAddToFavoritesSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_favorites 
     * Adds multiple objects to a list of favorites
     * @param bulkAddToFavoritesSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1FavoritesPost(bulkAddToFavoritesSchema: BulkAddToFavoritesSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<BulkAddToFavoritesSchema> {
        const result = this.api.assetsV1FavoritesPost(bulkAddToFavoritesSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_favorites 
     * Removes all assets/collections from the list of favourites
     * @param appID 
     * @param authToken 
     */
    public assetsV1FavouritesAllDeleteWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1FavouritesAllDeleteWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_favorites 
     * Removes all assets/collections from the list of favourites
     * @param appID 
     * @param authToken 
     */
    public assetsV1FavouritesAllDelete(appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1FavouritesAllDelete(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Deletes an objects approval status
     * @param objectId 
     * @param objectType 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdApprovalsDeleteWithHttpInfo(objectId: string, objectType: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsDeleteWithHttpInfo(objectId, objectType, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Deletes an objects approval status
     * @param objectId 
     * @param objectType 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdApprovalsDelete(objectId: string, objectType: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsDelete(objectId, objectType, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_approval_status 
     * Deletes an objects approval status by user_id
     * @param objectId 
     * @param objectType 
     * @param email 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdApprovalsExternalEmailDeleteWithHttpInfo(objectId: string, objectType: string, email: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsExternalEmailDeleteWithHttpInfo(objectId, objectType, email, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_approval_status 
     * Deletes an objects approval status by user_id
     * @param objectId 
     * @param objectType 
     * @param email 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdApprovalsExternalEmailDelete(objectId: string, objectType: string, email: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsExternalEmailDelete(objectId, objectType, email, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_approval_request 
     * Returns an objects approval request
     * @param objectId 
     * @param objectType 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdApprovalsGetWithHttpInfo(objectId: string, objectType: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ApprovalsBySchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsGetWithHttpInfo(objectId, objectType, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_approval_request 
     * Returns an objects approval request
     * @param objectId 
     * @param objectType 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdApprovalsGet(objectId: string, objectType: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ApprovalsBySchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsGet(objectId, objectType, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_approval_status 
     * Returns an objects approval status
     * @param objectId 
     * @param objectType 
     * @param approvalBySchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdApprovalsPutWithHttpInfo(objectId: string, objectType: string, approvalBySchema: ApprovalBySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ApprovalBySchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsPutWithHttpInfo(objectId, objectType, approvalBySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_approval_status 
     * Returns an objects approval status
     * @param objectId 
     * @param objectType 
     * @param approvalBySchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdApprovalsPut(objectId: string, objectType: string, approvalBySchema: ApprovalBySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ApprovalBySchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsPut(objectId, objectType, approvalBySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_approval_request 
     * Deletes an objects approval request
     * @param objectId 
     * @param objectType 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdApprovalsRequestDeleteWithHttpInfo(objectId: string, objectType: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ApprovalSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsRequestDeleteWithHttpInfo(objectId, objectType, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_approval_request 
     * Deletes an objects approval request
     * @param objectId 
     * @param objectType 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdApprovalsRequestDelete(objectId: string, objectType: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ApprovalSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsRequestDelete(objectId, objectType, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_approval_request 
     * Returns an objects approval request
     * @param objectId 
     * @param objectType 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdApprovalsRequestGetWithHttpInfo(objectId: string, objectType: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ApprovalSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsRequestGetWithHttpInfo(objectId, objectType, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_approval_request 
     * Returns an objects approval request
     * @param objectId 
     * @param objectType 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdApprovalsRequestGet(objectId: string, objectType: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ApprovalSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsRequestGet(objectId, objectType, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_approval_request 
     * Edits an approval request
     * @param objectId 
     * @param objectType 
     * @param approvalSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdApprovalsRequestPatchWithHttpInfo(objectId: string, objectType: string, approvalSchema: ApprovalSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ApprovalSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsRequestPatchWithHttpInfo(objectId, objectType, approvalSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_approval_request 
     * Edits an approval request
     * @param objectId 
     * @param objectType 
     * @param approvalSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdApprovalsRequestPatch(objectId: string, objectType: string, approvalSchema: ApprovalSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ApprovalSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsRequestPatch(objectId, objectType, approvalSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_approval_request 
     * Creates an objects approval request
     * @param objectId 
     * @param objectType 
     * @param approvalSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdApprovalsRequestPostWithHttpInfo(objectId: string, objectType: string, approvalSchema: ApprovalSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ApprovalSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsRequestPostWithHttpInfo(objectId, objectType, approvalSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_approval_request 
     * Creates an objects approval request
     * @param objectId 
     * @param objectType 
     * @param approvalSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdApprovalsRequestPost(objectId: string, objectType: string, approvalSchema: ApprovalSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ApprovalSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsRequestPost(objectId, objectType, approvalSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_approval_request 
     * Edits an approval request
     * @param objectId 
     * @param objectType 
     * @param approvalSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdApprovalsRequestPutWithHttpInfo(objectId: string, objectType: string, approvalSchema: ApprovalSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ApprovalSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsRequestPutWithHttpInfo(objectId, objectType, approvalSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_approval_request 
     * Edits an approval request
     * @param objectId 
     * @param objectType 
     * @param approvalSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdApprovalsRequestPut(objectId: string, objectType: string, approvalSchema: ApprovalSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ApprovalSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsRequestPut(objectId, objectType, approvalSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_approval_status 
     * Deletes an objects approval status by user_id
     * @param objectId 
     * @param objectType 
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdApprovalsUserUserIdDeleteWithHttpInfo(objectId: string, objectType: string, userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsUserUserIdDeleteWithHttpInfo(objectId, objectType, userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_approval_status 
     * Deletes an objects approval status by user_id
     * @param objectId 
     * @param objectType 
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdApprovalsUserUserIdDelete(objectId: string, objectType: string, userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1ObjectTypeObjectIdApprovalsUserUserIdDelete(objectId, objectType, userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_shares 
     * Get list of shares
     * @param objectType 
     * @param objectId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId 
     */
    public assetsV1ObjectTypeObjectIdSharesGetWithHttpInfo(objectType: string, objectId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<SharesSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesGetWithHttpInfo(objectType, objectId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_shares 
     * Get list of shares
     * @param objectType 
     * @param objectId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId 
     */
    public assetsV1ObjectTypeObjectIdSharesGet(objectType: string, objectId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<SharesSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesGet(objectType, objectId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     * In case if is_approval=True, share options will be created respectively to user roles.<br/>In case if is_approval=True, share options will be created respectively to user roles.<br/> Required roles:  - can_write_shares 
     * Create a new share.
     * @param objectType 
     * @param objectId 
     * @param shareCreateSchema body
     * @param appID 
     * @param authToken 
     * @param isApproval 
     */
    public assetsV1ObjectTypeObjectIdSharesPostWithHttpInfo(objectType: string, objectId: string, shareCreateSchema: ShareCreateSchema, appID?: string, authToken?: string, isApproval?: boolean, _options?: Configuration): Promise<HttpInfo<ShareSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesPostWithHttpInfo(objectType, objectId, shareCreateSchema, appID, authToken, isApproval, _options);
        return result.toPromise();
    }

    /**
     * In case if is_approval=True, share options will be created respectively to user roles.<br/>In case if is_approval=True, share options will be created respectively to user roles.<br/> Required roles:  - can_write_shares 
     * Create a new share.
     * @param objectType 
     * @param objectId 
     * @param shareCreateSchema body
     * @param appID 
     * @param authToken 
     * @param isApproval 
     */
    public assetsV1ObjectTypeObjectIdSharesPost(objectType: string, objectId: string, shareCreateSchema: ShareCreateSchema, appID?: string, authToken?: string, isApproval?: boolean, _options?: Configuration): Promise<ShareSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesPost(objectType, objectId, shareCreateSchema, appID, authToken, isApproval, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_object_shares 
     * Delete a particular share by id
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdSharesShareIdDeleteWithHttpInfo(objectType: string, objectId: string, shareId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdDeleteWithHttpInfo(objectType, objectId, shareId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_object_shares 
     * Delete a particular share by id
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdSharesShareIdDelete(objectType: string, objectId: string, shareId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdDelete(objectType, objectId, shareId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns a particular share by id
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdSharesShareIdGetWithHttpInfo(objectType: string, objectId: string, shareId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ShareSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdGetWithHttpInfo(objectType, objectId, shareId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns a particular share by id
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdSharesShareIdGet(objectType: string, objectId: string, shareId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ShareSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdGet(objectType, objectId, shareId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_shares 
     * Update share
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param shareSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdSharesShareIdPutWithHttpInfo(objectType: string, objectId: string, shareId: string, shareSchema: ShareSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ShareSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdPutWithHttpInfo(objectType, objectId, shareId, shareSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_shares 
     * Update share
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param shareSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdSharesShareIdPut(objectType: string, objectId: string, shareId: string, shareSchema: ShareSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ShareSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdPut(objectType, objectId, shareId, shareSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_shares 
     * Get list of share users
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId 
     */
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersGetWithHttpInfo(objectType: string, objectId: string, shareId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<ShareUsersSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersGetWithHttpInfo(objectType, objectId, shareId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_shares 
     * Get list of share users
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId 
     */
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersGet(objectType: string, objectId: string, shareId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<ShareUsersSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersGet(objectType, objectId, shareId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_shares 
     * Add a new share_user to a share
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param shareUserSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersPostWithHttpInfo(objectType: string, objectId: string, shareId: string, shareUserSchema: ShareUserSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ShareUserSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersPostWithHttpInfo(objectType, objectId, shareId, shareUserSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_shares 
     * Add a new share_user to a share
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param shareUserSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersPost(objectType: string, objectId: string, shareId: string, shareUserSchema: ShareUserSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ShareUserSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersPost(objectType, objectId, shareId, shareUserSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_shares 
     * Delete a particular share_user user by id
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param shareUserId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDeleteWithHttpInfo(objectType: string, objectId: string, shareId: string, shareUserId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDeleteWithHttpInfo(objectType, objectId, shareId, shareUserId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_shares 
     * Delete a particular share_user user by id
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param shareUserId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDelete(objectType: string, objectId: string, shareId: string, shareUserId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdDelete(objectType, objectId, shareId, shareUserId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_shares 
     * Returns a particular share user by id
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param shareUserId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGetWithHttpInfo(objectType: string, objectId: string, shareId: string, shareUserId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ShareUserSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGetWithHttpInfo(objectType, objectId, shareId, shareUserId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_shares 
     * Returns a particular share user by id
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param shareUserId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGet(objectType: string, objectId: string, shareId: string, shareUserId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ShareUserSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdGet(objectType, objectId, shareId, shareUserId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_shares 
     * Update share user
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param shareUserId 
     * @param shareUserSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatchWithHttpInfo(objectType: string, objectId: string, shareId: string, shareUserId: string, shareUserSchema: ShareUserSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ShareUserSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatchWithHttpInfo(objectType, objectId, shareId, shareUserId, shareUserSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_shares 
     * Update share user
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param shareUserId 
     * @param shareUserSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatch(objectType: string, objectId: string, shareId: string, shareUserId: string, shareUserSchema: ShareUserSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ShareUserSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPatch(objectType, objectId, shareId, shareUserId, shareUserSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_shares 
     * Update share user
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param shareUserId 
     * @param shareUserSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPutWithHttpInfo(objectType: string, objectId: string, shareId: string, shareUserId: string, shareUserSchema: ShareUserSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ShareUserSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPutWithHttpInfo(objectType, objectId, shareId, shareUserId, shareUserSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_shares 
     * Update share user
     * @param objectType 
     * @param objectId 
     * @param shareId 
     * @param shareUserId 
     * @param shareUserSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPut(objectType: string, objectId: string, shareId: string, shareUserId: string, shareUserSchema: ShareUserSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ShareUserSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesShareIdUsersShareUserIdPut(objectType, objectId, shareId, shareUserId, shareUserSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_shares 
     * Generates a URL for the shared object
     * @param objectType 
     * @param objectId 
     * @param shareURLCreateSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdSharesUrlPostWithHttpInfo(objectType: string, objectId: string, shareURLCreateSchema: ShareURLCreateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ShareURLSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesUrlPostWithHttpInfo(objectType, objectId, shareURLCreateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_shares 
     * Generates a URL for the shared object
     * @param objectType 
     * @param objectId 
     * @param shareURLCreateSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdSharesUrlPost(objectType: string, objectId: string, shareURLCreateSchema: ShareURLCreateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ShareURLSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdSharesUrlPost(objectType, objectId, shareURLCreateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_approval_request 
     * Returns an objects approval request by version
     * @param objectType 
     * @param objectId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGetWithHttpInfo(objectType: string, objectId: string, versionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ApprovalsBySchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGetWithHttpInfo(objectType, objectId, versionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_approval_request 
     * Returns an objects approval request by version
     * @param objectType 
     * @param objectId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGet(objectType: string, objectId: string, versionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ApprovalsBySchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsGet(objectType, objectId, versionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_approval_request 
     * Returns an objects approval request by version
     * @param objectType 
     * @param objectId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGetWithHttpInfo(objectType: string, objectId: string, versionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ApprovalSchema>> {
        const result = this.api.assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGetWithHttpInfo(objectType, objectId, versionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_approval_request 
     * Returns an objects approval request by version
     * @param objectType 
     * @param objectId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     */
    public assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGet(objectType: string, objectId: string, versionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ApprovalSchema> {
        const result = this.api.assetsV1ObjectTypeObjectIdVersionsVersionIdApprovalsRequestGet(objectType, objectId, versionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_segments 
     * Trigger reindexing of specific segment ids
     * @param reindexSegmentsSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1SegmentsReindexPostWithHttpInfo(reindexSegmentsSchema: ReindexSegmentsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.assetsV1SegmentsReindexPostWithHttpInfo(reindexSegmentsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_segments 
     * Trigger reindexing of specific segment ids
     * @param reindexSegmentsSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1SegmentsReindexPost(reindexSegmentsSchema: ReindexSegmentsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.assetsV1SegmentsReindexPost(reindexSegmentsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_shares 
     * Create a new share of multiple objects (currently only assets are supported)
     * @param objectType 
     * @param bulkShareCreateSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1ShareObjectTypePostWithHttpInfo(objectType: string, bulkShareCreateSchema: BulkShareCreateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ShareSchema>> {
        const result = this.api.assetsV1ShareObjectTypePostWithHttpInfo(objectType, bulkShareCreateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_shares 
     * Create a new share of multiple objects (currently only assets are supported)
     * @param objectType 
     * @param bulkShareCreateSchema body
     * @param appID 
     * @param authToken 
     */
    public assetsV1ShareObjectTypePost(objectType: string, bulkShareCreateSchema: BulkShareCreateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ShareSchema> {
        const result = this.api.assetsV1ShareObjectTypePost(objectType, bulkShareCreateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Login for share
     * @param shareLoginSchema body
     * @param appID 
     */
    public assetsV1SharesAuthLoginPostWithHttpInfo(shareLoginSchema: ShareLoginSchema, appID?: string, _options?: Configuration): Promise<HttpInfo<ShareTokenSchema>> {
        const result = this.api.assetsV1SharesAuthLoginPostWithHttpInfo(shareLoginSchema, appID, _options);
        return result.toPromise();
    }

    /**
     * 
     * Login for share
     * @param shareLoginSchema body
     * @param appID 
     */
    public assetsV1SharesAuthLoginPost(shareLoginSchema: ShareLoginSchema, appID?: string, _options?: Configuration): Promise<ShareTokenSchema> {
        const result = this.api.assetsV1SharesAuthLoginPost(shareLoginSchema, appID, _options);
        return result.toPromise();
    }

    /**
     * 
     * Check if a token is valid
     * @param shareAuthToken 
     * @param appID 
     */
    public assetsV1SharesAuthTokenGetWithHttpInfo(shareAuthToken: string, appID?: string, _options?: Configuration): Promise<HttpInfo<ShareTokenSchema>> {
        const result = this.api.assetsV1SharesAuthTokenGetWithHttpInfo(shareAuthToken, appID, _options);
        return result.toPromise();
    }

    /**
     * 
     * Check if a token is valid
     * @param shareAuthToken 
     * @param appID 
     */
    public assetsV1SharesAuthTokenGet(shareAuthToken: string, appID?: string, _options?: Configuration): Promise<ShareTokenSchema> {
        const result = this.api.assetsV1SharesAuthTokenGet(shareAuthToken, appID, _options);
        return result.toPromise();
    }

    /**
     * 
     * Refreshes a token for share
     * @param shareAuthToken 
     * @param appID 
     */
    public assetsV1SharesAuthTokenPutWithHttpInfo(shareAuthToken: string, appID?: string, _options?: Configuration): Promise<HttpInfo<ShareTokenSchema>> {
        const result = this.api.assetsV1SharesAuthTokenPutWithHttpInfo(shareAuthToken, appID, _options);
        return result.toPromise();
    }

    /**
     * 
     * Refreshes a token for share
     * @param shareAuthToken 
     * @param appID 
     */
    public assetsV1SharesAuthTokenPut(shareAuthToken: string, appID?: string, _options?: Configuration): Promise<ShareTokenSchema> {
        const result = this.api.assetsV1SharesAuthTokenPut(shareAuthToken, appID, _options);
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
     * @param appId 
     * @param appID 
     * @param authToken 
     */
    public authV1AppsAppIdDeleteWithHttpInfo(appId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AppsAppIdDeleteWithHttpInfo(appId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_apps 
     * Delete a particular app by id
     * @param appId 
     * @param appID 
     * @param authToken 
     */
    public authV1AppsAppIdDelete(appId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AppsAppIdDelete(appId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_apps 
     * Returns a particular app by id
     * @param appId 
     * @param authToken 
     */
    public authV1AppsAppIdGetWithHttpInfo(appId: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AppSchema>> {
        const result = this.api.authV1AppsAppIdGetWithHttpInfo(appId, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_apps 
     * Returns a particular app by id
     * @param appId 
     * @param authToken 
     */
    public authV1AppsAppIdGet(appId: string, authToken?: string, _options?: Configuration): Promise<AppSchema> {
        const result = this.api.authV1AppsAppIdGet(appId, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_apps 
     * Update app
     * @param appId 
     * @param appSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1AppsAppIdPatchWithHttpInfo(appId: string, appSchema: AppSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AppSchema>> {
        const result = this.api.authV1AppsAppIdPatchWithHttpInfo(appId, appSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_apps 
     * Update app
     * @param appId 
     * @param appSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1AppsAppIdPatch(appId: string, appSchema: AppSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AppSchema> {
        const result = this.api.authV1AppsAppIdPatch(appId, appSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_apps 
     * Update app
     * @param appId 
     * @param appSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1AppsAppIdPutWithHttpInfo(appId: string, appSchema: AppSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AppSchema>> {
        const result = this.api.authV1AppsAppIdPutWithHttpInfo(appId, appSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_apps 
     * Update app
     * @param appId 
     * @param appSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1AppsAppIdPut(appId: string, appSchema: AppSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AppSchema> {
        const result = this.api.authV1AppsAppIdPut(appId, appSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_apps 
     * Creates app token by id and returns it\'s data
     * @param appId 
     * @param appID 
     * @param authToken 
     */
    public authV1AppsAppIdTokenPostWithHttpInfo(appId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<TokenSchema>> {
        const result = this.api.authV1AppsAppIdTokenPostWithHttpInfo(appId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_apps 
     * Creates app token by id and returns it\'s data
     * @param appId 
     * @param appID 
     * @param authToken 
     */
    public authV1AppsAppIdTokenPost(appId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<TokenSchema> {
        const result = this.api.authV1AppsAppIdTokenPost(appId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new token for the logged in user and store it for an external app
     * @param externalAuthRequestSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1AppsExternalAuthPostWithHttpInfo(externalAuthRequestSchema: ExternalAuthRequestSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ExternalAuthRequestResponseSchema>> {
        const result = this.api.authV1AppsExternalAuthPostWithHttpInfo(externalAuthRequestSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new token for the logged in user and store it for an external app
     * @param externalAuthRequestSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1AppsExternalAuthPost(externalAuthRequestSchema: ExternalAuthRequestSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ExternalAuthRequestResponseSchema> {
        const result = this.api.authV1AppsExternalAuthPost(externalAuthRequestSchema, appID, authToken, _options);
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
    public authV1AppsGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<AppsSchema>> {
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
    public authV1AppsGet(appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<AppsSchema> {
        const result = this.api.authV1AppsGet(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete an approved instance of an app
     * @param approvedInstanceId 
     * @param appID 
     * @param authToken 
     */
    public authV1AppsInstanceApprovedInstanceIdDeleteWithHttpInfo(approvedInstanceId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AppsInstanceApprovedInstanceIdDeleteWithHttpInfo(approvedInstanceId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete an approved instance of an app
     * @param approvedInstanceId 
     * @param appID 
     * @param authToken 
     */
    public authV1AppsInstanceApprovedInstanceIdDelete(approvedInstanceId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AppsInstanceApprovedInstanceIdDelete(approvedInstanceId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Gets an approved instance of an app
     * @param approvedInstanceId 
     * @param appID 
     * @param authToken 
     */
    public authV1AppsInstanceApprovedInstanceIdGetWithHttpInfo(approvedInstanceId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ExternalAuthSchema>> {
        const result = this.api.authV1AppsInstanceApprovedInstanceIdGetWithHttpInfo(approvedInstanceId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Gets an approved instance of an app
     * @param approvedInstanceId 
     * @param appID 
     * @param authToken 
     */
    public authV1AppsInstanceApprovedInstanceIdGet(approvedInstanceId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ExternalAuthSchema> {
        const result = this.api.authV1AppsInstanceApprovedInstanceIdGet(approvedInstanceId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new app instance
     * @param approvedAppInstanceSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1AppsInstancePostWithHttpInfo(approvedAppInstanceSchema: ApprovedAppInstanceSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ApprovedAppInstanceSchema>> {
        const result = this.api.authV1AppsInstancePostWithHttpInfo(approvedAppInstanceSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new app instance
     * @param approvedAppInstanceSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1AppsInstancePost(approvedAppInstanceSchema: ApprovedAppInstanceSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ApprovedAppInstanceSchema> {
        const result = this.api.authV1AppsInstancePost(approvedAppInstanceSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_apps 
     * Create a new app
     * @param appSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1AppsPostWithHttpInfo(appSchema: AppSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AppSchema>> {
        const result = this.api.authV1AppsPostWithHttpInfo(appSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_apps 
     * Create a new app
     * @param appSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1AppsPost(appSchema: AppSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AppSchema> {
        const result = this.api.authV1AppsPost(appSchema, appID, authToken, _options);
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
     * @param domain 
     * @param appID 
     * @param authToken 
     */
    public authV1AuthSamlDomainsDomainDeleteWithHttpInfo(domain: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AuthSamlDomainsDomainDeleteWithHttpInfo(domain, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Unbind domain from identity provider
     * @param domain 
     * @param appID 
     * @param authToken 
     */
    public authV1AuthSamlDomainsDomainDelete(domain: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AuthSamlDomainsDomainDelete(domain, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Bind domain to identity provider
     * @param domainIdentityProviderMapSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1AuthSamlDomainsPostWithHttpInfo(domainIdentityProviderMapSchema: DomainIdentityProviderMapSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<DomainIdentityProviderMapSchema>> {
        const result = this.api.authV1AuthSamlDomainsPostWithHttpInfo(domainIdentityProviderMapSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Bind domain to identity provider
     * @param domainIdentityProviderMapSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1AuthSamlDomainsPost(domainIdentityProviderMapSchema: DomainIdentityProviderMapSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<DomainIdentityProviderMapSchema> {
        const result = this.api.authV1AuthSamlDomainsPost(domainIdentityProviderMapSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * <br/>Input should be a SAML EntityDescriptor XML.
     * Convert an IdP EntityDescriptor XML into json suitable as a settings configuration.
     * @param identityProviderSchema 
     * @param appID 
     * @param authToken 
     */
    public authV1AuthSamlIdpConvertPostWithHttpInfo(identityProviderSchema: IdentityProviderSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<IdentityProviderSchema>> {
        const result = this.api.authV1AuthSamlIdpConvertPostWithHttpInfo(identityProviderSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * <br/>Input should be a SAML EntityDescriptor XML.
     * Convert an IdP EntityDescriptor XML into json suitable as a settings configuration.
     * @param identityProviderSchema 
     * @param appID 
     * @param authToken 
     */
    public authV1AuthSamlIdpConvertPost(identityProviderSchema: IdentityProviderSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<IdentityProviderSchema> {
        const result = this.api.authV1AuthSamlIdpConvertPost(identityProviderSchema, appID, authToken, _options);
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
    public authV1AuthSamlIdpGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<IdentityProvidersSchema>> {
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
    public authV1AuthSamlIdpGet(appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<IdentityProvidersSchema> {
        const result = this.api.authV1AuthSamlIdpGet(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_identity_providers 
     * Delete a particular identity provider by id
     * @param identityProviderId 
     * @param appID 
     * @param authToken 
     */
    public authV1AuthSamlIdpIdentityProviderIdDeleteWithHttpInfo(identityProviderId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AuthSamlIdpIdentityProviderIdDeleteWithHttpInfo(identityProviderId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_identity_providers 
     * Delete a particular identity provider by id
     * @param identityProviderId 
     * @param appID 
     * @param authToken 
     */
    public authV1AuthSamlIdpIdentityProviderIdDelete(identityProviderId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AuthSamlIdpIdentityProviderIdDelete(identityProviderId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_identity_providers 
     * Get a particular identity provider by id
     * @param identityProviderId 
     * @param appID 
     * @param authToken 
     */
    public authV1AuthSamlIdpIdentityProviderIdGetWithHttpInfo(identityProviderId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<IdentityProviderSchema>> {
        const result = this.api.authV1AuthSamlIdpIdentityProviderIdGetWithHttpInfo(identityProviderId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_identity_providers 
     * Get a particular identity provider by id
     * @param identityProviderId 
     * @param appID 
     * @param authToken 
     */
    public authV1AuthSamlIdpIdentityProviderIdGet(identityProviderId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<IdentityProviderSchema> {
        const result = this.api.authV1AuthSamlIdpIdentityProviderIdGet(identityProviderId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_identity_providers 
     * Update a particular identity provider by id
     * @param identityProviderId 
     * @param identityProviderSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1AuthSamlIdpIdentityProviderIdPatchWithHttpInfo(identityProviderId: string, identityProviderSchema: IdentityProviderSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<IdentityProviderSchema>> {
        const result = this.api.authV1AuthSamlIdpIdentityProviderIdPatchWithHttpInfo(identityProviderId, identityProviderSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_identity_providers 
     * Update a particular identity provider by id
     * @param identityProviderId 
     * @param identityProviderSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1AuthSamlIdpIdentityProviderIdPatch(identityProviderId: string, identityProviderSchema: IdentityProviderSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<IdentityProviderSchema> {
        const result = this.api.authV1AuthSamlIdpIdentityProviderIdPatch(identityProviderId, identityProviderSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_identity_providers 
     * Update a particular identity provider by id
     * @param identityProviderId 
     * @param identityProviderSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1AuthSamlIdpIdentityProviderIdPutWithHttpInfo(identityProviderId: string, identityProviderSchema: IdentityProviderSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<IdentityProviderSchema>> {
        const result = this.api.authV1AuthSamlIdpIdentityProviderIdPutWithHttpInfo(identityProviderId, identityProviderSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_identity_providers 
     * Update a particular identity provider by id
     * @param identityProviderId 
     * @param identityProviderSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1AuthSamlIdpIdentityProviderIdPut(identityProviderId: string, identityProviderSchema: IdentityProviderSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<IdentityProviderSchema> {
        const result = this.api.authV1AuthSamlIdpIdentityProviderIdPut(identityProviderId, identityProviderSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * <br/>Input can either be an IdentityProviderSchema as json or a SAML<br/>EntityDescriptor XML.<br/>Input can either be an IdentityProviderSchema as json or a SAML<br/>EntityDescriptor XML. Required roles:  - can_write_identity_providers 
     * Create a new identity provider.
     * @param identityProviderSchema 
     * @param appID 
     * @param authToken 
     */
    public authV1AuthSamlIdpPostWithHttpInfo(identityProviderSchema: IdentityProviderSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<IdentityProviderSchema>> {
        const result = this.api.authV1AuthSamlIdpPostWithHttpInfo(identityProviderSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * <br/>Input can either be an IdentityProviderSchema as json or a SAML<br/>EntityDescriptor XML.<br/>Input can either be an IdentityProviderSchema as json or a SAML<br/>EntityDescriptor XML. Required roles:  - can_write_identity_providers 
     * Create a new identity provider.
     * @param identityProviderSchema 
     * @param appID 
     * @param authToken 
     */
    public authV1AuthSamlIdpPost(identityProviderSchema: IdentityProviderSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<IdentityProviderSchema> {
        const result = this.api.authV1AuthSamlIdpPost(identityProviderSchema, appID, authToken, _options);
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
    public authV1AuthTokenDeleteWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AuthTokenDeleteWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Revoke token
     * @param appID 
     * @param authToken 
     */
    public authV1AuthTokenDelete(appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AuthTokenDelete(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Check if auth token valid
     * @param appID 
     * @param authToken 
     */
    public authV1AuthTokenGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AuthTokenGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Check if auth token valid
     * @param appID 
     * @param authToken 
     */
    public authV1AuthTokenGet(appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AuthTokenGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create new token without invalidating the old one
     * @param appID 
     * @param authToken 
     */
    public authV1AuthTokenPostWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<TokenSchema>> {
        const result = this.api.authV1AuthTokenPostWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create new token without invalidating the old one
     * @param appID 
     * @param authToken 
     */
    public authV1AuthTokenPost(appID?: string, authToken?: string, _options?: Configuration): Promise<TokenSchema> {
        const result = this.api.authV1AuthTokenPost(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Refresh token
     * @param appID 
     * @param authToken 
     */
    public authV1AuthTokenPutWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<TokenSchema>> {
        const result = this.api.authV1AuthTokenPutWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Refresh token
     * @param appID 
     * @param authToken 
     */
    public authV1AuthTokenPut(appID?: string, authToken?: string, _options?: Configuration): Promise<TokenSchema> {
        const result = this.api.authV1AuthTokenPut(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Revoke token by ID
     * @param tokenId 
     * @param appID 
     * @param authToken 
     */
    public authV1AuthTokenTokenIdDeleteWithHttpInfo(tokenId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AuthTokenTokenIdDeleteWithHttpInfo(tokenId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Revoke token by ID
     * @param tokenId 
     * @param appID 
     * @param authToken 
     */
    public authV1AuthTokenTokenIdDelete(tokenId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AuthTokenTokenIdDelete(tokenId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get token by ID
     * @param tokenId 
     * @param appID 
     * @param authToken 
     */
    public authV1AuthTokenTokenIdGetWithHttpInfo(tokenId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1AuthTokenTokenIdGetWithHttpInfo(tokenId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get token by ID
     * @param tokenId 
     * @param appID 
     * @param authToken 
     */
    public authV1AuthTokenTokenIdGet(tokenId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1AuthTokenTokenIdGet(tokenId, appID, authToken, _options);
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
    public authV1AuthTokensGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<TokensSchema>> {
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
    public authV1AuthTokensGet(appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<TokensSchema> {
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
    public authV1PasswordChecksGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<PasswordChecksSchema>> {
        const result = this.api.authV1PasswordChecksGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns a list of password checks required for the password to be safe
     * @param appID 
     * @param authToken 
     */
    public authV1PasswordChecksGet(appID?: string, authToken?: string, _options?: Configuration): Promise<PasswordChecksSchema> {
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
     * @param code 
     * @param appID 
     * @param authToken 
     */
    public authV1ReferralCodesCodeDeleteWithHttpInfo(code: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1ReferralCodesCodeDeleteWithHttpInfo(code, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete a referral_code
     * @param code 
     * @param appID 
     * @param authToken 
     */
    public authV1ReferralCodesCodeDelete(code: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1ReferralCodesCodeDelete(code, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get a referral_code
     * @param code 
     * @param appID 
     * @param authToken 
     */
    public authV1ReferralCodesCodeGetWithHttpInfo(code: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ReferralCodeSchema>> {
        const result = this.api.authV1ReferralCodesCodeGetWithHttpInfo(code, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get a referral_code
     * @param code 
     * @param appID 
     * @param authToken 
     */
    public authV1ReferralCodesCodeGet(code: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ReferralCodeSchema> {
        const result = this.api.authV1ReferralCodesCodeGet(code, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get all referral_codes
     * @param appID 
     * @param authToken 
     */
    public authV1ReferralCodesGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ReferralCodesSchema>> {
        const result = this.api.authV1ReferralCodesGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get all referral_codes
     * @param appID 
     * @param authToken 
     */
    public authV1ReferralCodesGet(appID?: string, authToken?: string, _options?: Configuration): Promise<ReferralCodesSchema> {
        const result = this.api.authV1ReferralCodesGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new referral_code
     * @param referralCodeSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1ReferralCodesPostWithHttpInfo(referralCodeSchema: ReferralCodeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ReferralCodeSchema>> {
        const result = this.api.authV1ReferralCodesPostWithHttpInfo(referralCodeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new referral_code
     * @param referralCodeSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1ReferralCodesPost(referralCodeSchema: ReferralCodeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ReferralCodeSchema> {
        const result = this.api.authV1ReferralCodesPost(referralCodeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns list of countries
     * @param appID 
     * @param authToken 
     */
    public authV1RegistrationsCountriesGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CountriesSchema>> {
        const result = this.api.authV1RegistrationsCountriesGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns list of countries
     * @param appID 
     * @param authToken 
     */
    public authV1RegistrationsCountriesGet(appID?: string, authToken?: string, _options?: Configuration): Promise<CountriesSchema> {
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
    public authV1SystemDomainsGetWithHttpInfo(appID?: string, authToken?: string, query?: string, statuses?: string, _options?: Configuration): Promise<HttpInfo<SystemDomainsSchema>> {
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
    public authV1SystemDomainsGet(appID?: string, authToken?: string, query?: string, statuses?: string, _options?: Configuration): Promise<SystemDomainsSchema> {
        const result = this.api.authV1SystemDomainsGet(appID, authToken, query, statuses, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new system domain
     * @param systemDomainSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsPostWithHttpInfo(systemDomainSchema: SystemDomainSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SystemDomainSchema>> {
        const result = this.api.authV1SystemDomainsPostWithHttpInfo(systemDomainSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new system domain
     * @param systemDomainSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsPost(systemDomainSchema: SystemDomainSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SystemDomainSchema> {
        const result = this.api.authV1SystemDomainsPost(systemDomainSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new system domain from a referral code (That is associated to your domain)
     * @param referralCode 
     * @param systemDomainFromReferralCodeSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsReferralCodeReferralCodePostWithHttpInfo(referralCode: string, systemDomainFromReferralCodeSchema: SystemDomainFromReferralCodeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SystemDomainFromTemplateSchema>> {
        const result = this.api.authV1SystemDomainsReferralCodeReferralCodePostWithHttpInfo(referralCode, systemDomainFromReferralCodeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new system domain from a referral code (That is associated to your domain)
     * @param referralCode 
     * @param systemDomainFromReferralCodeSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsReferralCodeReferralCodePost(referralCode: string, systemDomainFromReferralCodeSchema: SystemDomainFromReferralCodeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SystemDomainFromTemplateSchema> {
        const result = this.api.authV1SystemDomainsReferralCodeReferralCodePost(referralCode, systemDomainFromReferralCodeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete a particular system_domain by id
     * @param systemDomainId 
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsSystemDomainIdDeleteWithHttpInfo(systemDomainId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1SystemDomainsSystemDomainIdDeleteWithHttpInfo(systemDomainId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete a particular system_domain by id
     * @param systemDomainId 
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsSystemDomainIdDelete(systemDomainId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1SystemDomainsSystemDomainIdDelete(systemDomainId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * (For internal use. Should not be displayed in Swagger docs)
     * Delete a particular system_domain by id.
     * @param systemDomainId 
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsSystemDomainIdE2eDeleteWithHttpInfo(systemDomainId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1SystemDomainsSystemDomainIdE2eDeleteWithHttpInfo(systemDomainId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * (For internal use. Should not be displayed in Swagger docs)
     * Delete a particular system_domain by id.
     * @param systemDomainId 
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsSystemDomainIdE2eDelete(systemDomainId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1SystemDomainsSystemDomainIdE2eDelete(systemDomainId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_system_domains 
     * Returns a particular system domain by id
     * @param systemDomainId 
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsSystemDomainIdGetWithHttpInfo(systemDomainId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SystemDomainSchema>> {
        const result = this.api.authV1SystemDomainsSystemDomainIdGetWithHttpInfo(systemDomainId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_system_domains 
     * Returns a particular system domain by id
     * @param systemDomainId 
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsSystemDomainIdGet(systemDomainId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<SystemDomainSchema> {
        const result = this.api.authV1SystemDomainsSystemDomainIdGet(systemDomainId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete system domain logo image.
     * @param systemDomainId 
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsSystemDomainIdLogoDeleteWithHttpInfo(systemDomainId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authV1SystemDomainsSystemDomainIdLogoDeleteWithHttpInfo(systemDomainId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete system domain logo image.
     * @param systemDomainId 
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsSystemDomainIdLogoDelete(systemDomainId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.authV1SystemDomainsSystemDomainIdLogoDelete(systemDomainId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Upload system domain logo image.
     * @param systemDomainId 
     * @param authV1SystemDomainsSystemDomainIdLogoPostRequest 
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsSystemDomainIdLogoPostWithHttpInfo(systemDomainId: string, authV1SystemDomainsSystemDomainIdLogoPostRequest: AuthV1SystemDomainsSystemDomainIdLogoPostRequest, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AuthV1SystemDomainsSystemDomainIdLogoPost201Response>> {
        const result = this.api.authV1SystemDomainsSystemDomainIdLogoPostWithHttpInfo(systemDomainId, authV1SystemDomainsSystemDomainIdLogoPostRequest, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Upload system domain logo image.
     * @param systemDomainId 
     * @param authV1SystemDomainsSystemDomainIdLogoPostRequest 
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsSystemDomainIdLogoPost(systemDomainId: string, authV1SystemDomainsSystemDomainIdLogoPostRequest: AuthV1SystemDomainsSystemDomainIdLogoPostRequest, appID?: string, authToken?: string, _options?: Configuration): Promise<AuthV1SystemDomainsSystemDomainIdLogoPost201Response> {
        const result = this.api.authV1SystemDomainsSystemDomainIdLogoPost(systemDomainId, authV1SystemDomainsSystemDomainIdLogoPostRequest, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update system domain
     * @param systemDomainId 
     * @param systemDomainSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsSystemDomainIdPatchWithHttpInfo(systemDomainId: string, systemDomainSchema: SystemDomainSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SystemDomainSchema>> {
        const result = this.api.authV1SystemDomainsSystemDomainIdPatchWithHttpInfo(systemDomainId, systemDomainSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update system domain
     * @param systemDomainId 
     * @param systemDomainSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsSystemDomainIdPatch(systemDomainId: string, systemDomainSchema: SystemDomainSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SystemDomainSchema> {
        const result = this.api.authV1SystemDomainsSystemDomainIdPatch(systemDomainId, systemDomainSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update system domain
     * @param systemDomainId 
     * @param systemDomainSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsSystemDomainIdPutWithHttpInfo(systemDomainId: string, systemDomainSchema: SystemDomainSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SystemDomainSchema>> {
        const result = this.api.authV1SystemDomainsSystemDomainIdPutWithHttpInfo(systemDomainId, systemDomainSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update system domain
     * @param systemDomainId 
     * @param systemDomainSchema body
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsSystemDomainIdPut(systemDomainId: string, systemDomainSchema: SystemDomainSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SystemDomainSchema> {
        const result = this.api.authV1SystemDomainsSystemDomainIdPut(systemDomainId, systemDomainSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * List of system domain templates
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsTemplatesGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SystemDomainsSchema>> {
        const result = this.api.authV1SystemDomainsTemplatesGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * List of system domain templates
     * @param appID 
     * @param authToken 
     */
    public authV1SystemDomainsTemplatesGet(appID?: string, authToken?: string, _options?: Configuration): Promise<SystemDomainsSchema> {
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
    public filesV1AnalysisProfilesGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<AnalysisProfilesSchema>> {
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
    public filesV1AnalysisProfilesGet(appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<AnalysisProfilesSchema> {
        const result = this.api.filesV1AnalysisProfilesGet(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get a default analysis profile
     * @param mediaType 
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisProfilesMediaTypeDefaultGetWithHttpInfo(mediaType: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AnalysisProfileSchema>> {
        const result = this.api.filesV1AnalysisProfilesMediaTypeDefaultGetWithHttpInfo(mediaType, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get a default analysis profile
     * @param mediaType 
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisProfilesMediaTypeDefaultGet(mediaType: string, appID?: string, authToken?: string, _options?: Configuration): Promise<AnalysisProfileSchema> {
        const result = this.api.filesV1AnalysisProfilesMediaTypeDefaultGet(mediaType, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_profiles 
     * Create a new analysis profile
     * @param analysisProfileSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisProfilesPostWithHttpInfo(analysisProfileSchema: AnalysisProfileSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AnalysisProfileSchema>> {
        const result = this.api.filesV1AnalysisProfilesPostWithHttpInfo(analysisProfileSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_profiles 
     * Create a new analysis profile
     * @param analysisProfileSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisProfilesPost(analysisProfileSchema: AnalysisProfileSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AnalysisProfileSchema> {
        const result = this.api.filesV1AnalysisProfilesPost(analysisProfileSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_profiles 
     * Removes the default flag on an analysis profile
     * @param profileId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisProfilesProfileIdDefaultDeleteWithHttpInfo(profileId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AnalysisProfilesProfileIdDefaultDeleteWithHttpInfo(profileId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_profiles 
     * Removes the default flag on an analysis profile
     * @param profileId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisProfilesProfileIdDefaultDelete(profileId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AnalysisProfilesProfileIdDefaultDelete(profileId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_profiles 
     * Set an analysis profile to the default of its media type
     * @param profileId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisProfilesProfileIdDefaultPostWithHttpInfo(profileId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AnalysisProfilesProfileIdDefaultPostWithHttpInfo(profileId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_profiles 
     * Set an analysis profile to the default of its media type
     * @param profileId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisProfilesProfileIdDefaultPost(profileId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AnalysisProfilesProfileIdDefaultPost(profileId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_analysis_profiles 
     * Delete an analysis profile
     * @param profileId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisProfilesProfileIdDeleteWithHttpInfo(profileId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AnalysisProfilesProfileIdDeleteWithHttpInfo(profileId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_analysis_profiles 
     * Delete an analysis profile
     * @param profileId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisProfilesProfileIdDelete(profileId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AnalysisProfilesProfileIdDelete(profileId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get an analysis profile
     * @param profileId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisProfilesProfileIdGetWithHttpInfo(profileId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AnalysisProfileSchema>> {
        const result = this.api.filesV1AnalysisProfilesProfileIdGetWithHttpInfo(profileId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get an analysis profile
     * @param profileId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisProfilesProfileIdGet(profileId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<AnalysisProfileSchema> {
        const result = this.api.filesV1AnalysisProfilesProfileIdGet(profileId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_profiles 
     * Update an analysis profile information
     * @param profileId 
     * @param analysisProfileSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisProfilesProfileIdPatchWithHttpInfo(profileId: string, analysisProfileSchema: AnalysisProfileSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AnalysisProfileSchema>> {
        const result = this.api.filesV1AnalysisProfilesProfileIdPatchWithHttpInfo(profileId, analysisProfileSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_profiles 
     * Update an analysis profile information
     * @param profileId 
     * @param analysisProfileSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisProfilesProfileIdPatch(profileId: string, analysisProfileSchema: AnalysisProfileSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AnalysisProfileSchema> {
        const result = this.api.filesV1AnalysisProfilesProfileIdPatch(profileId, analysisProfileSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_profiles 
     * Update an analysis profile information
     * @param profileId 
     * @param analysisProfileSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisProfilesProfileIdPutWithHttpInfo(profileId: string, analysisProfileSchema: AnalysisProfileSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AnalysisProfileSchema>> {
        const result = this.api.filesV1AnalysisProfilesProfileIdPutWithHttpInfo(profileId, analysisProfileSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_profiles 
     * Update an analysis profile information
     * @param profileId 
     * @param analysisProfileSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisProfilesProfileIdPut(profileId: string, analysisProfileSchema: AnalysisProfileSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AnalysisProfileSchema> {
        const result = this.api.filesV1AnalysisProfilesProfileIdPut(profileId, analysisProfileSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_analysis_service_accounts 
     * Delete an analysis service account
     * @param analysisServiceAccountId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisServiceAccountsAnalysisServiceAccountIdDeleteWithHttpInfo(analysisServiceAccountId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AnalysisServiceAccountsAnalysisServiceAccountIdDeleteWithHttpInfo(analysisServiceAccountId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_analysis_service_accounts 
     * Delete an analysis service account
     * @param analysisServiceAccountId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisServiceAccountsAnalysisServiceAccountIdDelete(analysisServiceAccountId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AnalysisServiceAccountsAnalysisServiceAccountIdDelete(analysisServiceAccountId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_analysis_service_accounts 
     * Get an analysis service account
     * @param analysisServiceAccountId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisServiceAccountsAnalysisServiceAccountIdGetWithHttpInfo(analysisServiceAccountId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AnalysisServiceAccountReadSchema>> {
        const result = this.api.filesV1AnalysisServiceAccountsAnalysisServiceAccountIdGetWithHttpInfo(analysisServiceAccountId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_analysis_service_accounts 
     * Get an analysis service account
     * @param analysisServiceAccountId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisServiceAccountsAnalysisServiceAccountIdGet(analysisServiceAccountId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<AnalysisServiceAccountReadSchema> {
        const result = this.api.filesV1AnalysisServiceAccountsAnalysisServiceAccountIdGet(analysisServiceAccountId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_service_accounts 
     * Update an analysis service account information
     * @param analysisServiceAccountId 
     * @param analysisServiceAccountSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPatchWithHttpInfo(analysisServiceAccountId: string, analysisServiceAccountSchema: AnalysisServiceAccountSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AnalysisServiceAccountSchema>> {
        const result = this.api.filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPatchWithHttpInfo(analysisServiceAccountId, analysisServiceAccountSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_service_accounts 
     * Update an analysis service account information
     * @param analysisServiceAccountId 
     * @param analysisServiceAccountSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPatch(analysisServiceAccountId: string, analysisServiceAccountSchema: AnalysisServiceAccountSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AnalysisServiceAccountSchema> {
        const result = this.api.filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPatch(analysisServiceAccountId, analysisServiceAccountSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_service_accounts 
     * Update an analysis service account information
     * @param analysisServiceAccountId 
     * @param analysisServiceAccountSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPutWithHttpInfo(analysisServiceAccountId: string, analysisServiceAccountSchema: AnalysisServiceAccountSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AnalysisServiceAccountSchema>> {
        const result = this.api.filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPutWithHttpInfo(analysisServiceAccountId, analysisServiceAccountSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_service_accounts 
     * Update an analysis service account information
     * @param analysisServiceAccountId 
     * @param analysisServiceAccountSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPut(analysisServiceAccountId: string, analysisServiceAccountSchema: AnalysisServiceAccountSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AnalysisServiceAccountSchema> {
        const result = this.api.filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPut(analysisServiceAccountId, analysisServiceAccountSchema, appID, authToken, _options);
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
    public filesV1AnalysisServiceAccountsGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<AnalysisServiceAccountsSchema>> {
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
    public filesV1AnalysisServiceAccountsGet(appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<AnalysisServiceAccountsSchema> {
        const result = this.api.filesV1AnalysisServiceAccountsGet(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_service_accounts 
     * Create a new analysis service account
     * @param analysisServiceAccountSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisServiceAccountsPostWithHttpInfo(analysisServiceAccountSchema: AnalysisServiceAccountSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AnalysisServiceAccountReadSchema>> {
        const result = this.api.filesV1AnalysisServiceAccountsPostWithHttpInfo(analysisServiceAccountSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_analysis_service_accounts 
     * Create a new analysis service account
     * @param analysisServiceAccountSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AnalysisServiceAccountsPost(analysisServiceAccountSchema: AnalysisServiceAccountSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AnalysisServiceAccountReadSchema> {
        const result = this.api.filesV1AnalysisServiceAccountsPost(analysisServiceAccountSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Create keyframe of type poster for asset
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdCustomKeyframePostWithHttpInfo(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<KeyframeSchema>> {
        const result = this.api.filesV1AssetsAssetIdCustomKeyframePostWithHttpInfo(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Create keyframe of type poster for asset
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdCustomKeyframePost(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<KeyframeSchema> {
        const result = this.api.filesV1AssetsAssetIdCustomKeyframePost(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Set keyframe of type poster as asset keyframe
     * @param assetId 
     * @param posterId 
     * @param appID 
     * @param authToken 
     * @param overwrite set to false to keep current custom_poster and custom_keyframe on asset
     */
    public filesV1AssetsAssetIdCustomKeyframePosterIdPostWithHttpInfo(assetId: string, posterId: string, appID?: string, authToken?: string, overwrite?: boolean, _options?: Configuration): Promise<HttpInfo<KeyframeSchema>> {
        const result = this.api.filesV1AssetsAssetIdCustomKeyframePosterIdPostWithHttpInfo(assetId, posterId, appID, authToken, overwrite, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Set keyframe of type poster as asset keyframe
     * @param assetId 
     * @param posterId 
     * @param appID 
     * @param authToken 
     * @param overwrite set to false to keep current custom_poster and custom_keyframe on asset
     */
    public filesV1AssetsAssetIdCustomKeyframePosterIdPost(assetId: string, posterId: string, appID?: string, authToken?: string, overwrite?: boolean, _options?: Configuration): Promise<KeyframeSchema> {
        const result = this.api.filesV1AssetsAssetIdCustomKeyframePosterIdPost(assetId, posterId, appID, authToken, overwrite, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_exports 
     * Export asset to export location
     * @param assetId 
     * @param exportLocationId 
     * @param assetExportSchema body
     * @param appID 
     * @param authToken 
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1AssetsAssetIdExportLocationsExportLocationIdPostWithHttpInfo(assetId: string, exportLocationId: string, assetExportSchema: AssetExportSchema, appID?: string, authToken?: string, allowHostTransfer?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdExportLocationsExportLocationIdPostWithHttpInfo(assetId, exportLocationId, assetExportSchema, appID, authToken, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_exports 
     * Export asset to export location
     * @param assetId 
     * @param exportLocationId 
     * @param assetExportSchema body
     * @param appID 
     * @param authToken 
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1AssetsAssetIdExportLocationsExportLocationIdPost(assetId: string, exportLocationId: string, assetExportSchema: AssetExportSchema, appID?: string, authToken?: string, allowHostTransfer?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdExportLocationsExportLocationIdPost(assetId, exportLocationId, assetExportSchema, appID, authToken, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s file set, file entries, and actual files
     * @param assetId 
     * @param fileSetId 
     * @param appID 
     * @param authToken 
     * @param keepSource If true, keep source objects
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdDeleteWithHttpInfo(assetId: string, fileSetId: string, appID?: string, authToken?: string, keepSource?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdDeleteWithHttpInfo(assetId, fileSetId, appID, authToken, keepSource, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s file set, file entries, and actual files
     * @param assetId 
     * @param fileSetId 
     * @param appID 
     * @param authToken 
     * @param keepSource If true, keep source objects
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdDelete(assetId: string, fileSetId: string, appID?: string, authToken?: string, keepSource?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdDelete(assetId, fileSetId, appID, authToken, keepSource, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get files from a file set
     * @param assetId 
     * @param fileSetId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId 
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param fileCount Set to true if you need a total amount of files in a file set
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdFilesGetWithHttpInfo(assetId: string, fileSetId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, generateSignedUrl?: boolean, fileCount?: boolean, _options?: Configuration): Promise<HttpInfo<FilesSchema>> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdFilesGetWithHttpInfo(assetId, fileSetId, appID, authToken, perPage, lastId, generateSignedUrl, fileCount, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get files from a file set
     * @param assetId 
     * @param fileSetId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId 
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param fileCount Set to true if you need a total amount of files in a file set
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdFilesGet(assetId: string, fileSetId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, generateSignedUrl?: boolean, fileCount?: boolean, _options?: Configuration): Promise<FilesSchema> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdFilesGet(assetId, fileSetId, appID, authToken, perPage, lastId, generateSignedUrl, fileCount, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get asset\'s file set
     * @param assetId 
     * @param fileSetId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdGetWithHttpInfo(assetId: string, fileSetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FileSetSchema>> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdGetWithHttpInfo(assetId, fileSetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get asset\'s file set
     * @param assetId 
     * @param fileSetId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdGet(assetId: string, fileSetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<FileSetSchema> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdGet(assetId, fileSetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file set information
     * @param assetId 
     * @param fileSetId 
     * @param fileSetSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdPatchWithHttpInfo(assetId: string, fileSetId: string, fileSetSchema: FileSetSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FileSetSchema>> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdPatchWithHttpInfo(assetId, fileSetId, fileSetSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file set information
     * @param assetId 
     * @param fileSetId 
     * @param fileSetSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdPatch(assetId: string, fileSetId: string, fileSetSchema: FileSetSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<FileSetSchema> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdPatch(assetId, fileSetId, fileSetSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Purge deleted asset\'s file set, file entries, and actual files.
     * @param assetId 
     * @param fileSetId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdPurgeDeleteWithHttpInfo(assetId: string, fileSetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdPurgeDeleteWithHttpInfo(assetId, fileSetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Purge deleted asset\'s file set, file entries, and actual files.
     * @param assetId 
     * @param fileSetId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdPurgeDelete(assetId: string, fileSetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdPurgeDelete(assetId, fileSetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file set information
     * @param assetId 
     * @param fileSetId 
     * @param fileSetSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdPutWithHttpInfo(assetId: string, fileSetId: string, fileSetSchema: FileSetSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FileSetSchema>> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdPutWithHttpInfo(assetId, fileSetId, fileSetSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file set information
     * @param assetId 
     * @param fileSetId 
     * @param fileSetSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdPut(assetId: string, fileSetId: string, fileSetSchema: FileSetSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<FileSetSchema> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdPut(assetId, fileSetId, fileSetSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Restore delete asset\'s file set
     * @param assetId 
     * @param fileSetId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdRestorePutWithHttpInfo(assetId: string, fileSetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdRestorePutWithHttpInfo(assetId, fileSetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Restore delete asset\'s file set
     * @param assetId 
     * @param fileSetId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFileSetsFileSetIdRestorePut(assetId: string, fileSetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFileSetsFileSetIdRestorePut(assetId, fileSetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s file sets
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     * @param fileCount Set to true if you need a total amount of files in a file set
     */
    public filesV1AssetsAssetIdFileSetsGetWithHttpInfo(assetId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, fileCount?: boolean, _options?: Configuration): Promise<HttpInfo<FileSetsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFileSetsGetWithHttpInfo(assetId, appID, authToken, perPage, lastId, fileCount, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s file sets
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     * @param fileCount Set to true if you need a total amount of files in a file set
     */
    public filesV1AssetsAssetIdFileSetsGet(assetId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, fileCount?: boolean, _options?: Configuration): Promise<FileSetsSchema> {
        const result = this.api.filesV1AssetsAssetIdFileSetsGet(assetId, appID, authToken, perPage, lastId, fileCount, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Create file set and associate to asset
     * @param assetId 
     * @param fileSetSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFileSetsPostWithHttpInfo(assetId: string, fileSetSchema: FileSetSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FileSetSchema>> {
        const result = this.api.filesV1AssetsAssetIdFileSetsPostWithHttpInfo(assetId, fileSetSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Create file set and associate to asset
     * @param assetId 
     * @param fileSetSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFileSetsPost(assetId: string, fileSetSchema: FileSetSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<FileSetSchema> {
        const result = this.api.filesV1AssetsAssetIdFileSetsPost(assetId, fileSetSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_poster 
     * Create a transcode job for creating still keyframe
     * @param assetId 
     * @param fileId 
     * @param milliseconds 
     * @param transcodeRequestSchema body
     * @param authToken 
     * @param appID 
     */
    public filesV1AssetsAssetIdFilesFileIdCaptureMillisecondsPostWithHttpInfo(assetId: string, fileId: string, milliseconds: number, transcodeRequestSchema: TranscodeRequestSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<TranscodeResponseSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdCaptureMillisecondsPostWithHttpInfo(assetId, fileId, milliseconds, transcodeRequestSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_poster 
     * Create a transcode job for creating still keyframe
     * @param assetId 
     * @param fileId 
     * @param milliseconds 
     * @param transcodeRequestSchema body
     * @param authToken 
     * @param appID 
     */
    public filesV1AssetsAssetIdFilesFileIdCaptureMillisecondsPost(assetId: string, fileId: string, milliseconds: number, transcodeRequestSchema: TranscodeRequestSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<TranscodeResponseSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdCaptureMillisecondsPost(assetId, fileId, milliseconds, transcodeRequestSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s file entry (Not the actual file, use DELETE file_set for that)
     * @param assetId 
     * @param fileId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFilesFileIdDeleteWithHttpInfo(assetId: string, fileId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdDeleteWithHttpInfo(assetId, fileId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s file entry (Not the actual file, use DELETE file_set for that)
     * @param assetId 
     * @param fileId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFilesFileIdDelete(assetId: string, fileId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdDelete(assetId, fileId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get asset\'s file download URL
     * @param assetId 
     * @param fileId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFilesFileIdDownloadUrlGetWithHttpInfo(assetId: string, fileId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FileDownloadURLSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdDownloadUrlGetWithHttpInfo(assetId, fileId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get asset\'s file download URL
     * @param assetId 
     * @param fileId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFilesFileIdDownloadUrlGet(assetId: string, fileId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<FileDownloadURLSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdDownloadUrlGet(assetId, fileId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs - can_write_files 
     * Create format, file_set, and file for edit proxy if storage has edit proxy transcoder configured
     * @param assetId 
     * @param fileId 
     * @param editProxySchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFilesFileIdEditProxiesPostWithHttpInfo(assetId: string, fileId: string, editProxySchema: EditProxySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void | EditProxyResponseSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdEditProxiesPostWithHttpInfo(assetId, fileId, editProxySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs - can_write_files 
     * Create format, file_set, and file for edit proxy if storage has edit proxy transcoder configured
     * @param assetId 
     * @param fileId 
     * @param editProxySchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFilesFileIdEditProxiesPost(assetId: string, fileId: string, editProxySchema: EditProxySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void | EditProxyResponseSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdEditProxiesPost(assetId, fileId, editProxySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get asset\'s file
     * @param assetId 
     * @param fileId 
     * @param appID 
     * @param authToken 
     * @param generateSignedPostUrl Set to true to get a new upload url for the file
     * @param contentDisposition Set to attachment if you want a download link. Note that this will not create a asset history entry for the download
     * @param bypassUrlCache Set to true to get a new url for the file rather than using a cached url
     */
    public filesV1AssetsAssetIdFilesFileIdGetWithHttpInfo(assetId: string, fileId: string, appID?: string, authToken?: string, generateSignedPostUrl?: boolean, contentDisposition?: string, bypassUrlCache?: boolean, _options?: Configuration): Promise<HttpInfo<FileSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdGetWithHttpInfo(assetId, fileId, appID, authToken, generateSignedPostUrl, contentDisposition, bypassUrlCache, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get asset\'s file
     * @param assetId 
     * @param fileId 
     * @param appID 
     * @param authToken 
     * @param generateSignedPostUrl Set to true to get a new upload url for the file
     * @param contentDisposition Set to attachment if you want a download link. Note that this will not create a asset history entry for the download
     * @param bypassUrlCache Set to true to get a new url for the file rather than using a cached url
     */
    public filesV1AssetsAssetIdFilesFileIdGet(assetId: string, fileId: string, appID?: string, authToken?: string, generateSignedPostUrl?: boolean, contentDisposition?: string, bypassUrlCache?: boolean, _options?: Configuration): Promise<FileSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdGet(assetId, fileId, appID, authToken, generateSignedPostUrl, contentDisposition, bypassUrlCache, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get asset\'s file handler URL for ISG
     * @param assetId 
     * @param fileId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFilesFileIdIsgHandlerUrlGetWithHttpInfo(assetId: string, fileId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ISGHandlerURLSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdIsgHandlerUrlGetWithHttpInfo(assetId, fileId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get asset\'s file handler URL for ISG
     * @param assetId 
     * @param fileId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFilesFileIdIsgHandlerUrlGet(assetId: string, fileId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ISGHandlerURLSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdIsgHandlerUrlGet(assetId, fileId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs 
     * Create a transcode job for proxy and keyframes
     * @param assetId 
     * @param fileId 
     * @param transcodeRequestSchema body
     * @param authToken 
     * @param appID 
     */
    public filesV1AssetsAssetIdFilesFileIdKeyframesPostWithHttpInfo(assetId: string, fileId: string, transcodeRequestSchema: TranscodeRequestSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<void | TranscodeResponseSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdKeyframesPostWithHttpInfo(assetId, fileId, transcodeRequestSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs 
     * Create a transcode job for proxy and keyframes
     * @param assetId 
     * @param fileId 
     * @param transcodeRequestSchema body
     * @param authToken 
     * @param appID 
     */
    public filesV1AssetsAssetIdFilesFileIdKeyframesPost(assetId: string, fileId: string, transcodeRequestSchema: TranscodeRequestSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<void | TranscodeResponseSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdKeyframesPost(assetId, fileId, transcodeRequestSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs 
     * Create a job for extracting mediainfo
     * @param assetId 
     * @param fileId 
     * @param transcodeRequestSchema body
     * @param authToken 
     * @param appID 
     */
    public filesV1AssetsAssetIdFilesFileIdMediainfoPostWithHttpInfo(assetId: string, fileId: string, transcodeRequestSchema: TranscodeRequestSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<TranscodeResponseSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMediainfoPostWithHttpInfo(assetId, fileId, transcodeRequestSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs 
     * Create a job for extracting mediainfo
     * @param assetId 
     * @param fileId 
     * @param transcodeRequestSchema body
     * @param authToken 
     * @param appID 
     */
    public filesV1AssetsAssetIdFilesFileIdMediainfoPost(assetId: string, fileId: string, transcodeRequestSchema: TranscodeRequestSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<TranscodeResponseSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMediainfoPost(assetId, fileId, transcodeRequestSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Cancel Backblaze B2 multipart upload.
     * @param assetId 
     * @param fileId 
     * @param multipartB2CancelUpload body
     * @param appID 
     * @param authToken 
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartB2CancelPostWithHttpInfo(assetId: string, fileId: string, multipartB2CancelUpload: MultipartB2CancelUpload, appID?: string, authToken?: string, temporary?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartB2CancelPostWithHttpInfo(assetId, fileId, multipartB2CancelUpload, appID, authToken, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Cancel Backblaze B2 multipart upload.
     * @param assetId 
     * @param fileId 
     * @param multipartB2CancelUpload body
     * @param appID 
     * @param authToken 
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartB2CancelPost(assetId: string, fileId: string, multipartB2CancelUpload: MultipartB2CancelUpload, appID?: string, authToken?: string, temporary?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartB2CancelPost(assetId, fileId, multipartB2CancelUpload, appID, authToken, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Complete Backblaze B2 multipart upload.
     * @param assetId 
     * @param fileId 
     * @param multipartB2FinishUpload body
     * @param appID 
     * @param authToken 
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartB2FinishPostWithHttpInfo(assetId: string, fileId: string, multipartB2FinishUpload: MultipartB2FinishUpload, appID?: string, authToken?: string, temporary?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartB2FinishPostWithHttpInfo(assetId, fileId, multipartB2FinishUpload, appID, authToken, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Complete Backblaze B2 multipart upload.
     * @param assetId 
     * @param fileId 
     * @param multipartB2FinishUpload body
     * @param appID 
     * @param authToken 
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartB2FinishPost(assetId: string, fileId: string, multipartB2FinishUpload: MultipartB2FinishUpload, appID?: string, authToken?: string, temporary?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartB2FinishPost(assetId, fileId, multipartB2FinishUpload, appID, authToken, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Start Backblaze B2 multipart upload.
     * @param assetId 
     * @param fileId 
     * @param appID 
     * @param authToken 
     * @param temporary Use temporary file record
     * @param multipartB2StartUpload body
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartB2StartPostWithHttpInfo(assetId: string, fileId: string, appID?: string, authToken?: string, temporary?: boolean, multipartB2StartUpload?: MultipartB2StartUpload, _options?: Configuration): Promise<HttpInfo<MultipartB2StartUpload>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartB2StartPostWithHttpInfo(assetId, fileId, appID, authToken, temporary, multipartB2StartUpload, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Start Backblaze B2 multipart upload.
     * @param assetId 
     * @param fileId 
     * @param appID 
     * @param authToken 
     * @param temporary Use temporary file record
     * @param multipartB2StartUpload body
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartB2StartPost(assetId: string, fileId: string, appID?: string, authToken?: string, temporary?: boolean, multipartB2StartUpload?: MultipartB2StartUpload, _options?: Configuration): Promise<MultipartB2StartUpload> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartB2StartPost(assetId, fileId, appID, authToken, temporary, multipartB2StartUpload, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Cleanup multipart upload (GCS, S3).
     * @param assetId 
     * @param fileId 
     * @param multipartUploadCleanupSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartCleanupPostWithHttpInfo(assetId: string, fileId: string, multipartUploadCleanupSchema: MultipartUploadCleanupSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartCleanupPostWithHttpInfo(assetId, fileId, multipartUploadCleanupSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Cleanup multipart upload (GCS, S3).
     * @param assetId 
     * @param fileId 
     * @param multipartUploadCleanupSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartCleanupPost(assetId: string, fileId: string, multipartUploadCleanupSchema: MultipartUploadCleanupSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartCleanupPost(assetId, fileId, multipartUploadCleanupSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Get object compose url for GCS parallel upload.
     * @param assetId 
     * @param fileId 
     * @param multipartUploadComposeSchema body
     * @param appID 
     * @param authToken 
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartGcsComposeUrlPostWithHttpInfo(assetId: string, fileId: string, multipartUploadComposeSchema: MultipartUploadComposeSchema, appID?: string, authToken?: string, temporary?: boolean, _options?: Configuration): Promise<HttpInfo<MultiPartUploadComposeURLSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartGcsComposeUrlPostWithHttpInfo(assetId, fileId, multipartUploadComposeSchema, appID, authToken, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Get object compose url for GCS parallel upload.
     * @param assetId 
     * @param fileId 
     * @param multipartUploadComposeSchema body
     * @param appID 
     * @param authToken 
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartGcsComposeUrlPost(assetId: string, fileId: string, multipartUploadComposeSchema: MultipartUploadComposeSchema, appID?: string, authToken?: string, temporary?: boolean, _options?: Configuration): Promise<MultiPartUploadComposeURLSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartGcsComposeUrlPost(assetId, fileId, multipartUploadComposeSchema, appID, authToken, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Complete multipart upload (GCS).
     * @param assetId 
     * @param fileId 
     * @param multipartUploadSchema body
     * @param appID 
     * @param authToken 
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartPostWithHttpInfo(assetId: string, fileId: string, multipartUploadSchema: MultipartUploadSchema, appID?: string, authToken?: string, temporary?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartPostWithHttpInfo(assetId, fileId, multipartUploadSchema, appID, authToken, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Complete multipart upload (GCS).
     * @param assetId 
     * @param fileId 
     * @param multipartUploadSchema body
     * @param appID 
     * @param authToken 
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartPost(assetId: string, fileId: string, multipartUploadSchema: MultipartUploadSchema, appID?: string, authToken?: string, temporary?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartPost(assetId, fileId, multipartUploadSchema, appID, authToken, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Get presigned urls for multipart upload (S3).
     * @param assetId 
     * @param fileId 
     * @param uploadId Multipart UploadId
     * @param appID 
     * @param authToken 
     * @param type List of multipart upload urls of required type
     * @param maxPartNumber Maximum PartNumber that multipart upload has
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartUrlGetWithHttpInfo(assetId: string, fileId: string, uploadId: string, appID?: string, authToken?: string, type?: string, maxPartNumber?: number, temporary?: boolean, _options?: Configuration): Promise<HttpInfo<MultiPartURLsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartUrlGetWithHttpInfo(assetId, fileId, uploadId, appID, authToken, type, maxPartNumber, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Get presigned urls for multipart upload (S3).
     * @param assetId 
     * @param fileId 
     * @param uploadId Multipart UploadId
     * @param appID 
     * @param authToken 
     * @param type List of multipart upload urls of required type
     * @param maxPartNumber Maximum PartNumber that multipart upload has
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartUrlGet(assetId: string, fileId: string, uploadId: string, appID?: string, authToken?: string, type?: string, maxPartNumber?: number, temporary?: boolean, _options?: Configuration): Promise<MultiPartURLsSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartUrlGet(assetId, fileId, uploadId, appID, authToken, type, maxPartNumber, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Get presigned urls for multipart part upload (S3 & GCS).
     * @param assetId 
     * @param fileId 
     * @param partsNum Number of parts to upload
     * @param appID 
     * @param authToken 
     * @param uploadId Multipart UploadId
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartUrlPartGetWithHttpInfo(assetId: string, fileId: string, partsNum: number, appID?: string, authToken?: string, uploadId?: string, perPage?: number, page?: number, temporary?: boolean, _options?: Configuration): Promise<HttpInfo<MultiPartUploadURLsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartUrlPartGetWithHttpInfo(assetId, fileId, partsNum, appID, authToken, uploadId, perPage, page, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Get presigned urls for multipart part upload (S3 & GCS).
     * @param assetId 
     * @param fileId 
     * @param partsNum Number of parts to upload
     * @param appID 
     * @param authToken 
     * @param uploadId Multipart UploadId
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartUrlPartGet(assetId: string, fileId: string, partsNum: number, appID?: string, authToken?: string, uploadId?: string, perPage?: number, page?: number, temporary?: boolean, _options?: Configuration): Promise<MultiPartUploadURLsSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartUrlPartGet(assetId, fileId, partsNum, appID, authToken, uploadId, perPage, page, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Create presigned urls for multipart part S3 upload.
     * @param assetId 
     * @param fileId 
     * @param multiPartS3UrlPartsSchema body
     * @param appID 
     * @param authToken 
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartUrlS3PartPostWithHttpInfo(assetId: string, fileId: string, multiPartS3UrlPartsSchema: MultiPartS3UrlPartsSchema, appID?: string, authToken?: string, temporary?: boolean, _options?: Configuration): Promise<HttpInfo<MultiPartS3UrlPartsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartUrlS3PartPostWithHttpInfo(assetId, fileId, multiPartS3UrlPartsSchema, appID, authToken, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Create presigned urls for multipart part S3 upload.
     * @param assetId 
     * @param fileId 
     * @param multiPartS3UrlPartsSchema body
     * @param appID 
     * @param authToken 
     * @param temporary Use temporary file record
     */
    public filesV1AssetsAssetIdFilesFileIdMultipartUrlS3PartPost(assetId: string, fileId: string, multiPartS3UrlPartsSchema: MultiPartS3UrlPartsSchema, appID?: string, authToken?: string, temporary?: boolean, _options?: Configuration): Promise<MultiPartS3UrlPartsSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdMultipartUrlS3PartPost(assetId, fileId, multiPartS3UrlPartsSchema, appID, authToken, temporary, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file information
     * @param assetId 
     * @param fileId 
     * @param fileSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFilesFileIdPatchWithHttpInfo(assetId: string, fileId: string, fileSchema: FileSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FileSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdPatchWithHttpInfo(assetId, fileId, fileSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file information
     * @param assetId 
     * @param fileId 
     * @param fileSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFilesFileIdPatch(assetId: string, fileId: string, fileSchema: FileSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<FileSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdPatch(assetId, fileId, fileSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file information
     * @param assetId 
     * @param fileId 
     * @param fileSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFilesFileIdPutWithHttpInfo(assetId: string, fileId: string, fileSchema: FileSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FileSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdPutWithHttpInfo(assetId, fileId, fileSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file information
     * @param assetId 
     * @param fileId 
     * @param fileSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFilesFileIdPut(assetId: string, fileId: string, fileSchema: FileSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<FileSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdPut(assetId, fileId, fileSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing of a file
     * @param assetId 
     * @param fileId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFilesFileIdReindexPostWithHttpInfo(assetId: string, fileId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdReindexPostWithHttpInfo(assetId, fileId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing of a file
     * @param assetId 
     * @param fileId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFilesFileIdReindexPost(assetId: string, fileId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdReindexPost(assetId, fileId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs 
     * Create a transcode job for subtitle files
     * @param assetId 
     * @param fileId 
     * @param authToken 
     * @param appID 
     * @param subtitleRequestSchema body
     */
    public filesV1AssetsAssetIdFilesFileIdSubtitlesPostWithHttpInfo(assetId: string, fileId: string, authToken?: string, appID?: string, subtitleRequestSchema?: SubtitleRequestSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdSubtitlesPostWithHttpInfo(assetId, fileId, authToken, appID, subtitleRequestSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs 
     * Create a transcode job for subtitle files
     * @param assetId 
     * @param fileId 
     * @param authToken 
     * @param appID 
     * @param subtitleRequestSchema body
     */
    public filesV1AssetsAssetIdFilesFileIdSubtitlesPost(assetId: string, fileId: string, authToken?: string, appID?: string, subtitleRequestSchema?: SubtitleRequestSchema, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFilesFileIdSubtitlesPost(assetId, fileId, authToken, appID, subtitleRequestSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s files
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to True if you do need a URL, this makes the request slower.
     * @param contentDisposition Set to attachment if you want a download link. Note that this will not create a download in asset history
     * @param lastId ID of a last file on previous page
     */
    public filesV1AssetsAssetIdFilesGetWithHttpInfo(assetId: string, appID?: string, authToken?: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, _options?: Configuration): Promise<HttpInfo<FilesSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesGetWithHttpInfo(assetId, appID, authToken, perPage, generateSignedUrl, contentDisposition, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s files
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to True if you do need a URL, this makes the request slower.
     * @param contentDisposition Set to attachment if you want a download link. Note that this will not create a download in asset history
     * @param lastId ID of a last file on previous page
     */
    public filesV1AssetsAssetIdFilesGet(assetId: string, appID?: string, authToken?: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, _options?: Configuration): Promise<FilesSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesGet(assetId, appID, authToken, perPage, generateSignedUrl, contentDisposition, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Create file and associate to asset
     * @param assetId 
     * @param fileCreateSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFilesPostWithHttpInfo(assetId: string, fileCreateSchema: FileCreateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FileSchema>> {
        const result = this.api.filesV1AssetsAssetIdFilesPostWithHttpInfo(assetId, fileCreateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Create file and associate to asset
     * @param assetId 
     * @param fileCreateSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFilesPost(assetId: string, fileCreateSchema: FileCreateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<FileSchema> {
        const result = this.api.filesV1AssetsAssetIdFilesPost(assetId, fileCreateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_archived_formats 
     * Delete archived format
     * @param assetId 
     * @param formatId 
     * @param formatDeleteArchiveSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdArchiveDeleteWithHttpInfo(assetId: string, formatId: string, formatDeleteArchiveSchema: FormatDeleteArchiveSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdArchiveDeleteWithHttpInfo(assetId, formatId, formatDeleteArchiveSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_archived_formats 
     * Delete archived format
     * @param assetId 
     * @param formatId 
     * @param formatDeleteArchiveSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdArchiveDelete(assetId: string, formatId: string, formatDeleteArchiveSchema: FormatDeleteArchiveSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdArchiveDelete(assetId, formatId, formatDeleteArchiveSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_archive_formats 
     * Archive format
     * @param assetId 
     * @param formatId 
     * @param formatArchiveSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdArchivePostWithHttpInfo(assetId: string, formatId: string, formatArchiveSchema: FormatArchiveSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdArchivePostWithHttpInfo(assetId, formatId, formatArchiveSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_archive_formats 
     * Archive format
     * @param assetId 
     * @param formatId 
     * @param formatArchiveSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdArchivePost(assetId: string, formatId: string, formatArchiveSchema: FormatArchiveSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdArchivePost(assetId, formatId, formatArchiveSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_formats 
     * Delete a component in a format
     * @param assetId 
     * @param formatId 
     * @param componentId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdDeleteWithHttpInfo(assetId: string, formatId: string, componentId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ComponentsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdDeleteWithHttpInfo(assetId, formatId, componentId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_formats 
     * Delete a component in a format
     * @param assetId 
     * @param formatId 
     * @param componentId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdDelete(assetId: string, formatId: string, componentId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ComponentsSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdDelete(assetId, formatId, componentId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get a component for a format in an asset
     * @param assetId 
     * @param formatId 
     * @param componentId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdGetWithHttpInfo(assetId: string, formatId: string, componentId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ComponentsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdGetWithHttpInfo(assetId, formatId, componentId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get a component for a format in an asset
     * @param assetId 
     * @param formatId 
     * @param componentId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdGet(assetId: string, formatId: string, componentId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ComponentsSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdGet(assetId, formatId, componentId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_formats 
     * Update a component in a format
     * @param assetId 
     * @param formatId 
     * @param componentId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdPutWithHttpInfo(assetId: string, formatId: string, componentId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ComponentsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdPutWithHttpInfo(assetId, formatId, componentId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_formats 
     * Update a component in a format
     * @param assetId 
     * @param formatId 
     * @param componentId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdPut(assetId: string, formatId: string, componentId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ComponentsSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdPut(assetId, formatId, componentId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get all components for a format in an asset
     * @param assetId 
     * @param formatId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdComponentsGetWithHttpInfo(assetId: string, formatId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ComponentsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdComponentsGetWithHttpInfo(assetId, formatId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get all components for a format in an asset
     * @param assetId 
     * @param formatId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdComponentsGet(assetId: string, formatId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ComponentsSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdComponentsGet(assetId, formatId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_formats 
     * Add a new format component
     * @param assetId 
     * @param formatId 
     * @param componentSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdComponentsPostWithHttpInfo(assetId: string, formatId: string, componentSchema: ComponentSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ComponentsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdComponentsPostWithHttpInfo(assetId, formatId, componentSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_formats 
     * Add a new format component
     * @param assetId 
     * @param formatId 
     * @param componentSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdComponentsPost(assetId: string, formatId: string, componentSchema: ComponentSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ComponentsSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdComponentsPost(assetId, formatId, componentSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_formats 
     * Delete asset\'s format
     * @param assetId 
     * @param formatId 
     * @param appID 
     * @param authToken 
     * @param deleteImmediately Permanently delete format without sending it to the Recycle Bin
     */
    public filesV1AssetsAssetIdFormatsFormatIdDeleteWithHttpInfo(assetId: string, formatId: string, appID?: string, authToken?: string, deleteImmediately?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdDeleteWithHttpInfo(assetId, formatId, appID, authToken, deleteImmediately, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_formats 
     * Delete asset\'s format
     * @param assetId 
     * @param formatId 
     * @param appID 
     * @param authToken 
     * @param deleteImmediately Permanently delete format without sending it to the Recycle Bin
     */
    public filesV1AssetsAssetIdFormatsFormatIdDelete(assetId: string, formatId: string, appID?: string, authToken?: string, deleteImmediately?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdDelete(assetId, formatId, appID, authToken, deleteImmediately, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s file sets in a specific format
     * @param assetId 
     * @param formatId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public filesV1AssetsAssetIdFormatsFormatIdFileSetsGetWithHttpInfo(assetId: string, formatId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<FileSetsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdFileSetsGetWithHttpInfo(assetId, formatId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s file sets in a specific format
     * @param assetId 
     * @param formatId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public filesV1AssetsAssetIdFormatsFormatIdFileSetsGet(assetId: string, formatId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<FileSetsSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdFileSetsGet(assetId, formatId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all file sets with matching format and storage method
     * @param assetId 
     * @param formatId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesGetWithHttpInfo(assetId: string, formatId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FileSetSourcesSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesGetWithHttpInfo(assetId, formatId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all file sets with matching format and storage method
     * @param assetId 
     * @param formatId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesGet(assetId: string, formatId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<FileSetSourcesSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesGet(assetId, formatId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all file sets with matching format and storage method
     * @param assetId 
     * @param formatId 
     * @param storageMethod 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesStorageMethodGetWithHttpInfo(assetId: string, formatId: string, storageMethod: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FileSetsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesStorageMethodGetWithHttpInfo(assetId, formatId, storageMethod, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all file sets with matching format and storage method
     * @param assetId 
     * @param formatId 
     * @param storageMethod 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesStorageMethodGet(assetId: string, formatId: string, storageMethod: string, appID?: string, authToken?: string, _options?: Configuration): Promise<FileSetsSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesStorageMethodGet(assetId, formatId, storageMethod, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get asset\'s format
     * @param assetId 
     * @param formatId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdGetWithHttpInfo(assetId: string, formatId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FormatSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdGetWithHttpInfo(assetId, formatId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get asset\'s format
     * @param assetId 
     * @param formatId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdGet(assetId: string, formatId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<FormatSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdGet(assetId, formatId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_formats 
     * Update format information
     * @param assetId 
     * @param formatId 
     * @param formatSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdPatchWithHttpInfo(assetId: string, formatId: string, formatSchema: FormatSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FormatSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdPatchWithHttpInfo(assetId, formatId, formatSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_formats 
     * Update format information
     * @param assetId 
     * @param formatId 
     * @param formatSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdPatch(assetId: string, formatId: string, formatSchema: FormatSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<FormatSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdPatch(assetId, formatId, formatSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_formats 
     * Purge deleted asset\'s format
     * @param assetId 
     * @param formatId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdPurgeDeleteWithHttpInfo(assetId: string, formatId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdPurgeDeleteWithHttpInfo(assetId, formatId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_formats 
     * Purge deleted asset\'s format
     * @param assetId 
     * @param formatId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdPurgeDelete(assetId: string, formatId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdPurgeDelete(assetId, formatId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_formats 
     * Update format information
     * @param assetId 
     * @param formatId 
     * @param formatSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdPutWithHttpInfo(assetId: string, formatId: string, formatSchema: FormatSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FormatSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdPutWithHttpInfo(assetId, formatId, formatSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_formats 
     * Update format information
     * @param assetId 
     * @param formatId 
     * @param formatSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdPut(assetId: string, formatId: string, formatSchema: FormatSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<FormatSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdPut(assetId, formatId, formatSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_restore_archived_formats 
     * Restore archived format
     * @param assetId 
     * @param formatId 
     * @param formatRestoreSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdRestorePostWithHttpInfo(assetId: string, formatId: string, formatRestoreSchema: FormatRestoreSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdRestorePostWithHttpInfo(assetId, formatId, formatRestoreSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_restore_archived_formats 
     * Restore archived format
     * @param assetId 
     * @param formatId 
     * @param formatRestoreSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdRestorePost(assetId: string, formatId: string, formatRestoreSchema: FormatRestoreSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdRestorePost(assetId, formatId, formatRestoreSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_formats 
     * Restore deleted asset\'s format
     * @param assetId 
     * @param formatId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdRestorePutWithHttpInfo(assetId: string, formatId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdRestorePutWithHttpInfo(assetId, formatId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_formats 
     * Restore deleted asset\'s format
     * @param assetId 
     * @param formatId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsFormatIdRestorePut(assetId: string, formatId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdRestorePut(assetId, formatId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s file sets in a specific format on a specific storage
     * @param assetId 
     * @param formatId 
     * @param storageId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public filesV1AssetsAssetIdFormatsFormatIdStoragesStorageIdFileSetsGetWithHttpInfo(assetId: string, formatId: string, storageId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<FileSetsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdStoragesStorageIdFileSetsGetWithHttpInfo(assetId, formatId, storageId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s file sets in a specific format on a specific storage
     * @param assetId 
     * @param formatId 
     * @param storageId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public filesV1AssetsAssetIdFormatsFormatIdStoragesStorageIdFileSetsGet(assetId: string, formatId: string, storageId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<FileSetsSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsFormatIdStoragesStorageIdFileSetsGet(assetId, formatId, storageId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get all asset\'s formats
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last format on previous page
     */
    public filesV1AssetsAssetIdFormatsGetWithHttpInfo(assetId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<FormatsSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsGetWithHttpInfo(assetId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get all asset\'s formats
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last format on previous page
     */
    public filesV1AssetsAssetIdFormatsGet(assetId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<FormatsSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsGet(assetId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get asset\'s format
     * @param assetId 
     * @param name 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsNameGetWithHttpInfo(assetId: string, name: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FormatSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsNameGetWithHttpInfo(assetId, name, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get asset\'s format
     * @param assetId 
     * @param name 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsNameGet(assetId: string, name: string, appID?: string, authToken?: string, _options?: Configuration): Promise<FormatSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsNameGet(assetId, name, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_formats 
     * Create format and associate to asset
     * @param assetId 
     * @param formatSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsPostWithHttpInfo(assetId: string, formatSchema: FormatSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FormatSchema>> {
        const result = this.api.filesV1AssetsAssetIdFormatsPostWithHttpInfo(assetId, formatSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_formats 
     * Create format and associate to asset
     * @param assetId 
     * @param formatSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdFormatsPost(assetId: string, formatSchema: FormatSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<FormatSchema> {
        const result = this.api.filesV1AssetsAssetIdFormatsPost(assetId, formatSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets 
     * Get all asset\'s keyframes
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param contentDisposition Set to attachment if you do not want a download link
     * @param lastId ID of a last keyframe on previous page
     * @param includeAllVersions If true return asset\&#39;s keyframes for all versions
     */
    public filesV1AssetsAssetIdKeyframesGetWithHttpInfo(assetId: string, appID?: string, authToken?: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, includeAllVersions?: boolean, _options?: Configuration): Promise<HttpInfo<KeyframesSchema>> {
        const result = this.api.filesV1AssetsAssetIdKeyframesGetWithHttpInfo(assetId, appID, authToken, perPage, generateSignedUrl, contentDisposition, lastId, includeAllVersions, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets 
     * Get all asset\'s keyframes
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param contentDisposition Set to attachment if you do not want a download link
     * @param lastId ID of a last keyframe on previous page
     * @param includeAllVersions If true return asset\&#39;s keyframes for all versions
     */
    public filesV1AssetsAssetIdKeyframesGet(assetId: string, appID?: string, authToken?: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, includeAllVersions?: boolean, _options?: Configuration): Promise<KeyframesSchema> {
        const result = this.api.filesV1AssetsAssetIdKeyframesGet(assetId, appID, authToken, perPage, generateSignedUrl, contentDisposition, lastId, includeAllVersions, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Delete asset\'s keyframe
     * @param assetId 
     * @param keyframeId 
     * @param appID 
     * @param authToken 
     * @param keepPoster 
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdDeleteWithHttpInfo(assetId: string, keyframeId: string, appID?: string, authToken?: string, keepPoster?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdDeleteWithHttpInfo(assetId, keyframeId, appID, authToken, keepPoster, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Delete asset\'s keyframe
     * @param assetId 
     * @param keyframeId 
     * @param appID 
     * @param authToken 
     * @param keepPoster 
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdDelete(assetId: string, keyframeId: string, appID?: string, authToken?: string, keepPoster?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdDelete(assetId, keyframeId, appID, authToken, keepPoster, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets 
     * Get asset\'s proxy
     * @param assetId 
     * @param keyframeId 
     * @param appID 
     * @param authToken 
     * @param contentDisposition Set to attachment if you do not want a download link
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdGetWithHttpInfo(assetId: string, keyframeId: string, appID?: string, authToken?: string, contentDisposition?: string, _options?: Configuration): Promise<HttpInfo<FileSchema>> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdGetWithHttpInfo(assetId, keyframeId, appID, authToken, contentDisposition, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets 
     * Get asset\'s proxy
     * @param assetId 
     * @param keyframeId 
     * @param appID 
     * @param authToken 
     * @param contentDisposition Set to attachment if you do not want a download link
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdGet(assetId: string, keyframeId: string, appID?: string, authToken?: string, contentDisposition?: string, _options?: Configuration): Promise<FileSchema> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdGet(assetId, keyframeId, appID, authToken, contentDisposition, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Update keyframe information
     * @param assetId 
     * @param keyframeId 
     * @param keyframeSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdPatchWithHttpInfo(assetId: string, keyframeId: string, keyframeSchema: KeyframeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<KeyframeSchema>> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdPatchWithHttpInfo(assetId, keyframeId, keyframeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Update keyframe information
     * @param assetId 
     * @param keyframeId 
     * @param keyframeSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdPatch(assetId: string, keyframeId: string, keyframeSchema: KeyframeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<KeyframeSchema> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdPatch(assetId, keyframeId, keyframeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Make the keyframe link private
     * @param assetId 
     * @param keyframeId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdPublicDeleteWithHttpInfo(assetId: string, keyframeId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<KeyframeSchema>> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdPublicDeleteWithHttpInfo(assetId, keyframeId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Make the keyframe link private
     * @param assetId 
     * @param keyframeId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdPublicDelete(assetId: string, keyframeId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<KeyframeSchema> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdPublicDelete(assetId, keyframeId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Make the keyframe link public
     * @param assetId 
     * @param keyframeId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdPublicPostWithHttpInfo(assetId: string, keyframeId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<KeyframeSchema>> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdPublicPostWithHttpInfo(assetId, keyframeId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Make the keyframe link public
     * @param assetId 
     * @param keyframeId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdPublicPost(assetId: string, keyframeId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<KeyframeSchema> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdPublicPost(assetId, keyframeId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Update keyframe information
     * @param assetId 
     * @param keyframeId 
     * @param keyframeSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdPutWithHttpInfo(assetId: string, keyframeId: string, keyframeSchema: KeyframeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<KeyframeSchema>> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdPutWithHttpInfo(assetId, keyframeId, keyframeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Update keyframe information
     * @param assetId 
     * @param keyframeId 
     * @param keyframeSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdKeyframesKeyframeIdPut(assetId: string, keyframeId: string, keyframeSchema: KeyframeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<KeyframeSchema> {
        const result = this.api.filesV1AssetsAssetIdKeyframesKeyframeIdPut(assetId, keyframeId, keyframeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Create keyframe and associate to asset
     * @param assetId 
     * @param keyframeSchema body
     * @param appID 
     * @param authToken 
     * @param useGoogleResumableUpload Set to True to get a google resumable upload link
     */
    public filesV1AssetsAssetIdKeyframesPostWithHttpInfo(assetId: string, keyframeSchema: KeyframeSchema, appID?: string, authToken?: string, useGoogleResumableUpload?: boolean, _options?: Configuration): Promise<HttpInfo<KeyframeCreateSchema>> {
        const result = this.api.filesV1AssetsAssetIdKeyframesPostWithHttpInfo(assetId, keyframeSchema, appID, authToken, useGoogleResumableUpload, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Create keyframe and associate to asset
     * @param assetId 
     * @param keyframeSchema body
     * @param appID 
     * @param authToken 
     * @param useGoogleResumableUpload Set to True to get a google resumable upload link
     */
    public filesV1AssetsAssetIdKeyframesPost(assetId: string, keyframeSchema: KeyframeSchema, appID?: string, authToken?: string, useGoogleResumableUpload?: boolean, _options?: Configuration): Promise<KeyframeCreateSchema> {
        const result = this.api.filesV1AssetsAssetIdKeyframesPost(assetId, keyframeSchema, appID, authToken, useGoogleResumableUpload, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Create keyframe and associate to asset
     * @param assetId 
     * @param storageMethod 
     * @param keyframeSchema body
     * @param appID 
     * @param authToken 
     * @param useGoogleResumableUpload Set to True to get a google resumable upload link
     */
    public filesV1AssetsAssetIdMethodStorageMethodKeyframesPostWithHttpInfo(assetId: string, storageMethod: string, keyframeSchema: KeyframeSchema, appID?: string, authToken?: string, useGoogleResumableUpload?: boolean, _options?: Configuration): Promise<HttpInfo<KeyframeCreateSchema>> {
        const result = this.api.filesV1AssetsAssetIdMethodStorageMethodKeyframesPostWithHttpInfo(assetId, storageMethod, keyframeSchema, appID, authToken, useGoogleResumableUpload, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Create keyframe and associate to asset
     * @param assetId 
     * @param storageMethod 
     * @param keyframeSchema body
     * @param appID 
     * @param authToken 
     * @param useGoogleResumableUpload Set to True to get a google resumable upload link
     */
    public filesV1AssetsAssetIdMethodStorageMethodKeyframesPost(assetId: string, storageMethod: string, keyframeSchema: KeyframeSchema, appID?: string, authToken?: string, useGoogleResumableUpload?: boolean, _options?: Configuration): Promise<KeyframeCreateSchema> {
        const result = this.api.filesV1AssetsAssetIdMethodStorageMethodKeyframesPost(assetId, storageMethod, keyframeSchema, appID, authToken, useGoogleResumableUpload, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Create proxy and associate to asset
     * @param assetId 
     * @param storageMethod 
     * @param proxySchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdMethodStorageMethodProxiesPostWithHttpInfo(assetId: string, storageMethod: string, proxySchema: ProxySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ProxyCreateSchema>> {
        const result = this.api.filesV1AssetsAssetIdMethodStorageMethodProxiesPostWithHttpInfo(assetId, storageMethod, proxySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Create proxy and associate to asset
     * @param assetId 
     * @param storageMethod 
     * @param proxySchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdMethodStorageMethodProxiesPost(assetId: string, storageMethod: string, proxySchema: ProxySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ProxyCreateSchema> {
        const result = this.api.filesV1AssetsAssetIdMethodStorageMethodProxiesPost(assetId, storageMethod, proxySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_proxies 
     * Get all asset\'s proxies
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param contentDisposition Set to attachment if you want a download link
     * @param lastId ID of a last proxy on previous page
     * @param bypassUrlCache Set to true to get a new url for the file rather than using a cached url
     */
    public filesV1AssetsAssetIdProxiesGetWithHttpInfo(assetId: string, appID?: string, authToken?: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, bypassUrlCache?: boolean, _options?: Configuration): Promise<HttpInfo<ProxiesSchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesGetWithHttpInfo(assetId, appID, authToken, perPage, generateSignedUrl, contentDisposition, lastId, bypassUrlCache, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_proxies 
     * Get all asset\'s proxies
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param contentDisposition Set to attachment if you want a download link
     * @param lastId ID of a last proxy on previous page
     * @param bypassUrlCache Set to true to get a new url for the file rather than using a cached url
     */
    public filesV1AssetsAssetIdProxiesGet(assetId: string, appID?: string, authToken?: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, bypassUrlCache?: boolean, _options?: Configuration): Promise<ProxiesSchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesGet(assetId, appID, authToken, perPage, generateSignedUrl, contentDisposition, lastId, bypassUrlCache, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Create proxy and associate to asset
     * @param assetId 
     * @param proxySchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdProxiesPostWithHttpInfo(assetId: string, proxySchema: ProxySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ProxyCreateSchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesPostWithHttpInfo(assetId, proxySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Create proxy and associate to asset
     * @param assetId 
     * @param proxySchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdProxiesPost(assetId: string, proxySchema: ProxySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ProxyCreateSchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesPost(assetId, proxySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_proxies 
     * Delete asset\'s proxy
     * @param assetId 
     * @param proxyId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdProxiesProxyIdDeleteWithHttpInfo(assetId: string, proxyId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdDeleteWithHttpInfo(assetId, proxyId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_proxies 
     * Delete asset\'s proxy
     * @param assetId 
     * @param proxyId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdProxiesProxyIdDelete(assetId: string, proxyId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdDelete(assetId, proxyId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_proxies 
     * Get asset\'s proxy download url
     * @param assetId 
     * @param proxyId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdProxiesProxyIdDownloadUrlGetWithHttpInfo(assetId: string, proxyId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ProxyDownloadURLSchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdDownloadUrlGetWithHttpInfo(assetId, proxyId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_proxies 
     * Get asset\'s proxy download url
     * @param assetId 
     * @param proxyId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdProxiesProxyIdDownloadUrlGet(assetId: string, proxyId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ProxyDownloadURLSchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdDownloadUrlGet(assetId, proxyId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_proxies 
     * Get asset\'s proxy
     * @param assetId 
     * @param proxyId 
     * @param appID 
     * @param authToken 
     * @param contentDisposition Set to attachment if you want a download link
     */
    public filesV1AssetsAssetIdProxiesProxyIdGetWithHttpInfo(assetId: string, proxyId: string, appID?: string, authToken?: string, contentDisposition?: string, _options?: Configuration): Promise<HttpInfo<ProxySchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdGetWithHttpInfo(assetId, proxyId, appID, authToken, contentDisposition, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_proxies 
     * Get asset\'s proxy
     * @param assetId 
     * @param proxyId 
     * @param appID 
     * @param authToken 
     * @param contentDisposition Set to attachment if you want a download link
     */
    public filesV1AssetsAssetIdProxiesProxyIdGet(assetId: string, proxyId: string, appID?: string, authToken?: string, contentDisposition?: string, _options?: Configuration): Promise<ProxySchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdGet(assetId, proxyId, appID, authToken, contentDisposition, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs 
     * Create a transcode job for keyframes from a proxy
     * @param assetId 
     * @param proxyId 
     * @param transcodeRequestSchema body
     * @param authToken 
     * @param appID 
     */
    public filesV1AssetsAssetIdProxiesProxyIdKeyframesPostWithHttpInfo(assetId: string, proxyId: string, transcodeRequestSchema: TranscodeRequestSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<TranscodeResponseSchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdKeyframesPostWithHttpInfo(assetId, proxyId, transcodeRequestSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs 
     * Create a transcode job for keyframes from a proxy
     * @param assetId 
     * @param proxyId 
     * @param transcodeRequestSchema body
     * @param authToken 
     * @param appID 
     */
    public filesV1AssetsAssetIdProxiesProxyIdKeyframesPost(assetId: string, proxyId: string, transcodeRequestSchema: TranscodeRequestSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<TranscodeResponseSchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdKeyframesPost(assetId, proxyId, transcodeRequestSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Cleanup S3 multipart upload
     * @param assetId 
     * @param proxyId 
     * @param multipartUploadProxyCleanupSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdProxiesProxyIdMultipartCleanupPostWithHttpInfo(assetId: string, proxyId: string, multipartUploadProxyCleanupSchema: MultipartUploadProxyCleanupSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdMultipartCleanupPostWithHttpInfo(assetId, proxyId, multipartUploadProxyCleanupSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Cleanup S3 multipart upload
     * @param assetId 
     * @param proxyId 
     * @param multipartUploadProxyCleanupSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdProxiesProxyIdMultipartCleanupPost(assetId: string, proxyId: string, multipartUploadProxyCleanupSchema: MultipartUploadProxyCleanupSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdMultipartCleanupPost(assetId, proxyId, multipartUploadProxyCleanupSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Get presigned urls for S3 multipart upload.
     * @param assetId 
     * @param proxyId 
     * @param uploadId Multipart UploadId
     * @param appID 
     * @param authToken 
     * @param type List of multipart upload urls of required type
     * @param maxPartNumber Maximum PartNumber that multipart upload has
     */
    public filesV1AssetsAssetIdProxiesProxyIdMultipartUrlGetWithHttpInfo(assetId: string, proxyId: string, uploadId: string, appID?: string, authToken?: string, type?: string, maxPartNumber?: number, _options?: Configuration): Promise<HttpInfo<MultiPartURLsSchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdMultipartUrlGetWithHttpInfo(assetId, proxyId, uploadId, appID, authToken, type, maxPartNumber, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Get presigned urls for S3 multipart upload.
     * @param assetId 
     * @param proxyId 
     * @param uploadId Multipart UploadId
     * @param appID 
     * @param authToken 
     * @param type List of multipart upload urls of required type
     * @param maxPartNumber Maximum PartNumber that multipart upload has
     */
    public filesV1AssetsAssetIdProxiesProxyIdMultipartUrlGet(assetId: string, proxyId: string, uploadId: string, appID?: string, authToken?: string, type?: string, maxPartNumber?: number, _options?: Configuration): Promise<MultiPartURLsSchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdMultipartUrlGet(assetId, proxyId, uploadId, appID, authToken, type, maxPartNumber, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Get presigned urls for S3 multipart part upload.
     * @param assetId 
     * @param proxyId 
     * @param partsNum Number of parts to upload
     * @param appID 
     * @param authToken 
     * @param uploadId Multipart UploadId
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     */
    public filesV1AssetsAssetIdProxiesProxyIdMultipartUrlPartGetWithHttpInfo(assetId: string, proxyId: string, partsNum: number, appID?: string, authToken?: string, uploadId?: string, perPage?: number, page?: number, _options?: Configuration): Promise<HttpInfo<MultiPartUploadURLsSchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdMultipartUrlPartGetWithHttpInfo(assetId, proxyId, partsNum, appID, authToken, uploadId, perPage, page, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Get presigned urls for S3 multipart part upload.
     * @param assetId 
     * @param proxyId 
     * @param partsNum Number of parts to upload
     * @param appID 
     * @param authToken 
     * @param uploadId Multipart UploadId
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     */
    public filesV1AssetsAssetIdProxiesProxyIdMultipartUrlPartGet(assetId: string, proxyId: string, partsNum: number, appID?: string, authToken?: string, uploadId?: string, perPage?: number, page?: number, _options?: Configuration): Promise<MultiPartUploadURLsSchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdMultipartUrlPartGet(assetId, proxyId, partsNum, appID, authToken, uploadId, perPage, page, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Update proxy information
     * @param assetId 
     * @param proxyId 
     * @param proxySchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdProxiesProxyIdPatchWithHttpInfo(assetId: string, proxyId: string, proxySchema: ProxySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ProxySchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdPatchWithHttpInfo(assetId, proxyId, proxySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Update proxy information
     * @param assetId 
     * @param proxyId 
     * @param proxySchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdProxiesProxyIdPatch(assetId: string, proxyId: string, proxySchema: ProxySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ProxySchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdPatch(assetId, proxyId, proxySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Make the proxy link private
     * @param assetId 
     * @param proxyId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdProxiesProxyIdPublicDeleteWithHttpInfo(assetId: string, proxyId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ProxySchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdPublicDeleteWithHttpInfo(assetId, proxyId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Make the proxy link private
     * @param assetId 
     * @param proxyId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdProxiesProxyIdPublicDelete(assetId: string, proxyId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ProxySchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdPublicDelete(assetId, proxyId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Make the proxy link public
     * @param assetId 
     * @param proxyId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdProxiesProxyIdPublicPostWithHttpInfo(assetId: string, proxyId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ProxySchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdPublicPostWithHttpInfo(assetId, proxyId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Make the proxy link public
     * @param assetId 
     * @param proxyId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdProxiesProxyIdPublicPost(assetId: string, proxyId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ProxySchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdPublicPost(assetId, proxyId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Update proxy information
     * @param assetId 
     * @param proxyId 
     * @param proxySchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdProxiesProxyIdPutWithHttpInfo(assetId: string, proxyId: string, proxySchema: ProxySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ProxySchema>> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdPutWithHttpInfo(assetId, proxyId, proxySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_proxies 
     * Update proxy information
     * @param assetId 
     * @param proxyId 
     * @param proxySchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdProxiesProxyIdPut(assetId: string, proxyId: string, proxySchema: ProxySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ProxySchema> {
        const result = this.api.filesV1AssetsAssetIdProxiesProxyIdPut(assetId, proxyId, proxySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get all asset\'s subtitles
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last subtitle on previous page
     */
    public filesV1AssetsAssetIdSubtitlesGetWithHttpInfo(assetId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<SubtitlesSchema>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesGetWithHttpInfo(assetId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get all asset\'s subtitles
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last subtitle on previous page
     */
    public filesV1AssetsAssetIdSubtitlesGet(assetId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<SubtitlesSchema> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesGet(assetId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s closed captions subtitle for a particular language
     * @param assetId 
     * @param language 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdSubtitlesLanguageCcGetWithHttpInfo(assetId: string, language: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SubtitleSchema>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesLanguageCcGetWithHttpInfo(assetId, language, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s closed captions subtitle for a particular language
     * @param assetId 
     * @param language 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdSubtitlesLanguageCcGet(assetId: string, language: string, appID?: string, authToken?: string, _options?: Configuration): Promise<SubtitleSchema> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesLanguageCcGet(assetId, language, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s closed captions subtitle file for a particular language
     * @param assetId 
     * @param language 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdSubtitlesLanguageCcWebvttGetWithHttpInfo(assetId: string, language: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesLanguageCcWebvttGetWithHttpInfo(assetId, language, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s closed captions subtitle file for a particular language
     * @param assetId 
     * @param language 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdSubtitlesLanguageCcWebvttGet(assetId: string, language: string, appID?: string, authToken?: string, _options?: Configuration): Promise<string> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesLanguageCcWebvttGet(assetId, language, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s subtitle for a particular language
     * @param assetId 
     * @param language 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdSubtitlesLanguageGetWithHttpInfo(assetId: string, language: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SubtitleSchema>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesLanguageGetWithHttpInfo(assetId, language, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s subtitle for a particular language
     * @param assetId 
     * @param language 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdSubtitlesLanguageGet(assetId: string, language: string, appID?: string, authToken?: string, _options?: Configuration): Promise<SubtitleSchema> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesLanguageGet(assetId, language, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s subtitle file for a particular language
     * @param assetId 
     * @param language 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdSubtitlesLanguageWebvttGetWithHttpInfo(assetId: string, language: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesLanguageWebvttGetWithHttpInfo(assetId, language, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s subtitle file for a particular language
     * @param assetId 
     * @param language 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdSubtitlesLanguageWebvttGet(assetId: string, language: string, appID?: string, authToken?: string, _options?: Configuration): Promise<string> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesLanguageWebvttGet(assetId, language, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_subtitles 
     * Create subtitle proxy and associate to asset
     * @param assetId 
     * @param subtitleSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdSubtitlesPostWithHttpInfo(assetId: string, subtitleSchema: SubtitleSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SubtitleSchema>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesPostWithHttpInfo(assetId, subtitleSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_subtitles 
     * Create subtitle proxy and associate to asset
     * @param assetId 
     * @param subtitleSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdSubtitlesPost(assetId: string, subtitleSchema: SubtitleSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SubtitleSchema> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesPost(assetId, subtitleSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Delete asset\'s subtitle
     * @param assetId 
     * @param subtitleId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdSubtitlesSubtitleIdCcDeleteWithHttpInfo(assetId: string, subtitleId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesSubtitleIdCcDeleteWithHttpInfo(assetId, subtitleId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Delete asset\'s subtitle
     * @param assetId 
     * @param subtitleId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdSubtitlesSubtitleIdCcDelete(assetId: string, subtitleId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesSubtitleIdCcDelete(assetId, subtitleId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Delete asset\'s subtitle
     * @param assetId 
     * @param subtitleId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdSubtitlesSubtitleIdDeleteWithHttpInfo(assetId: string, subtitleId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesSubtitleIdDeleteWithHttpInfo(assetId, subtitleId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Delete asset\'s subtitle
     * @param assetId 
     * @param subtitleId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdSubtitlesSubtitleIdDelete(assetId: string, subtitleId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesSubtitleIdDelete(assetId, subtitleId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s subtitle for a language
     * @param assetId 
     * @param subtitleId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdSubtitlesSubtitleIdGetWithHttpInfo(assetId: string, subtitleId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SubtitleSchema>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesSubtitleIdGetWithHttpInfo(assetId, subtitleId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s subtitle for a language
     * @param assetId 
     * @param subtitleId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdSubtitlesSubtitleIdGet(assetId: string, subtitleId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<SubtitleSchema> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesSubtitleIdGet(assetId, subtitleId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_subtitles 
     * Update subtitle information
     * @param assetId 
     * @param subtitleId 
     * @param subtitleSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdSubtitlesSubtitleIdPatchWithHttpInfo(assetId: string, subtitleId: string, subtitleSchema: SubtitleSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SubtitleSchema>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesSubtitleIdPatchWithHttpInfo(assetId, subtitleId, subtitleSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_subtitles 
     * Update subtitle information
     * @param assetId 
     * @param subtitleId 
     * @param subtitleSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdSubtitlesSubtitleIdPatch(assetId: string, subtitleId: string, subtitleSchema: SubtitleSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SubtitleSchema> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesSubtitleIdPatch(assetId, subtitleId, subtitleSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_subtitles 
     * Update subtitle information
     * @param assetId 
     * @param subtitleId 
     * @param subtitleSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdSubtitlesSubtitleIdPutWithHttpInfo(assetId: string, subtitleId: string, subtitleSchema: SubtitleSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SubtitleSchema>> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesSubtitleIdPutWithHttpInfo(assetId, subtitleId, subtitleSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_asset_subtitles 
     * Update subtitle information
     * @param assetId 
     * @param subtitleId 
     * @param subtitleSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdSubtitlesSubtitleIdPut(assetId: string, subtitleId: string, subtitleSchema: SubtitleSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SubtitleSchema> {
        const result = this.api.filesV1AssetsAssetIdSubtitlesSubtitleIdPut(assetId, subtitleId, subtitleSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete temporary file set with files
     * @param assetId 
     * @param fileSetId 
     * @param appID 
     * @param authToken 
     * @param deleteCloudObjects 
     */
    public filesV1AssetsAssetIdTemporaryFileSetsFileSetIdDeleteWithHttpInfo(assetId: string, fileSetId: string, appID?: string, authToken?: string, deleteCloudObjects?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFileSetsFileSetIdDeleteWithHttpInfo(assetId, fileSetId, appID, authToken, deleteCloudObjects, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete temporary file set with files
     * @param assetId 
     * @param fileSetId 
     * @param appID 
     * @param authToken 
     * @param deleteCloudObjects 
     */
    public filesV1AssetsAssetIdTemporaryFileSetsFileSetIdDelete(assetId: string, fileSetId: string, appID?: string, authToken?: string, deleteCloudObjects?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFileSetsFileSetIdDelete(assetId, fileSetId, appID, authToken, deleteCloudObjects, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get files from a temporary file set
     * @param assetId 
     * @param fileSetId 
     * @param appID 
     * @param authToken 
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     */
    public filesV1AssetsAssetIdTemporaryFileSetsFileSetIdFilesGetWithHttpInfo(assetId: string, fileSetId: string, appID?: string, authToken?: string, generateSignedUrl?: boolean, _options?: Configuration): Promise<HttpInfo<FilesSchema>> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFileSetsFileSetIdFilesGetWithHttpInfo(assetId, fileSetId, appID, authToken, generateSignedUrl, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get files from a temporary file set
     * @param assetId 
     * @param fileSetId 
     * @param appID 
     * @param authToken 
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     */
    public filesV1AssetsAssetIdTemporaryFileSetsFileSetIdFilesGet(assetId: string, fileSetId: string, appID?: string, authToken?: string, generateSignedUrl?: boolean, _options?: Configuration): Promise<FilesSchema> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFileSetsFileSetIdFilesGet(assetId, fileSetId, appID, authToken, generateSignedUrl, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Create temporary file set and associate to asset
     * @param assetId 
     * @param temporaryFileSetSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdTemporaryFileSetsPostWithHttpInfo(assetId: string, temporaryFileSetSchema: TemporaryFileSetSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<TemporaryFileSetSchema>> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFileSetsPostWithHttpInfo(assetId, temporaryFileSetSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Create temporary file set and associate to asset
     * @param assetId 
     * @param temporaryFileSetSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdTemporaryFileSetsPost(assetId: string, temporaryFileSetSchema: TemporaryFileSetSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<TemporaryFileSetSchema> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFileSetsPost(assetId, temporaryFileSetSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update temporary file\'s info
     * @param assetId 
     * @param fileId 
     * @param fileSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdTemporaryFilesFileIdPatchWithHttpInfo(assetId: string, fileId: string, fileSchema: FileSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FileSchema>> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFilesFileIdPatchWithHttpInfo(assetId, fileId, fileSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update temporary file\'s info
     * @param assetId 
     * @param fileId 
     * @param fileSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdTemporaryFilesFileIdPatch(assetId: string, fileId: string, fileSchema: FileSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<FileSchema> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFilesFileIdPatch(assetId, fileId, fileSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update temporary file\'s info
     * @param assetId 
     * @param fileId 
     * @param fileSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdTemporaryFilesFileIdPutWithHttpInfo(assetId: string, fileId: string, fileSchema: FileSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FileSchema>> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFilesFileIdPutWithHttpInfo(assetId, fileId, fileSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update temporary file\'s info
     * @param assetId 
     * @param fileId 
     * @param fileSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdTemporaryFilesFileIdPut(assetId: string, fileId: string, fileSchema: FileSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<FileSchema> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFilesFileIdPut(assetId, fileId, fileSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Create temporary transfer file for FILE storage transfers
     * @param assetId 
     * @param fileSchema body
     * @param appID 
     * @param authToken 
     * @param store 
     */
    public filesV1AssetsAssetIdTemporaryFilesPostWithHttpInfo(assetId: string, fileSchema: FileSchema, appID?: string, authToken?: string, store?: boolean, _options?: Configuration): Promise<HttpInfo<TemporaryFileCreateSchema>> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFilesPostWithHttpInfo(assetId, fileSchema, appID, authToken, store, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Create temporary transfer file for FILE storage transfers
     * @param assetId 
     * @param fileSchema body
     * @param appID 
     * @param authToken 
     * @param store 
     */
    public filesV1AssetsAssetIdTemporaryFilesPost(assetId: string, fileSchema: FileSchema, appID?: string, authToken?: string, store?: boolean, _options?: Configuration): Promise<TemporaryFileCreateSchema> {
        const result = this.api.filesV1AssetsAssetIdTemporaryFilesPost(assetId, fileSchema, appID, authToken, store, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s file sets
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public filesV1AssetsAssetIdVersionsAllFileSetsDeleteWithHttpInfo(assetId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllFileSetsDeleteWithHttpInfo(assetId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s file sets
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public filesV1AssetsAssetIdVersionsAllFileSetsDelete(assetId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllFileSetsDelete(assetId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s files entries by version (Not the actual file, use DELETE file_set for that)
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsAllFilesDeleteWithHttpInfo(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllFilesDeleteWithHttpInfo(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s files entries by version (Not the actual file, use DELETE file_set for that)
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsAllFilesDelete(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllFilesDelete(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_formats 
     * Delete asset\'s formats all versions
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsAllFormatsDeleteWithHttpInfo(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllFormatsDeleteWithHttpInfo(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_formats 
     * Delete asset\'s formats all versions
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsAllFormatsDelete(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllFormatsDelete(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Delete asset\'s keyframes all versions
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsAllKeyframesDeleteWithHttpInfo(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllKeyframesDeleteWithHttpInfo(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Delete asset\'s keyframes all versions
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsAllKeyframesDelete(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllKeyframesDelete(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_proxies 
     * Delete asset\'s proxies all versions
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsAllProxiesDeleteWithHttpInfo(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllProxiesDeleteWithHttpInfo(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_proxies 
     * Delete asset\'s proxies all versions
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsAllProxiesDelete(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllProxiesDelete(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Delete asset\'s subtitles all versions
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsAllSubtitlesDeleteWithHttpInfo(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllSubtitlesDeleteWithHttpInfo(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Delete asset\'s subtitles all versions
     * @param assetId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsAllSubtitlesDelete(assetId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsAllSubtitlesDelete(assetId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s file sets by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdFileSetsDeleteWithHttpInfo(assetId: string, versionId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFileSetsDeleteWithHttpInfo(assetId, versionId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s file sets by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdFileSetsDelete(assetId: string, versionId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFileSetsDelete(assetId, versionId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s file sets by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     * @param fileCount Set to true if you need a total amount of files in a file set
     */
    public filesV1AssetsAssetIdVersionsVersionIdFileSetsGetWithHttpInfo(assetId: string, versionId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, fileCount?: boolean, _options?: Configuration): Promise<HttpInfo<FileSetsSchema>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFileSetsGetWithHttpInfo(assetId, versionId, appID, authToken, perPage, lastId, fileCount, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s file sets by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file set on previous page
     * @param fileCount Set to true if you need a total amount of files in a file set
     */
    public filesV1AssetsAssetIdVersionsVersionIdFileSetsGet(assetId: string, versionId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, fileCount?: boolean, _options?: Configuration): Promise<FileSetsSchema> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFileSetsGet(assetId, versionId, appID, authToken, perPage, lastId, fileCount, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s files entries by version (Not the actual file, use DELETE file_set for that)
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsVersionIdFilesDeleteWithHttpInfo(assetId: string, versionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFilesDeleteWithHttpInfo(assetId, versionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete asset\'s files entries by version (Not the actual file, use DELETE file_set for that)
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsVersionIdFilesDelete(assetId: string, versionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFilesDelete(assetId, versionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s files by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to False if you do not need a URL, will slow things down otherwise
     * @param contentDisposition Set to attachment if you want a download link. Note that this will not create a download in asset history
     * @param lastId ID of a last file on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdFilesGetWithHttpInfo(assetId: string, versionId: string, appID?: string, authToken?: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, _options?: Configuration): Promise<HttpInfo<FilesSchema>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFilesGetWithHttpInfo(assetId, versionId, appID, authToken, perPage, generateSignedUrl, contentDisposition, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get all asset\'s files by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to False if you do not need a URL, will slow things down otherwise
     * @param contentDisposition Set to attachment if you want a download link. Note that this will not create a download in asset history
     * @param lastId ID of a last file on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdFilesGet(assetId: string, versionId: string, appID?: string, authToken?: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, _options?: Configuration): Promise<FilesSchema> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFilesGet(assetId, versionId, appID, authToken, perPage, generateSignedUrl, contentDisposition, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_formats 
     * Delete asset\'s formats by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsVersionIdFormatsDeleteWithHttpInfo(assetId: string, versionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFormatsDeleteWithHttpInfo(assetId, versionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_formats 
     * Delete asset\'s formats by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsVersionIdFormatsDelete(assetId: string, versionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFormatsDelete(assetId, versionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get all asset\'s formats by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last format on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdFormatsGetWithHttpInfo(assetId: string, versionId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<FormatsSchema>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFormatsGetWithHttpInfo(assetId, versionId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats 
     * Get all asset\'s formats by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last format on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdFormatsGet(assetId: string, versionId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<FormatsSchema> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdFormatsGet(assetId, versionId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Delete asset\'s keyframes by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     * @param keepPoster 
     */
    public filesV1AssetsAssetIdVersionsVersionIdKeyframesDeleteWithHttpInfo(assetId: string, versionId: string, appID?: string, authToken?: string, keepPoster?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdKeyframesDeleteWithHttpInfo(assetId, versionId, appID, authToken, keepPoster, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Delete asset\'s keyframes by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     * @param keepPoster 
     */
    public filesV1AssetsAssetIdVersionsVersionIdKeyframesDelete(assetId: string, versionId: string, appID?: string, authToken?: string, keepPoster?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdKeyframesDelete(assetId, versionId, appID, authToken, keepPoster, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets 
     * Get all asset\'s keyframes by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param contentDisposition Set to attachment if you do not want a download link
     * @param lastId ID of a last keyframe on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdKeyframesGetWithHttpInfo(assetId: string, versionId: string, appID?: string, authToken?: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, _options?: Configuration): Promise<HttpInfo<KeyframesSchema>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdKeyframesGetWithHttpInfo(assetId, versionId, appID, authToken, perPage, generateSignedUrl, contentDisposition, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_assets 
     * Get all asset\'s keyframes by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param contentDisposition Set to attachment if you do not want a download link
     * @param lastId ID of a last keyframe on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdKeyframesGet(assetId: string, versionId: string, appID?: string, authToken?: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, _options?: Configuration): Promise<KeyframesSchema> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdKeyframesGet(assetId, versionId, appID, authToken, perPage, generateSignedUrl, contentDisposition, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_proxies 
     * Delete asset\'s proxies by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsVersionIdProxiesDeleteWithHttpInfo(assetId: string, versionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdProxiesDeleteWithHttpInfo(assetId, versionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_proxies 
     * Delete asset\'s proxies by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsVersionIdProxiesDelete(assetId: string, versionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdProxiesDelete(assetId, versionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_proxies 
     * Get all asset\'s proxies by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param contentDisposition Set to attachment if you want a download link
     * @param lastId ID of a last proxy on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdProxiesGetWithHttpInfo(assetId: string, versionId: string, appID?: string, authToken?: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, _options?: Configuration): Promise<HttpInfo<ProxiesSchema>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdProxiesGetWithHttpInfo(assetId, versionId, appID, authToken, perPage, generateSignedUrl, contentDisposition, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_proxies 
     * Get all asset\'s proxies by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param contentDisposition Set to attachment if you want a download link
     * @param lastId ID of a last proxy on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdProxiesGet(assetId: string, versionId: string, appID?: string, authToken?: string, perPage?: number, generateSignedUrl?: boolean, contentDisposition?: string, lastId?: string, _options?: Configuration): Promise<ProxiesSchema> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdProxiesGet(assetId, versionId, appID, authToken, perPage, generateSignedUrl, contentDisposition, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Delete asset\'s subtitles by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsVersionIdSubtitlesDeleteWithHttpInfo(assetId: string, versionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdSubtitlesDeleteWithHttpInfo(assetId, versionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_assets 
     * Delete asset\'s subtitles by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsVersionIdSubtitlesDelete(assetId: string, versionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdSubtitlesDelete(assetId, versionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get all asset\'s subtitles by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last subtitle on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdSubtitlesGetWithHttpInfo(assetId: string, versionId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<SubtitlesSchema>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdSubtitlesGetWithHttpInfo(assetId, versionId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get all asset\'s subtitles by version
     * @param assetId 
     * @param versionId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last subtitle on previous page
     */
    public filesV1AssetsAssetIdVersionsVersionIdSubtitlesGet(assetId: string, versionId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<SubtitlesSchema> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdSubtitlesGet(assetId, versionId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s closed captions subtitle file for a particular language by version
     * @param assetId 
     * @param versionId 
     * @param language 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageCcWebvttGetWithHttpInfo(assetId: string, versionId: string, language: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageCcWebvttGetWithHttpInfo(assetId, versionId, language, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s closed captions subtitle file for a particular language by version
     * @param assetId 
     * @param versionId 
     * @param language 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageCcWebvttGet(assetId: string, versionId: string, language: string, appID?: string, authToken?: string, _options?: Configuration): Promise<string> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageCcWebvttGet(assetId, versionId, language, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s subtitle file for a particular language by version
     * @param assetId 
     * @param versionId 
     * @param language 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageWebvttGetWithHttpInfo(assetId: string, versionId: string, language: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageWebvttGetWithHttpInfo(assetId, versionId, language, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_asset_subtitles 
     * Get asset\'s subtitle file for a particular language by version
     * @param assetId 
     * @param versionId 
     * @param language 
     * @param appID 
     * @param authToken 
     */
    public filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageWebvttGet(assetId: string, versionId: string, language: string, appID?: string, authToken?: string, _options?: Configuration): Promise<string> {
        const result = this.api.filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageWebvttGet(assetId, versionId, language, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs 
     * Create a transcode job for proxy and keyframes generation of multiple assets
     * @param bulkTranscodeSchema body
     * @param authToken 
     * @param appID 
     */
    public filesV1AssetsBulkKeyframesPostWithHttpInfo(bulkTranscodeSchema: BulkTranscodeSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsBulkKeyframesPostWithHttpInfo(bulkTranscodeSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_transcode_jobs 
     * Create a transcode job for proxy and keyframes generation of multiple assets
     * @param bulkTranscodeSchema body
     * @param authToken 
     * @param appID 
     */
    public filesV1AssetsBulkKeyframesPost(bulkTranscodeSchema: BulkTranscodeSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsBulkKeyframesPost(bulkTranscodeSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_exports 
     * Export multiple assets to export location
     * @param exportLocationId 
     * @param assetBatchExportSchema body
     * @param appID 
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1AssetsExportLocationsExportLocationIdPostWithHttpInfo(exportLocationId: string, assetBatchExportSchema: AssetBatchExportSchema, appID?: string, allowHostTransfer?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1AssetsExportLocationsExportLocationIdPostWithHttpInfo(exportLocationId, assetBatchExportSchema, appID, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_exports 
     * Export multiple assets to export location
     * @param exportLocationId 
     * @param assetBatchExportSchema body
     * @param appID 
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1AssetsExportLocationsExportLocationIdPost(exportLocationId: string, assetBatchExportSchema: AssetBatchExportSchema, appID?: string, allowHostTransfer?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1AssetsExportLocationsExportLocationIdPost(exportLocationId, assetBatchExportSchema, appID, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Set keyframe of type poster as collection keyframe
     * @param collectionId 
     * @param posterId 
     * @param appID 
     * @param authToken 
     * @param overwrite set to false to keep current custom_poster and custom_keyframe on asset
     */
    public filesV1CollectionsCollectionIdCustomKeyframePosterIdPostWithHttpInfo(collectionId: string, posterId: string, appID?: string, authToken?: string, overwrite?: boolean, _options?: Configuration): Promise<HttpInfo<CollectionKeyframeSchema>> {
        const result = this.api.filesV1CollectionsCollectionIdCustomKeyframePosterIdPostWithHttpInfo(collectionId, posterId, appID, authToken, overwrite, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Set keyframe of type poster as collection keyframe
     * @param collectionId 
     * @param posterId 
     * @param appID 
     * @param authToken 
     * @param overwrite set to false to keep current custom_poster and custom_keyframe on asset
     */
    public filesV1CollectionsCollectionIdCustomKeyframePosterIdPost(collectionId: string, posterId: string, appID?: string, authToken?: string, overwrite?: boolean, _options?: Configuration): Promise<CollectionKeyframeSchema> {
        const result = this.api.filesV1CollectionsCollectionIdCustomKeyframePosterIdPost(collectionId, posterId, appID, authToken, overwrite, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_exports 
     * Export collection assets to export location
     * @param collectionId 
     * @param exportLocationId 
     * @param collectionExportSchema body
     * @param appID 
     * @param authToken 
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1CollectionsCollectionIdExportLocationsExportLocationIdPostWithHttpInfo(collectionId: string, exportLocationId: string, collectionExportSchema: CollectionExportSchema, appID?: string, authToken?: string, allowHostTransfer?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1CollectionsCollectionIdExportLocationsExportLocationIdPostWithHttpInfo(collectionId, exportLocationId, collectionExportSchema, appID, authToken, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_exports 
     * Export collection assets to export location
     * @param collectionId 
     * @param exportLocationId 
     * @param collectionExportSchema body
     * @param appID 
     * @param authToken 
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1CollectionsCollectionIdExportLocationsExportLocationIdPost(collectionId: string, exportLocationId: string, collectionExportSchema: CollectionExportSchema, appID?: string, authToken?: string, allowHostTransfer?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1CollectionsCollectionIdExportLocationsExportLocationIdPost(collectionId, exportLocationId, collectionExportSchema, appID, authToken, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Get all collection\'s keyframes
     * @param collectionId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param lastId ID of a last collection keyframe on previous page
     */
    public filesV1CollectionsCollectionIdKeyframesGetWithHttpInfo(collectionId: string, appID?: string, authToken?: string, perPage?: number, generateSignedUrl?: boolean, lastId?: string, _options?: Configuration): Promise<HttpInfo<CollectionKeyframesSchema>> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesGetWithHttpInfo(collectionId, appID, authToken, perPage, generateSignedUrl, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Get all collection\'s keyframes
     * @param collectionId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param lastId ID of a last collection keyframe on previous page
     */
    public filesV1CollectionsCollectionIdKeyframesGet(collectionId: string, appID?: string, authToken?: string, perPage?: number, generateSignedUrl?: boolean, lastId?: string, _options?: Configuration): Promise<CollectionKeyframesSchema> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesGet(collectionId, appID, authToken, perPage, generateSignedUrl, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Delete collection\'s keyframe
     * @param collectionId 
     * @param keyframeId 
     * @param appID 
     * @param authToken 
     * @param regenerateKeyframes set to true to force a regeneration of default keyframes
     */
    public filesV1CollectionsCollectionIdKeyframesKeyframeIdDeleteWithHttpInfo(collectionId: string, keyframeId: string, appID?: string, authToken?: string, regenerateKeyframes?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesKeyframeIdDeleteWithHttpInfo(collectionId, keyframeId, appID, authToken, regenerateKeyframes, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Delete collection\'s keyframe
     * @param collectionId 
     * @param keyframeId 
     * @param appID 
     * @param authToken 
     * @param regenerateKeyframes set to true to force a regeneration of default keyframes
     */
    public filesV1CollectionsCollectionIdKeyframesKeyframeIdDelete(collectionId: string, keyframeId: string, appID?: string, authToken?: string, regenerateKeyframes?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesKeyframeIdDelete(collectionId, keyframeId, appID, authToken, regenerateKeyframes, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Get collection\'s proxy
     * @param collectionId 
     * @param keyframeId 
     * @param appID 
     * @param authToken 
     */
    public filesV1CollectionsCollectionIdKeyframesKeyframeIdGetWithHttpInfo(collectionId: string, keyframeId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CollectionKeyframeSchema>> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesKeyframeIdGetWithHttpInfo(collectionId, keyframeId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_collections 
     * Get collection\'s proxy
     * @param collectionId 
     * @param keyframeId 
     * @param appID 
     * @param authToken 
     */
    public filesV1CollectionsCollectionIdKeyframesKeyframeIdGet(collectionId: string, keyframeId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<CollectionKeyframeSchema> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesKeyframeIdGet(collectionId, keyframeId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Update keyframe information
     * @param collectionId 
     * @param keyframeId 
     * @param collectionKeyframeSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1CollectionsCollectionIdKeyframesKeyframeIdPatchWithHttpInfo(collectionId: string, keyframeId: string, collectionKeyframeSchema: CollectionKeyframeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CollectionKeyframeSchema>> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesKeyframeIdPatchWithHttpInfo(collectionId, keyframeId, collectionKeyframeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Update keyframe information
     * @param collectionId 
     * @param keyframeId 
     * @param collectionKeyframeSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1CollectionsCollectionIdKeyframesKeyframeIdPatch(collectionId: string, keyframeId: string, collectionKeyframeSchema: CollectionKeyframeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<CollectionKeyframeSchema> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesKeyframeIdPatch(collectionId, keyframeId, collectionKeyframeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Update keyframe information
     * @param collectionId 
     * @param keyframeId 
     * @param collectionKeyframeSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1CollectionsCollectionIdKeyframesKeyframeIdPutWithHttpInfo(collectionId: string, keyframeId: string, collectionKeyframeSchema: CollectionKeyframeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CollectionKeyframeSchema>> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesKeyframeIdPutWithHttpInfo(collectionId, keyframeId, collectionKeyframeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Update keyframe information
     * @param collectionId 
     * @param keyframeId 
     * @param collectionKeyframeSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1CollectionsCollectionIdKeyframesKeyframeIdPut(collectionId: string, keyframeId: string, collectionKeyframeSchema: CollectionKeyframeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<CollectionKeyframeSchema> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesKeyframeIdPut(collectionId, keyframeId, collectionKeyframeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Create keyframe and associate to collection
     * @param collectionId 
     * @param collectionKeyframeSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1CollectionsCollectionIdKeyframesPostWithHttpInfo(collectionId: string, collectionKeyframeSchema: CollectionKeyframeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CollectionKeyframeCreateSchema>> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesPostWithHttpInfo(collectionId, collectionKeyframeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_keyframes 
     * Create keyframe and associate to collection
     * @param collectionId 
     * @param collectionKeyframeSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1CollectionsCollectionIdKeyframesPost(collectionId: string, collectionKeyframeSchema: CollectionKeyframeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<CollectionKeyframeCreateSchema> {
        const result = this.api.filesV1CollectionsCollectionIdKeyframesPost(collectionId, collectionKeyframeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Restore file sets from delete queue
     * @param deleteQueueSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1DeleteQueueFileSetsDeleteWithHttpInfo(deleteQueueSchema: DeleteQueueSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1DeleteQueueFileSetsDeleteWithHttpInfo(deleteQueueSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Restore file sets from delete queue
     * @param deleteQueueSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1DeleteQueueFileSetsDelete(deleteQueueSchema: DeleteQueueSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1DeleteQueueFileSetsDelete(deleteQueueSchema, appID, authToken, _options);
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
    public filesV1DeleteQueueFileSetsGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, page?: number, sort?: string, query?: string, fieldName?: string, _options?: Configuration): Promise<HttpInfo<FileSetsElasticSchema>> {
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
    public filesV1DeleteQueueFileSetsGet(appID?: string, authToken?: string, perPage?: number, page?: number, sort?: string, query?: string, fieldName?: string, _options?: Configuration): Promise<FileSetsElasticSchema> {
        const result = this.api.filesV1DeleteQueueFileSetsGet(appID, authToken, perPage, page, sort, query, fieldName, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_files 
     * Purge all file sets from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public filesV1DeleteQueueFileSetsPurgeAllPostWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1DeleteQueueFileSetsPurgeAllPostWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_files 
     * Purge all file sets from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public filesV1DeleteQueueFileSetsPurgeAllPost(appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1DeleteQueueFileSetsPurgeAllPost(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_files 
     * Purge file sets from delete queue (Permanently delete)
     * @param deleteQueueSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1DeleteQueueFileSetsPurgePostWithHttpInfo(deleteQueueSchema: DeleteQueueSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1DeleteQueueFileSetsPurgePostWithHttpInfo(deleteQueueSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_files 
     * Purge file sets from delete queue (Permanently delete)
     * @param deleteQueueSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1DeleteQueueFileSetsPurgePost(deleteQueueSchema: DeleteQueueSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1DeleteQueueFileSetsPurgePost(deleteQueueSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_formats 
     * Restore formats from delete queue
     * @param deleteQueueSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1DeleteQueueFormatsDeleteWithHttpInfo(deleteQueueSchema: DeleteQueueSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1DeleteQueueFormatsDeleteWithHttpInfo(deleteQueueSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_formats 
     * Restore formats from delete queue
     * @param deleteQueueSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1DeleteQueueFormatsDelete(deleteQueueSchema: DeleteQueueSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1DeleteQueueFormatsDelete(deleteQueueSchema, appID, authToken, _options);
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
    public filesV1DeleteQueueFormatsGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, page?: number, sort?: string, query?: string, fieldName?: string, _options?: Configuration): Promise<HttpInfo<FormatsElasticSchema>> {
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
    public filesV1DeleteQueueFormatsGet(appID?: string, authToken?: string, perPage?: number, page?: number, sort?: string, query?: string, fieldName?: string, _options?: Configuration): Promise<FormatsElasticSchema> {
        const result = this.api.filesV1DeleteQueueFormatsGet(appID, authToken, perPage, page, sort, query, fieldName, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_formats 
     * Purge all formats from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public filesV1DeleteQueueFormatsPurgeAllPostWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1DeleteQueueFormatsPurgeAllPostWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_formats 
     * Purge all formats from delete queue (Permanently delete)
     * @param appID 
     * @param authToken 
     */
    public filesV1DeleteQueueFormatsPurgeAllPost(appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1DeleteQueueFormatsPurgeAllPost(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_formats 
     * Purge formats from delete queue (Permanently delete)
     * @param deleteQueueSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1DeleteQueueFormatsPurgePostWithHttpInfo(deleteQueueSchema: DeleteQueueSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1DeleteQueueFormatsPurgePostWithHttpInfo(deleteQueueSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_purge_formats 
     * Purge formats from delete queue (Permanently delete)
     * @param deleteQueueSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1DeleteQueueFormatsPurgePost(deleteQueueSchema: DeleteQueueSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1DeleteQueueFormatsPurgePost(deleteQueueSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_exports 
     * Export multiple objects to export location
     * @param exportLocationId 
     * @param bulkFilesetExportSchema body
     * @param appID 
     * @param authToken 
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1ExportLocationsExportLocationIdBulkExportPostWithHttpInfo(exportLocationId: string, bulkFilesetExportSchema: BulkFilesetExportSchema, appID?: string, authToken?: string, allowHostTransfer?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1ExportLocationsExportLocationIdBulkExportPostWithHttpInfo(exportLocationId, bulkFilesetExportSchema, appID, authToken, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_exports 
     * Export multiple objects to export location
     * @param exportLocationId 
     * @param bulkFilesetExportSchema body
     * @param appID 
     * @param authToken 
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1ExportLocationsExportLocationIdBulkExportPost(exportLocationId: string, bulkFilesetExportSchema: BulkFilesetExportSchema, appID?: string, authToken?: string, allowHostTransfer?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1ExportLocationsExportLocationIdBulkExportPost(exportLocationId, bulkFilesetExportSchema, appID, authToken, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_export_locations 
     * Delete a particular export_location by id
     * @param exportLocationId 
     * @param appID 
     * @param authToken 
     */
    public filesV1ExportLocationsExportLocationIdDeleteWithHttpInfo(exportLocationId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1ExportLocationsExportLocationIdDeleteWithHttpInfo(exportLocationId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_export_locations 
     * Delete a particular export_location by id
     * @param exportLocationId 
     * @param appID 
     * @param authToken 
     */
    public filesV1ExportLocationsExportLocationIdDelete(exportLocationId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1ExportLocationsExportLocationIdDelete(exportLocationId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_export_locations 
     * Returns a particular export_location by id
     * @param exportLocationId 
     * @param appID 
     * @param authToken 
     */
    public filesV1ExportLocationsExportLocationIdGetWithHttpInfo(exportLocationId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ExportLocationSchema>> {
        const result = this.api.filesV1ExportLocationsExportLocationIdGetWithHttpInfo(exportLocationId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_export_locations 
     * Returns a particular export_location by id
     * @param exportLocationId 
     * @param appID 
     * @param authToken 
     */
    public filesV1ExportLocationsExportLocationIdGet(exportLocationId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<ExportLocationSchema> {
        const result = this.api.filesV1ExportLocationsExportLocationIdGet(exportLocationId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_export_locations 
     * Update export_location
     * @param exportLocationId 
     * @param exportLocationSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1ExportLocationsExportLocationIdPatchWithHttpInfo(exportLocationId: string, exportLocationSchema: ExportLocationSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ExportLocationSchema>> {
        const result = this.api.filesV1ExportLocationsExportLocationIdPatchWithHttpInfo(exportLocationId, exportLocationSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_export_locations 
     * Update export_location
     * @param exportLocationId 
     * @param exportLocationSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1ExportLocationsExportLocationIdPatch(exportLocationId: string, exportLocationSchema: ExportLocationSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ExportLocationSchema> {
        const result = this.api.filesV1ExportLocationsExportLocationIdPatch(exportLocationId, exportLocationSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_export_locations 
     * Update export_location
     * @param exportLocationId 
     * @param exportLocationSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1ExportLocationsExportLocationIdPutWithHttpInfo(exportLocationId: string, exportLocationSchema: ExportLocationSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ExportLocationSchema>> {
        const result = this.api.filesV1ExportLocationsExportLocationIdPutWithHttpInfo(exportLocationId, exportLocationSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_export_locations 
     * Update export_location
     * @param exportLocationId 
     * @param exportLocationSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1ExportLocationsExportLocationIdPut(exportLocationId: string, exportLocationSchema: ExportLocationSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ExportLocationSchema> {
        const result = this.api.filesV1ExportLocationsExportLocationIdPut(exportLocationId, exportLocationSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_export_locations 
     * Trigger reindexing of a export location
     * @param exportLocationId 
     * @param appID 
     * @param authToken 
     */
    public filesV1ExportLocationsExportLocationIdReindexPostWithHttpInfo(exportLocationId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1ExportLocationsExportLocationIdReindexPostWithHttpInfo(exportLocationId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_export_locations 
     * Trigger reindexing of a export location
     * @param exportLocationId 
     * @param appID 
     * @param authToken 
     */
    public filesV1ExportLocationsExportLocationIdReindexPost(exportLocationId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1ExportLocationsExportLocationIdReindexPost(exportLocationId, appID, authToken, _options);
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
    public filesV1ExportLocationsGetWithHttpInfo(appID?: string, authToken?: string, query?: string, ids?: string, perPage?: number, lastId?: string, sort?: string, _options?: Configuration): Promise<HttpInfo<ExportLocationsSchema>> {
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
    public filesV1ExportLocationsGet(appID?: string, authToken?: string, query?: string, ids?: string, perPage?: number, lastId?: string, sort?: string, _options?: Configuration): Promise<ExportLocationsSchema> {
        const result = this.api.filesV1ExportLocationsGet(appID, authToken, query, ids, perPage, lastId, sort, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_export_locations 
     * Create a new export_location
     * @param exportLocationSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1ExportLocationsPostWithHttpInfo(exportLocationSchema: ExportLocationSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<ExportLocationSchema>> {
        const result = this.api.filesV1ExportLocationsPostWithHttpInfo(exportLocationSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_export_locations 
     * Create a new export_location
     * @param exportLocationSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1ExportLocationsPost(exportLocationSchema: ExportLocationSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<ExportLocationSchema> {
        const result = this.api.filesV1ExportLocationsPost(exportLocationSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files - can_write_transfers 
     * Queue export job completion between local storages
     * @param fileSetId 
     * @param storageId Destination storage_id
     * @param completeExportToLocalStorageSchema body
     * @param authToken 
     * @param appID 
     */
    public filesV1ExportsTemporaryFileSetsFileSetIdStoragesStorageIdPostWithHttpInfo(fileSetId: string, storageId: string, completeExportToLocalStorageSchema: CompleteExportToLocalStorageSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1ExportsTemporaryFileSetsFileSetIdStoragesStorageIdPostWithHttpInfo(fileSetId, storageId, completeExportToLocalStorageSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files - can_write_transfers 
     * Queue export job completion between local storages
     * @param fileSetId 
     * @param storageId Destination storage_id
     * @param completeExportToLocalStorageSchema body
     * @param authToken 
     * @param appID 
     */
    public filesV1ExportsTemporaryFileSetsFileSetIdStoragesStorageIdPost(fileSetId: string, storageId: string, completeExportToLocalStorageSchema: CompleteExportToLocalStorageSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1ExportsTemporaryFileSetsFileSetIdStoragesStorageIdPost(fileSetId, storageId, completeExportToLocalStorageSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get files from a file set
     * @param fileSetId 
     * @param appID 
     * @param authToken 
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     */
    public filesV1FileSetsFileSetIdFilesGetWithHttpInfo(fileSetId: string, appID?: string, authToken?: string, generateSignedUrl?: boolean, _options?: Configuration): Promise<HttpInfo<FilesSchema>> {
        const result = this.api.filesV1FileSetsFileSetIdFilesGetWithHttpInfo(fileSetId, appID, authToken, generateSignedUrl, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get files from a file set
     * @param fileSetId 
     * @param appID 
     * @param authToken 
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     */
    public filesV1FileSetsFileSetIdFilesGet(fileSetId: string, appID?: string, authToken?: string, generateSignedUrl?: boolean, _options?: Configuration): Promise<FilesSchema> {
        const result = this.api.filesV1FileSetsFileSetIdFilesGet(fileSetId, appID, authToken, generateSignedUrl, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files - can_write_transfers 
     * Queue copying of a file set with files from one storage to another
     * @param fileSetId 
     * @param storageId Destination storage_id
     * @param transferFromStorageSchema body
     * @param authToken 
     * @param appID 
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1FileSetsFileSetIdStoragesStorageIdPostWithHttpInfo(fileSetId: string, storageId: string, transferFromStorageSchema: TransferFromStorageSchema, authToken?: string, appID?: string, allowHostTransfer?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1FileSetsFileSetIdStoragesStorageIdPostWithHttpInfo(fileSetId, storageId, transferFromStorageSchema, authToken, appID, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files - can_write_transfers 
     * Queue copying of a file set with files from one storage to another
     * @param fileSetId 
     * @param storageId Destination storage_id
     * @param transferFromStorageSchema body
     * @param authToken 
     * @param appID 
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1FileSetsFileSetIdStoragesStorageIdPost(fileSetId: string, storageId: string, transferFromStorageSchema: TransferFromStorageSchema, authToken?: string, appID?: string, allowHostTransfer?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1FileSetsFileSetIdStoragesStorageIdPost(fileSetId, storageId, transferFromStorageSchema, authToken, appID, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transfers 
     * Delete file set transfer after handling it
     * @param fileSetId 
     * @param storageId 
     * @param authToken 
     * @param appID 
     * @param failed 
     */
    public filesV1FileSetsFileSetIdTransfersFromStorageIdDeleteWithHttpInfo(fileSetId: string, storageId: string, authToken?: string, appID?: string, failed?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1FileSetsFileSetIdTransfersFromStorageIdDeleteWithHttpInfo(fileSetId, storageId, authToken, appID, failed, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transfers 
     * Delete file set transfer after handling it
     * @param fileSetId 
     * @param storageId 
     * @param authToken 
     * @param appID 
     * @param failed 
     */
    public filesV1FileSetsFileSetIdTransfersFromStorageIdDelete(fileSetId: string, storageId: string, authToken?: string, appID?: string, failed?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1FileSetsFileSetIdTransfersFromStorageIdDelete(fileSetId, storageId, authToken, appID, failed, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transfers 
     * Delete file set transfer after handling it
     * @param fileSetId 
     * @param storageId 
     * @param authToken 
     * @param appID 
     * @param failed 
     */
    public filesV1FileSetsFileSetIdTransfersToStorageIdDeleteWithHttpInfo(fileSetId: string, storageId: string, authToken?: string, appID?: string, failed?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1FileSetsFileSetIdTransfersToStorageIdDeleteWithHttpInfo(fileSetId, storageId, authToken, appID, failed, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transfers 
     * Delete file set transfer after handling it
     * @param fileSetId 
     * @param storageId 
     * @param authToken 
     * @param appID 
     * @param failed 
     */
    public filesV1FileSetsFileSetIdTransfersToStorageIdDelete(fileSetId: string, storageId: string, authToken?: string, appID?: string, failed?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1FileSetsFileSetIdTransfersToStorageIdDelete(fileSetId, storageId, authToken, appID, failed, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get files by checksum
     * @param checksum 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId 
     */
    public filesV1FilesChecksumChecksumGetWithHttpInfo(checksum: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<FilesSchema>> {
        const result = this.api.filesV1FilesChecksumChecksumGetWithHttpInfo(checksum, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Get files by checksum
     * @param checksum 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId 
     */
    public filesV1FilesChecksumChecksumGet(checksum: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<FilesSchema> {
        const result = this.api.filesV1FilesChecksumChecksumGet(checksum, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Delete file deletion job after handling it
     * @param fileId 
     * @param storageId 
     * @param authToken 
     * @param appID 
     */
    public filesV1FilesFileIdDeletionsFromStorageIdDeleteWithHttpInfo(fileId: string, storageId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1FilesFileIdDeletionsFromStorageIdDeleteWithHttpInfo(fileId, storageId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Delete file deletion job after handling it
     * @param fileId 
     * @param storageId 
     * @param authToken 
     * @param appID 
     */
    public filesV1FilesFileIdDeletionsFromStorageIdDelete(fileId: string, storageId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1FilesFileIdDeletionsFromStorageIdDelete(fileId, storageId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete all missing files from storage
     * @param storageId 
     * @param appID 
     * @param authToken 
     * @param removeAssets 
     */
    public filesV1FilesMissingStoragesStorageIdDeleteWithHttpInfo(storageId: string, appID?: string, authToken?: string, removeAssets?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1FilesMissingStoragesStorageIdDeleteWithHttpInfo(storageId, appID, authToken, removeAssets, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_files 
     * Delete all missing files from storage
     * @param storageId 
     * @param appID 
     * @param authToken 
     * @param removeAssets 
     */
    public filesV1FilesMissingStoragesStorageIdDelete(storageId: string, appID?: string, authToken?: string, removeAssets?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1FilesMissingStoragesStorageIdDelete(storageId, appID, authToken, removeAssets, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Check file is on storage
     * @param storageId 
     * @param fileExistenceCheckSchema body
     * @param appID 
     * @param authToken 
     * @param getFileSize 
     */
    public filesV1FilesStoragesStorageIdPostWithHttpInfo(storageId: string, fileExistenceCheckSchema: FileExistenceCheckSchema, appID?: string, authToken?: string, getFileSize?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1FilesStoragesStorageIdPostWithHttpInfo(storageId, fileExistenceCheckSchema, appID, authToken, getFileSize, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files 
     * Check file is on storage
     * @param storageId 
     * @param fileExistenceCheckSchema body
     * @param appID 
     * @param authToken 
     * @param getFileSize 
     */
    public filesV1FilesStoragesStorageIdPost(storageId: string, fileExistenceCheckSchema: FileExistenceCheckSchema, appID?: string, authToken?: string, getFileSize?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1FilesStoragesStorageIdPost(storageId, fileExistenceCheckSchema, appID, authToken, getFileSize, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats - can_write_transfers 
     * Queue copying of a formats file sets with files from one storage to another
     * @param formatId 
     * @param storageId Destination storage_id
     * @param transferFromStorageSchema body
     * @param authToken 
     * @param appID 
     */
    public filesV1FormatsFormatIdStoragesStorageIdPostWithHttpInfo(formatId: string, storageId: string, transferFromStorageSchema: TransferFromStorageSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1FormatsFormatIdStoragesStorageIdPostWithHttpInfo(formatId, storageId, transferFromStorageSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_formats - can_write_transfers 
     * Queue copying of a formats file sets with files from one storage to another
     * @param formatId 
     * @param storageId Destination storage_id
     * @param transferFromStorageSchema body
     * @param authToken 
     * @param appID 
     */
    public filesV1FormatsFormatIdStoragesStorageIdPost(formatId: string, storageId: string, transferFromStorageSchema: TransferFromStorageSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1FormatsFormatIdStoragesStorageIdPost(formatId, storageId, transferFromStorageSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_archive_formats 
     * Queue bulk archiving of assets, collections and saved_searches
     * @param formatName 
     * @param bulkFilesetArchiveSchema body
     * @param authToken 
     * @param appID 
     */
    public filesV1FormatsFormatNameArchiveBulkPostWithHttpInfo(formatName: string, bulkFilesetArchiveSchema: BulkFilesetArchiveSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1FormatsFormatNameArchiveBulkPostWithHttpInfo(formatName, bulkFilesetArchiveSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_archive_formats 
     * Queue bulk archiving of assets, collections and saved_searches
     * @param formatName 
     * @param bulkFilesetArchiveSchema body
     * @param authToken 
     * @param appID 
     */
    public filesV1FormatsFormatNameArchiveBulkPost(formatName: string, bulkFilesetArchiveSchema: BulkFilesetArchiveSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1FormatsFormatNameArchiveBulkPost(formatName, bulkFilesetArchiveSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_restore_archived_formats 
     * Queue bulk restore of previously archived assets, collections or saved_searches
     * @param formatName 
     * @param bulkFilesetRestoreSchema body
     * @param authToken 
     * @param appID 
     */
    public filesV1FormatsFormatNameRestoreBulkPostWithHttpInfo(formatName: string, bulkFilesetRestoreSchema: BulkFilesetRestoreSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1FormatsFormatNameRestoreBulkPostWithHttpInfo(formatName, bulkFilesetRestoreSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_restore_archived_formats 
     * Queue bulk restore of previously archived assets, collections or saved_searches
     * @param formatName 
     * @param bulkFilesetRestoreSchema body
     * @param authToken 
     * @param appID 
     */
    public filesV1FormatsFormatNameRestoreBulkPost(formatName: string, bulkFilesetRestoreSchema: BulkFilesetRestoreSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1FormatsFormatNameRestoreBulkPost(formatName, bulkFilesetRestoreSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Check if a specific file is already on the storage for shares
     * @param storageId 
     * @param directoryPath 
     * @param name Filter by name
     * @param appID 
     * @param authToken 
     */
    public filesV1SharesStoragesStorageIdFilesGetWithHttpInfo(storageId: string, directoryPath: string, name: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1SharesStoragesStorageIdFilesGetWithHttpInfo(storageId, directoryPath, name, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Check if a specific file is already on the storage for shares
     * @param storageId 
     * @param directoryPath 
     * @param name Filter by name
     * @param appID 
     * @param authToken 
     */
    public filesV1SharesStoragesStorageIdFilesGet(storageId: string, directoryPath: string, name: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1SharesStoragesStorageIdFilesGet(storageId, directoryPath, name, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing of all files
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesFilesReindexPostWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesFilesReindexPostWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing of all files
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesFilesReindexPost(appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
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
    public filesV1StoragesGetWithHttpInfo(appID?: string, authToken?: string, page?: number, perPage?: number, sort?: string, id?: string, name?: string, method?: string, status?: string, purpose?: string, lastScanned?: string, scannerStatus?: string, query?: string, ids?: string, _options?: Configuration): Promise<HttpInfo<StoragesReadSchema>> {
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
    public filesV1StoragesGet(appID?: string, authToken?: string, page?: number, perPage?: number, sort?: string, id?: string, name?: string, method?: string, status?: string, purpose?: string, lastScanned?: string, scannerStatus?: string, query?: string, ids?: string, _options?: Configuration): Promise<StoragesReadSchema> {
        const result = this.api.filesV1StoragesGet(appID, authToken, page, perPage, sort, id, name, method, status, purpose, lastScanned, scannerStatus, query, ids, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Get latest ISG version
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesIsgLatestVersionGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FilesV1StoragesIsgLatestVersionGet200Response>> {
        const result = this.api.filesV1StoragesIsgLatestVersionGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Get latest ISG version
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesIsgLatestVersionGet(appID?: string, authToken?: string, _options?: Configuration): Promise<FilesV1StoragesIsgLatestVersionGet200Response> {
        const result = this.api.filesV1StoragesIsgLatestVersionGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Returns a remote storage matching type
     * @param purpose 
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesMatchingPurposeGetWithHttpInfo(purpose: string, appID?: string, authToken?: string, storageId?: string, _options?: Configuration): Promise<HttpInfo<StorageSchema>> {
        const result = this.api.filesV1StoragesMatchingPurposeGetWithHttpInfo(purpose, appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Returns a remote storage matching type
     * @param purpose 
     * @param appID 
     * @param authToken 
     * @param storageId 
     */
    public filesV1StoragesMatchingPurposeGet(purpose: string, appID?: string, authToken?: string, storageId?: string, _options?: Configuration): Promise<StorageSchema> {
        const result = this.api.filesV1StoragesMatchingPurposeGet(purpose, appID, authToken, storageId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Returns a remote storage matching type and method
     * @param purpose 
     * @param method 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesMatchingPurposeMethodMethodGetWithHttpInfo(purpose: string, method: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<StorageSchema>> {
        const result = this.api.filesV1StoragesMatchingPurposeMethodMethodGetWithHttpInfo(purpose, method, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Returns a remote storage matching type and method
     * @param purpose 
     * @param method 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesMatchingPurposeMethodMethodGet(purpose: string, method: string, appID?: string, authToken?: string, _options?: Configuration): Promise<StorageSchema> {
        const result = this.api.filesV1StoragesMatchingPurposeMethodMethodGet(purpose, method, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_storages 
     * Create a new storage
     * @param storageSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesPostWithHttpInfo(storageSchema: StorageSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<StorageSchema>> {
        const result = this.api.filesV1StoragesPostWithHttpInfo(storageSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_storages 
     * Create a new storage
     * @param storageSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesPost(storageSchema: StorageSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<StorageSchema> {
        const result = this.api.filesV1StoragesPost(storageSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Get a purpose default storage
     * @param purpose 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesPurposeDefaultGetWithHttpInfo(purpose: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<StorageSchema>> {
        const result = this.api.filesV1StoragesPurposeDefaultGetWithHttpInfo(purpose, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Get a purpose default storage
     * @param purpose 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesPurposeDefaultGet(purpose: string, appID?: string, authToken?: string, _options?: Configuration): Promise<StorageSchema> {
        const result = this.api.filesV1StoragesPurposeDefaultGet(purpose, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing of all storages
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesReindexPostWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesReindexPostWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing of all storages
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesReindexPost(appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesReindexPost(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_scan_bucket 
     * Disable cloud storage auto scan
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdAutoScanDeleteWithHttpInfo(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdAutoScanDeleteWithHttpInfo(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_scan_bucket 
     * Disable cloud storage auto scan
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdAutoScanDelete(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdAutoScanDelete(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_scan_bucket 
     * Get cloud storage auto scan settings
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdAutoScanGetWithHttpInfo(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<StorageAutoScanSchema>> {
        const result = this.api.filesV1StoragesStorageIdAutoScanGetWithHttpInfo(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_scan_bucket 
     * Get cloud storage auto scan settings
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdAutoScanGet(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<StorageAutoScanSchema> {
        const result = this.api.filesV1StoragesStorageIdAutoScanGet(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_scan_bucket 
     * Enable cloud storage auto scan
     * @param storageId 
     * @param storageAutoScanSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdAutoScanPostWithHttpInfo(storageId: string, storageAutoScanSchema: StorageAutoScanSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<StorageAutoScanSchema>> {
        const result = this.api.filesV1StoragesStorageIdAutoScanPostWithHttpInfo(storageId, storageAutoScanSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_scan_bucket 
     * Enable cloud storage auto scan
     * @param storageId 
     * @param storageAutoScanSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdAutoScanPost(storageId: string, storageAutoScanSchema: StorageAutoScanSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<StorageAutoScanSchema> {
        const result = this.api.filesV1StoragesStorageIdAutoScanPost(storageId, storageAutoScanSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files - can_write_transfers 
     * Queue copying of files from current storage to specified one
     * @param storageId Destination storage_id
     * @param bulkTransferToStorageSchema body
     * @param authToken 
     * @param appID 
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1StoragesStorageIdBulkPostWithHttpInfo(storageId: string, bulkTransferToStorageSchema: BulkTransferToStorageSchema, authToken?: string, appID?: string, allowHostTransfer?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdBulkPostWithHttpInfo(storageId, bulkTransferToStorageSchema, authToken, appID, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_files - can_write_transfers 
     * Queue copying of files from current storage to specified one
     * @param storageId Destination storage_id
     * @param bulkTransferToStorageSchema body
     * @param authToken 
     * @param appID 
     * @param allowHostTransfer Enable transfer through iconik host (creates egress)
     */
    public filesV1StoragesStorageIdBulkPost(storageId: string, bulkTransferToStorageSchema: BulkTransferToStorageSchema, authToken?: string, appID?: string, allowHostTransfer?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdBulkPost(storageId, bulkTransferToStorageSchema, authToken, appID, allowHostTransfer, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_storages 
     * Removes the default flag on a storage
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdDefaultDeleteWithHttpInfo(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdDefaultDeleteWithHttpInfo(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_storages 
     * Removes the default flag on a storage
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdDefaultDelete(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdDefaultDelete(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_storages 
     * Set a storage to the default of its purpose
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdDefaultPostWithHttpInfo(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdDefaultPostWithHttpInfo(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_storages 
     * Set a storage to the default of its purpose
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdDefaultPost(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdDefaultPost(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_storages 
     * Delete a particular storage by id
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdDeleteWithHttpInfo(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdDeleteWithHttpInfo(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_storages 
     * Delete a particular storage by id
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdDelete(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdDelete(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Delete file deletion job after handling it
     * @param storageId 
     * @param deletionId 
     * @param authToken 
     * @param appID 
     */
    public filesV1StoragesStorageIdDeletionsDeletionIdDeleteWithHttpInfo(storageId: string, deletionId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdDeletionsDeletionIdDeleteWithHttpInfo(storageId, deletionId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Delete file deletion job after handling it
     * @param storageId 
     * @param deletionId 
     * @param authToken 
     * @param appID 
     */
    public filesV1StoragesStorageIdDeletionsDeletionIdDelete(storageId: string, deletionId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdDeletionsDeletionIdDelete(storageId, deletionId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Get pending deletions of files from a local storage
     * @param storageId 
     * @param authToken 
     * @param appID 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file deletion entity on previous page
     */
    public filesV1StoragesStorageIdDeletionsFromGetWithHttpInfo(storageId: string, authToken?: string, appID?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<FileDeletionsSchema>> {
        const result = this.api.filesV1StoragesStorageIdDeletionsFromGetWithHttpInfo(storageId, authToken, appID, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Get pending deletions of files from a local storage
     * @param storageId 
     * @param authToken 
     * @param appID 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file deletion entity on previous page
     */
    public filesV1StoragesStorageIdDeletionsFromGet(storageId: string, authToken?: string, appID?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<FileDeletionsSchema> {
        const result = this.api.filesV1StoragesStorageIdDeletionsFromGet(storageId, authToken, appID, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Get pending deletions of files from a local storage
     * @param storageId 
     * @param authToken 
     * @param appID 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file deletion entity on previous page
     */
    public filesV1StoragesStorageIdDeletionsGetWithHttpInfo(storageId: string, authToken?: string, appID?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<FileDeletionsSchema>> {
        const result = this.api.filesV1StoragesStorageIdDeletionsGetWithHttpInfo(storageId, authToken, appID, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Get pending deletions of files from a local storage
     * @param storageId 
     * @param authToken 
     * @param appID 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file deletion entity on previous page
     */
    public filesV1StoragesStorageIdDeletionsGet(storageId: string, authToken?: string, appID?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<FileDeletionsSchema> {
        const result = this.api.filesV1StoragesStorageIdDeletionsGet(storageId, authToken, appID, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages - can_delete_files 
     * DELETE files (with copies in different storages) from a storage folder, or all files on a storage
     * @param storageId 
     * @param appID 
     * @param authToken 
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
    public filesV1StoragesStorageIdFilesDeleteWithHttpInfo(storageId: string, appID?: string, authToken?: string, path?: string, pathSeparator?: string, directoryPath?: string, checksum?: string, id?: string, name?: string, type?: string, status?: string, dateCreated?: string, dateModified?: string, _options?: Configuration): Promise<HttpInfo<FilesElasticSchema>> {
        const result = this.api.filesV1StoragesStorageIdFilesDeleteWithHttpInfo(storageId, appID, authToken, path, pathSeparator, directoryPath, checksum, id, name, type, status, dateCreated, dateModified, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages - can_delete_files 
     * DELETE files (with copies in different storages) from a storage folder, or all files on a storage
     * @param storageId 
     * @param appID 
     * @param authToken 
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
    public filesV1StoragesStorageIdFilesDelete(storageId: string, appID?: string, authToken?: string, path?: string, pathSeparator?: string, directoryPath?: string, checksum?: string, id?: string, name?: string, type?: string, status?: string, dateCreated?: string, dateModified?: string, _options?: Configuration): Promise<FilesElasticSchema> {
        const result = this.api.filesV1StoragesStorageIdFilesDelete(storageId, appID, authToken, path, pathSeparator, directoryPath, checksum, id, name, type, status, dateCreated, dateModified, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing for a file on a storage
     * @param storageId 
     * @param fileId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdFilesFileIdReindexPostWithHttpInfo(storageId: string, fileId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdFilesFileIdReindexPostWithHttpInfo(storageId, fileId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing for a file on a storage
     * @param storageId 
     * @param fileId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdFilesFileIdReindexPost(storageId: string, fileId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdFilesFileIdReindexPost(storageId, fileId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Get files in a storage folder, or all files on a storage
     * @param storageId 
     * @param appID 
     * @param authToken 
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
    public filesV1StoragesStorageIdFilesGetWithHttpInfo(storageId: string, appID?: string, authToken?: string, path?: string, pathSeparator?: string, directoryPath?: string, checksum?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, sort?: string, id?: string, name?: string, type?: string, status?: string, dateCreated?: string, dateModified?: string, _options?: Configuration): Promise<HttpInfo<FilesElasticSchema>> {
        const result = this.api.filesV1StoragesStorageIdFilesGetWithHttpInfo(storageId, appID, authToken, path, pathSeparator, directoryPath, checksum, perPage, page, scroll, scrollId, sort, id, name, type, status, dateCreated, dateModified, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Get files in a storage folder, or all files on a storage
     * @param storageId 
     * @param appID 
     * @param authToken 
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
    public filesV1StoragesStorageIdFilesGet(storageId: string, appID?: string, authToken?: string, path?: string, pathSeparator?: string, directoryPath?: string, checksum?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, sort?: string, id?: string, name?: string, type?: string, status?: string, dateCreated?: string, dateModified?: string, _options?: Configuration): Promise<FilesElasticSchema> {
        const result = this.api.filesV1StoragesStorageIdFilesGet(storageId, appID, authToken, path, pathSeparator, directoryPath, checksum, perPage, page, scroll, scrollId, sort, id, name, type, status, dateCreated, dateModified, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file by storage ID and path
     * @param storageId 
     * @param fileBaseSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdFilesPatchWithHttpInfo(storageId: string, fileBaseSchema: FileBaseSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FileBaseSchema>> {
        const result = this.api.filesV1StoragesStorageIdFilesPatchWithHttpInfo(storageId, fileBaseSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file by storage ID and path
     * @param storageId 
     * @param fileBaseSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdFilesPatch(storageId: string, fileBaseSchema: FileBaseSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<FileBaseSchema> {
        const result = this.api.filesV1StoragesStorageIdFilesPatch(storageId, fileBaseSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create file without associating it to an asset
     * @param storageId 
     * @param fileBaseSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdFilesPostWithHttpInfo(storageId: string, fileBaseSchema: FileBaseSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FileBaseSchema>> {
        const result = this.api.filesV1StoragesStorageIdFilesPostWithHttpInfo(storageId, fileBaseSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create file without associating it to an asset
     * @param storageId 
     * @param fileBaseSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdFilesPost(storageId: string, fileBaseSchema: FileBaseSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<FileBaseSchema> {
        const result = this.api.filesV1StoragesStorageIdFilesPost(storageId, fileBaseSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file by storage ID and path
     * @param storageId 
     * @param fileBaseSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdFilesPutWithHttpInfo(storageId: string, fileBaseSchema: FileBaseSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FileBaseSchema>> {
        const result = this.api.filesV1StoragesStorageIdFilesPutWithHttpInfo(storageId, fileBaseSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_files 
     * Update file by storage ID and path
     * @param storageId 
     * @param fileBaseSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdFilesPut(storageId: string, fileBaseSchema: FileBaseSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<FileBaseSchema> {
        const result = this.api.filesV1StoragesStorageIdFilesPut(storageId, fileBaseSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing of all files
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdFilesReindexPostWithHttpInfo(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdFilesReindexPostWithHttpInfo(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing of all files
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdFilesReindexPost(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdFilesReindexPost(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete storage gateway event
     * @param storageId 
     * @param eventId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdGatewayEventsEventIdDeleteWithHttpInfo(storageId: string, eventId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdGatewayEventsEventIdDeleteWithHttpInfo(storageId, eventId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete storage gateway event
     * @param storageId 
     * @param eventId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdGatewayEventsEventIdDelete(storageId: string, eventId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdGatewayEventsEventIdDelete(storageId, eventId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get pending storage gateway events
     * @param storageId 
     * @param lastId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdGatewayEventsGetWithHttpInfo(storageId: string, lastId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<IconikStorageGatewayEventsSchema>> {
        const result = this.api.filesV1StoragesStorageIdGatewayEventsGetWithHttpInfo(storageId, lastId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get pending storage gateway events
     * @param storageId 
     * @param lastId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdGatewayEventsGet(storageId: string, lastId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<IconikStorageGatewayEventsSchema> {
        const result = this.api.filesV1StoragesStorageIdGatewayEventsGet(storageId, lastId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create new storage gateway event
     * @param storageId 
     * @param iconikStorageGatewayEventSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdGatewayEventsPostWithHttpInfo(storageId: string, iconikStorageGatewayEventSchema: IconikStorageGatewayEventSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<IconikStorageGatewayEventSchema>> {
        const result = this.api.filesV1StoragesStorageIdGatewayEventsPostWithHttpInfo(storageId, iconikStorageGatewayEventSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create new storage gateway event
     * @param storageId 
     * @param iconikStorageGatewayEventSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdGatewayEventsPost(storageId: string, iconikStorageGatewayEventSchema: IconikStorageGatewayEventSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<IconikStorageGatewayEventSchema> {
        const result = this.api.filesV1StoragesStorageIdGatewayEventsPost(storageId, iconikStorageGatewayEventSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete storage gateway events in bulk
     * @param storageId 
     * @param iconikStorageGatewayEventsPurgeSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdGatewayEventsPurgePostWithHttpInfo(storageId: string, iconikStorageGatewayEventsPurgeSchema: IconikStorageGatewayEventsPurgeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdGatewayEventsPurgePostWithHttpInfo(storageId, iconikStorageGatewayEventsPurgeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete storage gateway events in bulk
     * @param storageId 
     * @param iconikStorageGatewayEventsPurgeSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdGatewayEventsPurgePost(storageId: string, iconikStorageGatewayEventsPurgeSchema: IconikStorageGatewayEventsPurgeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdGatewayEventsPurgePost(storageId, iconikStorageGatewayEventsPurgeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get storage gateway report
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdGatewayReportGetWithHttpInfo(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<GatewayReportSchema>> {
        const result = this.api.filesV1StoragesStorageIdGatewayReportGetWithHttpInfo(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get storage gateway report
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdGatewayReportGet(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<GatewayReportSchema> {
        const result = this.api.filesV1StoragesStorageIdGatewayReportGet(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Create storage gateway report
     * @param storageId 
     * @param gatewayReportSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdGatewayReportPutWithHttpInfo(storageId: string, gatewayReportSchema: GatewayReportSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdGatewayReportPutWithHttpInfo(storageId, gatewayReportSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Create storage gateway report
     * @param storageId 
     * @param gatewayReportSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdGatewayReportPut(storageId: string, gatewayReportSchema: GatewayReportSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdGatewayReportPut(storageId, gatewayReportSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Update storage gateway status
     * @param storageId 
     * @param gatewayStatusSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdGatewayStatusPutWithHttpInfo(storageId: string, gatewayStatusSchema: GatewayStatusSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdGatewayStatusPutWithHttpInfo(storageId, gatewayStatusSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Update storage gateway status
     * @param storageId 
     * @param gatewayStatusSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdGatewayStatusPut(storageId: string, gatewayStatusSchema: GatewayStatusSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdGatewayStatusPut(storageId, gatewayStatusSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Returns a particular storage by id
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdGetWithHttpInfo(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<StorageSchema>> {
        const result = this.api.filesV1StoragesStorageIdGetWithHttpInfo(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Returns a particular storage by id
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdGet(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<StorageSchema> {
        const result = this.api.filesV1StoragesStorageIdGet(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Upload storage logs
     * @param storageId 
     * @param filename 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdLogsPostWithHttpInfo(storageId: string, filename: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FilesV1StoragesStorageIdLogsPost200Response>> {
        const result = this.api.filesV1StoragesStorageIdLogsPostWithHttpInfo(storageId, filename, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Upload storage logs
     * @param storageId 
     * @param filename 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdLogsPost(storageId: string, filename: string, appID?: string, authToken?: string, _options?: Configuration): Promise<FilesV1StoragesStorageIdLogsPost200Response> {
        const result = this.api.filesV1StoragesStorageIdLogsPost(storageId, filename, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages - can_delete_files 
     * Delete files from a particular storage from multiple objects
     * @param storageId 
     * @param objectType 
     * @param storageFilesDeleteBulkSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdObjectTypeFilesDeleteWithHttpInfo(storageId: string, objectType: string, storageFilesDeleteBulkSchema: StorageFilesDeleteBulkSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdObjectTypeFilesDeleteWithHttpInfo(storageId, objectType, storageFilesDeleteBulkSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages - can_delete_files 
     * Delete files from a particular storage from multiple objects
     * @param storageId 
     * @param objectType 
     * @param storageFilesDeleteBulkSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdObjectTypeFilesDelete(storageId: string, objectType: string, storageFilesDeleteBulkSchema: StorageFilesDeleteBulkSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdObjectTypeFilesDelete(storageId, objectType, storageFilesDeleteBulkSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_storages 
     * Update storage
     * @param storageId 
     * @param storageSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdPatchWithHttpInfo(storageId: string, storageSchema: StorageSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<StorageSchema>> {
        const result = this.api.filesV1StoragesStorageIdPatchWithHttpInfo(storageId, storageSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_storages 
     * Update storage
     * @param storageId 
     * @param storageSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdPatch(storageId: string, storageSchema: StorageSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<StorageSchema> {
        const result = this.api.filesV1StoragesStorageIdPatch(storageId, storageSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_storages 
     * Update storage
     * @param storageId 
     * @param storageSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdPutWithHttpInfo(storageId: string, storageSchema: StorageSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<StorageSchema>> {
        const result = this.api.filesV1StoragesStorageIdPutWithHttpInfo(storageId, storageSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_storages 
     * Update storage
     * @param storageId 
     * @param storageSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdPut(storageId: string, storageSchema: StorageSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<StorageSchema> {
        const result = this.api.filesV1StoragesStorageIdPut(storageId, storageSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing of a storage
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdReindexPostWithHttpInfo(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdReindexPostWithHttpInfo(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Trigger reindexing of a storage
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdReindexPost(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdReindexPost(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_scan_bucket 
     * Requests to scan a storage
     * @param storageId 
     * @param storageScanSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdScanPostWithHttpInfo(storageId: string, storageScanSchema: StorageScanSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdScanPostWithHttpInfo(storageId, storageScanSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_scan_bucket 
     * Requests to scan a storage
     * @param storageId 
     * @param storageScanSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdScanPost(storageId: string, storageScanSchema: StorageScanSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdScanPost(storageId, storageScanSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Update search document for storage
     * @param storageId 
     * @param storageSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdSearchDocumentPutWithHttpInfo(storageId: string, storageSchema: StorageSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdSearchDocumentPutWithHttpInfo(storageId, storageSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_storages 
     * Update search document for storage
     * @param storageId 
     * @param storageSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdSearchDocumentPut(storageId: string, storageSchema: StorageSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdSearchDocumentPut(storageId, storageSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Get storage\'s exported files
     * @param storageId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file on previous page
     */
    public filesV1StoragesStorageIdTemporaryFilesGetWithHttpInfo(storageId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<FilesSchema>> {
        const result = this.api.filesV1StoragesStorageIdTemporaryFilesGetWithHttpInfo(storageId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Get storage\'s exported files
     * @param storageId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last file on previous page
     */
    public filesV1StoragesStorageIdTemporaryFilesGet(storageId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<FilesSchema> {
        const result = this.api.filesV1StoragesStorageIdTemporaryFilesGet(storageId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages - can_read_transcoders 
     * Get all transcoders for a particular storage
     * @param storageId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last transcoder on previous page
     */
    public filesV1StoragesStorageIdTranscodersGetWithHttpInfo(storageId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<TranscodersByStorageSchema>> {
        const result = this.api.filesV1StoragesStorageIdTranscodersGetWithHttpInfo(storageId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages - can_read_transcoders 
     * Get all transcoders for a particular storage
     * @param storageId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last transcoder on previous page
     */
    public filesV1StoragesStorageIdTranscodersGet(storageId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<TranscodersByStorageSchema> {
        const result = this.api.filesV1StoragesStorageIdTranscodersGet(storageId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcoders 
     * Delete a transcoder from storage
     * @param storageId 
     * @param transcoderId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdTranscodersTranscoderIdDeleteWithHttpInfo(storageId: string, transcoderId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdTranscodersTranscoderIdDeleteWithHttpInfo(storageId, transcoderId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcoders 
     * Delete a transcoder from storage
     * @param storageId 
     * @param transcoderId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdTranscodersTranscoderIdDelete(storageId: string, transcoderId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdTranscodersTranscoderIdDelete(storageId, transcoderId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcoders 
     * Create a new transcoder for storage
     * @param storageId 
     * @param transcoderId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdTranscodersTranscoderIdPutWithHttpInfo(storageId: string, transcoderId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<TranscoderByStorageReadSchema>> {
        const result = this.api.filesV1StoragesStorageIdTranscodersTranscoderIdPutWithHttpInfo(storageId, transcoderId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcoders 
     * Create a new transcoder for storage
     * @param storageId 
     * @param transcoderId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdTranscodersTranscoderIdPut(storageId: string, transcoderId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<TranscoderByStorageReadSchema> {
        const result = this.api.filesV1StoragesStorageIdTranscodersTranscoderIdPut(storageId, transcoderId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transfers 
     * Get pending transfers of file sets from a local storage
     * @param storageId 
     * @param authToken 
     * @param appID 
     * @param perPage The number of items for each page
     * @param lastId ID of a last transfer on previous page
     */
    public filesV1StoragesStorageIdTransfersFromGetWithHttpInfo(storageId: string, authToken?: string, appID?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<TransfersFromStorageSchema>> {
        const result = this.api.filesV1StoragesStorageIdTransfersFromGetWithHttpInfo(storageId, authToken, appID, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transfers 
     * Get pending transfers of file sets from a local storage
     * @param storageId 
     * @param authToken 
     * @param appID 
     * @param perPage The number of items for each page
     * @param lastId ID of a last transfer on previous page
     */
    public filesV1StoragesStorageIdTransfersFromGet(storageId: string, authToken?: string, appID?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<TransfersFromStorageSchema> {
        const result = this.api.filesV1StoragesStorageIdTransfersFromGet(storageId, authToken, appID, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transfers 
     * Delete file set transfer after handling it
     * @param storageId 
     * @param transferId 
     * @param authToken 
     * @param appID 
     * @param failed 
     * @param completed 
     */
    public filesV1StoragesStorageIdTransfersFromTransferIdDeleteWithHttpInfo(storageId: string, transferId: string, authToken?: string, appID?: string, failed?: boolean, completed?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdTransfersFromTransferIdDeleteWithHttpInfo(storageId, transferId, authToken, appID, failed, completed, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transfers 
     * Delete file set transfer after handling it
     * @param storageId 
     * @param transferId 
     * @param authToken 
     * @param appID 
     * @param failed 
     * @param completed 
     */
    public filesV1StoragesStorageIdTransfersFromTransferIdDelete(storageId: string, transferId: string, authToken?: string, appID?: string, failed?: boolean, completed?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdTransfersFromTransferIdDelete(storageId, transferId, authToken, appID, failed, completed, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transfers 
     * Get file set transfer record
     * @param storageId 
     * @param transferId 
     * @param authToken 
     * @param appID 
     */
    public filesV1StoragesStorageIdTransfersFromTransferIdGetWithHttpInfo(storageId: string, transferId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<TransferFromStorageReadSchema>> {
        const result = this.api.filesV1StoragesStorageIdTransfersFromTransferIdGetWithHttpInfo(storageId, transferId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transfers 
     * Get file set transfer record
     * @param storageId 
     * @param transferId 
     * @param authToken 
     * @param appID 
     */
    public filesV1StoragesStorageIdTransfersFromTransferIdGet(storageId: string, transferId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<TransferFromStorageReadSchema> {
        const result = this.api.filesV1StoragesStorageIdTransfersFromTransferIdGet(storageId, transferId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transfers 
     * Get pending transfers of file sets to a local storage
     * @param storageId 
     * @param authToken 
     * @param appID 
     * @param perPage The number of items for each page
     * @param lastId ID of a last transfer on previous page
     */
    public filesV1StoragesStorageIdTransfersToGetWithHttpInfo(storageId: string, authToken?: string, appID?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<TransfersToStorageSchema>> {
        const result = this.api.filesV1StoragesStorageIdTransfersToGetWithHttpInfo(storageId, authToken, appID, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transfers 
     * Get pending transfers of file sets to a local storage
     * @param storageId 
     * @param authToken 
     * @param appID 
     * @param perPage The number of items for each page
     * @param lastId ID of a last transfer on previous page
     */
    public filesV1StoragesStorageIdTransfersToGet(storageId: string, authToken?: string, appID?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<TransfersToStorageSchema> {
        const result = this.api.filesV1StoragesStorageIdTransfersToGet(storageId, authToken, appID, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transfers 
     * Delete file set transfer after handling it
     * @param storageId 
     * @param transferId 
     * @param authToken 
     * @param appID 
     * @param failed 
     * @param completed 
     */
    public filesV1StoragesStorageIdTransfersToTransferIdDeleteWithHttpInfo(storageId: string, transferId: string, authToken?: string, appID?: string, failed?: boolean, completed?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1StoragesStorageIdTransfersToTransferIdDeleteWithHttpInfo(storageId, transferId, authToken, appID, failed, completed, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transfers 
     * Delete file set transfer after handling it
     * @param storageId 
     * @param transferId 
     * @param authToken 
     * @param appID 
     * @param failed 
     * @param completed 
     */
    public filesV1StoragesStorageIdTransfersToTransferIdDelete(storageId: string, transferId: string, authToken?: string, appID?: string, failed?: boolean, completed?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1StoragesStorageIdTransfersToTransferIdDelete(storageId, transferId, authToken, appID, failed, completed, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transfers 
     * Get file set transfer record
     * @param storageId 
     * @param transferId 
     * @param authToken 
     * @param appID 
     */
    public filesV1StoragesStorageIdTransfersToTransferIdGetWithHttpInfo(storageId: string, transferId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<TransferToStorageReadSchema>> {
        const result = this.api.filesV1StoragesStorageIdTransfersToTransferIdGetWithHttpInfo(storageId, transferId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transfers 
     * Get file set transfer record
     * @param storageId 
     * @param transferId 
     * @param authToken 
     * @param appID 
     */
    public filesV1StoragesStorageIdTransfersToTransferIdGet(storageId: string, transferId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<TransferToStorageReadSchema> {
        const result = this.api.filesV1StoragesStorageIdTransfersToTransferIdGet(storageId, transferId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Verify storage access
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdVerificationsAccessGetWithHttpInfo(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FilesV1StoragesStorageIdVerificationsAccessGet200Response>> {
        const result = this.api.filesV1StoragesStorageIdVerificationsAccessGetWithHttpInfo(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Verify storage access
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdVerificationsAccessGet(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<FilesV1StoragesStorageIdVerificationsAccessGet200Response> {
        const result = this.api.filesV1StoragesStorageIdVerificationsAccessGet(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Verify storage permissions
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdVerificationsPermissionsGetWithHttpInfo(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FilesV1StoragesStorageIdVerificationsPermissionsGet200Response>> {
        const result = this.api.filesV1StoragesStorageIdVerificationsPermissionsGetWithHttpInfo(storageId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_storages 
     * Verify storage permissions
     * @param storageId 
     * @param appID 
     * @param authToken 
     */
    public filesV1StoragesStorageIdVerificationsPermissionsGet(storageId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<FilesV1StoragesStorageIdVerificationsPermissionsGet200Response> {
        const result = this.api.filesV1StoragesStorageIdVerificationsPermissionsGet(storageId, appID, authToken, _options);
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
    public filesV1TranscodersGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, page?: number, query?: string, ids?: string, sort?: string, _options?: Configuration): Promise<HttpInfo<TranscodersSchema>> {
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
    public filesV1TranscodersGet(appID?: string, authToken?: string, perPage?: number, page?: number, query?: string, ids?: string, sort?: string, _options?: Configuration): Promise<TranscodersSchema> {
        const result = this.api.filesV1TranscodersGet(appID, authToken, perPage, page, query, ids, sort, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcoders 
     * Create a new transcoder
     * @param transcoderSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1TranscodersPostWithHttpInfo(transcoderSchema: TranscoderSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<TranscoderSchema>> {
        const result = this.api.filesV1TranscodersPostWithHttpInfo(transcoderSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcoders 
     * Create a new transcoder
     * @param transcoderSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1TranscodersPost(transcoderSchema: TranscoderSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<TranscoderSchema> {
        const result = this.api.filesV1TranscodersPost(transcoderSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_transcoders 
     * Delete a particular transcoder by id
     * @param transcoderId 
     * @param appID 
     * @param authToken 
     */
    public filesV1TranscodersTranscoderIdDeleteWithHttpInfo(transcoderId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1TranscodersTranscoderIdDeleteWithHttpInfo(transcoderId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_transcoders 
     * Delete a particular transcoder by id
     * @param transcoderId 
     * @param appID 
     * @param authToken 
     */
    public filesV1TranscodersTranscoderIdDelete(transcoderId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1TranscodersTranscoderIdDelete(transcoderId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcoders 
     * Returns a particular transcoder by id
     * @param transcoderId 
     * @param appID 
     * @param authToken 
     */
    public filesV1TranscodersTranscoderIdGetWithHttpInfo(transcoderId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<TranscoderSchema>> {
        const result = this.api.filesV1TranscodersTranscoderIdGetWithHttpInfo(transcoderId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcoders 
     * Returns a particular transcoder by id
     * @param transcoderId 
     * @param appID 
     * @param authToken 
     */
    public filesV1TranscodersTranscoderIdGet(transcoderId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<TranscoderSchema> {
        const result = this.api.filesV1TranscodersTranscoderIdGet(transcoderId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Upload transcoder logs
     * @param transcoderId 
     * @param filename 
     * @param appID 
     * @param authToken 
     */
    public filesV1TranscodersTranscoderIdLogsPostWithHttpInfo(transcoderId: string, filename: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<FilesV1StoragesStorageIdLogsPost200Response>> {
        const result = this.api.filesV1TranscodersTranscoderIdLogsPostWithHttpInfo(transcoderId, filename, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker 
     * Upload transcoder logs
     * @param transcoderId 
     * @param filename 
     * @param appID 
     * @param authToken 
     */
    public filesV1TranscodersTranscoderIdLogsPost(transcoderId: string, filename: string, appID?: string, authToken?: string, _options?: Configuration): Promise<FilesV1StoragesStorageIdLogsPost200Response> {
        const result = this.api.filesV1TranscodersTranscoderIdLogsPost(transcoderId, filename, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcoders 
     * Update transcoder
     * @param transcoderId 
     * @param transcoderSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1TranscodersTranscoderIdPatchWithHttpInfo(transcoderId: string, transcoderSchema: TranscoderSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<TranscoderSchema>> {
        const result = this.api.filesV1TranscodersTranscoderIdPatchWithHttpInfo(transcoderId, transcoderSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcoders 
     * Update transcoder
     * @param transcoderId 
     * @param transcoderSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1TranscodersTranscoderIdPatch(transcoderId: string, transcoderSchema: TranscoderSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<TranscoderSchema> {
        const result = this.api.filesV1TranscodersTranscoderIdPatch(transcoderId, transcoderSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcoders 
     * Update transcoder
     * @param transcoderId 
     * @param transcoderSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1TranscodersTranscoderIdPutWithHttpInfo(transcoderId: string, transcoderSchema: TranscoderSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<TranscoderSchema>> {
        const result = this.api.filesV1TranscodersTranscoderIdPutWithHttpInfo(transcoderId, transcoderSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcoders 
     * Update transcoder
     * @param transcoderId 
     * @param transcoderSchema body
     * @param appID 
     * @param authToken 
     */
    public filesV1TranscodersTranscoderIdPut(transcoderId: string, transcoderSchema: TranscoderSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<TranscoderSchema> {
        const result = this.api.filesV1TranscodersTranscoderIdPut(transcoderId, transcoderSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_transcoders 
     * Trigger reindexing of a transcoder
     * @param transcoderId 
     * @param appID 
     * @param authToken 
     */
    public filesV1TranscodersTranscoderIdReindexPostWithHttpInfo(transcoderId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1TranscodersTranscoderIdReindexPostWithHttpInfo(transcoderId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_transcoders 
     * Trigger reindexing of a transcoder
     * @param transcoderId 
     * @param appID 
     * @param authToken 
     */
    public filesV1TranscodersTranscoderIdReindexPost(transcoderId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1TranscodersTranscoderIdReindexPost(transcoderId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcoders 
     * Get storages linked to a transcoder
     * @param transcoderId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last storage on previous page
     */
    public filesV1TranscodersTranscoderIdStoragesGetWithHttpInfo(transcoderId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<StoragesReadSchema>> {
        const result = this.api.filesV1TranscodersTranscoderIdStoragesGetWithHttpInfo(transcoderId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcoders 
     * Get storages linked to a transcoder
     * @param transcoderId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last storage on previous page
     */
    public filesV1TranscodersTranscoderIdStoragesGet(transcoderId: string, appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<StoragesReadSchema> {
        const result = this.api.filesV1TranscodersTranscoderIdStoragesGet(transcoderId, appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     * 
     * Generates a url for direct file downloads (for IGSs)
     * @param transferId 
     * @param authToken 
     * @param appID 
     */
    public filesV1TransfersTransferIdUrlsPostWithHttpInfo(transferId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<TransferSignedURLSchema>> {
        const result = this.api.filesV1TransfersTransferIdUrlsPostWithHttpInfo(transferId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     * 
     * Generates a url for direct file downloads (for IGSs)
     * @param transferId 
     * @param authToken 
     * @param appID 
     */
    public filesV1TransfersTransferIdUrlsPost(transferId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<TransferSignedURLSchema> {
        const result = this.api.filesV1TransfersTransferIdUrlsPost(transferId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     * 
     * Verifies the signature of a url
     * @param transferId 
     * @param userId 
     * @param signature 
     * @param authToken 
     * @param appID 
     */
    public filesV1TransfersTransferIdUrlsVerifyGetWithHttpInfo(transferId: string, userId: string, signature: string, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filesV1TransfersTransferIdUrlsVerifyGetWithHttpInfo(transferId, userId, signature, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     * 
     * Verifies the signature of a url
     * @param transferId 
     * @param userId 
     * @param signature 
     * @param authToken 
     * @param appID 
     */
    public filesV1TransfersTransferIdUrlsVerifyGet(transferId: string, userId: string, signature: string, authToken?: string, appID?: string, _options?: Configuration): Promise<void> {
        const result = this.api.filesV1TransfersTransferIdUrlsVerifyGet(transferId, userId, signature, authToken, appID, _options);
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
     * @param jobsBulkDeleteSchema body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsDeleteWithHttpInfo(jobsBulkDeleteSchema: JobsBulkDeleteSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.jobsV1JobsDeleteWithHttpInfo(jobsBulkDeleteSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_jobs 
     * Delete multiple jobs by ids list
     * @param jobsBulkDeleteSchema body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsDelete(jobsBulkDeleteSchema: JobsBulkDeleteSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.jobsV1JobsDelete(jobsBulkDeleteSchema, appID, authToken, _options);
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
    public jobsV1JobsGetWithHttpInfo(appID?: string, authToken?: string, facets?: boolean, aggregations?: string, page?: number, perPage?: number, scroll?: boolean, scrollId?: string, sort?: string, type?: string, objectType?: string, parentId?: string, objectId?: string, status?: string, createdBy?: string, dateCreated?: string, dateModified?: string, query?: string, ids?: string, _options?: Configuration): Promise<HttpInfo<JobsSchema>> {
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
    public jobsV1JobsGet(appID?: string, authToken?: string, facets?: boolean, aggregations?: string, page?: number, perPage?: number, scroll?: boolean, scrollId?: string, sort?: string, type?: string, objectType?: string, parentId?: string, objectId?: string, status?: string, createdBy?: string, dateCreated?: string, dateModified?: string, query?: string, ids?: string, _options?: Configuration): Promise<JobsSchema> {
        const result = this.api.jobsV1JobsGet(appID, authToken, facets, aggregations, page, perPage, scroll, scrollId, sort, type, objectType, parentId, objectId, status, createdBy, dateCreated, dateModified, query, ids, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_jobs 
     * Delete a particular job by id
     * @param jobId 
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsJobIdDeleteWithHttpInfo(jobId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.jobsV1JobsJobIdDeleteWithHttpInfo(jobId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_jobs 
     * Delete a particular job by id
     * @param jobId 
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsJobIdDelete(jobId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.jobsV1JobsJobIdDelete(jobId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_jobs 
     * Returns a particular job by id
     * @param jobId 
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsJobIdGetWithHttpInfo(jobId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<JobSchema>> {
        const result = this.api.jobsV1JobsJobIdGetWithHttpInfo(jobId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_jobs 
     * Returns a particular job by id
     * @param jobId 
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsJobIdGet(jobId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<JobSchema> {
        const result = this.api.jobsV1JobsJobIdGet(jobId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update job
     * @param jobId 
     * @param jobSchema body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsJobIdPatchWithHttpInfo(jobId: string, jobSchema: JobSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<JobSchema>> {
        const result = this.api.jobsV1JobsJobIdPatchWithHttpInfo(jobId, jobSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update job
     * @param jobId 
     * @param jobSchema body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsJobIdPatch(jobId: string, jobSchema: JobSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<JobSchema> {
        const result = this.api.jobsV1JobsJobIdPatch(jobId, jobSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update job
     * @param jobId 
     * @param jobSchema body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsJobIdPutWithHttpInfo(jobId: string, jobSchema: JobSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<JobSchema>> {
        const result = this.api.jobsV1JobsJobIdPutWithHttpInfo(jobId, jobSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update job
     * @param jobId 
     * @param jobSchema body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsJobIdPut(jobId: string, jobSchema: JobSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<JobSchema> {
        const result = this.api.jobsV1JobsJobIdPut(jobId, jobSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Reindex job
     * @param jobId 
     * @param reindexJobSchema body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsJobIdReindexPostWithHttpInfo(jobId: string, reindexJobSchema: ReindexJobSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.jobsV1JobsJobIdReindexPostWithHttpInfo(jobId, reindexJobSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Reindex job
     * @param jobId 
     * @param reindexJobSchema body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsJobIdReindexPost(jobId: string, reindexJobSchema: ReindexJobSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.jobsV1JobsJobIdReindexPost(jobId, reindexJobSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update job step
     * @param jobId 
     * @param jobStepId 
     * @param jobStepSchema body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsJobIdStepsJobStepIdPatchWithHttpInfo(jobId: string, jobStepId: string, jobStepSchema: JobStepSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<JobSchema>> {
        const result = this.api.jobsV1JobsJobIdStepsJobStepIdPatchWithHttpInfo(jobId, jobStepId, jobStepSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update job step
     * @param jobId 
     * @param jobStepId 
     * @param jobStepSchema body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsJobIdStepsJobStepIdPatch(jobId: string, jobStepId: string, jobStepSchema: JobStepSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<JobSchema> {
        const result = this.api.jobsV1JobsJobIdStepsJobStepIdPatch(jobId, jobStepId, jobStepSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update job step
     * @param jobId 
     * @param jobStepId 
     * @param jobStepSchema body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsJobIdStepsJobStepIdPutWithHttpInfo(jobId: string, jobStepId: string, jobStepSchema: JobStepSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<JobSchema>> {
        const result = this.api.jobsV1JobsJobIdStepsJobStepIdPutWithHttpInfo(jobId, jobStepId, jobStepSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update job step
     * @param jobId 
     * @param jobStepId 
     * @param jobStepSchema body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsJobIdStepsJobStepIdPut(jobId: string, jobStepId: string, jobStepSchema: JobStepSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<JobSchema> {
        const result = this.api.jobsV1JobsJobIdStepsJobStepIdPut(jobId, jobStepId, jobStepSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update multiple job steps
     * @param jobId 
     * @param jobStepsUpdateSchema body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsJobIdStepsPatchWithHttpInfo(jobId: string, jobStepsUpdateSchema: JobStepsUpdateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<JobSchema>> {
        const result = this.api.jobsV1JobsJobIdStepsPatchWithHttpInfo(jobId, jobStepsUpdateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update multiple job steps
     * @param jobId 
     * @param jobStepsUpdateSchema body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsJobIdStepsPatch(jobId: string, jobStepsUpdateSchema: JobStepsUpdateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<JobSchema> {
        const result = this.api.jobsV1JobsJobIdStepsPatch(jobId, jobStepsUpdateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update multiple job steps
     * @param jobId 
     * @param jobStepsUpdateSchema body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsJobIdStepsPutWithHttpInfo(jobId: string, jobStepsUpdateSchema: JobStepsUpdateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<JobSchema>> {
        const result = this.api.jobsV1JobsJobIdStepsPutWithHttpInfo(jobId, jobStepsUpdateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update multiple job steps
     * @param jobId 
     * @param jobStepsUpdateSchema body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsJobIdStepsPut(jobId: string, jobStepsUpdateSchema: JobStepsUpdateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<JobSchema> {
        const result = this.api.jobsV1JobsJobIdStepsPut(jobId, jobStepsUpdateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Create a new job
     * @param jobSchema body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsPostWithHttpInfo(jobSchema: JobSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<JobSchema>> {
        const result = this.api.jobsV1JobsPostWithHttpInfo(jobSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Create a new job
     * @param jobSchema body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsPost(jobSchema: JobSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<JobSchema> {
        const result = this.api.jobsV1JobsPost(jobSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Change jobs priority
     * @param jobsPrioritySchema body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsPriorityPutWithHttpInfo(jobsPrioritySchema: JobsPrioritySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.jobsV1JobsPriorityPutWithHttpInfo(jobsPrioritySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Change jobs priority
     * @param jobsPrioritySchema body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsPriorityPut(jobsPrioritySchema: JobsPrioritySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.jobsV1JobsPriorityPut(jobsPrioritySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Change jobs state
     * @param jobsStateSchema1 body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsStatePutWithHttpInfo(jobsStateSchema1: JobsStateSchema1, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.jobsV1JobsStatePutWithHttpInfo(jobsStateSchema1, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Change jobs state
     * @param jobsStateSchema1 body
     * @param appID 
     * @param authToken 
     */
    public jobsV1JobsStatePut(jobsStateSchema1: JobsStateSchema1, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.jobsV1JobsStatePut(jobsStateSchema1, appID, authToken, _options);
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
     * @param objectType 
     * @param assetId 
     * @param objectId 
     * @param viewId 
     * @param appID 
     * @param authToken 
     */
    public metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGetWithHttpInfo(objectType: string, assetId: string, objectId: string, viewId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataValuesSchema>> {
        const result = this.api.metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGetWithHttpInfo(objectType, assetId, objectId, viewId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_values 
     * Get asset metadata by object type, object ID and view ID
     * @param objectType 
     * @param assetId 
     * @param objectId 
     * @param viewId 
     * @param appID 
     * @param authToken 
     */
    public metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGet(objectType: string, assetId: string, objectId: string, viewId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataValuesSchema> {
        const result = this.api.metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGet(objectType, assetId, objectId, viewId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_values 
     * Edit view metadata values for sub-objects of an asset (Such as segments)
     * @param assetId 
     * @param objectType 
     * @param objectId 
     * @param viewId 
     * @param metadataValuesSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPutWithHttpInfo(assetId: string, objectType: string, objectId: string, viewId: string, metadataValuesSchema: MetadataValuesSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataValuesSchema>> {
        const result = this.api.metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPutWithHttpInfo(assetId, objectType, objectId, viewId, metadataValuesSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_values 
     * Edit view metadata values for sub-objects of an asset (Such as segments)
     * @param assetId 
     * @param objectType 
     * @param objectId 
     * @param viewId 
     * @param metadataValuesSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPut(assetId: string, objectType: string, objectId: string, viewId: string, metadataValuesSchema: MetadataValuesSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataValuesSchema> {
        const result = this.api.metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPut(assetId, objectType, objectId, viewId, metadataValuesSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_values 
     * Get object metadata by object type, object ID, version ID and view ID
     * @param assetId 
     * @param versionId 
     * @param viewId 
     * @param appID 
     * @param authToken 
     */
    public metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGetWithHttpInfo(assetId: string, versionId: string, viewId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataValuesSchema>> {
        const result = this.api.metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGetWithHttpInfo(assetId, versionId, viewId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_values 
     * Get object metadata by object type, object ID, version ID and view ID
     * @param assetId 
     * @param versionId 
     * @param viewId 
     * @param appID 
     * @param authToken 
     */
    public metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGet(assetId: string, versionId: string, viewId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataValuesSchema> {
        const result = this.api.metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGet(assetId, versionId, viewId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_values 
     * Get asset metadata by object type, object ID, version ID and view ID
     * @param objectType 
     * @param objectId 
     * @param versionId 
     * @param viewId 
     * @param appID 
     * @param authToken 
     */
    public metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGetWithHttpInfo(objectType: string, objectId: string, versionId: string, viewId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataValuesSchema>> {
        const result = this.api.metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGetWithHttpInfo(objectType, objectId, versionId, viewId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_values 
     * Get asset metadata by object type, object ID, version ID and view ID
     * @param objectType 
     * @param objectId 
     * @param versionId 
     * @param viewId 
     * @param appID 
     * @param authToken 
     */
    public metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGet(objectType: string, objectId: string, versionId: string, viewId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataValuesSchema> {
        const result = this.api.metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGet(objectType, objectId, versionId, viewId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_metadata_fields 
     * Delete a particular field by name
     * @param fieldName 
     * @param appID 
     * @param authToken 
     */
    public metadataV1FieldsFieldNameDeleteWithHttpInfo(fieldName: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.metadataV1FieldsFieldNameDeleteWithHttpInfo(fieldName, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_metadata_fields 
     * Delete a particular field by name
     * @param fieldName 
     * @param appID 
     * @param authToken 
     */
    public metadataV1FieldsFieldNameDelete(fieldName: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.metadataV1FieldsFieldNameDelete(fieldName, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_fields 
     * Returns a particular field by name
     * @param fieldName 
     * @param appID 
     * @param authToken 
     */
    public metadataV1FieldsFieldNameGetWithHttpInfo(fieldName: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataFieldSchema>> {
        const result = this.api.metadataV1FieldsFieldNameGetWithHttpInfo(fieldName, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_fields 
     * Returns a particular field by name
     * @param fieldName 
     * @param appID 
     * @param authToken 
     */
    public metadataV1FieldsFieldNameGet(fieldName: string, appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataFieldSchema> {
        const result = this.api.metadataV1FieldsFieldNameGet(fieldName, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_fields 
     * Update field by name
     * @param fieldName 
     * @param metadataFieldSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1FieldsFieldNamePatchWithHttpInfo(fieldName: string, metadataFieldSchema: MetadataFieldSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataFieldSchema>> {
        const result = this.api.metadataV1FieldsFieldNamePatchWithHttpInfo(fieldName, metadataFieldSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_fields 
     * Update field by name
     * @param fieldName 
     * @param metadataFieldSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1FieldsFieldNamePatch(fieldName: string, metadataFieldSchema: MetadataFieldSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataFieldSchema> {
        const result = this.api.metadataV1FieldsFieldNamePatch(fieldName, metadataFieldSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_fields 
     * Update field by name
     * @param fieldName 
     * @param metadataFieldSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1FieldsFieldNamePutWithHttpInfo(fieldName: string, metadataFieldSchema: MetadataFieldSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataFieldSchema>> {
        const result = this.api.metadataV1FieldsFieldNamePutWithHttpInfo(fieldName, metadataFieldSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_fields 
     * Update field by name
     * @param fieldName 
     * @param metadataFieldSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1FieldsFieldNamePut(fieldName: string, metadataFieldSchema: MetadataFieldSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataFieldSchema> {
        const result = this.api.metadataV1FieldsFieldNamePut(fieldName, metadataFieldSchema, appID, authToken, _options);
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
    public metadataV1FieldsGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, lastFieldName?: string, filter?: string, _options?: Configuration): Promise<HttpInfo<MetadataFieldsSchema>> {
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
    public metadataV1FieldsGet(appID?: string, authToken?: string, perPage?: number, lastFieldName?: string, filter?: string, _options?: Configuration): Promise<MetadataFieldsSchema> {
        const result = this.api.metadataV1FieldsGet(appID, authToken, perPage, lastFieldName, filter, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_fields 
     * Create a new field
     * @param metadataFieldCreateSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1FieldsPostWithHttpInfo(metadataFieldCreateSchema: MetadataFieldCreateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataFieldSchema>> {
        const result = this.api.metadataV1FieldsPostWithHttpInfo(metadataFieldCreateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_fields 
     * Create a new field
     * @param metadataFieldCreateSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1FieldsPost(metadataFieldCreateSchema: MetadataFieldCreateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataFieldSchema> {
        const result = this.api.metadataV1FieldsPost(metadataFieldCreateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_fields 
     * Get the metadata field mapping
     * @param fieldName 
     * @param appID 
     * @param authToken 
     */
    public metadataV1MappingFieldsFieldNameGetWithHttpInfo(fieldName: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataFieldMappingSchema>> {
        const result = this.api.metadataV1MappingFieldsFieldNameGetWithHttpInfo(fieldName, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_fields 
     * Get the metadata field mapping
     * @param fieldName 
     * @param appID 
     * @param authToken 
     */
    public metadataV1MappingFieldsFieldNameGet(fieldName: string, appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataFieldMappingSchema> {
        const result = this.api.metadataV1MappingFieldsFieldNameGet(fieldName, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_fields 
     * Create a new metadata field mapping
     * @param metadataFieldMappingSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1MappingFieldsPostWithHttpInfo(metadataFieldMappingSchema: MetadataFieldMappingSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataFieldMappingSchema>> {
        const result = this.api.metadataV1MappingFieldsPostWithHttpInfo(metadataFieldMappingSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_fields 
     * Create a new metadata field mapping
     * @param metadataFieldMappingSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1MappingFieldsPost(metadataFieldMappingSchema: MetadataFieldMappingSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataFieldMappingSchema> {
        const result = this.api.metadataV1MappingFieldsPost(metadataFieldMappingSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_fields 
     * List the metadata field mapping options
     * @param appID 
     * @param authToken 
     */
    public metadataV1MappingOptionsGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataFieldMappingOptionsSchema>> {
        const result = this.api.metadataV1MappingOptionsGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_fields 
     * List the metadata field mapping options
     * @param appID 
     * @param authToken 
     */
    public metadataV1MappingOptionsGet(appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataFieldMappingOptionsSchema> {
        const result = this.api.metadataV1MappingOptionsGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_categories 
     * Get metadata categories
     * @param objectType 
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeCategoriesGetWithHttpInfo(objectType: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataCategoriesSchema>> {
        const result = this.api.metadataV1ObjectTypeCategoriesGetWithHttpInfo(objectType, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_categories 
     * Get metadata categories
     * @param objectType 
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeCategoriesGet(objectType: string, appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataCategoriesSchema> {
        const result = this.api.metadataV1ObjectTypeCategoriesGet(objectType, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_metadata_categories 
     * Delete metadata category by object type and category name
     * @param objectType 
     * @param name 
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeCategoriesNameDeleteWithHttpInfo(objectType: string, name: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.metadataV1ObjectTypeCategoriesNameDeleteWithHttpInfo(objectType, name, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_metadata_categories 
     * Delete metadata category by object type and category name
     * @param objectType 
     * @param name 
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeCategoriesNameDelete(objectType: string, name: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.metadataV1ObjectTypeCategoriesNameDelete(objectType, name, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_categories 
     * Get metadata category by object type and category name
     * @param objectType 
     * @param name 
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeCategoriesNameGetWithHttpInfo(objectType: string, name: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataCategorySchema>> {
        const result = this.api.metadataV1ObjectTypeCategoriesNameGetWithHttpInfo(objectType, name, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_categories 
     * Get metadata category by object type and category name
     * @param objectType 
     * @param name 
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeCategoriesNameGet(objectType: string, name: string, appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataCategorySchema> {
        const result = this.api.metadataV1ObjectTypeCategoriesNameGet(objectType, name, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_categories 
     * Edit metadata category for an object type
     * @param objectType 
     * @param name 
     * @param metadataCategorySchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeCategoriesNamePutWithHttpInfo(objectType: string, name: string, metadataCategorySchema: MetadataCategorySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataCategorySchema>> {
        const result = this.api.metadataV1ObjectTypeCategoriesNamePutWithHttpInfo(objectType, name, metadataCategorySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_categories 
     * Edit metadata category for an object type
     * @param objectType 
     * @param name 
     * @param metadataCategorySchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeCategoriesNamePut(objectType: string, name: string, metadataCategorySchema: MetadataCategorySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataCategorySchema> {
        const result = this.api.metadataV1ObjectTypeCategoriesNamePut(objectType, name, metadataCategorySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_categories 
     * Get metadata views with field for object type and category
     * @param objectType 
     * @param name 
     * @param appID 
     * @param authToken 
     * @param extOptions 
     * @param writableOnly 
     */
    public metadataV1ObjectTypeCategoriesNameViewsGetWithHttpInfo(objectType: string, name: string, appID?: string, authToken?: string, extOptions?: boolean, writableOnly?: boolean, _options?: Configuration): Promise<HttpInfo<MetadataCategorySchema>> {
        const result = this.api.metadataV1ObjectTypeCategoriesNameViewsGetWithHttpInfo(objectType, name, appID, authToken, extOptions, writableOnly, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_categories 
     * Get metadata views with field for object type and category
     * @param objectType 
     * @param name 
     * @param appID 
     * @param authToken 
     * @param extOptions 
     * @param writableOnly 
     */
    public metadataV1ObjectTypeCategoriesNameViewsGet(objectType: string, name: string, appID?: string, authToken?: string, extOptions?: boolean, writableOnly?: boolean, _options?: Configuration): Promise<MetadataCategorySchema> {
        const result = this.api.metadataV1ObjectTypeCategoriesNameViewsGet(objectType, name, appID, authToken, extOptions, writableOnly, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_categories 
     * Add a metadata category for an object type
     * @param objectType 
     * @param metadataCategorySchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeCategoriesPostWithHttpInfo(objectType: string, metadataCategorySchema: MetadataCategorySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataCategorySchema>> {
        const result = this.api.metadataV1ObjectTypeCategoriesPostWithHttpInfo(objectType, metadataCategorySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_categories 
     * Add a metadata category for an object type
     * @param objectType 
     * @param metadataCategorySchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeCategoriesPost(objectType: string, metadataCategorySchema: MetadataCategorySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataCategorySchema> {
        const result = this.api.metadataV1ObjectTypeCategoriesPost(objectType, metadataCategorySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_values 
     * Edit view metadata values for collection or saved search content.
     * @param objectType 
     * @param viewId 
     * @param collectionMetadataValuesBatchSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeContentViewsViewIdPutWithHttpInfo(objectType: string, viewId: string, collectionMetadataValuesBatchSchema: CollectionMetadataValuesBatchSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.metadataV1ObjectTypeContentViewsViewIdPutWithHttpInfo(objectType, viewId, collectionMetadataValuesBatchSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_values 
     * Edit view metadata values for collection or saved search content.
     * @param objectType 
     * @param viewId 
     * @param collectionMetadataValuesBatchSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeContentViewsViewIdPut(objectType: string, viewId: string, collectionMetadataValuesBatchSchema: CollectionMetadataValuesBatchSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.metadataV1ObjectTypeContentViewsViewIdPut(objectType, viewId, collectionMetadataValuesBatchSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is available only for admins
     * Get object metadata by object type and object ID
     * @param objectType 
     * @param objectId 
     * @param appID 
     * @param authToken 
     * @param includeValuesForDeletedFields Filter out metadata field values, for deleted fields
     */
    public metadataV1ObjectTypeObjectIdGetWithHttpInfo(objectType: string, objectId: string, appID?: string, authToken?: string, includeValuesForDeletedFields?: boolean, _options?: Configuration): Promise<HttpInfo<MetadataValuesSchema>> {
        const result = this.api.metadataV1ObjectTypeObjectIdGetWithHttpInfo(objectType, objectId, appID, authToken, includeValuesForDeletedFields, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is available only for admins
     * Get object metadata by object type and object ID
     * @param objectType 
     * @param objectId 
     * @param appID 
     * @param authToken 
     * @param includeValuesForDeletedFields Filter out metadata field values, for deleted fields
     */
    public metadataV1ObjectTypeObjectIdGet(objectType: string, objectId: string, appID?: string, authToken?: string, includeValuesForDeletedFields?: boolean, _options?: Configuration): Promise<MetadataValuesSchema> {
        const result = this.api.metadataV1ObjectTypeObjectIdGet(objectType, objectId, appID, authToken, includeValuesForDeletedFields, _options);
        return result.toPromise();
    }

    /**
     * 
     * Edit metadata values directly without a view. Admin access required.
     * @param objectType 
     * @param objectId 
     * @param metadataValuesSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeObjectIdPutWithHttpInfo(objectType: string, objectId: string, metadataValuesSchema: MetadataValuesSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataValuesSchema>> {
        const result = this.api.metadataV1ObjectTypeObjectIdPutWithHttpInfo(objectType, objectId, metadataValuesSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Edit metadata values directly without a view. Admin access required.
     * @param objectType 
     * @param objectId 
     * @param metadataValuesSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeObjectIdPut(objectType: string, objectId: string, metadataValuesSchema: MetadataValuesSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataValuesSchema> {
        const result = this.api.metadataV1ObjectTypeObjectIdPut(objectType, objectId, metadataValuesSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_values 
     * Get object metadata by object type, object ID and view ID
     * @param objectType 
     * @param objectId 
     * @param viewId 
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeObjectIdViewsViewIdGetWithHttpInfo(objectType: string, objectId: string, viewId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataValuesSchema>> {
        const result = this.api.metadataV1ObjectTypeObjectIdViewsViewIdGetWithHttpInfo(objectType, objectId, viewId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_values 
     * Get object metadata by object type, object ID and view ID
     * @param objectType 
     * @param objectId 
     * @param viewId 
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeObjectIdViewsViewIdGet(objectType: string, objectId: string, viewId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataValuesSchema> {
        const result = this.api.metadataV1ObjectTypeObjectIdViewsViewIdGet(objectType, objectId, viewId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_values 
     * Edit view metadata values for a single object
     * @param objectType 
     * @param objectId 
     * @param viewId 
     * @param metadataValuesSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeObjectIdViewsViewIdPutWithHttpInfo(objectType: string, objectId: string, viewId: string, metadataValuesSchema: MetadataValuesSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataValuesSchema>> {
        const result = this.api.metadataV1ObjectTypeObjectIdViewsViewIdPutWithHttpInfo(objectType, objectId, viewId, metadataValuesSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_values 
     * Edit view metadata values for a single object
     * @param objectType 
     * @param objectId 
     * @param viewId 
     * @param metadataValuesSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeObjectIdViewsViewIdPut(objectType: string, objectId: string, viewId: string, metadataValuesSchema: MetadataValuesSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataValuesSchema> {
        const result = this.api.metadataV1ObjectTypeObjectIdViewsViewIdPut(objectType, objectId, viewId, metadataValuesSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_values 
     * Add view metadata values for multiple objects (Assets, Collections or Segments)
     * @param objectType 
     * @param viewId 
     * @param createMetadataValuesBatchSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeViewsViewIdPostWithHttpInfo(objectType: string, viewId: string, createMetadataValuesBatchSchema: CreateMetadataValuesBatchSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.metadataV1ObjectTypeViewsViewIdPostWithHttpInfo(objectType, viewId, createMetadataValuesBatchSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_values 
     * Add view metadata values for multiple objects (Assets, Collections or Segments)
     * @param objectType 
     * @param viewId 
     * @param createMetadataValuesBatchSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeViewsViewIdPost(objectType: string, viewId: string, createMetadataValuesBatchSchema: CreateMetadataValuesBatchSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.metadataV1ObjectTypeViewsViewIdPost(objectType, viewId, createMetadataValuesBatchSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_values 
     * Edit view metadata values for multiple objects (Assets, Collections or Segments)
     * @param objectType 
     * @param viewId 
     * @param metadataValuesBatchSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeViewsViewIdPutWithHttpInfo(objectType: string, viewId: string, metadataValuesBatchSchema: MetadataValuesBatchSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.metadataV1ObjectTypeViewsViewIdPutWithHttpInfo(objectType, viewId, metadataValuesBatchSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_values 
     * Edit view metadata values for multiple objects (Assets, Collections or Segments)
     * @param objectType 
     * @param viewId 
     * @param metadataValuesBatchSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1ObjectTypeViewsViewIdPut(objectType: string, viewId: string, metadataValuesBatchSchema: MetadataValuesBatchSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.metadataV1ObjectTypeViewsViewIdPut(objectType, viewId, metadataValuesBatchSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_fields 
     * List the fields that can be accessed by a user
     * @param appID 
     * @param authToken 
     */
    public metadataV1UserFieldsGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataFieldsSchema>> {
        const result = this.api.metadataV1UserFieldsGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_fields 
     * List the fields that can be accessed by a user
     * @param appID 
     * @param authToken 
     */
    public metadataV1UserFieldsGet(appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataFieldsSchema> {
        const result = this.api.metadataV1UserFieldsGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_views 
     * List the views defined in the system
     * @param appID 
     * @param authToken 
     */
    public metadataV1ViewsGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataViewsSchema>> {
        const result = this.api.metadataV1ViewsGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_views 
     * List the views defined in the system
     * @param appID 
     * @param authToken 
     */
    public metadataV1ViewsGet(appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataViewsSchema> {
        const result = this.api.metadataV1ViewsGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_views 
     * Create a new view
     * @param metadataViewInputSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1ViewsPostWithHttpInfo(metadataViewInputSchema: MetadataViewInputSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataViewSchema>> {
        const result = this.api.metadataV1ViewsPostWithHttpInfo(metadataViewInputSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_views 
     * Create a new view
     * @param metadataViewInputSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1ViewsPost(metadataViewInputSchema: MetadataViewInputSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataViewSchema> {
        const result = this.api.metadataV1ViewsPost(metadataViewInputSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_metadata_views 
     * Delete a particular view by id
     * @param viewId 
     * @param appID 
     * @param authToken 
     */
    public metadataV1ViewsViewIdDeleteWithHttpInfo(viewId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.metadataV1ViewsViewIdDeleteWithHttpInfo(viewId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_metadata_views 
     * Delete a particular view by id
     * @param viewId 
     * @param appID 
     * @param authToken 
     */
    public metadataV1ViewsViewIdDelete(viewId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.metadataV1ViewsViewIdDelete(viewId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_views 
     * Returns a particular view by id
     * @param viewId 
     * @param appID 
     * @param authToken 
     * @param mergeFields 
     */
    public metadataV1ViewsViewIdGetWithHttpInfo(viewId: string, appID?: string, authToken?: string, mergeFields?: boolean, _options?: Configuration): Promise<HttpInfo<MetadataViewSchema>> {
        const result = this.api.metadataV1ViewsViewIdGetWithHttpInfo(viewId, appID, authToken, mergeFields, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_metadata_views 
     * Returns a particular view by id
     * @param viewId 
     * @param appID 
     * @param authToken 
     * @param mergeFields 
     */
    public metadataV1ViewsViewIdGet(viewId: string, appID?: string, authToken?: string, mergeFields?: boolean, _options?: Configuration): Promise<MetadataViewSchema> {
        const result = this.api.metadataV1ViewsViewIdGet(viewId, appID, authToken, mergeFields, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_views 
     * Update view
     * @param viewId 
     * @param metadataViewInputSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1ViewsViewIdPatchWithHttpInfo(viewId: string, metadataViewInputSchema: MetadataViewInputSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataViewSchema>> {
        const result = this.api.metadataV1ViewsViewIdPatchWithHttpInfo(viewId, metadataViewInputSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_views 
     * Update view
     * @param viewId 
     * @param metadataViewInputSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1ViewsViewIdPatch(viewId: string, metadataViewInputSchema: MetadataViewInputSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataViewSchema> {
        const result = this.api.metadataV1ViewsViewIdPatch(viewId, metadataViewInputSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_views 
     * Update view
     * @param viewId 
     * @param metadataViewInputSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1ViewsViewIdPutWithHttpInfo(viewId: string, metadataViewInputSchema: MetadataViewInputSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<MetadataViewSchema>> {
        const result = this.api.metadataV1ViewsViewIdPutWithHttpInfo(viewId, metadataViewInputSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_metadata_views 
     * Update view
     * @param viewId 
     * @param metadataViewInputSchema body
     * @param appID 
     * @param authToken 
     */
    public metadataV1ViewsViewIdPut(viewId: string, metadataViewInputSchema: MetadataViewInputSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<MetadataViewSchema> {
        const result = this.api.metadataV1ViewsViewIdPut(viewId, metadataViewInputSchema, appID, authToken, _options);
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
    public notificationsV1WebhooksGetWithHttpInfo(authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<WebhooksSchema>> {
        const result = this.api.notificationsV1WebhooksGetWithHttpInfo(authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_webhooks 
     * Get all webhooks
     * @param authToken 
     * @param appID 
     */
    public notificationsV1WebhooksGet(authToken?: string, appID?: string, _options?: Configuration): Promise<WebhooksSchema> {
        const result = this.api.notificationsV1WebhooksGet(authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_webhooks 
     * Create a new webhook
     * @param webhookCreateSchema body
     * @param authToken 
     * @param appID 
     */
    public notificationsV1WebhooksPostWithHttpInfo(webhookCreateSchema: WebhookCreateSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<WebhookSchema>> {
        const result = this.api.notificationsV1WebhooksPostWithHttpInfo(webhookCreateSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_webhooks 
     * Create a new webhook
     * @param webhookCreateSchema body
     * @param authToken 
     * @param appID 
     */
    public notificationsV1WebhooksPost(webhookCreateSchema: WebhookCreateSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<WebhookSchema> {
        const result = this.api.notificationsV1WebhooksPost(webhookCreateSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_webhooks 
     * Delete a webhook
     * @param webhookId 
     * @param authToken 
     * @param appID 
     */
    public notificationsV1WebhooksWebhookIdDeleteWithHttpInfo(webhookId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.notificationsV1WebhooksWebhookIdDeleteWithHttpInfo(webhookId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_webhooks 
     * Delete a webhook
     * @param webhookId 
     * @param authToken 
     * @param appID 
     */
    public notificationsV1WebhooksWebhookIdDelete(webhookId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<void> {
        const result = this.api.notificationsV1WebhooksWebhookIdDelete(webhookId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_webhooks 
     * Get a webhook definition
     * @param webhookId 
     * @param authToken 
     * @param appID 
     */
    public notificationsV1WebhooksWebhookIdGetWithHttpInfo(webhookId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<WebhookSchema>> {
        const result = this.api.notificationsV1WebhooksWebhookIdGetWithHttpInfo(webhookId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_webhooks 
     * Get a webhook definition
     * @param webhookId 
     * @param authToken 
     * @param appID 
     */
    public notificationsV1WebhooksWebhookIdGet(webhookId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<WebhookSchema> {
        const result = this.api.notificationsV1WebhooksWebhookIdGet(webhookId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_webhooks 
     * Update a webhook
     * @param webhookId 
     * @param webhookCreateSchema body
     * @param authToken 
     * @param appID 
     */
    public notificationsV1WebhooksWebhookIdPutWithHttpInfo(webhookId: string, webhookCreateSchema: WebhookCreateSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<WebhookSchema>> {
        const result = this.api.notificationsV1WebhooksWebhookIdPutWithHttpInfo(webhookId, webhookCreateSchema, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_webhooks 
     * Update a webhook
     * @param webhookId 
     * @param webhookCreateSchema body
     * @param authToken 
     * @param appID 
     */
    public notificationsV1WebhooksWebhookIdPut(webhookId: string, webhookCreateSchema: WebhookCreateSchema, authToken?: string, appID?: string, _options?: Configuration): Promise<WebhookSchema> {
        const result = this.api.notificationsV1WebhooksWebhookIdPut(webhookId, webhookCreateSchema, authToken, appID, _options);
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
    public searchV1DiscoveryDefaultEntitiesAdminGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<DiscoveryEntitiesSchema>> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesAdminGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Returns the discovery entities that are used to build the discovery view.
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryDefaultEntitiesAdminGet(appID?: string, authToken?: string, _options?: Configuration): Promise<DiscoveryEntitiesSchema> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesAdminGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_discovery_entities 
     * Delete a discovery entity by id
     * @param entityId 
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryDefaultEntitiesEntityIdDeleteWithHttpInfo(entityId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesEntityIdDeleteWithHttpInfo(entityId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_discovery_entities 
     * Delete a discovery entity by id
     * @param entityId 
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryDefaultEntitiesEntityIdDelete(entityId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesEntityIdDelete(entityId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_discovery_entities 
     * Returns discovery entity
     * @param entityId 
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryDefaultEntitiesEntityIdGetWithHttpInfo(entityId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<DiscoveryEntitySchema>> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesEntityIdGetWithHttpInfo(entityId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_discovery_entities 
     * Returns discovery entity
     * @param entityId 
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryDefaultEntitiesEntityIdGet(entityId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<DiscoveryEntitySchema> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesEntityIdGet(entityId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Update a discovery entity by id
     * @param entityId 
     * @param discoveryEntitySchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryDefaultEntitiesEntityIdPatchWithHttpInfo(entityId: string, discoveryEntitySchema: DiscoveryEntitySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesEntityIdPatchWithHttpInfo(entityId, discoveryEntitySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Update a discovery entity by id
     * @param entityId 
     * @param discoveryEntitySchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryDefaultEntitiesEntityIdPatch(entityId: string, discoveryEntitySchema: DiscoveryEntitySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesEntityIdPatch(entityId, discoveryEntitySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Update a discovery entity by id
     * @param entityId 
     * @param discoveryEntitySchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryDefaultEntitiesEntityIdPutWithHttpInfo(entityId: string, discoveryEntitySchema: DiscoveryEntitySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesEntityIdPutWithHttpInfo(entityId, discoveryEntitySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Update a discovery entity by id
     * @param entityId 
     * @param discoveryEntitySchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryDefaultEntitiesEntityIdPut(entityId: string, discoveryEntitySchema: DiscoveryEntitySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesEntityIdPut(entityId, discoveryEntitySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_discovery_entities 
     * Returns the discovery entities that are used to build the discovery view.
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryDefaultEntitiesGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<DiscoveryEntitiesSchema>> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_discovery_entities 
     * Returns the discovery entities that are used to build the discovery view.
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryDefaultEntitiesGet(appID?: string, authToken?: string, _options?: Configuration): Promise<DiscoveryEntitiesSchema> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * <br/>This creates an entry for the discovery view to show collections and saved searches.<br/>Object Type should be one of COLLECTION, SAVED_SEARCH, ASSET, RECOMMENDATION or TRENDING<br/>Object ID is only needed in the case of COLLECTION, SAVED_SEARCH or ASSET<br/>metadata is for user defined extra data.<br/><br/>This creates an entry for the discovery view to show collections and saved searches.<br/>Object Type should be one of COLLECTION, SAVED_SEARCH, ASSET, RECOMMENDATION or TRENDING<br/>Object ID is only needed in the case of COLLECTION, SAVED_SEARCH or ASSET<br/>metadata is for user defined extra data.<br/> Required roles:  - can_write_discovery_entities 
     * Adds a new discovery entity.
     * @param discoveryEntitySchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryDefaultEntitiesPostWithHttpInfo(discoveryEntitySchema: DiscoveryEntitySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<DiscoveryEntitySchema>> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesPostWithHttpInfo(discoveryEntitySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * <br/>This creates an entry for the discovery view to show collections and saved searches.<br/>Object Type should be one of COLLECTION, SAVED_SEARCH, ASSET, RECOMMENDATION or TRENDING<br/>Object ID is only needed in the case of COLLECTION, SAVED_SEARCH or ASSET<br/>metadata is for user defined extra data.<br/><br/>This creates an entry for the discovery view to show collections and saved searches.<br/>Object Type should be one of COLLECTION, SAVED_SEARCH, ASSET, RECOMMENDATION or TRENDING<br/>Object ID is only needed in the case of COLLECTION, SAVED_SEARCH or ASSET<br/>metadata is for user defined extra data.<br/> Required roles:  - can_write_discovery_entities 
     * Adds a new discovery entity.
     * @param discoveryEntitySchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryDefaultEntitiesPost(discoveryEntitySchema: DiscoveryEntitySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<DiscoveryEntitySchema> {
        const result = this.api.searchV1DiscoveryDefaultEntitiesPost(discoveryEntitySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Update default discovery view
     * @param discoveryViewSettingsSchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryDefaultPutWithHttpInfo(discoveryViewSettingsSchema: DiscoveryViewSettingsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<DiscoveryViewSettingsSchema>> {
        const result = this.api.searchV1DiscoveryDefaultPutWithHttpInfo(discoveryViewSettingsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Update default discovery view
     * @param discoveryViewSettingsSchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryDefaultPut(discoveryViewSettingsSchema: DiscoveryViewSettingsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<DiscoveryViewSettingsSchema> {
        const result = this.api.searchV1DiscoveryDefaultPut(discoveryViewSettingsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Update a discovery entity by object\'s type and id
     * @param objectType 
     * @param objectId 
     * @param discoveryEntitySchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryEntitiesObjectTypeObjectIdPatchWithHttpInfo(objectType: string, objectId: string, discoveryEntitySchema: DiscoveryEntitySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1DiscoveryEntitiesObjectTypeObjectIdPatchWithHttpInfo(objectType, objectId, discoveryEntitySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Update a discovery entity by object\'s type and id
     * @param objectType 
     * @param objectId 
     * @param discoveryEntitySchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryEntitiesObjectTypeObjectIdPatch(objectType: string, objectId: string, discoveryEntitySchema: DiscoveryEntitySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1DiscoveryEntitiesObjectTypeObjectIdPatch(objectType, objectId, discoveryEntitySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Update a discovery entity by object\'s type and id
     * @param objectType 
     * @param objectId 
     * @param discoveryEntitySchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryEntitiesObjectTypeObjectIdPutWithHttpInfo(objectType: string, objectId: string, discoveryEntitySchema: DiscoveryEntitySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1DiscoveryEntitiesObjectTypeObjectIdPutWithHttpInfo(objectType, objectId, discoveryEntitySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_discovery_entities 
     * Update a discovery entity by object\'s type and id
     * @param objectType 
     * @param objectId 
     * @param discoveryEntitySchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1DiscoveryEntitiesObjectTypeObjectIdPut(objectType: string, objectId: string, discoveryEntitySchema: DiscoveryEntitySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1DiscoveryEntitiesObjectTypeObjectIdPut(objectType, objectId, discoveryEntitySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_search_history 
     * Returns the current search history
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchHistoryGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SearchHistoryListSchema>> {
        const result = this.api.searchV1SearchHistoryGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_search_history 
     * Returns the current search history
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchHistoryGet(appID?: string, authToken?: string, _options?: Configuration): Promise<SearchHistoryListSchema> {
        const result = this.api.searchV1SearchHistoryGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_search_history 
     * Delete a search from history by its id
     * @param searchHistoryId 
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchHistorySearchHistoryIdDeleteWithHttpInfo(searchHistoryId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1SearchHistorySearchHistoryIdDeleteWithHttpInfo(searchHistoryId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_search_history 
     * Delete a search from history by its id
     * @param searchHistoryId 
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchHistorySearchHistoryIdDelete(searchHistoryId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1SearchHistorySearchHistoryIdDelete(searchHistoryId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_search_history 
     * Returns results of search history
     * @param searchHistoryId 
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchHistorySearchHistoryIdGetWithHttpInfo(searchHistoryId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SearchDocumentsSchema>> {
        const result = this.api.searchV1SearchHistorySearchHistoryIdGetWithHttpInfo(searchHistoryId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_search_history 
     * Returns results of search history
     * @param searchHistoryId 
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchHistorySearchHistoryIdGet(searchHistoryId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<SearchDocumentsSchema> {
        const result = this.api.searchV1SearchHistorySearchHistoryIdGet(searchHistoryId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_search 
     * Search
     * @param searchCriteriaSchema body
     * @param appID 
     * @param authToken 
     * @param perPage The number of documents for each page
     * @param page Which page number to fetch
     * @param scroll If true passed then uses scroll pagination instead of default one (Deprecated, user search_after body parameter instead)
     * @param scrollId In order to get next batch of results using scroll pagination the scroll_id is required
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param generateSignedDownloadUrl Set to true if you also want the file download URLs generated
     * @param saveSearchHistory Set to false if you don\&#39;t want to save the search to the history
     */
    public searchV1SearchPostWithHttpInfo(searchCriteriaSchema: SearchCriteriaSchema, appID?: string, authToken?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, generateSignedUrl?: boolean, generateSignedDownloadUrl?: boolean, saveSearchHistory?: boolean, _options?: Configuration): Promise<HttpInfo<SearchDocumentsSchema>> {
        const result = this.api.searchV1SearchPostWithHttpInfo(searchCriteriaSchema, appID, authToken, perPage, page, scroll, scrollId, generateSignedUrl, generateSignedDownloadUrl, saveSearchHistory, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_search 
     * Search
     * @param searchCriteriaSchema body
     * @param appID 
     * @param authToken 
     * @param perPage The number of documents for each page
     * @param page Which page number to fetch
     * @param scroll If true passed then uses scroll pagination instead of default one (Deprecated, user search_after body parameter instead)
     * @param scrollId In order to get next batch of results using scroll pagination the scroll_id is required
     * @param generateSignedUrl Set to false if you don\&#39;t need a URL, will speed things up
     * @param generateSignedDownloadUrl Set to true if you also want the file download URLs generated
     * @param saveSearchHistory Set to false if you don\&#39;t want to save the search to the history
     */
    public searchV1SearchPost(searchCriteriaSchema: SearchCriteriaSchema, appID?: string, authToken?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, generateSignedUrl?: boolean, generateSignedDownloadUrl?: boolean, saveSearchHistory?: boolean, _options?: Configuration): Promise<SearchDocumentsSchema> {
        const result = this.api.searchV1SearchPost(searchCriteriaSchema, appID, authToken, perPage, page, scroll, scrollId, generateSignedUrl, generateSignedDownloadUrl, saveSearchHistory, _options);
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
    public searchV1SearchSavedGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, sort?: string, groupId?: string, ids?: string, query?: string, _options?: Configuration): Promise<HttpInfo<SavedSearchesSchema>> {
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
    public searchV1SearchSavedGet(appID?: string, authToken?: string, perPage?: number, page?: number, scroll?: boolean, scrollId?: string, sort?: string, groupId?: string, ids?: string, query?: string, _options?: Configuration): Promise<SavedSearchesSchema> {
        const result = this.api.searchV1SearchSavedGet(appID, authToken, perPage, page, scroll, scrollId, sort, groupId, ids, query, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_saved_search_groups 
     * Delete a saved search group by it\'s id
     * @param groupId 
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedGroupGroupIdDeleteWithHttpInfo(groupId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1SearchSavedGroupGroupIdDeleteWithHttpInfo(groupId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_saved_search_groups 
     * Delete a saved search group by it\'s id
     * @param groupId 
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedGroupGroupIdDelete(groupId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1SearchSavedGroupGroupIdDelete(groupId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_saved_searches 
     * Returns saved search group data
     * @param groupId 
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedGroupGroupIdGetWithHttpInfo(groupId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SavedSearchGroupSchema>> {
        const result = this.api.searchV1SearchSavedGroupGroupIdGetWithHttpInfo(groupId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_saved_searches 
     * Returns saved search group data
     * @param groupId 
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedGroupGroupIdGet(groupId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<SavedSearchGroupSchema> {
        const result = this.api.searchV1SearchSavedGroupGroupIdGet(groupId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_search_groups 
     * Update and return saved search group data
     * @param groupId 
     * @param savedSearchGroupSchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedGroupGroupIdPatchWithHttpInfo(groupId: string, savedSearchGroupSchema: SavedSearchGroupSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SavedSearchGroupSchema>> {
        const result = this.api.searchV1SearchSavedGroupGroupIdPatchWithHttpInfo(groupId, savedSearchGroupSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_search_groups 
     * Update and return saved search group data
     * @param groupId 
     * @param savedSearchGroupSchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedGroupGroupIdPatch(groupId: string, savedSearchGroupSchema: SavedSearchGroupSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SavedSearchGroupSchema> {
        const result = this.api.searchV1SearchSavedGroupGroupIdPatch(groupId, savedSearchGroupSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_search_groups 
     * Update and return saved search group data
     * @param groupId 
     * @param savedSearchGroupSchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedGroupGroupIdPutWithHttpInfo(groupId: string, savedSearchGroupSchema: SavedSearchGroupSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SavedSearchGroupSchema>> {
        const result = this.api.searchV1SearchSavedGroupGroupIdPutWithHttpInfo(groupId, savedSearchGroupSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_search_groups 
     * Update and return saved search group data
     * @param groupId 
     * @param savedSearchGroupSchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedGroupGroupIdPut(groupId: string, savedSearchGroupSchema: SavedSearchGroupSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SavedSearchGroupSchema> {
        const result = this.api.searchV1SearchSavedGroupGroupIdPut(groupId, savedSearchGroupSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_searches 
     * Delete saved search from search group
     * @param groupId 
     * @param searchId 
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedGroupGroupIdSearchSearchIdDeleteWithHttpInfo(groupId: string, searchId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1SearchSavedGroupGroupIdSearchSearchIdDeleteWithHttpInfo(groupId, searchId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_searches 
     * Delete saved search from search group
     * @param groupId 
     * @param searchId 
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedGroupGroupIdSearchSearchIdDelete(groupId: string, searchId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1SearchSavedGroupGroupIdSearchSearchIdDelete(groupId, searchId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_searches 
     * Adds saved search to group
     * @param groupId 
     * @param searchId 
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedGroupGroupIdSearchSearchIdPostWithHttpInfo(groupId: string, searchId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1SearchSavedGroupGroupIdSearchSearchIdPostWithHttpInfo(groupId, searchId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_searches 
     * Adds saved search to group
     * @param groupId 
     * @param searchId 
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedGroupGroupIdSearchSearchIdPost(groupId: string, searchId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1SearchSavedGroupGroupIdSearchSearchIdPost(groupId, searchId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_search_groups 
     * Create and return saved search group data
     * @param savedSearchGroupSchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedGroupPostWithHttpInfo(savedSearchGroupSchema: SavedSearchGroupSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SavedSearchGroupSchema>> {
        const result = this.api.searchV1SearchSavedGroupPostWithHttpInfo(savedSearchGroupSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_search_groups 
     * Create and return saved search group data
     * @param savedSearchGroupSchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedGroupPost(savedSearchGroupSchema: SavedSearchGroupSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SavedSearchGroupSchema> {
        const result = this.api.searchV1SearchSavedGroupPost(savedSearchGroupSchema, appID, authToken, _options);
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
    public searchV1SearchSavedGroupsGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, page?: number, ids?: string, sort?: string, _options?: Configuration): Promise<HttpInfo<SavedSearchGroupsSchema>> {
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
    public searchV1SearchSavedGroupsGet(appID?: string, authToken?: string, perPage?: number, page?: number, ids?: string, sort?: string, _options?: Configuration): Promise<SavedSearchGroupsSchema> {
        const result = this.api.searchV1SearchSavedGroupsGet(appID, authToken, perPage, page, ids, sort, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_saved_searches 
     * Reindex a particular saved search group by id
     * @param groupId 
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedGroupsGroupIdReindexPostWithHttpInfo(groupId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1SearchSavedGroupsGroupIdReindexPostWithHttpInfo(groupId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_saved_searches 
     * Reindex a particular saved search group by id
     * @param groupId 
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedGroupsGroupIdReindexPost(groupId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1SearchSavedGroupsGroupIdReindexPost(groupId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_searches 
     * Search, save and return result of this search
     * @param savedSearchSchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedPostWithHttpInfo(savedSearchSchema: SavedSearchSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SavedSearchSchema>> {
        const result = this.api.searchV1SearchSavedPostWithHttpInfo(savedSearchSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_searches 
     * Search, save and return result of this search
     * @param savedSearchSchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedPost(savedSearchSchema: SavedSearchSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SavedSearchSchema> {
        const result = this.api.searchV1SearchSavedPost(savedSearchSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_saved_searches 
     * Delete a saved search by its id
     * @param searchId 
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedSearchIdDeleteWithHttpInfo(searchId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1SearchSavedSearchIdDeleteWithHttpInfo(searchId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_saved_searches 
     * Delete a saved search by its id
     * @param searchId 
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedSearchIdDelete(searchId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1SearchSavedSearchIdDelete(searchId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_saved_searches 
     * Returns results of saved search
     * @param searchId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param includeResults Set to false if you only want the search definition
     */
    public searchV1SearchSavedSearchIdGetWithHttpInfo(searchId: string, appID?: string, authToken?: string, perPage?: number, page?: number, includeResults?: boolean, _options?: Configuration): Promise<HttpInfo<SavedSearchResultsSchema>> {
        const result = this.api.searchV1SearchSavedSearchIdGetWithHttpInfo(searchId, appID, authToken, perPage, page, includeResults, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_saved_searches 
     * Returns results of saved search
     * @param searchId 
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     * @param includeResults Set to false if you only want the search definition
     */
    public searchV1SearchSavedSearchIdGet(searchId: string, appID?: string, authToken?: string, perPage?: number, page?: number, includeResults?: boolean, _options?: Configuration): Promise<SavedSearchResultsSchema> {
        const result = this.api.searchV1SearchSavedSearchIdGet(searchId, appID, authToken, perPage, page, includeResults, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_searches 
     * Search and save this search
     * @param searchId 
     * @param savedSearchSchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedSearchIdPatchWithHttpInfo(searchId: string, savedSearchSchema: SavedSearchSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SearchDocumentsSchema>> {
        const result = this.api.searchV1SearchSavedSearchIdPatchWithHttpInfo(searchId, savedSearchSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_searches 
     * Search and save this search
     * @param searchId 
     * @param savedSearchSchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedSearchIdPatch(searchId: string, savedSearchSchema: SavedSearchSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SearchDocumentsSchema> {
        const result = this.api.searchV1SearchSavedSearchIdPatch(searchId, savedSearchSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_searches 
     * Search and save this search
     * @param searchId 
     * @param savedSearchSchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedSearchIdPutWithHttpInfo(searchId: string, savedSearchSchema: SavedSearchSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SearchDocumentsSchema>> {
        const result = this.api.searchV1SearchSavedSearchIdPutWithHttpInfo(searchId, savedSearchSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_saved_searches 
     * Search and save this search
     * @param searchId 
     * @param savedSearchSchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedSearchIdPut(searchId: string, savedSearchSchema: SavedSearchSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SearchDocumentsSchema> {
        const result = this.api.searchV1SearchSavedSearchIdPut(searchId, savedSearchSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_saved_searches 
     * Reindex a particular saved search by id
     * @param searchId 
     * @param reindexSavedSearchSchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedSearchIdReindexPostWithHttpInfo(searchId: string, reindexSavedSearchSchema: ReindexSavedSearchSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.searchV1SearchSavedSearchIdReindexPostWithHttpInfo(searchId, reindexSavedSearchSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_saved_searches 
     * Reindex a particular saved search by id
     * @param searchId 
     * @param reindexSavedSearchSchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSavedSearchIdReindexPost(searchId: string, reindexSavedSearchSchema: ReindexSavedSearchSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.searchV1SearchSavedSearchIdReindexPost(searchId, reindexSavedSearchSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_search 
     * Returns search suggestions for a particular query.
     * @param searchSuggestSchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSuggestPostWithHttpInfo(searchSuggestSchema: SearchSuggestSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SearchSuggestsResponseSchema>> {
        const result = this.api.searchV1SearchSuggestPostWithHttpInfo(searchSuggestSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_search 
     * Returns search suggestions for a particular query.
     * @param searchSuggestSchema body
     * @param appID 
     * @param authToken 
     */
    public searchV1SearchSuggestPost(searchSuggestSchema: SearchSuggestSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SearchSuggestsResponseSchema> {
        const result = this.api.searchV1SearchSuggestPost(searchSuggestSchema, appID, authToken, _options);
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
     * @param corsHostId 
     * @param appID 
     * @param authToken 
     */
    public settingsV1CorsHostsCorsHostIdDeleteWithHttpInfo(corsHostId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.settingsV1CorsHostsCorsHostIdDeleteWithHttpInfo(corsHostId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_cors_hosts 
     * Delete a particular CORS host by id
     * @param corsHostId 
     * @param appID 
     * @param authToken 
     */
    public settingsV1CorsHostsCorsHostIdDelete(corsHostId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.settingsV1CorsHostsCorsHostIdDelete(corsHostId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_cors_hosts 
     * Returns a particular CORS host by id
     * @param corsHostId 
     * @param appID 
     * @param authToken 
     */
    public settingsV1CorsHostsCorsHostIdGetWithHttpInfo(corsHostId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CORSHostSchema>> {
        const result = this.api.settingsV1CorsHostsCorsHostIdGetWithHttpInfo(corsHostId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_cors_hosts 
     * Returns a particular CORS host by id
     * @param corsHostId 
     * @param appID 
     * @param authToken 
     */
    public settingsV1CorsHostsCorsHostIdGet(corsHostId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<CORSHostSchema> {
        const result = this.api.settingsV1CorsHostsCorsHostIdGet(corsHostId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_cors_hosts 
     * List of CORS hosts
     * @param appID 
     * @param authToken 
     */
    public settingsV1CorsHostsGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CORSHostsSchema>> {
        const result = this.api.settingsV1CorsHostsGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_cors_hosts 
     * List of CORS hosts
     * @param appID 
     * @param authToken 
     */
    public settingsV1CorsHostsGet(appID?: string, authToken?: string, _options?: Configuration): Promise<CORSHostsSchema> {
        const result = this.api.settingsV1CorsHostsGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_cors_hosts 
     * Create a new CORS host
     * @param cORSHostSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1CorsHostsPostWithHttpInfo(cORSHostSchema: CORSHostSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CORSHostSchema>> {
        const result = this.api.settingsV1CorsHostsPostWithHttpInfo(cORSHostSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_cors_hosts 
     * Create a new CORS host
     * @param cORSHostSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1CorsHostsPost(cORSHostSchema: CORSHostSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<CORSHostSchema> {
        const result = this.api.settingsV1CorsHostsPost(cORSHostSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete group settings
     * @param groupId 
     * @param appID 
     * @param authToken 
     */
    public settingsV1GroupGroupIdDeleteWithHttpInfo(groupId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.settingsV1GroupGroupIdDeleteWithHttpInfo(groupId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete group settings
     * @param groupId 
     * @param appID 
     * @param authToken 
     */
    public settingsV1GroupGroupIdDelete(groupId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.settingsV1GroupGroupIdDelete(groupId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Group settings
     * @param groupId 
     * @param appID 
     * @param authToken 
     */
    public settingsV1GroupGroupIdGetWithHttpInfo(groupId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<GroupSettingPublicSchema>> {
        const result = this.api.settingsV1GroupGroupIdGetWithHttpInfo(groupId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Group settings
     * @param groupId 
     * @param appID 
     * @param authToken 
     */
    public settingsV1GroupGroupIdGet(groupId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<GroupSettingPublicSchema> {
        const result = this.api.settingsV1GroupGroupIdGet(groupId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change group settings
     * @param groupId 
     * @param groupSettingPublicSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1GroupGroupIdPatchWithHttpInfo(groupId: string, groupSettingPublicSchema: GroupSettingPublicSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<GroupSettingPublicSchema>> {
        const result = this.api.settingsV1GroupGroupIdPatchWithHttpInfo(groupId, groupSettingPublicSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change group settings
     * @param groupId 
     * @param groupSettingPublicSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1GroupGroupIdPatch(groupId: string, groupSettingPublicSchema: GroupSettingPublicSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<GroupSettingPublicSchema> {
        const result = this.api.settingsV1GroupGroupIdPatch(groupId, groupSettingPublicSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change group settings
     * @param groupId 
     * @param groupSettingPublicSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1GroupGroupIdPutWithHttpInfo(groupId: string, groupSettingPublicSchema: GroupSettingPublicSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<GroupSettingPublicSchema>> {
        const result = this.api.settingsV1GroupGroupIdPutWithHttpInfo(groupId, groupSettingPublicSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change group settings
     * @param groupId 
     * @param groupSettingPublicSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1GroupGroupIdPut(groupId: string, groupSettingPublicSchema: GroupSettingPublicSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<GroupSettingPublicSchema> {
        const result = this.api.settingsV1GroupGroupIdPut(groupId, groupSettingPublicSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * List of settings
     * @param realm 
     * @param appID 
     * @param authToken 
     * @param page Which page number to fetch
     * @param perPage The number of items for each page
     */
    public settingsV1KubernetesRealmGetWithHttpInfo(realm: string, appID?: string, authToken?: string, page?: number, perPage?: number, _options?: Configuration): Promise<HttpInfo<KubernetesSettingSchema>> {
        const result = this.api.settingsV1KubernetesRealmGetWithHttpInfo(realm, appID, authToken, page, perPage, _options);
        return result.toPromise();
    }

    /**
     * 
     * List of settings
     * @param realm 
     * @param appID 
     * @param authToken 
     * @param page Which page number to fetch
     * @param perPage The number of items for each page
     */
    public settingsV1KubernetesRealmGet(realm: string, appID?: string, authToken?: string, page?: number, perPage?: number, _options?: Configuration): Promise<KubernetesSettingSchema> {
        const result = this.api.settingsV1KubernetesRealmGet(realm, appID, authToken, page, perPage, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change settings
     * @param realm 
     * @param kubernetesSettingSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1KubernetesRealmPatchWithHttpInfo(realm: string, kubernetesSettingSchema: KubernetesSettingSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<KubernetesSettingSchema>> {
        const result = this.api.settingsV1KubernetesRealmPatchWithHttpInfo(realm, kubernetesSettingSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change settings
     * @param realm 
     * @param kubernetesSettingSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1KubernetesRealmPatch(realm: string, kubernetesSettingSchema: KubernetesSettingSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<KubernetesSettingSchema> {
        const result = this.api.settingsV1KubernetesRealmPatch(realm, kubernetesSettingSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete a particular setting by name
     * @param realm 
     * @param settingName 
     * @param appID 
     * @param authToken 
     */
    public settingsV1KubernetesRealmSettingNameDeleteWithHttpInfo(realm: string, settingName: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.settingsV1KubernetesRealmSettingNameDeleteWithHttpInfo(realm, settingName, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete a particular setting by name
     * @param realm 
     * @param settingName 
     * @param appID 
     * @param authToken 
     */
    public settingsV1KubernetesRealmSettingNameDelete(realm: string, settingName: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.settingsV1KubernetesRealmSettingNameDelete(realm, settingName, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns value for the setting
     * @param realm 
     * @param settingName 
     * @param appID 
     * @param authToken 
     */
    public settingsV1KubernetesRealmSettingNameGetWithHttpInfo(realm: string, settingName: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<KubernetesSettingSchema>> {
        const result = this.api.settingsV1KubernetesRealmSettingNameGetWithHttpInfo(realm, settingName, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns value for the setting
     * @param realm 
     * @param settingName 
     * @param appID 
     * @param authToken 
     */
    public settingsV1KubernetesRealmSettingNameGet(realm: string, settingName: string, appID?: string, authToken?: string, _options?: Configuration): Promise<KubernetesSettingSchema> {
        const result = this.api.settingsV1KubernetesRealmSettingNameGet(realm, settingName, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get merged settings for current user
     * @param appID 
     * @param authToken 
     * @param ignoreLogoUrl 
     */
    public settingsV1MergedCurrentGetWithHttpInfo(appID?: string, authToken?: string, ignoreLogoUrl?: boolean, _options?: Configuration): Promise<HttpInfo<MergedSettingsSchema>> {
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
    public settingsV1MergedCurrentGet(appID?: string, authToken?: string, ignoreLogoUrl?: boolean, _options?: Configuration): Promise<MergedSettingsSchema> {
        const result = this.api.settingsV1MergedCurrentGet(appID, authToken, ignoreLogoUrl, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get merged settings for a specific user
     * @param userId 
     * @param appID 
     * @param authToken 
     * @param ignoreLogoUrl 
     */
    public settingsV1MergedUserIdGetWithHttpInfo(userId: string, appID?: string, authToken?: string, ignoreLogoUrl?: boolean, _options?: Configuration): Promise<HttpInfo<MergedSettingsSchema>> {
        const result = this.api.settingsV1MergedUserIdGetWithHttpInfo(userId, appID, authToken, ignoreLogoUrl, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get merged settings for a specific user
     * @param userId 
     * @param appID 
     * @param authToken 
     * @param ignoreLogoUrl 
     */
    public settingsV1MergedUserIdGet(userId: string, appID?: string, authToken?: string, ignoreLogoUrl?: boolean, _options?: Configuration): Promise<MergedSettingsSchema> {
        const result = this.api.settingsV1MergedUserIdGet(userId, appID, authToken, ignoreLogoUrl, _options);
        return result.toPromise();
    }

    /**
     * 
     * System settings
     * @param appID 
     * @param authToken 
     * @param ignoreLogoUrl 
     */
    public settingsV1SystemCurrentGetWithHttpInfo(appID?: string, authToken?: string, ignoreLogoUrl?: boolean, _options?: Configuration): Promise<HttpInfo<SystemSettingPublicSchema>> {
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
    public settingsV1SystemCurrentGet(appID?: string, authToken?: string, ignoreLogoUrl?: boolean, _options?: Configuration): Promise<SystemSettingPublicSchema> {
        const result = this.api.settingsV1SystemCurrentGet(appID, authToken, ignoreLogoUrl, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change system settings
     * @param systemSettingPublicSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1SystemCurrentPatchWithHttpInfo(systemSettingPublicSchema: SystemSettingPublicSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SystemSettingPublicSchema>> {
        const result = this.api.settingsV1SystemCurrentPatchWithHttpInfo(systemSettingPublicSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change system settings
     * @param systemSettingPublicSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1SystemCurrentPatch(systemSettingPublicSchema: SystemSettingPublicSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SystemSettingPublicSchema> {
        const result = this.api.settingsV1SystemCurrentPatch(systemSettingPublicSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change system settings
     * @param systemSettingPublicSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1SystemCurrentPutWithHttpInfo(systemSettingPublicSchema: SystemSettingPublicSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SystemSettingPublicSchema>> {
        const result = this.api.settingsV1SystemCurrentPutWithHttpInfo(systemSettingPublicSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change system settings
     * @param systemSettingPublicSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1SystemCurrentPut(systemSettingPublicSchema: SystemSettingPublicSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SystemSettingPublicSchema> {
        const result = this.api.settingsV1SystemCurrentPut(systemSettingPublicSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * System settings
     * @param systemDomainId 
     * @param appID 
     * @param authToken 
     * @param ignoreLogoUrl 
     */
    public settingsV1SystemSystemDomainIdGetWithHttpInfo(systemDomainId: string, appID?: string, authToken?: string, ignoreLogoUrl?: boolean, _options?: Configuration): Promise<HttpInfo<SystemSettingPublicSchema>> {
        const result = this.api.settingsV1SystemSystemDomainIdGetWithHttpInfo(systemDomainId, appID, authToken, ignoreLogoUrl, _options);
        return result.toPromise();
    }

    /**
     * 
     * System settings
     * @param systemDomainId 
     * @param appID 
     * @param authToken 
     * @param ignoreLogoUrl 
     */
    public settingsV1SystemSystemDomainIdGet(systemDomainId: string, appID?: string, authToken?: string, ignoreLogoUrl?: boolean, _options?: Configuration): Promise<SystemSettingPublicSchema> {
        const result = this.api.settingsV1SystemSystemDomainIdGet(systemDomainId, appID, authToken, ignoreLogoUrl, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change system settings
     * @param systemDomainId 
     * @param systemSettingPublicSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1SystemSystemDomainIdPatchWithHttpInfo(systemDomainId: string, systemSettingPublicSchema: SystemSettingPublicSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SystemSettingPublicSchema>> {
        const result = this.api.settingsV1SystemSystemDomainIdPatchWithHttpInfo(systemDomainId, systemSettingPublicSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change system settings
     * @param systemDomainId 
     * @param systemSettingPublicSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1SystemSystemDomainIdPatch(systemDomainId: string, systemSettingPublicSchema: SystemSettingPublicSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SystemSettingPublicSchema> {
        const result = this.api.settingsV1SystemSystemDomainIdPatch(systemDomainId, systemSettingPublicSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change system settings
     * @param systemDomainId 
     * @param systemSettingPublicSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1SystemSystemDomainIdPutWithHttpInfo(systemDomainId: string, systemSettingPublicSchema: SystemSettingPublicSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SystemSettingPublicSchema>> {
        const result = this.api.settingsV1SystemSystemDomainIdPutWithHttpInfo(systemDomainId, systemSettingPublicSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change system settings
     * @param systemDomainId 
     * @param systemSettingPublicSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1SystemSystemDomainIdPut(systemDomainId: string, systemSettingPublicSchema: SystemSettingPublicSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SystemSettingPublicSchema> {
        const result = this.api.settingsV1SystemSystemDomainIdPut(systemDomainId, systemSettingPublicSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Remove attributes from user settings
     * @param userSettingRemoveAttributesSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1UserAttributesDeleteWithHttpInfo(userSettingRemoveAttributesSchema: UserSettingRemoveAttributesSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.settingsV1UserAttributesDeleteWithHttpInfo(userSettingRemoveAttributesSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Remove attributes from user settings
     * @param userSettingRemoveAttributesSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1UserAttributesDelete(userSettingRemoveAttributesSchema: UserSettingRemoveAttributesSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.settingsV1UserAttributesDelete(userSettingRemoveAttributesSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete user settings
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public settingsV1UserUserIdDeleteWithHttpInfo(userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.settingsV1UserUserIdDeleteWithHttpInfo(userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete user settings
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public settingsV1UserUserIdDelete(userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.settingsV1UserUserIdDelete(userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * User settings
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public settingsV1UserUserIdGetWithHttpInfo(userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserSettingSchema>> {
        const result = this.api.settingsV1UserUserIdGetWithHttpInfo(userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * User settings
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public settingsV1UserUserIdGet(userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<UserSettingSchema> {
        const result = this.api.settingsV1UserUserIdGet(userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change user settings
     * @param userId 
     * @param userSettingSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1UserUserIdPatchWithHttpInfo(userId: string, userSettingSchema: UserSettingSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserSettingSchema>> {
        const result = this.api.settingsV1UserUserIdPatchWithHttpInfo(userId, userSettingSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change user settings
     * @param userId 
     * @param userSettingSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1UserUserIdPatch(userId: string, userSettingSchema: UserSettingSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<UserSettingSchema> {
        const result = this.api.settingsV1UserUserIdPatch(userId, userSettingSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change user settings
     * @param userId 
     * @param userSettingSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1UserUserIdPutWithHttpInfo(userId: string, userSettingSchema: UserSettingSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserSettingSchema>> {
        const result = this.api.settingsV1UserUserIdPutWithHttpInfo(userId, userSettingSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Change user settings
     * @param userId 
     * @param userSettingSchema body
     * @param appID 
     * @param authToken 
     */
    public settingsV1UserUserIdPut(userId: string, userSettingSchema: UserSettingSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<UserSettingSchema> {
        const result = this.api.settingsV1UserUserIdPut(userId, userSettingSchema, appID, authToken, _options);
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
     * @param period Period of stats (month or day)
     * @param appID 
     * @param authToken 
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public statsV1AssetsByPeriodGetWithHttpInfo(period: string, appID?: string, authToken?: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<HttpInfo<AssetUsageSchema>> {
        const result = this.api.statsV1AssetsByPeriodGetWithHttpInfo(period, appID, authToken, fromDate, toDate, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns all asset usage
     * @param period Period of stats (month or day)
     * @param appID 
     * @param authToken 
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public statsV1AssetsByPeriodGet(period: string, appID?: string, authToken?: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<AssetUsageSchema> {
        const result = this.api.statsV1AssetsByPeriodGet(period, appID, authToken, fromDate, toDate, _options);
        return result.toPromise();
    }

    /**
     * <br/>system_domain_id will be automatically added when<br/>posting to this end point.
     * Sets asset usage.
     * @param assetUsageSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1AssetsPostWithHttpInfo(assetUsageSchema: AssetUsageSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AssetUsageSchema>> {
        const result = this.api.statsV1AssetsPostWithHttpInfo(assetUsageSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * <br/>system_domain_id will be automatically added when<br/>posting to this end point.
     * Sets asset usage.
     * @param assetUsageSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1AssetsPost(assetUsageSchema: AssetUsageSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AssetUsageSchema> {
        const result = this.api.statsV1AssetsPost(assetUsageSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing receipt
     * @param chargeId 
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingChargesChargeIdReceiptUrlGetWithHttpInfo(chargeId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<BillingReceiptSchema>> {
        const result = this.api.statsV1BillingChargesChargeIdReceiptUrlGetWithHttpInfo(chargeId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing receipt
     * @param chargeId 
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingChargesChargeIdReceiptUrlGet(chargeId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<BillingReceiptSchema> {
        const result = this.api.statsV1BillingChargesChargeIdReceiptUrlGet(chargeId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Add credits to an account
     * @param billingCreditsSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingCreditsPostWithHttpInfo(billingCreditsSchema: BillingCreditsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<BillingCreditsSchema>> {
        const result = this.api.statsV1BillingCreditsPostWithHttpInfo(billingCreditsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Add credits to an account
     * @param billingCreditsSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingCreditsPost(billingCreditsSchema: BillingCreditsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<BillingCreditsSchema> {
        const result = this.api.statsV1BillingCreditsPost(billingCreditsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Checks the total price that needs to be paid including VAT if it\'s needed
     * @param credits 
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingCreditsPriceGetWithHttpInfo(credits: number, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<CreditsSchema>> {
        const result = this.api.statsV1BillingCreditsPriceGetWithHttpInfo(credits, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Checks the total price that needs to be paid including VAT if it\'s needed
     * @param credits 
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingCreditsPriceGet(credits: number, appID?: string, authToken?: string, _options?: Configuration): Promise<CreditsSchema> {
        const result = this.api.statsV1BillingCreditsPriceGet(credits, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Verify status of add credits to an account
     * @param billingCreditsVerifySchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingCreditsVerifyPostWithHttpInfo(billingCreditsVerifySchema: BillingCreditsVerifySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<BillingCreditsVerifySchema>> {
        const result = this.api.statsV1BillingCreditsVerifyPostWithHttpInfo(billingCreditsVerifySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Verify status of add credits to an account
     * @param billingCreditsVerifySchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingCreditsVerifyPost(billingCreditsVerifySchema: BillingCreditsVerifySchema, appID?: string, authToken?: string, _options?: Configuration): Promise<BillingCreditsVerifySchema> {
        const result = this.api.statsV1BillingCreditsVerifyPost(billingCreditsVerifySchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Creates billing customer card
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingCustomerCardDeleteWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.statsV1BillingCustomerCardDeleteWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Creates billing customer card
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingCustomerCardDelete(appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.statsV1BillingCustomerCardDelete(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Creates billing customer card
     * @param billingCustomerCardSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingCustomerCardPostWithHttpInfo(billingCustomerCardSchema: BillingCustomerCardSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<BillingCustomerCardSchema>> {
        const result = this.api.statsV1BillingCustomerCardPostWithHttpInfo(billingCustomerCardSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Creates billing customer card
     * @param billingCustomerCardSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingCustomerCardPost(billingCustomerCardSchema: BillingCustomerCardSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<BillingCustomerCardSchema> {
        const result = this.api.statsV1BillingCustomerCardPost(billingCustomerCardSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing customer
     * @param billingSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingCustomerGetWithHttpInfo(billingSchema: BillingSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<BillingSchema>> {
        const result = this.api.statsV1BillingCustomerGetWithHttpInfo(billingSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing customer
     * @param billingSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingCustomerGet(billingSchema: BillingSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<BillingSchema> {
        const result = this.api.statsV1BillingCustomerGet(billingSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Updates billing customer
     * @param billingCustomerSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingCustomerPostWithHttpInfo(billingCustomerSchema: BillingCustomerSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<BillingCustomerSchema>> {
        const result = this.api.statsV1BillingCustomerPostWithHttpInfo(billingCustomerSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Updates billing customer
     * @param billingCustomerSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingCustomerPost(billingCustomerSchema: BillingCustomerSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<BillingCustomerSchema> {
        const result = this.api.statsV1BillingCustomerPost(billingCustomerSchema, appID, authToken, _options);
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
    public statsV1BillingGetWithHttpInfo(appID?: string, authToken?: string, fromDate?: string, toDate?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<BillingsSchema>> {
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
    public statsV1BillingGet(appID?: string, authToken?: string, fromDate?: string, toDate?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<BillingsSchema> {
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
    public statsV1BillingInvoicesGetWithHttpInfo(appID?: string, authToken?: string, startingAfter?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<void>> {
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
    public statsV1BillingInvoicesGet(appID?: string, authToken?: string, startingAfter?: string, limit?: number, _options?: Configuration): Promise<void> {
        const result = this.api.statsV1BillingInvoicesGet(appID, authToken, startingAfter, limit, _options);
        return result.toPromise();
    }

    /**
     * 
     * Updates Billing (Requires super admin access).
     * @param billingSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingPostWithHttpInfo(billingSchema: BillingSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<BillingSchema>> {
        const result = this.api.statsV1BillingPostWithHttpInfo(billingSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Updates Billing (Requires super admin access).
     * @param billingSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingPost(billingSchema: BillingSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<BillingSchema> {
        const result = this.api.statsV1BillingPost(billingSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get All Price Lists
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingPriceListsGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<PricesSchema>> {
        const result = this.api.statsV1BillingPriceListsGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get All Price Lists
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingPriceListsGet(appID?: string, authToken?: string, _options?: Configuration): Promise<PricesSchema> {
        const result = this.api.statsV1BillingPriceListsGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete a Price list
     * @param name 
     * @param currency 
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingPriceListsNameCurrencyDeleteWithHttpInfo(name: string, currency: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.statsV1BillingPriceListsNameCurrencyDeleteWithHttpInfo(name, currency, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete a Price list
     * @param name 
     * @param currency 
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingPriceListsNameCurrencyDelete(name: string, currency: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.statsV1BillingPriceListsNameCurrencyDelete(name, currency, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get a Price List
     * @param name 
     * @param currency 
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingPriceListsNameCurrencyGetWithHttpInfo(name: string, currency: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<PriceSchema>> {
        const result = this.api.statsV1BillingPriceListsNameCurrencyGetWithHttpInfo(name, currency, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get a Price List
     * @param name 
     * @param currency 
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingPriceListsNameCurrencyGet(name: string, currency: string, appID?: string, authToken?: string, _options?: Configuration): Promise<PriceSchema> {
        const result = this.api.statsV1BillingPriceListsNameCurrencyGet(name, currency, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Creates or updates a Price List
     * @param priceSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingPriceListsPutWithHttpInfo(priceSchema: PriceSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<PriceSchema>> {
        const result = this.api.statsV1BillingPriceListsPutWithHttpInfo(priceSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Creates or updates a Price List
     * @param priceSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingPriceListsPut(priceSchema: PriceSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<PriceSchema> {
        const result = this.api.statsV1BillingPriceListsPut(priceSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Updates Billing Recipients
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingRecipientsGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<BillingRecipientsSchema>> {
        const result = this.api.statsV1BillingRecipientsGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Updates Billing Recipients
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingRecipientsGet(appID?: string, authToken?: string, _options?: Configuration): Promise<BillingRecipientsSchema> {
        const result = this.api.statsV1BillingRecipientsGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Updates Billing Recipients
     * @param billingRecipientsSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingRecipientsPutWithHttpInfo(billingRecipientsSchema: BillingRecipientsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<BillingRecipientsSchema>> {
        const result = this.api.statsV1BillingRecipientsPutWithHttpInfo(billingRecipientsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Updates Billing Recipients
     * @param billingRecipientsSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingRecipientsPut(billingRecipientsSchema: BillingRecipientsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<BillingRecipientsSchema> {
        const result = this.api.statsV1BillingRecipientsPut(billingRecipientsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Updates Billing Settings
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingSettingsGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<BillingSettingsSchema>> {
        const result = this.api.statsV1BillingSettingsGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Updates Billing Settings
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingSettingsGet(appID?: string, authToken?: string, _options?: Configuration): Promise<BillingSettingsSchema> {
        const result = this.api.statsV1BillingSettingsGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Updates Billing Settings
     * @param billingSettingsSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingSettingsPutWithHttpInfo(billingSettingsSchema: BillingSettingsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<BillingSettingsSchema>> {
        const result = this.api.statsV1BillingSettingsPutWithHttpInfo(billingSettingsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_billing 
     * Updates Billing Settings
     * @param billingSettingsSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingSettingsPut(billingSettingsSchema: BillingSettingsSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<BillingSettingsSchema> {
        const result = this.api.statsV1BillingSettingsPut(billingSettingsSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing status
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingStatusGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<BillingStatsSchema>> {
        const result = this.api.statsV1BillingStatusGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing status
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingStatusGet(appID?: string, authToken?: string, _options?: Configuration): Promise<BillingStatsSchema> {
        const result = this.api.statsV1BillingStatusGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete billing record (Requires super admin access).
     * @param systemDomainId 
     * @param billingId 
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingSystemDomainIdBillingIdDeleteWithHttpInfo(systemDomainId: string, billingId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.statsV1BillingSystemDomainIdBillingIdDeleteWithHttpInfo(systemDomainId, billingId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete billing record (Requires super admin access).
     * @param systemDomainId 
     * @param billingId 
     * @param appID 
     * @param authToken 
     */
    public statsV1BillingSystemDomainIdBillingIdDelete(systemDomainId: string, billingId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.statsV1BillingSystemDomainIdBillingIdDelete(systemDomainId, billingId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns all collection usage
     * @param period Period of stats (month or day)
     * @param appID 
     * @param authToken 
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public statsV1CollectionsByPeriodGetWithHttpInfo(period: string, appID?: string, authToken?: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<HttpInfo<CollectionUsageSchema>> {
        const result = this.api.statsV1CollectionsByPeriodGetWithHttpInfo(period, appID, authToken, fromDate, toDate, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns all collection usage
     * @param period Period of stats (month or day)
     * @param appID 
     * @param authToken 
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public statsV1CollectionsByPeriodGet(period: string, appID?: string, authToken?: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<CollectionUsageSchema> {
        const result = this.api.statsV1CollectionsByPeriodGet(period, appID, authToken, fromDate, toDate, _options);
        return result.toPromise();
    }

    /**
     * 
     * Internal endpoint to convert ID to system domain
     * @param objectId Object ID
     * @param appID 
     * @param authToken 
     */
    public statsV1IdObjectIdInfoGetWithHttpInfo(objectId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.statsV1IdObjectIdInfoGetWithHttpInfo(objectId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Internal endpoint to convert ID to system domain
     * @param objectId Object ID
     * @param appID 
     * @param authToken 
     */
    public statsV1IdObjectIdInfoGet(objectId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.statsV1IdObjectIdInfoGet(objectId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing customer
     * @param appID 
     * @param authToken 
     */
    public statsV1OrdwayBillingCustomerGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<BillingSchema>> {
        const result = this.api.statsV1OrdwayBillingCustomerGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing customer
     * @param appID 
     * @param authToken 
     */
    public statsV1OrdwayBillingCustomerGet(appID?: string, authToken?: string, _options?: Configuration): Promise<BillingSchema> {
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
    public statsV1OrdwayBillingGetWithHttpInfo(appID?: string, authToken?: string, fromDate?: string, toDate?: string, perPage?: number, page?: number, _options?: Configuration): Promise<HttpInfo<BillingsSchema>> {
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
    public statsV1OrdwayBillingGet(appID?: string, authToken?: string, fromDate?: string, toDate?: string, perPage?: number, page?: number, _options?: Configuration): Promise<BillingsSchema> {
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
    public statsV1OrdwayBillingInvoicesGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, page?: number, _options?: Configuration): Promise<HttpInfo<void>> {
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
    public statsV1OrdwayBillingInvoicesGet(appID?: string, authToken?: string, perPage?: number, page?: number, _options?: Configuration): Promise<void> {
        const result = this.api.statsV1OrdwayBillingInvoicesGet(appID, authToken, perPage, page, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns storage_access for all storages
     * @param period Period of stats (month or day)
     * @param appID 
     * @param authToken 
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public statsV1StorageAccessByPeriodGetWithHttpInfo(period: string, appID?: string, authToken?: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<HttpInfo<StorageAccessesSchema>> {
        const result = this.api.statsV1StorageAccessByPeriodGetWithHttpInfo(period, appID, authToken, fromDate, toDate, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns storage_access for all storages
     * @param period Period of stats (month or day)
     * @param appID 
     * @param authToken 
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public statsV1StorageAccessByPeriodGet(period: string, appID?: string, authToken?: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<StorageAccessesSchema> {
        const result = this.api.statsV1StorageAccessByPeriodGet(period, appID, authToken, fromDate, toDate, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns storage_usage for all storages
     * @param period Period of stats (month or day)
     * @param appID 
     * @param authToken 
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public statsV1StorageUsageByPeriodGetWithHttpInfo(period: string, appID?: string, authToken?: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<HttpInfo<StorageUsagesSchema>> {
        const result = this.api.statsV1StorageUsageByPeriodGetWithHttpInfo(period, appID, authToken, fromDate, toDate, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns storage_usage for all storages
     * @param period Period of stats (month or day)
     * @param appID 
     * @param authToken 
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public statsV1StorageUsageByPeriodGet(period: string, appID?: string, authToken?: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<StorageUsagesSchema> {
        const result = this.api.statsV1StorageUsageByPeriodGet(period, appID, authToken, fromDate, toDate, _options);
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
    public statsV1SystemLogsRecipientsGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<LogsRecipientsSchema>> {
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
    public statsV1SystemLogsRecipientsGet(appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<LogsRecipientsSchema> {
        const result = this.api.statsV1SystemLogsRecipientsGet(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_logs_recipients 
     * Delete logs recipient settings
     * @param logsRecipientId 
     * @param appID 
     * @param authToken 
     */
    public statsV1SystemLogsRecipientsLogsRecipientIdDeleteWithHttpInfo(logsRecipientId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.statsV1SystemLogsRecipientsLogsRecipientIdDeleteWithHttpInfo(logsRecipientId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_logs_recipients 
     * Delete logs recipient settings
     * @param logsRecipientId 
     * @param appID 
     * @param authToken 
     */
    public statsV1SystemLogsRecipientsLogsRecipientIdDelete(logsRecipientId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.statsV1SystemLogsRecipientsLogsRecipientIdDelete(logsRecipientId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_logs_recipients 
     * Get settings of a logs recipient
     * @param logsRecipientId 
     * @param appID 
     * @param authToken 
     */
    public statsV1SystemLogsRecipientsLogsRecipientIdGetWithHttpInfo(logsRecipientId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<LogsRecipientReadSchema>> {
        const result = this.api.statsV1SystemLogsRecipientsLogsRecipientIdGetWithHttpInfo(logsRecipientId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_logs_recipients 
     * Get settings of a logs recipient
     * @param logsRecipientId 
     * @param appID 
     * @param authToken 
     */
    public statsV1SystemLogsRecipientsLogsRecipientIdGet(logsRecipientId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<LogsRecipientReadSchema> {
        const result = this.api.statsV1SystemLogsRecipientsLogsRecipientIdGet(logsRecipientId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_logs_recipients 
     * Change logs recipient settings
     * @param logsRecipientId 
     * @param logsRecipientSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1SystemLogsRecipientsLogsRecipientIdPatchWithHttpInfo(logsRecipientId: string, logsRecipientSchema: LogsRecipientSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<LogsRecipientReadSchema>> {
        const result = this.api.statsV1SystemLogsRecipientsLogsRecipientIdPatchWithHttpInfo(logsRecipientId, logsRecipientSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_logs_recipients 
     * Change logs recipient settings
     * @param logsRecipientId 
     * @param logsRecipientSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1SystemLogsRecipientsLogsRecipientIdPatch(logsRecipientId: string, logsRecipientSchema: LogsRecipientSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<LogsRecipientReadSchema> {
        const result = this.api.statsV1SystemLogsRecipientsLogsRecipientIdPatch(logsRecipientId, logsRecipientSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_logs_recipients 
     * Test logs recipient connection
     * @param logsRecipientId 
     * @param appID 
     * @param authToken 
     */
    public statsV1SystemLogsRecipientsLogsRecipientIdPostWithHttpInfo(logsRecipientId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<StatsV1SystemLogsRecipientsLogsRecipientIdPost200Response>> {
        const result = this.api.statsV1SystemLogsRecipientsLogsRecipientIdPostWithHttpInfo(logsRecipientId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_logs_recipients 
     * Test logs recipient connection
     * @param logsRecipientId 
     * @param appID 
     * @param authToken 
     */
    public statsV1SystemLogsRecipientsLogsRecipientIdPost(logsRecipientId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<StatsV1SystemLogsRecipientsLogsRecipientIdPost200Response> {
        const result = this.api.statsV1SystemLogsRecipientsLogsRecipientIdPost(logsRecipientId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_logs_recipients 
     * Change logs recipient settings
     * @param logsRecipientId 
     * @param logsRecipientSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1SystemLogsRecipientsLogsRecipientIdPutWithHttpInfo(logsRecipientId: string, logsRecipientSchema: LogsRecipientSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<LogsRecipientReadSchema>> {
        const result = this.api.statsV1SystemLogsRecipientsLogsRecipientIdPutWithHttpInfo(logsRecipientId, logsRecipientSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_logs_recipients 
     * Change logs recipient settings
     * @param logsRecipientId 
     * @param logsRecipientSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1SystemLogsRecipientsLogsRecipientIdPut(logsRecipientId: string, logsRecipientSchema: LogsRecipientSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<LogsRecipientReadSchema> {
        const result = this.api.statsV1SystemLogsRecipientsLogsRecipientIdPut(logsRecipientId, logsRecipientSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_logs_recipients 
     * Create logs recipient settings
     * @param logsRecipientSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1SystemLogsRecipientsPostWithHttpInfo(logsRecipientSchema: LogsRecipientSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<LogsRecipientReadSchema>> {
        const result = this.api.statsV1SystemLogsRecipientsPostWithHttpInfo(logsRecipientSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_logs_recipients 
     * Create logs recipient settings
     * @param logsRecipientSchema body
     * @param appID 
     * @param authToken 
     */
    public statsV1SystemLogsRecipientsPost(logsRecipientSchema: LogsRecipientSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<LogsRecipientReadSchema> {
        const result = this.api.statsV1SystemLogsRecipientsPost(logsRecipientSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns transcoder_usage for all transcoders
     * @param period 
     * @param appID 
     * @param authToken 
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public statsV1TranscoderUsageByPeriodGetWithHttpInfo(period: string, appID?: string, authToken?: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<HttpInfo<TranscoderUsagesSchema>> {
        const result = this.api.statsV1TranscoderUsageByPeriodGetWithHttpInfo(period, appID, authToken, fromDate, toDate, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns transcoder_usage for all transcoders
     * @param period 
     * @param appID 
     * @param authToken 
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public statsV1TranscoderUsageByPeriodGet(period: string, appID?: string, authToken?: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<TranscoderUsagesSchema> {
        const result = this.api.statsV1TranscoderUsageByPeriodGet(period, appID, authToken, fromDate, toDate, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns all audit
     * @param period Period of stats (month, day or day_detailed)
     * @param appID 
     * @param authToken 
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     * @param systemDomainId Filter by system_domain_id (Only for super admins)
     */
    public statsV1UserAuditByPeriodGetWithHttpInfo(period: string, appID?: string, authToken?: string, fromDate?: string, toDate?: string, systemDomainId?: string, _options?: Configuration): Promise<HttpInfo<UserUsagesSchema>> {
        const result = this.api.statsV1UserAuditByPeriodGetWithHttpInfo(period, appID, authToken, fromDate, toDate, systemDomainId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns all audit
     * @param period Period of stats (month, day or day_detailed)
     * @param appID 
     * @param authToken 
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     * @param systemDomainId Filter by system_domain_id (Only for super admins)
     */
    public statsV1UserAuditByPeriodGet(period: string, appID?: string, authToken?: string, fromDate?: string, toDate?: string, systemDomainId?: string, _options?: Configuration): Promise<UserUsagesSchema> {
        const result = this.api.statsV1UserAuditByPeriodGet(period, appID, authToken, fromDate, toDate, systemDomainId, _options);
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
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param analyzeSchema body
     */
    public transcodeV1AnalyzeAssetsAssetIdPostWithHttpInfo(assetId: string, appID?: string, authToken?: string, analyzeSchema?: AnalyzeSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1AnalyzeAssetsAssetIdPostWithHttpInfo(assetId, appID, authToken, analyzeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_analyze_content 
     * Start a job that sends an asset for analysis
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param analyzeSchema body
     */
    public transcodeV1AnalyzeAssetsAssetIdPost(assetId: string, appID?: string, authToken?: string, analyzeSchema?: AnalyzeSchema, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1AnalyzeAssetsAssetIdPost(assetId, appID, authToken, analyzeSchema, _options);
        return result.toPromise();
    }

    /**
     * with a default analysis profile of specified media typewith a default analysis profile of specified media type Required roles:  - can_analyze_content 
     * Start a job that sends an asset for analysis
     * @param assetId 
     * @param mediaType 
     * @param appID 
     * @param authToken 
     * @param analyzeSchema body
     */
    public transcodeV1AnalyzeAssetsAssetIdProfilesDefaultMediaTypePostWithHttpInfo(assetId: string, mediaType: string, appID?: string, authToken?: string, analyzeSchema?: AnalyzeSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1AnalyzeAssetsAssetIdProfilesDefaultMediaTypePostWithHttpInfo(assetId, mediaType, appID, authToken, analyzeSchema, _options);
        return result.toPromise();
    }

    /**
     * with a default analysis profile of specified media typewith a default analysis profile of specified media type Required roles:  - can_analyze_content 
     * Start a job that sends an asset for analysis
     * @param assetId 
     * @param mediaType 
     * @param appID 
     * @param authToken 
     * @param analyzeSchema body
     */
    public transcodeV1AnalyzeAssetsAssetIdProfilesDefaultMediaTypePost(assetId: string, mediaType: string, appID?: string, authToken?: string, analyzeSchema?: AnalyzeSchema, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1AnalyzeAssetsAssetIdProfilesDefaultMediaTypePost(assetId, mediaType, appID, authToken, analyzeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_analyze_content 
     * Start a job that sends an asset for analysis with a default analysis profile
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param analyzeSchema body
     */
    public transcodeV1AnalyzeAssetsAssetIdProfilesDefaultPostWithHttpInfo(assetId: string, appID?: string, authToken?: string, analyzeSchema?: AnalyzeSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1AnalyzeAssetsAssetIdProfilesDefaultPostWithHttpInfo(assetId, appID, authToken, analyzeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_analyze_content 
     * Start a job that sends an asset for analysis with a default analysis profile
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param analyzeSchema body
     */
    public transcodeV1AnalyzeAssetsAssetIdProfilesDefaultPost(assetId: string, appID?: string, authToken?: string, analyzeSchema?: AnalyzeSchema, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1AnalyzeAssetsAssetIdProfilesDefaultPost(assetId, appID, authToken, analyzeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_analyze_content 
     * Start a job that sends an asset for analysis with a custom analysis profile
     * @param assetId 
     * @param profileId 
     * @param appID 
     * @param authToken 
     * @param analyzeSchema body
     */
    public transcodeV1AnalyzeAssetsAssetIdProfilesProfileIdPostWithHttpInfo(assetId: string, profileId: string, appID?: string, authToken?: string, analyzeSchema?: AnalyzeSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1AnalyzeAssetsAssetIdProfilesProfileIdPostWithHttpInfo(assetId, profileId, appID, authToken, analyzeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_analyze_content 
     * Start a job that sends an asset for analysis with a custom analysis profile
     * @param assetId 
     * @param profileId 
     * @param appID 
     * @param authToken 
     * @param analyzeSchema body
     */
    public transcodeV1AnalyzeAssetsAssetIdProfilesProfileIdPost(assetId: string, profileId: string, appID?: string, authToken?: string, analyzeSchema?: AnalyzeSchema, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1AnalyzeAssetsAssetIdProfilesProfileIdPost(assetId, profileId, appID, authToken, analyzeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_analyze_content 
     * Start a job that sends objects for analysis using a custom analysis profile
     * @param appID 
     * @param authToken 
     * @param bulkAnalyzeSchema body
     */
    public transcodeV1AnalyzeBulkPostWithHttpInfo(appID?: string, authToken?: string, bulkAnalyzeSchema?: BulkAnalyzeSchema, _options?: Configuration): Promise<HttpInfo<void>> {
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
    public transcodeV1AnalyzeBulkPost(appID?: string, authToken?: string, bulkAnalyzeSchema?: BulkAnalyzeSchema, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1AnalyzeBulkPost(appID, authToken, bulkAnalyzeSchema, _options);
        return result.toPromise();
    }

    /**
     * 
     * Gets metadata info from the link
     * @param assetLinkURLSchema body
     * @param appID 
     * @param authToken 
     */
    public transcodeV1AssetsLinkMetadataPostWithHttpInfo(assetLinkURLSchema: AssetLinkURLSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<AssetLinkData>> {
        const result = this.api.transcodeV1AssetsLinkMetadataPostWithHttpInfo(assetLinkURLSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Gets metadata info from the link
     * @param assetLinkURLSchema body
     * @param appID 
     * @param authToken 
     */
    public transcodeV1AssetsLinkMetadataPost(assetLinkURLSchema: AssetLinkURLSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<AssetLinkData> {
        const result = this.api.transcodeV1AssetsLinkMetadataPost(assetLinkURLSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Acknowledge an edge transcode job
     * @param jobId 
     * @param appID 
     * @param authToken 
     */
    public transcodeV1EdgeTranscodeJobsJobIdAcknowledgePostWithHttpInfo(jobId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1EdgeTranscodeJobsJobIdAcknowledgePostWithHttpInfo(jobId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Acknowledge an edge transcode job
     * @param jobId 
     * @param appID 
     * @param authToken 
     */
    public transcodeV1EdgeTranscodeJobsJobIdAcknowledgePost(jobId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1EdgeTranscodeJobsJobIdAcknowledgePost(jobId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_read_transcoders 
     * Get edge transcode workers
     * @param appID 
     * @param authToken 
     */
    public transcodeV1EdgeTranscodeWorkersGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<EdgeTranscodeWorkersSchema>> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_read_transcoders 
     * Get edge transcode workers
     * @param appID 
     * @param authToken 
     */
    public transcodeV1EdgeTranscodeWorkersGet(appID?: string, authToken?: string, _options?: Configuration): Promise<EdgeTranscodeWorkersSchema> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_write_transcoders 
     * Create a new edge transcode worker
     * @param edgeTranscodeWorkerSchema body
     * @param appID 
     * @param authToken 
     */
    public transcodeV1EdgeTranscodeWorkersPostWithHttpInfo(edgeTranscodeWorkerSchema: EdgeTranscodeWorkerSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<EdgeTranscodeWorkerSchema>> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersPostWithHttpInfo(edgeTranscodeWorkerSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_write_transcoders 
     * Create a new edge transcode worker
     * @param edgeTranscodeWorkerSchema body
     * @param appID 
     * @param authToken 
     */
    public transcodeV1EdgeTranscodeWorkersPost(edgeTranscodeWorkerSchema: EdgeTranscodeWorkerSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<EdgeTranscodeWorkerSchema> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersPost(edgeTranscodeWorkerSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_write_transcoders 
     * Delete a edge transcode worker
     * @param workerId 
     * @param appID 
     * @param authToken 
     */
    public transcodeV1EdgeTranscodeWorkersWorkerIdDeleteWithHttpInfo(workerId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersWorkerIdDeleteWithHttpInfo(workerId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_write_transcoders 
     * Delete a edge transcode worker
     * @param workerId 
     * @param appID 
     * @param authToken 
     */
    public transcodeV1EdgeTranscodeWorkersWorkerIdDelete(workerId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersWorkerIdDelete(workerId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_read_transcoders 
     * Get a edge transcode worker
     * @param workerId 
     * @param appID 
     * @param authToken 
     */
    public transcodeV1EdgeTranscodeWorkersWorkerIdGetWithHttpInfo(workerId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<EdgeTranscodeWorkerSchema>> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersWorkerIdGetWithHttpInfo(workerId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_read_transcoders 
     * Get a edge transcode worker
     * @param workerId 
     * @param appID 
     * @param authToken 
     */
    public transcodeV1EdgeTranscodeWorkersWorkerIdGet(workerId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<EdgeTranscodeWorkerSchema> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersWorkerIdGet(workerId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_write_transcoders 
     * Update a edge transcode worker
     * @param workerId 
     * @param edgeTranscodeWorkerSchema body
     * @param appID 
     * @param authToken 
     */
    public transcodeV1EdgeTranscodeWorkersWorkerIdPatchWithHttpInfo(workerId: string, edgeTranscodeWorkerSchema: EdgeTranscodeWorkerSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<EdgeTranscodeWorkerSchema>> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersWorkerIdPatchWithHttpInfo(workerId, edgeTranscodeWorkerSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_write_transcoders 
     * Update a edge transcode worker
     * @param workerId 
     * @param edgeTranscodeWorkerSchema body
     * @param appID 
     * @param authToken 
     */
    public transcodeV1EdgeTranscodeWorkersWorkerIdPatch(workerId: string, edgeTranscodeWorkerSchema: EdgeTranscodeWorkerSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<EdgeTranscodeWorkerSchema> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersWorkerIdPatch(workerId, edgeTranscodeWorkerSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_write_transcoders 
     * Update a edge transcode worker
     * @param workerId 
     * @param edgeTranscodeWorkerSchema body
     * @param appID 
     * @param authToken 
     */
    public transcodeV1EdgeTranscodeWorkersWorkerIdPutWithHttpInfo(workerId: string, edgeTranscodeWorkerSchema: EdgeTranscodeWorkerSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<EdgeTranscodeWorkerSchema>> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersWorkerIdPutWithHttpInfo(workerId, edgeTranscodeWorkerSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - is_storage_worker - can_write_transcoders 
     * Update a edge transcode worker
     * @param workerId 
     * @param edgeTranscodeWorkerSchema body
     * @param appID 
     * @param authToken 
     */
    public transcodeV1EdgeTranscodeWorkersWorkerIdPut(workerId: string, edgeTranscodeWorkerSchema: EdgeTranscodeWorkerSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<EdgeTranscodeWorkerSchema> {
        const result = this.api.transcodeV1EdgeTranscodeWorkersWorkerIdPut(workerId, edgeTranscodeWorkerSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcode_jobs 
     * Start a job that creates a collection keyframe
     * @param collectionId 
     * @param appID 
     * @param authToken 
     * @param generateCollectionKeyframeSchema body
     */
    public transcodeV1KeyframesCollectionsCollectionIdPostWithHttpInfo(collectionId: string, appID?: string, authToken?: string, generateCollectionKeyframeSchema?: GenerateCollectionKeyframeSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1KeyframesCollectionsCollectionIdPostWithHttpInfo(collectionId, appID, authToken, generateCollectionKeyframeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcode_jobs 
     * Start a job that creates a collection keyframe
     * @param collectionId 
     * @param appID 
     * @param authToken 
     * @param generateCollectionKeyframeSchema body
     */
    public transcodeV1KeyframesCollectionsCollectionIdPost(collectionId: string, appID?: string, authToken?: string, generateCollectionKeyframeSchema?: GenerateCollectionKeyframeSchema, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1KeyframesCollectionsCollectionIdPost(collectionId, appID, authToken, generateCollectionKeyframeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_transcode_jobs 
     * Cancel all transcode jobs linked to the storage
     * @param storageId 
     * @param appID 
     * @param authToken 
     * @param abortStorageTranscodeJobsSchema body
     */
    public transcodeV1StoragesStorageIdDeleteWithHttpInfo(storageId: string, appID?: string, authToken?: string, abortStorageTranscodeJobsSchema?: AbortStorageTranscodeJobsSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1StoragesStorageIdDeleteWithHttpInfo(storageId, appID, authToken, abortStorageTranscodeJobsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_transcode_jobs 
     * Cancel all transcode jobs linked to the storage
     * @param storageId 
     * @param appID 
     * @param authToken 
     * @param abortStorageTranscodeJobsSchema body
     */
    public transcodeV1StoragesStorageIdDelete(storageId: string, appID?: string, authToken?: string, abortStorageTranscodeJobsSchema?: AbortStorageTranscodeJobsSchema, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1StoragesStorageIdDelete(storageId, appID, authToken, abortStorageTranscodeJobsSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Get a edge transcode jobs from the job queue
     * @param storageId 
     * @param appID 
     * @param authToken 
     * @param limit The max number of items to fetch
     */
    public transcodeV1StoragesStorageIdEdgeTranscodeJobsGetWithHttpInfo(storageId: string, appID?: string, authToken?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<EdgeTranscodeJobsSchema>> {
        const result = this.api.transcodeV1StoragesStorageIdEdgeTranscodeJobsGetWithHttpInfo(storageId, appID, authToken, limit, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Get a edge transcode jobs from the job queue
     * @param storageId 
     * @param appID 
     * @param authToken 
     * @param limit The max number of items to fetch
     */
    public transcodeV1StoragesStorageIdEdgeTranscodeJobsGet(storageId: string, appID?: string, authToken?: string, limit?: number, _options?: Configuration): Promise<EdgeTranscodeJobsSchema> {
        const result = this.api.transcodeV1StoragesStorageIdEdgeTranscodeJobsGet(storageId, appID, authToken, limit, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Delete local storage transcode job.
     * @param storageId 
     * @param fileId 
     * @param authToken 
     * @param appID 
     */
    public transcodeV1StoragesStorageIdFilesFileIdTranscodeDeleteWithHttpInfo(storageId: string, fileId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1StoragesStorageIdFilesFileIdTranscodeDeleteWithHttpInfo(storageId, fileId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Delete local storage transcode job.
     * @param storageId 
     * @param fileId 
     * @param authToken 
     * @param appID 
     */
    public transcodeV1StoragesStorageIdFilesFileIdTranscodeDelete(storageId: string, fileId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1StoragesStorageIdFilesFileIdTranscodeDelete(storageId, fileId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Get pending local storage transcode jobs.
     * @param storageId 
     * @param authToken 
     * @param appID 
     * @param perPage The number of items for each page
     * @param lastId ID of a last transcode job entity on previous page
     */
    public transcodeV1StoragesStorageIdTranscodeGetWithHttpInfo(storageId: string, authToken?: string, appID?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<LocalStorageFileTranscodeJobsSchema>> {
        const result = this.api.transcodeV1StoragesStorageIdTranscodeGetWithHttpInfo(storageId, authToken, appID, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Get pending local storage transcode jobs.
     * @param storageId 
     * @param authToken 
     * @param appID 
     * @param perPage The number of items for each page
     * @param lastId ID of a last transcode job entity on previous page
     */
    public transcodeV1StoragesStorageIdTranscodeGet(storageId: string, authToken?: string, appID?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<LocalStorageFileTranscodeJobsSchema> {
        const result = this.api.transcodeV1StoragesStorageIdTranscodeGet(storageId, authToken, appID, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Delete local storage transcode job.
     * @param storageId 
     * @param recordId 
     * @param authToken 
     * @param appID 
     */
    public transcodeV1StoragesStorageIdTranscodeRecordIdDeleteWithHttpInfo(storageId: string, recordId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1StoragesStorageIdTranscodeRecordIdDeleteWithHttpInfo(storageId, recordId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Delete local storage transcode job.
     * @param storageId 
     * @param recordId 
     * @param authToken 
     * @param appID 
     */
    public transcodeV1StoragesStorageIdTranscodeRecordIdDelete(storageId: string, recordId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1StoragesStorageIdTranscodeRecordIdDelete(storageId, recordId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Get local storage transcode job.
     * @param storageId 
     * @param recordId 
     * @param authToken 
     * @param appID 
     */
    public transcodeV1StoragesStorageIdTranscodeRecordIdGetWithHttpInfo(storageId: string, recordId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<LocalStorageFileTranscodeJobSchema>> {
        const result = this.api.transcodeV1StoragesStorageIdTranscodeRecordIdGetWithHttpInfo(storageId, recordId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Get local storage transcode job.
     * @param storageId 
     * @param recordId 
     * @param authToken 
     * @param appID 
     */
    public transcodeV1StoragesStorageIdTranscodeRecordIdGet(storageId: string, recordId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<LocalStorageFileTranscodeJobSchema> {
        const result = this.api.transcodeV1StoragesStorageIdTranscodeRecordIdGet(storageId, recordId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Returns list of transcode queue records by object_id
     * @param objectType 
     * @param objectId 
     * @param authToken 
     * @param appID 
     */
    public transcodeV1TranscodeObjectTypeObjectIdGetWithHttpInfo(objectType: string, objectId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<TranscodeESQueueRecordsSchema>> {
        const result = this.api.transcodeV1TranscodeObjectTypeObjectIdGetWithHttpInfo(objectType, objectId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Returns list of transcode queue records by object_id
     * @param objectType 
     * @param objectId 
     * @param authToken 
     * @param appID 
     */
    public transcodeV1TranscodeObjectTypeObjectIdGet(objectType: string, objectId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<TranscodeESQueueRecordsSchema> {
        const result = this.api.transcodeV1TranscodeObjectTypeObjectIdGet(objectType, objectId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Returns list of transcode queue records by version_id
     * @param objectType 
     * @param objectId 
     * @param versionId 
     * @param authToken 
     * @param appID 
     */
    public transcodeV1TranscodeObjectTypeObjectIdVersionsVersionIdGetWithHttpInfo(objectType: string, objectId: string, versionId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<HttpInfo<TranscodeESQueueRecordsSchema>> {
        const result = this.api.transcodeV1TranscodeObjectTypeObjectIdVersionsVersionIdGetWithHttpInfo(objectType, objectId, versionId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Returns list of transcode queue records by version_id
     * @param objectType 
     * @param objectId 
     * @param versionId 
     * @param authToken 
     * @param appID 
     */
    public transcodeV1TranscodeObjectTypeObjectIdVersionsVersionIdGet(objectType: string, objectId: string, versionId: string, authToken?: string, appID?: string, _options?: Configuration): Promise<TranscodeESQueueRecordsSchema> {
        const result = this.api.transcodeV1TranscodeObjectTypeObjectIdVersionsVersionIdGet(objectType, objectId, versionId, authToken, appID, _options);
        return result.toPromise();
    }

    /**
     * Use /API/files/v1/assets/ID/files/ID/keyframes insteadUse /API/files/v1/assets/ID/files/ID/keyframes instead Required roles:  - can_write_transcode_jobs 
     * Starts a new transcode.
     * @param jobSchema1 body
     * @param appID 
     * @param authToken 
     */
    public transcodeV1TranscodePostWithHttpInfo(jobSchema1: JobSchema1, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<JobSchema1>> {
        const result = this.api.transcodeV1TranscodePostWithHttpInfo(jobSchema1, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * Use /API/files/v1/assets/ID/files/ID/keyframes insteadUse /API/files/v1/assets/ID/files/ID/keyframes instead Required roles:  - can_write_transcode_jobs 
     * Starts a new transcode.
     * @param jobSchema1 body
     * @param appID 
     * @param authToken 
     */
    public transcodeV1TranscodePost(jobSchema1: JobSchema1, appID?: string, authToken?: string, _options?: Configuration): Promise<JobSchema1> {
        const result = this.api.transcodeV1TranscodePost(jobSchema1, appID, authToken, _options);
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
    public transcodeV1TranscodeQueueGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, page?: number, sort?: string, _options?: Configuration): Promise<HttpInfo<TranscodeQueueSchema>> {
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
    public transcodeV1TranscodeQueueGet(appID?: string, authToken?: string, perPage?: number, page?: number, sort?: string, _options?: Configuration): Promise<TranscodeQueueSchema> {
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
    public transcodeV1TranscodeQueueSystemGetWithHttpInfo(appID?: string, authToken?: string, perDomainId?: boolean, perPage?: number, page?: number, sort?: string, _options?: Configuration): Promise<HttpInfo<TranscodeQueueSchema>> {
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
    public transcodeV1TranscodeQueueSystemGet(appID?: string, authToken?: string, perDomainId?: boolean, perPage?: number, page?: number, sort?: string, _options?: Configuration): Promise<TranscodeQueueSchema> {
        const result = this.api.transcodeV1TranscodeQueueSystemGet(appID, authToken, perDomainId, perPage, page, sort, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_transcode_jobs 
     * Cancel a particular transcode job by id
     * @param transcodeJobId 
     * @param appID 
     * @param authToken 
     */
    public transcodeV1TranscodeTranscodeJobIdDeleteWithHttpInfo(transcodeJobId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1TranscodeTranscodeJobIdDeleteWithHttpInfo(transcodeJobId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_transcode_jobs 
     * Cancel a particular transcode job by id
     * @param transcodeJobId 
     * @param appID 
     * @param authToken 
     */
    public transcodeV1TranscodeTranscodeJobIdDelete(transcodeJobId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1TranscodeTranscodeJobIdDelete(transcodeJobId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Get transcode job
     * @param transcodeJobId 
     * @param appID 
     * @param authToken 
     */
    public transcodeV1TranscodeTranscodeJobIdGetWithHttpInfo(transcodeJobId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<JobSchema1>> {
        const result = this.api.transcodeV1TranscodeTranscodeJobIdGetWithHttpInfo(transcodeJobId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_transcode_jobs 
     * Get transcode job
     * @param transcodeJobId 
     * @param appID 
     * @param authToken 
     */
    public transcodeV1TranscodeTranscodeJobIdGet(transcodeJobId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<JobSchema1> {
        const result = this.api.transcodeV1TranscodeTranscodeJobIdGet(transcodeJobId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcode_jobs 
     * Move transcode job to top or bottom of the queue
     * @param transcodeJobId 
     * @param position move transcode job to \&quot;top\&quot; or \&quot;bottom\&quot; position
     * @param appID 
     * @param authToken 
     */
    public transcodeV1TranscodeTranscodeJobIdPositionPositionPostWithHttpInfo(transcodeJobId: string, position: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1TranscodeTranscodeJobIdPositionPositionPostWithHttpInfo(transcodeJobId, position, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcode_jobs 
     * Move transcode job to top or bottom of the queue
     * @param transcodeJobId 
     * @param position move transcode job to \&quot;top\&quot; or \&quot;bottom\&quot; position
     * @param appID 
     * @param authToken 
     */
    public transcodeV1TranscodeTranscodeJobIdPositionPositionPost(transcodeJobId: string, position: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1TranscodeTranscodeJobIdPositionPositionPost(transcodeJobId, position, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcode_jobs 
     * Change transcode job priority
     * @param transcodeJobId 
     * @param priority 
     * @param appID 
     * @param authToken 
     */
    public transcodeV1TranscodeTranscodeJobIdPriorityPriorityPutWithHttpInfo(transcodeJobId: string, priority: number, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1TranscodeTranscodeJobIdPriorityPriorityPutWithHttpInfo(transcodeJobId, priority, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_transcode_jobs 
     * Change transcode job priority
     * @param transcodeJobId 
     * @param priority 
     * @param appID 
     * @param authToken 
     */
    public transcodeV1TranscodeTranscodeJobIdPriorityPriorityPut(transcodeJobId: string, priority: number, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1TranscodeTranscodeJobIdPriorityPriorityPut(transcodeJobId, priority, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_transcribe_content 
     * Start a job that sends an asset to default transcription service
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param transcribeSchema body
     */
    public transcodeV1TranscribeAssetsAssetIdProfilesDefaultPostWithHttpInfo(assetId: string, appID?: string, authToken?: string, transcribeSchema?: TranscribeSchema, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1TranscribeAssetsAssetIdProfilesDefaultPostWithHttpInfo(assetId, appID, authToken, transcribeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_transcribe_content 
     * Start a job that sends an asset to default transcription service
     * @param assetId 
     * @param appID 
     * @param authToken 
     * @param transcribeSchema body
     */
    public transcodeV1TranscribeAssetsAssetIdProfilesDefaultPost(assetId: string, appID?: string, authToken?: string, transcribeSchema?: TranscribeSchema, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1TranscribeAssetsAssetIdProfilesDefaultPost(assetId, appID, authToken, transcribeSchema, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_transcribe_content 
     * Start a job that sends multiple objects to transcription service
     * @param bulkTranscribeSchema body
     * @param appID 
     * @param authToken 
     */
    public transcodeV1TranscribeBulkPostWithHttpInfo(bulkTranscribeSchema: BulkTranscribeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.transcodeV1TranscribeBulkPostWithHttpInfo(bulkTranscribeSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_transcribe_content 
     * Start a job that sends multiple objects to transcription service
     * @param bulkTranscribeSchema body
     * @param appID 
     * @param authToken 
     */
    public transcodeV1TranscribeBulkPost(bulkTranscribeSchema: BulkTranscribeSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.transcodeV1TranscribeBulkPost(bulkTranscribeSchema, appID, authToken, _options);
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
    public usersV1GroupsBasicGetWithHttpInfo(appID?: string, authToken?: string, page?: number, perPage?: number, sort?: string, alias?: string, description?: string, name?: string, roles?: string, dateCreated?: string, dateModified?: string, query?: string, ids?: string, _options?: Configuration): Promise<HttpInfo<GroupsSchema>> {
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
    public usersV1GroupsBasicGet(appID?: string, authToken?: string, page?: number, perPage?: number, sort?: string, alias?: string, description?: string, name?: string, roles?: string, dateCreated?: string, dateModified?: string, query?: string, ids?: string, _options?: Configuration): Promise<GroupsSchema> {
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
    public usersV1GroupsGetWithHttpInfo(appID?: string, authToken?: string, page?: number, perPage?: number, sort?: string, alias?: string, description?: string, name?: string, roles?: string, dateCreated?: string, dateModified?: string, query?: string, ids?: string, _options?: Configuration): Promise<HttpInfo<GroupsSchema>> {
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
    public usersV1GroupsGet(appID?: string, authToken?: string, page?: number, perPage?: number, sort?: string, alias?: string, description?: string, name?: string, roles?: string, dateCreated?: string, dateModified?: string, query?: string, ids?: string, _options?: Configuration): Promise<GroupsSchema> {
        const result = this.api.usersV1GroupsGet(appID, authToken, page, perPage, sort, alias, description, name, roles, dateCreated, dateModified, query, ids, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_groups 
     * Delete a particular group by id
     * @param groupId 
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsGroupIdDeleteWithHttpInfo(groupId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersV1GroupsGroupIdDeleteWithHttpInfo(groupId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_groups 
     * Delete a particular group by id
     * @param groupId 
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsGroupIdDelete(groupId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.usersV1GroupsGroupIdDelete(groupId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_groups 
     * Returns a particular group by id
     * @param groupId 
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsGroupIdGetWithHttpInfo(groupId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<GroupSchema>> {
        const result = this.api.usersV1GroupsGroupIdGetWithHttpInfo(groupId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_groups 
     * Returns a particular group by id
     * @param groupId 
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsGroupIdGet(groupId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<GroupSchema> {
        const result = this.api.usersV1GroupsGroupIdGet(groupId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Delete group logo image.
     * @param groupId 
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsGroupIdLogoDeleteWithHttpInfo(groupId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersV1GroupsGroupIdLogoDeleteWithHttpInfo(groupId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Delete group logo image.
     * @param groupId 
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsGroupIdLogoDelete(groupId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.usersV1GroupsGroupIdLogoDelete(groupId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Upload group logo image.
     * @param groupId 
     * @param authV1SystemDomainsSystemDomainIdLogoPostRequest 
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsGroupIdLogoPostWithHttpInfo(groupId: string, authV1SystemDomainsSystemDomainIdLogoPostRequest: AuthV1SystemDomainsSystemDomainIdLogoPostRequest, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UsersV1GroupsGroupIdLogoPost200Response>> {
        const result = this.api.usersV1GroupsGroupIdLogoPostWithHttpInfo(groupId, authV1SystemDomainsSystemDomainIdLogoPostRequest, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Upload group logo image.
     * @param groupId 
     * @param authV1SystemDomainsSystemDomainIdLogoPostRequest 
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsGroupIdLogoPost(groupId: string, authV1SystemDomainsSystemDomainIdLogoPostRequest: AuthV1SystemDomainsSystemDomainIdLogoPostRequest, appID?: string, authToken?: string, _options?: Configuration): Promise<UsersV1GroupsGroupIdLogoPost200Response> {
        const result = this.api.usersV1GroupsGroupIdLogoPost(groupId, authV1SystemDomainsSystemDomainIdLogoPostRequest, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Update group
     * @param groupId 
     * @param groupSchema body
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsGroupIdPatchWithHttpInfo(groupId: string, groupSchema: GroupSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<GroupSchema>> {
        const result = this.api.usersV1GroupsGroupIdPatchWithHttpInfo(groupId, groupSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Update group
     * @param groupId 
     * @param groupSchema body
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsGroupIdPatch(groupId: string, groupSchema: GroupSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<GroupSchema> {
        const result = this.api.usersV1GroupsGroupIdPatch(groupId, groupSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Update group
     * @param groupId 
     * @param groupSchema body
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsGroupIdPutWithHttpInfo(groupId: string, groupSchema: GroupSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<GroupSchema>> {
        const result = this.api.usersV1GroupsGroupIdPutWithHttpInfo(groupId, groupSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Update group
     * @param groupId 
     * @param groupSchema body
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsGroupIdPut(groupId: string, groupSchema: GroupSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<GroupSchema> {
        const result = this.api.usersV1GroupsGroupIdPut(groupId, groupSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_groups 
     * Reindex a particular group by id
     * @param groupId 
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsGroupIdReindexPostWithHttpInfo(groupId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1GroupsGroupIdReindexPostWithHttpInfo(groupId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_groups 
     * Reindex a particular group by id
     * @param groupId 
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsGroupIdReindexPost(groupId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1GroupsGroupIdReindexPost(groupId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_groups 
     * Delete a user from group
     * @param groupId 
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsGroupIdUsersUserIdDeleteWithHttpInfo(groupId: string, userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1GroupsGroupIdUsersUserIdDeleteWithHttpInfo(groupId, userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_groups 
     * Delete a user from group
     * @param groupId 
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsGroupIdUsersUserIdDelete(groupId: string, userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1GroupsGroupIdUsersUserIdDelete(groupId, userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Add user into a group
     * @param groupId 
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsGroupIdUsersUserIdPostWithHttpInfo(groupId: string, userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1GroupsGroupIdUsersUserIdPostWithHttpInfo(groupId, userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Add user into a group
     * @param groupId 
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsGroupIdUsersUserIdPost(groupId: string, userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1GroupsGroupIdUsersUserIdPost(groupId, userId, appID, authToken, _options);
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
    public usersV1GroupsMappingsGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<GroupMappingsSchema>> {
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
    public usersV1GroupsMappingsGet(appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<GroupMappingsSchema> {
        const result = this.api.usersV1GroupsMappingsGet(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_group_mappings 
     * Delete group mapping by name
     * @param name 
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsMappingsNameDeleteWithHttpInfo(name: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersV1GroupsMappingsNameDeleteWithHttpInfo(name, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_group_mappings 
     * Delete group mapping by name
     * @param name 
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsMappingsNameDelete(name: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.usersV1GroupsMappingsNameDelete(name, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_group_mappings 
     * Get a group mapping
     * @param name 
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsMappingsNameGetWithHttpInfo(name: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<GroupMappingSchema>> {
        const result = this.api.usersV1GroupsMappingsNameGetWithHttpInfo(name, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_group_mappings 
     * Get a group mapping
     * @param name 
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsMappingsNameGet(name: string, appID?: string, authToken?: string, _options?: Configuration): Promise<GroupMappingSchema> {
        const result = this.api.usersV1GroupsMappingsNameGet(name, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_group_mappings 
     * Create a new group mapping
     * @param groupMappingSchema body
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsMappingsPostWithHttpInfo(groupMappingSchema: GroupMappingSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<GroupMappingSchema>> {
        const result = this.api.usersV1GroupsMappingsPostWithHttpInfo(groupMappingSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_group_mappings 
     * Create a new group mapping
     * @param groupMappingSchema body
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsMappingsPost(groupMappingSchema: GroupMappingSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<GroupMappingSchema> {
        const result = this.api.usersV1GroupsMappingsPost(groupMappingSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Create a new group
     * @param groupSchema body
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsPostWithHttpInfo(groupSchema: GroupSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<GroupSchema>> {
        const result = this.api.usersV1GroupsPostWithHttpInfo(groupSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_groups 
     * Create a new group
     * @param groupSchema body
     * @param appID 
     * @param authToken 
     */
    public usersV1GroupsPost(groupSchema: GroupSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<GroupSchema> {
        const result = this.api.usersV1GroupsPost(groupSchema, appID, authToken, _options);
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
    public usersV1UsersBasicGetWithHttpInfo(appID?: string, authToken?: string, page?: number, perPage?: number, sort?: string, dateCreated?: string, dateModified?: string, email?: string, firstName?: string, lastName?: string, groups?: string, hideEmail?: string, hidePhone?: string, isAdmin?: string, passwordChanged?: string, phone?: string, photo?: string, status?: string, query?: string, ids?: string, _options?: Configuration): Promise<HttpInfo<UsersSchema1>> {
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
    public usersV1UsersBasicGet(appID?: string, authToken?: string, page?: number, perPage?: number, sort?: string, dateCreated?: string, dateModified?: string, email?: string, firstName?: string, lastName?: string, groups?: string, hideEmail?: string, hidePhone?: string, isAdmin?: string, passwordChanged?: string, phone?: string, photo?: string, status?: string, query?: string, ids?: string, _options?: Configuration): Promise<UsersSchema1> {
        const result = this.api.usersV1UsersBasicGet(appID, authToken, page, perPage, sort, dateCreated, dateModified, email, firstName, lastName, groups, hideEmail, hidePhone, isAdmin, passwordChanged, phone, photo, status, query, ids, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns current user
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersCurrentGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1UsersCurrentGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns current user
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersCurrentGet(appID?: string, authToken?: string, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1UsersCurrentGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update user
     * @param userSchema1 body
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersCurrentPatchWithHttpInfo(userSchema1: UserSchema1, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1UsersCurrentPatchWithHttpInfo(userSchema1, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update user
     * @param userSchema1 body
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersCurrentPatch(userSchema1: UserSchema1, appID?: string, authToken?: string, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1UsersCurrentPatch(userSchema1, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete current user photo image.
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersCurrentPhotoDeleteWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersV1UsersCurrentPhotoDeleteWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete current user photo image.
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersCurrentPhotoDelete(appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.usersV1UsersCurrentPhotoDelete(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Upload current user photo image.
     * @param usersV1UsersCurrentPhotoPostRequest 
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersCurrentPhotoPostWithHttpInfo(usersV1UsersCurrentPhotoPostRequest: UsersV1UsersCurrentPhotoPostRequest, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UsersV1UsersCurrentPhotoPost201Response>> {
        const result = this.api.usersV1UsersCurrentPhotoPostWithHttpInfo(usersV1UsersCurrentPhotoPostRequest, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Upload current user photo image.
     * @param usersV1UsersCurrentPhotoPostRequest 
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersCurrentPhotoPost(usersV1UsersCurrentPhotoPostRequest: UsersV1UsersCurrentPhotoPostRequest, appID?: string, authToken?: string, _options?: Configuration): Promise<UsersV1UsersCurrentPhotoPost201Response> {
        const result = this.api.usersV1UsersCurrentPhotoPost(usersV1UsersCurrentPhotoPostRequest, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update user
     * @param userSchema1 body
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersCurrentPutWithHttpInfo(userSchema1: UserSchema1, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1UsersCurrentPutWithHttpInfo(userSchema1, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update user
     * @param userSchema1 body
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersCurrentPut(userSchema1: UserSchema1, appID?: string, authToken?: string, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1UsersCurrentPut(userSchema1, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns current user roles
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersCurrentRolesGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserRolesSchema>> {
        const result = this.api.usersV1UsersCurrentRolesGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Returns current user roles
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersCurrentRolesGet(appID?: string, authToken?: string, _options?: Configuration): Promise<UserRolesSchema> {
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
    public usersV1UsersGetWithHttpInfo(appID?: string, authToken?: string, page?: number, perPage?: number, sort?: string, dateCreated?: string, dateModified?: string, email?: string, firstName?: string, lastName?: string, groups?: string, hideEmail?: string, hidePhone?: string, isAdmin?: string, passwordChanged?: string, phone?: string, photo?: string, status?: string, query?: string, ids?: string, _options?: Configuration): Promise<HttpInfo<UsersSchema1>> {
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
    public usersV1UsersGet(appID?: string, authToken?: string, page?: number, perPage?: number, sort?: string, dateCreated?: string, dateModified?: string, email?: string, firstName?: string, lastName?: string, groups?: string, hideEmail?: string, hidePhone?: string, isAdmin?: string, passwordChanged?: string, phone?: string, photo?: string, status?: string, query?: string, ids?: string, _options?: Configuration): Promise<UsersSchema1> {
        const result = this.api.usersV1UsersGet(appID, authToken, page, perPage, sort, dateCreated, dateModified, email, firstName, lastName, groups, hideEmail, hidePhone, isAdmin, passwordChanged, phone, photo, status, query, ids, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_users 
     * Create a new user
     * @param userCreateSchema body
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersPostWithHttpInfo(userCreateSchema: UserCreateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1UsersPostWithHttpInfo(userCreateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_create_users 
     * Create a new user
     * @param userCreateSchema body
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersPost(userCreateSchema: UserCreateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1UsersPost(userCreateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_users 
     * Delete a particular user by id
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdDeleteWithHttpInfo(userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersV1UsersUserIdDeleteWithHttpInfo(userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_users 
     * Delete a particular user by id
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdDelete(userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.usersV1UsersUserIdDelete(userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_users 
     * Returns a particular user by id
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdGetWithHttpInfo(userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1UsersUserIdGetWithHttpInfo(userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_users 
     * Returns a particular user by id
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdGet(userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1UsersUserIdGet(userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_users 
     * Update user
     * @param userId 
     * @param userSchema1 body
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdPatchWithHttpInfo(userId: string, userSchema1: UserSchema1, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1UsersUserIdPatchWithHttpInfo(userId, userSchema1, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_users 
     * Update user
     * @param userId 
     * @param userSchema1 body
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdPatch(userId: string, userSchema1: UserSchema1, appID?: string, authToken?: string, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1UsersUserIdPatch(userId, userSchema1, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_users 
     * Delete a photo image of a specified user.
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdPhotoDeleteWithHttpInfo(userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersV1UsersUserIdPhotoDeleteWithHttpInfo(userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_users 
     * Delete a photo image of a specified user.
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdPhotoDelete(userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.usersV1UsersUserIdPhotoDelete(userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_users 
     * Upload user photo image.
     * @param userId 
     * @param usersV1UsersCurrentPhotoPostRequest 
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdPhotoPostWithHttpInfo(userId: string, usersV1UsersCurrentPhotoPostRequest: UsersV1UsersCurrentPhotoPostRequest, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UsersV1UsersCurrentPhotoPost201Response>> {
        const result = this.api.usersV1UsersUserIdPhotoPostWithHttpInfo(userId, usersV1UsersCurrentPhotoPostRequest, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_users 
     * Upload user photo image.
     * @param userId 
     * @param usersV1UsersCurrentPhotoPostRequest 
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdPhotoPost(userId: string, usersV1UsersCurrentPhotoPostRequest: UsersV1UsersCurrentPhotoPostRequest, appID?: string, authToken?: string, _options?: Configuration): Promise<UsersV1UsersCurrentPhotoPost201Response> {
        const result = this.api.usersV1UsersUserIdPhotoPost(userId, usersV1UsersCurrentPhotoPostRequest, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_users 
     * Update user
     * @param userId 
     * @param userSchema1 body
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdPutWithHttpInfo(userId: string, userSchema1: UserSchema1, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1UsersUserIdPutWithHttpInfo(userId, userSchema1, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_users 
     * Update user
     * @param userId 
     * @param userSchema1 body
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdPut(userId: string, userSchema1: UserSchema1, appID?: string, authToken?: string, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1UsersUserIdPut(userId, userSchema1, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_users 
     * Reindex a particular user by id
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdReindexPostWithHttpInfo(userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1UsersUserIdReindexPostWithHttpInfo(userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_reindex_users 
     * Reindex a particular user by id
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdReindexPost(userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1UsersUserIdReindexPost(userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_users 
     * Returns user roles by user_id
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdRolesGetWithHttpInfo(userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserRolesSchema>> {
        const result = this.api.usersV1UsersUserIdRolesGetWithHttpInfo(userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_users 
     * Returns user roles by user_id
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdRolesGet(userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<UserRolesSchema> {
        const result = this.api.usersV1UsersUserIdRolesGet(userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_users 
     * Returns user roles by user_id
     * @param userId 
     * @param role 
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdRolesRoleGetWithHttpInfo(userId: string, role: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersV1UsersUserIdRolesRoleGetWithHttpInfo(userId, role, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_users 
     * Returns user roles by user_id
     * @param userId 
     * @param role 
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdRolesRoleGet(userId: string, role: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.usersV1UsersUserIdRolesRoleGet(userId, role, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Remove a user\'s SAML IdP setting
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdSamlDeleteWithHttpInfo(userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1UsersUserIdSamlDeleteWithHttpInfo(userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Remove a user\'s SAML IdP setting
     * @param userId 
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdSamlDelete(userId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1UsersUserIdSamlDelete(userId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update a user\'s SAML IdP settings
     * @param userId 
     * @param userSamlIdpUpdateSchema body
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdSamlPutWithHttpInfo(userId: string, userSamlIdpUpdateSchema: UserSamlIdpUpdateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<UserSchema1>> {
        const result = this.api.usersV1UsersUserIdSamlPutWithHttpInfo(userId, userSamlIdpUpdateSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update a user\'s SAML IdP settings
     * @param userId 
     * @param userSamlIdpUpdateSchema body
     * @param appID 
     * @param authToken 
     */
    public usersV1UsersUserIdSamlPut(userId: string, userSamlIdpUpdateSchema: UserSamlIdpUpdateSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<UserSchema1> {
        const result = this.api.usersV1UsersUserIdSamlPut(userId, userSamlIdpUpdateSchema, appID, authToken, _options);
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
    public usersNotificationsV1NotificationSettingsGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<NotificationSettingsSchema>> {
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
    public usersNotificationsV1NotificationSettingsGet(appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<NotificationSettingsSchema> {
        const result = this.api.usersNotificationsV1NotificationSettingsGet(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_notification_settings 
     * Returns a particular notification_setting by id
     * @param objectType 
     * @param subObjectType 
     * @param eventType 
     * @param protocol 
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolGetWithHttpInfo(objectType: string, subObjectType: string, eventType: string, protocol: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<NotificationSettingSchema>> {
        const result = this.api.usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolGetWithHttpInfo(objectType, subObjectType, eventType, protocol, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_notification_settings 
     * Returns a particular notification_setting by id
     * @param objectType 
     * @param subObjectType 
     * @param eventType 
     * @param protocol 
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolGet(objectType: string, subObjectType: string, eventType: string, protocol: string, appID?: string, authToken?: string, _options?: Configuration): Promise<NotificationSettingSchema> {
        const result = this.api.usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolGet(objectType, subObjectType, eventType, protocol, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new notification_setting
     * @param objectType 
     * @param subObjectType 
     * @param eventType 
     * @param protocol 
     * @param notificationSettingSchema body
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolPutWithHttpInfo(objectType: string, subObjectType: string, eventType: string, protocol: string, notificationSettingSchema: NotificationSettingSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<NotificationSettingSchema>> {
        const result = this.api.usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolPutWithHttpInfo(objectType, subObjectType, eventType, protocol, notificationSettingSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new notification_setting
     * @param objectType 
     * @param subObjectType 
     * @param eventType 
     * @param protocol 
     * @param notificationSettingSchema body
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolPut(objectType: string, subObjectType: string, eventType: string, protocol: string, notificationSettingSchema: NotificationSettingSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<NotificationSettingSchema> {
        const result = this.api.usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolPut(objectType, subObjectType, eventType, protocol, notificationSettingSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_notifications 
     * Update notification
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1NotificationsAllReadPutWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersNotificationsV1NotificationsAllReadPutWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_notifications 
     * Update notification
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1NotificationsAllReadPut(appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
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
    public usersNotificationsV1NotificationsGetWithHttpInfo(appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<HttpInfo<NotificationsSchema>> {
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
    public usersNotificationsV1NotificationsGet(appID?: string, authToken?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<NotificationsSchema> {
        const result = this.api.usersNotificationsV1NotificationsGet(appID, authToken, perPage, lastId, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_notifications 
     * Delete a particular notification by id
     * @param notificationId 
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1NotificationsNotificationIdDeleteWithHttpInfo(notificationId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersNotificationsV1NotificationsNotificationIdDeleteWithHttpInfo(notificationId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_delete_notifications 
     * Delete a particular notification by id
     * @param notificationId 
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1NotificationsNotificationIdDelete(notificationId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.usersNotificationsV1NotificationsNotificationIdDelete(notificationId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_notifications 
     * Returns a particular notification by id
     * @param notificationId 
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1NotificationsNotificationIdGetWithHttpInfo(notificationId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<NotificationSchema>> {
        const result = this.api.usersNotificationsV1NotificationsNotificationIdGetWithHttpInfo(notificationId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_notifications 
     * Returns a particular notification by id
     * @param notificationId 
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1NotificationsNotificationIdGet(notificationId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<NotificationSchema> {
        const result = this.api.usersNotificationsV1NotificationsNotificationIdGet(notificationId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new notification
     * @param notificationSchema body
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1NotificationsPostWithHttpInfo(notificationSchema: NotificationSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<NotificationSchema>> {
        const result = this.api.usersNotificationsV1NotificationsPostWithHttpInfo(notificationSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new notification
     * @param notificationSchema body
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1NotificationsPost(notificationSchema: NotificationSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<NotificationSchema> {
        const result = this.api.usersNotificationsV1NotificationsPost(notificationSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new system notification
     * @param systemNotificationSchema body
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1NotificationsSystemPostWithHttpInfo(systemNotificationSchema: SystemNotificationSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<NotificationSchema>> {
        const result = this.api.usersNotificationsV1NotificationsSystemPostWithHttpInfo(systemNotificationSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new system notification
     * @param systemNotificationSchema body
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1NotificationsSystemPost(systemNotificationSchema: SystemNotificationSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<NotificationSchema> {
        const result = this.api.usersNotificationsV1NotificationsSystemPost(systemNotificationSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_subscriptions 
     * Delete all user subscriptions for a specific object_type and object_id
     * @param objectType 
     * @param objectId 
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1ObjectTypeObjectIdSubscriptionsAllDeleteWithHttpInfo(objectType: string, objectId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SubscriptionSchema>> {
        const result = this.api.usersNotificationsV1ObjectTypeObjectIdSubscriptionsAllDeleteWithHttpInfo(objectType, objectId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_subscriptions 
     * Delete all user subscriptions for a specific object_type and object_id
     * @param objectType 
     * @param objectId 
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1ObjectTypeObjectIdSubscriptionsAllDelete(objectType: string, objectId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<SubscriptionSchema> {
        const result = this.api.usersNotificationsV1ObjectTypeObjectIdSubscriptionsAllDelete(objectType, objectId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_subscriptions 
     * Returns user subscriptions for a specific object_type and object_id
     * @param objectType 
     * @param objectId 
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1ObjectTypeObjectIdSubscriptionsGetWithHttpInfo(objectType: string, objectId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SubscriptionsSchema>> {
        const result = this.api.usersNotificationsV1ObjectTypeObjectIdSubscriptionsGetWithHttpInfo(objectType, objectId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_subscriptions 
     * Returns user subscriptions for a specific object_type and object_id
     * @param objectType 
     * @param objectId 
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1ObjectTypeObjectIdSubscriptionsGet(objectType: string, objectId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<SubscriptionsSchema> {
        const result = this.api.usersNotificationsV1ObjectTypeObjectIdSubscriptionsGet(objectType, objectId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_subscriptions 
     * Returns all user subscriptions
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1SubscriptionsGetWithHttpInfo(appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SubscriptionSchema>> {
        const result = this.api.usersNotificationsV1SubscriptionsGetWithHttpInfo(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_subscriptions 
     * Returns all user subscriptions
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1SubscriptionsGet(appID?: string, authToken?: string, _options?: Configuration): Promise<SubscriptionSchema> {
        const result = this.api.usersNotificationsV1SubscriptionsGet(appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new subscription
     * @param subscriptionSchema body
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1SubscriptionsPostWithHttpInfo(subscriptionSchema: SubscriptionSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SubscriptionSchema>> {
        const result = this.api.usersNotificationsV1SubscriptionsPostWithHttpInfo(subscriptionSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new subscription
     * @param subscriptionSchema body
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1SubscriptionsPost(subscriptionSchema: SubscriptionSchema, appID?: string, authToken?: string, _options?: Configuration): Promise<SubscriptionSchema> {
        const result = this.api.usersNotificationsV1SubscriptionsPost(subscriptionSchema, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_subscriptions 
     * Delete a particular subscription by id
     * @param subscriptionId 
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1SubscriptionsSubscriptionIdDeleteWithHttpInfo(subscriptionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersNotificationsV1SubscriptionsSubscriptionIdDeleteWithHttpInfo(subscriptionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_write_subscriptions 
     * Delete a particular subscription by id
     * @param subscriptionId 
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1SubscriptionsSubscriptionIdDelete(subscriptionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.usersNotificationsV1SubscriptionsSubscriptionIdDelete(subscriptionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_subscriptions 
     * Returns a particular subscription by id
     * @param subscriptionId 
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1SubscriptionsSubscriptionIdGetWithHttpInfo(subscriptionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<HttpInfo<SubscriptionSchema>> {
        const result = this.api.usersNotificationsV1SubscriptionsSubscriptionIdGetWithHttpInfo(subscriptionId, appID, authToken, _options);
        return result.toPromise();
    }

    /**
     *  Required roles:  - can_read_subscriptions 
     * Returns a particular subscription by id
     * @param subscriptionId 
     * @param appID 
     * @param authToken 
     */
    public usersNotificationsV1SubscriptionsSubscriptionIdGet(subscriptionId: string, appID?: string, authToken?: string, _options?: Configuration): Promise<SubscriptionSchema> {
        const result = this.api.usersNotificationsV1SubscriptionsSubscriptionIdGet(subscriptionId, appID, authToken, _options);
        return result.toPromise();
    }


}



