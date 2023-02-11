import React from 'react';
import { View, StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';


function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}
const DetailsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{
      flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EBEBFB', paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right,
    }}>
      <FocusAwareStatusBar barStyle='dark-content' backgroundColor="#EBEBFB" />

    </View>
  )
}

export default DetailsScreen;
