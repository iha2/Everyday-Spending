import * as React from 'react';
import { connect } from 'react-redux';
import NavBar from './components/navbar';
import Tabs from './components/tabs';
import { customerDataActions } from './redux/modules/customerData';

const JennyAaBerg =
  'c3990768-e7b6-4d4b-bca3-39434d9078b7_9c8b689c-daec-4fe6-836d-07d36f9dbcc9';

class App extends React.Component<any, any> {
  public componentWillMount() {
    this.props.fetchCustomerData(JennyAaBerg);
    this.props.fetchCustomerTransactionsData(JennyAaBerg);
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

const mapStateToProps = (state: any) => ({});

const mapDisptachToProps = {
  ...customerDataActions
};

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(App);
