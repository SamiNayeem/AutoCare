import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import InputField from "../../components/InputField";

const Registration=()=>{ 

    const submit=()=>{
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Address:", address);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
    }

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
            <InputField placeholder="Enter Email" value={email} setValue={setEmail} />
            <InputField placeholder="Enter Phone" value={phone} setValue={setPhone} />
            <InputField placeholder="Enter Address" value={address} setValue={setAddress} />
            <InputField placeholder="Enter Password" value={password} setValue={setPassword} />
            <InputField placeholder="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} />
            <Button title="Submit" onPress={submit} />
        </View>
    )
}

export default Registration