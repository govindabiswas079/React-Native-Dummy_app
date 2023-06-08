import React, { Fragment } from 'react';
import { View, StatusBar, ScrollView, Button } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Appbar } from 'react-native-paper';
import { Pressable } from 'react-native';
import { useDispatch } from 'react-redux'
import { setIsTabHide } from '../store/reducerSlicer';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}
const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  let dispatch = useDispatch();

  var scroll = 0;
  const onScroll = (e) => {
    let contentOffsetY = e.nativeEvent.contentOffset.y;
    let diff = contentOffsetY - scroll;
    if (diff < 0) {
      dispatch(setIsTabHide(true));
    } else {
      dispatch(setIsTabHide(false))
    }
    scroll = contentOffsetY;
  };

  return (
    <Fragment>

      <View style={{
        flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EBEBFB', paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right,
      }}>
        <FocusAwareStatusBar translucent={false} barStyle='dark-content' backgroundColor="#EBEBFB" />
        <View style={{ backgroundColor: '#EBEBFB', }}>
          <ScrollView onScroll={(e) => onScroll(e)} showsVerticalScrollIndicator={false}>
            <Appbar style={{ backgroundColor: '#EBEBFB' }}>
              <View style={{ paddingHorizontal: 10, flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
                <Pressable onPress={() => navigation.openDrawer()} style={{ justifyContent: 'space-evenly', alignItems: 'center', width: 35, height: 35, elevation: 3, backgroundColor: '#FFFFFF', borderRadius: 10 }}>
                  <Feather name='menu' size={17} color={'#000000'} />
                </Pressable>
                <View style={{ flexGrow: 1 }} />
                <Pressable style={{ justifyContent: 'space-evenly', alignItems: 'center', width: 35, height: 35, elevation: 3, backgroundColor: '#FFFFFF', borderRadius: 10 }}>
                  <Feather name='search' size={17} color={'#000000'} />
                </Pressable>
                <View style={{ flexGrow: .01 }} />
                <Pressable onPress={() => navigation.navigate('AccountScreen')} style={{ justifyContent: 'space-evenly', alignItems: 'center', width: 35, height: 35, elevation: 3, backgroundColor: '#FFFFFF', borderRadius: 10 }}>
                  <FontAwesome name='user-o' size={17} color={'#000000'} />
                </Pressable>
              </View>
            </Appbar>

            <Button title='Timeline Flatlist' onPress={() => navigation.navigate('UserScreen')} />
            <Button title='React Native Calender' onPress={() => navigation.navigate('UserPostScreen')} />

          </ScrollView>
        </View>
      </View>
    </Fragment >
  )
}

export default HomeScreen;