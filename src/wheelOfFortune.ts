import { coordinates } from './Piece';
import { Piece } from './Piece';
import { King } from './King';
import { Queen } from './Queen';
import { Rook } from './Rook';
import { Bishop } from './Bishop';
import { Pawn } from './Pawn';
import { Knight } from './Knight';

enum lightFigure {
    Bishop,
    Knight,
}
enum heavyFigure {
    Queen,
    Rook,
}

function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reducio(piece: Piece) {
    //Reducio - zamienia ciężką figurę na lekką, lekką na pionka)
    if (piece instanceof Queen || piece instanceof Rook) {
        let random = getRandomIntInclusive(0, 1);
        switch (random) {
            case 0:
                piece = new Bishop(piece.color, piece.location);
                break;
            case 1:
                piece = new Knight(piece.color, piece.location);
                break;
        }
    } else if (piece instanceof Bishop || piece instanceof Knight) {
        piece = new Pawn(piece.color, piece.location);
    }
}

//Engorgio - zmienia figurę o poziom wyżej (pionka w lekką, lekką w ciężką)
function engorgio(piece: Piece) {
    if (piece instanceof Bishop || piece instanceof Knight) {
        let random = getRandomIntInclusive(0, 1);
        switch (random) {
            case 0:
                piece = new Queen(piece.color, piece.location);
                break;
            case 1:
                piece = new Rook(piece.color, piece.location);
                break;
        }
    } else if (piece instanceof Pawn) {
        let random = getRandomIntInclusive(0, 1);
        switch (random) {
            case 0:
                piece = new Bishop(piece.color, piece.location);
                break;
            case 1:
                piece = new Knight(piece.color, piece.location);
                break;
        }
    }
}

function obliviate() {
    // Obliviate - Gracz widzi tylko swoje pionki
}
function lumos() {
    //Lumos - podwaja zasięg ruchu figury
}

function randomPowerUp(piece: Piece) {
    let random = getRandomIntInclusive(0, 11);
    switch (random) {
        case 0:
            reducio(piece); //ten piece teraz na zapełnienie dziury
            break;
        case 1:
            engorgio(piece);
            break;
        case 2:
    }
}
