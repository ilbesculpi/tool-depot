import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V3</h1>
      </header>
      <section>
        <ProductList />
      </section>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
