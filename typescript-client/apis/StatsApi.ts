// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AclsV1AclPostDefaultResponse } from '../models/AclsV1AclPostDefaultResponse';
import { AssetUsageSchema } from '../models/AssetUsageSchema';
import { BillingCreditsSchema } from '../models/BillingCreditsSchema';
import { BillingCreditsVerifySchema } from '../models/BillingCreditsVerifySchema';
import { BillingCustomerCardSchema } from '../models/BillingCustomerCardSchema';
import { BillingCustomerSchema } from '../models/BillingCustomerSchema';
import { BillingReceiptSchema } from '../models/BillingReceiptSchema';
import { BillingRecipientsSchema } from '../models/BillingRecipientsSchema';
import { BillingSchema } from '../models/BillingSchema';
import { BillingSettingsSchema } from '../models/BillingSettingsSchema';
import { BillingStatsSchema } from '../models/BillingStatsSchema';
import { BillingsSchema } from '../models/BillingsSchema';
import { CollectionUsageSchema } from '../models/CollectionUsageSchema';
import { CreditsSchema } from '../models/CreditsSchema';
import { LogsRecipientReadSchema } from '../models/LogsRecipientReadSchema';
import { LogsRecipientSchema } from '../models/LogsRecipientSchema';
import { LogsRecipientsSchema } from '../models/LogsRecipientsSchema';
import { PriceSchema } from '../models/PriceSchema';
import { PricesSchema } from '../models/PricesSchema';
import { StatsV1SystemLogsRecipientsLogsRecipientIdPost200Response } from '../models/StatsV1SystemLogsRecipientsLogsRecipientIdPost200Response';
import { StorageAccessesSchema } from '../models/StorageAccessesSchema';
import { StorageUsagesSchema } from '../models/StorageUsagesSchema';
import { TranscoderUsagesSchema } from '../models/TranscoderUsagesSchema';
import { UserUsagesSchema } from '../models/UserUsagesSchema';

/**
 * no description
 */
export class StatsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     *  Required roles:  - can_read_stats 
     * Returns all asset usage
     * @param appID 
     * @param authToken 
     * @param period Period of stats (month or day)
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public async statsV1AssetsByPeriodGet(appID: string, authToken: string, period: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1AssetsByPeriodGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1AssetsByPeriodGet", "authToken");
        }


        // verify required parameter 'period' is not null or undefined
        if (period === null || period === undefined) {
            throw new RequiredError("StatsApi", "statsV1AssetsByPeriodGet", "period");
        }




        // Path Params
        const localVarPath = '/stats/v1/assets/by/{period}/'
            .replace('{' + 'period' + '}', encodeURIComponent(String(period)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromDate !== undefined) {
            requestContext.setQueryParam("from_date", ObjectSerializer.serialize(fromDate, "string", ""));
        }

        // Query Params
        if (toDate !== undefined) {
            requestContext.setQueryParam("to_date", ObjectSerializer.serialize(toDate, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * <br/>system_domain_id will be automatically added when<br/>posting to this end point.
     * Sets asset usage.
     * @param appID 
     * @param authToken 
     * @param assetUsageSchema body
     */
    public async statsV1AssetsPost(appID: string, authToken: string, assetUsageSchema: AssetUsageSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1AssetsPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1AssetsPost", "authToken");
        }


        // verify required parameter 'assetUsageSchema' is not null or undefined
        if (assetUsageSchema === null || assetUsageSchema === undefined) {
            throw new RequiredError("StatsApi", "statsV1AssetsPost", "assetUsageSchema");
        }


        // Path Params
        const localVarPath = '/stats/v1/assets/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(assetUsageSchema, "AssetUsageSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing receipt
     * @param appID 
     * @param authToken 
     * @param chargeId 
     */
    public async statsV1BillingChargesChargeIdReceiptUrlGet(appID: string, authToken: string, chargeId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingChargesChargeIdReceiptUrlGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingChargesChargeIdReceiptUrlGet", "authToken");
        }


        // verify required parameter 'chargeId' is not null or undefined
        if (chargeId === null || chargeId === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingChargesChargeIdReceiptUrlGet", "chargeId");
        }


        // Path Params
        const localVarPath = '/stats/v1/billing/charges/{charge_id}/receipt_url/'
            .replace('{' + 'charge_id' + '}', encodeURIComponent(String(chargeId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_billing 
     * Add credits to an account
     * @param appID 
     * @param authToken 
     * @param billingCreditsSchema body
     */
    public async statsV1BillingCreditsPost(appID: string, authToken: string, billingCreditsSchema: BillingCreditsSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingCreditsPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingCreditsPost", "authToken");
        }


        // verify required parameter 'billingCreditsSchema' is not null or undefined
        if (billingCreditsSchema === null || billingCreditsSchema === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingCreditsPost", "billingCreditsSchema");
        }


        // Path Params
        const localVarPath = '/stats/v1/billing/credits/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(billingCreditsSchema, "BillingCreditsSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_billing 
     * Checks the total price that needs to be paid including VAT if it\'s needed
     * @param appID 
     * @param authToken 
     * @param credits 
     */
    public async statsV1BillingCreditsPriceGet(appID: string, authToken: string, credits: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingCreditsPriceGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingCreditsPriceGet", "authToken");
        }


        // verify required parameter 'credits' is not null or undefined
        if (credits === null || credits === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingCreditsPriceGet", "credits");
        }


        // Path Params
        const localVarPath = '/stats/v1/billing/credits/price/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (credits !== undefined) {
            requestContext.setQueryParam("credits", ObjectSerializer.serialize(credits, "number", "int32"));
        }

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_billing 
     * Verify status of add credits to an account
     * @param appID 
     * @param authToken 
     * @param billingCreditsVerifySchema body
     */
    public async statsV1BillingCreditsVerifyPost(appID: string, authToken: string, billingCreditsVerifySchema: BillingCreditsVerifySchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingCreditsVerifyPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingCreditsVerifyPost", "authToken");
        }


        // verify required parameter 'billingCreditsVerifySchema' is not null or undefined
        if (billingCreditsVerifySchema === null || billingCreditsVerifySchema === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingCreditsVerifyPost", "billingCreditsVerifySchema");
        }


        // Path Params
        const localVarPath = '/stats/v1/billing/credits/verify/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(billingCreditsVerifySchema, "BillingCreditsVerifySchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_billing 
     * Creates billing customer card
     * @param appID 
     * @param authToken 
     */
    public async statsV1BillingCustomerCardDelete(appID: string, authToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingCustomerCardDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingCustomerCardDelete", "authToken");
        }


        // Path Params
        const localVarPath = '/stats/v1/billing/customer/card/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_billing 
     * Creates billing customer card
     * @param appID 
     * @param authToken 
     * @param billingCustomerCardSchema body
     */
    public async statsV1BillingCustomerCardPost(appID: string, authToken: string, billingCustomerCardSchema: BillingCustomerCardSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingCustomerCardPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingCustomerCardPost", "authToken");
        }


        // verify required parameter 'billingCustomerCardSchema' is not null or undefined
        if (billingCustomerCardSchema === null || billingCustomerCardSchema === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingCustomerCardPost", "billingCustomerCardSchema");
        }


        // Path Params
        const localVarPath = '/stats/v1/billing/customer/card/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(billingCustomerCardSchema, "BillingCustomerCardSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing customer
     * @param appID 
     * @param authToken 
     * @param billingSchema body
     */
    public async statsV1BillingCustomerGet(appID: string, authToken: string, billingSchema: BillingSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingCustomerGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingCustomerGet", "authToken");
        }


        // verify required parameter 'billingSchema' is not null or undefined
        if (billingSchema === null || billingSchema === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingCustomerGet", "billingSchema");
        }


        // Path Params
        const localVarPath = '/stats/v1/billing/customer/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(billingSchema, "BillingSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_billing 
     * Updates billing customer
     * @param appID 
     * @param authToken 
     * @param billingCustomerSchema body
     */
    public async statsV1BillingCustomerPost(appID: string, authToken: string, billingCustomerSchema: BillingCustomerSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingCustomerPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingCustomerPost", "authToken");
        }


        // verify required parameter 'billingCustomerSchema' is not null or undefined
        if (billingCustomerSchema === null || billingCustomerSchema === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingCustomerPost", "billingCustomerSchema");
        }


        // Path Params
        const localVarPath = '/stats/v1/billing/customer/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(billingCustomerSchema, "BillingCustomerSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns billing info
     * @param appID 
     * @param authToken 
     * @param fromDate Filter by from_date
     * @param toDate Filter by from_date
     * @param perPage The number of items for each page
     * @param lastId ID of a last file on previous page
     */
    public async statsV1BillingGet(appID: string, authToken: string, fromDate?: string, toDate?: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingGet", "authToken");
        }






        // Path Params
        const localVarPath = '/stats/v1/billing/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromDate !== undefined) {
            requestContext.setQueryParam("from_date", ObjectSerializer.serialize(fromDate, "string", ""));
        }

        // Query Params
        if (toDate !== undefined) {
            requestContext.setQueryParam("to_date", ObjectSerializer.serialize(toDate, "string", ""));
        }

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int32"));
        }

        // Query Params
        if (lastId !== undefined) {
            requestContext.setQueryParam("last_id", ObjectSerializer.serialize(lastId, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing invoices
     * @param appID 
     * @param authToken 
     * @param startingAfter 
     * @param limit 
     */
    public async statsV1BillingInvoicesGet(appID: string, authToken: string, startingAfter?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingInvoicesGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingInvoicesGet", "authToken");
        }




        // Path Params
        const localVarPath = '/stats/v1/billing/invoices/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (startingAfter !== undefined) {
            requestContext.setQueryParam("starting_after", ObjectSerializer.serialize(startingAfter, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * Updates Billing (Requires super admin access).
     * @param appID 
     * @param authToken 
     * @param billingSchema body
     */
    public async statsV1BillingPost(appID: string, authToken: string, billingSchema: BillingSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingPost", "authToken");
        }


        // verify required parameter 'billingSchema' is not null or undefined
        if (billingSchema === null || billingSchema === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingPost", "billingSchema");
        }


        // Path Params
        const localVarPath = '/stats/v1/billing/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(billingSchema, "BillingSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * Get All Price Lists
     * @param appID 
     * @param authToken 
     */
    public async statsV1BillingPriceListsGet(appID: string, authToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingPriceListsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingPriceListsGet", "authToken");
        }


        // Path Params
        const localVarPath = '/stats/v1/billing/price_lists/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * Delete a Price list
     * @param appID 
     * @param authToken 
     * @param name 
     * @param currency 
     */
    public async statsV1BillingPriceListsNameCurrencyDelete(appID: string, authToken: string, name: string, currency: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingPriceListsNameCurrencyDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingPriceListsNameCurrencyDelete", "authToken");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingPriceListsNameCurrencyDelete", "name");
        }


        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingPriceListsNameCurrencyDelete", "currency");
        }


        // Path Params
        const localVarPath = '/stats/v1/billing/price_lists/{name}/{currency}/'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'currency' + '}', encodeURIComponent(String(currency)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * Get a Price List
     * @param appID 
     * @param authToken 
     * @param name 
     * @param currency 
     */
    public async statsV1BillingPriceListsNameCurrencyGet(appID: string, authToken: string, name: string, currency: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingPriceListsNameCurrencyGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingPriceListsNameCurrencyGet", "authToken");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingPriceListsNameCurrencyGet", "name");
        }


        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingPriceListsNameCurrencyGet", "currency");
        }


        // Path Params
        const localVarPath = '/stats/v1/billing/price_lists/{name}/{currency}/'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'currency' + '}', encodeURIComponent(String(currency)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * Creates or updates a Price List
     * @param appID 
     * @param authToken 
     * @param priceSchema body
     */
    public async statsV1BillingPriceListsPut(appID: string, authToken: string, priceSchema: PriceSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingPriceListsPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingPriceListsPut", "authToken");
        }


        // verify required parameter 'priceSchema' is not null or undefined
        if (priceSchema === null || priceSchema === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingPriceListsPut", "priceSchema");
        }


        // Path Params
        const localVarPath = '/stats/v1/billing/price_lists/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(priceSchema, "PriceSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_billing 
     * Updates Billing Recipients
     * @param appID 
     * @param authToken 
     */
    public async statsV1BillingRecipientsGet(appID: string, authToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingRecipientsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingRecipientsGet", "authToken");
        }


        // Path Params
        const localVarPath = '/stats/v1/billing/recipients/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_billing 
     * Updates Billing Recipients
     * @param appID 
     * @param authToken 
     * @param billingRecipientsSchema body
     */
    public async statsV1BillingRecipientsPut(appID: string, authToken: string, billingRecipientsSchema: BillingRecipientsSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingRecipientsPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingRecipientsPut", "authToken");
        }


        // verify required parameter 'billingRecipientsSchema' is not null or undefined
        if (billingRecipientsSchema === null || billingRecipientsSchema === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingRecipientsPut", "billingRecipientsSchema");
        }


        // Path Params
        const localVarPath = '/stats/v1/billing/recipients/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(billingRecipientsSchema, "BillingRecipientsSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_billing 
     * Updates Billing Settings
     * @param appID 
     * @param authToken 
     */
    public async statsV1BillingSettingsGet(appID: string, authToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingSettingsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingSettingsGet", "authToken");
        }


        // Path Params
        const localVarPath = '/stats/v1/billing/settings/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_billing 
     * Updates Billing Settings
     * @param appID 
     * @param authToken 
     * @param billingSettingsSchema body
     */
    public async statsV1BillingSettingsPut(appID: string, authToken: string, billingSettingsSchema: BillingSettingsSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingSettingsPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingSettingsPut", "authToken");
        }


        // verify required parameter 'billingSettingsSchema' is not null or undefined
        if (billingSettingsSchema === null || billingSettingsSchema === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingSettingsPut", "billingSettingsSchema");
        }


        // Path Params
        const localVarPath = '/stats/v1/billing/settings/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(billingSettingsSchema, "BillingSettingsSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing status
     * @param appID 
     * @param authToken 
     */
    public async statsV1BillingStatusGet(appID: string, authToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingStatusGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingStatusGet", "authToken");
        }


        // Path Params
        const localVarPath = '/stats/v1/billing/status/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * Delete billing record (Requires super admin access).
     * @param appID 
     * @param authToken 
     * @param systemDomainId 
     * @param billingId 
     */
    public async statsV1BillingSystemDomainIdBillingIdDelete(appID: string, authToken: string, systemDomainId: string, billingId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingSystemDomainIdBillingIdDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingSystemDomainIdBillingIdDelete", "authToken");
        }


        // verify required parameter 'systemDomainId' is not null or undefined
        if (systemDomainId === null || systemDomainId === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingSystemDomainIdBillingIdDelete", "systemDomainId");
        }


        // verify required parameter 'billingId' is not null or undefined
        if (billingId === null || billingId === undefined) {
            throw new RequiredError("StatsApi", "statsV1BillingSystemDomainIdBillingIdDelete", "billingId");
        }


        // Path Params
        const localVarPath = '/stats/v1/billing/{system_domain_id}/{billing_id}/'
            .replace('{' + 'system_domain_id' + '}', encodeURIComponent(String(systemDomainId)))
            .replace('{' + 'billing_id' + '}', encodeURIComponent(String(billingId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns all collection usage
     * @param appID 
     * @param authToken 
     * @param period Period of stats (month or day)
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public async statsV1CollectionsByPeriodGet(appID: string, authToken: string, period: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1CollectionsByPeriodGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1CollectionsByPeriodGet", "authToken");
        }


        // verify required parameter 'period' is not null or undefined
        if (period === null || period === undefined) {
            throw new RequiredError("StatsApi", "statsV1CollectionsByPeriodGet", "period");
        }




        // Path Params
        const localVarPath = '/stats/v1/collections/by/{period}/'
            .replace('{' + 'period' + '}', encodeURIComponent(String(period)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromDate !== undefined) {
            requestContext.setQueryParam("from_date", ObjectSerializer.serialize(fromDate, "string", ""));
        }

        // Query Params
        if (toDate !== undefined) {
            requestContext.setQueryParam("to_date", ObjectSerializer.serialize(toDate, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * Internal endpoint to convert ID to system domain
     * @param appID 
     * @param authToken 
     * @param objectId Object ID
     */
    public async statsV1IdObjectIdInfoGet(appID: string, authToken: string, objectId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1IdObjectIdInfoGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1IdObjectIdInfoGet", "authToken");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("StatsApi", "statsV1IdObjectIdInfoGet", "objectId");
        }


        // Path Params
        const localVarPath = '/stats/v1/id/{object_id}/info/'
            .replace('{' + 'object_id' + '}', encodeURIComponent(String(objectId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing customer
     * @param appID 
     * @param authToken 
     */
    public async statsV1OrdwayBillingCustomerGet(appID: string, authToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1OrdwayBillingCustomerGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1OrdwayBillingCustomerGet", "authToken");
        }


        // Path Params
        const localVarPath = '/stats/v1/ordway/billing/customer/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns billing info
     * @param appID 
     * @param authToken 
     * @param fromDate Filter by from_date
     * @param toDate Filter by from_date
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     */
    public async statsV1OrdwayBillingGet(appID: string, authToken: string, fromDate?: string, toDate?: string, perPage?: number, page?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1OrdwayBillingGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1OrdwayBillingGet", "authToken");
        }






        // Path Params
        const localVarPath = '/stats/v1/ordway/billing/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromDate !== undefined) {
            requestContext.setQueryParam("from_date", ObjectSerializer.serialize(fromDate, "string", ""));
        }

        // Query Params
        if (toDate !== undefined) {
            requestContext.setQueryParam("to_date", ObjectSerializer.serialize(toDate, "string", ""));
        }

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int32"));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_billing 
     * Returns billing invoices
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param page Which page number to fetch
     */
    public async statsV1OrdwayBillingInvoicesGet(appID: string, authToken: string, perPage?: number, page?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1OrdwayBillingInvoicesGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1OrdwayBillingInvoicesGet", "authToken");
        }




        // Path Params
        const localVarPath = '/stats/v1/ordway/billing/invoices/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int32"));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns storage_access for all storages
     * @param appID 
     * @param authToken 
     * @param period Period of stats (month or day)
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public async statsV1StorageAccessByPeriodGet(appID: string, authToken: string, period: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1StorageAccessByPeriodGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1StorageAccessByPeriodGet", "authToken");
        }


        // verify required parameter 'period' is not null or undefined
        if (period === null || period === undefined) {
            throw new RequiredError("StatsApi", "statsV1StorageAccessByPeriodGet", "period");
        }




        // Path Params
        const localVarPath = '/stats/v1/storage/access/by/{period}/'
            .replace('{' + 'period' + '}', encodeURIComponent(String(period)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromDate !== undefined) {
            requestContext.setQueryParam("from_date", ObjectSerializer.serialize(fromDate, "string", ""));
        }

        // Query Params
        if (toDate !== undefined) {
            requestContext.setQueryParam("to_date", ObjectSerializer.serialize(toDate, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns storage_usage for all storages
     * @param appID 
     * @param authToken 
     * @param period Period of stats (month or day)
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public async statsV1StorageUsageByPeriodGet(appID: string, authToken: string, period: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1StorageUsageByPeriodGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1StorageUsageByPeriodGet", "authToken");
        }


        // verify required parameter 'period' is not null or undefined
        if (period === null || period === undefined) {
            throw new RequiredError("StatsApi", "statsV1StorageUsageByPeriodGet", "period");
        }




        // Path Params
        const localVarPath = '/stats/v1/storage/usage/by/{period}/'
            .replace('{' + 'period' + '}', encodeURIComponent(String(period)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromDate !== undefined) {
            requestContext.setQueryParam("from_date", ObjectSerializer.serialize(fromDate, "string", ""));
        }

        // Query Params
        if (toDate !== undefined) {
            requestContext.setQueryParam("to_date", ObjectSerializer.serialize(toDate, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_logs_recipients 
     * Get logs recipients settings
     * @param appID 
     * @param authToken 
     * @param perPage The number of items for each page
     * @param lastId ID of a last service account set on previous page
     */
    public async statsV1SystemLogsRecipientsGet(appID: string, authToken: string, perPage?: number, lastId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsGet", "authToken");
        }




        // Path Params
        const localVarPath = '/stats/v1/system/logs/recipients/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", ""));
        }

        // Query Params
        if (lastId !== undefined) {
            requestContext.setQueryParam("last_id", ObjectSerializer.serialize(lastId, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_delete_logs_recipients 
     * Delete logs recipient settings
     * @param appID 
     * @param authToken 
     * @param logsRecipientId 
     */
    public async statsV1SystemLogsRecipientsLogsRecipientIdDelete(appID: string, authToken: string, logsRecipientId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsLogsRecipientIdDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsLogsRecipientIdDelete", "authToken");
        }


        // verify required parameter 'logsRecipientId' is not null or undefined
        if (logsRecipientId === null || logsRecipientId === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsLogsRecipientIdDelete", "logsRecipientId");
        }


        // Path Params
        const localVarPath = '/stats/v1/system/logs/recipients/{logs_recipient_id}/'
            .replace('{' + 'logs_recipient_id' + '}', encodeURIComponent(String(logsRecipientId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_logs_recipients 
     * Get settings of a logs recipient
     * @param appID 
     * @param authToken 
     * @param logsRecipientId 
     */
    public async statsV1SystemLogsRecipientsLogsRecipientIdGet(appID: string, authToken: string, logsRecipientId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsLogsRecipientIdGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsLogsRecipientIdGet", "authToken");
        }


        // verify required parameter 'logsRecipientId' is not null or undefined
        if (logsRecipientId === null || logsRecipientId === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsLogsRecipientIdGet", "logsRecipientId");
        }


        // Path Params
        const localVarPath = '/stats/v1/system/logs/recipients/{logs_recipient_id}/'
            .replace('{' + 'logs_recipient_id' + '}', encodeURIComponent(String(logsRecipientId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_logs_recipients 
     * Change logs recipient settings
     * @param appID 
     * @param authToken 
     * @param logsRecipientId 
     * @param logsRecipientSchema body
     */
    public async statsV1SystemLogsRecipientsLogsRecipientIdPatch(appID: string, authToken: string, logsRecipientId: string, logsRecipientSchema: LogsRecipientSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsLogsRecipientIdPatch", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsLogsRecipientIdPatch", "authToken");
        }


        // verify required parameter 'logsRecipientId' is not null or undefined
        if (logsRecipientId === null || logsRecipientId === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsLogsRecipientIdPatch", "logsRecipientId");
        }


        // verify required parameter 'logsRecipientSchema' is not null or undefined
        if (logsRecipientSchema === null || logsRecipientSchema === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsLogsRecipientIdPatch", "logsRecipientSchema");
        }


        // Path Params
        const localVarPath = '/stats/v1/system/logs/recipients/{logs_recipient_id}/'
            .replace('{' + 'logs_recipient_id' + '}', encodeURIComponent(String(logsRecipientId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(logsRecipientSchema, "LogsRecipientSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_logs_recipients 
     * Test logs recipient connection
     * @param appID 
     * @param authToken 
     * @param logsRecipientId 
     */
    public async statsV1SystemLogsRecipientsLogsRecipientIdPost(appID: string, authToken: string, logsRecipientId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsLogsRecipientIdPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsLogsRecipientIdPost", "authToken");
        }


        // verify required parameter 'logsRecipientId' is not null or undefined
        if (logsRecipientId === null || logsRecipientId === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsLogsRecipientIdPost", "logsRecipientId");
        }


        // Path Params
        const localVarPath = '/stats/v1/system/logs/recipients/{logs_recipient_id}/'
            .replace('{' + 'logs_recipient_id' + '}', encodeURIComponent(String(logsRecipientId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_logs_recipients 
     * Change logs recipient settings
     * @param appID 
     * @param authToken 
     * @param logsRecipientId 
     * @param logsRecipientSchema body
     */
    public async statsV1SystemLogsRecipientsLogsRecipientIdPut(appID: string, authToken: string, logsRecipientId: string, logsRecipientSchema: LogsRecipientSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsLogsRecipientIdPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsLogsRecipientIdPut", "authToken");
        }


        // verify required parameter 'logsRecipientId' is not null or undefined
        if (logsRecipientId === null || logsRecipientId === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsLogsRecipientIdPut", "logsRecipientId");
        }


        // verify required parameter 'logsRecipientSchema' is not null or undefined
        if (logsRecipientSchema === null || logsRecipientSchema === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsLogsRecipientIdPut", "logsRecipientSchema");
        }


        // Path Params
        const localVarPath = '/stats/v1/system/logs/recipients/{logs_recipient_id}/'
            .replace('{' + 'logs_recipient_id' + '}', encodeURIComponent(String(logsRecipientId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(logsRecipientSchema, "LogsRecipientSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_logs_recipients 
     * Create logs recipient settings
     * @param appID 
     * @param authToken 
     * @param logsRecipientSchema body
     */
    public async statsV1SystemLogsRecipientsPost(appID: string, authToken: string, logsRecipientSchema: LogsRecipientSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsPost", "authToken");
        }


        // verify required parameter 'logsRecipientSchema' is not null or undefined
        if (logsRecipientSchema === null || logsRecipientSchema === undefined) {
            throw new RequiredError("StatsApi", "statsV1SystemLogsRecipientsPost", "logsRecipientSchema");
        }


        // Path Params
        const localVarPath = '/stats/v1/system/logs/recipients/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(logsRecipientSchema, "LogsRecipientSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns transcoder_usage for all transcoders
     * @param appID 
     * @param authToken 
     * @param period 
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     */
    public async statsV1TranscoderUsageByPeriodGet(appID: string, authToken: string, period: string, fromDate?: string, toDate?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1TranscoderUsageByPeriodGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1TranscoderUsageByPeriodGet", "authToken");
        }


        // verify required parameter 'period' is not null or undefined
        if (period === null || period === undefined) {
            throw new RequiredError("StatsApi", "statsV1TranscoderUsageByPeriodGet", "period");
        }




        // Path Params
        const localVarPath = '/stats/v1/transcoder/usage/by/{period}/'
            .replace('{' + 'period' + '}', encodeURIComponent(String(period)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromDate !== undefined) {
            requestContext.setQueryParam("from_date", ObjectSerializer.serialize(fromDate, "string", ""));
        }

        // Query Params
        if (toDate !== undefined) {
            requestContext.setQueryParam("to_date", ObjectSerializer.serialize(toDate, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_stats 
     * Returns all audit
     * @param appID 
     * @param authToken 
     * @param period Period of stats (month, day or day_detailed)
     * @param fromDate Filter by from_date
     * @param toDate Filter by to_date
     * @param systemDomainId Filter by system_domain_id (Only for super admins)
     */
    public async statsV1UserAuditByPeriodGet(appID: string, authToken: string, period: string, fromDate?: string, toDate?: string, systemDomainId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("StatsApi", "statsV1UserAuditByPeriodGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("StatsApi", "statsV1UserAuditByPeriodGet", "authToken");
        }


        // verify required parameter 'period' is not null or undefined
        if (period === null || period === undefined) {
            throw new RequiredError("StatsApi", "statsV1UserAuditByPeriodGet", "period");
        }





        // Path Params
        const localVarPath = '/stats/v1/user/audit/by/{period}/'
            .replace('{' + 'period' + '}', encodeURIComponent(String(period)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromDate !== undefined) {
            requestContext.setQueryParam("from_date", ObjectSerializer.serialize(fromDate, "string", ""));
        }

        // Query Params
        if (toDate !== undefined) {
            requestContext.setQueryParam("to_date", ObjectSerializer.serialize(toDate, "string", ""));
        }

        // Query Params
        if (systemDomainId !== undefined) {
            requestContext.setQueryParam("system_domain_id", ObjectSerializer.serialize(systemDomainId, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class StatsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1AssetsByPeriodGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1AssetsByPeriodGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetUsageSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssetUsageSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetUsageSchema", ""
            ) as AssetUsageSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AssetUsageSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetUsageSchema", ""
            ) as AssetUsageSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1AssetsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1AssetsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssetUsageSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: AssetUsageSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetUsageSchema", ""
            ) as AssetUsageSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AssetUsageSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssetUsageSchema", ""
            ) as AssetUsageSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingChargesChargeIdReceiptUrlGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingChargesChargeIdReceiptUrlGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BillingReceiptSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BillingReceiptSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingReceiptSchema", ""
            ) as BillingReceiptSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BillingReceiptSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingReceiptSchema", ""
            ) as BillingReceiptSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingCreditsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingCreditsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BillingCreditsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BillingCreditsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingCreditsSchema", ""
            ) as BillingCreditsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BillingCreditsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingCreditsSchema", ""
            ) as BillingCreditsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingCreditsPriceGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingCreditsPriceGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreditsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CreditsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreditsSchema", ""
            ) as CreditsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreditsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreditsSchema", ""
            ) as CreditsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingCreditsVerifyPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingCreditsVerifyPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BillingCreditsVerifySchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BillingCreditsVerifySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingCreditsVerifySchema", ""
            ) as BillingCreditsVerifySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BillingCreditsVerifySchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingCreditsVerifySchema", ""
            ) as BillingCreditsVerifySchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingCustomerCardDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingCustomerCardDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingCustomerCardPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingCustomerCardPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BillingCustomerCardSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BillingCustomerCardSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingCustomerCardSchema", ""
            ) as BillingCustomerCardSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BillingCustomerCardSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingCustomerCardSchema", ""
            ) as BillingCustomerCardSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingCustomerGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingCustomerGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BillingSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BillingSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingSchema", ""
            ) as BillingSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BillingSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingSchema", ""
            ) as BillingSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingCustomerPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingCustomerPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BillingCustomerSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BillingCustomerSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingCustomerSchema", ""
            ) as BillingCustomerSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BillingCustomerSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingCustomerSchema", ""
            ) as BillingCustomerSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BillingsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BillingsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingsSchema", ""
            ) as BillingsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BillingsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingsSchema", ""
            ) as BillingsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingInvoicesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingInvoicesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BillingSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BillingSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingSchema", ""
            ) as BillingSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BillingSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingSchema", ""
            ) as BillingSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingPriceListsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingPriceListsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PricesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PricesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PricesSchema", ""
            ) as PricesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PricesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PricesSchema", ""
            ) as PricesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingPriceListsNameCurrencyDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingPriceListsNameCurrencyDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingPriceListsNameCurrencyGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingPriceListsNameCurrencyGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PriceSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PriceSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PriceSchema", ""
            ) as PriceSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PriceSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PriceSchema", ""
            ) as PriceSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingPriceListsPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingPriceListsPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PriceSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PriceSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PriceSchema", ""
            ) as PriceSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PriceSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PriceSchema", ""
            ) as PriceSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingRecipientsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingRecipientsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BillingRecipientsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BillingRecipientsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingRecipientsSchema", ""
            ) as BillingRecipientsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BillingRecipientsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingRecipientsSchema", ""
            ) as BillingRecipientsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingRecipientsPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingRecipientsPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BillingRecipientsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BillingRecipientsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingRecipientsSchema", ""
            ) as BillingRecipientsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BillingRecipientsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingRecipientsSchema", ""
            ) as BillingRecipientsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingSettingsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingSettingsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BillingSettingsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BillingSettingsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingSettingsSchema", ""
            ) as BillingSettingsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BillingSettingsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingSettingsSchema", ""
            ) as BillingSettingsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingSettingsPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingSettingsPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BillingSettingsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BillingSettingsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingSettingsSchema", ""
            ) as BillingSettingsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BillingSettingsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingSettingsSchema", ""
            ) as BillingSettingsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingStatusGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingStatusGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BillingStatsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BillingStatsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingStatsSchema", ""
            ) as BillingStatsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BillingStatsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingStatsSchema", ""
            ) as BillingStatsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1BillingSystemDomainIdBillingIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1BillingSystemDomainIdBillingIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1CollectionsByPeriodGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1CollectionsByPeriodGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionUsageSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionUsageSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionUsageSchema", ""
            ) as CollectionUsageSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CollectionUsageSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionUsageSchema", ""
            ) as CollectionUsageSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1IdObjectIdInfoGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1IdObjectIdInfoGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1OrdwayBillingCustomerGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1OrdwayBillingCustomerGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BillingSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BillingSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingSchema", ""
            ) as BillingSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BillingSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingSchema", ""
            ) as BillingSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1OrdwayBillingGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1OrdwayBillingGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BillingsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BillingsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingsSchema", ""
            ) as BillingsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BillingsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingsSchema", ""
            ) as BillingsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1OrdwayBillingInvoicesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1OrdwayBillingInvoicesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1StorageAccessByPeriodGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1StorageAccessByPeriodGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StorageAccessesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StorageAccessesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StorageAccessesSchema", ""
            ) as StorageAccessesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StorageAccessesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StorageAccessesSchema", ""
            ) as StorageAccessesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1StorageUsageByPeriodGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1StorageUsageByPeriodGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StorageUsagesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StorageUsagesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StorageUsagesSchema", ""
            ) as StorageUsagesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StorageUsagesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StorageUsagesSchema", ""
            ) as StorageUsagesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1SystemLogsRecipientsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1SystemLogsRecipientsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LogsRecipientsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LogsRecipientsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LogsRecipientsSchema", ""
            ) as LogsRecipientsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Logs recipients settings don\&#39;t exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LogsRecipientsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LogsRecipientsSchema", ""
            ) as LogsRecipientsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1SystemLogsRecipientsLogsRecipientIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1SystemLogsRecipientsLogsRecipientIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Logs recipient doesn\&#39;t exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1SystemLogsRecipientsLogsRecipientIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1SystemLogsRecipientsLogsRecipientIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LogsRecipientReadSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LogsRecipientReadSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LogsRecipientReadSchema", ""
            ) as LogsRecipientReadSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Logs recipients settings don\&#39;t exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LogsRecipientReadSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LogsRecipientReadSchema", ""
            ) as LogsRecipientReadSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1SystemLogsRecipientsLogsRecipientIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1SystemLogsRecipientsLogsRecipientIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LogsRecipientReadSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LogsRecipientReadSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LogsRecipientReadSchema", ""
            ) as LogsRecipientReadSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Logs recipient doesn\&#39;t exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LogsRecipientReadSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LogsRecipientReadSchema", ""
            ) as LogsRecipientReadSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1SystemLogsRecipientsLogsRecipientIdPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1SystemLogsRecipientsLogsRecipientIdPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StatsV1SystemLogsRecipientsLogsRecipientIdPost200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StatsV1SystemLogsRecipientsLogsRecipientIdPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StatsV1SystemLogsRecipientsLogsRecipientIdPost200Response", ""
            ) as StatsV1SystemLogsRecipientsLogsRecipientIdPost200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Logs recipient doesn\&#39;t exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StatsV1SystemLogsRecipientsLogsRecipientIdPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StatsV1SystemLogsRecipientsLogsRecipientIdPost200Response", ""
            ) as StatsV1SystemLogsRecipientsLogsRecipientIdPost200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1SystemLogsRecipientsLogsRecipientIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1SystemLogsRecipientsLogsRecipientIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LogsRecipientReadSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LogsRecipientReadSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LogsRecipientReadSchema", ""
            ) as LogsRecipientReadSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Logs recipient doesn\&#39;t exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LogsRecipientReadSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LogsRecipientReadSchema", ""
            ) as LogsRecipientReadSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1SystemLogsRecipientsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1SystemLogsRecipientsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LogsRecipientReadSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: LogsRecipientReadSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LogsRecipientReadSchema", ""
            ) as LogsRecipientReadSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LogsRecipientReadSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LogsRecipientReadSchema", ""
            ) as LogsRecipientReadSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1TranscoderUsageByPeriodGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1TranscoderUsageByPeriodGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TranscoderUsagesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TranscoderUsagesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranscoderUsagesSchema", ""
            ) as TranscoderUsagesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TranscoderUsagesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranscoderUsagesSchema", ""
            ) as TranscoderUsagesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statsV1UserAuditByPeriodGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statsV1UserAuditByPeriodGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserUsagesSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserUsagesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserUsagesSchema", ""
            ) as UserUsagesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserUsagesSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserUsagesSchema", ""
            ) as UserUsagesSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
