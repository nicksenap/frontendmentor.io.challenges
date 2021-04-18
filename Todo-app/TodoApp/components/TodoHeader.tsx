import React from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMoon} from '@fortawesome/free-solid-svg-icons';

export const TodoHeader = () => {
  const isDarkMode = false;
  const lightBg = require('../assets/bg-mobile-light.jpg');
  const darkBg = require('../assets/bg-mobile-dark.jpg');
  return (
    <View style={[styles.backgroundSection, {paddingHorizontal: 0}]}>
      <ImageBackground
        source={isDarkMode ? darkBg : lightBg}
        style={[styles.backgroundSection]}>
        <Text style={styles.headerText}>TODO</Text>
        <FontAwesomeIcon icon={faMoon} style={[{color: 'white'}]} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 200,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 0,
    zIndex: 0, // works on ios
    elevation: 0, // works on android
  },
  headerText: {color: 'white'},
});
