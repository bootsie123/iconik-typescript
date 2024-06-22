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

export class WebhookSchema {
    /**
    * Operation of event. Example create, update, delete
    */
    'operation'?: string | null;
    'firstFailedAt'?: Date;
    'name'?: string;
    'description'?: string;
    'id': string;
    /**
    * Type of events. Example assets, collections
    */
    'eventType': string;
    /**
    * ID of a particular object you want to subscribe on
    */
    'objectId'?: string | null;
    'status': WebhookSchemaStatusEnum;
    'lastPayload'?: string;
    'dateCreated'?: Date;
    'deletedAt'?: Date;
    /**
    * Realm of event. Example entity, contents, acls, metadata
    */
    'realm'?: string | null;
    /**
    * URL you want to be called when notification is appeared
    */
    'url': string;
    /**
    * Adding a query allows filtering out messages so webhooks will be called only if for messages that match this query.
    */
    'query'?: string;
    'dateModified'?: Date;
    /**
    * Define the key-value pairs your third party provider requires here
    */
    'headers'?: { [key: string]: string; };
    'lastError'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "operation",
            "baseName": "operation",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstFailedAt",
            "baseName": "first_failed_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
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
            "name": "eventType",
            "baseName": "event_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "objectId",
            "baseName": "object_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "WebhookSchemaStatusEnum",
            "format": ""
        },
        {
            "name": "lastPayload",
            "baseName": "last_payload",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateCreated",
            "baseName": "date_created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "deletedAt",
            "baseName": "deleted_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "realm",
            "baseName": "realm",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "query",
            "baseName": "query",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateModified",
            "baseName": "date_modified",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "lastError",
            "baseName": "last_error",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebhookSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum WebhookSchemaStatusEnum {
    Enabled = 'ENABLED',
    Disabled = 'DISABLED',
    Failing = 'FAILING',
    Deleted = 'DELETED'
}

