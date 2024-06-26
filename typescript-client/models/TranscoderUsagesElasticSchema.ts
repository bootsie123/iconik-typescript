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

export class TranscoderUsagesElasticSchema {
    'count'?: number;
    'date'?: string;
    'destinationBytes'?: number;
    'durationSeconds'?: number;
    'id'?: string;
    'isUserTranscoder'?: boolean;
    'operationType'?: TranscoderUsagesElasticSchemaOperationTypeEnum;
    'sourceBytes'?: number;
    'systemDomainId'?: string;
    'transcoderType': TranscoderUsagesElasticSchemaTranscoderTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string",
            "format": ""
        },
        {
            "name": "destinationBytes",
            "baseName": "destination_bytes",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "durationSeconds",
            "baseName": "duration_seconds",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "isUserTranscoder",
            "baseName": "is_user_transcoder",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "operationType",
            "baseName": "operation_type",
            "type": "TranscoderUsagesElasticSchemaOperationTypeEnum",
            "format": ""
        },
        {
            "name": "sourceBytes",
            "baseName": "source_bytes",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "systemDomainId",
            "baseName": "system_domain_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "transcoderType",
            "baseName": "transcoder_type",
            "type": "TranscoderUsagesElasticSchemaTranscoderTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TranscoderUsagesElasticSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TranscoderUsagesElasticSchemaOperationTypeEnum {
    Transcode = 'TRANSCODE',
    TranscodeAudio = 'TRANSCODE_AUDIO',
    TranscodeVideo = 'TRANSCODE_VIDEO',
    TranscodeImage = 'TRANSCODE_IMAGE',
    TranscodeKeyframes = 'TRANSCODE_KEYFRAMES',
    Mediainfo = 'MEDIAINFO',
    Conform = 'CONFORM',
    ExtractAudio = 'EXTRACT_AUDIO',
    ExtractImage = 'EXTRACT_IMAGE',
    Analyze = 'ANALYZE',
    Transcribe = 'TRANSCRIBE',
    TranscribeHuman = 'TRANSCRIBE_HUMAN'
}
export enum TranscoderUsagesElasticSchemaTranscoderTypeEnum {
    Vantage = 'VANTAGE',
    Ffmpeg = 'FFMPEG',
    FfmpegFirstFrame = 'FFMPEG_FIRST_FRAME',
    Imagemagick = 'IMAGEMAGICK',
    Subtitles = 'SUBTITLES',
    EncodingCom = 'ENCODING_COM',
    Zencoder = 'ZENCODER',
    TelestreamCloud = 'TELESTREAM_CLOUD',
    GoogleVideoIntelligence = 'GOOGLE_VIDEO_INTELLIGENCE',
    GoogleVision = 'GOOGLE_VISION',
    CollectionKeyframes = 'COLLECTION_KEYFRAMES',
    AmazonRekognitionImage = 'AMAZON_REKOGNITION_IMAGE',
    AmazonRekognitionVideo = 'AMAZON_REKOGNITION_VIDEO',
    ElementalMediaconvert = 'ELEMENTAL_MEDIACONVERT',
    ElementalServer = 'ELEMENTAL_SERVER',
    Mediainfo = 'MEDIAINFO',
    IconikEdgeTranscoder = 'ICONIK_EDGE_TRANSCODER',
    None = 'NONE',
    RevAiTranscription = 'REV_AI_TRANSCRIPTION',
    GcviTranscription = 'GCVI_TRANSCRIPTION',
    AmazonTranscribe = 'AMAZON_TRANSCRIBE',
    OpenGraph = 'OPEN_GRAPH'
}

