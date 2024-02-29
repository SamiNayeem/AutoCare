import React from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import Registration from "../Registration/Registraion";

const Home=()=>{
    return(
        <View>
            <Text style={{fontWeight:'bold',color:"#8080FF"}}>WELCOME TO AUTOCARE</Text>
            <TouchableOpacity onPress={Registration}>
                <Text style={{color:"#21ADA8"}}>Click to Register</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;