import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View
      style={{
        // borderWidth: 1,
        paddingHorizontal: 10,
        marginTop: 20,
        // marginBottom: 0,
      }}>
      <View
        style={{
          // backgroundColor: 'white',
          borderRadius: 15,
          // elevation: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingVertical: 16,
        }}>
        <View>
          <Text style={{fontWeight: 'bold', color: '#0D0C0C', fontSize: 16}}>
            Hello PANES!
          </Text>
          <Text style={{color: '#9F9F9F', fontSize: 13}}>Monday, 28 Jan</Text>
        </View>
        <Image
          style={{width: 50, height: 50, borderRadius: 50}}
          source={{
            uri: 'https://static.wikia.nocookie.net/peaky-blinders/images/8/8e/Tommys3.jpg/revision/latest/top-crop/width/360/height/360?cb=20190715140230',
          }}
        />
      </View>
    </View>
  );
};

export default Profile;
