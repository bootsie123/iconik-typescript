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

export class AnalysisProfileSchema {
    'analysisServiceAccountId': string;
    'enabled'?: boolean;
    'id'?: string;
    'isDefault'?: boolean;
    'mediaType': AnalysisProfileSchemaMediaTypeEnum;
    'name': string;
    'serviceType'?: AnalysisProfileSchemaServiceTypeEnum;
    'settings'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "analysisServiceAccountId",
            "baseName": "analysis_service_account_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "isDefault",
            "baseName": "is_default",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mediaType",
            "baseName": "media_type",
            "type": "AnalysisProfileSchemaMediaTypeEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "serviceType",
            "baseName": "service_type",
            "type": "AnalysisProfileSchemaServiceTypeEnum",
            "format": ""
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AnalysisProfileSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AnalysisProfileSchemaMediaTypeEnum {
    Image = 'image',
    Video = 'video',
    Transcription = 'transcription',
    FaceImage = 'face_image',
    FaceVideo = 'face_video'
}
export enum AnalysisProfileSchemaServiceTypeEnum {
    GoogleVision = 'GOOGLE_VISION',
    GoogleVideoIntelligence = 'GOOGLE_VIDEO_INTELLIGENCE',
    AmazonRekognition = 'AMAZON_REKOGNITION',
    RevAi = 'REV_AI',
    Iconik = 'ICONIK',
    IconikFaceRecognition = 'ICONIK_FACE_RECOGNITION'
}

