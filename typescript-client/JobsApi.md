# iconik.JobsApi

All URIs are relative to *https://app.iconik.io/API*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobsV1JobsDelete**](JobsApi.md#jobsV1JobsDelete) | **DELETE** /jobs/v1/jobs/ | Delete multiple jobs by ids list
[**jobsV1JobsGet**](JobsApi.md#jobsV1JobsGet) | **GET** /jobs/v1/jobs/ | Get list of jobs
[**jobsV1JobsJobIdDelete**](JobsApi.md#jobsV1JobsJobIdDelete) | **DELETE** /jobs/v1/jobs/{job_id}/ | Delete a particular job by id
[**jobsV1JobsJobIdGet**](JobsApi.md#jobsV1JobsJobIdGet) | **GET** /jobs/v1/jobs/{job_id}/ | Returns a particular job by id
[**jobsV1JobsJobIdPatch**](JobsApi.md#jobsV1JobsJobIdPatch) | **PATCH** /jobs/v1/jobs/{job_id}/ | Update job
[**jobsV1JobsJobIdPut**](JobsApi.md#jobsV1JobsJobIdPut) | **PUT** /jobs/v1/jobs/{job_id}/ | Update job
[**jobsV1JobsJobIdReindexPost**](JobsApi.md#jobsV1JobsJobIdReindexPost) | **POST** /jobs/v1/jobs/{job_id}/reindex/ | Reindex job
[**jobsV1JobsJobIdStepsJobStepIdPatch**](JobsApi.md#jobsV1JobsJobIdStepsJobStepIdPatch) | **PATCH** /jobs/v1/jobs/{job_id}/steps/{job_step_id}/ | Update job step
[**jobsV1JobsJobIdStepsJobStepIdPut**](JobsApi.md#jobsV1JobsJobIdStepsJobStepIdPut) | **PUT** /jobs/v1/jobs/{job_id}/steps/{job_step_id}/ | Update job step
[**jobsV1JobsJobIdStepsPatch**](JobsApi.md#jobsV1JobsJobIdStepsPatch) | **PATCH** /jobs/v1/jobs/{job_id}/steps/ | Update multiple job steps
[**jobsV1JobsJobIdStepsPut**](JobsApi.md#jobsV1JobsJobIdStepsPut) | **PUT** /jobs/v1/jobs/{job_id}/steps/ | Update multiple job steps
[**jobsV1JobsPost**](JobsApi.md#jobsV1JobsPost) | **POST** /jobs/v1/jobs/ | Create a new job
[**jobsV1JobsPriorityPut**](JobsApi.md#jobsV1JobsPriorityPut) | **PUT** /jobs/v1/jobs/priority/ | Change jobs priority
[**jobsV1JobsStatePut**](JobsApi.md#jobsV1JobsStatePut) | **PUT** /jobs/v1/jobs/state/ | Change jobs state


# **jobsV1JobsDelete**
> void jobsV1JobsDelete(jobsBulkDeleteSchema)

 Required roles:  - can_delete_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.JobsApi(configuration);

let body:iconik.JobsApiJobsV1JobsDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // JobsBulkDeleteSchema | body
  jobsBulkDeleteSchema: {
    jobIds: [
      "jobIds_example",
    ],
  },
};

apiInstance.jobsV1JobsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobsBulkDeleteSchema** | **JobsBulkDeleteSchema**| body |
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

# **jobsV1JobsGet**
> JobsSchema jobsV1JobsGet()

 Required roles:  - can_read_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.JobsApi(configuration);

let body:iconik.JobsApiJobsV1JobsGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // boolean | If facets should be returned (optional)
  facets: true,
  // string | List of aggregation keys if facets is true (optional)
  aggregations: "aggregations_example",
  // number | Which page number to fetch (optional)
  page: 1,
  // number | The number of items for each page (optional)
  perPage: 10,
  // boolean | If true passed then uses scroll pagination instead of default one (optional)
  scroll: true,
  // string | In order to get next batch of results using scroll pagination the scroll_id is required (optional)
  scrollId: "scroll_id_example",
  // string | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc (optional)
  sort: "sort_example",
  // string | Filter by type (optional)
  type: "type_example",
  // string | Filter by object_type (optional)
  objectType: "object_type_example",
  // string | Filter by parent_id (optional)
  parentId: "parent_id_example",
  // string | Filter by object_id (optional)
  objectId: "object_id_example",
  // string | Filter by status (optional)
  status: "status_example",
  // string | Filter by created_by (optional)
  createdBy: "created_by_example",
  // string | Filter by date_created. Can either be a single ISO8601 timestamp or two timestamps separated by a semicolon `;`. The timestamp can also be expressed as number of milliseconds since Jan 1 1970 (epoch). Either timestamp can also be replaced with an asterisk `*` to make the query open ended. For example: 2018-01-01T10:00:00Z;2018-01-01T15:00:00Z (optional)
  dateCreated: "date_created_example",
  // string | Filter by date_modified Can either be a single ISO8601 timestamp or two timestamps separated by a semicolon `;`. The timestamp can also be expressed as number of milliseconds since Jan 1 1970 (epoch). Either timestamp can also be replaced with an asterisk `*` to make the query open ended. For example: *;1544450400 (optional)
  dateModified: "date_modified_example",
  // string | Filter by any of the above with wildcard support (optional)
  query: "query_example",
  // string | Filter list of id:s (comma separated) (optional)
  ids: "ids_example",
};

apiInstance.jobsV1JobsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **facets** | [**boolean**] | If facets should be returned | (optional) defaults to true
 **aggregations** | [**string**] | List of aggregation keys if facets is true | (optional) defaults to undefined
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **scroll** | [**boolean**] | If true passed then uses scroll pagination instead of default one | (optional) defaults to undefined
 **scrollId** | [**string**] | In order to get next batch of results using scroll pagination the scroll_id is required | (optional) defaults to undefined
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc | (optional) defaults to undefined
 **type** | [**string**] | Filter by type | (optional) defaults to undefined
 **objectType** | [**string**] | Filter by object_type | (optional) defaults to undefined
 **parentId** | [**string**] | Filter by parent_id | (optional) defaults to undefined
 **objectId** | [**string**] | Filter by object_id | (optional) defaults to undefined
 **status** | [**string**] | Filter by status | (optional) defaults to undefined
 **createdBy** | [**string**] | Filter by created_by | (optional) defaults to undefined
 **dateCreated** | [**string**] | Filter by date_created. Can either be a single ISO8601 timestamp or two timestamps separated by a semicolon &#x60;;&#x60;. The timestamp can also be expressed as number of milliseconds since Jan 1 1970 (epoch). Either timestamp can also be replaced with an asterisk &#x60;*&#x60; to make the query open ended. For example: 2018-01-01T10:00:00Z;2018-01-01T15:00:00Z | (optional) defaults to undefined
 **dateModified** | [**string**] | Filter by date_modified Can either be a single ISO8601 timestamp or two timestamps separated by a semicolon &#x60;;&#x60;. The timestamp can also be expressed as number of milliseconds since Jan 1 1970 (epoch). Either timestamp can also be replaced with an asterisk &#x60;*&#x60; to make the query open ended. For example: *;1544450400 | (optional) defaults to undefined
 **query** | [**string**] | Filter by any of the above with wildcard support | (optional) defaults to undefined
 **ids** | [**string**] | Filter list of id:s (comma separated) | (optional) defaults to undefined


### Return type

**JobsSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of jobs |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **jobsV1JobsJobIdDelete**
> void jobsV1JobsJobIdDelete()

 Required roles:  - can_delete_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.JobsApi(configuration);

let body:iconik.JobsApiJobsV1JobsJobIdDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  jobId: "job_id_example",
};

apiInstance.jobsV1JobsJobIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **jobId** | [**string**] |  | defaults to undefined


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
**404** | Job does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **jobsV1JobsJobIdGet**
> JobSchema jobsV1JobsJobIdGet()

 Required roles:  - can_read_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.JobsApi(configuration);

let body:iconik.JobsApiJobsV1JobsJobIdGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  jobId: "job_id_example",
};

apiInstance.jobsV1JobsJobIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **jobId** | [**string**] |  | defaults to undefined


### Return type

**JobSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Job does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **jobsV1JobsJobIdPatch**
> JobSchema jobsV1JobsJobIdPatch(jobSchema)

 Required roles:  - can_write_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.JobsApi(configuration);

let body:iconik.JobsApiJobsV1JobsJobIdPatchRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  jobId: "job_id_example",
  // JobSchema | body
  jobSchema: {
    actionContext: {
      ABORT: {
        bulk: true,
        url: "url_example",
      },
      CHANGE_PRIORITY: {
        bulk: true,
        url: "url_example",
      },
      PAUSE: {
        bulk: true,
        url: "url_example",
      },
      RESTART: {
        bulk: true,
        url: "url_example",
      },
      RESUME: {
        bulk: true,
        url: "url_example",
      },
    },
    completedAt: new Date('1970-01-01T00:00:00.00Z'),
    customType: "customType_example",
    errorMessage: "errorMessage_example",
    hasChildren: true,
    jobContext: {},
    message: "message_example",
    metadata: {},
    objectId: "objectId_example",
    objectType: "objectType_example",
    parentId: "parentId_example",
    progressProcessed: -9223372036854776000,
    progressTotal: -9223372036854776000,
    relatedObjects: [
      {
        objectId: "objectId_example",
        objectType: "objectType_example",
      },
    ],
    startedAt: new Date('1970-01-01T00:00:00.00Z'),
    status: "READY",
    title: "title_example",
    type: "MEDIAINFO",
  },
};

apiInstance.jobsV1JobsJobIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobSchema** | **JobSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **jobId** | [**string**] |  | defaults to undefined


### Return type

**JobSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **jobsV1JobsJobIdPut**
> JobSchema jobsV1JobsJobIdPut(jobSchema)

 Required roles:  - can_write_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.JobsApi(configuration);

let body:iconik.JobsApiJobsV1JobsJobIdPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  jobId: "job_id_example",
  // JobSchema | body
  jobSchema: {
    actionContext: {
      ABORT: {
        bulk: true,
        url: "url_example",
      },
      CHANGE_PRIORITY: {
        bulk: true,
        url: "url_example",
      },
      PAUSE: {
        bulk: true,
        url: "url_example",
      },
      RESTART: {
        bulk: true,
        url: "url_example",
      },
      RESUME: {
        bulk: true,
        url: "url_example",
      },
    },
    completedAt: new Date('1970-01-01T00:00:00.00Z'),
    customType: "customType_example",
    errorMessage: "errorMessage_example",
    hasChildren: true,
    jobContext: {},
    message: "message_example",
    metadata: {},
    objectId: "objectId_example",
    objectType: "objectType_example",
    parentId: "parentId_example",
    progressProcessed: -9223372036854776000,
    progressTotal: -9223372036854776000,
    relatedObjects: [
      {
        objectId: "objectId_example",
        objectType: "objectType_example",
      },
    ],
    startedAt: new Date('1970-01-01T00:00:00.00Z'),
    status: "READY",
    title: "title_example",
    type: "MEDIAINFO",
  },
};

apiInstance.jobsV1JobsJobIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobSchema** | **JobSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **jobId** | [**string**] |  | defaults to undefined


### Return type

**JobSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **jobsV1JobsJobIdReindexPost**
> void jobsV1JobsJobIdReindexPost(reindexJobSchema)

 Required roles:  - can_write_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.JobsApi(configuration);

let body:iconik.JobsApiJobsV1JobsJobIdReindexPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  jobId: "job_id_example",
  // ReindexJobSchema | body
  reindexJobSchema: {
    syncToAnotherDc: true,
  },
};

apiInstance.jobsV1JobsJobIdReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reindexJobSchema** | **ReindexJobSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **jobId** | [**string**] |  | defaults to undefined


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
**202** | OK |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **jobsV1JobsJobIdStepsJobStepIdPatch**
> JobSchema jobsV1JobsJobIdStepsJobStepIdPatch(jobStepSchema)

 Required roles:  - can_write_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.JobsApi(configuration);

let body:iconik.JobsApiJobsV1JobsJobIdStepsJobStepIdPatchRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  jobId: "job_id_example",
  // string
  jobStepId: "job_step_id_example",
  // JobStepSchema | body
  jobStepSchema: {
    errorMessage: "errorMessage_example",
    id: "id_example",
    label: "label_example",
    message: "message_example",
    status: "IN_PROGRESS",
  },
};

apiInstance.jobsV1JobsJobIdStepsJobStepIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobStepSchema** | **JobStepSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **jobId** | [**string**] |  | defaults to undefined
 **jobStepId** | [**string**] |  | defaults to undefined


### Return type

**JobSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **jobsV1JobsJobIdStepsJobStepIdPut**
> JobSchema jobsV1JobsJobIdStepsJobStepIdPut(jobStepSchema)

 Required roles:  - can_write_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.JobsApi(configuration);

let body:iconik.JobsApiJobsV1JobsJobIdStepsJobStepIdPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  jobId: "job_id_example",
  // string
  jobStepId: "job_step_id_example",
  // JobStepSchema | body
  jobStepSchema: {
    errorMessage: "errorMessage_example",
    id: "id_example",
    label: "label_example",
    message: "message_example",
    status: "IN_PROGRESS",
  },
};

apiInstance.jobsV1JobsJobIdStepsJobStepIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobStepSchema** | **JobStepSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **jobId** | [**string**] |  | defaults to undefined
 **jobStepId** | [**string**] |  | defaults to undefined


### Return type

**JobSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **jobsV1JobsJobIdStepsPatch**
> JobSchema jobsV1JobsJobIdStepsPatch(jobStepsUpdateSchema)

 Required roles:  - can_write_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.JobsApi(configuration);

let body:iconik.JobsApiJobsV1JobsJobIdStepsPatchRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  jobId: "job_id_example",
  // JobStepsUpdateSchema | body
  jobStepsUpdateSchema: {
    steps: [
      {
        errorMessage: "errorMessage_example",
        id: "id_example",
        label: "label_example",
        message: "message_example",
        status: "IN_PROGRESS",
      },
    ],
  },
};

apiInstance.jobsV1JobsJobIdStepsPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobStepsUpdateSchema** | **JobStepsUpdateSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **jobId** | [**string**] |  | defaults to undefined


### Return type

**JobSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **jobsV1JobsJobIdStepsPut**
> JobSchema jobsV1JobsJobIdStepsPut(jobStepsUpdateSchema)

 Required roles:  - can_write_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.JobsApi(configuration);

let body:iconik.JobsApiJobsV1JobsJobIdStepsPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  jobId: "job_id_example",
  // JobStepsUpdateSchema | body
  jobStepsUpdateSchema: {
    steps: [
      {
        errorMessage: "errorMessage_example",
        id: "id_example",
        label: "label_example",
        message: "message_example",
        status: "IN_PROGRESS",
      },
    ],
  },
};

apiInstance.jobsV1JobsJobIdStepsPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobStepsUpdateSchema** | **JobStepsUpdateSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **jobId** | [**string**] |  | defaults to undefined


### Return type

**JobSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **jobsV1JobsPost**
> JobSchema jobsV1JobsPost(jobSchema)

 Required roles:  - can_write_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.JobsApi(configuration);

let body:iconik.JobsApiJobsV1JobsPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // JobSchema | body
  jobSchema: {
    actionContext: {
      ABORT: {
        bulk: true,
        url: "url_example",
      },
      CHANGE_PRIORITY: {
        bulk: true,
        url: "url_example",
      },
      PAUSE: {
        bulk: true,
        url: "url_example",
      },
      RESTART: {
        bulk: true,
        url: "url_example",
      },
      RESUME: {
        bulk: true,
        url: "url_example",
      },
    },
    completedAt: new Date('1970-01-01T00:00:00.00Z'),
    customType: "customType_example",
    errorMessage: "errorMessage_example",
    hasChildren: true,
    jobContext: {},
    message: "message_example",
    metadata: {},
    objectId: "objectId_example",
    objectType: "objectType_example",
    parentId: "parentId_example",
    progressProcessed: -9223372036854776000,
    progressTotal: -9223372036854776000,
    relatedObjects: [
      {
        objectId: "objectId_example",
        objectType: "objectType_example",
      },
    ],
    startedAt: new Date('1970-01-01T00:00:00.00Z'),
    status: "READY",
    title: "title_example",
    type: "MEDIAINFO",
  },
};

apiInstance.jobsV1JobsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobSchema** | **JobSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**JobSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **jobsV1JobsPriorityPut**
> void jobsV1JobsPriorityPut(jobsPrioritySchema)

 Required roles:  - can_write_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.JobsApi(configuration);

let body:iconik.JobsApiJobsV1JobsPriorityPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // JobsPrioritySchema | body
  jobsPrioritySchema: {
    jobIds: [
      "jobIds_example",
    ],
    priority: 1,
  },
};

apiInstance.jobsV1JobsPriorityPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobsPrioritySchema** | **JobsPrioritySchema**| body |
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
**201** | Success |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Forbidden |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **jobsV1JobsStatePut**
> void jobsV1JobsStatePut(jobsStateSchema1)

 Required roles:  - can_write_jobs 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.JobsApi(configuration);

let body:iconik.JobsApiJobsV1JobsStatePutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // JobsStateSchema1 | body
  jobsStateSchema1: {
    action: "PAUSE",
    jobIds: [
      "jobIds_example",
    ],
  },
};

apiInstance.jobsV1JobsStatePut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobsStateSchema1** | **JobsStateSchema1**| body |
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
**201** | Success |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


