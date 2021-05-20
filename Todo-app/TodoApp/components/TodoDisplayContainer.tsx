import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Task} from '../types/task';
import {TodoItem} from './TodoItem';
import {BORDER_RADIUS} from '../utilities/constants';

interface TodoDisplayContainerProps {
  task: Task[];
  toggleTask: (id: number) => void;
  clearCompleted: () => void;
  removeTodo: (id: number) => void;
  taskLeft: number;
}

export const TodoDisplayContainer: React.FC<TodoDisplayContainerProps> = props => {
  const toggleCheck = (id: number) => {
    props.toggleTask(id);
  };
  return (
    <View style={styles.todoDisplayContainer}>
      {props.task.map((d, index) => {
        return (
          <TodoItem
            todoItem={d}
            key={index}
            toggleCheck={toggleCheck}
            removeTodo={props.removeTodo}
          />
        );
      })}
      <View style={styles.summaryGroup}>
        <Text style={styles.itemLeftCountText}>
          {props.taskLeft} items left
        </Text>
        <TouchableOpacity onPress={props.clearCompleted} style={{}}>
          <Text style={styles.clearCompletedText}>Clear Completed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoDisplayContainer: {
    borderRadius: BORDER_RADIUS,
    borderColor: 'white',
    borderWidth: 1,
    top: -50,
  },
  summaryGroup: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
  },
  itemLeftCountText: {
    color: 'lightgrey',
    fontSize: 15,
    fontFamily: 'JosefinSans-Regular',
  },
  clearCompletedText: {color: 'lightgrey', fontFamily: 'JosefinSans-Regular'},
});
