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
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TodoHeader} from './components/TodoHeader';
import {TodoDisplayContainer} from './components/TodoDisplayContainer';
import {data} from './mockData';
import {Task} from './types/task';

const App = () => {
  const [task, setTask] = useState(data);

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
    console.log(task);
  };

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TodoHeader addTask={addTask} />
      <View style={{padding: 20, height: '100%'}}>
        <TodoDisplayContainer task={task} setTask={setTask} />
      </View>
    </SafeAreaView>
  );
};

export default App;
