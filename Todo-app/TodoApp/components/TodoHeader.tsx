import React, {useContext} from 'react';
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TodoInput} from './TodoInput';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import {HEADER_FONT_SIZE, LETTER_SPACING} from '../utilities/constants';
import {ThemeContext} from '../context/themeContext';

export interface TodoHeaderProps {
  style?: object;
  addTask: any;
}

export const TodoHeader: React.FC<TodoHeaderProps> = props => {
  const {dark, toggle} = useContext(ThemeContext);
  const isDarkMode = dark;
  console.log(isDarkMode);
  const lightBg = require('../assets/bg-mobile-light.jpg');
  const darkBg = require('../assets/bg-mobile-dark.jpg');
  return (
    <View style={[{}, props.style]}>
      <ImageBackground
        source={isDarkMode ? darkBg : lightBg}
        style={styles.imageBackground}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>TODO</Text>
          <TouchableOpacity onPress={toggle}>
            <FontAwesomeIcon
              icon={dark ? faSun : faMoon}
              style={styles.fontAwesomeIcon}
              size={HEADER_FONT_SIZE}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.todoInputContainer}>
          <TodoInput style={styles.todoInput} addTask={props.addTask} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  fontAwesomeIcon: {color: 'white'},
  imageBackground: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    paddingBottom: 10,
  },
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
    fontFamily: 'JosefinSans-Bold',
  },
});
