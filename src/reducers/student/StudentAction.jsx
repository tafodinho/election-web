import axios from 'axios';

export const CREATE_STUDENT = "CREATE_STUDENT";
export const UPDATE_STUDENT = "UPDATE_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const GET_STUDENTS = "GET_STUDENTS";
export const GET_STUDENT = "GET_STUDENT";
// export const LOGIN_FAILURE = "LOGIN_FAILURE"

const basePath = 'http://127.0.0.1:8000';

export function getStudents(payload) {
    return {
        type: GET_STUDENTS,
        payload
    }
}

export function getStudent(payload) {
    return {
        type: GET_STUDENT,
        payload
    }
}

export function createStudent(payload) {
    return {
        type: CREATE_STUDENT,
        payload
    }
}

export function updateStudent(payload) {
    return {
        type: UPDATE_STUDENT,
        payload
    }
}

export function deleteStudent() {
    return {
        type: DELETE_STUDENT,
    }
}

export function getStudentsRequest() {
    return dispatch => {
        return axios.get(basePath + '/users/').then(
            (res) => {
                dispatch(getStudents(res.data))
                return res;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}

export function getStudentRequest(id) {
    return dispatch => {
        return axios.get(basePath + '/users/'+id).then(
            (res) => {
                dispatch(getStudent(res.data))
                return res;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}

export function createStudentRequest(data) {
    return dispatch => {
        return axios.post(basePath + '/users/', data).then(
            (res) => {
                dispatch(createStudent(res.data))
                return res;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}

export function updateStudentRequest(data, id) {
    return dispatch => {
        return axios.put(basePath + '/students/'+id, data).then(
            (res) => {
                dispatch(updateStudent(res.data))
                return res;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}

export function deleteStudentRequest(id) {
    return dispatch => {
        return axios.delte(basePath + '/students/'+id).then(
            (res) => {
                dispatch(deleteStudent(res.data))
                return res;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}
