import React, { useState, useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Ante de Nova",
    src: "showcase-01.jpg",
  },
  {
    title: "Salan luna",
    src: "showcase-02.jpg",
  },
  {
    title: "Nilion Sole",
    src: "showcase-03.jpg",
  },
  {
    title: "Zarino Zaro",
    src: "showcase-04.jpg",
  },
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      start: "top-=100px",
      end: document.body.offsetHeight - window.innerHeight - 50,
    });
  }, []);

  return (
    <div ref={container} className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image
            src={`/images/${projects[selectedProject].src}`}
            fill={true}
            alt={`${projects[selectedProject].title}`}
            priority={true}
          />
        </div>
        <div className={styles.column}>
          <p>
            Quality craftsmanship meets modern design. Each pair is meticulously
            crafted to elevate your confidence and enhance your individuality.
          </p>
        </div>
        <div className={styles.column}>
          <p>
            Indulge in opulence with our elite eyewear community. Experience the
            epitome of style and luxury through our prestigious brand. Your path
            to exquisite vision commences here. Unveil our exclusive collection,
            meticulously crafted to elevate your elegance and redefine
            sophistication. Embrace a world of prestige and make an impactful
            statement with our exclusive range of lavish sunglasses.
          </p>
        </div>
      </div>

      <div className={styles.projectList}>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => {
                setSelectedProject(index);
              }}
              className={styles.projectEl}
            >
              <h2>{project.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
