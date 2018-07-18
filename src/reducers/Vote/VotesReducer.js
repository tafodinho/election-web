import isEmpty from 'lodash/isEmpty';

import {
    CREATE_VOTE,
    UPDATE_VOTE,
    DELETE_VOTE,
    GET_VOTES,
    GET_VOTE,
    GET_VOTE_RESULT,
    GET_VOTE_CANDIDATES
} from './VoteAction';

let initialData = {
    createSuccess: false,
    deleteSuccess: false,
    updateSuccess: false,
    getVotesSuccess: false,
    getVoteSuccess: false,
    candidates: [],
    votes: [],
    vote: [],


}
function VoteReducer (state = initialData, action) {

    switch (action.type) {
        case GET_VOTES:
            return {
                ...state,
                getVotesSuccess: true,
                votes: action.payload
            }
        case CREATE_VOTE:
            return {
                ...state,
                createSuccess: true,
                votes: action.payload
            }
        case UPDATE_VOTE:
            return {
                ...state,
                updateSuccess: true,
                votes: action.payload,
            }
        case DELETE_VOTE:
            return {
                ...state,
                deleteSuccess: true
            }
        case GET_VOTE_RESULT:
            return {
                ...state,
                vote: action.payload
            }
        case GET_VOTE_CANDIDATES:
            return {
                ...state,
                candidates: action.payload
            }
        default:
            return state

    }
}

export default VoteReducer;
