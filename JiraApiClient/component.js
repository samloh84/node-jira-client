const _ = require('lodash');
module.exports = class ComponentApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    create(data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['component'], data, config);
    }


    read(componentId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['component', componentId], params, config);
    }


    update(componentId,data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['component',componentId], data, config);
    }

    delete(componentId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['component', componentId], params, config);
    }

    listRelatedIssues(componentId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['component', componentId, 'relatedIssueCounts'], params, config);
    }

};

