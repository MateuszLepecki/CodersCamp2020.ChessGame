import { Piece, coordinates } from './piece';

export class Knight extends Piece {
    constructor(color: string, location: coordinates) {
        super('knight', color, location);
    }
}