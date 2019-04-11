import {sendPost} from "./BaseHttpServices";
import {HOST, SERVICE} from "./ApiUrl";

export function addRoom(userId, name, address, roomCost, perElectricCost, perWaterCost) {
    const body = {
        userId,
        name,
        address,
        roomCost,
        perElectricCost,
        perWaterCost
    }
    return sendPost(HOST+SERVICE,body);
}