import * as React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { createStructuredSelector } from 'reselect';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { merchantData } from '../config';
import ExpansionPanel from './expansionPanel';
import { Merchant } from './merchant';
import { Transaction } from '../backend';

type Props = {
  availableOffers: any[];
  earnedOffers: any[];
  sortedMerchants: Record<string, Transaction[]>;
  children?: any;
};

const sortByMerchantID = (state: any) => {
  return state.customerDataReducer.transactions.reduce((acc: any, transaction: any) => {
    const keyConfig = (Object.keys(merchantData) as any).includes(transaction.merchantId);
    const key = (keyConfig) ? merchantData[transaction.merchantId].name: transaction.merchantId; 
    const updated = [...(acc[key] || []),  transaction];
    return { ...acc, ...{ [key]: updated } };
}, {});
}

const mapStateToProps = createStructuredSelector({
  sortedMerchants: sortByMerchantID
});

const OfferTab: React.SFC<Props> = ({ availableOffers, earnedOffers, sortedMerchants }: Props) => {
  console.log((sortedMerchants.Starbucks || []).reduce((acc, trans) => acc + trans.currencyAmount, 0));
  // const { availableOffers, earnedOffers } = props;
  return (
    <div>
      <ExpansionPanel
        header={
          <span className="flex items-center">
            <Chip label={earnedOffers.length} />
            <Typography className="pl3">Earned Offers</Typography>
          </span>
        }
        icon={<ChevronRightIcon />}
      >
        {earnedOffers.map((offer, i) => (
          <ExpansionPanel
            key={i}
            header={offer.merchantName}
            style={{ backgroundColor: '#eef6eb', color: '#FFFFFF' }}
          >
            <Merchant
              labels={['Starbucks', 'Tim Hortons']}
              datasets={[
                {
                  label: 'Merchants',
                  data: [(sortedMerchants.Starbucks || []).reduce((acc, trans) => acc + trans.currencyAmount, 0), (sortedMerchants['Tim Hortons'] || []).reduce((acc, trans) => acc + trans.currencyAmount, 0)],
                  backgroundColor: ['#3e95cd', '#8e5ea2']
                }
              ]}
            />
          </ExpansionPanel>
        ))}
      </ExpansionPanel>
      <ExpansionPanel
        header={
          <span className="flex items-center">
            <Chip label={availableOffers.length} />
            <Typography className="pl3">Available Offers</Typography>
          </span>
        }
        icon={<ChevronRightIcon />}
      >
        {earnedOffers.map((offer, i) => (
          <ExpansionPanel
            key={i}
            header={offer.merchantName}
            style={{ backgroundColor: '#eef6eb', color: '#FFFFFF' }}
          >
            <Merchant
              labels={['Starbucks', 'Tim Hortons']}
              datasets={[
                {
                  label: 'Merchants',
                  data: [(sortedMerchants.Starbucks || []).reduce((acc, trans) => acc + trans.currencyAmount, 0), 24],
                  backgroundColor: ['#3e95cd', '#8e5ea2']
                }
              ]}
            />
          </ExpansionPanel>
        ))}
      </ExpansionPanel>
    </div>
  );
};

export default connect(mapStateToProps)(OfferTab);
