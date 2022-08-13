import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Cart from '../../components/Cart';
import ButtonBeli from '../../components/ButtonBeli';

const index = () => {
  const [jumlah, setJumlah] = useState(0);
  return (
    <View>
      <Cart quantity={jumlah} />
      <ButtonBeli
        plusQuantity={() => {
          setJumlah(jumlah + 1);
        }}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
