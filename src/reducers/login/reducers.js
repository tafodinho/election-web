import isEmpty from 'lodash/isEmpty';

import {
    SET_CURRENT_USER,
    LOGOUT_USER
} from './actions';

let initialData = {
    isAdmin: false,
    isAuthenticated: false,
    user: {}
}
function LoginReducer (data = initialData, action) {

    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...data,
                isAdmin: action.user.isAdmin,
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            }
        case LOGOUT_USER:
            localStorage.removeItem('state');
            return {
                ...data,
                isAuthenticated: false,
            }
        default:
            return data

    }
}

export default LoginReducer;
