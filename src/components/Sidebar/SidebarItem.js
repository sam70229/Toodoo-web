import React, { Component } from 'react'
import * as Feather from 'react-feather';
import SidebarSingleItem from './SidebarSignleItem';

class SidebarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    toggle = e => {
        this.setState(prevStat => ({open: !prevStat.open}));
        e.preventDefault();
        e.stopPropagation();
    };

    render() {
        const { item } = this.props;
        const isExpanded = this.state.open ? "open" : "";
        const ExpandIcon = this.state.open ? Feather.ChevronDown : Feather.ChevronRight;
        
        if (item.items) {
            return (
                <li className={`nav-item has-submenu ${isExpanded}`}>
                    <a href="#!" role="button" onClick={this.toggle}>
                        <span className="nav-item-label">{item.name}</span>
                        <ExpandIcon className="menu-expand-icon" />
                    </a>
                    {(this.state.open && item.items) && (
                        <ul className="nav-submenu">
                            {item.items.map((subItem, index) => (
                                <SidebarItem key={index} item={subItem}/>
                            ))}
                        </ul>
                    )}
                </li>
            );
        } else {
            return (
                <SidebarSingleItem item={item} />
            )
        }
    }
};

export default SidebarItem