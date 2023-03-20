import Location from "./Location";

class Geometry {
  location: Location
  constructor(_location?: Location) {
    this.location = _location!;
  }
}

export default Geometry;