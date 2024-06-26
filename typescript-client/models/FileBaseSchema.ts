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

export class FileBaseSchema {
    'assetId'?: string;
    'checksum'?: string | null;
    'dateCreated'?: Date;
    'dateModified'?: Date;
    'directoryPath': string;
    'fileDateCreated'?: Date;
    'fileDateModified'?: Date;
    'fileSetId'?: string;
    'formatId'?: string;
    'id'?: string;
    /**
    * If not specified, name will be autogenerated based on `id` and `original_name`
    */
    'name'?: string;
    'originalName': string;
    'parentId'?: string | null;
    'size'?: number;
    'status'?: FileBaseSchemaStatusEnum;
    'storageId'?: string;
    'type': FileBaseSchemaTypeEnum;
    'userId'?: string | null;
    'versionId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "assetId",
            "baseName": "asset_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "checksum",
            "baseName": "checksum",
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
            "name": "dateModified",
            "baseName": "date_modified",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "directoryPath",
            "baseName": "directory_path",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileDateCreated",
            "baseName": "file_date_created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "fileDateModified",
            "baseName": "file_date_modified",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "fileSetId",
            "baseName": "file_set_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "formatId",
            "baseName": "format_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "originalName",
            "baseName": "original_name",
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
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "FileBaseSchemaStatusEnum",
            "format": ""
        },
        {
            "name": "storageId",
            "baseName": "storage_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "FileBaseSchemaTypeEnum",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "versionId",
            "baseName": "version_id",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return FileBaseSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FileBaseSchemaStatusEnum {
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
export enum FileBaseSchemaTypeEnum {
    File = 'FILE',
    Directory = 'DIRECTORY',
    Symlink = 'SYMLINK'
}

