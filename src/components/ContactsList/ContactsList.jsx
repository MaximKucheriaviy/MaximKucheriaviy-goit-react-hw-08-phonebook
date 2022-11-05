import { ContactList } from "./ContactsList.styled"
import PropTypes from "prop-types";


export const ContactsList = ({contacts, deleteContact}) => {
  return(
    <ContactList>
      {contacts.map(item => {
        return(
          <tr>
            <td>{item.name}:</td> 
            <td>{item.number}</td> 
            <td><button onClick={() => {deleteContact(item.id)}}>delete</button></td>
          </tr>
        )
      })}
    </ContactList>
  )
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    number: PropTypes.string,
  }))
}