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

const App = () => {
  return (
    // <StateCounter />
    // <KomunikasiAntarKomponen />

    <View>
      <Text>Tes Get API</Text>
      <CallAPIGet />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    flexDirection: 'row',
  },
});

export default App;
