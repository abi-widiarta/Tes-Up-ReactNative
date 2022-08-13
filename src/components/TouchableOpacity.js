import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Header from './Header';

const TouchableOpacity = () => {
  return (
    <View>
      <Header title={'HeheBoy'} subtitle={'Just a regular boy'} />
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          paddingVertical: 20,
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 16,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '900',
            color: 'white',
            letterSpacing: 2,
          }}>
          Beli
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TouchableOpacity;
