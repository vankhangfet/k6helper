
const ProjectDto = require('../dto/projectdto')

module.exports = class ProjectService{

    constructor() {
    
      }
    
      getProjectById(projectId)
      {
        let project = new ProjectDto("pr1","123","111",[]);
        return project;
      }

      creatProject(project)
      {

      }
};