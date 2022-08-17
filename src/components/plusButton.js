import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const PlusButton = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        alert('Plus Button Pressed');
      }}
      style={{
        width: 54,
        height: 54,
        backgroundColor: '#FF844B',
        borderRadius: 50,
        position: 'absolute',
        right: 20,
        bottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{width: 25, height: 25}}
        source={require('../images/icon-plus.png')}
      />
    </TouchableOpacity>
  );
};

export default PlusButton;
