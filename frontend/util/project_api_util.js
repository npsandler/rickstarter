export const fetchAllProjects = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/projects'
  });
};

export const fetchSingleProject = (projectId) => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/${projectId}`
  });
};

export const createProject= (project) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: 'api/projects/',
    project: { project }
  });
};

export const editProject= (project) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/projects/${project.projectId}`,
    data: { project }
  });
};
