const _ = require('lodash');
module.exports = class WorkflowApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['workflow'], params, config);
    }

    listProperties(workflowId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['workflow', workflowId, 'properties'], params, config);
    }

    readProperty(workflowId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['workflow', workflowId, 'properties'], params, config);
    }

    createProperty(workflowId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['workflow', workflowId, 'properties'], data, config);
    }

    updateProperty(workflowId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['workflow', workflowId, 'properties'], data, config);
    }

    deleteProperty(workflowId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['workflow', workflowId, 'properties',], params, config);
    }

};

