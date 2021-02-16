import { changeTimeToString } from '../src/app/timer';
import { createTimers } from '../src/app/timer';
import { createDOMElement } from '../src/app/timer';
import { Timer } from '../src/app/timer';

describe('changeTimeToString', () => {
    test('returns 12:03 for args :12,3 ', () => {
        expect(changeTimeToString(12, 3)).toBe('12:03');
    });
    test('returns 10:00 for args :10,0 ', () => {
        expect(changeTimeToString(10, 0)).toBe('10:00');
    });
    test('returns 01:00 for args :1,0 ', () => {
        expect(changeTimeToString(1, 0)).toBe('01:00');
    });
    test('returns 00:00 for args :0,0 ', () => {
        expect(changeTimeToString(0, 0)).toBe('00:00');
    });
});

describe('timer object constructor and methods', () => {
    const timer = new Timer(30, 'player');
    test('create Timer object with initial time 30', () => {
        expect(timer.minutes).toBe(30);
        expect(timer.seconds).toBe(0);
        expect(timer.stopped).toBe(true);
        expect(timer.player).toBe('player');
    });
    const timer1 = new Timer(0, 'player');
    test('create Timer object with initial time 0', () => {
        expect(timer1.minutes).toBe(0);
        expect(timer1.seconds).toBe(0);
    });
    test('startCounting', () => {
        jest.useFakeTimers();
        timer.startCounting();
        jest.advanceTimersByTime(93000);
        expect(timer.stopped).toBe(false);
        expect(timer.minutes).toBe(28);
        expect(timer.seconds).toBe(27);
        expect(setInterval).toHaveBeenCalledTimes(1);
    });
    test('stopCounting', () => {
        timer.stopCounting();
        expect(timer.stopped).toBe(true);
    });
});

describe('timer change60secondsTo1Minute method ', () => {
    const timer2 = new Timer(30, 'player');
    test('change60secondsTo1Minute 30 min to 29:60', () => {
        timer2.change60secondsTo1Minute();
        expect(timer2.minutes).toBe(29);
        expect(timer2.seconds).toBe(60);
    });
});
