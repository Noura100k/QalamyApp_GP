import * as React from 'react';
import {View,Text, TextInput,StyleSheet,Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';



// Screens
import ProfileScreen from './MyProfileScreen/Myprofile';
import MychildrenScreen from './MychildrenScreen/Mychildren';
import ReportScreen from './RepoertsChildren/ReportScreen';





export default function ComponentNavBar()
{
    //Screen names
const MyProfileName = "حسابي";
const MychildrenName = "أطفالي";
const ReportsName = "التقارير";
const Tab = createBottomTabNavigator();


  return(
    
    <NavigationContainer >
    <Tab.Navigator
      initialRouteName={MychildrenName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === MyProfileName) {
            iconName = focused ? 'person' : 'person-outline';

          } else if (rn === MychildrenName) {
            iconName = focused ? 'people' : 'people-outline';

          } else if (rn === ReportsName) {
            iconName = focused ? 'analytics' : 'analytics-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70}
      }}>

      <Tab.Screen name={MyProfileName} component={ProfileScreen} />
      <Tab.Screen name={MychildrenName} component={MychildrenScreen} />
      <Tab.Screen name={ReportsName} component={ReportScreen} />

    </Tab.Navigator>
  </NavigationContainer>

    );
}