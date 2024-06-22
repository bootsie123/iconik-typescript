# iconik.AclsApi

All URIs are relative to *https://app.iconik.io/API*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aclsV1AclObjectTypeContentDelete**](AclsApi.md#aclsV1AclObjectTypeContentDelete) | **DELETE** /acls/v1/acl/{object_type}/content/ | Delete acls for content of multiple objects
[**aclsV1AclObjectTypeContentPut**](AclsApi.md#aclsV1AclObjectTypeContentPut) | **PUT** /acls/v1/acl/{object_type}/content/ | Create a new acl for content of multiple objects
[**aclsV1AclObjectTypeDelete**](AclsApi.md#aclsV1AclObjectTypeDelete) | **DELETE** /acls/v1/acl/{object_type}/ | Delete acls for multiple objects
[**aclsV1AclObjectTypeObjectKeyGet**](AclsApi.md#aclsV1AclObjectTypeObjectKeyGet) | **GET** /acls/v1/acl/{object_type}/{object_key}/ | List of object permissions
[**aclsV1AclObjectTypeObjectKeyPermissionGet**](AclsApi.md#aclsV1AclObjectTypeObjectKeyPermissionGet) | **GET** /acls/v1/acl/{object_type}/{object_key}/{permission}/ | Check if particular object has required permission
[**aclsV1AclObjectTypeObjectKeyPermissionsGet**](AclsApi.md#aclsV1AclObjectTypeObjectKeyPermissionsGet) | **GET** /acls/v1/acl/{object_type}/{object_key}/permissions/ | List of permissions for the user
[**aclsV1AclObjectTypePermissionPost**](AclsApi.md#aclsV1AclObjectTypePermissionPost) | **POST** /acls/v1/acl/{object_type}/{permission}/ | Check if objects have required permission
[**aclsV1AclObjectTypePut**](AclsApi.md#aclsV1AclObjectTypePut) | **PUT** /acls/v1/acl/{object_type}/ | Create a new acl for multiple objects
[**aclsV1AclPost**](AclsApi.md#aclsV1AclPost) | **POST** /acls/v1/acl/ | Check if objects have required permission
[**aclsV1AclTemplatesGet**](AclsApi.md#aclsV1AclTemplatesGet) | **GET** /acls/v1/acl/templates/ | Retreive all acl templates
[**aclsV1AclTemplatesPost**](AclsApi.md#aclsV1AclTemplatesPost) | **POST** /acls/v1/acl/templates/ | Create an acl template
[**aclsV1AclTemplatesTemplateIdDelete**](AclsApi.md#aclsV1AclTemplatesTemplateIdDelete) | **DELETE** /acls/v1/acl/templates/{template_id}/ | Remove an acl template
[**aclsV1AclTemplatesTemplateIdGet**](AclsApi.md#aclsV1AclTemplatesTemplateIdGet) | **GET** /acls/v1/acl/templates/{template_id}/ | Retreive an acl template
[**aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPost**](AclsApi.md#aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPost) | **POST** /acls/v1/acl/templates/{template_id}/{object_type}/{object_key}/ | Apply template permissions to an object
[**aclsV1AclTemplatesTemplateIdPatch**](AclsApi.md#aclsV1AclTemplatesTemplateIdPatch) | **PATCH** /acls/v1/acl/templates/{template_id}/ | Update an acl template
[**aclsV1AclTemplatesTemplateIdPut**](AclsApi.md#aclsV1AclTemplatesTemplateIdPut) | **PUT** /acls/v1/acl/templates/{template_id}/ | Update an acl template
[**aclsV1GroupsGroupIdAclObjectTypeObjectKeyDelete**](AclsApi.md#aclsV1GroupsGroupIdAclObjectTypeObjectKeyDelete) | **DELETE** /acls/v1/groups/{group_id}/acl/{object_type}/{object_key}/ | Delete a particular acl by id for an object
[**aclsV1GroupsGroupIdAclObjectTypeObjectKeyGet**](AclsApi.md#aclsV1GroupsGroupIdAclObjectTypeObjectKeyGet) | **GET** /acls/v1/groups/{group_id}/acl/{object_type}/{object_key}/ | List of groups permissions for an object
[**aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGet**](AclsApi.md#aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGet) | **GET** /acls/v1/groups/{group_id}/acl/{object_type}/{object_key}/{permission}/ | Check if group has particular permission for an object
[**aclsV1GroupsGroupIdAclObjectTypeObjectKeyPut**](AclsApi.md#aclsV1GroupsGroupIdAclObjectTypeObjectKeyPut) | **PUT** /acls/v1/groups/{group_id}/acl/{object_type}/{object_key}/ | Update or create group acl for an object
[**aclsV1SharesObjectTypeObjectKeyGet**](AclsApi.md#aclsV1SharesObjectTypeObjectKeyGet) | **GET** /acls/v1/shares/{object_type}/{object_key}/ | List of share acls
[**aclsV1SharesShareIdAclObjectTypeObjectKeyDelete**](AclsApi.md#aclsV1SharesShareIdAclObjectTypeObjectKeyDelete) | **DELETE** /acls/v1/shares/{share_id}/acl/{object_type}/{object_key}/ | Delete a share acl for an object
[**aclsV1SharesShareIdAclObjectTypeObjectKeyGet**](AclsApi.md#aclsV1SharesShareIdAclObjectTypeObjectKeyGet) | **GET** /acls/v1/shares/{share_id}/acl/{object_type}/{object_key}/ | List of share permissions for an object
[**aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGet**](AclsApi.md#aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGet) | **GET** /acls/v1/shares/{share_id}/acl/{object_type}/{object_key}/{permission}/ | Returns a share acl for an object
[**aclsV1SharesShareIdAclObjectTypeObjectKeyPost**](AclsApi.md#aclsV1SharesShareIdAclObjectTypeObjectKeyPost) | **POST** /acls/v1/shares/{share_id}/acl/{object_type}/{object_key}/ | Create a new share acl for an object
[**aclsV1SharesShareIdAclObjectTypeObjectKeyPut**](AclsApi.md#aclsV1SharesShareIdAclObjectTypeObjectKeyPut) | **PUT** /acls/v1/shares/{share_id}/acl/{object_type}/{object_key}/ | Update share acl for an object
[**aclsV1SharesShareIdAclObjectTypePut**](AclsApi.md#aclsV1SharesShareIdAclObjectTypePut) | **PUT** /acls/v1/shares/{share_id}/acl/{object_type}/ | Create a new acl for multiple share objects
[**aclsV1UsersUserIdAclObjectTypeObjectKeyDelete**](AclsApi.md#aclsV1UsersUserIdAclObjectTypeObjectKeyDelete) | **DELETE** /acls/v1/users/{user_id}/acl/{object_type}/{object_key}/ | Delete a user acl for an object
[**aclsV1UsersUserIdAclObjectTypeObjectKeyGet**](AclsApi.md#aclsV1UsersUserIdAclObjectTypeObjectKeyGet) | **GET** /acls/v1/users/{user_id}/acl/{object_type}/{object_key}/ | List of user permissions for an object
[**aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGet**](AclsApi.md#aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGet) | **GET** /acls/v1/users/{user_id}/acl/{object_type}/{object_key}/{permission}/ | Returns a user acl for an object
[**aclsV1UsersUserIdAclObjectTypeObjectKeyPut**](AclsApi.md#aclsV1UsersUserIdAclObjectTypeObjectKeyPut) | **PUT** /acls/v1/users/{user_id}/acl/{object_type}/{object_key}/ | Update or create user acl for an object


# **aclsV1AclObjectTypeContentDelete**
> void aclsV1AclObjectTypeContentDelete(deleteBulkACLsSchema)

 Required roles:  - can_delete_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1AclObjectTypeContentDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // DeleteBulkACLsSchema | body
  deleteBulkACLsSchema: {
    groupIds: [
      "groupIds_example",
    ],
    includeAssets: true,
    includeCollections: true,
    objectIds: [
      "objectIds_example",
    ],
    userIds: [
      "userIds_example",
    ],
  },
};

apiInstance.aclsV1AclObjectTypeContentDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteBulkACLsSchema** | **DeleteBulkACLsSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined


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
**200** | Returns the deleted objects |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1AclObjectTypeContentPut**
> void aclsV1AclObjectTypeContentPut(createBulkACLsSchema)

 Required roles:  - can_write_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1AclObjectTypeContentPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // CreateBulkACLsSchema | body
  createBulkACLsSchema: {
    groupIds: [
      "groupIds_example",
    ],
    includeAssets: true,
    includeCollections: true,
    mode: "OVERWRITE",
    objectIds: [
      "objectIds_example",
    ],
    permissions: [
      "permissions_example",
    ],
    userIds: [
      "userIds_example",
    ],
  },
};

apiInstance.aclsV1AclObjectTypeContentPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBulkACLsSchema** | **CreateBulkACLsSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined


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
**202** | Returns the updated objects |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**501** | Invalid object type |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1AclObjectTypeDelete**
> void aclsV1AclObjectTypeDelete(deleteACLsSchema)

 Required roles:  - can_delete_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1AclObjectTypeDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // DeleteACLsSchema | body
  deleteACLsSchema: {
    groupIds: [
      "groupIds_example",
    ],
    objectKeys: [
      "objectKeys_example",
    ],
    userIds: [
      "userIds_example",
    ],
  },
};

apiInstance.aclsV1AclObjectTypeDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteACLsSchema** | **DeleteACLsSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined


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
**200** | Returns the deleted objects |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1AclObjectTypeObjectKeyGet**
> ACLSchema aclsV1AclObjectTypeObjectKeyGet()

 Required roles:  - can_read_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1AclObjectTypeObjectKeyGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // string
  objectKey: "object_key_example",
};

apiInstance.aclsV1AclObjectTypeObjectKeyGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectKey** | [**string**] |  | defaults to undefined


### Return type

**ACLSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of permissions |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1AclObjectTypeObjectKeyPermissionGet**
> void aclsV1AclObjectTypeObjectKeyPermissionGet()

 Required roles:  - can_read_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1AclObjectTypeObjectKeyPermissionGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // string
  objectKey: "object_key_example",
  // string
  permission: "permission_example",
};

apiInstance.aclsV1AclObjectTypeObjectKeyPermissionGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectKey** | [**string**] |  | defaults to undefined
 **permission** | [**string**] |  | defaults to undefined


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
**200** | Returns empty dict if object has permission |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Returns empty dict if object doesn\&#39;t have permission |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1AclObjectTypeObjectKeyPermissionsGet**
> CombinedPermissionsSchema aclsV1AclObjectTypeObjectKeyPermissionsGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1AclObjectTypeObjectKeyPermissionsGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // string
  objectKey: "object_key_example",
};

apiInstance.aclsV1AclObjectTypeObjectKeyPermissionsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectKey** | [**string**] |  | defaults to undefined


### Return type

**CombinedPermissionsSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of permissions |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1AclObjectTypePermissionPost**
> BulkACLSchema aclsV1AclObjectTypePermissionPost(aCLsSchema)

 Required roles:  - can_read_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1AclObjectTypePermissionPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // string
  permission: "permission_example",
  // ACLsSchema | body
  aCLsSchema: {
    objectKeys: [
      "objectKeys_example",
    ],
  },
};

apiInstance.aclsV1AclObjectTypePermissionPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aCLsSchema** | **ACLsSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **permission** | [**string**] |  | defaults to undefined


### Return type

**BulkACLSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dict with two lists &#x60;access_granted&#x60; and &#x60;access_denied&#x60; object keys |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | User doesn\&#39;t have permission |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1AclObjectTypePut**
> CreateACLsResultSchema aclsV1AclObjectTypePut(createACLsSchema)

 Required roles:  - can_write_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1AclObjectTypePutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // CreateACLsSchema | body
  createACLsSchema: {
    groupIds: [
      "groupIds_example",
    ],
    mode: "OVERWRITE",
    objectKeys: [
      "objectKeys_example",
    ],
    permissions: [
      "permissions_example",
    ],
    userIds: [
      "userIds_example",
    ],
  },
};

apiInstance.aclsV1AclObjectTypePut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createACLsSchema** | **CreateACLsSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined


### Return type

**CreateACLsResultSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the updated objects |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1AclPost**
> BulkACLSchema aclsV1AclPost(checkBulkACLsSchema)

 Required roles:  - can_read_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1AclPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // CheckBulkACLsSchema | body
  checkBulkACLsSchema: {
    objects: [
      {
        objectKeys: [
          "objectKeys_example",
        ],
        objectType: "objectType_example",
        permissions: [
          "read",
        ],
      },
    ],
  },
};

apiInstance.aclsV1AclPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkBulkACLsSchema** | **CheckBulkACLsSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**BulkACLSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns empty dict if object has permission |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | User doesn\&#39;t have permission |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1AclTemplatesGet**
> ACLTemplatesSchema aclsV1AclTemplatesGet()

 Required roles:  - can_read_acl_templates 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1AclTemplatesGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
};

apiInstance.aclsV1AclTemplatesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**ACLTemplatesSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1AclTemplatesPost**
> ACLTemplateSchema aclsV1AclTemplatesPost(aCLTemplateSchema)

 Required roles:  - can_write_acl_templates 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1AclTemplatesPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // ACLTemplateSchema | body
  aCLTemplateSchema: {
    name: "name_example",
  },
};

apiInstance.aclsV1AclTemplatesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aCLTemplateSchema** | **ACLTemplateSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined


### Return type

**ACLTemplateSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successfully Created |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1AclTemplatesTemplateIdDelete**
> void aclsV1AclTemplatesTemplateIdDelete()

 Required roles:  - can_delete_acl_templates 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1AclTemplatesTemplateIdDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  templateId: "template_id_example",
};

apiInstance.aclsV1AclTemplatesTemplateIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **templateId** | [**string**] |  | defaults to undefined


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
**204** | Successfully deleted |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | ACL template does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1AclTemplatesTemplateIdGet**
> ACLTemplateSchema aclsV1AclTemplatesTemplateIdGet()

 Required roles:  - can_read_acl_templates 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1AclTemplatesTemplateIdGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  templateId: "template_id_example",
};

apiInstance.aclsV1AclTemplatesTemplateIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **templateId** | [**string**] |  | defaults to undefined


### Return type

**ACLTemplateSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Template does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPost**
> void aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPost()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  templateId: "template_id_example",
  // string
  objectType: "object_type_example",
  // string
  objectKey: "object_key_example",
  // boolean (optional)
  ignoreReindexing: true,
  // string | Do not apply any ACLs that are not in the collection_id provided (Parent collection normally) (optional)
  restrictAclsCollectionId: "restrict_acls_collection_id_example",
};

apiInstance.aclsV1AclTemplatesTemplateIdObjectTypeObjectKeyPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **templateId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectKey** | [**string**] |  | defaults to undefined
 **ignoreReindexing** | [**boolean**] |  | (optional) defaults to undefined
 **restrictAclsCollectionId** | [**string**] | Do not apply any ACLs that are not in the collection_id provided (Parent collection normally) | (optional) defaults to undefined


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
**200** | Success |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | User does not have permission |  -  |
**404** | ACL template does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1AclTemplatesTemplateIdPatch**
> ACLTemplateSchema aclsV1AclTemplatesTemplateIdPatch(aCLTemplateSchema)

 Required roles:  - can_write_acl_templates 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1AclTemplatesTemplateIdPatchRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  templateId: "template_id_example",
  // ACLTemplateSchema | body
  aCLTemplateSchema: {
    name: "name_example",
  },
};

apiInstance.aclsV1AclTemplatesTemplateIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aCLTemplateSchema** | **ACLTemplateSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **templateId** | [**string**] |  | defaults to undefined


### Return type

**ACLTemplateSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | ACL template does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1AclTemplatesTemplateIdPut**
> ACLTemplateSchema aclsV1AclTemplatesTemplateIdPut(aCLTemplateSchema)

 Required roles:  - can_write_acl_templates 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1AclTemplatesTemplateIdPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  templateId: "template_id_example",
  // ACLTemplateSchema | body
  aCLTemplateSchema: {
    name: "name_example",
  },
};

apiInstance.aclsV1AclTemplatesTemplateIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aCLTemplateSchema** | **ACLTemplateSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **templateId** | [**string**] |  | defaults to undefined


### Return type

**ACLTemplateSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | ACL template does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1GroupsGroupIdAclObjectTypeObjectKeyDelete**
> void aclsV1GroupsGroupIdAclObjectTypeObjectKeyDelete()

 Required roles:  - can_delete_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1GroupsGroupIdAclObjectTypeObjectKeyDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  groupId: "group_id_example",
  // string
  objectType: "object_type_example",
  // string
  objectKey: "object_key_example",
};

apiInstance.aclsV1GroupsGroupIdAclObjectTypeObjectKeyDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **groupId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectKey** | [**string**] |  | defaults to undefined


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
**404** | ACL does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1GroupsGroupIdAclObjectTypeObjectKeyGet**
> GroupACLSchema aclsV1GroupsGroupIdAclObjectTypeObjectKeyGet()

 Required roles:  - can_read_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1GroupsGroupIdAclObjectTypeObjectKeyGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  groupId: "group_id_example",
  // string
  objectType: "object_type_example",
  // string
  objectKey: "object_key_example",
};

apiInstance.aclsV1GroupsGroupIdAclObjectTypeObjectKeyGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **groupId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectKey** | [**string**] |  | defaults to undefined


### Return type

**GroupACLSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of group permissions |  -  |
**401** | Token is invalid |  -  |
**404** | Group doesn\&#39;t have permissions |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGet**
> void aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGet()

 Required roles:  - can_read_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  groupId: "group_id_example",
  // string
  objectType: "object_type_example",
  // string
  objectKey: "object_key_example",
  // string
  permission: "permission_example",
};

apiInstance.aclsV1GroupsGroupIdAclObjectTypeObjectKeyPermissionGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **groupId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectKey** | [**string**] |  | defaults to undefined
 **permission** | [**string**] |  | defaults to undefined


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
**200** | Returns an empty body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | Group doesn\&#39;t have particular permission |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1GroupsGroupIdAclObjectTypeObjectKeyPut**
> GroupACLSchema aclsV1GroupsGroupIdAclObjectTypeObjectKeyPut(groupACLSchema)

 Required roles:  - can_write_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1GroupsGroupIdAclObjectTypeObjectKeyPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  groupId: "group_id_example",
  // string
  objectType: "object_type_example",
  // string
  objectKey: "object_key_example",
  // GroupACLSchema | body
  groupACLSchema: {
    permissions: [
      "permissions_example",
    ],
  },
};

apiInstance.aclsV1GroupsGroupIdAclObjectTypeObjectKeyPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupACLSchema** | **GroupACLSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **groupId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectKey** | [**string**] |  | defaults to undefined


### Return type

**GroupACLSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated acl |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | ACL does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1SharesObjectTypeObjectKeyGet**
> SharesACLSchema aclsV1SharesObjectTypeObjectKeyGet()

 Required roles:  - can_read_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1SharesObjectTypeObjectKeyGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  objectType: "object_type_example",
  // string
  objectKey: "object_key_example",
};

apiInstance.aclsV1SharesObjectTypeObjectKeyGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectKey** | [**string**] |  | defaults to undefined


### Return type

**SharesACLSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of permissions |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1SharesShareIdAclObjectTypeObjectKeyDelete**
> void aclsV1SharesShareIdAclObjectTypeObjectKeyDelete()

 Required roles:  - can_delete_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1SharesShareIdAclObjectTypeObjectKeyDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  shareId: "share_id_example",
  // string
  objectType: "object_type_example",
  // string
  objectKey: "object_key_example",
};

apiInstance.aclsV1SharesShareIdAclObjectTypeObjectKeyDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **shareId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectKey** | [**string**] |  | defaults to undefined


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
**404** | ACL does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1SharesShareIdAclObjectTypeObjectKeyGet**
> ShareACLSchema aclsV1SharesShareIdAclObjectTypeObjectKeyGet()

 Required roles:  - can_read_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1SharesShareIdAclObjectTypeObjectKeyGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  shareId: "share_id_example",
  // string
  objectType: "object_type_example",
  // string
  objectKey: "object_key_example",
};

apiInstance.aclsV1SharesShareIdAclObjectTypeObjectKeyGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **shareId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectKey** | [**string**] |  | defaults to undefined


### Return type

**ShareACLSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of permissions |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGet**
> void aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGet()

 Required roles:  - can_read_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  shareId: "share_id_example",
  // string
  objectType: "object_type_example",
  // string
  objectKey: "object_key_example",
  // string
  permission: "permission_example",
};

apiInstance.aclsV1SharesShareIdAclObjectTypeObjectKeyPermissionGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **shareId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectKey** | [**string**] |  | defaults to undefined
 **permission** | [**string**] |  | defaults to undefined


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
**200** | Returns an empty body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | User does not have permission |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1SharesShareIdAclObjectTypeObjectKeyPost**
> ShareACLSchema aclsV1SharesShareIdAclObjectTypeObjectKeyPost(shareACLSchema)

 Required roles:  - can_write_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1SharesShareIdAclObjectTypeObjectKeyPostRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  shareId: "share_id_example",
  // string
  objectType: "object_type_example",
  // string
  objectKey: "object_key_example",
  // ShareACLSchema | body
  shareACLSchema: {
    permissions: [
      "permissions_example",
    ],
  },
};

apiInstance.aclsV1SharesShareIdAclObjectTypeObjectKeyPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shareACLSchema** | **ShareACLSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **shareId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectKey** | [**string**] |  | defaults to undefined


### Return type

**ShareACLSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created acl |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1SharesShareIdAclObjectTypeObjectKeyPut**
> ShareACLSchema aclsV1SharesShareIdAclObjectTypeObjectKeyPut(shareACLSchema)

 Required roles:  - can_write_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1SharesShareIdAclObjectTypeObjectKeyPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  shareId: "share_id_example",
  // string
  objectType: "object_type_example",
  // string
  objectKey: "object_key_example",
  // ShareACLSchema | body
  shareACLSchema: {
    permissions: [
      "permissions_example",
    ],
  },
};

apiInstance.aclsV1SharesShareIdAclObjectTypeObjectKeyPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shareACLSchema** | **ShareACLSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **shareId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectKey** | [**string**] |  | defaults to undefined


### Return type

**ShareACLSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated acl |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | ACL does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1SharesShareIdAclObjectTypePut**
> CreateACLsResultSchema aclsV1SharesShareIdAclObjectTypePut(createShareACLsSchema)

 Required roles:  - can_write_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1SharesShareIdAclObjectTypePutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  shareId: "share_id_example",
  // string
  objectType: "object_type_example",
  // CreateShareACLsSchema | body
  createShareACLsSchema: {
    objectKeys: [
      "objectKeys_example",
    ],
    permissions: [
      "permissions_example",
    ],
  },
};

apiInstance.aclsV1SharesShareIdAclObjectTypePut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createShareACLsSchema** | **CreateShareACLsSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **shareId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined


### Return type

**CreateACLsResultSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the updated objects |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1UsersUserIdAclObjectTypeObjectKeyDelete**
> void aclsV1UsersUserIdAclObjectTypeObjectKeyDelete()

 Required roles:  - can_delete_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1UsersUserIdAclObjectTypeObjectKeyDeleteRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  userId: "user_id_example",
  // string
  objectType: "object_type_example",
  // string
  objectKey: "object_key_example",
};

apiInstance.aclsV1UsersUserIdAclObjectTypeObjectKeyDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectKey** | [**string**] |  | defaults to undefined


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
**404** | ACL does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1UsersUserIdAclObjectTypeObjectKeyGet**
> UserACLSchema aclsV1UsersUserIdAclObjectTypeObjectKeyGet()

 Required roles:  - can_read_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1UsersUserIdAclObjectTypeObjectKeyGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  userId: "user_id_example",
  // string
  objectType: "object_type_example",
  // string
  objectKey: "object_key_example",
};

apiInstance.aclsV1UsersUserIdAclObjectTypeObjectKeyGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectKey** | [**string**] |  | defaults to undefined


### Return type

**UserACLSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of permissions |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGet**
> UserACLSchema aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGet()

 Required roles:  - can_read_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGetRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  userId: "user_id_example",
  // string
  objectType: "object_type_example",
  // string
  objectKey: "object_key_example",
  // string
  permission: "permission_example",
};

apiInstance.aclsV1UsersUserIdAclObjectTypeObjectKeyPermissionGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectKey** | [**string**] |  | defaults to undefined
 **permission** | [**string**] |  | defaults to undefined


### Return type

**UserACLSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a acl |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**403** | User does not have permission |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aclsV1UsersUserIdAclObjectTypeObjectKeyPut**
> UserACLSchema aclsV1UsersUserIdAclObjectTypeObjectKeyPut(userACLSchema)

 Required roles:  - can_write_acls 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AclsApi(configuration);

let body:iconik.AclsApiAclsV1UsersUserIdAclObjectTypeObjectKeyPutRequest = {
  // string
  appID: "App-ID_example",
  // string
  authToken: "Auth-Token_example",
  // string
  userId: "user_id_example",
  // string
  objectType: "object_type_example",
  // string
  objectKey: "object_key_example",
  // UserACLSchema | body
  userACLSchema: {
    permissions: [
      "permissions_example",
    ],
  },
};

apiInstance.aclsV1UsersUserIdAclObjectTypeObjectKeyPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userACLSchema** | **UserACLSchema**| body |
 **appID** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectKey** | [**string**] |  | defaults to undefined


### Return type

**UserACLSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated acl |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | ACL does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


