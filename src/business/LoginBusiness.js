import { getSavedData } from "./AsyncStorageDB";

// ===============================
// AUTHOR     : BIKASH KUMAR SAHU
// CREATE DATE     :28/11/2019
// PURPOSE     : Some business logic for components or actions
// ===============================
// Change History:
//
//==================================

export function validateUserNameAndPassword(username, password) {
    var isAllClear = "";
    if (username === "") {
        isAllClear = "Enter User Id"
    } else if (password === "") {
        isAllClear = "Enter Password"
    } else {
        isAllClear = true
    }
    return isAllClear
}

export function isValidCredentials(username, password) {
    // "username": "hruday@gmail.com",
    // "password" :'hruday123'
    if (username == "hruday@gmail.com" && password == 'hruday123') {
        return true
    } else {
        return false;
    }
}
export async function getDashboardData(resp) {
    debugger;
    let fevData = await getSavedData("FEV_DATA");
    if (fevData.length != 0) {
        for (let i = 0; i < resp.length; i++) {
            for (let j = 0; j < fevData.length; j++) {
                if (resp[i].id == fevData[j].id) {
                    let obj = {
                        brewery_type: resp[i].brewery_type,
                        city: resp[i].city,
                        country: resp[i].country,
                        id: resp[i].id,
                        latitude: resp[i].latitude,
                        longitude: resp[i].longitude,
                        name: resp[i].name,
                        phone: resp[i].phone,
                        postal_code: resp[i].postal_code,
                        state: resp[i].state,
                        street: resp[i].street,
                        fev: true
                    }
                    resp[i] = obj;
                }
            }

        }
        debugger;
        return resp;

    } else {
        debugger;
        return resp;

    }

}