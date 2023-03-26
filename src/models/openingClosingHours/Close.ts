class Close {
  date: string;
  day: number;
  time: string;
  truncated?: boolean;

  constructor(date: string, day: number, time: string, truncated: boolean) {
    this.date = date;
    this.day = day;
    this.time = time;
    this.truncated = truncated;
  }
}

export default Close;
