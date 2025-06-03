import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
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

function ReactNext() {
  const [windowWidth, windowHeight] = useWindowSize();

  const refs = [
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
            <strong>Lawiński Kacper</strong>
            <p>członek Zarządu</p>
            <img src="/projects/lawinski.PNG" className={styles.pImages} />
          </div>
        </div>

        <div className={`${styles.projectsWrapper} ${isVisible[1] ? styles["is-visible"] : ""}`} ref={refs[1]}>
          <div className={styles.projects}>
            <strong>Lewandowski Paweł Jan</strong>
            <p>członek Zarządu</p>
            <img src="/projects/lewandowski.PNG" className={styles.pImages} />
          </div>
        </div>

        <div className={`${styles.projectsWrapper} ${isVisible[2] ? styles["is-visible"] : ""}`} ref={refs[2]}>
          <div className={styles.projects}>
            <strong>Otta Mateusz</strong>
            <p>Przewodniczący Zarządu Osiedla</p>
            <img src="/projects/otta.PNG" className={styles.pImages} />
          </div>
        </div>
        <div className={`${styles.projectsWrapper} ${isVisible[3] ? styles["is-visible"] : ""}`} ref={refs[3]}>
          <div className={styles.projects}>
            <strong>Paluszkiewicz Jacek</strong>
            <p>Wiceprzewodniczący Zarządu Osiedla</p>
            <img src="/projects/paluszkiewicz.PNG" className={styles.pImages} />
          </div>
        </div>
        <div className={`${styles.projectsWrapper} ${isVisible[4] ? styles["is-visible"] : ""}`} ref={refs[4]}>
          <div className={styles.projects}>
            <strong>Wielgosz Małgorzata Grażyna</strong>
            <p>Wiceprzewodnicząca Zarządu Osiedla</p>
            <img src="/projects/wielgosz.PNG" className={styles.pImages} />
          </div>
        </div>





      
      
      </div>


      
    </>
  );
}




export default ReactNext