export type coordinates = [number, number];
import {changeArrayCoordinatesToString} from './logic';
import { getAreaArrayIndex } from './logic';
import { AREASARRAY } from './logic';

export class Piece {
    type: string = 'noneType';
    color: string = 'noneColor';
    location: coordinates = [-1, -1];
    possibilities(): void {}
    moveIfPossible(whereToPlace: coordinates): void {
        let currentIndex = getAreaArrayIndex(this.location);
        AREASARRAY[currentIndex].deletePiece();
        this.location = whereToPlace;
        let index = getAreaArrayIndex(whereToPlace);
        AREASARRAY[index].deletePiece();
        AREASARRAY[index].putPieceHere(this);
        const stringCoordinates = changeArrayCoordinatesToString(whereToPlace);
        const querySquare = document.querySelector('.' + stringCoordinates)! as HTMLElement;
        querySquare.innerText = this.type;
    }
    initializePiece = (place: coordinates) => {
        const stringCoordinates = changeArrayCoordinatesToString(place);
        const querySquare = document.querySelector('.' + stringCoordinates)! as HTMLElement;
        querySquare.innerText = this.type;
    };
    constructor(type: string, color: string, location: coordinates) {
        this.type = type;
        this.color = color;
        this.location = location;
        this.moveIfPossible(location);
        this.initializePiece(location);
    }
}
