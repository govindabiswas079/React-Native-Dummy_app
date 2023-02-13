import React, { useState, Fragment } from 'react';
import { View, Button, StatusBar, Pressable, Text, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useSelector } from 'react-redux';
import OtpInputs from 'react-native-otp-inputs';
import { Appbar } from 'react-native-paper';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

const ForgotoOtpVerifyScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const { RegisterData } = useSelector(state => state?.reducerSlicer);
  const [value, setValue] = useState({ OTP: '' });

  const onSubmit = () => {
    navigation.push('ResetPasswordScreen')
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
          <Text style={{ color: '#000000', textTransform: 'uppercase', fontSize: 16, fontFamily: 'OpenSans-Bold', paddingTop: 20 }}>enter your</Text>
          <Text style={{ color: '#000000', textTransform: 'uppercase', fontSize: 16, fontFamily: 'OpenSans-Bold', }}>Verification code</Text>
          <Text style={{ color: '#000000', textTransform: 'uppercase', fontSize: 14, fontFamily: 'OpenSans-Regular', paddingTop: 20 }}>We sent a verification code</Text>
          <Text style={{ color: '#000000', textTransform: 'uppercase', fontSize: 14, fontFamily: 'OpenSans-Regular', paddingBottom: 20 }}>to +91 prem@gmail.com</Text>

          <View style={{ paddingHorizontal: 15, width: '100%' }}>

            <View>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                <OtpInputs
                  handleChange={(OTP) => setValue({ ...value, OTP: OTP })}
                  numberOfInputs={4}
                  placeholder={'0'}
                  inputStyles={{ backgroundColor: '#FFFFFF', margin: 5, width: 45, height: 45, textAlign: 'center', borderRadius: 5, color: '#252F40', fontSize: 16, fontFamily: 'OpenSans-SemiBold', borderBottomColor: '#7171F3', borderBottomWidth: 1 }}
                  style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}
                />
              </View>
            </View>

            <View style={{ paddingTop: 40, width: '100%' }}>
              <Button onPress={() => onSubmit()} color="#7171F3" title='Verify' />
            </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
            <Pressable onPress={() => { }} style={{ marginLeft: 10 }}>
              <Text style={{ color: 'blue', fontSize: 14, fontFamily: 'OpenSans-SemiBold' }}>Re-Send</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  )
}

export default ForgotoOtpVerifyScreen