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

export class StoragesQueryParamsSchema {
    /**
    * Which page number to fetch
    */
    'page'?: number | null;
    /**
    * The number of items for each page
    */
    'perPage'?: number | null;
    /**
    * A comma separated list of fieldnames with order (asc/desc)
    */
    'sort'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "page",
            "baseName": "page",
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
            "name": "sort",
            "baseName": "sort",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StoragesQueryParamsSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

