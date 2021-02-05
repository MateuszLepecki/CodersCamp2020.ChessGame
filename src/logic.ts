export {};
type coordinates = [number, number];
const AREASARRAY: Area[] = [];

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
        console.table(AREASARRAY);
    }
    constructor(type: string, color: string, startingPoint: coordinates) {
        this.type = type;
        this.color = color;
        this.startingPoint = startingPoint;
        this.move(startingPoint);
    }
}

// enum Letters {
//     A,
//     B,
//     C,
//     D,
//     E,
//     F,
//     G,
//     H,
// }

// const COLUMN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

class King extends Piece {
    constructor(color: string, startingPoint?: coordinates) {
        if (color == 'white') startingPoint = [1, 5];
        else startingPoint = [8, 5];
        super('king', color, startingPoint);
    }
}

class Queen extends Piece {
    constructor(color: string, startingPoint?: coordinates) {
        if (color == 'white') startingPoint = [1, 4];
        else startingPoint = [8, 4];
        super('queen', color, startingPoint);
    }
}

class Rock extends Piece {
    constructor(color: string, startingPoint: coordinates) {
        super('rock', color, startingPoint);
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

const createBoardArray = () => {
    for (let row = 1; row < 9; row++) {
        for (let column = 1; column < 9; column++) {
            let newArea = new Area(row, column);
            AREASARRAY.push(newArea);
        }
    }
    console.table(AREASARRAY);
};

createBoardArray();

let kingW = new King('white');
let kingB = new King('black');

let queenW = new Queen('white');
let queenB = new Queen('black');

let rockW1 = new Rock('white',[1,1]);
let rockW2 = new Rock('white',[1,8]);
let rockB1 = new Rock('black',[8,1]);
let rockB2 = new Rock('black', [8, 8]);



