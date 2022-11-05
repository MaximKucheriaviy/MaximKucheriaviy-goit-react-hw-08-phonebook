export const filterContacts = (contacts, filter) => {
    if(!filter){
        return contacts;
    };
    const result = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
    return result;
}