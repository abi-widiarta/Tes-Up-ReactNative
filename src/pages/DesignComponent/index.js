import React, {useState, useEffect, Component} from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Profile from '../../components/profile';
import PlusButton from '../../components/plusButton';
import UpNext from '../../components/upNext';
import AccordionView from '../../components/collapseCalendar';

const index = () => {
  return (
    <View style={{position: 'relative', flex: 1}}>
      <StatusBar backgroundColor={'#F9F9F9'} barStyle={'dark-content'} />
      <ScrollView style={styles.container}>
        <Profile />
        <AccordionView />
        <UpNext />
      </ScrollView>
      <PlusButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    // borderWidth: 1,
    position: 'relative',
  },
});

export default index;
