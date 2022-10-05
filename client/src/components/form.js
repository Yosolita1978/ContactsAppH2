import { useState } from "react";

const Form = (props) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneNumber: ""
  });

  //create functions that handle the event of the user typing into the form
  const handleNameChange = (event) => {
    const newContactName = event.target.value;
    setContact((contact) => ({ ...contact, newContactName }));
  };

  const handleEmailChange = (event) => {
    const newcontactEmail = event.target.value;
    setContact((contact) => ({ ...contact, newcontactEmail }));
  };

  const handlePhoneChange = (event) => {
    const newcontactPhone = event.target.value;
    setContact((contact) => ({ ...contact, newcontactPhone }));
  };

  //A function to handle the post request
  // const postStudent = (newStudent) => {
  //   return fetch("http://localhost:5000/api/students", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newStudent),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("From the post ", data);
  //       props.addStudent(data);
  //     });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    //postStudent(student);
    console.log(contact);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>Name:</label>
        <input
          type="text"
          id="add-contact-name"
          placeholder="Contact Name"
          required
          value={contact.name}
          onChange={handleNameChange}
        />
        <label>Email:</label>
        <input
          type="email"
          id="add-contact-email"
          placeholder="Contact Email"
          required
          value={contact.email}
          onChange={handleEmailChange}
        />
        <label>Phone:</label>
        <input
          type="text"
          id="add-contact-phone"
          placeholder="Contact Phone"
          value={contact.phoneNumber}
          onChange={handlePhoneChange}
        />
        <button className="submit" type="submit">Add Contact</button>
      </fieldset>   
    </form>
  );
};

export default Form;
