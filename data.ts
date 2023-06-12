import FotoXixilonaIBenet from "public/xixilona-i-benet.jpg";
import FotoCalendari from "public/calendari.png";
import FotoHistoria from "public/historia.jpg";
import FotoLaColla from "public/la-colla-home.jpg";
import {StaticImageData} from "next/dist/client/image";

export const pages: { title: string, route: string, isSelected: (route: string) => boolean, description?: string, image?: StaticImageData }[] = [
  {
    title: "Inici",
    route: "/",
    isSelected: (route: string) => route === "/"
  },
  {
    title: "Els gegants",
    route: "/els-gegants",
    isSelected: (route: string) => route === "/els-gegants",
    description: "Coneix a la Xixilona, en Magí, en Benet, en Garric, en Verdet i en Mussolet!",
    image: FotoXixilonaIBenet
  },
  {
    title: "Calendari",
    route: "/calendari",
    isSelected: (route: string) => route === "/calendari",
    description: "Informació de les properes sortides que faran els gegants durant l'any.",
    image: FotoCalendari
  },
  {
    title: "Història",
    route: "/historia",
    isSelected: (route: string) => route === "/historia",
    description: "Els nostres gegants han viscut una vida interessant durant més de 80 anys, coneix-la!",
    image: FotoHistoria
  },
  {
    title: "Racó geganter",
    route: "/la-colla",
    isSelected: (route: string) => racoGeganterPages.map(page => page.route as string).includes(route),
    description: "Curiositats de la colla, materials pels més petits...",
    image: FotoLaColla
  },
  {
    title: "Contacte",
    route: "/contacte",
    isSelected: (route: string) => route === "/contacte"
  }
];

export const racoGeganterPages: {
  name: string,
  route?: "/la-colla"
    | "/la-musica"
    | "/els-assajos"
    | "/pintables-de-gegants"
    | "/gegants-de-cartro"
    | "/mussolet-3d"
    | "/robots-geganters"
    | "/els-vestits"
    | "/les-disfresses"
    | "/records-trobades"
    | "/cartells-trobades"
    | "/catifes-corpus",
  indented?: boolean
}[] = [
  {
    name: "La colla",
    route: "/la-colla"
  },
  {
    name: "La música",
    route: "/la-musica"
  },
  {
    name: "Els assajos",
    route: "/els-assajos"
  },
  {
    name: "Pels més petits"
  },
  {
    name: "Pintables de gegants",
    route: "/pintables-de-gegants",
    indented: true
  },
  {
    name: "Gegants de cartró",
    route: "/gegants-de-cartro",
    indented: true
  },
  {
    name: "Mussolet 3D",
    route: "/mussolet-3d",
    indented: true
  },
  {
    name: "Robots geganters",
    route: "/robots-geganters",
    indented: true
  },
  /*{
    name: "Els vestits",
    route: "/els-vestits"
  },
  {
    name: "Les disfresses",
    route: "/les-disfresses"
  },
  {
    name: "Records de les trobades",
    route: "/records-trobades"
  },*/
  {
    name: "Cartells de les trobades",
    route: "/cartells-trobades"
  },
  {
    name: "Catifes de Corpus",
    route: "/catifes-corpus"
  },
];

export const instagramLink = "https://www.instagram.com/gegantsdelagarriga/";
export const twitterLink = "https://twitter.com/gegantsgarriga/";
export const blogLink = "https://gegantsdelagarriga.blogspot.com/";
