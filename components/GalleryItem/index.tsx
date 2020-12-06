import Image from "next/image";
import { GalleryImageContainer } from "./styles";

interface GalleryItemProps {
  link: string;
  title: string;
}

export const GalleryItem = ({ link, title }: GalleryItemProps) => (
  <GalleryImageContainer>
    <Image src={link} width={500} height={500} objectFit="cover" />
    <span>{title}</span>
    <div className={"overlay"}></div>
  </GalleryImageContainer>
);
