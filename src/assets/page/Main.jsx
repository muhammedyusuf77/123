import React from "react";
import "./main.css"; 

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>WELCOME TO GREENSHOP</h1>
        <h2>
          LET'S MAKE A BETTER <span className="highlight">PLANET</span>
        </h2>
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create a unique Urban Jungle. Order your
          favorite plants!
        </p>
        <button className="shop-now-btn">SHOP NOW</button>
      </header>
      <div className="plants">
        <img src="large-plant.png" alt="Large Plant" className="large-plant" />
        <img src="small-plant.png" alt="Small Plant" className="small-plant" />
      </div>
    </div>
  );
};

export default App;
