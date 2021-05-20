/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TodoHeader} from './components/TodoHeader';
import {TodoDisplayContainer} from './components/TodoDisplayContainer';
import {TodoFilter} from './components/TodoFilter';
import {data} from './mockData';
import {Task} from './types/task';
import {filterType} from './types/filterType';

const App = () => {
  const [task, setTask] = useState(data);
  const [taskForDisplay, setTaskForDisplay] = useState(data);
  const [filter, setFilter] = useState<filterType>('all');

  function getRandomArbitrary(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const addTask = (content: string) => {
    const num = getRandomArbitrary(task.length, 100000);
    const t: Task = {
      isChecked: false,
      id: num,
      order: num,
      TodoContent: content,
    };
    setTask([...task, t]);
    setTaskForDisplay(task);
  };

  const toggleTask = (id: number) => {
    let index = task.findIndex(t => t.id === id);
    if (index !== -1) {
      let item = task[index];
      item.isChecked = !item.isChecked;
      setTask([...task.slice(0, index), item, ...task.slice(index + 1)]);
      setTaskForDisplay(task);
    }
  };

  const changeFilter = (newVal: filterType) => {
    switch (newVal) {
      case 'all': {
        setTaskForDisplay(task);
        break;
      }
      case 'active': {
        setTaskForDisplay(task.filter(t => !t.isChecked));
        break;
      }
      case 'completed': {
        setTaskForDisplay(task.filter(t => t.isChecked));
        break;
      }
    }
  };

  const clearCompleted = () => {
    setTask(task.filter(t => !t.isChecked));
    setTaskForDisplay(task);
  };

  const removeTodo = (id: number) => {
    setTask(task.filter(t => t.id !== id));
    setTaskForDisplay(task);
  };

  const taskLeft = task.filter(t => !t.isChecked).length;
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TodoHeader addTask={addTask} />
      <View style={styles.todoDisplayContainerWrapper}>
        <TodoDisplayContainer
          task={taskForDisplay}
          toggleTask={toggleTask}
          clearCompleted={clearCompleted}
          taskLeft={taskLeft}
          removeTodo={removeTodo}
        />
        <TodoFilter filterType={filter} changeFilter={changeFilter} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoDisplayContainerWrapper: {
    padding: 20,
    height: '100%',
  },
});

export default App;
