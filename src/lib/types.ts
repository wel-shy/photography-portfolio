export interface Exif {
  createdAt: Date | null;
  exposureTime: string | null;
  focalLength: number | null;
  fStop: number | null;
  ISO: number | null;
  make: string | null;
  model: string | null;
  title: string | null;
}

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
  CreateDate: Date | null;
}

export type ExifData = Omit<ExifResult, 'ExposureTime'> & {
  ExposureTime: string | null;
};

export type ImageExifLookup = Record<string, Exif | null>;
