import React, { Component } from 'react'
import './Movies.css'
import '../../global.css'
import { Row, Col,ProgressBar,Button} from 'react-materialize'


class Movies extends Component {
    constructor(props){
        super(props)

        this.state={
            cats:[],
            saved:[],
            banner:false
        }
    }

    
    componentWillMount(){
    
        return fetch('https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=aDwpw0FkNBMm4J7e2jQNoD7Q0VvgT79b')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({cats:responseJson})
            })
            .catch((error) => {
                console.error(error)
            })
    }

    banner(){
        this.setState({banner:true})
        setTimeout(() => this.setState({banner:false}), 3000)
    }

    SaveDataToLocalStorage(object){
        var array = []
        var get = localStorage.getItem('Saved')
        var parse = JSON.parse(get)

        if (parse === null) {

            var firstSaved = array.concat(object)
            var convert = JSON.stringify(firstSaved)
            localStorage.setItem('Saved',convert)
        }
        else {
            var newSaved = parse.concat(object)
            var convertToString = JSON.stringify(newSaved)
            localStorage.setItem('Saved',convertToString)
        }
        this.banner()
    }

    upperCase(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }





    render() {
        console.log(this.state.cats)
        let cats 
        this.state.cats.length === 0 ? 
            cats = <ProgressBar /> :
            cats = this.state.cats.data.map((cat,index) => 
                <center key={index}>
                    <Col s={12} m={4} l={4}>
                        <div className='imageCon'>
                            <p className='shadow'>{this.upperCase(cat.title)}</p>
                            <img className='pictures' src={`${cat.images.original.url}`}/>
                            <Button onClick={() => this.setState({saved: this.SaveDataToLocalStorage(cat)})} className='gifBtn'>Save Gif</Button>
                        </div>
                    </Col>
                </center>
            )
        return (
            <div className='container-movies'>
                <div className={this.state.banner === true ? 'toastShow' : 'toast'}>This gif has been saved!</div>
                <div className='block'>
                    <Row id="gifs">
                        {cats}
                    </Row>
                </div>
            </div>
        )
    }
}

export default Movies

