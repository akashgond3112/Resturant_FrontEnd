import React, { useContext, useEffect, useRef, useState } from "react";
import { useSection4Styles } from "./Section4Module";
import { fetchSentiment, getReviews } from "../../../api/stateAPI";
import { RestaurantReviews } from "../../../api/RestaurantReview";
import avatar from "../../../Images/PublicImages/akash.jpg";
import AuthContext from "../../../store/authContext";

export const Section4: React.FC<{
  restaurantName: string;
}> = (props) => {
  const classes = useSection4Styles();

  const sentimentEngineEnabled =
    process.env.REACT_APP_BASE_USE_SENTIMENT_ENGINE;

  const [restaurantsReviews, setRestaurantsReviews] = useState<
    RestaurantReviews[]
  >([]);
  const [writeCommentBoxSelected, setWriteCommentBoxSelected] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [sentimentValue, setSentimentValue] = useState("");
  const [noOfComments, setNoOfComments] = useState(0);
  const [noOfVotes, setNoOfVotes] = useState(0);

  const boxRef = useRef<HTMLDivElement>(null);
  const ctx = useContext(AuthContext);
  const key = window.location.pathname.split("/")[2];

  /* Handle an event when user is writing something and clicked 
  outsied the text area to remove focus from text box. */
  const handleClickOutsideBox = (event: MouseEvent) => {
    if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
      setWriteCommentBoxSelected(false);
    }
  };

  useEffect(() => {
    ctx.onUserInfo();
    console.log(ctx);
    console.log("Inside Second use effect : " + ctx.userId);
    getReviews(key, ctx.token, ctx.userId)
      .then((data: any) => {
        if (data.status === 200) {
          const restaurantReview: RestaurantReviews[] = data.data as [
            RestaurantReviews
          ];
          setRestaurantsReviews(restaurantReview);
        }
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  }, []);

  /* This take care of if there is any change in dom and call the method defined */
  useEffect(() => {
    document.addEventListener("click", handleClickOutsideBox);

    return () => {
      document.removeEventListener("click", handleClickOutsideBox);
    };
  }, []);

  /* Handle when user press enter button to add the comment. */
  const onAddCommentEnterPress = (e: {
    key: string;
    keyCode: number;
    shiftKey: boolean;
    preventDefault: () => void;
  }) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      if (e.key === "Enter") {
        console.log(commentValue);
        setWriteCommentBoxSelected(false);
        setCommentValue("");
      }
    }
  };

  /* Handle if there is any change on the current comment text area */
  const handleCommentChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCommentValue(event.target.value);
    console.log(commentValue);
  };

  /* we define a function called getRatingColor that takes a number parameter called rating 
  and returns a string that represents the color associated with that rating. */

  function getRatingColor(rating: number): string {
    let color: string;

    switch (rating) {
      case 1:
        color = "#CB202D";
        break;
      case 2:
        color = "#FF7800";
        break;
      case 3:
        color = "#CDD614";
        break;
      case 4:
        color = "#5BA829";
        break;
      case 5:
        color = "#305D02";
        break;
      default:
        color = "#000000"; // black (default value if rating is not between 1 and 5)
        break;
    }

    return color;
  }

  /* The function countUserReviews takes an array of review objects and a user ID as inputs, 
  and returns the number of reviews in the array that match the given user ID. 
  The function loops through each review object in the array and checks if the userId property of the review object matches the given user ID. 
  If there is a match, the function increments a counter variable. Finally, the function returns the counter variable, 
  which represents the number of reviews that match the given user ID. */
  function countUserReviews(
    reviews: RestaurantReviews[],
    userId: number
  ): number {
    let count = 0;
    for (const review of reviews) {
      if (review.userId === userId) {
        count++;
      }
    }
    return count;
  }

  let i = 0;

  function fetchSentimentValue(review: string) {
    fetchSentiment(review).then((data) => {
      setSentimentValue(data.sentiment);
    });
  }

  return (
    <>
      <section
        className={classes.main}
        ref={boxRef}
        onClick={() => setWriteCommentBoxSelected(!writeCommentBoxSelected)}
      >
        <div className={classes.container}>
          <div className={classes.subContainer}>
            <section className={classes.reviewSectionMain}>
              <h2 className={classes.restaurantName}>{props.restaurantName}</h2>
              {restaurantsReviews?.map(
                (review: RestaurantReviews, index: number) => {
                  if (sentimentEngineEnabled === "true") {
                    fetchSentimentValue(review.review);
                     console.log(i);
                     i++;
                  }
                 

                  return (
                    <div className={classes.reviewContainer} key={index}>
                      {/* User Information Start*/}
                      <section className={classes.userSection}>
                        <div className={classes.UserInfoContainer}>
                          {/* User Image Start */}
                          <a
                            href={review.userName}
                            rel="nofollow noreferrer noopener"
                            className={classes.userProfileLink}
                          >
                            <div className={classes.imageHolder}>
                              <div className={classes.imagePrimary}></div>
                              <img
                                alt="user"
                                src={avatar}
                                loading="lazy"
                                className={classes.image}
                              ></img>
                            </div>
                          </a>
                          {/* User Image End */}
                          {/* User Profile Detail Start*/}
                          <div className={classes.userProfileDetails}>
                            <a
                              href={review.userName}
                              rel="nofollow noreferrer noopener"
                              className={classes.userProfileLink}
                            >
                              <p className={classes.userName}>
                                {review.userName}
                              </p>
                            </a>
                            <section
                              className={classes.userTotalReviewFollower}
                            >
                              <span
                                className={classes.userTotalReviewContainer}
                              >
                                {`${countUserReviews(
                                  restaurantsReviews!,
                                  review.userId
                                )} reviews`}
                              </span>
                              <span
                                className={classes.userTotalFollowerContainer}
                              >
                                0 Followers
                              </span>
                            </section>
                          </div>
                          {/* User Profile Detail End*/}
                        </div>
                        {/* Follow Button Start */}
                        <button className={classes.followButtonContainer}>
                          <span className={classes.followButton}>
                            <span className={classes.followButtonContent}>
                              Follow
                            </span>
                          </span>
                        </button>
                        {/* Follow Button End */}
                      </section>
                      {/* User Information End */}
                      {/* Rating section start */}
                      <div className={classes.ratingContainer}>
                        <div className={classes.ratingMain}>
                          <div
                            className={classes.ratingHolder}
                            style={{
                              backgroundColor: `${getRatingColor(
                                review.rating
                              )}`,
                            }}
                          >
                            <div className={classes.ratingHolderPrimary}>
                              <div
                                className={classes.ratingHolderPrimaryContent}
                              >
                                <div className={classes.ratingNumber}>
                                  {review.rating}
                                </div>
                                <div className={classes.ratingStarContainer}>
                                  <i
                                    className={classes.ratingStarPrimary}
                                    color="#FFFFFF"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="#FFFFFF"
                                      width="0.8rem"
                                      height="0.8rem"
                                      viewBox="0 0 20 20"
                                      aria-labelledby="icon-svg-title- icon-svg-desc-"
                                      role="img"
                                      className={classes.ratingStarSecondary}
                                    >
                                      <title>star-fill</title>
                                      <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path>
                                    </svg>
                                  </i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={classes.ratingContent}>
                            <div className={classes.ratingContentPrimary}></div>
                            <div className={classes.ratingContentSecondary}>
                              Dining
                            </div>
                          </div>
                        </div>
                        <p
                          className={`${classes.time}  ${classes.timeStamp}`}
                          color="#9C9C9C"
                        >
                          {`${review.timePast} days ago. `}
                        </p>
                        <p
                          className={`${classes.time}  ${classes.timeStamp}`}
                          color="#9C9C9C"
                        >
                          {sentimentValue === "Positive" ? "😃" : ""}
                          {sentimentValue === "Negative" ? "😞" : ""}
                          {sentimentValue === "Neutral" ? "😐" : ""}
                        </p>
                      </div>
                      {/* Rating section end  */}
                      {/* Customer review start */}
                      <p className={classes.customerReview}>{review.review}</p>
                      {/* Customer review end */}
                      {/* Number of comments and votes helpful start*/}
                      <section className={classes.NoOfVotesCommnets}>
                        <p color="#9C9C9C" className={classes.counts}>
                          {`${review.likes.length} Votes for helpful , ${review.comments.length} Comments`}
                        </p>
                      </section>
                      {/* Number of comments and votes helpful end*/}
                      {/* Review Action start */}
                      <section className={classes.actionContainer}>
                        <div className={`${classes.helpfulAndShareMain}`}>
                          <i className={classes.symbolPrimary} color="#828282">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#828282"
                              // fill="#EF4F5F"
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              aria-labelledby="icon-svg-title- icon-svg-desc-"
                              role="img"
                              className={classes.symbolSecondary}
                            >
                              <title>thumb-up</title>
                              <path d="M19.3 7.5c-0.389-0.51-0.996-0.837-1.679-0.84h-3.581v-2.38c0.002-0.043 0.003-0.094 0.003-0.145 0-2.11-1.71-3.82-3.82-3.82-0.071 0-0.142 0.002-0.213 0.006l0.010-0c-0.001 0-0.003-0-0.004-0-0.369 0-0.674 0.278-0.715 0.637l-0 0.003c-0.275 1.592-0.602 2.946-1.005 4.266l0.065-0.246c-0.642 1.532-2.111 2.598-3.835 2.64l-0.005 0h-3.56c-0.53 0-0.96 0.43-0.96 0.96v0 10.24c0.011 0.522 0.437 0.94 0.96 0.94 0 0 0 0 0 0h3.32c0 0 0 0 0 0 0.523 0 0.949-0.418 0.96-0.939l0-0.001v-0.9c1.38 0.78 3.6 1.84 4.76 1.84h4.52c0.092 0.010 0.198 0.016 0.306 0.016 1.36 0 2.509-0.899 2.888-2.134l0.006-0.021c0.787-1.819 1.508-3.994 2.044-6.241l0.056-0.279c0.116-0.372 0.184-0.8 0.184-1.243 0-0.877-0.263-1.693-0.713-2.373l0.010 0.016zM3.82 18.34h-2.4v-9.3h2.4v9.3zM18.44 10.78c-0.58 2.469-1.28 4.591-2.141 6.628l0.101-0.268c-0.175 0.732-0.823 1.268-1.597 1.268-0.107 0-0.212-0.010-0.313-0.030l0.010 0.002h-4.5c-0.9 0-3.48-1.28-4.76-2.060v-7.32c2.048-0.31 3.719-1.668 4.466-3.502l0.014-0.038c0.328-1.003 0.634-2.242 0.855-3.509l0.025-0.171c1.156 0.207 2.022 1.204 2.022 2.404 0 0.034-0.001 0.067-0.002 0.101l0-0.005v3.1c0 0.398 0.322 0.72 0.72 0.72v0h4.28c0.228 0 0.431 0.109 0.559 0.278l0.001 0.002c0.253 0.427 0.403 0.942 0.403 1.491 0 0.325-0.052 0.637-0.149 0.93l0.006-0.021z"></path>
                            </svg>
                          </i>
                          <span className={classes.actionContent}>Helpful</span>
                        </div>
                        <div
                          className={`${classes.commentMain}`}
                          onClick={() => setShowCommentBox(!showCommentBox)}
                        >
                          <i className={classes.symbolPrimary} color="#828282">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#828282"
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              aria-labelledby="icon-svg-title- icon-svg-desc-"
                              role="img"
                              className={classes.symbolSecondary}
                            >
                              <title>chat</title>
                              <path d="M19.8 17.26c-1.347-1.31-2.182-3.139-2.182-5.163 0-0.062 0.001-0.124 0.002-0.186l-0 0.009v-5.26c-0.089-2.78-2.364-5.001-5.158-5.001-0.029 0-0.058 0-0.087 0.001l0.004-0h-7.3c-0.018-0-0.039-0-0.060-0-2.766 0-5.009 2.236-5.020 4.999v6.681c0.022 2.755 2.261 4.98 5.020 4.98 0.021 0 0.042-0 0.063-0l-0.003 0h14.3c0.335-0.009 0.603-0.283 0.603-0.62 0-0.172-0.070-0.328-0.183-0.44l-0-0zM11.98 16.42h-6.9c-0.012 0-0.026 0-0.041 0-1.713 0-3.106-1.372-3.139-3.077l-0-0.003v-6.68c0.034-1.708 1.426-3.080 3.139-3.080 0.014 0 0.029 0 0.043 0l-0.002-0h7.3c0.025-0.001 0.055-0.001 0.085-0.001 1.738 0 3.158 1.359 3.255 3.073l0 0.009v5.26c-0.001 0.038-0.001 0.084-0.001 0.129 0 1.606 0.4 3.118 1.106 4.442l-0.025-0.051zM11.66 6.9h-6.42c-0.467 0.070-0.822 0.469-0.822 0.95s0.354 0.88 0.817 0.949l0.005 0.001h6.42c0.467-0.070 0.822-0.469 0.822-0.95s-0.354-0.88-0.817-0.949l-0.005-0.001zM11.66 10.96h-6.42c-0.467 0.070-0.822 0.469-0.822 0.95s0.354 0.88 0.817 0.949l0.005 0.001h6.42c0.467-0.070 0.822-0.469 0.822-0.95s-0.354-0.88-0.817-0.949l-0.005-0.001z"></path>
                            </svg>
                          </i>
                          <span className={classes.actionContent}>Comment</span>
                        </div>
                        <div className={`${classes.helpfulAndShareMain}`}>
                          <i className={classes.symbolPrimary} color="#828282">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#828282"
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              aria-labelledby="icon-svg-title- icon-svg-desc-"
                              role="img"
                              className={classes.symbolSecondary}
                            >
                              <title>share</title>
                              <path d="M0.72 19.94c-0.020 0-0.060 0-0.080 0s-0.060 0-0.080 0v0c-0.32-0.080-0.56-0.36-0.56-0.7 0 0 0 0 0-0.020v0c0-10.1 6.32-12.92 9.52-13.28v-4.34c0 0 0 0 0 0 0-0.38 0.32-0.7 0.72-0.7 0.18 0 0.36 0.060 0.48 0.18v0l9.060 8.32c0.14 0.14 0.22 0.34 0.22 0.54v0c0 0.2-0.1 0.4-0.24 0.52v0l-9.040 8.12c-0.12 0.1-0.3 0.18-0.46 0.18-0.12 0-0.22-0.040-0.32-0.080h0.020c-0.26-0.1-0.44-0.36-0.44-0.64v-4.3c-3.66 0.22-6.74 2.48-8.12 5.66l-0.020 0.060c-0.1 0.28-0.36 0.48-0.66 0.48v0zM10.24 12.32c0.4 0 0.72 0.32 0.72 0.72v0 3.4l7.26-6.5-7.26-6.66v3.32c0 0.4-0.32 0.72-0.72 0.72v0c-2.18 0-7.48 1.7-8.58 9 2.060-2.46 5.14-4 8.56-4 0.020 0 0.020 0 0.020 0v0z"></path>
                            </svg>
                          </i>
                          <span className={classes.actionContent}>Share</span>
                        </div>
                      </section>
                      {/* Review Action end */}
                      {/* Comment secton start */}
                      {showCommentBox && (
                        <>
                          {/*Add comment start */}
                          {ctx.isLoggedIn && (
                            <div className={classes.commentImageMain}>
                              <div className={classes.imageContainer}>
                                <a
                                  href={review.userName}
                                  className={classes.userProfileLink}
                                >
                                  <div className={classes.imageHolder}>
                                    <div className={classes.imagePrimary}></div>
                                    <img
                                      alt="user"
                                      src={avatar}
                                      loading="lazy"
                                      className={classes.image}
                                    ></img>
                                  </div>
                                </a>
                              </div>
                              <div className={classes.writeCommentContainer}>
                                <section
                                  className={classes.writeCommentBoxMain}
                                  defaultValue={commentValue}
                                >
                                  <textarea
                                    onClick={() =>
                                      setWriteCommentBoxSelected(
                                        !writeCommentBoxSelected
                                      )
                                    }
                                    onKeyDown={onAddCommentEnterPress}
                                    onChange={handleCommentChange}
                                    value={commentValue}
                                    tabIndex={0}
                                    className={
                                      writeCommentBoxSelected
                                        ? `${classes.writeCommentBoxAreaActive}`
                                        : `${classes.writeCommentBoxAreaInactive}`
                                    }
                                    style={{ height: "70px", width: "100%" }}
                                  ></textarea>
                                  <label
                                    className={
                                      writeCommentBoxSelected
                                        ? `${classes.writeCommentBoxLabelActive}`
                                        : `${classes.writeCommentBoxLabelInactive}`
                                    }
                                    defaultValue={commentValue}
                                  >
                                    Write your Comment
                                  </label>
                                </section>
                              </div>
                            </div>
                          )}
                          {/*Add comment end */}
                          {/* List of Comment Start */}
                          <div className={classes.lsitOfCommentMain}>
                            <div className={classes.listOfCommentImageMain}>
                              <div className={classes.imageContainer}>
                                <a
                                  href={review.userName}
                                  className={classes.userProfileLink}
                                >
                                  <div className={classes.imageHolder}>
                                    <div className={classes.imagePrimary}></div>
                                    <img
                                      alt="user"
                                      src={avatar}
                                      loading="lazy"
                                      className={classes.image}
                                    ></img>
                                  </div>
                                </a>
                              </div>
                              <div className={classes.commentContainer}>
                                {/* User Profile Detail Start*/}
                                <div className="userProfileDetailsInComment">
                                  <a
                                    href={review.userName}
                                    rel="nofollow noreferrer noopener"
                                    className={classes.userProfileLink}
                                  >
                                    <p className={classes.userName}>
                                      {review.userName}
                                    </p>
                                  </a>
                                </div>
                                {/* User Profile Detail End*/}
                                {/* Comment Content And action start */}
                                <div className="commentContentAndActionContainer">
                                  <div className={classes.commentContentMain}>
                                    Its a really good Review!
                                  </div>
                                  <div
                                    className={
                                      classes.commentContentActionContainer
                                    }
                                  >
                                    just now
                                    <span
                                      className={
                                        classes.commentContentActionHolder
                                      }
                                    >
                                      <span
                                        className={classes.commentContentAction}
                                      >
                                        Edit
                                      </span>
                                      <span
                                        className={classes.commentContentAction}
                                      >
                                        Delete
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                {/* Comment Content And action end */}
                              </div>
                            </div>
                          </div>
                          {/* List of Comment End*/}
                        </>
                      )}
                      {/* Comment secton end */}
                    </div>
                  );
                }
              )}
            </section>
          </div>
        </div>
      </section>
      {/* <Review addReviewButtonClicked={true}/> */}
    </>
  );
};
