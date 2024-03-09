import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import InputField from "../../components/TextInput/InputField";
import { TouchableOpacity } from "react-native-gesture-handler";

const Login=()=>{
    const [email,SetEmail]=useState('');
    const [password,setPassword]=useState('');
    const [usertype,setUserType]=useState('');

    const submit=()=>{
        console.log("User", email);
        console.log("Pass", password);
        console.log("Radio", usertype);
    }

    return(
        <View>
            <Text>Email</Text>
            <InputField placeholder="Enter Email" value={email} setValue={SetEmail} />
            <Text>Password</Text>
            <InputField placeholder="Enter Password" value={password} setValue={setPassword} />
            <Text>I am a </Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => setUserType('car')} style={styles.radioButton}>
                    <View style={[styles.radioCircle, usertype === 'car' && styles.selectedCircle]} />
                    <Text style={styles.text}>Car Owner</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setUserType('garage')} style={styles.radioButton}>
                    <View style={[styles.radioCircle, usertype === 'garage' && styles.selectedCircle]} />
                    <Text style={styles.text}>Garage Owner</Text>
                </TouchableOpacity>
            </View>
            <Button title="Login" onPress={submit} />
        </View>
    )
}

const styles = StyleSheet.create({
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16
    },
    radioCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        marginRight: 8
    },
    selectedCircle: {
        borderColor: '#007bff'
    },
    text: {
        marginLeft: 8
    }
});

export default Login