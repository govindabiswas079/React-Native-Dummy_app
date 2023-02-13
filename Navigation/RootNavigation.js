import React, { Fragment } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { NativeBaseProvider, } from "native-base";
import { SplashScreen, LoginScreen, RegisterScreen, OtpVerifyScreen, ForogotPasswordScreen, ForgotoOtpVerifyScreen, ResetPasswordScreen } from '../RootScreen';
import { forSlideAnimate, configAnimate } from './NavigationAnimate';

const Stack = createStackNavigator();
const RootNavigation = () => {
  return (
    <Fragment>
      <NativeBaseProvider>
        <Stack.Navigator screenOptions={{ headerShown: false, transitionSpec: { open: configAnimate, close: configAnimate }, cardStyleInterpolator: forSlideAnimate, /* presentation: 'modal', headerShown: false, gestureDirection: 'horizontal', cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, gestureEnabled: false, */ }}>
          <Stack.Screen name='SplashScreen' component={SplashScreen} />
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
          <Stack.Screen name='OtpVerifyScreen' component={OtpVerifyScreen} />
          <Stack.Screen name='ForogotPasswordScreen' component={ForogotPasswordScreen} />
          <Stack.Screen name='ForgotoOtpVerifyScreen' component={ForgotoOtpVerifyScreen} />
          <Stack.Screen name='ResetPasswordScreen' component={ResetPasswordScreen} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </Fragment>
  )
}

export default RootNavigation




