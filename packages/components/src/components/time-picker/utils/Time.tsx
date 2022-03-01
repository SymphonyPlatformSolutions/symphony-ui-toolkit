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

  isEqual(anotherTime: Time) {
    return anotherTime && this.hours === anotherTime.hours &&
      this.minutes === anotherTime.minutes &&
      this.seconds === anotherTime.seconds &&
      this.ampm === anotherTime.ampm
  }
}

export default Time;
