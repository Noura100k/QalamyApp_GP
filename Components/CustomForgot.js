import React from "react";
import {View,Text, TextInput,StyleSheet,Pressable} from 'react-native';

export default function CustomForgot({onPress,button_text})
{
  return(
    <Pressable onPress={onPress}  style={styles.container}>

    <Text style={styles.text}>{button_text}</Text>
    </Pressable>

    );
}

const styles = StyleSheet.create({
    container:{
      
       width: '100%',
       padding:15,
       marginVertical:5,
       alignItems:'center',
       borderRadius: 5,

    },
    text:{
        fontWeight: 'bold',
        color:'gray',

    }
  
});