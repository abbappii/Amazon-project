import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12332121"
            title="iphone charger cable with best quality,faster cable real one, only a few left buy it soon"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={3}
          />
          <Product
            id="49536094"
            title="Apple MacBook Air 13.3' with Retina Display, 1.1GHz Quad-Core Intel Core i5, 8GB Memory, 256GB SSD, Space Gray (Early 2020) Z0YJ0002F"
            price={1099.99}
            image="https://m.media-amazon.com/images/I/61wLbRLshAL._AC_UL320_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="12312222"
            title="YAMAY Smart Watch Fitness Tracker Watches for Men Women, Fitness Watch Heart Rate Monitor IP68 Waterproof Digital Watch with Step Calories Sleep Tracker, Smartwatch Compatible iPhone Android Phones"
            price={949.99}
            image="https://m.media-amazon.com/images/I/61uCuln0wtL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="29143234"
            title="Apple iPhone 11 Pro (64GB, Midnight Green) [Locked] + Carrier Subscription"
            price={5849.99}
            image="https://m.media-amazon.com/images/I/81mxun+6pEL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="19203944"
            title="LG 24MP88HV-S 24-Inch IPS Monitor with Infinity Display 2.5mm Bezel"
            price={344.99}
            image="https://m.media-amazon.com/images/I/91t42mRERuL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="43211234"
            title="Stand Mixer, 5 Speeds Electric Mixer 2 in 1 Hand Mixer with 4 Quarts Stainless Steel Mixing Bowl, Beaters & Dough Hooks (Balck-Stand Mixer)"
            price={54.99}
            image="https://m.media-amazon.com/images/I/51gwlyhi4dL._AC_UY218_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
