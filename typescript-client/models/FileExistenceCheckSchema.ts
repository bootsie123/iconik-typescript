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

export class FileExistenceCheckSchema {
    'directoryPath': string;
    'fileName': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "directoryPath",
            "baseName": "directory_path",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileName",
            "baseName": "file_name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FileExistenceCheckSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

