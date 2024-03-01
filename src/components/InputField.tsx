import { View, Text, StyleSheet } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import { TextInput } from 'react-native-gesture-handler'

interface InputProps{
    placeholder:string;
    value:string;
    setValue:(text:string)=>void;
}

const InputField:React.FC<InputProps>=({placeholder,value,setValue})=>{
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder={placeholder}
        value={value} 
        onChangeText={setValue}
      />
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:'100%',
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:5,
    }
})

export default InputField