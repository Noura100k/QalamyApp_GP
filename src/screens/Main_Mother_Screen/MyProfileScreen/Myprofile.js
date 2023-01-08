import * as React from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import Custominput from '../../../../Components/CustomInput';
import CustomButton from '../../../../Components/CustomButton';

export default function Myprofile({ navigation }) {
    return (
        <View style={styles.container}>
           
         <View  style={styles.Imagestyle}>
         <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/3899/3899618.png'}}
         style={styles.circleImage}/>
         </View>
            <Text style={styles.textFont}>Name</Text>
            <Custominput value={'Fatimah salah'}/>
            <Text style={styles.textFont}>Email</Text>
            <Custominput value={'Fatimah@com'}/>
            <Text style={styles.textFont}>Password</Text>
            <Custominput value={'@jshejd7'}/>
            <View style={{marginTop:30}}>
                <CustomButton button_text="Logout" bc={'#67A8D0'}/>
                <CustomButton button_text="Update" bc={'#67A8D0'}/>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
    padding:20,
    marginTop:80,
    felx:1
    
    },
    textFont:{
        fontSize: 15, fontWeight: '700'
      },
      Imagestyle:{
        justifyContent:'center',
        alignItems:'center',
        
       
     },
   
     circleImage:{
         borderRadius:50,
         width: 100,
         height: 100,
    
     },




    
  });
  