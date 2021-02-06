import { Piece,coordinates } from './piece';

export class Queen extends Piece {
    constructor(color: string, location?: coordinates) {
        if (color == 'white') location = [4, 1];
        else location = [4, 8];
        super('queen', color, location);
    }
}
