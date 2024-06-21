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

export class EdgeThumbnailJobFieldSchema {
    'height'?: number;
    'id'?: string;
    'maxNumber'?: number;
    'minInterval'?: number;
    'timestamp'?: number;
    'width'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "maxNumber",
            "baseName": "max_number",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "minInterval",
            "baseName": "min_interval",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return EdgeThumbnailJobFieldSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

