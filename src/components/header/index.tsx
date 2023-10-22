import styles from "./styles.module.scss";
import Logo from "../../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div className={styles.container}>
      <nav className={styles.content}>
        <Link href={"/"}>
          <div className={styles.logo}>
            <Image src={Logo} alt="Logo-pokemon" quality={100} />
          </div>
          <p className={styles.title}>Pokédex</p>
        </Link>
      </nav>
    </div>
  );
}
