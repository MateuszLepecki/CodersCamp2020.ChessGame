import { createStartScreen } from './startScreen';
import { createChessboardScreen } from '../chessboard';
import { spellSection } from '../wheelOfFortune';
import { listenDOMchessboard } from '../logic';
import { createBoardArray } from '../logic';
import { switchTimers, updateDOMTimer, createTimers } from './timer';

import { createTimeScreen } from '../timeRange';

export const gameSettings = {
    choosenTime: 10,
    choosenSkin: 'G',
};

export async function App({}) {
    createStartScreen();
    // await createChessboardScreen();

    // createBoardArray();
    // createTimers();
    // listenDOMchessboard();
    //spellSection();

    //updateDOMTimer();
}
