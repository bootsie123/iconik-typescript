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

export class SubscriptionSchema {
    'dateCreated'?: Date;
    'dateModified'?: Date;
    'eventType'?: string;
    'id'?: string;
    'objectId'?: string;
    'objectType': string;
    'subObjectId'?: string;
    'subObjectType'?: string;
    'systemDomainId'?: string;
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
            "name": "dateModified",
            "baseName": "date_modified",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "eventType",
            "baseName": "event_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "objectId",
            "baseName": "object_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "subObjectId",
            "baseName": "sub_object_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "subObjectType",
            "baseName": "sub_object_type",
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
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

