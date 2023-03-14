import React from "react";
import {StyleSheet,TouchableOpacity,Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


function onButtonPress(){
    console.warn("Next")

 }

export default function NextComponent({onPress,button_text})
{
  return(
    <TouchableOpacity

onPress={handleUndo}
>
 
 <Ionicons name="arrow-right-circle"  size={40} color="#3B71F3"/>
 <Text>Next</Text>

</TouchableOpacity>


   

    );
}

