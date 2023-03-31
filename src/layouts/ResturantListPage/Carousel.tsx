import Restaurant from "../../models/Restaurant/Restaurant";
import { ReturnResturant } from "./ReturnResturant";

export const Carousel: React.FC<{
  restaurants: Restaurant[];
}> = (props) => {
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
              {props.restaurants.slice(0, 2).map(
                (resaurant) =>
                  resaurant.place_id && (
                    <div
                      className="col-xs-6 col-sm-6 col-md-4 col-lg-4 mb-3"
                      key={resaurant.place_id}
                    >
                      <ReturnResturant resaurant={resaurant} />
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              {props.restaurants.slice(2, 4).map(
                (resaurant) =>
                  resaurant.place_id && (
                    <div
                      className="col-xs-6 col-sm-6 col-md-4 col-lg-4 mb-3"
                      key={resaurant.place_id}
                    >
                      <ReturnResturant resaurant={resaurant} />
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              {props.restaurants.slice(4, 6).map(
                (resaurant) =>
                  resaurant.place_id && (
                    <div
                      className="col-xs-6 col-sm-6 col-md-4 col-lg-4 mb-3"
                      key={resaurant.place_id}
                    >
                      <ReturnResturant resaurant={resaurant} />
                    </div>
                  )
              )}
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
            key={props.restaurants[0].place_id}
          >
            <ReturnResturant resaurant={props.restaurants[0]} />
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
