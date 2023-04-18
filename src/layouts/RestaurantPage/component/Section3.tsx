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
        </section>
      </div>
    </article>
  );
}

export default Section3;
