import React, { Fragment } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
import { StatusBar, View, } from 'react-native';


function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

const AccountScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <Fragment>
      <FocusAwareStatusBar translucent={false} barStyle={'dark-content'} backgroundColor="#EBEBFB" />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EBEBFB', /* paddingTop: insets.top, */ paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right, }}>

      </View >
    </Fragment >
  )
}

export default AccountScreen;