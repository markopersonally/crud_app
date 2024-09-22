import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const AddPerson = ({ list }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [username, setUserame] = useState("");
  const [error, setError] = useState(false);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length === 0 || age.length === 0 || username.length === 0) {
      setError(true);
    } else {
      const ids = uuid();
      let uniqueId = ids.slice(0, 1000);

      let a = name,
        b = age,
        c = username;
      list.push({ id: uniqueId, name: a, age: b, username: c });
      navigate("/");
    }
  };

  return (
    <div className="container-fluid">
      <Form className="mt-5 d-grid gap-2">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
          {error && name.length <= "" ? (
            <p className="text-danger">Complete the field!</p>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="number"
            placeholder="Enter Age"
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
          {error && age.length <= 0 ? (
            <p className="text-danger">Complete the field!</p>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Control
            type="text"
            placeholder="Enter Username"
            required
            onChange={(e) => setUserame(e.target.value)}
          ></Form.Control>
          {error && username.length <= 0 ? (
            <p className="text-danger">Complete the field!</p>
          ) : (
            ""
          )}
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Create Person
        </Button>
      </Form>
    </div>
  );
};

export default AddPerson;
