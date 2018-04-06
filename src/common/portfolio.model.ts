export interface ProjectItem {
  id: string;
  organization_name: string;
  images: Image[];
  logoUrl: string;
  info: string;
  location: string;
  description: string;
  url: string;
  usedServicesLogoUrls: Image[];
  nextId?: string;
  previousId?: string;
}

export interface SlidableProject extends ProjectItem {
  nextId: string;
  previousId: string;
}

export type Animatable<T> = T & {
  animationState: string;
};

export interface Image {
  url: string;
}
