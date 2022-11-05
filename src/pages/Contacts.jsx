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
    }, [token]);

    

    const createContact = async (name, number) => {
        if(contacts.some(item => item.name.toLowerCase() === name.toLowerCase() || !name || !number)){;
            return;
        }
        try{
            const response = await API.createNewContact(token, name, number);
            setContacts(prev => [...prev, response.data])
        }
        catch(err){
            console.log(err);
        }
    }

    const deleteContact = async (id) => {
        setContacts(prev => prev.filter(item => item.id !== id));
        try{
            await API.deleteContact(token, id);
        }
        catch(err){
            console.log(err);
        }
    }


    return <StyledMain>
        <div className="container">
            <h1>Електронний записник контактів</h1>
            <div className="contactLayout">
                <div>
                    <FindContactForm />
                    <ContactsList contacts={contacts} deleteContact={deleteContact}/>
                </div>
                <div className="formThumb">
                    <AddNumberForm createContact={createContact}/>
                </div>
            </div>
        </div>
    </StyledMain>
}