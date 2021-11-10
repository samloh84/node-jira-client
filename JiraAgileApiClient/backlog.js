const _ = require('lodash');
module.exports = class BacklogApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    moveIssues(data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['backlog', 'issue'], data, config);
    }
};

