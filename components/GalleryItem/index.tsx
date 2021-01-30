import Image from "next/image";
import { GalleryImageContainer } from "./styles";
import Link from "next/link";

interface GalleryItemProps {
  link: string;
  title: string;
  id: string;
}

export const GalleryItem = ({ link, title, id }: GalleryItemProps) => (
  <GalleryImageContainer>
    <Link href={`/gallery/${id}`}>
      <a>
        <Image src={link} width={500} height={500} objectFit="cover" />
        <span>{title}</span>
        <div className={"overlay"}></div>
      </a>
    </Link>
  </GalleryImageContainer>
);
