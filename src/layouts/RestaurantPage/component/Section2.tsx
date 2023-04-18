import React from "react";
import { useSection2Styles } from "./Section2Module";
import { Rating } from "../../ResturantListPage/Rating";
import data from "../../../data/restaurant.json";
import MatchingDaySpan from "./MatchingDaySpan";
import EventSeatOutlinedIcon from "@mui/icons-material/EventSeatOutlined";
import SportsBarOutlinedIcon from "@mui/icons-material/SportsBarOutlined";
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined";
import WineBarOutlinedIcon from "@mui/icons-material/WineBarOutlined";
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";
import FlatwareOutlinedIcon from "@mui/icons-material/FlatwareOutlined";
import Direction from "./Direction/Direction";
import Share from "./Share/Share";

type Props = {};

const Section2 = (props: Props) => {
  const classes = useSection2Styles();

  console.log(data.result);

  return (
    /* Information holder of the restaurant */
    <section className={classes.main}>
      {/* Hold Restaurant Details */}
      <section className={classes.restaurantInforamtion}>
        <section className={classes.detailSection}>
          <div className={classes.informationContainer}>
            <div className={classes.informationHolder}>
              <div className={classes.nameRatingContainer}>
                <h1 className={classes.restaurantName}>{data.result.name}</h1>
                {/* Rating information */}
                <div className={classes.ratingContainer}>
                  <Rating rating={data.result.rating} />
                  <div className={classes.totalRatingContainer}>
                    <div className={classes.totalRating}>
                      {data.result.user_ratings_total}
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
                  {data.result.types.map((type, index) => {
                    // Split the string by underscores
                    const words = type.split("_"); // ["meal", "takeaway"]

                    // Capitalize the first letter of each word and join them with a space
                    const capitalizedWords = words.map((word) => {
                      return word.charAt(0).toUpperCase() + word.slice(1);
                    }); // ["Meal", "Takeaway"]
                    const result = capitalizedWords.join(" "); // "Meal Takeaway"
                    return (
                      <span key={index}>
                        <a
                          href="https://www.zomato.com/bangalore/restaurants/north-indian/"
                          className={classes.type}
                        >
                          {result}
                        </a>
                        {index === data.result.types.length - 1 ? null : (
                          <span>, </span>
                        )}
                      </span>
                    );
                  })}
                </div>
                <a href={data.result.url} className={classes.address}>
                  {data.result.vicinity}
                </a>
              </section>
              {/* Opening hours information */}
              <section className={classes.restaurantHours}>
                <section className={classes.openingHours}>
                  <span className={classes.isOpen}>
                    {data.result.current_opening_hours.open_now
                      ? "Open"
                      : "Close"}
                  </span>
                  <span className={classes.currentOpeningHours}>
                    <MatchingDaySpan
                      weekdayText={
                        data.result.current_opening_hours.weekday_text
                      }
                    />
                  </span>
                </section>
              </section>
              {/* Services Provided */}
              <section className={classes.servicesProvided}>
                {data.result.reservable ? <EventSeatOutlinedIcon /> : ``}
                {data.result.serves_beer ? <SportsBarOutlinedIcon /> : ``}
                {data.result.serves_dinner ? <DinnerDiningOutlinedIcon /> : ``}
                {data.result.serves_wine ? <WineBarOutlinedIcon /> : ``}
                {data.result.delivery ? <FlatwareOutlinedIcon /> : ``}
                {data.result.dine_in ? <TakeoutDiningOutlinedIcon /> : ``}
              </section>
            </div>
          </div>
        </section>
      </section>
      {/* Actions */}
      <div className={classes.actions}>
        <section className={classes.actionHolder}>
          <Direction url={data.result.url} />
          <Share/>
        </section>
      </div>
    </section>
  );
};

export default Section2;
