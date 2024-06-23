# iconik.SearchApi

All URIs are relative to *https://app.iconik.io/API*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchV1DiscoveryDefaultEntitiesAdminGet**](SearchApi.md#searchV1DiscoveryDefaultEntitiesAdminGet) | **GET** /search/v1/discovery/default/entities/admin/ | Returns the discovery entities that are used to build the discovery view.
[**searchV1DiscoveryDefaultEntitiesEntityIdDelete**](SearchApi.md#searchV1DiscoveryDefaultEntitiesEntityIdDelete) | **DELETE** /search/v1/discovery/default/entities/{entity_id}/ | Delete a discovery entity by id
[**searchV1DiscoveryDefaultEntitiesEntityIdGet**](SearchApi.md#searchV1DiscoveryDefaultEntitiesEntityIdGet) | **GET** /search/v1/discovery/default/entities/{entity_id}/ | Returns discovery entity
[**searchV1DiscoveryDefaultEntitiesEntityIdPatch**](SearchApi.md#searchV1DiscoveryDefaultEntitiesEntityIdPatch) | **PATCH** /search/v1/discovery/default/entities/{entity_id}/ | Update a discovery entity by id
[**searchV1DiscoveryDefaultEntitiesEntityIdPut**](SearchApi.md#searchV1DiscoveryDefaultEntitiesEntityIdPut) | **PUT** /search/v1/discovery/default/entities/{entity_id}/ | Update a discovery entity by id
[**searchV1DiscoveryDefaultEntitiesGet**](SearchApi.md#searchV1DiscoveryDefaultEntitiesGet) | **GET** /search/v1/discovery/default/entities/ | Returns the discovery entities that are used to build the discovery view.
[**searchV1DiscoveryDefaultEntitiesPost**](SearchApi.md#searchV1DiscoveryDefaultEntitiesPost) | **POST** /search/v1/discovery/default/entities/ | Adds a new discovery entity.
[**searchV1DiscoveryDefaultPut**](SearchApi.md#searchV1DiscoveryDefaultPut) | **PUT** /search/v1/discovery/default/ | Update default discovery view
[**searchV1DiscoveryEntitiesObjectTypeObjectIdPatch**](SearchApi.md#searchV1DiscoveryEntitiesObjectTypeObjectIdPatch) | **PATCH** /search/v1/discovery/entities/{object_type}/{object_id}/ | Update a discovery entity by object\&#39;s type and id
[**searchV1DiscoveryEntitiesObjectTypeObjectIdPut**](SearchApi.md#searchV1DiscoveryEntitiesObjectTypeObjectIdPut) | **PUT** /search/v1/discovery/entities/{object_type}/{object_id}/ | Update a discovery entity by object\&#39;s type and id
[**searchV1SearchHistoryGet**](SearchApi.md#searchV1SearchHistoryGet) | **GET** /search/v1/search/history/ | Returns the current search history
[**searchV1SearchHistorySearchHistoryIdDelete**](SearchApi.md#searchV1SearchHistorySearchHistoryIdDelete) | **DELETE** /search/v1/search/history/{search_history_id}/ | Delete a search from history by its id
[**searchV1SearchHistorySearchHistoryIdGet**](SearchApi.md#searchV1SearchHistorySearchHistoryIdGet) | **GET** /search/v1/search/history/{search_history_id}/ | Returns results of search history
[**searchV1SearchPost**](SearchApi.md#searchV1SearchPost) | **POST** /search/v1/search/ | Search
[**searchV1SearchSavedGet**](SearchApi.md#searchV1SearchSavedGet) | **GET** /search/v1/search/saved/ | Returns list of saved searches
[**searchV1SearchSavedGroupGroupIdDelete**](SearchApi.md#searchV1SearchSavedGroupGroupIdDelete) | **DELETE** /search/v1/search/saved/group/{group_id}/ | Delete a saved search group by it\&#39;s id
[**searchV1SearchSavedGroupGroupIdGet**](SearchApi.md#searchV1SearchSavedGroupGroupIdGet) | **GET** /search/v1/search/saved/group/{group_id}/ | Returns saved search group data
[**searchV1SearchSavedGroupGroupIdPatch**](SearchApi.md#searchV1SearchSavedGroupGroupIdPatch) | **PATCH** /search/v1/search/saved/group/{group_id}/ | Update and return saved search group data
[**searchV1SearchSavedGroupGroupIdPut**](SearchApi.md#searchV1SearchSavedGroupGroupIdPut) | **PUT** /search/v1/search/saved/group/{group_id}/ | Update and return saved search group data
[**searchV1SearchSavedGroupGroupIdSearchSearchIdDelete**](SearchApi.md#searchV1SearchSavedGroupGroupIdSearchSearchIdDelete) | **DELETE** /search/v1/search/saved/group/{group_id}/search/{search_id}/ | Delete saved search from search group
[**searchV1SearchSavedGroupGroupIdSearchSearchIdPost**](SearchApi.md#searchV1SearchSavedGroupGroupIdSearchSearchIdPost) | **POST** /search/v1/search/saved/group/{group_id}/search/{search_id}/ | Adds saved search to group
[**searchV1SearchSavedGroupPost**](SearchApi.md#searchV1SearchSavedGroupPost) | **POST** /search/v1/search/saved/group/ | Create and return saved search group data
[**searchV1SearchSavedGroupsGet**](SearchApi.md#searchV1SearchSavedGroupsGet) | **GET** /search/v1/search/saved/groups/ | Returns paginated list of search groups
[**searchV1SearchSavedGroupsGroupIdReindexPost**](SearchApi.md#searchV1SearchSavedGroupsGroupIdReindexPost) | **POST** /search/v1/search/saved/groups/{group_id}/reindex/ | Reindex a particular saved search group by id
[**searchV1SearchSavedPost**](SearchApi.md#searchV1SearchSavedPost) | **POST** /search/v1/search/saved/ | Search, save and return result of this search
[**searchV1SearchSavedSearchIdDelete**](SearchApi.md#searchV1SearchSavedSearchIdDelete) | **DELETE** /search/v1/search/saved/{search_id}/ | Delete a saved search by its id
[**searchV1SearchSavedSearchIdGet**](SearchApi.md#searchV1SearchSavedSearchIdGet) | **GET** /search/v1/search/saved/{search_id}/ | Returns results of saved search
[**searchV1SearchSavedSearchIdPatch**](SearchApi.md#searchV1SearchSavedSearchIdPatch) | **PATCH** /search/v1/search/saved/{search_id}/ | Search and save this search
[**searchV1SearchSavedSearchIdPut**](SearchApi.md#searchV1SearchSavedSearchIdPut) | **PUT** /search/v1/search/saved/{search_id}/ | Search and save this search
[**searchV1SearchSavedSearchIdReindexPost**](SearchApi.md#searchV1SearchSavedSearchIdReindexPost) | **POST** /search/v1/search/saved/{search_id}/reindex/ | Reindex a particular saved search by id
[**searchV1SearchSuggestPost**](SearchApi.md#searchV1SearchSuggestPost) | **POST** /search/v1/search/suggest/ | Returns search suggestions for a particular query.


# **searchV1DiscoveryDefaultEntitiesAdminGet**
> DiscoveryEntitiesSchema searchV1DiscoveryDefaultEntitiesAdminGet()

 Required roles:  - can_write_discovery_entities 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1DiscoveryDefaultEntitiesAdminGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1DiscoveryDefaultEntitiesAdminGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**DiscoveryEntitiesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the configured discovery entities |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1DiscoveryDefaultEntitiesEntityIdDelete**
> void searchV1DiscoveryDefaultEntitiesEntityIdDelete()

 Required roles:  - can_delete_discovery_entities 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1DiscoveryDefaultEntitiesEntityIdDeleteRequest = {
  // string
  entityId: "entity_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1DiscoveryDefaultEntitiesEntityIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | [**string**] |  | defaults to undefined
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
**404** | Search History does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1DiscoveryDefaultEntitiesEntityIdGet**
> DiscoveryEntitySchema searchV1DiscoveryDefaultEntitiesEntityIdGet()

 Required roles:  - can_read_discovery_entities 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1DiscoveryDefaultEntitiesEntityIdGetRequest = {
  // string
  entityId: "entity_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1DiscoveryDefaultEntitiesEntityIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**DiscoveryEntitySchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns Discovery entity |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1DiscoveryDefaultEntitiesEntityIdPatch**
> void searchV1DiscoveryDefaultEntitiesEntityIdPatch(discoveryEntitySchema)

 Required roles:  - can_write_discovery_entities 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1DiscoveryDefaultEntitiesEntityIdPatchRequest = {
  // string
  entityId: "entity_id_example",
  // DiscoveryEntitySchema | body
  discoveryEntitySchema: {
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    dateModified: new Date('1970-01-01T00:00:00.00Z'),
    metadata: {},
    objectId: "objectId_example",
    objectType: "COLLECTION",
    title: "title_example",
    userId: "userId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1DiscoveryDefaultEntitiesEntityIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discoveryEntitySchema** | **DiscoveryEntitySchema**| body |
 **entityId** | [**string**] |  | defaults to undefined
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
**200** | Returns new entity |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Search History does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1DiscoveryDefaultEntitiesEntityIdPut**
> void searchV1DiscoveryDefaultEntitiesEntityIdPut(discoveryEntitySchema)

 Required roles:  - can_write_discovery_entities 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1DiscoveryDefaultEntitiesEntityIdPutRequest = {
  // string
  entityId: "entity_id_example",
  // DiscoveryEntitySchema | body
  discoveryEntitySchema: {
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    dateModified: new Date('1970-01-01T00:00:00.00Z'),
    metadata: {},
    objectId: "objectId_example",
    objectType: "COLLECTION",
    title: "title_example",
    userId: "userId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1DiscoveryDefaultEntitiesEntityIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discoveryEntitySchema** | **DiscoveryEntitySchema**| body |
 **entityId** | [**string**] |  | defaults to undefined
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
**200** | Returns new entity |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Search History does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1DiscoveryDefaultEntitiesGet**
> DiscoveryEntitiesSchema searchV1DiscoveryDefaultEntitiesGet()

 Required roles:  - can_read_discovery_entities 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1DiscoveryDefaultEntitiesGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1DiscoveryDefaultEntitiesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**DiscoveryEntitiesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the configured discovery entities |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1DiscoveryDefaultEntitiesPost**
> DiscoveryEntitySchema searchV1DiscoveryDefaultEntitiesPost(discoveryEntitySchema)

<br/>This creates an entry for the discovery view to show collections and saved searches.<br/>Object Type should be one of COLLECTION, SAVED_SEARCH, ASSET, RECOMMENDATION or TRENDING<br/>Object ID is only needed in the case of COLLECTION, SAVED_SEARCH or ASSET<br/>metadata is for user defined extra data.<br/><br/>This creates an entry for the discovery view to show collections and saved searches.<br/>Object Type should be one of COLLECTION, SAVED_SEARCH, ASSET, RECOMMENDATION or TRENDING<br/>Object ID is only needed in the case of COLLECTION, SAVED_SEARCH or ASSET<br/>metadata is for user defined extra data.<br/> Required roles:  - can_write_discovery_entities 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1DiscoveryDefaultEntitiesPostRequest = {
  // DiscoveryEntitySchema | body
  discoveryEntitySchema: {
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    dateModified: new Date('1970-01-01T00:00:00.00Z'),
    metadata: {},
    objectId: "objectId_example",
    objectType: "COLLECTION",
    title: "title_example",
    userId: "userId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1DiscoveryDefaultEntitiesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discoveryEntitySchema** | **DiscoveryEntitySchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**DiscoveryEntitySchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns the configured discovery entities |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1DiscoveryDefaultPut**
> DiscoveryViewSettingsSchema searchV1DiscoveryDefaultPut(discoveryViewSettingsSchema)

 Required roles:  - can_write_discovery_entities 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1DiscoveryDefaultPutRequest = {
  // DiscoveryViewSettingsSchema | body
  discoveryViewSettingsSchema: {
    entityIds: [
      "entityIds_example",
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1DiscoveryDefaultPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discoveryViewSettingsSchema** | **DiscoveryViewSettingsSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**DiscoveryViewSettingsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns updated default discovery view |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1DiscoveryEntitiesObjectTypeObjectIdPatch**
> void searchV1DiscoveryEntitiesObjectTypeObjectIdPatch(discoveryEntitySchema)

 Required roles:  - can_write_discovery_entities 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1DiscoveryEntitiesObjectTypeObjectIdPatchRequest = {
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // DiscoveryEntitySchema | body
  discoveryEntitySchema: {
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    dateModified: new Date('1970-01-01T00:00:00.00Z'),
    metadata: {},
    objectId: "objectId_example",
    objectType: "COLLECTION",
    title: "title_example",
    userId: "userId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1DiscoveryEntitiesObjectTypeObjectIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discoveryEntitySchema** | **DiscoveryEntitySchema**| body |
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
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
**200** | Returns updated entity |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Discovery entity does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1DiscoveryEntitiesObjectTypeObjectIdPut**
> void searchV1DiscoveryEntitiesObjectTypeObjectIdPut(discoveryEntitySchema)

 Required roles:  - can_write_discovery_entities 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1DiscoveryEntitiesObjectTypeObjectIdPutRequest = {
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // DiscoveryEntitySchema | body
  discoveryEntitySchema: {
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    dateModified: new Date('1970-01-01T00:00:00.00Z'),
    metadata: {},
    objectId: "objectId_example",
    objectType: "COLLECTION",
    title: "title_example",
    userId: "userId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1DiscoveryEntitiesObjectTypeObjectIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discoveryEntitySchema** | **DiscoveryEntitySchema**| body |
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
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
**200** | Returns updated entity |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Discovery entity does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchHistoryGet**
> SearchHistoryListSchema searchV1SearchHistoryGet()

 Required roles:  - can_read_search_history 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchHistoryGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1SearchHistoryGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SearchHistoryListSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns list of last 25 searches |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchHistorySearchHistoryIdDelete**
> void searchV1SearchHistorySearchHistoryIdDelete()

 Required roles:  - can_delete_search_history 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchHistorySearchHistoryIdDeleteRequest = {
  // string
  searchHistoryId: "search_history_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1SearchHistorySearchHistoryIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchHistoryId** | [**string**] |  | defaults to undefined
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
**404** | Search History does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchHistorySearchHistoryIdGet**
> SearchDocumentsSchema searchV1SearchHistorySearchHistoryIdGet()

 Required roles:  - can_read_search_history 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchHistorySearchHistoryIdGetRequest = {
  // string
  searchHistoryId: "search_history_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1SearchHistorySearchHistoryIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchHistoryId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SearchDocumentsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns results of search history |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchPost**
> SearchDocumentsSchema searchV1SearchPost(searchCriteriaSchema)

 Required roles:  - can_search 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchPostRequest = {
  // SearchCriteriaSchema | body
  searchCriteriaSchema: {
    docTypes: [
      "docTypes_example",
    ],
    excludeFields: [
      "excludeFields_example",
    ],
    facets: [
      "facets_example",
    ],
    facetsFilters: [
      {
        name: "name_example",
        valueIn: [
          "valueIn_example",
        ],
      },
    ],
    filter: {
      filters: [
        ,
      ],
      operator: "operator_example",
      terms: [
        {
          exists: true,
          missing: true,
          name: "name_example",
          range: {
            max: "max_example",
            min: "min_example",
            timezone: "timezone_example",
          },
          value: "value_example",
          valueIn: [
            "valueIn_example",
          ],
        },
      ],
    },
    includeFields: [
      "includeFields_example",
    ],
    metadataViewId: "metadataViewId_example",
    query: "query_example",
    searchAfter: [
      null,
    ],
    searchFields: [
      "searchFields_example",
    ],
    sort: [
      {
        name: "name_example",
        order: "order_example",
      },
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of documents for each page (optional)
  perPage: 1,
  // number | Which page number to fetch (optional)
  page: 1,
  // boolean | If true passed then uses scroll pagination instead of default one (Deprecated, user search_after body parameter instead) (optional)
  scroll: true,
  // string | In order to get next batch of results using scroll pagination the scroll_id is required (optional)
  scrollId: "scroll_id_example",
  // boolean | Set to false if you don\'t need a URL, will speed things up (optional)
  generateSignedUrl: true,
  // boolean | Set to true if you also want the file download URLs generated (optional)
  generateSignedDownloadUrl: false,
  // boolean | Set to false if you don\'t want to save the search to the history (optional)
  saveSearchHistory: true,
};

apiInstance.searchV1SearchPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchCriteriaSchema** | **SearchCriteriaSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of documents for each page | (optional) defaults to undefined
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1
 **scroll** | [**boolean**] | If true passed then uses scroll pagination instead of default one (Deprecated, user search_after body parameter instead) | (optional) defaults to undefined
 **scrollId** | [**string**] | In order to get next batch of results using scroll pagination the scroll_id is required | (optional) defaults to undefined
 **generateSignedUrl** | [**boolean**] | Set to false if you don\&#39;t need a URL, will speed things up | (optional) defaults to true
 **generateSignedDownloadUrl** | [**boolean**] | Set to true if you also want the file download URLs generated | (optional) defaults to false
 **saveSearchHistory** | [**boolean**] | Set to false if you don\&#39;t want to save the search to the history | (optional) defaults to true


### Return type

**SearchDocumentsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the result of search |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchSavedGet**
> SavedSearchesSchema searchV1SearchSavedGet()

 Required roles:  - can_read_saved_searches 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchSavedGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // number | Which page number to fetch (optional)
  page: 1,
  // boolean | If true passed then uses scroll pagination instead of default one (optional)
  scroll: true,
  // string | In order to get next batch of results using scroll pagination the scroll_id is required (optional)
  scrollId: "scroll_id_example",
  // string | A comma separated list of fieldnames with order. For example - name,asc;group_id,desc (optional)
  sort: "sort_example",
  // string | Group ID (optional)
  groupId: "group_id_example",
  // string | Filter list of id:s (comma separated) (optional)
  ids: "ids_example",
  // string | Search using query (optional)
  query: "query_example",
};

apiInstance.searchV1SearchSavedGet(body).then((data:any) => {
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
 **scroll** | [**boolean**] | If true passed then uses scroll pagination instead of default one | (optional) defaults to undefined
 **scrollId** | [**string**] | In order to get next batch of results using scroll pagination the scroll_id is required | (optional) defaults to undefined
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - name,asc;group_id,desc | (optional) defaults to undefined
 **groupId** | [**string**] | Group ID | (optional) defaults to undefined
 **ids** | [**string**] | Filter list of id:s (comma separated) | (optional) defaults to undefined
 **query** | [**string**] | Search using query | (optional) defaults to undefined


### Return type

**SavedSearchesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns results of saved search |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchSavedGroupGroupIdDelete**
> void searchV1SearchSavedGroupGroupIdDelete()

 Required roles:  - can_delete_saved_search_groups 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchSavedGroupGroupIdDeleteRequest = {
  // string
  groupId: "group_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1SearchSavedGroupGroupIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
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
**404** | Saved search does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchSavedGroupGroupIdGet**
> SavedSearchGroupSchema searchV1SearchSavedGroupGroupIdGet()

 Required roles:  - can_read_saved_searches 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchSavedGroupGroupIdGetRequest = {
  // string
  groupId: "group_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1SearchSavedGroupGroupIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SavedSearchGroupSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns saved search group info |  -  |
**401** | Token is invalid |  -  |
**404** | Saved search does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchSavedGroupGroupIdPatch**
> SavedSearchGroupSchema searchV1SearchSavedGroupGroupIdPatch(savedSearchGroupSchema)

 Required roles:  - can_write_saved_search_groups 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchSavedGroupGroupIdPatchRequest = {
  // string
  groupId: "group_id_example",
  // SavedSearchGroupSchema | body
  savedSearchGroupSchema: {
    name: "name_example",
    systemDomainId: "systemDomainId_example",
    userId: "userId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1SearchSavedGroupGroupIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **savedSearchGroupSchema** | **SavedSearchGroupSchema**| body |
 **groupId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SavedSearchGroupSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the result of updating group |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Saved search group does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchSavedGroupGroupIdPut**
> SavedSearchGroupSchema searchV1SearchSavedGroupGroupIdPut(savedSearchGroupSchema)

 Required roles:  - can_write_saved_search_groups 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchSavedGroupGroupIdPutRequest = {
  // string
  groupId: "group_id_example",
  // SavedSearchGroupSchema | body
  savedSearchGroupSchema: {
    name: "name_example",
    systemDomainId: "systemDomainId_example",
    userId: "userId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1SearchSavedGroupGroupIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **savedSearchGroupSchema** | **SavedSearchGroupSchema**| body |
 **groupId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SavedSearchGroupSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the result of updating group |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Saved search group does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchSavedGroupGroupIdSearchSearchIdDelete**
> void searchV1SearchSavedGroupGroupIdSearchSearchIdDelete()

 Required roles:  - can_write_saved_searches 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchSavedGroupGroupIdSearchSearchIdDeleteRequest = {
  // string
  groupId: "group_id_example",
  // string
  searchId: "search_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1SearchSavedGroupGroupIdSearchSearchIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **searchId** | [**string**] |  | defaults to undefined
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
**404** | Saved search does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchSavedGroupGroupIdSearchSearchIdPost**
> void searchV1SearchSavedGroupGroupIdSearchSearchIdPost()

 Required roles:  - can_write_saved_searches 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchSavedGroupGroupIdSearchSearchIdPostRequest = {
  // string
  groupId: "group_id_example",
  // string
  searchId: "search_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1SearchSavedGroupGroupIdSearchSearchIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **searchId** | [**string**] |  | defaults to undefined
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
**404** | Saved search does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchSavedGroupPost**
> SavedSearchGroupSchema searchV1SearchSavedGroupPost(savedSearchGroupSchema)

 Required roles:  - can_write_saved_search_groups 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchSavedGroupPostRequest = {
  // SavedSearchGroupSchema | body
  savedSearchGroupSchema: {
    name: "name_example",
    systemDomainId: "systemDomainId_example",
    userId: "userId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1SearchSavedGroupPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **savedSearchGroupSchema** | **SavedSearchGroupSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SavedSearchGroupSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns the result of creation of search group instance |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchSavedGroupsGet**
> SavedSearchGroupsSchema searchV1SearchSavedGroupsGet()

 Required roles:  - can_read_saved_searches 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchSavedGroupsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // number | Which page number to fetch (optional)
  page: 1,
  // string | A comma separated list of IDs. for example - 3c2db7d8-1f39-46e3-8c77-992101e5e616,683a2c63-63a0-42b0-aed8-5b62dedba840 (optional)
  ids: "ids_example",
  // string | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc (optional)
  sort: "sort_example",
};

apiInstance.searchV1SearchSavedGroupsGet(body).then((data:any) => {
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
 **ids** | [**string**] | A comma separated list of IDs. for example - 3c2db7d8-1f39-46e3-8c77-992101e5e616,683a2c63-63a0-42b0-aed8-5b62dedba840 | (optional) defaults to undefined
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc | (optional) defaults to undefined


### Return type

**SavedSearchGroupsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of groups info |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Page number does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchSavedGroupsGroupIdReindexPost**
> void searchV1SearchSavedGroupsGroupIdReindexPost()

 Required roles:  - can_reindex_saved_searches 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchSavedGroupsGroupIdReindexPostRequest = {
  // string
  groupId: "group_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1SearchSavedGroupsGroupIdReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
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
**200** | Returns a job info |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Group does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchSavedPost**
> SavedSearchSchema searchV1SearchSavedPost(savedSearchSchema)

 Required roles:  - can_write_saved_searches 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchSavedPostRequest = {
  // SavedSearchSchema | body
  savedSearchSchema: {
    criteria: {
      docTypes: [
        "docTypes_example",
      ],
      excludeFields: [
        "excludeFields_example",
      ],
      facets: [
        "facets_example",
      ],
      facetsFilters: [
        {
          name: "name_example",
          valueIn: [
            "valueIn_example",
          ],
        },
      ],
      filter: {
        filters: [
          ,
        ],
        operator: "operator_example",
        terms: [
          {
            exists: true,
            missing: true,
            name: "name_example",
            range: {
              max: "max_example",
              min: "min_example",
              timezone: "timezone_example",
            },
            value: "value_example",
            valueIn: [
              "valueIn_example",
            ],
          },
        ],
      },
      includeFields: [
        "includeFields_example",
      ],
      metadataViewId: "metadataViewId_example",
      query: "query_example",
      searchAfter: [
        null,
      ],
      searchFields: [
        "searchFields_example",
      ],
      sort: [
        {
          name: "name_example",
          order: "order_example",
        },
      ],
    },
    groupId: "groupId_example",
    name: "name_example",
    permissions: [
      "permissions_example",
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1SearchSavedPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **savedSearchSchema** | **SavedSearchSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SavedSearchSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns the result of search |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchSavedSearchIdDelete**
> void searchV1SearchSavedSearchIdDelete()

 Required roles:  - can_delete_saved_searches 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchSavedSearchIdDeleteRequest = {
  // string
  searchId: "search_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1SearchSavedSearchIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchId** | [**string**] |  | defaults to undefined
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
**404** | Saved search does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchSavedSearchIdGet**
> SavedSearchResultsSchema searchV1SearchSavedSearchIdGet()

 Required roles:  - can_read_saved_searches 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchSavedSearchIdGetRequest = {
  // string
  searchId: "search_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // number | Which page number to fetch (optional)
  page: 1,
  // boolean | Set to false if you only want the search definition (optional)
  includeResults: true,
};

apiInstance.searchV1SearchSavedSearchIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to undefined
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1
 **includeResults** | [**boolean**] | Set to false if you only want the search definition | (optional) defaults to true


### Return type

**SavedSearchResultsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns results of saved search |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Saved search does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchSavedSearchIdPatch**
> SearchDocumentsSchema searchV1SearchSavedSearchIdPatch(savedSearchSchema)

 Required roles:  - can_write_saved_searches 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchSavedSearchIdPatchRequest = {
  // string
  searchId: "search_id_example",
  // SavedSearchSchema | body
  savedSearchSchema: {
    criteria: {
      docTypes: [
        "docTypes_example",
      ],
      excludeFields: [
        "excludeFields_example",
      ],
      facets: [
        "facets_example",
      ],
      facetsFilters: [
        {
          name: "name_example",
          valueIn: [
            "valueIn_example",
          ],
        },
      ],
      filter: {
        filters: [
          ,
        ],
        operator: "operator_example",
        terms: [
          {
            exists: true,
            missing: true,
            name: "name_example",
            range: {
              max: "max_example",
              min: "min_example",
              timezone: "timezone_example",
            },
            value: "value_example",
            valueIn: [
              "valueIn_example",
            ],
          },
        ],
      },
      includeFields: [
        "includeFields_example",
      ],
      metadataViewId: "metadataViewId_example",
      query: "query_example",
      searchAfter: [
        null,
      ],
      searchFields: [
        "searchFields_example",
      ],
      sort: [
        {
          name: "name_example",
          order: "order_example",
        },
      ],
    },
    groupId: "groupId_example",
    name: "name_example",
    permissions: [
      "permissions_example",
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1SearchSavedSearchIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **savedSearchSchema** | **SavedSearchSchema**| body |
 **searchId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SearchDocumentsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the result of search |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Saved search does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchSavedSearchIdPut**
> SearchDocumentsSchema searchV1SearchSavedSearchIdPut(savedSearchSchema)

 Required roles:  - can_write_saved_searches 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchSavedSearchIdPutRequest = {
  // string
  searchId: "search_id_example",
  // SavedSearchSchema | body
  savedSearchSchema: {
    criteria: {
      docTypes: [
        "docTypes_example",
      ],
      excludeFields: [
        "excludeFields_example",
      ],
      facets: [
        "facets_example",
      ],
      facetsFilters: [
        {
          name: "name_example",
          valueIn: [
            "valueIn_example",
          ],
        },
      ],
      filter: {
        filters: [
          ,
        ],
        operator: "operator_example",
        terms: [
          {
            exists: true,
            missing: true,
            name: "name_example",
            range: {
              max: "max_example",
              min: "min_example",
              timezone: "timezone_example",
            },
            value: "value_example",
            valueIn: [
              "valueIn_example",
            ],
          },
        ],
      },
      includeFields: [
        "includeFields_example",
      ],
      metadataViewId: "metadataViewId_example",
      query: "query_example",
      searchAfter: [
        null,
      ],
      searchFields: [
        "searchFields_example",
      ],
      sort: [
        {
          name: "name_example",
          order: "order_example",
        },
      ],
    },
    groupId: "groupId_example",
    name: "name_example",
    permissions: [
      "permissions_example",
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1SearchSavedSearchIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **savedSearchSchema** | **SavedSearchSchema**| body |
 **searchId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SearchDocumentsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the result of search |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Saved search does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchSavedSearchIdReindexPost**
> void searchV1SearchSavedSearchIdReindexPost(reindexSavedSearchSchema)

 Required roles:  - can_reindex_saved_searches 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchSavedSearchIdReindexPostRequest = {
  // string
  searchId: "search_id_example",
  // ReindexSavedSearchSchema | body
  reindexSavedSearchSchema: {
    syncToAnotherDc: true,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1SearchSavedSearchIdReindexPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reindexSavedSearchSchema** | **ReindexSavedSearchSchema**| body |
 **searchId** | [**string**] |  | defaults to undefined
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
**200** | Returns a job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | User does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchV1SearchSuggestPost**
> SearchSuggestsResponseSchema searchV1SearchSuggestPost(searchSuggestSchema)

 Required roles:  - can_search 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SearchApi(configuration);

let body:iconik.SearchApiSearchV1SearchSuggestPostRequest = {
  // SearchSuggestSchema | body
  searchSuggestSchema: {
    docTypes: [
      "docTypes_example",
    ],
    fieldName: "fieldName_example",
    metadataViewId: "metadataViewId_example",
    query: "query_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.searchV1SearchSuggestPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchSuggestSchema** | **SearchSuggestSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SearchSuggestsResponseSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns search suggestions for a particular query. |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


