import { StyledMain } from "./StyledPages"
import photo from "../imagers/contacts.png"

export const Main = () => {
    return <StyledMain>
       <h1>Електронний записник контактів</h1>
       <p className="subtitle">Створи свій власний записаник  контактів</p>
       <div className="about">
            <ul>
                <li>з будь-якого пристрою</li>
                <li>швидко та зручно</li>
                <li>завжди під рукою</li>
            </ul>
            <img src={photo} alt="notePad" />
       </div>
    </StyledMain>
}