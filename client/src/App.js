import React from 'react';
import  { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Nav from './components/NavBar/Nav';
import Pro from './components/UserProfile/userprofile';
import editPro from './components/UserProfile/userSettings';

const App = () => {
    return (
        
        <BrowserRouter>
            <Container maxWidth = "lg">
                <Nav />
                <Switch>
                    <Route path = "/auth" exact component = {Auth}/>
                    <Route path = "/editPro" exact component = {editPro}/>
                    <Route path = "/" exact component = {Home}/>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;