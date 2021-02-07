import { Piece, coordinates } from './Piece';
import { getAreaArrayIndex } from './logic';
import { AREASARRAY } from './logic';

export class Rook extends Piece {
    constructor(color: string, location: coordinates) {
        super('rock', color, location);
    }
    checkPossibleMoves() {
        this.possibleLocations = [];
        for (let i = 0; i < 4; i++) {
            let dir: number[] = [0, 0];
            switch (i) {
                case 0:
                    dir = [1, 0];
                    break;
                case 1:
                    dir = [-1, 0];
                    break;
                case 2:
                    dir = [0, 1];
                    break;
                case 3:
                    dir = [0, -1];
                    break;
            }
            for (let j = 1; j < 8; j++) {
                let checkingPosition: coordinates = [this.location[0] + j * dir[0], this.location[1] + j * dir[1]];
                if (
                    checkingPosition[0] < 1 ||
                    checkingPosition[0] > 8 ||
                    checkingPosition[1] < 1 ||
                    checkingPosition[1] > 8
                )
                    break;
                let PieceOnWay = AREASARRAY[getAreaArrayIndex(checkingPosition)].piece;
                if (PieceOnWay instanceof Piece && PieceOnWay.color == this.color) break;
                else if (PieceOnWay instanceof Piece && PieceOnWay.color !== this.color) {
                    this.possibleLocations.push(checkingPosition);
                    break;
                }
                this.possibleLocations.push(checkingPosition);
            }
        }
    }
}
