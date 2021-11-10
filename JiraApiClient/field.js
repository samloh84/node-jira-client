const _ = require('lodash');
module.exports = class FieldApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    create(data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['field'], data, config);
    }


    list(params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['field'], params, config);
    }
};

