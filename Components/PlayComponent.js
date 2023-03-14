import React from "react";
import {StyleSheet,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


function onButtonPress(){
    console.warn("Play")

 }

export default function PlayComponent({onPress,button_text})
{
  return(

   <TouchableOpacity
   style={styles.play}
   onPress={onButtonPress}
   >
    
    <Ionicons name="ios-play-circle"  size={80} color="#AFE1AF"/>

   </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    play:{
    width:80,
    height:80,
    alignItems:'center',
    justifyContent:'center',  
   }
  
});