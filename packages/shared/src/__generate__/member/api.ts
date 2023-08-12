/* tslint:disable */
/* eslint-disable */
/**
 * BBOK Swagger API
 * DND 9th 10조의 Swagger docs 입니다.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface BasicChecklistDto
 */
export interface BasicChecklistDto {
    /**
     * 기본 이상적인 체크리스트
     * @type {Array<string>}
     * @memberof BasicChecklistDto
     */
    'badChecklist'?: Array<string>;
    /**
     * 기본 이상적인 체크리스트
     * @type {Array<string>}
     * @memberof BasicChecklistDto
     */
    'goodChecklist'?: Array<string>;
}
/**
 * 
 * @export
 * @interface DataResponseBasicChecklistDto
 */
export interface DataResponseBasicChecklistDto {
    /**
     * 
     * @type {BasicChecklistDto}
     * @memberof DataResponseBasicChecklistDto
     */
    'data'?: BasicChecklistDto;
    /**
     * 응답 메시지
     * @type {string}
     * @memberof DataResponseBasicChecklistDto
     */
    'message'?: string;
    /**
     * 응답 코드
     * @type {number}
     * @memberof DataResponseBasicChecklistDto
     */
    'status'?: number;
}
/**
 * 
 * @export
 * @interface DataResponseMemberInfoResponseDto
 */
export interface DataResponseMemberInfoResponseDto {
    /**
     * 
     * @type {MemberInfoResponseDto}
     * @memberof DataResponseMemberInfoResponseDto
     */
    'data'?: MemberInfoResponseDto;
    /**
     * 응답 메시지
     * @type {string}
     * @memberof DataResponseMemberInfoResponseDto
     */
    'message'?: string;
    /**
     * 응답 코드
     * @type {number}
     * @memberof DataResponseMemberInfoResponseDto
     */
    'status'?: number;
}
/**
 * 
 * @export
 * @interface MemberChecklistRequestDto
 */
export interface MemberChecklistRequestDto {
    /**
     * 사용자 정의 기피하는 기준 리스트
     * @type {Array<string>}
     * @memberof MemberChecklistRequestDto
     */
    'badChecklist'?: Array<string>;
    /**
     * 사용자 정의 이상적인 기준 리스트
     * @type {Array<string>}
     * @memberof MemberChecklistRequestDto
     */
    'goodChecklist'?: Array<string>;
}
/**
 * 
 * @export
 * @interface MemberInfoResponseDto
 */
export interface MemberInfoResponseDto {
    /**
     * member의 고유 Id
     * @type {string}
     * @memberof MemberInfoResponseDto
     */
    'memberId'?: string;
    /**
     * member의 이름
     * @type {string}
     * @memberof MemberInfoResponseDto
     */
    'memberName'?: string;
    /**
     * member의 oauth 제공자(GUEST, KAKAO)
     * @type {string}
     * @memberof MemberInfoResponseDto
     */
    'oauth2Provider'?: MemberInfoResponseDtoOauth2ProviderEnum;
    /**
     * member의 프로필 이미지 url
     * @type {string}
     * @memberof MemberInfoResponseDto
     */
    'profileUrl'?: string;
}

export const MemberInfoResponseDtoOauth2ProviderEnum = {
    Guest: 'GUEST',
    Kakao: 'KAKAO'
} as const;

export type MemberInfoResponseDtoOauth2ProviderEnum = typeof MemberInfoResponseDtoOauth2ProviderEnum[keyof typeof MemberInfoResponseDtoOauth2ProviderEnum];

/**
 * 
 * @export
 * @interface MessageResponse
 */
export interface MessageResponse {
    /**
     * 응답 메시지
     * @type {string}
     * @memberof MessageResponse
     */
    'message'?: string;
    /**
     * 응답 코드
     * @type {number}
     * @memberof MessageResponse
     */
    'status'?: number;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 사용자 정의 체크리스트 추가
         * @param {string} [authority] 
         * @param {string} [uuid] 
         * @param {MemberChecklistRequestDto} [memberChecklistRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createChecklistUsingPOST: async (authority?: string, uuid?: string, memberChecklistRequestDto?: MemberChecklistRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/checklist`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (authority !== undefined) {
                localVarQueryParameter['authority'] = authority;
            }

            if (uuid !== undefined) {
                localVarQueryParameter['uuid'] = uuid;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(memberChecklistRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 기본 체크리스트 제공
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBasicChecklistUsingGET: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/checklist`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 마이 페이지에서 사용자의 정보를 볼 수 있습니다.
         * @summary 내 정보 조회
         * @param {string} [authority] 
         * @param {string} [uuid] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMemberUsingGET: async (authority?: string, uuid?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/member`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (authority !== undefined) {
                localVarQueryParameter['authority'] = authority;
            }

            if (uuid !== undefined) {
                localVarQueryParameter['uuid'] = uuid;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary 사용자 정의 체크리스트 추가
         * @param {string} [authority] 
         * @param {string} [uuid] 
         * @param {MemberChecklistRequestDto} [memberChecklistRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createChecklistUsingPOST(authority?: string, uuid?: string, memberChecklistRequestDto?: MemberChecklistRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MessageResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createChecklistUsingPOST(authority, uuid, memberChecklistRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 기본 체크리스트 제공
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBasicChecklistUsingGET(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DataResponseBasicChecklistDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBasicChecklistUsingGET(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 마이 페이지에서 사용자의 정보를 볼 수 있습니다.
         * @summary 내 정보 조회
         * @param {string} [authority] 
         * @param {string} [uuid] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMemberUsingGET(authority?: string, uuid?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DataResponseMemberInfoResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMemberUsingGET(authority, uuid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary 사용자 정의 체크리스트 추가
         * @param {string} [authority] 
         * @param {string} [uuid] 
         * @param {MemberChecklistRequestDto} [memberChecklistRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createChecklistUsingPOST(authority?: string, uuid?: string, memberChecklistRequestDto?: MemberChecklistRequestDto, options?: any): AxiosPromise<MessageResponse> {
            return localVarFp.createChecklistUsingPOST(authority, uuid, memberChecklistRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 기본 체크리스트 제공
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBasicChecklistUsingGET(options?: any): AxiosPromise<DataResponseBasicChecklistDto> {
            return localVarFp.getBasicChecklistUsingGET(options).then((request) => request(axios, basePath));
        },
        /**
         * 마이 페이지에서 사용자의 정보를 볼 수 있습니다.
         * @summary 내 정보 조회
         * @param {string} [authority] 
         * @param {string} [uuid] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMemberUsingGET(authority?: string, uuid?: string, options?: any): AxiosPromise<DataResponseMemberInfoResponseDto> {
            return localVarFp.getMemberUsingGET(authority, uuid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary 사용자 정의 체크리스트 추가
     * @param {string} [authority] 
     * @param {string} [uuid] 
     * @param {MemberChecklistRequestDto} [memberChecklistRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public createChecklistUsingPOST(authority?: string, uuid?: string, memberChecklistRequestDto?: MemberChecklistRequestDto, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).createChecklistUsingPOST(authority, uuid, memberChecklistRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 기본 체크리스트 제공
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getBasicChecklistUsingGET(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getBasicChecklistUsingGET(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 마이 페이지에서 사용자의 정보를 볼 수 있습니다.
     * @summary 내 정보 조회
     * @param {string} [authority] 
     * @param {string} [uuid] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getMemberUsingGET(authority?: string, uuid?: string, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getMemberUsingGET(authority, uuid, options).then((request) => request(this.axios, this.basePath));
    }
}

