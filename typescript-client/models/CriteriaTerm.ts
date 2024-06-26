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

import { CriteriaRangeFilter } from '../models/CriteriaRangeFilter';
import { HttpFile } from '../http/http';

export class CriteriaTerm {
    'exists'?: boolean;
    'missing'?: boolean;
    'name': string;
    'range'?: CriteriaRangeFilter;
    'value'?: string;
    'valueIn'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "exists",
            "baseName": "exists",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "missing",
            "baseName": "missing",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "range",
            "baseName": "range",
            "type": "CriteriaRangeFilter",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "valueIn",
            "baseName": "value_in",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CriteriaTerm.attributeTypeMap;
    }

    public constructor() {
    }
}

