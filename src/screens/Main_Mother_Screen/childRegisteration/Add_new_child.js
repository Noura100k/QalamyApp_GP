import * as React from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import Custominput from '../../../../Components/CustomInput';
import CustomButton from '../../../../Components/CustomButton';
import Drop_list from '../../../../Components/Drop_Down_List';
import Radio_button from '../../../../Components/Radio_button';

export default function Add_new_child() {
    return (
        <View style={styles.container}>
           
        <View  style={styles.Imagestyle}>
         <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1702/1702342.png'}}
         style={styles.circleImage}/>
         </View>
            <Text style={styles.textFont}>الاسم</Text>
            <Custominput value={' خالد'}/>
            <Text style={styles.textFont}>اسم المستخدم</Text>
            <Custominput value={'Khaled@3'}/>
            <Text style={styles.textFont}> الجنس</Text>
            <Radio_button></Radio_button>
            <Text style={styles.textFont}> العمر</Text>
            <Drop_list ></Drop_list>
            <View style={{marginTop:30}}>
                <CustomButton button_text="تسجيل " bc={'#67A8D0'}/>
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
        fontSize: 15, fontWeight: '700', textAlign: 'right'
      },
      Imagestyle:{
        justifyContent:'center',
        alignItems:'center',
        
       
     },
   
     circleImage:{
         borderRadius:50,
         width: 100,
         height: 100,
         borderColor: 'gray',
         borderWidth: 1
    
     },




    
  });
  