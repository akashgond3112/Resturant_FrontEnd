import React, { useState } from "react";
import { useSection3Styles } from "./Section3Module";
import { Review } from "./Review/Review";

export const Section3: React.FC<{}> = (props) => {
  const classes = useSection3Styles();

  const [addReviewButtonClicked, setAddReviewButtonClicked] = useState(false);

  return (
    <>
      <article className={classes.main}>
        <div className={classes.container}>
          <section className={classes.section1}>
            <section role="tablist" className={classes.options}>
              <div className={classes.option} tabIndex={0} role="tab">
                <h2 className={classes.active} tabIndex={-1}>
                  <div className={classes.linkActive}>Reviews</div>
                </h2>
                <hr className={classes.underline} />
              </div>
              <div className={classes.option} tabIndex={0} role="tab">
                <h2 className={classes.inactive} tabIndex={-1}>
                  <div className={classes.linkInaActive}>Photos</div>
                </h2>
                <hr className={classes.underline} />
              </div>
              <hr className={classes.mainBorder} />
            </section>
            {/* Add Review section start */}
            <section className={classes.addReviewContainer}>
              <button
                // role="presentation"
                tabIndex={0}
                aria-disabled="false"
                className={classes.addReviewMain}
                onClick={() =>
                  setAddReviewButtonClicked(!addReviewButtonClicked)
                }
              >
                <span tabIndex={-1} className={classes.addReviewSpanPrimary}>
                  <span className={classes.addReviewSpanSecondary}>
                    Add Review
                  </span>
                </span>
              </button>
            </section>
            {/* Add Review section end */}
          </section>
        </div>
      </article>
      <Review
        addReviewButtonClicked={addReviewButtonClicked}
        setAddReviewButtonClicked={setAddReviewButtonClicked}
      />
    </>
  );
};

export default Section3;
