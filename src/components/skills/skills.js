import React from "react";
import { skillSet } from "../../portfolio";
import "./skills.css";

const skills = (props) => {
    return (
        <div className="skill">
            {skillSet.softwareSkills.map((skills) => {
                return (
                    <div>
                        <img src={skills.img}></img>
                        {skills.name}
                    </div>
                );
            })}
        </div>
    );
};

export default skills;
