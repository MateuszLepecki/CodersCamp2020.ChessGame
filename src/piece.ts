export type coordinates = [number, number];
import { changeArrayCoordinatesToString } from './logic';
import { getAreaArrayIndex } from './logic';
import { AREASARRAY } from './logic';

export abstract class Piece {
    type: string = 'noneType';
    color: string = 'noneColor';
    location: coordinates = [-1, -1];
    possibleLocations: coordinates[] = [];
    moveIfPossible(whereToPlace: coordinates): void {
        this.checkPossibleMoves();
        if (
            this.possibleLocations.findIndex((e) => {
                return e[0] == whereToPlace[0] && e[1] == whereToPlace[1];
            }) != -1
        ) {
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
    }
    initializePiece = (place: coordinates) => {
        this.location = place;
        let index = getAreaArrayIndex(place);
        AREASARRAY[index].deletePiece();
        AREASARRAY[index].putPieceHere(this);
        const stringCoordinates = changeArrayCoordinatesToString(place);
        const querySquare = document.querySelector('.' + stringCoordinates)! as HTMLElement;
        querySquare.innerText = this.type;
    };
    constructor(type: string, color: string, location: coordinates) {
        this.type = type;
        this.color = color;
        this.location = location;
        this.initializePiece(location);
    }
    abstract checkPossibleMoves(): void;
}
