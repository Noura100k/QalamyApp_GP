import React from "react";
import {View,Text, TextInput,StyleSheet,Pressable} from 'react-native';

export default function CustomButton({onPress,button_text,bc,fc})
{
  return(
    <Pressable onPress={onPress}  style={[styles.container, bc?{backgroundColor:bc}:{}]} >

    <Text style={[styles.text, fc?{color:fc}:{}]}>{button_text}</Text>
    </Pressable>

    );
}

const styles = StyleSheet.create({
    container:{
       backgroundColor: '#3B71F3',
       width: '100%',
       padding:15,
       marginVertical:5,
       alignItems:'center',
       borderRadius: 5,

    },
    text:{
        fontWeight: 'bold',
        color:'white',

    }
  
});