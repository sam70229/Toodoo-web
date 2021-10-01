import React from 'react'
import SidebarItem  from './SidebarItem'
import SidebarSignleItem from './SidebarSignleItem';

function Sidebar({ items }) {
    const itemType = (item, index) => {
        if (item.items) {
            return <SidebarItem item={item} key={index} />;
        }
        return <SidebarSignleItem item={item} key={index} />;
        
    };

    const navItems = items => {
        return items.map((item, index) => itemType(item, index));
    };
    return (
        <div className="pro-sidebar">
            <nav>
                <ul id="main-menu">
                    {navItems(items.navs)}
                </ul>
            </nav>
        </div>
    );
}
export default Sidebar