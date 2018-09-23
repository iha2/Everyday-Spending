import * as React from 'react';
import ArrowIcon from '@material-ui/icons/ArrowRight';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from './expansionPanel';
import { Merchant } from './merchant';

type Props = {
  availableOffers: any[];
  earnedOffers: any[];
  children?: any;
};

// Connect for offer data

const OfferTab: React.SFC<Props> = (props: Props) => {
  const { availableOffers, earnedOffers } = props;
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
          <ExpansionPanel key={i} header={offer.merchantName}>
            <Merchant
              labels={['Starbucks', 'Tim Hortons']}
              datasets={[
                {
                  label: 'Merchants',
                  data: [12, 24],
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
            icon={<ArrowIcon />}
          >
            <Merchant
              labels={['Starbucks', 'Tim Hortons']}
              datasets={[
                {
                  label: 'Merchants',
                  data: [12, 24],
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

export default OfferTab;
