import React from "react";
import {  Card, Button } from '@rneui/themed'; 
import {StyleSheet,View,Text} from 'react-native';
import CustomButton from "./CustomButton";
export default function DisplayChildren({URL,name,ButtonName})
{
  return(
    <Card>
          <Card.Title>{name}</Card.Title>
            <Card.Divider />
        <View style={styles.image} >
          <Card.Image style={styles.logo}
            source={{
              uri:
                URL,
            }}
          />
          </View>
          
          <CustomButton button_text={ButtonName} bc={'#67A8D0'}/>
        </Card>
    );
}
const styles = StyleSheet.create({
   
 
    
    image:{
    justifyContent: 'center',
    alignItems: 'center',
 
        
    },
    logo:{
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom:10
 
        
    },
    text:{
        marginBottom: 10,
    }
    ,
    icon:{
        marginRight: 10,
    }
    
  });


