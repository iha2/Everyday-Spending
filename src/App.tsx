import * as React from 'react';
import NavBar from './components/navbar';
import Tabs from './components/tabs';
import { getCustomer } from './backend';

const JennyAaBerg =
  '23c1f927-0342-4e7b-856e-9b5d802081a7_c418b5e6-ef7a-4774-88bc-762f2e9adc53';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      customerData: 'undefined'
    };
  }

  public componentWillMount() {
    getCustomer(JennyAaBerg).subscribe(customerData =>
      this.setState({
        customerData: customerData.data.result
      })
    );
  }

  public render() {
    return (
      <div id="container" className="flex justify-center">
        <div
          id="phone-container"
          className="flex flex-column ba"
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
