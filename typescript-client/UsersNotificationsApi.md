# iconik.UsersNotificationsApi

All URIs are relative to *https://app.iconik.io/API*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersNotificationsV1NotificationSettingsGet**](UsersNotificationsApi.md#usersNotificationsV1NotificationSettingsGet) | **GET** /users-notifications/v1/notification_settings/ | Returns a particular notification_setting by id
[**usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolGet**](UsersNotificationsApi.md#usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolGet) | **GET** /users-notifications/v1/notification_settings/{object_type}/{sub_object_type}/{event_type}/{protocol}/ | Returns a particular notification_setting by id
[**usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolPut**](UsersNotificationsApi.md#usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolPut) | **PUT** /users-notifications/v1/notification_settings/{object_type}/{sub_object_type}/{event_type}/{protocol}/ | Create a new notification_setting
[**usersNotificationsV1NotificationsAllReadPut**](UsersNotificationsApi.md#usersNotificationsV1NotificationsAllReadPut) | **PUT** /users-notifications/v1/notifications/all/read/ | Update notification
[**usersNotificationsV1NotificationsGet**](UsersNotificationsApi.md#usersNotificationsV1NotificationsGet) | **GET** /users-notifications/v1/notifications/ | Returns a list of notifications
[**usersNotificationsV1NotificationsNotificationIdDelete**](UsersNotificationsApi.md#usersNotificationsV1NotificationsNotificationIdDelete) | **DELETE** /users-notifications/v1/notifications/{notification_id}/ | Delete a particular notification by id
[**usersNotificationsV1NotificationsNotificationIdGet**](UsersNotificationsApi.md#usersNotificationsV1NotificationsNotificationIdGet) | **GET** /users-notifications/v1/notifications/{notification_id}/ | Returns a particular notification by id
[**usersNotificationsV1NotificationsPost**](UsersNotificationsApi.md#usersNotificationsV1NotificationsPost) | **POST** /users-notifications/v1/notifications/ | Create a new notification
[**usersNotificationsV1NotificationsSystemPost**](UsersNotificationsApi.md#usersNotificationsV1NotificationsSystemPost) | **POST** /users-notifications/v1/notifications/system/ | Create a new system notification
[**usersNotificationsV1ObjectTypeObjectIdSubscriptionsAllDelete**](UsersNotificationsApi.md#usersNotificationsV1ObjectTypeObjectIdSubscriptionsAllDelete) | **DELETE** /users-notifications/v1/{object_type}/{object_id}/subscriptions/all/ | Delete all user subscriptions for a specific object_type and object_id
[**usersNotificationsV1ObjectTypeObjectIdSubscriptionsGet**](UsersNotificationsApi.md#usersNotificationsV1ObjectTypeObjectIdSubscriptionsGet) | **GET** /users-notifications/v1/{object_type}/{object_id}/subscriptions/ | Returns user subscriptions for a specific object_type and object_id
[**usersNotificationsV1SubscriptionsGet**](UsersNotificationsApi.md#usersNotificationsV1SubscriptionsGet) | **GET** /users-notifications/v1/subscriptions/ | Returns all user subscriptions
[**usersNotificationsV1SubscriptionsPost**](UsersNotificationsApi.md#usersNotificationsV1SubscriptionsPost) | **POST** /users-notifications/v1/subscriptions/ | Create a new subscription
[**usersNotificationsV1SubscriptionsSubscriptionIdDelete**](UsersNotificationsApi.md#usersNotificationsV1SubscriptionsSubscriptionIdDelete) | **DELETE** /users-notifications/v1/subscriptions/{subscription_id}/ | Delete a particular subscription by id
[**usersNotificationsV1SubscriptionsSubscriptionIdGet**](UsersNotificationsApi.md#usersNotificationsV1SubscriptionsSubscriptionIdGet) | **GET** /users-notifications/v1/subscriptions/{subscription_id}/ | Returns a particular subscription by id


# **usersNotificationsV1NotificationSettingsGet**
> NotificationSettingsSchema usersNotificationsV1NotificationSettingsGet()

 Required roles:  - can_read_notification_settings 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersNotificationsApi(configuration);

let body:iconik.UsersNotificationsApiUsersNotificationsV1NotificationSettingsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last file set on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.usersNotificationsV1NotificationSettingsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last file set on previous page | (optional) defaults to undefined


### Return type

**NotificationSettingsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a notification_setting |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Subscription does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolGet**
> NotificationSettingSchema usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolGet()

 Required roles:  - can_read_notification_settings 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersNotificationsApi(configuration);

let body:iconik.UsersNotificationsApiUsersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolGetRequest = {
  // string
  objectType: "object_type_example",
  // string
  subObjectType: "sub_object_type_example",
  // string
  eventType: "event_type_example",
  // string
  protocol: "protocol_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | [**string**] |  | defaults to undefined
 **subObjectType** | [**string**] |  | defaults to undefined
 **eventType** | [**string**] |  | defaults to undefined
 **protocol** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**NotificationSettingSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a notification_setting |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | NotificationSetting does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolPut**
> NotificationSettingSchema usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolPut(notificationSettingSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersNotificationsApi(configuration);

let body:iconik.UsersNotificationsApiUsersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolPutRequest = {
  // string
  objectType: "object_type_example",
  // string
  subObjectType: "sub_object_type_example",
  // string
  eventType: "event_type_example",
  // string
  protocol: "protocol_example",
  // NotificationSettingSchema | body
  notificationSettingSchema: {
    enabled: true,
    settings: {},
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersNotificationsV1NotificationSettingsObjectTypeSubObjectTypeEventTypeProtocolPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationSettingSchema** | **NotificationSettingSchema**| body |
 **objectType** | [**string**] |  | defaults to undefined
 **subObjectType** | [**string**] |  | defaults to undefined
 **eventType** | [**string**] |  | defaults to undefined
 **protocol** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**NotificationSettingSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created notification_setting |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersNotificationsV1NotificationsAllReadPut**
> void usersNotificationsV1NotificationsAllReadPut()

 Required roles:  - can_read_notifications 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersNotificationsApi(configuration);

let body:iconik.UsersNotificationsApiUsersNotificationsV1NotificationsAllReadPutRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersNotificationsV1NotificationsAllReadPut(body).then((data:any) => {
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
**200** | Without body |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersNotificationsV1NotificationsGet**
> NotificationsSchema usersNotificationsV1NotificationsGet()

 Required roles:  - can_read_notifications 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersNotificationsApi(configuration);

let body:iconik.UsersNotificationsApiUsersNotificationsV1NotificationsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last file set on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.usersNotificationsV1NotificationsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 10
 **lastId** | [**string**] | ID of a last file set on previous page | (optional) defaults to undefined


### Return type

**NotificationsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a notification |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Notification does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersNotificationsV1NotificationsNotificationIdDelete**
> void usersNotificationsV1NotificationsNotificationIdDelete()

 Required roles:  - can_delete_notifications 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersNotificationsApi(configuration);

let body:iconik.UsersNotificationsApiUsersNotificationsV1NotificationsNotificationIdDeleteRequest = {
  // string
  notificationId: "notification_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersNotificationsV1NotificationsNotificationIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationId** | [**string**] |  | defaults to undefined
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
**404** | Notification does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersNotificationsV1NotificationsNotificationIdGet**
> NotificationSchema usersNotificationsV1NotificationsNotificationIdGet()

 Required roles:  - can_read_notifications 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersNotificationsApi(configuration);

let body:iconik.UsersNotificationsApiUsersNotificationsV1NotificationsNotificationIdGetRequest = {
  // string
  notificationId: "notification_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersNotificationsV1NotificationsNotificationIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**NotificationSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a notification |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Notification does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersNotificationsV1NotificationsPost**
> NotificationSchema usersNotificationsV1NotificationsPost(notificationSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersNotificationsApi(configuration);

let body:iconik.UsersNotificationsApiUsersNotificationsV1NotificationsPostRequest = {
  // NotificationSchema | body
  notificationSchema: {
    context: {},
    eventType: "eventType_example",
    excludeUsers: [
      "excludeUsers_example",
    ],
    messageLong: "messageLong_example",
    messageShort: "messageShort_example",
    objectId: "objectId_example",
    objectType: "objectType_example",
    recipientId: "recipientId_example",
    senderId: "senderId_example",
    shareId: "shareId_example",
    shareUserId: "shareUserId_example",
    status: "QUEUED",
    subObjectId: "subObjectId_example",
    subObjectType: "subObjectType_example",
    userId: "userId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersNotificationsV1NotificationsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationSchema** | **NotificationSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**NotificationSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created notification |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersNotificationsV1NotificationsSystemPost**
> NotificationSchema usersNotificationsV1NotificationsSystemPost(systemNotificationSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersNotificationsApi(configuration);

let body:iconik.UsersNotificationsApiUsersNotificationsV1NotificationsSystemPostRequest = {
  // SystemNotificationSchema | body
  systemNotificationSchema: {
    context: {},
    eventType: "eventType_example",
    excludeUsers: [
      "excludeUsers_example",
    ],
    messageLong: "messageLong_example",
    messageShort: "messageShort_example",
    objectId: "objectId_example",
    objectType: "objectType_example",
    recipientId: "recipientId_example",
    senderId: "senderId_example",
    shareId: "shareId_example",
    shareUserId: "shareUserId_example",
    status: "QUEUED",
    subObjectId: "subObjectId_example",
    subObjectType: "subObjectType_example",
    systemDomainId: "systemDomainId_example",
    userId: "userId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersNotificationsV1NotificationsSystemPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemNotificationSchema** | **SystemNotificationSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**NotificationSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created notification |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersNotificationsV1ObjectTypeObjectIdSubscriptionsAllDelete**
> SubscriptionSchema usersNotificationsV1ObjectTypeObjectIdSubscriptionsAllDelete()

 Required roles:  - can_read_subscriptions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersNotificationsApi(configuration);

let body:iconik.UsersNotificationsApiUsersNotificationsV1ObjectTypeObjectIdSubscriptionsAllDeleteRequest = {
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersNotificationsV1ObjectTypeObjectIdSubscriptionsAllDelete(body).then((data:any) => {
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


### Return type

**SubscriptionSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a subscription |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Subscription does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersNotificationsV1ObjectTypeObjectIdSubscriptionsGet**
> SubscriptionsSchema usersNotificationsV1ObjectTypeObjectIdSubscriptionsGet()

 Required roles:  - can_read_subscriptions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersNotificationsApi(configuration);

let body:iconik.UsersNotificationsApiUsersNotificationsV1ObjectTypeObjectIdSubscriptionsGetRequest = {
  // string
  objectType: "object_type_example",
  // string
  objectId: "object_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersNotificationsV1ObjectTypeObjectIdSubscriptionsGet(body).then((data:any) => {
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


### Return type

**SubscriptionsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of subscriptions |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Subscription does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersNotificationsV1SubscriptionsGet**
> SubscriptionSchema usersNotificationsV1SubscriptionsGet()

 Required roles:  - can_read_subscriptions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersNotificationsApi(configuration);

let body:iconik.UsersNotificationsApiUsersNotificationsV1SubscriptionsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersNotificationsV1SubscriptionsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a subscription |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Subscription does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersNotificationsV1SubscriptionsPost**
> SubscriptionSchema usersNotificationsV1SubscriptionsPost(subscriptionSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersNotificationsApi(configuration);

let body:iconik.UsersNotificationsApiUsersNotificationsV1SubscriptionsPostRequest = {
  // SubscriptionSchema | body
  subscriptionSchema: {
    eventType: "eventType_example",
    objectId: "objectId_example",
    objectType: "objectType_example",
    subObjectId: "subObjectId_example",
    subObjectType: "subObjectType_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersNotificationsV1SubscriptionsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionSchema** | **SubscriptionSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created subscription |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersNotificationsV1SubscriptionsSubscriptionIdDelete**
> void usersNotificationsV1SubscriptionsSubscriptionIdDelete()

 Required roles:  - can_write_subscriptions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersNotificationsApi(configuration);

let body:iconik.UsersNotificationsApiUsersNotificationsV1SubscriptionsSubscriptionIdDeleteRequest = {
  // string
  subscriptionId: "subscription_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersNotificationsV1SubscriptionsSubscriptionIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | [**string**] |  | defaults to undefined
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
**404** | Subscription does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersNotificationsV1SubscriptionsSubscriptionIdGet**
> SubscriptionSchema usersNotificationsV1SubscriptionsSubscriptionIdGet()

 Required roles:  - can_read_subscriptions 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.UsersNotificationsApi(configuration);

let body:iconik.UsersNotificationsApiUsersNotificationsV1SubscriptionsSubscriptionIdGetRequest = {
  // string
  subscriptionId: "subscription_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.usersNotificationsV1SubscriptionsSubscriptionIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a subscription |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Subscription does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


