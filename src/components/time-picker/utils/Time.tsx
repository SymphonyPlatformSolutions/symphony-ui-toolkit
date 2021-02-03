class Time {
  hours: number;
  minutes: number;
  seconds: number;

  format: any;

  constructor(time: string) {
    // TODO: Validate the string
  }

  toDisplay(): string {
    return ''; // Use format
  }

  toString(): string {
    return `${this.hours}:${this.minutes}:${this.seconds}`;
  }
}
