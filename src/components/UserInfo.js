import { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import userService from '../api/users';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '25px 0 25px 25px',
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    width: '80vw',
    minHeight: '80vh',
    height: 'auto',
    marginBottom: theme.spacing(2),
  },
  container: {
    height: 'auto',
  },
  list: {
    listStyle: 'none',
    textAlign: 'left',
    marginTop: '20vh',
  },
  listItem: {
    marginTop: '20px',
  },
  button: {
    height: '118px',
    width: '118px',
    marginTop: '20vh',
  }
}));

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({});
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();

  const handleClick = () => history.goBack()
  
  const getUserInfo = async () => {
    try {
      const data = await userService.getUserList(id);
      const date = moment(data.birthdate).format('DD-MM-YYYY');
      data.birthdate = date;
      setUserInfo(data);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getUserInfo();
  }, [])

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <h1>User Information</h1>
        <ul className={classes.list}>
          <li className={classes.listItem}><strong>Name: </strong>{ userInfo.name }</li>
          <li className={classes.listItem}><strong>Age: </strong>{ userInfo.age }</li>
          <li className={classes.listItem}><strong>Birthday: </strong>{ userInfo.birthdate }</li>
        </ul>
        <IconButton onClick={() => handleClick()} className={classes.button}><ArrowBackIosIcon /><strong>Go Back</strong></IconButton>
      </Paper>
    </div>
  );
}

export default UserInfo;
