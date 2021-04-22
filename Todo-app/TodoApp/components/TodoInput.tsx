import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {BORDER_RADIUS} from '../utilities/constants';
import {checkboxStyle} from '../utilities/sharedStyles';

export interface TodoInputProps {
  style: object;
}
export const TodoInput: React.FC<TodoInputProps> = props => {
  const [todoValue, setTodoValue] = useState('');
  return (
    <View style={[styles.todoInputContainer, props.style]}>
      <BouncyCheckbox onPress={() => {}} iconStyle={checkboxStyle} />
      <TextInput
        placeholder="Create a new todo.."
        onChangeText={setTodoValue}
        value={todoValue}
      />
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
    zIndex: 3,
    borderRadius: BORDER_RADIUS,
  },
});
