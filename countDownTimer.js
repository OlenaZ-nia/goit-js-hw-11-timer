export default class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.timerId = document.querySelector(selector);
        this.daysSpan = this.timerId.querySelector('[data-value="days"]');
        this.hoursSpan = this.timerId.querySelector('[data-value="hours"]');
        this.minsSpan = this.timerId.querySelector('[data-value="mins"]');
        this.secsSpan = this.timerId.querySelector('[data-value="secs"]');
        this.time = targetDate;
        this.intervalId = null;
    }
    
    start() {
        
        this.intervalId = setInterval(() => {
            let currentDate = Date.now();
            const time = this.getTimeComponents(this.time - currentDate);
            
            if (time.days && time.hours && time.mins && time.secs >= 0) {
              this.insertValues(time)  
            }
            else {
                this.stop()
            }
        }, 1000)
        
    }

    getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
    }
    
    pad(value) {
    return String(value).padStart(2, '0');
    }

    insertValues({ days, hours, mins, secs }) {
        this.daysSpan.textContent = days
        this.hoursSpan.textContent = hours
        this.minsSpan.textContent = mins
        this.secsSpan.textContent = secs
    }

    stop() {
        clearInterval(this.intervalId);
    }
}

