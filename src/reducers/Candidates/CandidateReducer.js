import isEmpty from 'lodash/isEmpty';

import {
    CREATE_CANDIDATE,
    UPDATE_CANDIDATE,
    DELETE_CANDIDATE,
    GET_CANDIDATES,
    GET_CANDIDATE
} from './CandidateAction';

let initialData = {
    createSuccess: false,
    deleteSuccess: false,
    updateSuccess: false,
    getCandidatesSuccess: false,
    getCandidateSuccess: false,
    candidates: [],
    candidate: {}
}
function CandidateReducer (state = initialData, action) {

    switch (action.type) {
        case GET_CANDIDATE:
            return {
                ...state,
                getCandidateSuccess: true,
                candidate: action.payload
            }
        case GET_CANDIDATES:
            return {
                ...state,
                getCandidatesSuccess: true,
                candidates: action.payload
            }
        case CREATE_CANDIDATE:
            return {
                ...state,
                createSuccess: true,
                candidates: action.payload
            }
        case UPDATE_CANDIDATE:
            return {
                ...state,
                updateSuccess: true,
                candidates: action.payload,
            }
        case DELETE_CANDIDATE:
            return {
                ...state,
                deleteSuccess: true
            }
        default:
            return state

    }
}

export default CandidateReducer;
