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

function ModalComponent() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [iconBorder1, setIconBorder1] = useState('white');
  const [iconBorder2, setIconBorder2] = useState('white');
  const [iconBorder3, setIconBorder3] = useState('white');

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
            borderWidth: 2,
            bottom: 0,
            marginTop: '30%',
            height: 600,
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
              style={{
                paddingHorizontal: 30,
                borderBottomWidth: 1,
                borderColor: 'rgba(0,0,0,0.1)',
                color: '#252525',
                fontSize: 13,
              }}></TextInput>
          </View>
          {/* pick icon */}
          <View style={{marginVertical: 20}}>
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
                    width: 60,
                    height: 50,
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
                    width: 60,
                    height: 50,
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
                    width: 60,
                    height: 50,
                    borderWidth: 2,
                    borderRadius: 15,
                    borderColor: iconBorder3,
                  }}
                  source={require('../images/purple-icon.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Button title="Hide modal" onPress={toggleModal} />
      </Modal>
    </View>
  );
}

export default ModalComponent;
