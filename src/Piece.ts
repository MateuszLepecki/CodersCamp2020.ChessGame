export type coordinates = [number, number];
import {
    getAreaArrayIndex,
    AREASARRAY,
    checkIfchecked,
    deleteHighlightedSquares,
    changeArrayCoordinatesToString,
} from './logic';
import { switchTimers, whichColorTurn } from './app/timer';

const bishopwhite = require('./assets/pieces-svg/bishop_w.svg');
const bishopblack = require('./assets/pieces-svg/bishop_b.svg');
const kingwhite = require('./assets/pieces-svg/king_w.svg');
const kingblack = require('./assets/pieces-svg/king_b.svg');
const knightwhite = require('./assets/pieces-svg/knight_w.svg');
const knightblack = require('./assets/pieces-svg/knight_b.svg');
const pawnwhite = require('./assets/pieces-svg/pawn_w.svg');
const pawnblack = require('./assets/pieces-svg/pawn_b.svg');
const queenwhite = require('./assets/pieces-svg/queen_w.svg');
const queenblack = require('./assets/pieces-svg/queen_b.svg');
const rookwhite = require('./assets/pieces-svg/rook_w.svg');
const rookblack = require('./assets/pieces-svg/rook_b.svg');

export abstract class Piece {
    type: string = 'noneType';
    color: string = 'noneColor';
    check: boolean = false;
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
                createIMG(eval(this.type + this.color), querySquare, stringCoordinates);
                this.alreadyMoved = true;
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
        createIMG(eval(this.type + this.color), querySquare, stringCoordinates);
    };

    highlightPossibilities = (): void => {
        this.possibleLocations.forEach((e) => {
            const possibleSquare = document.querySelector('.' + changeArrayCoordinatesToString(e));
            possibleSquare?.classList.add('possibileMoves');
        });
    };

    abstract checkPossibleMoves(): void;
}

export const createIMG = (imgID: string, parent: HTMLElement, className: string) => {
    const img = document.createElement('img');
    img.className = className;
    img.src = imgID;
    parent.appendChild(img);
};
