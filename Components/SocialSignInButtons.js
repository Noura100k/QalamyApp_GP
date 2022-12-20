import React from "react";
import {View,Text, TextInput,StyleSheet} from 'react-native';
import CustomButton from './CustomButton';

export default function SocialSignInButtons({value,setValue,placeholder,secureTextEntry})
{
    function onbuttonPressFacbook(){
        console.warn("sign in")
     }
     function onbuttonPressGoogle(){
        console.warn("sign in")
     }
     function onbuttonPressApple(){
        console.warn("sign in")
     }
  return(
    < >
        <CustomButton button_text="Sign In with Facebook" onPress={onbuttonPressFacbook} bc="#E7EAF4" fc="#4765A9" />
        <CustomButton button_text="Sign In with Google" onPress={onbuttonPressGoogle}  bc="#FAE9EA" fc="#DD4D44"/>
        <CustomButton button_text="Sign In with Apple" onPress={onbuttonPressApple} bc="#E3E3E3" fc="#363636" />

    </>

    );
}

const styles = StyleSheet.create({
    
});