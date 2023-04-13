import React from "react";
import { useSection2Styles } from "./Section2Module";
import { Rating } from "../../ResturantListPage/Rating";
import data from "../../../data/restaurant.json";

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
              </section>
              {/* Opening hours information */}
              <section></section>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Section2;
