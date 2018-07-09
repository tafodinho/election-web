import axios from 'axios';

export const CREATE_VOTE = "CREATE_VOTE";
export const UPDATE_VOTE = "UPDATE_VOTE";
export const DELETE_VOTE = "DELETE_VOTE";
export const GET_VOTES = "GET_VOTES";
export const GET_VOTE = "GET_VOTE";
// export const LOGIN_FAILURE = "LOGIN_FAILURE"

const basePath = 'http://127.0.0.1:8000';

export function getVotes(payload) {
    return {
        type: GET_VOTES,
        payload
    }
}

export function getVote(payload) {
    return {
        type: GET_VOTE,
        payload
    }
}

export function createVote(payload) {
    return {
        type: CREATE_VOTE,
        payload
    }
}

export function updateVote(payload) {
    return {
        type: UPDATE_VOTE,
        payload
    }
}

export function deleteVote() {
    return {
        type: DELETE_VOTE,
    }
}

export function getVotesRequest() {
    return dispatch => {
        return axios.get(basePath + '/users/').then(
            (res) => {
                dispatch(getVotes(res.data))
                return res;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}

export function getVoteRequest(id) {
    return dispatch => {
        return axios.get(basePath + '/users/'+id).then(
            (res) => {
                dispatch(getVote(res.data))
                return res;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}

export function createVoteRequest(data) {
    return dispatch => {
        return axios.post(basePath + '/users/', data).then(
            (res) => {
                dispatch(createVote(res.data))
                return res;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}

export function updateVoteRequest(data, id) {
    return dispatch => {
        return axios.put(basePath + '/VOTEs/'+id, data).then(
            (res) => {
                dispatch(updateVote(res.data))
                return res;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}

export function deleteVoteRequest(id) {
    return dispatch => {
        return axios.delete(basePath + '/users/'+id+'/')
        .then((res) => {
                //console.log(res)
                dispatch(deleteVote(res.data))
                return res;
        })
        // .catch((error) => {
        //     console.log(error)
        // })
    }
}
