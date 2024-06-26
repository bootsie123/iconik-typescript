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

export class FormatRestoreSchema {
    'destinationDirectoryPath'?: string | null;
    'destinationStorageId'?: string;
    /**
    * Deprecated field. Use destination_storage_id instead
    */
    'storageId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "destinationDirectoryPath",
            "baseName": "destination_directory_path",
            "type": "string",
            "format": ""
        },
        {
            "name": "destinationStorageId",
            "baseName": "destination_storage_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "storageId",
            "baseName": "storage_id",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return FormatRestoreSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

