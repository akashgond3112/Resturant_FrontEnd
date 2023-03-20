import classes from "./spinner.module.css"

export const SpinnerLoading = () => {
  return (
    <div className={classes["spinner-loader"]}>
      <div className={classes["lds-roller"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
