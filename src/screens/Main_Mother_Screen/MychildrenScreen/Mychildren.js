import * as React from 'react';
import { View,StyleSheet,ScrollView} from 'react-native';
import Card from '../../../../Components/DisplayChildren';
import AddFloating from '../../../../Components/AddFloatingComponent';
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';



export default function Mychildren() {
  const navigation =useNavigation();


  function onAddFloatingPress(){
    
    //console.warn("Floating Add")
    navigation.navigate("Addchild");



  }
    return (

        
      
       
         <View style={styles.container}>
        <ScrollView>
        <View>
         <Card 
         URL="https://www.nawa3em.com/big/child-1-02-09-2014.jpg"
         name="محمد"
         ButtonName="عرض"
          />
           <Card 
         URL="https://www.mmlakaty.com/wp-content/uploads/2018/08/%D8%AA%D8%AD%D8%B6%D9%8A%D8%B1-%D8%A7%D9%84%D8%B7%D9%81%D9%84-%D9%84%D8%AF%D8%AE%D9%88%D9%84-%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-%D8%B5%D8%AD%D9%8A%D8%A7%D9%8B-%D9%88-%D9%86%D9%81%D8%B3%D9%8A%D8%A7%D9%8B.jpg"
         name="نورة"
         ButtonName="عرض "
          />
          </View>
          </ScrollView>
          <AddFloating onPress={onAddFloatingPress}/>
        </View>  
        
    
        
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        ...StyleSheet.absoluteFillObject,
        alignSelf: 'flex-end',
        marginTop: -5,
        position: 'absolute',

        
    },


    
  });
  
  