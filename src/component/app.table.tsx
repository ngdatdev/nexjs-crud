"use client";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import AddModal from "./create.modal";
import { useState } from "react";
import EditModal from "./update.modal";

interface IProps {
  users: IUser[];
}

const TableUser = (props: IProps) => {
  const { users } = props;
  const [isShowAdding, setIsShowAdding] = useState<boolean>(false);
  const [isShoWEdit, setIsShoWEdit] = useState<boolean>(false);
  const [infoUser, setInfoUser] = useState<IUser | null>(null)
 
  const handleUpdateModal = (user: IUser) => {
    console.log(user);
    setInfoUser(user)
    setIsShoWEdit(true)
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <h3>Table User</h3>
        <Button variant="success" className="btn-addnew" onClick={() => setIsShowAdding(true)}>
          Add new
        </Button>
      </div>
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
                  <Button variant="warning" className="mx-2" onClick={() => handleUpdateModal(user)}>
                    Edit
                  </Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <AddModal show={isShowAdding} setShow={setIsShowAdding} />
      <EditModal show={isShoWEdit} setShow={setIsShoWEdit} infoUser={infoUser} setInfoUser={setInfoUser}/>
    </>
  );
};

export default TableUser;
