import React, { Component } from 'react'
import './Movies.css'
import '../../global.css'

class Movies extends Component {
	constructor(props){
		super(props)

		this.state={
			movies:[],
			images:[]
		}
	}

	componentWillMount(){
		// fetch('http://www.img.omdbapi.com/?apikey=5fc5100d?y=2017')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       console.log('This is the JSON response',responseJson)
  //       this.setState({
  //         movies:responseJson
  //       })
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  
		return fetch("http://www.omdbapi.com/?apikey=5fc5100d?y=2017")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("This is the JSON response",responseJson);
        this.setState({
          images:responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
	
    render() {
        return (
            <div className="movies">MOVIES</div>
        )
    }
}

export default Movies
