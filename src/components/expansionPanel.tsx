import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

type ThemeType = any;

const styles = (theme: ThemeType) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

type Props = {
  children: any;
  classes: any;
  header: any;
};

const ExpansionPanelBar: React.SFC<Props> = (props: Props) => {
  return (
    <div className={props.classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ChevronRightIcon />}>
          <Typography className={props.classes.heading}>
            {props.header}
          </Typography>
        </ExpansionPanelSummary>
        r<ExpansionPanelDetails>{props.children}</ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default withStyles(styles)(ExpansionPanelBar);
