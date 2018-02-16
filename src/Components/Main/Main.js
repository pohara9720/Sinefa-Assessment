import React, { Component } from 'react'
import './Main.css'
import '../../global.css'
import { Row, Col } from 'react-materialize'

class Main extends Component {
    render() {
        return (
            <div className='container'>
                <Row className='row'>
                    <Col s={4}></Col>
                    <Col s={4} className='about'>
                        <center>
                            <h1>Cine<span>Me</span></h1>
                            <p>Watch New Movies through your mobile device</p>
                        </center>
                    </Col>
                    <Col s={4}></Col>
                </Row>
            </div>
        )
    }
}

export default Main
