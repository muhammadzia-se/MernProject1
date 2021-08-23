import React from 'react'
import { Container } from '@material-ui/core'
// React Router Dom
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from  './components/Home/Home.js'
import Auth from './components/Auth/Auth'
import { useSelector, useDispatch } from 'react-redux'

// alert component imported
import { CLOSE } from './constants/actionTypes'
import SnackBar from './components/SnackBar/SnackBar'

const App = () =>{
    const {alert, message, severity} = useSelector((state) => state.alert.alert)
    const dispatch = useDispatch()
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                {alert ? (<SnackBar 
                    v="top"
                    h="center"
                    severity={severity} 
                    onClose={() => {dispatch({type:CLOSE, payload: false})}} 
                    message={message}/>):''}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/auth" component={Auth} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App;