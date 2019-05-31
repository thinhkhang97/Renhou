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
        case ADD_MEMBER: {
            return { ...state, members: [...state.members, action.data] };
        }
        default:
            return state;
    }
}

export default memberReducer;