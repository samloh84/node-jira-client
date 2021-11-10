const _ = require('lodash');
module.exports = class IssueLinkTypeApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issueLinkType'], params, config);
    }

    create(data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['issueLinkType'], data, config);
    }


    read(issueLinkTypeId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issueLinkType', issueLinkTypeId], params, config);
    }

    delete(issueLinkTypeId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['issueLinkType', issueLinkTypeId], params, config);
    }


    update(issueLinkTypeId,data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['issueLinkType',issueLinkTypeId], data, config);
    }

};

