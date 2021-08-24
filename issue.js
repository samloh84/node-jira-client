const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');

class JiraIssuesApi {
    constructor(api) {
        this._api = api;
    }


    list() {
        let api = this._api;

        let url_slug = "issue";
        return api._get(url_slug);
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