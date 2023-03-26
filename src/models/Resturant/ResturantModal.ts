import Geometry from "../location/Geometry";
import OpeningHours from "../openingClosingHours/OpeningHours";
import Photo from "../photo/Photo";
import PlusCode from "../utilities/PlusCode";

class ResturantModal {
  business_status: string;
  formatted_address: string;
  geometry: Geometry;
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  opening_hours: OpeningHours;
  photos: Photo[];
  place_id: string;
  plus_code: PlusCode;
  price_level: number;
  rating: number;
  reference: string;
  types: string[];
  user_ratings_total: number;

  constructor(
    _name: string,
    _opening_hours: OpeningHours,
    _photos: Photo[],
    _place_id: string,
    _rating: number,
    _user_ratings_total: number,
    _formatted_address: string,
    _price_level: number,
    _business_status?: string,
    _geometry?: Geometry,
    _icon?: string,
    _icon_background_color?: string,
    _icon_mask_base_uri?: string,
    _plus_code?: PlusCode,
    _reference?: string,
    _types?: string[]
  ) {
    this.name = _name;
    this.opening_hours = _opening_hours;
    this.photos = _photos;
    this.place_id = _place_id;
    this.rating = _rating;
    this.user_ratings_total = _user_ratings_total;
    this.formatted_address = _formatted_address;
    this.price_level = _price_level;
    this.business_status = _business_status!;
    this.geometry = _geometry!;
    this.icon = _icon!;
    this.icon_background_color = _icon_background_color!;
    this.icon_mask_base_uri = _icon_mask_base_uri!;
    this.plus_code = _plus_code!;
    this.reference = _reference!;
    this.types = _types!;
  }
}

export default ResturantModal;
