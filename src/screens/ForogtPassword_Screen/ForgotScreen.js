import React ,{useState}from "react";
import {View,Text,TextInput,StyleSheet,Image,useWindowDimensions,ScrollView} from 'react-native';
import Custom_input from '../../../Components/CustomInput';
import CustomButton from "../../../Components/CustomButton";
import CustomForgot from "../../../Components/CustomForgot";
import { useNavigation } from "@react-navigation/native";

export default function ForgotScreen() {

    const [username_email,setusername_email]=useState("");
    const navigation =useNavigation();


     function onSendPress(){
       // console.warn("send button press")
       navigation.navigate('NewPassword')
     }
     function onBack_to_Sign_in_Press(){
       // console.warn("sign in back")
       navigation.navigate('SignIn')

     }
   
   

    return (
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.title}>اعادة تعين كلمة المرور</Text>
        <Custom_input placeholder="الايميل/اسم المستخدم" value={username_email} setValue={setusername_email}/>
        <CustomButton button_text="ارسال" onPress={onSendPress}  />
        <CustomForgot button_text="الرجوع لصفحة تسجيل الدخول" onPress={onBack_to_Sign_in_Press}  />

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
  
  
  