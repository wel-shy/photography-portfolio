export interface Image {
  url: string;
  title?: string;
  description?: string;
  id: string;
  exif: Exif | null;
}

export interface Collection {
  id: string;
  title: string;
  images: Image[];
}

export interface ExifResult {
  DateTimeOriginal: Date | null;
  ExposureTime: number;
  FNumber: number | null;
  FocalLength: number | null;
  ISO: number | null;
  LensModel: string | null;
  Make: string | null;
  Model: string | null;
  ObjectName: string | null;
}

export type ExifData = Omit<ExifResult, "ExposureTime"> & {
  ExposureTime: string | null;
};

export interface Exif {
  title: string | null;
  exposureTime: string | null;
  fStop: number | null;
  ISO: number | null;
  model: string | null;
  focalLength: number | null;
}
