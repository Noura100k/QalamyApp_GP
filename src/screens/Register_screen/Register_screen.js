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
        <Text style={styles.title}>Create an account</Text>
        <Custom_input placeholder="Name" value={name} setValue={setname}/>
        <Custom_input placeholder="Email" value={username_email} setValue={setusername_email} />
        <Custom_input placeholder="Password" value={password} setValue={setpassword} secureTextEntry={true} />
        <Custom_input placeholder="Confirm password" value={confirmpassword} setValue={setconfirmpassword} secureTextEntry={true} />
        <CustomButton button_text="Register" onPress={onbuttonPress}  />
        <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link}>Terms of use </Text>and <Text style={styles.link}>Privacy </Text></Text>
         {/*<CustomButton button_text="Sign In with Facebook" onPress={onbuttonPressFacbook} bc="#E7EAF4" fc="#4765A9" />
        <CustomButton button_text="Sign In with Google" onPress={onbuttonPressGoogle}  bc="#FAE9EA" fc="#DD4D44"/>
        <CustomButton button_text="Sign In with Apple" onPress={onbuttonPressApple} bc="#E3E3E3" fc="#363636" />*/}
        <SocialSignInButtons/>
        <CustomForgot button_text="have an account? Sign In" onPress={onSignin}  />




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
  
  
  