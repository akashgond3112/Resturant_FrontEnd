import classes from "./EndOfResult.module.css";

export const EndOfResult = () => {
  return (
    <>
      <div className={classes["main"]}>
        <div className={classes["container"]}>
          <div className={classes["message_holder"]}>
            <h3 className={classes["message_main"]}>End of search results</h3>
            <h4 className={classes["message_secondary"]}></h4>
          </div>
          <div className={classes["image_holder"]} style={{ width: 200 }}>
            <div className={classes["img_background"]}></div>
            <img
              alt="End of search results"
              src="https://b.zmtcdn.com/web/assets/search/6d548ba48f0e4e4b46c19ad4b15a3f011615379209.jpeg"
              loading="lazy"
              className={classes["end_of_result_image"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};
