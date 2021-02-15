import { createStartScreen } from './startScreen';
import { chessboard } from '../chessboard';
import { listenDOMchessboard } from '../logic';
import { createBoardArray } from '../logic';
import { switchTimers, updateDOMTimer, createTimers } from './timer';

import { createTimeScreen } from '../timeRange';

export const gameSettings = {
	choosenTime: 10,
	choosenSkin: 'S'
}

export async function App({}) {
    createStartScreen();
    // await chessboard();

	// createBoardArray();
	// createTimers();
    // listenDOMchessboard();

    //updateDOMTimer();
}
