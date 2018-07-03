import { combineReducers } from 'redux';
import LoginReducer from './login/reducers';
import   StudentReducer  from './student/StudentReducer';
import DepartmentReducer from './department/DepartmentReducer';

const Reducer = combineReducers({
    LoginReducer,
    StudentReducer,
    DepartmentReducer
})

export default Reducer;
