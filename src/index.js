import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyASrmNarv7r2eN_24UBfrM8K5_vgBec_x0';


// Create a new component. This component should produce some HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
