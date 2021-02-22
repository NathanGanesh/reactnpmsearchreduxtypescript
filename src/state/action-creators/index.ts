import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions/index';

export const searchRepositories = (term: string) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.SEARCH_REPOSITORIES
		});

		try {
			const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
				params: {
					text: term
				}
			});

			const names = data.objecs.map((result: { package: { name: any } }) => {
				return result.package.name;
			});

			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
				payload: names
			});
		} catch (error) {
			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_ERROR,
				payload: error.message
			});
		}
	};
};
