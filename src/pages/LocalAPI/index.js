import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

const axios = require('axios').default;

const Profile = () => {
  return (
    <View style={styles.profileWrapper}>
      <Image
        source={{
          uri: 'https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-19/294536673_146807297950310_1033072475142311163_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=NIfgOIJm4oAAX998G1C&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9sIp6U87pl8PKQJ8LwdNfIYB2MLydOR2xTFORrjIVqGA&oe=62FFC8D7&_nc_sid=8fd12b',
        }}
        style={styles.descImage}
      />
      <View style={styles.descText}>
        <Text style={styles.descName}>Nama</Text>
        <Text>Email</Text>
        <Text>Bidang</Text>
      </View>
      <Text style={styles.descDelete}>X</Text>
    </View>
  );
};

const Form = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');

  const submitData = () => {
    const data = {
      nama,
      email,
      bidang,
    };

    const data2 = {
      name: 'morpheus',
      job: 'leader',
    };
    console.log('data before post : ', data);

    // axios
    //   .post('https://reqres.in/api/users', {
    //     name: 'hehe',
    //     job: 'fe',
    //   })
    //   .then(response => console.log(response));

    axios.post('http://192.168.1.11:3000/users', data).then(res => {
      console.log(res);
    });

    setNama('');
    setEmail('');
    setBidang('');
  };

  return (
    <View>
      <Text>Masukkan Anggota :</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Nama Lengkap"
        value={nama}
        onChangeText={value => {
          setNama(value);
        }}></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={value => {
          setEmail(value);
        }}></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="Bidang"
        value={bidang}
        onChangeText={value => {
          setBidang(value);
        }}></TextInput>
      <Button title="SUBMIT" onPress={submitData} />
    </View>
  );
};

const index = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <Text style={styles.title}>Local API (JSON Server)</Text>
      <Form />
      <View style={styles.line}></View>
      <Profile />
      <Profile />
      <Profile />
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 6,
  },
  line: {
    marginTop: 10,
    borderWidth: 1,
  },

  profileWrapper: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },

  descImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
  },

  descName: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  descText: {
    // borderWidth: 1,
    flex: 1,
  },

  descDelete: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});
