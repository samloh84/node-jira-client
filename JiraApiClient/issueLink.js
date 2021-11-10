const _ = require('lodash');
module.exports = class IssueLinkApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    create(data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['issueLink'], data, config);
    }


    read(issueLinkId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issueLink', issueLinkId], params, config);
    }

    delete(issueLinkId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['issueLink', issueLinkId], params, config);
    }
};

