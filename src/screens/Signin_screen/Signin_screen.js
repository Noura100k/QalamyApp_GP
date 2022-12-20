import React ,{useState}from "react";
import {View,Text,TextInput,StyleSheet,Image,useWindowDimensions,ScrollView} from 'react-native';
import Custom_input from '../../../Components/CustomInput';
import Logo from '../../../assets/images/b.png';
import CustomButton from "../../../Components/CustomButton";
import CustomForgot from "../../../Components/CustomForgot";
import SocialSignInButtons from "../../../Components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

export default function Signin_screen() {
    const {height}=useWindowDimensions();
     const [username,setusername]=useState("");
     const [password,setpassword]=useState("");
     const navigation =useNavigation();

     function onbuttonPress(){
        //console.warn("sign in")
        //validate user
        navigation.navigate('Home')
     }
     
     function onForgotPress(){
        //console.warn("Forgotpress")
        navigation.navigate('Forgotpassword')
        
     }
     function onCreateAccount(){
      navigation.navigate('SignUP')
     }

    return (
        <ScrollView>
        <View style={styles.container}>
        <Image source={Logo} style={[styles.logo,{height:height*0.2}]} resizeMode="contain"/>
        <Custom_input placeholder="Username/Email" value={username} setValue={setusername}/>
        <Custom_input placeholder="Password" value={password} setValue={setpassword} secureTextEntry={true} />
        <CustomButton button_text="Sign In" onPress={onbuttonPress}  />
        <CustomForgot button_text="Forgot Password?" onPress={onForgotPress}  />
       {/* <CustomButton button_text="Sign In with Facebook" onPress={onbuttonPressFacbook} bc="#E7EAF4" fc="#4765A9" />
        <CustomButton button_text="Sign In with Google" onPress={onbuttonPressGoogle}  bc="#FAE9EA" fc="#DD4D44"/>
    <CustomButton button_text="Sign In with Apple" onPress={onbuttonPressApple} bc="#E3E3E3" fc="#363636" />*/}
       <SocialSignInButtons/>
        <CustomForgot button_text="Don't have an account? create on" onPress={onCreateAccount}  />




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
    logo:{
     marginBottom:10,
      width:'70%',
      maxWidth:300,
      maxHeight:200,
  
    }
  });
  
  
  