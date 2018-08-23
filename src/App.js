import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from "firebase";

import {Header} from "./components/common";
import LoginForm from "./components/LoginForm";

function setupFirebase() {
    const config = {
        apiKey: "AIzaSyC3mRlrF2QUJhyWq4292LgiUDXx7xAgMEI",
        authDomain: "authentication-49186.firebaseapp.com",
        databaseURL: "https://authentication-49186.firebaseio.com",
        projectId: "authentication-49186",
        storageBucket: "authentication-49186.appspot.com",
        messagingSenderId: "1049997435460"
    };

    try {
        return firebase.initializeApp(config);
    } catch (err) {
        if (err) {
            console.log(err);
        }
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        let fb = setupFirebase();
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;