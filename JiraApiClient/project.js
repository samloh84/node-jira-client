const _ = require('lodash');
module.exports = class ProjectApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['project'], params, config);
    }

    create(data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['project'], data, config);
    }

    read(projectIdOrKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['project', projectIdOrKey], params, config);
    }


    delete(projectIdOrKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['project', projectIdOrKey], params, config);
    }

    update(projectIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['project', projectIdOrKey], data, config);
    }


    archive(projectIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['project', projectIdOrKey, 'archive'], data, config);
    }


    storeTemporaryAvatar(projectIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        if (_.isNil(config)) {
            config = {};
        }
        _.set(config, ['headers', 'content-type'], 'multipart/form-data');
        return apiClient._post(['project', projectIdOrKey, 'avatar', 'temporary'], data, config);
    }

    listAvatars(projectIdOrKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['project', projectIdOrKey, 'avatars'], params, config);
    }

    createAvatar(projectIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['project', projectIdOrKey, 'avatar'], data, config);
    }

    updateAvatar(projectIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['project', projectIdOrKey, 'avatar'], data, config);
    }

    deleteAvatar(projectIdOrKey, avatarId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['project', projectIdOrKey, 'avatar'], params, config);
    }


    restore(projectIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['project', projectIdOrKey, 'restore'], data, config);
    }

    listStatuses(projectIdOrKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['project', projectIdOrKey, 'statuses'], params, config);
    }


    updateProjectType(projectIdOrKey, newProjectTypeKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['project', projectIdOrKey, 'type', newProjectTypeKey], data, config);
    }

    listVersions(boardId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['board', boardId, 'version'], params, config);
    }

};

