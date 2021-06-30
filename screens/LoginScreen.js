import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <View>
            <StatusBar style="light" />
            <Image
                source={{
                    uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
                }}
                style={{ width: 200, height: 200 }}
            />
            <View style={styles.inputContainer}>
            </View>
            <Input 
            placeholder="Email" 
            autoFocus type="email" 
            value={email} 
            onChangeText={(text) => setEmail(text)} 
            />
            <Input placeholder="Password" secureTextEntry type="password" />
            {/* secureText allows us to hide password characters */}
        </View>
    );
}


export default LoginScreen;

// styles for compos
const styles = StyleSheet.create({
    inputContainer: {

    },

});
