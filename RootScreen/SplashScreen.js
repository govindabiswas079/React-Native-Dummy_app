import React, { Fragment, useEffect } from 'react';
import { Image, Text, View, StatusBar, Dimensions, TouchableOpacity, ActivityIndicator } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useIsFocused } from '@react-navigation/native';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

const SplashScreen = ({ navigation }) => {

  const onDone = () => {
    navigation.navigate('LoginScreen')
  };
  const onSkip = () => {
    navigation.navigate('LoginScreen')
  }

  return (
    <Fragment>
      <FocusAwareStatusBar translucent={false} barStyle={'dark-content'} backgroundColor="#e6e6e6" />
      <AppIntroSlider
        keyExtractor={(item) => item.key}
        renderItem={RenderItem}
        data={slides}
        activeDotStyle={{ backgroundColor: "#13e8cf", width: 25, height: 9, position: 'relative', top: -25 }}
        dotStyle={{ backgroundColor: 'gray', position: 'relative', top: -25 }}
        renderDoneButton={DoneButton}
        renderNextButton={NextButton}
        renderSkipButton={SkipButton}
        renderPrevButton={BackButton}
        showNextButton={true}
        showDoneButton={true}
        showSkipButton={false}
        showPrevButton={true}
        onDone={() => onDone()}
        onSkip={() => onSkip()}
      />

      <TouchableOpacity onPress={onSkip} style={{ left: 15, top: 30, height: 40, alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
        <Text style={{ color: '#000000', textTransform: 'uppercase', fontSize: 14 }}>Skip this</Text>
      </TouchableOpacity>
    </Fragment>
  )
}

export default SplashScreen;




const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: 'https://royoapps.com/wp-content/themes/luxury-wp/media/2022/11/food-banner-img.webp?var=1267667568',
    backgroundColor: '#e6e6e6',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Description.\nSay something cool',
    image: 'https://royoapps.com/wp-content/themes/luxury-wp/media/2022/11/food-banner-img.webp?var=1267667568',
    backgroundColor: '#e6e6e6',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'Description.\nSay something cool',
    image: 'https://royoapps.com/wp-content/themes/luxury-wp/media/2022/11/food-banner-img.webp?var=1267667568',
    backgroundColor: '#e6e6e6',
  }
];

const RenderItem = ({ item }) => {
  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: item.backgroundColor }}>

        <View style={{ height: 300, width: 300, }}>
          <Image
            source={{ uri: item.image }}
            style={{ resizeMode: 'contain', height: "100%", width: "100%", }}
          />
        </View>
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 26,
            fontWeight: "bold",
            color: "#000000",
            alignSelf: "center",
          }}
        >
          {item.title}
        </Text>

        <Text style={{
          textAlign: "center",
          color: "#000000",
          fontSize: 10,
          paddingHorizontal: 30
        }}>
          {item.text}
        </Text>
      </View>
    </>
  );
};


const DoneButton = () => {
  return (
    <>
      <View style={{ width: 70, borderRadius: 2, paddingTop: 2, paddingBottom: 2, }}>
        <Text style={{ color: '#000000', textAlign: 'center', textTransform: 'uppercase', fontSize: 14 }}>Start</Text>
      </View>
    </>
  )
}
const NextButton = () => {
  return (
    <>
      <View style={{ width: 70, borderRadius: 2, paddingTop: 2, paddingBottom: 2, }}>
        <Text style={{ color: '#000000', textAlign: 'center', textTransform: 'uppercase', fontSize: 14 }}>Next</Text>
      </View>
    </>
  )
}
const SkipButton = () => {
  const topPostion = Dimensions.get('screen').height - 165;

  return (
    <>
      <View style={{ backgroundColor: "red", /* top: -topPostion, right: 0 */ }}>
        <Text style={{ color: '#000000', textTransform: 'uppercase', fontSize: 14 }}>Skip this</Text>
      </View>
    </>
  )
}
const BackButton = () => {
  return (
    <>
      <View /* style={{ position: 'absolute', top: -20, left: 0 }} */>
        <Text style={{ color: '#000000', textTransform: 'uppercase', fontSize: 14 }}>Prev</Text>
      </View>
    </>
  )
}