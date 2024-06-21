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

export class OktaSettingsSchema {
    'certFingerprint'?: string;
    'certFingerprintAlgorithm'?: OktaSettingsSchemaCertFingerprintAlgorithmEnum;
    'digestAlgorithm'?: OktaSettingsSchemaDigestAlgorithmEnum;
    'domainName'?: string;
    'idpX509cert'?: string;
    'oktaAppId'?: string;
    'oktaName': string;
    'oktaPreview'?: boolean;
    'oktaSso'?: string;
    'signatureAlgorithm'?: OktaSettingsSchemaSignatureAlgorithmEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "certFingerprint",
            "baseName": "cert_fingerprint",
            "type": "string",
            "format": ""
        },
        {
            "name": "certFingerprintAlgorithm",
            "baseName": "cert_fingerprint_algorithm",
            "type": "OktaSettingsSchemaCertFingerprintAlgorithmEnum",
            "format": ""
        },
        {
            "name": "digestAlgorithm",
            "baseName": "digest_algorithm",
            "type": "OktaSettingsSchemaDigestAlgorithmEnum",
            "format": ""
        },
        {
            "name": "domainName",
            "baseName": "domain_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "idpX509cert",
            "baseName": "idp_x509cert",
            "type": "string",
            "format": ""
        },
        {
            "name": "oktaAppId",
            "baseName": "okta_app_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "oktaName",
            "baseName": "okta_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "oktaPreview",
            "baseName": "okta_preview",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "oktaSso",
            "baseName": "okta_sso",
            "type": "string",
            "format": ""
        },
        {
            "name": "signatureAlgorithm",
            "baseName": "signature_algorithm",
            "type": "OktaSettingsSchemaSignatureAlgorithmEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OktaSettingsSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum OktaSettingsSchemaCertFingerprintAlgorithmEnum {
    _200009Xmldsigsha1 = 'http://www.w3.org/2000/09/xmldsig#sha1',
    _200104Xmlencsha256 = 'http://www.w3.org/2001/04/xmlenc#sha256',
    _200104XmldsigMoresha384 = 'http://www.w3.org/2001/04/xmldsig-more#sha384',
    _200104Xmlencsha512 = 'http://www.w3.org/2001/04/xmlenc#sha512'
}
export enum OktaSettingsSchemaDigestAlgorithmEnum {
    _200009Xmldsigsha1 = 'http://www.w3.org/2000/09/xmldsig#sha1',
    _200104Xmlencsha256 = 'http://www.w3.org/2001/04/xmlenc#sha256',
    _200104XmldsigMoresha384 = 'http://www.w3.org/2001/04/xmldsig-more#sha384',
    _200104Xmlencsha512 = 'http://www.w3.org/2001/04/xmlenc#sha512'
}
export enum OktaSettingsSchemaSignatureAlgorithmEnum {
    _200009XmldsigdsaSha1 = 'http://www.w3.org/2000/09/xmldsig#dsa-sha1',
    _200009XmldsigrsaSha1 = 'http://www.w3.org/2000/09/xmldsig#rsa-sha1',
    _200104XmldsigMorersaSha256 = 'http://www.w3.org/2001/04/xmldsig-more#rsa-sha256',
    _200104XmldsigMorersaSha384 = 'http://www.w3.org/2001/04/xmldsig-more#rsa-sha384',
    _200104XmldsigMorersaSha512 = 'http://www.w3.org/2001/04/xmldsig-more#rsa-sha512'
}

