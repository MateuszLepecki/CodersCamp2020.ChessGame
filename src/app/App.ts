import { chessboard } from '../chessboard';
import { listenDOMchessboard } from '../logic';
import { createBoardArray } from '../logic';
import { createTimers } from './timer';
export async function App ({})  {

	await chessboard();

	createBoardArray();

	listenDOMchessboard();
	
	createTimers();
};
export const gameSettings = {
	choosenTime : 4, 
   };
