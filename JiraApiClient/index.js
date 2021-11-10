const _ = require('lodash');
const ComponentApi = require("./component");
const CustomFieldApi = require("./customField");
const FieldApi = require("./field");
const IssueApi = require("./issue");
const IssueLinkApi = require("./issueLink");
const IssueLinkTypeApi = require("./issueLinkType");
const IssueTypeSchemeApi = require("./issueTypeScheme");
const ProjectApi = require("./project");
const VersionApi = require("./version");
const ProjectTypeApi = require("./projectType");
const RoleApi = require("./role");
const UserApi = require("./user");
const WorkflowApi = require("./workflow");
const IssueTypeApi = require("./issueType");
const ProjectCategoryApi = require("./projectCategory");
const {ApiClient} = require('api-client-base');

module.exports = class JiraApiClient extends ApiClient {
    constructor(params) {
        _.defaults(params, {basePath: '/rest/api/2/'});
        super(params);

        let apiClient = this;

        this.component = new ComponentApi(apiClient);
        this.customField = new CustomFieldApi(apiClient);
        this.field = new FieldApi(apiClient);
        this.issue = new IssueApi(apiClient);
        this.issueLink = new IssueLinkApi(apiClient);
        this.issueLinkType = new IssueLinkTypeApi(apiClient);
        this.issueType = new IssueTypeApi(apiClient);
        this.issueTypeScheme = new IssueTypeSchemeApi(apiClient);
        this.project = new ProjectApi(apiClient);
        this.projectCategory = new ProjectCategoryApi(apiClient);
        this.projectType = new ProjectTypeApi(apiClient);
        this.role = new RoleApi(apiClient);
        this.user = new UserApi(apiClient);
        this.version = new VersionApi(apiClient);
        this.workflow = new WorkflowApi(apiClient);
    }
}
