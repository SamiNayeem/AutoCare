import React, { useState } from "react";
import { Text, View } from "react-native";
import InputField from "../../components/InputField";

const Registration=()=>{
    const [username, setUserName]=useState('');
    const [email, setEmail]=useState('');
    const [phone, setPhone]=useState('');
    const [address, setAddress]=useState('');
    const [password, setPassword]=useState('');
    const [confirmPassword, setConfirmPassword]=useState('');

    return(
        <View>
            <Text style={{fontWeight:'bold',color:"#8080FF"}}>WELCOME TO AUTOCARE</Text>
            <InputField placeholder="Enter Username" value={username} setValue={setUserName} />
        </View>
    )
}

export default Registration