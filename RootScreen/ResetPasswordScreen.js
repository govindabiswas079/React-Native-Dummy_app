import React, { Fragment, useState } from 'react';
import { View, Button, StatusBar, Pressable, Text, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
import { Input, Icon } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage'
import { useDispatch, useSelector } from 'react-redux';
import { Appbar } from 'react-native-paper';
import { setAuthLoader } from '../store/reducerSlicer'

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

const ResetPasswordScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)

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
        <Text style={{ color: '#000000', textTransform: 'uppercase', fontSize: 14, fontFamily: 'OpenSans-SemiBold', paddingTop: 20, paddingBottom: 20 }}>enter your credentials to log in</Text>


        <View style={{ paddingHorizontal: 15, width: '100%' }}>
          <View style={{ marginTop: 10, width: '100%', backgroundColor: '#E2E2FD', borderRadius: 5 }}>
            <Input value={'Prem_2@@1'} size="md" type={show ? "text" : "password"} variant={'unstyled'} placeholder='Password' InputLeftElement={<Icon as={<FontAwesome name="lock" />} size={5} ml="2" color="muted.400" />} InputRightElement={<Pressable onPress={() => setShow(!show)}>
              <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} />
          </View>
          <View style={{ marginTop: 10, width: '100%', backgroundColor: '#E2E2FD', borderRadius: 5 }}>
            <Input value={'Prem_2@@1'} size="md" type={show2 ? "text" : "password"} variant={'unstyled'} placeholder='Password' InputLeftElement={<Icon as={<FontAwesome name="lock" />} size={5} ml="2" color="muted.400" />} InputRightElement={<Pressable onPress={() => setShow2(!show2)}>
              <Icon as={<MaterialIcons name={show2 ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} />
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingTop: 10, paddingBottom: 15 }}>
            <Pressable onPress={() => navigation.navigate('ForogotPasswordScreen')} style={{ marginLeft: 10 }}>
              <Text style={{ color: '#000000', fontSize: 14, fontFamily: 'OpenSans-SemiBold' }}>Forgot Password</Text>
            </Pressable>
          </View>

          <View style={{ paddingTop: 10, width: '100%' }}>
            <Button onPress={() => navigation.navigate('LoginScreen')} title='Reset Password' />
          </View>
        </View>

      </View>
    </Fragment>
  )
}

export default ResetPasswordScreen