import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './Components/Main/Main'
import Movies from './Components/Movies/Movies'
import WatchList from './Components/WatchList/WatchList'
import Header from './Components/Header/Header'
import NotFound from './Components/NotFound/NotFound'





ReactDOM.render(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/movies" component={Movies} />
                <Route path="/watchlist" component={WatchList} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>

    , document.getElementById('root'))
registerServiceWorker()
