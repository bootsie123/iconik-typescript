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

import { AnalysisServiceAccountReadSchema } from '../models/AnalysisServiceAccountReadSchema';
import { HttpFile } from '../http/http';

export class AnalysisServiceAccountsSchema {
    'objects'?: Array<AnalysisServiceAccountReadSchema>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objects",
            "baseName": "objects",
            "type": "Array<AnalysisServiceAccountReadSchema>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AnalysisServiceAccountsSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

