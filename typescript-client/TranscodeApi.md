# iconik.TranscodeApi

All URIs are relative to *https://app.iconik.io/API*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transcodeV1AnalyzeAssetsAssetIdPost**](TranscodeApi.md#transcodeV1AnalyzeAssetsAssetIdPost) | **POST** /transcode/v1/analyze/assets/{asset_id}/ | Start a job that sends an asset for analysis
[**transcodeV1AnalyzeAssetsAssetIdProfilesDefaultMediaTypePost**](TranscodeApi.md#transcodeV1AnalyzeAssetsAssetIdProfilesDefaultMediaTypePost) | **POST** /transcode/v1/analyze/assets/{asset_id}/profiles/default/{media_type}/ | Start a job that sends an asset for analysis
[**transcodeV1AnalyzeAssetsAssetIdProfilesDefaultPost**](TranscodeApi.md#transcodeV1AnalyzeAssetsAssetIdProfilesDefaultPost) | **POST** /transcode/v1/analyze/assets/{asset_id}/profiles/default/ | Start a job that sends an asset for analysis with a default analysis profile
[**transcodeV1AnalyzeAssetsAssetIdProfilesProfileIdPost**](TranscodeApi.md#transcodeV1AnalyzeAssetsAssetIdProfilesProfileIdPost) | **POST** /transcode/v1/analyze/assets/{asset_id}/profiles/{profile_id}/ | Start a job that sends an asset for analysis with a custom analysis profile
[**transcodeV1AnalyzeBulkPost**](TranscodeApi.md#transcodeV1AnalyzeBulkPost) | **POST** /transcode/v1/analyze/bulk/ | Start a job that sends objects for analysis using a custom analysis profile
[**transcodeV1AssetsLinkMetadataPost**](TranscodeApi.md#transcodeV1AssetsLinkMetadataPost) | **POST** /transcode/v1/assets/link/metadata/ | Gets metadata info from the link
[**transcodeV1EdgeTranscodeJobsJobIdAcknowledgePost**](TranscodeApi.md#transcodeV1EdgeTranscodeJobsJobIdAcknowledgePost) | **POST** /transcode/v1/edge_transcode/jobs/{job_id}/acknowledge/ | Acknowledge an edge transcode job
[**transcodeV1EdgeTranscodeWorkersGet**](TranscodeApi.md#transcodeV1EdgeTranscodeWorkersGet) | **GET** /transcode/v1/edge_transcode/workers/ | Get edge transcode workers
[**transcodeV1EdgeTranscodeWorkersPost**](TranscodeApi.md#transcodeV1EdgeTranscodeWorkersPost) | **POST** /transcode/v1/edge_transcode/workers/ | Create a new edge transcode worker
[**transcodeV1EdgeTranscodeWorkersWorkerIdDelete**](TranscodeApi.md#transcodeV1EdgeTranscodeWorkersWorkerIdDelete) | **DELETE** /transcode/v1/edge_transcode/workers/{worker_id}/ | Delete a edge transcode worker
[**transcodeV1EdgeTranscodeWorkersWorkerIdGet**](TranscodeApi.md#transcodeV1EdgeTranscodeWorkersWorkerIdGet) | **GET** /transcode/v1/edge_transcode/workers/{worker_id}/ | Get a edge transcode worker
[**transcodeV1EdgeTranscodeWorkersWorkerIdPatch**](TranscodeApi.md#transcodeV1EdgeTranscodeWorkersWorkerIdPatch) | **PATCH** /transcode/v1/edge_transcode/workers/{worker_id}/ | Update a edge transcode worker
[**transcodeV1EdgeTranscodeWorkersWorkerIdPut**](TranscodeApi.md#transcodeV1EdgeTranscodeWorkersWorkerIdPut) | **PUT** /transcode/v1/edge_transcode/workers/{worker_id}/ | Update a edge transcode worker
[**transcodeV1KeyframesCollectionsCollectionIdPost**](TranscodeApi.md#transcodeV1KeyframesCollectionsCollectionIdPost) | **POST** /transcode/v1/keyframes/collections/{collection_id}/ | Start a job that creates a collection keyframe
[**transcodeV1StoragesStorageIdDelete**](TranscodeApi.md#transcodeV1StoragesStorageIdDelete) | **DELETE** /transcode/v1/storages/{storage_id}/ | Cancel all transcode jobs linked to the storage
[**transcodeV1StoragesStorageIdEdgeTranscodeJobsGet**](TranscodeApi.md#transcodeV1StoragesStorageIdEdgeTranscodeJobsGet) | **GET** /transcode/v1/storages/{storage_id}/edge_transcode/jobs/ | Get a edge transcode jobs from the job queue
[**transcodeV1StoragesStorageIdFilesFileIdTranscodeDelete**](TranscodeApi.md#transcodeV1StoragesStorageIdFilesFileIdTranscodeDelete) | **DELETE** /transcode/v1/storages/{storage_id}/files/{file_id}/transcode/ | Delete local storage transcode job.
[**transcodeV1StoragesStorageIdTranscodeGet**](TranscodeApi.md#transcodeV1StoragesStorageIdTranscodeGet) | **GET** /transcode/v1/storages/{storage_id}/transcode/ | Get pending local storage transcode jobs.
[**transcodeV1StoragesStorageIdTranscodeRecordIdDelete**](TranscodeApi.md#transcodeV1StoragesStorageIdTranscodeRecordIdDelete) | **DELETE** /transcode/v1/storages/{storage_id}/transcode/{record_id}/ | Delete local storage transcode job.
[**transcodeV1StoragesStorageIdTranscodeRecordIdGet**](TranscodeApi.md#transcodeV1StoragesStorageIdTranscodeRecordIdGet) | **GET** /transcode/v1/storages/{storage_id}/transcode/{record_id}/ | Get local storage transcode job.
[**transcodeV1TranscodeObjectTypeObjectIdGet**](TranscodeApi.md#transcodeV1TranscodeObjectTypeObjectIdGet) | **GET** /transcode/v1/transcode/{object_type}/{object_id}/ | Returns list of transcode queue records by object_id
[**transcodeV1TranscodeObjectTypeObjectIdVersionsVersionIdGet**](TranscodeApi.md#transcodeV1TranscodeObjectTypeObjectIdVersionsVersionIdGet) | **GET** /transcode/v1/transcode/{object_type}/{object_id}/versions/{version_id}/ | Returns list of transcode queue records by version_id
[**transcodeV1TranscodePost**](TranscodeApi.md#transcodeV1TranscodePost) | **POST** /transcode/v1/transcode/ | Starts a new transcode.
[**transcodeV1TranscodeQueueGet**](TranscodeApi.md#transcodeV1TranscodeQueueGet) | **GET** /transcode/v1/transcode/queue/ | Get all the statuses of the queued transcode jobs
[**transcodeV1TranscodeQueueSystemGet**](TranscodeApi.md#transcodeV1TranscodeQueueSystemGet) | **GET** /transcode/v1/transcode/queue/system/ | Get the status of the transcode job queues
[**transcodeV1TranscodeTranscodeJobIdDelete**](TranscodeApi.md#transcodeV1TranscodeTranscodeJobIdDelete) | **DELETE** /transcode/v1/transcode/{transcode_job_id}/ | Cancel a particular transcode job by id
[**transcodeV1TranscodeTranscodeJobIdGet**](TranscodeApi.md#transcodeV1TranscodeTranscodeJobIdGet) | **GET** /transcode/v1/transcode/{transcode_job_id}/ | Get transcode job
[**transcodeV1TranscodeTranscodeJobIdPositionPositionPost**](TranscodeApi.md#transcodeV1TranscodeTranscodeJobIdPositionPositionPost) | **POST** /transcode/v1/transcode/{transcode_job_id}/position/{position}/ | Move transcode job to top or bottom of the queue
[**transcodeV1TranscodeTranscodeJobIdPriorityPriorityPut**](TranscodeApi.md#transcodeV1TranscodeTranscodeJobIdPriorityPriorityPut) | **PUT** /transcode/v1/transcode/{transcode_job_id}/priority/{priority}/ | Change transcode job priority
[**transcodeV1TranscribeAssetsAssetIdProfilesDefaultPost**](TranscodeApi.md#transcodeV1TranscribeAssetsAssetIdProfilesDefaultPost) | **POST** /transcode/v1/transcribe/assets/{asset_id}/profiles/default/ | Start a job that sends an asset to default transcription service
[**transcodeV1TranscribeBulkPost**](TranscodeApi.md#transcodeV1TranscribeBulkPost) | **POST** /transcode/v1/transcribe/bulk/ | Start a job that sends multiple objects to transcription service


# **transcodeV1AnalyzeAssetsAssetIdPost**
> void transcodeV1AnalyzeAssetsAssetIdPost()

 Required roles:  - can_analyze_content 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1AnalyzeAssetsAssetIdPostRequest = {
  // string
  assetId: "asset_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // AnalyzeSchema | body (optional)
  analyzeSchema: {
    force: false,
    forceType: "APPEND",
    serviceName: "serviceName_example",
  },
};

apiInstance.transcodeV1AnalyzeAssetsAssetIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analyzeSchema** | **AnalyzeSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
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
**201** | Returns a definition of the started job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1AnalyzeAssetsAssetIdProfilesDefaultMediaTypePost**
> void transcodeV1AnalyzeAssetsAssetIdProfilesDefaultMediaTypePost()

with a default analysis profile of specified media typewith a default analysis profile of specified media type Required roles:  - can_analyze_content 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1AnalyzeAssetsAssetIdProfilesDefaultMediaTypePostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  mediaType: "media_type_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // AnalyzeSchema | body (optional)
  analyzeSchema: {
    force: false,
    forceType: "APPEND",
    serviceName: "serviceName_example",
  },
};

apiInstance.transcodeV1AnalyzeAssetsAssetIdProfilesDefaultMediaTypePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analyzeSchema** | **AnalyzeSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **mediaType** | [**string**] |  | defaults to undefined
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
**201** | Returns a definition of the started job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1AnalyzeAssetsAssetIdProfilesDefaultPost**
> void transcodeV1AnalyzeAssetsAssetIdProfilesDefaultPost()

 Required roles:  - can_analyze_content 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1AnalyzeAssetsAssetIdProfilesDefaultPostRequest = {
  // string
  assetId: "asset_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // AnalyzeSchema | body (optional)
  analyzeSchema: {
    force: false,
    forceType: "APPEND",
    serviceName: "serviceName_example",
  },
};

apiInstance.transcodeV1AnalyzeAssetsAssetIdProfilesDefaultPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analyzeSchema** | **AnalyzeSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
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
**201** | Returns a definition of the started job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1AnalyzeAssetsAssetIdProfilesProfileIdPost**
> void transcodeV1AnalyzeAssetsAssetIdProfilesProfileIdPost()

 Required roles:  - can_analyze_content 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1AnalyzeAssetsAssetIdProfilesProfileIdPostRequest = {
  // string
  assetId: "asset_id_example",
  // string
  profileId: "profile_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // AnalyzeSchema | body (optional)
  analyzeSchema: {
    force: false,
    forceType: "APPEND",
    serviceName: "serviceName_example",
  },
};

apiInstance.transcodeV1AnalyzeAssetsAssetIdProfilesProfileIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analyzeSchema** | **AnalyzeSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **profileId** | [**string**] |  | defaults to undefined
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
**201** | Returns a definition of the started job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1AnalyzeBulkPost**
> void transcodeV1AnalyzeBulkPost()

 Required roles:  - can_analyze_content 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1AnalyzeBulkPostRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // BulkAnalyzeSchema | body (optional)
  bulkAnalyzeSchema: {
    force: false,
    forceType: "OVERWRITE",
    objectIds: [
      "objectIds_example",
    ],
    objectType: "assets",
    profileId: "profileId_example",
  },
};

apiInstance.transcodeV1AnalyzeBulkPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkAnalyzeSchema** | **BulkAnalyzeSchema**| body |
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
**201** | Returns a definition of the started job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Analysis account/profile was not found |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1AssetsLinkMetadataPost**
> AssetLinkData transcodeV1AssetsLinkMetadataPost(assetLinkURLSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1AssetsLinkMetadataPostRequest = {
  // AssetLinkURLSchema | body
  assetLinkURLSchema: {
    url: "url_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.transcodeV1AssetsLinkMetadataPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetLinkURLSchema** | **AssetLinkURLSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AssetLinkData**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the title and the site-name |  -  |
**400** | Bad URL |  -  |
**401** | Token is invalid |  -  |
**404** | Could not extract data |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1EdgeTranscodeJobsJobIdAcknowledgePost**
> void transcodeV1EdgeTranscodeJobsJobIdAcknowledgePost()

 Required roles:  - can_read_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1EdgeTranscodeJobsJobIdAcknowledgePostRequest = {
  // string
  jobId: "job_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.transcodeV1EdgeTranscodeJobsJobIdAcknowledgePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**string**] |  | defaults to undefined
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
**200** | Acknowledge an edge transcode job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Edge transcode job doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1EdgeTranscodeWorkersGet**
> EdgeTranscodeWorkersSchema transcodeV1EdgeTranscodeWorkersGet()

 Required roles:  - is_storage_worker - can_read_transcoders 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1EdgeTranscodeWorkersGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.transcodeV1EdgeTranscodeWorkersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**EdgeTranscodeWorkersSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns edge transcode workers |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1EdgeTranscodeWorkersPost**
> EdgeTranscodeWorkerSchema transcodeV1EdgeTranscodeWorkersPost(edgeTranscodeWorkerSchema)

 Required roles:  - is_storage_worker - can_write_transcoders 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1EdgeTranscodeWorkersPostRequest = {
  // EdgeTranscodeWorkerSchema | body
  edgeTranscodeWorkerSchema: {
    status: "ACTIVE",
    storageId: "storageId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.transcodeV1EdgeTranscodeWorkersPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edgeTranscodeWorkerSchema** | **EdgeTranscodeWorkerSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**EdgeTranscodeWorkerSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns an edge transcode worker |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1EdgeTranscodeWorkersWorkerIdDelete**
> void transcodeV1EdgeTranscodeWorkersWorkerIdDelete()

 Required roles:  - is_storage_worker - can_write_transcoders 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1EdgeTranscodeWorkersWorkerIdDeleteRequest = {
  // string
  workerId: "worker_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.transcodeV1EdgeTranscodeWorkersWorkerIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workerId** | [**string**] |  | defaults to undefined
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
**404** | Edge transcode worker doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1EdgeTranscodeWorkersWorkerIdGet**
> EdgeTranscodeWorkerSchema transcodeV1EdgeTranscodeWorkersWorkerIdGet()

 Required roles:  - is_storage_worker - can_read_transcoders 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1EdgeTranscodeWorkersWorkerIdGetRequest = {
  // string
  workerId: "worker_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.transcodeV1EdgeTranscodeWorkersWorkerIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workerId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**EdgeTranscodeWorkerSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a edge transcode worker |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Edge transcode worker doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1EdgeTranscodeWorkersWorkerIdPatch**
> EdgeTranscodeWorkerSchema transcodeV1EdgeTranscodeWorkersWorkerIdPatch(edgeTranscodeWorkerSchema)

 Required roles:  - is_storage_worker - can_write_transcoders 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1EdgeTranscodeWorkersWorkerIdPatchRequest = {
  // string
  workerId: "worker_id_example",
  // EdgeTranscodeWorkerSchema | body
  edgeTranscodeWorkerSchema: {
    status: "ACTIVE",
    storageId: "storageId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.transcodeV1EdgeTranscodeWorkersWorkerIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edgeTranscodeWorkerSchema** | **EdgeTranscodeWorkerSchema**| body |
 **workerId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**EdgeTranscodeWorkerSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a edge transcode worker that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Edge transcode worker doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1EdgeTranscodeWorkersWorkerIdPut**
> EdgeTranscodeWorkerSchema transcodeV1EdgeTranscodeWorkersWorkerIdPut(edgeTranscodeWorkerSchema)

 Required roles:  - is_storage_worker - can_write_transcoders 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1EdgeTranscodeWorkersWorkerIdPutRequest = {
  // string
  workerId: "worker_id_example",
  // EdgeTranscodeWorkerSchema | body
  edgeTranscodeWorkerSchema: {
    status: "ACTIVE",
    storageId: "storageId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.transcodeV1EdgeTranscodeWorkersWorkerIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edgeTranscodeWorkerSchema** | **EdgeTranscodeWorkerSchema**| body |
 **workerId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**EdgeTranscodeWorkerSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a edge transcode worker that was updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Edge transcode worker doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1KeyframesCollectionsCollectionIdPost**
> void transcodeV1KeyframesCollectionsCollectionIdPost()

 Required roles:  - can_write_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1KeyframesCollectionsCollectionIdPostRequest = {
  // string
  collectionId: "collection_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // GenerateCollectionKeyframeSchema | body (optional)
  generateCollectionKeyframeSchema: {
    deletedAssetId: "deletedAssetId_example",
    force: true,
    specifiedAssetIds: [
      "specifiedAssetIds_example",
    ],
    specifiedKeyframes: [
      {
        url: "url_example",
      },
    ],
  },
};

apiInstance.transcodeV1KeyframesCollectionsCollectionIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateCollectionKeyframeSchema** | **GenerateCollectionKeyframeSchema**| body |
 **collectionId** | [**string**] |  | defaults to undefined
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
**201** | Returns a definiton of the started job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1StoragesStorageIdDelete**
> void transcodeV1StoragesStorageIdDelete()

 Required roles:  - can_delete_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1StoragesStorageIdDeleteRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // AbortStorageTranscodeJobsSchema | body (optional)
  abortStorageTranscodeJobsSchema: {
    errorMessage: "errorMessage_example",
  },
};

apiInstance.transcodeV1StoragesStorageIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **abortStorageTranscodeJobsSchema** | **AbortStorageTranscodeJobsSchema**| body |
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
**202** | Successfully scheduled operation |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | User does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1StoragesStorageIdEdgeTranscodeJobsGet**
> EdgeTranscodeJobsSchema transcodeV1StoragesStorageIdEdgeTranscodeJobsGet()

 Required roles:  - can_read_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1StoragesStorageIdEdgeTranscodeJobsGetRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The max number of items to fetch (optional)
  limit: 10,
};

apiInstance.transcodeV1StoragesStorageIdEdgeTranscodeJobsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] | The max number of items to fetch | (optional) defaults to 10


### Return type

**EdgeTranscodeJobsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all analysis service accounts |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1StoragesStorageIdFilesFileIdTranscodeDelete**
> void transcodeV1StoragesStorageIdFilesFileIdTranscodeDelete()

 Required roles:  - can_read_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1StoragesStorageIdFilesFileIdTranscodeDeleteRequest = {
  // string
  storageId: "storage_id_example",
  // string
  fileId: "file_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.transcodeV1StoragesStorageIdFilesFileIdTranscodeDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **fileId** | [**string**] |  | defaults to undefined
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
**204** | Transcode job was deleted |  -  |
**404** | Transcode job does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1StoragesStorageIdTranscodeGet**
> LocalStorageFileTranscodeJobsSchema transcodeV1StoragesStorageIdTranscodeGet()

 Required roles:  - can_read_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1StoragesStorageIdTranscodeGetRequest = {
  // string
  storageId: "storage_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last transcode job entity on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.transcodeV1StoragesStorageIdTranscodeGet(body).then((data:any) => {
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
 **lastId** | [**string**] | ID of a last transcode job entity on previous page | (optional) defaults to undefined


### Return type

**LocalStorageFileTranscodeJobsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns pending transcode jobs to be handled |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1StoragesStorageIdTranscodeRecordIdDelete**
> void transcodeV1StoragesStorageIdTranscodeRecordIdDelete()

 Required roles:  - can_read_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1StoragesStorageIdTranscodeRecordIdDeleteRequest = {
  // string
  storageId: "storage_id_example",
  // string
  recordId: "record_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.transcodeV1StoragesStorageIdTranscodeRecordIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **recordId** | [**string**] |  | defaults to undefined
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
**204** | Transcode job was deleted |  -  |
**404** | Transcode job does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1StoragesStorageIdTranscodeRecordIdGet**
> LocalStorageFileTranscodeJobSchema transcodeV1StoragesStorageIdTranscodeRecordIdGet()

 Required roles:  - can_read_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1StoragesStorageIdTranscodeRecordIdGetRequest = {
  // string
  storageId: "storage_id_example",
  // string
  recordId: "record_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.transcodeV1StoragesStorageIdTranscodeRecordIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | [**string**] |  | defaults to undefined
 **recordId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**LocalStorageFileTranscodeJobSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns pending transcode job to be handled |  -  |
**404** | Transcode job does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1TranscodeObjectTypeObjectIdGet**
> TranscodeESQueueRecordsSchema transcodeV1TranscodeObjectTypeObjectIdGet()

 Required roles:  - can_read_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1TranscodeObjectTypeObjectIdGetRequest = {
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.transcodeV1TranscodeObjectTypeObjectIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**TranscodeESQueueRecordsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns list of transcode queue records |  -  |
**400** | Bad request - malformed parameters |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1TranscodeObjectTypeObjectIdVersionsVersionIdGet**
> TranscodeESQueueRecordsSchema transcodeV1TranscodeObjectTypeObjectIdVersionsVersionIdGet()

 Required roles:  - can_read_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1TranscodeObjectTypeObjectIdVersionsVersionIdGetRequest = {
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // string
  versionId: "version_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.transcodeV1TranscodeObjectTypeObjectIdVersionsVersionIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**TranscodeESQueueRecordsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns list of transcode queue records |  -  |
**400** | Bad request - malformed parameters |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1TranscodePost**
> JobSchema1 transcodeV1TranscodePost(jobSchema1)

Use /API/files/v1/assets/ID/files/ID/keyframes insteadUse /API/files/v1/assets/ID/files/ID/keyframes instead Required roles:  - can_write_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1TranscodePostRequest = {
  // JobSchema1 | body
  jobSchema1: {
    amazonRekognition: true,
    analysisData: {},
    analysisQueryDefaultServiceAccount: true,
    analyzedBefore: true,
    assetId: "assetId_example",
    assetLink: "assetLink_example",
    collectionId: "collectionId_example",
    createTranscription: true,
    forceTranscoder: "forceTranscoder_example",
    googleCloudVideoIntelligence: true,
    input: {
      assetId: "assetId_example",
      closedCaptions: true,
      collectionId: "collectionId_example",
      directoryPath: "directoryPath_example",
      endpoint: {
        data: {},
        headers: {},
        method: "method_example",
        storageMethod: "storageMethod_example",
        type: "type_example",
        url: "url_example",
      },
      engine: "engine_example",
      fileId: "fileId_example",
      fileSetId: "fileSetId_example",
      formatId: "formatId_example",
      language: "language_example",
      originalName: "originalName_example",
      proxyId: "proxyId_example",
      storageId: "storageId_example",
      updateProxyMediainfo: true,
      versionId: "versionId_example",
    },
    jobId: "jobId_example",
    jobSteps: [
      {
        dateCreated: new Date('1970-01-01T00:00:00.00Z'),
        dateUpdated: new Date('1970-01-01T00:00:00.00Z'),
        id: "id_example",
        label: "label_example",
        message: "message_example",
        status: "status_example",
      },
    ],
    language: "language_example",
    mediaInfo: "mediaInfo_example",
    overwrite: true,
    priority: 1,
    speakers: 2,
    thumbnail: [
      {
        height: -2147483648,
        id: "id_example",
        maxNumber: -2147483648,
        minInterval: -9223372036854776000,
        outputEndpoint: {
          headers: {},
          key: "key_example",
        },
        setAsCustomKeyframe: true,
        timeEndMilliseconds: -9223372036854776000,
        timeStartMilliseconds: -9223372036854776000,
        timestamp: -9223372036854776000,
        width: -2147483648,
      },
    ],
    transcode: [
      {
        height: -2147483648,
        id: "id_example",
        outputEndpoint: {
          headers: {},
          key: "key_example",
        },
        width: -2147483648,
      },
    ],
    validTranscoders: [
      {
        id: "id_example",
        name: "name_example",
        settings: {},
        type: "type_example",
      },
    ],
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.transcodeV1TranscodePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobSchema1** | **JobSchema1**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**JobSchema1**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a definiton of the started job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1TranscodeQueueGet**
> TranscodeQueueSchema transcodeV1TranscodeQueueGet()

 Required roles:  - can_read_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1TranscodeQueueGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number (optional)
  perPage: 1,
  // number (optional)
  page: 1,
  // string | A comma separated list of fieldnames without spaces. object_type,user_id,retry_count,priority,type,status (optional)
  sort: "sort_example",
};

apiInstance.transcodeV1TranscodeQueueGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | A comma separated list of fieldnames without spaces. object_type,user_id,retry_count,priority,type,status | (optional) defaults to undefined


### Return type

**TranscodeQueueSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the status of all ongoing transcode jobs |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1TranscodeQueueSystemGet**
> TranscodeQueueSchema transcodeV1TranscodeQueueSystemGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1TranscodeQueueSystemGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean (optional)
  perDomainId: true,
  // number (optional)
  perPage: 1,
  // number (optional)
  page: 1,
  // string (optional)
  sort: "sort_example",
};

apiInstance.transcodeV1TranscodeQueueSystemGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perDomainId** | [**boolean**] |  | (optional) defaults to undefined
 **perPage** | [**number**] |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] |  | (optional) defaults to undefined


### Return type

**TranscodeQueueSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the status of all ongoing transcode job queues for all domains |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1TranscodeTranscodeJobIdDelete**
> void transcodeV1TranscodeTranscodeJobIdDelete()

 Required roles:  - can_delete_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1TranscodeTranscodeJobIdDeleteRequest = {
  // string
  transcodeJobId: "transcode_job_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.transcodeV1TranscodeTranscodeJobIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcodeJobId** | [**string**] |  | defaults to undefined
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
**404** | Transcode does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1TranscodeTranscodeJobIdGet**
> JobSchema1 transcodeV1TranscodeTranscodeJobIdGet()

 Required roles:  - can_read_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1TranscodeTranscodeJobIdGetRequest = {
  // string
  transcodeJobId: "transcode_job_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.transcodeV1TranscodeTranscodeJobIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcodeJobId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**JobSchema1**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the status of a particular transcode job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1TranscodeTranscodeJobIdPositionPositionPost**
> void transcodeV1TranscodeTranscodeJobIdPositionPositionPost()

 Required roles:  - can_write_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1TranscodeTranscodeJobIdPositionPositionPostRequest = {
  // string
  transcodeJobId: "transcode_job_id_example",
  // string | move transcode job to \"top\" or \"bottom\" position
  position: "position_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.transcodeV1TranscodeTranscodeJobIdPositionPositionPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcodeJobId** | [**string**] |  | defaults to undefined
 **position** | [**string**] | move transcode job to \&quot;top\&quot; or \&quot;bottom\&quot; position | defaults to undefined
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
**200** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Transcode does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1TranscodeTranscodeJobIdPriorityPriorityPut**
> void transcodeV1TranscodeTranscodeJobIdPriorityPriorityPut()

 Required roles:  - can_write_transcode_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1TranscodeTranscodeJobIdPriorityPriorityPutRequest = {
  // string
  transcodeJobId: "transcode_job_id_example",
  // number
  priority: 1,
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.transcodeV1TranscodeTranscodeJobIdPriorityPriorityPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcodeJobId** | [**string**] |  | defaults to undefined
 **priority** | [**number**] |  | defaults to undefined
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
**200** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Transcode does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1TranscribeAssetsAssetIdProfilesDefaultPost**
> void transcodeV1TranscribeAssetsAssetIdProfilesDefaultPost()

 Required roles:  - can_transcribe_content 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1TranscribeAssetsAssetIdProfilesDefaultPostRequest = {
  // string
  assetId: "asset_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // TranscribeSchema | body (optional)
  transcribeSchema: {
    engine: "engine_example",
    force: false,
    language: "language_example",
    profileId: "profileId_example",
    speakers: 1,
  },
};

apiInstance.transcodeV1TranscribeAssetsAssetIdProfilesDefaultPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcribeSchema** | **TranscribeSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
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
**201** | Returns a definition of the started job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transcodeV1TranscribeBulkPost**
> void transcodeV1TranscribeBulkPost(bulkTranscribeSchema)

 Required roles:  - can_transcribe_content 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.TranscodeApi(configuration);

let body:iconik.TranscodeApiTranscodeV1TranscribeBulkPostRequest = {
  // BulkTranscribeSchema | body
  bulkTranscribeSchema: {
    engine: "engine_example",
    force: false,
    language: "language_example",
    objectIds: [
      "objectIds_example",
    ],
    objectType: "assets",
    profileId: "profileId_example",
    speakers: 1,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.transcodeV1TranscribeBulkPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkTranscribeSchema** | **BulkTranscribeSchema**| body |
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
**201** | Returns a definition of the started job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


