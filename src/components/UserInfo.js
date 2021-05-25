import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
}));

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({});
  const classes = useStyles();
  const { id } = useParams();
  
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
        <p>{ userInfo.name }</p>
        <p>{ userInfo.age }</p>
        <p>{ userInfo.birthdate }</p>
      </Paper>
    </div>
  );
}

export default UserInfo;
