const _ = require('lodash');
const BoardPropertiesCrudApi = require("./boardProperties");

module.exports = class BoardApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
        this.properties = new BoardPropertiesCrudApi(apiClient);
    }


    list(params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['board'], params, config);
    }


    create(data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['board'], data, config);
    }


    read(boardId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['board', boardId], params, config);
    }

    delete(boardId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['board', boardId], params, config);
    }


    listBacklogIssues(boardId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['board', boardId, 'backlog'], params, config);
    }

    getConfiguration(boardId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['board', boardId, 'configuration'], params, config);
    }

    listIssues(boardId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['board', boardId, 'issue'], params, config);
    }

    listEpics(boardId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['board', boardId, 'epic'], params, config);
    }

    listEpicIssues(boardId, epicId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        if (_.isNil(epicId)) {
            epicId = 'none';
        }
        return apiClient._get(['board', boardId, 'epic', epicId], params, config);
    }

    listProjects(boardId, params,config){
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['board', boardId, 'project'], params, config);      
    }

    listSprints(boardId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['board', boardId, 'sprint'], params, config);
    }

    listSprintIssues(boardId, sprintId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['board', boardId, 'sprint', sprintId], params, config);
    }

    listVersions(boardId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['board', boardId, 'version'], params, config);
    }

};