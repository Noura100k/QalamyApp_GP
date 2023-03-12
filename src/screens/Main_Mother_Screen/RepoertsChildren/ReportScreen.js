import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import ChildrenList from '../../../../Components/FlatListComponent';
export default function ReportScreen({ navigation }) {

    
    listOfReport=[
     {name: 'نورة',
      data:'4/11/2022',
       grade:'9/10' ,
       image:'https://www.nawa3em.com/big/child-1-02-09-2014.jpg',
       id:'1'},
       
     {name: 'محمد',
     data:'3/11/2022',
      grade:'7/10', 
      image:'https://www.mmlakaty.com/wp-content/uploads/2018/08/%D8%AA%D8%AD%D8%B6%D9%8A%D8%B1-%D8%A7%D9%84%D8%B7%D9%81%D9%84-%D9%84%D8%AF%D8%AE%D9%88%D9%84-%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-%D8%B5%D8%AD%D9%8A%D8%A7%D9%8B-%D9%88-%D9%86%D9%81%D8%B3%D9%8A%D8%A7%D9%8B.jpg',
      id:'2'}

    ]
    return (
        <View style={styles.container}>
            <ChildrenList list={listOfReport}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       flex:1,
       paddingTop:10,
       paddingHorizontal:10,
      
       

        
    },


    
  });
  
  