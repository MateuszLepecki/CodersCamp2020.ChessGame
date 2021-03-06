import { Piece, coordinates } from './Piece';
import { getAreaArrayIndex } from './logic';
import { AREASARRAY } from './logic';

export class Pawn extends Piece {
    constructor(color: string, location: coordinates) {
        super('pawn', color, location);
    }
    checkPossibleMoves() {
        this.check = false;
        this.possibleLocations = [];
        let dir: number = 0;
        if (this.color == 'white') dir = 1;
        else dir = -1;
        for (let i = 0; i < 3; i++) {
            let checkingPosition: coordinates = [this.location[0] - 1 + i, this.location[1] + dir];
            if (
                checkingPosition[0] < 1 ||
                checkingPosition[0] > 8 ||
                checkingPosition[1] < 1 ||
                checkingPosition[1] > 8
            )
                continue;
            let pieceOnWay = AREASARRAY[getAreaArrayIndex(checkingPosition)].piece;

            if (pieceOnWay instanceof Piece && pieceOnWay.color == this.color) continue;
            else if ((i === 0 || i === 2) && pieceOnWay instanceof Piece && pieceOnWay.color !== this.color) {
                if (pieceOnWay.type == 'king') this.check = true;
                this.possibleLocations.push(checkingPosition);
                continue;
            } else if (
                i === 0 ||
                i === 2 ||
                (i === 1 && pieceOnWay instanceof Piece && pieceOnWay.color !== this.color)
            ) {
                continue;
            }

            this.possibleLocations.push(checkingPosition);
        }
        if (this.alreadyMoved == false) {
            if (this.color == 'white') dir = 2;
            else dir = -2;
            let checkingPosition: coordinates = [this.location[0], this.location[1] + dir];
            let PieceOnWay = AREASARRAY[getAreaArrayIndex(checkingPosition)].piece;
            if (PieceOnWay === 0) {
                this.possibleLocations.push(checkingPosition);
            }
        }
    }
}