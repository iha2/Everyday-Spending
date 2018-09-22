import * as React from 'react';
import ExpansionPanel from './expansionPanel';

type Props = {
  availableOffers: any[];
  earnedOffers: any[];
  children?: any;
};

// Connect for offer data

const OfferTab: React.SFC<Props> = (props: Props) => {
  return (
    <div>
      <ExpansionPanel
        header={<div>{props.earnedOffers.length} Earned Offers</div>}
      >
        <div>Earned Offers</div>
      </ExpansionPanel>
      <ExpansionPanel
        header={<div>{props.availableOffers.length} Available Offers</div>}
      >
        <div>Available Offers</div>
      </ExpansionPanel>
    </div>
  );
};

export default OfferTab;
