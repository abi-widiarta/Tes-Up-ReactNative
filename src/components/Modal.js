import {StyleSheet, Text, View, Button} from 'react-native';
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
        onBackButtonPress={toggleModal}
        backdropTransitionOutTiming={0}
        swipeDirection={'down'}
        isVisible={isModalVisible}
        style={{margin: 0}}>
        <View style={{marginTop: 'auto'}}>
          <View
            style={{
              height: 400,
              backgroundColor: 'white',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}></View>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

export default ModalComponent;
