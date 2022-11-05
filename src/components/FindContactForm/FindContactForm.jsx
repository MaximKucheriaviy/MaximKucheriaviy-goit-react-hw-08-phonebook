import { useRef } from "react"
import { nanoid } from "nanoid";
import { VerticalForm } from "./FindContactForm.styled"
import PropTypes from "prop-types";

export const FindContactForm = ({setFilter}) => {
    const nameId = useRef(nanoid());

    const chageHendler = (event) => {
        const {value} = event.target;
        setFilter(value);
    }

    return(
        <VerticalForm onSubmit={event => event.preventDefault()}>
            <input 
                id={nameId.current}
                type="text" 
                name="name"
                onChange={chageHendler}
                autoComplete="off"
            />
        </VerticalForm>
    )
}





FindContactForm.propTypes = {
    filterChage: PropTypes.func
}