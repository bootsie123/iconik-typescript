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

export class RelationElastic {
    'dateCreated'?: Date;
    'dateModified'?: Date;
    'description'?: string;
    'relatedFromAssetId'?: string;
    'relatedToAssetId'?: string;
    'relationType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "relatedFromAssetId",
            "baseName": "related_from_asset_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "relatedToAssetId",
            "baseName": "related_to_asset_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "relationType",
            "baseName": "relation_type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RelationElastic.attributeTypeMap;
    }

    public constructor() {
    }
}

