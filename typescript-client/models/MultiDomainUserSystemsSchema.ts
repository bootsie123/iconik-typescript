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

import { MultiDomainUserSystemSchema } from '../models/MultiDomainUserSystemSchema';
import { HttpFile } from '../http/http';

export class MultiDomainUserSystemsSchema {
    'firstUrl'?: string;
    'lastUrl'?: string;
    'nextUrl'?: string;
    'objects'?: Array<MultiDomainUserSystemSchema>;
    'page'?: number;
    'pages'?: number;
    'perPage'?: number;
    'prevUrl'?: string;
    'total'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "firstUrl",
            "baseName": "first_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastUrl",
            "baseName": "last_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "nextUrl",
            "baseName": "next_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "objects",
            "baseName": "objects",
            "type": "Array<MultiDomainUserSystemSchema>",
            "format": ""
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "pages",
            "baseName": "pages",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "perPage",
            "baseName": "per_page",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "prevUrl",
            "baseName": "prev_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return MultiDomainUserSystemsSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

