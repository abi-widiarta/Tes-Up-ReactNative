import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ListItem} from '@rneui/themed';
import {Dimensions} from 'react-native';

const SwapableItem = props => {
  console.log(props);
  return (
    <ListItem.Swipeable
      style={{
        // borderWidth: 1,
        marginHorizontal: 20,
        // marginVertical: 20,
        marginTop: 16,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 8,
      }}
      leftContent={reset => (
        <TouchableOpacity
          onPress={() => {
            alert('Done Pressed');
            reset();
          }}
          style={{
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            // borderWidth: 2,
            backgroundColor: '#CCFFD2',
            width: Dimensions.get('window').width / 2 - 20,
            // minHeight: '100%',
            height: '79%',
            marginVertical: 20,
            marginHorizontal: 20,
            paddingBottom: 20,
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 20, height: 20, marginTop: 20, marginLeft: 40}}
            source={require('../images/icon-checked.png')}
          />
        </TouchableOpacity>
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
            reset();
          }}
          style={{
            position: 'relative',
            borderTopRightRadius: 22,
            borderBottomRightRadius: 22,
            backgroundColor: '#FFA0A0',
            width: Dimensions.get('window').width / 2 - 20,
            height: '79%',
            // height: '60%',
            // marginVertical: 20,
            marginTop: 20,
            marginLeft: -70,
            justifyContent: 'center',
            // marginBottom: -20,
            // marginHorizontal: 20,
            // paddingBottom: 20,
          }}>
          <Image
            style={{width: 18, height: 21, position: 'absolute', right: 50}}
            source={require('../images/icon-trash.png')}
          />
        </TouchableOpacity>
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
                width: 48,
                height: 40,
                borderRadius: 50,
                marginRight: 20,
              }}
              source={require('../images/green-icon.png')}
              // source={require(`${props.url}`)}
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
      </ListItem.Content>
    </ListItem.Swipeable>
  );
};

export default SwapableItem;
