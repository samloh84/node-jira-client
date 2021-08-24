const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const axios = require('axios');
const _ = require('lodash');
const {deepResolve} = require('./util');


class JiraApi {
    constructor(params) {
        this._token = _.get(params, 'token');
        this._api_base = _.get(params, 'api_base', 'jira.atlassian.com/rest/api');
    }

    get api_base() {
        return this._api_base;
    }

    set api_base(api_base) {
        this._api_base = api_base;
    }

    set token(token) {
        this._token = token;
    }


    _get(url_slug, config) {
        let token = this._token;
        let api_base = this._api_base;

        if (_.isEmpty(config)) {
            config = {};
        }

        _.set(config, ['headers', 'Authorization'], `Bearer ${token}`);

        let url = `${api_base}/${url_slug}`;

        return Promise.resolve(axios.get(url, config))
            .then(function (response) {
                return response.data;
            });
    }


    _delete(url_slug, config) {
        let token = this._token;
        let api_base = this._api_base;

        if (_.isEmpty(config)) {
            config = {};
        }

        _.set(config, ['headers', 'Authorization'], `Bearer ${token}`);

        let url = `${api_base}/${url_slug}`;

        return Promise.resolve(axios.delete(url, config))
            .then(function (response) {
                return response.data;
            });
    }


    _post(url_slug, data, config) {
        let token = this._token;
        let api_base = this._api_base;

        if (_.isEmpty(config)) {
            config = {};
        }

        _.set(config, ['headers', 'Authorization'], `Bearer ${token}`);

        let url = `${api_base}/${url_slug}`;

        return deepResolve(data)
            .then(function (resolvedData) {
                return Promise.resolve(axios.post(url, resolvedData, config));
            })
            .then(function (response) {
                return response.data;
            });
    }

    _put(url_slug, data, config) {
        let token = this._token;
        let api_base = this._api_base;

        if (_.isEmpty(config)) {
            config = {};
        }

        _.set(config, ['headers', 'Authorization'], `Bearer ${token}`);

        let url = `${api_base}/${url_slug}`;

        return deepResolve(data)
            .then(function (resolvedData) {
                return Promise.resolve(axios.put(url, resolvedData, config));
            })
            .then(function (response) {
                return response.data;
            });
    }

    _patch(url_slug, data, config) {
        let token = this._token;
        let api_base = this._api_base;

        if (_.isEmpty(config)) {
            config = {};
        }

        _.set(config, ['headers', 'Authorization'], `Bearer ${token}`);

        let url = `${api_base}/${url_slug}`;

        return deepResolve(data)
            .then(function (resolvedData) {
                return Promise.resolve(axios.patch(url, resolvedData, config));
            })
            .then(function (response) {
                return response.data;
            });
    }







}


module.exports = JiraApi;