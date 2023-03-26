import Location from "./Location";
import Viewport from "./Viewport";

class Geometry {
  location: Location;
  viewport: Viewport;

  constructor(location: Location, viewport: Viewport) {
    this.location = location
    this.viewport = viewport
  }  
}

export default Geometry;