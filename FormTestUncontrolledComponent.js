import React, { useRef } from "react";

const FormTestUncontrolledComponent = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" ref={nameRef} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" ref={emailRef} />
      </div>
      <div>
        <label>Message:</label>
        <textarea ref={messageRef}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormTestUncontrolledComponent;
