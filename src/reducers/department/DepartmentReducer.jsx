import isEmpty from 'lodash/isEmpty';

import {
    GET_DEPARTMENT
} from './DepartmentAction';

let initialData = {
    createSuccess: false,
    deleteSuccess: false,
    updateSuccess: false,
    user: {}
}
function DepartmentReducer (data = initialData, action) {

    switch (action.type) {
        case GET_DEPARTMENT:
            return {
                createSuccess: true,
                user: action.payload
            }
        default:
            return data

    }
}

export default DepartmentReducer;
