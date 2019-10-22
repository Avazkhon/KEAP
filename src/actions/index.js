
import {
 CREATE_NEW_GAME,

} from '../constants/index';

export function createNewGame() {
 return (
   {
     type: CREATE_NEW_GAME,
   }
 )
};
