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

export class FilesetTransferBaseSchema {
    'assetId'?: string;
    'assetPaths'?: Array<string>;
    'collectionStorageId'?: string;
    'componentIds'?: Array<string>;
    'deleteOnlyFromSourceFolder'?: boolean;
    'destinationFilename'?: string;
    'id'?: string;
    'jobId'?: string;
    'jobSteps'?: any;
    'originalStorageId'?: string;
    'originalUrl'?: string;
    'parentJobId'?: string;
    'transferType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "assetId",
            "baseName": "asset_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "assetPaths",
            "baseName": "asset_paths",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "collectionStorageId",
            "baseName": "collection_storage_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "componentIds",
            "baseName": "component_ids",
            "type": "Array<string>",
            "format": "uuid"
        },
        {
            "name": "deleteOnlyFromSourceFolder",
            "baseName": "delete_only_from_source_folder",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "destinationFilename",
            "baseName": "destination_filename",
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
            "name": "jobId",
            "baseName": "job_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "jobSteps",
            "baseName": "job_steps",
            "type": "any",
            "format": ""
        },
        {
            "name": "originalStorageId",
            "baseName": "original_storage_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "originalUrl",
            "baseName": "original_url",
            "type": "string",
            "format": "url"
        },
        {
            "name": "parentJobId",
            "baseName": "parent_job_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "transferType",
            "baseName": "transfer_type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FilesetTransferBaseSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

