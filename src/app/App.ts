import { createStartScreen } from './startScreen';
import { chessboard } from '../chessboard';
import { listenDOMchessboard } from '../logic';
import { createBoardArray } from '../logic';
import { createTimeScreen } from '../timeRange';

export const gameSettings = {
	choosenTime: 10,
	choosenSkin: 'G'
}

export async function App ({})  {

	createStartScreen();

	// await chessboard();

	// createBoardArray();

	// listenDOMchessboard();

	
};
