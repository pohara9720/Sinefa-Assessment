import React, { Component } from 'react'
import './Main.css'
import '../../global.css'
import { Row, Col,Icon,Button } from 'react-materialize'
import { Link } from 'react-router-dom'

class Main extends Component {
    render() {
        return (
            <div className='container'>
                <Row className='row'>
                    <Col s={4}></Col>
                    <Col s={12} m={4} l={4} className='about'>
                        <center>
                            <h1><span className='check'>Check</span><span className='neon'>Meowt</span></h1>
                            <p className='shadow'>Enjoy the best cat gifs of all time</p>
                        </center>
                    </Col>
                    <Col s={4}></Col>
                </Row>
                <Row className='row'>
                    <Col s={2} m={4} l={4}></Col>
                    <Col s={8} m={4} l={4}>
                        <center>
                            <Link to='/movies'><Button>Peep Cat Gifs</Button></Link>
                        </center>
                    </Col>
                    <Col s={2} m={4} l={4}></Col>
                </Row>
                <Row className='row'>
                    <Col s={4}></Col>
                    <Col s={12} m={4} l={4}>
                        <center>
                            <ul className='icon-list shadow'>
                                <li><a href='tel:16235708427'><Icon small>call</Icon></a></li>
                                <li><a href='mailto:pat.oharaiv@gmail.com'><Icon small>email</Icon></a></li>
                                <li><a href='#'><Icon small>location_on</Icon></a></li>
                            </ul>
                        </center>
                    </Col>
                    <Col s={4}></Col>
                </Row>
            </div>
        )
    }
}

export default Main
