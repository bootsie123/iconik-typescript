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

export class StatsV1SystemLogsRecipientsLogsRecipientIdPost200Response {
    'accessCheck'?: boolean;
    'errorMessage'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accessCheck",
            "baseName": "access_check",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "errorMessage",
            "baseName": "error_message",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StatsV1SystemLogsRecipientsLogsRecipientIdPost200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

