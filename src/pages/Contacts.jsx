import { StyledMain } from "./StyledPages"
import { AddNumberForm } from "components/AddNumberForm/AddNumberForm"
import { FindContactForm } from "components/FindContactForm/FindContactForm"


export const Contacts = () => {
    return <StyledMain>
        <div className="container">
            <h1>Електронний записник контактів</h1>
            <div className="contactLayout">
                <div>
                    <FindContactForm/>
                </div>
                <div className="formThumb">
                    <AddNumberForm/>
                </div>
            </div>
        </div>
    </StyledMain>
}