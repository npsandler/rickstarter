import { RECEIVE_ALL_PROJECTS, RECEIVE_SINGLE_PROJECT, DELETE_PROJECT, EDIT_PROJECT} from '../actions/project_actions';
import { merge } from 'lodash';
import { combineReducers } from "redux";

const projectReducer = ( state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      return merge({}, state, action.projects);
    case RECEIVE_SINGLE_PROJECT:
      return merge({}, state, action.project);
    case DELETE_PROJECT:
      const newState = merge({}, state);
      delete newState[action.project.id];
      return newState;
      case EDIT_PROJECT:
      return merge({}, state, action.project);
    default:
      return state;
  }
};




export default projectReducer;
