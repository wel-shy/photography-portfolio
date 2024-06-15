export interface Image {
  url: string;
  title?: string;
  description?: string;
  id: string;
}

export interface Collection {
  id: string;
  title: string;
  images: Image[];
}
