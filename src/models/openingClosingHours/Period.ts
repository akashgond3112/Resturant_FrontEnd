import Close from "./Close";
import Open from "./Open";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */

class Period {
  close: Close;
  open: Open;

  constructor(close: Close, open: Open) {
    this.close = close;
    this.open = open;
  }
}

export default Period;
