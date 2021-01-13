import { combineReducers } from "redux";
import { reducer as signinReducer } from "./loginSlicer";
import { reducer as testListSlicer } from "./testListSlicer";
import {reducer as quesSlicer} from './quesSlicer'

const reducer = combineReducers({
  signinReducer: signinReducer,
  testListSlicer: testListSlicer,
  quesSlicer : quesSlicer
});

export default reducer