
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNSecureStorage from 'rn-secure-storage'
import { useDispatch } from 'react-redux';
import { setAuthLoader } from '../store/reducerSlicer'

const DrawerContent = (props) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(setAuthLoader(true))
    RNSecureStorage.remove("isAuth")
      .then((val) => {
      }).catch((err) => {
      });
  };


  return (
    <View style={{ flex: 1, backgroundColor: '#EBEBFB', }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flex: 1, paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Sign Out"
          onPress={() => onLogout()}
        />
      </View>

    </View>
  )
}

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});