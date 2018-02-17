import React, { Component } from 'react'
import { Row, Col,Button } from 'react-materialize'
import { Link } from 'react-router-dom'
import './NotFound.css'

class NotFound extends Component {
    render() {
        return (
            <center>
                <div>
                    <div className='wrong'>
                        <Row>
                            <Col m={4} l={4}></Col>
                            <Col s={12} m={4} l={4}>
                                <p className='shadow'>This page doesnt exist</p>
                                <Link to='/'><Button className='gifBtn'>Go Home</Button></Link>
                            </Col>
                            <Col m={4} l={4}></Col>
                        </Row>
                    </div>
                </div>
            </center>
        )
    }
}

export default NotFound
