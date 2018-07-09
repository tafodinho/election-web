import isEmpty from 'lodash/isEmpty';

import {
    CREATE_ELECTION_SESSION,
    UPDATE_ELECTION_SESSION,
    DELETE_ELECTION_SESSION,
    GET_ELECTION_SESSION,
    GET_ELECTION_SESSIONS
} from './ElectionSessionAction';

let initialData = {
    createSuccess: false,
    deleteSuccess: false,
    updateSuccess: false,
    getElectionSessionsSuccess: false,
    getElectionSessionSuccess: false,
    electionSessions: [],
    electionSession: {}
}

function ElectionSessionReducer (state = initialData, action) {

    switch (action.type) {
        case GET_ELECTION_SESSION:
            return {
                ...state,
                getElectionSessionSuccess: true,
                electionSession: action.payload
            }
        case GET_ELECTION_SESSIONS:
            return {
                ...state,
                getElectionSessionsSuccess: true,
                electionSessions: action.payload
            }
        case CREATE_ELECTION_SESSION:
            return {
                ...state,
                createSuccess: true,
                electionSessions: action.payload
            }
        case UPDATE_ELECTION_SESSION:
            return {
                ...state,
                updateSuccess: true,
                electionSessions: action.payload,
            }
        case DELETE_ELECTION_SESSION:
            return {
                ...state,
                deleteSuccess: true
            }
        default:
            return state

    }
}

export default ElectionSessionReducer;
