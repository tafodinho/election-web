import isEmpty from 'lodash/isEmpty';

import {
    SET_CURRENT_USER,
    LOGOUT_USER
} from './actions';

let initialData = {
    isAdmin: true,
    isAuthenticated: true,
    user: {}
}
function LoginReducer (data = initialData, action) {

    switch (action.type) {
        case SET_CURRENT_USER:
            const token = action.user.password;
            if(!isEmpty(token)) {
                localStorage.setItem('token', token);
            }
            return {
                isAdmin: action.user.isAdmin,
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            }
        case LOGOUT_USER:
            localStorage.removeItem('token');
            return {
                isAuthenticated: false,
            }
        default:
            return data

    }
}

export default LoginReducer;
