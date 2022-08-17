import React, {useState, useEffect, Component} from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
// import {ListItem} from '@rneui/themed';
import Profile from '../../components/profile';
import PlusButton from '../../components/plusButton';
import CalendarComponent from '../../components/calendar';
import UpNext from '../../components/upNext';

// import {
//   Collapse,
//   CollapseHeader,
//   CollapseBody,
// } from 'accordion-collapse-react-native';

const SECTIONS = [
  {
    title: 'See Calendar ...',
  },
];

class AccordionView extends Component {
  state = {
    activeSections: [],
  };

  _renderHeader = section => {
    return (
      <View
        style={{
          flex: 1,
          paddingVertical: 10,
          paddingHorizontal: 20,
          // borderWidth: 1,
          borderRadius: 10,
        }}>
        <Text style={{color: '#666666'}}>{section.title}</Text>
      </View>
    );
  };

  _renderContent = section => {
    return <CalendarComponent />;
  };

  _updateSections = activeSections => {
    this.setState({activeSections});
  };

  render() {
    return (
      <View style={{marginTop: 20}}>
        <Accordion
          containerStyle={{
            // backgroundColor: '#white',
            flex: 1,
            // paddingVertical: 10,
            borderRadius: 15,
            overflow: 'hidden',
            marginHorizontal: 20,
          }}
          sectionContainerStyle={{
            // backgroundColor: 'white',
            // paddingHorizontal: 20,
            borderWidth: 2,
            borderColor: '#FF844B',
            borderRadius: 10,
          }}
          underlayColor={'#FF844B'}
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
      </View>
    );
  }
}

const index = () => {
  return (
    <View style={{position: 'relative', flex: 1}}>
      <StatusBar backgroundColor={'#F9F9F9'} barStyle={'dark-content'} />
      <ScrollView style={styles.container}>
        <Profile />
        <AccordionView />
        {/* <CollapseView /> */}
        {/* <CalendarComponent /> */}
        <UpNext />
      </ScrollView>
      <PlusButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    // borderWidth: 1,
    position: 'relative',
  },
});

export default index;
