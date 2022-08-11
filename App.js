import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity
        style={styles.ImageContainer}
        onPress={() => {
          console.log('gambar ditekan boy');
        }}>
        <Image
          style={[styles.ImageStyles, styles.ImageStyles2]}
          source={require('./src/images/img-offline.jpg')}
          resizeMode={'cover'}
        />
      </TouchableOpacity>
      <View style={styles.ImageContainer}>
        <Image
          style={[styles.ImageStyles, {borderRadius: 100}]}
          source={require('./src/images/img-offline.jpg')}
          resizeMode={'cover'}
        />
      </View>
      <View
        style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={styles.ImageStyles}
          source={require('./src/images/img-offline.jpg')}
          resizeMode={'cover'}
        />
      </View>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.ImageStyles}
          source={require('./src/images/img-offline.jpg')}
          resizeMode={'cover'}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ImageContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageStyles: {
    width: 400,
    height: 200,
    borderRadius: 20,
  },
  ImageStyles2: {
    borderRadius: 50,
  },
});

export default App;
