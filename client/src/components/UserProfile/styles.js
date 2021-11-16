import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    Secdiv : {
        display: "flex",
        justifyContent: "space-around",
        margin: "18px 0px",
        borderBottom: "1px solid grey",
        alignItems: 'center',
    },

    profilePic : {
        width: "160px",
        height: "160px",
        borderRadius: "80px",
        objectFit: "contain",
    },

    socialStanding: {
        display: "flex",
        justifyContent: "center",
        width: "108%",
    },

    gallery: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },

    item : {
        width: "30%",
    },

    mainDiv: {
        maxWidth: "1100px",
        margin: "0px auto",
    },

    editPhoto: {
        
        
    },
}));