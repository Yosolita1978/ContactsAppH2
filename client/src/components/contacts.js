import { useState, useEffect } from "react";
import Form from "./form";
import Contact  from "./contact";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  const loadContacts = () => {
    fetch("http://localhost:8080/api/contacts")
      .then((response) => response.json())
      .then((contacts) => {
            setContacts(contacts);
          });
  }

  useEffect(() =>{
    loadContacts();
  }, []);

  const deleteContact = (contact) =>{
    return fetch(`http://localhost:8080/api/contacts/${contact.id}`, {
        method: "DELETE"
    }).then((response) =>{
        console.log(response);
        if(response.ok){
            loadContacts();
        }
    })
  }



  return (
    <div className="contacts">
        {contacts.map((contact) => (
     <Contact onDelete={deleteContact} contact={contact} key={contact.id}/>
        ))}
      <Form setContacts={(contacts) => {setContacts(contacts)}} />
    </div>
  );
}

export default Contacts;
