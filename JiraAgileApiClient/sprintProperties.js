const _ = require('lodash');
module.exports = class SprintPropertiesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(sprintId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['sprint', sprintId, 'properties'], params, config);
    }

    read(sprintId, propertyKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['sprint', sprintId, 'properties', propertyKey], params, config);
    }

    update(sprintId, propertyKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['sprint', sprintId, 'properties', propertyKey], data, config);
    }

    delete(sprintId, propertyKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['sprint', sprintId, 'properties', propertyKey], params, config);
    }

};

