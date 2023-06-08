import React, { useState } from 'react';
import { View, Button, StatusBar, Pressable, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
import { Input, Icon } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage'
import { useDispatch, useSelector } from 'react-redux';
import { setAuthLoader } from '../store/reducerSlicer'

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

const LoginScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const { RegisterData } = useSelector(state => state?.reducerSlicer);
  const [show, setShow] = useState(false)

  const onLogin = () => {
    dispatch(setAuthLoader(true))
    RNSecureStorage.set("isAuth", JSON.stringify({ RegisterData }), { accessible: ACCESSIBLE.WHEN_UNLOCKED })
      .then((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
  };

  return (
    <View style={{
      flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EBEBFB', paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right,
    }}>
      <FocusAwareStatusBar translucent={false} barStyle='dark-content' backgroundColor="#EBEBFB" />

      <View style={{ width: 115, height: 115, backgroundColor: '#F5F5FC', justifyContent: "center", alignItems: 'center', borderRadius: 50 }}>
        <FontAwesome name={'user'} size={50} />
      </View>
      <Text style={{ color: '#000000', textTransform: 'uppercase', fontSize: 14, fontFamily: 'OpenSans-SemiBold', paddingTop: 20, paddingBottom: 20 }}>enter your credentials to log in</Text>

      <View style={{ paddingHorizontal: 15, width: '100%' }}>
        <View style={{ marginTop: 10, width: '100%', backgroundColor: '#E2E2FD', borderRadius: 5 }}>
          <Input keyboardType={'email-address'} autoCapitalize={'none'} variant={'unstyled'} placeholder='Emial' InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} />
        </View>
        <View style={{ marginTop: 10, width: '100%', backgroundColor: '#E2E2FD', borderRadius: 5 }}>
          <Input autoCapitalize={'none'} type={show ? "text" : "password"} variant={'unstyled'} placeholder='Password' InputLeftElement={<Icon as={<FontAwesome name="lock" />} size={5} ml="2" color="muted.400" />} InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
          </Pressable>} />
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingTop: 10, paddingBottom: 15 }}>
          <Pressable onPress={() => navigation.navigate('ForogotPasswordScreen')} style={{ marginLeft: 10 }}>
            <Text style={{ color: '#000000', fontSize: 14, fontFamily: 'OpenSans-SemiBold' }}>Forgot Password</Text>
          </Pressable>
        </View>

        <View style={{ paddingTop: 10, width: '100%' }}>
          <Button onPress={onLogin} title='Login' />
        </View>
        <View style={{ paddingTop: 10, width: '100%' }}>
          <FontAwesome.Button name="facebook" backgroundColor="#3b5998">
            <Text style={{ fontFamily: 'OpenSans-SemiBold', fontSize: 15, color: '#ffffff' }}>
              Login with Facebook
            </Text>
          </FontAwesome.Button>
        </View>
        <View style={{ paddingTop: 10, width: '100%' }}>
          <FontAwesome.Button name="google" backgroundColor="#F25555">
            <Text style={{ fontFamily: 'OpenSans-SemiBold', fontSize: 15, color: '#ffffff' }}>
              Login with Google
            </Text>
          </FontAwesome.Button>
        </View>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
        <Text style={{ color: '#000000', fontSize: 14, fontFamily: 'OpenSans-Regular' }}>Not Register Yet?</Text>
        <Pressable onPress={() => navigation.navigate('RegisterScreen')} style={{ marginLeft: 10 }}>
          <Text style={{ color: 'blue', fontSize: 14, fontFamily: 'OpenSans-SemiBold' }}>REGISTER</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default LoginScreen