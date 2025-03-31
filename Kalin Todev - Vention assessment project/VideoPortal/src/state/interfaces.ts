interface Item {
  id: number;
  name: string;
}

export enum Genre {
  Any = "ANY",
  Action = "ACTION",
  Comedy = "COMEDY",
  Thriler = "THRILLER",
  Horror = "HORROR",
  SciFi = "SCIFI",
  Romance = "ROMANCE",
  Drama = "DRAMA",
}

export interface Movie extends Item {
  genre?: Genre;
  rating?: number;
  thumbnailURL?: string;
  favorite?: boolean;
  watched?: boolean;
  shortDescription?: string;
}

export interface MovieDetails  {
  previewURL?: string;
  description: string;
  actors: string;
}

// Note, this interface is dedicated to the "Actions" type of components.
export interface MovieActionsProps {
  id: number;
  favorite?: boolean | undefined;
}
