import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {  useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import CollectionsIcon from '@mui/icons-material/Collections';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import User from '../pages/User';
import Gallery from '../pages/Gallery';
import Graphs from '../pages/Graphs';
import Faq from '../pages/Faq';


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
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
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

 const SideNav = () => {
   const theme = useTheme();
   const [open, setOpen] =useState(false);
   const [menudata, setMenudata] =useState("Employee");
   const navigate = useNavigate();

  {/* const handleDrawerOpen = () => {
    setOpen(true);
  };
*/}

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const[displayusername,displayusernameupdate]=useState('');
  useEffect(() => {
      let username = sessionStorage.getItem('username');
      if (username === '' || username === null) {
          navigate('/login');
      }else{
          displayusernameupdate(username);
      }}, []);

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={()=>{setOpen(!open)}}
            edge="start"
            
          >
          <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap >
             Welcome {displayusername}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
         <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>setMenudata("Employee")}>
             <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                 }}
              >
                <ListItemIcon 
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    
                     }}
                >
                <GroupIcon/>
                </ListItemIcon>
                <ListItemText primary="Employee"/>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}onClick={()=>setMenudata("Charts")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <BarChartIcon/>
                </ListItemIcon>
                <ListItemText primary="Charts"/>
              </ListItemButton>
            </ListItem>
          
            <ListItem disablePadding sx={{ display: 'block' }}onClick={()=>setMenudata("Gallery")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <CollectionsIcon/>
                </ListItemIcon>
                <ListItemText primary="Gallery"/>
              </ListItemButton>
            </ListItem>
      
            <ListItem disablePadding sx={{ display: 'block' }}onClick={()=>setMenudata("FAQ")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <QuestionAnswerIcon />
                </ListItemIcon>
                <ListItemText primary="FAQ"/>
              </ListItemButton>
            </ListItem>
            <Button  onClick={() => {navigate('/login')}}>
              <LogoutIcon />
            </Button>
           </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        { menudata=="Employee" && <User/>}
        { menudata=="Charts" && <Graphs/>}
        { menudata=="Gallery" && <Gallery/>}
        { menudata=="FAQ" && <Faq/>}
      </Box>
    </Box>
    </>
  );
}

export default SideNav;