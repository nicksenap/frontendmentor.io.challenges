import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export interface TodoDisplayPros {
  isChecked: boolean;
  TodoContent: string;
}

export const TodoDisplay: React.FC<TodoDisplayPros> = props => {
  return (
    <View style={styles.todoDisplayContainer}>
      <BouncyCheckbox onPress={() => {}} isChecked={props.isChecked} />
      <Text> {props.TodoContent}</Text>
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
    // borderRadius: 5,
  },
});
