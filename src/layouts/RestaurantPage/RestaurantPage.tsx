import React from "react";
import Section1 from "./component/Section1";
import { useRestaurantPageStyles } from "./RestaurantPageModule";
import Section2 from "./component/Section2";

type Props = {};

const RestaurantPage = (props: Props) => {
  const classes = useRestaurantPageStyles();
  return (
    <div className={classes.main}>
      <Section1 />
      <Section2 />
    </div>
  );
};

export default RestaurantPage;
