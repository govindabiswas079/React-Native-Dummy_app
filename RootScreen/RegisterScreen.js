import React, { Fragment, useState } from 'react';
import { View, Button, StatusBar, Pressable, Text, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
import { Input, Icon } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import { useDispatch } from 'react-redux';
import { Appbar } from 'react-native-paper';
import { setRegisterData } from '../store/reducerSlicer'

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

const RegisterScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({
    name: 'Prem Biswas',
    mobile: '9078563412',
    email: 'prembiswas@gmail.com',
    password: 'Prem_2@@1'
  });

  const onSubmit = () => {
    dispatch(setRegisterData(value));
    navigation.navigate('OtpVerifyScreen')
  }

  return (
    <Fragment>
      <Appbar.Header style={{ backgroundColor: '#EBEBFB' }}>
        <View style={{ backgroundColor: '#FFFFFF', marginLeft: 15, borderRadius: 5, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
        </View>
      </Appbar.Header>
      <ScrollView showsVerticalScrollIndicator={false} justifyContent={'center'} style={{ backgroundColor: '#EBEBFB', }}>
        <View style={{
          flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EBEBFB', paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right,
        }}>

          <FocusAwareStatusBar translucent={false} barStyle='dark-content' backgroundColor="#EBEBFB" />

          <View style={{ width: 115, height: 115, backgroundColor: '#F5F5FC', justifyContent: "center", alignItems: 'center', borderRadius: 50 }}>
            <FontAwesome name={'user'} size={50} />
          </View>
          <Text style={{ color: '#000000', textTransform: 'uppercase', fontSize: 14, fontFamily: 'OpenSans-SemiBold', paddingTop: 20, paddingBottom: 20 }}>enter your credentials to connect Register</Text>

          <View style={{ paddingHorizontal: 15, width: '100%' }}>
            <View style={{ marginTop: 10, width: '100%', backgroundColor: '#E2E2FD', borderRadius: 5 }}>
              <Input keyboardType={'default'} value={value?.name} onChangeText={(Text) => setValue({ ...value, name: Text })} size="md" variant={'unstyled'} placeholder='Name' InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} />
            </View>
            <View style={{ marginTop: 10, width: '100%', backgroundColor: '#E2E2FD', borderRadius: 5 }}>
              <Input keyboardType={'number-pad'} maxLength={10} value={value?.mobile} onChangeText={(Text) => setValue({ ...value, mobile: Text })} size="md" variant={'unstyled'} placeholder='Mobile' InputLeftElement={<Icon as={<MaterialCommunityIcons name="email-open" />} size={5} ml="2" color="muted.400" />} />
            </View>
            <View style={{ marginTop: 10, width: '100%', backgroundColor: '#E2E2FD', borderRadius: 5 }}>
              <Input keyboardType={'email-address'} value={value?.email} onChangeText={(Text) => setValue({ ...value, email: Text })} size="md" variant={'unstyled'} placeholder='Emial' InputLeftElement={<Icon as={<Octicons name="device-mobile" />} size={5} ml="2" color="muted.400" />} />
            </View>
            <View style={{ marginTop: 10, width: '100%', backgroundColor: '#E2E2FD', borderRadius: 5 }}>
              <Input value={value?.password} onChangeText={(Text) => setValue({ ...value, password: Text })} size="md" type={show ? "text" : "password"} variant={'unstyled'} placeholder='Password' InputLeftElement={<Icon as={<FontAwesome name="lock" />} size={5} ml="2" color="muted.400" />} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
              </Pressable>} />
            </View>

            <View style={{ paddingTop: 10, width: '100%' }}>
              <Button onPress={() => onSubmit()} color="#7171F3" title='Register' />
            </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
            <Text style={{ color: '#000000', fontSize: 14, fontFamily: 'OpenSans-Regular' }}>Alrady Register Yet?</Text>
            <Pressable onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
              <Text style={{ color: 'blue', fontSize: 14, fontFamily: 'OpenSans-SemiBold' }}>LOGIN</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  )
}

export default RegisterScreen