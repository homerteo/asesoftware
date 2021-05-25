import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
// import TableFooter from '@material-ui/core/TableFooter';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UserListTableHead from './UserListTableHead';
import userService from '../../api/users';

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
    height: 'auto',
    marginBottom: theme.spacing(2),
  },
  container: {
    height: 'auto',
  },
  table: {
    minWidth: 750
  },
  cell: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
}));

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const classes = useStyles();
  const history = useHistory();

  const getUserList = async () => {
    try {
      const data = await userService.getUserList();
      setUserList(data);
    } catch(error) {
      console.error(error);
    }
  }

  const handleClick = id => {
    history.push(`/${id}`)
  }
 
  useEffect(() => {
    getUserList();
  }, [])

  return(
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <TableContainer className={classes.container}>
        <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="small"
            aria-label="Lista de tareas"
          >
            <UserListTableHead />
            <TableBody>
              {userList.length > 0 && userList.map(user => {
                const date = moment(user.birthdate).format('DD-MM-YYYY');
                console.log(date);
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={user.id}
                    onClick={() => handleClick(user.id)}
                  >
                    <TableCell component="th" id={`name-${user.id}`} scope="row" padding="none">
                      {user.name}
                    </TableCell>
                    <TableCell component="th" id={`age-${user.id}`} scope="row" padding="none">
                      {user.age}
                    </TableCell>
                    <TableCell component="th" id={`birthdate-${user.id}`} scope="row" padding="none">
                      {date}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  )
}

export default UserList;