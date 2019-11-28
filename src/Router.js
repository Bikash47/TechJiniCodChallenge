// ===============================
// AUTHOR     : BIKASH KUMAR SAHU
// CREATE DATE     :28/11/2019
// PURPOSE     : Routing all components
// ===============================
// Change History:
//
//==================================

import React from 'react';
import { Scene, Router, } from 'react-native-router-flux';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
const RouterComponent = () => {

    return (
        <Router
            navigationBarStyle={{ backgroundColor: '#669966', elevation: 10 }}
            titleStyle={{
                fontFamily: 'Pacifico-Regular',
                fontSize: 22,
                color: '#fff',
            }}
            navBarButtonColor={{ color: '#fff' }}


        >
            <Scene key="root"
                backButtonImage={require('./imgs/back.png')}
            >
                <Scene key="Dashboard" component={Dashboard} title="Login" hideNavBar initial />
                <Scene key="Details" component={Details} title="Details" hideNavBar />


            </Scene>
        </Router>

    );

};

export default RouterComponent;
