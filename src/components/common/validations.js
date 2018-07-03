import { isEmpty } from 'lodash';
import { connect } from 'react-redux';

export default function validateInput(data) {
    let errors = {}

    if(isEmpty(data.username)) {
        errors.username = 'this field is required'
    }

    if(isEmpty(data.password)) {
        errors.password = 'this field is required'
    }
    return {
        errors,
        isValid: !isEmpty(data.username) && !isEmpty(data.password)
    }
}

export function isAuth() {
    const token = localStorage.getItem('token');
    console.log(token);

    if(token) {
        return true
    }
    return false;

}

export function isAdmin() {

}
