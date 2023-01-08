import React from "react";
import { View,StyleSheet} from "react-native";
import Navigation from "./src/navigation";
//import NavBar from './src/screens/Main_Mother_Screen/index';
export default function App() {
  return (
   
    <Navigation/>
  
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#F9FBFC'
 
  },
  
});

