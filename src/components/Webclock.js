import React from "react";
import Header from "./Header/Header";

class Webclock extends React.Component {
    render() {

        return (
            <div className="content_container">
                <Header title="Webclock" />   
                <div className="content">
                    Webclock
                </div>                 
            </div>
        )
    }
}

export default Webclock;