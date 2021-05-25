import { createSlice } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';

export interface CalcState {
    expresions: string;
    result: number;
}

const initialState: CalcState = {
    expresions: '',
    result: 0
};

export const calclice = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    addExpression: (state, action) => {
        state.expresions += action.payload
    },
    removeExpression: (state) => {
        state.expresions = state.expresions.slice(0, -1);
    },
    getResult: (state) => {
        state.result = eval(state.expresions);
    },
    resetExpression: (state) => {
        state.expresions = '';
    }
  },
});

export const { addExpression, removeExpression, getResult, resetExpression } = calclice.actions;

export const selectExpresions = (state: RootState) => state.calc.expresions;
export const selectResult = (state: RootState) => state.calc.result;

export default calclice.reducer;
