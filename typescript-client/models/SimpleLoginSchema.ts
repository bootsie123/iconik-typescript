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

export class SimpleLoginSchema {
    'appName'?: string;
    'email': string;
    'marketplaceSignupNonce'?: string;
    'password': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appName",
            "baseName": "app_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": "email"
        },
        {
            "name": "marketplaceSignupNonce",
            "baseName": "marketplace_signup_nonce",
            "type": "string",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SimpleLoginSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

