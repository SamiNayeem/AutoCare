import React from "react";
import { StyleSheet, View,Text ,TouchableOpacity} from "react-native";


const GetStartedBtn = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.getStartedBtn}>
                <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

export default GetStartedBtn;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    getStartedBtn:{
        backgroundColor: "#ffff",
        padding: 10,
        borderRadius: 10,
        width: 250,
        marginTop: 20
    },
    btnText:{
        color: "#000",
        textAlign: "center"
    }

});
