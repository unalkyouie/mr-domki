export interface House {
  _id?: string;
  address: string;
  owner: string;
  price: string;
  area: string;
  __v?: number;
}

export interface Tile {
  title?: string;
  subTitle?: string;
  backgroundImage?: boolean;
  text?: string;
  button?: boolean;
  id: number;
}

export const tiles = [
  {
    title: 'kilka słów o nas',
    subTitle: 'czyli kim jesteśmy i dokąd zmierzamy',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    button: true,
    id: 1,
  },
  {
    text:
      'gdy stawałem się młodym człowiekiem cały czas słyszałem głos Dziadka mówiącego o domu przyjaźni i miłości. Cały czas obraz ten kojarzył mi się z drewnianym ciapłym Domem krytym strzechą. Domem, który żył, Domem, który miał duszę.',
    backgroundImage: true,
    id: 2,
  },
  {
    title:
      'budowa domow z drewna \n budowa bram wjazdowych \n wykończenia wnętrz \n altany ogrodowe \nkamienne elementy architektury \n remonty \n',
    backgroundImage: true,
    id: 3,
  },
  {
    title: 'nasza oferta',
    subTitle: 'dowiedz sie co mozemy ci zaoferowac',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    button: true,
    id: 4,
  },
];
