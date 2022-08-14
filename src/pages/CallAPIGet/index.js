import {Button, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';

const index = () => {
  let emptyObj = {
    avatar: '',
    email: '',
    id: '',
    first_name: '',
    last_name: '',
  };

  const [profile, setProfile] = useState(emptyObj);

  // useEffect(() => {
  //   fetch('https://reqres.in/api/users/2')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json);
  //       setProfile(json.data);
  //     });
  // }, []);

  // Call API Method GET
  const getData = () => {
    fetch('https://reqres.in/api/users/6')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setProfile(json.data);
      });
  };

  const postData = () => {
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      body: JSON.stringify({
        name: 'morpheus',
        job: 'leader',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => console.log(json));
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
