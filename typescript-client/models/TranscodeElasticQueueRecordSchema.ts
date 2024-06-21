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

export class TranscodeElasticQueueRecordSchema {
    'dateCreated'?: string;
    'dateUpdated'?: string;
    'id'?: string;
    'jobId'?: string;
    'objectId'?: string;
    'objectType'?: string;
    'priority'?: string;
    'queue'?: string;
    'retryCount'?: string;
    'status'?: string;
    'storageId'?: string;
    'systemDomainId'?: string;
    'systemDomainTimestamp'?: string;
    'systemName'?: string;
    'type'?: string;
    'userId'?: string;
    'versionId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dateCreated",
            "baseName": "date_created",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateUpdated",
            "baseName": "date_updated",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "jobId",
            "baseName": "job_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "objectId",
            "baseName": "object_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "string",
            "format": ""
        },
        {
            "name": "queue",
            "baseName": "queue",
            "type": "string",
            "format": ""
        },
        {
            "name": "retryCount",
            "baseName": "retry_count",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "storageId",
            "baseName": "storage_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "systemDomainId",
            "baseName": "system_domain_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "systemDomainTimestamp",
            "baseName": "system_domain_timestamp",
            "type": "string",
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
            "format": ""
        },
        {
            "name": "versionId",
            "baseName": "version_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TranscodeElasticQueueRecordSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

