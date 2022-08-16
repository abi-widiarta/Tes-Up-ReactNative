import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Cart from './src/components/Cart';
import StateCounter from './src/pages/StateCounter';
import KomunikasiAntarKomponen from './src/pages/KomunikasiAntarKomponen';
import CallAPIGet from './src/pages/CallAPIGet';
import CallAPIAxios from './src/pages/CallAPIAxios';
import LocalAPI from './src/pages/LocalAPI';
import DesignComponent from './src/pages/DesignComponent';

const App = () => {
  return (
    // <StateCounter />
    // <KomunikasiAntarKomponen />

    // <View>
    //   {/* <CallAPIGet /> */}
    // </View>
    // <CallAPIAxios />
    // <LocalAPI />
    <DesignComponent />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    flexDirection: 'row',
  },
});

export default App;
