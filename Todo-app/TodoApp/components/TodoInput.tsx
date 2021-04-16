import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
export const TodoInput: React.FC = () => {
  const [todoValue, setTodoValue] = useState('');
  return (
    <View style={styles.todoInputContainer}>
      <BouncyCheckbox onPress={() => {}} />
      <TextInput
        placeholder="Create a new todo.."
        onChangeText={setTodoValue}
        value={todoValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoInputContainer: {flex: 1, padding: 20, flexDirection: 'row'},
});
