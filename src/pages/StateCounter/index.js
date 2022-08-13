import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const index = () => {
  const [jumlah, setJumlah] = useState(0);
  return (
    <View style={styles.counterWrapper}>
      <Text style={styles.counterText}>{jumlah}</Text>
      <View style={styles.counterButtonWrapper}>
        <View style={styles.button}>
          <Button
            title="Min"
            onPress={() => {
              setJumlah(jumlah - 1);
            }}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Add"
            onPress={() => {
              setJumlah(jumlah + 1);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  counterWrapper: {
    alignItems: 'center',
    marginTop: 20,
  },
  counterText: {
    marginBottom: 10,
  },
  counterButtonWrapper: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 5,
    width: 100,
    // borderWidth: 1,
    overflow: 'hidden',
    borderRadius: 50,
  },
});
