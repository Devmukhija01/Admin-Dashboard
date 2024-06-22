// src/layouts/MainLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import { CssBaseline, Box, Toolbar, AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, TableChart, BarChart, CalendarToday, ViewKanban } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

const drawerWidth = 240;

const MainLayout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <ThemeToggle />
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItem button component={Link} to="/">
                            <ListItemIcon><Home /></ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button component={Link} to="/tables">
                            <ListItemIcon><TableChart /></ListItemIcon>
                            <ListItemText primary="Tables" />
                        </ListItem>
                        <ListItem button component={Link} to="/charts">
                            <ListItemIcon><BarChart /></ListItemIcon>
                            <ListItemText primary="Charts" />
                        </ListItem>
                        <ListItem button component={Link} to="/calendar">
                            <ListItemIcon><CalendarToday /></ListItemIcon>
                            <ListItemText primary="Calendar" />
                        </ListItem>
                        <ListItem button component={Link} to="/kanban">
                            <ListItemIcon><ViewKanban /></ListItemIcon>
                            <ListItemText primary="Kanban" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
};

export default MainLayout;
