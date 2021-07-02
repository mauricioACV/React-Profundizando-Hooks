import React, { useEffect, useState } from "react";
import { Message } from "./Message";
import "./effects.css";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log("hola");
  }, []);

  useEffect(() => {
    // console.log("formState Cambió");
  }, [formState]);

  useEffect(() => {
    // console.log("email Cambió");
  }, [email]);

  //   const handleInputChange = (e) => {
  //       console.log(e.target.name);
  //       console.log(e.target.value);
  //   };

  const handleInputChange = ({target}) => {
    // console.log(target.name);
    // console.log(target.value);
    setFormState({
        ...formState,
        [target.name]: target.value
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          id=""
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          id=""
          className="form-control"
          placeholder="email@email.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {(name === '123') && <Message/>}

    </>
  );
};
