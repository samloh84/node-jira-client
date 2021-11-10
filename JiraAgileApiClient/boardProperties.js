module.exports = class BoardPropertiesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(boardId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['board', boardId, 'properties'], params, config);
    }

    read(boardId, propertyKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['board', boardId, 'properties', propertyKey], params, config);
    }

    update(boardId, propertyKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['board', boardId, 'properties', propertyKey], data, config);
    }

    delete(boardId, propertyKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['board', boardId, 'properties', propertyKey], params, config);
    }

};

