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

import { SearchSuggestResponseSchema } from '../models/SearchSuggestResponseSchema';
import { HttpFile } from '../http/http';

export class SearchSuggestsResponseSchema {
    'objects'?: Array<SearchSuggestResponseSchema>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objects",
            "baseName": "objects",
            "type": "Array<SearchSuggestResponseSchema>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SearchSuggestsResponseSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

