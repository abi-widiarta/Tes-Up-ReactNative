import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';

const Image = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{width: 400, height: 200, borderRadius: 20}}
          source={require('./src/images/img-offline.jpg')}
          resizeMode={'cover'}
        />
      </View>
      <View
        style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1659952586072-b3cebadec6d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
          }}
          style={{width: 400, height: 200, borderRadius: 20}}
        />
      </View>
      <View
        style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=961&q=80',
          }}
          style={{width: 400, height: 200, borderRadius: 20}}
        />
      </View>
      <View
        style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=961&q=80',
          }}
          style={{width: 400, height: 200, borderRadius: 20}}
        />
      </View>
    </View>
  );
};

export default Image;
