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

export class AnalysisAmazonRekognitionSettingsSchema {
    'accessKey': string;
    'bucket': string;
    'endpoint': string;
    'isSystem'?: boolean;
    'path': string;
    'region': string;
    'secretKey': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accessKey",
            "baseName": "access_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "bucket",
            "baseName": "bucket",
            "type": "string",
            "format": ""
        },
        {
            "name": "endpoint",
            "baseName": "endpoint",
            "type": "string",
            "format": ""
        },
        {
            "name": "isSystem",
            "baseName": "is_system",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string",
            "format": ""
        },
        {
            "name": "secretKey",
            "baseName": "secret_key",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AnalysisAmazonRekognitionSettingsSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

