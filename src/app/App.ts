import {Timer} from './timer';

export const App = ({}) => {
};

const timer = new Timer(3);
timer.startCounting();

setTimeout(() => {
    timer.stopCounting();
}, 5000);


setTimeout(() => {
    timer.startCounting();
}, 5000);
