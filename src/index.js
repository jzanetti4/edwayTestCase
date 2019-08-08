//this is other branch
import React from 'react'
import ReactDom from 'react-dom'
import {applyMiddleware, compose, createStore} from 'redux'

import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


import Reducer from './reducer'
import './index.css'

import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga/saga";

import Search from './container/search/search'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(Reducer, compose(
    applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
))

sagaMiddleware.run(rootSaga)

const hello=()=>{
    return(<h1>hello</h1>)
}


ReactDom.render(
    (<Provider store={store}>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route component={Search}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    ), document.getElementById('root')
)

