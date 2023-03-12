import { SelectList } from 'react-native-dropdown-select-list'
import React from 'react';
import {StyleSheet} from 'react-native';

export default function Drop_Down_List(){
  const [selected, setSelected] = React.useState("");
  
  const Children_Age = [
      {id:'1', value:'٧'},
      {id:'2', value:'٨'},
      {id:'3', value:'٩'},
      {id:'4', value:'١٠'},
      {id:'5', value:'١١'},
      {id:'6', value:'١٢'},
  ]
    return (
      <SelectList 
      setSelected={(val) => setSelected(val)} 
      data={Children_Age} 
      save="value"
      placeholder="اختر العمر"
      dropdownTextStyles= {{textAlign: 'right'}}
      labelStyles={{textAlign: 'right'}}
    
     
  />
    );
}
const styles = StyleSheet.create({

    
});