import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Menu from './Components/Menu';
import Home from './Pages/Home/Home';
import Journal from './Pages/Journal/Journal';
import JournalEntry from './Components/JouranlEntry/JournalEntry';

import GlobalStyle from './globalStyle';
import App from './AppStyles';
import MoviedApi from './Services/moviedApiClient';

export default () => {
  const [movies, setMovies] = useState({});
  const [explore, setExplore] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    MoviedApi.getExploreMovies().then((movies) => setMovies());
  }, []);

  return (
    <App>
      <GlobalStyle />
      <div>
        <Menu />
        <Route path="/home" component={Home}></Route>
        <Route path="/wishlist" component={Journal}></Route>
        <Route path="/watched" component={Journal}></Route>
        <Route exact path="/journal" component={Journal}></Route>
        <Route
          path="/journal/:id"
          render={(props) => <JournalEntry {...props} />}
        ></Route>
      </div>
    </App>
  );
};
