/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useContext, ContextType} from 'react';
import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TodoHeader} from './components/TodoHeader';
import {TodoDisplayContainer} from './components/TodoDisplayContainer';
import {TodoFilter} from './components/TodoFilter';
import {data} from './mockData';
import {Task} from './types/task';
import {filterType} from './types/filterType';
import {ThemeContext, ThemeProvider} from './context/themeContext';

const App = () => {
  const [task, setTask] = useState(data);
  const [taskForDisplay, setTaskForDisplay] = useState(data);
  const [filter, setFilter] = useState<filterType>('all');
  const {dark, theme, toggle} = useContext(ThemeContext);
  console.log(dark, theme);

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
    const newTask = [...task, t];
    setTask(newTask);
    setTaskForDisplay(newTask);
  };

  const toggleTask = (id: number) => {
    let index = task.findIndex(t => t.id === id);
    if (index !== -1) {
      let item = task[index];
      item.isChecked = !item.isChecked;
      const newTask = [...task.slice(0, index), item, ...task.slice(index + 1)];
      setTask(newTask);
      setTaskForDisplay(newTask);
    }
  };

  const changeFilter = (newVal: filterType) => {
    setFilter(newVal);
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
    const newTask = task.filter(t => !t.isChecked);
    setTask(newTask);
    setTaskForDisplay(newTask);
  };

  const removeTodo = (id: number) => {
    const newTask = task.filter(t => t.id !== id);
    setTask(newTask);
    setTaskForDisplay(newTask);
  };

  const taskLeft = task.filter(t => !t.isChecked).length;
  const isDarkMode = dark;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ThemeProvider>
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
          <TodoFilter filter={filter} changeFilter={changeFilter} />
        </View>
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  todoDisplayContainerWrapper: {
    padding: 20,
    height: '100%',
  },
});

export default App;
