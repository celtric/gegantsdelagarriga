import FotoXixilonaIBenet from "public/xixilona-i-benet.jpg";
import FotoCalendari from "public/calendari.png";
import FotoHistoria from "public/historia.jpg";
import FotoLaColla from "public/la-colla-home.jpg";

export const pages = [
  {
    title: "Inici",
    route: "/"
  },
  {
    title: "Els gegants",
    route: "/els-gegants",
    description: "Coneix a la Xixilona, en Magí, en Benet, en Garric, en Verdet i en Mussolet!",
    image: FotoXixilonaIBenet
  },
  {
    title: "Calendari",
    route: "/calendari",
    description: "Informació de les properes sortides que faran els gegants durant l'any.",
    image: FotoCalendari
  },
  {
    title: "Història",
    route: "/historia",
    description: "Els nostres gegants han viscut una vida interessant durant més de 80 anys, coneix-la!",
    image: FotoHistoria
  },
  {
    title: "La colla",
    route: "/la-colla",
    description: "Curiositats de la colla, materials pels més petits...",
    image: FotoLaColla
  },
  {
    title: "Contacte",
    route: "/contacte"
  }
];

export const instagramLink = "https://www.instagram.com/gegantsdelagarriga/";
export const twitterLink = "https://twitter.com/gegantsgarriga/";
export const blogLink = "https://gegantsdelagarriga.blogspot.com/";
