import React from "react";
import myImg from "../../assets/images/resume.png";

const resume = (props) => {
    return (
        <img
            src={myImg}
            style={{
                marginLeft: "auto",
                marginRight: "auto",
                padding: "10px 10px 10px 10px",
                display: "block",
            }}
        />
    );
};

export default resume;
