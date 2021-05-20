import React, {useState} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {BORDER_RADIUS} from '../utilities/constants';
import {darkGreyishBlueLightTheme} from '../utilities/colors';

export interface TodoInputProps {
  style: object;
  addTask: any;
}
export const TodoInput: React.FC<TodoInputProps> = props => {
  const [todoValue, setTodoValue] = useState('');
  return (
    <View style={[styles.todoInputContainer, props.style]}>
      <TextInput
        placeholder="Create a new todo.."
        onChangeText={setTodoValue}
        value={todoValue}
        style={styles.todoTextInput}
      />
      <TouchableOpacity
        onPress={() => {
          props.addTask(todoValue);
          setTodoValue('');
        }}>
        <FontAwesomeIcon
          icon={faPlus}
          style={{color: darkGreyishBlueLightTheme}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todoInputContainer: {
    flex: 1,
    padding: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 3,
    borderRadius: BORDER_RADIUS,
  },
  todoTextInput: {height: '190%', fontFamily: 'JosefinSans-Regular'},
});
