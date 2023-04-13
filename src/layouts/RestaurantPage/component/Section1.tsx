import React, { useState } from "react";
import { useSection1Styles } from "./Section1Module";

type Props = {};

const Section1 = (props: Props) => {
  const classes = useSection1Styles();
  const [loaded, setLoaded] = useState(false);

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
              src="https://b.zmtcdn.com/data/pictures/7/19672427/04f6dcb80cd2db91826d1fb49cf10820.jpg?output-format=webp&amp;fit=around|771.75:416.25&amp;crop=771.75:416.25;*,*"
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
                src="https://b.zmtcdn.com/data/pictures/7/19672427/04f6dcb80cd2db91826d1fb49cf10820.jpg?output-format=webp&amp;fit=around|771.75:416.25&amp;crop=771.75:416.25;*,*"
                loading="lazy"
                className={classes.image}
              ></img>
            </div>
          </div>
          <div className={classes.secondaryImage}>
            <div className={classes.imageHolder}>
              <img
                alt="abcd"
                src="https://b.zmtcdn.com/data/pictures/7/19672427/04f6dcb80cd2db91826d1fb49cf10820.jpg?output-format=webp&amp;fit=around|771.75:416.25&amp;crop=771.75:416.25;*,*"
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
                src="https://b.zmtcdn.com/data/pictures/7/19672427/04f6dcb80cd2db91826d1fb49cf10820.jpg?output-format=webp&amp;fit=around|771.75:416.25&amp;crop=771.75:416.25;*,*"
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
