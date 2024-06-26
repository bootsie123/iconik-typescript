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

import { ComponentSchema } from '../models/ComponentSchema';
import { HttpFile } from '../http/http';

export class FormatElasticSchema {
    'archiveStatus'?: FormatElasticSchemaArchiveStatusEnum;
    'assetId'?: string;
    'components'?: Array<ComponentSchema>;
    'dateCreated'?: Date;
    'dateDeleted'?: Date;
    'dateModified'?: Date;
    'deletedByUser'?: string;
    'id'?: string;
    'isOnline'?: boolean;
    /**
    * Sequence cannot have more than 10000. Excess values will be stripped
    */
    'metadata'?: Array<{ [key: string]: string; }>;
    'name': string;
    'status'?: FormatElasticSchemaStatusEnum;
    'storageMethods'?: Array<string>;
    'userId'?: string;
    'versionId'?: string;
    'warnings'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "archiveStatus",
            "baseName": "archive_status",
            "type": "FormatElasticSchemaArchiveStatusEnum",
            "format": ""
        },
        {
            "name": "assetId",
            "baseName": "asset_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "components",
            "baseName": "components",
            "type": "Array<ComponentSchema>",
            "format": ""
        },
        {
            "name": "dateCreated",
            "baseName": "date_created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "dateDeleted",
            "baseName": "date_deleted",
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
            "name": "deletedByUser",
            "baseName": "deleted_by_user",
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
            "name": "isOnline",
            "baseName": "is_online",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "Array<{ [key: string]: string; }>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "FormatElasticSchemaStatusEnum",
            "format": ""
        },
        {
            "name": "storageMethods",
            "baseName": "storage_methods",
            "type": "Array<string>",
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
        },
        {
            "name": "warnings",
            "baseName": "warnings",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FormatElasticSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FormatElasticSchemaArchiveStatusEnum {
    NotArchived = 'NOT_ARCHIVED',
    Archiving = 'ARCHIVING',
    FailedToArchive = 'FAILED_TO_ARCHIVE',
    Archived = 'ARCHIVED'
}
export enum FormatElasticSchemaStatusEnum {
    Active = 'ACTIVE',
    Deleted = 'DELETED'
}

