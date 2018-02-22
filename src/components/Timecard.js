import React from "react";
import Header from "./Header/Header";

class Timecard extends React.Component {
    render() {

        return (
            <div className="content_container">
                <Header title="Timecard" />   
                <div className="content">
                    Timecard
                </div>                 
            </div>
        )
    }
}

export default Timecard;