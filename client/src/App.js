import React, { useState } from 'react';
import {
  Route,
  Link,
  Switch
} from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div className="nav-links">
        <Link to="/">Movie List</Link>
        <Link to="/movies">Movie</Link>
      </div>
      <Switch>
        <Route exact path='/'>
          <MovieList />
        </Route>
        <Route path='/movies/:id' render={props => (<Movie {...props}/>)}/>
      </Switch>
    </div>
  );
};

export default App;
