import React,{useState} from "react";
import {StyleSheet,FlatList,Text,View,Image} from 'react-native';
export default function FlatListComponent({list})
{
  const [childrenReport, SetChildrenReport]=useState({list})
  return(
  <FlatList 
  keyExtractor={(item)=>item.id}
  data={list}
  renderItem={({item})=>(
 <View style={styles.item}>

 

   <View style={styles.textStyle}>  
   <Text style={styles.textFont}>تاريخ  </Text>  
   <Text style={styles.textFont}>{item.data}  </Text>  
   </View>

   <View style={styles.textStyle}>
   <Text style={styles.textFont}>الدرجة</Text>
   <Text style={styles.textFont}>{item.grade}</Text>
   </View>

   <View style={styles.textStyle}>
  <Text style={styles.textFont}>الأسم </Text>
   <Text style={styles.textFont}>{item.name}  </Text>
   </View>

   <View  style={styles.Imagestyle}>
    <Image source={{uri:item.image}}
    style={styles.circleImage}/>
    </View>
    
    </View>
  

  )}
  
  />
   
    );
}
const styles = StyleSheet.create({
   
    item:{
    
        padding:15,
        backgroundColor:'white',
        borderRadius:50,
        borderWidth:1,
        borderColor:'#e8e8e8',
        shadowColor: "#000",
        shadowOffset: {
	     width: 0,
	     height: 2,
                     },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
          elevation: 5,
          alignItems:'center',
         
          marginBottom:10,
          marginTop:15,
         flex:1,
         flexDirection: 'row',
         
         

         
          },
    Imagestyle:{
       justifyContent:'center',
       alignItems:'center',
       flex:'20%'
      
    },
  
    circleImage:{
        borderRadius:50,
        width: 60,
        height: 60,
   
    },
    textStyle:{
      flex:'30%',
      alignItems:'center',
      justifyContent:'center',
      
    },
    textFont:{
      fontSize: 15, fontWeight: '400'
    }

  
  });


