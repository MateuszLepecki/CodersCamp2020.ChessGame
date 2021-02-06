export {};
type coordinates = [number, number];
const AREASARRAY: Area[] = [];
const COLOR = ['white', 'black'];

const changeArrayCoordinatesToString = (position: coordinates): string => {
    const column = Letters[position[0] - 1];
    const row = position[1].toString();
    const resultString: string = column + row;
    return resultString;
};


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
    startingPoint: coordinates = [-1, -1];
    possibilities(): void {}
    move(whereToPlace: coordinates): void {
        let index = AREASARRAY.findIndex((e) => {
            if (e.areaCoordinates[0] == whereToPlace[0] && e.areaCoordinates[1] == whereToPlace[1]) return e;
        });
        AREASARRAY[index].putPieceHere(this);
        // console.table(AREASARRAY);
    }
    initializePiece = (place: coordinates) => {
        const stringCoordinates = changeArrayCoordinatesToString(place);
        const querySquare = document.querySelector('.' + stringCoordinates)! as HTMLElement;
        querySquare.innerText = this.type;
    };
    constructor(type: string, color: string, startingPoint: coordinates) {
        this.type = type;
        this.color = color;
        this.startingPoint = startingPoint;
        this.move(startingPoint);
        this.initializePiece(startingPoint);
    }
}
class King extends Piece {
    constructor(color: string, startingPoint?: coordinates) {
        if (color == 'white') startingPoint = [5, 1];
        else startingPoint = [5, 8];
        super('king', color, startingPoint);
    }
}

class Queen extends Piece {
    constructor(color: string, startingPoint?: coordinates) {
        if (color == 'white') startingPoint = [4, 1];
        else startingPoint = [4, 8];
        super('queen', color, startingPoint);
    }
}

class Rock extends Piece {
    constructor(color: string, startingPoint: coordinates) {
        super('rock', color, startingPoint);
    }
}
class Pawn extends Piece {
    constructor(color: string, startingPoint: coordinates) {
        super('pawn', color, startingPoint);
    }
}

class Bishop extends Piece {
    constructor(color: string, startingPoint: coordinates) {
        super('bishop', color, startingPoint);
    }
}

class Knight extends Piece {
    constructor(color: string, startingPoint: coordinates) {
        super('knight', color, startingPoint);
    }
}

class Area {
    areaCoordinates: coordinates = [-1, -1];
    piece: Piece | number = 0;
    constructor(row: number, column: number) {
        this.areaCoordinates[0] = row;
        this.areaCoordinates[1] = column;
    }
    // get getAreaCoordinates(): coordinates {
    //     return this.areaCoordinates;
    // }
    putPieceHere(newPiece: Piece) {
        this.piece = newPiece;
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

export const listenDOMchessboard = () => {
    const board = document.querySelector('.board') as HTMLElement;
    const listen = (e: Event) => {
        let target: any = e.target!;
        const stringCoordinates: string = target.classList[0];
        // console.log(changeStringCoordinatesToArray(stringCoordinates));
        let arr = changeStringCoordinatesToArray(stringCoordinates);
        // console.log(changeArrayCoordinatesToString(arr));
    };
    board.addEventListener('click', listen);
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
