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

export class TranscodeQueueObjectSchema {
    'dateCreated'?: Date;
    'dateUpdated'?: Date;
    'id'?: string;
    'jobId'?: string;
    'priority'?: number;
    'retryCount'?: number;
    'status'?: string;
    'systemDomain'?: string;
    'systemDomainId'?: string;
    'systemDomainTimestamp'?: number;
    'systemName'?: string;
    'type'?: string;
    'userId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dateCreated",
            "baseName": "date_created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "dateUpdated",
            "baseName": "date_updated",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "jobId",
            "baseName": "job_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "retryCount",
            "baseName": "retry_count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "systemDomain",
            "baseName": "system_domain",
            "type": "string",
            "format": ""
        },
        {
            "name": "systemDomainId",
            "baseName": "system_domain_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "systemDomainTimestamp",
            "baseName": "system_domain_timestamp",
            "type": "number",
            "format": ""
        },
        {
            "name": "systemName",
            "baseName": "system_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return TranscodeQueueObjectSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

