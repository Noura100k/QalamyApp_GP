import React from "react";
import { View,StyleSheet} from "react-native";
import Navigation from "./src/navigation";
import NavBar from './src/screens/Main_Mother_Screen/index';
import RegisterChild from "./src/screens/Main_Mother_Screen/childRegisteration/Add_new_child";
import Canva from "./src/screens/Canvas_screen/Canva";
export default function App() {
  return (
   
    <Navigation/>
  
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#F9FBFC',

 
  },
  
});

