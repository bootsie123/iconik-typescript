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

export class GoogleCloudStorageSettingsSchema {
    'accessGroupId'?: string | null;
    'aclTemplateId'?: string | null;
    'addUuidToFilenames'?: boolean;
    'aggregateIdenticalFiles'?: boolean;
    'aggregateIgnore'?: Array<string>;
    'aggregateOnlyOnSameStorage'?: boolean;
    'bucket': string;
    '_delete'?: boolean;
    'enableCollectionDirectoryMapping'?: boolean;
    'filenameIsExternalId'?: boolean;
    'folderNameTagsMetadataFieldName'?: string;
    'folderNameTagsMetadataViewId'?: string | null;
    'isSystem'?: boolean;
    'jsonKey': string;
    'metadataConversionUrl'?: string;
    'metadataConversionUrlHeaders'?: string | null;
    'metadataViewId'?: string | null;
    'path': string;
    'preloadEdgeJobs'?: number | null;
    'project': string;
    'read'?: boolean;
    'rootCollectionId'?: string;
    'scan'?: boolean;
    'scanDirectories'?: Array<string>;
    'scanIgnore'?: Array<string>;
    'sidecarMetadataRequired'?: boolean;
    'titleIncludesExtension'?: boolean;
    'transcodeIgnore'?: Array<string>;
    'write'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accessGroupId",
            "baseName": "access_group_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "aclTemplateId",
            "baseName": "acl_template_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "addUuidToFilenames",
            "baseName": "add_uuid_to_filenames",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "aggregateIdenticalFiles",
            "baseName": "aggregate_identical_files",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "aggregateIgnore",
            "baseName": "aggregate_ignore",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "aggregateOnlyOnSameStorage",
            "baseName": "aggregate_only_on_same_storage",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "bucket",
            "baseName": "bucket",
            "type": "string",
            "format": ""
        },
        {
            "name": "_delete",
            "baseName": "delete",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "enableCollectionDirectoryMapping",
            "baseName": "enable_collection_directory_mapping",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "filenameIsExternalId",
            "baseName": "filename_is_external_id",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "folderNameTagsMetadataFieldName",
            "baseName": "folder_name_tags_metadata_field_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "folderNameTagsMetadataViewId",
            "baseName": "folder_name_tags_metadata_view_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "isSystem",
            "baseName": "is_system",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "jsonKey",
            "baseName": "json_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadataConversionUrl",
            "baseName": "metadata_conversion_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadataConversionUrlHeaders",
            "baseName": "metadata_conversion_url_headers",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadataViewId",
            "baseName": "metadata_view_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "preloadEdgeJobs",
            "baseName": "preload_edge_jobs",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "string",
            "format": ""
        },
        {
            "name": "read",
            "baseName": "read",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "rootCollectionId",
            "baseName": "root_collection_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "scan",
            "baseName": "scan",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "scanDirectories",
            "baseName": "scan_directories",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "scanIgnore",
            "baseName": "scan_ignore",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "sidecarMetadataRequired",
            "baseName": "sidecar_metadata_required",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "titleIncludesExtension",
            "baseName": "title_includes_extension",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "transcodeIgnore",
            "baseName": "transcode_ignore",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "write",
            "baseName": "write",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GoogleCloudStorageSettingsSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

