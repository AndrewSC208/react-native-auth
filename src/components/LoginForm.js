import React, {Component} from "react";
import firebase from "firebase";
import {
    Button,
    Card,
    CardSection,
    Input
} from "./common";

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };

    onButtonPress() {
        const {
            email,
            password
        } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password);
    }

    render() {
        const { 
            email, 
            password 
        } = this.state;

        return (
            <Card>
                <CardSection>
                    <Input
                        onChangeText={e => this.setState({e})} 
                        label={'Email'}
                        placeholder={'user@gmail.com'}
                        value={email} />
                </CardSection>

                <CardSection>
                    <Input
                        onChangeText={pw => this.setState({pw})}
                        label={'Password'}
                        placeholder={'password'}
                        value={password} 
                        secureTextEntry={true}/>
                </CardSection>

                <CardSection>
                    <Button
                    onPress={this.onButtonPress.bind(this)}>Login</Button>
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm;