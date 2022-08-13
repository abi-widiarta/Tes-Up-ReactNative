import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Cart = props => {
  return (
    <View style={styles.cartWrapper}>
      <Text>Keranjang :</Text>
      <Text>{props.quantity}</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartWrapper: {
    padding: 10,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'salmon',
    width: 100,
  },
});
