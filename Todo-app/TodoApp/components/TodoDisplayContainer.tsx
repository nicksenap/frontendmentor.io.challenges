import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {Task} from '../types/task';
import {TodoDisplay} from './TodoDisplay';
import {BORDER_RADIUS} from '../utilities/constants';

interface TodoDisplayContainerProps {
  task: Task[];
}

export const TodoDisplayContainer: React.FC<TodoDisplayContainerProps> = props => {
  const [task, setTask] = useState(props.task);
  const taskLeft = task.filter(t => !t.isChecked).length;
  const toggleCheck = (id: number) => {
    let taskFound: Task = task.find(t => t.id === id);
    if (taskFound) {
      let newTaskList = [...task];
      newTaskList[id].isChecked = !newTaskList[id].isChecked;
      setTask(newTaskList);
    }
  };
  return (
    <View style={styles.todoDisplayContainer}>
      {task.map((d, index) => {
        return (
          <TodoDisplay todoItem={d} key={index} toggleCheck={toggleCheck} />
        );
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
    borderWidth: 1,
    borderColor: 'lightgrey',
    top: -50,
  },
  summaryGroup: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
