import React, { useState } from "react";
import { useShareStyles } from "./ShareModule";
import { ShareNotification } from "./ShareNotification";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */

type Props = {};

function Share({}: Props) {
  const [isNotificationDisplayed, setIsNotificationDisplayed] = useState(false);

  const {classes} = useShareStyles();

  return (
    <>
      {isNotificationDisplayed ? (
        <ShareNotification
          isDisplayed={isNotificationDisplayed}
          content={
            isNotificationDisplayed ? "Restaurant URL Copied to Clipboard" : ""
          }
          setIsNotificationDisplayed={setIsNotificationDisplayed}
        />
      ) : (
        ``
      )}

      <div
        className={classes.shareContainer}
        onClick={() => setIsNotificationDisplayed(!isNotificationDisplayed)}
      >
        <i className={classes.shareInformation} color="#FF7E8B">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FF7E8B"
            width="16"
            height="16"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            className={classes.shareSvg}
          >
            <title>share</title>
            <path d="M0.72 19.94c-0.020 0-0.060 0-0.080 0s-0.060 0-0.080 0v0c-0.32-0.080-0.56-0.36-0.56-0.7 0 0 0 0 0-0.020v0c0-10.1 6.32-12.92 9.52-13.28v-4.34c0 0 0 0 0 0 0-0.38 0.32-0.7 0.72-0.7 0.18 0 0.36 0.060 0.48 0.18v0l9.060 8.32c0.14 0.14 0.22 0.34 0.22 0.54v0c0 0.2-0.1 0.4-0.24 0.52v0l-9.040 8.12c-0.12 0.1-0.3 0.18-0.46 0.18-0.12 0-0.22-0.040-0.32-0.080h0.020c-0.26-0.1-0.44-0.36-0.44-0.64v-4.3c-3.66 0.22-6.74 2.48-8.12 5.66l-0.020 0.060c-0.1 0.28-0.36 0.48-0.66 0.48v0zM10.24 12.32c0.4 0 0.72 0.32 0.72 0.72v0 3.4l7.26-6.5-7.26-6.66v3.32c0 0.4-0.32 0.72-0.72 0.72v0c-2.18 0-7.48 1.7-8.58 9 2.060-2.46 5.14-4 8.56-4 0.020 0 0.020 0 0.020 0v0z"></path>
          </svg>
        </i>
        <span className={classes.share}>Share</span>
      </div>
    </>
  );
}

export default Share;
