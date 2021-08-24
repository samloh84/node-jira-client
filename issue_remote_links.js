const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');


class JiraIssueRemoteLinksApi {
    constructor(api) {
        this._api = api;
    }



    list(issue_id) {
        let api = this._api;


        let url_slug = `issue/${issue_id}/remote_link`;
        return api._get(url_slug);
    }


    create(issue_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }


        let url_slug = `issue/${issue_id}/remote_link`;
        return api._post(url_slug, params);
    }


    read(issue_id, remote_link_id) {
        let api = this._api;

        let url_slug = `issue/${issue_id}/remote_link/${remote_link_id}`;

        return api._get(url_slug);
    }


    update(issue_id, remote_link_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `issue/${issue_id}/remote_link/${remote_link_id}`;

        return api._put(url_slug, params);
    }


    delete(issue_id, remote_link_id) {
        let api = this._api;


        let url_slug = `issue/${issue_id}/remote_link/${remote_link_id}`;

        return api._delete(url_slug);
    }




}

module.exports = JiraIssueRemoteLinksApi;