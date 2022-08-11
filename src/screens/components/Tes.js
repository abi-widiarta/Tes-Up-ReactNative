import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        // borderColor: 'blue',
        // borderWidth: 2
      }}>
      {/* navbar */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: 'black',
          paddingVertical: 20,
        }}>
        <Text
          style={{
            color: 'white',
            flex: 1,
            textAlign: 'center',
          }}>
          Home
        </Text>
        <Text
          style={{
            color: 'white',
            flex: 1,
            textAlign: 'center',
          }}>
          About Us
        </Text>
        <Text
          style={{
            color: 'white',
            flex: 1,
            textAlign: 'center',
          }}>
          Contact Us
        </Text>
      </View>

      {/* hero name */}
      <View
        style={{
          height: 200,
          // borderColor: 'gray',
          // borderWidth: 1,
          // borderBottomWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            backgroundColor: 'gray',
            elevation: 5,
            marginBottom: 16,
          }}></View>
        <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
          John Doe
        </Text>
        <Text style={{fontSize: 16}}>just a nobody</Text>
      </View>

      {/* paragraph 1*/}
      <View
        style={{
          height: 200,
          // borderColor: 'red',
          // borderWidth: 1,
          // justifyContent: 'center',
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'rgba(0,0,0,0.3)',
            marginBottom: 16,
          }}></View>
        <Text
          style={{
            paddingRight: 20,
            paddingLeft: 20,
            width: 250,
            textAlign: 'justify',
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, et
          incidunt labore corporis quam harum quisquam unde dolore adipisci
          cupiditate. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Text>
      </View>

      {/* paragraph 2 */}
      <View
        style={{
          // height: 200,
          // borderColor: 'red',
          // borderWidth: 1,
          // justifyContent: 'center',
          flexDirection: 'row',
          // alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Text style={{textAlign: 'justify'}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nulla
          perferendis eos illum alias beatae tempora consectetur nostrum,
          voluptatibus repudiandae fugit, tenetur in commodi! Modi neque fuga
          tempore ab, facilis non molestias at quos commodi optio aut aliquam
          odit beatae quasi eos accusantium suscipit doloribus eius asperiores
          adipisci sed qui.
        </Text>
      </View>
    </View>
  );
};

export default App;
