import {View, Text} from 'react-native';
import React from 'react';
import SwapableItem from './swipeAble';

const UpNext = () => {
  return (
    <View style={{paddingBottom: 20, marginTop: 20}}>
      <Text style={{fontSize: 14, color: '#666666', paddingHorizontal: 20}}>
        Up Next
      </Text>
      <SwapableItem url="../images/green-icon.png" />
      <SwapableItem url="../images/green-icon.png" />
      <SwapableItem url="../images/green-icon.png" />
    </View>
  );
};

export default UpNext;
