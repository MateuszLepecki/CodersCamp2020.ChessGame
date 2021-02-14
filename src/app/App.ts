import { createStartScreen } from './startScreen';
import { chessboard } from '../chessboard';
import { listenDOMchessboard } from '../logic';
import { createBoardArray } from '../logic';
import { switchTimers, updateDOMTimer, createTimers } from './timer';
export const gameSettings = {
    choosenTime: 1,
};


export async function App({}) {
    // await createStartScreen();
    await chessboard();

	createBoardArray();
	createTimers();
    listenDOMchessboard();

    updateDOMTimer();
}
