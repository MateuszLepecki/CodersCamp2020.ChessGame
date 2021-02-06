import { Piece, coordinates } from './piece';
import { getAreaArrayIndex } from './logic';
import { AREASARRAY } from './logic';

export class Pawn extends Piece {
    constructor(color: string, location: coordinates) {
        super('pawn', color, location);
    }
    checkPossibleMoves() {
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
            let PieceOnWay = AREASARRAY[getAreaArrayIndex(checkingPosition)].piece;

            if (PieceOnWay instanceof Piece && PieceOnWay.color == this.color) continue;
            else if ((i === 0 || i === 2) && PieceOnWay instanceof Piece && PieceOnWay.color !== this.color) {
                console.log('i', i, '1 else');
                this.possibleLocations.push(checkingPosition);
                continue;
            } else if (
                i === 0 ||
                i === 2 ||
                (i === 1 && PieceOnWay instanceof Piece && PieceOnWay.color !== this.color)
            ) {
                console.log('i', i, '2 else');
                continue;
            }

            this.possibleLocations.push(checkingPosition);
        }
    }
}
