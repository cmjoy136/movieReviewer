import React from 'react'
import '../sass/styles.scss'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Homepage from '../pages/HomePage'
import Navbar from "../components/Navbar.jsx"
import MoviePage from '../pages/MoviePage'
import SearchPage from '../pages/SearchPage'

function App() {
  return (
    <Router>
     <Navbar/>
     <Switch>
       <Route path="/" exact component={Homepage}/>
       <Route path="/search" component={SearchPage}/>
       <Route path="/movies/:id" component={MoviePage}/>
     </Switch>
  
    </Router>
  );
}

export default App;
