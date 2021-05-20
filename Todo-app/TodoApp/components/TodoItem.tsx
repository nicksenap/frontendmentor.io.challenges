import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {checkboxStyle} from '../utilities/sharedStyles';
import {Task} from '../types/task';
import {
  darkGreyishBlueLightTheme,
  lightGreyishBlueLightTheme,
  veryDarkGreyishBlueLightTheme,
} from '../utilities/colors';

export interface TodoDisplayPros {
  todoItem: Task;
  toggleCheck: (id: number) => void;
  removeTodo: (id: number) => void;
}
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
export const TodoItem: React.FC<TodoDisplayPros> = props => {
  const handlePress = () => {
    console.log(props.todoItem.id);
    props.toggleCheck(props.todoItem.id);
  };
  return (
    <View style={styles.todoDisplayContainer}>
      <BouncyCheckbox
        onPress={handlePress}
        isChecked={props.todoItem.isChecked}
        iconStyle={checkboxStyle}
        text={props.todoItem.TodoContent}
        textStyle={[
          styles.TodoText,
          props.todoItem.isChecked && styles.TodoTextDone,
        ]}
      />
      <TouchableOpacity onPress={() => props.removeTodo(props.todoItem.id)}>
        <FontAwesomeIcon
          icon={faTimes}
          style={{color: darkGreyishBlueLightTheme}}
          // size={HEADER_FONT_SIZE}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todoDisplayContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderColor: lightGreyishBlueLightTheme,
    borderBottomWidth: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  TodoText: {
    fontSize: 12,
    fontFamily: 'JosefinSans-Regular',
  },
  TodoTextDone: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: lightGreyishBlueLightTheme,
    color: lightGreyishBlueLightTheme,
  },
});
