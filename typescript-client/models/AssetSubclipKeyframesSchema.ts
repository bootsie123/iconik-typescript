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

export class AssetSubclipKeyframesSchema {
    'assetId': string;
    'filename'?: string;
    'name'?: string;
    'originalAssetId': string;
    'originalSegmentId'?: string;
    'originalVersionId': string;
    'timeEndMilliseconds': number;
    'timeStartMilliseconds': number;
    'versionId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "assetId",
            "baseName": "asset_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "originalAssetId",
            "baseName": "original_asset_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "originalSegmentId",
            "baseName": "original_segment_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "originalVersionId",
            "baseName": "original_version_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "timeEndMilliseconds",
            "baseName": "time_end_milliseconds",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "timeStartMilliseconds",
            "baseName": "time_start_milliseconds",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "versionId",
            "baseName": "version_id",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return AssetSubclipKeyframesSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

