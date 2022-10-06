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
    setContact((contact) => ({ ...contact, name: newContactName }));
  };

  const handleEmailChange = (event) => {
    const newcontactEmail = event.target.value;
    setContact((contact) => ({ ...contact, email: newcontactEmail }));
  };

  const handlePhoneChange = (event) => {
    const newcontactPhone = event.target.value;
    setContact((contact) => ({ ...contact, phoneNumber: newcontactPhone }));
  };

  //A function to handle the post request
  const postContact = (newContact) => {
    return fetch("http://localhost:8080/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From the post ", data); // this is all the contacts
        props.setContacts(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postContact(contact);
    console.log(contact);
    setContact({
      name: "",
      email: "",
      phoneNumber: ""
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Contact Name"
          required
          value={contact.name}
          onChange={handleNameChange}
        />
        <label>Email:</label>
        <input
          type="email"
          placeholder="Contact Email"
          required
          value={contact.email}
          onChange={handleEmailChange}
        />
        <label>Phone:</label>
        <input
          type="tel"
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
