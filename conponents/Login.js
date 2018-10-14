import React from 'react';
import { 
    StyleSheet, 
    Text,
    Dimensions, 
    KeyboardAvoidingView,
    View 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MyForm from './MyForm';

export default class Login extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.logoContainer} >
                    <Icon 
                        style={{ color: '#fff', fontSize: 75 }}
                        name='food'
                    />
                    <Text style={styles.title}>Foody</Text>
                </View>
                <View style={styles.myForm} >
                    <MyForm />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        backgroundColor: '#353b48',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
    },
    myForm: {
        flex: 2,
    }
});
