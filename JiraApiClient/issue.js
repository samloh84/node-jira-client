const _ = require('lodash');
module.exports = class IssueApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(params,config){
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['search'], params, config);
    }

    create(data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['issue'], data, config);
    }

    createBulk(data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['issue', 'bulk'], data, config);
    }


    read(issueIdOrKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issue', issueIdOrKey], params, config);
    }


    delete(issueIdOrKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['issue', issueIdOrKey], params, config);
    }

    update(issueIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['issue', issueIdOrKey], data, config);
    }


    archive(issueIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['issue', issueIdOrKey, 'archive'], data, config);
    }


    assign(issueIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['issue', issueIdOrKey, 'assignee'], data, config);
    }


    listComments(issueIdOrKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issue', issueIdOrKey, 'comment'], params, config);
    }

    createComment(issueIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['issue', issueIdOrKey, 'comment'], data, config);
    }

    readComment(issueIdOrKey, commentId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issue', issueIdOrKey, 'comment', commentId], params, config);
    }

    updateComment(issueIdOrKey, commentId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['issue', issueIdOrKey, 'comment', commentId], data, config);
    }


    deleteComment(issueIdOrKey, commentId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['issue', issueIdOrKey, 'comment', commentId], params, config);
    }


    getEditMeta(issueIdOrKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issue', issueIdOrKey, 'editmeta'], params, config);
    }


    notify(issueIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['issue', issueIdOrKey, 'notify'], data, config);
    }


    listRemoteLinks(issueIdOrKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issue', issueIdOrKey, 'remotelink'], params, config);
    }

    createRemoteLink(issueIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['issue', issueIdOrKey, 'remotelink'], data, config);
    }

    readRemoteLink(issueIdOrKey, remoteLinkId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issue', issueIdOrKey, 'remotelink', remoteLinkId], params, config);
    }

    updateRemoteLink(issueIdOrKey, remoteLinkId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['issue', issueIdOrKey, 'remotelink', remoteLinkId], data, config);
    }

    deleteRemoteLink(issueIdOrKey, remoteLinkId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['issue', issueIdOrKey, 'remotelink', remoteLinkId], params, config);
    }


    restore(issueIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['issue', issueIdOrKey, 'restore'], data, config);
    }


    listTransitions(issueIdOrKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issue', issueIdOrKey, 'transition'], params, config);
    }

    doTransition(issueIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['issue', issueIdOrKey, 'transition'], data, config);
    }

    listVotes(issueIdOrKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issue', issueIdOrKey, 'vote'], params, config);
    }

    addVote(issueIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['issue', issueIdOrKey, 'vote'], data, config);
    }


    listWatchers(issueIdOrKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issue', issueIdOrKey, 'watchers'], params, config);
    }

    addWatcher(issueIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['issue', issueIdOrKey, 'watchers'], data, config);
    }

    deleteWatcher(issueIdOrKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['issue', issueIdOrKey, 'watchers'], params, config);
    }


    getWorklog(issueIdOrKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issue', issueIdOrKey, 'worklog'], params, config);
    }

    createWorklog(issueIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['issue', issueIdOrKey, 'worklog'], data, config);
    }

    readWorklog(issueIdOrKey, worklogId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issue', issueIdOrKey, 'worklog', worklogId], params, config);
    }

    updateWorklog(issueIdOrKey, worklogId, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._put(['issue', issueIdOrKey, 'worklog', worklogId], data, config);
    }


    deleteWorklog(issueIdOrKey, worklogId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._delete(['issue', issueIdOrKey, 'worklog', worklogId], params, config);
    }


    listProjectIssueTypesCreateMeta(projectIdOrKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issue', 'createmeta', projectIdOrKey, 'issuetypes'], params, config);
    }

    listProjectIssueTypesCreateMetaFields(projectIdOrKey, issueTypeId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issue', 'createmeta', projectIdOrKey, 'issuetypes', issueTypeId], params, config);
    }


    addAttachment(issueIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        if (_.isNil(config)) {
            config = {};
        }
        _.set(config, ['headers', 'content-type'], 'multipart/form-data');
        return apiClient._put(['issue', issueIdOrKey, 'attachments'], data, config);
    }


    listSubTasks(issueIdOrKey, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issue', issueIdOrKey, 'subtask'], params, config);
    }

    moveAsSubTask(issueIdOrKey, data, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._post(['issue', issueIdOrKey, 'subtask', 'move'], data, config);
    }

    canMoveAsSubTask(issueIdOrKey, subTaskId, params, config) {
        let entityCrudApi = this;
        let apiClient = entityCrudApi._apiClient;
        return apiClient._get(['issue', issueIdOrKey, 'subtask', 'move'], params, config);
    }

};

