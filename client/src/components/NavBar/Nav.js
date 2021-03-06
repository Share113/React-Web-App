import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'; 
import { AppBar, Toolbar, Typography, CssBaseline, Button, Avatar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import decode  from 'jwt-decode';

import onlychefs from '../../images/onlychefs.png';
import useStyles from './style';

const Nav = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/');

        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;

        if (token)
        {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
    
    return (
        <>
        <CssBaseline />

        <AppBar className = {classes.appBar} position = "static">
            <Toolbar className = {classes.toolbar}>
                <Link to="/">
                <img src = {onlychefs} className = {classes.image} alt = "icon" height = "60" />
                </Link>
                {user ? 
                (
                    <div className = {classes.profile}>
                        <Avatar alt = {user.result.name} src = {user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className = {classes.userName} variant = "h6">{user.result.name}</Typography>
                        <Button variant = "contained"  color = "secondary" onClick = {logout}>Logout</Button>
                    </div>
                ) 
                : (
                    <div className = {classes.button}>
                        <Button component = {Link} to = "/auth" variant = "contained" color = "primary">Sign in</Button>
                    </div>
                )}
            </Toolbar>
        </AppBar>
        </>
    ); 
};

export default Nav;