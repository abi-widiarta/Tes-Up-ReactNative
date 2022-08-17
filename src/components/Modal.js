import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import PlusButton from './plusButton';

function ModalComponent() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
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
            <TextInput
              style={{
                paddingHorizontal: 30,
                borderBottomWidth: 1,
                borderColor: 'rgba(0,0,0,0.1)',
                color: '#252525',
                fontSize: 13,
              }}></TextInput>
          </View>
        </ScrollView>
        <Button title="Hide modal" onPress={toggleModal} />
      </Modal>
    </View>
  );
}

export default ModalComponent;
