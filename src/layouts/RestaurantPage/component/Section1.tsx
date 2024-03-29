import React, { useState } from "react";
import { useSection1Styles } from "./Section1Module";
import Restaurant from "../../../models/Restaurant/Restaurant";
import img1 from "../../../Images/PublicImages/restaurant_1.jpg";
import img2 from "../../../Images/PublicImages/restaurant_2.png";
import img3 from "../../../Images/PublicImages/restaurant_3.png";
import img4 from "../../../Images/PublicImages/restaurant_4.png";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */

export const Section1: React.FC<{ restaurant: Restaurant }> = (props) => {
  const {classes} = useSection1Styles();
  const [loaded, setLoaded] = useState(false);

  const img1 = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${props.restaurant.photos[0].photo_reference}&key=${process.env.REACT_APP_GOOGLE_KEY}`;
  const img2 = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${props.restaurant.photos[1].photo_reference}&key=${process.env.REACT_APP_GOOGLE_KEY}`;
  const img3 = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${props.restaurant.photos[2].photo_reference}&key=${process.env.REACT_APP_GOOGLE_KEY}`;
  const img4 = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${props.restaurant.photos[3].photo_reference}&key=${process.env.REACT_APP_GOOGLE_KEY}`;

  const handleImageLoaded = () => {
    setLoaded(true);
  };

  return (
    <section className={classes.main}>
      <div className={classes.container}>
        <div className={classes.primaryImage}>
          <div className={classes.imageHolder}>
            <img
              alt="abcd"
              src={img1}
              loading="lazy"
              onLoad={handleImageLoaded}
              className={classes.image}
              // className={`${classes.animateImage} ${
              //   loaded && classes.animateImageLoaded
              // }`}
            ></img>
          </div>
        </div>
        <section className={classes.secondaryImageContainer}>
          <div className={classes.secondaryImage}>
            <div className={classes.imageHolder}>
              <img
                alt="abcd"
                src={img2}
                loading="lazy"
                className={classes.image}
              ></img>
            </div>
          </div>
          <div className={classes.secondaryImage}>
            <div className={classes.imageHolder}>
              <img
                alt="abcd"
                src={img3}
                loading="lazy"
                className={classes.image}
              ></img>
            </div>
          </div>
        </section>
        <section className={classes.secondaryImageContainer}>
          <div className={classes.secondaryImage}>
            <div className={classes.imageHolder}>
              <img
                alt="abcd"
                src={img4}
                loading="lazy"
                className={classes.image}
              ></img>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Section1;
