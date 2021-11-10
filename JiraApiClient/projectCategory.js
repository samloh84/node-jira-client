const _ = require('lodash');
module.exports = class ProjectCategoryApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['projectCategory'], params, config);
    }

    create(data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['projectCategory'], data, config);
    }


    read(projectCategoryId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['projectCategory', projectCategoryId], params, config);
    }


    update(projectCategoryId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['projectCategory', projectCategoryId], data, config);
    }

    delete(projectCategoryId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['projectCategory', projectCategoryId], params, config);
    }


};

