import {
  CREATE_NEW_GAME
} from '../constants';

const initState = {
  featch: false,
  data: null,
  error: null,
};

export function newMapGame(state = initState, action) {
	if (action.type === CREATE_NEW_GAME) {
		return {
			...state,
      data: action.payload,
		}
	}

	return state
};
