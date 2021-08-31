const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');
const {deepResolve, serializeAsFormData} = require('./util')


class JiraIssueAttachmentsApi {
    constructor(api) {
        this._api = api;
    }


    create(issue_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }


        let url_slug = `issue/${issue_id}/attachments`;

        return deepResolve(params)
            .then(function (params) {
                return serializeAsFormData(params)
            })
            .then(function (form_data) {
                return api._post(url_slug, form_data, {headers: form_data.getHeaders()});
            });
    }


    read(issue_id, attachment_id) {
        let api = this._api;

        let url_slug = `issue/${issue_id}/attachments/${attachment_id}`;

        return api._get(url_slug);
    }


    update(issue_id, attachment_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `issue/${issue_id}/attachments/${attachment_id}`;

        return api._put(url_slug, params);
    }


    delete(issue_id, attachment_id) {
        let api = this._api;

        let url_slug = `issue/${issue_id}/attachments/${attachment_id}`;

        return api._delete(url_slug);
    }


}

module.exports = JiraIssueAttachmentsApi;