import React, {FC} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {BORDER_RADIUS} from '../utilities/constants';
import {brightBlue} from '../utilities/colors';
import {filterType} from '../types/filterType';

export interface TodoFilterProps {
  changeFilter: (newVal: filterType) => void;
  filter: filterType;
}

export const TodoFilter: FC<TodoFilterProps> = ({changeFilter, filter}) => {
  return (
    <View style={[styles.filterContainer]}>
      <TouchableOpacity onPress={() => changeFilter('all')}>
        <Text
          style={[
            styles.filterText,
            filter === 'all' && styles.filterTextActive,
          ]}>
          All
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeFilter('active')}>
        <Text
          style={[
            styles.filterText,
            filter === 'active' && styles.filterTextActive,
          ]}>
          Active
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeFilter('completed')}>
        <Text
          style={[
            styles.filterText,
            filter === 'completed' && styles.filterTextActive,
          ]}>
          Completed
        </Text>
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
    paddingHorizontal: 90,
    borderRadius: BORDER_RADIUS,
  },
  filterText: {
    fontWeight: 'bold',
    color: 'lightgrey',
    fontFamily: 'JosefinSans-Regular',
  },

  filterTextActive: {
    color: brightBlue,
  },
});
