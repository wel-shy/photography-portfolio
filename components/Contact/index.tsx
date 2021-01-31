import React from "react";
import EmailIcon from "./email.svg";
import InstagramIcon from "./instagram.svg";
import { IconRow, IconLink } from "./styles";

export const Contact = () => (
  <div>
    <IconRow>
      <IconLink href="mailto:danjwelsh24@gmail.com?subject=Lets connect!">
        <EmailIcon />
      </IconLink>
      <IconLink href="https://www.instagram.com/wel__shy/">
        <InstagramIcon />
      </IconLink>
    </IconRow>
  </div>
);
