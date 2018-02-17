import React, { Component } from 'react'
import './WatchList.css'
import '../../global.css'
import { Row, Col,Button } from 'react-materialize'
import { Link } from 'react-router-dom'

class WatchList extends Component {
    constructor(props){
        super(props)

        this.state={
            saved:[]
        }
    }

    
    componentWillMount(){
        var get = localStorage.getItem('Saved')
        console.log(get)
        var parse = JSON.parse(get)
        console.log(parse)
        this.setState({saved:parse})
    }

    render() {
        console.log(this.state.saved)
        let saved 
        this.state.saved === null ? 
            saved = 
            <center><div className='None'>
                <Row>
                    <Col m={4} l={4}></Col>
                    <Col s={12} m={4} l={4}>
                        <p className='shadow'>You have no saved gifs</p>
                        <Link to='/movies'><Button className='gifBtn'>View Gifs</Button></Link>
                    </Col>
                    <Col m={4} l={4}></Col>
                </Row>
            </div></center>:
            saved = this.state.saved.map((cat,index) => 
                <center key={index}>
                    <Col s={12} m={4} l={4}>
                        <div className='imageCon'>
                            <p className='shadow'>{cat.title}</p>
                            <img className='pictures' src={`${cat.images.original.url}`}/>
                        </div>
                    </Col>
                </center>
            )
        return (
            <div className='container-movies'>
                <div className='block'>
                    <Row id="gifs">
                        {saved}
                    </Row>
                </div>
            </div>
        )
    }
}

export default WatchList
