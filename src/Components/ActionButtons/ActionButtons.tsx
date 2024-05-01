import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from "react-native";


const ActionBtn = () => {
    return(
        <View style = {styles.container}>
            <TouchableOpacity style={styles.acceptBtn} activeOpacity={0.7}>
                <Text style = {styles.acceptBtnText}>Accept</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.rejectBtn} activeOpacity={0.7}>
                <Text style = {styles.rejectBtnText}>Decline</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ActionBtn;


const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection: 'row'
    },
    acceptBtn:{
        width: 80,
        height:40,
        backgroundColor: '#3DBDFF',
        color: '#fff',
        alignItems:'center',
        justifyContent:"center",
        borderRadius: 50
    },

    rejectBtn:{
        width: 80,
        height:40,
        borderWidth:1,
        borderColor: '#3DBDFF',
        color: '#fff',
        alignItems:'center',
        justifyContent:"center",
        borderRadius: 50
    },

    acceptBtnText: {
        color: '#fff'
    },

    rejectBtnText:{
        color: '#3DBDFF'
    }
   
})