# iconik.NotificationsApi

All URIs are relative to *https://app.iconik.io/API*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notificationsV1WebhooksGet**](NotificationsApi.md#notificationsV1WebhooksGet) | **GET** /notifications/v1/webhooks/ | Get all webhooks
[**notificationsV1WebhooksPost**](NotificationsApi.md#notificationsV1WebhooksPost) | **POST** /notifications/v1/webhooks/ | Create a new webhook
[**notificationsV1WebhooksWebhookIdDelete**](NotificationsApi.md#notificationsV1WebhooksWebhookIdDelete) | **DELETE** /notifications/v1/webhooks/{webhook_id}/ | Delete a webhook
[**notificationsV1WebhooksWebhookIdGet**](NotificationsApi.md#notificationsV1WebhooksWebhookIdGet) | **GET** /notifications/v1/webhooks/{webhook_id}/ | Get a webhook definition
[**notificationsV1WebhooksWebhookIdPut**](NotificationsApi.md#notificationsV1WebhooksWebhookIdPut) | **PUT** /notifications/v1/webhooks/{webhook_id}/ | Update a webhook


# **notificationsV1WebhooksGet**
> WebhooksSchema notificationsV1WebhooksGet()

 Required roles:  - can_read_webhooks 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.NotificationsApi(configuration);

let body:iconik.NotificationsApiNotificationsV1WebhooksGetRequest = {
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.notificationsV1WebhooksGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**WebhooksSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of webhooks |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **notificationsV1WebhooksPost**
> WebhookSchema notificationsV1WebhooksPost(webhookCreateSchema)

 Required roles:  - can_write_webhooks 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.NotificationsApi(configuration);

let body:iconik.NotificationsApiNotificationsV1WebhooksPostRequest = {
  // WebhookCreateSchema | body
  webhookCreateSchema: {
    operation: "update",
    firstFailedAt: new Date('1970-01-01T00:00:00.00Z'),
    name: "name_example",
    description: "description_example",
    eventType: "assets",
    objectId: "d7a5a7e8-4247-11ee-b3d8-a683e79fffaf",
    status: "ENABLED",
    lastPayload: "lastPayload_example",
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    deletedAt: new Date('1970-01-01T00:00:00.00Z'),
    realm: "metadata",
    url: "https://example.com/webhook_handler",
    query: "data.is_archived=false AND data.size>0 (data.status="CLOSED" OR data.status="DELETED") AND data.external_id!=null",
    dateModified: new Date('1970-01-01T00:00:00.00Z'),
    headers: {
      "key": "key_example",
    },
    lastError: "lastError_example",
  },
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.notificationsV1WebhooksPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookCreateSchema** | **WebhookCreateSchema**| body |
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**WebhookSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created webhook |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **notificationsV1WebhooksWebhookIdDelete**
> void notificationsV1WebhooksWebhookIdDelete()

 Required roles:  - can_delete_webhooks 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.NotificationsApi(configuration);

let body:iconik.NotificationsApiNotificationsV1WebhooksWebhookIdDeleteRequest = {
  // string
  webhookId: "webhook_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.notificationsV1WebhooksWebhookIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | [**string**] |  | defaults to undefined
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
**204** | Returns an empty body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **notificationsV1WebhooksWebhookIdGet**
> WebhookSchema notificationsV1WebhooksWebhookIdGet()

 Required roles:  - can_read_webhooks 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.NotificationsApi(configuration);

let body:iconik.NotificationsApiNotificationsV1WebhooksWebhookIdGetRequest = {
  // string
  webhookId: "webhook_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.notificationsV1WebhooksWebhookIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**WebhookSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a webhook by it\&#39;s ID |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **notificationsV1WebhooksWebhookIdPut**
> WebhookSchema notificationsV1WebhooksWebhookIdPut(webhookCreateSchema)

 Required roles:  - can_write_webhooks 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.NotificationsApi(configuration);

let body:iconik.NotificationsApiNotificationsV1WebhooksWebhookIdPutRequest = {
  // string
  webhookId: "webhook_id_example",
  // WebhookCreateSchema | body
  webhookCreateSchema: {
    operation: "update",
    firstFailedAt: new Date('1970-01-01T00:00:00.00Z'),
    name: "name_example",
    description: "description_example",
    eventType: "assets",
    objectId: "d7a5a7e8-4247-11ee-b3d8-a683e79fffaf",
    status: "ENABLED",
    lastPayload: "lastPayload_example",
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    deletedAt: new Date('1970-01-01T00:00:00.00Z'),
    realm: "metadata",
    url: "https://example.com/webhook_handler",
    query: "data.is_archived=false AND data.size>0 (data.status="CLOSED" OR data.status="DELETED") AND data.external_id!=null",
    dateModified: new Date('1970-01-01T00:00:00.00Z'),
    headers: {
      "key": "key_example",
    },
    lastError: "lastError_example",
  },
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  appID: "App-ID_example",
};

apiInstance.notificationsV1WebhooksWebhookIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookCreateSchema** | **WebhookCreateSchema**| body |
 **webhookId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined


### Return type

**WebhookSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the updated webhook |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


