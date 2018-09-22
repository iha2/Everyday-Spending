import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import OfferTab from './offerTab';

type Props = { classes: any; theme: any };

type TabContainerType = {
  children: any;
  dir: any;
};

type ThemeType = any;

function TabContainer({ children, dir }: TabContainerType) {
  return (
    <Typography component="div" dir={dir}>
      {children}
    </Typography>
  );
}

const styles = (theme: ThemeType) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: '100%',
    width: '100%'
  }
});

class FullTabs extends React.Component<Props> {
  state = {
    value: 0
  };

  handleChange = (event: any, value: any) => {
    this.setState({ value });
  };

  handleChangeIndex = (index: any) => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth={true}
          >
            <Tab label="My Offers" />
            <Tab label="Tracked Transactions" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <OfferTab availableOffers={[1]} earnedOffers={[1]} />
          </TabContainer>
          <TabContainer dir={theme.direction}>Item Two</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(FullTabs);
