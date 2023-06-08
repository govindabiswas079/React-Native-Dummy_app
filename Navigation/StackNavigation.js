import React, { Fragment } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { UserScreen, UserPostScreen, AgendaScreen, CalendarListScreen, TimelineCalendarScreen, MaterialTimePicker, MaterialDatePicker, MaterialDateRangePicker, RNCalender, CustomeDatePicker } from '../StackScreen';
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

        <Stack.Screen name='AgendaScreen' component={AgendaScreen} />
        <Stack.Screen name='CalendarListScreen' component={CalendarListScreen} />
        <Stack.Screen name='TimelineCalendarScreen' component={TimelineCalendarScreen} />
        <Stack.Screen name='MaterialTimePicker' component={MaterialTimePicker} />
        <Stack.Screen name='MaterialDatePicker' component={MaterialDatePicker} />
        <Stack.Screen name='MaterialDateRangePicker' component={MaterialDateRangePicker} />
        <Stack.Screen name='RNCalender' component={RNCalender} />
        <Stack.Screen name='CustomeDatePicker' component={CustomeDatePicker} />
      </Stack.Navigator>
    </Fragment>
  )
}

export default StackNavigation