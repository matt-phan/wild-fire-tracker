interface Categories {
  id: number;
  title: string;
}

interface Sources {
  id: string;
  url: string;
}

interface Geometries {
  date: string;
  type: string;
  coordinates: number[];
}

export interface Event {
  id: string;
  title: string;
  link: string;
  categories: Categories[];
  sources: Sources[];
  geometries: Geometries[];
}

export interface NaturalDisasters {
  title: string;
  description: string;
  link: string;
  events: Event[];
}
