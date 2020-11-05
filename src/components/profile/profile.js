import React from "react";
import { Transition } from "react-transition-group";
import myImg from "../../assets/images/nikhil.jpg";
import "./profile.css";

const profile = (props) => {
    return (
        <div className="container1">
            <div className="Profile">
                <div className="about">
                    <div className="profilePic">
                        <img
                            src={myImg}
                            style={{
                                height: "200px",
                                width: "200px",
                                padding: "10px 10px 10px 10px",
                                display: "block",
                            }}
                        />
                    </div>

                    <h1>NIKHIL GAWADE</h1>
                    <h3>BACKEND | FRONTEND | DEVOPS</h3>
                    <p>
                        I am a motivated developer with knowledge of MERN stack.
                        i have strong problem solving skills and looking for
                        opportunities to test my abilities in challenging
                        environments
                    </p>
                </div>

                <ul className="personal-info">
                    <li>
                        <label>Name:</label>
                        <span>NIKHIL GAWADE</span>
                    </li>
                    <li>
                        <label>EmailID:</label>
                        <span>nikgawade1@gmail.com</span>
                    </li>
                    <li>
                        <label>Linkedin:</label>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/nikhil-gawade-a89864148"
                        >
                            www.linkedin.com/in/nikhil-gawade-a89864148
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default profile;
