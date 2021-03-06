import { combineReducers } from 'redux';
import LoginReducer from './login/reducers';
import StudentReducer  from './student/StudentReducer';
import DepartmentReducer from './department/DepartmentReducer';
import ElectionSessionReducer from './ElectionSession/ElectionSessionReducer';
import CandidateReducer from './Candidates/CandidateReducer';
import VoteReducer from './Vote/VotesReducer';

const Reducer = combineReducers({
    LoginReducer,
    StudentReducer,
    DepartmentReducer,
    ElectionSessionReducer,
    CandidateReducer,
    VoteReducer
})

export default Reducer;
