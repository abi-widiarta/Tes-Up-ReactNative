import React, {useState, useEffect, Component} from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import Profile from '../../components/profile';
import PlusButton from '../../components/plusButton';
import UpNext from '../../components/upNext';
import Completed from '../../components/completed';
import AccordionView from '../../components/collapseCalendar';
import {withTheme} from '@rneui/themed';

const BottomNavigation = () => {
  return (
    <View style={{backgroundColor: '#F9F9F9', position: 'relative'}}>
      <View
        style={{
          height: 70,
          backgroundColor: 'white',
          elevation: 10,
          position: 'relative',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          flexDirection: 'row',
          overflow: 'hidden',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 28, height: 28}}
            source={require('../../images/icon-home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../../images/icon-finance.png')}
          />
        </TouchableOpacity>
      </View>
      <PlusButton />
    </View>
  );
};

const index = () => {
  return (
    <View style={{position: 'relative', flex: 1}}>
      <StatusBar backgroundColor={'#F9F9F9'} barStyle={'dark-content'} />
      <ScrollView style={styles.container}>
        <Profile />
        <AccordionView />
        <UpNext />
        <Completed />
      </ScrollView>

      <BottomNavigation />
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
