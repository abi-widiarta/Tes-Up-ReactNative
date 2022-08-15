import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const axios = require('axios').default;

const Profile = ({name, email, bidang, onPress, onDelete}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.profileWrapper}>
      <Image
        source={{
          uri: 'https://static.wikia.nocookie.net/peaky-blinders/images/8/8e/Tommys3.jpg/revision/latest/top-crop/width/360/height/360?cb=20190715140230',
        }}
        style={styles.descImage}
      />
      <View style={styles.descText}>
        <Text style={styles.descName}>{name}</Text>
        <Text>{email}</Text>
        <Text>{bidang}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.descDelete}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const index = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('SAVE');
  const [selectedItem, setSelectedItem] = useState({});

  // UNTUK MENAMPILKAN HASIL METHOD GET
  useEffect(() => {
    getData();
  }, []);

  // FUNGSI METHOD POST
  const submitData = () => {
    const data = {
      nama,
      email,
      bidang,
    };
    // console.log('data before post : ', data);

    if (button == 'SAVE' && (nama == '' || email == '' || bidang == '')) {
      // Form tidak boleh kosong
      alert('Form tidak boleh kosong!');
      setNama('');
      setEmail('');
      setBidang('');
      getData();
    } else if (button == 'SAVE') {
      // POST
      axios.post('http://192.168.1.11:3000/users', data).then(res => {
        console.log(res);
        setNama('');
        setEmail('');
        setBidang('');
        getData();
      });
    } else if (button == 'UPDATE') {
      // PUT
      axios
        .put(`http://192.168.1.11:3000/users/${selectedItem.id}`, data)
        .then(() => {
          console.log(res);
          setButton('SAVE');
          setNama('');
          setEmail('');
          setBidang('');
          getData();
        });
    }
  };

  // FUNGSI METHOD GET
  const getData = () => {
    axios.get('http://192.168.1.11:3000/users').then(res => {
      console.log('res get :', res);
      setUsers(res.data);
    });
  };

  // FUNGSI METHOD PUT
  const updateData = user => {
    setNama(user.nama);
    setEmail(user.email);
    setBidang(user.bidang);
    setButton('UPDATE');
    setSelectedItem(user);
  };

  // FUNGSI METHOD DELETE
  const deleteData = user => {
    axios.delete(`http://192.168.1.11:3000/users/${user.id}`).then(res => {
      console.log(res);
      setNama('');
      setEmail('');
      setBidang('');
      setButton('SAVE');
      getData();
    });
  };

  return (
    <ScrollView style={styles.wrapper}>
      <Text style={styles.title}>Local API (JSON Server) My Phone</Text>
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
        <Button title={button} onPress={submitData} />
      </View>
      <View style={styles.line}></View>
      {users.map(user => {
        return (
          <Profile
            key={user.id}
            name={user.nama}
            email={user.email}
            bidang={user.bidang}
            onPress={() => {
              updateData(user);
            }}
            onDelete={() => {
              Alert.alert(
                'Peringatan!',
                'Anda yakin ingin menghapus user ini?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'OK',
                    onPress: () => {
                      deleteData(user);
                      console.log('User Deleted Pressed');
                    },
                  },
                ],
              );
            }}
          />
        );
      })}
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
