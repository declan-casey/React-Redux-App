import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import List from "./components/List"
import { connect } from 'react-redux';
import {getCharacter} from "./actions/action"
function App() {
  return (
    <div className="App">
      <List/>
    </div>
  );
}

const mapStateToProps = (state) => {   
  return { 
        character: state.character,     
        isFetching: state.isfetching,     
        error: state.error,  
       }; };

export default connect(mapStateToProps, { getCharacter })(App)