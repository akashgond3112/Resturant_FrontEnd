import React, { useState } from "react";
import Restaurant from "../../../../models/Restaurant/Restaurant";
import { useReviewStyles } from "./Reviewmodule";
import avatar from "../../../../Images/PublicImages/akash.jpg";

export const Review: React.FC<{
  addReviewButtonClicked: boolean;
  setAddReviewButtonClicked: any;
}> = (props) => {
  const classes = useReviewStyles();
  // const [showReviewModal, setshowReviewModal] = useState(false);
  const [diningOptionSelected, setDiningOptionSelected] = useState(true);
  const [deliveryOptionSelected, setDeliveryOptionSelected] = useState(false);
  const [writeReviewBoxSelected, setWriteReviewBoxSelected] = useState(false);

  const handleDelieveryOption = () => {
    setDeliveryOptionSelected(true);
    setDiningOptionSelected(false);
  };

  const handleDiningOption = () => {
    setDiningOptionSelected(true);
    setDeliveryOptionSelected(false);
  };

  const handleWriteReviewBoxActive = () => {
    setWriteReviewBoxSelected(!writeReviewBoxSelected);
  };

  return (
    <div className={classes.main}>
      <div
        className={
          props.addReviewButtonClicked
            ? `${classes.modalHolderVisible}`
            : `${classes.modalHolderHidden}`
        }
        aria-hidden={props.addReviewButtonClicked ? `false` : `true`}
        role="dialog"
      >
        <div
          className={
            props.addReviewButtonClicked
              ? `${classes.modalBackgroundVisible}`
              : `${classes.modalBackgroundHidden}`
          }
          tabIndex={-1}
          onClick={() =>
            props.setAddReviewButtonClicked(!props.addReviewButtonClicked)
          }
        ></div>
        <div
          className={
            props.addReviewButtonClicked
              ? `${classes.modalMainVisible}`
              : `${classes.modalMainHidden}`
          }
          datatype="default"
          tabIndex={0}
        >
          {/* Section 1 start */}
          <section className={classes.addReviewHeaderMain}>
            <div className={classes.addReviewHeaderContent}>Add Review</div>
            <i
              className={classes.addReviewCloseButtonPrimary}
              color="#1C1C1C"
              aria-label="close Modal"
              tabIndex={0}
              onClick={() =>
                props.setAddReviewButtonClicked(!props.addReviewButtonClicked)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1C1C1C"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className={classes.addReviewCloseButtonSecondary}
              >
                <title>cross</title>
                <path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path>
              </svg>
            </i>
          </section>
          {/* Section 1 end */}
          {/* Section 2 start */}
          <section className={classes.addReviewHolderMain}>
            <section className={classes.addReviewHolderInner}>
              <h6 className={classes.addReviewRateExperienceContent}>
                Rate your experience for
              </h6>
              {/* Dining And Delievery Option start */}
              <div className={classes.dineAndDeliveryOptionMain}>
                <section className={classes.dineAndDeliveryOptionHolder}>
                  {/* Dining Start */}
                  <section className={classes.optionHolder}>
                    <label className={classes.optionLabel}>
                      <input
                        name="radio"
                        aria-label="Dining"
                        // label="Dining"
                        type="radio"
                        value="dining"
                        checked
                        style={{ display: "none" }}
                        onClick={handleDiningOption}
                      ></input>
                      <svg viewBox="0 0 20 20" className={classes.optionSvg}>
                        {diningOptionSelected ? (
                          <>
                            <circle
                              cx="10"
                              cy="10"
                              r="8"
                              name="radio"
                              className={classes.optionActiveOuterCircle}
                            ></circle>
                            <circle
                              cx="10"
                              cy="10"
                              r="5"
                              name="radio"
                              className={classes.optionActiveInnerCircle}
                            ></circle>
                          </>
                        ) : (
                          <>
                            <circle
                              cx="10"
                              cy="10"
                              r="8"
                              name="radio"
                              className={classes.optionInActiveCircle}
                            ></circle>
                          </>
                        )}
                      </svg>
                      <span className={classes.optionContent}>Dining</span>
                    </label>
                  </section>
                  {/* Dining End */}
                  {/* Delivery Start */}
                  <section className={classes.optionHolder}>
                    <label className={classes.optionLabel}>
                      <input
                        name="radio"
                        aria-label="Delivery"
                        type="radio"
                        value="delivery"
                        checked
                        style={{ display: "none" }}
                        onClick={handleDelieveryOption}
                      ></input>
                      <svg viewBox="0 0 20 20" className={classes.optionSvg}>
                        {deliveryOptionSelected ? (
                          <>
                            <circle
                              cx="10"
                              cy="10"
                              r="8"
                              name="radio"
                              className={classes.optionActiveOuterCircle}
                            ></circle>
                            <circle
                              cx="10"
                              cy="10"
                              r="5"
                              name="radio"
                              className={classes.optionActiveInnerCircle}
                            ></circle>
                          </>
                        ) : (
                          <>
                            <circle
                              cx="10"
                              cy="10"
                              r="8"
                              name="radio"
                              className={classes.optionInActiveCircle}
                            ></circle>
                          </>
                        )}
                      </svg>
                      <span className={classes.optionContent}>Delivery</span>
                    </label>
                  </section>
                  {/* Delivery End */}
                </section>
              </div>
              {/* Dining And Delievery Option end */}
              {/* Writing Review section start */}
              <section className={classes.writeReviewContainer}>
                <section className={classes.writeReviewMain}>
                  <div
                    className={`${classes.imageHolderPrimary}  ${classes.imageHolderSecondary}`}
                  >
                    <div className={classes.imageMain}></div>
                    <img
                      alt="abc"
                      src={avatar}
                      loading="lazy"
                      className={classes.image}
                    ></img>
                  </div>
                  <section className={classes.writeReviewHolder}>
                    <section className={classes.writeReviewBoxMain}>
                      <textarea
                        onClick={handleWriteReviewBoxActive}
                        tabIndex={0}
                        className={
                          writeReviewBoxSelected
                            ? `${classes.writeReviewBoxAreaActive}`
                            : `${classes.writeReviewBoxAreaInactive}`
                        }
                        style={{ height: "70px", width: "100%" }}
                      ></textarea>
                      <label
                        className={
                          writeReviewBoxSelected
                            ? `${classes.writeReviewBoxLabelActive}`
                            : `${classes.writeReviewBoxLabelInactive}`
                        }
                      >
                        Write your review
                      </label>
                    </section>
                  </section>
                </section>
              </section>
              {/* Writing Review section end */}
              {/* Submit Review section start */}
              <section className={classes.submitReviewContainer}>
                <button
                  // role="presentation"
                  tabIndex={0}
                  aria-disabled="false"
                  className={classes.submitReviewMain}
                >
                  <span
                    tabIndex={-1}
                    className={classes.submitReviewSpanPrimary}
                  >
                    <span className={classes.submitReviewSpanSecondary}>
                      Submit Review
                    </span>
                  </span>
                </button>
              </section>
              {/* Submit Review section end */}
            </section>
          </section>
          {/* Section 2 end */}
        </div>
      </div>
    </div>
  );
};
