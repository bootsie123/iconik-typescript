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

export class HttpSettingsSchema {
    'address': string;
    'auto'?: boolean;
    '_delete'?: boolean;
    'isSystem'?: boolean;
    'read'?: boolean;
    'scan'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "auto",
            "baseName": "auto",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "_delete",
            "baseName": "delete",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSystem",
            "baseName": "is_system",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "read",
            "baseName": "read",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "scan",
            "baseName": "scan",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return HttpSettingsSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

