# iconik.MetadataApi

All URIs are relative to *https://app.iconik.io/API*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGet**](MetadataApi.md#metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGet) | **GET** /metadata/v1/assets/{asset_id}/{object_type}/{object_id}/views/{view_id}/ | Get asset metadata by object type, object ID and view ID
[**metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPut**](MetadataApi.md#metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPut) | **PUT** /metadata/v1/assets/{asset_id}/{object_type}/{object_id}/views/{view_id}/ | Edit view metadata values for sub-objects of an asset (Such as segments)
[**metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGet**](MetadataApi.md#metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGet) | **GET** /metadata/v1/assets/{asset_id}/versions/{version_id}/views/{view_id}/ | Get object metadata by object type, object ID, version ID and view ID
[**metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGet**](MetadataApi.md#metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGet) | **GET** /metadata/v1/assets/{object_type}/{object_id}/versions/{version_id}/views/{view_id}/ | Get asset metadata by object type, object ID, version ID and view ID
[**metadataV1FieldsFieldNameDelete**](MetadataApi.md#metadataV1FieldsFieldNameDelete) | **DELETE** /metadata/v1/fields/{field_name}/ | Delete a particular field by name
[**metadataV1FieldsFieldNameGet**](MetadataApi.md#metadataV1FieldsFieldNameGet) | **GET** /metadata/v1/fields/{field_name}/ | Returns a particular field by name
[**metadataV1FieldsFieldNamePatch**](MetadataApi.md#metadataV1FieldsFieldNamePatch) | **PATCH** /metadata/v1/fields/{field_name}/ | Update field by name
[**metadataV1FieldsFieldNamePut**](MetadataApi.md#metadataV1FieldsFieldNamePut) | **PUT** /metadata/v1/fields/{field_name}/ | Update field by name
[**metadataV1FieldsGet**](MetadataApi.md#metadataV1FieldsGet) | **GET** /metadata/v1/fields/ | List the fields defined in the system
[**metadataV1FieldsPost**](MetadataApi.md#metadataV1FieldsPost) | **POST** /metadata/v1/fields/ | Create a new field
[**metadataV1MappingFieldsFieldNameGet**](MetadataApi.md#metadataV1MappingFieldsFieldNameGet) | **GET** /metadata/v1/mapping/fields/{field_name}/ | Get the metadata field mapping
[**metadataV1MappingFieldsPost**](MetadataApi.md#metadataV1MappingFieldsPost) | **POST** /metadata/v1/mapping/fields/ | Create a new metadata field mapping
[**metadataV1MappingOptionsGet**](MetadataApi.md#metadataV1MappingOptionsGet) | **GET** /metadata/v1/mapping/options/ | List the metadata field mapping options
[**metadataV1ObjectTypeCategoriesGet**](MetadataApi.md#metadataV1ObjectTypeCategoriesGet) | **GET** /metadata/v1/{object_type}/categories/ | Get metadata categories
[**metadataV1ObjectTypeCategoriesNameDelete**](MetadataApi.md#metadataV1ObjectTypeCategoriesNameDelete) | **DELETE** /metadata/v1/{object_type}/categories/{name}/ | Delete metadata category by object type and category name
[**metadataV1ObjectTypeCategoriesNameGet**](MetadataApi.md#metadataV1ObjectTypeCategoriesNameGet) | **GET** /metadata/v1/{object_type}/categories/{name}/ | Get metadata category by object type and category name
[**metadataV1ObjectTypeCategoriesNamePut**](MetadataApi.md#metadataV1ObjectTypeCategoriesNamePut) | **PUT** /metadata/v1/{object_type}/categories/{name}/ | Edit metadata category for an object type
[**metadataV1ObjectTypeCategoriesNameViewsGet**](MetadataApi.md#metadataV1ObjectTypeCategoriesNameViewsGet) | **GET** /metadata/v1/{object_type}/categories/{name}/views/ | Get metadata views with field for object type and category
[**metadataV1ObjectTypeCategoriesPost**](MetadataApi.md#metadataV1ObjectTypeCategoriesPost) | **POST** /metadata/v1/{object_type}/categories/ | Add a metadata category for an object type
[**metadataV1ObjectTypeContentViewsViewIdPut**](MetadataApi.md#metadataV1ObjectTypeContentViewsViewIdPut) | **PUT** /metadata/v1/{object_type}/content/views/{view_id}/ | Edit view metadata values for collection or saved search content.
[**metadataV1ObjectTypeObjectIdGet**](MetadataApi.md#metadataV1ObjectTypeObjectIdGet) | **GET** /metadata/v1/{object_type}/{object_id}/ | Get object metadata by object type and object ID
[**metadataV1ObjectTypeObjectIdPut**](MetadataApi.md#metadataV1ObjectTypeObjectIdPut) | **PUT** /metadata/v1/{object_type}/{object_id}/ | Edit metadata values directly without a view. Admin access required.
[**metadataV1ObjectTypeObjectIdViewsViewIdGet**](MetadataApi.md#metadataV1ObjectTypeObjectIdViewsViewIdGet) | **GET** /metadata/v1/{object_type}/{object_id}/views/{view_id}/ | Get object metadata by object type, object ID and view ID
[**metadataV1ObjectTypeObjectIdViewsViewIdPut**](MetadataApi.md#metadataV1ObjectTypeObjectIdViewsViewIdPut) | **PUT** /metadata/v1/{object_type}/{object_id}/views/{view_id}/ | Edit view metadata values for a single object
[**metadataV1ObjectTypeViewsViewIdPost**](MetadataApi.md#metadataV1ObjectTypeViewsViewIdPost) | **POST** /metadata/v1/{object_type}/views/{view_id}/ | Add view metadata values for multiple objects (Assets, Collections or Segments)
[**metadataV1ObjectTypeViewsViewIdPut**](MetadataApi.md#metadataV1ObjectTypeViewsViewIdPut) | **PUT** /metadata/v1/{object_type}/views/{view_id}/ | Edit view metadata values for multiple objects (Assets, Collections or Segments)
[**metadataV1UserFieldsGet**](MetadataApi.md#metadataV1UserFieldsGet) | **GET** /metadata/v1/user/fields/ | List the fields that can be accessed by a user
[**metadataV1ViewsGet**](MetadataApi.md#metadataV1ViewsGet) | **GET** /metadata/v1/views/ | List the views defined in the system
[**metadataV1ViewsPost**](MetadataApi.md#metadataV1ViewsPost) | **POST** /metadata/v1/views/ | Create a new view
[**metadataV1ViewsViewIdDelete**](MetadataApi.md#metadataV1ViewsViewIdDelete) | **DELETE** /metadata/v1/views/{view_id}/ | Delete a particular view by id
[**metadataV1ViewsViewIdGet**](MetadataApi.md#metadataV1ViewsViewIdGet) | **GET** /metadata/v1/views/{view_id}/ | Returns a particular view by id
[**metadataV1ViewsViewIdPatch**](MetadataApi.md#metadataV1ViewsViewIdPatch) | **PATCH** /metadata/v1/views/{view_id}/ | Update view
[**metadataV1ViewsViewIdPut**](MetadataApi.md#metadataV1ViewsViewIdPut) | **PUT** /metadata/v1/views/{view_id}/ | Update view


# **metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGet**
> MetadataValuesSchema metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGet()

 Required roles:  - can_read_metadata_values 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGetRequest = {
  // string
  objectType: "object_type_example",
  // string
  assetId: "asset_id_example",
  // string
  objectId: "object_id_example",
  // string
  viewId: "view_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **viewId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataValuesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a metadata values for object and view if it exists |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Metadata values for this object and view doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPut**
> MetadataValuesSchema metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPut(metadataValuesSchema)

 Required roles:  - can_write_metadata_values 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPutRequest = {
  // string
  assetId: "asset_id_example",
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // string
  viewId: "view_id_example",
  // MetadataValuesSchema | body
  metadataValuesSchema: {
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    dateModified: new Date('1970-01-01T00:00:00.00Z'),
    jobId: "jobId_example",
    metadataValues: {},
    objectId: "objectId_example",
    objectType: "objectType_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1AssetsAssetIdObjectTypeObjectIdViewsViewIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metadataValuesSchema** | **MetadataValuesSchema**| body |
 **assetId** | [**string**] |  | defaults to undefined
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **viewId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataValuesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a created metadata values for object and view |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Metadata view doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGet**
> MetadataValuesSchema metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGet()

 Required roles:  - can_read_metadata_values 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGetRequest = {
  // string
  assetId: "asset_id_example",
  // string
  versionId: "version_id_example",
  // string
  viewId: "view_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1AssetsAssetIdVersionsVersionIdViewsViewIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **viewId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataValuesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a metadata values for object and view if it exists |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Metadata values for this object and view doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGet**
> MetadataValuesSchema metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGet()

 Required roles:  - can_read_metadata_values 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGetRequest = {
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // string
  versionId: "version_id_example",
  // string
  viewId: "view_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1AssetsObjectTypeObjectIdVersionsVersionIdViewsViewIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | defaults to undefined
 **viewId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataValuesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a metadata values for object and view if it exists |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Metadata values for this object and view doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1FieldsFieldNameDelete**
> void metadataV1FieldsFieldNameDelete()

 Required roles:  - can_delete_metadata_fields 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1FieldsFieldNameDeleteRequest = {
  // string
  fieldName: "field_name_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1FieldsFieldNameDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldName** | [**string**] |  | defaults to undefined
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
**404** | Metadata field doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1FieldsFieldNameGet**
> MetadataFieldSchema metadataV1FieldsFieldNameGet()

 Required roles:  - can_read_metadata_fields 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1FieldsFieldNameGetRequest = {
  // string
  fieldName: "field_name_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1FieldsFieldNameGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldName** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataFieldSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a field |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Metadata field doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1FieldsFieldNamePatch**
> MetadataFieldSchema metadataV1FieldsFieldNamePatch(metadataFieldSchema)

 Required roles:  - can_write_metadata_fields 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1FieldsFieldNamePatchRequest = {
  // string
  fieldName: "field_name_example",
  // MetadataFieldSchema | body
  metadataFieldSchema: {
    autoSet: true,
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    dateModified: new Date('1970-01-01T00:00:00.00Z'),
    description: "description_example",
    externalId: "externalId_example",
    fieldType: "fieldType_example",
    hideIfNotSet: true,
    isBlockField: true,
    isWarningField: true,
    label: "label_example",
    maxValue: 3.14,
    minValue: 3.14,
    multi: true,
    options: [
      {
        label: "label_example",
        value: "value_example",
      },
    ],
    readOnly: true,
    representative: true,
    required: true,
    sortable: true,
    sourceUrl: "sourceUrl_example",
    useAsFacet: true,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1FieldsFieldNamePatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metadataFieldSchema** | **MetadataFieldSchema**| body |
 **fieldName** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataFieldSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated field |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Metadata field doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1FieldsFieldNamePut**
> MetadataFieldSchema metadataV1FieldsFieldNamePut(metadataFieldSchema)

 Required roles:  - can_write_metadata_fields 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1FieldsFieldNamePutRequest = {
  // string
  fieldName: "field_name_example",
  // MetadataFieldSchema | body
  metadataFieldSchema: {
    autoSet: true,
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    dateModified: new Date('1970-01-01T00:00:00.00Z'),
    description: "description_example",
    externalId: "externalId_example",
    fieldType: "fieldType_example",
    hideIfNotSet: true,
    isBlockField: true,
    isWarningField: true,
    label: "label_example",
    maxValue: 3.14,
    minValue: 3.14,
    multi: true,
    options: [
      {
        label: "label_example",
        value: "value_example",
      },
    ],
    readOnly: true,
    representative: true,
    required: true,
    sortable: true,
    sourceUrl: "sourceUrl_example",
    useAsFacet: true,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1FieldsFieldNamePut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metadataFieldSchema** | **MetadataFieldSchema**| body |
 **fieldName** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataFieldSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated field |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Metadata field doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1FieldsGet**
> MetadataFieldsSchema metadataV1FieldsGet()

 Required roles:  - can_read_metadata_fields 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1FieldsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (Default 500) (optional)
  perPage: 1,
  // string | If your request returns per_page entries, send the last value of \"name\" to fetch next page (optional)
  lastFieldName: "last_field_name_example",
  // string | A comma separated list of fieldnames For example - first_name,last_name,salary (optional)
  filter: "filter_example",
};

apiInstance.metadataV1FieldsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page (Default 500) | (optional) defaults to undefined
 **lastFieldName** | [**string**] | If your request returns per_page entries, send the last value of \&quot;name\&quot; to fetch next page | (optional) defaults to undefined
 **filter** | [**string**] | A comma separated list of fieldnames For example - first_name,last_name,salary | (optional) defaults to undefined


### Return type

**MetadataFieldsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of metadata entities |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1FieldsPost**
> MetadataFieldSchema metadataV1FieldsPost(metadataFieldCreateSchema)

 Required roles:  - can_write_metadata_fields 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1FieldsPostRequest = {
  // MetadataFieldCreateSchema | body
  metadataFieldCreateSchema: {
    autoSet: true,
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    dateModified: new Date('1970-01-01T00:00:00.00Z'),
    description: "description_example",
    externalId: "externalId_example",
    fieldType: "fieldType_example",
    hideIfNotSet: true,
    isBlockField: true,
    isWarningField: true,
    label: "label_example",
    maxValue: 3.14,
    minValue: 3.14,
    multi: true,
    name: "name_example",
    options: [
      {
        label: "label_example",
        value: "value_example",
      },
    ],
    readOnly: true,
    representative: true,
    required: true,
    sortable: true,
    sourceUrl: "sourceUrl_example",
    useAsFacet: true,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1FieldsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metadataFieldCreateSchema** | **MetadataFieldCreateSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataFieldSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created field |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1MappingFieldsFieldNameGet**
> MetadataFieldMappingSchema metadataV1MappingFieldsFieldNameGet()

 Required roles:  - can_read_metadata_fields 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1MappingFieldsFieldNameGetRequest = {
  // string
  fieldName: "field_name_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1MappingFieldsFieldNameGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldName** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataFieldMappingSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the metadata field mapping |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1MappingFieldsPost**
> MetadataFieldMappingSchema metadataV1MappingFieldsPost(metadataFieldMappingSchema)

 Required roles:  - can_read_metadata_fields 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1MappingFieldsPostRequest = {
  // MetadataFieldMappingSchema | body
  metadataFieldMappingSchema: {
    mappedFieldName: "mappedFieldName_example",
    name: "name_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1MappingFieldsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metadataFieldMappingSchema** | **MetadataFieldMappingSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataFieldMappingSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created field mapping |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1MappingOptionsGet**
> MetadataFieldMappingOptionsSchema metadataV1MappingOptionsGet()

 Required roles:  - can_read_metadata_fields 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1MappingOptionsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1MappingOptionsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataFieldMappingOptionsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of metadata field mapping options |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1ObjectTypeCategoriesGet**
> MetadataCategoriesSchema metadataV1ObjectTypeCategoriesGet()

 Required roles:  - can_read_metadata_categories 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1ObjectTypeCategoriesGetRequest = {
  // string
  objectType: "object_type_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1ObjectTypeCategoriesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataCategoriesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns metadata categories for an object |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1ObjectTypeCategoriesNameDelete**
> void metadataV1ObjectTypeCategoriesNameDelete()

 Required roles:  - can_delete_metadata_categories 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1ObjectTypeCategoriesNameDeleteRequest = {
  // string
  objectType: "object_type_example",
  // string
  name: "name_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1ObjectTypeCategoriesNameDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | [**string**] |  | defaults to undefined
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
**404** | Metadata category by object type and category name doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1ObjectTypeCategoriesNameGet**
> MetadataCategorySchema metadataV1ObjectTypeCategoriesNameGet()

 Required roles:  - can_read_metadata_categories 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1ObjectTypeCategoriesNameGetRequest = {
  // string
  objectType: "object_type_example",
  // string
  name: "name_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1ObjectTypeCategoriesNameGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | [**string**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataCategorySchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns metadata category by object type and category name |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Metadata category by object type and category name doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1ObjectTypeCategoriesNamePut**
> MetadataCategorySchema metadataV1ObjectTypeCategoriesNamePut(metadataCategorySchema)

 Required roles:  - can_write_metadata_categories 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1ObjectTypeCategoriesNamePutRequest = {
  // string
  objectType: "object_type_example",
  // string
  name: "name_example",
  // MetadataCategorySchema | body
  metadataCategorySchema: {
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    dateModified: new Date('1970-01-01T00:00:00.00Z'),
    label: "label_example",
    name: "name_example",
    viewIds: [
      "viewIds_example",
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1ObjectTypeCategoriesNamePut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metadataCategorySchema** | **MetadataCategorySchema**| body |
 **objectType** | [**string**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataCategorySchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a metadata category |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Metadata category for this object type doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1ObjectTypeCategoriesNameViewsGet**
> MetadataCategorySchema metadataV1ObjectTypeCategoriesNameViewsGet()

 Required roles:  - can_read_metadata_categories 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1ObjectTypeCategoriesNameViewsGetRequest = {
  // string
  objectType: "object_type_example",
  // string
  name: "name_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean (optional)
  extOptions: true,
  // boolean (optional)
  writableOnly: true,
};

apiInstance.metadataV1ObjectTypeCategoriesNameViewsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | [**string**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **extOptions** | [**boolean**] |  | (optional) defaults to undefined
 **writableOnly** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**MetadataCategorySchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns metadata views with field for object type and category |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Metadata views with field for object type and category doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1ObjectTypeCategoriesPost**
> MetadataCategorySchema metadataV1ObjectTypeCategoriesPost(metadataCategorySchema)

 Required roles:  - can_write_metadata_categories 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1ObjectTypeCategoriesPostRequest = {
  // string
  objectType: "object_type_example",
  // MetadataCategorySchema | body
  metadataCategorySchema: {
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    dateModified: new Date('1970-01-01T00:00:00.00Z'),
    label: "label_example",
    name: "name_example",
    viewIds: [
      "viewIds_example",
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1ObjectTypeCategoriesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metadataCategorySchema** | **MetadataCategorySchema**| body |
 **objectType** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataCategorySchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a metadata category |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**409** | A category with the same name and object_type already exists |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1ObjectTypeContentViewsViewIdPut**
> void metadataV1ObjectTypeContentViewsViewIdPut(collectionMetadataValuesBatchSchema)

 Required roles:  - can_write_metadata_values 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1ObjectTypeContentViewsViewIdPutRequest = {
  // string
  objectType: "object_type_example",
  // string
  viewId: "view_id_example",
  // CollectionMetadataValuesBatchSchema | body
  collectionMetadataValuesBatchSchema: {
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    dateModified: new Date('1970-01-01T00:00:00.00Z'),
    includeAssets: true,
    includeCollections: true,
    metadataValues: {},
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

apiInstance.metadataV1ObjectTypeContentViewsViewIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionMetadataValuesBatchSchema** | **CollectionMetadataValuesBatchSchema**| body |
 **objectType** | [**string**] |  | defaults to undefined
 **viewId** | [**string**] |  | defaults to undefined
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
**404** | Metadata view doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1ObjectTypeObjectIdGet**
> MetadataValuesSchema metadataV1ObjectTypeObjectIdGet()

This endpoint is available only for admins

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1ObjectTypeObjectIdGetRequest = {
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean | Filter out metadata field values, for deleted fields (optional)
  includeValuesForDeletedFields: false,
};

apiInstance.metadataV1ObjectTypeObjectIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **includeValuesForDeletedFields** | [**boolean**] | Filter out metadata field values, for deleted fields | (optional) defaults to false


### Return type

**MetadataValuesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a metadata values for object and view if it exists |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Metadata values for this object don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1ObjectTypeObjectIdPut**
> MetadataValuesSchema metadataV1ObjectTypeObjectIdPut(metadataValuesSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1ObjectTypeObjectIdPutRequest = {
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // MetadataValuesSchema | body
  metadataValuesSchema: {
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    dateModified: new Date('1970-01-01T00:00:00.00Z'),
    jobId: "jobId_example",
    metadataValues: {},
    objectId: "objectId_example",
    objectType: "objectType_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1ObjectTypeObjectIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metadataValuesSchema** | **MetadataValuesSchema**| body |
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataValuesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a created metadata values for object and view |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Metadata view doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1ObjectTypeObjectIdViewsViewIdGet**
> MetadataValuesSchema metadataV1ObjectTypeObjectIdViewsViewIdGet()

 Required roles:  - can_read_metadata_values 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1ObjectTypeObjectIdViewsViewIdGetRequest = {
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // string
  viewId: "view_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1ObjectTypeObjectIdViewsViewIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **viewId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataValuesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a metadata values for object and view if it exists |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Metadata values for this object and view doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1ObjectTypeObjectIdViewsViewIdPut**
> MetadataValuesSchema metadataV1ObjectTypeObjectIdViewsViewIdPut(metadataValuesSchema)

 Required roles:  - can_write_metadata_values 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1ObjectTypeObjectIdViewsViewIdPutRequest = {
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // string
  viewId: "view_id_example",
  // MetadataValuesSchema | body
  metadataValuesSchema: {
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    dateModified: new Date('1970-01-01T00:00:00.00Z'),
    jobId: "jobId_example",
    metadataValues: {},
    objectId: "objectId_example",
    objectType: "objectType_example",
    versionId: "versionId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1ObjectTypeObjectIdViewsViewIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metadataValuesSchema** | **MetadataValuesSchema**| body |
 **objectType** | [**string**] |  | defaults to undefined
 **objectId** | [**string**] |  | defaults to undefined
 **viewId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataValuesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a created metadata values for object and view |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Metadata view doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1ObjectTypeViewsViewIdPost**
> void metadataV1ObjectTypeViewsViewIdPost(createMetadataValuesBatchSchema)

 Required roles:  - can_write_metadata_values 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1ObjectTypeViewsViewIdPostRequest = {
  // string
  objectType: "object_type_example",
  // string
  viewId: "view_id_example",
  // CreateMetadataValuesBatchSchema | body
  createMetadataValuesBatchSchema: {
    assetId: "assetId_example",
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    dateModified: new Date('1970-01-01T00:00:00.00Z'),
    metadataValuesObjectIdMapping: [
      {
        id: "id_example",
        metadataValues: {},
      },
    ],
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

apiInstance.metadataV1ObjectTypeViewsViewIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createMetadataValuesBatchSchema** | **CreateMetadataValuesBatchSchema**| body |
 **objectType** | [**string**] |  | defaults to undefined
 **viewId** | [**string**] |  | defaults to undefined
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
**202** | Batch metadata update was successfully scheduled |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Metadata view doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1ObjectTypeViewsViewIdPut**
> void metadataV1ObjectTypeViewsViewIdPut(metadataValuesBatchSchema)

 Required roles:  - can_write_metadata_values 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1ObjectTypeViewsViewIdPutRequest = {
  // string
  objectType: "object_type_example",
  // string
  viewId: "view_id_example",
  // MetadataValuesBatchSchema | body
  metadataValuesBatchSchema: {
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    dateModified: new Date('1970-01-01T00:00:00.00Z'),
    metadataValues: {},
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

apiInstance.metadataV1ObjectTypeViewsViewIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metadataValuesBatchSchema** | **MetadataValuesBatchSchema**| body |
 **objectType** | [**string**] |  | defaults to undefined
 **viewId** | [**string**] |  | defaults to undefined
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
**202** | Batch metadata update was successfully scheduled |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Metadata view doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1UserFieldsGet**
> MetadataFieldsSchema metadataV1UserFieldsGet()

 Required roles:  - can_read_metadata_fields 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1UserFieldsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1UserFieldsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataFieldsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of metadata fields |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1ViewsGet**
> MetadataViewsSchema metadataV1ViewsGet()

 Required roles:  - can_read_metadata_views 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1ViewsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1ViewsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataViewsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of metadata views |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1ViewsPost**
> MetadataViewSchema metadataV1ViewsPost(metadataViewInputSchema)

 Required roles:  - can_write_metadata_views 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1ViewsPostRequest = {
  // MetadataViewInputSchema | body
  metadataViewInputSchema: {
    description: "description_example",
    name: "name_example",
    viewFields: [
      {
        autoSet: true,
        hideIfNotSet: true,
        label: "label_example",
        name: "name_example",
        options: [
          {
            label: "label_example",
            value: "value_example",
          },
        ],
        readOnly: true,
        required: true,
        sourceUrl: "sourceUrl_example",
      },
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1ViewsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metadataViewInputSchema** | **MetadataViewInputSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataViewSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created view |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1ViewsViewIdDelete**
> void metadataV1ViewsViewIdDelete()

 Required roles:  - can_delete_metadata_views 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1ViewsViewIdDeleteRequest = {
  // string
  viewId: "view_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1ViewsViewIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewId** | [**string**] |  | defaults to undefined
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
**404** | Metadata view doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1ViewsViewIdGet**
> MetadataViewSchema metadataV1ViewsViewIdGet()

 Required roles:  - can_read_metadata_views 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1ViewsViewIdGetRequest = {
  // string
  viewId: "view_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // boolean (optional)
  mergeFields: true,
};

apiInstance.metadataV1ViewsViewIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **mergeFields** | [**boolean**] |  | (optional) defaults to true


### Return type

**MetadataViewSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a view |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Metadata view doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1ViewsViewIdPatch**
> MetadataViewSchema metadataV1ViewsViewIdPatch(metadataViewInputSchema)

 Required roles:  - can_write_metadata_views 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1ViewsViewIdPatchRequest = {
  // string
  viewId: "view_id_example",
  // MetadataViewInputSchema | body
  metadataViewInputSchema: {
    description: "description_example",
    name: "name_example",
    viewFields: [
      {
        autoSet: true,
        hideIfNotSet: true,
        label: "label_example",
        name: "name_example",
        options: [
          {
            label: "label_example",
            value: "value_example",
          },
        ],
        readOnly: true,
        required: true,
        sourceUrl: "sourceUrl_example",
      },
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1ViewsViewIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metadataViewInputSchema** | **MetadataViewInputSchema**| body |
 **viewId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataViewSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated view |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Metadata view doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metadataV1ViewsViewIdPut**
> MetadataViewSchema metadataV1ViewsViewIdPut(metadataViewInputSchema)

 Required roles:  - can_write_metadata_views 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.MetadataApi(configuration);

let body:iconik.MetadataApiMetadataV1ViewsViewIdPutRequest = {
  // string
  viewId: "view_id_example",
  // MetadataViewInputSchema | body
  metadataViewInputSchema: {
    description: "description_example",
    name: "name_example",
    viewFields: [
      {
        autoSet: true,
        hideIfNotSet: true,
        label: "label_example",
        name: "name_example",
        options: [
          {
            label: "label_example",
            value: "value_example",
          },
        ],
        readOnly: true,
        required: true,
        sourceUrl: "sourceUrl_example",
      },
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.metadataV1ViewsViewIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metadataViewInputSchema** | **MetadataViewInputSchema**| body |
 **viewId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetadataViewSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated view |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Metadata view doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


