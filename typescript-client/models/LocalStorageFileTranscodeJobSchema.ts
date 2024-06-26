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

export class LocalStorageFileTranscodeJobSchema {
    'assetId': string;
    'checksum'?: string | null;
    'collectionId'?: string | null;
    'componentIds'?: Array<string>;
    'directoryPath': string;
    'fileId': string;
    'fileSetId': string;
    'filename': string;
    'formatId': string;
    'id'?: string;
    'jobId': string;
    'priority'?: number;
    'size': number;
    'versionId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "assetId",
            "baseName": "asset_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "checksum",
            "baseName": "checksum",
            "type": "string",
            "format": ""
        },
        {
            "name": "collectionId",
            "baseName": "collection_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "componentIds",
            "baseName": "component_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "directoryPath",
            "baseName": "directory_path",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileId",
            "baseName": "file_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileSetId",
            "baseName": "file_set_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string",
            "format": ""
        },
        {
            "name": "formatId",
            "baseName": "format_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "jobId",
            "baseName": "job_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
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
            "name": "versionId",
            "baseName": "version_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LocalStorageFileTranscodeJobSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

