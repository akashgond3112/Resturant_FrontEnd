import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import { SuggestedRestaurant } from "../AutoSuggestion/SuggestedRestaurant";
import { useEffect, useState } from "react";
import ResturantModal from "../../models/Resturant/ResturantModal";

export const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const [resturants, setResturants] = useState<ResturantModal[]>([]);
  const [search, setSearch] = useState("");
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    setHttpError(null);
    console.log(search);

    const fetchNearByResturants = async () => {
      let url: string = `http://localhost:8080/api/v1/restaurants/search/autoSuggest?keyword=${search}&lat=54.990617&lng=-1.6046678&radius=2000`;

      // url = `${process.env.REACT_APP_BASE_URL}/api/v1/restaurants?lat=${lat}&lng=${lng}&query=restaurants&radius=2000`;

      const response = await fetch(url);

      if (response.status === 500) {
      }

      const responseJson = await response.json();

      const responseData = responseJson.results;

      const loadedResturants: ResturantModal[] = [];

      for (const key in responseData) {
        loadedResturants.push({
          name: responseData[key].name,
          opening_hours: responseData[key].opening_hours,
          photos: responseData[key].photos,
          place_id: responseData[key].place_id,
          rating: responseData[key].rating,
          user_ratings_total: responseData[key].user_ratings_total,
          formatted_address: responseData[key].formatted_address,
          price_level: responseData[key].price_level,
          business_status: responseData[key].business_status,
          geometry: responseData[key].geometry,
          icon: responseData[key].icon,
          icon_background_color: responseData[key].icon_background_color,
          icon_mask_base_uri: responseData[key].icon_mask_base_uri,
          plus_code: responseData[key].plus_code,
          reference: responseData[key].reference,
          types: responseData[key].types,
        });
      }

      setResturants(loadedResturants);
    };

    if (search.length >= 3) {
      fetchNearByResturants().catch((error: any) => {
        setHttpError(error.message);
      });
    } else {
      setResturants([]);
    }
  }, [search]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-color py-3">
      <div className="container-fluid">
        <span className="navbar-brand">Food aramak</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropDown"
          aria-expanded="false"
          aria-label="Toggle Naviagtion"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/home"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <NavLink className="nav-link" to={"/search"}>
                Search Resturant
              </NavLink> */}
              <div className={classes["main"]}>
                <div className={classes["search-main"]}>
                  <div className={classes["container"]}>
                    <div className={classes["search-icon-main"]}>
                      <i
                        className={classes["search-icon-main"]}
                        color="#828282"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#828282"
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          aria-labelledby="icon-svg-title- icon-svg-desc-"
                          role="img"
                          className={classes["search-icon-svg"]}
                        >
                          <title>Search</title>
                          <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
                        </svg>
                      </i>
                    </div>
                    <input
                      placeholder="Search for restaurant"
                      className={classes["search-input"]}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    ></input>
                    {resturants.length > 0 && (
                      <div className={classes["search-result"]}>
                        {resturants.map((resaurant) => (
                          <SuggestedRestaurant resaurant={resaurant} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item  m-1">
              <NavLink
                type="button"
                className="btn btn-outline-light"
                to={"/sigin"}
              >
                Sign in
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
