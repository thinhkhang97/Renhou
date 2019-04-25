export const LOAD_REQUEST = 'LOAD_REQUEST';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILURE = 'LOAD_FAILURE';
export const ADD_MEMBER = 'ADD_MEMBER';
export const UPDATE_MEMBER = 'UPDATE_MEMBER';
import { memberServices } from '../../services';
export const loadRoomMember = (userID, token) => (dispatch) => {
    // dispatch({
    //     type: LOAD_REQUEST,
    // });
    // memberServices.listRoomMember(userID, token).then(res => {
    //     dispatch({
    //         type: LOAD_SUCCESS,
    //         message: res.data,
    //     })
    // }).catch(error => {
    //     dispatch({
    //         type: LOAD_FAILURE,
    //         message: error.response,
    //     })
    // });
}

export const addMember = (data) => ({
    type: ADD_MEMBER,
    data,
})