import { ReactNode } from "react"
import NavBar from "../NavBar"

interface Props {
    children: ReactNode
}

const BasePage = ({children}: Props) => {
    return <article>
        <NavBar LeftDetail={<div></div>}/>
        {children}
    </article>
}

export default BasePage