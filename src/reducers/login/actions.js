import axios from 'axios';

export const SET_CURRENT_USER = "SET_CURRENT_USER"
export const LOGOUT_USER = "LOGOUT_USER"
// export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
// export const LOGIN_FAILURE = "LOGIN_FAILURE"

const basePath = 'http://127.0.0.1:8000';
export function loginUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
    }
}

export function loginRequest(data) {
    return dispatch => {
        return axios.post(basePath + '/users/login/', data).then(
            (res) => {
                dispatch(loginUser(res.data))
                return res;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}

export function logoutRequest() {
    return dispatch => {
        localStorage.removeItem('state');
        return axios.post(basePath + '/users/logout/').then(
            (res) => {
                dispatch(logoutUser(res.data))
                return res;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}
