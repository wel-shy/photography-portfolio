/** The location fields of the image's metadata, as entered in Lightroom */
export interface Location {
  sublocation: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
}

export interface Exif {
  createdAt: string | null;
  /** In seconds */
  exposureTime: number | null;
  focalLength: number | null;
  fStop: number | null;
  ISO: number | null;
  make: string | null;
  model: string | null;
  title: string | null;
  caption: string | null;
  location: Location | null;
}

export interface Image {
  url: string;
  thumbnailUrl: string;
  id: string;
  /** When the image file last changed, in UTC */
  modifiedAt: string | null;
  exif: Exif | null;
}

export interface Collection {
  id: string;
  title: string;
  images: Image[];
}

export interface ManifestImage {
  id: string;
  /** Key of the full size image, e.g. portfolio/Cityscapes/1.jpg */
  key: string;
  /** Key of its thumbnail, when one has been uploaded */
  thumbnailKey: string | null;
  /** Missing from manifests written before this was added */
  modifiedAt?: string | null;
  exif: Exif | null;
}

export interface ManifestCollection {
  id: string;
  title: string;
  images: ManifestImage[];
}

/** Written to the CDN alongside the images whenever they are synced */
export interface Manifest {
  collections: ManifestCollection[];
}
