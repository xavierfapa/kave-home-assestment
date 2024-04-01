import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import Like from "@/components/Like/Like";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          width={25}
          height={25}
          className={styles.logo}
          alt="logo"
          src="/logo_Kave_Home.svg"
        />
      </Link>
      <Link href="/favoritos">
        <Like />
      </Link>
    </header>
  );
}

export default Header;
