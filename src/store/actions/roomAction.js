export const LOAD_REQUEST = 'LOAD_REQUEST';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILURE = 'LOAD_FAILURE';
export const ADD_ROOM = 'ADD_ROOM';
export const UPDATE_ROOM = 'UPDATE_ROOM';
import { roomServices } from '../../services';

export const loadRoom = (userID, token) => (dispatch) => {
    dispatch({
        type: LOAD_REQUEST,
    });
    roomServices.listRoom(userID, token).then(res => {
        dispatch({
            type: LOAD_SUCCESS,
            message: res.data,
        })
    }).catch(error => {
        dispatch({
            type: LOAD_FAILURE,
            message: error.response,
        })
    });
}

export const addRoom = (data) => ({
    type: ADD_ROOM,
    data,
})

export const updateRoom = (data) => ({
    type: UPDATE_ROOM,
    data,
})