import {
    LOAD_SUCCESS,
    LOAD_FAILURE,
    LOAD_REQUEST,
    ADD_MEMBER,
    UPDATE_MEMBER,
} from '../actions/memberAction';

const initialState = {
    loading: false,
    error: 200,
    members: [],
}

const memberReducer = (state = initialState, action) => {
    switch (action.type) {
        
        default:
            return state;
    }
}

export default memberReducer;