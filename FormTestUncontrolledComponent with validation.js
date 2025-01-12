import React, { useRef, useState } from "react";

const FormWithUseRef = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!nameRef.current.value.trim()) {
      newErrors.name = "Name is required";
    }

    if (!emailRef.current.value.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
      newErrors.email = "Email is invalid";
    }

    if (!passwordRef.current.value.trim()) {
      newErrors.password = "Password is required";
    } else if (passwordRef.current.value.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({}); // Reset errors

    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      console.log("Form submitted successfully", {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      // Simulate a submit action
      setTimeout(() => setIsSubmitting(false), 1000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <h2>React Form Validation with useRef</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={nameRef} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" ref={emailRef} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default FormWithUseRef;
