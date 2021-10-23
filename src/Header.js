import React from "react";
import headerimg from "./images/headerimg.png";
import "./Header.css";
import {Jumbotron} from "reactstrap";

function Header() {
  return (
    <div>
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
      </div>
      <Jumbotron
        style={{
          marginLeft: "2%",
          marginRight: "2%",
          marginTop: "2%",
          background: "#FFCC33",
        }}
      >
        <div className="container">
          <div className="row row-header">
            <div className="col-12">
              <h5 class="display-4">Learn with AfterAcademy</h5>
            </div>
          </div>
        </div>
      </Jumbotron>
      <div className="container">
        <div className="row row-content">
          <div className="col-12 col-md-6">
            <img
              src={headerimg}
              alt="avatar"
              style={{ width: "70%", heaight: "auto" }}
            />
          </div>
          <div
            className="col-12 col-md-5"
            style={{ display: "flex", alignItems: "center" }}
          >
            <p className="display-6" style={{ alignContent: "center" }}>
              Learn to build a complete backend application for blogging
              platform like Medium, MindOrks, FreeCodeCamp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
