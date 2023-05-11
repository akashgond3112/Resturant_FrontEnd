import React from "react";
import { useSection2Styles } from "./Section2Module";
import { Rating } from "../../ResturantListPage/Rating";
import MatchingDaySpan from "./MatchingDaySpan";
import EventSeatOutlinedIcon from "@mui/icons-material/EventSeatOutlined";
import SportsBarOutlinedIcon from "@mui/icons-material/SportsBarOutlined";
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined";
import WineBarOutlinedIcon from "@mui/icons-material/WineBarOutlined";
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";
import FlatwareOutlinedIcon from "@mui/icons-material/FlatwareOutlined";
import Direction from "./Direction/Direction";
import Share from "./Share/Share";
import Restaurant from "../../../models/Restaurant/Restaurant";
import Tooltip from "@mui/material/Tooltip";

export const Section2: React.FC<{ resaurant: Restaurant }> = (props) => {
  const classes = useSection2Styles();

  return (
    /* Information holder of the restaurant */
    <section className={classes.main}>
      {/* Hold Restaurant Details */}
      <section className={classes.restaurantInforamtion}>
        <section className={classes.detailSection}>
          <div className={classes.informationContainer}>
            <div className={classes.informationHolder}>
              <div className={classes.nameRatingContainer}>
                <h1 className={classes.restaurantName}>
                  {props.resaurant.name}
                </h1>
                {/* Rating information */}
                <div className={classes.ratingContainer}>
                  <Rating rating={props.resaurant.rating} />
                  <div className={classes.totalRatingContainer}>
                    <div className={classes.totalRating}>
                      {props.resaurant.user_ratings_total}
                    </div>
                    <div className={classes.totalRatingTitle}>
                      Users Reviews
                    </div>
                  </div>
                </div>
              </div>
              {/* Services type and address*/}
              <section className={classes.servicesAndAdressContainer}>
                <div className={classes.serviceTypes}>
                  {props.resaurant.types.map((type, index) => {
                    // Split the string by underscores
                    const words = type.split("_"); // ["meal", "takeaway"]

                    // Capitalize the first letter of each word and join them with a space
                    const capitalizedWords = words.map((word) => {
                      return word.charAt(0).toUpperCase() + word.slice(1);
                    }); // ["Meal", "Takeaway"]
                    const result = capitalizedWords.join(" "); // "Meal Takeaway"
                    return (
                      <span key={index}>
                        <div className={classes.type}>{result}</div>
                        {index === props.resaurant.types.length - 1 ? null : (
                          <span>, </span>
                        )}
                      </span>
                    );
                  })}
                </div>
                <a href={props.resaurant.url} className={classes.address}>
                  {props.resaurant.vicinity}
                </a>
              </section>
              {/* Opening hours information */}
              <section className={classes.restaurantHours}>
                <section className={classes.openingHours}>
                  <span className={classes.isOpen}>
                    {props.resaurant.opening_hours.open_now ? "Open" : "Close"}
                  </span>
                  <span className={classes.currentOpeningHours}>
                    <MatchingDaySpan
                      weekdayText={props.resaurant.opening_hours.weekday_text}
                    />
                  </span>
                </section>
              </section>
              {/* Services Provided */}
              <section className={classes.servicesProvided}>
                {props.resaurant.reservable ? (
                  <Tooltip title="Reservesation" placement="top">
                    <EventSeatOutlinedIcon
                      sx={{ "&:hover": { color: "rgb(239 79 95)" } }}
                    />
                  </Tooltip>
                ) : (
                  ``
                )}
                {props.resaurant.serves_beer ? (
                  <Tooltip title="Serve beer" placement="top">
                    <SportsBarOutlinedIcon
                      sx={{ "&:hover": { color: "rgb(239 79 95)" } }}
                    />
                  </Tooltip>
                ) : (
                  ``
                )}
                {props.resaurant.serves_dinner ? (
                  <Tooltip title="Serve Dinner" placement="top">
                    <DinnerDiningOutlinedIcon
                      sx={{ "&:hover": { color: "rgb(239 79 95)" } }}
                    />
                  </Tooltip>
                ) : (
                  ``
                )}
                {props.resaurant.serves_wine ? (
                  <Tooltip title="Serve Wine" placement="top">
                    <WineBarOutlinedIcon
                      sx={{ "&:hover": { color: "rgb(239 79 95)" } }}
                    />
                  </Tooltip>
                ) : (
                  ``
                )}
                {props.resaurant.delivery ? (
                  <Tooltip title="Delivery Available" placement="top">
                    <FlatwareOutlinedIcon
                      sx={{ "&:hover": { color: "rgb(239 79 95)" } }}
                    />
                  </Tooltip>
                ) : (
                  ``
                )}
                {props.resaurant.dine_in ? (
                  <Tooltip title="Dine In" placement="top">
                    <TakeoutDiningOutlinedIcon
                      sx={{ "&:hover": { color: "rgb(239 79 95)" } }}
                    />
                  </Tooltip>
                ) : (
                  ``
                )}
              </section>
            </div>
          </div>
        </section>
      </section>
      {/* Actions */}
      <div className={classes.actions}>
        <section className={classes.actionHolder}>
          <Direction url={props.resaurant.url} />
          <Share />
        </section>
      </div>
    </section>
  );
};
