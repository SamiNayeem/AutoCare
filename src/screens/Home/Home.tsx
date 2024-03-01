import React from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";

const Home=(props:any)=>{
    return(
        <View>
            <Text style={{fontWeight:'bold',color:"#8080FF"}}>WELCOME TO AUTOCARE</Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Registration")}>
                <Text style={{color:"#21ADA8"}}>Click to Register</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;