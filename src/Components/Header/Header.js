import React, { Component } from 'react'
import './Header.css'
import '../../global.css'
import { Link } from 'react-router-dom'
import {SideNav, SideNavItem,Button,Icon} from 'react-materialize'

class Header extends Component {
    render() {
        const side = 
    <SideNav
        trigger={<Button className='hamburger'><Icon >menu</Icon></Button>}
        options={{ closeOnClick: true }}
    >
        <SideNavItem userView
            user={{
                background: 'img/office.jpg',
                image: 'img/yuna.jpg',
                name: 'John Doe',
                email: 'jdandturk@gmail.com'
            }}
        />
        <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
        <SideNavItem href='#!second'>Second Link</SideNavItem>
        <SideNavItem href='#!second'>Second Link</SideNavItem>
        <SideNavItem href='#!second'>Second Link</SideNavItem>
    </SideNav>    
        return (
            <div className='navbar-fixed'>
                <nav>
                {side}
                    <div className="nav-wrapper">
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to='/'>About</Link></li>
                            <li><Link to='/movies'>Movies</Link></li>
                            <li><Link to='/watchlist'>Watch List</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header