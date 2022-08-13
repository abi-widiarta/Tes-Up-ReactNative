import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableOpacityBase,
} from 'react-native';
import React from 'react';

const index = props => {
  return (
    <TouchableOpacity style={styles.storyContainer}>
      <Image source={{uri: props.url}} style={styles.storyImage} />
      <Text style={styles.storyText}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  storyContainer: {
    marginHorizontal: 15,
    alignItems: 'center',
  },
  storyImage: {
    borderRadius: 50,
    width: 70,
    height: 70,
    borderWidth: 2,
    padding: 20,
    borderColor: 'grey',
  },
  storyText: {
    textAlign: 'center',
    maxWidth: 50,
  },
});
