import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <div className="home__row">
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
