import React, { Component } from 'react'
import './Header.css'
import '../../global.css'
import { Link } from 'react-router-dom'
import {SideNav, SideNavItem,Button,Icon} from 'react-materialize'

class Header extends Component {
    constructor(props){
        super(props)

        this.state={

        }

    }
    render() {
        const side = 
    <SideNav
        trigger={<Button className='hamburger'><Icon >menu</Icon></Button>}
        options={{ closeOnClick: true }}
    >
        <h3><span className='check'>Check</span><span className='neon'>Meowt</span></h3>
        <SideNavItem href='/'>Home</SideNavItem>
        <SideNavItem href='/movies'>Cat Gifs</SideNavItem>
        <SideNavItem href='/watchlist'>Saved Gifs</SideNavItem>
        
    </SideNav>    
        return (
            <div className='navbar navRelative'>
                <nav>
                    {side}
                    <div className="nav-wrapper">
                        <Link to='/' className='right shadow'>CheckMeowt</Link>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/movies'>Cats Gifs</Link></li>
                            <li><Link to='/watchlist'>Saved Cats</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header