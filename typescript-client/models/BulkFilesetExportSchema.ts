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

export class BulkFilesetExportSchema {
    'allowDuplicateTransfers'?: boolean;
    'deleteOnlyFromSourceFolder'?: boolean;
    'deleteOriginal'?: boolean;
    'exportMetadata'?: boolean | null;
    'exportToAssetFolder'?: boolean | null;
    'keepCollectionStructure'?: boolean;
    'metadataFormat'?: BulkFilesetExportSchemaMetadataFormatEnum | null;
    'metadataView'?: string | null;
    'objectIds': Array<string>;
    'objectType': BulkFilesetExportSchemaObjectTypeEnum;
    'overwrite'?: boolean | null;
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
            "name": "exportMetadata",
            "baseName": "export_metadata",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "exportToAssetFolder",
            "baseName": "export_to_asset_folder",
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
            "name": "metadataFormat",
            "baseName": "metadata_format",
            "type": "BulkFilesetExportSchemaMetadataFormatEnum",
            "format": ""
        },
        {
            "name": "metadataView",
            "baseName": "metadata_view",
            "type": "string",
            "format": "uuid"
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
            "type": "BulkFilesetExportSchemaObjectTypeEnum",
            "format": ""
        },
        {
            "name": "overwrite",
            "baseName": "overwrite",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "preferredOriginalStorageId",
            "baseName": "preferred_original_storage_id",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return BulkFilesetExportSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BulkFilesetExportSchemaMetadataFormatEnum {
    Csv = 'CSV',
    Json = 'JSON',
    Xml = 'XML'
}
export enum BulkFilesetExportSchemaObjectTypeEnum {
    Assets = 'assets',
    Collections = 'collections'
}

