import React, {useState, useEffect} from 'react';

import {View, StyleSheet, Text, StatusBar, Image} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const Profile = () => {
  return (
    <View
      style={{
        // borderWidth: 1,
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
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
          <Text style={{fontWeight: 'bold', color: '#0D0C0C', fontSize: 18}}>
            Hello PANES!
          </Text>
          <Text style={{color: '#9F9F9F', fontSize: 13}}>Monday, 28 Jan</Text>
        </View>
        <Image
          style={{width: 40, height: 40, borderRadius: 50}}
          source={{
            uri: 'https://static.wikia.nocookie.net/peaky-blinders/images/8/8e/Tommys3.jpg/revision/latest/top-crop/width/360/height/360?cb=20190715140230',
          }}
        />
      </View>
    </View>
  );
};

const index = () => {
  return (
    <View style={styles.container}>
      <Profile />
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: 300,
            height: 320,
            // borderWidth: 2,
            alignItems: 'center',
            borderRadius: 10,
            overflow: 'hidden',
            elevation: 3,
          }}>
          <View
            style={{
              width: 300,
              height: 320,
            }}>
            <CalendarList
              horizontal={true}
              pagingEnabled={true}
              calendarWidth={300}
              calendarHeight={320}
              onDayPress={day => {
                console.log(day);
              }}
            />
          </View>
        </View>
      </View>
      {/* <View style={{backgroundColor: 'red', height: 200, marginTop: 20}}></View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
});

export default index;
