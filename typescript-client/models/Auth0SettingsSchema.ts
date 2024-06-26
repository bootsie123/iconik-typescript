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

export class Auth0SettingsSchema {
    'auth0ClientId': string;
    'auth0Name': string;
    'auth0Region': string;
    'certFingerprint'?: string;
    'certFingerprintAlgorithm'?: Auth0SettingsSchemaCertFingerprintAlgorithmEnum;
    'digestAlgorithm'?: Auth0SettingsSchemaDigestAlgorithmEnum;
    'domainName'?: string;
    'idpX509cert'?: string;
    'signatureAlgorithm'?: Auth0SettingsSchemaSignatureAlgorithmEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "auth0ClientId",
            "baseName": "auth0_client_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "auth0Name",
            "baseName": "auth0_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "auth0Region",
            "baseName": "auth0_region",
            "type": "string",
            "format": ""
        },
        {
            "name": "certFingerprint",
            "baseName": "cert_fingerprint",
            "type": "string",
            "format": ""
        },
        {
            "name": "certFingerprintAlgorithm",
            "baseName": "cert_fingerprint_algorithm",
            "type": "Auth0SettingsSchemaCertFingerprintAlgorithmEnum",
            "format": ""
        },
        {
            "name": "digestAlgorithm",
            "baseName": "digest_algorithm",
            "type": "Auth0SettingsSchemaDigestAlgorithmEnum",
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
            "name": "signatureAlgorithm",
            "baseName": "signature_algorithm",
            "type": "Auth0SettingsSchemaSignatureAlgorithmEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Auth0SettingsSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum Auth0SettingsSchemaCertFingerprintAlgorithmEnum {
    _200009Xmldsigsha1 = 'http://www.w3.org/2000/09/xmldsig#sha1',
    _200104Xmlencsha256 = 'http://www.w3.org/2001/04/xmlenc#sha256',
    _200104XmldsigMoresha384 = 'http://www.w3.org/2001/04/xmldsig-more#sha384',
    _200104Xmlencsha512 = 'http://www.w3.org/2001/04/xmlenc#sha512'
}
export enum Auth0SettingsSchemaDigestAlgorithmEnum {
    _200009Xmldsigsha1 = 'http://www.w3.org/2000/09/xmldsig#sha1',
    _200104Xmlencsha256 = 'http://www.w3.org/2001/04/xmlenc#sha256',
    _200104XmldsigMoresha384 = 'http://www.w3.org/2001/04/xmldsig-more#sha384',
    _200104Xmlencsha512 = 'http://www.w3.org/2001/04/xmlenc#sha512'
}
export enum Auth0SettingsSchemaSignatureAlgorithmEnum {
    _200009XmldsigdsaSha1 = 'http://www.w3.org/2000/09/xmldsig#dsa-sha1',
    _200009XmldsigrsaSha1 = 'http://www.w3.org/2000/09/xmldsig#rsa-sha1',
    _200104XmldsigMorersaSha256 = 'http://www.w3.org/2001/04/xmldsig-more#rsa-sha256',
    _200104XmldsigMorersaSha384 = 'http://www.w3.org/2001/04/xmldsig-more#rsa-sha384',
    _200104XmldsigMorersaSha512 = 'http://www.w3.org/2001/04/xmldsig-more#rsa-sha512'
}

