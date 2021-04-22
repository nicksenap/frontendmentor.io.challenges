import React from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TodoInput} from './TodoInput';
import {faMoon} from '@fortawesome/free-solid-svg-icons';
import {HEADER_FONT_SIZE, LETTER_SPACING} from '../utilities/constants';

export interface TodoHeaderProps {
  style?: object;
}

export const TodoHeader: React.FC<TodoHeaderProps> = props => {
  const isDarkMode = false;
  const lightBg = require('../assets/bg-mobile-light.jpg');
  const darkBg = require('../assets/bg-mobile-dark.jpg');
  return (
    <View style={[{}, props.style]}>
      <ImageBackground
        source={isDarkMode ? darkBg : lightBg}
        style={styles.imageBackground}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>TODO</Text>
          <FontAwesomeIcon
            icon={faMoon}
            style={styles.fontAwesomeIcon}
            size={HEADER_FONT_SIZE}
          />
        </View>
        <View style={styles.todoInputContainer}>
          <TodoInput style={styles.todoInput} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  fontAwesomeIcon: {color: 'white'},
  imageBackground: {width: '100%', height: 200},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  todoInputContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    height: 70,
    width: '100%',
  },
  todoInput: {
    backgroundColor: 'white',
    flex: 1,
  },
  headerText: {
    color: 'white',
    fontSize: HEADER_FONT_SIZE,
    letterSpacing: LETTER_SPACING,
  },
});
