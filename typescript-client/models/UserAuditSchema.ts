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

export class UserAuditSchema {
    'appId'?: string;
    'clientIp'?: string;
    'date'?: string;
    'id'?: string;
    'isActingAsUser'?: boolean;
    'metadata'?: string;
    'operationResult'?: number;
    'operationType': UserAuditSchemaOperationTypeEnum;
    'originalUserId'?: string;
    'payload'?: string;
    'requestId'?: string;
    'resource'?: string;
    'shareId'?: string;
    'shareUserId'?: string;
    'sudo'?: boolean;
    'systemDomainId'?: string;
    'systemName': string;
    'time'?: Date;
    'userId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appId",
            "baseName": "app_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "clientIp",
            "baseName": "client_ip",
            "type": "string",
            "format": ""
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string",
            "format": "date"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "isActingAsUser",
            "baseName": "is_acting_as_user",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "string",
            "format": ""
        },
        {
            "name": "operationResult",
            "baseName": "operation_result",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "operationType",
            "baseName": "operation_type",
            "type": "UserAuditSchemaOperationTypeEnum",
            "format": ""
        },
        {
            "name": "originalUserId",
            "baseName": "original_user_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "string",
            "format": ""
        },
        {
            "name": "requestId",
            "baseName": "request_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "string",
            "format": ""
        },
        {
            "name": "shareId",
            "baseName": "share_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "shareUserId",
            "baseName": "share_user_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "sudo",
            "baseName": "sudo",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "systemDomainId",
            "baseName": "system_domain_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "systemName",
            "baseName": "system_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return UserAuditSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum UserAuditSchemaOperationTypeEnum {
    Get = 'GET',
    Post = 'POST',
    Put = 'PUT',
    Patch = 'PATCH',
    Delete = 'DELETE',
    Options = 'OPTIONS'
}

