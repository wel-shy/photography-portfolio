import { Footer as ThemedFooter } from "../../theme/";
export const Footer = () => (
  <ThemedFooter>
    <p>
      By{" "}
      <a href="https://dwelsh.uk" target="_blank" rel="noopener noreferrer">
        Daniel Welsh
      </a>
      <br />
      All content and photographs © {new Date().getFullYear()} Daniel Welsh
      Photography.
    </p>
  </ThemedFooter>
);
