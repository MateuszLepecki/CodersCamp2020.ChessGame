import { gameSettings } from './App';

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

    startCounting() {
        this.stopped = false;
        let interval = setInterval(() => {
            this.change60secondsTo1Minute();
            if (this.stopped) clearInterval(interval);
            this.seconds--;
            this.showRemainingTime();
            if (this.seconds === 0 && this.minutes === 0) {
                this.endOfTime();
                clearInterval(interval);
            }
        }, 1000);
    }
    stopCounting() {
        this.stopped = true;
    }
    change60secondsTo1Minute() {
        if (this.seconds === 0 && this.minutes > 0) {
            this.minutes--;
            this.seconds = 60;
        }
    }
    showRemainingTime(): void {
        console.log(`${this.color} - time left: ${this.minutes}:${this.seconds}`);
    }
    endOfTime() {
        console.log('End of time - you lose');
    }
}

export const createTimers = () => {
    const timerBlack = new Timer(gameSettings.choosenTime, 'black');
    const timerWhite = new Timer(gameSettings.choosenTime, 'white');
    timerWhite.startCounting();
    setTimeout(() => {
        switchTimers(timerWhite, timerBlack);
    }, 10000);

    setTimeout(() => {
        switchTimers(timerWhite, timerBlack);
    }, 24000);
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
