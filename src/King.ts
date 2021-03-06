import { Piece, coordinates } from './Piece';
import { getAreaArrayIndex } from './logic';
import { AREASARRAY } from './logic';
import { CANCELTIMER, createDOMElement } from './app/timer';
const DIV_ELEMENT = 'div';

const MAIN = document.querySelector('#main-wrap');

export class King extends Piece {
    constructor(color: string, location?: coordinates) {
        if (color == 'white') location = [5, 1];
        else location = [5, 8];
        super('king', color, location);
    }
    checkPossibleMoves() {
        this.possibleLocations = [];
        for (let i = 0; i < 8; i++) {
            let dir: number[] = [0, 0];
            switch (i) {
                case 0:
                    dir = [1, 0];
                    break;
                case 1:
                    dir = [-1, 0];
                    break;
                case 2:
                    dir = [0, 1];
                    break;
                case 3:
                    dir = [0, -1];
                    break;
                case 4:
                    dir = [1, 1];
                    break;
                case 5:
                    dir = [-1, 1];
                    break;
                case 6:
                    dir = [1, -1];
                    break;
                case 7:
                    dir = [-1, -1];
                    break;
            }

            let checkingPosition: coordinates = [this.location[0] + dir[0], this.location[1] + dir[1]];
            if (
                checkingPosition[0] < 1 ||
                checkingPosition[0] > 8 ||
                checkingPosition[1] < 1 ||
                checkingPosition[1] > 8
            )
                continue;
            let PieceOnWay = AREASARRAY[getAreaArrayIndex(checkingPosition)].piece;
            if (PieceOnWay instanceof Piece && PieceOnWay.color == this.color) continue;
            else if (PieceOnWay instanceof Piece && PieceOnWay.color !== this.color) {
                this.possibleLocations.push(checkingPosition);
                continue;
            }
            this.possibleLocations.push(checkingPosition);
        }
    }
    checkingIfMate() {
        let checkCouter = 0;
        this.checkPossibleMoves();
        this.possibleLocations.forEach((kingPossibleLocation) => {
            let enemyCounter = 0;
            AREASARRAY.forEach((el) => {
                if (el.piece instanceof Piece && el.piece.color != this.color) {
                    el.piece.checkPossibleMoves();
                    el.piece.possibleLocations.forEach((enemyPossibleLoaction) => {
                        if (
                            kingPossibleLocation[0] == enemyPossibleLoaction[0] &&
                            kingPossibleLocation[1] == enemyPossibleLoaction[1]
                        ) {
                            enemyCounter++;
                            if (enemyCounter == 1) checkCouter++;
                        }
                    });
                }
            });
        });
        if (checkCouter == this.possibleLocations.length || this.possibleLocations.length == 0) {
            console.log('checkmate');
            CANCELTIMER.flag = true;
            if (MAIN instanceof HTMLElement) {
                const youLoseDiv = createDOMElement(DIV_ELEMENT, 'youLose', MAIN);
                youLoseDiv.innerText = 'WE HAVE A WINNER!';
            }
        }
    }
}
