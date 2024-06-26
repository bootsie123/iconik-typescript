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

export class DeleteBulkACLsSchema {
    'groupIds'?: Array<string>;
    'includeAssets': boolean;
    'includeCollections': boolean;
    /**
    * The number of object_ids in the list is limited to a minimum of 0 and a maximum of 500
    */
    'objectIds'?: Array<string>;
    'objectType'?: string;
    'userIds'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "groupIds",
            "baseName": "group_ids",
            "type": "Array<string>",
            "format": "uuid"
        },
        {
            "name": "includeAssets",
            "baseName": "include_assets",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "includeCollections",
            "baseName": "include_collections",
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
            "type": "string",
            "format": ""
        },
        {
            "name": "userIds",
            "baseName": "user_ids",
            "type": "Array<string>",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return DeleteBulkACLsSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

