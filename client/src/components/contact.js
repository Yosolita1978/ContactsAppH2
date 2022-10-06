import "../App.css";
import placeholderImg from '../assets/placeholder_user.png';


const Contact = (props) =>{

    const onEdit = () =>{
        //console.log("inside the edit", props)
        props.onEdit(props.contact);
    }
    
    const onDelete = () =>{
        //console.log("Inside contact");
        props.onDelete(props.contact);
    }

    const contactCard = (<div id="container">
    <div className="card">
    <div className="top">
      <h2 className="name">{props.contact.name}</h2>
  <img className="circle-img" src={placeholderImg} alt="avatar_img" />
</div>
<div className="bottom">
<p className="info">{props.contact.email}</p>
<p className="info">{props.contact.phoneNumber}</p>
  </div>
  <button className="edit" onClick={onEdit}>Edit</button>
  <button className="delete" onClick={onDelete}>Delete</button>
</div>
</div>)

    return (
        <div>
           { contactCard }
        </div>
    )
        
};

export default Contact