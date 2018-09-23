import * as React from 'react';
import { connect } from 'react-redux';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from './expansionPanel';
import { merchantCategories } from '../config';
import { customerDataActions } from '../redux/modules/customerData';

class TransactionsTab extends React.Component<any, any> {
  public render() {
    return (
      <span>
        {merchantCategories.map(category => (
          <div className="flex">
            <input type="checkbox" />
            <ExpansionPanel
              header={<span>{category}</span>}
              icon={<ChevronRightIcon />}
            >
              <div className="flex flex-column">
                {this.props.transactions
                  .filter(
                    (transaction: any) =>
                      transaction.categoryTags[0] === category
                  )
                  .map((transaction: any) => (
                    <span>
                      <Typography>
                        {transaction.merchantName} -{' '}
                        {transaction.currencyAmount} :: {transaction.merchantId}
                      </Typography>
                    </span>
                  ))}
              </div>
            </ExpansionPanel>
          </div>
        ))}
      </span>
    );
  }
}

const mapStateToProps = (state: any) => ({
  transactions: state.customerDataReducer.transactions
});

const mapDispatchToProps = {
  ...customerDataActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsTab);
