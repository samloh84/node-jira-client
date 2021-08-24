const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');


class CloudflareIssueRemotelinksApi {
    constructor(api) {
        this._api = api;
    }



    list(issue_id) {
        let api = this._api;


        let url_slug = `issue/${issue_id}/remotelink`;
        return api._get(url_slug);
    }


    create(issue_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }


        let url_slug = `issue/${issue_id}/remotelink`;
        return api._post(url_slug, params);
    }


    read(issue_id, remotelink_id) {
        let api = this._api;

        let url_slug = `issue/${issue_id}/remotelink/${remotelink_id}`;

        return api._get(url_slug);
    }


    update(issue_id, remotelink_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `issue/${issue_id}/remotelink/${remotelink_id}`;

        return api._put(url_slug, params);
    }


    delete(issue_id, remotelink_id) {
        let api = this._api;


        let url_slug = `issue/${issue_id}/remotelink/${remotelink_id}`;

        return api._delete(url_slug);
    }




}

module.exports = CloudflareIssueRemotelinksApi;