# iconik.UsersApi

All URIs are relative to *https://app.iconik.io/API*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersV1GroupsBasicGet**](UsersApi.md#usersV1GroupsBasicGet) | **GET** /users/v1/groups/basic/ | List groups info without details
[**usersV1GroupsGet**](UsersApi.md#usersV1GroupsGet) | **GET** /users/v1/groups/ | List groups with details
[**usersV1GroupsGroupIdDelete**](UsersApi.md#usersV1GroupsGroupIdDelete) | **DELETE** /users/v1/groups/{group_id}/ | Delete a particular group by id
[**usersV1GroupsGroupIdGet**](UsersApi.md#usersV1GroupsGroupIdGet) | **GET** /users/v1/groups/{group_id}/ | Returns a particular group by id
[**usersV1GroupsGroupIdLogoDelete**](UsersApi.md#usersV1GroupsGroupIdLogoDelete) | **DELETE** /users/v1/groups/{group_id}/logo/ | Delete group logo image.
[**usersV1GroupsGroupIdLogoPost**](UsersApi.md#usersV1GroupsGroupIdLogoPost) | **POST** /users/v1/groups/{group_id}/logo/ | Upload group logo image.
[**usersV1GroupsGroupIdPatch**](UsersApi.md#usersV1GroupsGroupIdPatch) | **PATCH** /users/v1/groups/{group_id}/ | Update group
[**usersV1GroupsGroupIdPut**](UsersApi.md#usersV1GroupsGroupIdPut) | **PUT** /users/v1/groups/{group_id}/ | Update group
[**usersV1GroupsGroupIdReindexPost**](UsersApi.md#usersV1GroupsGroupIdReindexPost) | **POST** /users/v1/groups/{group_id}/reindex/ | Reindex a particular group by id
[**usersV1GroupsGroupIdUsersUserIdDelete**](UsersApi.md#usersV1GroupsGroupIdUsersUserIdDelete) | **DELETE** /users/v1/groups/{group_id}/users/{user_id}/ | Delete a user from group
[**usersV1GroupsGroupIdUsersUserIdPost**](UsersApi.md#usersV1GroupsGroupIdUsersUserIdPost) | **POST** /users/v1/groups/{group_id}/users/{user_id}/ | Add user into a group
[**usersV1GroupsMappingsGet**](UsersApi.md#usersV1GroupsMappingsGet) | **GET** /users/v1/groups/mappings/ | Get all group mappings
[**usersV1GroupsMappingsNameDelete**](UsersApi.md#usersV1GroupsMappingsNameDelete) | **DELETE** /users/v1/groups/mappings/{name}/ | Delete group mapping by name
[**usersV1GroupsMappingsNameGet**](UsersApi.md#usersV1GroupsMappingsNameGet) | **GET** /users/v1/groups/mappings/{name}/ | Get a group mapping
[**usersV1GroupsMappingsPost**](UsersApi.md#usersV1GroupsMappingsPost) | **POST** /users/v1/groups/mappings/ | Create a new group mapping
[**usersV1GroupsPost**](UsersApi.md#usersV1GroupsPost) | **POST** /users/v1/groups/ | Create a new group
[**usersV1UsersBasicGet**](UsersApi.md#usersV1UsersBasicGet) | **GET** /users/v1/users/basic/ | List of users without details
[**usersV1UsersCurrentGet**](UsersApi.md#usersV1UsersCurrentGet) | **GET** /users/v1/users/current/ | Returns current user
[**usersV1UsersCurrentPatch**](UsersApi.md#usersV1UsersCurrentPatch) | **PATCH** /users/v1/users/current/ | Update user
[**usersV1UsersCurrentPhotoDelete**](UsersApi.md#usersV1UsersCurrentPhotoDelete) | **DELETE** /users/v1/users/current/photo/ | Delete current user photo image.
[**usersV1UsersCurrentPhotoPost**](UsersApi.md#usersV1UsersCurrentPhotoPost) | **POST** /users/v1/users/current/photo/ | Upload current user photo image.
[**usersV1UsersCurrentPut**](UsersApi.md#usersV1UsersCurrentPut) | **PUT** /users/v1/users/current/ | Update user
[**usersV1UsersCurrentRolesGet**](UsersApi.md#usersV1UsersCurrentRolesGet) | **GET** /users/v1/users/current/roles/ | Returns current user roles
[**usersV1UsersGet**](UsersApi.md#usersV1UsersGet) | **GET** /users/v1/users/ | List of users with details
[**usersV1UsersPost**](UsersApi.md#usersV1UsersPost) | **POST** /users/v1/users/ | Create a new user
[**usersV1UsersUserIdDelete**](UsersApi.md#usersV1UsersUserIdDelete) | **DELETE** /users/v1/users/{user_id}/ | Delete a particular user by id
[**usersV1UsersUserIdGet**](UsersApi.md#usersV1UsersUserIdGet) | **GET** /users/v1/users/{user_id}/ | Returns a particular user by id
[**usersV1UsersUserIdPatch**](UsersApi.md#usersV1UsersUserIdPatch) | **PATCH** /users/v1/users/{user_id}/ | Update user
[**usersV1UsersUserIdPhotoDelete**](UsersApi.md#usersV1UsersUserIdPhotoDelete) | **DELETE** /users/v1/users/{user_id}/photo/ | Delete a photo image of a specified user.
[**usersV1UsersUserIdPhotoPost**](UsersApi.md#usersV1UsersUserIdPhotoPost) | **POST** /users/v1/users/{user_id}/photo/ | Upload user photo image.
[**usersV1UsersUserIdPut**](UsersApi.md#usersV1UsersUserIdPut) | **PUT** /users/v1/users/{user_id}/ | Update user
[**usersV1UsersUserIdReindexPost**](UsersApi.md#usersV1UsersUserIdReindexPost) | **POST** /users/v1/users/{user_id}/reindex/ | Reindex a particular user by id
[**usersV1UsersUserIdRolesGet**](UsersApi.md#usersV1UsersUserIdRolesGet) | **GET** /users/v1/users/{user_id}/roles/ | Returns user roles by user_id
[**usersV1UsersUserIdRolesRoleGet**](UsersApi.md#usersV1UsersUserIdRolesRoleGet) | **GET** /users/v1/users/{user_id}/roles/{role}/ | Returns user roles by user_id
[**usersV1UsersUserIdSamlDelete**](UsersApi.md#usersV1UsersUserIdSamlDelete) | **DELETE** /users/v1/users/{user_id}/saml/ | Remove a user\&#39;s SAML IdP setting
[**usersV1UsersUserIdSamlPut**](UsersApi.md#usersV1UsersUserIdSamlPut) | **PUT** /users/v1/users/{user_id}/saml/ | Update a user\&#39;s SAML IdP settings


# **usersV1GroupsBasicGet**
> GroupsSchema usersV1GroupsBasicGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1GroupsBasicGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | Which page number to fetch (optional)
  page: 1,
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc (optional)
  sort: "sort_example",
  // string | Filter by alias (optional)
  alias: "alias_example",
  // string | Filter by descripton (optional)
  description: "description_example",
  // string | Filter by name (optional)
  name: "name_example",
  // string | Filter by roles (optional)
  roles: "roles_example",
  // string | Filter by date_created (optional)
  dateCreated: "date_created_example",
  // string | Filter by date_modified (optional)
  dateModified: "date_modified_example",
  // string | Filter by any of first_name, last_name and email with wildcard support (optional)
  query: "query_example",
  // string | Filter list of id:s (comma separated) (optional)
  ids: "ids_example",
};

apiInstance.usersV1GroupsBasicGet(body).then((data:any) => {
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
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc | (optional) defaults to undefined
 **alias** | [**string**] | Filter by alias | (optional) defaults to undefined
 **description** | [**string**] | Filter by descripton | (optional) defaults to undefined
 **name** | [**string**] | Filter by name | (optional) defaults to undefined
 **roles** | [**string**] | Filter by roles | (optional) defaults to undefined
 **dateCreated** | [**string**] | Filter by date_created | (optional) defaults to undefined
 **dateModified** | [**string**] | Filter by date_modified | (optional) defaults to undefined
 **query** | [**string**] | Filter by any of first_name, last_name and email with wildcard support | (optional) defaults to undefined
 **ids** | [**string**] | Filter list of id:s (comma separated) | (optional) defaults to undefined


### Return type

**GroupsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of groups |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1GroupsGet**
> GroupsSchema usersV1GroupsGet()

 Required roles:  - can_read_groups 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1GroupsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | Which page number to fetch (optional)
  page: 1,
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc (optional)
  sort: "sort_example",
  // string | Filter by alias (optional)
  alias: "alias_example",
  // string | Filter by descripton (optional)
  description: "description_example",
  // string | Filter by name (optional)
  name: "name_example",
  // string | Filter by roles (optional)
  roles: "roles_example",
  // string | Filter by date_created (optional)
  dateCreated: "date_created_example",
  // string | Filter by date_modified (optional)
  dateModified: "date_modified_example",
  // string | Filter by any of field with wildcard support (optional)
  query: "query_example",
  // string | Filter list of id:s (comma separated) (optional)
  ids: "ids_example",
};

apiInstance.usersV1GroupsGet(body).then((data:any) => {
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
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc | (optional) defaults to undefined
 **alias** | [**string**] | Filter by alias | (optional) defaults to undefined
 **description** | [**string**] | Filter by descripton | (optional) defaults to undefined
 **name** | [**string**] | Filter by name | (optional) defaults to undefined
 **roles** | [**string**] | Filter by roles | (optional) defaults to undefined
 **dateCreated** | [**string**] | Filter by date_created | (optional) defaults to undefined
 **dateModified** | [**string**] | Filter by date_modified | (optional) defaults to undefined
 **query** | [**string**] | Filter by any of field with wildcard support | (optional) defaults to undefined
 **ids** | [**string**] | Filter list of id:s (comma separated) | (optional) defaults to undefined


### Return type

**GroupsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of groups |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1GroupsGroupIdDelete**
> void usersV1GroupsGroupIdDelete()

 Required roles:  - can_delete_groups 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1GroupsGroupIdDeleteRequest = {
  // string
  groupId: "group_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1GroupsGroupIdDelete(body).then((data:any) => {
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
**404** | Group does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1GroupsGroupIdGet**
> GroupSchema usersV1GroupsGroupIdGet()

 Required roles:  - can_read_groups 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1GroupsGroupIdGetRequest = {
  // string
  groupId: "group_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1GroupsGroupIdGet(body).then((data:any) => {
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

**GroupSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a group |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Group does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1GroupsGroupIdLogoDelete**
> void usersV1GroupsGroupIdLogoDelete()

 Required roles:  - can_write_groups 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1GroupsGroupIdLogoDeleteRequest = {
  // string
  groupId: "group_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1GroupsGroupIdLogoDelete(body).then((data:any) => {
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
**204** | No body |  -  |
**400** | Bad request |  -  |
**404** | Group does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1GroupsGroupIdLogoPost**
> UsersV1GroupsGroupIdLogoPost200Response usersV1GroupsGroupIdLogoPost(authV1SystemDomainsSystemDomainIdLogoPostRequest)

 Required roles:  - can_write_groups 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1GroupsGroupIdLogoPostRequest = {
  // string
  groupId: "group_id_example",
  // AuthV1SystemDomainsSystemDomainIdLogoPostRequest
  authV1SystemDomainsSystemDomainIdLogoPostRequest: {
    logo: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1GroupsGroupIdLogoPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authV1SystemDomainsSystemDomainIdLogoPostRequest** | **AuthV1SystemDomainsSystemDomainIdLogoPostRequest**|  |
 **groupId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UsersV1GroupsGroupIdLogoPost200Response**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: image/*
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns url for group logo |  -  |
**400** | Bad request |  -  |
**404** | Group does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1GroupsGroupIdPatch**
> GroupSchema usersV1GroupsGroupIdPatch(groupSchema)

 Required roles:  - can_write_groups 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1GroupsGroupIdPatchRequest = {
  // string
  groupId: "group_id_example",
  // GroupSchema | body
  groupSchema: {
    alias: "alias_example",
    defaultUserType: "defaultUserType_example",
    description: "description_example",
    externalId: "externalId_example",
    name: "name_example",
    roleCategories: null,
    roles: [
      "roles_example",
    ],
    samlPrimaryGroupPriority: -2147483648,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1GroupsGroupIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupSchema** | **GroupSchema**| body |
 **groupId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**GroupSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated group |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Group does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1GroupsGroupIdPut**
> GroupSchema usersV1GroupsGroupIdPut(groupSchema)

 Required roles:  - can_write_groups 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1GroupsGroupIdPutRequest = {
  // string
  groupId: "group_id_example",
  // GroupSchema | body
  groupSchema: {
    alias: "alias_example",
    defaultUserType: "defaultUserType_example",
    description: "description_example",
    externalId: "externalId_example",
    name: "name_example",
    roleCategories: null,
    roles: [
      "roles_example",
    ],
    samlPrimaryGroupPriority: -2147483648,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1GroupsGroupIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupSchema** | **GroupSchema**| body |
 **groupId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**GroupSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated group |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Group does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1GroupsGroupIdReindexPost**
> UserSchema1 usersV1GroupsGroupIdReindexPost()

 Required roles:  - can_reindex_groups 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1GroupsGroupIdReindexPostRequest = {
  // string
  groupId: "group_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1GroupsGroupIdReindexPost(body).then((data:any) => {
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

**UserSchema1**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a job |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Group does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1GroupsGroupIdUsersUserIdDelete**
> UserSchema1 usersV1GroupsGroupIdUsersUserIdDelete()

 Required roles:  - can_delete_groups 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1GroupsGroupIdUsersUserIdDeleteRequest = {
  // string
  groupId: "group_id_example",
  // string
  userId: "user_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1GroupsGroupIdUsersUserIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserSchema1**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a user |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | User or Group does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1GroupsGroupIdUsersUserIdPost**
> UserSchema1 usersV1GroupsGroupIdUsersUserIdPost()

 Required roles:  - can_write_groups 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1GroupsGroupIdUsersUserIdPostRequest = {
  // string
  groupId: "group_id_example",
  // string
  userId: "user_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1GroupsGroupIdUsersUserIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserSchema1**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a user |  -  |
**401** | Token is invalid |  -  |
**404** | User or Group does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1GroupsMappingsGet**
> GroupMappingsSchema usersV1GroupsMappingsGet()

 Required roles:  - can_read_group_mappings 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1GroupsMappingsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // string (optional)
  lastId: "last_id_example",
};

apiInstance.usersV1GroupsMappingsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to undefined
 **lastId** | [**string**] |  | (optional) defaults to undefined


### Return type

**GroupMappingsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of group mappings |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1GroupsMappingsNameDelete**
> void usersV1GroupsMappingsNameDelete()

 Required roles:  - can_delete_group_mappings 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1GroupsMappingsNameDeleteRequest = {
  // string
  name: "name_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1GroupsMappingsNameDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined
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
**404** | Group mapping does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1GroupsMappingsNameGet**
> GroupMappingSchema usersV1GroupsMappingsNameGet()

 Required roles:  - can_read_group_mappings 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1GroupsMappingsNameGetRequest = {
  // string
  name: "name_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1GroupsMappingsNameGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**GroupMappingSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a group mapping |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1GroupsMappingsPost**
> GroupMappingSchema usersV1GroupsMappingsPost(groupMappingSchema)

 Required roles:  - can_write_group_mappings 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1GroupsMappingsPostRequest = {
  // GroupMappingSchema | body
  groupMappingSchema: {
    groupId: "groupId_example",
    name: "name_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1GroupsMappingsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupMappingSchema** | **GroupMappingSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**GroupMappingSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created group mapping |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**409** | Group mapping already exists |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1GroupsPost**
> GroupSchema usersV1GroupsPost(groupSchema)

 Required roles:  - can_write_groups 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1GroupsPostRequest = {
  // GroupSchema | body
  groupSchema: {
    alias: "alias_example",
    defaultUserType: "defaultUserType_example",
    description: "description_example",
    externalId: "externalId_example",
    name: "name_example",
    roleCategories: null,
    roles: [
      "roles_example",
    ],
    samlPrimaryGroupPriority: -2147483648,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1GroupsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupSchema** | **GroupSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**GroupSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created group |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1UsersBasicGet**
> UsersSchema1 usersV1UsersBasicGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1UsersBasicGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | Which page number to fetch (optional)
  page: 1,
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc (optional)
  sort: "sort_example",
  // string | Filter by date_created (optional)
  dateCreated: "date_created_example",
  // string | Filter by date_modified (optional)
  dateModified: "date_modified_example",
  // string | Filter by email (optional)
  email: "email_example",
  // string | Filter by first_name (optional)
  firstName: "first_name_example",
  // string | Filter by last_name (optional)
  lastName: "last_name_example",
  // string | Filter by groups (optional)
  groups: "groups_example",
  // string | Filter by hide_email (optional)
  hideEmail: "hide_email_example",
  // string | Filter by hide_phone (optional)
  hidePhone: "hide_phone_example",
  // string | Filter by is_admin (optional)
  isAdmin: "is_admin_example",
  // string | Filter by password_changed (optional)
  passwordChanged: "password_changed_example",
  // string | Filter by phone (optional)
  phone: "phone_example",
  // string | Filter by photo (optional)
  photo: "photo_example",
  // string | Filter by status (optional)
  status: "status_example",
  // string | Filter by any of first_name, last_name and email with wildcard support (optional)
  query: "query_example",
  // string | Filter list of id:s (comma separated) (optional)
  ids: "ids_example",
};

apiInstance.usersV1UsersBasicGet(body).then((data:any) => {
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
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc | (optional) defaults to undefined
 **dateCreated** | [**string**] | Filter by date_created | (optional) defaults to undefined
 **dateModified** | [**string**] | Filter by date_modified | (optional) defaults to undefined
 **email** | [**string**] | Filter by email | (optional) defaults to undefined
 **firstName** | [**string**] | Filter by first_name | (optional) defaults to undefined
 **lastName** | [**string**] | Filter by last_name | (optional) defaults to undefined
 **groups** | [**string**] | Filter by groups | (optional) defaults to undefined
 **hideEmail** | [**string**] | Filter by hide_email | (optional) defaults to undefined
 **hidePhone** | [**string**] | Filter by hide_phone | (optional) defaults to undefined
 **isAdmin** | [**string**] | Filter by is_admin | (optional) defaults to undefined
 **passwordChanged** | [**string**] | Filter by password_changed | (optional) defaults to undefined
 **phone** | [**string**] | Filter by phone | (optional) defaults to undefined
 **photo** | [**string**] | Filter by photo | (optional) defaults to undefined
 **status** | [**string**] | Filter by status | (optional) defaults to undefined
 **query** | [**string**] | Filter by any of first_name, last_name and email with wildcard support | (optional) defaults to undefined
 **ids** | [**string**] | Filter list of id:s (comma separated) | (optional) defaults to undefined


### Return type

**UsersSchema1**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of users |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Specified page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1UsersCurrentGet**
> UserSchema1 usersV1UsersCurrentGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1UsersCurrentGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1UsersCurrentGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserSchema1**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a user |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | User does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1UsersCurrentPatch**
> UserSchema1 usersV1UsersCurrentPatch(userSchema1)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1UsersCurrentPatchRequest = {
  // UserSchema1 | body
  userSchema1: {
    dateTermsAccepted: new Date('1970-01-01T00:00:00.00Z'),
    email: "email_example",
    firstName: "firstName_example",
    groups: [
      "groups_example",
    ],
    hideEmail: true,
    hidePhone: true,
    isAdmin: true,
    lastName: "lastName_example",
    metadata: null,
    password: "password_example",
    phone: "phone_example",
    primaryGroup: "primaryGroup_example",
    status: "INACTIVE",
    systemDomains: [
      "systemDomains_example",
    ],
    type: "POWER",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1UsersCurrentPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userSchema1** | **UserSchema1**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserSchema1**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated user |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | User does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1UsersCurrentPhotoDelete**
> void usersV1UsersCurrentPhotoDelete()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1UsersCurrentPhotoDeleteRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1UsersCurrentPhotoDelete(body).then((data:any) => {
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
**204** | No body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | User does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1UsersCurrentPhotoPost**
> UsersV1UsersCurrentPhotoPost201Response usersV1UsersCurrentPhotoPost(usersV1UsersCurrentPhotoPostRequest)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1UsersCurrentPhotoPostRequest = {
  // UsersV1UsersCurrentPhotoPostRequest
  usersV1UsersCurrentPhotoPostRequest: {
    photo: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1UsersCurrentPhotoPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usersV1UsersCurrentPhotoPostRequest** | **UsersV1UsersCurrentPhotoPostRequest**|  |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UsersV1UsersCurrentPhotoPost201Response**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: image/*
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns url for user photo |  -  |
**400** | Bad request |  -  |
**404** | User does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1UsersCurrentPut**
> UserSchema1 usersV1UsersCurrentPut(userSchema1)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1UsersCurrentPutRequest = {
  // UserSchema1 | body
  userSchema1: {
    dateTermsAccepted: new Date('1970-01-01T00:00:00.00Z'),
    email: "email_example",
    firstName: "firstName_example",
    groups: [
      "groups_example",
    ],
    hideEmail: true,
    hidePhone: true,
    isAdmin: true,
    lastName: "lastName_example",
    metadata: null,
    password: "password_example",
    phone: "phone_example",
    primaryGroup: "primaryGroup_example",
    status: "INACTIVE",
    systemDomains: [
      "systemDomains_example",
    ],
    type: "POWER",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1UsersCurrentPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userSchema1** | **UserSchema1**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserSchema1**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated user |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | User does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1UsersCurrentRolesGet**
> UserRolesSchema usersV1UsersCurrentRolesGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1UsersCurrentRolesGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1UsersCurrentRolesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserRolesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a user\&#39;s roles |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1UsersGet**
> UsersSchema1 usersV1UsersGet()

 Required roles:  - can_read_users 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1UsersGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | Which page number to fetch (optional)
  page: 1,
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc (optional)
  sort: "sort_example",
  // string | Filter by date_created (optional)
  dateCreated: "date_created_example",
  // string | Filter by date_modified (optional)
  dateModified: "date_modified_example",
  // string | Filter by email (optional)
  email: "email_example",
  // string | Filter by first_name (optional)
  firstName: "first_name_example",
  // string | Filter by last_name (optional)
  lastName: "last_name_example",
  // string | Filter by groups (optional)
  groups: "groups_example",
  // string | Filter by hide_email (optional)
  hideEmail: "hide_email_example",
  // string | Filter by hide_phone (optional)
  hidePhone: "hide_phone_example",
  // string | Filter by is_admin (optional)
  isAdmin: "is_admin_example",
  // string | Filter by password_changed (optional)
  passwordChanged: "password_changed_example",
  // string | Filter by phone (optional)
  phone: "phone_example",
  // string | Filter by photo (optional)
  photo: "photo_example",
  // string | Filter by status (optional)
  status: "status_example",
  // string | Filter by any of first_name, last_name and email with wildcard support (optional)
  query: "query_example",
  // string | Filter list of id:s (comma separated) (optional)
  ids: "ids_example",
};

apiInstance.usersV1UsersGet(body).then((data:any) => {
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
 **sort** | [**string**] | A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc | (optional) defaults to undefined
 **dateCreated** | [**string**] | Filter by date_created | (optional) defaults to undefined
 **dateModified** | [**string**] | Filter by date_modified | (optional) defaults to undefined
 **email** | [**string**] | Filter by email | (optional) defaults to undefined
 **firstName** | [**string**] | Filter by first_name | (optional) defaults to undefined
 **lastName** | [**string**] | Filter by last_name | (optional) defaults to undefined
 **groups** | [**string**] | Filter by groups | (optional) defaults to undefined
 **hideEmail** | [**string**] | Filter by hide_email | (optional) defaults to undefined
 **hidePhone** | [**string**] | Filter by hide_phone | (optional) defaults to undefined
 **isAdmin** | [**string**] | Filter by is_admin | (optional) defaults to undefined
 **passwordChanged** | [**string**] | Filter by password_changed | (optional) defaults to undefined
 **phone** | [**string**] | Filter by phone | (optional) defaults to undefined
 **photo** | [**string**] | Filter by photo | (optional) defaults to undefined
 **status** | [**string**] | Filter by status | (optional) defaults to undefined
 **query** | [**string**] | Filter by any of first_name, last_name and email with wildcard support | (optional) defaults to undefined
 **ids** | [**string**] | Filter list of id:s (comma separated) | (optional) defaults to undefined


### Return type

**UsersSchema1**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of users |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Specified page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1UsersPost**
> UserSchema1 usersV1UsersPost(userCreateSchema)

 Required roles:  - can_create_users 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1UsersPostRequest = {
  // UserCreateSchema | body
  userCreateSchema: {
    dateTermsAccepted: new Date('1970-01-01T00:00:00.00Z'),
    email: "email_example",
    firstName: "firstName_example",
    groups: [
      "groups_example",
    ],
    hideEmail: true,
    hidePhone: true,
    isAdmin: true,
    lastName: "lastName_example",
    metadata: null,
    password: "password_example",
    phone: "phone_example",
    primaryGroup: "primaryGroup_example",
    status: "INACTIVE",
    systemDomains: [
      "systemDomains_example",
    ],
    type: "POWER",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1UsersPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCreateSchema** | **UserCreateSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserSchema1**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created user |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1UsersUserIdDelete**
> void usersV1UsersUserIdDelete()

 Required roles:  - can_delete_users 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1UsersUserIdDeleteRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1UsersUserIdDelete(body).then((data:any) => {
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
**404** | User does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1UsersUserIdGet**
> UserSchema1 usersV1UsersUserIdGet()

 Required roles:  - can_read_users 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1UsersUserIdGetRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1UsersUserIdGet(body).then((data:any) => {
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

**UserSchema1**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a user |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | User does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1UsersUserIdPatch**
> UserSchema1 usersV1UsersUserIdPatch(userSchema1)

 Required roles:  - can_write_users 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1UsersUserIdPatchRequest = {
  // string
  userId: "user_id_example",
  // UserSchema1 | body
  userSchema1: {
    dateTermsAccepted: new Date('1970-01-01T00:00:00.00Z'),
    email: "email_example",
    firstName: "firstName_example",
    groups: [
      "groups_example",
    ],
    hideEmail: true,
    hidePhone: true,
    isAdmin: true,
    lastName: "lastName_example",
    metadata: null,
    password: "password_example",
    phone: "phone_example",
    primaryGroup: "primaryGroup_example",
    status: "INACTIVE",
    systemDomains: [
      "systemDomains_example",
    ],
    type: "POWER",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1UsersUserIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userSchema1** | **UserSchema1**| body |
 **userId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserSchema1**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated user |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | User does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1UsersUserIdPhotoDelete**
> void usersV1UsersUserIdPhotoDelete()

 Required roles:  - can_write_users 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1UsersUserIdPhotoDeleteRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1UsersUserIdPhotoDelete(body).then((data:any) => {
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
**204** | No body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | User does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1UsersUserIdPhotoPost**
> UsersV1UsersCurrentPhotoPost201Response usersV1UsersUserIdPhotoPost(usersV1UsersCurrentPhotoPostRequest)

 Required roles:  - can_write_users 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1UsersUserIdPhotoPostRequest = {
  // string
  userId: "user_id_example",
  // UsersV1UsersCurrentPhotoPostRequest
  usersV1UsersCurrentPhotoPostRequest: {
    photo: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1UsersUserIdPhotoPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usersV1UsersCurrentPhotoPostRequest** | **UsersV1UsersCurrentPhotoPostRequest**|  |
 **userId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UsersV1UsersCurrentPhotoPost201Response**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: image/*
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns url for user photo |  -  |
**400** | Bad request |  -  |
**404** | User does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1UsersUserIdPut**
> UserSchema1 usersV1UsersUserIdPut(userSchema1)

 Required roles:  - can_write_users 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1UsersUserIdPutRequest = {
  // string
  userId: "user_id_example",
  // UserSchema1 | body
  userSchema1: {
    dateTermsAccepted: new Date('1970-01-01T00:00:00.00Z'),
    email: "email_example",
    firstName: "firstName_example",
    groups: [
      "groups_example",
    ],
    hideEmail: true,
    hidePhone: true,
    isAdmin: true,
    lastName: "lastName_example",
    metadata: null,
    password: "password_example",
    phone: "phone_example",
    primaryGroup: "primaryGroup_example",
    status: "INACTIVE",
    systemDomains: [
      "systemDomains_example",
    ],
    type: "POWER",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1UsersUserIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userSchema1** | **UserSchema1**| body |
 **userId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserSchema1**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated user |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | User does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1UsersUserIdReindexPost**
> UserSchema1 usersV1UsersUserIdReindexPost()

 Required roles:  - can_reindex_users 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1UsersUserIdReindexPostRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1UsersUserIdReindexPost(body).then((data:any) => {
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

**UserSchema1**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
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

# **usersV1UsersUserIdRolesGet**
> UserRolesSchema usersV1UsersUserIdRolesGet()

 Required roles:  - can_read_users 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1UsersUserIdRolesGetRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1UsersUserIdRolesGet(body).then((data:any) => {
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

**UserRolesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a user\&#39;s roles |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1UsersUserIdRolesRoleGet**
> void usersV1UsersUserIdRolesRoleGet()

 Required roles:  - can_read_users 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1UsersUserIdRolesRoleGetRequest = {
  // string
  userId: "user_id_example",
  // string
  role: "role_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1UsersUserIdRolesRoleGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **role** | [**string**] |  | defaults to undefined
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
**200** | Returns 200 if user has role |  -  |
**401** | Token is invalid |  -  |
**404** | Returns 404 if user doesn\&#39;t have role |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1UsersUserIdSamlDelete**
> UserSchema1 usersV1UsersUserIdSamlDelete()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1UsersUserIdSamlDeleteRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1UsersUserIdSamlDelete(body).then((data:any) => {
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

**UserSchema1**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated user |  -  |
**401** | Token is invalid |  -  |
**404** | User does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersV1UsersUserIdSamlPut**
> UserSchema1 usersV1UsersUserIdSamlPut(userSamlIdpUpdateSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersApi(configuration);

let body:iconik.UsersApiUsersV1UsersUserIdSamlPutRequest = {
  // string
  userId: "user_id_example",
  // UserSamlIdpUpdateSchema | body
  userSamlIdpUpdateSchema: {
    email: "email_example",
    identityProviderId: "identityProviderId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersV1UsersUserIdSamlPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userSamlIdpUpdateSchema** | **UserSamlIdpUpdateSchema**| body |
 **userId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserSchema1**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated user |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | User does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


