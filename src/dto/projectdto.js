module.exports = class ProjectDto{

    constructor(projectName, projectId,userId,screnarios) {
        this.projectName = projectName;
        this.projectId = projectId;
        this.userId = userId;
        this.screnarios = screnarios;
      }
};