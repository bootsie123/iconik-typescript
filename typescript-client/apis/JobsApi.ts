// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AclsV1AclPostDefaultResponse } from '../models/AclsV1AclPostDefaultResponse';
import { JobSchema } from '../models/JobSchema';
import { JobStepSchema } from '../models/JobStepSchema';
import { JobStepsUpdateSchema } from '../models/JobStepsUpdateSchema';
import { JobsBulkDeleteSchema } from '../models/JobsBulkDeleteSchema';
import { JobsPrioritySchema } from '../models/JobsPrioritySchema';
import { JobsSchema } from '../models/JobsSchema';
import { JobsStateSchema1 } from '../models/JobsStateSchema1';
import { ReindexJobSchema } from '../models/ReindexJobSchema';

/**
 * no description
 */
export class JobsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     *  Required roles:  - can_delete_jobs 
     * Delete multiple jobs by ids list
     * @param appID 
     * @param authToken 
     * @param jobsBulkDeleteSchema body
     */
    public async jobsV1JobsDelete(appID: string, authToken: string, jobsBulkDeleteSchema: JobsBulkDeleteSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsDelete", "authToken");
        }


        // verify required parameter 'jobsBulkDeleteSchema' is not null or undefined
        if (jobsBulkDeleteSchema === null || jobsBulkDeleteSchema === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsDelete", "jobsBulkDeleteSchema");
        }


        // Path Params
        const localVarPath = '/jobs/v1/jobs/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(jobsBulkDeleteSchema, "JobsBulkDeleteSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_jobs 
     * Get list of jobs
     * @param appID 
     * @param authToken 
     * @param facets If facets should be returned
     * @param aggregations List of aggregation keys if facets is true
     * @param page Which page number to fetch
     * @param perPage The number of items for each page
     * @param scroll If true passed then uses scroll pagination instead of default one
     * @param scrollId In order to get next batch of results using scroll pagination the scroll_id is required
     * @param sort A comma separated list of fieldnames with order. For example - first_name,asc;last_name,desc
     * @param type Filter by type
     * @param objectType Filter by object_type
     * @param parentId Filter by parent_id
     * @param objectId Filter by object_id
     * @param status Filter by status
     * @param createdBy Filter by created_by
     * @param dateCreated Filter by date_created. Can either be a single ISO8601 timestamp or two timestamps separated by a semicolon &#x60;;&#x60;. The timestamp can also be expressed as number of milliseconds since Jan 1 1970 (epoch). Either timestamp can also be replaced with an asterisk &#x60;*&#x60; to make the query open ended. For example: 2018-01-01T10:00:00Z;2018-01-01T15:00:00Z
     * @param dateModified Filter by date_modified Can either be a single ISO8601 timestamp or two timestamps separated by a semicolon &#x60;;&#x60;. The timestamp can also be expressed as number of milliseconds since Jan 1 1970 (epoch). Either timestamp can also be replaced with an asterisk &#x60;*&#x60; to make the query open ended. For example: *;1544450400
     * @param query Filter by any of the above with wildcard support
     * @param ids Filter list of id:s (comma separated)
     */
    public async jobsV1JobsGet(appID: string, authToken: string, facets?: boolean, aggregations?: string, page?: number, perPage?: number, scroll?: boolean, scrollId?: string, sort?: string, type?: string, objectType?: string, parentId?: string, objectId?: string, status?: string, createdBy?: string, dateCreated?: string, dateModified?: string, query?: string, ids?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsGet", "authToken");
        }



















        // Path Params
        const localVarPath = '/jobs/v1/jobs/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (facets !== undefined) {
            requestContext.setQueryParam("facets", ObjectSerializer.serialize(facets, "boolean", ""));
        }

        // Query Params
        if (aggregations !== undefined) {
            requestContext.setQueryParam("aggregations", ObjectSerializer.serialize(aggregations, "string", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int32"));
        }

        // Query Params
        if (scroll !== undefined) {
            requestContext.setQueryParam("scroll", ObjectSerializer.serialize(scroll, "boolean", ""));
        }

        // Query Params
        if (scrollId !== undefined) {
            requestContext.setQueryParam("scroll_id", ObjectSerializer.serialize(scrollId, "string", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
        }

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "string", ""));
        }

        // Query Params
        if (objectType !== undefined) {
            requestContext.setQueryParam("object_type", ObjectSerializer.serialize(objectType, "string", ""));
        }

        // Query Params
        if (parentId !== undefined) {
            requestContext.setQueryParam("parent_id", ObjectSerializer.serialize(parentId, "string", ""));
        }

        // Query Params
        if (objectId !== undefined) {
            requestContext.setQueryParam("object_id", ObjectSerializer.serialize(objectId, "string", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "string", ""));
        }

        // Query Params
        if (createdBy !== undefined) {
            requestContext.setQueryParam("created_by", ObjectSerializer.serialize(createdBy, "string", ""));
        }

        // Query Params
        if (dateCreated !== undefined) {
            requestContext.setQueryParam("date_created", ObjectSerializer.serialize(dateCreated, "string", ""));
        }

        // Query Params
        if (dateModified !== undefined) {
            requestContext.setQueryParam("date_modified", ObjectSerializer.serialize(dateModified, "string", ""));
        }

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (ids !== undefined) {
            requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_delete_jobs 
     * Delete a particular job by id
     * @param appID 
     * @param authToken 
     * @param jobId 
     */
    public async jobsV1JobsJobIdDelete(appID: string, authToken: string, jobId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdDelete", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdDelete", "authToken");
        }


        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdDelete", "jobId");
        }


        // Path Params
        const localVarPath = '/jobs/v1/jobs/{job_id}/'
            .replace('{' + 'job_id' + '}', encodeURIComponent(String(jobId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_read_jobs 
     * Returns a particular job by id
     * @param appID 
     * @param authToken 
     * @param jobId 
     */
    public async jobsV1JobsJobIdGet(appID: string, authToken: string, jobId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdGet", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdGet", "authToken");
        }


        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdGet", "jobId");
        }


        // Path Params
        const localVarPath = '/jobs/v1/jobs/{job_id}/'
            .replace('{' + 'job_id' + '}', encodeURIComponent(String(jobId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update job
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param jobSchema body
     */
    public async jobsV1JobsJobIdPatch(appID: string, authToken: string, jobId: string, jobSchema: JobSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdPatch", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdPatch", "authToken");
        }


        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdPatch", "jobId");
        }


        // verify required parameter 'jobSchema' is not null or undefined
        if (jobSchema === null || jobSchema === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdPatch", "jobSchema");
        }


        // Path Params
        const localVarPath = '/jobs/v1/jobs/{job_id}/'
            .replace('{' + 'job_id' + '}', encodeURIComponent(String(jobId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(jobSchema, "JobSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update job
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param jobSchema body
     */
    public async jobsV1JobsJobIdPut(appID: string, authToken: string, jobId: string, jobSchema: JobSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdPut", "authToken");
        }


        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdPut", "jobId");
        }


        // verify required parameter 'jobSchema' is not null or undefined
        if (jobSchema === null || jobSchema === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdPut", "jobSchema");
        }


        // Path Params
        const localVarPath = '/jobs/v1/jobs/{job_id}/'
            .replace('{' + 'job_id' + '}', encodeURIComponent(String(jobId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(jobSchema, "JobSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Reindex job
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param reindexJobSchema body
     */
    public async jobsV1JobsJobIdReindexPost(appID: string, authToken: string, jobId: string, reindexJobSchema: ReindexJobSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdReindexPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdReindexPost", "authToken");
        }


        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdReindexPost", "jobId");
        }


        // verify required parameter 'reindexJobSchema' is not null or undefined
        if (reindexJobSchema === null || reindexJobSchema === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdReindexPost", "reindexJobSchema");
        }


        // Path Params
        const localVarPath = '/jobs/v1/jobs/{job_id}/reindex/'
            .replace('{' + 'job_id' + '}', encodeURIComponent(String(jobId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reindexJobSchema, "ReindexJobSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update job step
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param jobStepId 
     * @param jobStepSchema body
     */
    public async jobsV1JobsJobIdStepsJobStepIdPatch(appID: string, authToken: string, jobId: string, jobStepId: string, jobStepSchema: JobStepSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdStepsJobStepIdPatch", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdStepsJobStepIdPatch", "authToken");
        }


        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdStepsJobStepIdPatch", "jobId");
        }


        // verify required parameter 'jobStepId' is not null or undefined
        if (jobStepId === null || jobStepId === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdStepsJobStepIdPatch", "jobStepId");
        }


        // verify required parameter 'jobStepSchema' is not null or undefined
        if (jobStepSchema === null || jobStepSchema === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdStepsJobStepIdPatch", "jobStepSchema");
        }


        // Path Params
        const localVarPath = '/jobs/v1/jobs/{job_id}/steps/{job_step_id}/'
            .replace('{' + 'job_id' + '}', encodeURIComponent(String(jobId)))
            .replace('{' + 'job_step_id' + '}', encodeURIComponent(String(jobStepId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(jobStepSchema, "JobStepSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update job step
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param jobStepId 
     * @param jobStepSchema body
     */
    public async jobsV1JobsJobIdStepsJobStepIdPut(appID: string, authToken: string, jobId: string, jobStepId: string, jobStepSchema: JobStepSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdStepsJobStepIdPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdStepsJobStepIdPut", "authToken");
        }


        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdStepsJobStepIdPut", "jobId");
        }


        // verify required parameter 'jobStepId' is not null or undefined
        if (jobStepId === null || jobStepId === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdStepsJobStepIdPut", "jobStepId");
        }


        // verify required parameter 'jobStepSchema' is not null or undefined
        if (jobStepSchema === null || jobStepSchema === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdStepsJobStepIdPut", "jobStepSchema");
        }


        // Path Params
        const localVarPath = '/jobs/v1/jobs/{job_id}/steps/{job_step_id}/'
            .replace('{' + 'job_id' + '}', encodeURIComponent(String(jobId)))
            .replace('{' + 'job_step_id' + '}', encodeURIComponent(String(jobStepId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(jobStepSchema, "JobStepSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update multiple job steps
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param jobStepsUpdateSchema body
     */
    public async jobsV1JobsJobIdStepsPatch(appID: string, authToken: string, jobId: string, jobStepsUpdateSchema: JobStepsUpdateSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdStepsPatch", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdStepsPatch", "authToken");
        }


        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdStepsPatch", "jobId");
        }


        // verify required parameter 'jobStepsUpdateSchema' is not null or undefined
        if (jobStepsUpdateSchema === null || jobStepsUpdateSchema === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdStepsPatch", "jobStepsUpdateSchema");
        }


        // Path Params
        const localVarPath = '/jobs/v1/jobs/{job_id}/steps/'
            .replace('{' + 'job_id' + '}', encodeURIComponent(String(jobId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(jobStepsUpdateSchema, "JobStepsUpdateSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Update multiple job steps
     * @param appID 
     * @param authToken 
     * @param jobId 
     * @param jobStepsUpdateSchema body
     */
    public async jobsV1JobsJobIdStepsPut(appID: string, authToken: string, jobId: string, jobStepsUpdateSchema: JobStepsUpdateSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdStepsPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdStepsPut", "authToken");
        }


        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdStepsPut", "jobId");
        }


        // verify required parameter 'jobStepsUpdateSchema' is not null or undefined
        if (jobStepsUpdateSchema === null || jobStepsUpdateSchema === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsJobIdStepsPut", "jobStepsUpdateSchema");
        }


        // Path Params
        const localVarPath = '/jobs/v1/jobs/{job_id}/steps/'
            .replace('{' + 'job_id' + '}', encodeURIComponent(String(jobId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(jobStepsUpdateSchema, "JobStepsUpdateSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Create a new job
     * @param appID 
     * @param authToken 
     * @param jobSchema body
     */
    public async jobsV1JobsPost(appID: string, authToken: string, jobSchema: JobSchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsPost", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsPost", "authToken");
        }


        // verify required parameter 'jobSchema' is not null or undefined
        if (jobSchema === null || jobSchema === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsPost", "jobSchema");
        }


        // Path Params
        const localVarPath = '/jobs/v1/jobs/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(jobSchema, "JobSchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Change jobs priority
     * @param appID 
     * @param authToken 
     * @param jobsPrioritySchema body
     */
    public async jobsV1JobsPriorityPut(appID: string, authToken: string, jobsPrioritySchema: JobsPrioritySchema, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsPriorityPut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsPriorityPut", "authToken");
        }


        // verify required parameter 'jobsPrioritySchema' is not null or undefined
        if (jobsPrioritySchema === null || jobsPrioritySchema === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsPriorityPut", "jobsPrioritySchema");
        }


        // Path Params
        const localVarPath = '/jobs/v1/jobs/priority/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(jobsPrioritySchema, "JobsPrioritySchema", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     *  Required roles:  - can_write_jobs 
     * Change jobs state
     * @param appID 
     * @param authToken 
     * @param jobsStateSchema1 body
     */
    public async jobsV1JobsStatePut(appID: string, authToken: string, jobsStateSchema1: JobsStateSchema1, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appID' is not null or undefined
        if (appID === null || appID === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsStatePut", "appID");
        }


        // verify required parameter 'authToken' is not null or undefined
        if (authToken === null || authToken === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsStatePut", "authToken");
        }


        // verify required parameter 'jobsStateSchema1' is not null or undefined
        if (jobsStateSchema1 === null || jobsStateSchema1 === undefined) {
            throw new RequiredError("JobsApi", "jobsV1JobsStatePut", "jobsStateSchema1");
        }


        // Path Params
        const localVarPath = '/jobs/v1/jobs/state/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("App-ID", ObjectSerializer.serialize(appID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Auth-Token", ObjectSerializer.serialize(authToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(jobsStateSchema1, "JobsStateSchema1", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class JobsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsV1JobsDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jobsV1JobsDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsV1JobsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jobsV1JobsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<JobsSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JobsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobsSchema", ""
            ) as JobsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Requested page does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JobsSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobsSchema", ""
            ) as JobsSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsV1JobsJobIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jobsV1JobsJobIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Job does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsV1JobsJobIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jobsV1JobsJobIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<JobSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JobSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobSchema", ""
            ) as JobSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Job does not exist", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JobSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobSchema", ""
            ) as JobSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsV1JobsJobIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jobsV1JobsJobIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<JobSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JobSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobSchema", ""
            ) as JobSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JobSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobSchema", ""
            ) as JobSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsV1JobsJobIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jobsV1JobsJobIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<JobSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JobSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobSchema", ""
            ) as JobSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JobSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobSchema", ""
            ) as JobSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsV1JobsJobIdReindexPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jobsV1JobsJobIdReindexPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsV1JobsJobIdStepsJobStepIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jobsV1JobsJobIdStepsJobStepIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<JobSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JobSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobSchema", ""
            ) as JobSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JobSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobSchema", ""
            ) as JobSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsV1JobsJobIdStepsJobStepIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jobsV1JobsJobIdStepsJobStepIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<JobSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JobSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobSchema", ""
            ) as JobSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JobSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobSchema", ""
            ) as JobSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsV1JobsJobIdStepsPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jobsV1JobsJobIdStepsPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<JobSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JobSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobSchema", ""
            ) as JobSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JobSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobSchema", ""
            ) as JobSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsV1JobsJobIdStepsPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jobsV1JobsJobIdStepsPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<JobSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JobSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobSchema", ""
            ) as JobSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JobSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobSchema", ""
            ) as JobSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsV1JobsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jobsV1JobsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<JobSchema >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: JobSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobSchema", ""
            ) as JobSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JobSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobSchema", ""
            ) as JobSchema;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsV1JobsPriorityPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jobsV1JobsPriorityPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Forbidden", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsV1JobsStatePut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jobsV1JobsStatePutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Token is invalid", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AclsV1AclPostDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AclsV1AclPostDefaultResponse", ""
            ) as AclsV1AclPostDefaultResponse;
            throw new ApiException<AclsV1AclPostDefaultResponse>(response.httpStatusCode, "Error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
