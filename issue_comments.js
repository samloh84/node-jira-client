const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');


class JiraIssueCommentsApi {
    constructor(api) {
        this._api = api;
    }


    list(issue_id) {
        let api = this._api;


        let url_slug = `issue/${issue_id}/comment`;
        return api._get(url_slug);
    }


    create(issue_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }


        let url_slug = `issue/${issue_id}/comment`;
        return api._post(url_slug, params);
    }


    read(issue_id, comment_id) {
        let api = this._api;

        let url_slug = `issue/${issue_id}/comment/${comment_id}`;

        return api._get(url_slug);
    }


    update(issue_id, comment_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `issue/${issue_id}/comment/${comment_id}`;

        return api._put(url_slug, params);
    }


    delete(issue_id, comment_id) {
        let api = this._api;

        let url_slug = `issue/${issue_id}/comment/${comment_id}`;

        return api._delete(url_slug);
    }


    add_attachment(issue_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `issue/${issue_id}/comment/${comment_id}/attachments`;

        return api._post(url_slug, params);

    }
}

module.exports = JiraIssueCommentsApi;