import * as React from 'react';
import ArrowIcon from '@material-ui/icons/ArrowRight';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpansionPanel from './expansionPanel';
import OfferCard from './offerCard';

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
        header={<span>{earnedOffers.length} Earned Offers</span>}
        icon={<ChevronRightIcon />}
      >
        {earnedOffers.map((offer, i) => (
          <ExpansionPanel key={i} header={offer.merchantName}>
            <OfferCard offer={offer} />
          </ExpansionPanel>
        ))}
      </ExpansionPanel>
      <ExpansionPanel
        header={<span>{availableOffers.length} Available Offers</span>}
        icon={<ChevronRightIcon />}
      >
        {earnedOffers.map((offer, i) => (
          <ExpansionPanel
            key={i}
            header={offer.merchantName}
            icon={<ArrowIcon />}
          >
            <OfferCard offer={offer} />
          </ExpansionPanel>
        ))}
      </ExpansionPanel>
    </div>
  );
};

export default OfferTab;
