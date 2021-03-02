import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import UserStatus from './userStatus';
import { UserContext } from './UserContext';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Appbar = () => {
  

  const { isLoggedIn, loggedInRender, loggedOutRender } = UserStatus()

  const classes = useStyles();

  // let userId = localStorage.getItem('userId')
  // console.log('user id: ', userId)

  return (

    <div className={classes.root}>
      
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Demo App
          </Typography>
          {
            isLoggedIn ? loggedInRender() : loggedOutRender()
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Appbar;