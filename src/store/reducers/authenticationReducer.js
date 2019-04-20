import {
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILURE,
    AUTHENTICATION_REQUEST,
    SIGN_OUT,
} from '../actions/authenticationAction';

const initialState = {
    isAuthenticating: false,
    isAuthenticated: false,
    userID: null,
    error: 200,
    accessToken: null,
}

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATION_SUCCESS:
            {
                return {
                    ...state,
                    isAuthenticating: false,
                    isAuthenticated: true,
                    error: 200,
                    userID: action.message.data.token.userID,
                    accessToken: action.message.data.token.token,
                };
            }
        case AUTHENTICATION_REQUEST:
            {
                return {
                    ...state,
                    isAuthenticating: true,
                    isAuthenticated: false,
                    error: 200,
                    accessToken: null,
                };
            }
        case AUTHENTICATION_FAILURE:
            {
                return {
                    ...state,
                    isAuthenticated: false,
                    isAuthenticating: false,
                    userID: null,
                    accessToken: null,
                    error: action.message.code
                };
            }
        case SIGN_OUT:
            {
                return {
                    ...state,
                    isAuthenticated: false,
                    isAuthenticating: false,
                    userID: null,
                    accessToken: null,
                    error: 200
                };
            }
        default:
            return state;
    }
}

export default authenticationReducer;