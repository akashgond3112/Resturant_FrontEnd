import React, { useEffect, useState } from "react";
import { useShareNotificationStyles } from "./ShareNotificationModule";

export const ShareNotification: React.FC<{
  isDisplayed: boolean;
  content: string;
  setIsNotificationDisplayed: any;
}> = (props) => {
  const stylesProps = {
    visible: props.isDisplayed ? true : false,
  };

  const classes = useShareNotificationStyles(stylesProps);

  useEffect(() => {
    // Hide the share url after 2 seconds
    const timeoutId = setTimeout(() => {
      props.setIsNotificationDisplayed(false);
    }, 2000);

    // Clear the timeout when the component unmounts or is hidden
    return () => clearTimeout(timeoutId);
  }, [props]);

  return (
    <div className={classes.shareNotificationContainer}>
      <div className={classes.shareNotificationHolder} typeof="default">
        <span className={classes.shareNotificationContent}>
          {props.content}
        </span>
        <i
          className={classes.shareNotificationImage}
          color={props.isDisplayed ? "#24963F" : "#1C1C1C"}
          onClick={() => props.setIsNotificationDisplayed(!props.isDisplayed)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={props.isDisplayed ? "#24963F" : "#1C1C1C"}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            className={classes.shareNotificationSvg}
          >
            <title>cross</title>
            <path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path>
          </svg>
        </i>
      </div>
    </div>
  );
};
