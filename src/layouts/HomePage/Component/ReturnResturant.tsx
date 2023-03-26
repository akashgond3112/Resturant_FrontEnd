import ResturantModal from "../../../models/Resturant/ResturantModal";
import { Rating } from "./Rating";
import classes from "./ReturnResturant.module.css";
import { useGetDistance } from "../hooks/use-getDistance";

export const ReturnResturant: React.FC<{ resaurant: ResturantModal }> = (
  props
) => {
  const distance = useGetDistance(
    props.resaurant.geometry.location.lat,
    props.resaurant.geometry.location.lng,
    "N"
  );

  if (props.resaurant.photos[0] === undefined) {
    return null;
  }
  const imgSrcUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${props.resaurant.photos[0].photo_reference}&key=${process.env.REACT_APP_GOOGLE_KEY}`;

  return (
    <div className={classes["resturant-jumbo"]}>
      <div className={classes["jumbo-tracker"]}>
        <div className={classes["resturant_main"]}>
          <a href="#" className={classes["resturant_image-primary"]}>
            <div className={classes["resturant_image-secondary"]}>
              <div className={classes["resturant_image-holder"]}>
                <img
                  src={imgSrcUrl}
                  width="400"
                  height="300"
                  alt="book"
                  className={classes["resturant-image"]}
                  loading="lazy"
                />
              </div>
            </div>
            <p className={classes["resturant_distance"]}>
              {distance.toFixed(2)} mile
            </p>
          </a>
          <a href="#" className={classes["resturant_details-primary"]}>
            <div className={classes["resturant-details"]}>
              <h4 className={classes["resturant-name"]}>
                {props.resaurant.name}
              </h4>
              <Rating rating={props.resaurant.rating} />
            </div>
            <p className={classes["resturant-address"]}>
              {props.resaurant.formatted_address}
            </p>
            {props.resaurant.opening_hours !== undefined ? (
              <p
                className={classes["resturant-hours"]}
                style={{
                  color: props.resaurant.opening_hours.open_now
                    ? "rgb(38, 126, 62)"
                    : "rgb(247, 8, 8)",
                }}
              >
                {props.resaurant.opening_hours.open_now ? "Open" : "Closed"}
              </p>
            ) : (
              ""
            )}
          </a>
        </div>
      </div>
    </div>
  );
};
