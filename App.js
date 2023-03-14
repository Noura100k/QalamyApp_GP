import React from "react";
import { View,StyleSheet} from "react-native";
import Navigation from "./src/navigation";
import NavBar from './src/screens/Main_Mother_Screen/index';
import RegisterChild from "./src/screens/Main_Mother_Screen/childRegisteration/Add_new_child";
import Canva from "./src/screens/Canvas_screen/Canva";
import Exam_letter from "./src/screens/Canvas_screen/Exam_letter";
import Exam_word from "./src/screens/Canvas_screen/Exam_word";

export default function App() {
  return (
   
    <NavBar/>
  
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#F9FBFC',

 
  },
  
});

