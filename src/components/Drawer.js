import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
// import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
// import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
// import DraftsIcon from 'material-ui-icons/Drafts';
// import StarIcon from 'material-ui-icons/Star';
// import SendIcon from 'material-ui-icons/Send';
// import MailIcon from 'material-ui-icons/Mail';
// import DeleteIcon from 'material-ui-icons/Delete';
// import ReportIcon from 'material-ui-icons/Report';

const styleSheet = createStyleSheet({
  list: {
    width: 250,
    flex: 'initial',
  },
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
});

class UndockedDrawer extends Component {
  toggleDrawer = (side, open) => {
    const drawerState = {};
    drawerState[side] = open;
    this.props.actions.TOGGLE_DRAWER(drawerState)
  };

  handleLeftOpen = () => this.toggleDrawer('left', true);
  handleLeftClose = () => this.toggleDrawer('left', false);

  render() {
    const { classes, ui } = this.props;

    const mailFolderListItems = (
      <div>
        <ListItem button onClick={e => console.log('clicked about')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </div>
    );

    const sideList = (
      <List className={classes.list} disablePadding>
        {mailFolderListItems}
      </List>
    );

    return (
      <div>      
        <Drawer
          open={ui.drawerState.left}
          onRequestClose={this.handleLeftClose}
          onClick={this.handleLeftClose}
        >
          {sideList}
        </Drawer>
      </div>
    );
  }
}

UndockedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(UndockedDrawer);