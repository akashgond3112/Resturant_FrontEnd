import Northeast from "./Northeast";
import Southwest from "./Southwest";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */
class Viewport {
  northeast: Northeast;
  southwest: Southwest;
  constructor(northeast: Northeast, southwest: Southwest) {
    this.northeast = northeast;
    this.southwest = southwest;
  }
}

export default Viewport;