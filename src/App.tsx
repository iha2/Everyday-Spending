import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { getCustomer } from './backend';

const JennyAaBerg = '23c1f927-0342-4e7b-856e-9b5d802081a7_c418b5e6-ef7a-4774-88bc-762f2e9adc53';

class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);

    this.state = {
      customerData: 'undefined'
    }
  }

  public componentWillMount() {
    getCustomer(JennyAaBerg).subscribe(customerData => this.setState({
      customerData
    }));
  }

  public render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>{JSON.stringify(this.state.customerData)}</code> and save to reload.
          
        </p>
      </div>
    );
  }
}

export default App;
