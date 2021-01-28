export class Timer {
    minutes: number;
    seconds: number;

    constructor(initialTime: number) {
        this.minutes = initialTime;
        this.seconds = 0;

    }

    startCounting() {
        this.change60secondsTo1Minute();
        setInterval(() => {
            this.seconds--;
            console.log(`time left: ${this.minutes}:${this.seconds}`);
        }, 1000);
    }
    stopCounting() {
        console.log('inside stopCounting');
        clearInterval();
    }
    change60secondsTo1Minute() {
        if (this.seconds === 0 && this.minutes > 0) {
            this.minutes--;
            this.seconds = 60;
        }
    }
}


