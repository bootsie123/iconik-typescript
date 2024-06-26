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

export class AnalysisRevAISettingsSchema {
    'accessToken': string;
    'customVocabulary'?: Array<string> | null;
    'isSystem'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accessToken",
            "baseName": "access_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "customVocabulary",
            "baseName": "custom_vocabulary",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "isSystem",
            "baseName": "is_system",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AnalysisRevAISettingsSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

