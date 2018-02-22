import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";


class Navigation extends React.Component {
    render() {
        return (
            <nav className="nav">
                <div className="nav_container">
                    <div className="nav_content">
                        <ul className="nav_item_wrapper">
                            <li className="nav_item">  
                                <Link className="nav_link" to="/dashboard">
                                    <i className="fa fa-desktop"></i>
                                    DashBoard
                                </Link> 
                            </li>
                            <li className="nav_item">                            
                                <Link className="nav_link" to="/webclock">
                                    <i className="fa fa-clock"></i>
                                    WebClock
                                </Link> 
                            </li>
                            <li className="nav_item">                                
                                <Link className="nav_link" to="/timecard">
                                    <i className="fa fa-calendar-alt"></i>
                                    TimeCard
                                </Link> 
                            </li>
                            <li className="nav_item">                                
                                <Link className="nav_link" to="/schedule">
                                    <i className="fa fa-chart-bar"></i>
                                    Schedule
                                </Link> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;