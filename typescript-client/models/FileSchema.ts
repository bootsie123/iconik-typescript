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

export class FileSchema {
    'assetId'?: string;
    'checksum'?: string | null;
    'dateCreated'?: Date;
    'dateModified'?: Date;
    'directoryPath': string;
    'fileDateCreated'?: Date;
    'fileDateModified'?: Date;
    'fileSetId': string;
    'fileSetStatus'?: string | null;
    'formatId'?: string;
    'formatStatus'?: string | null;
    'id'?: string;
    'multipartUploadUrl'?: string;
    /**
    * If not specified, name will be autogenerated based on `id` and `original_name`
    */
    'name'?: string;
    'originalName': string;
    'parentId'?: string | null;
    'size'?: number;
    'status'?: FileSchemaStatusEnum;
    'storageId'?: string;
    'storageMethod'?: string;
    'systemDomainId'?: string;
    'type': FileSchemaTypeEnum;
    'uploadCredentials'?: any;
    'uploadFilename'?: string;
    'uploadMethod'?: string;
    /**
    * On a file creation for Backblaze B2 storage in case when request to Backblaze failed, upload_url field will be empty. You can try getting upload_url again by requesting created file with `generate_signed_post_url` set to true. 
    */
    'uploadUrl'?: string;
    'url'?: string;
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
            "name": "fileSetStatus",
            "baseName": "file_set_status",
            "type": "string",
            "format": ""
        },
        {
            "name": "formatId",
            "baseName": "format_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "formatStatus",
            "baseName": "format_status",
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
            "name": "multipartUploadUrl",
            "baseName": "multipart_upload_url",
            "type": "string",
            "format": ""
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
            "type": "FileSchemaStatusEnum",
            "format": ""
        },
        {
            "name": "storageId",
            "baseName": "storage_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "storageMethod",
            "baseName": "storage_method",
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
            "name": "type",
            "baseName": "type",
            "type": "FileSchemaTypeEnum",
            "format": ""
        },
        {
            "name": "uploadCredentials",
            "baseName": "upload_credentials",
            "type": "any",
            "format": ""
        },
        {
            "name": "uploadFilename",
            "baseName": "upload_filename",
            "type": "string",
            "format": ""
        },
        {
            "name": "uploadMethod",
            "baseName": "upload_method",
            "type": "string",
            "format": ""
        },
        {
            "name": "uploadUrl",
            "baseName": "upload_url",
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
        return FileSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FileSchemaStatusEnum {
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
export enum FileSchemaTypeEnum {
    File = 'FILE',
    Directory = 'DIRECTORY',
    Symlink = 'SYMLINK'
}

