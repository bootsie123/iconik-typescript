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

export class CreateAssetVersionFromAssetSchema {
    'copyPreviousVersionSegments'?: boolean;
    'includeSegmentTypes'?: Array<CreateAssetVersionFromAssetSchemaIncludeSegmentTypesEnum>;
    'sourceMetadataAssetId'?: string;
    'systemDomainId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "copyPreviousVersionSegments",
            "baseName": "copy_previous_version_segments",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "includeSegmentTypes",
            "baseName": "include_segment_types",
            "type": "Array<CreateAssetVersionFromAssetSchemaIncludeSegmentTypesEnum>",
            "format": ""
        },
        {
            "name": "sourceMetadataAssetId",
            "baseName": "source_metadata_asset_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "systemDomainId",
            "baseName": "system_domain_id",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return CreateAssetVersionFromAssetSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CreateAssetVersionFromAssetSchemaIncludeSegmentTypesEnum {
    Marker = 'MARKER',
    Qc = 'QC',
    Generic = 'GENERIC',
    Comment = 'COMMENT',
    Tag = 'TAG',
    Transcription = 'TRANSCRIPTION',
    Scene = 'SCENE',
    Person = 'PERSON'
}

