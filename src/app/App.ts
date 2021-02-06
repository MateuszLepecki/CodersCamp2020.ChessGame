import { chessboard } from '../chessboard';
import { listenDOMchessboard } from '../logic';
export const App = ({}) => {

	chessboard();

	listenDOMchessboard();
	
};

