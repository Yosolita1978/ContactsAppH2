import { useState, useEffect } from "react";

const EditForm = (props) =>{


    const [editedContact, setEditedContact] = useState({});

    useEffect(()=>{
        if(props.editedContact){setEditedContact(props.editedContact)}}, [props.editedContact])

    //create functions that handle the event of the user typing into the form
  const handleNameChange = (event) => {
    const newContactName = event.target.value;
    setEditedContact((contact) => ({ ...contact, name: newContactName }));
  };

  const handleEmailChange = (event) => {
    const newcontactEmail = event.target.value;
    setEditedContact((contact) => ({ ...contact, email: newcontactEmail }));
  };

  const handlePhoneChange = (event) => {
    const newcontactPhone = event.target.value;
    setEditedContact((contact) => ({ ...contact, phoneNumber: newcontactPhone }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdate(editedContact);
    console.log("Inside edit Form", editedContact);

  };

    return(
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>Name:</label>
            <input
              type="text"
              placeholder="Contact Name"
              required
              value={editedContact.name}
              onChange={handleNameChange}
            />
            <label>Email:</label>
            <input
              type="email"
              placeholder="Contact Email"
              required
              value={editedContact.email}
              onChange={handleEmailChange}
            />
            <label>Phone:</label>
            <input
              type="tel"
              placeholder="Contact Phone"
              value={editedContact.phoneNumber}
              onChange={handlePhoneChange}
            />
            <button className="submit" type="submit">Edit Contact</button>
          </fieldset>   
        </form>
      );
};

export default EditForm;