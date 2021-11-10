const _ = require('lodash');
module.exports = class IssueTypeSchemeApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    create(data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['issuetypescheme'], data, config);
    }

    list(params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issuetypescheme'], params, config);
    }


    read(issueTypeSchemeId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issuetypescheme', issueTypeSchemeId], params, config);
    }


    update(issueTypeSchemeId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['issuetypescheme', issueTypeSchemeId], data, config);
    }

    delete(issueTypeSchemeId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['issuetypescheme', issueTypeSchemeId], params, config);
    }


    addProjectAssociations(issueTypeSchemeId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['issuetypescheme', issueTypeSchemeId, 'associations'], data, config);
    }

    listProjectAssociations(issueTypeSchemeId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issuetypescheme', issueTypeSchemeId, 'associations'], params, config);
    }


    updateProjectAssociations(issueTypeSchemeId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['issuetypescheme', issueTypeSchemeId, 'associations'], data, config);
    }


    deleteProjectAssociations(issueTypeSchemeId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['issuetypescheme', issueTypeSchemeId, 'associations'], params, config);
    }

    deleteProjectAssociation(issueTypeSchemeId, projectIdOrKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['issuetypescheme', issueTypeSchemeId, 'associations', projectIdOrKey], params, config);
    }


};

