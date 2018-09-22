import * as React from 'react';

type Props = {
  offer: {
    merchantName: string;
  };
};

const OfferCard: React.SFC<Props> = (props: Props) => {
  const { offer } = props;

  return <div>{offer.merchantName}</div>;
};

export default OfferCard;
