import { useState } from "react";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsletter: true,
  });

  // event.target -> target represents an element that was modified in the event
  // normally we would use [name]: value (as all our inputs have a "value" property, but we have a checkbox with a property of "checked", thus we first need to check if the type is a checkbox)
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  //console.log(formData);

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.password === formData.passwordConfirm) {
      alert("Successfully signed up");
    } else {
      alert("Passwords do not match");
      // we add a return statement below so that the code below never runs if the passwords do not match
      return;
    }

    if (formData.joinedNewsletter) {
      alert("Thanks for signing up for our newsletter!");
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          // adding a "value" property to our inputs so that they become a controlled element/controlled input
          value={formData.email}
        />

        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />

        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="passwordConfirm"
          onChange={handleChange}
          value={formData.passwordConfirm}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="joinedNewsletter"
            onChange={handleChange}
            // checkboxes don't have a "value" property, they have a "checked" property instead
            checked={formData.joinedNewsletter}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
