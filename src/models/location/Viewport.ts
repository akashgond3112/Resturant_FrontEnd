import Northeast from "./Northeast";
import Southwest from "./Southwest";

class Viewport {
  northeast: Northeast;
  southwest: Southwest;
  constructor(northeast: Northeast, southwest: Southwest) {
    this.northeast = northeast;
    this.southwest = southwest;
  }
}

export default Viewport;