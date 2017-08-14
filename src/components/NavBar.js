import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
// import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styleSheet = createStyleSheet({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});

function NavBar(props) {
  const { classes, actions } = props;
  function handleOpenDrawer() {
    actions.TOGGLE_DRAWER({
      left: true
    })
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu" onClick={handleOpenDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Tiny-Notes
          </Typography>
          {/*<Button color="contrast">Login</Button>*/}
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(NavBar);