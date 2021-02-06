import { chessboard } from '../chessboard';
import { listenDOMchessboard } from '../logic';
import { createBoardArray } from '../logic';
export const App = ({}) => {

	chessboard();

	createBoardArray();
	listenDOMchessboard();
	
};

