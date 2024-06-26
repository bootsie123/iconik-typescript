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

export class StorageAccessSchema {
    'bucketName': string;
    'bytesReceived'?: number;
    'bytesSent'?: number;
    'date'?: Date;
    'id'?: string;
    'operationType': string;
    'operations'?: number;
    'storageType': StorageAccessSchemaStorageTypeEnum;
    'systemDomainId'?: string;
    'systemName': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bucketName",
            "baseName": "bucket_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "bytesReceived",
            "baseName": "bytes_received",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "bytesSent",
            "baseName": "bytes_sent",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "operationType",
            "baseName": "operation_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "operations",
            "baseName": "operations",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "storageType",
            "baseName": "storage_type",
            "type": "StorageAccessSchemaStorageTypeEnum",
            "format": ""
        },
        {
            "name": "systemDomainId",
            "baseName": "system_domain_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "systemName",
            "baseName": "system_name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StorageAccessSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum StorageAccessSchemaStorageTypeEnum {
    File = 'FILE',
    Http = 'HTTP',
    Ftp = 'FTP',
    Sftp = 'SFTP',
    S3 = 'S3',
    Omms = 'OMMS',
    Gcs = 'GCS',
    B2 = 'B2',
    Azure = 'AZURE',
    Transfer = 'TRANSFER'
}

