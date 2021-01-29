import { gameSettings } from './App';

const MAIN = document.querySelector('#main-wrap');
const DIV_ELEMENT = 'div';
let cancelTimer: boolean = false;
let DOMTimers: HTMLElement[] = [];

export class Timer {
    minutes: number;
    seconds: number;
    stopped: boolean;
    color: string;

    constructor(initialTime: number, color: string) {
        this.minutes = initialTime;
        this.seconds = 0;
        this.stopped = true;
        this.color = color;
    }

    startCounting(): void {
        this.stopped = false;
        let interval = setInterval(() => {
            this.change60secondsTo1Minute();
            if (this.stopped) clearInterval(interval);
            this.seconds--;
            // this.showRemainingTime();
            if (this.seconds === 0 && this.minutes === 0) {
                this.endOfTime();
                clearInterval(interval);
            }
        }, 1000);
    }
    stopCounting(): void {
        this.stopped = true;
    }
    change60secondsTo1Minute(): void {
        if (this.seconds === 0 && this.minutes > 0) {
            this.minutes--;
            this.seconds = 60;
        }
    }
    // showRemainingTime(): void {
    //     console.log(`${this.color} - time left: ${this.minutes}:${this.seconds}`);
    // }
    endOfTime(): void {
        console.log('End of time - you lose');
    }
}

export const createTimers = (): void => {
    cancelTimer = false;
    const timerOne = new Timer(gameSettings.choosenTime, 'one');
    const timerTwo = new Timer(gameSettings.choosenTime, 'two');
    timerOne.startCounting();
    setTimeout(() => {
        switchTimers(timerOne, timerTwo);
    }, 10000);

    setTimeout(() => {
        switchTimers(timerOne, timerTwo);
    }, 24000);
    DOMTimers = insertTimerIntoDOM(timerOne, timerTwo);
    updateDOMTimer(timerOne, timerTwo);
};

export const switchTimers = (timerWhite: Timer, timerBlack: Timer): void => {
    if (timerBlack.stopped === true && timerWhite.stopped === false) {
        timerWhite.stopCounting();
        timerBlack.startCounting();
    } else {
        timerBlack.stopCounting();
        timerWhite.startCounting();
    }
};

export const insertTimerIntoDOM = (timerOne: Timer, timerTwo: Timer): HTMLElement[] => {
    const timersWrapper = createDOMElement(DIV_ELEMENT, 'timerWrapper', MAIN as HTMLElement);
    const player1timer = createDOMElement(DIV_ELEMENT, 'player1timer timer', timersWrapper);
    const player2timer = createDOMElement(DIV_ELEMENT, 'player2timer timer', timersWrapper);
    return [player1timer, player2timer];
};

const createDOMElement = (type: string, className: string, parent: HTMLElement, text = ''): HTMLElement => {
    const newElement = document.createElement(type);
    newElement.className = className;
    newElement.innerText = text;
    parent.appendChild(newElement);
    return newElement;
};

const changeTimeToString = (minutes: number, seconds: number): string => {
    let stringMinutes = minutes.toString();
    let stringSeconds = seconds.toString();

    if (minutes < 10) {
        stringMinutes = '0' + stringMinutes;
    }
    if (seconds < 10) {
        stringSeconds = '0' + stringSeconds;
    }
    if (seconds == 0) stringSeconds = '00';
    if (minutes == 0) stringMinutes = '00';
    return `${stringMinutes}:${stringSeconds}`;
};

const updateDOMTimer = (timerOne: Timer, timerTwo: Timer) => {
    const player1timer = DOMTimers[0];
    const player2timer = DOMTimers[1];
    let interval = setInterval(() => {
        if (
            (timerOne.minutes === 0 && timerOne.seconds == 0) ||
            (timerTwo.minutes === 0 && timerTwo.seconds == 0) ||
            cancelTimer
        )
            clearInterval(interval);

        player1timer.innerText = changeTimeToString(timerOne.minutes, timerOne.seconds);
        player2timer.innerText = changeTimeToString(timerTwo.minutes, timerTwo.seconds);
    }, 1000);
};

const turnTimerOffFaster = () => {
    cancelTimer = true;
};
