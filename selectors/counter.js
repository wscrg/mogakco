import { createSelector } from 'reselect';

const getNum = state => state.counter.num;

// eslint-disable-next-line import/prefer-default-export
export const makeGetCounter = () => createSelector([getNum], num => num);
