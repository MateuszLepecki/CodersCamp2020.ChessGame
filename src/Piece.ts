export type coordinates = [number, number];
import { getAreaArrayIndex, AREASARRAY,checkIfchecked, deleteHighlightedSquares, changeArrayCoordinatesToString } from './logic';
import { switchTimers, whichColorTurn } from './app/timer';

export abstract class Piece {
    type: string = 'noneType';
    color: string = 'noneColor';
    check:boolean = false;
    location: coordinates = [-1, -1];
    possibleLocations: coordinates[] = [];
    alreadyMoved: boolean = false;

    constructor(type: string, color: string, location: coordinates) {
        this.type = type;
        this.color = color;
        this.location = location;
        this.initializePiece(location);
    }

    moveIfPossible(whereToPlace: coordinates): void {
        if (this.color == whichColorTurn()) {
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
                this.alreadyMoved = true;
                // checkIfchecked();
                deleteHighlightedSquares();
                switchTimers();
            }
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

    highlightPossibilities = (): void => {
        this.possibleLocations.forEach((e) => {
            const possibleSquare = document.querySelector('.' + changeArrayCoordinatesToString(e));
            possibleSquare?.classList.add('possibileMoves');
        });
    };

    abstract checkPossibleMoves(): void;
}
