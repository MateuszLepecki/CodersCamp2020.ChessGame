// const changeTimeToString = require('../src/app/timer.ts');
import { changeTimeToString } from '../src/app/timer';

test('shold change minutes and second to string ', () => {
    expect(changeTimeToString(12, 3)).toBe('12:03');
});
