import Image from "next/image";
import PokedexImage from "../../../public/images/pokedex.png";
import styles from "./styles.module.scss";
export default function Pokedex() {
  return (
    <section className={styles.container}>
      <Image src={PokedexImage} alt="pokedex-image" />
    </section>
  );
}
