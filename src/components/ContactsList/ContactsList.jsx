import { ContactList } from "./ContactsList.styled"
import PropTypes from "prop-types";


export const ContactsList = ({contacts, deleteContact}) => {
  return(
    <ContactList>
        <tbody>
          {contacts.map(item => {
            return(
              <tr key={item.id}>
                <td>{item.name}:</td> 
                <td>{item.number}</td> 
                <td><button onClick={() => {deleteContact(item.id)}}>delete</button></td>
              </tr>
            )
          })}
        </tbody>
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