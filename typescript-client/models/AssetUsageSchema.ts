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

export class AssetUsageSchema {
    'assetId': string;
    'assetType'?: AssetUsageSchemaAssetTypeEnum;
    'date'?: string;
    'id'?: string;
    'metadata'?: string;
    'operationSource'?: AssetUsageSchemaOperationSourceEnum;
    'operationType': AssetUsageSchemaOperationTypeEnum;
    'systemDomainId'?: string;
    'systemName': string;
    'time'?: Date;
    'userId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "assetId",
            "baseName": "asset_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "assetType",
            "baseName": "asset_type",
            "type": "AssetUsageSchemaAssetTypeEnum",
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
            "name": "metadata",
            "baseName": "metadata",
            "type": "string",
            "format": ""
        },
        {
            "name": "operationSource",
            "baseName": "operation_source",
            "type": "AssetUsageSchemaOperationSourceEnum",
            "format": ""
        },
        {
            "name": "operationType",
            "baseName": "operation_type",
            "type": "AssetUsageSchemaOperationTypeEnum",
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
        return AssetUsageSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AssetUsageSchemaAssetTypeEnum {
    Asset = 'ASSET',
    Sequence = 'SEQUENCE',
    NleProject = 'NLE_PROJECT',
    Placeholder = 'PLACEHOLDER'
}
export enum AssetUsageSchemaOperationSourceEnum {
    Collection = 'COLLECTION',
    Search = 'SEARCH',
    Notification = 'NOTIFICATION',
    Discovery = 'DISCOVERY',
    Share = 'SHARE',
    ExternalShare = 'EXTERNAL_SHARE',
    Empty = ''
}
export enum AssetUsageSchemaOperationTypeEnum {
    View = 'VIEW',
    Play = 'PLAY',
    Pause = 'PAUSE',
    Delete = 'DELETE',
    Create = 'CREATE',
    Approve = 'APPROVE',
    Reject = 'REJECT',
    Comment = 'COMMENT',
    Rename = 'RENAME',
    Exit = 'EXIT',
    Unfocus = 'UNFOCUS',
    Refocus = 'REFOCUS',
    Seek = 'SEEK'
}

