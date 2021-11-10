const _ = require('lodash');
module.exports = class ProjectTypeApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['project', 'type'], params, config);
    }

    read(projectTypeId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['project', 'type', projectTypeId], params, config);
    }

    readAccessible(projectTypeId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['project', 'type', projectTypeId, 'accessible'], params, config);
    }
};


