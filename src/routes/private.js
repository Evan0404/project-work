import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
}from 'react-router-dom';

import LayoutNav from '../ui/layout/nav';
import LayoutSide from '../ui/layout/side';
import HomeIndex from '../ui/home/index';
import Berita from '../ui/berita/index';
import Galeri from '../ui/galeri/index';
import Login from '../ui/autentikasi/login';

class Private extends React.Component{
    state = {

    }
    render() {
        return(
            <Router>
                <LayoutNav />
                <LayoutSide />

                <Switch>
                    <Route path="/"><HomeIndex /></Route>
                    <Route path="/berita"><Berita /></Route>
                    <Route path="/galeri"><Galeri /></Route>
                    <Route path="/login"><Login /></Route>
                </Switch>
            </Router>
        )
    }
}

export default Private;