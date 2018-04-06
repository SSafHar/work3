export interface CompanyLocation {
  organization_name: string;
  country: string;
  imageUrl: string;
  city: string;
  province?: string;
  index: string;
  street: string;
  building: number;
  email: string;
  phone: number;
  coordinates: Coordinates;
}
export interface Coordinates {
  lat: number;
  lng: number;
}
