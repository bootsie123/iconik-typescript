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

import { ResolutionType } from '../models/ResolutionType';
import { TimeCodeType } from '../models/TimeCodeType';
import { HttpFile } from '../http/http';

export class CollectionKeyframeSchema {
    'collectionId'?: string;
    'dateCreated'?: Date;
    'dateModified'?: Date;
    'filename'?: string;
    'format'?: string;
    'id'?: string;
    'isCustomKeyframe'?: boolean;
    'isPublic'?: boolean;
    'name'?: string;
    'resolution'?: ResolutionType;
    'rotation'?: number | null;
    'size'?: number | null;
    'status'?: CollectionKeyframeSchemaStatusEnum;
    'storageId': string;
    'timeCode'?: TimeCodeType;
    'type': CollectionKeyframeSchemaTypeEnum;
    'url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "collectionId",
            "baseName": "collection_id",
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
            "name": "dateModified",
            "baseName": "date_modified",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string",
            "format": ""
        },
        {
            "name": "format",
            "baseName": "format",
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
            "name": "isCustomKeyframe",
            "baseName": "is_custom_keyframe",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isPublic",
            "baseName": "is_public",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "resolution",
            "baseName": "resolution",
            "type": "ResolutionType",
            "format": ""
        },
        {
            "name": "rotation",
            "baseName": "rotation",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CollectionKeyframeSchemaStatusEnum",
            "format": ""
        },
        {
            "name": "storageId",
            "baseName": "storage_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "timeCode",
            "baseName": "time_code",
            "type": "TimeCodeType",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CollectionKeyframeSchemaTypeEnum",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionKeyframeSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CollectionKeyframeSchemaStatusEnum {
    Open = 'OPEN',
    Growing = 'GROWING',
    Awaited = 'AWAITED',
    Closed = 'CLOSED',
    Failed = 'FAILED',
    Archived = 'ARCHIVED',
    Missing = 'MISSING',
    Rediscovered = 'REDISCOVERED',
    Deleted = 'DELETED'
}
export enum CollectionKeyframeSchemaTypeEnum {
    KeyframeMap = 'KEYFRAME_MAP',
    Keyframe = 'KEYFRAME',
    Poster = 'POSTER'
}

