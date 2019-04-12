import { sendPost, get, put } from "./BaseHttpServices";
import { HOST, SERVICE } from "./ApiUrl";

export function addRoom(data) {
    const url = HOST.local + SERVICE.room;
    return sendPost(url, data);
}

export function listRoom(userID) {
    const url = HOST.local + SERVICE.allRoom + userID;
    return get(url);
}

export function roomInfo(roomID) {
    const url = HOST.local + SERVICE.roomInfo + roomID;
    return get(url);
}

export function updateRoom(body) {
    const url = HOST.local + SERVICE.updateRoom;
    return put(url, body);
}