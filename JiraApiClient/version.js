const _ = require('lodash');
module.exports = class VersionApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    create(data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['version'], data, config);
    }

    move(versionId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['version', versionId, 'move'], data, config);
    }


    read(versionId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['version', versionId], params, config);
    }


    update(versionId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['version', versionId], data, config);
    }

    delete(versionId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['version', versionId], params, config);
    }

    merge(versionId, destinationVersionId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['version', versionId, 'mergeto', destinationVersionId], data, config);
    }


    listRelatedIssues(versionId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['version', versionId, 'relatedIssueCounts'], params, config);
    }

    deleteAndSwap(versionId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['version', versionId, 'removeAndSwap'], params, config);
    }

    listUnresolvedIssues(versionId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['version', versionId, 'unresolvedIssueCount'], params, config);
    }



    listRemoteLinks(versionId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['version', versionId, 'remotelink'], params, config);
    }

    createRemoteLink(versionId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['version', versionId, 'remotelink'], data, config);
    }

    readRemoteLink(versionId, remoteLinkId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['version', versionId, 'remotelink', remoteLinkId], params, config);
    }

    updateRemoteLink(versionId, remoteLinkId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['version', versionId, 'remotelink', remoteLinkId], data, config);
    }

    deleteRemoteLink(versionId, remoteLinkId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['version', versionId, 'remotelink', remoteLinkId], params, config);
    }


};

