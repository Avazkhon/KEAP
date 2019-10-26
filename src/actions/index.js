
import {
 CREATE_NEW_GAME,
} from '../constants/index';

export function createNewGame(text) {
 return (
   {
     type: CREATE_NEW_GAME,
     payload: text,
   }
 )
};
