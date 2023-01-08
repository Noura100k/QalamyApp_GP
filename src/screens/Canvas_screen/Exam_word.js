import { StatusBar } from 'expo-status-bar';
import React, { useRef } from "react";
import { StyleSheet, View, Button } from "react-native";
import Canva from '../../../Components/CanvaCompoenets/CanvaComponent';
import Delete from '../../../Components/CanvaCompoenets/CanvaDelete';

export default function Exam_word() {
  return (
    <View style={styles_con.container}>
    <View style={styles_con.canvas_container}>
     <Canva  hight={150} width={150}/>
  </View>
  <Delete/>
  </View>
  );
}

const styles_con = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    padding: 10,
  },
   canvas_container:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
   },

});
