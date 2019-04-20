import { sendPost, get, put, getWithToken, postWithToken } from "./BaseHttpServices";
import { HOST, SERVICE } from "./ApiUrl";

export function addRoom(data, token) {
    const url = HOST.local + SERVICE.room;
    return postWithToken(url, data, token);
}

export function listRoom(userID, token) {
    const url = HOST.local + SERVICE.allRoom + userID;
    return getWithToken(url, token);
}

export function roomInfo(roomID) {
    const url = HOST.local + SERVICE.roomInfo + roomID;
    return get(url);
}

export function updateRoom(body) {
    const url = HOST.local + SERVICE.updateRoom;
    return put(url, body);
}