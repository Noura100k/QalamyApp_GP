import React from "react";
import {StyleSheet,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


function onButtonPress(){
    console.warn("Done")

 }

export default function DoneComponent({onPress,button_text})
{
  return(

   <TouchableOpacity
   style={styles.done}
   onPress={onButtonPress}
   >
    
    <AntDesign name="checkcircle"  size={60} color="#AFE1AF"/>

   </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    done:{
    width:60,
    height:60,
    right:100,
    top:10, 
   }
  
});