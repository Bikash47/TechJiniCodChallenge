// ===============================
// AUTHOR     : BIKASH KUMAR SAHU
// CREATE DATE     :28/11/2019
// PURPOSE     : Action for both Dashboard component
// ===============================
// Change History:
//
//==================================

import {
    EMAIL_CHANGE, PASSWORD_CHANGE,
    FETCHING_DATA, DASHBOARD_DATA
} from "../config/Config";

import { Alert } from 'react-native';
import { isValidCredentials, getDashboardData } from "../business/LoginBusiness";
import { Actions } from "react-native-router-flux";
import ApiAccess from "../apiAccess/ApiAccess";

export const emailChanged = (text) => {
    console.log('Email on action ' + text);
    return {
        type: EMAIL_CHANGE,
        payload: text
    };
}

export const passwordChange = (text) => {
    console.log('Password' + text);
    return {
        type: PASSWORD_CHANGE,
        payload: text
    };
}


export const onLogin = (email, password) => {

    return async (dispatch) => {
        dispatch({ type: FETCHING_DATA, payload: true });
        try {
            let isValidate = isValidCredentials(email, password);
            isValidate ? Actions.Dashboard() : Alert.alert("", "User Name or Password is incorrect")
            dispatch({ type: FETCHING_DATA, payload: false });

        } catch (e) {
            dispatch({ type: FETCHING_DATA, payload: false });

        }
    }

}



export const dashboardData = (filterParam) => {
    debugger;
    return async (dispatch) => {
        dispatch({ type: FETCHING_DATA, payload: true });
        try {
            filterParam = filterParam === undefined ? "" : filterParam
            let resp = await ApiAccess.get(filterParam);
            let getData = await getDashboardData(resp)
            debugger;
            dispatch({
                type: DASHBOARD_DATA,
                payload: getData
            });
        } catch (e) {
            dispatch({ type: FETCHING_DATA, payload: false });

        }
    }
}




