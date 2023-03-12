import React ,{useState}from "react";
import {View,Text,TextInput,StyleSheet,Image,useWindowDimensions,ScrollView} from 'react-native';
import Custom_input from '../../../Components/CustomInput';
import CustomButton from "../../../Components/CustomButton";
import CustomForgot from "../../../Components/CustomForgot";
import SocialSignInButtons from "../../../Components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

export default function signin_screen() {
    const {height}=useWindowDimensions();
    const [name,setname]=useState("");
     const [username_email,setusername_email]=useState("");
     const [password,setpassword]=useState("");
     const [confirmpassword,setconfirmpassword]=useState("");
     const navigation =useNavigation();


     function onbuttonPress(){
        console.warn("sign up")
        navigation.navigate('Confirm')


     }
     function onSignin(){
      navigation.navigate('SignIn')

     }
   

    return (
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.title}>حساب جديد</Text>
        <Custom_input placeholder="الاسم" value={name} setValue={setname}/>
        <Custom_input placeholder="الايميل" value={username_email} setValue={setusername_email} />
        <Custom_input placeholder="كلمة المرور" value={password} setValue={setpassword} secureTextEntry={true} />
        <Custom_input placeholder="تأكيد كلمة المرور" value={confirmpassword} setValue={setconfirmpassword} secureTextEntry={true} />
        <CustomButton button_text="تسجيل" onPress={onbuttonPress}  />
        <Text style={styles.text}>بالتسجيل ، فإنك تؤكد قبولك  <Text style={styles.link}>لشروط الاستخدام </Text>و <Text style={styles.link}>الخصوصية </Text></Text>
         {/*<CustomButton button_text="Sign In with Facebook" onPress={onbuttonPressFacbook} bc="#E7EAF4" fc="#4765A9" />
        <CustomButton button_text="Sign In with Google" onPress={onbuttonPressGoogle}  bc="#FAE9EA" fc="#DD4D44"/>
        <CustomButton button_text="Sign In with Apple" onPress={onbuttonPressApple} bc="#E3E3E3" fc="#363636" />*/}
        <SocialSignInButtons/>
        <CustomForgot button_text="لديك حساب؟ نسجيل الدخول؟ " onPress={onSignin}  />




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
  
  
  