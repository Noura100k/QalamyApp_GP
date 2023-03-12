import {StyleSheet, View} from 'react-native';
import React ,{useState}from "react";
import RadioGroup from 'react-native-radio-buttons-group';

export default function Radio_button(){
    const [radioButtons, setRadioButtons] = useState([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'ذكر',
        },
        {
            id: '2',
            label: 'أنثى',
        }
    ]);
    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }
    return (
      
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
            containerStyle={{flexDirection:'row-reverse'}}
        />
    

    );
}
