import axios from 'axios';

export const CREATE_CANDIDATE = "CREATE_CANDIDATE";
export const UPDATE_CANDIDATE = "UPDATE_CANDIDATE";
export const DELETE_CANDIDATE = "DELETE_CANDIDATE";
export const GET_CANDIDATES = "GET_CANDIDATES";
export const GET_CANDIDATE = "GET_CANDIDATE";
// export const LOGIN_FAILURE = "LOGIN_FAILURE"

const basePath = 'http://127.0.0.1:8000';

export function getCandidates(payload) {
    return {
        type: GET_CANDIDATES,
        payload
    }
}

export function getCandidate(payload) {
    return {
        type: GET_CANDIDATE,
        payload
    }
}

export function createCandidate(payload) {
    return {
        type: CREATE_CANDIDATE,
        payload
    }
}

export function updateCandidate(payload) {
    return {
        type: UPDATE_CANDIDATE,
        payload
    }
}

export function deleteCandidate() {
    return {
        type: DELETE_CANDIDATE,
    }
}

export function getCandidatesRequest() {
    return dispatch => {
        return axios.get(basePath + '/candidates/').then(
            (res) => {
                dispatch(getCandidates(res.data))
                return res;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}

export function getCandidateRequest(id) {
    return dispatch => {
        return axios.get(basePath + '/candidates/'+id).then(
            (res) => {
                dispatch(getCandidate(res.data))
                return res;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}

export function createCandidateRequest(data) {
    return dispatch => {
        return axios.post(basePath + '/candidates/', data).then(
            (res) => {
                dispatch(createCandidate(res.data))
                return res;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}

export function updateCandidateRequest(data, id) {
    return dispatch => {
        return axios.put(basePath + '/CANDIDATEs/'+id, data).then(
            (res) => {
                dispatch(updateCandidate(res.data))
                return res;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}

export function deleteCandidateRequest(id) {
    return dispatch => {
        return axios.delete(basePath + '/users/'+id+'/')
        .then((res) => {
                //console.log(res)
                dispatch(deleteCandidate(res.data))
                return res;
        })
        // .catch((error) => {
        //     console.log(error)
        // })
    }
}
