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
  return $.ajax({
    method: 'POST',
    url: 'api/projects/',
    data: { project }
  });
};

export const editProject= (project) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/projects/${project.projectId}`,
    data: { project }
  });
};
export const removeProject= (projectId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/projects/${projectId}`,
  });
};
