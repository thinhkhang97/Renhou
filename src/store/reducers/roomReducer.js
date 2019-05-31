import {
    LOAD_SUCCESS,
    LOAD_FAILURE,
    LOAD_REQUEST,
    ADD_ROOM,
    UPDATE_ROOM,
} from '../actions/roomAction';

const initialState = {
    loading: false,
    error: 200,
    data: undefined,
}

const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ROOM: {
            return { ...state, data: [...state.data, action.data] };
        }
        case UPDATE_ROOM: {
            const newData = state.data.map(room => {
                if (room._id === action.data.roomId) {
                    room.address = action.data.address;
                    room.name = action.data.name;
                }
                return room;
            });
            return { ...state, data: [...newData] };
        }
        case LOAD_SUCCESS:
            {
                return {
                    ...state,
                    loading: false,
                    error: 200,
                    data: action.message.data,
                };
            }
        case LOAD_REQUEST:
            {
                return {
                    ...state,
                    loading: true,
                    error: 200,
                };
            }
        case LOAD_FAILURE:
            {
                return {
                    ...state,
                    loading: false,
                    error: action.message.status
                };
            }
        default:
            return state;
    }
}

export default roomReducer;