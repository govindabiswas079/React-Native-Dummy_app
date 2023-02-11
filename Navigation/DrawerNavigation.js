import React, { Fragment } from 'react';
import { createDrawerNavigator,  } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StackNavigation from './StackNavigation';
import { ManageScreen, SettingScreen } from '../DrawerScreen';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {

  return (
    <Fragment>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        initialRouteName="Root"
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#aa18ea',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            // marginLeft: -25,
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={StackNavigation}
          options={{
            headerShown: false,
            drawerIcon: ({ color }) => (
              <Entypo name="home" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Manage"
          component={ManageScreen}
          options={{
            headerShown: false,
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            headerShown: false,
            drawerIcon: ({ color }) => (
              <MaterialIcons name="settings-input-composite" size={22} color={color} />
            ),
          }}
        />

      </Drawer.Navigator>
    </Fragment>
  )
}

export default DrawerNavigation