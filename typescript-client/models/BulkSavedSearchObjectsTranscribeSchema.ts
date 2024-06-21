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

export class BulkSavedSearchObjectsTranscribeSchema {
    'jobId': string;
    'searchIds': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "jobId",
            "baseName": "job_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "searchIds",
            "baseName": "search_ids",
            "type": "Array<string>",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return BulkSavedSearchObjectsTranscribeSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

