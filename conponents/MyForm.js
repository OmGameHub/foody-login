import React from "react";
import { 
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class MyForm extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor='#99AAAB'
                    underlineColorAndroid='#0000'
                    selectionColor={'#f1c40f'}
                />

                <TextInput 
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='#99AAAB'
                    secureTextEntry={true}
                    underlineColorAndroid='#0000'
                    selectionColor={'#f1c40f'}
                />

                <TouchableOpacity style={[styles.btn, styles.loginBtn]} >
                    <Text style={[styles.btnText, styles.loginText]} >Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn, styles.forgotPasswordBtn]} >
                    <Text style={[styles.btnText, styles.forgotPasswordText]} >Forgot Password?</Text>
                </TouchableOpacity>

                <Text style={[styles.btnText, { color: '#fff', marginBottom: 15 }]} >OR</Text>

                <View style={styles.apiContainer} >
                    <TouchableOpacity style={[styles.btn, styles.apiBtn, styles.googleLoginBtn]} >
                        <Icon style={styles.iconStyle} name='google' />
                        <Text style={[styles.btnText, styles.loginText]} >Google Login</Text>
                    </TouchableOpacity>

                    <View style={{ padding: 5 }} ></View>

                    <TouchableOpacity style={[styles.btn, styles.apiBtn, styles.facebookLoginBtn]} >
                        <Icon  style={styles.iconStyle} name='facebook' />
                        <Text style={[styles.btnText, styles.loginText]} >Facebook Login</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        paddingLeft: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
    btn: {
        paddingVertical: 15,
        marginBottom: 15,
        borderRadius: 5,
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    loginBtn: {
        backgroundColor: '#f1c40f',
    },
    loginText: { 
        color: '#fff' 
    },
    forgotPasswordBtn: {
        borderWidth: 1,
        borderColor: '#f1c40f',
    },
    forgotPasswordText: { 
        color: '#f1c40f' 
    },
    apiContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    apiBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconStyle: {
        color: '#fff',
        marginRight: 5,
    },
    googleLoginBtn: {
        backgroundColor: '#c0392b',
    },
    facebookLoginBtn: {
        backgroundColor: '#29487d',
    },
});