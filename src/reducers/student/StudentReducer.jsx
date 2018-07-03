import isEmpty from 'lodash/isEmpty';

import {
    CREATE_STUDENT,
    UPDATE_STUDENT,
    DELETE_STUDENT,
    GET_STUDENTS
} from './StudentAction';

let initialData = {
    createSuccess: false,
    deleteSuccess: false,
    updateSuccess: false,
    getStudentsSuccess: false,
    students: []
}
function StudentReducer (data = initialData, action) {

    switch (action.type) {
        case GET_STUDENTS:
            return {
                getStudentsSuccess: true,
                students: action.payload
            }
        case CREATE_STUDENT:
            return {
                createSuccess: true,
                students: action.payload
            }
        case UPDATE_STUDENT:
            return {
                updateSuccess: true,
                students: action.payload,
            }
        case DELETE_STUDENT:
            return {
                deleteSuccess: true
            }
        default:
            return data

    }
}

export default StudentReducer;
