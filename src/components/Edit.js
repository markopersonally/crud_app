import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";

const Edit = ({ list, handleEditState }) => {
  const { id } = useParams();
  const personToEdit = list.find((person) => person.id === id);

  const [name, setName] = useState(personToEdit.name);
  const [age, setAge] = useState(personToEdit.age);
  const [username, setUserame] = useState(personToEdit.username);

  let navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    const updatedData = {
      id: id,
      name: name,
      age: age,
      username: username,
    };
    handleEditState(updatedData);
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div>
      <Form onSubmit={handleEdit} className="mt-5 d-grid gap-2">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="number"
            placeholder="Enter Age"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Control
            type="text"
            placeholder="Enter Username"
            required
            value={username}
            onChange={(e) => setUserame(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Edit Person</Button>
        <Button onClick={handleCancel} type="button">
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
