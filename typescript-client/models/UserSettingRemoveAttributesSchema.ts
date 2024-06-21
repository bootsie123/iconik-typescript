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

import { AllowedIPSchema } from '../models/AllowedIPSchema';
import { FacetFieldSchema } from '../models/FacetFieldSchema';
import { JobsDashboardSchema } from '../models/JobsDashboardSchema';
import { SearchDisplayFieldSchema } from '../models/SearchDisplayFieldSchema';
import { HttpFile } from '../http/http';

export class UserSettingRemoveAttributesSchema {
    'allowedIps'?: Array<AllowedIPSchema>;
    'assetDefaultSections'?: Array<string>;
    'facetFields'?: Array<FacetFieldSchema>;
    'jobsDashboard'?: JobsDashboardSchema | null;
    'searchDefaultSections'?: Array<string>;
    'searchDisplayFields'?: Array<SearchDisplayFieldSchema>;
    'userIds': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "allowedIps",
            "baseName": "allowed_ips",
            "type": "Array<AllowedIPSchema>",
            "format": ""
        },
        {
            "name": "assetDefaultSections",
            "baseName": "asset_default_sections",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "facetFields",
            "baseName": "facet_fields",
            "type": "Array<FacetFieldSchema>",
            "format": ""
        },
        {
            "name": "jobsDashboard",
            "baseName": "jobs_dashboard",
            "type": "JobsDashboardSchema",
            "format": ""
        },
        {
            "name": "searchDefaultSections",
            "baseName": "search_default_sections",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "searchDisplayFields",
            "baseName": "search_display_fields",
            "type": "Array<SearchDisplayFieldSchema>",
            "format": ""
        },
        {
            "name": "userIds",
            "baseName": "user_ids",
            "type": "Array<string>",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return UserSettingRemoveAttributesSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

