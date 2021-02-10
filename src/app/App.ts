import { chessboard } from '../chessboard';
import { listenDOMchessboard } from '../logic';
import { createBoardArray } from '../logic';
export async function App ({})  {

	await chessboard();

	createBoardArray();

	listenDOMchessboard();

	
};

