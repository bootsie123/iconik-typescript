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

export class UsersV1GroupsGroupIdLogoPost200Response {
    /**
    * Url for the group logo
    */
    'logo'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "logo",
            "baseName": "logo",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UsersV1GroupsGroupIdLogoPost200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

