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

import { GroupACL } from '../models/GroupACL';
import { GroupACL1 } from '../models/GroupACL1';
import { UserACL } from '../models/UserACL';
import { UserACL1 } from '../models/UserACL1';
import { HttpFile } from '../http/http';

export class ACLSchema {
    'groupsAcl'?: Array<GroupACL1>;
    'inheritedGroupsAcl'?: Array<GroupACL>;
    'inheritedUsersAcl'?: Array<UserACL1>;
    'propagatingGroupsAcl'?: Array<GroupACL>;
    'propagatingUsersAcl'?: Array<UserACL1>;
    'usersAcl'?: Array<UserACL>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "groupsAcl",
            "baseName": "groups_acl",
            "type": "Array<GroupACL1>",
            "format": ""
        },
        {
            "name": "inheritedGroupsAcl",
            "baseName": "inherited_groups_acl",
            "type": "Array<GroupACL>",
            "format": ""
        },
        {
            "name": "inheritedUsersAcl",
            "baseName": "inherited_users_acl",
            "type": "Array<UserACL1>",
            "format": ""
        },
        {
            "name": "propagatingGroupsAcl",
            "baseName": "propagating_groups_acl",
            "type": "Array<GroupACL>",
            "format": ""
        },
        {
            "name": "propagatingUsersAcl",
            "baseName": "propagating_users_acl",
            "type": "Array<UserACL1>",
            "format": ""
        },
        {
            "name": "usersAcl",
            "baseName": "users_acl",
            "type": "Array<UserACL>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ACLSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

