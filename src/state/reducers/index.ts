import { combineReducers } from 'redux';
import repositoriesReducer from './index';

const reducers: any | undefined = combineReducers({
	repositories: repositoriesReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
