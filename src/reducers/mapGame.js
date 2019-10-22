import {
  CREATE_NEW_GAME
} from '../constants';

const newState = {
  featch: false,
  data: null,
  error: null,
}
export function newMapGame(state = newState, action) {
	if (action.type === CREATE_NEW_GAME) {
		return {
			...state,
		}
	}

	return state
};
