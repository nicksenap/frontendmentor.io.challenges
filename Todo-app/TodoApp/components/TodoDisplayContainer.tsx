import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {Task} from '../types/task';
import {TodoItem} from './TodoItem';
import {BORDER_RADIUS} from '../utilities/constants';

interface TodoDisplayContainerProps {
  task: Task[];
  setTask: any;
}

export const TodoDisplayContainer: React.FC<TodoDisplayContainerProps> = props => {
  const taskLeft = props.task.filter(t => !t.isChecked).length;
  const toggleCheck = (id: number) => {
    let taskFound: Task = props.task.find(t => t.id === id);
    if (taskFound) {
      let newTaskList = [...props.task];
      console.log(newTaskList);
      newTaskList[id].isChecked = !newTaskList[id].isChecked;
      props.setTask(newTaskList);
    }
  };
  return (
    <View style={styles.todoDisplayContainer}>
      {props.task.map((d, index) => {
        return <TodoItem todoItem={d} key={index} toggleCheck={toggleCheck} />;
      })}
      <View style={styles.summaryGroup}>
        <Text> {taskLeft} items left </Text>
        <Button title={'Clear Completed'} onPress={() => {}} />
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
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
});
