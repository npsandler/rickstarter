
import { combineReducers } from "redux";
import session from './session_reducer';
import projects from './project_reducer';
import incompleteForm from './incomplete_form_reducer';
import rewards from './reward_reducer';

const rootReducer = combineReducers({
  session,
  projects,
  incompleteForm,
  rewards
});

export default rootReducer;
