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

export class CreateACLsSchema {
    'groupIds'?: Array<string>;
    'mode'?: CreateACLsSchemaModeEnum;
    /**
    * The number of object_keys in the list is limited to a minimum of 0 and a maximum of 500
    */
    'objectKeys': Array<string>;
    'objectType'?: string;
    'permissions': Array<string>;
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
            "name": "mode",
            "baseName": "mode",
            "type": "CreateACLsSchemaModeEnum",
            "format": ""
        },
        {
            "name": "objectKeys",
            "baseName": "object_keys",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "objectType",
            "baseName": "object_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "permissions",
            "baseName": "permissions",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "userIds",
            "baseName": "user_ids",
            "type": "Array<string>",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return CreateACLsSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CreateACLsSchemaModeEnum {
    Append = 'APPEND',
    Overwrite = 'OVERWRITE'
}

