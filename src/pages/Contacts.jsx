import { StyledMain } from "./StyledPages"
import { AddNumberForm } from "components/AddNumberForm/AddNumberForm"
import { FindContactForm } from "components/FindContactForm/FindContactForm"
import { ContactsList } from "components/ContactsList/ContactsList"
import { API } from "service/api"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"


export const Contacts = () => {
    const token = useSelector(state => state.userToken.token);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        async function getContacts(){
            try{
                const response = await API.getContacts(token);
                setContacts(response.data);
            }
            catch(err){
                console.log(err);
            }
        }
        getContacts(token);
    }, []);

    const createContact = () => {

    }


    return <StyledMain>
        <div className="container">
            <h1>Електронний записник контактів</h1>
            <div className="contactLayout">
                <div>
                    <FindContactForm createContact={createContact}/>
                    <ContactsList contacts={contacts}/>
                </div>
                <div className="formThumb">
                    <AddNumberForm/>
                </div>
            </div>
        </div>
    </StyledMain>
}