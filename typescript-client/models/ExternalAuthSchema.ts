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

import { RedirectInfoType } from '../models/RedirectInfoType';
import { HttpFile } from '../http/http';

export class ExternalAuthSchema {
    'appId'?: string;
    'dateCreated'?: Date;
    'redirectInfo'?: RedirectInfoType;
    'token'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appId",
            "baseName": "app_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateCreated",
            "baseName": "date_created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "redirectInfo",
            "baseName": "redirect_info",
            "type": "RedirectInfoType",
            "format": ""
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ExternalAuthSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

