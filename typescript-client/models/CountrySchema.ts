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

export class CountrySchema {
    'alpha2'?: string;
    'alpha3'?: string;
    'apoliticalName'?: string;
    'name': string;
    'numeric'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "alpha2",
            "baseName": "alpha2",
            "type": "string",
            "format": ""
        },
        {
            "name": "alpha3",
            "baseName": "alpha3",
            "type": "string",
            "format": ""
        },
        {
            "name": "apoliticalName",
            "baseName": "apolitical_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "numeric",
            "baseName": "numeric",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CountrySchema.attributeTypeMap;
    }

    public constructor() {
    }
}

