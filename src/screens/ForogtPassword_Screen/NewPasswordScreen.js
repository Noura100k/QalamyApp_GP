import React ,{useState}from "react";
import {View,Text,TextInput,StyleSheet,Image,useWindowDimensions,ScrollView} from 'react-native';
import Custom_input from '../../../Components/CustomInput';
import CustomButton from "../../../Components/CustomButton";
import CustomForgot from "../../../Components/CustomForgot";
import { useNavigation } from "@react-navigation/native";

export default function NewPasswordScreen() {

    const [confirmCode,setconfirmCode]=useState("");
    const [newpassword,setnewpassword]=useState("");
    const navigation =useNavigation();

     

     function onSubmitress(){
        //console.warn("send button press")
        navigation.navigate('Home')

     }
   
     function onBack_to_Sign_in_Press(){
        console.warn("sign in back")
        navigation.navigate('SignIn')

     }
   
   

    return (
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.title}>Reset your password</Text>
        <Custom_input placeholder="Enter confirmation code" value={confirmCode} setValue={setconfirmCode}/>
        <Custom_input placeholder="Enter your new password" value={newpassword} setValue={setnewpassword}/>
        <CustomButton button_text="Sumbit" onPress={onSubmitress}  />
        <CustomForgot button_text="Back to Sign in" onPress={onBack_to_Sign_in_Press}  />

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
  
  
  