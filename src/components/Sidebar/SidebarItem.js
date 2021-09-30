import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import * as Feather from 'react-feather';

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
    }


    render() {
        const { item } = this.props;
        const isExpanded = this.state.open ? "open" : "";
        const ExpandIcon = this.state.open ? Feather.ChevronDown : Feather.ChevronRight;
        if (item.url) {
            return (
                <li className="nav-text">
                    <NavLink to={item.url}>
                        {item.name}
                    </NavLink>
                    {/* <a href="#" onClick={ () => {this.setState({open: !this.state.open})}}>{item.label}</a> */}
                </li>
            )
        } else {
            return (
                <>
                    <li className={`nav-text ${isExpanded}`}>
                        <a href="#!" role="button" onClick={this.toggle}>
                            {item.name}
                        </a>
                        <ExpandIcon className="menu-expand-icon" />
                    </li>
                    {(this.state.open && item.items) && (
                        <ul>
                            {item.items.map((subItem, index) => (
                                    <SidebarItem key={index} item={subItem}/>
                            ))}
                        </ul>
                    )}
                </>
            );
        }
    }
};

export default SidebarItem