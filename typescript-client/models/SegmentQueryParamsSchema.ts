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

export class SegmentQueryParamsSchema {
    /**
    * Which page number to fetch
    */
    'page'?: number | null;
    /**
    * The number of items for each page
    */
    'perPage'?: number | null;
    'scroll'?: boolean;
    'scrollId'?: string;
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
            "name": "scroll",
            "baseName": "scroll",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "scrollId",
            "baseName": "scroll_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SegmentQueryParamsSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

