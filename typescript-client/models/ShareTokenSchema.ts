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

export class ShareTokenSchema {
    'appId'?: string;
    'email'?: string;
    'expires'?: Date;
    'objectId'?: string;
    'objectType'?: string;
    'roles'?: Array<string>;
    'shareId'?: string;
    'shareUserId'?: string;
    'systemDomainId'?: string;
    'token'?: string;
    'userId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appId",
            "baseName": "app_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": "email"
        },
        {
            "name": "expires",
            "baseName": "expires",
            "type": "Date",
            "format": "date-time"
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
            "name": "roles",
            "baseName": "roles",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "shareId",
            "baseName": "share_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "shareUserId",
            "baseName": "share_user_id",
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
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ShareTokenSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

