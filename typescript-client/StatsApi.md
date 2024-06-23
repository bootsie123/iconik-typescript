# iconik.StatsApi

All URIs are relative to *https://app.iconik.io/API*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statsV1AssetsByPeriodGet**](StatsApi.md#statsV1AssetsByPeriodGet) | **GET** /stats/v1/assets/by/{period}/ | Returns all asset usage
[**statsV1AssetsPost**](StatsApi.md#statsV1AssetsPost) | **POST** /stats/v1/assets/ | Sets asset usage.
[**statsV1BillingChargesChargeIdReceiptUrlGet**](StatsApi.md#statsV1BillingChargesChargeIdReceiptUrlGet) | **GET** /stats/v1/billing/charges/{charge_id}/receipt_url/ | Returns billing receipt
[**statsV1BillingCreditsPost**](StatsApi.md#statsV1BillingCreditsPost) | **POST** /stats/v1/billing/credits/ | Add credits to an account
[**statsV1BillingCreditsPriceGet**](StatsApi.md#statsV1BillingCreditsPriceGet) | **GET** /stats/v1/billing/credits/price/ | Checks the total price that needs to be paid including VAT if it\&#39;s needed
[**statsV1BillingCreditsVerifyPost**](StatsApi.md#statsV1BillingCreditsVerifyPost) | **POST** /stats/v1/billing/credits/verify/ | Verify status of add credits to an account
[**statsV1BillingCustomerCardDelete**](StatsApi.md#statsV1BillingCustomerCardDelete) | **DELETE** /stats/v1/billing/customer/card/ | Creates billing customer card
[**statsV1BillingCustomerCardPost**](StatsApi.md#statsV1BillingCustomerCardPost) | **POST** /stats/v1/billing/customer/card/ | Creates billing customer card
[**statsV1BillingCustomerGet**](StatsApi.md#statsV1BillingCustomerGet) | **GET** /stats/v1/billing/customer/ | Returns billing customer
[**statsV1BillingCustomerPost**](StatsApi.md#statsV1BillingCustomerPost) | **POST** /stats/v1/billing/customer/ | Updates billing customer
[**statsV1BillingGet**](StatsApi.md#statsV1BillingGet) | **GET** /stats/v1/billing/ | Returns billing info
[**statsV1BillingInvoicesGet**](StatsApi.md#statsV1BillingInvoicesGet) | **GET** /stats/v1/billing/invoices/ | Returns billing invoices
[**statsV1BillingPost**](StatsApi.md#statsV1BillingPost) | **POST** /stats/v1/billing/ | Updates Billing (Requires super admin access).
[**statsV1BillingPriceListsGet**](StatsApi.md#statsV1BillingPriceListsGet) | **GET** /stats/v1/billing/price_lists/ | Get All Price Lists
[**statsV1BillingPriceListsNameCurrencyDelete**](StatsApi.md#statsV1BillingPriceListsNameCurrencyDelete) | **DELETE** /stats/v1/billing/price_lists/{name}/{currency}/ | Delete a Price list
[**statsV1BillingPriceListsNameCurrencyGet**](StatsApi.md#statsV1BillingPriceListsNameCurrencyGet) | **GET** /stats/v1/billing/price_lists/{name}/{currency}/ | Get a Price List
[**statsV1BillingPriceListsPut**](StatsApi.md#statsV1BillingPriceListsPut) | **PUT** /stats/v1/billing/price_lists/ | Creates or updates a Price List
[**statsV1BillingRecipientsGet**](StatsApi.md#statsV1BillingRecipientsGet) | **GET** /stats/v1/billing/recipients/ | Updates Billing Recipients
[**statsV1BillingRecipientsPut**](StatsApi.md#statsV1BillingRecipientsPut) | **PUT** /stats/v1/billing/recipients/ | Updates Billing Recipients
[**statsV1BillingSettingsGet**](StatsApi.md#statsV1BillingSettingsGet) | **GET** /stats/v1/billing/settings/ | Updates Billing Settings
[**statsV1BillingSettingsPut**](StatsApi.md#statsV1BillingSettingsPut) | **PUT** /stats/v1/billing/settings/ | Updates Billing Settings
[**statsV1BillingStatusGet**](StatsApi.md#statsV1BillingStatusGet) | **GET** /stats/v1/billing/status/ | Returns billing status
[**statsV1BillingSystemDomainIdBillingIdDelete**](StatsApi.md#statsV1BillingSystemDomainIdBillingIdDelete) | **DELETE** /stats/v1/billing/{system_domain_id}/{billing_id}/ | Delete billing record (Requires super admin access).
[**statsV1CollectionsByPeriodGet**](StatsApi.md#statsV1CollectionsByPeriodGet) | **GET** /stats/v1/collections/by/{period}/ | Returns all collection usage
[**statsV1IdObjectIdInfoGet**](StatsApi.md#statsV1IdObjectIdInfoGet) | **GET** /stats/v1/id/{object_id}/info/ | Internal endpoint to convert ID to system domain
[**statsV1OrdwayBillingCustomerGet**](StatsApi.md#statsV1OrdwayBillingCustomerGet) | **GET** /stats/v1/ordway/billing/customer/ | Returns billing customer
[**statsV1OrdwayBillingGet**](StatsApi.md#statsV1OrdwayBillingGet) | **GET** /stats/v1/ordway/billing/ | Returns billing info
[**statsV1OrdwayBillingInvoicesGet**](StatsApi.md#statsV1OrdwayBillingInvoicesGet) | **GET** /stats/v1/ordway/billing/invoices/ | Returns billing invoices
[**statsV1StorageAccessByPeriodGet**](StatsApi.md#statsV1StorageAccessByPeriodGet) | **GET** /stats/v1/storage/access/by/{period}/ | Returns storage_access for all storages
[**statsV1StorageUsageByPeriodGet**](StatsApi.md#statsV1StorageUsageByPeriodGet) | **GET** /stats/v1/storage/usage/by/{period}/ | Returns storage_usage for all storages
[**statsV1SystemLogsRecipientsGet**](StatsApi.md#statsV1SystemLogsRecipientsGet) | **GET** /stats/v1/system/logs/recipients/ | Get logs recipients settings
[**statsV1SystemLogsRecipientsLogsRecipientIdDelete**](StatsApi.md#statsV1SystemLogsRecipientsLogsRecipientIdDelete) | **DELETE** /stats/v1/system/logs/recipients/{logs_recipient_id}/ | Delete logs recipient settings
[**statsV1SystemLogsRecipientsLogsRecipientIdGet**](StatsApi.md#statsV1SystemLogsRecipientsLogsRecipientIdGet) | **GET** /stats/v1/system/logs/recipients/{logs_recipient_id}/ | Get settings of a logs recipient
[**statsV1SystemLogsRecipientsLogsRecipientIdPatch**](StatsApi.md#statsV1SystemLogsRecipientsLogsRecipientIdPatch) | **PATCH** /stats/v1/system/logs/recipients/{logs_recipient_id}/ | Change logs recipient settings
[**statsV1SystemLogsRecipientsLogsRecipientIdPost**](StatsApi.md#statsV1SystemLogsRecipientsLogsRecipientIdPost) | **POST** /stats/v1/system/logs/recipients/{logs_recipient_id}/ | Test logs recipient connection
[**statsV1SystemLogsRecipientsLogsRecipientIdPut**](StatsApi.md#statsV1SystemLogsRecipientsLogsRecipientIdPut) | **PUT** /stats/v1/system/logs/recipients/{logs_recipient_id}/ | Change logs recipient settings
[**statsV1SystemLogsRecipientsPost**](StatsApi.md#statsV1SystemLogsRecipientsPost) | **POST** /stats/v1/system/logs/recipients/ | Create logs recipient settings
[**statsV1TranscoderUsageByPeriodGet**](StatsApi.md#statsV1TranscoderUsageByPeriodGet) | **GET** /stats/v1/transcoder/usage/by/{period}/ | Returns transcoder_usage for all transcoders
[**statsV1UserAuditByPeriodGet**](StatsApi.md#statsV1UserAuditByPeriodGet) | **GET** /stats/v1/user/audit/by/{period}/ | Returns all audit


# **statsV1AssetsByPeriodGet**
> AssetUsageSchema statsV1AssetsByPeriodGet()

 Required roles:  - can_read_stats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1AssetsByPeriodGetRequest = {
  // string | Period of stats (month or day)
  period: "period_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string | Filter by from_date (optional)
  fromDate: "from_date_example",
  // string | Filter by to_date (optional)
  toDate: "to_date_example",
};

apiInstance.statsV1AssetsByPeriodGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **period** | [**string**] | Period of stats (month or day) | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **fromDate** | [**string**] | Filter by from_date | (optional) defaults to undefined
 **toDate** | [**string**] | Filter by to_date | (optional) defaults to undefined


### Return type

**AssetUsageSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns asset usage |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1AssetsPost**
> AssetUsageSchema statsV1AssetsPost(assetUsageSchema)

<br/>system_domain_id will be automatically added when<br/>posting to this end point.

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1AssetsPostRequest = {
  // AssetUsageSchema | body
  assetUsageSchema: {
    assetId: "assetId_example",
    assetType: "ASSET",
    date: new Date('1970-01-01').toISOString().split('T')[0];,
    metadata: "metadata_example",
    operationSource: "COLLECTION",
    operationType: "VIEW",
    systemName: "systemName_example",
    time: new Date('1970-01-01T00:00:00.00Z'),
    userId: "userId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1AssetsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetUsageSchema** | **AssetUsageSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AssetUsageSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Usage entered |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingChargesChargeIdReceiptUrlGet**
> BillingReceiptSchema statsV1BillingChargesChargeIdReceiptUrlGet()

 Required roles:  - can_read_billing 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingChargesChargeIdReceiptUrlGetRequest = {
  // string
  chargeId: "charge_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1BillingChargesChargeIdReceiptUrlGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chargeId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**BillingReceiptSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Billing receipts |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingCreditsPost**
> BillingCreditsSchema statsV1BillingCreditsPost(billingCreditsSchema)

 Required roles:  - can_write_billing 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingCreditsPostRequest = {
  // BillingCreditsSchema | body
  billingCreditsSchema: {
    autoPay: true,
    credits: 1,
    customMessage: "customMessage_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1BillingCreditsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCreditsSchema** | **BillingCreditsSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**BillingCreditsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Credits entered |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingCreditsPriceGet**
> CreditsSchema statsV1BillingCreditsPriceGet()

 Required roles:  - can_write_billing 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingCreditsPriceGetRequest = {
  // number
  credits: 1,
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1BillingCreditsPriceGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credits** | [**number**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**CreditsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Credits entered |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingCreditsVerifyPost**
> BillingCreditsVerifySchema statsV1BillingCreditsVerifyPost(billingCreditsVerifySchema)

 Required roles:  - can_write_billing 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingCreditsVerifyPostRequest = {
  // BillingCreditsVerifySchema | body
  billingCreditsVerifySchema: {
    invoiceId: "invoiceId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1BillingCreditsVerifyPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCreditsVerifySchema** | **BillingCreditsVerifySchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**BillingCreditsVerifySchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Credits entered |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingCustomerCardDelete**
> void statsV1BillingCustomerCardDelete()

 Required roles:  - can_write_billing 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingCustomerCardDeleteRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1BillingCustomerCardDelete(body).then((data:any) => {
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
**200** | Card deleted |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingCustomerCardPost**
> BillingCustomerCardSchema statsV1BillingCustomerCardPost(billingCustomerCardSchema)

 Required roles:  - can_write_billing 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingCustomerCardPostRequest = {
  // BillingCustomerCardSchema | body
  billingCustomerCardSchema: {
    source: "source_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1BillingCustomerCardPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCustomerCardSchema** | **BillingCustomerCardSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**BillingCustomerCardSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Usage entered |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingCustomerGet**
> BillingSchema statsV1BillingCustomerGet(billingSchema)

 Required roles:  - can_read_billing 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingCustomerGetRequest = {
  // BillingSchema | body
  billingSchema: {
    balance: 3.14,
    consumptionSubtype: "consumptionSubtype_example",
    consumptionType: "consumptionType_example",
    currency: "USD",
    date: new Date('1970-01-01T00:00:00.00Z'),
    expirationDate: new Date('1970-01-01T00:00:00.00Z'),
    label: "label_example",
    priceList: "priceList_example",
    systemDomainId: "systemDomainId_example",
    value: 3.14,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1BillingCustomerGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingSchema** | **BillingSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**BillingSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Usage entered |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingCustomerPost**
> BillingCustomerSchema statsV1BillingCustomerPost(billingCustomerSchema)

 Required roles:  - can_write_billing 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingCustomerPostRequest = {
  // BillingCustomerSchema | body
  billingCustomerSchema: {
    businessVatId: "businessVatId_example",
    email: "email_example",
    enableSubscription: true,
    shipping: {
      address: {
        city: "city_example",
        country: "country_example",
        line1: "line1_example",
        line2: "line2_example",
        postalCode: "postalCode_example",
        state: "state_example",
      },
      name: "name_example",
      phone: "phone_example",
    },
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1BillingCustomerPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCustomerSchema** | **BillingCustomerSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**BillingCustomerSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Usage entered |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingGet**
> BillingsSchema statsV1BillingGet()

 Required roles:  - can_read_stats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string | Filter by from_date (optional)
  fromDate: "from_date_example",
  // string | Filter by from_date (optional)
  toDate: "to_date_example",
  // number | The number of items for each page (optional)
  perPage: 100,
  // string | ID of a last file on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.statsV1BillingGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **fromDate** | [**string**] | Filter by from_date | (optional) defaults to undefined
 **toDate** | [**string**] | Filter by from_date | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to 100
 **lastId** | [**string**] | ID of a last file on previous page | (optional) defaults to undefined


### Return type

**BillingsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns billing data |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingInvoicesGet**
> void statsV1BillingInvoicesGet()

 Required roles:  - can_read_billing 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingInvoicesGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string (optional)
  startingAfter: "starting_after_example",
  // number (optional)
  limit: 1,
};

apiInstance.statsV1BillingInvoicesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **startingAfter** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


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
**200** | Billing invoices |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingPost**
> BillingSchema statsV1BillingPost(billingSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingPostRequest = {
  // BillingSchema | body
  billingSchema: {
    balance: 3.14,
    consumptionSubtype: "consumptionSubtype_example",
    consumptionType: "consumptionType_example",
    currency: "USD",
    date: new Date('1970-01-01T00:00:00.00Z'),
    expirationDate: new Date('1970-01-01T00:00:00.00Z'),
    label: "label_example",
    priceList: "priceList_example",
    systemDomainId: "systemDomainId_example",
    value: 3.14,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1BillingPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingSchema** | **BillingSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**BillingSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Usage entered |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingPriceListsGet**
> PricesSchema statsV1BillingPriceListsGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingPriceListsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1BillingPriceListsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**PricesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Prices |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingPriceListsNameCurrencyDelete**
> void statsV1BillingPriceListsNameCurrencyDelete()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingPriceListsNameCurrencyDeleteRequest = {
  // string
  name: "name_example",
  // string
  currency: "currency_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1BillingPriceListsNameCurrencyDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined
 **currency** | [**string**] |  | defaults to undefined
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
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingPriceListsNameCurrencyGet**
> PriceSchema statsV1BillingPriceListsNameCurrencyGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingPriceListsNameCurrencyGetRequest = {
  // string
  name: "name_example",
  // string
  currency: "currency_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1BillingPriceListsNameCurrencyGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined
 **currency** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**PriceSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Prices |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingPriceListsPut**
> PriceSchema statsV1BillingPriceListsPut(priceSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingPriceListsPutRequest = {
  // PriceSchema | body
  priceSchema: {
    currency: "EUR",
    name: "name_example",
    prices: {},
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1BillingPriceListsPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceSchema** | **PriceSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**PriceSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Prices |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingRecipientsGet**
> BillingRecipientsSchema statsV1BillingRecipientsGet()

 Required roles:  - can_read_billing 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingRecipientsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1BillingRecipientsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**BillingRecipientsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Email recipients |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingRecipientsPut**
> BillingRecipientsSchema statsV1BillingRecipientsPut(billingRecipientsSchema)

 Required roles:  - can_write_billing 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingRecipientsPutRequest = {
  // BillingRecipientsSchema | body
  billingRecipientsSchema: {
    emails: [
      "emails_example",
    ],
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1BillingRecipientsPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingRecipientsSchema** | **BillingRecipientsSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**BillingRecipientsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Email recipients |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingSettingsGet**
> BillingSettingsSchema statsV1BillingSettingsGet()

 Required roles:  - can_read_billing 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingSettingsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1BillingSettingsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**BillingSettingsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Email recipients |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingSettingsPut**
> BillingSettingsSchema statsV1BillingSettingsPut(billingSettingsSchema)

 Required roles:  - can_write_billing 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingSettingsPutRequest = {
  // BillingSettingsSchema | body
  billingSettingsSchema: {
    autoRefillAmount: -2147483648,
    enableAutoTopUp: true,
    lowBalanceTrigger: -2147483648,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1BillingSettingsPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingSettingsSchema** | **BillingSettingsSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**BillingSettingsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Email recipients |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingStatusGet**
> BillingStatsSchema statsV1BillingStatusGet()

 Required roles:  - can_read_billing 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingStatusGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1BillingStatusGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**BillingStatsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Billing status |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1BillingSystemDomainIdBillingIdDelete**
> void statsV1BillingSystemDomainIdBillingIdDelete()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1BillingSystemDomainIdBillingIdDeleteRequest = {
  // string
  systemDomainId: "system_domain_id_example",
  // string
  billingId: "billing_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1BillingSystemDomainIdBillingIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemDomainId** | [**string**] |  | defaults to undefined
 **billingId** | [**string**] |  | defaults to undefined
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
**204** | Usage deleted |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1CollectionsByPeriodGet**
> CollectionUsageSchema statsV1CollectionsByPeriodGet()

 Required roles:  - can_read_stats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1CollectionsByPeriodGetRequest = {
  // string | Period of stats (month or day)
  period: "period_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string | Filter by from_date (optional)
  fromDate: "from_date_example",
  // string | Filter by to_date (optional)
  toDate: "to_date_example",
};

apiInstance.statsV1CollectionsByPeriodGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **period** | [**string**] | Period of stats (month or day) | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **fromDate** | [**string**] | Filter by from_date | (optional) defaults to undefined
 **toDate** | [**string**] | Filter by to_date | (optional) defaults to undefined


### Return type

**CollectionUsageSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns Collection usage |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1IdObjectIdInfoGet**
> void statsV1IdObjectIdInfoGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1IdObjectIdInfoGetRequest = {
  // string | Object ID
  objectId: "object_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1IdObjectIdInfoGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectId** | [**string**] | Object ID | defaults to undefined
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
**200** | Returns asset usage |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1OrdwayBillingCustomerGet**
> BillingSchema statsV1OrdwayBillingCustomerGet()

 Required roles:  - can_read_billing 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1OrdwayBillingCustomerGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1OrdwayBillingCustomerGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**BillingSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Usage entered |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1OrdwayBillingGet**
> BillingsSchema statsV1OrdwayBillingGet()

 Required roles:  - can_read_stats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1OrdwayBillingGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string | Filter by from_date (optional)
  fromDate: "from_date_example",
  // string | Filter by from_date (optional)
  toDate: "to_date_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // number | Which page number to fetch (optional)
  page: 1,
};

apiInstance.statsV1OrdwayBillingGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **fromDate** | [**string**] | Filter by from_date | (optional) defaults to undefined
 **toDate** | [**string**] | Filter by from_date | (optional) defaults to undefined
 **perPage** | [**number**] | The number of items for each page | (optional) defaults to undefined
 **page** | [**number**] | Which page number to fetch | (optional) defaults to 1


### Return type

**BillingsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns billing data |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1OrdwayBillingInvoicesGet**
> void statsV1OrdwayBillingInvoicesGet()

 Required roles:  - can_read_billing 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1OrdwayBillingInvoicesGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // number | Which page number to fetch (optional)
  page: 1,
};

apiInstance.statsV1OrdwayBillingInvoicesGet(body).then((data:any) => {
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
**200** | Billing invoices |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1StorageAccessByPeriodGet**
> StorageAccessesSchema statsV1StorageAccessByPeriodGet()

 Required roles:  - can_read_stats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1StorageAccessByPeriodGetRequest = {
  // string | Period of stats (month or day)
  period: "period_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string | Filter by from_date (optional)
  fromDate: "from_date_example",
  // string | Filter by to_date (optional)
  toDate: "to_date_example",
};

apiInstance.statsV1StorageAccessByPeriodGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **period** | [**string**] | Period of stats (month or day) | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **fromDate** | [**string**] | Filter by from_date | (optional) defaults to undefined
 **toDate** | [**string**] | Filter by to_date | (optional) defaults to undefined


### Return type

**StorageAccessesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a object for storage access |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1StorageUsageByPeriodGet**
> StorageUsagesSchema statsV1StorageUsageByPeriodGet()

 Required roles:  - can_read_stats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1StorageUsageByPeriodGetRequest = {
  // string | Period of stats (month or day)
  period: "period_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string | Filter by from_date (optional)
  fromDate: "from_date_example",
  // string | Filter by to_date (optional)
  toDate: "to_date_example",
};

apiInstance.statsV1StorageUsageByPeriodGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **period** | [**string**] | Period of stats (month or day) | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **fromDate** | [**string**] | Filter by from_date | (optional) defaults to undefined
 **toDate** | [**string**] | Filter by to_date | (optional) defaults to undefined


### Return type

**StorageUsagesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns storage usage |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1SystemLogsRecipientsGet**
> LogsRecipientsSchema statsV1SystemLogsRecipientsGet()

 Required roles:  - can_read_logs_recipients 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1SystemLogsRecipientsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last service account set on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.statsV1SystemLogsRecipientsGet(body).then((data:any) => {
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

**LogsRecipientsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns logs recipients settings |  -  |
**401** | Token is invalid |  -  |
**404** | Logs recipients settings don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1SystemLogsRecipientsLogsRecipientIdDelete**
> void statsV1SystemLogsRecipientsLogsRecipientIdDelete()

 Required roles:  - can_delete_logs_recipients 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1SystemLogsRecipientsLogsRecipientIdDeleteRequest = {
  // string
  logsRecipientId: "logs_recipient_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1SystemLogsRecipientsLogsRecipientIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logsRecipientId** | [**string**] |  | defaults to undefined
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
**404** | Logs recipient doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1SystemLogsRecipientsLogsRecipientIdGet**
> LogsRecipientReadSchema statsV1SystemLogsRecipientsLogsRecipientIdGet()

 Required roles:  - can_read_logs_recipients 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1SystemLogsRecipientsLogsRecipientIdGetRequest = {
  // string
  logsRecipientId: "logs_recipient_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1SystemLogsRecipientsLogsRecipientIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logsRecipientId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**LogsRecipientReadSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns settings for a logs recipients |  -  |
**401** | Token is invalid |  -  |
**404** | Logs recipients settings don\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1SystemLogsRecipientsLogsRecipientIdPatch**
> LogsRecipientReadSchema statsV1SystemLogsRecipientsLogsRecipientIdPatch(logsRecipientSchema)

 Required roles:  - can_write_logs_recipients 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1SystemLogsRecipientsLogsRecipientIdPatchRequest = {
  // string
  logsRecipientId: "logs_recipient_id_example",
  // LogsRecipientSchema | body
  logsRecipientSchema: {
    method: "GOOGLE",
    name: "name_example",
    settings: {},
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1SystemLogsRecipientsLogsRecipientIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logsRecipientSchema** | **LogsRecipientSchema**| body |
 **logsRecipientId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**LogsRecipientReadSchema**

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
**404** | Logs recipient doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1SystemLogsRecipientsLogsRecipientIdPost**
> StatsV1SystemLogsRecipientsLogsRecipientIdPost200Response statsV1SystemLogsRecipientsLogsRecipientIdPost()

 Required roles:  - can_write_logs_recipients 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1SystemLogsRecipientsLogsRecipientIdPostRequest = {
  // string
  logsRecipientId: "logs_recipient_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1SystemLogsRecipientsLogsRecipientIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logsRecipientId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**StatsV1SystemLogsRecipientsLogsRecipientIdPost200Response**

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
**404** | Logs recipient doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1SystemLogsRecipientsLogsRecipientIdPut**
> LogsRecipientReadSchema statsV1SystemLogsRecipientsLogsRecipientIdPut(logsRecipientSchema)

 Required roles:  - can_write_logs_recipients 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1SystemLogsRecipientsLogsRecipientIdPutRequest = {
  // string
  logsRecipientId: "logs_recipient_id_example",
  // LogsRecipientSchema | body
  logsRecipientSchema: {
    method: "GOOGLE",
    name: "name_example",
    settings: {},
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1SystemLogsRecipientsLogsRecipientIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logsRecipientSchema** | **LogsRecipientSchema**| body |
 **logsRecipientId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**LogsRecipientReadSchema**

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
**404** | Logs recipient doesn\&#39;t exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1SystemLogsRecipientsPost**
> LogsRecipientReadSchema statsV1SystemLogsRecipientsPost(logsRecipientSchema)

 Required roles:  - can_write_logs_recipients 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1SystemLogsRecipientsPostRequest = {
  // LogsRecipientSchema | body
  logsRecipientSchema: {
    method: "GOOGLE",
    name: "name_example",
    settings: {},
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.statsV1SystemLogsRecipientsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logsRecipientSchema** | **LogsRecipientSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**LogsRecipientReadSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a logs_recipient object |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1TranscoderUsageByPeriodGet**
> TranscoderUsagesSchema statsV1TranscoderUsageByPeriodGet()

 Required roles:  - can_read_stats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1TranscoderUsageByPeriodGetRequest = {
  // string
  period: "period_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string | Filter by from_date (optional)
  fromDate: "from_date_example",
  // string | Filter by to_date (optional)
  toDate: "to_date_example",
};

apiInstance.statsV1TranscoderUsageByPeriodGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **period** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **fromDate** | [**string**] | Filter by from_date | (optional) defaults to undefined
 **toDate** | [**string**] | Filter by to_date | (optional) defaults to undefined


### Return type

**TranscoderUsagesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a transcoder usage objects |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsV1UserAuditByPeriodGet**
> UserUsagesSchema statsV1UserAuditByPeriodGet()

 Required roles:  - can_read_stats 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.StatsApi(configuration);

let body:iconik.StatsApiStatsV1UserAuditByPeriodGetRequest = {
  // string | Period of stats (month, day or day_detailed)
  period: "period_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string | Filter by from_date (optional)
  fromDate: "from_date_example",
  // string | Filter by to_date (optional)
  toDate: "to_date_example",
  // string | Filter by system_domain_id (Only for super admins) (optional)
  systemDomainId: "system_domain_id_example",
};

apiInstance.statsV1UserAuditByPeriodGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **period** | [**string**] | Period of stats (month, day or day_detailed) | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **fromDate** | [**string**] | Filter by from_date | (optional) defaults to undefined
 **toDate** | [**string**] | Filter by to_date | (optional) defaults to undefined
 **systemDomainId** | [**string**] | Filter by system_domain_id (Only for super admins) | (optional) defaults to undefined


### Return type

**UserUsagesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns user usage |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


