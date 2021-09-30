import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class SidebarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    render() {
        const { item } = this.props;
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
                    <li className="nav-text">
                        <label onClick={() => {this.setState({open: !this.state.open})}}>
                        {/* <NavLink to="#" onClick={() => {this.setState({open: !this.state.open})}}> */}
                            {item.name}
                        </label>
                        {/* </NavLink> */}
                        {/* <a href="#" onClick={ () => {this.setState({open: !this.state.open})}}>{item.label}</a> */}
                    </li>
                    {(this.state.open && item.items) && (
                        <ul>
                            {item.items.map((subItem, index) => (
                                // <React.Fragment key={`${subItem.name}${index}`}>
                                    <SidebarItem key={index} item={subItem} className="nav-text"/>
                                // </React.Fragment>
                            ))}
                        </ul>
                    )}
                </>
            );
        }
    }
};

export default SidebarItem