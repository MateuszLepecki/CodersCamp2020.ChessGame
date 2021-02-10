"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timer_1 = require("../src/app/timer");
var timer_2 = require("../src/app/timer");
describe('changeTimeToString', function () {
    test('returns 12:03 for args :12,3 ', function () {
        expect(timer_1.changeTimeToString(12, 3)).toBe('12:03');
    });
    test('returns 10:00 for args :10,0 ', function () {
        expect(timer_1.changeTimeToString(10, 0)).toBe('10:00');
    });
    test('returns 01:00 for args :1,0 ', function () {
        expect(timer_1.changeTimeToString(1, 0)).toBe('01:00');
    });
    test('returns 00:00 for args :0,0 ', function () {
        expect(timer_1.changeTimeToString(0, 0)).toBe('00:00');
    });
});
describe('timer object constructor and methods', function () {
    var timer = new timer_2.Timer(30, 'player');
    test('create Timer object with initial time 30', function () {
        expect(timer.minutes).toBe(30);
        expect(timer.seconds).toBe(0);
        expect(timer.stopped).toBe(true);
        expect(timer.player).toBe('444');
    });
    var timer1 = new timer_2.Timer(0, 'player');
    test('create Timer object with initial time 0', function () {
        expect(timer1.minutes).toBe(0);
        expect(timer1.seconds).toBe(0);
        expect(timer1.stopped).toBe(true);
    });
    test('startCounting', function () {
        jest.useFakeTimers();
        timer.startCounting();
        jest.advanceTimersByTime(90000);
        var min = timer.minutes;
        var sec = timer.seconds;
        expect(timer.stopped).toBe(false);
        expect(min).toBe(28);
        expect(sec).toBe(30);
        expect(setInterval).toHaveBeenCalledTimes(1);
    });
    test('stopCounting', function () {
        timer.stopCounting();
        expect(timer.stopped).toBe(true);
    });
});
describe('timer change60secondsTo1Minute method ', function () {
    var timer = new timer_2.Timer(30, 'player');
    test('change60secondsTo1Minute 30 min to 29:60', function () {
        timer.change60secondsTo1Minute();
        expect(timer.minutes).toBe(29);
        expect(timer.seconds).toBe(60);
    });
});
