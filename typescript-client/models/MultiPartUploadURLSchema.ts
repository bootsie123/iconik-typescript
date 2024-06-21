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

export class MultiPartUploadURLSchema {
    'deleteUrl'?: string;
    'downloadUrl'?: string;
    'key'?: string;
    'number'?: number;
    'url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "deleteUrl",
            "baseName": "delete_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "downloadUrl",
            "baseName": "download_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MultiPartUploadURLSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

