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

export class JobsPrioritySchema {
    'jobIds': Array<string>;
    'priority': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "jobIds",
            "baseName": "job_ids",
            "type": "Array<string>",
            "format": "uuid"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return JobsPrioritySchema.attributeTypeMap;
    }

    public constructor() {
    }
}

