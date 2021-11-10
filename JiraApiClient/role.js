const _ = require('lodash');
module.exports = class RoleApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['role'], params, config);
    }

    create(data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['role'], data, config);
    }


    read(roleId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['role', roleId], params, config);
    }


    update(roleId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['role', roleId], data, config);
    }

    delete(roleId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['role', roleId], params, config);
    }

    listActors(roleId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['role', roleId, 'actors'], params, config);
    }

    addActors(roleId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['role', roleId, 'actors'], data, config);
    }

    deleteActors(roleId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['role', roleId, 'actors'], params, config);
    }


};

