import { createStartScreen } from './startScreen';
import { chessboard } from '../chessboard';
import { listenDOMchessboard } from '../logic';
import { createBoardArray } from '../logic';
export async function App ({})  {

	// await createStartScreen();

	await chessboard();

	createBoardArray();

	listenDOMchessboard();

	
};

