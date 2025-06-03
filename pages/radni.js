import React, { useState, useEffect, useRef } from 'react';
import styles from './vanilla.module.css';

function useWindowSize() {
  const [size, setSize] = useState([undefined, undefined]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

function Vanilla() {
  const [windowWidth, windowHeight] = useWindowSize();

  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
   
  ];

  const [isVisible, setIsVisible] = useState(Array(refs.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const newIsVisible = Array(refs.length).fill(false);

      refs.forEach((ref, index) => {
        const rect = ref.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        newIsVisible[index] = isVisible;
      });

      setIsVisible(newIsVisible);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [windowHeight]);

  return (
    <>
      <div className={styles.projectsContainer}>
        <div className={`${styles.projectsWrapper} ${isVisible[0] ? styles["is-visible"] : ""}`} ref={refs[0]}>
          <div className={styles.projects}>
            <strong>Kruk Halina Maria</strong>
            <p>radna Rady Osiedla Nowe Winogrady Północ, <b>Wiceprzewodnicząca Rady</b></p>
            <img src="/projects/kruk.PNG" className={styles.pImages} />
          </div>
        </div>

        <div className={`${styles.projectsWrapper} ${isVisible[1] ? styles["is-visible"] : ""}`} ref={refs[1]}>
          <div className={styles.projects}>
            <strong>Laskowski Stanisław</strong>
            <p>radny Rady Osiedla Nowe Winogrady Północ</p>
            <img src="/projects/laskowski.PNG" className={styles.pImages} />
          </div>
        </div>

        <div className={`${styles.projectsWrapper} ${isVisible[2] ? styles["is-visible"] : ""}`} ref={refs[2]}>
          <div className={styles.projects}>
            <strong>Lewandowski Paweł Jan</strong>
            <p>radny Rady Osiedla Nowe Winogrady Północ</p>
            <img src="/projects/lewandowski.PNG" className={styles.pImages} />
          </div>
        </div>

        <div className={`${styles.projectsWrapper} ${isVisible[3] ? styles["is-visible"] : ""}`} ref={refs[3]}>
          <div className={styles.projects}>
            <strong>Mateusz Otta</strong>
            <p>radny Rady Osiedla Nowe Winogrady Północ</p>
            <img src="/projects/otta.PNG" className={styles.pImages} />
          </div>
        </div>

        <div className={`${styles.projectsWrapper} ${isVisible[4] ? styles["is-visible"] : ""}`} ref={refs[4]}>
          <div className={styles.projects}>
            <strong>Paluszkiewicz Jacek</strong>
            <p>radny Rady Osiedla Nowe Winogrady Północ</p>
            <img src="/projects/paluszkiewicz.PNG" className={styles.pImages} />
          </div>
        </div>

        <div className={`${styles.projectsWrapper} ${isVisible[5] ? styles["is-visible"] : ""}`} ref={refs[5]}>
          <div className={styles.projects}>
            <strong>Sobkowiak Urszula</strong>
            <p>radna Rady Osiedla Nowe Winogrady Północ, <b>Wiceprzewodnicząca Rady</b></p>
            <img src="/projects/sobkowiak.PNG" className={styles.pImages} />
          </div>
        </div>

        <div className={`${styles.projectsWrapper} ${isVisible[6] ? styles["is-visible"] : ""}`} ref={refs[6]}>
          <div className={styles.projects}>
            <strong>Walkowiak Rafał Adam</strong>
            <p>radny Rady Osiedla Nowe Winogrady Północ, <b>Przewodniczący Rady</b></p>
            <img src="/projects/walkowiak.PNG" className={styles.pImages} />
          </div>
        </div>

        <div className={`${styles.projectsWrapper} ${isVisible[7] ? styles["is-visible"] : ""}`} ref={refs[7]}>
          <div className={styles.projects}>
            <strong>Wielgosz Małgorzata Grażyna</strong>
            <p>radna Rady Osiedla Nowe Winogrady Północ</p>
            <img src="/projects/wielgosz.PNG" className={styles.pImages} />
          </div>
        </div>

        <div className={`${styles.projectsWrapper} ${isVisible[8] ? styles["is-visible"] : ""}`} ref={refs[8]}>
          <div className={styles.projects}>
            <strong>Witczak Emil</strong>
            <p>radny Rady Osiedla Nowe Winogrady Północ</p>
            <img src="/projects/witczak.PNG" className={styles.pImages} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Vanilla;
