import { NavLink } from "react-router-dom";
import Restaurant from "../../models/Restaurant/Restaurant";
import classes from "./SuggestedRestaurant.module.css";

export const SuggestedRestaurant: React.FC<{ resaurant: Restaurant }> = (props) => {
  if (props.resaurant.photos[0] === undefined) {
    return null;
  }
  const imgSrcUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${props.resaurant.photos[0].photo_reference}&key=${process.env.REACT_APP_GOOGLE_KEY}`;

  const imageStyle = {
    height: "6rem",
    width: "6rem",
  };

  const ratingStyle = {
    height: "1.5rem",
    width: "4rem",
  };

  return (
    <>
      <NavLink
        className={classes["container"]}
        key={props.resaurant.place_id}
        to={`/restaurant/${props.resaurant.place_id}`}
        style={{ textDecoration: "none" }}
      >
        <div
          className={classes["image-holder-pri image-holder-sec"]}
          style={imageStyle}
        >
          <img
            alt="restuarant"
            src={imgSrcUrl}
            loading="lazy"
            className={classes["image"]}
          />
        </div>
        <div className={classes["details-container"]}>
          <p className={classes["name"]}>{props.resaurant.name}</p>
          <div className={classes["rating-container"]}>
            <div className={classes["rating-holder"]}>
              <div
                className={classes["rating-main"]}
                color="#267E3E"
                style={ratingStyle}
              >
                <div className={classes["rating-inner"]}>
                  <div className={classes["rating-inner-container"]}>
                    <div className={classes["rating-value"]}>
                      {props.resaurant.rating}
                    </div>
                    <div className={classes["svg-holder"]}>
                      <i className={classes["svg-main"]} color="#FFFFFF">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#FFFFFF"
                          width="0.8rem"
                          height="0.8rem"
                          viewBox="0 0 20 20"
                          aria-labelledby="icon-svg-title- icon-svg-desc-"
                          role="img"
                          className={classes["svg-pri"]}
                        >
                          <title>star-fill</title>
                          <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path>
                        </svg>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p color="#4F4F4F" className={classes["address"]}>
            {props.resaurant.business_status}
          </p>
        </div>
      </NavLink>
    </>
  );
};
