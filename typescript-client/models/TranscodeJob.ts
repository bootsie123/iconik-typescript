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

import { OutputEndpoint } from '../models/OutputEndpoint';
import { HttpFile } from '../http/http';

export class TranscodeJob {
    'height'?: number;
    'id'?: string;
    'outputEndpoint': OutputEndpoint;
    'width'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "outputEndpoint",
            "baseName": "output_endpoint",
            "type": "OutputEndpoint",
            "format": ""
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return TranscodeJob.attributeTypeMap;
    }

    public constructor() {
    }
}

