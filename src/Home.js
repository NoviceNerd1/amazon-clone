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
          <Product
            title="Echo Dot (4th Gen) Smart Speaker"
            price={49.99}
            image="https://img.freepik.com/free-photo/large-round-white-bluetooth-speaker-gray-laptop-smartphone-side_181624-3694.jpg?w=996&t=st=1724438579~exp=1724439179~hmac=f1ab0a83897d4f6f502f565f5967b54b77a57d4c6087bd477ea5ae72866e6b5f"
            rating={4}
          />
          <Product
            title="Apple AirPods Pro"
            price={249.99}
            image="https://img.freepik.com/free-photo/modern-wireless-earphones-with-case-simple-concrete-background_23-2150808009.jpg?t=st=1724438708~exp=1724442308~hmac=66e8e21b5d077043a4b41629723b6b9fdbc25a8c76db8ccc9f28c65a5faac2ac&w=996"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Sony WH-1000XM4 Wireless Noise-Canceling Headphones"
            price={349.99}
            image="https://img.freepik.com/free-photo/still-life-tech-device_23-2150722661.jpg?t=st=1724438837~exp=1724442437~hmac=f0de1a5987ed52d87b18430b43e3b95190b9562ad59d6baeb5db31c92afab95c&w=996"
            rating={4}
          />
          <Product
            title="Nintendo Switch OLED Model"
            price={349.99}
            image="https://img.freepik.com/free-psd/mobile-gaming-console-icon-isolated-3d-render-illustration_439185-12344.jpg?t=st=1724438885~exp=1724442485~hmac=4c41b4c539334e23116a30672d1ef77d2d5a64b864bc51a4858a7a370bb14cbc&w=740"
            rating={3}
          />
          <Product
            title="Instant Pot Duo 7-in-1 Electric Pressure Cooker"
            price={89.95}
            image="https://img.freepik.com/free-photo/view-modern-hot-air-fryer-with-cooked-food_23-2151737098.jpg?t=st=1724438961~exp=1724442561~hmac=226c70414a493945a4826d3ea3878adcd039db55ba7805a1871cd21dd25bda7a&w=740"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            title="Samsung Galaxy S21 Ultra 5G"
            price={1199.99}
            image="https://img.freepik.com/free-vector/realistic-gradient-smartphone-different-views_52683-28259.jpg?t=st=1724439431~exp=1724443031~hmac=db5a7fdb9caaa809f328fd05a66323357b74a71ff5b5cfe6ba40ac3052387a2a&w=996"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
