class Time {
  hours: number;
  minutes: number;
  seconds: number;

  constructor(time: string) {
    // TODO: Validate the string
  }

  toString(): string {
    return `${this.hours}:${this.minutes}:${this.seconds}`;
  }
}
