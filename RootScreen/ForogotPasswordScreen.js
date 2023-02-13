import React, { useState, Fragment } from 'react';
import { View, Button, StatusBar, Pressable, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
import { Input, Icon } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Appbar } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage'
import Octicons from 'react-native-vector-icons/Octicons'
import { useDispatch, useSelector } from 'react-redux';
import { setAuthLoader } from '../store/reducerSlicer'

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

const ForogotPasswordScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [value, setValue] = useState({
    email: ''
  })

  return (
    <Fragment>
      <Appbar.Header style={{ backgroundColor: '#EBEBFB' }}>
        <View style={{ backgroundColor: '#FFFFFF', marginLeft: 15, borderRadius: 5, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
        </View>
      </Appbar.Header>
      <View style={{
        flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EBEBFB', paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right,
      }}>
        <FocusAwareStatusBar translucent={false} barStyle='dark-content' backgroundColor="#EBEBFB" />
        <View style={{ width: 115, height: 115, backgroundColor: '#F5F5FC', justifyContent: "center", alignItems: 'center', borderRadius: 50 }}>
          <FontAwesome name={'user'} size={50} />
        </View>
        <Text style={{ color: '#000000', textTransform: 'uppercase', fontSize: 14, fontFamily: 'OpenSans-SemiBold', paddingTop: 20, paddingBottom: 20 }}>enter your credentials to continue</Text>

        <View style={{ paddingHorizontal: 15, width: '100%' }}>
          <View style={{ marginTop: 10, width: '100%', backgroundColor: '#E2E2FD', borderRadius: 5 }}>
            <Input keyboardType={'email-address'} value={value?.email} onChangeText={(Text) => setValue({ ...value, email: Text })} size="md" variant={'unstyled'} placeholder='Emial' />
          </View>

          <View style={{ paddingTop: 10, width: '100%' }}>
            <Button onPress={() => navigation.navigate('ForgotoOtpVerifyScreen')} color="#7171F3" title='Send OTP' />
          </View>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
          <Text style={{ color: '#000000', fontSize: 14, fontFamily: 'OpenSans-Regular' }}>Remember Password?</Text>
          <Pressable onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
            <Text style={{ color: 'blue', fontSize: 14, fontFamily: 'OpenSans-SemiBold' }}>LOGIN</Text>
          </Pressable>
        </View>
      </View>
    </Fragment>
  )
}

export default ForogotPasswordScreen