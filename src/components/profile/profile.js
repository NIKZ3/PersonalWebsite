import React from "react";
import { Transition } from "react-transition-group";
import myImg from "../../assets/images/nikhil.jpg";
import "./profile.css";
//src="https://blogs-images.forbes.com/olliebarder/files/2017/10/goku_ultra_instinct.jpg"
const profile = (props) => {
    return (
        <div class="container1">
            <div class="Profile">
                <div class="about">
                    <div class="profilePic">
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
                <ul class="personal-info">
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
                        <span>linkedin.com</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default profile;
