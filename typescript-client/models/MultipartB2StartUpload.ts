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

export class MultipartB2StartUpload {
    'authorizationToken'?: string;
    'error'?: string;
    'errorCode'?: string;
    'status'?: string;
    'uploadFileId'?: string | null;
    'uploadUrl'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authorizationToken",
            "baseName": "authorization_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        },
        {
            "name": "errorCode",
            "baseName": "error_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "uploadFileId",
            "baseName": "upload_file_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "uploadUrl",
            "baseName": "upload_url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MultipartB2StartUpload.attributeTypeMap;
    }

    public constructor() {
    }
}

