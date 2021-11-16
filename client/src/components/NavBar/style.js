import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        padding: '10px 20px',
        backgroundColor: '#66a6f0',
      },

      toolbar: {
      },

      image: {
        marginRight: 50,
      },

      button: {
        marginLeft: 780,
        width: "100px",
      },

      profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '300px',
        marginLeft: 550,
      },

      userName: {
        display: 'flex',
        alignItems: 'center',
      },

}));