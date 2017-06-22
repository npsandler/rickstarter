
import { combineReducers } from "redux";
import session from './session_reducer';
import project from './project_reducer';
import incompleteForm from './incomplete_form_reducer';

const rootReducer = combineReducers({
  session,
  project,
  incompleteForm
});

export default rootReducer;
