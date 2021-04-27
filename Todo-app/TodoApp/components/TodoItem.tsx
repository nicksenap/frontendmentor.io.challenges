import React from 'react';
import {StyleSheet, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {checkboxStyle} from '../utilities/sharedStyles';
import {Task} from '../types/task';

export interface TodoDisplayPros {
  todoItem: Task;
  toggleCheck: (id: number) => void;
}

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
    </View>
  );
};

const styles = StyleSheet.create({
  todoDisplayContainer: {
    flexDirection: 'row',
    padding: 20,
    borderColor: 'lightgrey',
    borderBottomWidth: 1,
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
