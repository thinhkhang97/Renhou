export const AUTHENTICATION_REQUEST = 'AUTHENTICATION_REQUEST';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';
export const SIGN_OUT = 'SIGN_OUT';
import { authenServices } from '../../services';

export const authenticate = (data) => (dispatch) => {
    dispatch({
        type: AUTHENTICATION_REQUEST,
    });

    authenServices.login(data.email, data.password).then(res => {
        dispatch({
            type: AUTHENTICATION_SUCCESS,
            message: res,
        })
    }).catch(error => {
        dispatch({
            type: AUTHENTICATION_FAILURE,
            message: error.response.data,
        })
    })
}

export const signOut = () => (dispatch) => {
    dispatch({
        type: SIGN_OUT,
    });
}