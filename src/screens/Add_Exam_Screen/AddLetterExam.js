import { StatusBar } from 'expo-status-bar';
import React, { useRef } from "react";
import { StyleSheet, View, Button, Text, TouchableOpacity } from "react-native";
import Next from '../../../Components/NextComponent';
import Microphone from '../../../Components/MicrophoneComponent';
import Done from '../../../Components/DoneComponent';
import CustomInput from '../../../Components/CustomInput';

export default function Add_Letter_Exam({navigation}) {
    return (
      <View style={styles_con.container}>
      <Text style={styles_con.title}>اختر الحرف</Text>
      <CustomInput placeholder="أ، ب، ت،.."/>
      <Text style={styles_con.title}>سجل الحرف</Text>
      <Microphone/>
      <View style={styles_con.bottom}>
      <Done/>
      <Next/>
      </View>
      </View>
    );
  }
  
  const styles_con = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 50,
    },
     title:{
        fontSize:30,
        color:'#808080',
        marginBottom:20,
        marginTop:80,
      },
      bottom:{
        marginTop: 150,
        flexDirection: "row",
      }
  
  });