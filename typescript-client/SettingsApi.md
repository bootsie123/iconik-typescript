# iconik.SettingsApi

All URIs are relative to *https://app.iconik.io/API*

Method | HTTP request | Description
------------- | ------------- | -------------
[**settingsV1CorsHostsCorsHostIdDelete**](SettingsApi.md#settingsV1CorsHostsCorsHostIdDelete) | **DELETE** /settings/v1/cors_hosts/{cors_host_id}/ | Delete a particular CORS host by id
[**settingsV1CorsHostsCorsHostIdGet**](SettingsApi.md#settingsV1CorsHostsCorsHostIdGet) | **GET** /settings/v1/cors_hosts/{cors_host_id}/ | Returns a particular CORS host by id
[**settingsV1CorsHostsGet**](SettingsApi.md#settingsV1CorsHostsGet) | **GET** /settings/v1/cors_hosts/ | List of CORS hosts
[**settingsV1CorsHostsPost**](SettingsApi.md#settingsV1CorsHostsPost) | **POST** /settings/v1/cors_hosts/ | Create a new CORS host
[**settingsV1GroupGroupIdDelete**](SettingsApi.md#settingsV1GroupGroupIdDelete) | **DELETE** /settings/v1/group/{group_id}/ | Delete group settings
[**settingsV1GroupGroupIdGet**](SettingsApi.md#settingsV1GroupGroupIdGet) | **GET** /settings/v1/group/{group_id}/ | Group settings
[**settingsV1GroupGroupIdPatch**](SettingsApi.md#settingsV1GroupGroupIdPatch) | **PATCH** /settings/v1/group/{group_id}/ | Change group settings
[**settingsV1GroupGroupIdPut**](SettingsApi.md#settingsV1GroupGroupIdPut) | **PUT** /settings/v1/group/{group_id}/ | Change group settings
[**settingsV1KubernetesRealmGet**](SettingsApi.md#settingsV1KubernetesRealmGet) | **GET** /settings/v1/kubernetes/{realm}/ | List of settings
[**settingsV1KubernetesRealmPatch**](SettingsApi.md#settingsV1KubernetesRealmPatch) | **PATCH** /settings/v1/kubernetes/{realm}/ | Change settings
[**settingsV1KubernetesRealmSettingNameDelete**](SettingsApi.md#settingsV1KubernetesRealmSettingNameDelete) | **DELETE** /settings/v1/kubernetes/{realm}/{setting_name}/ | Delete a particular setting by name
[**settingsV1KubernetesRealmSettingNameGet**](SettingsApi.md#settingsV1KubernetesRealmSettingNameGet) | **GET** /settings/v1/kubernetes/{realm}/{setting_name}/ | Returns value for the setting
[**settingsV1MergedCurrentGet**](SettingsApi.md#settingsV1MergedCurrentGet) | **GET** /settings/v1/merged/current/ | Get merged settings for current user
[**settingsV1MergedUserIdGet**](SettingsApi.md#settingsV1MergedUserIdGet) | **GET** /settings/v1/merged/{user_id}/ | Get merged settings for a specific user
[**settingsV1SystemCurrentGet**](SettingsApi.md#settingsV1SystemCurrentGet) | **GET** /settings/v1/system/current/ | System settings
[**settingsV1SystemCurrentPatch**](SettingsApi.md#settingsV1SystemCurrentPatch) | **PATCH** /settings/v1/system/current/ | Change system settings
[**settingsV1SystemCurrentPut**](SettingsApi.md#settingsV1SystemCurrentPut) | **PUT** /settings/v1/system/current/ | Change system settings
[**settingsV1SystemSystemDomainIdGet**](SettingsApi.md#settingsV1SystemSystemDomainIdGet) | **GET** /settings/v1/system/{system_domain_id}/ | System settings
[**settingsV1SystemSystemDomainIdPatch**](SettingsApi.md#settingsV1SystemSystemDomainIdPatch) | **PATCH** /settings/v1/system/{system_domain_id}/ | Change system settings
[**settingsV1SystemSystemDomainIdPut**](SettingsApi.md#settingsV1SystemSystemDomainIdPut) | **PUT** /settings/v1/system/{system_domain_id}/ | Change system settings
[**settingsV1UserAttributesDelete**](SettingsApi.md#settingsV1UserAttributesDelete) | **DELETE** /settings/v1/user/attributes/ | Remove attributes from user settings
[**settingsV1UserUserIdDelete**](SettingsApi.md#settingsV1UserUserIdDelete) | **DELETE** /settings/v1/user/{user_id}/ | Delete user settings
[**settingsV1UserUserIdGet**](SettingsApi.md#settingsV1UserUserIdGet) | **GET** /settings/v1/user/{user_id}/ | User settings
[**settingsV1UserUserIdPatch**](SettingsApi.md#settingsV1UserUserIdPatch) | **PATCH** /settings/v1/user/{user_id}/ | Change user settings
[**settingsV1UserUserIdPut**](SettingsApi.md#settingsV1UserUserIdPut) | **PUT** /settings/v1/user/{user_id}/ | Change user settings


# **settingsV1CorsHostsCorsHostIdDelete**
> void settingsV1CorsHostsCorsHostIdDelete()

 Required roles:  - can_delete_cors_hosts 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1CorsHostsCorsHostIdDeleteRequest = {
  // string
  corsHostId: "cors_host_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.settingsV1CorsHostsCorsHostIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corsHostId** | [**string**] |  | defaults to undefined
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
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1CorsHostsCorsHostIdGet**
> CORSHostSchema settingsV1CorsHostsCorsHostIdGet()

 Required roles:  - can_read_cors_hosts 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1CorsHostsCorsHostIdGetRequest = {
  // string
  corsHostId: "cors_host_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.settingsV1CorsHostsCorsHostIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corsHostId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**CORSHostSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a CORS host |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | CORS host does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1CorsHostsGet**
> CORSHostsSchema settingsV1CorsHostsGet()

 Required roles:  - can_read_cors_hosts 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1CorsHostsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.settingsV1CorsHostsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**CORSHostsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a system settings |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Realm does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1CorsHostsPost**
> CORSHostSchema settingsV1CorsHostsPost(cORSHostSchema)

 Required roles:  - can_write_cors_hosts 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1CorsHostsPostRequest = {
  // CORSHostSchema | body
  cORSHostSchema: {
    host: "host_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.settingsV1CorsHostsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cORSHostSchema** | **CORSHostSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**CORSHostSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created CORS host |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1GroupGroupIdDelete**
> void settingsV1GroupGroupIdDelete()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1GroupGroupIdDeleteRequest = {
  // string
  groupId: "group_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.settingsV1GroupGroupIdDelete(body).then((data:any) => {
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
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1GroupGroupIdGet**
> GroupSettingPublicSchema settingsV1GroupGroupIdGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1GroupGroupIdGetRequest = {
  // string
  groupId: "group_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.settingsV1GroupGroupIdGet(body).then((data:any) => {
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

**GroupSettingPublicSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a group settings |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Realm does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1GroupGroupIdPatch**
> GroupSettingPublicSchema settingsV1GroupGroupIdPatch(groupSettingPublicSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1GroupGroupIdPatchRequest = {
  // string
  groupId: "group_id_example",
  // GroupSettingPublicSchema | body
  groupSettingPublicSchema: {
    aclTemplateId: "aclTemplateId_example",
    allowedIps: [
      {
        appId: "appId_example",
        ip: "ip_example",
      },
    ],
    assetDefaultSections: [
      "assetDefaultSections_example",
    ],
    collectionsGetParentAcls: true,
    dateFormat: "dateFormat_example",
    datetimeFormat: "datetimeFormat_example",
    defaultUploadStorageId: "defaultUploadStorageId_example",
    deleteGracePeriod: 0,
    facetFields: [
      {
        name: "name_example",
      },
    ],
    filtersDefaultMetadataViewId: "filtersDefaultMetadataViewId_example",
    hideFavourites: true,
    homePage: "homePage_example",
    jobsDashboard: null,
    logoStorageId: "logoStorageId_example",
    requiredMetadataViews: [
      "requiredMetadataViews_example",
    ],
    searchDefaultSections: [
      "searchDefaultSections_example",
    ],
    searchDisplayFields: [
      {
        name: "name_example",
      },
    ],
    searchInTranscriptions: true,
    searchResultsAssetMetadataViewId: "searchResultsAssetMetadataViewId_example",
    searchResultsCollectionMetadataViewId: "searchResultsCollectionMetadataViewId_example",
    shareExpirationTime: 0,
    useAssetNameOnDownload: true,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.settingsV1GroupGroupIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupSettingPublicSchema** | **GroupSettingPublicSchema**| body |
 **groupId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**GroupSettingPublicSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns changed group settings |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1GroupGroupIdPut**
> GroupSettingPublicSchema settingsV1GroupGroupIdPut(groupSettingPublicSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1GroupGroupIdPutRequest = {
  // string
  groupId: "group_id_example",
  // GroupSettingPublicSchema | body
  groupSettingPublicSchema: {
    aclTemplateId: "aclTemplateId_example",
    allowedIps: [
      {
        appId: "appId_example",
        ip: "ip_example",
      },
    ],
    assetDefaultSections: [
      "assetDefaultSections_example",
    ],
    collectionsGetParentAcls: true,
    dateFormat: "dateFormat_example",
    datetimeFormat: "datetimeFormat_example",
    defaultUploadStorageId: "defaultUploadStorageId_example",
    deleteGracePeriod: 0,
    facetFields: [
      {
        name: "name_example",
      },
    ],
    filtersDefaultMetadataViewId: "filtersDefaultMetadataViewId_example",
    hideFavourites: true,
    homePage: "homePage_example",
    jobsDashboard: null,
    logoStorageId: "logoStorageId_example",
    requiredMetadataViews: [
      "requiredMetadataViews_example",
    ],
    searchDefaultSections: [
      "searchDefaultSections_example",
    ],
    searchDisplayFields: [
      {
        name: "name_example",
      },
    ],
    searchInTranscriptions: true,
    searchResultsAssetMetadataViewId: "searchResultsAssetMetadataViewId_example",
    searchResultsCollectionMetadataViewId: "searchResultsCollectionMetadataViewId_example",
    shareExpirationTime: 0,
    useAssetNameOnDownload: true,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.settingsV1GroupGroupIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupSettingPublicSchema** | **GroupSettingPublicSchema**| body |
 **groupId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**GroupSettingPublicSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns changed group settings |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1KubernetesRealmGet**
> KubernetesSettingSchema settingsV1KubernetesRealmGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1KubernetesRealmGetRequest = {
  // string
  realm: "realm_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | Which page number to fetch (optional)
  page: 1,
  // number | The number of items for each page (optional)
  perPage: 10,
};

apiInstance.settingsV1KubernetesRealmGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10


### Return type

**KubernetesSettingSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of settings |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Realm does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1KubernetesRealmPatch**
> KubernetesSettingSchema settingsV1KubernetesRealmPatch(kubernetesSettingSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1KubernetesRealmPatchRequest = {
  // string
  realm: "realm_example",
  // KubernetesSettingSchema | body
  kubernetesSettingSchema: {
    settings: {},
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.settingsV1KubernetesRealmPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kubernetesSettingSchema** | **KubernetesSettingSchema**| body |
 **realm** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**KubernetesSettingSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns changed settings |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1KubernetesRealmSettingNameDelete**
> void settingsV1KubernetesRealmSettingNameDelete()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1KubernetesRealmSettingNameDeleteRequest = {
  // string
  realm: "realm_example",
  // string
  settingName: "setting_name_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.settingsV1KubernetesRealmSettingNameDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | [**string**] |  | defaults to undefined
 **settingName** | [**string**] |  | defaults to undefined
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
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1KubernetesRealmSettingNameGet**
> KubernetesSettingSchema settingsV1KubernetesRealmSettingNameGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1KubernetesRealmSettingNameGetRequest = {
  // string
  realm: "realm_example",
  // string
  settingName: "setting_name_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.settingsV1KubernetesRealmSettingNameGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realm** | [**string**] |  | defaults to undefined
 **settingName** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**KubernetesSettingSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns value for the setting |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1MergedCurrentGet**
> MergedSettingsSchema settingsV1MergedCurrentGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1MergedCurrentGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean (optional)
  ignoreLogoUrl: false,
};

apiInstance.settingsV1MergedCurrentGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **ignoreLogoUrl** | [**boolean**] |  | (optional) defaults to false


### Return type

**MergedSettingsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a merged settings |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Realm does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1MergedUserIdGet**
> MergedSettingsSchema settingsV1MergedUserIdGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1MergedUserIdGetRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean (optional)
  ignoreLogoUrl: false,
};

apiInstance.settingsV1MergedUserIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **ignoreLogoUrl** | [**boolean**] |  | (optional) defaults to false


### Return type

**MergedSettingsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a merged settings |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Realm does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1SystemCurrentGet**
> SystemSettingPublicSchema settingsV1SystemCurrentGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1SystemCurrentGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean (optional)
  ignoreLogoUrl: false,
};

apiInstance.settingsV1SystemCurrentGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **ignoreLogoUrl** | [**boolean**] |  | (optional) defaults to false


### Return type

**SystemSettingPublicSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a system settings |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Realm does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1SystemCurrentPatch**
> SystemSettingPublicSchema settingsV1SystemCurrentPatch(systemSettingPublicSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1SystemCurrentPatchRequest = {
  // SystemSettingPublicSchema | body
  systemSettingPublicSchema: {
    aclTemplateId: "aclTemplateId_example",
    allowedIps: [
      {
        appId: "appId_example",
        ip: "ip_example",
      },
    ],
    assetDefaultSections: [
      "assetDefaultSections_example",
    ],
    collectionsGetParentAcls: true,
    corsHosts: [
      "corsHosts_example",
    ],
    dateFormat: "dateFormat_example",
    datetimeFormat: "datetimeFormat_example",
    defaultShareOptions: null,
    defaultUploadStorageId: "defaultUploadStorageId_example",
    deleteGracePeriod: 0,
    enableShield: true,
    externalShare: true,
    facetFields: [
      {
        name: "name_example",
      },
    ],
    filtersDefaultMetadataViewId: "filtersDefaultMetadataViewId_example",
    hideFavourites: true,
    homePage: "homePage_example",
    imagePropertiesMetadataField: "imagePropertiesMetadataField_example",
    jobsDashboard: null,
    locationsMetadataField: "locationsMetadataField_example",
    lockMappedCollections: true,
    logoStorageId: "logoStorageId_example",
    logosMetadataField: "logosMetadataField_example",
    maxBrowseUsers: -2147483648,
    maxPowerUsers: -2147483648,
    maxStandardUsers: -2147483648,
    maxStorageBytes: -9223372036854776000,
    maxTrafficBytes: -9223372036854776000,
    passwordChecks: null,
    requiredMetadataViews: [
      "requiredMetadataViews_example",
    ],
    safeSearchesMetadataField: "safeSearchesMetadataField_example",
    samlRequireGroups: true,
    searchDefaultSections: [
      "searchDefaultSections_example",
    ],
    searchDisplayFields: [
      {
        name: "name_example",
      },
    ],
    searchInTranscriptions: true,
    searchResultsAssetMetadataViewId: "searchResultsAssetMetadataViewId_example",
    searchResultsCollectionMetadataViewId: "searchResultsCollectionMetadataViewId_example",
    searchUsersFromShare: true,
    shareExpirationTime: 0,
    supportAccess: true,
    tagsMetadataField: "tagsMetadataField_example",
    textsMetadataField: "textsMetadataField_example",
    updateSamlPrimaryGroupOnLogin: true,
    useAssetNameOnDownload: true,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.settingsV1SystemCurrentPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemSettingPublicSchema** | **SystemSettingPublicSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SystemSettingPublicSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns changed system settings |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1SystemCurrentPut**
> SystemSettingPublicSchema settingsV1SystemCurrentPut(systemSettingPublicSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1SystemCurrentPutRequest = {
  // SystemSettingPublicSchema | body
  systemSettingPublicSchema: {
    aclTemplateId: "aclTemplateId_example",
    allowedIps: [
      {
        appId: "appId_example",
        ip: "ip_example",
      },
    ],
    assetDefaultSections: [
      "assetDefaultSections_example",
    ],
    collectionsGetParentAcls: true,
    corsHosts: [
      "corsHosts_example",
    ],
    dateFormat: "dateFormat_example",
    datetimeFormat: "datetimeFormat_example",
    defaultShareOptions: null,
    defaultUploadStorageId: "defaultUploadStorageId_example",
    deleteGracePeriod: 0,
    enableShield: true,
    externalShare: true,
    facetFields: [
      {
        name: "name_example",
      },
    ],
    filtersDefaultMetadataViewId: "filtersDefaultMetadataViewId_example",
    hideFavourites: true,
    homePage: "homePage_example",
    imagePropertiesMetadataField: "imagePropertiesMetadataField_example",
    jobsDashboard: null,
    locationsMetadataField: "locationsMetadataField_example",
    lockMappedCollections: true,
    logoStorageId: "logoStorageId_example",
    logosMetadataField: "logosMetadataField_example",
    maxBrowseUsers: -2147483648,
    maxPowerUsers: -2147483648,
    maxStandardUsers: -2147483648,
    maxStorageBytes: -9223372036854776000,
    maxTrafficBytes: -9223372036854776000,
    passwordChecks: null,
    requiredMetadataViews: [
      "requiredMetadataViews_example",
    ],
    safeSearchesMetadataField: "safeSearchesMetadataField_example",
    samlRequireGroups: true,
    searchDefaultSections: [
      "searchDefaultSections_example",
    ],
    searchDisplayFields: [
      {
        name: "name_example",
      },
    ],
    searchInTranscriptions: true,
    searchResultsAssetMetadataViewId: "searchResultsAssetMetadataViewId_example",
    searchResultsCollectionMetadataViewId: "searchResultsCollectionMetadataViewId_example",
    searchUsersFromShare: true,
    shareExpirationTime: 0,
    supportAccess: true,
    tagsMetadataField: "tagsMetadataField_example",
    textsMetadataField: "textsMetadataField_example",
    updateSamlPrimaryGroupOnLogin: true,
    useAssetNameOnDownload: true,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.settingsV1SystemCurrentPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemSettingPublicSchema** | **SystemSettingPublicSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SystemSettingPublicSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns changed system settings |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1SystemSystemDomainIdGet**
> SystemSettingPublicSchema settingsV1SystemSystemDomainIdGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1SystemSystemDomainIdGetRequest = {
  // string
  systemDomainId: "system_domain_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean (optional)
  ignoreLogoUrl: false,
};

apiInstance.settingsV1SystemSystemDomainIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemDomainId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **ignoreLogoUrl** | [**boolean**] |  | (optional) defaults to false


### Return type

**SystemSettingPublicSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a system settings |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Realm does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1SystemSystemDomainIdPatch**
> SystemSettingPublicSchema settingsV1SystemSystemDomainIdPatch(systemSettingPublicSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1SystemSystemDomainIdPatchRequest = {
  // string
  systemDomainId: "system_domain_id_example",
  // SystemSettingPublicSchema | body
  systemSettingPublicSchema: {
    aclTemplateId: "aclTemplateId_example",
    allowedIps: [
      {
        appId: "appId_example",
        ip: "ip_example",
      },
    ],
    assetDefaultSections: [
      "assetDefaultSections_example",
    ],
    collectionsGetParentAcls: true,
    corsHosts: [
      "corsHosts_example",
    ],
    dateFormat: "dateFormat_example",
    datetimeFormat: "datetimeFormat_example",
    defaultShareOptions: null,
    defaultUploadStorageId: "defaultUploadStorageId_example",
    deleteGracePeriod: 0,
    enableShield: true,
    externalShare: true,
    facetFields: [
      {
        name: "name_example",
      },
    ],
    filtersDefaultMetadataViewId: "filtersDefaultMetadataViewId_example",
    hideFavourites: true,
    homePage: "homePage_example",
    imagePropertiesMetadataField: "imagePropertiesMetadataField_example",
    jobsDashboard: null,
    locationsMetadataField: "locationsMetadataField_example",
    lockMappedCollections: true,
    logoStorageId: "logoStorageId_example",
    logosMetadataField: "logosMetadataField_example",
    maxBrowseUsers: -2147483648,
    maxPowerUsers: -2147483648,
    maxStandardUsers: -2147483648,
    maxStorageBytes: -9223372036854776000,
    maxTrafficBytes: -9223372036854776000,
    passwordChecks: null,
    requiredMetadataViews: [
      "requiredMetadataViews_example",
    ],
    safeSearchesMetadataField: "safeSearchesMetadataField_example",
    samlRequireGroups: true,
    searchDefaultSections: [
      "searchDefaultSections_example",
    ],
    searchDisplayFields: [
      {
        name: "name_example",
      },
    ],
    searchInTranscriptions: true,
    searchResultsAssetMetadataViewId: "searchResultsAssetMetadataViewId_example",
    searchResultsCollectionMetadataViewId: "searchResultsCollectionMetadataViewId_example",
    searchUsersFromShare: true,
    shareExpirationTime: 0,
    supportAccess: true,
    tagsMetadataField: "tagsMetadataField_example",
    textsMetadataField: "textsMetadataField_example",
    updateSamlPrimaryGroupOnLogin: true,
    useAssetNameOnDownload: true,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.settingsV1SystemSystemDomainIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemSettingPublicSchema** | **SystemSettingPublicSchema**| body |
 **systemDomainId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SystemSettingPublicSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns changed system settings |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1SystemSystemDomainIdPut**
> SystemSettingPublicSchema settingsV1SystemSystemDomainIdPut(systemSettingPublicSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1SystemSystemDomainIdPutRequest = {
  // string
  systemDomainId: "system_domain_id_example",
  // SystemSettingPublicSchema | body
  systemSettingPublicSchema: {
    aclTemplateId: "aclTemplateId_example",
    allowedIps: [
      {
        appId: "appId_example",
        ip: "ip_example",
      },
    ],
    assetDefaultSections: [
      "assetDefaultSections_example",
    ],
    collectionsGetParentAcls: true,
    corsHosts: [
      "corsHosts_example",
    ],
    dateFormat: "dateFormat_example",
    datetimeFormat: "datetimeFormat_example",
    defaultShareOptions: null,
    defaultUploadStorageId: "defaultUploadStorageId_example",
    deleteGracePeriod: 0,
    enableShield: true,
    externalShare: true,
    facetFields: [
      {
        name: "name_example",
      },
    ],
    filtersDefaultMetadataViewId: "filtersDefaultMetadataViewId_example",
    hideFavourites: true,
    homePage: "homePage_example",
    imagePropertiesMetadataField: "imagePropertiesMetadataField_example",
    jobsDashboard: null,
    locationsMetadataField: "locationsMetadataField_example",
    lockMappedCollections: true,
    logoStorageId: "logoStorageId_example",
    logosMetadataField: "logosMetadataField_example",
    maxBrowseUsers: -2147483648,
    maxPowerUsers: -2147483648,
    maxStandardUsers: -2147483648,
    maxStorageBytes: -9223372036854776000,
    maxTrafficBytes: -9223372036854776000,
    passwordChecks: null,
    requiredMetadataViews: [
      "requiredMetadataViews_example",
    ],
    safeSearchesMetadataField: "safeSearchesMetadataField_example",
    samlRequireGroups: true,
    searchDefaultSections: [
      "searchDefaultSections_example",
    ],
    searchDisplayFields: [
      {
        name: "name_example",
      },
    ],
    searchInTranscriptions: true,
    searchResultsAssetMetadataViewId: "searchResultsAssetMetadataViewId_example",
    searchResultsCollectionMetadataViewId: "searchResultsCollectionMetadataViewId_example",
    searchUsersFromShare: true,
    shareExpirationTime: 0,
    supportAccess: true,
    tagsMetadataField: "tagsMetadataField_example",
    textsMetadataField: "textsMetadataField_example",
    updateSamlPrimaryGroupOnLogin: true,
    useAssetNameOnDownload: true,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.settingsV1SystemSystemDomainIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemSettingPublicSchema** | **SystemSettingPublicSchema**| body |
 **systemDomainId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SystemSettingPublicSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns changed system settings |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1UserAttributesDelete**
> void settingsV1UserAttributesDelete(userSettingRemoveAttributesSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1UserAttributesDeleteRequest = {
  // UserSettingRemoveAttributesSchema | body
  userSettingRemoveAttributesSchema: {
    allowedIps: [
      {
        appId: "appId_example",
        ip: "ip_example",
      },
    ],
    assetDefaultSections: [
      "assetDefaultSections_example",
    ],
    facetFields: [
      {
        name: "name_example",
      },
    ],
    jobsDashboard: null,
    searchDefaultSections: [
      "searchDefaultSections_example",
    ],
    searchDisplayFields: [
      {
        name: "name_example",
      },
    ],
    userIds: [
      "userIds_example",
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.settingsV1UserAttributesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userSettingRemoveAttributesSchema** | **UserSettingRemoveAttributesSchema**| body |
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
**200** | Returns changed user settings |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1UserUserIdDelete**
> void settingsV1UserUserIdDelete()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1UserUserIdDeleteRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.settingsV1UserUserIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
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
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1UserUserIdGet**
> UserSettingSchema settingsV1UserUserIdGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1UserUserIdGetRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.settingsV1UserUserIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserSettingSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a user settings |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Realm does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1UserUserIdPatch**
> UserSettingSchema settingsV1UserUserIdPatch(userSettingSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1UserUserIdPatchRequest = {
  // string
  userId: "user_id_example",
  // UserSettingSchema | body
  userSettingSchema: {
    aclTemplateId: "aclTemplateId_example",
    allowedIps: [
      {
        appId: "appId_example",
        ip: "ip_example",
      },
    ],
    assetDefaultSections: [
      "assetDefaultSections_example",
    ],
    collectionsGetParentAcls: true,
    dateFormat: "dateFormat_example",
    datetimeFormat: "datetimeFormat_example",
    defaultUploadStorageId: "defaultUploadStorageId_example",
    deleteGracePeriod: 0,
    facetFields: [
      {
        name: "name_example",
      },
    ],
    filtersDefaultMetadataViewId: "filtersDefaultMetadataViewId_example",
    hideFavourites: true,
    homePage: "homePage_example",
    jobsDashboard: null,
    searchDefaultSections: [
      "searchDefaultSections_example",
    ],
    searchDisplayFields: [
      {
        name: "name_example",
      },
    ],
    searchInTranscriptions: true,
    searchResultsAssetMetadataViewId: "searchResultsAssetMetadataViewId_example",
    searchResultsCollectionMetadataViewId: "searchResultsCollectionMetadataViewId_example",
    shareExpirationTime: 0,
    useAssetNameOnDownload: true,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.settingsV1UserUserIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userSettingSchema** | **UserSettingSchema**| body |
 **userId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserSettingSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns changed user settings |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **settingsV1UserUserIdPut**
> UserSettingSchema settingsV1UserUserIdPut(userSettingSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.SettingsApi(configuration);

let body:iconik.SettingsApiSettingsV1UserUserIdPutRequest = {
  // string
  userId: "user_id_example",
  // UserSettingSchema | body
  userSettingSchema: {
    aclTemplateId: "aclTemplateId_example",
    allowedIps: [
      {
        appId: "appId_example",
        ip: "ip_example",
      },
    ],
    assetDefaultSections: [
      "assetDefaultSections_example",
    ],
    collectionsGetParentAcls: true,
    dateFormat: "dateFormat_example",
    datetimeFormat: "datetimeFormat_example",
    defaultUploadStorageId: "defaultUploadStorageId_example",
    deleteGracePeriod: 0,
    facetFields: [
      {
        name: "name_example",
      },
    ],
    filtersDefaultMetadataViewId: "filtersDefaultMetadataViewId_example",
    hideFavourites: true,
    homePage: "homePage_example",
    jobsDashboard: null,
    searchDefaultSections: [
      "searchDefaultSections_example",
    ],
    searchDisplayFields: [
      {
        name: "name_example",
      },
    ],
    searchInTranscriptions: true,
    searchResultsAssetMetadataViewId: "searchResultsAssetMetadataViewId_example",
    searchResultsCollectionMetadataViewId: "searchResultsCollectionMetadataViewId_example",
    shareExpirationTime: 0,
    useAssetNameOnDownload: true,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.settingsV1UserUserIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userSettingSchema** | **UserSettingSchema**| body |
 **userId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserSettingSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns changed user settings |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


