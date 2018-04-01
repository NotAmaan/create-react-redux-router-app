// @flow
import * as React from 'react';
import { Route } from 'react-router-dom';

// Route components
import Home from '../Home';
import About from '../About';

// UI Components
import Site from '../../components/Site';

type Props = {};

class App extends React.Component<Props> {
  render() {
    return (
      <Site>
        <Site.Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Site>
    );
  }
};

export default App;
