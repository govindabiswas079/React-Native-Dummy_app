import React, { Fragment } from 'react';
import { ActivityIndicator, View, StatusBar } from 'react-native';

const Loader = () => (

    < Fragment >
        <View style={{ flex: 1, backgroundColor: '#EBEBFD', justifyContent: "center", alignItems: 'center' }}>
            <StatusBar translucent={false} barStyle={'dark-content'} backgroundColor="#EBEBFD" />
            <ActivityIndicator size={'large'} color={'#6CCF7F'} />
        </View>

        {/* 
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
    </View>
        */}
    </Fragment >
);

export default Loader;
