const _ = require('lodash');
module.exports = class UserApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    read( params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['user'], params, config);
    }


    create(data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['user'], data, config);
    }

    update(data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['user'], data, config);
    }


    delete(params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['user'], params, config);
    }


    listAssignableUsers(params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['user', 'assignable', 'search'], params, config);
    }


    bulkListAssignableUsers(params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['user', 'assignable', 'multiProjectSearch'], params, config);
    }

    list(params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['user', 'search'], params, config);
    }

    listUsersWithAllPermissions(params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['user', 'permission', 'search'], params, config);
    }

    listUsersWithBrowsePermission(params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['user', 'viewissue', 'search'], params, config);
    }


    storeTemporaryAvatar( data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        if (_.isNil(config)) {
            config = {};
        }
        _.set(config, ['headers', 'content-type'], 'multipart/form-data');
        return apiClient._post(['user', 'avatar', 'temporary'], data, config);
    }

    listAvatars(params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['user',  'avatars'], params, config);
    }

    createAvatar( data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['user',  'avatar'], data, config);
    }

    updateAvatar( data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['user',  'avatar'], data, config);
    }

    deleteAvatar( avatarId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['user',  'avatar'], params, config);
    }


};

