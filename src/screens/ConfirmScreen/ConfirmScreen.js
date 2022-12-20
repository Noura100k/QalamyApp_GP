import React ,{useState}from "react";
import {View,Text,TextInput,StyleSheet,Image,useWindowDimensions,ScrollView} from 'react-native';
import Custom_input from '../../../Components/CustomInput';
import CustomButton from "../../../Components/CustomButton";
import CustomForgot from "../../../Components/CustomForgot";
import { useNavigation } from "@react-navigation/native";

export default function ConfirmScreen() {

    const [Code,setCode]=useState("");
    const navigation =useNavigation();


     function onConfirmPress(){
       // console.warn("confirm button press")
       navigation.navigate('Home')


     }
     function onBack_to_Sign_in_Press(){
        console.warn("sign in back")
     }
     function resend_code_button(){
        console.warn("resend code")
     }
   
   

    return (
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.title}>Confirm your email</Text>
        <Custom_input placeholder="Enter your confirmation code" value={Code} setValue={setCode}/>
        <CustomButton button_text="Confirm" onPress={onConfirmPress}  />
        <CustomButton button_text="Resend code" onPress={resend_code_button}  bc="#E7EAF4" fc="#3B71F3" />
        <CustomForgot button_text="Back to SignIn" onPress={onBack_to_Sign_in_Press}  />





      </View>
      </ScrollView>
    );
  }
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      padding:20,
      marginTop:100,
    },
    title:{
      fontSize:24,
      color:'#4765A9',
      fontWeight:'bold',
      margin:10,

    },
    text:{
        color:'gray',
        marginVertical:10,

    },
    link:{

        color: '#FDB075'
    }
  
  });
  
  
  