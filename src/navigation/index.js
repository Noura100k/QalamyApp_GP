import React ,{useState}from "react";
import {View,Text,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from '../screens/Signin_screen/Signin_screen';
import RegisterScreen from '../screens/Register_screen/Register_screen';
import ConfirmScreen from "../screens/ConfirmScreen/ConfirmScreen";
import ForgotScreen from "../screens/ForogtPassword_Screen/ForgotScreen";
import NewPasswordScreen from "../screens/ForogtPassword_Screen/NewPasswordScreen";
import HomeScreen from "../screens/Home/index";
import MainMotherScreen from '../screens/Main_Mother_Screen/index';
import AddNewchild from "../screens/Main_Mother_Screen/childRegisteration/Add_new_child";

const Stack = createNativeStackNavigator();

export default function Navigation() {

     
    return (
        <NavigationContainer >

            <Stack.Navigator screenOptions={{headerShown:false}}>


                <Stack.Screen name="SignIn" component={SigninScreen}/>
                <Stack.Screen name="SignUP" component={RegisterScreen}/>
                <Stack.Screen name="Confirm" component={ConfirmScreen}/>
                <Stack.Screen name="Forgotpassword" component={ForgotScreen}/>
                <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Main_Mother_screen" component={MainMotherScreen}/>
                <Stack.Screen name="Add_new_child" component={AddNewchild}/>


                



            
            </Stack.Navigator>

            </NavigationContainer>
      
    );
  }
  
  
  