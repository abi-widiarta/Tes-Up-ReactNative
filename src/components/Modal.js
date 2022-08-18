import {
  StyleSheet,
  Image,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import PlusButton from './plusButton';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const TimePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity onPress={showDatePicker}>
        <Text>SET WAKTU</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

function ModalComponent() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [iconBorder1, setIconBorder1] = useState('white');
  const [iconBorder2, setIconBorder2] = useState('white');
  const [iconBorder3, setIconBorder3] = useState('white');

  const [bgDay1, setBgDay1] = useState('white');
  const [bgDay2, setBgDay2] = useState('white');
  const [bgDay3, setBgDay3] = useState('white');
  const [bgDay4, setBgDay4] = useState('white');
  const [bgDay5, setBgDay5] = useState('white');
  const [bgDay6, setBgDay6] = useState('white');
  const [bgDay7, setBgDay7] = useState('white');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const iconPressed = icon => {
    switch (icon) {
      case 'yellow': {
        setIconBorder1('#A8A8A8');
        setIconBorder2('white');
        setIconBorder3('white');
        break;
      }

      case 'green': {
        setIconBorder1('white');
        setIconBorder2('#A8A8A8');
        setIconBorder3('white');
        break;
      }

      case 'purple': {
        setIconBorder1('white');
        setIconBorder2('white');
        setIconBorder3('#A8A8A8');
        break;
      }
    }
  };

  const toggleBgDay = color => {
    if (color == 'white') {
      return '#E9E9E9';
    } else if (color == '#E9E9E9') {
      return 'white';
    }
  };

  const dayPressed = day => {
    switch (day) {
      case 1:
        setBgDay1(toggleBgDay(bgDay1));
        break;
      case 2:
        setBgDay2(toggleBgDay(bgDay2));
        break;
      case 3:
        setBgDay3(toggleBgDay(bgDay3));
        break;
      case 4:
        setBgDay4(toggleBgDay(bgDay4));
        break;
      case 5:
        setBgDay5(toggleBgDay(bgDay5));
        break;
      case 6:
        setBgDay6(toggleBgDay(bgDay6));
        break;
      case 7:
        setBgDay7(toggleBgDay(bgDay7));
        break;
    }
  };

  return (
    <View>
      <PlusButton onPress={toggleModal} />
      <Modal
        avoidKeyboard={true}
        onBackButtonPress={toggleModal}
        backdropTransitionOutTiming={0}
        swipeDirection={'down'}
        isVisible={isModalVisible}
        style={{margin: 0, position: 'relative'}}>
        <ScrollView
          style={{
            // borderWidth: 2,
            bottom: 0,
            marginTop: '15%',
            height: 800,
            backgroundColor: 'white',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            paddingVertical: 40,
          }}>
          {/* name activity */}
          <View style={{marginVertical: 20}}>
            <Text
              style={{fontSize: 13, color: '#9F9F9F', paddingHorizontal: 30}}>
              Name your activity
            </Text>
            <TextInput
              maxLength={20}
              style={{
                paddingHorizontal: 30,
                borderBottomWidth: 1,
                borderColor: 'rgba(0,0,0,0.1)',
                color: '#252525',
                fontSize: 18,
              }}></TextInput>
          </View>
          {/* what is it about */}
          <View style={{marginVertical: 20}}>
            <Text
              style={{fontSize: 13, color: '#9F9F9F', paddingHorizontal: 30}}>
              What is is about?
            </Text>
            <TextInput
              maxLength={25}
              style={{
                paddingHorizontal: 30,
                borderBottomWidth: 1,
                borderColor: 'rgba(0,0,0,0.1)',
                color: '#252525',
                fontSize: 13,
              }}></TextInput>
          </View>
          {/* pick icon */}
          <View
            style={{
              marginVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(0,0,0,0.1)',
              paddingBottom: 20,
            }}>
            <Text
              style={{fontSize: 13, color: '#9F9F9F', paddingHorizontal: 30}}>
              Pick an icon for your activity
            </Text>
            <View
              style={{
                paddingHorizontal: 30,
                marginVertical: 10,
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => {
                  iconPressed('yellow');
                }}
                style={{width: 60, marginRight: 10}}>
                <Image
                  style={{
                    width: 55,
                    height: 45,
                    borderWidth: 2,
                    borderRadius: 15,
                    borderColor: iconBorder1,
                  }}
                  source={require('../images/yellow-icon.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  iconPressed('green');
                }}
                style={{width: 60, marginRight: 10}}>
                <Image
                  style={{
                    width: 55,
                    height: 45,
                    borderWidth: 2,
                    borderRadius: 15,
                    borderColor: iconBorder2,
                  }}
                  source={require('../images/green-icon.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  iconPressed('purple');
                }}
                style={{width: 60, marginRight: 10}}>
                <Image
                  style={{
                    width: 55,
                    height: 45,
                    borderWidth: 2,
                    borderRadius: 15,
                    borderColor: iconBorder3,
                  }}
                  source={require('../images/purple-icon.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* day reminded */}
          <View
            style={{
              marginTop: 20,
              marginBottom: 20,
              // paddingBottom: 20,
              // borderBottomWidth: 1,
              borderBottomColor: 'rgba(0,0,0,0.1)',
            }}>
            <Text
              style={{fontSize: 13, color: '#9F9F9F', paddingHorizontal: 30}}>
              When would you like to be reminded?
            </Text>
            <View
              style={{
                marginTop: 10,
                marginBottom: 25,
                paddingHorizontal: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => {
                  dayPressed(1);
                }}
                style={[styles.dayPicker, {backgroundColor: bgDay1}]}>
                <Text style={{color: 'black', fontSize: 9}}>M</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dayPressed(2);
                }}
                style={[styles.dayPicker, {backgroundColor: bgDay2}]}>
                <Text style={{color: 'black', fontSize: 9}}>T</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dayPressed(3);
                }}
                style={[styles.dayPicker, {backgroundColor: bgDay3}]}>
                <Text style={{color: 'black', fontSize: 9}}>W</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dayPressed(4);
                }}
                style={[styles.dayPicker, {backgroundColor: bgDay4}]}>
                <Text style={{color: 'black', fontSize: 9}}>T</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dayPressed(5);
                }}
                style={[styles.dayPicker, {backgroundColor: bgDay5}]}>
                <Text style={{color: 'black', fontSize: 9}}>F</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dayPressed(6);
                }}
                style={[styles.dayPicker, {backgroundColor: bgDay6}]}>
                <Text style={{color: 'black', fontSize: 9}}>S</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dayPressed(7);
                }}
                style={[styles.dayPicker, {backgroundColor: bgDay7}]}>
                <Text style={{color: 'black', fontSize: 9}}>S</Text>
              </TouchableOpacity>
            </View>
            <TimePicker />
            {/* timePicker */}
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#E9E9E9',
              height: 40,
              marginTop: 10,
              marginHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}
            onPress={toggleModal}>
            <Text style={{color: '#252525', fontWeight: 'bold', fontSize: 14}}>
              BUAT HABIT
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  dayPicker: {
    // backgroundColor: 'red',
    borderWidth: 2,
    borderColor: '#E9E9E9',
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModalComponent;
