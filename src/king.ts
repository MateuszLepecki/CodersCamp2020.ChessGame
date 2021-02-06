import { Piece, coordinates } from './piece';

export class King extends Piece {
    constructor(color: string, location?: coordinates) {
        if (color == 'white') location = [5, 1];
        else location = [5, 8];
        super('king', color, location);
    }
}
