/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */

class Open {
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

export default Open;
