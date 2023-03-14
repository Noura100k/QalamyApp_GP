import React from "react";
import {StyleSheet,TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


function onButtonPress(){
    console.warn("Record")

 }

export default function MicrophoneComponent({onPress,button_text})
{
  return(

   <TouchableOpacity
   style={styles.microphone}
   onPress={onButtonPress}
   >
    
    <FontAwesome5 name="microphone-alt"  size={80} color="#FA8072"/>

   </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    microphone:{
    width:80,
    height:80,
    alignItems:'center',
    justifyContent:'center',  
   }
  
});