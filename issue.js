const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');
const JiraIssueAttachmentsApi = require("./issue_attachments");
const JiraIssueCommentsApi = require("./issue_comments");
const JiraIssueRemoteLinksApi = require("./issue_remote_links");

class JiraIssuesApi {
    constructor(api) {
        this._api = api;

        this.attachments = new JiraIssueAttachmentsApi(api);
        this.comments = new JiraIssueCommentsApi(api);
        this.remote_links = new JiraIssueRemoteLinksApi(api);

    }

    list(params) {
        let api = this._api;


        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = "search";

        let config = {params: params};

        return api._get(url_slug, config);
    }


    create(params) {
        let api = this._api;


        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = "issue";
        return api._post(url_slug, params);
    }

    delete(issue_id) {
        let api = this._api;

        let url_slug = `issue/${issue_id}`;
        return api._delete(url_slug);
    }


    read(issue_id) {
        let api = this._api;

        let url_slug = `issues/${issue_id}`;
        return api._get(url_slug);
    }

    update(issue_id, params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }


        let url_slug = `issues/${issue_id}`;
        return api._put(url_slug, params);
    }


    archive(issue_id, params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }


        let url_slug = `issues/${issue_id}/archive`;
        return api._put(url_slug, params);
    }


    assign(issue_id, params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }


        let url_slug = `issues/${issue_id}/assign`;
        return api._put(url_slug, params);
    }

    read_meta(issue_id) {
        let api = this._api;


        let url_slug = `issue/${issue_id}/editmeta`;

        return api._get(url_slug);
    }


    get_issue_meta(project_id) {
        let api = this._api;


        let url_slug = `issue/createmeta/${project_id}/issuetypes`;

        return api._get(url_slug);
    }

    get_issue_meta_fields(project_id, issue_type_id) {
        let api = this._api;


        let url_slug = `issue/createmeta/${project_id}/issuetypes/${issue_type_id}`;

        return api._get(url_slug);
    }


    notify(issue_id, params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }


        let url_slug = `issue/${issue_id}/notify`;
        return api._post(url_slug, params);
    }


    restore(project_id) {
        let api = this._api;


        let url_slug = `issue/${project_id}/restore`;
        return api._put(url_slug);
    }


}

module.exports = JiraIssuesApi;