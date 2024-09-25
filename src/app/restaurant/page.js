"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";

const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="container">
        <h1>Restaurant page</h1>
        {login ? <RestaurantLogin /> : <RestaurantSignUp />}
        <div>
          <button className="button-link" onClick={() => setLogin(!login)}>
            {login
              ? "Don't have account? SignUp"
              : "Already have Account? Login"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
