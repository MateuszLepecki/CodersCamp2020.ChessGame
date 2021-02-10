import { chessboard } from '../chessboard';
import { listenDOMchessboard } from '../logic';
import { createBoardArray } from '../logic';
import { switchTimers, updateDOMTimer, createTimers } from './timer';
export const gameSettings = {
    choosenTime: 4,
};


export async function App({}) {
    await chessboard();

	createBoardArray();
	createTimers();
    listenDOMchessboard();

    updateDOMTimer();
}
