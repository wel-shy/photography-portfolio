import { Container, Footer as ThemedFooter, TextLink } from "../../theme/";
import { Paragraph } from "../../theme/Text/index";

export const Footer = () => (
  <ThemedFooter>
    <Container>
      <Paragraph>
        By{" "}
        <TextLink
          href="https://dwelsh.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Daniel Welsh
        </TextLink>
        <br />
        All content and photographs © {new Date().getFullYear()} | Daniel Welsh
        Photography.
      </Paragraph>

      <Paragraph>
        Icons from{" "}
        <TextLink href="https://robbiepearce.com/softies/">
          Robbie Pierce - Softies
        </TextLink>
      </Paragraph>

      <Paragraph>
        The code for this site available on{" "}
        <TextLink href="https://github.com/wel-shy/photography-portfolio">
          GitHub
        </TextLink>{" "}
        if you want to use it as a basis for your own site.
      </Paragraph>
    </Container>
  </ThemedFooter>
);
