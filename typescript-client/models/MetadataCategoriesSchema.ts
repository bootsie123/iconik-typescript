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

import { MetadataCategory } from '../models/MetadataCategory';
import { HttpFile } from '../http/http';

export class MetadataCategoriesSchema {
    'objects'?: Array<MetadataCategory>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objects",
            "baseName": "objects",
            "type": "Array<MetadataCategory>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetadataCategoriesSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

