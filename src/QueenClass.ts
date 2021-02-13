import { Piece, coordinates } from './PieceClass';
import { getAreaArrayIndex } from './logic';
import { AREASARRAY } from './logic';

export class Queen extends Piece {
    constructor(color: string, location?: coordinates) {
        if (color == 'white') location = [4, 1];
        else location = [4, 8];
        super('queen', color, location);
    }
    checkPossibleMoves() {
        this.check = false;
        this.possibleLocations = [];
        for (let i = 0; i < 8; i++) {
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
                case 4:
                    dir = [1, 1];
                    break;
                case 5:
                    dir = [-1, 1];
                    break;
                case 6:
                    dir = [1, -1];
                    break;
                case 7:
                    dir = [-1, -1];
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
                let pieceOnWay = AREASARRAY[getAreaArrayIndex(checkingPosition)].piece;
                if (pieceOnWay instanceof Piece && pieceOnWay.color == this.color) break;
                else if (pieceOnWay instanceof Piece && pieceOnWay.color !== this.color) {
                    if (pieceOnWay.type == 'king') this.check = true;
                    this.possibleLocations.push(checkingPosition);
                    break;
                }
                this.possibleLocations.push(checkingPosition);
            }
        }
    }
}
