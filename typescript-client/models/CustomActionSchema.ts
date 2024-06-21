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

export class CustomActionSchema {
    'appId'?: string | null;
    'context': CustomActionSchemaContextEnum;
    'dateCreated'?: Date;
    'dateModified'?: Date;
    'disabled'?: boolean;
    'headers'?: { [key: string]: string; };
    'id'?: string;
    'lastError'?: string;
    'metadataView'?: string | null;
    'status'?: CustomActionSchemaStatusEnum;
    'systemDomainId'?: string;
    'title': string;
    'type'?: CustomActionSchemaTypeEnum;
    'url': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appId",
            "baseName": "app_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "CustomActionSchemaContextEnum",
            "format": ""
        },
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
            "name": "disabled",
            "baseName": "disabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "lastError",
            "baseName": "last_error",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadataView",
            "baseName": "metadata_view",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CustomActionSchemaStatusEnum",
            "format": ""
        },
        {
            "name": "systemDomainId",
            "baseName": "system_domain_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CustomActionSchemaTypeEnum",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomActionSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CustomActionSchemaContextEnum {
    Asset = 'ASSET',
    AssetSubclip = 'ASSET_SUBCLIP',
    SharedAsset = 'SHARED_ASSET',
    Collection = 'COLLECTION',
    SharedCollection = 'SHARED_COLLECTION',
    Bulk = 'BULK',
    SavedSearch = 'SAVED_SEARCH',
    None = 'NONE'
}
export enum CustomActionSchemaStatusEnum {
    Failing = 'FAILING',
    Healthy = 'HEALTHY'
}
export enum CustomActionSchemaTypeEnum {
    Open = 'OPEN',
    Post = 'POST'
}

