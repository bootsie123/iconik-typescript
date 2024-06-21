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

export class CollectionBaseSchema {
    'category'?: string | null;
    'createdByUser'?: string;
    'customKeyframe'?: string | null;
    'customOrderStatus'?: CollectionBaseSchemaCustomOrderStatusEnum;
    'customPoster'?: string | null;
    'deletedByUser'?: string;
    'externalId'?: string | null;
    'favoured'?: boolean;
    'id'?: string;
    'inCollections'?: Array<string>;
    'isRoot'?: boolean;
    'keyframeAssetIds'?: Array<string>;
    'keyframes'?: Array<any>;
    'metadata'?: any;
    'objectType'?: string;
    'parentId'?: string | null;
    'parents'?: Array<string>;
    'permissions'?: Array<string>;
    'position'?: number;
    'status'?: CollectionBaseSchemaStatusEnum;
    'storageId'?: string | null;
    'title': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "category",
            "baseName": "category",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdByUser",
            "baseName": "created_by_user",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "customKeyframe",
            "baseName": "custom_keyframe",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "customOrderStatus",
            "baseName": "custom_order_status",
            "type": "CollectionBaseSchemaCustomOrderStatusEnum",
            "format": ""
        },
        {
            "name": "customPoster",
            "baseName": "custom_poster",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "deletedByUser",
            "baseName": "deleted_by_user",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "externalId",
            "baseName": "external_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "favoured",
            "baseName": "favoured",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "inCollections",
            "baseName": "in_collections",
            "type": "Array<string>",
            "format": "uuid"
        },
        {
            "name": "isRoot",
            "baseName": "is_root",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "keyframeAssetIds",
            "baseName": "keyframe_asset_ids",
            "type": "Array<string>",
            "format": "uuid"
        },
        {
            "name": "keyframes",
            "baseName": "keyframes",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentId",
            "baseName": "parent_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "parents",
            "baseName": "parents",
            "type": "Array<string>",
            "format": "uuid"
        },
        {
            "name": "permissions",
            "baseName": "permissions",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CollectionBaseSchemaStatusEnum",
            "format": ""
        },
        {
            "name": "storageId",
            "baseName": "storage_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionBaseSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CollectionBaseSchemaCustomOrderStatusEnum {
    Disabled = 'DISABLED',
    Enabling = 'ENABLING',
    Enabled = 'ENABLED'
}
export enum CollectionBaseSchemaStatusEnum {
    Active = 'ACTIVE',
    Hidden = 'HIDDEN',
    Deleted = 'DELETED'
}

