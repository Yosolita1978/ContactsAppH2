import { useState, useEffect } from "react";
import Form from "./form";
import Contact  from "./contact";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/contacts")
      .then((response) => response.json())
      .then((contacts) => {
            setContacts(contacts);
          });
  }, []);

  const addContact = (newContact) => {
    setContacts((contacts) => [...contacts, newContact]);
  };

  return (
    <div className="contacts">
        {contacts.map((contact) => (
     <Contact contact={contact} key={contact.id}/>
        ))}
      <Form addContact={addContact} />
    </div>
  );
}

export default Contacts;
