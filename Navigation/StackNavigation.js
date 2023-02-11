import React, { Fragment } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { UserScreen, UserPostScreen } from '../StackScreen';
import ButtomNavigation from './ButtomNavigation';
import { forSlideAnimate, configAnimate } from './NavigationAnimate';

const Stack = createStackNavigator();
const StackNavigation = () => {

  return (
    <Fragment>
      <Stack.Navigator screenOptions={{ headerShown: false, transitionSpec: { open: configAnimate, close: configAnimate }, cardStyleInterpolator: forSlideAnimate, /* presentation: 'modal', headerShown: false, gestureDirection: 'horizontal', cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, gestureEnabled: false, */ }}>
        <Stack.Screen name='ButtomNavigation' component={ButtomNavigation} />
        <Stack.Screen name='UserScreen' component={UserScreen} />
        <Stack.Screen name='UserPostScreen' component={UserPostScreen} />
      </Stack.Navigator>
    </Fragment>
  )
}

export default StackNavigation