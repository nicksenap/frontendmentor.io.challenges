import React, {FC} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {BORDER_RADIUS} from '../utilities/constants';

export interface TodoFilterProps {}

export const TodoFilter: FC<TodoFilterProps> = () => {
  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity>
        <Text style={[styles.filterText, styles.filterTextActive]}> All </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.filterText}> Active </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.filterText}> Completed </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: BORDER_RADIUS,
  },
  filterText: {
    fontWeight: 'bold',
    color: 'lightgrey',
  },

  filterTextActive: {
    color: 'lightblue',
  },
});
