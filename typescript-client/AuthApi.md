# iconik.AuthApi

All URIs are relative to *https://app.iconik.io/API*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authV1AppsAppIdDelete**](AuthApi.md#authV1AppsAppIdDelete) | **DELETE** /auth/v1/apps/{app_id}/ | Delete a particular app by id
[**authV1AppsAppIdGet**](AuthApi.md#authV1AppsAppIdGet) | **GET** /auth/v1/apps/{app_id}/ | Returns a particular app by id
[**authV1AppsAppIdPatch**](AuthApi.md#authV1AppsAppIdPatch) | **PATCH** /auth/v1/apps/{app_id}/ | Update app
[**authV1AppsAppIdPut**](AuthApi.md#authV1AppsAppIdPut) | **PUT** /auth/v1/apps/{app_id}/ | Update app
[**authV1AppsAppIdTokenPost**](AuthApi.md#authV1AppsAppIdTokenPost) | **POST** /auth/v1/apps/{app_id}/token/ | Creates app token by id and returns it\&#39;s data
[**authV1AppsExternalAuthPost**](AuthApi.md#authV1AppsExternalAuthPost) | **POST** /auth/v1/apps/external/auth/ | Create a new token for the logged in user and store it for an external app
[**authV1AppsExternalAuthSecretGet**](AuthApi.md#authV1AppsExternalAuthSecretGet) | **GET** /auth/v1/apps/external/auth/{secret}/ | Gets a token requested by an external app
[**authV1AppsGet**](AuthApi.md#authV1AppsGet) | **GET** /auth/v1/apps/ | List of apps
[**authV1AppsInstanceApprovedInstanceIdDelete**](AuthApi.md#authV1AppsInstanceApprovedInstanceIdDelete) | **DELETE** /auth/v1/apps/instance/{approved_instance_id}/ | Delete an approved instance of an app
[**authV1AppsInstanceApprovedInstanceIdGet**](AuthApi.md#authV1AppsInstanceApprovedInstanceIdGet) | **GET** /auth/v1/apps/instance/{approved_instance_id}/ | Gets an approved instance of an app
[**authV1AppsInstancePost**](AuthApi.md#authV1AppsInstancePost) | **POST** /auth/v1/apps/instance/ | Create a new app instance
[**authV1AppsPost**](AuthApi.md#authV1AppsPost) | **POST** /auth/v1/apps/ | Create a new app
[**authV1AuthAdLoginPost**](AuthApi.md#authV1AuthAdLoginPost) | **POST** /auth/v1/auth/ad/login/ | Login by ActiveDirectory
[**authV1AuthMultidomainLoginPost**](AuthApi.md#authV1AuthMultidomainLoginPost) | **POST** /auth/v1/auth/multidomain/login/ | Login by using temp token
[**authV1AuthOauthLoginPost**](AuthApi.md#authV1AuthOauthLoginPost) | **POST** /auth/v1/auth/oauth/login/ | Login by OAuth
[**authV1AuthSamlAcsPublicIdPost**](AuthApi.md#authV1AuthSamlAcsPublicIdPost) | **POST** /auth/v1/auth/saml/acs/{public_id}/ | SAML Assertion Consumer Service
[**authV1AuthSamlAcsSystemDomainIdIdentityProviderIdPost**](AuthApi.md#authV1AuthSamlAcsSystemDomainIdIdentityProviderIdPost) | **POST** /auth/v1/auth/saml/acs/{system_domain_id}/{identity_provider_id}/ | SAML Assertion Consumer Service
[**authV1AuthSamlDomainsDomainDelete**](AuthApi.md#authV1AuthSamlDomainsDomainDelete) | **DELETE** /auth/v1/auth/saml/domains/{domain}/ | Unbind domain from identity provider
[**authV1AuthSamlDomainsPost**](AuthApi.md#authV1AuthSamlDomainsPost) | **POST** /auth/v1/auth/saml/domains/ | Bind domain to identity provider
[**authV1AuthSamlIdpConvertPost**](AuthApi.md#authV1AuthSamlIdpConvertPost) | **POST** /auth/v1/auth/saml/idp/convert/ | Convert an IdP EntityDescriptor XML into json suitable as a settings configuration.
[**authV1AuthSamlIdpGet**](AuthApi.md#authV1AuthSamlIdpGet) | **GET** /auth/v1/auth/saml/idp/ | Get list of identity providers
[**authV1AuthSamlIdpIdentityProviderIdDelete**](AuthApi.md#authV1AuthSamlIdpIdentityProviderIdDelete) | **DELETE** /auth/v1/auth/saml/idp/{identity_provider_id}/ | Delete a particular identity provider by id
[**authV1AuthSamlIdpIdentityProviderIdGet**](AuthApi.md#authV1AuthSamlIdpIdentityProviderIdGet) | **GET** /auth/v1/auth/saml/idp/{identity_provider_id}/ | Get a particular identity provider by id
[**authV1AuthSamlIdpIdentityProviderIdPatch**](AuthApi.md#authV1AuthSamlIdpIdentityProviderIdPatch) | **PATCH** /auth/v1/auth/saml/idp/{identity_provider_id}/ | Update a particular identity provider by id
[**authV1AuthSamlIdpIdentityProviderIdPut**](AuthApi.md#authV1AuthSamlIdpIdentityProviderIdPut) | **PUT** /auth/v1/auth/saml/idp/{identity_provider_id}/ | Update a particular identity provider by id
[**authV1AuthSamlIdpPost**](AuthApi.md#authV1AuthSamlIdpPost) | **POST** /auth/v1/auth/saml/idp/ | Create a new identity provider.
[**authV1AuthSamlLoginPost**](AuthApi.md#authV1AuthSamlLoginPost) | **POST** /auth/v1/auth/saml/login/ | SAML Single sign-on url by domain
[**authV1AuthSamlLogoutPublicIdPost**](AuthApi.md#authV1AuthSamlLogoutPublicIdPost) | **POST** /auth/v1/auth/saml/logout/{public_id}/ | Initiate SAML Single logout
[**authV1AuthSamlMetadataPublicIdGet**](AuthApi.md#authV1AuthSamlMetadataPublicIdGet) | **GET** /auth/v1/auth/saml/metadata/{public_id}/ | SAML Single Logout Service
[**authV1AuthSamlMetadataSystemDomainIdIdentityProviderIdGet**](AuthApi.md#authV1AuthSamlMetadataSystemDomainIdIdentityProviderIdGet) | **GET** /auth/v1/auth/saml/metadata/{system_domain_id}/{identity_provider_id}/ | SAML Single Logout Service
[**authV1AuthSamlMultidomainLoginPost**](AuthApi.md#authV1AuthSamlMultidomainLoginPost) | **POST** /auth/v1/auth/saml/multidomain/login/ | SAML Single sign-on url by domain
[**authV1AuthSamlSloPublicIdGet**](AuthApi.md#authV1AuthSamlSloPublicIdGet) | **GET** /auth/v1/auth/saml/slo/{public_id}/ | SAML Single Logout Service
[**authV1AuthSamlSloSystemDomainIdIdentityProviderIdGet**](AuthApi.md#authV1AuthSamlSloSystemDomainIdIdentityProviderIdGet) | **GET** /auth/v1/auth/saml/slo/{system_domain_id}/{identity_provider_id}/ | SAML Single Logout Service
[**authV1AuthSamlSsoPublicIdGet**](AuthApi.md#authV1AuthSamlSsoPublicIdGet) | **GET** /auth/v1/auth/saml/sso/{public_id}/ | SAML Single sign-on Service
[**authV1AuthSamlSsoSystemDomainIdIdentityProviderIdGet**](AuthApi.md#authV1AuthSamlSsoSystemDomainIdIdentityProviderIdGet) | **GET** /auth/v1/auth/saml/sso/{system_domain_id}/{identity_provider_id}/ | SAML Single sign-on Service
[**authV1AuthSimpleLoginPost**](AuthApi.md#authV1AuthSimpleLoginPost) | **POST** /auth/v1/auth/simple/login/ | Login by using email and password
[**authV1AuthTokenDelete**](AuthApi.md#authV1AuthTokenDelete) | **DELETE** /auth/v1/auth/token/ | Revoke token
[**authV1AuthTokenGet**](AuthApi.md#authV1AuthTokenGet) | **GET** /auth/v1/auth/token/ | Check if auth token valid
[**authV1AuthTokenPost**](AuthApi.md#authV1AuthTokenPost) | **POST** /auth/v1/auth/token/ | Create new token without invalidating the old one
[**authV1AuthTokenPut**](AuthApi.md#authV1AuthTokenPut) | **PUT** /auth/v1/auth/token/ | Refresh token
[**authV1AuthTokenTokenIdDelete**](AuthApi.md#authV1AuthTokenTokenIdDelete) | **DELETE** /auth/v1/auth/token/{token_id}/ | Revoke token by ID
[**authV1AuthTokenTokenIdGet**](AuthApi.md#authV1AuthTokenTokenIdGet) | **GET** /auth/v1/auth/token/{token_id}/ | Get token by ID
[**authV1AuthTokensGet**](AuthApi.md#authV1AuthTokensGet) | **GET** /auth/v1/auth/tokens/ | List of tokens
[**authV1MarketplaceGoogleLinkPost**](AuthApi.md#authV1MarketplaceGoogleLinkPost) | **POST** /auth/v1/marketplace/google/link/ | Google cloud marketplace link to existing system domain
[**authV1MarketplaceGoogleSignupPost**](AuthApi.md#authV1MarketplaceGoogleSignupPost) | **POST** /auth/v1/marketplace/google/signup/ | Google cloud marketplace signup
[**authV1PasswordChecksGet**](AuthApi.md#authV1PasswordChecksGet) | **GET** /auth/v1/password/checks/ | Returns a list of password checks required for the password to be safe
[**authV1PasswordForgotPost**](AuthApi.md#authV1PasswordForgotPost) | **POST** /auth/v1/password/forgot/ | Receives email address and sends email to this address with link for resetting password
[**authV1PasswordResetHashChecksGet**](AuthApi.md#authV1PasswordResetHashChecksGet) | **GET** /auth/v1/password/{reset_hash}/checks/ | Returns a list of password checks required for the password to be safe
[**authV1PasswordResetResetHashPut**](AuthApi.md#authV1PasswordResetResetHashPut) | **PUT** /auth/v1/password/reset/{reset_hash}/ | Changes password to a new one
[**authV1ReferralCodesCodeDelete**](AuthApi.md#authV1ReferralCodesCodeDelete) | **DELETE** /auth/v1/referral_codes/{code}/ | Delete a referral_code
[**authV1ReferralCodesCodeGet**](AuthApi.md#authV1ReferralCodesCodeGet) | **GET** /auth/v1/referral_codes/{code}/ | Get a referral_code
[**authV1ReferralCodesGet**](AuthApi.md#authV1ReferralCodesGet) | **GET** /auth/v1/referral_codes/ | Get all referral_codes
[**authV1ReferralCodesPost**](AuthApi.md#authV1ReferralCodesPost) | **POST** /auth/v1/referral_codes/ | Create a new referral_code
[**authV1RegistrationsCountriesGet**](AuthApi.md#authV1RegistrationsCountriesGet) | **GET** /auth/v1/registrations/countries/ | Returns list of countries
[**authV1RegistrationsPost**](AuthApi.md#authV1RegistrationsPost) | **POST** /auth/v1/registrations/ | Create a new registration
[**authV1RegistrationsVerifyEmailHashPost**](AuthApi.md#authV1RegistrationsVerifyEmailHashPost) | **POST** /auth/v1/registrations/verify/{email_hash}/ | Verify email address and create system domain from template is email address valid
[**authV1SystemDomainsGet**](AuthApi.md#authV1SystemDomainsGet) | **GET** /auth/v1/system_domains/ | List of system domains
[**authV1SystemDomainsPost**](AuthApi.md#authV1SystemDomainsPost) | **POST** /auth/v1/system_domains/ | Create a new system domain
[**authV1SystemDomainsReferralCodeReferralCodePost**](AuthApi.md#authV1SystemDomainsReferralCodeReferralCodePost) | **POST** /auth/v1/system_domains/referral_code/{referral_code}/ | Create a new system domain from a referral code (That is associated to your domain)
[**authV1SystemDomainsSystemDomainIdDelete**](AuthApi.md#authV1SystemDomainsSystemDomainIdDelete) | **DELETE** /auth/v1/system_domains/{system_domain_id}/ | Delete a particular system_domain by id
[**authV1SystemDomainsSystemDomainIdE2eDelete**](AuthApi.md#authV1SystemDomainsSystemDomainIdE2eDelete) | **DELETE** /auth/v1/system_domains/{system_domain_id}/e2e/ | Delete a particular system_domain by id.
[**authV1SystemDomainsSystemDomainIdGet**](AuthApi.md#authV1SystemDomainsSystemDomainIdGet) | **GET** /auth/v1/system_domains/{system_domain_id}/ | Returns a particular system domain by id
[**authV1SystemDomainsSystemDomainIdLogoDelete**](AuthApi.md#authV1SystemDomainsSystemDomainIdLogoDelete) | **DELETE** /auth/v1/system_domains/{system_domain_id}/logo/ | Delete system domain logo image.
[**authV1SystemDomainsSystemDomainIdLogoPost**](AuthApi.md#authV1SystemDomainsSystemDomainIdLogoPost) | **POST** /auth/v1/system_domains/{system_domain_id}/logo/ | Upload system domain logo image.
[**authV1SystemDomainsSystemDomainIdPatch**](AuthApi.md#authV1SystemDomainsSystemDomainIdPatch) | **PATCH** /auth/v1/system_domains/{system_domain_id}/ | Update system domain
[**authV1SystemDomainsSystemDomainIdPut**](AuthApi.md#authV1SystemDomainsSystemDomainIdPut) | **PUT** /auth/v1/system_domains/{system_domain_id}/ | Update system domain
[**authV1SystemDomainsTemplatesGet**](AuthApi.md#authV1SystemDomainsTemplatesGet) | **GET** /auth/v1/system_domains/templates/ | List of system domain templates


# **authV1AppsAppIdDelete**
> void authV1AppsAppIdDelete()

 Required roles:  - can_delete_apps 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AppsAppIdDeleteRequest = {
  // string
  appId: "app_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AppsAppIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
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

# **authV1AppsAppIdGet**
> AppSchema authV1AppsAppIdGet()

 Required roles:  - can_read_apps 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AppsAppIdGetRequest = {
  // string
  appId: "app_id_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AppsAppIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AppSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a app |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AppsAppIdPatch**
> AppSchema authV1AppsAppIdPatch(appSchema)

 Required roles:  - can_write_apps 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AppsAppIdPatchRequest = {
  // string
  appId: "app_id_example",
  // AppSchema | body
  appSchema: {
    defaultUserId: "defaultUserId_example",
    description: "description_example",
    name: "name_example",
    url: "url_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AppsAppIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appSchema** | **AppSchema**| body |
 **appId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AppSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated app |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AppsAppIdPut**
> AppSchema authV1AppsAppIdPut(appSchema)

 Required roles:  - can_write_apps 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AppsAppIdPutRequest = {
  // string
  appId: "app_id_example",
  // AppSchema | body
  appSchema: {
    defaultUserId: "defaultUserId_example",
    description: "description_example",
    name: "name_example",
    url: "url_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AppsAppIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appSchema** | **AppSchema**| body |
 **appId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AppSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated app |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AppsAppIdTokenPost**
> TokenSchema authV1AppsAppIdTokenPost()

 Required roles:  - can_read_apps 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AppsAppIdTokenPostRequest = {
  // string
  appId: "app_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AppsAppIdTokenPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**TokenSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an application token |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AppsExternalAuthPost**
> ExternalAuthRequestResponseSchema authV1AppsExternalAuthPost(externalAuthRequestSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AppsExternalAuthPostRequest = {
  // ExternalAuthRequestSchema | body
  externalAuthRequestSchema: {
    appId: "appId_example",
    appName: "appName_example",
    redirectInfo: null,
    secret: "secret_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AppsExternalAuthPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalAuthRequestSchema** | **ExternalAuthRequestSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExternalAuthRequestResponseSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns an app_id |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AppsExternalAuthSecretGet**
> ExternalAuthSchema authV1AppsExternalAuthSecretGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AppsExternalAuthSecretGetRequest = {
  // string
  secret: "secret_example",
};

apiInstance.authV1AppsExternalAuthSecretGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secret** | [**string**] |  | defaults to undefined


### Return type

**ExternalAuthSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns auth info |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AppsGet**
> AppsSchema authV1AppsGet()

 Required roles:  - can_read_apps 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AppsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last file set on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.authV1AppsGet(body).then((data:any) => {
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

**AppsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of app |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AppsInstanceApprovedInstanceIdDelete**
> void authV1AppsInstanceApprovedInstanceIdDelete()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AppsInstanceApprovedInstanceIdDeleteRequest = {
  // string
  approvedInstanceId: "approved_instance_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AppsInstanceApprovedInstanceIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **approvedInstanceId** | [**string**] |  | defaults to undefined
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

# **authV1AppsInstanceApprovedInstanceIdGet**
> ExternalAuthSchema authV1AppsInstanceApprovedInstanceIdGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AppsInstanceApprovedInstanceIdGetRequest = {
  // string
  approvedInstanceId: "approved_instance_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AppsInstanceApprovedInstanceIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **approvedInstanceId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExternalAuthSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns auth info |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AppsInstancePost**
> ApprovedAppInstanceSchema authV1AppsInstancePost(approvedAppInstanceSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AppsInstancePostRequest = {
  // ApprovedAppInstanceSchema | body
  approvedAppInstanceSchema: {
    appId: "appId_example",
    id: "id_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AppsInstancePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **approvedAppInstanceSchema** | **ApprovedAppInstanceSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ApprovedAppInstanceSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created app |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AppsPost**
> AppSchema authV1AppsPost(appSchema)

 Required roles:  - can_write_apps 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AppsPostRequest = {
  // AppSchema | body
  appSchema: {
    defaultUserId: "defaultUserId_example",
    description: "description_example",
    name: "name_example",
    url: "url_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AppsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appSchema** | **AppSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AppSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created app |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthAdLoginPost**
> TokenSchema authV1AuthAdLoginPost(body)

<br/>This function is not yet implemented.

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthAdLoginPostRequest = {
  // any | body
  body: {},
};

apiInstance.authV1AuthAdLoginPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**| body |


### Return type

**TokenSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a new generated token for particular user |  -  |
**400** | Bad request |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthMultidomainLoginPost**
> TokenSchema authV1AuthMultidomainLoginPost(multiDomainLoginSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthMultidomainLoginPostRequest = {
  // string
  tempAuthToken: "Temp-Auth-Token_example",
  // MultiDomainLoginSchema | body
  multiDomainLoginSchema: {
    appName: "appName_example",
    email: "email_example",
    marketplaceSignupNonce: "marketplaceSignupNonce_example",
    systemDomainId: "systemDomainId_example",
  },
};

apiInstance.authV1AuthMultidomainLoginPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multiDomainLoginSchema** | **MultiDomainLoginSchema**| body |
 **tempAuthToken** | [**string**] |  | defaults to undefined


### Return type

**TokenSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a new generated token for particular user |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthOauthLoginPost**
> TokenSchema authV1AuthOauthLoginPost(body)

<br/>This function is not yet implemented.

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthOauthLoginPostRequest = {
  // any | body
  body: {},
};

apiInstance.authV1AuthOauthLoginPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**| body |


### Return type

**TokenSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a new generated token for particular user |  -  |
**400** | Bad request |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSamlAcsPublicIdPost**
> authV1AuthSamlAcsPublicIdPost()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSamlAcsPublicIdPostRequest = {
  // string
  publicId: "public_id_example",
};

apiInstance.authV1AuthSamlAcsPublicIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicId** | [**string**] |  | defaults to undefined


### Return type

void (empty response body)

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Redirect on SAML IDP for SSO |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized request |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSamlAcsSystemDomainIdIdentityProviderIdPost**
> authV1AuthSamlAcsSystemDomainIdIdentityProviderIdPost()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSamlAcsSystemDomainIdIdentityProviderIdPostRequest = {
  // string
  systemDomainId: "system_domain_id_example",
  // string
  identityProviderId: "identity_provider_id_example",
};

apiInstance.authV1AuthSamlAcsSystemDomainIdIdentityProviderIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemDomainId** | [**string**] |  | defaults to undefined
 **identityProviderId** | [**string**] |  | defaults to undefined


### Return type

void (empty response body)

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Redirect on SAML IDP for SSO |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized request |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSamlDomainsDomainDelete**
> void authV1AuthSamlDomainsDomainDelete()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSamlDomainsDomainDeleteRequest = {
  // string
  domain: "domain_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AuthSamlDomainsDomainDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | [**string**] |  | defaults to undefined
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
**404** | Does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSamlDomainsPost**
> DomainIdentityProviderMapSchema authV1AuthSamlDomainsPost(domainIdentityProviderMapSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSamlDomainsPostRequest = {
  // DomainIdentityProviderMapSchema | body
  domainIdentityProviderMapSchema: {
    domain: "domain_example",
    identityProviderId: "identityProviderId_example",
    systemDomainId: "systemDomainId_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AuthSamlDomainsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainIdentityProviderMapSchema** | **DomainIdentityProviderMapSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**DomainIdentityProviderMapSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns an identity provider |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSamlIdpConvertPost**
> IdentityProviderSchema authV1AuthSamlIdpConvertPost(identityProviderSchema)

<br/>Input should be a SAML EntityDescriptor XML.

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSamlIdpConvertPostRequest = {
  // IdentityProviderSchema
  identityProviderSchema: {
    settings: null,
    type: "onelogin.com",
    verboseLogging: true,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AuthSamlIdpConvertPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityProviderSchema** | **IdentityProviderSchema**|  |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**IdentityProviderSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns an identity provider |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSamlIdpGet**
> IdentityProvidersSchema authV1AuthSamlIdpGet()

 Required roles:  - can_read_identity_providers 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSamlIdpGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 1,
  // string (optional)
  lastId: "last_id_example",
};

apiInstance.authV1AuthSamlIdpGet(body).then((data:any) => {
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

**IdentityProvidersSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of identity providers |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSamlIdpIdentityProviderIdDelete**
> void authV1AuthSamlIdpIdentityProviderIdDelete()

 Required roles:  - can_delete_identity_providers 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSamlIdpIdentityProviderIdDeleteRequest = {
  // string
  identityProviderId: "identity_provider_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AuthSamlIdpIdentityProviderIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityProviderId** | [**string**] |  | defaults to undefined
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
**404** | Identity provider does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSamlIdpIdentityProviderIdGet**
> IdentityProviderSchema authV1AuthSamlIdpIdentityProviderIdGet()

 Required roles:  - can_read_identity_providers 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSamlIdpIdentityProviderIdGetRequest = {
  // string
  identityProviderId: "identity_provider_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AuthSamlIdpIdentityProviderIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityProviderId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**IdentityProviderSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an identity provider |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Identity provider does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSamlIdpIdentityProviderIdPatch**
> IdentityProviderSchema authV1AuthSamlIdpIdentityProviderIdPatch(identityProviderSchema)

 Required roles:  - can_write_identity_providers 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSamlIdpIdentityProviderIdPatchRequest = {
  // string
  identityProviderId: "identity_provider_id_example",
  // IdentityProviderSchema | body
  identityProviderSchema: {
    settings: null,
    type: "onelogin.com",
    verboseLogging: true,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AuthSamlIdpIdentityProviderIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityProviderSchema** | **IdentityProviderSchema**| body |
 **identityProviderId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**IdentityProviderSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated identity provider |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Identity provider does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSamlIdpIdentityProviderIdPut**
> IdentityProviderSchema authV1AuthSamlIdpIdentityProviderIdPut(identityProviderSchema)

 Required roles:  - can_write_identity_providers 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSamlIdpIdentityProviderIdPutRequest = {
  // string
  identityProviderId: "identity_provider_id_example",
  // IdentityProviderSchema | body
  identityProviderSchema: {
    settings: null,
    type: "onelogin.com",
    verboseLogging: true,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AuthSamlIdpIdentityProviderIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityProviderSchema** | **IdentityProviderSchema**| body |
 **identityProviderId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**IdentityProviderSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated identity provider |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | Identity provider does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSamlIdpPost**
> IdentityProviderSchema authV1AuthSamlIdpPost(identityProviderSchema)

<br/>Input can either be an IdentityProviderSchema as json or a SAML<br/>EntityDescriptor XML.<br/>Input can either be an IdentityProviderSchema as json or a SAML<br/>EntityDescriptor XML. Required roles:  - can_write_identity_providers 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSamlIdpPostRequest = {
  // IdentityProviderSchema
  identityProviderSchema: {
    settings: null,
    type: "onelogin.com",
    verboseLogging: true,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AuthSamlIdpPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityProviderSchema** | **IdentityProviderSchema**|  |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**IdentityProviderSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns an identity provider |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSamlLoginPost**
> AuthV1AuthSamlLoginPost200Response authV1AuthSamlLoginPost(sAMLLoginSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSamlLoginPostRequest = {
  // SAMLLoginSchema | body
  sAMLLoginSchema: {
    email: "email_example",
  },
};

apiInstance.authV1AuthSamlLoginPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sAMLLoginSchema** | **SAMLLoginSchema**| body |


### Return type

**AuthV1AuthSamlLoginPost200Response**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an saml sso url |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSamlLogoutPublicIdPost**
> AuthV1AuthSamlLogoutPublicIdPost200Response authV1AuthSamlLogoutPublicIdPost()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSamlLogoutPublicIdPostRequest = {
  // string
  publicId: "public_id_example",
};

apiInstance.authV1AuthSamlLogoutPublicIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicId** | [**string**] |  | defaults to undefined


### Return type

**AuthV1AuthSamlLogoutPublicIdPost200Response**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an saml slo url |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSamlMetadataPublicIdGet**
> void authV1AuthSamlMetadataPublicIdGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSamlMetadataPublicIdGetRequest = {
  // string
  publicId: "public_id_example",
};

apiInstance.authV1AuthSamlMetadataPublicIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicId** | [**string**] |  | defaults to undefined


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
**200** | Return SAML SP metadata |  -  |
**400** | Bad request |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSamlMetadataSystemDomainIdIdentityProviderIdGet**
> void authV1AuthSamlMetadataSystemDomainIdIdentityProviderIdGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSamlMetadataSystemDomainIdIdentityProviderIdGetRequest = {
  // string
  systemDomainId: "system_domain_id_example",
  // string
  identityProviderId: "identity_provider_id_example",
};

apiInstance.authV1AuthSamlMetadataSystemDomainIdIdentityProviderIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemDomainId** | [**string**] |  | defaults to undefined
 **identityProviderId** | [**string**] |  | defaults to undefined


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
**200** | Return SAML SP metadata |  -  |
**400** | Bad request |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSamlMultidomainLoginPost**
> MultiDomainUserSystemsSchema authV1AuthSamlMultidomainLoginPost(sAMLLoginSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSamlMultidomainLoginPostRequest = {
  // SAMLLoginSchema | body
  sAMLLoginSchema: {
    email: "email_example",
  },
};

apiInstance.authV1AuthSamlMultidomainLoginPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sAMLLoginSchema** | **SAMLLoginSchema**| body |


### Return type

**MultiDomainUserSystemsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns list of SSO domains |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSamlSloPublicIdGet**
> authV1AuthSamlSloPublicIdGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSamlSloPublicIdGetRequest = {
  // string
  publicId: "public_id_example",
};

apiInstance.authV1AuthSamlSloPublicIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicId** | [**string**] |  | defaults to undefined


### Return type

void (empty response body)

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Redirect on SAML IDP for SLO |  -  |
**400** | Bad request |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSamlSloSystemDomainIdIdentityProviderIdGet**
> authV1AuthSamlSloSystemDomainIdIdentityProviderIdGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSamlSloSystemDomainIdIdentityProviderIdGetRequest = {
  // string
  systemDomainId: "system_domain_id_example",
  // string
  identityProviderId: "identity_provider_id_example",
};

apiInstance.authV1AuthSamlSloSystemDomainIdIdentityProviderIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemDomainId** | [**string**] |  | defaults to undefined
 **identityProviderId** | [**string**] |  | defaults to undefined


### Return type

void (empty response body)

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Redirect on SAML IDP for SLO |  -  |
**400** | Bad request |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSamlSsoPublicIdGet**
> authV1AuthSamlSsoPublicIdGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSamlSsoPublicIdGetRequest = {
  // string
  publicId: "public_id_example",
};

apiInstance.authV1AuthSamlSsoPublicIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicId** | [**string**] |  | defaults to undefined


### Return type

void (empty response body)

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Redirect on SAML IDP for SSO |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSamlSsoSystemDomainIdIdentityProviderIdGet**
> authV1AuthSamlSsoSystemDomainIdIdentityProviderIdGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSamlSsoSystemDomainIdIdentityProviderIdGetRequest = {
  // string
  systemDomainId: "system_domain_id_example",
  // string
  identityProviderId: "identity_provider_id_example",
};

apiInstance.authV1AuthSamlSsoSystemDomainIdIdentityProviderIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemDomainId** | [**string**] |  | defaults to undefined
 **identityProviderId** | [**string**] |  | defaults to undefined


### Return type

void (empty response body)

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Redirect on SAML IDP for SSO |  -  |
**404** | Requested page does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthSimpleLoginPost**
> TokenSchema authV1AuthSimpleLoginPost(simpleLoginSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthSimpleLoginPostRequest = {
  // SimpleLoginSchema | body
  simpleLoginSchema: {
    appName: "appName_example",
    email: "email_example",
    marketplaceSignupNonce: "marketplaceSignupNonce_example",
    password: "password_example",
  },
};

apiInstance.authV1AuthSimpleLoginPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **simpleLoginSchema** | **SimpleLoginSchema**| body |


### Return type

**TokenSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a new generated token for particular user |  -  |
**400** | Bad request |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthTokenDelete**
> void authV1AuthTokenDelete()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthTokenDeleteRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AuthTokenDelete(body).then((data:any) => {
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
**200** | Returns if token was revoked |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthTokenGet**
> void authV1AuthTokenGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthTokenGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AuthTokenGet(body).then((data:any) => {
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
**200** | Returns if token valid |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthTokenPost**
> TokenSchema authV1AuthTokenPost()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthTokenPostRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AuthTokenPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**TokenSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a new token |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthTokenPut**
> TokenSchema authV1AuthTokenPut()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthTokenPutRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AuthTokenPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**TokenSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a new token |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthTokenTokenIdDelete**
> void authV1AuthTokenTokenIdDelete()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthTokenTokenIdDeleteRequest = {
  // string
  tokenId: "token_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AuthTokenTokenIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | [**string**] |  | defaults to undefined
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
**200** | Returns if token was revoked |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthTokenTokenIdGet**
> void authV1AuthTokenTokenIdGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthTokenTokenIdGetRequest = {
  // string
  tokenId: "token_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1AuthTokenTokenIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | [**string**] |  | defaults to undefined
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
**200** | Returns a token |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1AuthTokensGet**
> TokensSchema authV1AuthTokensGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1AuthTokensGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // number | The number of items for each page (optional)
  perPage: 10,
  // string | ID of a last file set on previous page (optional)
  lastId: "last_id_example",
};

apiInstance.authV1AuthTokensGet(body).then((data:any) => {
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

**TokensSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of tokens |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1MarketplaceGoogleLinkPost**
> void authV1MarketplaceGoogleLinkPost(marketplaceGoogleLinkSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1MarketplaceGoogleLinkPostRequest = {
  // MarketplaceGoogleLinkSchema | body
  marketplaceGoogleLinkSchema: {
    marketplaceSignupNonce: "marketplaceSignupNonce_example",
  },
};

apiInstance.authV1MarketplaceGoogleLinkPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceGoogleLinkSchema** | **MarketplaceGoogleLinkSchema**| body |


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
**200** | Successfully linked google account to existing system domain |  -  |
**400** | Bad request |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1MarketplaceGoogleSignupPost**
> authV1MarketplaceGoogleSignupPost()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1MarketplaceGoogleSignupPostRequest = {
  // string (optional)
  xGcpMarketplaceToken: "xGcpMarketplaceToken_example",
};

apiInstance.authV1MarketplaceGoogleSignupPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xGcpMarketplaceToken** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Redirects to the registration page |  -  |
**400** | Bad request |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1PasswordChecksGet**
> PasswordChecksSchema authV1PasswordChecksGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1PasswordChecksGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1PasswordChecksGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**PasswordChecksSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Password checks |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1PasswordForgotPost**
> void authV1PasswordForgotPost(forgotPasswordSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1PasswordForgotPostRequest = {
  // ForgotPasswordSchema | body
  forgotPasswordSchema: {
    email: "email_example",
  },
};

apiInstance.authV1PasswordForgotPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forgotPasswordSchema** | **ForgotPasswordSchema**| body |


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
**201** | Reset password email was sent to an email |  -  |
**400** | Bad request |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1PasswordResetHashChecksGet**
> PasswordChecksSchema authV1PasswordResetHashChecksGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1PasswordResetHashChecksGetRequest = {
  // string
  resetHash: "reset_hash_example",
};

apiInstance.authV1PasswordResetHashChecksGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetHash** | [**string**] |  | defaults to undefined


### Return type

**PasswordChecksSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Password checks |  -  |
**400** | Bad request |  -  |
**419** | Reset password token expired |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1PasswordResetResetHashPut**
> void authV1PasswordResetResetHashPut(resetPasswordSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1PasswordResetResetHashPutRequest = {
  // string
  resetHash: "reset_hash_example",
  // ResetPasswordSchema | body
  resetPasswordSchema: {
    password: "password_example",
    repeatPassword: "repeatPassword_example",
  },
};

apiInstance.authV1PasswordResetResetHashPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetPasswordSchema** | **ResetPasswordSchema**| body |
 **resetHash** | [**string**] |  | defaults to undefined


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
**200** | Password was changed |  -  |
**400** | Bad request |  -  |
**419** | Authentication token expired |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1ReferralCodesCodeDelete**
> void authV1ReferralCodesCodeDelete()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1ReferralCodesCodeDeleteRequest = {
  // string
  code: "code_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1ReferralCodesCodeDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] |  | defaults to undefined
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
**204** | OK |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1ReferralCodesCodeGet**
> ReferralCodeSchema authV1ReferralCodesCodeGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1ReferralCodesCodeGetRequest = {
  // string
  code: "code_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1ReferralCodesCodeGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ReferralCodeSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a referral_code |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1ReferralCodesGet**
> ReferralCodesSchema authV1ReferralCodesGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1ReferralCodesGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1ReferralCodesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ReferralCodesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a referral_code |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1ReferralCodesPost**
> ReferralCodeSchema authV1ReferralCodesPost(referralCodeSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1ReferralCodesPostRequest = {
  // ReferralCodeSchema | body
  referralCodeSchema: {
    code: "code_example",
    doNotDelete: true,
    manageSystemDomainId: "manageSystemDomainId_example",
    ordwayCustomerId: "ordwayCustomerId_example",
    salesForceId: "salesForceId_example",
    validTo: new Date('1970-01-01T00:00:00.00Z'),
    value: 3.14,
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1ReferralCodesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referralCodeSchema** | **ReferralCodeSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ReferralCodeSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created referral_code |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**409** | Code already exists |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1RegistrationsCountriesGet**
> CountriesSchema authV1RegistrationsCountriesGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1RegistrationsCountriesGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1RegistrationsCountriesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**CountriesSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of countries |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1RegistrationsPost**
> RegistrationSchema authV1RegistrationsPost(registrationSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1RegistrationsPostRequest = {
  // RegistrationSchema | body
  registrationSchema: {
    companyName: "companyName_example",
    country: "country_example",
    email: "email_example",
    firstName: "firstName_example",
    lastName: "lastName_example",
    marketplaceSignupNonce: "marketplaceSignupNonce_example",
    ordwayCustomerId: "ordwayCustomerId_example",
    ordwaySubscriptionId: "ordwaySubscriptionId_example",
    password: "password_example",
    referralCode: "referralCode_example",
    stripeId: "stripeId_example",
  },
};

apiInstance.authV1RegistrationsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationSchema** | **RegistrationSchema**| body |


### Return type

**RegistrationSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created registration |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1RegistrationsVerifyEmailHashPost**
> SystemDomainFromTemplateSchema authV1RegistrationsVerifyEmailHashPost()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1RegistrationsVerifyEmailHashPostRequest = {
  // string
  emailHash: "email_hash_example",
};

apiInstance.authV1RegistrationsVerifyEmailHashPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailHash** | [**string**] |  | defaults to undefined


### Return type

**SystemDomainFromTemplateSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created system domain |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1SystemDomainsGet**
> SystemDomainsSchema authV1SystemDomainsGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1SystemDomainsGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
  // string | Query the name (optional)
  query: "query_example",
  // string | Comma separated list of statuses to show (optional)
  statuses: "statuses_example",
};

apiInstance.authV1SystemDomainsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined
 **query** | [**string**] | Query the name | (optional) defaults to undefined
 **statuses** | [**string**] | Comma separated list of statuses to show | (optional) defaults to undefined


### Return type

**SystemDomainsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of system domains |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1SystemDomainsPost**
> SystemDomainSchema authV1SystemDomainsPost(systemDomainSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1SystemDomainsPostRequest = {
  // SystemDomainSchema | body
  systemDomainSchema: {
    baseUrl: "baseUrl_example",
    description: "description_example",
    name: "name_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1SystemDomainsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemDomainSchema** | **SystemDomainSchema**| body |
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SystemDomainSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created system domain |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1SystemDomainsReferralCodeReferralCodePost**
> SystemDomainFromTemplateSchema authV1SystemDomainsReferralCodeReferralCodePost(systemDomainFromReferralCodeSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1SystemDomainsReferralCodeReferralCodePostRequest = {
  // string
  referralCode: "referral_code_example",
  // SystemDomainFromReferralCodeSchema | body
  systemDomainFromReferralCodeSchema: {
    adminEmail: "adminEmail_example",
    adminFirstName: "adminFirstName_example",
    adminLastName: "adminLastName_example",
    adminPassword: "adminPassword_example",
    countryCode: "countryCode_example",
    description: "description_example",
    name: "name_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1SystemDomainsReferralCodeReferralCodePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemDomainFromReferralCodeSchema** | **SystemDomainFromReferralCodeSchema**| body |
 **referralCode** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SystemDomainFromTemplateSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns a created system domain |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1SystemDomainsSystemDomainIdDelete**
> void authV1SystemDomainsSystemDomainIdDelete()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1SystemDomainsSystemDomainIdDeleteRequest = {
  // string
  systemDomainId: "system_domain_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1SystemDomainsSystemDomainIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemDomainId** | [**string**] |  | defaults to undefined
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

# **authV1SystemDomainsSystemDomainIdE2eDelete**
> void authV1SystemDomainsSystemDomainIdE2eDelete()

(For internal use. Should not be displayed in Swagger docs)

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1SystemDomainsSystemDomainIdE2eDeleteRequest = {
  // string
  systemDomainId: "system_domain_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1SystemDomainsSystemDomainIdE2eDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemDomainId** | [**string**] |  | defaults to undefined
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

# **authV1SystemDomainsSystemDomainIdGet**
> SystemDomainSchema authV1SystemDomainsSystemDomainIdGet()

 Required roles:  - can_read_system_domains 

### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1SystemDomainsSystemDomainIdGetRequest = {
  // string
  systemDomainId: "system_domain_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1SystemDomainsSystemDomainIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemDomainId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SystemDomainSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a system domain |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | System domain does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1SystemDomainsSystemDomainIdLogoDelete**
> void authV1SystemDomainsSystemDomainIdLogoDelete()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1SystemDomainsSystemDomainIdLogoDeleteRequest = {
  // string
  systemDomainId: "system_domain_id_example",
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1SystemDomainsSystemDomainIdLogoDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemDomainId** | [**string**] |  | defaults to undefined
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
**404** | System domain does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1SystemDomainsSystemDomainIdLogoPost**
> AuthV1SystemDomainsSystemDomainIdLogoPost201Response authV1SystemDomainsSystemDomainIdLogoPost(authV1SystemDomainsSystemDomainIdLogoPostRequest)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1SystemDomainsSystemDomainIdLogoPostRequest = {
  // string
  systemDomainId: "system_domain_id_example",
  // AuthV1SystemDomainsSystemDomainIdLogoPostRequest
  authV1SystemDomainsSystemDomainIdLogoPostRequest: {
    logo: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1SystemDomainsSystemDomainIdLogoPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authV1SystemDomainsSystemDomainIdLogoPostRequest** | **AuthV1SystemDomainsSystemDomainIdLogoPostRequest**|  |
 **systemDomainId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AuthV1SystemDomainsSystemDomainIdLogoPost201Response**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: image/*
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns url for system domain logo |  -  |
**400** | Bad request |  -  |
**404** | System domain does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1SystemDomainsSystemDomainIdPatch**
> SystemDomainSchema authV1SystemDomainsSystemDomainIdPatch(systemDomainSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1SystemDomainsSystemDomainIdPatchRequest = {
  // string
  systemDomainId: "system_domain_id_example",
  // SystemDomainSchema | body
  systemDomainSchema: {
    baseUrl: "baseUrl_example",
    description: "description_example",
    name: "name_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1SystemDomainsSystemDomainIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemDomainSchema** | **SystemDomainSchema**| body |
 **systemDomainId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SystemDomainSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated system domain |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | System domain does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1SystemDomainsSystemDomainIdPut**
> SystemDomainSchema authV1SystemDomainsSystemDomainIdPut(systemDomainSchema)



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1SystemDomainsSystemDomainIdPutRequest = {
  // string
  systemDomainId: "system_domain_id_example",
  // SystemDomainSchema | body
  systemDomainSchema: {
    baseUrl: "baseUrl_example",
    description: "description_example",
    name: "name_example",
  },
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1SystemDomainsSystemDomainIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemDomainSchema** | **SystemDomainSchema**| body |
 **systemDomainId** | [**string**] |  | defaults to undefined
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SystemDomainSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated system domain |  -  |
**400** | Bad request |  -  |
**401** | Token is invalid |  -  |
**404** | System domain does not exist |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authV1SystemDomainsTemplatesGet**
> SystemDomainsSchema authV1SystemDomainsTemplatesGet()



### Example


```typescript
import { iconik } from 'iconik-typescript';
import * as fs from 'fs';

const configuration = iconik.createConfiguration();
const apiInstance = new iconik.AuthApi(configuration);

let body:iconik.AuthApiAuthV1SystemDomainsTemplatesGetRequest = {
  // string (optional)
  appID: "App-ID_example",
  // string (optional)
  authToken: "Auth-Token_example",
};

apiInstance.authV1SystemDomainsTemplatesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appID** | [**string**] |  | (optional) defaults to undefined
 **authToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SystemDomainsSchema**

### Authorization

[authToken](README.md#authToken), [appId](README.md#appId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of system domain templates |  -  |
**401** | Token is invalid |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


