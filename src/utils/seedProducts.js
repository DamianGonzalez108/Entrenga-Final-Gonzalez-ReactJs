import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";


const products = [
    {
        id: "1",
        price: 5000,
        name: "Fifa 2024",
        image: "/fifa24.jpg",
        description: "EA Sports FC 24 es un videojuego de simulación con temática de fútbol de asociación desarrollado porDE Vancouvery EA Rumania y publicado por EA Sports . Es la entrega inaugural de la serie EA Sports FC, que sucede a la serie de videojuegos FIFA después de que la asociación de Electronic Arts con FIFA concluyera con FIFA 23.",
        stock: 20,
        category:"deportes"
      },
      {
        id: "2",
        price: 2000,
        name: "NBA24",
        image: "/nba24.jpg",
        description: "Reúne a tu equipo y experimenta el pasado, presente y futuro de la cultura del baloncesto en NBA 2K24 . Disfruta de un montón de acción pura y pura y de opciones ilimitadas y personalizadas de Mi JUGADOR en Mi CARRERA. Reúne una impresionante variedad de leyendas y crea tu alineación perfecta en Mi EQUIPO.",
        stock: 20,
        category:"deportes"
      },
      {
        id: "3",
        price: 4500,
        name: "Call of Duty",
        image: "/callofduty.jpg",
        description: "Call of Duty es una serie de videojuegos de disparos en primera persona, de estilo bélico, desarrollada principal e inicialmente por Infinity Ward, Treyarch, Sledgehammer Games y en menor proporción Raven Software y distribuida por Activision.",
        stock: 20,
        category:"shooter"
      },
      {
        id: "4",
        price: 12000,
        name: "Counter-Stike GO",
        image: "/csgo.jpg",
        description: "Dos equipos de cinco compiten en un enfrentamiento al mejor de 30 rondas usando las reglas estándares competitivas de Counter-Strike. Los jugadores deben comprar armaduras, armas, equipos de desactivación o rescate y administrar su economía en el juego para maximizar sus posibilidades de éxito.",
        stock: 20,
        category:"shooter"
      },
      {
        id: "5",
        price: 9000,
        name: "The Witcher",
        image: "/thewitcher.jpg",
        description: "Se basa en la Saga de Geralt de Rivia del escritor polaco Andrzej Sapkowski. Ubicada en un mundo medieval en una masa de tierra conocida como el Continente, The Witcher explora la leyenda de Geralt de Rivia y la princesa Ciri, que están unidos el uno al otro por el destino.",
        stock: 20,
        category:"suspense"
      },
      {
        id: "6",
        price: 2880,
        name: "The Last Of Us",
        image: "/thelastofus.jpg",
        description: "La trama describe las vivencias de Joel y Ellie, un par de supervivientes de una pandemia en Estados Unidos que provoca la mutación de los seres humanos en criaturas caníbales.",
        stock: 20,
        category:"suspense"
      },
      {
        id: "7",
        price: 8300,
        name: "Fornite",
        image: "/fornite.jpg",
        description: "Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games lanzado como diferentes paquetes de software que presentan seis diferentes modos de juego, pero que comparten el mismo motor de juego y mecánicas. Fue anunciado en los premios Spike Video Game Awards en 2011.",
        stock: 20,
        category:"shooter"
      },
]


const seedProducts = () => {
  products.map(({ id, ...rest }) =>{
    addDoc(collection(db, "products"), rest)
  });
}
seedProducts()