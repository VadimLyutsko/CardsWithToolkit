import React from 'react';
import './App.css';
import {Registration} from './components/Registration/Registration';
import {Login} from './components/Login/Login';
import {Profile} from './components/Profile/Profile';
import {PasswordRecovery} from './components/PasswordRecovery/PasswordRecovery';
import {NewPasswordEntering} from './components/NewPasswordEntering/NewPasswordEntering ';
import {SuperTestComponent} from './components/SuperTestComponent/SuperTestComponent';

function App() {
    return (
        <div className="App">
            <Login/>
            <Registration/>
            <Profile/>
            <PasswordRecovery/>
            <NewPasswordEntering/>
            <SuperTestComponent/>
        </div>
    );
}

export default App;
