export const Heros = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 com-md-6">
            <div className="col-image-left"></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Popular locations in United Kingdom.</h1>
              <p className="lead">
                From swanky upscale restaurants to the cosiest hidden gems
                serving the most incredible food, Food panda covers it all. Explore
                menus, and millions of restaurant photos and reviews from users
                just like you, to find your next great meal.
              </p>
              <a className="btn main-color btn-lg text-white" href="#">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-0">
        <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
          <div className="ml-2">
            <h1>Our clollection is always changing</h1>
            <p className="lead">
              Try to check in daily as our collection always changing! We work
              nonstop to provide the most accurate book selection possible for
              our luv 2 Read students! We are diligent about our book selection
              and our book selection and our books are always going to be our
              top priority
            </p>
          </div>
        </div>
        <div className="col-sm-6 col-md-6">
          <div className="col-image-right"></div>
        </div>
      </div>
      {/* Moble */}

      <div className="d-lg-none">
        <div className="contianer">
          <div className="m-2">
            <div className="col-image-left">
              <div className="mt-2">
                <h1>What have you been Reading?</h1>
                <p className="lead">
                  The library team would love to know what you have been
                  reading. Whether it is to learn a new skill or grow within
                  one, We aill be able to provide the top content for you.
                </p>
              </div>
            </div>
          </div>
          <div className="m-2">
            <div className="col-image-right"></div>
            <div className="mt-2">
              <h1>Our clollection is always changing</h1>
              <p className="lead">
                Try to check in daily as our collection always changing! We work
                nonstop to provide the most accurate book selection possible for
                our luv 2 Read students! We are diligent about our book
                selection and our book selection and our books are always going
                to be our top priority
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
