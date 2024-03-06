import React, { useState } from "react";
import { Text, View } from "react-native";
import InputField from "../../components/TextInput/InputField";

const Login=()=>{
    const [email,SetEmail]=useState('');
    const [password,setPassword]=useState('');
    const [usertype,setUserType]=useState('');

    return(
        <View>
            <Text>Email</Text>
            <InputField placeholder="Enter Email" value={email} setValue={SetEmail} />
            <Text>Password</Text>
            <InputField placeholder="Enter Password" value={password} setValue={setPassword} />
            <Text>I am a </Text>
        </View>
    )
}

export default Login