import Close from "./Close";
import Open from "./Open";

class Period {
  close: Close;
  open: Open;

  constructor(close: Close, open: Open) {
    this.close = close;
    this.open = open;
  }
}

export default Period;
