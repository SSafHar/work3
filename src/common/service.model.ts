export interface Service {
  imageUrl: string;
  backgroundimageUrl: string;
  theme: string;
  title: string;
  description: string;
  price: number;
  tags: Tag[];
}

interface Tag {
  label: string;
  color: string;
}

export interface UserData {
  name: string;
  email: string;
  description: string;
  serviceTitle: string;
}
