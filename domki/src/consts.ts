export interface House {
  _id?: string;
  address: string;
  owner: string;
  price: string;
  area: string;
  __v?: number;
}

export interface Tile {
  title: string;
  subTitle?: string;
  backgroundImage?: string;
  text?: string;
  button?: boolean;
  id: number;
}

export const tiles = [
  {
    title: 'kilka słów o nas',
    subTitle: 'czyli kim jesteśmy i dokąd zmierzamy',
    text: 'lorem ipsum',
    button: true,
    id: 1,
  },
  {
    title: 'kilka słów o nas',
    backgroundImage: '',
    id: 2,
  },
  {
    title: 'kilka słów o nas',
    backgroundImage: '',
    id: 3,
  },
  {
    title: 'nasza oferta',
    subTitle: 'dowiedz sie co mozemy ci zaoferowac',
    text: 'lorem ipsum',
    button: true,
    id: 4,
  },
];
