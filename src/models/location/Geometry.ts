import Location from "./Location";
import Viewport from "./Viewport";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */
class Geometry {
  location: Location;
  viewport: Viewport;

  constructor(location: Location, viewport: Viewport) {
    this.location = location
    this.viewport = viewport
  }  
}

export default Geometry;