import React from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";

const Home=(props:any)=>{
    return(
        <View>
            <Text style={{fontWeight:'bold',color:"#8080FF"}}>WELCOME TO AUTOCARE</Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Registration",{usertype:'car'})}>
                <Text style={{color:"#21ADA8"}}>Click to Register Car</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Registration",{usertype:'garage'})}>
                <Text style={{color:"#21ADA2"}}>Click to Register Garage</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Login")}>
                <Text style={{color:"#21ADA2"}}>Click to Login</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;