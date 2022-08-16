import React, {useState, useEffect} from 'react';

import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Button,
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {ListItem} from '@rneui/themed';
import {Dimensions} from 'react-native';

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

const leftSwipe = () => {
  return (
    <View style={{backgroundColor: 'red'}}>
      <Text>tes</Text>
    </View>
  );
};

const UpNextItem = () => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => console.log('pressed')}
      style={{
        // borderWidth: 1,
        // paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 15,
          elevation: 6,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingVertical: 16,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: 40, height: 40, borderRadius: 50, marginRight: 20}}
            source={{
              uri: 'https://static.wikia.nocookie.net/peaky-blinders/images/8/8e/Tommys3.jpg/revision/latest/top-crop/width/360/height/360?cb=20190715140230',
            }}
          />
          <View>
            <Text style={{fontWeight: '600', color: '#0D0C0C', fontSize: 14}}>
              Clip Project Team
            </Text>
            <Text style={{color: '#9F9F9F', fontSize: 11}}>
              Revision & Discuss
            </Text>
          </View>
        </View>
        <Text style={{color: '#9F9F9F', fontSize: 11}}>11.00 AM</Text>
      </View>
    </TouchableHighlight>
  );
};

const UpNext = () => {
  return (
    <View style={{paddingBottom: 20}}>
      <Text style={{fontSize: 16, color: '#666666', paddingHorizontal: 20}}>
        Up Next
      </Text>
      <SwapableItem />
      <SwapableItem />
      <SwapableItem />
    </View>
  );
};

const SwapableItem = () => {
  return (
    <ListItem.Swipeable
      style={{
        // borderWidth: 1,
        marginHorizontal: 20,
        // marginVertical: 20,
        marginTop: 16,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 8,
      }}
      leftContent={reset => (
        <TouchableOpacity
          onPress={() => {
            alert('Done Pressed');
          }}
          style={{
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            // borderWidth: 2,
            backgroundColor: '#CCFFD2',
            width: Dimensions.get('window').width / 2 - 20,
            // minHeight: '100%',
            height: '79%',
            marginVertical: 20,
            marginHorizontal: 20,
            paddingBottom: 20,
          }}></TouchableOpacity>
        // <Button
        //   title="Info"
        //   onPress={() => reset()}
        //   icon={{name: 'info', color: 'white'}}
        //   buttonStyle={{minHeight: '100%', marginVertical: 20}}
        // />
      )}
      rightContent={reset => (
        <TouchableOpacity
          onPress={() => {
            alert('Delete Pressed');
          }}
          style={{
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            backgroundColor: '#FFA0A0',
            width: Dimensions.get('window').width / 2 - 20,
            height: '79%',
            // height: '60%',
            // marginVertical: 20,
            marginTop: 20,
            marginLeft: -70,
            // marginBottom: -20,
            // marginHorizontal: 20,
            // paddingBottom: 20,
          }}></TouchableOpacity>
      )}>
      {/* <Button title="My Icon" /> */}
      <ListItem.Content
      // style={{borderWidth: 1}}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // borderWidth: 1,
            // flex: 1,
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginRight: 20,
              }}
              source={{
                uri: 'https://static.wikia.nocookie.net/peaky-blinders/images/8/8e/Tommys3.jpg/revision/latest/top-crop/width/360/height/360?cb=20190715140230',
              }}
            />
            <View>
              <Text style={{fontWeight: '600', color: '#0D0C0C', fontSize: 14}}>
                Clip Project Team
              </Text>
              <Text style={{color: '#9F9F9F', fontSize: 11}}>
                Revision & Discuss
              </Text>
            </View>
          </View>
          <Text style={{color: '#9F9F9F', fontSize: 11}}>11.00 AM</Text>
        </View>
        {/* <ListItem.Title>Hello Swiper</ListItem.Title> */}
      </ListItem.Content>
      {/* <ListItem.Chevron /> */}
    </ListItem.Swipeable>
  );
};

const index = () => {
  return (
    <ScrollView style={styles.container}>
      <Profile />
      <View style={{alignItems: 'center', marginBottom: 20}}>
        <View
          style={{
            width: 300,
            height: 290,
            // borderWidth: 2,
            alignItems: 'center',
            borderRadius: 10,
            overflow: 'hidden',
            elevation: 3,
          }}>
          <View
            style={{
              width: 300,
              height: 290,
            }}>
            <CalendarList
              horizontal={true}
              pagingEnabled={true}
              calendarWidth={300}
              calendarHeight={290}
              onDayPress={day => {
                console.log(day);
              }}
              theme={{
                'stylesheet.day.basic': {
                  base: {
                    width: 20,
                    height: 20,
                  },
                },
                textDayFontSize: 12,
                textMonthFontSize: 12,
                textDayHeaderFontSize: 12,
              }}
            />
          </View>
        </View>
      </View>
      <UpNext />

      {/* <View style={{backgroundColor: 'red', height: 200, marginTop: 20}}></View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
  },
});

export default index;
