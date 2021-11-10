const _ = require('lodash');
module.exports = class IssueTypeApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issuetype'], params, config);
    }

    create(data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['issuetype'], data, config);
    }


    read(issueTypeId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issuetype', issueTypeId], params, config);
    }

    delete(issueTypeId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['issuetype', issueTypeId], params, config);
    }


    update(issueTypeId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['issuetype', issueTypeId], data, config);
    }

    listAlternatives(issueTypeId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issuetype', issueTypeId, 'alternatives'], params, config);
    }

    storeTemporaryAvatar(issueTypeId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        if (_.isNil(config)) {
            config = {};
        }
        _.set(config, ['headers', 'content-type'], 'multipart/form-data');
        return apiClient._post(['issuetype', issueTypeId, 'avatar', 'temporary'], data, config);
    }

    createAvatar(issueTypeId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['issuetype', issueTypeId, 'avatar'], data, config);
    }

};


