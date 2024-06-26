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

export class BulkTransferSchema {
    'allowDuplicateTransfers'?: boolean;
    'deleteOnlyFromSourceFolder'?: boolean;
    'deleteOriginal'?: boolean;
    'keepCollectionStructure'?: boolean;
    'objectIds': Array<string>;
    'objectType': BulkTransferSchemaObjectTypeEnum;
    'preferredOriginalStorageId'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "allowDuplicateTransfers",
            "baseName": "allow_duplicate_transfers",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "deleteOnlyFromSourceFolder",
            "baseName": "delete_only_from_source_folder",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "deleteOriginal",
            "baseName": "delete_original",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "keepCollectionStructure",
            "baseName": "keep_collection_structure",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "objectIds",
            "baseName": "object_ids",
            "type": "Array<string>",
            "format": "uuid"
        },
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "BulkTransferSchemaObjectTypeEnum",
            "format": ""
        },
        {
            "name": "preferredOriginalStorageId",
            "baseName": "preferred_original_storage_id",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return BulkTransferSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BulkTransferSchemaObjectTypeEnum {
    Assets = 'assets',
    Collections = 'collections',
    SavedSearches = 'saved_searches'
}

