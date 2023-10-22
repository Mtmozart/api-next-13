import "../styles/global.scss";
import styles from "../styles/styles.module.scss";
import Pokedex from "@/components/pokedex";
export default function Home() {
  return (
    <main className={styles.container}>
      <Pokedex />
    </main>
  );
}
