"use client";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import axios from "axios";
import { mutate } from "swr";

interface IProp {
  show: boolean;
  setShow: (value: boolean) => void;
  infoUser: IUser | null;
  setInfoUser: (value: IUser) => void;
}

const EditModal = (props: IProp) => {
  const { show, setShow, infoUser, setInfoUser } = props;
  const [name, setName] = useState('');
//   const [username, setUsername] = useState("");
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (infoUser && infoUser.username) setName(infoUser?.name);
  }, [infoUser]);

  const handleSubmit = async () => {
    const res = await axios.put(
      `http://localhost:8080/api/user/update/${name}`,
      {
        name: 'Hehe',
        bio: "Nguyen Dat Edit",
      }
    );
    if (!res) {
      toast.error("Update not successfully");
    } else {
        console.log(res.data);
        mutate("http://localhost:8080/api/user/getAll");
        toast.success("Update user success");
        handleClose();
    }
    
  };
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Update</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
