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

export class MultipartB2FinishUpload {
    'sha1List': Array<string>;
    'uploadFileId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "sha1List",
            "baseName": "sha1_list",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "uploadFileId",
            "baseName": "upload_file_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MultipartB2FinishUpload.attributeTypeMap;
    }

    public constructor() {
    }
}

