import React from "react";
import {StyleSheet,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


function onButtonPress(){
    console.warn("Floating add")

 }

export default function AddFloatingComponent({onPress,button_text})
{
  return(

   <TouchableOpacity
   style={styles.floatingAdd}
   onPress={onButtonPress}
   >
    
    <Ionicons name="add-circle"  size={60} color="#FFC917"/>

   </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
   floatingAdd:{
    position:'absolute',
    width:60,
    height:60,
    alignItems:'center',
    justifyContent:'center',
    right:30,
    bottom:30,

   }
  
});