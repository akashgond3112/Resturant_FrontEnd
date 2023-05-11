import Period from "./Period";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */

class CurrentOpeningHours {
  open_now: boolean;
  periods: Period[];
  weekday_text: string[];

  constructor(open_now: boolean, periods: Period[], weekday_text: string[]) {
    this.open_now = open_now;
    this.periods = periods;
    this.weekday_text = weekday_text;
  }
}

export default CurrentOpeningHours;
