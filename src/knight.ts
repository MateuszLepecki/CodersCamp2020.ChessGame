import { Piece, coordinates } from './piece';
import { getAreaArrayIndex } from './logic';
import { AREASARRAY } from './logic';

export class Knight extends Piece {
    constructor(color: string, location: coordinates) {
        super('knight', color, location);
    }
    checkPossibleMoves() {
    }
}