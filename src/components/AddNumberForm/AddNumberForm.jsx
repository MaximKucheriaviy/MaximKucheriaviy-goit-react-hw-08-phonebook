import { nanoid } from "nanoid";
import { useState, useRef } from "react";
import { API } from "service/api";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export const AddNumberForm = ({createContact}) => {
    const nameInputId = useRef(nanoid());
    const telephoneInputId = useRef(nanoid());
    

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const chageHendler = (event) => {
        const {value, name} = event.target;
        switch(name){
            case "name":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break;
            default:
                return;
        }
    }

    const clearForm = () => {
        setName("");
        setNumber("");
    }

    const onSubmitHendler = (event) =>{
        event.preventDefault();
        createContact(name, number);
        clearForm();
    }

    return(
        <form className="userForm" onSubmit={onSubmitHendler}>
            <label className="topLabel" htmlFor={nameInputId.current}>Name</label>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                id={nameInputId.current}
                required
                onChange={chageHendler}
                value={name}
            /> 
            <br />
            <label htmlFor={telephoneInputId.current}>Telephone</label>  
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={chageHendler}
                value={number}
                id={telephoneInputId.current}
            />
            <br />
            <button type="submit" disabled={name === "" || number === ""}>Add contact</button>
        </form>
    )
}

AddNumberForm.propTypes = {
    onSubmit: PropTypes.func
}