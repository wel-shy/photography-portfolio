import {
  Container,
  Paragraph,
  Title,
  Subtitle,
  HorizontalRule,
} from "../../theme/";
import { Contact } from "../Contact";
import { CircleImage, ContentWrapper } from "./styles";

export const Header = () => (
  <Container>
    <ContentWrapper>
      <CircleImage src="/profile.jpeg" height="250" width="250" />
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
    <HorizontalRule />
  </Container>
);
