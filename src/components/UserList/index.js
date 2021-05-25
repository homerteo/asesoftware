import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
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
  const [editFields, setEditFields] = useState([]);
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

  const addEditFields = id => {
    const fields = [...editFields]
    console.log('fields', fields)
    if(fields.some(e => e === id)) {
      const index = fields.indexOf(id);
      fields.splice(index, 1);
      console.log(fields);
      setEditFields(fields);
    } else {
      fields.push(id);
      console.log(fields);
      setEditFields(fields);
    }
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
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={user.id}
                  >
                    <TableCell component="th" scope="row" id={`see-${user.id}`}>
                      <button onClick={() => handleClick(user.id)}>See User</button>
                    </TableCell>
                    <TableCell component="th" id={`name-${user.id}`} scope="row">
                      <>
                        {editFields.some(e => e === user.id) ? (
                        <input />
                        ): (
                          <>
                            {user.name}
                          </>
                        )}
                      </>
                    </TableCell>
                    <TableCell component="th" id={`age-${user.id}`} scope="row">
                      <>
                        {editFields.some(e => e === user.id) ? (
                        <input />
                        ): (
                          <>
                            {user.age}
                          </>
                        )}
                      </>
                    </TableCell>
                    <TableCell component="th" id={`birthdate-${user.id}`} scope="row">
                      <>
                        {editFields.some(e => e === user.id) ? (
                        <input />
                        ): (
                          <>
                            {user.age}
                          </>
                        )}
                      </>
                    </TableCell>
                    <TableCell component="th" scope="row" id={`edit-${user.id}`}>
                      <button onClick={() => addEditFields(user.id)}>Edit fields</button>
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