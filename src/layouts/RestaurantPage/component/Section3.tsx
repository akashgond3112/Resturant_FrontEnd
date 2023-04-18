import React from "react";
import { useSection3Styles } from "./Section3Module";

type Props = {};

function Section3({}: Props) {
  const classes = useSection3Styles();
  return (
    <article className={classes.main}>
      <div className={classes.container}>
        <section className={classes.section1}>
          <section role="tablist" className={classes.options}>
            <div className={classes.option} tabIndex={0} role="tab">
              <h2 className={classes.active} tabIndex={-1}>
                <a
                  href="https://www.zomato.com/bangalore/ironhill-bengaluru-marathahalli-bangalore/reviews"
                  className={classes.linkActive}
                >
                  Reviews
                </a>
              </h2>
              <hr className={classes.underline} />
            </div>
            <div className={classes.option} tabIndex={0} role="tab">
              <h2 className={classes.inactive} tabIndex={-1}>
                <a
                  href="https://www.zomato.com/bangalore/ironhill-bengaluru-marathahalli-bangalore/reviews"
                  className={classes.linkInaActive}
                >
                  Photos
                </a>
              </h2>
              <hr className={classes.underline} />
            </div>
            <hr className={classes.mainBorder} />
          </section>
        </section>
      </div>
    </article>
  );
}

export default Section3;
