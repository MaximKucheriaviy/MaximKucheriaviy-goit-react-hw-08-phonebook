import axios from "axios";
axios.defaults.baseURL = "https://connections-api.herokuapp.com"


export class API{
    static loginUser = async reqest => {
        const response =  await axios({
            method: "post",
            url: `/users/login`,
            data: reqest,
        });
        return response;
    }
    static signUp = async (reqest) => {
        const response =  await axios({
            method: "post",
            url: `/users/signup`,
            data: reqest,
        });
        return response;
    }
    static getCurrentUser = async token => {
        const response =  await axios({
            method: "get",
            url: `/users/current`,
            headers: {'Authorization': token},
        });
        return response;
    }
    static createNewContact = async (token, name, number) => {
        const response =  await axios({
            method: "post",
            url: `/contacts`,
            headers: {'Authorization': token},
            data: {
                name,
                number
            }
        });
        return response;
    }
    static getContacts = async (token) => {
        const response =  await axios({
            method: "get",
            url: `/contacts`,
            headers: {'Authorization': token},
        });
        return response;
    }
    static deleteContact = async (token, id) => {
        const response =  await axios({
            method: "delete",
            url: `/contacts/${id}`,
            headers: {'Authorization': token},
        });
        return response;
    }
}

