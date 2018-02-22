import React from "react";
import Header from "./Header/Header";

class Dashboard extends React.Component {
    render() {

        return (
            <div className="content_container">
                <Header title="Dashboard" />   
                <div className="content">
                    Dashboard
                </div>                 
            </div>
        )
    }
}

export default Dashboard;