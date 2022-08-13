import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ButtonBeli = props => {
  return (
    <View style={styles.buttonBeli}>
      <Button
        title="Tambah ke Keranjang"
        color="green"
        onPress={props.plusQuantity}
      />
    </View>
  );
};

export default ButtonBeli;

const styles = StyleSheet.create({
  buttonBeli: {
    marginTop: 10,
  },
});
