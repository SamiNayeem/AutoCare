import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import InputField from "../../components/TextInput/InputField";

const Registration=(props:any)=>{ 
    const user=props.route.params.usertype;
    const submit=()=>{
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Address:", address);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
        console.log("User Type:", user);
    }

    const [username, setUserName]=useState('');
    const [email, setEmail]=useState('');
    const [phone, setPhone]=useState('');
    const [address, setAddress]=useState('');
    const [password, setPassword]=useState('');
    const [confirmPassword, setConfirmPassword]=useState('');
    const [garageAddress, setGarageAddress]=useState('');

    return(
        <View>
            <Text style={{fontWeight:'bold',color:"#8080FF"}}>WELCOME TO AUTOCARE</Text>
            <>
                <Text>Enter Your Username</Text>
                <InputField placeholder="Enter Username" value={username} setValue={setUserName} />
                <Text>Enter Your Email</Text>
                <InputField placeholder="Enter Email" value={email} setValue={setEmail} />
                <Text>Enter Your Phone Number</Text>
                <InputField placeholder="Enter Phone" value={phone} setValue={setPhone} />
            {user=='car'&&
                <>
                    <Text>Enter Your Current Address</Text>
                    <InputField placeholder="Enter Address" value={address} setValue={setAddress} />
                </>
            }
            {user=='garage'&&
                <>
                    <Text>Enter Your Garage Address</Text>
                    <InputField placeholder="Enter Address" value={garageAddress} setValue={setGarageAddress} />
                </>
            }
            <Text>Set Your Password</Text>
            <InputField placeholder="Enter Password" value={password} setValue={setPassword} />
            <Text>Confirm Password</Text>
            </>
            <InputField placeholder="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} />
            <Button title="Submit" onPress={submit} />
        </View>
    )
}

export default Registration