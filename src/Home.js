import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/MzgyMjg2ZDEt/MzgyMjg2ZDEt-OTc0YjlhNjct-w1500._CB408087835_.jpg"
        alt=""
      />
      <Product
        id="1230123"
        title="Wine Enthusiast Private Preserve Wine Preservation Spray"
        price={34.69}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/81DuVo508jL._AC_SX522_.jpg"
      />
    </div>
  );
}

export default Home;

// Product id, title, price, rating, image
