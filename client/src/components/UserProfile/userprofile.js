import React from 'react';
import { Link } from 'react-router-dom'; 
import { Typography, Button, TextField } from '@material-ui/core';

import logo from '../../images/onlychefs.png';
import useStyles from './styles';

const Profile = () => {
    const classes = useStyles();
    var description = 'OnlyChefs Offical, where no recipe is a secret and you are what you eat';
    const hasDescription = true;

    return (
        <div className = {classes.mainDiv}>
            <div className = {classes.Secdiv}>
                <div>
                    <img src = {logo} className = {classes.profilePic} />
                </div>
                <div>
                    <Typography variant = "h2">OnlyChefs Official</Typography>
                    <div className = {classes.socialStanding}>
                        <Button><Typography>1 Posts</Typography></Button>
                        <Button><Typography>1B Followers</Typography></Button>
                        <Button><Typography>7 Following</Typography></Button>
                    </div>
                    <Button component = {Link} to = "/editPro" fullWidth 
                    style = {{marginBottom: 10, marginTop: 5, height: "40px"}} 
                    type = "button" color = "primary" variant = "contained">
                    Edit User Settings</Button>
                    {hasDescription ? (<h4>{description}</h4>) : <></>}
                </div>
            </div>
            <div className = {classes.gallery}>
                <img src = {logo} className = {classes.item} />
            </div>
        </div>
    );
};

export default Profile;