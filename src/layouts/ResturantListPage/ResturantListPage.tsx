import { useState, useEffect, useRef, useCallback } from "react";
import { useFetchAllRestaurantsNearBy } from "../../hooks/useFetchAllRestaurantsNearBy";
import { SpinnerLoading } from "../utilities/Spinner";
import classes from "./ResturantListPage.module.css";
import { EndOfResult } from "../utilities/EndOfResult";
import { Carousel } from "./Carousel";
import { ReturnResturant } from "./ReturnResturant";

export const ResturantListPage = () => {
  const [lat, setLat] = useState(54.9677423);
  const [lng, setLong] = useState(-1.6224093);
  const [nextPageToken, setGetNextPageToken] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setLat(latitude);
      setLong(longitude);
    });
  }, []);

  const {
    resturants,
    isLoading,
    httpError,
    hasNextPage,
    tmpNextPageToken,
    endOfPage,
  } = useFetchAllRestaurantsNearBy(lat, lng, nextPageToken);

  const observer = useRef<any>(null);

  const lastRestaurantElementRef = useCallback(
    (node: any) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          setGetNextPageToken(tmpNextPageToken);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasNextPage, tmpNextPageToken]
  );

  if (httpError) {
    return (
      <div className="container">
        <p>{httpError}</p>
      </div>
    );
  }

  return (
    <>
      {resturants.length > 0 && (
        <>
          <Carousel restaurants={resturants} />
          <div className={classes["container"]}>
            {resturants.map((resaurant, index) => {
              if (resturants.length === index + 1) {
                return (
                  <div
                    ref={lastRestaurantElementRef}
                    key={resaurant.place_id}
                    className="mt-5"
                  >
                    <ReturnResturant resaurant={resaurant} />
                  </div>
                );
              } else {
                return (
                  <div key={resaurant.place_id} className="mt-5">
                    <ReturnResturant resaurant={resaurant} />
                  </div>
                );
              }
            })}
          </div>
        </>
      )}

      {isLoading ? (
        <div>
          <SpinnerLoading />
        </div>
      ) : (
        ""
      )}
      {endOfPage ? (
        <div>
          <EndOfResult />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
