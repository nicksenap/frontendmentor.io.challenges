import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {checkboxStyle} from '../utilities/sharedStyles';
import {Task} from '../types/task';

export interface TodoDisplayPros {
  todoItem: Task;
  toggleCheck: (id: number) => void;
}

export const TodoDisplay: React.FC<TodoDisplayPros> = props => {
  const [TodoChecked, setTodoChecked] = useState(props.todoItem.isChecked);
  const handlePress = () => {
    props.toggleCheck(props.todoItem.id);
    setTodoChecked(!TodoChecked);
  };
  return (
    <View style={styles.todoDisplayContainer}>
      <BouncyCheckbox
        onPress={handlePress}
        isChecked={TodoChecked}
        iconStyle={checkboxStyle}
        text={props.todoItem.TodoContent}
        textStyle={[styles.TodoText, TodoChecked && styles.TodoTextDone]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoDisplayContainer: {
    flexDirection: 'row',
    padding: 20,
    borderColor: 'lightgrey',
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  TodoText: {
    fontSize: 12,
  },
  TodoTextDone: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: 'lightgrey',
    color: 'lightgrey',
  },
});
