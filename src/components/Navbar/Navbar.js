import * as React from 'react';
import './NavBar.css'

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// link zone


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

// import { Link } from 'react-router-dom' 



//custom icons
import EntradasComponent from '../icons/Entradas'
import HomeComponent from '../icons/Home'
import ParqueaderoComponent from '../icons/Parqueadero'
import ResidenteComponent from '../icons/Residentes'
import VehicleIcon from '../icons/Vehiculos'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});


const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(11)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(14)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  console.log(theme)
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawer = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ display: 'flex', background: 'primary.main' }}>
      <CssBaseline />
      
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawer}>
            {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
            {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* Aqui iran todos los links del navbar */}
          <ListItem disablePadding component={Link} to={'/entradas'}>
            <ListItemButton>
              <EntradasComponent stroke= '#BCFFFA'></EntradasComponent>
              <ListItemText primary={"Entradas"} sx={{ paddingLeft: 2}}></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding component={Link} to={'/parqueadero'}>
            <ListItemButton>
              <ParqueaderoComponent stroke= '#BCFFFA'></ParqueaderoComponent>
              <ListItemText primary={"Parqueadero"} sx={{ paddingLeft: 2}}></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding component={Link} to={'/residentes'}>
            <ListItemButton>
              <ResidenteComponent stroke= '#BCFFFA'></ResidenteComponent>
              <ListItemText primary={"Residentes"} sx={{ paddingLeft: 2}}></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding component={Link} to={'/hogares'}>
            <ListItemButton>
              <HomeComponent stroke= '#BCFFFA'></HomeComponent>
              <ListItemText primary={"Hogares"} sx={{ paddingLeft: 2}}></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding component={Link} to={'/vehiculos'}>
            <ListItemButton>
              <VehicleIcon stroke= '#BCFFFA'></VehicleIcon>
              <ListItemText primary={"Vehiculos"} sx={{ paddingLeft: 2}}></ListItemText>
            </ListItemButton>
          </ListItem>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <EntradasComponent stroke='#000000'></EntradasComponent>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>
      </Drawer>
    </Box>
  );
}