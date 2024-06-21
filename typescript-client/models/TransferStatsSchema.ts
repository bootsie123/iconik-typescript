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

export class TransferStatsSchema {
    'bytesSent': number;
    'ip'?: string;
    'objectInfo'?: string;
    'objectName'?: string;
    'timeTakenUs'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bytesSent",
            "baseName": "bytes_sent",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "ip",
            "baseName": "ip",
            "type": "string",
            "format": ""
        },
        {
            "name": "objectInfo",
            "baseName": "object_info",
            "type": "string",
            "format": ""
        },
        {
            "name": "objectName",
            "baseName": "object_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "timeTakenUs",
            "baseName": "time_taken_us",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return TransferStatsSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

