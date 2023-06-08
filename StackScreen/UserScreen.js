import React, { Fragment } from 'react';
import { View, Text, Button, StatusBar, Dimensions } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Timeline from 'react-native-timeline-flatlist'
import { useSafeAreaInsets, } from 'react-native-safe-area-context';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

const UserScreen = () => {
  const insets = useSafeAreaInsets();

  const data = [
    {
      time: '09:00',
      title: 'Archery Training',
      description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
      circleColor: '#009688',
      lineColor: '#009688',
      circleSize: 20,
      innerCircle: 'dot',
    },
    {
      time: '10:45',
      title: 'Play Badminton',
      description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
      circleColor: 'red',
      lineColor: '#009688',
      circleSize: 20,
    },
  ]
  return (
    <View style={{
      flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EBEBFB', paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right,
    }}>
      <FocusAwareStatusBar barStyle='dark-content' backgroundColor="#EBEBFB" />

      <Timeline
        style={{ width: '100%', backgroundColor: '#EBEBFB', paddingHorizontal: 15 }}
        data={data}
        showTime={true}
        isUsingFlatlist={true}
        renderTime={() => {
          <Fragment>
            <Text>10:45</Text>
          </Fragment>
        }}
        renderDetail={() => {
          <Fragment>
            <Text>10:45</Text>
          </Fragment>
        }}
      />

    </View>
  )
}

export default UserScreen