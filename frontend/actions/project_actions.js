import * as APIUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_SINGLE_PROJECT = 'RECEIVE_SINGLE_PROJECT';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const EDIT_PROJECT = 'EDIT_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';

export const requestAllProjects = () => (dispatch) => {
  return APIUtil.fetchAllProjects()
    .then(projects => dispatch(receiveAllProjects(projects)));
};

export const requestSingleProject = (projectId) => (dispatch) => {
  return APIUtil.fetchSingleProject(projectId)
    .then(project => dispatch(receiveSingleProject(project)));
};

export const createProject = (project) => (dispatch) => {
    return (
      APIUtil.createProject(project)
    .then( (project) => {
      dispatch(receiveSingleProject(project));
      return project;
    },
     err => dispatch(receiveProjectErrors(err.responseJSON))));
};

export const updateProject = project => dispatch => {
    return (
    APIUtil.editProject(project).then(project => {
      dispatch(requestAllProjects());
    }));
  };

  export const requestCategory = category => dispatch => {
    return (
      APIUtil.fetchCategory(category).then(projects => {
        dispatch(receiveCategory(projects));
      }));
  };

  export const requestSearch = query => dispatch => {
    return (
      APIUtil.fetchSearch(query).then(projects => {
        dispatch(receiveSearch(projects));
      }));
  };

export const receiveCategory = projects => {
  return {
    type: RECEIVE_CATEGORY,
    projects
  };
};

export const receiveSearch = projects => {
  return {
    type: RECEIVE_CATEGORY,
    projects
  };
};

export const editProject = project => {
  return {
    type: EDIT_PROJECT,
    project
  };
};

export const receiveAllProjects = projects => {
  return {
    type: RECEIVE_ALL_PROJECTS,
    projects
  };
};

export const receiveSingleProject = project => {
  return {
    type: RECEIVE_SINGLE_PROJECT,
    project
  };
};

export const receiveProjectErrors = errors => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});
