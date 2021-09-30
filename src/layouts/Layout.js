import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import logo from '../logo.svg';
import '../App.css';
import nav from "../_nav";
import routes from '../pages';
import PageContent from "../components/Page/PageContent";


export default class Layout extends Component {
    render () {
        return (
            <div className="App">
                <Sidebar items={nav} />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                    </a>
                </header>
                <PageContent>
                    <Switch>
                        {routes.map((page, key) => 
                            <Route path={page.url} render={() => <page.component />} key={key}/>
                        )}
                    </Switch>
                </PageContent>
            </div>
        )
    }

}