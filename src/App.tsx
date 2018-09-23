import * as React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavBar from './components/navbar';
import Tabs from './components/tabs';
import { customerDataActions } from './redux/modules/customerData';

const JennyAaBerg =
  'c3990768-e7b6-4d4b-bca3-39434d9078b7_9c8b689c-daec-4fe6-836d-07d36f9dbcc9';

const styles = (theme: any) => ({
  button: {
    margin: theme.spacing.unit,
    backgroundColor: '#eef6eb'
  }
});

class App extends React.Component<any, any> {
  public componentWillMount() {
    this.props.fetchCustomerData(JennyAaBerg);
    this.props.fetchCustomerTransactionsData(JennyAaBerg);
  }

  public render() {
    return (
      <div id="container" className="flex justify-center mt4">
        <div
          id="phone-container"
          className="flex flex-column ba"
          style={{ height: '40rem', width: '25rem' }}
        >
          <NavBar />
          <Tabs />
        </div>
        <div
          className="flex flex-column absolute mt4"
          style={{ marginLeft: '24rem' }}
        >
          <Button variant="contained" className={this.props.classes.button}>
            Set Starbucks Rewards
          </Button>
          <Button variant="contained" className={this.props.classes.button}>
            Set Tim's Rewards
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {
  ...customerDataActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
