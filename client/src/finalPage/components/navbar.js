
import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  IconButton,
  withStyles
} from "@material-ui/core";
import {
  List,
  ListItem,
  Dialog,
  TextField,
  DialogContent,
  Avatar,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Grid,
  Link as Link_,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import BookIcon from "@material-ui/icons/Book";
import OpenLoginDialog from './LoginDialog'
import NavigationDrawer from "../../shared/components/NavigationDrawer";
const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400
  },
  noDecoration: {
    textDecoration: "none !important"
  }
});

function NavBar(props) {
  const {
    classes,
    OpenLoginDialog,
  
    mobileDrawerOpen,
    selectedTab
  } = props;
  const menuItems = [
    {
      link: "/",
      name: "Home",
      icon: <HomeIcon className="text-white" />
    },
    {
      link: "/blog",
      name: "Blog",
      icon: <BookIcon className="text-white" />
    },
    {
      name: "Login",
      onClick: OpenLoginDialog,
      icon: <LockOpenIcon className="text-white" />
    }
  ];
  var [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="primary"
            >
              Crypto
            </Typography>
            <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="secondary"
            >
              Vote
            </Typography>
          </div>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
        
                aria-label="Open Navigation"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden smDown>

                      <Button
                        color="secondary"
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                      >
                        Home
                      </Button>
                      <Button
                        color="secondary"
                        size="large"
                        onClick={handleOpen}
                        classes={{ text: classes.menuButtonText }}
                      >
                        Login
                      </Button>
                      <Dialog open={open} onClose={handleClose}>
                      <DialogContent>
                        <Container component="main" maxWidth="xs">
                          <CssBaseline />
                          <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                              <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                              Sign in
                            </Typography>
                            <form className={classes.form}>
                              <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                              />
                              <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                              />
                              <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                              />
                              <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                              >
                                Sign In
                              </Button>
                             
                            </form>
                          </div>
                        </Container>
                      </DialogContent>
                    </Dialog>   
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
       
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,

  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
