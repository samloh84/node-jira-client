const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');


class JiraProjectsApi {
    constructor(api) {
        this._api = api;
    }


    list() {
        let api = this._api;

        let url_slug = "project";
        return api._get(url_slug);
    }

    create(params) {
        let api = this._api;


        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = "project";
        return api._post(url_slug, params);
    }

    delete(project_id) {
        let api = this._api;

        let url_slug = `project/${project_id}`;
        return api._delete(url_slug);
    }


    read(project_id) {
        let api = this._api;

        let url_slug = `project/${project_id}`;
        return api._get(url_slug);
    }

    update(project_id, params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }


        let url_slug = `project/${project_id}`;
        return api._put(url_slug, params);
    }


    archive(project_id) {
        let api = this._api;


        let url_slug = `project/${project_id}/archive`;
        return api._put(url_slug);
    }

    restore(project_id) {
        let api = this._api;


        let url_slug = `project/${project_id}/restore`;
        return api._put(url_slug);
    }

    update_project_type(project_id, project_type) {
        let api = this._api;


        let url_slug = `project/${project_id}/type/${project_type}`;
        return api._put(url_slug);
    }

    list_components(project_id) {
        let api = this._api;

        let url_slug = `project/${project_id}/components`;
        return api._get(url_slug);
    }

    list_statuses(project_id) {
        let api = this._api;

        let url_slug = `project/${project_id}/statuses`;
        return api._get(url_slug);
    }

    list_versions(project_id, params) {
        let api = this._api;


        if (_.isEmpty(params)) {
            params = {};
        }

        let config = {params: params};

        let url_slug = `project/${project_id}/version`;
        return api._get(url_slug, config);
    }

}

module.exports = JiraProjectsApi;