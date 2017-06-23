
import { combineReducers } from "redux";
import session from './session_reducer';
import projects from './project_reducer';
import incompleteForm from './incomplete_form_reducer';

const rootReducer = combineReducers({
  session,
  projects,
  incompleteForm
});

export default rootReducer;
