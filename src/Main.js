
import React from 'react';
import cor from "./images/online-course.png"
import "./Main.css"
import RE from "./images/3RE.png"
import RE3 from "./images/3RE3.png"
import RE2 from "./images/3RE2.png"
import backend from "./images/backend.png"
import javascript from "./images/javascript.png";
import stairs from "./images/stairs.png";
import startup from "./images/startup.png";
import api from "./images/api.png"


function Main() {
  return (
    <div>
        <br></br><br></br>

        <div className ="Row">
            <div className="col-12" style={{marginLeft:"25%", width:"50%",}}>
            <h3>About this Open Source Project</h3>
            </div>
        </div>
        <div className="Row" style={{justifyContent:'center'}}>
            <div className="col-12"  style={{justifyContent:'center', display:"flex"}} >
            <div style={{background:"#FFCC33", width:"250px", height:"5px"}}>
            </div>
        </div>
        </div>
        <br></br>
        <div>
            <div style={{alignContent: "center", marginLeft: "20%", marginRight: "20%"}}>
                <p>This open-source project is for you(community). Our Team at <a href="https://afteracademy.com/" rel="noreferrer" target="_blank" style={{style:"textDecoration: none", color:"#107896"}}>AfterAcademy</a> has taken this initiative to promote Backend Learning in the best possible way. We are determined to provide quality content for everyone. Let's do it together by learning from this project.</p>
            </div>
        </div>

        <br></br><br></br>
        
        <div className ="Row">
            <div className="col-12" style={{marginLeft:"25%", width:"50%",}}>
            <h3>We will learn and build the backend application for a blogging platform.</h3>
            </div>
        </div>
        <div className="Row" style={{justifyContent:'center'}}>
            <div className="col-12"  style={{justifyContent:'center', display:"flex"}} >
            <div style={{background:"#FFCC33", width:"250px", height:"5px"}}>
            </div>
        </div>
        </div>
        <br></br>
        <div style={{textAlign:'left'}} >
            <div style={{marginLeft: "20%", marginRight: "20%"}}>
                <p>The main focus will be to create a maintainable and highly testable architecture.
                    Following are the features of this project:</p>
                <ul>
                    <li>This backend is written in Typescript: The type safety at build time and having intellisense for it in the IDE like vscode is unparalleled to productivity. We have found production bug reduced to a significant amount since most of the code vulnerabilities are identified during the build phase itself.</li>
                    <li>Separation of concern principle is applied: Each component has been given a particular role. The role of the components is mutually exclusive. This makes the project easy to be unit tested.</li>
                    <li>Feature encapsulation is adopted: The files or components that are related to a particular feature have been grouped unless those components are required in multiple features. This enhances the ability to share code across projects.</li>
                    <li>Centralised Error handling is done: We have created a framework where all the errors are handled centrally. This reduces the ambiguity in the development when the project grows larger.</li>
                    <li>Centralised Response handling is done: Similar to Error handling we have a response handling framework. This makes it very convenient to apply a common API response pattern.</li>
                    <li>Mongodb is used through Mongoose: Mongodb fits very well to the node.js application. Being NoSQL, fast, and scalable makes it ideal for modern web applications.</li>
                    <li>Async execution is adopted: We have used async/await for the promises and made sure to use the non-blocking version of all the functions with few exceptions.</li>
                    <li>Docker compose has been configured: We have created the Dockerfile to provide the easy deployability without any setup and configurations.</li>
                    <li>Unit test is favored: The tests have been written to test the functions and routes without the need of the database server. Integration tests has also been done but the unit test is favored.</li>
                    <li>A pure backend project: We have experienced that when a backend is developed clubbed with a frontend then in the future it becomes really difficult to scale. We would want to create a separate backend project that servers many websites and mobile apps.</li>
                </ul>
            </div>
        </div>

        <br></br><br></br>

        <div className ="Row">
            <div className="col-12" style={{marginLeft:"25%", width:"50%",}}>
            <h3>We have also open source a complete blogging website working on this backend project : <a style={{color:"#107896"}} href="https://github.com/afteracademy/react-app-architecture" rel="noreferrer"  target = "_blank">Goto Repository</a></h3>
            </div>
        </div>
        <div className="Row" style={{justifyContent:'center'}}>
            <div className="col-12"  style={{justifyContent:'center', display:"flex"}} >
            <div style={{background:"#FFCC33", width:"250px", height:"5px"}}>
            </div>
        </div>
        </div>
        <br></br>
        <div>
            <div style={{alignContent: "center", marginLeft: "20%", marginRight: "20%"}}>
            In the above repository [React.js Isomorphic Web Application Architecture] we will learn and build a React web application for a blogging platform using this project as its API server.<a href="https://demo.react-app-architecture.afteracademy.com" rel="noreferrer" target="_blank" style={{color:"#107896"}}>Visit demo website</a>
            </div>
        </div>

        <br></br><br></br>

        <div className ="Row">
            <div className="col-12" style={{marginLeft:"25%", width:"50%",}}>
            <h3>3RE Architecture: Router, RouteHandler, ResponseHandler, ErrorHandler</h3>
            </div>
        </div>
        <div className="Row" style={{justifyContent:'center'}}>
            <div className="col-12"  style={{justifyContent:'center', display:"flex"}} >
            <div style={{background:"#FFCC33", width:"250px", height:"5px"}}>
            </div>
        </div>
        </div>
        <br></br>
        <div>
            <div style={{marginLeft: "20%", marginRight: "20%"}}>
            <img alt="avatar" style={{width: "100%", height: "auto"}} src = {RE}/>
            </div>
        </div>

        <br></br><br></br>

        <div className ="Row">
            <div className="col-12" style={{marginLeft:"25%", width:"50%",}}>
            <h3>Project Outline: Blogging Platform</h3>
            </div>
        </div>
        <div className="Row" style={{justifyContent:'center'}}>
            <div className="col-12"  style={{justifyContent:'center', display:"flex"}} >
            <div style={{background:"#FFCC33", width:"250px", height:"5px"}}>
            </div>
        </div>
        </div>
        <br></br>
        <div>
            <div style={{marginLeft: "20%", marginRight: "20%"}}>
            <img alt="avatar"  style={{width: "100%", height: "auto"}} src = {RE2}/>
            </div>
        </div>

        <br></br><br></br>

        <div className ="Row">
            <div className="col-12" style={{marginLeft:"25%", width:"50%",}}>
            <h3>Request-Response Handling Schematic Diagram</h3>
            </div>
        </div>
        <div className="Row" style={{justifyContent:'center'}}>
            <div className="col-12"  style={{justifyContent:'center', display:"flex"}} >
            <div style={{background:"#FFCC33", width:"250px", height:"5px"}}>
            </div>
        </div>
        </div>
        <br></br>
        <div>
            <div style={{marginLeft: "20%", marginRight: "20%"}}>
            <img alt="avatar" style={{width: "100%", height: "auto"}} src = {RE3}/>
            </div>
        </div>

        <br></br><br></br>

    <div className ="Row">
        <div className="col-12" style={{marginLeft:"25%", width:"50%",}}>
        <h3>Learn the concepts used in this project</h3>
        </div>
    </div>
    <div className="Row" style={{justifyContent:'center'}}>
        <div className="col-12"  style={{justifyContent:'center', display:"flex"}} >
        <div style={{background:"#FFCC33", width:"250px", height:"5px"}}>
        </div>
    </div>
    </div>
    <br></br>
    <div style={{textAlign:'left'}} >
        <div style={{marginLeft: "20%", marginRight: "20%"}}>
        <ul>
            <li><a href="https://afteracademy.com/blog/design-node-js-backend-architecture-like-a-pro" rel="noreferrer" target="_blank" >Design Node.js Backend Architecture like a Pro</a></li>
            <li><a href="https://youtu.be/Nwh7wTtUV5I" rel="nofollow">The video guide to build and run this project</a></li>
            <li><a href="https://afteracademy.com/blog/implement-json-web-token-jwt-authentication-using-access-token-and-refresh-token" rel="noreferrer" target="_blank">Implement JSON Web Token (JWT) Authentication using AccessToken and RefreshToken</a></li>
            <li><a href="https://afteracademy.com/blog/typescript-tutorial-for-beginners" rel="noreferrer" target="_blank">TypeScript Tutorial For Beginners</a></li>
            <li><a href="https://afteracademy.com/blog/from-javascript-to-typescript" rel="noreferrer" target="_blank">From JavaScript to TypeScript</a></li>
            <li><a href="https://afteracademy.com/blog/authentication-vs-authorization" rel="noreferrer" target="_blank">Authentication vs Authorization</a></li>
        </ul>
        </div>
    </div>

    <br></br><br></br>

    <div className ="Row">
        <div className="col-12" style={{marginLeft:"25%", width:"50%",}}>
        <h3>You can find the complete API documentation <a href="https://documenter.getpostman.com/view/1552895/SzYUZg52?version=latest" rel="noreferrer" target="_blank" style={{color:"#107896"}}>here</a></h3>
        </div>
    </div>
    <div className="Row" style={{justifyContent:'center'}}>
        <div className="col-12"  style={{justifyContent:'center', display:"flex"}} >
        <div style={{background:"#FFCC33", width:"250px", height:"5px"}}>
        </div>
    </div>
    </div>
    <br></br>
    <div>
        <div style={{marginLeft: "20%", marginRight: "20%"}}>
        <img alt="avatar" href="https://documenter.getpostman.com/view/1552895/SzYUZg52?version=latest" rel="noreferrer" target="_blank" style={{width: "40%", height: "auto"}} src = {api}/>
        </div>
    </div>

    <br></br><br></br>

    <div className ="Row">
        <div className="col-12" style={{marginLeft:"25%", width:"50%",}}>
        <h3>How to build and run this project <a href="https://documenter.getpostman.com/view/1552895/SzYUZg52?version=latest" rel="noreferrer" target="_blank" style={{color:"#107896"}}>here</a></h3>
        </div>
    </div>
    <div className="Row" style={{justifyContent:'center'}}>
        <div className="col-12"  style={{justifyContent:'center', display:"flex"}} >
        <div style={{background:"#FFCC33", width:"250px", height:"5px"}}>
        </div>
    </div>
    </div>
    <br></br>
    <div>
        <div style={{marginLeft: "20%", marginRight: "20%", textAlign:'left'}}>
        <ul>
<li>Install using Docker Compose [<strong>Recommended Method</strong>]
<ul>
<li>Clone this repo.</li>
<li>Make a copy of <strong>.env.example</strong> file to <strong>.env</strong>.</li>
<li>Make a copy of <strong>keys/private.pem.example</strong> file to <strong>keys/private.pem</strong>.</li>
<li>Make a copy of <strong>keys/public.pem.example</strong> file to <strong>keys/public.pem</strong>.</li>
<li>Make a copy of <strong>tests/.env.test.example</strong> file to <strong>tests/.env.test</strong>.</li>
<li>Install Docker and Docker Compose. <a href="https://docs.docker.com/install/" rel="noreferrer" target="_blank" style={{style:"textDecoration: none",}}>Find Instructions Here</a>.</li>
<li>Execute <code className="sus">docker-compose up -d</code> in terminal from the repo directory.</li>
<li>You will be able to access the api from <a href="http://localhost:3000" rel="noreferrer" target="_blank" style={{style:"textDecoration: none", }}>http://localhost:3000</a></li>
<li><em>If having any issue</em> then make sure 3000 port is not occupied else provide a different port in <strong>.env</strong> file.</li>
<li><em>If having any issue</em> then make sure 27017 port is not occupied else provide a different port in <strong>.env</strong> file.</li>
</ul>
</li>
<li>Run The Tests
<ul>
<li>Install node.js and npm on your local machine.</li>
<li>From the root of the project executes in terminal <code className="sus">npm install</code>.</li>
<li><em>Use the latest version of node on the local machine if the build fails</em>.</li>
<li>To run the tests execute <code className="sus">npm test</code>.</li>
</ul>
</li>
<li>Install Without Docker [<strong>2nd Method</strong>]
<ul>
<li>Install MongoDB on your local.</li>
<li>Do steps 1 to 5 as listed for <strong>Install using Docker Compose</strong>.</li>
<li>Do steps 1 to 3 as listed for <strong>Run The Tests</strong>.</li>
<li>Create users in MongoDB and seed the data taking reference from the <strong>addons/init-mongo.js</strong></li>
<li>Change the <code className="sus">DB_HOST</code> to <code className="sus">localhost</code> in <strong>.env</strong> and <strong>tests/.env.test</strong> files.</li>
<li>Execute <code className="sus">npm start</code> and You will be able to access the API from <a href="http://localhost:3000" rel="noreferrer" target="_blank" style={{style:"textDecoration: none", }}>http://localhost:3000</a></li>
<li>To run the tests execute <code className="sus">npm test</code>.</li>
</ul>
</li>
</ul>
        </div>
    </div>

    <br></br><br></br>

    <div className ="Row">
        <div className="col-12" style={{marginLeft:"25%", width:"50%",}}>
        <h3>Explore Online Tutorials and Courses To Learn More by AfterAcademy</h3>
        </div>
    </div>
    <div className="Row" style={{justifyContent:'center'}}>
        <div className="col-12"  style={{justifyContent:'center', display:"flex"}} >
        <div style={{background:"#FFCC33", width:"250px", height:"5px"}}>
        </div>
    </div>
    </div>
    <br></br>
    <div className="row row-content">
                <div className="col-12 col-md-6" style={{justifyContent:'center', display:'flex',paddingLeft:"20%"}}>
                <div className="item" style={{width:"70%"}} >
                    <h4 style={{background:"#107896", color:'white', paddingTop:'2%', paddingBottom:'2%'}}>Backend Tutorial </h4>
                    <img alt="avatar" src={backend} style={{width:"100%"}}></img>
                   <a href="https://afteracademy.com/blogs/backend" rel="noreferrer" target="_blank"> <button type="button" className="btn btn-warning" style={{marginBottom:'3%'}} >Check Out</button></a>
                </div>
                </div>
                <div className="col-12 col-md-6" style={{justifyContent:'center', display:'flex',paddingRight:"20%"}}>
                <div className="item" style={{width:"70%"}} >
                    <h5 style={{background:"#107896", color:'white', paddingTop:'3%', paddingBottom:'3%'}}> Online Courses for Backend</h5>
                    <img alt="avatar" src={cor} style={{width:"70%", marginTop:"40px", marginBottom: "40px"}}></img>
                   <a href="https://afteracademy.com/courses/backend" rel="noreferrer" target="_blank"> <button type="button" className="btn btn-warning" style={{marginBottom:'3%'}} >Check Out</button></a>
                </div>
                </div>
        </div>
        <br></br><br></br>

    <div className ="Row">
        <div className="col-12" style={{marginLeft:"25%", width:"50%",}}>
        <h3>Learn Backend Development From Our Videos</h3>
        </div>
    </div>
    <div className="Row" style={{justifyContent:'center'}}>
        <div className="col-12"  style={{justifyContent:'center', display:"flex"}} >
        <div style={{background:"#FFCC33", width:"250px", height:"5px"}}>
        </div>
    </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div className="row row-content">
                <div className="col-12 col-md-4" style={{justifyContent:'center', display:'flex',}}>
                <div className="item" style={{width:"70%"}} >
                    <h5 style={{background:"#107896", color:'white', paddingTop:'3%', paddingBottom:'3%'}}>Backend for Beginners </h5>
                    <img alt="avatar" src={stairs} style={{width:"70%", marginTop:"40px", marginBottom: "40px"}}></img>
                    <a href="https://youtu.be/Q0nfLi-4GBg" rel="noreferrer" target="_blank"><button type="button" className="btn btn-warning" style={{marginBottom:'3%'}} >Check Out</button></a>
                </div>
                </div>
                <div className="col-12 col-md-4" style={{justifyContent:'center', display:'flex'}}>
                <div className="item" style={{width:"70%"}} >
                    <h5 style={{background:"#107896", color:'white', paddingTop:'3%', paddingBottom:'3%'}}>Backend for Startups </h5>
                    <img alt="avatar" src={startup} style={{width:"70%" , marginTop:"40px", marginBottom: "40px"}}></img>
                    <a href="https://www.youtube.com/playlist?list=PLqOiaH9id5quh5Dph5yuXfdHVGe1LrKvT" rel="noreferrer" target="_blank"><button type="button" className="btn btn-warning" style={{marginBottom:'3%'}} >Check Out</button></a>
                </div>
                </div>
                <div className="col-12 col-md-4" style={{justifyContent:'center', display:'flex'}}>
                <div className="item" style={{width:"70%"}} >
                    <h5 style={{background:"#107896", color:'white', paddingTop:'3%', paddingBottom:'3%'}}>Javascript for Beginners</h5>
                    <img alt="avatar" src={javascript} style={{width:"70%" ,marginTop:"40px", marginBottom: "40px"}}></img>
                    <a href="https://www.youtube.com/playlist?list=PLqOiaH9id5qtw5MhI-C1G3CS7RVZ8ejct" rel="noreferrer" target="_blank"><button type="button" className="btn btn-warning" style={{marginBottom:'3%'}} >Check Out</button></a>
                </div>
                </div>
        </div>
    </div>
  );
}

export default Main;
