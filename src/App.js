import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import TrainingHung from './components/trainingHung'
import Example from './components/example';
import PopUp from "./components/popup"
import MaterialTable from 'material-table';
import MaterialTableDemo from './components/container';
import AddProduct from './components/AddProduct';
import List from './components/list';

// Styles

function App() {
  return (
    <div className="App">

      {/* <Header /> */}
      {/* <PopUp/> */}
      {/* <AddProduct/> */}
      {/* <Footer />
      <Example /> */}
      {/* <MaterialTableDemo /> */}
      <List />
      

      {/* <TrainingHung /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
