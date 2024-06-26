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

export class CollectionInputSchema {
    'category'?: string | null;
    'customKeyframe'?: string | null;
    'customPoster'?: string | null;
    'dateCreated'?: Date;
    'externalId'?: string | null;
    'isRoot'?: boolean;
    'keyframeAssetIds'?: Array<string>;
    'parentId'?: string | null;
    'status'?: CollectionInputSchemaStatusEnum;
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
            "name": "customKeyframe",
            "baseName": "custom_keyframe",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "customPoster",
            "baseName": "custom_poster",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "dateCreated",
            "baseName": "date_created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "externalId",
            "baseName": "external_id",
            "type": "string",
            "format": ""
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
            "name": "parentId",
            "baseName": "parent_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CollectionInputSchemaStatusEnum",
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
        return CollectionInputSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CollectionInputSchemaStatusEnum {
    Active = 'ACTIVE',
    Hidden = 'HIDDEN',
    Deleted = 'DELETED'
}

