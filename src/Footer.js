
import React from 'react';
import "./Codes.css"
import heart from "./images/heart.svg"
import teddy from "./images/teddy.svg"

function Footer() {
  return (
    <div>
        <br></br><br></br>
        <div className="Row">
        <div className="col-12" style={{ marginLeft: "25%", width: "50%" }}>
          <h3>Find this project useful ? <img alt="avatar" src={heart} style={{width:"5%", height:"auto"}}></img></h3>
        </div>
        <div className="Row">
        <div className="col-12" style={{ marginLeft: "25%", width: "50%" }}>
        <button type="button" className="btn btn-warning">Support Us</button>
        </div>
        </div>
        <br></br><br></br>
        <div className="Row">
        <div className="col-12" style={{ marginLeft: "25%", width: "50%" }}>
          <img src={teddy} alt="avatar" style={{width:"40%", height:"auto"}}></img>
        </div>
      </div>
      </div>
        <br></br><br></br>
        <footer class="footer"  style={{background:"#FFCC33", marginBottom: "-10%", paddingBottom: "2%", paddingTop: "2%"}}>
        <div class="container">
        <span style={{color:"black"}}>
        <p>Copyright (C) 2020 MINDORKS NEXTGEN PRIVATE LIMITED</p>

        <p style={{fontSize: "0.85em"}}>Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at</p>

        </span>
        </div>
        </footer>
    </div>
  )
}

export default Footer;
