import CountdownTimer from './CountdownTimer.js'

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 23, 2021'),
});
timer1.start();