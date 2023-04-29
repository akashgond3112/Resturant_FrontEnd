import AddressComponent from "../address/AddressComponent";
import Geometry from "../location/Geometry";
import CurrentOpeningHours from "../openingClosingHours/CurrentOpeningHours";
import OpeningHours from "../openingClosingHours/OpeningHours";
import Photo from "../photo/Photo";
import Review from "../reviews/Review";
import PlusCode from "../utilities/PlusCode";

class Restaurant {
  address_components: AddressComponent[];
  adr_address: string;
  business_status: string;
  current_opening_hours: CurrentOpeningHours;
  delivery: boolean;
  dine_in: boolean;
  formatted_address: string;
  formatted_phone_number: string;
  geometry: Geometry;
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  international_phone_number: string;
  name: string;
  opening_hours: OpeningHours;
  photos: Photo[];
  place_id: string;
  plus_code: PlusCode;
  rating: number;
  reference: string;
  reservable: boolean;
  reviews: Review[];
  serves_beer: boolean;
  serves_dinner: boolean;
  serves_wine: boolean;
  takeout: boolean;
  types: string[];
  url: string;
  user_ratings_total: number;
  utc_offset: number;
  vicinity: string;
  price_level: number;
  website: string;

  constructor(
    name: string,
    opening_hours: OpeningHours,
    photos: Photo[],
    place_id: string,
    rating: number,
    user_ratings_total: number,
    formatted_address: string,
    address_components?: AddressComponent[],
    adr_address?: string,
    business_status?: string,
    current_opening_hours?: CurrentOpeningHours,
    delivery?: boolean,
    dine_in?: boolean,
    formatted_phone_number?: string,
    geometry?: Geometry,
    icon?: string,
    icon_background_color?: string,
    icon_mask_base_uri?: string,
    international_phone_number?: string,
    plus_code?: PlusCode,
    reference?: string,
    reservable?: boolean,
    reviews?: Review[],
    serves_beer?: boolean,
    serves_dinner?: boolean,
    serves_wine?: boolean,
    takeout?: boolean,
    types?: string[],
    url?: string,
    utc_offset?: number,
    vicinity?: string,
    price_level?: number,
    website?: string
  ) {
    this.name = name;
    this.opening_hours = opening_hours;
    this.photos = photos;
    this.place_id = place_id;
    this.rating = rating;
    this.user_ratings_total = user_ratings_total;
    this.formatted_address = formatted_address;
    this.address_components = address_components!;
    this.adr_address = adr_address!;
    this.business_status = business_status!;
    this.current_opening_hours = current_opening_hours!;
    this.delivery = delivery!;
    this.dine_in = dine_in!;
    this.formatted_phone_number = formatted_phone_number!;
    this.geometry = geometry!;
    this.icon = icon!;
    this.icon_background_color = icon_background_color!;
    this.icon_mask_base_uri = icon_mask_base_uri!;
    this.international_phone_number = international_phone_number!;
    this.plus_code = plus_code!;
    this.reference = reference!;
    this.reservable = reservable!;
    this.reviews = reviews!;
    this.serves_beer = serves_beer!;
    this.serves_dinner = serves_dinner!;
    this.serves_wine = serves_wine!;
    this.takeout = takeout!;
    this.types = types!;
    this.url = url!;
    this.utc_offset = utc_offset!;
    this.vicinity = vicinity!;
    this.price_level = price_level!;
    this.website = website!;
  }
}

export default Restaurant;
