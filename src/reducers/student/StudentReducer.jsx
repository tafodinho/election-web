import isEmpty from 'lodash/isEmpty';

import {
    CREATE_STUDENT,
    UPDATE_STUDENT,
    DELETE_STUDENT,
    GET_STUDENTS,
    GET_STUDENT
} from './StudentAction';

let initialData = {
    createSuccess: false,
    deleteSuccess: false,
    updateSuccess: false,
    getStudentsSuccess: false,
    getStudentSuccess: false,
    students: [],
    student: {}
}
function StudentReducer (state = initialData, action) {

    switch (action.type) {
        case GET_STUDENT:
            return {
                ...state,
                getStudentSuccess: true,
                student: action.payload
            }
        case GET_STUDENTS:
            return {
                ...state,
                getStudentsSuccess: true,
                students: action.payload
            }
        case CREATE_STUDENT:
            return {
                ...state,
                createSuccess: true,
                students: action.payload
            }
        case UPDATE_STUDENT:
            return {
                ...state,
                updateSuccess: true,
                students: action.payload,
            }
        case DELETE_STUDENT:
            return {
                ...state,
                deleteSuccess: true
            }
        default:
            return state

    }
}

export default StudentReducer;
