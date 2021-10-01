import React from "react";
import { NavLink } from "react-router-dom";

const SidebarSignleItem = ({ item }) => {

    const url = item.url.charAt(0) === '/' ? item.url : `/${item.url}`;

    return (
        <li className="nav-item">
            <NavLink to={url} activeClassName="active" inactiveClassName="">
                <span className="nav-item-label">{item.name}</span>
            </NavLink>
        </li>
    );
};

export default SidebarSignleItem;