"sever side";
import Image from "next/image";
import PokedexImage from "../../../public/images/pokedex.png";
import styles from "./styles.module.scss";

export default async function Pokedex() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
  const data = await response.json();

  return (
    <section className={styles.container}>
      <Image src={PokedexImage} alt="pokedex-image" />
    </section>
  );
}
