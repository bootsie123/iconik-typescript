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

export class BulkFilesetArchiveSchema {
    'allowDuplicateTransfers'?: boolean;
    'deleteOnlyFromSourceFolder'?: boolean;
    'deleteOriginal'?: boolean;
    'destinationStorageId'?: string | null;
    'keepCollectionStructure'?: boolean;
    'objectIds': Array<string>;
    'objectType': BulkFilesetArchiveSchemaObjectTypeEnum;
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
            "name": "destinationStorageId",
            "baseName": "destination_storage_id",
            "type": "string",
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
            "type": "BulkFilesetArchiveSchemaObjectTypeEnum",
            "format": ""
        },
        {
            "name": "preferredOriginalStorageId",
            "baseName": "preferred_original_storage_id",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return BulkFilesetArchiveSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BulkFilesetArchiveSchemaObjectTypeEnum {
    Assets = 'assets',
    Collections = 'collections',
    SavedSearches = 'saved_searches'
}

