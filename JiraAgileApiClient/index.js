const _ = require('lodash');
const SprintApi = require("./sprint");
const BoardApi = require("./board");
const IssueApi = require("./issue");
const {ApiClient} = require('api-client-base');

module.exports = class JiraAgileApiClient extends ApiClient {
    constructor(params) {
        _.defaults(params, {basePath: '/rest/agile/1.0/'});
        super(params);

        let apiClient = this;
        this.sprint = new SprintApi(apiClient);
        this.board = new BoardApi(apiClient);
        this.issue = new IssueApi(apiClient);
    }
}
