# iconik.FilesApi

All URIs are relative to *https://app.iconik.io/API*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filesV1AnalysisProfilesGet**](FilesApi.md#filesV1AnalysisProfilesGet) | **GET** /files/v1/analysis/profiles/ | Get analysis profiles
[**filesV1AnalysisProfilesMediaTypeDefaultGet**](FilesApi.md#filesV1AnalysisProfilesMediaTypeDefaultGet) | **GET** /files/v1/analysis/profiles/{media_type}/default/ | Get a default analysis profile
[**filesV1AnalysisProfilesPost**](FilesApi.md#filesV1AnalysisProfilesPost) | **POST** /files/v1/analysis/profiles/ | Create a new analysis profile
[**filesV1AnalysisProfilesProfileIdDefaultDelete**](FilesApi.md#filesV1AnalysisProfilesProfileIdDefaultDelete) | **DELETE** /files/v1/analysis/profiles/{profile_id}/default/ | Removes the default flag on an analysis profile
[**filesV1AnalysisProfilesProfileIdDefaultPost**](FilesApi.md#filesV1AnalysisProfilesProfileIdDefaultPost) | **POST** /files/v1/analysis/profiles/{profile_id}/default/ | Set an analysis profile to the default of its media type
[**filesV1AnalysisProfilesProfileIdDelete**](FilesApi.md#filesV1AnalysisProfilesProfileIdDelete) | **DELETE** /files/v1/analysis/profiles/{profile_id}/ | Delete an analysis profile
[**filesV1AnalysisProfilesProfileIdGet**](FilesApi.md#filesV1AnalysisProfilesProfileIdGet) | **GET** /files/v1/analysis/profiles/{profile_id}/ | Get an analysis profile
[**filesV1AnalysisProfilesProfileIdPatch**](FilesApi.md#filesV1AnalysisProfilesProfileIdPatch) | **PATCH** /files/v1/analysis/profiles/{profile_id}/ | Update an analysis profile information
[**filesV1AnalysisProfilesProfileIdPut**](FilesApi.md#filesV1AnalysisProfilesProfileIdPut) | **PUT** /files/v1/analysis/profiles/{profile_id}/ | Update an analysis profile information
[**filesV1AnalysisServiceAccountsAnalysisServiceAccountIdDelete**](FilesApi.md#filesV1AnalysisServiceAccountsAnalysisServiceAccountIdDelete) | **DELETE** /files/v1/analysis/service_accounts/{analysis_service_account_id}/ | Delete an analysis service account
[**filesV1AnalysisServiceAccountsAnalysisServiceAccountIdGet**](FilesApi.md#filesV1AnalysisServiceAccountsAnalysisServiceAccountIdGet) | **GET** /files/v1/analysis/service_accounts/{analysis_service_account_id}/ | Get an analysis service account
[**filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPatch**](FilesApi.md#filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPatch) | **PATCH** /files/v1/analysis/service_accounts/{analysis_service_account_id}/ | Update an analysis service account information
[**filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPut**](FilesApi.md#filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPut) | **PUT** /files/v1/analysis/service_accounts/{analysis_service_account_id}/ | Update an analysis service account information
[**filesV1AnalysisServiceAccountsGet**](FilesApi.md#filesV1AnalysisServiceAccountsGet) | **GET** /files/v1/analysis/service_accounts/ | Get analysis service accounts
[**filesV1AnalysisServiceAccountsPost**](FilesApi.md#filesV1AnalysisServiceAccountsPost) | **POST** /files/v1/analysis/service_accounts/ | Create a new analysis service account
[**filesV1AssetsAssetIdCustomKeyframePost**](FilesApi.md#filesV1AssetsAssetIdCustomKeyframePost) | **POST** /files/v1/assets/{asset_id}/custom_keyframe/ | Create keyframe of type poster for asset
[**filesV1AssetsAssetIdCustomKeyframePosterIdPost**](FilesApi.md#filesV1AssetsAssetIdCustomKeyframePosterIdPost) | **POST** /files/v1/assets/{asset_id}/custom_keyframe/{poster_id}/ | Set keyframe of type poster as asset keyframe
[**filesV1AssetsAssetIdExportLocationsExportLocationIdPost**](FilesApi.md#filesV1AssetsAssetIdExportLocationsExportLocationIdPost) | **POST** /files/v1/assets/{asset_id}/export_locations/{export_location_id}/ | Export asset to export location
[**filesV1AssetsAssetIdFileSetsFileSetIdDelete**](FilesApi.md#filesV1AssetsAssetIdFileSetsFileSetIdDelete) | **DELETE** /files/v1/assets/{asset_id}/file_sets/{file_set_id}/ | Delete asset\&#39;s file set, file entries, and actual files
[**filesV1AssetsAssetIdFileSetsFileSetIdFilesGet**](FilesApi.md#filesV1AssetsAssetIdFileSetsFileSetIdFilesGet) | **GET** /files/v1/assets/{asset_id}/file_sets/{file_set_id}/files/ | Get files from a file set
[**filesV1AssetsAssetIdFileSetsFileSetIdGet**](FilesApi.md#filesV1AssetsAssetIdFileSetsFileSetIdGet) | **GET** /files/v1/assets/{asset_id}/file_sets/{file_set_id}/ | Get asset\&#39;s file set
[**filesV1AssetsAssetIdFileSetsFileSetIdPatch**](FilesApi.md#filesV1AssetsAssetIdFileSetsFileSetIdPatch) | **PATCH** /files/v1/assets/{asset_id}/file_sets/{file_set_id}/ | Update file set information
[**filesV1AssetsAssetIdFileSetsFileSetIdPurgeDelete**](FilesApi.md#filesV1AssetsAssetIdFileSetsFileSetIdPurgeDelete) | **DELETE** /files/v1/assets/{asset_id}/file_sets/{file_set_id}/purge/ | Purge deleted asset\&#39;s file set, file entries, and actual files.
[**filesV1AssetsAssetIdFileSetsFileSetIdPut**](FilesApi.md#filesV1AssetsAssetIdFileSetsFileSetIdPut) | **PUT** /files/v1/assets/{asset_id}/file_sets/{file_set_id}/ | Update file set information
[**filesV1AssetsAssetIdFileSetsFileSetIdRestorePut**](FilesApi.md#filesV1AssetsAssetIdFileSetsFileSetIdRestorePut) | **PUT** /files/v1/assets/{asset_id}/file_sets/{file_set_id}/restore/ | Restore delete asset\&#39;s file set
[**filesV1AssetsAssetIdFileSetsGet**](FilesApi.md#filesV1AssetsAssetIdFileSetsGet) | **GET** /files/v1/assets/{asset_id}/file_sets/ | Get all asset\&#39;s file sets
[**filesV1AssetsAssetIdFileSetsPost**](FilesApi.md#filesV1AssetsAssetIdFileSetsPost) | **POST** /files/v1/assets/{asset_id}/file_sets/ | Create file set and associate to asset
[**filesV1AssetsAssetIdFilesFileIdCaptureMillisecondsPost**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdCaptureMillisecondsPost) | **POST** /files/v1/assets/{asset_id}/files/{file_id}/capture/{milliseconds}/ | Create a transcode job for creating still keyframe
[**filesV1AssetsAssetIdFilesFileIdDelete**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdDelete) | **DELETE** /files/v1/assets/{asset_id}/files/{file_id}/ | Delete asset\&#39;s file entry (Not the actual file, use DELETE file_set for that)
[**filesV1AssetsAssetIdFilesFileIdDownloadUrlGet**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdDownloadUrlGet) | **GET** /files/v1/assets/{asset_id}/files/{file_id}/download_url/ | Get asset\&#39;s file download URL
[**filesV1AssetsAssetIdFilesFileIdEditProxiesPost**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdEditProxiesPost) | **POST** /files/v1/assets/{asset_id}/files/{file_id}/edit_proxies/ | Create format, file_set, and file for edit proxy if storage has edit proxy transcoder configured
[**filesV1AssetsAssetIdFilesFileIdGet**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdGet) | **GET** /files/v1/assets/{asset_id}/files/{file_id}/ | Get asset\&#39;s file
[**filesV1AssetsAssetIdFilesFileIdIsgHandlerUrlGet**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdIsgHandlerUrlGet) | **GET** /files/v1/assets/{asset_id}/files/{file_id}/isg_handler_url/ | Get asset\&#39;s file handler URL for ISG
[**filesV1AssetsAssetIdFilesFileIdKeyframesPost**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdKeyframesPost) | **POST** /files/v1/assets/{asset_id}/files/{file_id}/keyframes/ | Create a transcode job for proxy and keyframes
[**filesV1AssetsAssetIdFilesFileIdMediainfoPost**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdMediainfoPost) | **POST** /files/v1/assets/{asset_id}/files/{file_id}/mediainfo/ | Create a job for extracting mediainfo
[**filesV1AssetsAssetIdFilesFileIdMultipartB2CancelPost**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdMultipartB2CancelPost) | **POST** /files/v1/assets/{asset_id}/files/{file_id}/multipart/b2/cancel/ | Cancel Backblaze B2 multipart upload.
[**filesV1AssetsAssetIdFilesFileIdMultipartB2FinishPost**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdMultipartB2FinishPost) | **POST** /files/v1/assets/{asset_id}/files/{file_id}/multipart/b2/finish/ | Complete Backblaze B2 multipart upload.
[**filesV1AssetsAssetIdFilesFileIdMultipartB2StartPost**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdMultipartB2StartPost) | **POST** /files/v1/assets/{asset_id}/files/{file_id}/multipart/b2/start/ | Start Backblaze B2 multipart upload.
[**filesV1AssetsAssetIdFilesFileIdMultipartCleanupPost**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdMultipartCleanupPost) | **POST** /files/v1/assets/{asset_id}/files/{file_id}/multipart/cleanup/ | Cleanup multipart upload (GCS, S3).
[**filesV1AssetsAssetIdFilesFileIdMultipartGcsComposeUrlPost**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdMultipartGcsComposeUrlPost) | **POST** /files/v1/assets/{asset_id}/files/{file_id}/multipart/gcs/compose_url/ | Get object compose url for GCS parallel upload.
[**filesV1AssetsAssetIdFilesFileIdMultipartPost**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdMultipartPost) | **POST** /files/v1/assets/{asset_id}/files/{file_id}/multipart/ | Complete multipart upload (GCS).
[**filesV1AssetsAssetIdFilesFileIdMultipartUrlGet**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdMultipartUrlGet) | **GET** /files/v1/assets/{asset_id}/files/{file_id}/multipart_url/ | Get presigned urls for multipart upload (S3).
[**filesV1AssetsAssetIdFilesFileIdMultipartUrlPartGet**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdMultipartUrlPartGet) | **GET** /files/v1/assets/{asset_id}/files/{file_id}/multipart_url/part/ | Get presigned urls for multipart part upload (S3 &amp; GCS).
[**filesV1AssetsAssetIdFilesFileIdMultipartUrlS3PartPost**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdMultipartUrlS3PartPost) | **POST** /files/v1/assets/{asset_id}/files/{file_id}/multipart_url/s3/part/ | Create presigned urls for multipart part S3 upload.
[**filesV1AssetsAssetIdFilesFileIdPatch**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdPatch) | **PATCH** /files/v1/assets/{asset_id}/files/{file_id}/ | Update file information
[**filesV1AssetsAssetIdFilesFileIdPut**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdPut) | **PUT** /files/v1/assets/{asset_id}/files/{file_id}/ | Update file information
[**filesV1AssetsAssetIdFilesFileIdReindexPost**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdReindexPost) | **POST** /files/v1/assets/{asset_id}/files/{file_id}/reindex/ | Trigger reindexing of a file
[**filesV1AssetsAssetIdFilesFileIdSubtitlesPost**](FilesApi.md#filesV1AssetsAssetIdFilesFileIdSubtitlesPost) | **POST** /files/v1/assets/{asset_id}/files/{file_id}/subtitles/ | Create a transcode job for subtitle files
[**filesV1AssetsAssetIdFilesGet**](FilesApi.md#filesV1AssetsAssetIdFilesGet) | **GET** /files/v1/assets/{asset_id}/files/ | Get all asset\&#39;s files
[**filesV1AssetsAssetIdFilesPost**](FilesApi.md#filesV1AssetsAssetIdFilesPost) | **POST** /files/v1/assets/{asset_id}/files/ | Create file and associate to asset
[**filesV1AssetsAssetIdFormatsFormatIdArchiveDelete**](FilesApi.md#filesV1AssetsAssetIdFormatsFormatIdArchiveDelete) | **DELETE** /files/v1/assets/{asset_id}/formats/{format_id}/archive/ | Delete archived format
[**filesV1AssetsAssetIdFormatsFormatIdArchivePost**](FilesApi.md#filesV1AssetsAssetIdFormatsFormatIdArchivePost) | **POST** /files/v1/assets/{asset_id}/formats/{format_id}/archive/ | Archive format
[**filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdDelete**](FilesApi.md#filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdDelete) | **DELETE** /files/v1/assets/{asset_id}/formats/{format_id}/components/{component_id}/ | Delete a component in a format
[**filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdGet**](FilesApi.md#filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdGet) | **GET** /files/v1/assets/{asset_id}/formats/{format_id}/components/{component_id}/ | Get a component for a format in an asset
[**filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdPut**](FilesApi.md#filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdPut) | **PUT** /files/v1/assets/{asset_id}/formats/{format_id}/components/{component_id}/ | Update a component in a format
[**filesV1AssetsAssetIdFormatsFormatIdComponentsGet**](FilesApi.md#filesV1AssetsAssetIdFormatsFormatIdComponentsGet) | **GET** /files/v1/assets/{asset_id}/formats/{format_id}/components/ | Get all components for a format in an asset
[**filesV1AssetsAssetIdFormatsFormatIdComponentsPost**](FilesApi.md#filesV1AssetsAssetIdFormatsFormatIdComponentsPost) | **POST** /files/v1/assets/{asset_id}/formats/{format_id}/components/ | Add a new format component
[**filesV1AssetsAssetIdFormatsFormatIdDelete**](FilesApi.md#filesV1AssetsAssetIdFormatsFormatIdDelete) | **DELETE** /files/v1/assets/{asset_id}/formats/{format_id}/ | Delete asset\&#39;s format
[**filesV1AssetsAssetIdFormatsFormatIdFileSetsGet**](FilesApi.md#filesV1AssetsAssetIdFormatsFormatIdFileSetsGet) | **GET** /files/v1/assets/{asset_id}/formats/{format_id}/file_sets/ | Get all asset\&#39;s file sets in a specific format
[**filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesGet**](FilesApi.md#filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesGet) | **GET** /files/v1/assets/{asset_id}/formats/{format_id}/file_sets/sources/ | Get all file sets with matching format and storage method
[**filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesStorageMethodGet**](FilesApi.md#filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesStorageMethodGet) | **GET** /files/v1/assets/{asset_id}/formats/{format_id}/file_sets/sources/{storage_method}/ | Get all file sets with matching format and storage method
[**filesV1AssetsAssetIdFormatsFormatIdGet**](FilesApi.md#filesV1AssetsAssetIdFormatsFormatIdGet) | **GET** /files/v1/assets/{asset_id}/formats/{format_id}/ | Get asset\&#39;s format
[**filesV1AssetsAssetIdFormatsFormatIdPatch**](FilesApi.md#filesV1AssetsAssetIdFormatsFormatIdPatch) | **PATCH** /files/v1/assets/{asset_id}/formats/{format_id}/ | Update format information
[**filesV1AssetsAssetIdFormatsFormatIdPurgeDelete**](FilesApi.md#filesV1AssetsAssetIdFormatsFormatIdPurgeDelete) | **DELETE** /files/v1/assets/{asset_id}/formats/{format_id}/purge/ | Purge deleted asset\&#39;s format
[**filesV1AssetsAssetIdFormatsFormatIdPut**](FilesApi.md#filesV1AssetsAssetIdFormatsFormatIdPut) | **PUT** /files/v1/assets/{asset_id}/formats/{format_id}/ | Update format information
[**filesV1AssetsAssetIdFormatsFormatIdRestorePost**](FilesApi.md#filesV1AssetsAssetIdFormatsFormatIdRestorePost) | **POST** /files/v1/assets/{asset_id}/formats/{format_id}/restore/ | Restore archived format
[**filesV1AssetsAssetIdFormatsFormatIdRestorePut**](FilesApi.md#filesV1AssetsAssetIdFormatsFormatIdRestorePut) | **PUT** /files/v1/assets/{asset_id}/formats/{format_id}/restore/ | Restore deleted asset\&#39;s format
[**filesV1AssetsAssetIdFormatsFormatIdStoragesStorageIdFileSetsGet**](FilesApi.md#filesV1AssetsAssetIdFormatsFormatIdStoragesStorageIdFileSetsGet) | **GET** /files/v1/assets/{asset_id}/formats/{format_id}/storages/{storage_id}/file_sets/ | Get all asset\&#39;s file sets in a specific format on a specific storage
[**filesV1AssetsAssetIdFormatsGet**](FilesApi.md#filesV1AssetsAssetIdFormatsGet) | **GET** /files/v1/assets/{asset_id}/formats/ | Get all asset\&#39;s formats
[**filesV1AssetsAssetIdFormatsNameGet**](FilesApi.md#filesV1AssetsAssetIdFormatsNameGet) | **GET** /files/v1/assets/{asset_id}/formats/{name}/ | Get asset\&#39;s format
[**filesV1AssetsAssetIdFormatsPost**](FilesApi.md#filesV1AssetsAssetIdFormatsPost) | **POST** /files/v1/assets/{asset_id}/formats/ | Create format and associate to asset
[**filesV1AssetsAssetIdKeyframesGet**](FilesApi.md#filesV1AssetsAssetIdKeyframesGet) | **GET** /files/v1/assets/{asset_id}/keyframes/ | Get all asset\&#39;s keyframes
[**filesV1AssetsAssetIdKeyframesKeyframeIdDelete**](FilesApi.md#filesV1AssetsAssetIdKeyframesKeyframeIdDelete) | **DELETE** /files/v1/assets/{asset_id}/keyframes/{keyframe_id}/ | Delete asset\&#39;s keyframe
[**filesV1AssetsAssetIdKeyframesKeyframeIdGet**](FilesApi.md#filesV1AssetsAssetIdKeyframesKeyframeIdGet) | **GET** /files/v1/assets/{asset_id}/keyframes/{keyframe_id}/ | Get asset\&#39;s proxy
[**filesV1AssetsAssetIdKeyframesKeyframeIdPatch**](FilesApi.md#filesV1AssetsAssetIdKeyframesKeyframeIdPatch) | **PATCH** /files/v1/assets/{asset_id}/keyframes/{keyframe_id}/ | Update keyframe information
[**filesV1AssetsAssetIdKeyframesKeyframeIdPublicDelete**](FilesApi.md#filesV1AssetsAssetIdKeyframesKeyframeIdPublicDelete) | **DELETE** /files/v1/assets/{asset_id}/keyframes/{keyframe_id}/public/ | Make the keyframe link private
[**filesV1AssetsAssetIdKeyframesKeyframeIdPublicPost**](FilesApi.md#filesV1AssetsAssetIdKeyframesKeyframeIdPublicPost) | **POST** /files/v1/assets/{asset_id}/keyframes/{keyframe_id}/public/ | Make the keyframe link public
[**filesV1AssetsAssetIdKeyframesKeyframeIdPut**](FilesApi.md#filesV1AssetsAssetIdKeyframesKeyframeIdPut) | **PUT** /files/v1/assets/{asset_id}/keyframes/{keyframe_id}/ | Update keyframe information
[**filesV1AssetsAssetIdKeyframesPost**](FilesApi.md#filesV1AssetsAssetIdKeyframesPost) | **POST** /files/v1/assets/{asset_id}/keyframes/ | Create keyframe and associate to asset
[**filesV1AssetsAssetIdMethodStorageMethodKeyframesPost**](FilesApi.md#filesV1AssetsAssetIdMethodStorageMethodKeyframesPost) | **POST** /files/v1/assets/{asset_id}/method/{storage_method}/keyframes/ | Create keyframe and associate to asset
[**filesV1AssetsAssetIdMethodStorageMethodProxiesPost**](FilesApi.md#filesV1AssetsAssetIdMethodStorageMethodProxiesPost) | **POST** /files/v1/assets/{asset_id}/method/{storage_method}/proxies/ | Create proxy and associate to asset
[**filesV1AssetsAssetIdProxiesGet**](FilesApi.md#filesV1AssetsAssetIdProxiesGet) | **GET** /files/v1/assets/{asset_id}/proxies/ | Get all asset\&#39;s proxies
[**filesV1AssetsAssetIdProxiesPost**](FilesApi.md#filesV1AssetsAssetIdProxiesPost) | **POST** /files/v1/assets/{asset_id}/proxies/ | Create proxy and associate to asset
[**filesV1AssetsAssetIdProxiesProxyIdDelete**](FilesApi.md#filesV1AssetsAssetIdProxiesProxyIdDelete) | **DELETE** /files/v1/assets/{asset_id}/proxies/{proxy_id}/ | Delete asset\&#39;s proxy
[**filesV1AssetsAssetIdProxiesProxyIdDownloadUrlGet**](FilesApi.md#filesV1AssetsAssetIdProxiesProxyIdDownloadUrlGet) | **GET** /files/v1/assets/{asset_id}/proxies/{proxy_id}/download_url/ | Get asset\&#39;s proxy download url
[**filesV1AssetsAssetIdProxiesProxyIdGet**](FilesApi.md#filesV1AssetsAssetIdProxiesProxyIdGet) | **GET** /files/v1/assets/{asset_id}/proxies/{proxy_id}/ | Get asset\&#39;s proxy
[**filesV1AssetsAssetIdProxiesProxyIdKeyframesPost**](FilesApi.md#filesV1AssetsAssetIdProxiesProxyIdKeyframesPost) | **POST** /files/v1/assets/{asset_id}/proxies/{proxy_id}/keyframes/ | Create a transcode job for keyframes from a proxy
[**filesV1AssetsAssetIdProxiesProxyIdMultipartCleanupPost**](FilesApi.md#filesV1AssetsAssetIdProxiesProxyIdMultipartCleanupPost) | **POST** /files/v1/assets/{asset_id}/proxies/{proxy_id}/multipart/cleanup/ | Cleanup S3 multipart upload
[**filesV1AssetsAssetIdProxiesProxyIdMultipartUrlGet**](FilesApi.md#filesV1AssetsAssetIdProxiesProxyIdMultipartUrlGet) | **GET** /files/v1/assets/{asset_id}/proxies/{proxy_id}/multipart_url/ | Get presigned urls for S3 multipart upload.
[**filesV1AssetsAssetIdProxiesProxyIdMultipartUrlPartGet**](FilesApi.md#filesV1AssetsAssetIdProxiesProxyIdMultipartUrlPartGet) | **GET** /files/v1/assets/{asset_id}/proxies/{proxy_id}/multipart_url/part/ | Get presigned urls for S3 multipart part upload.
[**filesV1AssetsAssetIdProxiesProxyIdPatch**](FilesApi.md#filesV1AssetsAssetIdProxiesProxyIdPatch) | **PATCH** /files/v1/assets/{asset_id}/proxies/{proxy_id}/ | Update proxy information
[**filesV1AssetsAssetIdProxiesProxyIdPublicDelete**](FilesApi.md#filesV1AssetsAssetIdProxiesProxyIdPublicDelete) | **DELETE** /files/v1/assets/{asset_id}/proxies/{proxy_id}/public/ | Make the proxy link private
[**filesV1AssetsAssetIdProxiesProxyIdPublicPost**](FilesApi.md#filesV1AssetsAssetIdProxiesProxyIdPublicPost) | **POST** /files/v1/assets/{asset_id}/proxies/{proxy_id}/public/ | Make the proxy link public
[**filesV1AssetsAssetIdProxiesProxyIdPut**](FilesApi.md#filesV1AssetsAssetIdProxiesProxyIdPut) | **PUT** /files/v1/assets/{asset_id}/proxies/{proxy_id}/ | Update proxy information
[**filesV1AssetsAssetIdSubtitlesGet**](FilesApi.md#filesV1AssetsAssetIdSubtitlesGet) | **GET** /files/v1/assets/{asset_id}/subtitles/ | Get all asset\&#39;s subtitles
[**filesV1AssetsAssetIdSubtitlesLanguageCcGet**](FilesApi.md#filesV1AssetsAssetIdSubtitlesLanguageCcGet) | **GET** /files/v1/assets/{asset_id}/subtitles/{language}/cc/ | Get asset\&#39;s closed captions subtitle for a particular language
[**filesV1AssetsAssetIdSubtitlesLanguageCcWebvttGet**](FilesApi.md#filesV1AssetsAssetIdSubtitlesLanguageCcWebvttGet) | **GET** /files/v1/assets/{asset_id}/subtitles/{language}/cc/webvtt/ | Get asset\&#39;s closed captions subtitle file for a particular language
[**filesV1AssetsAssetIdSubtitlesLanguageGet**](FilesApi.md#filesV1AssetsAssetIdSubtitlesLanguageGet) | **GET** /files/v1/assets/{asset_id}/subtitles/{language}/ | Get asset\&#39;s subtitle for a particular language
[**filesV1AssetsAssetIdSubtitlesLanguageWebvttGet**](FilesApi.md#filesV1AssetsAssetIdSubtitlesLanguageWebvttGet) | **GET** /files/v1/assets/{asset_id}/subtitles/{language}/webvtt/ | Get asset\&#39;s subtitle file for a particular language
[**filesV1AssetsAssetIdSubtitlesPost**](FilesApi.md#filesV1AssetsAssetIdSubtitlesPost) | **POST** /files/v1/assets/{asset_id}/subtitles/ | Create subtitle proxy and associate to asset
[**filesV1AssetsAssetIdSubtitlesSubtitleIdCcDelete**](FilesApi.md#filesV1AssetsAssetIdSubtitlesSubtitleIdCcDelete) | **DELETE** /files/v1/assets/{asset_id}/subtitles/{subtitle_id}/cc/ | Delete asset\&#39;s subtitle
[**filesV1AssetsAssetIdSubtitlesSubtitleIdDelete**](FilesApi.md#filesV1AssetsAssetIdSubtitlesSubtitleIdDelete) | **DELETE** /files/v1/assets/{asset_id}/subtitles/{subtitle_id}/ | Delete asset\&#39;s subtitle
[**filesV1AssetsAssetIdSubtitlesSubtitleIdGet**](FilesApi.md#filesV1AssetsAssetIdSubtitlesSubtitleIdGet) | **GET** /files/v1/assets/{asset_id}/subtitles/{subtitle_id}/ | Get asset\&#39;s subtitle for a language
[**filesV1AssetsAssetIdSubtitlesSubtitleIdPatch**](FilesApi.md#filesV1AssetsAssetIdSubtitlesSubtitleIdPatch) | **PATCH** /files/v1/assets/{asset_id}/subtitles/{subtitle_id}/ | Update subtitle information
[**filesV1AssetsAssetIdSubtitlesSubtitleIdPut**](FilesApi.md#filesV1AssetsAssetIdSubtitlesSubtitleIdPut) | **PUT** /files/v1/assets/{asset_id}/subtitles/{subtitle_id}/ | Update subtitle information
[**filesV1AssetsAssetIdTemporaryFileSetsFileSetIdDelete**](FilesApi.md#filesV1AssetsAssetIdTemporaryFileSetsFileSetIdDelete) | **DELETE** /files/v1/assets/{asset_id}/temporary_file_sets/{file_set_id}/ | Delete temporary file set with files
[**filesV1AssetsAssetIdTemporaryFileSetsFileSetIdFilesGet**](FilesApi.md#filesV1AssetsAssetIdTemporaryFileSetsFileSetIdFilesGet) | **GET** /files/v1/assets/{asset_id}/temporary_file_sets/{file_set_id}/files/ | Get files from a temporary file set
[**filesV1AssetsAssetIdTemporaryFileSetsPost**](FilesApi.md#filesV1AssetsAssetIdTemporaryFileSetsPost) | **POST** /files/v1/assets/{asset_id}/temporary_file_sets/ | Create temporary file set and associate to asset
[**filesV1AssetsAssetIdTemporaryFilesFileIdPatch**](FilesApi.md#filesV1AssetsAssetIdTemporaryFilesFileIdPatch) | **PATCH** /files/v1/assets/{asset_id}/temporary_files/{file_id}/ | Update temporary file\&#39;s info
[**filesV1AssetsAssetIdTemporaryFilesFileIdPut**](FilesApi.md#filesV1AssetsAssetIdTemporaryFilesFileIdPut) | **PUT** /files/v1/assets/{asset_id}/temporary_files/{file_id}/ | Update temporary file\&#39;s info
[**filesV1AssetsAssetIdTemporaryFilesPost**](FilesApi.md#filesV1AssetsAssetIdTemporaryFilesPost) | **POST** /files/v1/assets/{asset_id}/temporary_files/ | Create temporary transfer file for FILE storage transfers
[**filesV1AssetsAssetIdVersionsAllFileSetsDelete**](FilesApi.md#filesV1AssetsAssetIdVersionsAllFileSetsDelete) | **DELETE** /files/v1/assets/{asset_id}/versions/all/file_sets/ | Delete asset\&#39;s file sets
[**filesV1AssetsAssetIdVersionsAllFilesDelete**](FilesApi.md#filesV1AssetsAssetIdVersionsAllFilesDelete) | **DELETE** /files/v1/assets/{asset_id}/versions/all/files/ | Delete asset\&#39;s files entries by version (Not the actual file, use DELETE file_set for that)
[**filesV1AssetsAssetIdVersionsAllFormatsDelete**](FilesApi.md#filesV1AssetsAssetIdVersionsAllFormatsDelete) | **DELETE** /files/v1/assets/{asset_id}/versions/all/formats/ | Delete asset\&#39;s formats all versions
[**filesV1AssetsAssetIdVersionsAllKeyframesDelete**](FilesApi.md#filesV1AssetsAssetIdVersionsAllKeyframesDelete) | **DELETE** /files/v1/assets/{asset_id}/versions/all/keyframes/ | Delete asset\&#39;s keyframes all versions
[**filesV1AssetsAssetIdVersionsAllProxiesDelete**](FilesApi.md#filesV1AssetsAssetIdVersionsAllProxiesDelete) | **DELETE** /files/v1/assets/{asset_id}/versions/all/proxies/ | Delete asset\&#39;s proxies all versions
[**filesV1AssetsAssetIdVersionsAllSubtitlesDelete**](FilesApi.md#filesV1AssetsAssetIdVersionsAllSubtitlesDelete) | **DELETE** /files/v1/assets/{asset_id}/versions/all/subtitles/ | Delete asset\&#39;s subtitles all versions
[**filesV1AssetsAssetIdVersionsVersionIdFileSetsDelete**](FilesApi.md#filesV1AssetsAssetIdVersionsVersionIdFileSetsDelete) | **DELETE** /files/v1/assets/{asset_id}/versions/{version_id}/file_sets/ | Delete asset\&#39;s file sets by version
[**filesV1AssetsAssetIdVersionsVersionIdFileSetsGet**](FilesApi.md#filesV1AssetsAssetIdVersionsVersionIdFileSetsGet) | **GET** /files/v1/assets/{asset_id}/versions/{version_id}/file_sets/ | Get all asset\&#39;s file sets by version
[**filesV1AssetsAssetIdVersionsVersionIdFilesDelete**](FilesApi.md#filesV1AssetsAssetIdVersionsVersionIdFilesDelete) | **DELETE** /files/v1/assets/{asset_id}/versions/{version_id}/files/ | Delete asset\&#39;s files entries by version (Not the actual file, use DELETE file_set for that)
[**filesV1AssetsAssetIdVersionsVersionIdFilesGet**](FilesApi.md#filesV1AssetsAssetIdVersionsVersionIdFilesGet) | **GET** /files/v1/assets/{asset_id}/versions/{version_id}/files/ | Get all asset\&#39;s files by version
[**filesV1AssetsAssetIdVersionsVersionIdFormatsDelete**](FilesApi.md#filesV1AssetsAssetIdVersionsVersionIdFormatsDelete) | **DELETE** /files/v1/assets/{asset_id}/versions/{version_id}/formats/ | Delete asset\&#39;s formats by version
[**filesV1AssetsAssetIdVersionsVersionIdFormatsGet**](FilesApi.md#filesV1AssetsAssetIdVersionsVersionIdFormatsGet) | **GET** /files/v1/assets/{asset_id}/versions/{version_id}/formats/ | Get all asset\&#39;s formats by version
[**filesV1AssetsAssetIdVersionsVersionIdKeyframesDelete**](FilesApi.md#filesV1AssetsAssetIdVersionsVersionIdKeyframesDelete) | **DELETE** /files/v1/assets/{asset_id}/versions/{version_id}/keyframes/ | Delete asset\&#39;s keyframes by version
[**filesV1AssetsAssetIdVersionsVersionIdKeyframesGet**](FilesApi.md#filesV1AssetsAssetIdVersionsVersionIdKeyframesGet) | **GET** /files/v1/assets/{asset_id}/versions/{version_id}/keyframes/ | Get all asset\&#39;s keyframes by version
[**filesV1AssetsAssetIdVersionsVersionIdProxiesDelete**](FilesApi.md#filesV1AssetsAssetIdVersionsVersionIdProxiesDelete) | **DELETE** /files/v1/assets/{asset_id}/versions/{version_id}/proxies/ | Delete asset\&#39;s proxies by version
[**filesV1AssetsAssetIdVersionsVersionIdProxiesGet**](FilesApi.md#filesV1AssetsAssetIdVersionsVersionIdProxiesGet) | **GET** /files/v1/assets/{asset_id}/versions/{version_id}/proxies/ | Get all asset\&#39;s proxies by version
[**filesV1AssetsAssetIdVersionsVersionIdSubtitlesDelete**](FilesApi.md#filesV1AssetsAssetIdVersionsVersionIdSubtitlesDelete) | **DELETE** /files/v1/assets/{asset_id}/versions/{version_id}/subtitles/ | Delete asset\&#39;s subtitles by version
[**filesV1AssetsAssetIdVersionsVersionIdSubtitlesGet**](FilesApi.md#filesV1AssetsAssetIdVersionsVersionIdSubtitlesGet) | **GET** /files/v1/assets/{asset_id}/versions/{version_id}/subtitles/ | Get all asset\&#39;s subtitles by version
[**filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageCcWebvttGet**](FilesApi.md#filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageCcWebvttGet) | **GET** /files/v1/assets/{asset_id}/versions/{version_id}/subtitles/{language}/cc/webvtt/ | Get asset\&#39;s closed captions subtitle file for a particular language by version
[**filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageWebvttGet**](FilesApi.md#filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageWebvttGet) | **GET** /files/v1/assets/{asset_id}/versions/{version_id}/subtitles/{language}/webvtt/ | Get asset\&#39;s subtitle file for a particular language by version
[**filesV1AssetsBulkKeyframesPost**](FilesApi.md#filesV1AssetsBulkKeyframesPost) | **POST** /files/v1/assets/bulk/keyframes/ | Create a transcode job for proxy and keyframes generation of multiple assets
[**filesV1AssetsExportLocationsExportLocationIdPost**](FilesApi.md#filesV1AssetsExportLocationsExportLocationIdPost) | **POST** /files/v1/assets/export_locations/{export_location_id}/ | Export multiple assets to export location
[**filesV1CollectionsCollectionIdCustomKeyframePosterIdPost**](FilesApi.md#filesV1CollectionsCollectionIdCustomKeyframePosterIdPost) | **POST** /files/v1/collections/{collection_id}/custom_keyframe/{poster_id}/ | Set keyframe of type poster as collection keyframe
[**filesV1CollectionsCollectionIdExportLocationsExportLocationIdPost**](FilesApi.md#filesV1CollectionsCollectionIdExportLocationsExportLocationIdPost) | **POST** /files/v1/collections/{collection_id}/export_locations/{export_location_id}/ | Export collection assets to export location
[**filesV1CollectionsCollectionIdKeyframesGet**](FilesApi.md#filesV1CollectionsCollectionIdKeyframesGet) | **GET** /files/v1/collections/{collection_id}/keyframes/ | Get all collection\&#39;s keyframes
[**filesV1CollectionsCollectionIdKeyframesKeyframeIdDelete**](FilesApi.md#filesV1CollectionsCollectionIdKeyframesKeyframeIdDelete) | **DELETE** /files/v1/collections/{collection_id}/keyframes/{keyframe_id}/ | Delete collection\&#39;s keyframe
[**filesV1CollectionsCollectionIdKeyframesKeyframeIdGet**](FilesApi.md#filesV1CollectionsCollectionIdKeyframesKeyframeIdGet) | **GET** /files/v1/collections/{collection_id}/keyframes/{keyframe_id}/ | Get collection\&#39;s proxy
[**filesV1CollectionsCollectionIdKeyframesKeyframeIdPatch**](FilesApi.md#filesV1CollectionsCollectionIdKeyframesKeyframeIdPatch) | **PATCH** /files/v1/collections/{collection_id}/keyframes/{keyframe_id}/ | Update keyframe information
[**filesV1CollectionsCollectionIdKeyframesKeyframeIdPut**](FilesApi.md#filesV1CollectionsCollectionIdKeyframesKeyframeIdPut) | **PUT** /files/v1/collections/{collection_id}/keyframes/{keyframe_id}/ | Update keyframe information
[**filesV1CollectionsCollectionIdKeyframesPost**](FilesApi.md#filesV1CollectionsCollectionIdKeyframesPost) | **POST** /files/v1/collections/{collection_id}/keyframes/ | Create keyframe and associate to collection
[**filesV1DeleteQueueFileSetsDelete**](FilesApi.md#filesV1DeleteQueueFileSetsDelete) | **DELETE** /files/v1/delete_queue/file_sets/ | Restore file sets from delete queue
[**filesV1DeleteQueueFileSetsGet**](FilesApi.md#filesV1DeleteQueueFileSetsGet) | **GET** /files/v1/delete_queue/file_sets/ | Get deleted file sets
[**filesV1DeleteQueueFileSetsPurgeAllPost**](FilesApi.md#filesV1DeleteQueueFileSetsPurgeAllPost) | **POST** /files/v1/delete_queue/file_sets/purge/all/ | Purge all file sets from delete queue (Permanently delete)
[**filesV1DeleteQueueFileSetsPurgePost**](FilesApi.md#filesV1DeleteQueueFileSetsPurgePost) | **POST** /files/v1/delete_queue/file_sets/purge/ | Purge file sets from delete queue (Permanently delete)
[**filesV1DeleteQueueFormatsDelete**](FilesApi.md#filesV1DeleteQueueFormatsDelete) | **DELETE** /files/v1/delete_queue/formats/ | Restore formats from delete queue
[**filesV1DeleteQueueFormatsGet**](FilesApi.md#filesV1DeleteQueueFormatsGet) | **GET** /files/v1/delete_queue/formats/ | Get deleted formats
[**filesV1DeleteQueueFormatsPurgeAllPost**](FilesApi.md#filesV1DeleteQueueFormatsPurgeAllPost) | **POST** /files/v1/delete_queue/formats/purge/all/ | Purge all formats from delete queue (Permanently delete)
[**filesV1DeleteQueueFormatsPurgePost**](FilesApi.md#filesV1DeleteQueueFormatsPurgePost) | **POST** /files/v1/delete_queue/formats/purge/ | Purge formats from delete queue (Permanently delete)
[**filesV1ExportLocationsExportLocationIdBulkExportPost**](FilesApi.md#filesV1ExportLocationsExportLocationIdBulkExportPost) | **POST** /files/v1/export_locations/{export_location_id}/bulk_export/ | Export multiple objects to export location
[**filesV1ExportLocationsExportLocationIdDelete**](FilesApi.md#filesV1ExportLocationsExportLocationIdDelete) | **DELETE** /files/v1/export_locations/{export_location_id}/ | Delete a particular export_location by id
[**filesV1ExportLocationsExportLocationIdGet**](FilesApi.md#filesV1ExportLocationsExportLocationIdGet) | **GET** /files/v1/export_locations/{export_location_id}/ | Returns a particular export_location by id
[**filesV1ExportLocationsExportLocationIdPatch**](FilesApi.md#filesV1ExportLocationsExportLocationIdPatch) | **PATCH** /files/v1/export_locations/{export_location_id}/ | Update export_location
[**filesV1ExportLocationsExportLocationIdPut**](FilesApi.md#filesV1ExportLocationsExportLocationIdPut) | **PUT** /files/v1/export_locations/{export_location_id}/ | Update export_location
[**filesV1ExportLocationsExportLocationIdReindexPost**](FilesApi.md#filesV1ExportLocationsExportLocationIdReindexPost) | **POST** /files/v1/export_locations/{export_location_id}/reindex/ | Trigger reindexing of a export location
[**filesV1ExportLocationsGet**](FilesApi.md#filesV1ExportLocationsGet) | **GET** /files/v1/export_locations/ | Get all export_locations
[**filesV1ExportLocationsPost**](FilesApi.md#filesV1ExportLocationsPost) | **POST** /files/v1/export_locations/ | Create a new export_location
[**filesV1ExportsTemporaryFileSetsFileSetIdStoragesStorageIdPost**](FilesApi.md#filesV1ExportsTemporaryFileSetsFileSetIdStoragesStorageIdPost) | **POST** /files/v1/exports/temporary_file_sets/{file_set_id}/storages/{storage_id}/ | Queue export job completion between local storages
[**filesV1FileSetsFileSetIdFilesGet**](FilesApi.md#filesV1FileSetsFileSetIdFilesGet) | **GET** /files/v1/file_sets/{file_set_id}/files/ | Get files from a file set
[**filesV1FileSetsFileSetIdStoragesStorageIdPost**](FilesApi.md#filesV1FileSetsFileSetIdStoragesStorageIdPost) | **POST** /files/v1/file_sets/{file_set_id}/storages/{storage_id}/ | Queue copying of a file set with files from one storage to another
[**filesV1FileSetsFileSetIdTransfersFromStorageIdDelete**](FilesApi.md#filesV1FileSetsFileSetIdTransfersFromStorageIdDelete) | **DELETE** /files/v1/file_sets/{file_set_id}/transfers_from/{storage_id}/ | Delete file set transfer after handling it
[**filesV1FileSetsFileSetIdTransfersToStorageIdDelete**](FilesApi.md#filesV1FileSetsFileSetIdTransfersToStorageIdDelete) | **DELETE** /files/v1/file_sets/{file_set_id}/transfers_to/{storage_id}/ | Delete file set transfer after handling it
[**filesV1FilesChecksumChecksumGet**](FilesApi.md#filesV1FilesChecksumChecksumGet) | **GET** /files/v1/files/checksum/{checksum}/ | Get files by checksum
[**filesV1FilesFileIdDeletionsFromStorageIdDelete**](FilesApi.md#filesV1FilesFileIdDeletionsFromStorageIdDelete) | **DELETE** /files/v1/files/{file_id}/deletions_from/{storage_id}/ | Delete file deletion job after handling it
[**filesV1FilesMissingStoragesStorageIdDelete**](FilesApi.md#filesV1FilesMissingStoragesStorageIdDelete) | **DELETE** /files/v1/files/missing/storages/{storage_id}/ | Delete all missing files from storage
[**filesV1FilesStoragesStorageIdPost**](FilesApi.md#filesV1FilesStoragesStorageIdPost) | **POST** /files/v1/files/storages/{storage_id}/ | Check file is on storage
[**filesV1FormatsFormatIdStoragesStorageIdPost**](FilesApi.md#filesV1FormatsFormatIdStoragesStorageIdPost) | **POST** /files/v1/formats/{format_id}/storages/{storage_id}/ | Queue copying of a formats file sets with files from one storage to another
[**filesV1FormatsFormatNameArchiveBulkPost**](FilesApi.md#filesV1FormatsFormatNameArchiveBulkPost) | **POST** /files/v1/formats/{format_name}/archive/bulk/ | Queue bulk archiving of assets, collections and saved_searches
[**filesV1FormatsFormatNameRestoreBulkPost**](FilesApi.md#filesV1FormatsFormatNameRestoreBulkPost) | **POST** /files/v1/formats/{format_name}/restore/bulk/ | Queue bulk restore of previously archived assets, collections or saved_searches
[**filesV1SharesStoragesStorageIdFilesGet**](FilesApi.md#filesV1SharesStoragesStorageIdFilesGet) | **GET** /files/v1/shares/storages/{storage_id}/files/ | Check if a specific file is already on the storage for shares
[**filesV1StoragesFilesReindexPost**](FilesApi.md#filesV1StoragesFilesReindexPost) | **POST** /files/v1/storages/files/reindex/ | Trigger reindexing of all files
[**filesV1StoragesGet**](FilesApi.md#filesV1StoragesGet) | **GET** /files/v1/storages/ | Get all storages
[**filesV1StoragesIsgLatestVersionGet**](FilesApi.md#filesV1StoragesIsgLatestVersionGet) | **GET** /files/v1/storages/isg/latest_version/ | Get latest ISG version
[**filesV1StoragesMatchingPurposeGet**](FilesApi.md#filesV1StoragesMatchingPurposeGet) | **GET** /files/v1/storages/matching/{purpose}/ | Returns a remote storage matching type
[**filesV1StoragesMatchingPurposeMethodMethodGet**](FilesApi.md#filesV1StoragesMatchingPurposeMethodMethodGet) | **GET** /files/v1/storages/matching/{purpose}/method/{method}/ | Returns a remote storage matching type and method
[**filesV1StoragesPost**](FilesApi.md#filesV1StoragesPost) | **POST** /files/v1/storages/ | Create a new storage
[**filesV1StoragesPurposeDefaultGet**](FilesApi.md#filesV1StoragesPurposeDefaultGet) | **GET** /files/v1/storages/{purpose}/default/ | Get a purpose default storage
[**filesV1StoragesReindexPost**](FilesApi.md#filesV1StoragesReindexPost) | **POST** /files/v1/storages/reindex/ | Trigger reindexing of all storages
[**filesV1StoragesStorageIdAutoScanDelete**](FilesApi.md#filesV1StoragesStorageIdAutoScanDelete) | **DELETE** /files/v1/storages/{storage_id}/auto_scan/ | Disable cloud storage auto scan
[**filesV1StoragesStorageIdAutoScanGet**](FilesApi.md#filesV1StoragesStorageIdAutoScanGet) | **GET** /files/v1/storages/{storage_id}/auto_scan/ | Get cloud storage auto scan settings
[**filesV1StoragesStorageIdAutoScanPost**](FilesApi.md#filesV1StoragesStorageIdAutoScanPost) | **POST** /files/v1/storages/{storage_id}/auto_scan/ | Enable cloud storage auto scan
[**filesV1StoragesStorageIdBulkPost**](FilesApi.md#filesV1StoragesStorageIdBulkPost) | **POST** /files/v1/storages/{storage_id}/bulk/ | Queue copying of files from current storage to specified one
[**filesV1StoragesStorageIdDefaultDelete**](FilesApi.md#filesV1StoragesStorageIdDefaultDelete) | **DELETE** /files/v1/storages/{storage_id}/default/ | Removes the default flag on a storage
[**filesV1StoragesStorageIdDefaultPost**](FilesApi.md#filesV1StoragesStorageIdDefaultPost) | **POST** /files/v1/storages/{storage_id}/default/ | Set a storage to the default of its purpose
[**filesV1StoragesStorageIdDelete**](FilesApi.md#filesV1StoragesStorageIdDelete) | **DELETE** /files/v1/storages/{storage_id}/ | Delete a particular storage by id
[**filesV1StoragesStorageIdDeletionsDeletionIdDelete**](FilesApi.md#filesV1StoragesStorageIdDeletionsDeletionIdDelete) | **DELETE** /files/v1/storages/{storage_id}/deletions/{deletion_id}/ | Delete file deletion job after handling it
[**filesV1StoragesStorageIdDeletionsFromGet**](FilesApi.md#filesV1StoragesStorageIdDeletionsFromGet) | **GET** /files/v1/storages/{storage_id}/deletions_from/ | Get pending deletions of files from a local storage
[**filesV1StoragesStorageIdDeletionsGet**](FilesApi.md#filesV1StoragesStorageIdDeletionsGet) | **GET** /files/v1/storages/{storage_id}/deletions/ | Get pending deletions of files from a local storage
[**filesV1StoragesStorageIdFilesDelete**](FilesApi.md#filesV1StoragesStorageIdFilesDelete) | **DELETE** /files/v1/storages/{storage_id}/files/ | DELETE files (with copies in different storages) from a storage folder, or all files on a storage
[**filesV1StoragesStorageIdFilesFileIdReindexPost**](FilesApi.md#filesV1StoragesStorageIdFilesFileIdReindexPost) | **POST** /files/v1/storages/{storage_id}/files/{file_id}/reindex/ | Trigger reindexing for a file on a storage
[**filesV1StoragesStorageIdFilesGet**](FilesApi.md#filesV1StoragesStorageIdFilesGet) | **GET** /files/v1/storages/{storage_id}/files/ | Get files in a storage folder, or all files on a storage
[**filesV1StoragesStorageIdFilesPatch**](FilesApi.md#filesV1StoragesStorageIdFilesPatch) | **PATCH** /files/v1/storages/{storage_id}/files/ | Update file by storage ID and path
[**filesV1StoragesStorageIdFilesPost**](FilesApi.md#filesV1StoragesStorageIdFilesPost) | **POST** /files/v1/storages/{storage_id}/files/ | Create file without associating it to an asset
[**filesV1StoragesStorageIdFilesPut**](FilesApi.md#filesV1StoragesStorageIdFilesPut) | **PUT** /files/v1/storages/{storage_id}/files/ | Update file by storage ID and path
[**filesV1StoragesStorageIdFilesReindexPost**](FilesApi.md#filesV1StoragesStorageIdFilesReindexPost) | **POST** /files/v1/storages/{storage_id}/files/reindex/ | Trigger reindexing of all files
[**filesV1StoragesStorageIdGatewayEventsEventIdDelete**](FilesApi.md#filesV1StoragesStorageIdGatewayEventsEventIdDelete) | **DELETE** /files/v1/storages/{storage_id}/gateway/events/{event_id}/ | Delete storage gateway event
[**filesV1StoragesStorageIdGatewayEventsGet**](FilesApi.md#filesV1StoragesStorageIdGatewayEventsGet) | **GET** /files/v1/storages/{storage_id}/gateway/events/ | Get pending storage gateway events
[**filesV1StoragesStorageIdGatewayEventsPost**](FilesApi.md#filesV1StoragesStorageIdGatewayEventsPost) | **POST** /files/v1/storages/{storage_id}/gateway/events/ | Create new storage gateway event
[**filesV1StoragesStorageIdGatewayEventsPurgePost**](FilesApi.md#filesV1StoragesStorageIdGatewayEventsPurgePost) | **POST** /files/v1/storages/{storage_id}/gateway/events/purge/ | Delete storage gateway events in bulk
[**filesV1StoragesStorageIdGatewayReportGet**](FilesApi.md#filesV1StoragesStorageIdGatewayReportGet) | **GET** /files/v1/storages/{storage_id}/gateway/report/ | Get storage gateway report
[**filesV1StoragesStorageIdGatewayReportPut**](FilesApi.md#filesV1StoragesStorageIdGatewayReportPut) | **PUT** /files/v1/storages/{storage_id}/gateway/report/ | Create storage gateway report
[**filesV1StoragesStorageIdGatewayStatusPut**](FilesApi.md#filesV1StoragesStorageIdGatewayStatusPut) | **PUT** /files/v1/storages/{storage_id}/gateway/status/ | Update storage gateway status
[**filesV1StoragesStorageIdGet**](FilesApi.md#filesV1StoragesStorageIdGet) | **GET** /files/v1/storages/{storage_id}/ | Returns a particular storage by id
[**filesV1StoragesStorageIdLogsPost**](FilesApi.md#filesV1StoragesStorageIdLogsPost) | **POST** /files/v1/storages/{storage_id}/logs/ | Upload storage logs
[**filesV1StoragesStorageIdObjectTypeFilesDelete**](FilesApi.md#filesV1StoragesStorageIdObjectTypeFilesDelete) | **DELETE** /files/v1/storages/{storage_id}/{object_type}/files/ | Delete files from a particular storage from multiple objects
[**filesV1StoragesStorageIdPatch**](FilesApi.md#filesV1StoragesStorageIdPatch) | **PATCH** /files/v1/storages/{storage_id}/ | Update storage
[**filesV1StoragesStorageIdPut**](FilesApi.md#filesV1StoragesStorageIdPut) | **PUT** /files/v1/storages/{storage_id}/ | Update storage
[**filesV1StoragesStorageIdReindexPost**](FilesApi.md#filesV1StoragesStorageIdReindexPost) | **POST** /files/v1/storages/{storage_id}/reindex/ | Trigger reindexing of a storage
[**filesV1StoragesStorageIdScanPost**](FilesApi.md#filesV1StoragesStorageIdScanPost) | **POST** /files/v1/storages/{storage_id}/scan/ | Requests to scan a storage
[**filesV1StoragesStorageIdSearchDocumentPut**](FilesApi.md#filesV1StoragesStorageIdSearchDocumentPut) | **PUT** /files/v1/storages/{storage_id}/search_document/ | Update search document for storage
[**filesV1StoragesStorageIdTemporaryFilesGet**](FilesApi.md#filesV1StoragesStorageIdTemporaryFilesGet) | **GET** /files/v1/storages/{storage_id}/temporary_files/ | Get storage\&#39;s exported files
[**filesV1StoragesStorageIdTranscodersGet**](FilesApi.md#filesV1StoragesStorageIdTranscodersGet) | **GET** /files/v1/storages/{storage_id}/transcoders/ | Get all transcoders for a particular storage
[**filesV1StoragesStorageIdTranscodersTranscoderIdDelete**](FilesApi.md#filesV1StoragesStorageIdTranscodersTranscoderIdDelete) | **DELETE** /files/v1/storages/{storage_id}/transcoders/{transcoder_id}/ | Delete a transcoder from storage
[**filesV1StoragesStorageIdTranscodersTranscoderIdPut**](FilesApi.md#filesV1StoragesStorageIdTranscodersTranscoderIdPut) | **PUT** /files/v1/storages/{storage_id}/transcoders/{transcoder_id}/ | Create a new transcoder for storage
[**filesV1StoragesStorageIdTransfersFromGet**](FilesApi.md#filesV1StoragesStorageIdTransfersFromGet) | **GET** /files/v1/storages/{storage_id}/transfers_from/ | Get pending transfers of file sets from a local storage
[**filesV1StoragesStorageIdTransfersFromTransferIdDelete**](FilesApi.md#filesV1StoragesStorageIdTransfersFromTransferIdDelete) | **DELETE** /files/v1/storages/{storage_id}/transfers_from/{transfer_id}/ | Delete file set transfer after handling it
[**filesV1StoragesStorageIdTransfersFromTransferIdGet**](FilesApi.md#filesV1StoragesStorageIdTransfersFromTransferIdGet) | **GET** /files/v1/storages/{storage_id}/transfers_from/{transfer_id}/ | Get file set transfer record
[**filesV1StoragesStorageIdTransfersToGet**](FilesApi.md#filesV1StoragesStorageIdTransfersToGet) | **GET** /files/v1/storages/{storage_id}/transfers_to/ | Get pending transfers of file sets to a local storage
[**filesV1StoragesStorageIdTransfersToTransferIdDelete**](FilesApi.md#filesV1StoragesStorageIdTransfersToTransferIdDelete) | **DELETE** /files/v1/storages/{storage_id}/transfers_to/{transfer_id}/ | Delete file set transfer after handling it
[**filesV1StoragesStorageIdTransfersToTransferIdGet**](FilesApi.md#filesV1StoragesStorageIdTransfersToTransferIdGet) | **GET** /files/v1/storages/{storage_id}/transfers_to/{transfer_id}/ | Get file set transfer record
[**filesV1StoragesStorageIdVerificationsAccessGet**](FilesApi.md#filesV1StoragesStorageIdVerificationsAccessGet) | **GET** /files/v1/storages/{storage_id}/verifications/access/ | Verify storage access
[**filesV1StoragesStorageIdVerificationsPermissionsGet**](FilesApi.md#filesV1StoragesStorageIdVerificationsPermissionsGet) | **GET** /files/v1/storages/{storage_id}/verifications/permissions/ | Verify storage permissions
[**filesV1TranscodersGet**](FilesApi.md#filesV1TranscodersGet) | **GET** /files/v1/transcoders/ | Get all transcoders
[**filesV1TranscodersPost**](FilesApi.md#filesV1TranscodersPost) | **POST** /files/v1/transcoders/ | Create a new transcoder
[**filesV1TranscodersTranscoderIdDelete**](FilesApi.md#filesV1TranscodersTranscoderIdDelete) | **DELETE** /files/v1/transcoders/{transcoder_id}/ | Delete a particular transcoder by id
[**filesV1TranscodersTranscoderIdGet**](FilesApi.md#filesV1TranscodersTranscoderIdGet) | **GET** /files/v1/transcoders/{transcoder_id}/ | Returns a particular transcoder by id
[**filesV1TranscodersTranscoderIdLogsPost**](FilesApi.md#filesV1TranscodersTranscoderIdLogsPost) | **POST** /files/v1/transcoders/{transcoder_id}/logs/ | Upload transcoder logs
[**filesV1TranscodersTranscoderIdPatch**](FilesApi.md#filesV1TranscodersTranscoderIdPatch) | **PATCH** /files/v1/transcoders/{transcoder_id}/ | Update transcoder
[**filesV1TranscodersTranscoderIdPut**](FilesApi.md#filesV1TranscodersTranscoderIdPut) | **PUT** /files/v1/transcoders/{transcoder_id}/ | Update transcoder
[**filesV1TranscodersTranscoderIdReindexPost**](FilesApi.md#filesV1TranscodersTranscoderIdReindexPost) | **POST** /files/v1/transcoders/{transcoder_id}/reindex/ | Trigger reindexing of a transcoder
[**filesV1TranscodersTranscoderIdStoragesGet**](FilesApi.md#filesV1TranscodersTranscoderIdStoragesGet) | **GET** /files/v1/transcoders/{transcoder_id}/storages/ | Get storages linked to a transcoder
[**filesV1TransfersTransferIdUrlsPost**](FilesApi.md#filesV1TransfersTransferIdUrlsPost) | **POST** /files/v1/transfers/{transfer_id}/urls/ | Generates a url for direct file downloads (for IGSs)
[**filesV1TransfersTransferIdUrlsVerifyGet**](FilesApi.md#filesV1TransfersTransferIdUrlsVerifyGet) | **GET** /files/v1/transfers/{transfer_id}/urls/verify/ | Verifies the signature of a url


# **filesV1AnalysisProfilesGet**
> AnalysisProfilesSchema filesV1AnalysisProfilesGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AnalysisProfilesGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last profile set on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1AnalysisProfilesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last profile set on previous page | (optional) defaults to undefined


### Return type

**AnalysisProfilesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns analysis profiles |  -  |
**401** | Token is invalid |  -  |
**404** | Profiles don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AnalysisProfilesMediaTypeDefaultGet**
> AnalysisProfileSchema filesV1AnalysisProfilesMediaTypeDefaultGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AnalysisProfilesMediaTypeDefaultGetRequest = {
  // string
  mediaType: "media_type_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AnalysisProfilesMediaTypeDefaultGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mediaType** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AnalysisProfileSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The default analysis profile |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Permission denied |  -  |
**404** | Analysis profile does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AnalysisProfilesPost**
> AnalysisProfileSchema filesV1AnalysisProfilesPost(analysisProfileSchema)

 Required roles:  - can_write_analysis_profiles 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AnalysisProfilesPostRequest = {
  // AnalysisProfileSchema | body
  analysisProfileSchema: {
    analysisServiceAccountId: "analysisServiceAccountId_example",
    enabled: true,
    mediaType: "image",
    name: "name_example",
    serviceType: "GOOGLE_VISION",
    settings: {},
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AnalysisProfilesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisProfileSchema** | **AnalysisProfileSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AnalysisProfileSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns an analysis profile |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AnalysisProfilesProfileIdDefaultDelete**
> void filesV1AnalysisProfilesProfileIdDefaultDelete()

 Required roles:  - can_write_analysis_profiles 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AnalysisProfilesProfileIdDefaultDeleteRequest = {
  // string
  profileId: "profile_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AnalysisProfilesProfileIdDefaultDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

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

# **filesV1AnalysisProfilesProfileIdDefaultPost**
> void filesV1AnalysisProfilesProfileIdDefaultPost()

 Required roles:  - can_write_analysis_profiles 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AnalysisProfilesProfileIdDefaultPostRequest = {
  // string
  profileId: "profile_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AnalysisProfilesProfileIdDefaultPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AnalysisProfilesProfileIdDelete**
> void filesV1AnalysisProfilesProfileIdDelete()

 Required roles:  - can_delete_analysis_profiles 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AnalysisProfilesProfileIdDeleteRequest = {
  // string
  profileId: "profile_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AnalysisProfilesProfileIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Analysis profile doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AnalysisProfilesProfileIdGet**
> AnalysisProfileSchema filesV1AnalysisProfilesProfileIdGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AnalysisProfilesProfileIdGetRequest = {
  // string
  profileId: "profile_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AnalysisProfilesProfileIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AnalysisProfileSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an analysis profile for provided media type |  -  |
**401** | Token is invalid |  -  |
**404** | Profile doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AnalysisProfilesProfileIdPatch**
> AnalysisProfileSchema filesV1AnalysisProfilesProfileIdPatch(analysisProfileSchema)

 Required roles:  - can_write_analysis_profiles 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AnalysisProfilesProfileIdPatchRequest = {
  // string
  profileId: "profile_id_example",
  // AnalysisProfileSchema | body
  analysisProfileSchema: {
    analysisServiceAccountId: "analysisServiceAccountId_example",
    enabled: true,
    mediaType: "image",
    name: "name_example",
    serviceType: "GOOGLE_VISION",
    settings: {},
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AnalysisProfilesProfileIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisProfileSchema** | **AnalysisProfileSchema**| body |
 **profileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AnalysisProfileSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an analysis profile that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Profile doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AnalysisProfilesProfileIdPut**
> AnalysisProfileSchema filesV1AnalysisProfilesProfileIdPut(analysisProfileSchema)

 Required roles:  - can_write_analysis_profiles 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AnalysisProfilesProfileIdPutRequest = {
  // string
  profileId: "profile_id_example",
  // AnalysisProfileSchema | body
  analysisProfileSchema: {
    analysisServiceAccountId: "analysisServiceAccountId_example",
    enabled: true,
    mediaType: "image",
    name: "name_example",
    serviceType: "GOOGLE_VISION",
    settings: {},
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AnalysisProfilesProfileIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisProfileSchema** | **AnalysisProfileSchema**| body |
 **profileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AnalysisProfileSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an analysis profile that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Profile doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AnalysisServiceAccountsAnalysisServiceAccountIdDelete**
> void filesV1AnalysisServiceAccountsAnalysisServiceAccountIdDelete()

 Required roles:  - can_delete_analysis_service_accounts 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AnalysisServiceAccountsAnalysisServiceAccountIdDeleteRequest = {
  // string
  analysisServiceAccountId: "analysis_service_account_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AnalysisServiceAccountsAnalysisServiceAccountIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisServiceAccountId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Analysis service account doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AnalysisServiceAccountsAnalysisServiceAccountIdGet**
> AnalysisServiceAccountReadSchema filesV1AnalysisServiceAccountsAnalysisServiceAccountIdGet()

 Required roles:  - can_read_analysis_service_accounts 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AnalysisServiceAccountsAnalysisServiceAccountIdGetRequest = {
  // string
  analysisServiceAccountId: "analysis_service_account_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AnalysisServiceAccountsAnalysisServiceAccountIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisServiceAccountId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AnalysisServiceAccountReadSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an analysis service account |  -  |
**401** | Token is invalid |  -  |
**404** | Service account doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPatch**
> AnalysisServiceAccountSchema filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPatch(analysisServiceAccountSchema)

 Required roles:  - can_write_analysis_service_accounts 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AnalysisServiceAccountsAnalysisServiceAccountIdPatchRequest = {
  // string
  analysisServiceAccountId: "analysis_service_account_id_example",
  // AnalysisServiceAccountSchema | body
  analysisServiceAccountSchema: {
    method: "GOOGLE_AI",
    name: "name_example",
    settings: {},
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisServiceAccountSchema** | **AnalysisServiceAccountSchema**| body |
 **analysisServiceAccountId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AnalysisServiceAccountSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an analysis service account that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Service account doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPut**
> AnalysisServiceAccountSchema filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPut(analysisServiceAccountSchema)

 Required roles:  - can_write_analysis_service_accounts 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AnalysisServiceAccountsAnalysisServiceAccountIdPutRequest = {
  // string
  analysisServiceAccountId: "analysis_service_account_id_example",
  // AnalysisServiceAccountSchema | body
  analysisServiceAccountSchema: {
    method: "GOOGLE_AI",
    name: "name_example",
    settings: {},
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AnalysisServiceAccountsAnalysisServiceAccountIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisServiceAccountSchema** | **AnalysisServiceAccountSchema**| body |
 **analysisServiceAccountId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AnalysisServiceAccountSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an analysis service account that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Service account doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AnalysisServiceAccountsGet**
> AnalysisServiceAccountsSchema filesV1AnalysisServiceAccountsGet()

 Required roles:  - can_read_analysis_service_accounts 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AnalysisServiceAccountsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last service account set on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1AnalysisServiceAccountsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last service account set on previous page | (optional) defaults to undefined


### Return type

**AnalysisServiceAccountsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns analysis service accounts |  -  |
**401** | Token is invalid |  -  |
**404** | Service accounts don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AnalysisServiceAccountsPost**
> AnalysisServiceAccountReadSchema filesV1AnalysisServiceAccountsPost(analysisServiceAccountSchema)

 Required roles:  - can_write_analysis_service_accounts 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AnalysisServiceAccountsPostRequest = {
  // AnalysisServiceAccountSchema | body
  analysisServiceAccountSchema: {
    method: "GOOGLE_AI",
    name: "name_example",
    settings: {},
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AnalysisServiceAccountsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisServiceAccountSchema** | **AnalysisServiceAccountSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AnalysisServiceAccountReadSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns an analysis service account |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdCustomKeyframePost**
> KeyframeSchema filesV1AssetsAssetIdCustomKeyframePost()

 Required roles:  - can_write_keyframes 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdCustomKeyframePostRequest = {
  // string
  assetId: "asset_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdCustomKeyframePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**KeyframeSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns created keyframe |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdCustomKeyframePosterIdPost**
> KeyframeSchema filesV1AssetsAssetIdCustomKeyframePosterIdPost()

 Required roles:  - can_write_keyframes 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdCustomKeyframePosterIdPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  posterId: "poster_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean | set to false to keep current custom_poster and custom_keyframe on asset (optional)
  overwrite: true,
};

apiInstance.filesV1AssetsAssetIdCustomKeyframePosterIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **posterId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **overwrite** | [**boolean**] | set to false to keep current custom_poster and custom_keyframe on asset | (optional) defaults to undefined


### Return type

**KeyframeSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns custom keyframe |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdExportLocationsExportLocationIdPost**
> void filesV1AssetsAssetIdExportLocationsExportLocationIdPost(assetExportSchema)

 Required roles:  - can_write_exports 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdExportLocationsExportLocationIdPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  exportLocationId: "export_location_id_example",
  // AssetExportSchema | body
  assetExportSchema: {
    exportMetadata: true,
    exportToAssetFolder: true,
    fileName: "fileName_example",
    formatId: "formatId_example",
    metadataFormat: "CSV",
    metadataView: "metadataView_example",
    overwrite: true,
    preferredOriginalStorageId: "preferredOriginalStorageId_example",
    transcodeProfileIds: [
      "transcodeProfileIds_example",
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean | Enable transfer through iconik host (creates egress) (optional)
  allowHostTransfer: true,
};

apiInstance.filesV1AssetsAssetIdExportLocationsExportLocationIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetExportSchema** | **AssetExportSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **exportLocationId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **allowHostTransfer** | [**boolean**] | Enable transfer through iconik host (creates egress) | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an export job id |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFileSetsFileSetIdDelete**
> void filesV1AssetsAssetIdFileSetsFileSetIdDelete()

 Required roles:  - can_delete_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFileSetsFileSetIdDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileSetId: "file_set_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean | If true, keep source objects (optional)
  keepSource: false,
};

apiInstance.filesV1AssetsAssetIdFileSetsFileSetIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **fileSetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **keepSource** | [**boolean**] | If true, keep source objects | (optional) defaults to false


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | File set that has been marked as deleted |  -  |
**204** | Without body in case &#x60;immediately&#x60; option was provided |  -  |
**401** | Token is invalid |  -  |
**404** | File set for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFileSetsFileSetIdFilesGet**
> FilesSchema filesV1AssetsAssetIdFileSetsFileSetIdFilesGet()

 Required roles:  - can_read_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFileSetsFileSetIdFilesGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileSetId: "file_set_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // string (optional)
  lastId: "last_id_example",
  // boolean | Set to false if you don\'t need a URL, will speed things up (optional)
  generateSignedUrl: true,
  // boolean | Set to true if you need a total amount of files in a file set (optional)
  fileCount: false,
};

apiInstance.filesV1AssetsAssetIdFileSetsFileSetIdFilesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **fileSetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to undefined
 **lastId** | [**string**] |  | (optional) defaults to undefined
 **generateSignedUrl** | [**boolean**] | Set to false if you don\&#39;t need a URL, will speed things up | (optional) defaults to true
 **fileCount** | [**boolean**] | Set to true if you need a total amount of files in a file set | (optional) defaults to false


### Return type

**FilesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns files from a file set |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFileSetsFileSetIdGet**
> FileSetSchema filesV1AssetsAssetIdFileSetsFileSetIdGet()

 Required roles:  - can_read_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFileSetsFileSetIdGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileSetId: "file_set_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFileSetsFileSetIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **fileSetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FileSetSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a file set associated with this asset |  -  |
**401** | Token is invalid |  -  |
**404** | File set for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFileSetsFileSetIdPatch**
> FileSetSchema filesV1AssetsAssetIdFileSetsFileSetIdPatch(fileSetSchema)

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFileSetsFileSetIdPatchRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileSetId: "file_set_id_example",
  // FileSetSchema | body
  fileSetSchema: {
    archiveFileSetId: "archiveFileSetId_example",
    baseDir: "baseDir_example",
    componentIds: [
      "componentIds_example",
    ],
    dateDeleted: new Date('1970-01-01T00:00:00.00Z'),
    formatId: "formatId_example",
    isArchive: true,
    name: "name_example",
    originalStorageId: "originalStorageId_example",
    status: "ACTIVE",
    storageId: "storageId_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFileSetsFileSetIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileSetSchema** | **FileSetSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **fileSetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FileSetSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a file set that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | File set for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFileSetsFileSetIdPurgeDelete**
> void filesV1AssetsAssetIdFileSetsFileSetIdPurgeDelete()

 Required roles:  - can_delete_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFileSetsFileSetIdPurgeDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileSetId: "file_set_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFileSetsFileSetIdPurgeDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **fileSetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | File set for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFileSetsFileSetIdPut**
> FileSetSchema filesV1AssetsAssetIdFileSetsFileSetIdPut(fileSetSchema)

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFileSetsFileSetIdPutRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileSetId: "file_set_id_example",
  // FileSetSchema | body
  fileSetSchema: {
    archiveFileSetId: "archiveFileSetId_example",
    baseDir: "baseDir_example",
    componentIds: [
      "componentIds_example",
    ],
    dateDeleted: new Date('1970-01-01T00:00:00.00Z'),
    formatId: "formatId_example",
    isArchive: true,
    name: "name_example",
    originalStorageId: "originalStorageId_example",
    status: "ACTIVE",
    storageId: "storageId_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFileSetsFileSetIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileSetSchema** | **FileSetSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **fileSetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FileSetSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a file set that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | File set for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFileSetsFileSetIdRestorePut**
> void filesV1AssetsAssetIdFileSetsFileSetIdRestorePut()

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFileSetsFileSetIdRestorePutRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileSetId: "file_set_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFileSetsFileSetIdRestorePut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **fileSetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | File set that has been restored |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | File set for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFileSetsGet**
> FileSetsSchema filesV1AssetsAssetIdFileSetsGet()

 Required roles:  - can_read_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFileSetsGetRequest = {
  // string
  assetId: "asset_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last file set on previous page (optional)
  lastId: "last_id_example",
  // boolean | Set to true if you need a total amount of files in a file set (optional)
  fileCount: false,
};

apiInstance.filesV1AssetsAssetIdFileSetsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last file set on previous page | (optional) defaults to undefined
 **fileCount** | [**boolean**] | Set to true if you need a total amount of files in a file set | (optional) defaults to false


### Return type

**FileSetsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all file sets associated with this asset |  -  |
**401** | Token is invalid |  -  |
**404** | FileSets for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFileSetsPost**
> FileSetSchema filesV1AssetsAssetIdFileSetsPost(fileSetSchema)

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFileSetsPostRequest = {
  // string
  assetId: "asset_id_example",
  // FileSetSchema | body
  fileSetSchema: {
    archiveFileSetId: "archiveFileSetId_example",
    baseDir: "baseDir_example",
    componentIds: [
      "componentIds_example",
    ],
    dateDeleted: new Date('1970-01-01T00:00:00.00Z'),
    formatId: "formatId_example",
    isArchive: true,
    name: "name_example",
    originalStorageId: "originalStorageId_example",
    status: "ACTIVE",
    storageId: "storageId_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFileSetsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileSetSchema** | **FileSetSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FileSetSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a file set that was created for this asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdCaptureMillisecondsPost**
> TranscodeResponseSchema filesV1AssetsAssetIdFilesFileIdCaptureMillisecondsPost(transcodeRequestSchema)

 Required roles:  - can_create_poster 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdCaptureMillisecondsPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // number
  milliseconds: 1,
  // TranscodeRequestSchema | body
  transcodeRequestSchema: {
    priority: 1,
    setAsCustomKeyframe: true,
    updateProxyMediainfo: true,
    useStorageTranscodeIgnorePattern: true,
  },
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.filesV1AssetsAssetIdFilesFileIdCaptureMillisecondsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcodeRequestSchema** | **TranscodeRequestSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **milliseconds** | [**number**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**TranscodeResponseSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | File or asset not found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdDelete**
> void filesV1AssetsAssetIdFilesFileIdDelete()

 Required roles:  - can_delete_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFilesFileIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**401** | Token is invalid |  -  |
**404** | File for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdDownloadUrlGet**
> FileDownloadURLSchema filesV1AssetsAssetIdFilesFileIdDownloadUrlGet()

 Required roles:  - can_read_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdDownloadUrlGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFilesFileIdDownloadUrlGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FileDownloadURLSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a file download url |  -  |
**401** | Token is invalid |  -  |
**404** | File for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdEditProxiesPost**
> void | EditProxyResponseSchema filesV1AssetsAssetIdFilesFileIdEditProxiesPost(editProxySchema)

 Required roles:  - can_create_transcode_jobs - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdEditProxiesPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // EditProxySchema | body
  editProxySchema: {
    allowMxf: true,
    directoryPath: "directoryPath_example",
    fileSuffix: "fileSuffix_example",
    forceStorageId: true,
    height: -2147483648,
    ignoreTranscoderSettings: true,
    name: "name_example",
    storageId: "storageId_example",
    versionId: "versionId_example",
    width: -2147483648,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFilesFileIdEditProxiesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editProxySchema** | **EditProxySchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void | EditProxyResponseSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ID and status of the job |  -  |
**204** | No edit proxy created |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdGet**
> FileSchema filesV1AssetsAssetIdFilesFileIdGet()

 Required roles:  - can_read_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean | Set to true to get a new upload url for the file (optional)
  generateSignedPostUrl: false,
  // string | Set to attachment if you want a download link. Note that this will not create a asset history entry for the download (optional)
  contentDisposition: "inline",
  // boolean | Set to true to get a new url for the file rather than using a cached url (optional)
  bypassUrlCache: false,
};

apiInstance.filesV1AssetsAssetIdFilesFileIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **generateSignedPostUrl** | [**boolean**] | Set to true to get a new upload url for the file | (optional) defaults to false
 **contentDisposition** | [**string**] | Set to attachment if you want a download link. Note that this will not create a asset history entry for the download | (optional) defaults to 'inline'
 **bypassUrlCache** | [**boolean**] | Set to true to get a new url for the file rather than using a cached url | (optional) defaults to false


### Return type

**FileSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a file associated with this asset |  -  |
**401** | Token is invalid |  -  |
**404** | File for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdIsgHandlerUrlGet**
> ISGHandlerURLSchema filesV1AssetsAssetIdFilesFileIdIsgHandlerUrlGet()

 Required roles:  - can_read_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdIsgHandlerUrlGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFilesFileIdIsgHandlerUrlGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ISGHandlerURLSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a file handler URL for ISG |  -  |
**401** | Token is invalid |  -  |
**404** | File for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdKeyframesPost**
> void | TranscodeResponseSchema filesV1AssetsAssetIdFilesFileIdKeyframesPost(transcodeRequestSchema)

 Required roles:  - can_create_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdKeyframesPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // TranscodeRequestSchema | body
  transcodeRequestSchema: {
    priority: 1,
    setAsCustomKeyframe: true,
    updateProxyMediainfo: true,
    useStorageTranscodeIgnorePattern: true,
  },
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.filesV1AssetsAssetIdFilesFileIdKeyframesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcodeRequestSchema** | **TranscodeRequestSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**void | TranscodeResponseSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | Transcode was ignored by Storage ignore pattern |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | File or asset not found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdMediainfoPost**
> TranscodeResponseSchema filesV1AssetsAssetIdFilesFileIdMediainfoPost(transcodeRequestSchema)

 Required roles:  - can_create_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdMediainfoPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // TranscodeRequestSchema | body
  transcodeRequestSchema: {
    priority: 1,
    setAsCustomKeyframe: true,
    updateProxyMediainfo: true,
    useStorageTranscodeIgnorePattern: true,
  },
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.filesV1AssetsAssetIdFilesFileIdMediainfoPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcodeRequestSchema** | **TranscodeRequestSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**TranscodeResponseSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | File or asset not found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdMultipartB2CancelPost**
> void filesV1AssetsAssetIdFilesFileIdMultipartB2CancelPost(multipartB2CancelUpload)

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdMultipartB2CancelPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // MultipartB2CancelUpload | body
  multipartB2CancelUpload: {
    uploadFileId: "uploadFileId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean | Use temporary file record (optional)
  temporary: false,
};

apiInstance.filesV1AssetsAssetIdFilesFileIdMultipartB2CancelPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multipartB2CancelUpload** | **MultipartB2CancelUpload**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **temporary** | [**boolean**] | Use temporary file record | (optional) defaults to false


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Upload canceled |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdMultipartB2FinishPost**
> void filesV1AssetsAssetIdFilesFileIdMultipartB2FinishPost(multipartB2FinishUpload)

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdMultipartB2FinishPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // MultipartB2FinishUpload | body
  multipartB2FinishUpload: {
    sha1List: [
      "sha1List_example",
    ],
    uploadFileId: "uploadFileId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean | Use temporary file record (optional)
  temporary: false,
};

apiInstance.filesV1AssetsAssetIdFilesFileIdMultipartB2FinishPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multipartB2FinishUpload** | **MultipartB2FinishUpload**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **temporary** | [**boolean**] | Use temporary file record | (optional) defaults to false


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful upload |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdMultipartB2StartPost**
> MultipartB2StartUpload filesV1AssetsAssetIdFilesFileIdMultipartB2StartPost()

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdMultipartB2StartPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean | Use temporary file record (optional)
  temporary: false,
  // MultipartB2StartUpload | body (optional)
  multipartB2StartUpload: {
    uploadFileId: "uploadFileId_example",
  },
};

apiInstance.filesV1AssetsAssetIdFilesFileIdMultipartB2StartPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multipartB2StartUpload** | **MultipartB2StartUpload**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **temporary** | [**boolean**] | Use temporary file record | (optional) defaults to false


### Return type

**MultipartB2StartUpload**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns part upload url |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdMultipartCleanupPost**
> void filesV1AssetsAssetIdFilesFileIdMultipartCleanupPost(multipartUploadCleanupSchema)

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdMultipartCleanupPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // MultipartUploadCleanupSchema | body
  multipartUploadCleanupSchema: {
    abortUpload: true,
    partsGroupNumber: -9223372036854776000,
    partsNumber: 1,
    temporary: false,
    uploadId: "uploadId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFilesFileIdMultipartCleanupPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multipartUploadCleanupSchema** | **MultipartUploadCleanupSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdMultipartGcsComposeUrlPost**
> MultiPartUploadComposeURLSchema filesV1AssetsAssetIdFilesFileIdMultipartGcsComposeUrlPost(multipartUploadComposeSchema)

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdMultipartGcsComposeUrlPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // MultipartUploadComposeSchema | body
  multipartUploadComposeSchema: {
    contentType: "contentType_example",
    partsGroup: -9223372036854776000,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean | Use temporary file record (optional)
  temporary: false,
};

apiInstance.filesV1AssetsAssetIdFilesFileIdMultipartGcsComposeUrlPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multipartUploadComposeSchema** | **MultipartUploadComposeSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **temporary** | [**boolean**] | Use temporary file record | (optional) defaults to false


### Return type

**MultiPartUploadComposeURLSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return pre-signed compose url |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdMultipartPost**
> void filesV1AssetsAssetIdFilesFileIdMultipartPost(multipartUploadSchema)

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdMultipartPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // MultipartUploadSchema | body
  multipartUploadSchema: {
    partsGroup: -9223372036854776000,
    partsRange: [
      "partsRange_example",
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean | Use temporary file record (optional)
  temporary: false,
};

apiInstance.filesV1AssetsAssetIdFilesFileIdMultipartPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multipartUploadSchema** | **MultipartUploadSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **temporary** | [**boolean**] | Use temporary file record | (optional) defaults to false


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdMultipartUrlGet**
> MultiPartURLsSchema filesV1AssetsAssetIdFilesFileIdMultipartUrlGet()

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdMultipartUrlGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // string | Multipart UploadId
  uploadId: "upload_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string | List of multipart upload urls of required type (optional)
  type: "type_example",
  // number | Maximum PartNumber that multipart upload has (optional)
  maxPartNumber: 1,
  // boolean | Use temporary file record (optional)
  temporary: false,
};

apiInstance.filesV1AssetsAssetIdFilesFileIdMultipartUrlGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **uploadId** | [**string**] | Multipart UploadId | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **type** | [**string**] | List of multipart upload urls of required type | (optional) defaults to undefined
 **maxPartNumber** | [**number**] | Maximum PartNumber that multipart upload has | (optional) defaults to undefined
 **temporary** | [**boolean**] | Use temporary file record | (optional) defaults to false


### Return type

**MultiPartURLsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns presigned urls for multipart upload |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdMultipartUrlPartGet**
> MultiPartUploadURLsSchema filesV1AssetsAssetIdFilesFileIdMultipartUrlPartGet()

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdMultipartUrlPartGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // number | Number of parts to upload
  partsNum: 1,
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string | Multipart UploadId (optional)
  uploadId: "upload_id_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // number | Which page number to fetch (optional)
  page: 1,
  // boolean | Use temporary file record (optional)
  temporary: false,
};

apiInstance.filesV1AssetsAssetIdFilesFileIdMultipartUrlPartGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **partsNum** | [**number**] | Number of parts to upload | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **uploadId** | [**string**] | Multipart UploadId | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1
 **temporary** | [**boolean**] | Use temporary file record | (optional) defaults to false


### Return type

**MultiPartUploadURLsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns presigned urls for multipart part upload |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdMultipartUrlS3PartPost**
> MultiPartS3UrlPartsSchema filesV1AssetsAssetIdFilesFileIdMultipartUrlS3PartPost(multiPartS3UrlPartsSchema)

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdMultipartUrlS3PartPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // MultiPartS3UrlPartsSchema | body
  multiPartS3UrlPartsSchema: {
    parts: [
      {
        checksum: "checksum_example",
        partNumber: 1,
      },
    ],
    uploadId: "uploadId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean | Use temporary file record (optional)
  temporary: false,
};

apiInstance.filesV1AssetsAssetIdFilesFileIdMultipartUrlS3PartPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multiPartS3UrlPartsSchema** | **MultiPartS3UrlPartsSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **temporary** | [**boolean**] | Use temporary file record | (optional) defaults to false


### Return type

**MultiPartS3UrlPartsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns presigned urls for S3 multipart part upload |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | File or asset not found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdPatch**
> FileSchema filesV1AssetsAssetIdFilesFileIdPatch(fileSchema)

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdPatchRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // FileSchema | body
  fileSchema: {
    assetId: "assetId_example",
    checksum: "checksum_example",
    directoryPath: "directoryPath_example",
    fileDateCreated: new Date('1970-01-01T00:00:00.00Z'),
    fileDateModified: new Date('1970-01-01T00:00:00.00Z'),
    fileSetId: "fileSetId_example",
    formatId: "formatId_example",
    name: "name_example",
    originalName: "originalName_example",
    parentId: "parentId_example",
    size: -9223372036854776000,
    status: "OPEN",
    storageId: "storageId_example",
    systemDomainId: "systemDomainId_example",
    type: "FILE",
    userId: "userId_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFilesFileIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileSchema** | **FileSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FileSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a file that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | File for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdPut**
> FileSchema filesV1AssetsAssetIdFilesFileIdPut(fileSchema)

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdPutRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // FileSchema | body
  fileSchema: {
    assetId: "assetId_example",
    checksum: "checksum_example",
    directoryPath: "directoryPath_example",
    fileDateCreated: new Date('1970-01-01T00:00:00.00Z'),
    fileDateModified: new Date('1970-01-01T00:00:00.00Z'),
    fileSetId: "fileSetId_example",
    formatId: "formatId_example",
    name: "name_example",
    originalName: "originalName_example",
    parentId: "parentId_example",
    size: -9223372036854776000,
    status: "OPEN",
    storageId: "storageId_example",
    systemDomainId: "systemDomainId_example",
    type: "FILE",
    userId: "userId_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFilesFileIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileSchema** | **FileSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FileSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a file that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | File for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdReindexPost**
> void filesV1AssetsAssetIdFilesFileIdReindexPost()

 Required roles:  - can_reindex_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdReindexPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFilesFileIdReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ID and status of the job |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesFileIdSubtitlesPost**
> void filesV1AssetsAssetIdFilesFileIdSubtitlesPost()

 Required roles:  - can_create_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesFileIdSubtitlesPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
  // SubtitleRequestSchema | body (optional)
  subtitleRequestSchema: {
    createTranscription: true,
    priority: 1,
  },
};

apiInstance.filesV1AssetsAssetIdFilesFileIdSubtitlesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subtitleRequestSchema** | **SubtitleRequestSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | File or asset not found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesGet**
> FilesSchema filesV1AssetsAssetIdFilesGet()

 Required roles:  - can_read_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesGetRequest = {
  // string
  assetId: "asset_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // boolean | Set to True if you do need a URL, this makes the request slower. (optional)
  generateSignedUrl: false,
  // string | Set to attachment if you want a download link. Note that this will not create a download in asset history (optional)
  contentDisposition: "inline",
  // string | ID of a last file on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1AssetsAssetIdFilesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **generateSignedUrl** | [**boolean**] | Set to True if you do need a URL, this makes the request slower. | (optional) defaults to false
 **contentDisposition** | [**string**] | Set to attachment if you want a download link. Note that this will not create a download in asset history | (optional) defaults to 'inline'
 **lastId** | [**string**] | ID of a last file on previous page | (optional) defaults to undefined


### Return type

**FilesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all files associated with this asset |  -  |
**401** | Token is invalid |  -  |
**404** | Files for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFilesPost**
> FileSchema filesV1AssetsAssetIdFilesPost(fileCreateSchema)

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFilesPostRequest = {
  // string
  assetId: "asset_id_example",
  // FileCreateSchema | body
  fileCreateSchema: {
    assetId: "assetId_example",
    checksum: "checksum_example",
    directoryPath: "directoryPath_example",
    fileDateCreated: new Date('1970-01-01T00:00:00.00Z'),
    fileDateModified: new Date('1970-01-01T00:00:00.00Z'),
    fileSetId: "fileSetId_example",
    formatId: "formatId_example",
    name: "name_example",
    originalName: "originalName_example",
    parentId: "parentId_example",
    size: -9223372036854776000,
    status: "OPEN",
    storageId: "storageId_example",
    type: "FILE",
    userId: "userId_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFilesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileCreateSchema** | **FileCreateSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FileSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a file that was created for this asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsFormatIdArchiveDelete**
> void filesV1AssetsAssetIdFormatsFormatIdArchiveDelete(formatDeleteArchiveSchema)

 Required roles:  - can_delete_archived_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsFormatIdArchiveDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  formatId: "format_id_example",
  // FormatDeleteArchiveSchema | body
  formatDeleteArchiveSchema: {
    fileSetId: "fileSetId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFormatsFormatIdArchiveDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formatDeleteArchiveSchema** | **FormatDeleteArchiveSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **formatId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | No body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Format for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsFormatIdArchivePost**
> void filesV1AssetsAssetIdFormatsFormatIdArchivePost(formatArchiveSchema)

 Required roles:  - can_archive_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsFormatIdArchivePostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  formatId: "format_id_example",
  // FormatArchiveSchema | body
  formatArchiveSchema: {
    deleteOriginal: true,
    destinationDirectoryPath: "destinationDirectoryPath_example",
    destinationStorageId: "destinationStorageId_example",
    destinationStorageMethod: "destinationStorageMethod_example",
    formatId: "formatId_example",
    originalFileSetId: "originalFileSetId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFormatsFormatIdArchivePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formatArchiveSchema** | **FormatArchiveSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **formatId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | No body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Format for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdDelete**
> ComponentsSchema filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdDelete()

 Required roles:  - can_delete_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  formatId: "format_id_example",
  // string
  componentId: "component_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **formatId** | [**string**] |  | defaults to undefined
 **componentId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ComponentsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all formats associated with this asset |  -  |
**400** | Invalid input (Wrong type of UUID or JSON) |  -  |
**401** | Token is invalid |  -  |
**404** | Formats for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdGet**
> ComponentsSchema filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdGet()

 Required roles:  - can_read_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  formatId: "format_id_example",
  // string
  componentId: "component_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **formatId** | [**string**] |  | defaults to undefined
 **componentId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ComponentsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all formats associated with this asset |  -  |
**400** | Invalid input (Wrong type of UUID or JSON) |  -  |
**401** | Token is invalid |  -  |
**404** | Asset/Format/Component don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdPut**
> ComponentsSchema filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdPut()

 Required roles:  - can_create_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdPutRequest = {
  // string
  assetId: "asset_id_example",
  // string
  formatId: "format_id_example",
  // string
  componentId: "component_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFormatsFormatIdComponentsComponentIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **formatId** | [**string**] |  | defaults to undefined
 **componentId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ComponentsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all formats associated with this asset |  -  |
**400** | Invalid input (Wrong type of UUID or JSON) |  -  |
**401** | Token is invalid |  -  |
**404** | Formats for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsFormatIdComponentsGet**
> ComponentsSchema filesV1AssetsAssetIdFormatsFormatIdComponentsGet()

 Required roles:  - can_read_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsFormatIdComponentsGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  formatId: "format_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFormatsFormatIdComponentsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **formatId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ComponentsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all formats associated with this asset |  -  |
**400** | Invalid input (Wrong type of UUID or JSON) |  -  |
**401** | Token is invalid |  -  |
**404** | Asset/Format/Component don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsFormatIdComponentsPost**
> ComponentsSchema filesV1AssetsAssetIdFormatsFormatIdComponentsPost(componentSchema)

 Required roles:  - can_create_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsFormatIdComponentsPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  formatId: "format_id_example",
  // ComponentSchema | body
  componentSchema: {
    metadata: {
      "key": "key_example",
    },
    name: "name_example",
    type: "VIDEO",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFormatsFormatIdComponentsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **componentSchema** | **ComponentSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **formatId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ComponentsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all formats associated with this asset |  -  |
**400** | Invalid input (Wrong type of UUID or JSON) |  -  |
**401** | Token is invalid |  -  |
**404** | Formats for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsFormatIdDelete**
> void filesV1AssetsAssetIdFormatsFormatIdDelete()

 Required roles:  - can_delete_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsFormatIdDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  formatId: "format_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean | Permanently delete format without sending it to the Recycle Bin (optional)
  deleteImmediately: true,
};

apiInstance.filesV1AssetsAssetIdFormatsFormatIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **formatId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **deleteImmediately** | [**boolean**] | Permanently delete format without sending it to the Recycle Bin | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Format that marked as deleted |  -  |
**204** | Without body in case &#x60;immediately&#x60; option was provided |  -  |
**401** | Token is invalid |  -  |
**404** | Format for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsFormatIdFileSetsGet**
> FileSetsSchema filesV1AssetsAssetIdFormatsFormatIdFileSetsGet()

 Required roles:  - can_read_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsFormatIdFileSetsGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  formatId: "format_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last file set on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1AssetsAssetIdFormatsFormatIdFileSetsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **formatId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last file set on previous page | (optional) defaults to undefined


### Return type

**FileSetsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all file sets associated with this asset |  -  |
**401** | Token is invalid |  -  |
**404** | FileSets for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesGet**
> FileSetSourcesSchema filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesGet()

 Required roles:  - can_read_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  formatId: "format_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **formatId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FileSetSourcesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a files |  -  |
**400** | Invalid input (Wrong type of UUID or JSON) |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesStorageMethodGet**
> FileSetsSchema filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesStorageMethodGet()

 Required roles:  - can_read_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesStorageMethodGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  formatId: "format_id_example",
  // string
  storageMethod: "storage_method_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFormatsFormatIdFileSetsSourcesStorageMethodGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **formatId** | [**string**] |  | defaults to undefined
 **storageMethod** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FileSetsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a files |  -  |
**400** | Invalid input (Wrong type of UUID or JSON) |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsFormatIdGet**
> FormatSchema filesV1AssetsAssetIdFormatsFormatIdGet()

 Required roles:  - can_read_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsFormatIdGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  formatId: "format_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFormatsFormatIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **formatId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FormatSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a format associated with this asset |  -  |
**401** | Token is invalid |  -  |
**404** | Format for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsFormatIdPatch**
> FormatSchema filesV1AssetsAssetIdFormatsFormatIdPatch(formatSchema)

 Required roles:  - can_write_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsFormatIdPatchRequest = {
  // string
  assetId: "asset_id_example",
  // string
  formatId: "format_id_example",
  // FormatSchema | body
  formatSchema: {
    archiveStatus: "NOT_ARCHIVED",
    components: [
      {
        metadata: {
          "key": "key_example",
        },
        name: "name_example",
        type: "VIDEO",
      },
    ],
    dateDeleted: new Date('1970-01-01T00:00:00.00Z'),
    isOnline: true,
    metadata: [
      {
        "key": "key_example",
      },
    ],
    name: "name_example",
    status: "ACTIVE",
    storageMethods: [
      "storageMethods_example",
    ],
    userId: "userId_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFormatsFormatIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formatSchema** | **FormatSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **formatId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FormatSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a format that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Format for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsFormatIdPurgeDelete**
> void filesV1AssetsAssetIdFormatsFormatIdPurgeDelete()

 Required roles:  - can_delete_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsFormatIdPurgeDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  formatId: "format_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFormatsFormatIdPurgeDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **formatId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Format for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsFormatIdPut**
> FormatSchema filesV1AssetsAssetIdFormatsFormatIdPut(formatSchema)

 Required roles:  - can_write_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsFormatIdPutRequest = {
  // string
  assetId: "asset_id_example",
  // string
  formatId: "format_id_example",
  // FormatSchema | body
  formatSchema: {
    archiveStatus: "NOT_ARCHIVED",
    components: [
      {
        metadata: {
          "key": "key_example",
        },
        name: "name_example",
        type: "VIDEO",
      },
    ],
    dateDeleted: new Date('1970-01-01T00:00:00.00Z'),
    isOnline: true,
    metadata: [
      {
        "key": "key_example",
      },
    ],
    name: "name_example",
    status: "ACTIVE",
    storageMethods: [
      "storageMethods_example",
    ],
    userId: "userId_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFormatsFormatIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formatSchema** | **FormatSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **formatId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FormatSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a format that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Format for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsFormatIdRestorePost**
> void filesV1AssetsAssetIdFormatsFormatIdRestorePost(formatRestoreSchema)

 Required roles:  - can_restore_archived_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsFormatIdRestorePostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  formatId: "format_id_example",
  // FormatRestoreSchema | body
  formatRestoreSchema: {
    destinationDirectoryPath: "destinationDirectoryPath_example",
    destinationStorageId: "destinationStorageId_example",
    storageId: "storageId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFormatsFormatIdRestorePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formatRestoreSchema** | **FormatRestoreSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **formatId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | No body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Format for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsFormatIdRestorePut**
> void filesV1AssetsAssetIdFormatsFormatIdRestorePut()

 Required roles:  - can_write_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsFormatIdRestorePutRequest = {
  // string
  assetId: "asset_id_example",
  // string
  formatId: "format_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFormatsFormatIdRestorePut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **formatId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Format that has been restored |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Format for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsFormatIdStoragesStorageIdFileSetsGet**
> FileSetsSchema filesV1AssetsAssetIdFormatsFormatIdStoragesStorageIdFileSetsGet()

 Required roles:  - can_read_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsFormatIdStoragesStorageIdFileSetsGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  formatId: "format_id_example",
  // string
  storageId: "storage_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last file set on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1AssetsAssetIdFormatsFormatIdStoragesStorageIdFileSetsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **formatId** | [**string**] |  | defaults to undefined
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last file set on previous page | (optional) defaults to undefined


### Return type

**FileSetsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all file sets associated with this asset |  -  |
**401** | Token is invalid |  -  |
**404** | FileSets for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsGet**
> FormatsSchema filesV1AssetsAssetIdFormatsGet()

 Required roles:  - can_read_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsGetRequest = {
  // string
  assetId: "asset_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last format on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1AssetsAssetIdFormatsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last format on previous page | (optional) defaults to undefined


### Return type

**FormatsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all formats associated with this asset |  -  |
**401** | Token is invalid |  -  |
**404** | Formats for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsNameGet**
> FormatSchema filesV1AssetsAssetIdFormatsNameGet()

 Required roles:  - can_read_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsNameGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  name: "name_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFormatsNameGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FormatSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a format associated with this asset |  -  |
**401** | Token is invalid |  -  |
**404** | Format for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdFormatsPost**
> FormatSchema filesV1AssetsAssetIdFormatsPost(formatSchema)

 Required roles:  - can_write_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdFormatsPostRequest = {
  // string
  assetId: "asset_id_example",
  // FormatSchema | body
  formatSchema: {
    archiveStatus: "NOT_ARCHIVED",
    components: [
      {
        metadata: {
          "key": "key_example",
        },
        name: "name_example",
        type: "VIDEO",
      },
    ],
    dateDeleted: new Date('1970-01-01T00:00:00.00Z'),
    isOnline: true,
    metadata: [
      {
        "key": "key_example",
      },
    ],
    name: "name_example",
    status: "ACTIVE",
    storageMethods: [
      "storageMethods_example",
    ],
    userId: "userId_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdFormatsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formatSchema** | **FormatSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FormatSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a format that was created for this asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdKeyframesGet**
> KeyframesSchema filesV1AssetsAssetIdKeyframesGet()

 Required roles:  - can_read_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdKeyframesGetRequest = {
  // string
  assetId: "asset_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // boolean | Set to false if you don\'t need a URL, will speed things up (optional)
  generateSignedUrl: true,
  // string | Set to attachment if you do not want a download link (optional)
  contentDisposition: "inline",
  // string | ID of a last keyframe on previous page (optional)
  lastId: "last_id_example",
  // boolean | If true return asset\'s keyframes for all versions (optional)
  includeAllVersions: true,
};

apiInstance.filesV1AssetsAssetIdKeyframesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **generateSignedUrl** | [**boolean**] | Set to false if you don\&#39;t need a URL, will speed things up | (optional) defaults to true
 **contentDisposition** | [**string**] | Set to attachment if you do not want a download link | (optional) defaults to 'inline'
 **lastId** | [**string**] | ID of a last keyframe on previous page | (optional) defaults to undefined
 **includeAllVersions** | [**boolean**] | If true return asset\&#39;s keyframes for all versions | (optional) defaults to undefined


### Return type

**KeyframesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all keyframes associated with this asset |  -  |
**401** | Token is invalid |  -  |
**404** | Keyframes for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdKeyframesKeyframeIdDelete**
> void filesV1AssetsAssetIdKeyframesKeyframeIdDelete()

 Required roles:  - can_write_keyframes 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdKeyframesKeyframeIdDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  keyframeId: "keyframe_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean (optional)
  keepPoster: true,
};

apiInstance.filesV1AssetsAssetIdKeyframesKeyframeIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **keyframeId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **keepPoster** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Keyframe for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdKeyframesKeyframeIdGet**
> FileSchema filesV1AssetsAssetIdKeyframesKeyframeIdGet()

 Required roles:  - can_read_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdKeyframesKeyframeIdGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  keyframeId: "keyframe_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string | Set to attachment if you do not want a download link (optional)
  contentDisposition: "inline",
};

apiInstance.filesV1AssetsAssetIdKeyframesKeyframeIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **keyframeId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **contentDisposition** | [**string**] | Set to attachment if you do not want a download link | (optional) defaults to 'inline'


### Return type

**FileSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all files associated with this asset |  -  |
**401** | Token is invalid |  -  |
**404** | Keyframe for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdKeyframesKeyframeIdPatch**
> KeyframeSchema filesV1AssetsAssetIdKeyframesKeyframeIdPatch(keyframeSchema)

 Required roles:  - can_write_keyframes 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdKeyframesKeyframeIdPatchRequest = {
  // string
  assetId: "asset_id_example",
  // string
  keyframeId: "keyframe_id_example",
  // KeyframeSchema | body
  keyframeSchema: {
    assetId: "assetId_example",
    collectionId: "collectionId_example",
    filename: "filename_example",
    format: "format_example",
    isCustomKeyframe: true,
    name: "name_example",
    resolution: {
      height: -2147483648,
      width: -2147483648,
    },
    rotation: -2147483648,
    size: -9223372036854776000,
    status: "OPEN",
    storageId: "storageId_example",
    timeCode: {
      framesNumber: -9223372036854776000,
      isDropFrame: true,
      timeBase: {
        denominator: -2147483648,
        numerator: -2147483648,
      },
    },
    type: "KEYFRAME_MAP",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdKeyframesKeyframeIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyframeSchema** | **KeyframeSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **keyframeId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**KeyframeSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a keyframe that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Keyframe for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdKeyframesKeyframeIdPublicDelete**
> KeyframeSchema filesV1AssetsAssetIdKeyframesKeyframeIdPublicDelete()

 Required roles:  - can_write_keyframes 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdKeyframesKeyframeIdPublicDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  keyframeId: "keyframe_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdKeyframesKeyframeIdPublicDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **keyframeId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**KeyframeSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a keyframe that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdKeyframesKeyframeIdPublicPost**
> KeyframeSchema filesV1AssetsAssetIdKeyframesKeyframeIdPublicPost()

 Required roles:  - can_write_keyframes 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdKeyframesKeyframeIdPublicPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  keyframeId: "keyframe_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdKeyframesKeyframeIdPublicPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **keyframeId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**KeyframeSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a keyframe that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdKeyframesKeyframeIdPut**
> KeyframeSchema filesV1AssetsAssetIdKeyframesKeyframeIdPut(keyframeSchema)

 Required roles:  - can_write_keyframes 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdKeyframesKeyframeIdPutRequest = {
  // string
  assetId: "asset_id_example",
  // string
  keyframeId: "keyframe_id_example",
  // KeyframeSchema | body
  keyframeSchema: {
    assetId: "assetId_example",
    collectionId: "collectionId_example",
    filename: "filename_example",
    format: "format_example",
    isCustomKeyframe: true,
    name: "name_example",
    resolution: {
      height: -2147483648,
      width: -2147483648,
    },
    rotation: -2147483648,
    size: -9223372036854776000,
    status: "OPEN",
    storageId: "storageId_example",
    timeCode: {
      framesNumber: -9223372036854776000,
      isDropFrame: true,
      timeBase: {
        denominator: -2147483648,
        numerator: -2147483648,
      },
    },
    type: "KEYFRAME_MAP",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdKeyframesKeyframeIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyframeSchema** | **KeyframeSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **keyframeId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**KeyframeSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a keyframe that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Keyframe for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdKeyframesPost**
> KeyframeCreateSchema filesV1AssetsAssetIdKeyframesPost(keyframeSchema)

 Required roles:  - can_write_keyframes 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdKeyframesPostRequest = {
  // string
  assetId: "asset_id_example",
  // KeyframeSchema | body
  keyframeSchema: {
    assetId: "assetId_example",
    collectionId: "collectionId_example",
    filename: "filename_example",
    format: "format_example",
    isCustomKeyframe: true,
    name: "name_example",
    resolution: {
      height: -2147483648,
      width: -2147483648,
    },
    rotation: -2147483648,
    size: -9223372036854776000,
    status: "OPEN",
    storageId: "storageId_example",
    timeCode: {
      framesNumber: -9223372036854776000,
      isDropFrame: true,
      timeBase: {
        denominator: -2147483648,
        numerator: -2147483648,
      },
    },
    type: "KEYFRAME_MAP",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean | Set to True to get a google resumable upload link (optional)
  useGoogleResumableUpload: false,
};

apiInstance.filesV1AssetsAssetIdKeyframesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyframeSchema** | **KeyframeSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **useGoogleResumableUpload** | [**boolean**] | Set to True to get a google resumable upload link | (optional) defaults to false


### Return type

**KeyframeCreateSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a keyframe that was created for this asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdMethodStorageMethodKeyframesPost**
> KeyframeCreateSchema filesV1AssetsAssetIdMethodStorageMethodKeyframesPost(keyframeSchema)

 Required roles:  - can_write_keyframes 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdMethodStorageMethodKeyframesPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  storageMethod: "storage_method_example",
  // KeyframeSchema | body
  keyframeSchema: {
    assetId: "assetId_example",
    collectionId: "collectionId_example",
    filename: "filename_example",
    format: "format_example",
    isCustomKeyframe: true,
    name: "name_example",
    resolution: {
      height: -2147483648,
      width: -2147483648,
    },
    rotation: -2147483648,
    size: -9223372036854776000,
    status: "OPEN",
    storageId: "storageId_example",
    timeCode: {
      framesNumber: -9223372036854776000,
      isDropFrame: true,
      timeBase: {
        denominator: -2147483648,
        numerator: -2147483648,
      },
    },
    type: "KEYFRAME_MAP",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean | Set to True to get a google resumable upload link (optional)
  useGoogleResumableUpload: false,
};

apiInstance.filesV1AssetsAssetIdMethodStorageMethodKeyframesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyframeSchema** | **KeyframeSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **storageMethod** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **useGoogleResumableUpload** | [**boolean**] | Set to True to get a google resumable upload link | (optional) defaults to false


### Return type

**KeyframeCreateSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a keyframe that was created for this asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdMethodStorageMethodProxiesPost**
> ProxyCreateSchema filesV1AssetsAssetIdMethodStorageMethodProxiesPost(proxySchema)

 Required roles:  - can_write_proxies 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdMethodStorageMethodProxiesPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  storageMethod: "storage_method_example",
  // ProxySchema | body
  proxySchema: {
    assetId: "assetId_example",
    audioBitrate: -2147483648,
    bitRate: -2147483648,
    codec: "codec_example",
    filename: "filename_example",
    format: "format_example",
    frameRate: "frameRate_example",
    isDropFrame: true,
    name: "name_example",
    resolution: {
      height: -2147483648,
      width: -2147483648,
    },
    rotation: -2147483648,
    size: -9223372036854776000,
    startTimeCode: "startTimeCode_example",
    status: "OPEN",
    storageId: "storageId_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdMethodStorageMethodProxiesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proxySchema** | **ProxySchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **storageMethod** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ProxyCreateSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a proxy that was created for this asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdProxiesGet**
> ProxiesSchema filesV1AssetsAssetIdProxiesGet()

 Required roles:  - can_read_proxies 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdProxiesGetRequest = {
  // string
  assetId: "asset_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // boolean | Set to false if you don\'t need a URL, will speed things up (optional)
  generateSignedUrl: true,
  // string | Set to attachment if you want a download link (optional)
  contentDisposition: "inline",
  // string | ID of a last proxy on previous page (optional)
  lastId: "last_id_example",
  // boolean | Set to true to get a new url for the file rather than using a cached url (optional)
  bypassUrlCache: false,
};

apiInstance.filesV1AssetsAssetIdProxiesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **generateSignedUrl** | [**boolean**] | Set to false if you don\&#39;t need a URL, will speed things up | (optional) defaults to true
 **contentDisposition** | [**string**] | Set to attachment if you want a download link | (optional) defaults to 'inline'
 **lastId** | [**string**] | ID of a last proxy on previous page | (optional) defaults to undefined
 **bypassUrlCache** | [**boolean**] | Set to true to get a new url for the file rather than using a cached url | (optional) defaults to false


### Return type

**ProxiesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all proxies associated with this asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Proxies for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdProxiesPost**
> ProxyCreateSchema filesV1AssetsAssetIdProxiesPost(proxySchema)

 Required roles:  - can_write_proxies 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdProxiesPostRequest = {
  // string
  assetId: "asset_id_example",
  // ProxySchema | body
  proxySchema: {
    assetId: "assetId_example",
    audioBitrate: -2147483648,
    bitRate: -2147483648,
    codec: "codec_example",
    filename: "filename_example",
    format: "format_example",
    frameRate: "frameRate_example",
    isDropFrame: true,
    name: "name_example",
    resolution: {
      height: -2147483648,
      width: -2147483648,
    },
    rotation: -2147483648,
    size: -9223372036854776000,
    startTimeCode: "startTimeCode_example",
    status: "OPEN",
    storageId: "storageId_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdProxiesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proxySchema** | **ProxySchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ProxyCreateSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a proxy that was created for this asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdProxiesProxyIdDelete**
> void filesV1AssetsAssetIdProxiesProxyIdDelete()

 Required roles:  - can_delete_proxies 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdProxiesProxyIdDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  proxyId: "proxy_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdProxiesProxyIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **proxyId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Proxy for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdProxiesProxyIdDownloadUrlGet**
> ProxyDownloadURLSchema filesV1AssetsAssetIdProxiesProxyIdDownloadUrlGet()

 Required roles:  - can_read_proxies 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdProxiesProxyIdDownloadUrlGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  proxyId: "proxy_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdProxiesProxyIdDownloadUrlGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **proxyId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ProxyDownloadURLSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns proxy associated with this asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Proxy for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdProxiesProxyIdGet**
> ProxySchema filesV1AssetsAssetIdProxiesProxyIdGet()

 Required roles:  - can_read_proxies 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdProxiesProxyIdGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  proxyId: "proxy_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string | Set to attachment if you want a download link (optional)
  contentDisposition: "inline",
};

apiInstance.filesV1AssetsAssetIdProxiesProxyIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **proxyId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **contentDisposition** | [**string**] | Set to attachment if you want a download link | (optional) defaults to 'inline'


### Return type

**ProxySchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns proxy associated with this asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Proxy for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdProxiesProxyIdKeyframesPost**
> TranscodeResponseSchema filesV1AssetsAssetIdProxiesProxyIdKeyframesPost(transcodeRequestSchema)

 Required roles:  - can_create_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdProxiesProxyIdKeyframesPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  proxyId: "proxy_id_example",
  // TranscodeRequestSchema | body
  transcodeRequestSchema: {
    priority: 1,
    setAsCustomKeyframe: true,
    updateProxyMediainfo: true,
    useStorageTranscodeIgnorePattern: true,
  },
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.filesV1AssetsAssetIdProxiesProxyIdKeyframesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcodeRequestSchema** | **TranscodeRequestSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **proxyId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**TranscodeResponseSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | File or asset not found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdProxiesProxyIdMultipartCleanupPost**
> void filesV1AssetsAssetIdProxiesProxyIdMultipartCleanupPost(multipartUploadProxyCleanupSchema)

 Required roles:  - can_write_proxies 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdProxiesProxyIdMultipartCleanupPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  proxyId: "proxy_id_example",
  // MultipartUploadProxyCleanupSchema | body
  multipartUploadProxyCleanupSchema: {
    abortUpload: true,
    uploadId: "uploadId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdProxiesProxyIdMultipartCleanupPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multipartUploadProxyCleanupSchema** | **MultipartUploadProxyCleanupSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **proxyId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdProxiesProxyIdMultipartUrlGet**
> MultiPartURLsSchema filesV1AssetsAssetIdProxiesProxyIdMultipartUrlGet()

 Required roles:  - can_write_proxies 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdProxiesProxyIdMultipartUrlGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  proxyId: "proxy_id_example",
  // string | Multipart UploadId
  uploadId: "upload_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string | List of multipart upload urls of required type (optional)
  type: "type_example",
  // number | Maximum PartNumber that multipart upload has (optional)
  maxPartNumber: 1,
};

apiInstance.filesV1AssetsAssetIdProxiesProxyIdMultipartUrlGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **proxyId** | [**string**] |  | defaults to undefined
 **uploadId** | [**string**] | Multipart UploadId | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **type** | [**string**] | List of multipart upload urls of required type | (optional) defaults to undefined
 **maxPartNumber** | [**number**] | Maximum PartNumber that multipart upload has | (optional) defaults to undefined


### Return type

**MultiPartURLsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns presigned urls for multipart upload |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdProxiesProxyIdMultipartUrlPartGet**
> MultiPartUploadURLsSchema filesV1AssetsAssetIdProxiesProxyIdMultipartUrlPartGet()

 Required roles:  - can_write_proxies 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdProxiesProxyIdMultipartUrlPartGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  proxyId: "proxy_id_example",
  // number | Number of parts to upload
  partsNum: 1,
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string | Multipart UploadId (optional)
  uploadId: "upload_id_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // number | Which page number to fetch (optional)
  page: 1,
};

apiInstance.filesV1AssetsAssetIdProxiesProxyIdMultipartUrlPartGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **proxyId** | [**string**] |  | defaults to undefined
 **partsNum** | [**number**] | Number of parts to upload | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **uploadId** | [**string**] | Multipart UploadId | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1


### Return type

**MultiPartUploadURLsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns presigned urls for multipart part upload |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdProxiesProxyIdPatch**
> ProxySchema filesV1AssetsAssetIdProxiesProxyIdPatch(proxySchema)

 Required roles:  - can_write_proxies 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdProxiesProxyIdPatchRequest = {
  // string
  assetId: "asset_id_example",
  // string
  proxyId: "proxy_id_example",
  // ProxySchema | body
  proxySchema: {
    assetId: "assetId_example",
    audioBitrate: -2147483648,
    bitRate: -2147483648,
    codec: "codec_example",
    filename: "filename_example",
    format: "format_example",
    frameRate: "frameRate_example",
    isDropFrame: true,
    name: "name_example",
    resolution: {
      height: -2147483648,
      width: -2147483648,
    },
    rotation: -2147483648,
    size: -9223372036854776000,
    startTimeCode: "startTimeCode_example",
    status: "OPEN",
    storageId: "storageId_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdProxiesProxyIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proxySchema** | **ProxySchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **proxyId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ProxySchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a proxy that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Proxy for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdProxiesProxyIdPublicDelete**
> ProxySchema filesV1AssetsAssetIdProxiesProxyIdPublicDelete()

 Required roles:  - can_write_proxies 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdProxiesProxyIdPublicDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  proxyId: "proxy_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdProxiesProxyIdPublicDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **proxyId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ProxySchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a proxy that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdProxiesProxyIdPublicPost**
> ProxySchema filesV1AssetsAssetIdProxiesProxyIdPublicPost()

 Required roles:  - can_write_proxies 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdProxiesProxyIdPublicPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  proxyId: "proxy_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdProxiesProxyIdPublicPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **proxyId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ProxySchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a proxy that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdProxiesProxyIdPut**
> ProxySchema filesV1AssetsAssetIdProxiesProxyIdPut(proxySchema)

 Required roles:  - can_write_proxies 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdProxiesProxyIdPutRequest = {
  // string
  assetId: "asset_id_example",
  // string
  proxyId: "proxy_id_example",
  // ProxySchema | body
  proxySchema: {
    assetId: "assetId_example",
    audioBitrate: -2147483648,
    bitRate: -2147483648,
    codec: "codec_example",
    filename: "filename_example",
    format: "format_example",
    frameRate: "frameRate_example",
    isDropFrame: true,
    name: "name_example",
    resolution: {
      height: -2147483648,
      width: -2147483648,
    },
    rotation: -2147483648,
    size: -9223372036854776000,
    startTimeCode: "startTimeCode_example",
    status: "OPEN",
    storageId: "storageId_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdProxiesProxyIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proxySchema** | **ProxySchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **proxyId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ProxySchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a proxy that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Proxy for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdSubtitlesGet**
> SubtitlesSchema filesV1AssetsAssetIdSubtitlesGet()

 Required roles:  - can_read_asset_subtitles 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdSubtitlesGetRequest = {
  // string
  assetId: "asset_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last subtitle on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1AssetsAssetIdSubtitlesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last subtitle on previous page | (optional) defaults to undefined


### Return type

**SubtitlesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all subtitles associated with this asset |  -  |
**401** | Token is invalid |  -  |
**404** | Subtitles for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdSubtitlesLanguageCcGet**
> SubtitleSchema filesV1AssetsAssetIdSubtitlesLanguageCcGet()

 Required roles:  - can_read_asset_subtitles 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdSubtitlesLanguageCcGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  language: "language_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdSubtitlesLanguageCcGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **language** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubtitleSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a subtitle associated with this asset |  -  |
**401** | Token is invalid |  -  |
**404** | Subtitle for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdSubtitlesLanguageCcWebvttGet**
> string filesV1AssetsAssetIdSubtitlesLanguageCcWebvttGet()

 Required roles:  - can_read_asset_subtitles 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdSubtitlesLanguageCcWebvttGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  language: "language_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdSubtitlesLanguageCcWebvttGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **language** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**string**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/vtt, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a subtitle file associated with this asset in a particular language |  -  |
**401** | Token is invalid |  -  |
**404** | Subtitle for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdSubtitlesLanguageGet**
> SubtitleSchema filesV1AssetsAssetIdSubtitlesLanguageGet()

 Required roles:  - can_read_asset_subtitles 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdSubtitlesLanguageGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  language: "language_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdSubtitlesLanguageGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **language** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubtitleSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a format associated with this asset |  -  |
**401** | Token is invalid |  -  |
**404** | Subtitle for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdSubtitlesLanguageWebvttGet**
> string filesV1AssetsAssetIdSubtitlesLanguageWebvttGet()

 Required roles:  - can_read_asset_subtitles 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdSubtitlesLanguageWebvttGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  language: "language_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdSubtitlesLanguageWebvttGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **language** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**string**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/vtt, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a subtitle file associated with this asset in a particular language |  -  |
**401** | Token is invalid |  -  |
**404** | Subtitle for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdSubtitlesPost**
> SubtitleSchema filesV1AssetsAssetIdSubtitlesPost(subtitleSchema)

 Required roles:  - can_write_asset_subtitles 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdSubtitlesPostRequest = {
  // string
  assetId: "asset_id_example",
  // SubtitleSchema | body
  subtitleSchema: {
    closedCaptions: true,
    content: "content_example",
    formatId: "formatId_example",
    language: "language_example",
    name: "name_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdSubtitlesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subtitleSchema** | **SubtitleSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubtitleSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a format that was created for this asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdSubtitlesSubtitleIdCcDelete**
> void filesV1AssetsAssetIdSubtitlesSubtitleIdCcDelete()

 Required roles:  - can_delete_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdSubtitlesSubtitleIdCcDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  subtitleId: "subtitle_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdSubtitlesSubtitleIdCcDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **subtitleId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**401** | Token is invalid |  -  |
**404** | Subtitle for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdSubtitlesSubtitleIdDelete**
> void filesV1AssetsAssetIdSubtitlesSubtitleIdDelete()

 Required roles:  - can_delete_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdSubtitlesSubtitleIdDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  subtitleId: "subtitle_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdSubtitlesSubtitleIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **subtitleId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**401** | Token is invalid |  -  |
**404** | Subtitle for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdSubtitlesSubtitleIdGet**
> SubtitleSchema filesV1AssetsAssetIdSubtitlesSubtitleIdGet()

 Required roles:  - can_read_asset_subtitles 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdSubtitlesSubtitleIdGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  subtitleId: "subtitle_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdSubtitlesSubtitleIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **subtitleId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubtitleSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a subtitle associated with this asset |  -  |
**401** | Token is invalid |  -  |
**404** | Subtitle for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdSubtitlesSubtitleIdPatch**
> SubtitleSchema filesV1AssetsAssetIdSubtitlesSubtitleIdPatch(subtitleSchema)

 Required roles:  - can_write_asset_subtitles 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdSubtitlesSubtitleIdPatchRequest = {
  // string
  assetId: "asset_id_example",
  // string
  subtitleId: "subtitle_id_example",
  // SubtitleSchema | body
  subtitleSchema: {
    closedCaptions: true,
    content: "content_example",
    formatId: "formatId_example",
    language: "language_example",
    name: "name_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdSubtitlesSubtitleIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subtitleSchema** | **SubtitleSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **subtitleId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubtitleSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a subtitle that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Subtitle for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdSubtitlesSubtitleIdPut**
> SubtitleSchema filesV1AssetsAssetIdSubtitlesSubtitleIdPut(subtitleSchema)

 Required roles:  - can_write_asset_subtitles 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdSubtitlesSubtitleIdPutRequest = {
  // string
  assetId: "asset_id_example",
  // string
  subtitleId: "subtitle_id_example",
  // SubtitleSchema | body
  subtitleSchema: {
    closedCaptions: true,
    content: "content_example",
    formatId: "formatId_example",
    language: "language_example",
    name: "name_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdSubtitlesSubtitleIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subtitleSchema** | **SubtitleSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **subtitleId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubtitleSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a subtitle that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Subtitle for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdTemporaryFileSetsFileSetIdDelete**
> void filesV1AssetsAssetIdTemporaryFileSetsFileSetIdDelete()

 Required roles:  - can_delete_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdTemporaryFileSetsFileSetIdDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileSetId: "file_set_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean (optional)
  deleteCloudObjects: true,
};

apiInstance.filesV1AssetsAssetIdTemporaryFileSetsFileSetIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **fileSetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **deleteCloudObjects** | [**boolean**] |  | (optional) defaults to true


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | File set for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdTemporaryFileSetsFileSetIdFilesGet**
> FilesSchema filesV1AssetsAssetIdTemporaryFileSetsFileSetIdFilesGet()

 Required roles:  - can_read_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdTemporaryFileSetsFileSetIdFilesGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileSetId: "file_set_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean | Set to false if you don\'t need a URL, will speed things up (optional)
  generateSignedUrl: true,
};

apiInstance.filesV1AssetsAssetIdTemporaryFileSetsFileSetIdFilesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **fileSetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **generateSignedUrl** | [**boolean**] | Set to false if you don\&#39;t need a URL, will speed things up | (optional) defaults to true


### Return type

**FilesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns files from a file set |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdTemporaryFileSetsPost**
> TemporaryFileSetSchema filesV1AssetsAssetIdTemporaryFileSetsPost(temporaryFileSetSchema)

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdTemporaryFileSetsPostRequest = {
  // string
  assetId: "asset_id_example",
  // TemporaryFileSetSchema | body
  temporaryFileSetSchema: {
    archiveFileSetId: "archiveFileSetId_example",
    baseDir: "baseDir_example",
    componentIds: [
      "componentIds_example",
    ],
    dateDeleted: new Date('1970-01-01T00:00:00.00Z'),
    formatId: "formatId_example",
    isArchive: true,
    jobId: "jobId_example",
    name: "name_example",
    originalStorageId: "originalStorageId_example",
    status: "ACTIVE",
    storageId: "storageId_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdTemporaryFileSetsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **temporaryFileSetSchema** | **TemporaryFileSetSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**TemporaryFileSetSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a file set that was created for this asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdTemporaryFilesFileIdPatch**
> FileSchema filesV1AssetsAssetIdTemporaryFilesFileIdPatch(fileSchema)

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdTemporaryFilesFileIdPatchRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // FileSchema | body
  fileSchema: {
    assetId: "assetId_example",
    checksum: "checksum_example",
    directoryPath: "directoryPath_example",
    fileDateCreated: new Date('1970-01-01T00:00:00.00Z'),
    fileDateModified: new Date('1970-01-01T00:00:00.00Z'),
    fileSetId: "fileSetId_example",
    formatId: "formatId_example",
    name: "name_example",
    originalName: "originalName_example",
    parentId: "parentId_example",
    size: -9223372036854776000,
    status: "OPEN",
    storageId: "storageId_example",
    systemDomainId: "systemDomainId_example",
    type: "FILE",
    userId: "userId_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdTemporaryFilesFileIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileSchema** | **FileSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FileSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns updated file |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Asset access denied |  -  |
**404** | No file found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdTemporaryFilesFileIdPut**
> FileSchema filesV1AssetsAssetIdTemporaryFilesFileIdPut(fileSchema)

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdTemporaryFilesFileIdPutRequest = {
  // string
  assetId: "asset_id_example",
  // string
  fileId: "file_id_example",
  // FileSchema | body
  fileSchema: {
    assetId: "assetId_example",
    checksum: "checksum_example",
    directoryPath: "directoryPath_example",
    fileDateCreated: new Date('1970-01-01T00:00:00.00Z'),
    fileDateModified: new Date('1970-01-01T00:00:00.00Z'),
    fileSetId: "fileSetId_example",
    formatId: "formatId_example",
    name: "name_example",
    originalName: "originalName_example",
    parentId: "parentId_example",
    size: -9223372036854776000,
    status: "OPEN",
    storageId: "storageId_example",
    systemDomainId: "systemDomainId_example",
    type: "FILE",
    userId: "userId_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdTemporaryFilesFileIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileSchema** | **FileSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FileSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns updated file |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Asset access denied |  -  |
**404** | No file found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdTemporaryFilesPost**
> TemporaryFileCreateSchema filesV1AssetsAssetIdTemporaryFilesPost(fileSchema)

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdTemporaryFilesPostRequest = {
  // string
  assetId: "asset_id_example",
  // FileSchema | body
  fileSchema: {
    assetId: "assetId_example",
    checksum: "checksum_example",
    directoryPath: "directoryPath_example",
    fileDateCreated: new Date('1970-01-01T00:00:00.00Z'),
    fileDateModified: new Date('1970-01-01T00:00:00.00Z'),
    fileSetId: "fileSetId_example",
    formatId: "formatId_example",
    name: "name_example",
    originalName: "originalName_example",
    parentId: "parentId_example",
    size: -9223372036854776000,
    status: "OPEN",
    storageId: "storageId_example",
    systemDomainId: "systemDomainId_example",
    type: "FILE",
    userId: "userId_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean (optional)
  store: true,
};

apiInstance.filesV1AssetsAssetIdTemporaryFilesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileSchema** | **FileSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **store** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**TemporaryFileCreateSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a file that was created for this asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdVersionsAllFileSetsDelete**
> void filesV1AssetsAssetIdVersionsAllFileSetsDelete()

 Required roles:  - can_delete_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdVersionsAllFileSetsDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last file set on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1AssetsAssetIdVersionsAllFileSetsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last file set on previous page | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | File sets were scheduled for deletion |  -  |
**401** | Token is invalid |  -  |
**404** | FileSets for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdVersionsAllFilesDelete**
> void filesV1AssetsAssetIdVersionsAllFilesDelete()

 Required roles:  - can_delete_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdVersionsAllFilesDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdVersionsAllFilesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**401** | Token is invalid |  -  |
**404** | File for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdVersionsAllFormatsDelete**
> void filesV1AssetsAssetIdVersionsAllFormatsDelete()

 Required roles:  - can_delete_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdVersionsAllFormatsDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdVersionsAllFormatsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Formats were scheduled for deletion |  -  |
**204** | Without body in case &#x60;immediately&#x60; option was provided |  -  |
**401** | Token is invalid |  -  |
**404** | Format for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdVersionsAllKeyframesDelete**
> void filesV1AssetsAssetIdVersionsAllKeyframesDelete()

 Required roles:  - can_write_keyframes 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdVersionsAllKeyframesDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdVersionsAllKeyframesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Keyframe for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdVersionsAllProxiesDelete**
> void filesV1AssetsAssetIdVersionsAllProxiesDelete()

 Required roles:  - can_delete_proxies 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdVersionsAllProxiesDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdVersionsAllProxiesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Proxy for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdVersionsAllSubtitlesDelete**
> void filesV1AssetsAssetIdVersionsAllSubtitlesDelete()

 Required roles:  - can_delete_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdVersionsAllSubtitlesDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdVersionsAllSubtitlesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**401** | Token is invalid |  -  |
**404** | Subtitle for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdVersionsVersionIdFileSetsDelete**
> void filesV1AssetsAssetIdVersionsVersionIdFileSetsDelete()

 Required roles:  - can_delete_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdVersionsVersionIdFileSetsDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last file set on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1AssetsAssetIdVersionsVersionIdFileSetsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last file set on previous page | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | File sets were scheduled for deletion |  -  |
**401** | Token is invalid |  -  |
**404** | FileSets for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdVersionsVersionIdFileSetsGet**
> FileSetsSchema filesV1AssetsAssetIdVersionsVersionIdFileSetsGet()

 Required roles:  - can_read_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdVersionsVersionIdFileSetsGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last file set on previous page (optional)
  lastId: "last_id_example",
  // boolean | Set to true if you need a total amount of files in a file set (optional)
  fileCount: false,
};

apiInstance.filesV1AssetsAssetIdVersionsVersionIdFileSetsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last file set on previous page | (optional) defaults to undefined
 **fileCount** | [**boolean**] | Set to true if you need a total amount of files in a file set | (optional) defaults to false


### Return type

**FileSetsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all file sets associated with this asset |  -  |
**401** | Token is invalid |  -  |
**404** | FileSets for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdVersionsVersionIdFilesDelete**
> void filesV1AssetsAssetIdVersionsVersionIdFilesDelete()

 Required roles:  - can_delete_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdVersionsVersionIdFilesDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdVersionsVersionIdFilesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**401** | Token is invalid |  -  |
**404** | File for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdVersionsVersionIdFilesGet**
> FilesSchema filesV1AssetsAssetIdVersionsVersionIdFilesGet()

 Required roles:  - can_read_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdVersionsVersionIdFilesGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // boolean | Set to False if you do not need a URL, will slow things down otherwise (optional)
  generateSignedUrl: true,
  // string | Set to attachment if you want a download link. Note that this will not create a download in asset history (optional)
  contentDisposition: "inline",
  // string | ID of a last file on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1AssetsAssetIdVersionsVersionIdFilesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **generateSignedUrl** | [**boolean**] | Set to False if you do not need a URL, will slow things down otherwise | (optional) defaults to true
 **contentDisposition** | [**string**] | Set to attachment if you want a download link. Note that this will not create a download in asset history | (optional) defaults to 'inline'
 **lastId** | [**string**] | ID of a last file on previous page | (optional) defaults to undefined


### Return type

**FilesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all files associated with this asset |  -  |
**401** | Token is invalid |  -  |
**404** | Files for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdVersionsVersionIdFormatsDelete**
> void filesV1AssetsAssetIdVersionsVersionIdFormatsDelete()

 Required roles:  - can_delete_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdVersionsVersionIdFormatsDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdVersionsVersionIdFormatsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Formats were scheduled for deletion |  -  |
**204** | Without body in case &#x60;immediately&#x60; option was provided |  -  |
**401** | Token is invalid |  -  |
**404** | Format for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdVersionsVersionIdFormatsGet**
> FormatsSchema filesV1AssetsAssetIdVersionsVersionIdFormatsGet()

 Required roles:  - can_read_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdVersionsVersionIdFormatsGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last format on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1AssetsAssetIdVersionsVersionIdFormatsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last format on previous page | (optional) defaults to undefined


### Return type

**FormatsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all formats associated with this asset |  -  |
**401** | Token is invalid |  -  |
**404** | Formats for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdVersionsVersionIdKeyframesDelete**
> void filesV1AssetsAssetIdVersionsVersionIdKeyframesDelete()

 Required roles:  - can_write_keyframes 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdVersionsVersionIdKeyframesDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean (optional)
  keepPoster: true,
};

apiInstance.filesV1AssetsAssetIdVersionsVersionIdKeyframesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **keepPoster** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Keyframe for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdVersionsVersionIdKeyframesGet**
> KeyframesSchema filesV1AssetsAssetIdVersionsVersionIdKeyframesGet()

 Required roles:  - can_read_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdVersionsVersionIdKeyframesGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // boolean | Set to false if you don\'t need a URL, will speed things up (optional)
  generateSignedUrl: true,
  // string | Set to attachment if you do not want a download link (optional)
  contentDisposition: "inline",
  // string | ID of a last keyframe on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1AssetsAssetIdVersionsVersionIdKeyframesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **generateSignedUrl** | [**boolean**] | Set to false if you don\&#39;t need a URL, will speed things up | (optional) defaults to true
 **contentDisposition** | [**string**] | Set to attachment if you do not want a download link | (optional) defaults to 'inline'
 **lastId** | [**string**] | ID of a last keyframe on previous page | (optional) defaults to undefined


### Return type

**KeyframesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all keyframes associated with this asset |  -  |
**401** | Token is invalid |  -  |
**404** | Keyframes for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdVersionsVersionIdProxiesDelete**
> void filesV1AssetsAssetIdVersionsVersionIdProxiesDelete()

 Required roles:  - can_delete_proxies 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdVersionsVersionIdProxiesDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdVersionsVersionIdProxiesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Proxy for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdVersionsVersionIdProxiesGet**
> ProxiesSchema filesV1AssetsAssetIdVersionsVersionIdProxiesGet()

 Required roles:  - can_read_proxies 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdVersionsVersionIdProxiesGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // boolean | Set to false if you don\'t need a URL, will speed things up (optional)
  generateSignedUrl: true,
  // string | Set to attachment if you want a download link (optional)
  contentDisposition: "inline",
  // string | ID of a last proxy on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1AssetsAssetIdVersionsVersionIdProxiesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **generateSignedUrl** | [**boolean**] | Set to false if you don\&#39;t need a URL, will speed things up | (optional) defaults to true
 **contentDisposition** | [**string**] | Set to attachment if you want a download link | (optional) defaults to 'inline'
 **lastId** | [**string**] | ID of a last proxy on previous page | (optional) defaults to undefined


### Return type

**ProxiesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all proxies associated with this asset |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Proxies for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdVersionsVersionIdSubtitlesDelete**
> void filesV1AssetsAssetIdVersionsVersionIdSubtitlesDelete()

 Required roles:  - can_delete_assets 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdVersionsVersionIdSubtitlesDeleteRequest = {
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdVersionsVersionIdSubtitlesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**401** | Token is invalid |  -  |
**404** | Subtitle for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdVersionsVersionIdSubtitlesGet**
> SubtitlesSchema filesV1AssetsAssetIdVersionsVersionIdSubtitlesGet()

 Required roles:  - can_read_asset_subtitles 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdVersionsVersionIdSubtitlesGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last subtitle on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1AssetsAssetIdVersionsVersionIdSubtitlesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last subtitle on previous page | (optional) defaults to undefined


### Return type

**SubtitlesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all subtitles associated with this asset |  -  |
**401** | Token is invalid |  -  |
**404** | Subtitles for this asset don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageCcWebvttGet**
> string filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageCcWebvttGet()

 Required roles:  - can_read_asset_subtitles 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageCcWebvttGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // string
  language: "language_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageCcWebvttGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **language** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**string**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/vtt, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a subtitle file associated with this asset in a particular language |  -  |
**401** | Token is invalid |  -  |
**404** | Subtitle for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageWebvttGet**
> string filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageWebvttGet()

 Required roles:  - can_read_asset_subtitles 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageWebvttGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // string
  language: "language_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1AssetsAssetIdVersionsVersionIdSubtitlesLanguageWebvttGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **language** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**string**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/vtt, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a subtitle file associated with this asset in a particular language |  -  |
**401** | Token is invalid |  -  |
**404** | Subtitle for this asset doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1AssetsBulkKeyframesPost**
> void filesV1AssetsBulkKeyframesPost(bulkTranscodeSchema)

 Required roles:  - can_create_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsBulkKeyframesPostRequest = {
  // BulkTranscodeSchema | body
  bulkTranscodeSchema: {
    formatName: "ORIGINAL",
    objectIds: [
      "objectIds_example",
    ],
    objectType: "assets",
    preferAnyCloud: true,
    preferredStorageId: "preferredStorageId_example",
    preferredStorageMethod: "FILE",
    priority: 1,
  },
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.filesV1AssetsBulkKeyframesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkTranscodeSchema** | **BulkTranscodeSchema**| body |
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

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

# **filesV1AssetsExportLocationsExportLocationIdPost**
> void filesV1AssetsExportLocationsExportLocationIdPost(assetBatchExportSchema)

 Required roles:  - can_write_exports 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1AssetsExportLocationsExportLocationIdPostRequest = {
  // string
  exportLocationId: "export_location_id_example",
  // AssetBatchExportSchema | body
  assetBatchExportSchema: {
    assets: [
      {
        assetId: "assetId_example",
        fileName: "fileName_example",
        formatId: "formatId_example",
      },
    ],
    exportMetadata: true,
    exportToAssetFolder: true,
    metadataFormat: "CSV",
    metadataView: "metadataView_example",
    overwrite: true,
    preferredOriginalStorageId: "preferredOriginalStorageId_example",
    transcodeProfileIds: [
      "transcodeProfileIds_example",
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // boolean | Enable transfer through iconik host (creates egress) (optional)
  allowHostTransfer: true,
};

apiInstance.filesV1AssetsExportLocationsExportLocationIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetBatchExportSchema** | **AssetBatchExportSchema**| body |
 **exportLocationId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **allowHostTransfer** | [**boolean**] | Enable transfer through iconik host (creates egress) | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an export job id |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1CollectionsCollectionIdCustomKeyframePosterIdPost**
> CollectionKeyframeSchema filesV1CollectionsCollectionIdCustomKeyframePosterIdPost()

 Required roles:  - can_write_keyframes 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1CollectionsCollectionIdCustomKeyframePosterIdPostRequest = {
  // string
  collectionId: "collection_id_example",
  // string
  posterId: "poster_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean | set to false to keep current custom_poster and custom_keyframe on asset (optional)
  overwrite: true,
};

apiInstance.filesV1CollectionsCollectionIdCustomKeyframePosterIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | [**string**] |  | defaults to undefined
 **posterId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **overwrite** | [**boolean**] | set to false to keep current custom_poster and custom_keyframe on asset | (optional) defaults to undefined


### Return type

**CollectionKeyframeSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns custom keyframe |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1CollectionsCollectionIdExportLocationsExportLocationIdPost**
> void filesV1CollectionsCollectionIdExportLocationsExportLocationIdPost(collectionExportSchema)

 Required roles:  - can_write_exports 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1CollectionsCollectionIdExportLocationsExportLocationIdPostRequest = {
  // string
  collectionId: "collection_id_example",
  // string
  exportLocationId: "export_location_id_example",
  // CollectionExportSchema | body
  collectionExportSchema: {
    deleteOriginal: true,
    exportMetadata: true,
    exportToAssetFolder: true,
    keepCollectionStructure: true,
    metadataFormat: "CSV",
    metadataView: "metadataView_example",
    overwrite: true,
    preferredOriginalStorageId: "preferredOriginalStorageId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean | Enable transfer through iconik host (creates egress) (optional)
  allowHostTransfer: true,
};

apiInstance.filesV1CollectionsCollectionIdExportLocationsExportLocationIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionExportSchema** | **CollectionExportSchema**| body |
 **collectionId** | [**string**] |  | defaults to undefined
 **exportLocationId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **allowHostTransfer** | [**boolean**] | Enable transfer through iconik host (creates egress) | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an export job id |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1CollectionsCollectionIdKeyframesGet**
> CollectionKeyframesSchema filesV1CollectionsCollectionIdKeyframesGet()

 Required roles:  - can_read_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1CollectionsCollectionIdKeyframesGetRequest = {
  // string
  collectionId: "collection_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // boolean | Set to false if you don\'t need a URL, will speed things up (optional)
  generateSignedUrl: true,
  // string | ID of a last collection keyframe on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1CollectionsCollectionIdKeyframesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **generateSignedUrl** | [**boolean**] | Set to false if you don\&#39;t need a URL, will speed things up | (optional) defaults to true
 **lastId** | [**string**] | ID of a last collection keyframe on previous page | (optional) defaults to undefined


### Return type

**CollectionKeyframesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all keyframes associated with this collection |  -  |
**401** | Token is invalid |  -  |
**404** | Keyframes for this collection don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1CollectionsCollectionIdKeyframesKeyframeIdDelete**
> void filesV1CollectionsCollectionIdKeyframesKeyframeIdDelete()

 Required roles:  - can_write_keyframes 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1CollectionsCollectionIdKeyframesKeyframeIdDeleteRequest = {
  // string
  collectionId: "collection_id_example",
  // string
  keyframeId: "keyframe_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean | set to true to force a regeneration of default keyframes (optional)
  regenerateKeyframes: true,
};

apiInstance.filesV1CollectionsCollectionIdKeyframesKeyframeIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | [**string**] |  | defaults to undefined
 **keyframeId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **regenerateKeyframes** | [**boolean**] | set to true to force a regeneration of default keyframes | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Keyframe for this collection don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1CollectionsCollectionIdKeyframesKeyframeIdGet**
> CollectionKeyframeSchema filesV1CollectionsCollectionIdKeyframesKeyframeIdGet()

 Required roles:  - can_read_collections 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1CollectionsCollectionIdKeyframesKeyframeIdGetRequest = {
  // string
  collectionId: "collection_id_example",
  // string
  keyframeId: "keyframe_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1CollectionsCollectionIdKeyframesKeyframeIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | [**string**] |  | defaults to undefined
 **keyframeId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**CollectionKeyframeSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a keyframe associated with this collection |  -  |
**401** | Token is invalid |  -  |
**404** | Keyframe for this collection don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1CollectionsCollectionIdKeyframesKeyframeIdPatch**
> CollectionKeyframeSchema filesV1CollectionsCollectionIdKeyframesKeyframeIdPatch(collectionKeyframeSchema)

 Required roles:  - can_write_keyframes 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1CollectionsCollectionIdKeyframesKeyframeIdPatchRequest = {
  // string
  collectionId: "collection_id_example",
  // string
  keyframeId: "keyframe_id_example",
  // CollectionKeyframeSchema | body
  collectionKeyframeSchema: {
    collectionId: "collectionId_example",
    filename: "filename_example",
    format: "format_example",
    isCustomKeyframe: true,
    name: "name_example",
    resolution: {
      height: -2147483648,
      width: -2147483648,
    },
    rotation: -2147483648,
    size: -9223372036854776000,
    status: "OPEN",
    storageId: "storageId_example",
    timeCode: {
      framesNumber: -9223372036854776000,
      isDropFrame: true,
      timeBase: {
        denominator: -2147483648,
        numerator: -2147483648,
      },
    },
    type: "KEYFRAME_MAP",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1CollectionsCollectionIdKeyframesKeyframeIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionKeyframeSchema** | **CollectionKeyframeSchema**| body |
 **collectionId** | [**string**] |  | defaults to undefined
 **keyframeId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**CollectionKeyframeSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a keyframe that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Keyframe for this collection don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1CollectionsCollectionIdKeyframesKeyframeIdPut**
> CollectionKeyframeSchema filesV1CollectionsCollectionIdKeyframesKeyframeIdPut(collectionKeyframeSchema)

 Required roles:  - can_write_keyframes 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1CollectionsCollectionIdKeyframesKeyframeIdPutRequest = {
  // string
  collectionId: "collection_id_example",
  // string
  keyframeId: "keyframe_id_example",
  // CollectionKeyframeSchema | body
  collectionKeyframeSchema: {
    collectionId: "collectionId_example",
    filename: "filename_example",
    format: "format_example",
    isCustomKeyframe: true,
    name: "name_example",
    resolution: {
      height: -2147483648,
      width: -2147483648,
    },
    rotation: -2147483648,
    size: -9223372036854776000,
    status: "OPEN",
    storageId: "storageId_example",
    timeCode: {
      framesNumber: -9223372036854776000,
      isDropFrame: true,
      timeBase: {
        denominator: -2147483648,
        numerator: -2147483648,
      },
    },
    type: "KEYFRAME_MAP",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1CollectionsCollectionIdKeyframesKeyframeIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionKeyframeSchema** | **CollectionKeyframeSchema**| body |
 **collectionId** | [**string**] |  | defaults to undefined
 **keyframeId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**CollectionKeyframeSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a keyframe that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Keyframe for this collection don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1CollectionsCollectionIdKeyframesPost**
> CollectionKeyframeCreateSchema filesV1CollectionsCollectionIdKeyframesPost(collectionKeyframeSchema)

 Required roles:  - can_write_keyframes 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1CollectionsCollectionIdKeyframesPostRequest = {
  // string
  collectionId: "collection_id_example",
  // CollectionKeyframeSchema | body
  collectionKeyframeSchema: {
    collectionId: "collectionId_example",
    filename: "filename_example",
    format: "format_example",
    isCustomKeyframe: true,
    name: "name_example",
    resolution: {
      height: -2147483648,
      width: -2147483648,
    },
    rotation: -2147483648,
    size: -9223372036854776000,
    status: "OPEN",
    storageId: "storageId_example",
    timeCode: {
      framesNumber: -9223372036854776000,
      isDropFrame: true,
      timeBase: {
        denominator: -2147483648,
        numerator: -2147483648,
      },
    },
    type: "KEYFRAME_MAP",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1CollectionsCollectionIdKeyframesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionKeyframeSchema** | **CollectionKeyframeSchema**| body |
 **collectionId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**CollectionKeyframeCreateSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a keyframe that was created for this collection |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1DeleteQueueFileSetsDelete**
> void filesV1DeleteQueueFileSetsDelete(deleteQueueSchema)

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1DeleteQueueFileSetsDeleteRequest = {
  // DeleteQueueSchema | body
  deleteQueueSchema: {
    ids: [
      "ids_example",
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1DeleteQueueFileSetsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteQueueSchema** | **DeleteQueueSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

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

# **filesV1DeleteQueueFileSetsGet**
> FileSetsElasticSchema filesV1DeleteQueueFileSetsGet()

 Required roles:  - can_read_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1DeleteQueueFileSetsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // number | Which page number to fetch (optional)
  page: 1,
  // string | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc (optional)
  sort: "sort_example",
  // string | Search using query (optional)
  query: "query_example",
  // string | filter by field_name (optional)
  fieldName: "field_name_example",
};

apiInstance.filesV1DeleteQueueFileSetsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to undefined
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc | (optional) defaults to undefined
 **query** | [**string**] | Search using query | (optional) defaults to undefined
 **fieldName** | [**string**] | filter by field_name | (optional) defaults to undefined


### Return type

**FileSetsElasticSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of file sets |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1DeleteQueueFileSetsPurgeAllPost**
> void filesV1DeleteQueueFileSetsPurgeAllPost()

 Required roles:  - can_purge_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1DeleteQueueFileSetsPurgeAllPostRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1DeleteQueueFileSetsPurgeAllPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

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

# **filesV1DeleteQueueFileSetsPurgePost**
> void filesV1DeleteQueueFileSetsPurgePost(deleteQueueSchema)

 Required roles:  - can_purge_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1DeleteQueueFileSetsPurgePostRequest = {
  // DeleteQueueSchema | body
  deleteQueueSchema: {
    ids: [
      "ids_example",
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1DeleteQueueFileSetsPurgePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteQueueSchema** | **DeleteQueueSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

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

# **filesV1DeleteQueueFormatsDelete**
> void filesV1DeleteQueueFormatsDelete(deleteQueueSchema)

 Required roles:  - can_write_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1DeleteQueueFormatsDeleteRequest = {
  // DeleteQueueSchema | body
  deleteQueueSchema: {
    ids: [
      "ids_example",
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1DeleteQueueFormatsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteQueueSchema** | **DeleteQueueSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

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

# **filesV1DeleteQueueFormatsGet**
> FormatsElasticSchema filesV1DeleteQueueFormatsGet()

 Required roles:  - can_read_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1DeleteQueueFormatsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // number | Which page number to fetch (optional)
  page: 1,
  // string | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc (optional)
  sort: "sort_example",
  // string | Search using query (optional)
  query: "query_example",
  // string | filter by field_name (optional)
  fieldName: "field_name_example",
};

apiInstance.filesV1DeleteQueueFormatsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to undefined
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc | (optional) defaults to undefined
 **query** | [**string**] | Search using query | (optional) defaults to undefined
 **fieldName** | [**string**] | filter by field_name | (optional) defaults to undefined


### Return type

**FormatsElasticSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of formats |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1DeleteQueueFormatsPurgeAllPost**
> void filesV1DeleteQueueFormatsPurgeAllPost()

 Required roles:  - can_purge_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1DeleteQueueFormatsPurgeAllPostRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1DeleteQueueFormatsPurgeAllPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

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

# **filesV1DeleteQueueFormatsPurgePost**
> void filesV1DeleteQueueFormatsPurgePost(deleteQueueSchema)

 Required roles:  - can_purge_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1DeleteQueueFormatsPurgePostRequest = {
  // DeleteQueueSchema | body
  deleteQueueSchema: {
    ids: [
      "ids_example",
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1DeleteQueueFormatsPurgePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteQueueSchema** | **DeleteQueueSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

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

# **filesV1ExportLocationsExportLocationIdBulkExportPost**
> void filesV1ExportLocationsExportLocationIdBulkExportPost(bulkFilesetExportSchema)

 Required roles:  - can_write_exports 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1ExportLocationsExportLocationIdBulkExportPostRequest = {
  // string
  exportLocationId: "export_location_id_example",
  // BulkFilesetExportSchema | body
  bulkFilesetExportSchema: {
    allowDuplicateTransfers: false,
    deleteOnlyFromSourceFolder: false,
    deleteOriginal: false,
    exportMetadata: true,
    exportToAssetFolder: true,
    keepCollectionStructure: false,
    metadataFormat: "CSV",
    metadataView: "metadataView_example",
    objectIds: [
      "objectIds_example",
    ],
    objectType: "assets",
    overwrite: true,
    preferredOriginalStorageId: "preferredOriginalStorageId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean | Enable transfer through iconik host (creates egress) (optional)
  allowHostTransfer: true,
};

apiInstance.filesV1ExportLocationsExportLocationIdBulkExportPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkFilesetExportSchema** | **BulkFilesetExportSchema**| body |
 **exportLocationId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **allowHostTransfer** | [**boolean**] | Enable transfer through iconik host (creates egress) | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an export job id |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1ExportLocationsExportLocationIdDelete**
> void filesV1ExportLocationsExportLocationIdDelete()

 Required roles:  - can_delete_export_locations 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1ExportLocationsExportLocationIdDeleteRequest = {
  // string
  exportLocationId: "export_location_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1ExportLocationsExportLocationIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportLocationId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**401** | Token is invalid |  -  |
**404** | ExportLocation doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1ExportLocationsExportLocationIdGet**
> ExportLocationSchema filesV1ExportLocationsExportLocationIdGet()

 Required roles:  - can_read_export_locations 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1ExportLocationsExportLocationIdGetRequest = {
  // string
  exportLocationId: "export_location_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1ExportLocationsExportLocationIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportLocationId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExportLocationSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a export_location |  -  |
**401** | Token is invalid |  -  |
**404** | ExportLocation doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1ExportLocationsExportLocationIdPatch**
> ExportLocationSchema filesV1ExportLocationsExportLocationIdPatch(exportLocationSchema)

 Required roles:  - can_write_export_locations 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1ExportLocationsExportLocationIdPatchRequest = {
  // string
  exportLocationId: "export_location_id_example",
  // ExportLocationSchema | body
  exportLocationSchema: {
    description: "description_example",
    exportMetadata: true,
    exportOriginal: true,
    exportPosters: true,
    exportProxy: true,
    exportToAssetFolder: true,
    exportTranscriptions: true,
    metadataFormat: "CSV",
    metadataView: "metadataView_example",
    name: "name_example",
    path: "path_example",
    storageId: "storageId_example",
    transcodeProfileIds: [
      "transcodeProfileIds_example",
    ],
    transcriptionFormat: "WEBVTT",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1ExportLocationsExportLocationIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportLocationSchema** | **ExportLocationSchema**| body |
 **exportLocationId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExportLocationSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated export_location |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1ExportLocationsExportLocationIdPut**
> ExportLocationSchema filesV1ExportLocationsExportLocationIdPut(exportLocationSchema)

 Required roles:  - can_write_export_locations 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1ExportLocationsExportLocationIdPutRequest = {
  // string
  exportLocationId: "export_location_id_example",
  // ExportLocationSchema | body
  exportLocationSchema: {
    description: "description_example",
    exportMetadata: true,
    exportOriginal: true,
    exportPosters: true,
    exportProxy: true,
    exportToAssetFolder: true,
    exportTranscriptions: true,
    metadataFormat: "CSV",
    metadataView: "metadataView_example",
    name: "name_example",
    path: "path_example",
    storageId: "storageId_example",
    transcodeProfileIds: [
      "transcodeProfileIds_example",
    ],
    transcriptionFormat: "WEBVTT",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1ExportLocationsExportLocationIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportLocationSchema** | **ExportLocationSchema**| body |
 **exportLocationId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExportLocationSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated export_location |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1ExportLocationsExportLocationIdReindexPost**
> void filesV1ExportLocationsExportLocationIdReindexPost()

 Required roles:  - can_reindex_export_locations 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1ExportLocationsExportLocationIdReindexPostRequest = {
  // string
  exportLocationId: "export_location_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1ExportLocationsExportLocationIdReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportLocationId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ID and status of the job |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1ExportLocationsGet**
> ExportLocationsSchema filesV1ExportLocationsGet()

 Required roles:  - can_read_export_locations 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1ExportLocationsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string | Search query (optional)
  query: "query_example",
  // string | Filter list of id:s (comma separated) (optional)
  ids: "ids_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last export_location on previous page (optional)
  lastId: "last_id_example",
  // string | A comma separated list of fieldnames with order. For example - name,asc;id,desc (optional)
  sort: "sort_example",
};

apiInstance.filesV1ExportLocationsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **query** | [**string**] | Search query | (optional) defaults to undefined
 **ids** | [**string**] | Filter list of id:s (comma separated) | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last export_location on previous page | (optional) defaults to undefined
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - name,asc;id,desc | (optional) defaults to undefined


### Return type

**ExportLocationsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of export_locations |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1ExportLocationsPost**
> ExportLocationSchema filesV1ExportLocationsPost(exportLocationSchema)

 Required roles:  - can_write_export_locations 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1ExportLocationsPostRequest = {
  // ExportLocationSchema | body
  exportLocationSchema: {
    description: "description_example",
    exportMetadata: true,
    exportOriginal: true,
    exportPosters: true,
    exportProxy: true,
    exportToAssetFolder: true,
    exportTranscriptions: true,
    metadataFormat: "CSV",
    metadataView: "metadataView_example",
    name: "name_example",
    path: "path_example",
    storageId: "storageId_example",
    transcodeProfileIds: [
      "transcodeProfileIds_example",
    ],
    transcriptionFormat: "WEBVTT",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1ExportLocationsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportLocationSchema** | **ExportLocationSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExportLocationSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created export_location entry |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1ExportsTemporaryFileSetsFileSetIdStoragesStorageIdPost**
> void filesV1ExportsTemporaryFileSetsFileSetIdStoragesStorageIdPost(completeExportToLocalStorageSchema)

 Required roles:  - can_read_files - can_write_transfers 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1ExportsTemporaryFileSetsFileSetIdStoragesStorageIdPostRequest = {
  // string
  fileSetId: "file_set_id_example",
  // string | Destination storage_id
  storageId: "storage_id_example",
  // CompleteExportToLocalStorageSchema | body
  completeExportToLocalStorageSchema: {
    addFileSet: true,
    assetId: "assetId_example",
    assetPaths: [
      "assetPaths_example",
    ],
    collectionStorageId: "collectionStorageId_example",
    componentIds: [
      "componentIds_example",
    ],
    deleteOnlyFromSourceFolder: true,
    deleteRemoteFileSetAfterDownload: true,
    deleteSourceFileSetAfterDownload: true,
    destinationBaseDirectory: "destinationBaseDirectory_example",
    destinationDirectoryPath: "destinationDirectoryPath_example",
    destinationFileSetName: "destinationFileSetName_example",
    destinationFilename: "destinationFilename_example",
    exportMetadataFormat: "exportMetadataFormat_example",
    exportMetadataView: "exportMetadataView_example",
    exportPosters: true,
    exportTranscriptionFormat: "exportTranscriptionFormat_example",
    fileSetId: "fileSetId_example",
    formatId: "formatId_example",
    jobId: "jobId_example",
    jobSteps: {},
    localStorageId: "localStorageId_example",
    originalStorageId: "originalStorageId_example",
    originalUrl: "originalUrl_example",
    overwrite: true,
    parentJobId: "parentJobId_example",
    temporaryFileSetSource: true,
  },
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.filesV1ExportsTemporaryFileSetsFileSetIdStoragesStorageIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **completeExportToLocalStorageSchema** | **CompleteExportToLocalStorageSchema**| body |
 **fileSetId** | [**string**] |  | defaults to undefined
 **storageId** | [**string**] | Destination storage_id | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Export queued |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Permission on storage denied |  -  |
**404** | File set or storage not found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1FileSetsFileSetIdFilesGet**
> FilesSchema filesV1FileSetsFileSetIdFilesGet()

 Required roles:  - can_read_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1FileSetsFileSetIdFilesGetRequest = {
  // string
  fileSetId: "file_set_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean | Set to false if you don\'t need a URL, will speed things up (optional)
  generateSignedUrl: true,
};

apiInstance.filesV1FileSetsFileSetIdFilesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileSetId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **generateSignedUrl** | [**boolean**] | Set to false if you don\&#39;t need a URL, will speed things up | (optional) defaults to true


### Return type

**FilesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns files from a file set |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1FileSetsFileSetIdStoragesStorageIdPost**
> void filesV1FileSetsFileSetIdStoragesStorageIdPost(transferFromStorageSchema)

 Required roles:  - can_read_files - can_write_transfers 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1FileSetsFileSetIdStoragesStorageIdPostRequest = {
  // string
  fileSetId: "file_set_id_example",
  // string | Destination storage_id
  storageId: "storage_id_example",
  // TransferFromStorageSchema | body
  transferFromStorageSchema: {
    assetId: "assetId_example",
    assetPaths: [
      "assetPaths_example",
    ],
    collectionStorageId: "collectionStorageId_example",
    componentIds: [
      "componentIds_example",
    ],
    deleteLocalFileSetAfterUpload: true,
    deleteOnlyFromSourceFolder: true,
    deleteSourceFileSetAfterDownload: true,
    destinationDirectoryPath: "destinationDirectoryPath_example",
    destinationFilename: "destinationFilename_example",
    destinationStorageId: "destinationStorageId_example",
    destinationStorageMethod: "destinationStorageMethod_example",
    formatId: "formatId_example",
    jobId: "jobId_example",
    jobSteps: {},
    originalFileSetId: "originalFileSetId_example",
    originalStorageId: "originalStorageId_example",
    originalUrl: "originalUrl_example",
    parentJobId: "parentJobId_example",
    temporaryFileSetSource: true,
  },
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
  // boolean | Enable transfer through iconik host (creates egress) (optional)
  allowHostTransfer: true,
};

apiInstance.filesV1FileSetsFileSetIdStoragesStorageIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferFromStorageSchema** | **TransferFromStorageSchema**| body |
 **fileSetId** | [**string**] |  | defaults to undefined
 **storageId** | [**string**] | Destination storage_id | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **allowHostTransfer** | [**boolean**] | Enable transfer through iconik host (creates egress) | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Copy job created |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Permission on storage denied |  -  |
**404** | File set or storage not found |  -  |
**409** | File set with same components already exists on storage. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1FileSetsFileSetIdTransfersFromStorageIdDelete**
> void filesV1FileSetsFileSetIdTransfersFromStorageIdDelete()

 Required roles:  - can_write_transfers 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1FileSetsFileSetIdTransfersFromStorageIdDeleteRequest = {
  // string
  fileSetId: "file_set_id_example",
  // string
  storageId: "storage_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
  // boolean (optional)
  failed: true,
};

apiInstance.filesV1FileSetsFileSetIdTransfersFromStorageIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileSetId** | [**string**] |  | defaults to undefined
 **storageId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **failed** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Transfer job was deleted |  -  |
**404** | Transfer job does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1FileSetsFileSetIdTransfersToStorageIdDelete**
> void filesV1FileSetsFileSetIdTransfersToStorageIdDelete()

 Required roles:  - can_write_transfers 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1FileSetsFileSetIdTransfersToStorageIdDeleteRequest = {
  // string
  fileSetId: "file_set_id_example",
  // string
  storageId: "storage_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
  // boolean (optional)
  failed: true,
};

apiInstance.filesV1FileSetsFileSetIdTransfersToStorageIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileSetId** | [**string**] |  | defaults to undefined
 **storageId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **failed** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Transfer job was deleted |  -  |
**404** | Transfer job does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1FilesChecksumChecksumGet**
> FilesSchema filesV1FilesChecksumChecksumGet()

 Required roles:  - can_read_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1FilesChecksumChecksumGetRequest = {
  // string
  checksum: "checksum_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // string (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1FilesChecksumChecksumGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checksum** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to undefined
 **lastId** | [**string**] |  | (optional) defaults to undefined


### Return type

**FilesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all files that has specified checksum |  -  |
**401** | Token is invalid |  -  |
**404** | Files with this checksum don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1FilesFileIdDeletionsFromStorageIdDelete**
> void filesV1FilesFileIdDeletionsFromStorageIdDelete()

 Required roles:  - is_storage_worker 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1FilesFileIdDeletionsFromStorageIdDeleteRequest = {
  // string
  fileId: "file_id_example",
  // string
  storageId: "storage_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.filesV1FilesFileIdDeletionsFromStorageIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | [**string**] |  | defaults to undefined
 **storageId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Deletion job was deleted |  -  |
**404** | Deletion job does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1FilesMissingStoragesStorageIdDelete**
> void filesV1FilesMissingStoragesStorageIdDelete()

 Required roles:  - can_delete_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1FilesMissingStoragesStorageIdDeleteRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean (optional)
  removeAssets: true,
};

apiInstance.filesV1FilesMissingStoragesStorageIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **removeAssets** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Files cleanup scheduled |  -  |
**401** | Token is invalid |  -  |
**403** | Permission denied |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1FilesStoragesStorageIdPost**
> void filesV1FilesStoragesStorageIdPost(fileExistenceCheckSchema)

 Required roles:  - can_read_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1FilesStoragesStorageIdPostRequest = {
  // string
  storageId: "storage_id_example",
  // FileExistenceCheckSchema | body
  fileExistenceCheckSchema: {
    directoryPath: "directoryPath_example",
    fileName: "fileName_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean (optional)
  getFileSize: true,
};

apiInstance.filesV1FilesStoragesStorageIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileExistenceCheckSchema** | **FileExistenceCheckSchema**| body |
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **getFileSize** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | File exists |  -  |
**401** | Token is invalid |  -  |
**404** | File doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1FormatsFormatIdStoragesStorageIdPost**
> void filesV1FormatsFormatIdStoragesStorageIdPost(transferFromStorageSchema)

 Required roles:  - can_read_formats - can_write_transfers 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1FormatsFormatIdStoragesStorageIdPostRequest = {
  // string
  formatId: "format_id_example",
  // string | Destination storage_id
  storageId: "storage_id_example",
  // TransferFromStorageSchema | body
  transferFromStorageSchema: {
    assetId: "assetId_example",
    assetPaths: [
      "assetPaths_example",
    ],
    collectionStorageId: "collectionStorageId_example",
    componentIds: [
      "componentIds_example",
    ],
    deleteLocalFileSetAfterUpload: true,
    deleteOnlyFromSourceFolder: true,
    deleteSourceFileSetAfterDownload: true,
    destinationDirectoryPath: "destinationDirectoryPath_example",
    destinationFilename: "destinationFilename_example",
    destinationStorageId: "destinationStorageId_example",
    destinationStorageMethod: "destinationStorageMethod_example",
    formatId: "formatId_example",
    jobId: "jobId_example",
    jobSteps: {},
    originalFileSetId: "originalFileSetId_example",
    originalStorageId: "originalStorageId_example",
    originalUrl: "originalUrl_example",
    parentJobId: "parentJobId_example",
    temporaryFileSetSource: true,
  },
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.filesV1FormatsFormatIdStoragesStorageIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferFromStorageSchema** | **TransferFromStorageSchema**| body |
 **formatId** | [**string**] |  | defaults to undefined
 **storageId** | [**string**] | Destination storage_id | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Copy job created |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Permission on storage denied |  -  |
**404** | File set or storage not found |  -  |
**409** | File set with same components already exists on storage. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1FormatsFormatNameArchiveBulkPost**
> void filesV1FormatsFormatNameArchiveBulkPost(bulkFilesetArchiveSchema)

 Required roles:  - can_archive_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1FormatsFormatNameArchiveBulkPostRequest = {
  // string
  formatName: "format_name_example",
  // BulkFilesetArchiveSchema | body
  bulkFilesetArchiveSchema: {
    allowDuplicateTransfers: false,
    deleteOnlyFromSourceFolder: false,
    deleteOriginal: false,
    destinationStorageId: "destinationStorageId_example",
    keepCollectionStructure: false,
    objectIds: [
      "objectIds_example",
    ],
    objectType: "assets",
    preferredOriginalStorageId: "preferredOriginalStorageId_example",
  },
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.filesV1FormatsFormatNameArchiveBulkPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkFilesetArchiveSchema** | **BulkFilesetArchiveSchema**| body |
 **formatName** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Archive job created |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Storage not found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1FormatsFormatNameRestoreBulkPost**
> void filesV1FormatsFormatNameRestoreBulkPost(bulkFilesetRestoreSchema)

 Required roles:  - can_restore_archived_formats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1FormatsFormatNameRestoreBulkPostRequest = {
  // string
  formatName: "format_name_example",
  // BulkFilesetRestoreSchema | body
  bulkFilesetRestoreSchema: {
    allowDuplicateTransfers: false,
    deleteOnlyFromSourceFolder: false,
    deleteOriginal: false,
    destinationDirectoryPath: "destinationDirectoryPath_example",
    destinationStorageId: "destinationStorageId_example",
    keepCollectionStructure: false,
    objectIds: [
      "objectIds_example",
    ],
    objectType: "assets",
    preferredOriginalStorageId: "preferredOriginalStorageId_example",
  },
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.filesV1FormatsFormatNameRestoreBulkPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkFilesetRestoreSchema** | **BulkFilesetRestoreSchema**| body |
 **formatName** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Restore job created |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Storage not found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1SharesStoragesStorageIdFilesGet**
> void filesV1SharesStoragesStorageIdFilesGet()

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1SharesStoragesStorageIdFilesGetRequest = {
  // string
  storageId: "storage_id_example",
  // string
  directoryPath: "directory_path_example",
  // string | Filter by name
  name: "name_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1SharesStoragesStorageIdFilesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **directoryPath** | [**string**] |  | defaults to undefined
 **name** | [**string**] | Filter by name | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | File exists |  -  |
**401** | Token is invalid |  -  |
**404** | No files found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesFilesReindexPost**
> void filesV1StoragesFilesReindexPost()

 Required roles:  - can_reindex_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesFilesReindexPostRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesFilesReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ID and status of the job |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesGet**
> StoragesReadSchema filesV1StoragesGet()

 Required roles:  - can_read_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | Which page number to fetch (optional)
  page: 1,
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | A comma separated list of fieldnames with order. For example - status,asc;last_scanned,desc (optional)
  sort: "sort_example",
  // string | Filter by id (optional)
  id: "id_example",
  // string | Filter by name (optional)
  name: "name_example",
  // string | Filter by method (optional)
  method: "method_example",
  // string | Filter by status (optional)
  status: "status_example",
  // string | Filter by purpose (optional)
  purpose: "purpose_example",
  // string | Filter by last_scanned (optional)
  lastScanned: "last_scanned_example",
  // string | Filter by scanner_status (optional)
  scannerStatus: "scanner_status_example",
  // string | Filter by any of the above with wildcard support (optional)
  query: "query_example",
  // string | Filter list of id:s (comma separated) (optional)
  ids: "ids_example",
};

apiInstance.filesV1StoragesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - status,asc;last_scanned,desc | (optional) defaults to undefined
 **id** | [**string**] | Filter by id | (optional) defaults to undefined
 **name** | [**string**] | Filter by name | (optional) defaults to undefined
 **method** | [**string**] | Filter by method | (optional) defaults to undefined
 **status** | [**string**] | Filter by status | (optional) defaults to undefined
 **purpose** | [**string**] | Filter by purpose | (optional) defaults to undefined
 **lastScanned** | [**string**] | Filter by last_scanned | (optional) defaults to undefined
 **scannerStatus** | [**string**] | Filter by scanner_status | (optional) defaults to undefined
 **query** | [**string**] | Filter by any of the above with wildcard support | (optional) defaults to undefined
 **ids** | [**string**] | Filter list of id:s (comma separated) | (optional) defaults to undefined


### Return type

**StoragesReadSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of storages |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesIsgLatestVersionGet**
> FilesV1StoragesIsgLatestVersionGet200Response filesV1StoragesIsgLatestVersionGet()

 Required roles:  - can_read_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesIsgLatestVersionGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesIsgLatestVersionGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FilesV1StoragesIsgLatestVersionGet200Response**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns version |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Storage does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesMatchingPurposeGet**
> StorageSchema filesV1StoragesMatchingPurposeGet()

 Required roles:  - can_read_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesMatchingPurposeGetRequest = {
  // string
  purpose: "purpose_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  storageId: "storage_id_example",
};

apiInstance.filesV1StoragesMatchingPurposeGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purpose** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **storageId** | [**string**] |  | (optional) defaults to undefined


### Return type

**StorageSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a storage |  -  |
**401** | Token is invalid |  -  |
**404** | No matching storage exists |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesMatchingPurposeMethodMethodGet**
> StorageSchema filesV1StoragesMatchingPurposeMethodMethodGet()

 Required roles:  - can_read_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesMatchingPurposeMethodMethodGetRequest = {
  // string
  purpose: "purpose_example",
  // string
  method: "method_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesMatchingPurposeMethodMethodGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purpose** | [**string**] |  | defaults to undefined
 **method** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**StorageSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a storage |  -  |
**401** | Token is invalid |  -  |
**404** | No matching storage exists |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesPost**
> StorageSchema filesV1StoragesPost(storageSchema)

 Required roles:  - can_write_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesPostRequest = {
  // StorageSchema | body
  storageSchema: {
    description: "description_example",
    lastScanned: new Date('1970-01-01T00:00:00.00Z'),
    method: "FILE",
    name: "name_example",
    purpose: "KEYFRAMES",
    scannerStatus: "scannerStatus_example",
    settings: {},
    status: "ACTIVE",
    statusMessage: "statusMessage_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageSchema** | **StorageSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**StorageSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created storage entry |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesPurposeDefaultGet**
> StorageSchema filesV1StoragesPurposeDefaultGet()

 Required roles:  - can_read_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesPurposeDefaultGetRequest = {
  // string
  purpose: "purpose_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesPurposeDefaultGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purpose** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**StorageSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The default storage |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Permission denied |  -  |
**404** | Storage does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesReindexPost**
> void filesV1StoragesReindexPost()

 Required roles:  - can_reindex_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesReindexPostRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ID and status of the job |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdAutoScanDelete**
> void filesV1StoragesStorageIdAutoScanDelete()

 Required roles:  - can_scan_bucket 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdAutoScanDeleteRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdAutoScanDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Storage auto scan disabled |  -  |
**401** | Token is invalid |  -  |
**404** | Storage auto scan already disabled |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdAutoScanGet**
> StorageAutoScanSchema filesV1StoragesStorageIdAutoScanGet()

 Required roles:  - can_scan_bucket 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdAutoScanGetRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdAutoScanGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**StorageAutoScanSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storage auto scan settings |  -  |
**401** | Token is invalid |  -  |
**404** | Storage auto scan is disabled |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdAutoScanPost**
> StorageAutoScanSchema filesV1StoragesStorageIdAutoScanPost(storageAutoScanSchema)

 Required roles:  - can_scan_bucket 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdAutoScanPostRequest = {
  // string
  storageId: "storage_id_example",
  // StorageAutoScanSchema | body
  storageAutoScanSchema: {
    hoursInterval: 24,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdAutoScanPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageAutoScanSchema** | **StorageAutoScanSchema**| body |
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**StorageAutoScanSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storage auto scan enabled |  -  |
**401** | Token is invalid |  -  |
**404** | No matching storage exists |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdBulkPost**
> void filesV1StoragesStorageIdBulkPost(bulkTransferToStorageSchema)

 Required roles:  - can_read_files - can_write_transfers 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdBulkPostRequest = {
  // string | Destination storage_id
  storageId: "storage_id_example",
  // BulkTransferToStorageSchema | body
  bulkTransferToStorageSchema: {
    allowDuplicateTransfers: false,
    deleteOnlyFromSourceFolder: false,
    deleteOriginal: false,
    filePath: "filePath_example",
    formatName: "ORIGINAL",
    keepCollectionStructure: false,
    objectIds: [
      "objectIds_example",
    ],
    objectType: "assets",
    overwrite: false,
    preferredOriginalStorageId: "preferredOriginalStorageId_example",
  },
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
  // boolean | Enable transfer through iconik host (creates egress) (optional)
  allowHostTransfer: true,
};

apiInstance.filesV1StoragesStorageIdBulkPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkTransferToStorageSchema** | **BulkTransferToStorageSchema**| body |
 **storageId** | [**string**] | Destination storage_id | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **allowHostTransfer** | [**boolean**] | Enable transfer through iconik host (creates egress) | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Copy job created |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Storage not found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdDefaultDelete**
> void filesV1StoragesStorageIdDefaultDelete()

 Required roles:  - can_write_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdDefaultDeleteRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdDefaultDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

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

# **filesV1StoragesStorageIdDefaultPost**
> void filesV1StoragesStorageIdDefaultPost()

 Required roles:  - can_write_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdDefaultPostRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdDefaultPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdDelete**
> void filesV1StoragesStorageIdDelete()

 Required roles:  - can_delete_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdDeleteRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**401** | Token is invalid |  -  |
**404** | Storage doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdDeletionsDeletionIdDelete**
> void filesV1StoragesStorageIdDeletionsDeletionIdDelete()

 Required roles:  - is_storage_worker 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdDeletionsDeletionIdDeleteRequest = {
  // string
  storageId: "storage_id_example",
  // string
  deletionId: "deletion_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.filesV1StoragesStorageIdDeletionsDeletionIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **deletionId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Deletion job was deleted |  -  |
**404** | Deletion job does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdDeletionsFromGet**
> FileDeletionsSchema filesV1StoragesStorageIdDeletionsFromGet()

 Required roles:  - is_storage_worker 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdDeletionsFromGetRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last file deletion entity on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1StoragesStorageIdDeletionsFromGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last file deletion entity on previous page | (optional) defaults to undefined


### Return type

**FileDeletionsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns pending deletions to be handled |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdDeletionsGet**
> FileDeletionsSchema filesV1StoragesStorageIdDeletionsGet()

 Required roles:  - is_storage_worker 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdDeletionsGetRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last file deletion entity on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1StoragesStorageIdDeletionsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last file deletion entity on previous page | (optional) defaults to undefined


### Return type

**FileDeletionsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns pending deletions to be handled |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdFilesDelete**
> FilesElasticSchema filesV1StoragesStorageIdFilesDelete()

 Required roles:  - can_read_storages - can_delete_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdFilesDeleteRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  path: "path_example",
  // string (optional)
  pathSeparator: "path_separator_example",
  // string (optional)
  directoryPath: "directory_path_example",
  // string (optional)
  checksum: "checksum_example",
  // string | Filter by id (optional)
  id: "id_example",
  // string | Filter by name (optional)
  name: "name_example",
  // string | Filter by type (optional)
  type: "type_example",
  // string | Filter by status (optional)
  status: "status_example",
  // string | Filter by date_created (optional)
  dateCreated: "date_created_example",
  // string | Filter by date_modified (optional)
  dateModified: "date_modified_example",
};

apiInstance.filesV1StoragesStorageIdFilesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **path** | [**string**] |  | (optional) defaults to undefined
 **pathSeparator** | [**string**] |  | (optional) defaults to undefined
 **directoryPath** | [**string**] |  | (optional) defaults to undefined
 **checksum** | [**string**] |  | (optional) defaults to undefined
 **id** | [**string**] | Filter by id | (optional) defaults to undefined
 **name** | [**string**] | Filter by name | (optional) defaults to undefined
 **type** | [**string**] | Filter by type | (optional) defaults to undefined
 **status** | [**string**] | Filter by status | (optional) defaults to undefined
 **dateCreated** | [**string**] | Filter by date_created | (optional) defaults to undefined
 **dateModified** | [**string**] | Filter by date_modified | (optional) defaults to undefined


### Return type

**FilesElasticSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns files |  -  |
**401** | Token is invalid |  -  |
**404** | No files found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdFilesFileIdReindexPost**
> void filesV1StoragesStorageIdFilesFileIdReindexPost()

 Required roles:  - can_reindex_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdFilesFileIdReindexPostRequest = {
  // string
  storageId: "storage_id_example",
  // string
  fileId: "file_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdFilesFileIdReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ID and status of the job |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdFilesGet**
> FilesElasticSchema filesV1StoragesStorageIdFilesGet()

 Required roles:  - can_read_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdFilesGetRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  path: "path_example",
  // string (optional)
  pathSeparator: "path_separator_example",
  // string (optional)
  directoryPath: "directory_path_example",
  // string (optional)
  checksum: "checksum_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // number | Which page number to fetch (optional)
  page: 1,
  // boolean | If true passed then uses scroll pagination instead of default one (optional)
  scroll: true,
  // string | In order to get next batch of results using scroll pagination the scroll_id is required (optional)
  scrollId: "scroll_id_example",
  // string | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc (optional)
  sort: "sort_example",
  // string | Filter by id (optional)
  id: "id_example",
  // string | Filter by name (optional)
  name: "name_example",
  // string | Filter by type (optional)
  type: "type_example",
  // string | Filter by status (optional)
  status: "status_example",
  // string | Filter by date_created (optional)
  dateCreated: "date_created_example",
  // string | Filter by date_modified (optional)
  dateModified: "date_modified_example",
};

apiInstance.filesV1StoragesStorageIdFilesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **path** | [**string**] |  | (optional) defaults to undefined
 **pathSeparator** | [**string**] |  | (optional) defaults to undefined
 **directoryPath** | [**string**] |  | (optional) defaults to undefined
 **checksum** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1
 **scroll** | [**boolean**] | If true passed then uses scroll pagination instead of default one | (optional) defaults to undefined
 **scrollId** | [**string**] | In order to get next batch of results using scroll pagination the scroll_id is required | (optional) defaults to undefined
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc | (optional) defaults to undefined
 **id** | [**string**] | Filter by id | (optional) defaults to undefined
 **name** | [**string**] | Filter by name | (optional) defaults to undefined
 **type** | [**string**] | Filter by type | (optional) defaults to undefined
 **status** | [**string**] | Filter by status | (optional) defaults to undefined
 **dateCreated** | [**string**] | Filter by date_created | (optional) defaults to undefined
 **dateModified** | [**string**] | Filter by date_modified | (optional) defaults to undefined


### Return type

**FilesElasticSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns files |  -  |
**401** | Token is invalid |  -  |
**404** | No files found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdFilesPatch**
> FileBaseSchema filesV1StoragesStorageIdFilesPatch(fileBaseSchema)

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdFilesPatchRequest = {
  // string
  storageId: "storage_id_example",
  // FileBaseSchema | body
  fileBaseSchema: {
    assetId: "assetId_example",
    checksum: "checksum_example",
    directoryPath: "directoryPath_example",
    fileDateCreated: new Date('1970-01-01T00:00:00.00Z'),
    fileDateModified: new Date('1970-01-01T00:00:00.00Z'),
    fileSetId: "fileSetId_example",
    formatId: "formatId_example",
    name: "name_example",
    originalName: "originalName_example",
    parentId: "parentId_example",
    size: -9223372036854776000,
    status: "OPEN",
    storageId: "storageId_example",
    type: "FILE",
    userId: "userId_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdFilesPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileBaseSchema** | **FileBaseSchema**| body |
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FileBaseSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns updated file |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Asset access denied |  -  |
**404** | No file found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdFilesPost**
> FileBaseSchema filesV1StoragesStorageIdFilesPost(fileBaseSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdFilesPostRequest = {
  // string
  storageId: "storage_id_example",
  // FileBaseSchema | body
  fileBaseSchema: {
    assetId: "assetId_example",
    checksum: "checksum_example",
    directoryPath: "directoryPath_example",
    fileDateCreated: new Date('1970-01-01T00:00:00.00Z'),
    fileDateModified: new Date('1970-01-01T00:00:00.00Z'),
    fileSetId: "fileSetId_example",
    formatId: "formatId_example",
    name: "name_example",
    originalName: "originalName_example",
    parentId: "parentId_example",
    size: -9223372036854776000,
    status: "OPEN",
    storageId: "storageId_example",
    type: "FILE",
    userId: "userId_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdFilesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileBaseSchema** | **FileBaseSchema**| body |
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FileBaseSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a file that was created |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdFilesPut**
> FileBaseSchema filesV1StoragesStorageIdFilesPut(fileBaseSchema)

 Required roles:  - can_write_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdFilesPutRequest = {
  // string
  storageId: "storage_id_example",
  // FileBaseSchema | body
  fileBaseSchema: {
    assetId: "assetId_example",
    checksum: "checksum_example",
    directoryPath: "directoryPath_example",
    fileDateCreated: new Date('1970-01-01T00:00:00.00Z'),
    fileDateModified: new Date('1970-01-01T00:00:00.00Z'),
    fileSetId: "fileSetId_example",
    formatId: "formatId_example",
    name: "name_example",
    originalName: "originalName_example",
    parentId: "parentId_example",
    size: -9223372036854776000,
    status: "OPEN",
    storageId: "storageId_example",
    type: "FILE",
    userId: "userId_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdFilesPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileBaseSchema** | **FileBaseSchema**| body |
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FileBaseSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns updated file |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Asset access denied |  -  |
**404** | No file found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdFilesReindexPost**
> void filesV1StoragesStorageIdFilesReindexPost()

 Required roles:  - can_reindex_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdFilesReindexPostRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdFilesReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ID and status of the job |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdGatewayEventsEventIdDelete**
> void filesV1StoragesStorageIdGatewayEventsEventIdDelete()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdGatewayEventsEventIdDeleteRequest = {
  // string
  storageId: "storage_id_example",
  // string
  eventId: "event_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdGatewayEventsEventIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **eventId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

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

# **filesV1StoragesStorageIdGatewayEventsGet**
> IconikStorageGatewayEventsSchema filesV1StoragesStorageIdGatewayEventsGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdGatewayEventsGetRequest = {
  // string
  storageId: "storage_id_example",
  // string
  lastId: "last_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdGatewayEventsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **lastId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**IconikStorageGatewayEventsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a gateway storage events |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | No matching storage exists |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdGatewayEventsPost**
> IconikStorageGatewayEventSchema filesV1StoragesStorageIdGatewayEventsPost(iconikStorageGatewayEventSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdGatewayEventsPostRequest = {
  // string
  storageId: "storage_id_example",
  // IconikStorageGatewayEventSchema | body
  iconikStorageGatewayEventSchema: {
    data: {},
    type: "RESTART",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdGatewayEventsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iconikStorageGatewayEventSchema** | **IconikStorageGatewayEventSchema**| body |
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**IconikStorageGatewayEventSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created gateway storage event |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | No matching storage exists |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdGatewayEventsPurgePost**
> void filesV1StoragesStorageIdGatewayEventsPurgePost(iconikStorageGatewayEventsPurgeSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdGatewayEventsPurgePostRequest = {
  // string
  storageId: "storage_id_example",
  // IconikStorageGatewayEventsPurgeSchema | body
  iconikStorageGatewayEventsPurgeSchema: {
    eventIds: [
      "eventIds_example",
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdGatewayEventsPurgePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iconikStorageGatewayEventsPurgeSchema** | **IconikStorageGatewayEventsPurgeSchema**| body |
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdGatewayReportGet**
> GatewayReportSchema filesV1StoragesStorageIdGatewayReportGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdGatewayReportGetRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdGatewayReportGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**GatewayReportSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns storage gateway report |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | No matching storage exists |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdGatewayReportPut**
> void filesV1StoragesStorageIdGatewayReportPut(gatewayReportSchema)

 Required roles:  - is_storage_worker 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdGatewayReportPutRequest = {
  // string
  storageId: "storage_id_example",
  // GatewayReportSchema | body
  gatewayReportSchema: {
    awaitChecksumFilesNumber: -2147483648,
    emptyFilesNumber: -2147483648,
    errorLogLines: [
      "errorLogLines_example",
    ],
    exportedFilesNumber: -2147483648,
    faultyFilesNumber: -2147483648,
    hostInfo: "hostInfo_example",
    hostName: "hostName_example",
    ingestedFilesNumber: -2147483648,
    ingestedFilesUploadsNumber: -2147483648,
    ingestingFilesNumber: -2147483648,
    lastScanTime: -2147483648,
    logLines: [
      "logLines_example",
    ],
    missingFilesNumber: -2147483648,
    scannedFilesNumber: -2147483648,
    skippedFilesNumber: -2147483648,
    startStatus: "SUCCESS",
    startStatusMessage: "startStatusMessage_example",
    status: "OFFLINE",
    totalFilesNumber: -2147483648,
    totalFoldersNumber: -2147483648,
    version: "version_example",
    waitingPreviewTranscodeJobsNumber: -2147483648,
    waitingTranscodeJobsNumber: -2147483648,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdGatewayReportPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gatewayReportSchema** | **GatewayReportSchema**| body |
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns empty dict |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | No matching storage exists |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdGatewayStatusPut**
> void filesV1StoragesStorageIdGatewayStatusPut(gatewayStatusSchema)

 Required roles:  - is_storage_worker 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdGatewayStatusPutRequest = {
  // string
  storageId: "storage_id_example",
  // GatewayStatusSchema | body
  gatewayStatusSchema: {
    status: "status_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdGatewayStatusPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gatewayStatusSchema** | **GatewayStatusSchema**| body |
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns empty dict |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | No matching storage exists |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdGet**
> StorageSchema filesV1StoragesStorageIdGet()

 Required roles:  - can_read_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdGetRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**StorageSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a storage |  -  |
**401** | Token is invalid |  -  |
**404** | Storage doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdLogsPost**
> FilesV1StoragesStorageIdLogsPost200Response filesV1StoragesStorageIdLogsPost()

 Required roles:  - is_storage_worker 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdLogsPostRequest = {
  // string
  storageId: "storage_id_example",
  // string
  filename: "filename_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdLogsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **filename** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FilesV1StoragesStorageIdLogsPost200Response**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns upload_url and path for storage logs |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Storage does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdObjectTypeFilesDelete**
> void filesV1StoragesStorageIdObjectTypeFilesDelete(storageFilesDeleteBulkSchema)

 Required roles:  - can_read_storages - can_delete_files 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdObjectTypeFilesDeleteRequest = {
  // string
  storageId: "storage_id_example",
  // string
  objectType: "object_type_example",
  // StorageFilesDeleteBulkSchema | body
  storageFilesDeleteBulkSchema: {
    objectIds: [
      "objectIds_example",
    ],
    objectType: "objectType_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdObjectTypeFilesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageFilesDeleteBulkSchema** | **StorageFilesDeleteBulkSchema**| body |
 **storageId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Returns the updated objects |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**501** | Invalid object type |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdPatch**
> StorageSchema filesV1StoragesStorageIdPatch(storageSchema)

 Required roles:  - can_write_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdPatchRequest = {
  // string
  storageId: "storage_id_example",
  // StorageSchema | body
  storageSchema: {
    description: "description_example",
    lastScanned: new Date('1970-01-01T00:00:00.00Z'),
    method: "FILE",
    name: "name_example",
    purpose: "KEYFRAMES",
    scannerStatus: "scannerStatus_example",
    settings: {},
    status: "ACTIVE",
    statusMessage: "statusMessage_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageSchema** | **StorageSchema**| body |
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**StorageSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated storage |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdPut**
> StorageSchema filesV1StoragesStorageIdPut(storageSchema)

 Required roles:  - can_write_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdPutRequest = {
  // string
  storageId: "storage_id_example",
  // StorageSchema | body
  storageSchema: {
    description: "description_example",
    lastScanned: new Date('1970-01-01T00:00:00.00Z'),
    method: "FILE",
    name: "name_example",
    purpose: "KEYFRAMES",
    scannerStatus: "scannerStatus_example",
    settings: {},
    status: "ACTIVE",
    statusMessage: "statusMessage_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageSchema** | **StorageSchema**| body |
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**StorageSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated storage |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdReindexPost**
> void filesV1StoragesStorageIdReindexPost()

 Required roles:  - can_reindex_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdReindexPostRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ID and status of the job |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdScanPost**
> void filesV1StoragesStorageIdScanPost(storageScanSchema)

 Required roles:  - can_scan_bucket 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdScanPostRequest = {
  // string
  storageId: "storage_id_example",
  // StorageScanSchema | body
  storageScanSchema: {
    files: [
      "files_example",
    ],
    ignoreAlreadyActive: true,
    paths: [
      "paths_example",
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdScanPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageScanSchema** | **StorageScanSchema**| body |
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Scan started |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdSearchDocumentPut**
> void filesV1StoragesStorageIdSearchDocumentPut(storageSchema)

 Required roles:  - can_reindex_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdSearchDocumentPutRequest = {
  // string
  storageId: "storage_id_example",
  // StorageSchema | body
  storageSchema: {
    description: "description_example",
    lastScanned: new Date('1970-01-01T00:00:00.00Z'),
    method: "FILE",
    name: "name_example",
    purpose: "KEYFRAMES",
    scannerStatus: "scannerStatus_example",
    settings: {},
    status: "ACTIVE",
    statusMessage: "statusMessage_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdSearchDocumentPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageSchema** | **StorageSchema**| body |
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Storage document updated |  -  |
**400** | No document supplied |  -  |
**401** | Token is invalid |  -  |
**404** | Storage does not exist in search index |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdTemporaryFilesGet**
> FilesSchema filesV1StoragesStorageIdTemporaryFilesGet()

 Required roles:  - can_read_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdTemporaryFilesGetRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 100,
  // string | ID of a last file on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1StoragesStorageIdTemporaryFilesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 100
 **lastId** | [**string**] | ID of a last file on previous page | (optional) defaults to undefined


### Return type

**FilesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns exported files |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdTranscodersGet**
> TranscodersByStorageSchema filesV1StoragesStorageIdTranscodersGet()

 Required roles:  - can_read_storages - can_read_transcoders 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdTranscodersGetRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last transcoder on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1StoragesStorageIdTranscodersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last transcoder on previous page | (optional) defaults to undefined


### Return type

**TranscodersByStorageSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of transcoders |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdTranscodersTranscoderIdDelete**
> void filesV1StoragesStorageIdTranscodersTranscoderIdDelete()

 Required roles:  - can_write_transcoders 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdTranscodersTranscoderIdDeleteRequest = {
  // string
  storageId: "storage_id_example",
  // string
  transcoderId: "transcoder_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdTranscodersTranscoderIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **transcoderId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returns a created transcoder entry |  -  |
**401** | Token is invalid |  -  |
**404** | Storage or transcoder does not exists |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdTranscodersTranscoderIdPut**
> TranscoderByStorageReadSchema filesV1StoragesStorageIdTranscodersTranscoderIdPut()

 Required roles:  - can_write_transcoders 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdTranscodersTranscoderIdPutRequest = {
  // string
  storageId: "storage_id_example",
  // string
  transcoderId: "transcoder_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdTranscodersTranscoderIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **transcoderId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**TranscoderByStorageReadSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created transcoder entry |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Storage or transcoder does not exists |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdTransfersFromGet**
> TransfersFromStorageSchema filesV1StoragesStorageIdTransfersFromGet()

 Required roles:  - can_read_transfers 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdTransfersFromGetRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last transfer on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1StoragesStorageIdTransfersFromGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last transfer on previous page | (optional) defaults to undefined


### Return type

**TransfersFromStorageSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns pending transfers to be handled |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdTransfersFromTransferIdDelete**
> void filesV1StoragesStorageIdTransfersFromTransferIdDelete()

 Required roles:  - can_write_transfers 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdTransfersFromTransferIdDeleteRequest = {
  // string
  storageId: "storage_id_example",
  // string
  transferId: "transfer_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
  // boolean (optional)
  failed: true,
  // boolean (optional)
  completed: true,
};

apiInstance.filesV1StoragesStorageIdTransfersFromTransferIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **transferId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **failed** | [**boolean**] |  | (optional) defaults to undefined
 **completed** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Transfer job was deleted |  -  |
**404** | Transfer job does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdTransfersFromTransferIdGet**
> TransferFromStorageReadSchema filesV1StoragesStorageIdTransfersFromTransferIdGet()

 Required roles:  - can_read_transfers 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdTransfersFromTransferIdGetRequest = {
  // string
  storageId: "storage_id_example",
  // string
  transferId: "transfer_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.filesV1StoragesStorageIdTransfersFromTransferIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **transferId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**TransferFromStorageReadSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a file set transfer from local storage |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Transfer does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdTransfersToGet**
> TransfersToStorageSchema filesV1StoragesStorageIdTransfersToGet()

 Required roles:  - can_read_transfers 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdTransfersToGetRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last transfer on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1StoragesStorageIdTransfersToGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last transfer on previous page | (optional) defaults to undefined


### Return type

**TransfersToStorageSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns pending transfers to be handled |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdTransfersToTransferIdDelete**
> void filesV1StoragesStorageIdTransfersToTransferIdDelete()

 Required roles:  - can_write_transfers 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdTransfersToTransferIdDeleteRequest = {
  // string
  storageId: "storage_id_example",
  // string
  transferId: "transfer_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
  // boolean (optional)
  failed: true,
  // boolean (optional)
  completed: true,
};

apiInstance.filesV1StoragesStorageIdTransfersToTransferIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **transferId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **failed** | [**boolean**] |  | (optional) defaults to undefined
 **completed** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Transfer job was deleted |  -  |
**404** | Transfer job does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdTransfersToTransferIdGet**
> TransferToStorageReadSchema filesV1StoragesStorageIdTransfersToTransferIdGet()

 Required roles:  - can_read_transfers 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdTransfersToTransferIdGetRequest = {
  // string
  storageId: "storage_id_example",
  // string
  transferId: "transfer_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.filesV1StoragesStorageIdTransfersToTransferIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **transferId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**TransferToStorageReadSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a file set transfer to local storage |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Transfer does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdVerificationsAccessGet**
> FilesV1StoragesStorageIdVerificationsAccessGet200Response filesV1StoragesStorageIdVerificationsAccessGet()

 Required roles:  - can_read_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdVerificationsAccessGetRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdVerificationsAccessGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FilesV1StoragesStorageIdVerificationsAccessGet200Response**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a document describing storage access |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Storage does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1StoragesStorageIdVerificationsPermissionsGet**
> FilesV1StoragesStorageIdVerificationsPermissionsGet200Response filesV1StoragesStorageIdVerificationsPermissionsGet()

 Required roles:  - can_read_storages 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1StoragesStorageIdVerificationsPermissionsGetRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1StoragesStorageIdVerificationsPermissionsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FilesV1StoragesStorageIdVerificationsPermissionsGet200Response**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a document describing storage permissions |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Storage does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1TranscodersGet**
> TranscodersSchema filesV1TranscodersGet()

 Required roles:  - can_read_transcoders 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1TranscodersGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // number | Which page number to fetch (optional)
  page: 1,
  // string | Search query (optional)
  query: "query_example",
  // string | Filter list of id:s (comma separated) (optional)
  ids: "ids_example",
  // string | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc (optional)
  sort: "sort_example",
};

apiInstance.filesV1TranscodersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to undefined
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1
 **query** | [**string**] | Search query | (optional) defaults to undefined
 **ids** | [**string**] | Filter list of id:s (comma separated) | (optional) defaults to undefined
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc | (optional) defaults to undefined


### Return type

**TranscodersSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of transcoders |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1TranscodersPost**
> TranscoderSchema filesV1TranscodersPost(transcoderSchema)

 Required roles:  - can_write_transcoders 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1TranscodersPostRequest = {
  // TranscoderSchema | body
  transcoderSchema: {
    name: "name_example",
    settings: {},
    type: "VANTAGE",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1TranscodersPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoderSchema** | **TranscoderSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**TranscoderSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created transcoder entry |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1TranscodersTranscoderIdDelete**
> void filesV1TranscodersTranscoderIdDelete()

 Required roles:  - can_delete_transcoders 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1TranscodersTranscoderIdDeleteRequest = {
  // string
  transcoderId: "transcoder_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1TranscodersTranscoderIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoderId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Without body |  -  |
**401** | Token is invalid |  -  |
**404** | Transcoder doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1TranscodersTranscoderIdGet**
> TranscoderSchema filesV1TranscodersTranscoderIdGet()

 Required roles:  - can_read_transcoders 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1TranscodersTranscoderIdGetRequest = {
  // string
  transcoderId: "transcoder_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1TranscodersTranscoderIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoderId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**TranscoderSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a transcoder |  -  |
**401** | Token is invalid |  -  |
**404** | Transcoder doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1TranscodersTranscoderIdLogsPost**
> FilesV1StoragesStorageIdLogsPost200Response filesV1TranscodersTranscoderIdLogsPost()

 Required roles:  - is_storage_worker 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1TranscodersTranscoderIdLogsPostRequest = {
  // string
  transcoderId: "transcoder_id_example",
  // string
  filename: "filename_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1TranscodersTranscoderIdLogsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoderId** | [**string**] |  | defaults to undefined
 **filename** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**FilesV1StoragesStorageIdLogsPost200Response**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns upload_url and path for transcoder logs |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Storage does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1TranscodersTranscoderIdPatch**
> TranscoderSchema filesV1TranscodersTranscoderIdPatch(transcoderSchema)

 Required roles:  - can_write_transcoders 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1TranscodersTranscoderIdPatchRequest = {
  // string
  transcoderId: "transcoder_id_example",
  // TranscoderSchema | body
  transcoderSchema: {
    name: "name_example",
    settings: {},
    type: "VANTAGE",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1TranscodersTranscoderIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoderSchema** | **TranscoderSchema**| body |
 **transcoderId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**TranscoderSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated transcoder |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1TranscodersTranscoderIdPut**
> TranscoderSchema filesV1TranscodersTranscoderIdPut(transcoderSchema)

 Required roles:  - can_write_transcoders 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1TranscodersTranscoderIdPutRequest = {
  // string
  transcoderId: "transcoder_id_example",
  // TranscoderSchema | body
  transcoderSchema: {
    name: "name_example",
    settings: {},
    type: "VANTAGE",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1TranscodersTranscoderIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoderSchema** | **TranscoderSchema**| body |
 **transcoderId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**TranscoderSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated transcoder |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1TranscodersTranscoderIdReindexPost**
> void filesV1TranscodersTranscoderIdReindexPost()

 Required roles:  - can_reindex_transcoders 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1TranscodersTranscoderIdReindexPostRequest = {
  // string
  transcoderId: "transcoder_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.filesV1TranscodersTranscoderIdReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoderId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ID and status of the job |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1TranscodersTranscoderIdStoragesGet**
> StoragesReadSchema filesV1TranscodersTranscoderIdStoragesGet()

 Required roles:  - can_read_transcoders 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1TranscodersTranscoderIdStoragesGetRequest = {
  // string
  transcoderId: "transcoder_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last storage on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.filesV1TranscodersTranscoderIdStoragesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcoderId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last storage on previous page | (optional) defaults to undefined


### Return type

**StoragesReadSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of storages |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1TransfersTransferIdUrlsPost**
> TransferSignedURLSchema filesV1TransfersTransferIdUrlsPost()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1TransfersTransferIdUrlsPostRequest = {
  // string
  transferId: "transfer_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.filesV1TransfersTransferIdUrlsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**TransferSignedURLSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Generated signed url |  -  |
**400** | Failed to generate url |  -  |
**403** | User not authorized to get url for job |  -  |
**404** | Transfer job does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesV1TransfersTransferIdUrlsVerifyGet**
> void filesV1TransfersTransferIdUrlsVerifyGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.FilesApi(configuration);

let body:iconik.FilesApiFilesV1TransfersTransferIdUrlsVerifyGetRequest = {
  // string
  transferId: "transfer_id_example",
  // string
  userId: "user_id_example",
  // string
  signature: "signature_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.filesV1TransfersTransferIdUrlsVerifyGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined
 **signature** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Verified signed url |  -  |
**400** | Not a valid signed url |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


