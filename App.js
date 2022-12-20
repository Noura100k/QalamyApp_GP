import React from "react";
import { View,StyleSheet} from "react-native";
import SigninScreen from './src/screens/Signin_screen/Signin_screen';
import RegisterScreen from './src/screens/Register_screen/Register_screen';
import ConfirmScreen from "./src/screens/ConfirmScreen/ConfirmScreen";
import ForgotScreen from "./src/screens/ForogtPassword_Screen/ForgotScreen";
import NewPasswordScreen from "./src/screens/ForogtPassword_Screen/NewPasswordScreen";
import Navigation from "./src/navigation";
export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#F9FBFC'
 
  },
  
});

