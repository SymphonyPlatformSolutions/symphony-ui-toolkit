class Time {
  hours: string;
  minutes: string;
  seconds: string;
  ampm?: string;

  constructor(hours: string, minutes: string, seconds?: string, ampm?: string) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.ampm = ampm;
  }
}

export default Time;
