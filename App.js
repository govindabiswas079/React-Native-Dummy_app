import { useEffect } from 'react'
import { SafeAreaProvider, } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { ActivityIndicator, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { store } from './store';
import CombineRoute from './CombineRoute';
import deepLinking from './deepLinking';
import { StatusBar } from 'react-native';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])


  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer linking={deepLinking} fallback={
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EBEBFB', }}>
            <StatusBar translucent={false} barStyle={'dark-content'} backgroundColor="#EBEBFB" />
            <ActivityIndicator size={'large'} color={'#F25555'} />
          </View>
        }>
          <CombineRoute />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App;