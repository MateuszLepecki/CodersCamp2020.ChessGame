import { gameSettings } from './App';

const MAIN = document.querySelector('#main-wrap');
const DIV_ELEMENT = 'div';
export let CANCELTIMER = {
    flag: false,
};
export let DOMTimers: HTMLElement[] = [];

let Timers: Timer[] = [];

export class Timer {
    minutes: number;
    seconds: number;
    stopped: boolean;
    player: string;
    endOftime: boolean = false;

    constructor(initialTime: number, player: string) {
        this.minutes = initialTime;
        this.seconds = 0;
        this.stopped = true;
        this.player = player;
    }

    startCounting(): void {
        this.stopped = false;
        let interval = setInterval(() => {
            this.change60secondsTo1Minute();
            if (this.stopped) clearInterval(interval);
            this.seconds--;
            // this.showRemainingTime();
            if (this.seconds === 0 && this.minutes === 0) {
                this.endOfTimeMethod();
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
    endOfTimeMethod(): void {
        this.endOftime = true;
        console.log('End of time - you lose');
        if (MAIN instanceof HTMLElement) {
            const youLoseDiv = createDOMElement(DIV_ELEMENT, 'youLose', MAIN);
            youLoseDiv.innerText = "YOU LOSE!";
        }
    }
}

export const whichColorTurn = (): string => {
    if (Timers[0].stopped === false) return 'white';
    if (Timers[0].endOftime === true || Timers[1].endOftime === true || CANCELTIMER.flag===true) return 'endOfTime';
    else return 'black';
};

export const createTimers = (): void => {
    Timers[0] = new Timer(gameSettings.choosenTime, 'white');
    Timers[1] = new Timer(gameSettings.choosenTime, 'black');
    Timers[0].startCounting();
    insertTimerIntoDOM();
    updateDOMTimer();
};

export const switchTimers = (): void => {
    if (Timers[1].stopped === true && Timers[0].stopped === false) {
        Timers[0].stopCounting();
        Timers[1].startCounting();
    } else {
        Timers[1].stopCounting();
        Timers[0].startCounting();
    }
};

export const insertTimerIntoDOM = (): void => {
    const timersWrapper = createDOMElement(DIV_ELEMENT, 'timerWrapper', MAIN as HTMLElement);
    const player1timer = createDOMElement(DIV_ELEMENT, 'player1timer timer', timersWrapper);
    const player2timer = createDOMElement(DIV_ELEMENT, 'player2timer timer', timersWrapper);
    DOMTimers = [player1timer, player2timer];
};

export const createDOMElement = (type: string, className: string, parent: HTMLElement, text = ''): HTMLElement => {
    const newElement = document.createElement(type);
    newElement.className = className;
    newElement.innerText = text;
    parent.appendChild(newElement);
    return newElement;
};

export const changeTimeToString = (minutes: number, seconds: number) => {
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

export const updateDOMTimer = () => {
    const player1timer = DOMTimers[0];
    const player2timer = DOMTimers[1];
    let interval = setInterval(() => {
        if (
            (Timers[0].minutes === 0 && Timers[0].seconds == 0) ||
            (Timers[1].minutes === 0 && Timers[1].seconds == 0) ||
            CANCELTIMER.flag
        )
            clearInterval(interval);

        player1timer.innerText = changeTimeToString(Timers[0].minutes, Timers[0].seconds);
        player2timer.innerText = changeTimeToString(Timers[1].minutes, Timers[1].seconds);
    }, 1000);
};

export const turnTimerOffFaster = () => {
    CANCELTIMER.flag = true;
};
