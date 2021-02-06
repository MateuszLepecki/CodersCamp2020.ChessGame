import { Piece, coordinates } from './piece';

export class Bishop extends Piece {
    constructor(color: string, location: coordinates) {
        super('bishop', color, location);
    }
}