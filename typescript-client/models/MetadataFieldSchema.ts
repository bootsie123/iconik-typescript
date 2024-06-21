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

import { FieldOptionsSchema } from '../models/FieldOptionsSchema';
import { HttpFile } from '../http/http';

export class MetadataFieldSchema {
    'autoSet'?: boolean | null;
    'dateCreated'?: Date;
    'dateModified'?: Date;
    'description'?: string;
    'externalId'?: string;
    'fieldType': string;
    'hideIfNotSet'?: boolean | null;
    'isBlockField'?: boolean;
    'isWarningField'?: boolean;
    'label': string;
    'mappedFieldName'?: string;
    'maxValue'?: number;
    'minValue'?: number;
    'multi'?: boolean;
    'name': string;
    'options'?: Array<FieldOptionsSchema>;
    'readOnly'?: boolean | null;
    'representative'?: boolean;
    'required'?: boolean | null;
    'sortable'?: boolean;
    /**
    * Will be used to upload MetadataField\'s `options`. Cannot be set or used as long as `options` are set.  **Example**: The value is `https://external-url.com/foo/`. In that case `GET` request will be sent to `https://external-url.com/foo/?user_id=uuid1&view_id=uuid1&field_name=bar&view_name=user_view&system_domain_id=uuid1`. Please note that some query parameters were added by *iconik* to get values that were predefined in your system for each user [user_id] and view [view_id]. Metadata field name [field_name], view\'s name [view_name] and system domain identifier [system_domain_id] will be also passed in each request. *iconik* will successfully parse the response from that URL if it will be sent in JSON formatted string: `{\"bar\": [{\"value\": \"1\", \"label\": \"1st\"}, {\"value\": \"2\", \"label\": \"2nd\"}]}`
    */
    'sourceUrl'?: string | null;
    'useAsFacet'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "autoSet",
            "baseName": "auto_set",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "dateCreated",
            "baseName": "date_created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "dateModified",
            "baseName": "date_modified",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "externalId",
            "baseName": "external_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "fieldType",
            "baseName": "field_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "hideIfNotSet",
            "baseName": "hide_if_not_set",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isBlockField",
            "baseName": "is_block_field",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isWarningField",
            "baseName": "is_warning_field",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "mappedFieldName",
            "baseName": "mapped_field_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "maxValue",
            "baseName": "max_value",
            "type": "number",
            "format": ""
        },
        {
            "name": "minValue",
            "baseName": "min_value",
            "type": "number",
            "format": ""
        },
        {
            "name": "multi",
            "baseName": "multi",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<FieldOptionsSchema>",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "read_only",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "representative",
            "baseName": "representative",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "required",
            "baseName": "required",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sortable",
            "baseName": "sortable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sourceUrl",
            "baseName": "source_url",
            "type": "string",
            "format": "url"
        },
        {
            "name": "useAsFacet",
            "baseName": "use_as_facet",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetadataFieldSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

