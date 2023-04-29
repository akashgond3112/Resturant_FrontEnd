import "./App.css";
import { HomePage } from "./layouts/HomePage/HomePage";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { ResturantListPage } from "./layouts/ResturantListPage/ResturantListPage";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginRegister from "./layouts/SignupLogin/LoginRegister";
import Restaurant from "./models/Restaurant/Restaurant";
import { useState } from "react";
import { ResturantDetailPage } from "./layouts/RestaurantPage/ResturantDetailPage";

export const App = () => {
  const [restaurants, setRestaurants] = useState<Restaurant>();

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {/* <div className="flex-grow-1"> */}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/sigin">
          <LoginRegister />
        </Route>
        <Route path="/restaurants">
          <ResturantListPage setRestaurants={setRestaurants} />
        </Route>
        <Route path="/search">
          <ResturantListPage setRestaurants={setRestaurants} />
        </Route>
        <Route path="/restaurant/:restaurantId">
          <ResturantDetailPage />
        </Route>
      </Switch>
      {/* </div> */}
      <Footer />
    </div>
  );
};
