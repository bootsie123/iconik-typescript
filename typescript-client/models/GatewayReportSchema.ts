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

export class GatewayReportSchema {
    'awaitChecksumFilesNumber'?: number | null;
    'dateReported'?: Date;
    'emptyFilesNumber'?: number | null;
    'errorLogLines'?: Array<string>;
    'exportedFilesNumber'?: number | null;
    'faultyFilesNumber'?: number | null;
    'hostInfo'?: string;
    'hostName'?: string;
    'id'?: string;
    'ingestedFilesNumber'?: number | null;
    'ingestedFilesUploadsNumber'?: number | null;
    'ingestingFilesNumber'?: number | null;
    'lastScanTime'?: number | null;
    'logLines'?: Array<string>;
    'logsUrl'?: string;
    'missingFilesNumber'?: number | null;
    'scannedFilesNumber'?: number | null;
    'skippedFilesNumber'?: number | null;
    'startLastDate'?: Date;
    'startStatus'?: GatewayReportSchemaStartStatusEnum;
    'startStatusMessage'?: string;
    'status'?: GatewayReportSchemaStatusEnum;
    'storageId'?: string;
    'totalFilesNumber'?: number | null;
    'totalFoldersNumber'?: number | null;
    'version'?: string;
    'waitingPreviewTranscodeJobsNumber'?: number | null;
    'waitingTranscodeJobsNumber'?: number | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "awaitChecksumFilesNumber",
            "baseName": "await_checksum_files_number",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "dateReported",
            "baseName": "date_reported",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "emptyFilesNumber",
            "baseName": "empty_files_number",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "errorLogLines",
            "baseName": "error_log_lines",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "exportedFilesNumber",
            "baseName": "exported_files_number",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "faultyFilesNumber",
            "baseName": "faulty_files_number",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "hostInfo",
            "baseName": "host_info",
            "type": "string",
            "format": ""
        },
        {
            "name": "hostName",
            "baseName": "host_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "ingestedFilesNumber",
            "baseName": "ingested_files_number",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "ingestedFilesUploadsNumber",
            "baseName": "ingested_files_uploads_number",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "ingestingFilesNumber",
            "baseName": "ingesting_files_number",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "lastScanTime",
            "baseName": "last_scan_time",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "logLines",
            "baseName": "log_lines",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "logsUrl",
            "baseName": "logs_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "missingFilesNumber",
            "baseName": "missing_files_number",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "scannedFilesNumber",
            "baseName": "scanned_files_number",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "skippedFilesNumber",
            "baseName": "skipped_files_number",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "startLastDate",
            "baseName": "start_last_date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "startStatus",
            "baseName": "start_status",
            "type": "GatewayReportSchemaStartStatusEnum",
            "format": ""
        },
        {
            "name": "startStatusMessage",
            "baseName": "start_status_message",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "GatewayReportSchemaStatusEnum",
            "format": ""
        },
        {
            "name": "storageId",
            "baseName": "storage_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "totalFilesNumber",
            "baseName": "total_files_number",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "totalFoldersNumber",
            "baseName": "total_folders_number",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "waitingPreviewTranscodeJobsNumber",
            "baseName": "waiting_preview_transcode_jobs_number",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "waitingTranscodeJobsNumber",
            "baseName": "waiting_transcode_jobs_number",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return GatewayReportSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GatewayReportSchemaStartStatusEnum {
    Success = 'SUCCESS',
    Failed = 'FAILED'
}
export enum GatewayReportSchemaStatusEnum {
    Offline = 'OFFLINE',
    Live = 'LIVE',
    Unknown = 'UNKNOWN'
}

