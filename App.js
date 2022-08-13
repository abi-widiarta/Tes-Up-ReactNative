import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import PropsStory from './src/pages/PropsStory/index';
import StateCounter from './src/pages/StateCounter';

const App = () => {
  return (
    // <ScrollView horizontal>
    //   <View style={styles.wrapper}>
    //     <PropsStory
    //       name="tes"
    //       url="https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-15/296912449_339476318275959_578721334857320555_n.jpg?stp=c0.499.1284.1284a_dst-jpg_e35_s150x150&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=-UjcRcGaet0AX_N3Bp0&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AT_8LsNdEgu83X0goBLGzUUCbnX78ov8psRREtV2wQTNlQ&oe=62F9C433&_nc_sid=acd11b"
    //     />
    //     <PropsStory
    //       name="tes"
    //       url="https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-15/296912449_339476318275959_578721334857320555_n.jpg?stp=c0.499.1284.1284a_dst-jpg_e35_s150x150&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=-UjcRcGaet0AX_N3Bp0&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AT_8LsNdEgu83X0goBLGzUUCbnX78ov8psRREtV2wQTNlQ&oe=62F9C433&_nc_sid=acd11b"
    //     />
    //     <PropsStory
    //       name="tes"
    //       url="https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-15/296912449_339476318275959_578721334857320555_n.jpg?stp=c0.499.1284.1284a_dst-jpg_e35_s150x150&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=-UjcRcGaet0AX_N3Bp0&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AT_8LsNdEgu83X0goBLGzUUCbnX78ov8psRREtV2wQTNlQ&oe=62F9C433&_nc_sid=acd11b"
    //     />
    //     <PropsStory
    //       name="tes"
    //       url="https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-15/296912449_339476318275959_578721334857320555_n.jpg?stp=c0.499.1284.1284a_dst-jpg_e35_s150x150&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=-UjcRcGaet0AX_N3Bp0&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AT_8LsNdEgu83X0goBLGzUUCbnX78ov8psRREtV2wQTNlQ&oe=62F9C433&_nc_sid=acd11b"
    //     />
    //     <PropsStory
    //       name="tes"
    //       url="https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-15/296912449_339476318275959_578721334857320555_n.jpg?stp=c0.499.1284.1284a_dst-jpg_e35_s150x150&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=-UjcRcGaet0AX_N3Bp0&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AT_8LsNdEgu83X0goBLGzUUCbnX78ov8psRREtV2wQTNlQ&oe=62F9C433&_nc_sid=acd11b"
    //     />
    //     <PropsStory
    //       name="tes"
    //       url="https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-15/296912449_339476318275959_578721334857320555_n.jpg?stp=c0.499.1284.1284a_dst-jpg_e35_s150x150&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=-UjcRcGaet0AX_N3Bp0&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AT_8LsNdEgu83X0goBLGzUUCbnX78ov8psRREtV2wQTNlQ&oe=62F9C433&_nc_sid=acd11b"
    //     />
    //     <PropsStory
    //       name="tes"
    //       url="https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-15/296912449_339476318275959_578721334857320555_n.jpg?stp=c0.499.1284.1284a_dst-jpg_e35_s150x150&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=-UjcRcGaet0AX_N3Bp0&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AT_8LsNdEgu83X0goBLGzUUCbnX78ov8psRREtV2wQTNlQ&oe=62F9C433&_nc_sid=acd11b"
    //     />
    //     <PropsStory
    //       name="tes"
    //       url="https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-15/296912449_339476318275959_578721334857320555_n.jpg?stp=c0.499.1284.1284a_dst-jpg_e35_s150x150&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=-UjcRcGaet0AX_N3Bp0&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AT_8LsNdEgu83X0goBLGzUUCbnX78ov8psRREtV2wQTNlQ&oe=62F9C433&_nc_sid=acd11b"
    //     />
    //     <PropsStory
    //       name="tes"
    //       url="https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-15/296912449_339476318275959_578721334857320555_n.jpg?stp=c0.499.1284.1284a_dst-jpg_e35_s150x150&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=-UjcRcGaet0AX_N3Bp0&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AT_8LsNdEgu83X0goBLGzUUCbnX78ov8psRREtV2wQTNlQ&oe=62F9C433&_nc_sid=acd11b"
    //     />
    //   </View>
    // </ScrollView>
    <StateCounter />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    flexDirection: 'row',
  },
});

export default App;
