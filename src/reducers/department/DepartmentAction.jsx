import axios from 'axios';

export const GET_DEPARTMENT = "GET_DEPARTMENT";
// export const UPDATE_STUDENT = "UPDATE_STUDENT";
// export const DELETE_STUDENT = "DELETE_STUDENT";
// export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
// export const LOGIN_FAILURE = "LOGIN_FAILURE"

const basePath = 'http://127.0.0.1:8000';
export function getDepartments(payload) {
    return {
        type: GET_DEPARTMENT,
        payload
    }
}


export function getDepartmentsRequest() {
    return dispatch => {
        return axios.post(basePath + '/departments').then(
            (res) => {
                dispatch(getDepartments(res.data))
                return res;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}
