import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function ComponentNavBar({Name,initialName,icon,icon_outline,ScreenPath})
{
    //Screen names
const ButtonName = Name;

const Tab = createBottomTabNavigator();

  return(
    
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName={initialName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          iconName = focused ? {icon} : {icon_outline};
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

      <Tab.Screen name={ButtonName} component={ScreenPath} />
      

    </Tab.Navigator>
  </NavigationContainer>

    );
}