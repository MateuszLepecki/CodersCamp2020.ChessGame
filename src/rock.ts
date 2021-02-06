import { Piece, coordinates } from './piece';

export class Rock extends Piece {
    constructor(color: string, location: coordinates) {
        super('rock', color, location);
    }
}