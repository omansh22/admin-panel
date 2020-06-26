import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Intership from '../components/intership';
import Webinar from '../components/webinar';
import Webview from '../components/webview';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    background: {
      default: '#DAE0E2',
    }
    
  },
}));

export default function Mainadmin() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Clipped drawer
          </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>

              <ListItem button key='Dashboard'>
                <ListItemIcon> <InboxIcon /> </ListItemIcon>
                <Link to="/"><ListItemText primary="Dashboard" /></Link>
              </ListItem>

            </List>
            <Divider />
            <List>
              <ListItem button key="Intership" >
                <ListItemIcon> <InboxIcon /> </ListItemIcon>
                <Link to="/intership"><ListItemText primary="Intership" /></Link>
              </ListItem>

            </List>
            <List>
              <ListItem button key="Webinar" >
                <ListItemIcon> <MailIcon /></ListItemIcon>
                <Link to="/webinar"><ListItemText primary="Webinar" /></Link>
              </ListItem>

            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            
              <Route exact path="/intership">
                <Intership/>
              </Route>
              <Route exact path="/webinar">
                <Webinar/>
              </Route>
              <Route exact path= "/webinar-view/:id">
                <Webview/>
              </Route>
            
          </Switch>

        </main>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
