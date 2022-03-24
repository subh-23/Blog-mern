import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
//pages
import Home from './pages/Home';
import About from './pages/About';
import ArticleList from './pages/ArticleList';
import Article from './pages/Article';
import NotFound from "./pages/NotFound";
// components
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <Navbar />
      <div className='max-w-screen-md mx-auto pt-20'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/articles-list' component={ArticleList} />
          <Route exact path='/article/:name' component={Article} />
          <Route component={NotFound}/>
        </Switch>
      </div>

    </Router>

  );
}

export default App;