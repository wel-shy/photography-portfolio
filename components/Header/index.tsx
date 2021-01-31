import { Container, Paragraph, Title, Subtitle } from "../../theme/";
import { Contact } from "../Contact";
import { CircleImage, ContentWrapper } from "./styles";

export const Header = () => (
  <Container>
    <ContentWrapper>
      <CircleImage src="/profile.jpeg" height="350" width="350" />
      <div>
        <Title>Daniel Welsh</Title>
        <Subtitle>Photography</Subtitle>
        <Paragraph>
          I'm an amateur photographer based in Stockholm, Sweden. Passionate
          about landscapes and cityscapes.
          <br />
          Get in touch if you like what you see!
        </Paragraph>
        <Contact />
      </div>
    </ContentWrapper>
    <hr />
  </Container>
);
