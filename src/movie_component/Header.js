import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Header extends Component{

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to={"/"}>쌍용정보통신</NavLink>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/released"}>현재상영</NavLink></li>
                        <li><NavLink to={"/scheduled"}>개봉예정</NavLink></li>
                        <li><NavLink to={"/box-office"}>박스오피스</NavLink></li>
                        <li><NavLink to={"/news"}>뉴스</NavLink></li>
                        <li><NavLink to={"/find"}>영화찾기</NavLink></li>
                        <li><NavLink to={"/reserve"}>Reserve</NavLink></li>
                        <li><NavLink to={"/music"}>Music</NavLink></li>
                        <li><NavLink to={"/"}>영화예매</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;