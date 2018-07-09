import axios from 'axios';

export const CREATE_ELECTION_SESSION = "CREATE_ELECTION_SESSION";
export const UPDATE_ELECTION_SESSION = "UPDATE_ELECTION_SESSION";
export const DELETE_ELECTION_SESSION = "DELETE_ELECTION_SESSION";
export const GET_ELECTION_SESSION = "GET_ELECTION_SESSION";
export const GET_ELECTION_SESSIONS = "GET_ELECTION_SESSIONS";
// export const LOGIN_FAILURE = "LOGIN_FAILURE"

const basePath = 'http://127.0.0.1:8000';

export function getElectionSessions(payload) {
    return {
        type: GET_ELECTION_SESSIONS,
        payload
    }
}

export function getElectionSession(payload) {
    return {
        type: GET_ELECTION_SESSION,
        payload
    }
}

export function createElectionSession(payload) {
    return {
        type: CREATE_ELECTION_SESSION,
        payload
    }
}

export function updateElectionSession(payload) {
    return {
        type: UPDATE_ELECTION_SESSION,
        payload
    }
}

export function deleteElectionSession() {
    return {
        type: DELETE_ELECTION_SESSION,
    }
}

export function getElectionSessionsRequest() {
    return dispatch => {
        return axios.get(basePath + '/election_session/').then(
            (res) => {
                dispatch(getElectionSessions(res.data))
                return res;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}

export function getElectionSessionRequest(id) {
    return dispatch => {
        return axios.get(basePath + '/election_session/'+id).then(
            (res) => {
                dispatch(getElectionSession(res.data))
                return res;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}

export function createElectionSessionRequest(data) {
    return dispatch => {
        return axios.post(basePath + '/election_session/', data).then(
            (res) => {
                dispatch(createElectionSession(res.data))
                return res;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}

export function updateElectionSessionRequest(data, id) {
    return dispatch => {
        return axios.put(basePath + '/election_session/'+id, data).then(
            (res) => {
                dispatch(updateElectionSession(res.data))
                return res;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}

export function deleteElectionSessionRequest(id) {
    return dispatch => {
        return axios.delete(basePath + '/election_session/'+id+'/')
        .then((res) => {
                //console.log(res)
                dispatch(deleteElectionSession(res.data))
                return res;
        })
        // .catch((error) => {
        //     console.log(error)
        // })
    }
}
