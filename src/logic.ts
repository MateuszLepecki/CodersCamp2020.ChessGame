export {};
import { coordinates } from './Piece';
import { Piece } from './Piece';
import { King } from './King';
import { Queen } from './Queen';
import { Rook } from './Rook';
import { Bishop } from './Bishop';
import { Pawn } from './Pawn';
import { Knight } from './Knight';
import { whichColorTurn } from './app/timer';

const bishopW = require('./assets/pieces-svg/bishop_w.svg');
const bishopB = require('./assets/pieces-svg/bishop_b.svg');

export const AREASARRAY: Area[] = [];
let BOARD: HTMLElement;
export let CHECK = false;
let kingsIndexes: number[] = [];
var movenumber = 0;

enum Letters {
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
}

class Area {
    areaCoordinates: coordinates = [-1, -1];
    piece: Piece | 0;
    constructor(row: number, column: number) {
        this.areaCoordinates[0] = row;
        this.areaCoordinates[1] = column;
        this.piece = 0;
    }
    putPieceHere(newPiece: Piece) {
        this.piece = newPiece;
    }
    deletePiece() {
        this.piece = 0;
        const querySquare = document.querySelector(
            '.' + changeArrayCoordinatesToString(this.areaCoordinates),
        )! as HTMLElement;
        // querySquare.innerText = '';
        querySquare.innerHTML = '';
    }
}

export const createBoardArray = () => {
    BOARD = document.querySelector('.board')! as HTMLElement;
    AREASARRAY.splice(0, AREASARRAY.length);
    for (let row = 1; row < 9; row++) {
        for (let column = 1; column < 9; column++) {
            let newArea = new Area(row, column);
            AREASARRAY.push(newArea);
        }
    }
    insertPieces();
};

const insertPieces = () => {
    let kingW = new King('white');
    let kingB = new King('black');
    let queenW = new Queen('white');
    let queenB = new Queen('black');

    let rockW1 = new Rook('white', [1, 1]);
    let rockW2 = new Rook('white', [8, 1]);
    let rockB1 = new Rook('black', [1, 8]);
    let rockB2 = new Rook('black', [8, 8]);

    let bishopW1 = new Bishop('white', [3, 1]);
    let bishopW2 = new Bishop('white', [6, 1]);
    let bishopB1 = new Bishop('black', [3, 8]);
    let bishopB2 = new Bishop('black', [6, 8]);

    let knightW1 = new Knight('white', [2, 1]);
    let knightW2 = new Knight('white', [7, 1]);
    let knightB1 = new Knight('black', [2, 8]);
    let knightB2 = new Knight('black', [7, 8]);

    for (let i = 1; i < 9; i++) {
        let pawnW = new Pawn('white', [i, 2]);
        let pawnB = new Pawn('black', [i, 7]);
    }
    console.table(AREASARRAY);
};

export const changeArrayCoordinatesToString = (position: coordinates): string => {
    const column = Letters[position[0] - 1];
    const row = position[1].toString();
    const resultString: string = column + row;
    return resultString;
};
const changeStringCoordinatesToArray = (position: string): coordinates => {
    const resultArray: coordinates = [0, 0];
    const ascii = position[0].codePointAt(0);
    resultArray[0] = (ascii as number) - 64;
    resultArray[1] = +position[1];
    return resultArray;
};
const listenSelection = (e: Event) => {
    let target;
    if (e.target instanceof HTMLElement) {
        target = e.target.parentNode as HTMLDivElement;
        const stringCoordinates: string = target.classList[0];
        let arr = changeStringCoordinatesToArray(stringCoordinates);
        let index = getAreaArrayIndex(arr);
        deleteHighlightedSquares();

        if (AREASARRAY[index].piece instanceof Piece) {
            selectPiece(arr);
            BOARD.removeEventListener('click', listenSelection);
        }
    }
};
export const listenDOMchessboard = () => {
    BOARD.addEventListener('click', listenSelection);
};
const selectPiece = (position: coordinates) => {
    BOARD.removeEventListener('click', listenSelection);
    let index = getAreaArrayIndex(position);
    const currentPiece = AREASARRAY[index].piece! as Piece;
    currentPiece.checkPossibleMoves();
    currentPiece.highlightPossibilities();
    const listenNewPosition = (e: Event) => {
        let target;
        if (e.target instanceof HTMLElement) {
            target = e.target;
            const stringCoordinates: string = target.classList[0];
            let arr = changeStringCoordinatesToArray(stringCoordinates);
            currentPiece.moveIfPossible(arr);
            checkIfchecked();
            BOARD.removeEventListener('click', listenNewPosition);
            BOARD.addEventListener('click', listenSelection);


            var movesdiv = document.getElementsByClassName("moves-list");
            var moveslist = movesdiv[0];

            switch (currentPiece.type) {
                case 'knight':
                    var piecetype: string = "K";
                    break;
                case 'bishop':
                    var piecetype: string = "B";
                    break;
                case 'rook':
                    var piecetype: string = "R";
                    break;
                case 'queen':
                    var piecetype: string = "Q";
                    break;
                case 'king':
                    var piecetype: string = "K";
                    break;
                default:
                    var piecetype: string = "";
                    break;
            }
            
            if (currentPiece.check) {
                var checkmark = "+";
            } else var checkmark = "";

            if (whichColorTurn() === "black") {
                var allmoves = document.getElementsByClassName("moves-list");
                var allmoveslist = allmoves[0];
                var moveel = document.createElement('li');
                moveel.classList.add('just-moves');
                allmoveslist.appendChild(moveel);
                var justmoves = document.getElementsByClassName('just-moves');
                var justmove = justmoves[movenumber];
                movenumber++;
                justmove.innerHTML = movenumber+". "+piecetype+stringCoordinates.toLowerCase()+checkmark+" ";
            }
            else {
                var justmoves = document.getElementsByClassName('just-moves');
                var justmove = justmoves[movenumber-1];
                justmove.innerHTML += piecetype+stringCoordinates.toLowerCase()+checkmark+" ";     
            }
        }
    };
    if (currentPiece instanceof Piece) {
        BOARD.addEventListener('click', listenNewPosition);
    } else BOARD.addEventListener('click', listenSelection);
};


export const getAreaArrayIndex = (coordinates: coordinates): number => {
    let index = AREASARRAY.findIndex((e) => {
        if (e.areaCoordinates[0] == coordinates[0] && e.areaCoordinates[1] == coordinates[1]) return e;
    });
    return index;
};

export const deleteHighlightedSquares = (): void => {
    const highlighted = document.querySelectorAll('.possibileMoves');
    highlighted.forEach((el) => {
        el.classList.remove('possibileMoves');
    });
};

export const checkIfchecked = () => {
    kingsIndexes = [];
    AREASARRAY.forEach((el, index) => {
        if (el.piece instanceof Piece && el.piece.type == 'king') {
            kingsIndexes.push(index);
        }
        if (el.piece instanceof Piece && el.piece.type != 'king') {
            el.piece.checkPossibleMoves();
            if (el.piece.check === true) {
                console.log('check');
                CHECK = true;
            }
        }
    });
    if (CHECK == true) {
        kingsIndexes.forEach((el, index) => {
            let king = AREASARRAY[kingsIndexes[index]].piece;
            if (king instanceof King) {
                king.checkingIfMate();
            }
        });
    }
    CHECK = false;
};
