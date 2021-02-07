import { Piece, coordinates } from './Piece';
import { getAreaArrayIndex } from './logic';
import { AREASARRAY } from './logic';

export class Knight extends Piece {
    constructor(color: string, location: coordinates) {
        super('knight', color, location);
    }
    checkPossibleMoves() {
        this.possibleLocations = [];
        for (let i = 0; i < 8; i++) {
            let dir: number[] = [0, 0];
            switch (i) {
                case 0:
                    dir = [2, 1];
                    break;
                case 1:
                    dir = [2, -1];
                    break;
                case 2:
                    dir = [-2, 1];
                    break;
                case 3:
                    dir = [-2, -1];
                    break;
                case 4:
                    dir = [1, 2];
                    break;
                case 5:
                    dir = [-1, 2];
                    break;
                case 6:
                    dir = [1, -2];
                    break;
                case 7:
                    dir = [-1, -2];
                    break;
            }

            let checkingPosition: coordinates = [this.location[0] + dir[0], this.location[1] + dir[1]];
            if (
                checkingPosition[0] < 1 ||
                checkingPosition[0] > 8 ||
                checkingPosition[1] < 1 ||
                checkingPosition[1] > 8
            )
                continue;
            let PieceOnWay = AREASARRAY[getAreaArrayIndex(checkingPosition)].piece;
            if (PieceOnWay instanceof Piece && PieceOnWay.color == this.color) continue;
            else if (PieceOnWay instanceof Piece && PieceOnWay.color !== this.color) {
                this.possibleLocations.push(checkingPosition);
                continue;
            }
            this.possibleLocations.push(checkingPosition);
        }
    }
}