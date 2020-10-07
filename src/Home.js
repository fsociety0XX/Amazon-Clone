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
          alt="amazonbanner"
        />

        <div className="home__row">
          <Product
            id={100}
            title="Sapiens: A Brief History of Humankind"
            price={242.77}
            img="https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg"
            rating={5}
          />
          <Product
            id={101}
            title="The Happiness Project"
            price={118.43}
            img="https://images-na.ssl-images-amazon.com/images/I/51xTQwG04qL._SX330_BO1,204,203,200_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id={102}
            img="https://images-na.ssl-images-amazon.com/images/I/71ql4xBmpAL.jpg"
            title="The 4 Hour Work-Week"
            price={229}
            rating={4}
          />
          <Product
            id={103}
            img="https://images-na.ssl-images-amazon.com/images/I/71PmfQ6+qvL.jpg"
            title="Lost Connections"
            price={375}
            rating={4}
          />
          <Product
            id={104}
            img="https://images-na.ssl-images-amazon.com/images/I/710glEdDlfL.jpg"
            title="Influence: The Psychology of Persuasion"
            price={153}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={105}
            img="https://images-na.ssl-images-amazon.com/images/I/713rQq1bF6L.jpg"
            title="Think & Grow Rich"
            price={103.67}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
