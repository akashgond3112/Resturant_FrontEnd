import classes from "./mapstyle.module.css";

export const GoolgeMap = () => {    
  return (
    <div className={classes["map-container"]}>
      <div id={classes["map"]}></div>
    </div>
  );
};
