import React from 'react'
import SidebarItem  from './SidebarItem'
import '../../css/navbar.css'

function Sidebar({ items }) {
    const itemType = (item, index) => {
        return <SidebarItem item={item} key={index} />;
    };

    const navItems = items => {
        return items.map((item, index) => itemType(item, index));
    };
    return (
        <nav className="pro-sidebar">
            <ul className="nav-menu-items">
                {navItems(items.navs)}
            </ul>
        </nav>
    );
}
export default Sidebar