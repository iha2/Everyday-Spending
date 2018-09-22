import * as React from 'react';
import NavBar from './components/navbar';
import Tabs from './components/tabs';

class App extends React.Component {
  public render() {
    return (
      <div id="container" className="flex justify-center">
        <div
          id="phone-container"
          className="flex ba"
          style={{ height: '40rem', width: '25rem' }}
        >
          <NavBar />
          <Tabs />
        </div>
      </div>
    );
  }
}

export default App;
