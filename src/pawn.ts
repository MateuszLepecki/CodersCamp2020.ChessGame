import { Piece, coordinates } from './piece';

export class Pawn extends Piece {
    constructor(color: string, location: coordinates) {
        super('pawn', color, location);
    }
}
