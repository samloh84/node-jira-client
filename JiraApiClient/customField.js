const _ = require('lodash');
module.exports = class CustomFieldApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['customFields'], params, config);
    }
};

