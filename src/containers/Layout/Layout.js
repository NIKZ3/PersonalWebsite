import React from "react";
import Profile from "../../components/profile/profile";
import Navbar from "../navbar/navbar";

class Layout extends React.Component {
    state = {
        profileState: true,
    };

    render() {
        return (
            <div
                style={{
                    boxShadow:
                        "0 1px 6px rgba(0, 0, 0, 0.27),0 0 40px rgba(0, 0, 0, 0.06) inset",
                    width: "75%",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                <main>
                    <Profile profileState={this.state.profileState} />
                    <Navbar />
                </main>
            </div>
        );
    }
}

export default Layout;
