/**
 * Iconik
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class BillingSchema {
    'balance'?: number;
    'consumptionSubtype'?: string;
    'consumptionType'?: string;
    'currency'?: BillingSchemaCurrencyEnum | null;
    'date'?: Date;
    'expirationDate'?: Date | null;
    'id'?: string;
    'label': string;
    'priceList'?: string | null;
    'systemDomainId': string;
    'value': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "balance",
            "baseName": "balance",
            "type": "number",
            "format": ""
        },
        {
            "name": "consumptionSubtype",
            "baseName": "consumption_subtype",
            "type": "string",
            "format": ""
        },
        {
            "name": "consumptionType",
            "baseName": "consumption_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "BillingSchemaCurrencyEnum",
            "format": ""
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "expirationDate",
            "baseName": "expiration_date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "priceList",
            "baseName": "price_list",
            "type": "string",
            "format": ""
        },
        {
            "name": "systemDomainId",
            "baseName": "system_domain_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BillingSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BillingSchemaCurrencyEnum {
    Usd = 'USD',
    Eur = 'EUR'
}

