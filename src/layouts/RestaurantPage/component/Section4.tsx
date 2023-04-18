import React from "react";
import { useSection4Styles } from "./Section4Module";

type Props = {};

function Section4({}: Props) {
  const classes = useSection4Styles();

  return (
    <section className={classes.main}>
      <div className={classes.container}>
        <div className={classes.subContainer}>
          <section className={classes.reviewSectionMain}>
            <h2 className={classes.restaurantName}>
              Ironhill Bengaluru Reviews
            </h2>
            <div className={classes.reviewContainer}>
              {/* User Information Start*/}
              <section className={classes.userSection}>
                <div className={classes.UserInfoContainer}>
                  {/* User Image Start */}
                  <a
                    href="#"
                    rel="nofollow noreferrer noopener"
                    className={classes.userProfileLink}
                  >
                    <div className={classes.imageHolder}>
                      <div className={classes.imagePrimary}></div>
                      <img
                        alt="abc"
                        src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A"
                        loading="lazy"
                        className={classes.image}
                      ></img>
                    </div>
                  </a>
                  {/* User Image End */}
                  {/* User Profile Detail Start*/}
                  <div className={classes.userProfileDetails}>
                    <a
                      href="#"
                      rel="nofollow noreferrer noopener"
                      className={classes.userProfileLink}
                    >
                      <p className={classes.userName}>Akash</p>
                    </a>
                    <section className={classes.userTotalReviewFollower}>
                      <span className={classes.userTotalReviewContainer}>
                        1 reviews
                      </span>
                      <span className={classes.userTotalFollowerContainer}>
                        0 Followers
                      </span>
                    </section>
                  </div>
                  {/* User Profile Detail End*/}
                </div>
                {/* Follow Button Start */}
                <button className={classes.followButtonContainer}>
                  <span className={classes.followButton}>
                    <span className={classes.followButtonContent}>Follow</span>
                  </span>
                </button>
                {/* Follow Button End */}
              </section>
              {/* User Information End */}
              {/* Rating section start */}
              <div></div>
              {/* Rating section end  */}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Section4;
