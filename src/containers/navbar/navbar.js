import React from "react";
import "./navbar.css";
import { Route, NavLink } from "react-router-dom";
import resume from "../../components/resume/resume";
import myskills from "../../components/skills/skills";

class Navbar extends React.Component {
    render() {
        return (
            <>
                <div class="nav">
                    <div class="nav1">
                        <NavLink to="/" exact>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/1661/1661691.svg" />
                            PROFILE
                        </NavLink>
                    </div>

                    <div class="nav1">
                        <NavLink to="/resume" exact>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQETdr9udgdX6PE39HeNWEPgpKAbN0g8Epn9w&usqp=CAU" />
                            Resume
                        </NavLink>
                    </div>

                    <div class="nav1">
                        <NavLink to="/skills" exact>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuaxuCl-tyOMjfTNy-jlX0xF-qKWybFP8AhA&usqp=CAU" />
                            Skills
                        </NavLink>
                    </div>
                </div>
                <Route
                    path="/"
                    exact
                    render={() => {
                        return <></>;
                    }}
                ></Route>
                <Route path="/resume" exact component={resume}></Route>
                <Route path="/skills" exact component={myskills}></Route>
            </>
        );
    }
}

export default Navbar;
