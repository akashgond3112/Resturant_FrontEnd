import { useState } from "react";
import { ReturnResturant } from "./ReturnResturant";
import { SpinnerLoading } from "../../utilities/Spinner";
import { useFetchAllRestaurantsNearBy } from "../../../hooks/useFetchAllRestaurantsNearBy";

export const Carousel = () => {
  const [lat, setLat] = useState(0);
  const [lng, setLong] = useState(0);
  const { resturants, isLoading, httpError } = useFetchAllRestaurantsNearBy(
    lat,
    lng,
    ""
  );

  console.log("Fetching resturant again lat & lng changed" + resturants.length);
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    setLat(latitude);
    setLong(longitude);
  });

  if (isLoading) {
    return <SpinnerLoading />;
  }

  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }

  return (
    <div className="container mt-5" style={{ height: 550 }}>
      <div className="homepage-carousel-title">
        <h3>Best Dining Restaurants near you in Newcastle</h3>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide mt-5 
                d-none d-lg-block"
        data-bs-interval="false"
        // data-bs-ride="carousel"
      >
        {/* Destop */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-items-center">
              {resturants.slice(0, 2).map((resaurant) => (
                <div
                  className="col-xs-6 col-sm-6 col-md-4 col-lg-4 mb-3"
                  key={resaurant.place_id}
                >
                  <ReturnResturant resaurant={resaurant} />
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              {resturants.slice(2, 4).map((resaurant) => (
                <div
                  className="col-xs-6 col-sm-6 col-md-4 col-lg-4 mb-3"
                  key={resaurant.place_id}
                >
                  <ReturnResturant resaurant={resaurant} />
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              {resturants.slice(4, 6).map((resaurant) => (
                <div
                  className="col-xs-6 col-sm-6 col-md-4 col-lg-4 mb-3"
                  key={resaurant.place_id}
                >
                  <ReturnResturant resaurant={resaurant} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Mobile */}
      <div className="d-lg-none mt-3">
        <div className="row d-flex justify-content-center align-items-center">
          <div
            className="col-xs-6 col-sm-6 col-md-4 col-lg-4 mb-3"
            key={resturants[0].place_id}
          >
            <ReturnResturant resaurant={resturants[0]} />
          </div>
        </div>
      </div>
      {/* <div className="homepage-carousel-title mt-3">
        <a className="btn btn-outline-secondary btn-lg" href="#">
          View More
        </a>
      </div> */}
    </div>
  );
};
