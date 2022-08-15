import {Button, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
const axios = require('axios').default;

const index = () => {
  let emptyObj = {
    avatar: '',
    email: '',
    id: '',
    first_name: '',
    last_name: '',
  };

  const [profile, setProfile] = useState(emptyObj);

  // Call API Method GET dengan Axios
  const getData = () => {
    axios
      .get('https://reqres.in/api/users/6')
      .then(json => setProfile(json.data.data))
      .catch(err => console.log(`err : ${err}`));
  };

  // API Method POST dengan Axios
  const postData = () => {
    const dataPost = {
      name: 'morpheus',
      job: 'leader',
    };
    axios
      .post('https://reqres.in/api/users', dataPost)
      .then(response => console.log(response));
  };
  return (
    <View style={styles.wrapper}>
      {profile.avatar.length > 0 && (
        <Image source={{uri: profile.avatar}} style={styles.avatar} />
      )}
      <Text>{profile.first_name}</Text>
      <Text>{profile.last_name}</Text>
      <Text>{profile.email}</Text>
      <Button title="GET DATA" onPress={getData} />
      <Button
        title="REVERT"
        onPress={() => {
          setProfile(emptyObj);
        }}
      />
      <Button title="POST DATA" onPress={postData} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    padding: 10,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  button: {
    marginTop: 10,
  },
});
