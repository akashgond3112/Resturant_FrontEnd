import React from "react";
import Section1 from "./component/Section1";
import { useRestaurantPageStyles } from "./RestaurantPageModule";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import Section4 from "./component/Section4";

type Props = {};

const RestaurantPage = (props: Props) => {
  const classes = useRestaurantPageStyles();
  return (
    <div className={classes.main}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default RestaurantPage;
