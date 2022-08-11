import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';

const Header = ({title, subtitle}) => {
  return (
    <View style={{backgroundColor: 'blue'}}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}>
        <StatusBar backgroundColor={'blue'} />
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          {title}
        </Text>
        <Text style={{color: 'white', fontSize: 18}}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default Header;
