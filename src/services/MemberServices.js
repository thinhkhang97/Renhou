import { sendPost, get, put, getWithToken, postWithToken, putWithToken } from "./BaseHttpServices";
import { HOST, SERVICE } from "./ApiUrl";

export function addMember(data, token) {
    const url = HOST.local + SERVICE.room;
    return postWithToken(url, data, token);
}

export function listRoom(userID, token) {
    const url = HOST.local + SERVICE.allRoom + userID;
    return getWithToken(url, token);
}

export function roomInfo(roomID, token, userID) {
    const url = HOST.local + SERVICE.roomInfo + roomID + '?userId=' + userID;
    return getWithToken(url, token);
}

export function updateRoom(body, token) {
    const url = HOST.local + SERVICE.updateRoom;
    return putWithToken(url, body, token);
}