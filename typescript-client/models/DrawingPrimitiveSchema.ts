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

import { DrawingPointSchema } from '../models/DrawingPointSchema';
import { HttpFile } from '../http/http';

export class DrawingPrimitiveSchema {
    'color'?: string;
    'points'?: Array<DrawingPointSchema>;
    'text'?: string;
    'type': DrawingPrimitiveSchemaTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "color",
            "baseName": "color",
            "type": "string",
            "format": ""
        },
        {
            "name": "points",
            "baseName": "points",
            "type": "Array<DrawingPointSchema>",
            "format": ""
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "DrawingPrimitiveSchemaTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DrawingPrimitiveSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum DrawingPrimitiveSchemaTypeEnum {
    Line = 'LINE',
    Rectangle = 'RECTANGLE',
    Arrow = 'ARROW',
    Ellipse = 'ELLIPSE',
    Pencil = 'PENCIL',
    Text = 'TEXT'
}

