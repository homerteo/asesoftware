import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const headCells = [
  { id: 'name', label: 'Name', align: 'left' },
  { id: 'age', label: 'Age', align: 'left' },
  { id:'birthdate', label: 'Birthdate', align: 'left' }
];

const UserListTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        {headCells.map(cell => (
          <TableCell
            key={cell.id}
            align={cell.align}
            padding='default'
          >
            { cell.label }
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default UserListTableHead;
