import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <section id="main">
      <div className="container">
        <div className="left">
          <div className="upper_left">
            <p className="title">Save money <br /> fast from app.</p>

            <div className="description">
              Transfer business money easily through finance app without any
              hassle. This app can help you control.
            </div>

            <button className="btn">Check our features</button>
          </div>

          <div className="down_left">
            <p className="user_des">
              “Transfer business money easily through finance app without any
              hassle. This app can help you control.Transfer business money
              easily through finance ”
            </p>

            <div className="profile">
              <img src="/images/profile.png" alt="profile" />
              <div className="profile_des">
                <p className="name">Darika samak</p>
                <p className="email">From amazon.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <img src="/images/banner.png" alt="banner" />
        </div>
      </div>
    </section>
  );
};

export default Main;
