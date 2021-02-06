export {};
type coordinates = [number, number];
const AREASARRAY: Area[] = [];
const COLOR = ['white', 'black'];
const BOARD = document.querySelector('.board')! as HTMLElement;

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

// const COLUMN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

class Piece {
    type: string = 'noneType';
    color: string = 'noneColor';
    location: coordinates = [-1, -1];
    possibilities(): void {}
    moveIfPossible(whereToPlace: coordinates): void {
        let currentIndex = getAreaArrayIndex(this.location);
        AREASARRAY[currentIndex].deletePiece();
        this.location = whereToPlace;
        let index = getAreaArrayIndex(whereToPlace);

        AREASARRAY[index].deletePiece();
        AREASARRAY[index].putPieceHere(this);
        const stringCoordinates = changeArrayCoordinatesToString(whereToPlace);
        const querySquare = document.querySelector('.' + stringCoordinates)! as HTMLElement;
        querySquare.innerText = this.type;
    }
    initializePiece = (place: coordinates) => {
        const stringCoordinates = changeArrayCoordinatesToString(place);
        const querySquare = document.querySelector('.' + stringCoordinates)! as HTMLElement;
        querySquare.innerText = this.type;
    };
    constructor(type: string, color: string, location: coordinates) {
        this.type = type;
        this.color = color;
        this.location = location;
        this.moveIfPossible(location);
        this.initializePiece(location);
    }
}
class King extends Piece {
    constructor(color: string, location?: coordinates) {
        if (color == 'white') location = [5, 1];
        else location = [5, 8];
        super('king', color, location);
    }
}

class Queen extends Piece {
    constructor(color: string, location?: coordinates) {
        if (color == 'white') location = [4, 1];
        else location = [4, 8];
        super('queen', color, location);
    }
}

class Rock extends Piece {
    constructor(color: string, location: coordinates) {
        super('rock', color, location);
    }
}
class Pawn extends Piece {
    constructor(color: string, location: coordinates) {
        super('pawn', color, location);
    }
}

class Bishop extends Piece {
    constructor(color: string, location: coordinates) {
        super('bishop', color, location);
    }
}

class Knight extends Piece {
    constructor(color: string, location: coordinates) {
        super('knight', color, location);
    }
}

class Area {
    areaCoordinates: coordinates = [-1, -1];
    piece: Piece | {};
    constructor(row: number, column: number) {
        this.areaCoordinates[0] = row;
        this.areaCoordinates[1] = column;
        this.piece = {};
    }
    // get getAreaCoordinates(): coordinates {
    //     return this.areaCoordinates;
    // }
    putPieceHere(newPiece: Piece) {
        this.piece = newPiece;
    }
    deletePiece() {
        this.piece = 0;
        const querySquare = document.querySelector(
            '.' + changeArrayCoordinatesToString(this.areaCoordinates),
        )! as HTMLElement;
        querySquare.innerText = '';
    }
}

const insertPieces = () => {
    setTimeout(() => {
        let kingW = new King('white');
        let kingB = new King('black');
        let queenW = new Queen('white');
        let queenB = new Queen('black');

        let rockW1 = new Rock('white', [1, 1]);
        let rockW2 = new Rock('white', [8, 1]);
        let rockB1 = new Rock('black', [1, 8]);
        let rockB2 = new Rock('black', [8, 8]);

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
    }, 1000);
};
const createBoardArray = () => {
    for (let row = 1; row < 9; row++) {
        for (let column = 1; column < 9; column++) {
            let newArea = new Area(row, column);
            AREASARRAY.push(newArea);
        }
    }
    insertPieces();
};

createBoardArray();

const listenSelection = (e: Event) => {
    console.log('listen selection');
    let target: any = e.target!; // WHAT WILL BE THE PROPER TYPE ??
    const stringCoordinates: string = target.classList[0];
    let arr = changeStringCoordinatesToArray(stringCoordinates);
    let index = getAreaArrayIndex(arr);
    if (AREASARRAY[index].piece instanceof Piece) {
        selectPiece(arr);
        BOARD.removeEventListener('click', listenSelection);
    }
};

export const listenDOMchessboard = () => {
    BOARD.addEventListener('click', listenSelection);
};
const changeArrayCoordinatesToString = (position: coordinates): string => {
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

// const initializePiece=(place:coordinates)=>{
//     const stringCoordinates = changeArrayCoordinatesToString(place)
//     const querySquare = document.querySelector('.' + stringCoordinates)! as HTMLElement;
//     querySquare.innerText= 'p';
// }

const selectPiece = (position: coordinates) => {
    BOARD.removeEventListener('click', listenSelection);
    let index = getAreaArrayIndex(position);
    const currentPiece = AREASARRAY[index].piece! as Piece;
    const listenNewPosition = (e: Event) => {
        console.log('inside event function');
        let target: any = e.target!; // WHAT WILL BE THE PROPER TYPE ??
        const stringCoordinates: string = target.classList[0];
        let arr = changeStringCoordinatesToArray(stringCoordinates);
        console.log('new place', arr);
        console.log(currentPiece);
        currentPiece.moveIfPossible(arr);
        BOARD.removeEventListener('click', listenNewPosition);
        BOARD.addEventListener('click', listenSelection);
    };
    if (currentPiece instanceof Piece) {
        BOARD.addEventListener('click', listenNewPosition);
    } else BOARD.addEventListener('click', listenSelection);
};

const getAreaArrayIndex = (coordinates: coordinates): number => {
    let index = AREASARRAY.findIndex((e) => {
        if (e.areaCoordinates[0] == coordinates[0] && e.areaCoordinates[1] == coordinates[1]) return e;
    });
    return index;
};
