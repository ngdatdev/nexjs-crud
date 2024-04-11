"use client";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

interface IProps {
  users: IUser[];
}

const TableUser = (props: IProps) => {
  const { users } = props;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Username</th>
          <th>Fullname</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>
                <Button>View</Button>
                <Button variant="warning" className="mx-2">Edit</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableUser;
