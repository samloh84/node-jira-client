const _ = require('lodash');
module.exports = class IssueApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    read(issueIdOrKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issue', issueIdOrKey], params, config);
    }

    getEstimation(issueIdOrKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issue', issueIdOrKey, 'estimation'], params, config);
    }

    setEstimation(issueIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['issue', issueIdOrKey, 'estimation'], data, config);
    }

    rank(issueIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['issue', issueIdOrKey, 'rank'], data, config);
    }

};

