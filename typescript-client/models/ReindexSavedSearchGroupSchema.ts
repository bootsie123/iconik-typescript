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

export class ReindexSavedSearchGroupSchema {
    'syncToAnotherDc'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "syncToAnotherDc",
            "baseName": "sync_to_another_dc",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReindexSavedSearchGroupSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

