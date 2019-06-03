import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Provider } from "mobx-react";

import './App.scss'

import Stores from './Stores'

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

class App extends Component {
    render() {
        return (
            <Provider stores={Stores}>
                <BrowserRouter>
                    <header className='app-header'>
                        <ul className='menu-bar'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/page1'>Page 1</Link></li>
                            <li><Link to='/page2'>Page 2</Link></li>
                            <li><Link to='/page3'>Page 3</Link></li>
                        </ul>
                    </header>
                    <section className='app-body'>
                        <Route path='/' component={Home}/>
                        <Route path='/page1' component={Page1}/>
                        <Route path='/page2' component={Page2}/>
                        <Route path='/page3' component={Page3}/>
                    </section>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;