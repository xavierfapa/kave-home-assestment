"use client";
import { useEffect, useState } from "react";
import styles from "./mainimage.module.css";
import Image from "next/image";

function MainImage() {
  // const userAgent =
  //   typeof window === "undefined" ? "" : window.navigator.userAgent;
  // const isMobile =
  //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  //     userAgent
  //   );
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.mainImgContainer}>
      <Image
        className={styles.mainImage}
        width={500}
        height={600}
        alt=""
        // src="/home_mobile.png"
        src={isMobile ? "/home_mobile.png" : "/home_desktop.png"}
      />
      <h1 className={styles.title}>
        Cuando la realidad<br className={styles.br}></br> supera la ficción.
        <br></br> Trucos para estar en
        <br className={styles.br}></br> casa.
      </h1>
    </div>
  );
}

export default MainImage;
