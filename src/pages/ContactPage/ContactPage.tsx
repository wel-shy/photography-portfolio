import styled from "styled-components"
import BasePage from "../../components/BasePage/BasePage"

const ContactLink = styled.div`
    cursor: pointer;
    margin-bottom: 1em;
`

const ContactPage = () => {
    return (
    <BasePage>
        <h1>Contact</h1>
        <ContactLink><a target="_blank" href="https://www.instagram.com/wel__shy/"  rel="noreferrer">Instagram</a></ContactLink>
        <ContactLink><a target="_blank" href="mailto:photography@welshy.net" rel="noreferrer">Email</a></ContactLink>
        <ContactLink><a target="_blank" href="https://bsky.app/profile/wel-shy.bsky.social"  rel="noreferrer">BlueSky</a></ContactLink>
    </BasePage>)
}

export default ContactPage