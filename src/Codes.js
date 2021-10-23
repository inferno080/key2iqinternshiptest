import React, { useState } from "react";
import "./Codes.css";
import copy from "./images/copy.svg";

function Codes() {

  // eslint-disable-next-line
  const [code1, setcode1] = useState(
`├── src
│   ├── server.ts
│   ├── app.ts
│   ├── config.ts
│   ├── auth
│   │   ├── apikey.ts
│   │   ├── authUtils.ts
│   │   ├── authentication.ts
│   │   ├── authorization.ts
│   │   └── schema.ts
│   ├── core
│   │   ├── ApiError.ts
│   │   ├── ApiResponse.ts
│   │   ├── JWT.ts
│   │   └── Logger.ts
│   ├── database
│   │   ├── index.ts
│   │   ├── model
│   │   │   ├── ApiKey.ts
│   │   │   ├── Blog.ts
│   │   │   ├── Keystore.ts
│   │   │   ├── Role.ts
│   │   │   └── User.ts
│   │   └── repository
│   │       ├── ApiKeyRepo.ts
│   │       ├── BlogRepo.ts
│   │       ├── KeystoreRepo.ts
│   │       ├── RoleRepo.ts
│   │       └── UserRepo.ts
│   ├── helpers
│   │   ├── asyncHandler.ts
│   │   ├── role.ts
│   │   └── validator.ts
│   ├── routes
│   │   └── v1
│   │       ├── access
│   │       │   ├── login.ts
│   │       │   ├── logout.ts
│   │       │   ├── schema.ts
│   │       │   ├── signup.ts
│   │       │   └── token.ts
│   │       ├── blog
│   │       │   ├── blogDetail.ts
│   │       │   ├── blogList.ts
│   │       │   ├── editor.ts
│   │       │   ├── schema.ts
│   │       │   └── writer.ts
│   │       ├── index.ts
│   │       └── profile
│   │           ├── schema.ts
│   │           └── user.ts
│   └── types
│       └── app-request.d.ts
├── tests
│   ├── auth
│   │   ├── apikey
│   │   │   ├── mock.ts
│   │   │   └── unit.test.ts
│   │   ├── authUtils
│   │   │   ├── mock.ts
│   │   │   └── unit.test.ts
│   │   ├── authentication
│   │   │   ├── mock.ts
│   │   │   └── unit.test.ts
│   │   └── authorization
│   │       ├── mock.ts
│   │       └── unit.test.ts
│   ├── core
│   │   └── jwt
│   │       ├── mock.ts
│   │       └── unit.test.ts
│   ├── routes
│   │   └── v1
│   │       ├── blog
│   │       │   ├── blogDetail
│   │       │   │   ├── mock.ts
│   │       │   │   └── unit.test.ts
│   │       │   └── writer
│   │       │       ├── mock.ts
│   │       │       └── unit.test.ts
│   │       ├── login
│   │       │   ├── integration.test.ts
│   │       │   ├── mock.ts
│   │       │   └── unit.test.ts
│   │       └── signup
│   │           ├── mock.ts
│   │           └── unit.test.ts
│   ├── .env.test
│   └── setup.ts
├── addons
│   └── init-mongo.js
├── keys
│   ├── private.pem
│   └── public.pem
├── .env
├── .gitignore
├── .dockerignore
├── .eslintrc
├── .eslintignore
├── .prettierrc
├── .prettierignore
├── .travis.yml
├── .vscode
│   └── launch.json
├── Dockerfile
├── docker-compose.yml
├── package-lock.json
├── package.json
├── jest.config.js
└── tsconfig.json`
  )
  // eslint-disable-next-line
  const [code, setcode] = useState([
    `POST /v1/signup/basic HTTP/1.1
Host: localhost:3000
x-api-key: GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj
Content-Type: application/json`,
    `"{
    name: "Janishar Ali",
    email: "ali@afteracademy.com",
    password: "changeit",
    profilePicUrl:
      "https://avatars1.githubusercontent.com/u/11065002?s=460&u=1e8e42bda7e6f579a2b216767b2ed986619bbf78&v=4",
  },
"`,
  `
  {
    "statusCode": "10000",
    "message": "Signup Successful",
    "data": {
      "user": {
        "_id": "5e7c9d32307a223bb8a4b12b",
        "name": "Janishar Ali",
        "email": "ali@afteracademy.com",
        "roles": [
          "5e7b8acad7aded2407e078d7"
        ],
        "profilePicUrl": "https://avatars1.githubusercontent.com/u/11065002?s=460&u=1e8e42bda7e6f579a2b216767b2ed986619bbf78&v=4"
      },
      "tokens": {
        "accessToken": "some_token",
        "refreshToken": "some_token"
      }
    }
  }
  `,
  `{
    "statusCode": "10001",
    "message": "Bad Parameters"
}`,
`GET /v1/profile/my HTTP/1.1
Host: localhost:3000
x-api-key: GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj
Content-Type: application/json
Authorization: Bearer <your_token_received_from_signup_or_login>
`
,
`
{
    "statusCode": "10000",
    "message": "success",
    "data": {
      "name": "Janishar Ali Anwar",
      "profilePicUrl": "https://avatars1.githubusercontent.com/u/11065002?s=460&u=1e8e42bda7e6f579a2b216767b2ed986619bbf78&v=4",
      "roles": [
        {
          "_id": "5e7b8acad7aded2407e078d7",
          "code": "LEARNER"
        },
        {
          "_id": "5e7b8c22d347fc2407c564a6",
          "code": "WRITER"
        },
        {
          "_id": "5e7b8c2ad347fc2407c564a7",
          "code": "EDITOR"
        }
      ]
    }
  }
  
`

  ]);
  return (
    <div>
        <br></br><br></br>

        <div className ="Row">
            <div className="col-12" style={{marginLeft:"25%", width:"50%",}}>
            <h3>Directory Traversal for Signup API call</h3>
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
            <p><code className="sus">/src → server.ts → app.ts → /routes/v1/index.ts → /auth/apikey.ts → schema.ts → /helpers/validator.ts → asyncHandler.ts → /routes/v1/signup.ts → schema.ts → /helpers/validator.ts → asyncHandler.ts → /database/repository/UserRepo.ts → /database/model/User.ts → /core/ApiResponses.ts</code></p>
            </div>
        </div>
        <br></br>
        <br></br>
        <div className="Row">
        <div className="col-12" style={{ marginLeft: "25%", width: "50%" }}>
          <h3>Project Directory Structure</h3>
        </div>
      </div>
      <div className="Row" style={{ justifyContent: "center" }}>
        <div
          className="col-12"
          style={{ justifyContent: "center", display: "flex" }}
        >
          <div
            style={{ background: "#FFCC33", width: "250px", height: "5px" }}
          ></div>
        </div>
      </div>
      <br></br>
      <div className="Row">
        <div className="col col-12">

          <pre className="one">
            <code>
            <img src={copy} type="button" className="btn btn-warning yes two" onClick={()=>navigator.clipboard.writeText(code1)} alt="avatar" style={{height:"auto" , width:"25px", position:"absolute", marginLeft: "60%"}}></img>
              {code1}
            </code>
          </pre>
        </div>
      </div>
      <br></br>
      <br></br>

      <div className="Row">
        <div className="col-12" style={{ marginLeft: "25%", width: "50%" }}>
          <h3>API Examples</h3>
        </div>
      </div>
      <div className="Row" style={{ justifyContent: "center" }}>
        <div
          className="col-12"
          style={{ justifyContent: "center", display: "flex" }}
        >
          <div
            style={{ background: "#FFCC33", width: "250px", height: "5px" }}
          ></div>
        </div>
      </div>
      <br></br>
      <div className="Row" style={{alignContent: "center"}}>
        {code.map((ele) => (
          <div className="col col-12">
            <pre className="one">
              <code>
                <img
                  src={copy}
                  type="button"
                  onClick={() => navigator.clipboard.writeText(ele)}
                  alt="avatar"
                  className="two"
                  style={{
                    height: "auto",
                    width: "25px",
                    position: "absolute",
                    marginLeft: "60%",
                  }}
                ></img>
                {ele}
              </code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Codes;