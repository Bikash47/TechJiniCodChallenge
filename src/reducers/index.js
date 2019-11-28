// ===============================
// AUTHOR     : BIKASH KUMAR SAHU
// CREATE DATE     :28/11/2019
// PURPOSE     : Combine the reducer
// ===============================
// Change History:
//
//==================================

import { combineReducers } from 'redux';
import DashReducers from './DashReducers';
export default combineReducers({
    //  coool: () =>[]
    auth: DashReducers
});