const _ = require('lodash');
const sprintPropertiesApi = require("./sprintProperties");

module.exports = class SprintApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
        this.properties = new sprintPropertiesApi(apiClient);
    }


    create(data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['sprint'], data, config);
    }


    read(sprintId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['sprint', sprintId], params, config);
    }


    update(sprintId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['sprint', sprintId], data, config);
    }

    delete(sprintId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['sprint', sprintId], params, config);
    }

    moveIssues(sprintId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['sprint', sprintId, 'issue'], data, config);
    }

    listIssues(sprintId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['sprint', sprintId, 'issue'], params, config);
    }

    swap(sprintId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['sprint', sprintId, 'swap'], data, config);
    }
};

