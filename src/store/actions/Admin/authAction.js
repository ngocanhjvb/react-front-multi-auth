import {userRegisterService} from "../../../services/User/UserServices";

export const signUpAction = (credentials) => {
    return (dispatch) => {
        dispatch({type: 'RESTART_AUTH_RESPONSE'});
        dispatch({type: 'LOADING'});

        userRegisterService(credentials).then(response => {
            if (response.hasOwnProperty('success') && response.success === true) {

                dispatch({type: 'SIGN_UP_SUCCESS', payload: response});

            } else if (response.hasOwnProperty('success') && response.success === false) {
                dispatch({type: 'SIGN_UP_ERROR', payload: response})
            }
        }).catch(error => {
            dispatch({type: 'CODE_ERROR', payload: error})
        })
    }
}
